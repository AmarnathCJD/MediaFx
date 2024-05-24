from aiohttp import web
from aiohttp import ClientSession, ClientTimeout
from pyppeteer import launch

import asyncio
import time
import logging
import json
import re

from modules.database import get_last_timestamp


IS_ENCRYPTED = False
browser = None

LOG = logging.getLogger("main")


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

                try:
                    content["subs"] = content["tracks"]
                except:
                    pass

                return web.json_response({
                    "status": 200,
                    "id": request.match_info['id'],
                    "file": content["file"],
                    "subs": content["subs"],
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

