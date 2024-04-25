import re
import sqlite3
from aiohttp import web, ClientSession, ClientTimeout
from pyppeteer import launch
import asyncio
import time
import warnings
import logging
import datetime
import bs4
import logging
import json
from urllib.parse import quote
from dotenv import load_dotenv
from os import getenv

load_dotenv()

IS_ENCRYPTED = False

warnings.filterwarnings("ignore")
logging.getLogger('pyppeteer').setLevel(logging.WARNING)
logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')

LOG = logging.getLogger("main")

browser = None
PORT = int(getenv("PORT", 801))

async def resolve_hash(request):
    if not IS_ENCRYPTED:
        async with ClientSession(timeout=ClientTimeout(total=10)) as session:
            req = await session.get("https://megacloud.tv/embed-1/ajax/e-1/getSources?id={}".format(request.match_info['id']),
                                    headers={"Referer": "https://megacloud.tv/embed-1/e-1/8G2ykDEjrCkq?z=",
                                             "X-Requested-With": "XMLHttpRequest"})
            content = await req.json()
            if content:
                content["status"] = 200
                content["id"] = request.match_info['id']
                try:
                    content["file"] = content["sources"][0]["file"]
                except:
                    pass
                
                return web.json_response({
                    "status": 200,
                    "id": request.match_info['id'],
                    "file": content["file"],
                })
            return web.Response(text="{\"error\": \"No sources found\"}", status=404)

    query_id = request.match_info['id']
    if query_id == "" or query_id == "favicon.ico":
        return web.Response(text="Invalid request, please provide a valid hash", status=400)
    t = time.time()

    pages = await browser.pages()
    page = pages[0]

    await page.setExtraHTTPHeaders({'Referer': 'https://megacloud.tv/embed-1/e-1/8G2ykDEjrCkq?z='})
    await page.setRequestInterception(True)

    @page.on('request')
    def intercept(request):
        if "e1-player" in request.url:
            asyncio.ensure_future(modify_request(request))
        elif "/getSources" in request.url:
            asyncio.ensure_future(get_src_request(request))
        else:
            asyncio.ensure_future(request.continue_())

    await page.goto(f'https://megacloud.tv/embed-1/e-1/{query_id}?z=')
    await page.waitForSelector('.product', {'timeout': 10000})
    content = await page.content()

    MAX_RETRIES = 4
    retries = 0
    while '[]' in content and retries < MAX_RETRIES:
        await asyncio.sleep(1)
        LOG.warning("Retrying request for {}".format(query_id))
        retries += 1
        await page.reload()
        await page.waitForSelector('.product', {'timeout': 10000})
        content = await page.content()

    await page.close()

    try:
        content = json.loads(content.split('<pre>')[
            1].split('</pre>')[0])
        if len(content) > 0:
            content[0]["time_taken"] = "{:.2f}s".format(time.time() - t)
            content[0]["status"] = 200
            content[0]["id"] = query_id
            content = content[0]
        else:
            content = {
                "status": 503,
                "id": query_id,
                "time_taken": "{:.2f}s".format(time.time() - t),
                "malformed_response": content
            }
    except:
        return web.Response(text="{\"error\": \"An error occurred while parsing the response\"}", status=500)
    return web.json_response(content)


async def modify_request(request):

    # _start_time = time.time()
    # _timestamp = request.url.split("v=")[1].replace(".", "")

    # if (await get_last_timestamp()) < int(_timestamp): # v1

    #     await set_last_timestamp(int(_timestamp))

    #     with open("e-min.js", "wb") as file:
    #         print("Downloading JS-{}...".format(_timestamp))
    #         async with ClientSession(timeout=ClientTimeout(total=10)) as session:
    #             resp = await session.get(request.url)
    #             file.write(await resp.read())

    #     await _decode_js()
    #     await _adjust_js()

    #     LOG.info("JS-{} decoded and adjusted in {} seconds.".format(await get_last_timestamp(), time.time() - _start_time))

    with open("e-sim.js", "rb") as file:
        js = file.read()
        await request.respond({
            'status': 200,
            'contentType': 'application/javascript',
            'body': js
        })


async def get_src_request(request):
    async with ClientSession(timeout=ClientTimeout(total=10)) as session:
        # NOT USED, deprecated v1
        req = await session.get("http://localhost:3004/getSources?id={}".format(request.url.split("id=")[1]))
        content = await req.text()

        print(content)
        await request.respond({
            'status': 200,
            'contentType': 'application/json',
            'body': content
        })

        print("Sent response")

        return


async def req_write_to_console(request):
    # if option: sent cors headers
    if request.method == "OPTIONS":
        return web.Response(headers={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
        })

    print("Received request: ", await request.text())


# ----------------- DB.py -----------------

LOG = logging.getLogger("js")

# -------------- Database --------------


def connect_to_database():
    connection = sqlite3.connect("data.db")
    cursor = connection.cursor()

    cursor.execute('''CREATE TABLE IF NOT EXISTS timestamps (
                        id INTEGER PRIMARY KEY,
                        timestamp INTEGER
                    )''')
    connection.commit()

    return connection, cursor


async def get_last_timestamp():
    connection, cursor = connect_to_database()
    cursor.execute('SELECT timestamp FROM timestamps')
    row = cursor.fetchone()
    connection.close()
    if row:
        return row[0]
    return 0


async def set_last_timestamp(timestamp):
    connection, cursor = connect_to_database()
    cursor.execute('DELETE FROM timestamps')
    cursor.execute(
        'INSERT INTO timestamps (timestamp) VALUES (?)', (timestamp,))
    connection.commit()
    connection.close()

# -------------- JS Manipulation --------------


async def _decode_js():
    command = "webcrack e-min.js > e-sim.js"

    import sys
    if sys.platform == "win32":
        command = "webcrack e-min.js > e-sim.js"
        proc = await asyncio.create_subprocess_shell(
            command,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
        )
    else:
        command = "sudo " + command
        proc = await asyncio.create_subprocess_shell(
            f"bash -c \"{command}\"",
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
        )
    await proc.communicate()
    LOG.info("JS-{} decoded.".format(await get_last_timestamp()))


async def _adjust_js():
    with open("e-sim.js", "r") as file:
        js = file.read()

    pattern = r'if \(!(\w+)\.match\("playstation\|xbox\|smart-tv\|smarttv"\) && \1\.mobile\(\) === null\) {\s+devtoolsDetector\.addListener\(function \((\w+)\) {\s+if \(\2\) {\s+window\.location\.reload\(\);\s+window\.parent\.location\.reload\(\);\s+}\s+}\);\s+devtoolsDetector\.launch\(\);\s+}\s+if \(navigator\.webdriver\) {\s+window\.location\.href = "https://google\.com";\s+}'

    js = re.sub(pattern, '', js)
    pattern = r'(\w+) = (\w+)\((\w+)\) \? (\3) : (\w+)\((\3), btoa\(String\.fromCharCode\.apply\(null, new Uint8Array\(window\[(\w+)\]\)\)\)\);'
    # matches = re.findall(pattern, js)
    modified_text = re.sub(
        pattern, r'\g<0>\ndocument.body.innerHTML = `<div class="product"><pre>` + JSON.stringify(\1, null, 2) + `</pre></div>`;document.head.innerHTML="<title>SUCCESS (200)</title>"; return', js)

    with open("e-sim.js", "w") as file:
        file.write(modified_text)

    LOG.info("JS-{}({} char) adjusted.".format(await get_last_timestamp(), len(modified_text)))


# ----------------- titles.py -----------------


async def get_featured_titles():
    async with ClientSession(timeout=ClientTimeout(total=10)) as session:
        req = await session.get("https://attackertv.so/")
        try:
            soup = bs4.BeautifulSoup(await req.text(), "html.parser")
            titles = []
            for title in soup.find_all("div", class_="flw-item"):
                titles.append({
                    "title": title.find("a").get("title") if title.find("a") else "Unknown",
                    "href": title.find("a").get("href") if title.find("a") else "Unknown",
                    "category": title.find("span", class_="float-right fdi-type").text.strip() if title.find("span", class_="float-right fdi-type") else "Unknown",
                    "poster": title.find("img").get("data-src") if title.find("img") else "Unknown",
                    "quality": title.find("div", class_="pick film-poster-quality").text.strip() if title.find("div", class_="pick film-poster-quality") else "Unknown",
                })
            return titles

        except Exception as e:
            LOG.error(f"Error while getting featured titles: {e}")
            return []


async def search_titles(request):
    query = request.query.get("query")
    if not query:
        return web.json_response({"error": "No query provided"}, status=400)
    titles = await search_adv(query)
    return web.json_response(titles)


async def _get_title_info(request):
    id = request.query.get("id")
    if not id:
        return web.json_response({"error": "No id provided"}, status=400)
    return web.json_response(await get_title_info(id))


async def _fetch_episodes(request):
    id = request.query.get("id")
    if not id:
        return web.json_response({"error": "No id provided"}, status=400)
    return web.json_response(await fetch_episodes(id))


async def _fetch_seasons(request):
    id = request.query.get("id")
    if not id:
        return web.json_response({"error": "No id provided"}, status=400)
    return web.json_response(await fetch_seasons(id))


async def _fetch_embed_source(request):
    id = request.query.get("id")
    cat = request.query.get("cat")
    if not id:
        return web.json_response({"error": "No id provided"}, status=400)
    return web.json_response(await fetch_embed_source(id, cat))


async def handle_title_request(request):
    if request.path == "/api/search":
        return await search_titles(request)
    elif request.path == "/api/sa":
        return await _search_adv(request)
    elif request.path == "/api/info":
        return await _get_title_info(request)
    elif request.path == "/api/episodes":
        return await _fetch_episodes(request)
    elif request.path == "/api/seasons":
        return await _fetch_seasons(request)
    elif request.path == "/api/embed":
        return await _fetch_embed_source(request)
    elif request.path == "/api/featured":
        return web.json_response(await get_featured_titles())
    return web.json_response({"error": "Invalid path"}, status=400)


async def _search_adv(request):
    query = request.query.get("query")
    if not query:
        return web.json_response({"error": "No query provided"}, status=400)
    titles = await search_adv(query)
    return web.json_response(titles)


async def search_adv(q: str):
    req_url = "https://attackertv.so/search/{}".format(q.replace(" ", "-"))
    async with ClientSession(timeout=ClientTimeout(total=10)) as session:
        req = await session.get(req_url)
        try:
            soup = bs4.BeautifulSoup(await req.text(), "html.parser")
            titles = []
            for title in soup.find_all("div", class_="flw-item"):
                titles.append({
                    "title": title.find("a").get("title") if title.find("a") else "Unknown",
                    "href": title.find("a").get("href") if title.find("a") else "Unknown",
                    "category": title.find("span", class_="float-right fdi-type").text.strip() if title.find("span", class_="float-right fdi-type") else "Unknown",
                    "poster": title.find("img").get("data-src") if title.find("img") else "Unknown",
                    "quality": title.find("div", class_="pick film-poster-quality").text.strip() if title.find("div", class_="pick film-poster-quality") else "Unknown",
                })

            result = {}

            if len(titles) == 32:
                result["next"] = "2"
            else:
                result["next"] = "0"

            result["titles"] = titles
            return result

        except Exception as e:
            LOG.error(f"Error while searching for titles: {e}")
            return []


async def search_for_titles(query: str):
    async with ClientSession(timeout=ClientTimeout(total=10)) as session:
        print(quote(query))
        req = await session.post("https://attackertv.so/ajax/search", data={"keyword": query},
                                 headers={"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                                          "X-Requested-With": "XMLHttpRequest",
                                          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                                          "Accept": "*/*",
                                          })
        try:
            soup = bs4.BeautifulSoup(await req.text(), "html.parser")
            titles = []
            for title in soup.find_all("a", class_="nav-item"):
                if title.find(class_="film-name") and title.find(class_="dot"):
                    titles.append({
                        "title": title.find(class_="film-name").text.strip(),
                        "href": title["href"],
                        "category": title.find_all("span")[2].text.strip() if len(title.find_all("span")) > 2 else "Unknown",
                        "year": title.find_all("span")[0].text.strip() if len(title.find_all("span")) > 0 else "-"
                    })
            return titles

        except Exception as e:
            LOG.error(f"Error while searching for titles: {e}")
            return []


async def get_title_info(href: str):
    async with ClientSession(timeout=ClientTimeout(total=10)) as session:
        if "/watch++" in href:
            return {"error": "Invalid title url, it should contain '/watch-*(tv|movie)/'"}
        req = await session.get(f"https://attackertv.so{href}")
        try:
            soup = bs4.BeautifulSoup(await req.text(), "html.parser")
            title = {}

            title["title"] = soup.find(
                "h2", class_="heading-name").text.strip()
            title["description"] = soup.find(
                "div", class_="description").text.strip()
            title["image"] = soup.find("img", class_="film-poster-img")["src"]
            title["quality"] = soup.find("button", class_="btn btn-sm btn-quality").text.strip(
            ) if soup.find("button", class_="btn btn-sm btn-quality") else "N/A"
            title["imdb_rating"] = soup.find("button", class_="btn btn-sm btn-radius btn-warning btn-imdb").text.strip(
            ) if soup.find("button", class_="btn btn-sm btn-radius btn-warning btn-imdb") else "N/A"

            for span in soup.find_all("div", class_="row-line"):
                if "Genre:" in span.text:
                    title["genres"] = ', '.join(
                        [i.text for i in span.find_all("a")]).strip()
                if "Casts:" in span.text:
                    title["casts"] = ', '.join(
                        [i.text for i in span.find_all("a")]).strip()
                if "Duration:" in span.text:
                    title["duration"] = span.text.split(
                        "Duration:")[1].split("\n")[0].strip()
                if "Country:" in span.text:
                    title["country"] = ', '.join(
                        [i.text for i in span.find_all("a")]).strip()
                if "Production:" in span.text:
                    title["production"] = ', '.join(
                        [i.text for i in span.find_all("a")]).strip()
                if "Released:" in span.text:
                    title["release"] = span.text.split(
                        "Released:")[1].split("\n")[0].strip()

            if soup.find("iframe", id="iframe-trailer"):
                title["trailer"] = soup.find(
                    "iframe", id="iframe-trailer")["data-src"]

            title["similar_titles"] = []
            for _title in soup.find_all("div", class_="flw-item"):
                x = {
                    "title": _title.find("a").get("title") if _title.find("a") else "Unknown",
                    "href": _title.find("a").get("href") if _title.find("a") else "Unknown",
                    "category": _title.find("span", class_="float-right fdi-type").text.strip() if _title.find("span", class_="float-right fdi-type") else "Unknown",
                    "poster": _title.find("img").get("data-src") if _title.find("img") else "Unknown",
                    "quality": _title.find("div", class_="pick film-poster-quality").text.strip() if _title.find("div", class_="pick film-poster-quality") else "Unknown",
                }

                title["similar_titles"].append(x)

            return title
        except Exception as e:
            e.with_traceback()
            LOG.error(f"Error while getting title info: {e}")
            return {}


async def get_src_A(title_id):
    async with ClientSession(timeout=ClientTimeout(total=10)) as session:
        req = await session.get(f"https://attackertv.so/ajax/episode/list/{title_id}", headers={"X-Requested-With": "XMLHttpRequest",
                                                                                                "referer": f"https://attackertv.so/watch-tv/{title_id}"})
        content = await req.text()
        try:
            soup = bs4.BeautifulSoup(content, "html.parser")
            for episode in soup.find_all("a"):
                if "megacloud" in episode.text.lower():
                    req = await session.get("https://attackertv.so/ajax/episode/sources/{}".format(episode.get("data-linkid")), headers={"X-Requested-With": "XMLHttpRequest",
                                                                                                                                         "referer": f"https://attackertv.so/watch-tv/{title_id}"})
                    if "text/html" in req.headers["content-type"]:
                        resp = await req.text()
                        sources = json.loads(resp)
                    else:
                        sources = await req.json()
                    return {"source_hash": sources["link"].split("e-1/")[1].split("?z=")[0]} if sources else {"error": "No sources found"}
            return {"error": "No sources found"}
        except Exception as e:
            LOG.error(f"Error while getting title info: {e}")
            return {"error": "An error occurred while fetching the sources: " + str(e)}


async def get_src_B(title_id):
    async with ClientSession(timeout=ClientTimeout(total=10)) as session:
        try:
            req = await session.get(f"https://attackertv.so/ajax/episode/servers/{title_id}", headers={"X-Requested-With": "XMLHttpRequest",                                                                                              "referer": f"https://attackertv.so/watch-tv/{title_id}"})
            soup = bs4.BeautifulSoup(await req.text(), "html.parser")
            for episode in soup.find_all("a"):
                if "megacloud" in episode.text.lower():

                    req = await session.get("https://attackertv.so/ajax/episode/sources/{}".format(episode.get("data-id")), headers={"X-Requested-With": "XMLHttpRequest",
                                                                                                                                     "referer": f"https://attackertv.so/watch-tv/{title_id}"})
                    if "text/html" in req.headers["content-type"]:
                        resp = await req.text()
                        sources = json.loads(resp)
                    else:
                        sources = await req.json()
                    return {"source_hash": sources["link"].split("e-1/")[1].split("?z=")[0]} if sources else {"error": "No sources found"}
            return {"error": "No sources found"}
        except Exception as e:
            LOG.error(f"Error while getting title info: {e}")
            return {"error": "An error occurred while fetching the sources: " + str(e)}


async def fetch_embed_source(title_id: str, category: str):
    if category == "tv":
        return await get_src_B(title_id)
    elif category == "movie":
        return await get_src_A(title_id)
    return {"error": "Invalid category"}


async def fetch_seasons(title_id: str):
    async with ClientSession(timeout=ClientTimeout(total=10)) as session:
        req = await session.get(f"https://attackertv.so/ajax/season/list/{title_id}")
        try:
            soup = bs4.BeautifulSoup(await req.text(), "html.parser")
            seasons = []
            for season in soup.find_all("a", class_="dropdown-item ss-item"):
                seasons.append({
                    "title": season.text.strip(),
                    "season_id": season.get("data-id")
                })
            return seasons
        except Exception as e:
            LOG.error(f"Error while getting title info: {e}")
            return []


async def fetch_episodes(season_id: str):
    async with ClientSession(timeout=ClientTimeout(total=10)) as session:
        req = await session.get(f"https://attackertv.so/ajax/season/episodes/{season_id}")
        try:
            soup = bs4.BeautifulSoup(await req.text(), "html.parser")
            episodes = []
            for episode in soup.find_all("a"):
                episodes.append({
                    "title": episode.get("title"),
                    "episode_id": episode.get("data-id")
                })
            return episodes
        except Exception as e:
            LOG.error(f"Error while getting title info: {e}")
            return []

# ----------------- main.py -----------------


async def start_up_and_init():
    if IS_ENCRYPTED:
        global browser
        import sys
        if sys.platform == "win32":
            browser = await launch(headless=False,  executablePath="C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
                                   args=['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--disable-software-rasterizer', '--disable-setuid-sandbox'])
        else:
            browser = await launch(headless=False,  executablePath="/usr/bin/google-chrome",
                                   args=['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--disable-software-rasterizer', '--disable-setuid-sandbox'])

    app = web.Application()
    app.router.add_get('/{id}', resolve_hash)
    app.router.add_post('/write', req_write_to_console)
    app.router.add_get('/api/{tail:.*}', handle_title_request)

    async def index(request):
        return web.Response(text="200 OK (JS Last Modified: {})".format(datetime.datetime.fromtimestamp(await get_last_timestamp())))

    app.router.add_get('/', index)
    runner = web.AppRunner(app)
    await runner.setup()
    site = web.TCPSite(runner, 'localhost', PORT)
    await site.start()

    print("Server started at port {}".format(PORT))

    return app

app = asyncio.get_event_loop().run_until_complete(start_up_and_init())
try:
    asyncio.get_event_loop().run_forever()
except KeyboardInterrupt:
    print("Server stopped")
