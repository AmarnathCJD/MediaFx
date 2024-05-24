from aiohttp import web
from pyppeteer import launch
import asyncio
import warnings
import logging
import datetime
import logging
from modules.media import (
    get_featured_titles,
    _fetch_embed_source,
    _fetch_seasons,
    _fetch_episodes,
    _get_title_info,
    _search_adv,
    search_titles
)
from modules.browser import resolve_hash, IS_ENCRYPTED
from modules.database import get_last_timestamp
from dotenv import load_dotenv
from os import getenv
import aiohttp_cors

load_dotenv()

warnings.filterwarnings("ignore")
logging.getLogger('pyppeteer').setLevel(logging.WARNING)
logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')

LOG = logging.getLogger(__name__)

PORT = int(getenv("PORT", 80))



async def handle_title_request(request):
    # set 'Access-Control-Allow-Origin' header
    if request.method == "OPTIONS":
        return web.Response(headers={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
        })

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
    elif request.path == "/api/":
        return web.Response(text="200 OK")
    elif request.path == "/api/trailer":
        url = request.query.get("url")
        id = url.split("/")[-1].split("?")[0]
        return web.json_response({"url": await get_yt_video_direct_url(id)})
    return web.json_response({"error": "Invalid path"}, status=400)


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
    cors = aiohttp_cors.setup(app, defaults={
        "*": aiohttp_cors.ResourceOptions(
            allow_credentials=True,
            expose_headers="*",
            allow_headers="*",
        )
    })
    
    
    async def index(request):
        return web.Response(text="200 OK (c) @AmarnathCJD (JS Last Modified: {})\n".format(datetime.datetime.fromtimestamp(await get_last_timestamp())))


    app.router.add_get('/{id}', resolve_hash)
    app.router.add_get('/', index)
    app.router.add_get('/api/{tail:.*}', handle_title_request)

    for route in list(app.router.routes()):
        cors.add(route)

    runner = web.AppRunner(app)
    await runner.setup()
    site = web.TCPSite(runner, 'localhost', PORT)
    await site.start()

    print("Server started at port --> {}".format(PORT))
    return app

app = asyncio.get_event_loop().run_until_complete(start_up_and_init())
try:
    asyncio.get_event_loop().run_forever()
except KeyboardInterrupt:
    print("Server stopped (Quit by user)")
