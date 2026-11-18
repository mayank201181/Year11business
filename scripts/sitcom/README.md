# Sitcom episodes — "Boardroom Bananas: Edexcel 4BS1"

**Season 1 (Pearson Edexcel IGCSE Business `4BS1` 9–1): "Boardroom Bananas".**
Animated, voiced sitcom episodes (one per syllabus module) rendered to MP4 (`<= 2` concurrent `ffmpeg` workers) using the shared Kokoro neural TTS environment.

Cast:
- **Vanishree** (`vani`): sharp Year 11 Business student
- **Dad** (`dad`): overconfident serial startup founder
- **Mum** (`mum`): bargain-hunting ROI hawk
- **Ledger** (`centi`): 100-eyed CFO calculator monster with live SVG whiteboard diagrams
- **Examiner Sterling** (`teacher`): Edexcel 4BS1 examiner roasting classic 9/12-mark exam traps

Pipeline:
1. `episodes/<topic>.py` — beats of dialogue, moods, camera shots, SVG board diagrams, Examiner Trap cards, and 3 pause challenges.
2. `build.py` — Kokoro neural TTS per line (cached), lip-sync envelopes, synthesized SFX + musical bed → `out/<topic>/audio.wav` + `timeline.json`.
3. `render.html` + `render.py` — HTML5 Canvas renderer driven by Playwright (`--workers 2`) → x264 + AAC `.mp4` + `.jpg` poster in `public/videos/`.
4. `gen_manifest.py` — populates `lib/sitcom.ts` and `lib/shorts.ts`.
