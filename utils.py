import re, asyncio
import logging
import sqlite3

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
    cursor.execute('INSERT INTO timestamps (timestamp) VALUES (?)', (timestamp,))
    connection.commit()
    connection.close()
        
# -------------- JS Manipulation --------------

async def _decode_js():
    command = "webcrack e-min.js > e-sim.js"
    proc = await asyncio.create_subprocess_shell(
        f"wsl -e bash -c \"{command}\"",
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
    modified_text = re.sub(pattern, r'\g<0>\ndocument.body.innerHTML = `<div class="product"><pre>` + JSON.stringify(\1, null, 2) + `</pre></div>`;document.head.innerHTML="<title>SUCCESS (200)</title>"; return', js)
    
    with open("e-sim.js", "w") as file:
        file.write(modified_text)
        
    LOG.info("JS-{}({} char) adjusted.".format(await get_last_timestamp(), len(modified_text)))

    