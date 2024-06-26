import json
import logging
import bs4
from aiohttp import web, ClientSession, ClientTimeout

LOG = logging.getLogger(__name__)

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

async def get_imdb_top():
    async with ClientSession(timeout=ClientTimeout(total=10)) as session:
        req = await session.get("https://attackertv.so/top-imdb")  
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
