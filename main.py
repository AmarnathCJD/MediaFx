from aiohttp import web
from aiohttp.web import run_app
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
    search_titles,
    get_imdb_top
)
from modules.youtube import get_yt_video_direct_url
from modules.browser import resolve_hash
from modules.database import get_last_timestamp
from dotenv import load_dotenv
from os import getenv
import aiohttp_cors
from aiohttp import ClientSession, ClientTimeout

load_dotenv()

warnings.filterwarnings("ignore")
logging.getLogger('pyppeteer').setLevel(logging.WARNING)
logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')

LOG = logging.getLogger(__name__)

PORT = int(getenv("PORT", 80))
MASTER_PASSWORD = getenv("MASTER_PASSWORD", "roseloverx")

async def handle_title_request(request):
    if request.query.get("password") != MASTER_PASSWORD:
        return web.json_response({"error": "not authorized to access this content"}, status=401)
    
    # set 'Access-Control-Allow-Origin' header
    if request.method == "OPTIONS":
        return web.Response(headers={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
        })
    if request.path == "/api/img":
        url = request.query.get("url")
        async with ClientSession(timeout=ClientTimeout(total=10)) as session:
            async with session.get(url) as resp:
                return web.Response(body=await resp.read(), content_type=resp.content_type)
    elif request.path == "/api/search":
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
    elif request.path == "/api/imdb":
        return web.json_response(await get_imdb_top())
    elif request.path == "/api/":
        return web.Response(text="200 OK")
    elif request.path == "/api/trailer":
        url = request.query.get("url")
        id = url.split("/")[-1].split("?")[0]
        return web.json_response({"url": await get_yt_video_direct_url(id)})
    return web.json_response({"error": "invalid path"}, status=400)


# ----------------- main.py -----------------


async def start_up_and_init():
    app = web.Application()
    cors = aiohttp_cors.setup(app, defaults={
        "*": aiohttp_cors.ResourceOptions(
            allow_credentials=True,
            expose_headers="*",
            allow_headers="*",
        )
    })
    
    
    async def index(request):
        return web.Response(text="200 OK (c) @AmarnathCJD (Last Modified: {})\n".format(datetime.datetime.fromtimestamp(await get_last_timestamp())))


    app.router.add_get('/{id}', resolve_hash)
    app.router.add_get('/', index)
    app.router.add_get('/api/{tail:.*}', handle_title_request)

    for route in list(app.router.routes()):
        cors.add(route)

    return app

run_app(start_up_and_init(), port=PORT)