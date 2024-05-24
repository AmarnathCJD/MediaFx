import sqlite3


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
