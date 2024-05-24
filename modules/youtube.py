from yt_dlp import YoutubeDL

async def get_yt_video_direct_url(video_id):
    ydl_opts = {
        'format': 'best',
        'quiet': True,
        'no_warnings': True,
        'noplaylist': True,
        'extract_flat': True,
        'force_generic_extractor': True,
        'skip_download': True,
        'nocheckcertificate': True,
    }

    with YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(
            f"https://www.youtube.com/watch?v={video_id}", download=False)
        return info["url"]
