#!/usr/bin/env bash
# Build + render one or more Edexcel 4BS1 Business sitcom episodes end to end.
# Uses shared read-only /Users/mayankrawat/Downloads/year8-workspace/.tts-env/.venv
# with --workers 1 and -preset ultrafast to avoid CPU contention, skipping valid existing MP4s.
set -euo pipefail
cd "$(dirname "$0")"
ROOT="$(cd ../.. && pwd)"
PY="/Users/mayankrawat/Downloads/year8-workspace/.tts-env/.venv/bin/python"
FFMPEG="/Users/mayankrawat/Downloads/year8-workspace/.tts-env/.venv/bin/ffmpeg"
FFPROBE="/Users/mayankrawat/Downloads/year8-workspace/.tts-env/.venv/bin/ffprobe"

mkdir -p "$ROOT/public/videos/posters"
rm -f tts_cache/*.raw.wav tts_cache/*.tmp.wav out/*/*.tmp.wav out/*/part*.mp4 2>/dev/null || true
stamp() { echo "=== $T: $1 (+$(( $(date +%s) - S0 ))s)"; }

for T in "$@"; do
  MP4="$ROOT/public/videos/$T.mp4"
  JPG="$ROOT/public/videos/posters/$T.jpg"
  if [ -f "$MP4" ] && [ -f "$JPG" ]; then
    CODECS=$("$FFPROBE" -v error -show_entries stream=codec_name -of csv=p=0 "$MP4" 2>/dev/null | tr '\n' ',' || true)
    DUR=$("$FFPROBE" -v error -show_entries format=duration -of csv=p=0 "$MP4" 2>/dev/null || echo "0")
    if echo "$CODECS" | grep -q "h264" && echo "$CODECS" | grep -q "aac" && awk "BEGIN {exit !($DUR > 60)}"; then
      echo "=== $T: already valid (${DUR}s, h264+aac) — skipping"
      continue
    fi
  fi
  S0=$(date +%s)
  echo "=== $T: lint"
  "$PY" lint_episode.py "episodes/$T.py"
  echo "=== $T: voices + timeline"
  "$PY" build.py "episodes/$T.py" "out/$T"
  stamp "voices done"
  echo "=== $T: frames (workers=1, ultrafast)"
  rm -f out/$T/part*.mp4
  "$PY" render.py "out/$T" --workers 1
  stamp "frames done"
  echo "=== $T: encode"
  "$FFMPEG" -y -loglevel error -f concat -safe 0 -i "out/$T/parts.txt" -i "out/$T/audio.wav" \
    -c:v copy \
    -af "loudnorm=I=-16:TP=-1.5:LRA=11" -ar 48000 -c:a aac -b:a 128k -movflags +faststart -shortest \
    "$MP4"
  "$PY" render.py "out/$T" --poster "$JPG"
  rm -f out/$T/part*.mp4
  stamp "encoded + poster"
  echo "=== $T: done $(du -h "$MP4" | cut -f1) $("$FFPROBE" -v error -show_entries format=duration -of csv=p=0 "$MP4")s"
done
"$PY" gen_manifest.py
