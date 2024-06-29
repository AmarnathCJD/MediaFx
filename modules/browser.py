from aiohttp import web
from aiohttp import ClientSession, ClientTimeout
from pyppeteer import launch

import asyncio
import time
import logging
import json
import re

from aiohttp_socks import ProxyConnector
import os, base64, sys

async def makeAio():
    ENV_PROXY_BASE64 = os.getenv("PROXY", "")
    ENV_PROXY = base64.b64decode(ENV_PROXY_BASE64).decode("utf-8")
    proxy = ENV_PROXY
    
    if proxy:
        connector = ProxyConnector.from_url(proxy)
        session = ClientSession(connector=connector, timeout=ClientTimeout(total=10))
        
        return session
    
    return ClientSession(timeout=ClientTimeout(total=10))

IS_ENCRYPTED = True
browser = None
LOG = logging.getLogger("main")
SCRIPT_VERSION = os.getenv("SCRIPT_VERSION", "0.0.8")
AES_KEY = os.getenv("AES_KEY", "yXYmdq8wkhXwso9Sev++cg==")

async def init_browser(browser):
    if sys.platform == "win32":
            browser = await launch(headless=True,  executablePath="C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
                                   args=['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--disable-software-rasterizer', '--disable-setuid-sandbox'])
    else:
            browser = await launch(headless=False,  executablePath="/usr/bin/google-chrome",
                                   args=['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--disable-software-rasterizer', '--disable-setuid-sandbox'])
            
    LOG.info("puppeteer browser initialized")
    
    return browser
    
async def init_script():
    url = "https://megacloud.tv/js/player/m/e1-player-v2.min.js?v={}".format(SCRIPT_VERSION)
    if os.path.exists("e-min.js"):
        with open("e-min.js", "rb") as file:
            cnt = file.read()
            async with (await makeAio()) as session:
                req = await session.get(url)
                new_cnt = await req.read()
                
                if cnt == new_cnt:
                    LOG.info("e-min.js is up to date")
                    return
                
                file.close()
                with open("e-min.js", "wb") as file:
                    file.write(new_cnt)
                    
            LOG.info("downloaded e-min.js")
            
            await _decode_js()
            await _adjust_js()
                    
    else:
        with open("e-min.js", "wb") as file:
            async with (await makeAio()) as session:
                req = await session.get(url)
                cnt = await req.read()
                file.write(cnt)
                
            LOG.info("downloaded e-min.js")
            
            await _decode_js()
            await _adjust_js()

async def resolve_hash(request):
    if not IS_ENCRYPTED:
        async with (await makeAio()) as session:
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
                    "file": content.get("file", ""),
                    "subs": content["subs"],
                })
            return web.Response(text="{\"error\": \"No sources found\"}", status=404)
        
    await init_script()
    global browser
    
    if not browser:
        browser = await init_browser(browser)

    query_id = request.match_info['id']
    if query_id == "" or query_id == "favicon.ico":
        return web.Response(text="Invalid request, please provide a valid hash", status=400)
    t = time.time()

    page = await browser.newPage()

    await page.setExtraHTTPHeaders({'Referer': 'https://megacloud.tv/embed-1/e-1/8G2ykDEjrCkq?z='})
    await page.setRequestInterception(True)

    @page.on('request')
    def intercept(request):
        if "e1-player" in request.url:
            asyncio.ensure_future(modify_request(request))
        elif "/getSources" in request.url:
            asyncio.ensure_future(get_src_request(request))
        # # deny img, css, etc
        # elif request.resourceType in ['image', 'stylesheet']:
        #     asyncio.ensure_future(request.abort())
        else:
            asyncio.ensure_future(request.continue_())

    await page.goto(f'https://megacloud.tv/embed-1/e-1/{query_id}?z=')
    await page.waitForSelector('.product', {'timeout': 10000})
    content = await page.content()

    MAX_RETRIES = 4
    retries = 0
    while '[]' in content and retries < MAX_RETRIES:
        await asyncio.sleep(0.5)
        LOG.warning("retrying request for {}".format(query_id))
        retries += 1
        await page.reload()
        await page.waitForSelector('.product', {'timeout': 10000})
        content = await page.content()
        
    await page.close()

    try:
        content = json.loads(content.split('<pre>')[
            1].split('</pre>')[0])
        if len(content) > 0:
            content["time_taken"] = "{:.2f}s".format(time.time() - t)
            content["status"] = 200
            content["id"] = query_id
            # content = content[0]
        else:
            content = {
                "status": 503,
                "id": query_id,
                "time_taken": "{:.2f}s".format(time.time() - t),
                "malformed_response": content
            }
    except Exception as e:
        return web.Response(text="{\"error\": \"An error occurred while parsing the response : {}\"}".format(str(e)), status=500)
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
        params = request.url.split("?")[1]
        kid = "54df31bb766d7a0f55c924d7e6619de2a3880fc0"
        version = "7566"
        
        req = await session.get("https://megacloud.tv/embed-1/ajax/e-1/getSources?id={}&h={}&v={}&b={}".format(params.split("id=")[1].split("&")[0], kid, version, params.split("b=")[1].split("&")[0]),
                                
                                headers={"Referer": "https://megacloud.tv/embed-1/e-1/8G2ykDEjrCkq?z=",
                                         "X-Requested-With": "XMLHttpRequest",
                                         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 OPR/111.0.0.0"})
        
        content = await req.text()

        await request.respond({
            'status': 200,
            'contentType': 'application/json',
            'body': content
        })
        return


async def req_write_to_console(request):
    # if option: sent cors headers
    if request.method == "OPTIONS":
        return web.Response(headers={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
        })

    print("received request: ", await request.text())


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
    LOG.info("decoded JS-V{}".format(SCRIPT_VERSION))


async def _adjust_js():
    with open("e-sim.js", "r") as file:
        js = file.read()

    pattern = r'if \(!(\w+)\.match\("playstation\|xbox\|smart-tv\|smarttv"\) && \1\.mobile\(\) === null\) {\s+devtoolsDetector\.addListener\(function \((\w+)\) {\s+if \(\2\) {\s+window\.location\.reload\(\);\s+window\.parent\.location\.reload\(\);\s+}\s+}\);\s+devtoolsDetector\.launch\(\);\s+}\s+if \(navigator\.webdriver\) {\s+window\.location\.href = "https://google\.com";\s+}'

    js = re.sub(pattern, '', js)
    pattern = r'\b(\w+)\.tracks = (\w+)\.tracks;\s*(\w+)\(\1\);'
    modified_text = re.sub(
        pattern, r'\g<0>\ndocument.body.innerHTML = `<div class="product"><pre>` + JSON.stringify(\1, null, 2) + `</pre></div>`;document.head.innerHTML="<title>SUCCESS (200)</title>"; return', js)

    pattern = r"\b(\w+)\((\w+)\.sources, (\w+)\)"

    def replace_d(match):
        S = match.group(1)
        a = match.group(2)
        return f"{S}({a}.sources, '{AES_KEY}')"

    modified_text = re.sub(pattern, replace_d, modified_text)

    modified_text = modified_text.replace("devtoolsDetector.launch()", "")
    with open("e-sim.js", "w") as file:
        file.write(modified_text)

    LOG.info("adjusted JS-V{}".format(SCRIPT_VERSION))

