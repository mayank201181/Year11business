"""Render HTML5 canvas frames of a sitcom timeline to MP4 segments or a poster JPEG
using Python Playwright + static ffmpeg (<= 2 concurrent ffmpeg workers).

Usage:
  python render.py <outdir> --workers 2
  python render.py <outdir> --poster <poster.jpg>
"""
import asyncio
import base64
import http.server
import json
import math
import os
import shutil
import subprocess
import sys
import threading
import time
from playwright.async_api import async_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
FFMPEG = "/Users/mayankrawat/Downloads/year8-workspace/.tts-env/.venv/bin/ffmpeg"
if not os.path.exists(FFMPEG):
    FFMPEG = shutil.which("ffmpeg") or "ffmpeg"


class SilentHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=HERE, **kwargs)

    def log_message(self, format, *args):
        pass


def start_server():
    httpd = http.server.ThreadingHTTPServer(("127.0.0.1", 0), SilentHandler)
    port = httpd.server_address[1]
    t = threading.Thread(target=httpd.serve_forever, daemon=True)
    t.start()
    return httpd, port


async def open_page(browser, port, tl):
    pg = await browser.new_page(viewport={"width": 1280, "height": 720})
    await pg.goto(f"http://127.0.0.1:{port}/render.html")
    await pg.evaluate("tl => window.init(tl)", tl)
    return pg


async def main():
    out = os.path.abspath(sys.argv[1])
    args = sys.argv[2:]
    tl = json.load(open(os.path.join(out, "timeline.json"), "r", encoding="utf-8"))

    def opt(k, d=None):
        return args[args.index(k) + 1] if k in args else d

    httpd, port = start_server()
    try:
        async with async_playwright() as p:
            poster = opt("--poster")
            if poster:
                browser = await p.chromium.launch(args=["--disable-gpu-vsync"])
                pg = await open_page(browser, port, tl)
                d = await pg.evaluate("t => window.frameJpeg(t, 0.86)", tl.get("poster_t", 8.0))
                os.makedirs(os.path.dirname(os.path.abspath(poster)), exist_ok=True)
                with open(poster, "wb") as f:
                    f.write(base64.b64decode(d.split(",", 1)[1]))
                await browser.close()
                return

            fps = int(tl.get("fps", 24))
            total_frames = int(math.ceil(tl["duration"] * fps))
            workers = min(2, max(1, int(opt("--workers", "1"))))
            # Align worker split to even frame boundary for 2s animation cadence
            per = int(math.ceil(total_frames / workers / 2.0)) * 2
            t0 = time.time()

            async def run_worker(w):
                a = w * per
                b = min(total_frames, a + per)
                if a >= b:
                    return None
                browser = await p.chromium.launch(args=["--disable-gpu-vsync", "--disable-dev-shm-usage"])
                try:
                    pg = await open_page(browser, port, tl)
                    seg = os.path.join(out, f"part{w}.mp4")
                    ff = subprocess.Popen(
                        [
                            FFMPEG, "-y", "-loglevel", "error",
                            "-f", "image2pipe", "-framerate", str(fps), "-c:v", "mjpeg", "-i", "-",
                            "-vf", "scale=in_range=full:out_range=tv,format=yuv420p",
                            "-c:v", "libx264", "-preset", "ultrafast", "-threads", "2", "-crf", "26",
                            "-pix_fmt", "yuv420p", "-color_range", "tv", "-tune", "animation", seg,
                        ],
                        stdin=subprocess.PIPE,
                    )
                    assert ff.stdin is not None
                    # Render cartoon animation on 2s (12 drawings/s held 2 frames = exact 24fps stream)
                    step = 2 if fps >= 24 else 1
                    batch_frames = 32
                    for i in range(a, b, batch_frames):
                        end_f = min(b, i + batch_frames)
                        sample_indices = list(range(i, end_f, step))
                        times = [round(j / fps, 5) for j in sample_indices]
                        urls = await pg.evaluate(
                            "ts => ts.map(t => window.frameJpeg(t, 0.82))", times
                        )
                        buf = bytearray()
                        for j, d in zip(sample_indices, urls):
                            jpg = base64.b64decode(d.split(",", 1)[1])
                            buf.extend(jpg)
                            if step == 2 and (j + 1) < end_f:
                                buf.extend(jpg)
                        await asyncio.to_thread(ff.stdin.write, bytes(buf))
                        if w == 0 and (i - a) % 960 < batch_frames:
                            print(f"  w0 {i - a}/{b - a} ({time.time() - t0:.0f}s)", flush=True)
                    await asyncio.to_thread(ff.stdin.close)
                    rc = await asyncio.to_thread(ff.wait)
                    if rc != 0:
                        raise RuntimeError(f"ffmpeg exited with {rc}")
                    return f"part{w}.mp4"
                finally:
                    await browser.close()

            parts = await asyncio.gather(*(run_worker(w) for w in range(workers)))
            valid_parts = [pt for pt in parts if pt]
            with open(os.path.join(out, "parts.txt"), "w", encoding="utf-8") as f:
                f.write("\n".join(f"file '{pt}'" for pt in valid_parts) + "\n")
            print(f"frames done in {time.time() - t0:.1f}s", flush=True)
    finally:
        httpd.shutdown()


if __name__ == "__main__":
    asyncio.run(main())
