from aiohttp import web, ClientSession, ClientTimeout
from pyppeteer import launch
import asyncio
import time
from utils import get_last_timestamp, set_last_timestamp, _adjust_js, _decode_js
from titles import handle_title_request
import warnings, logging
import datetime

warnings.filterwarnings("ignore")
logging.getLogger('pyppeteer').setLevel(logging.WARNING)
logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')

LOG = logging.getLogger("main")

page = None
PORT = 80

async def resolve_hash(request):
    query_id = request.match_info['id']
    if query_id == "" or query_id == "favicon.ico":
        return web.Response(text="Invalid request, please provide a valid hash", status=400)
    t = time.time()

    await page.goto(f'https://megacloud.tv/embed-1/e-1/{query_id}?z=')
    await page.waitForSelector('.product')
    content = await page.content()
    
    MAX_RETRIES = 3
    retries = 0
    while '[]' in content and retries < MAX_RETRIES:
        await asyncio.sleep(0.1)
        LOG.warning("Retrying request for {}".format(query_id))
        retries += 1
        await page.reload()
        await page.waitForSelector('.product')
        content = await page.content()

    import json
    content = json.loads(content.split('<div class="product"><pre>')[1].split('</pre></div>')[0])
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
    return web.json_response(content)

async def modify_request(request):
    _start_time = time.time()
    _timestamp = request.url.split("v=")[1]
    if (await get_last_timestamp()) < int(_timestamp):
        await set_last_timestamp(int(_timestamp))
        with open("e-min.js", "wb") as file:
            async with ClientSession(timeout=ClientTimeout(total=10)) as session:
                    resp = await session.get(request.url)
                    file.write(await resp.read())
            
        await _decode_js()
        await _adjust_js()
        
        LOG.info("JS-{} decoded and adjusted in {} seconds.".format(await get_last_timestamp(), time.time() - _start_time))
        
    with open("e-sim.js", "r") as file:
        js = file.read()
        await request.respond({
            'status': 200,
            'contentType': 'application/javascript',
            'body': js
        })

async def start_up_and_init():
    global page
    browser = await launch(
        {
            "headless": True,
            "executablePath": "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        }
    )
    if len(await browser.pages()) == 0:
        page = await browser.newPage()
    else:
        page = (await browser.pages())[0]
        
    await page.setExtraHTTPHeaders({'Referer': 'https://megacloud.tv/embed-1/e-1/8G2ykDEjrCkq?z='})
    await page.setRequestInterception(True)
    @page.on('request')
    def intercept(request):
        if "e1-player" in request.url:
            asyncio.ensure_future(modify_request(request))
        else:
            asyncio.ensure_future(request.continue_())
    
    
    app = web.Application()
    app.router.add_get('/{id}', resolve_hash)
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