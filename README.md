# Year 11 IGCSE Business Studio (Pearson Edexcel `4BS1` 9–1)

A zero-login interactive study studio & birthday gift built for **Vanishree** (Year 11, Tanglin Trust School, Singapore), covering 100% of **Pearson Edexcel International GCSE Business (`4BS1` 9–1)** — Paper 1 (*Investigating Small Business*, `< 50` staff) and Paper 2 (*Investigating Large Business*, `> 250` staff).

**Live:** https://year11business.vercel.app

## What's inside

- **7 Full Syllabus Modules (`lib/topics/<id>/`)** covering all 5 official Edexcel `4BS1` sections:
  1. `business-activity` — Objectives, Stakeholders & Business Ownership (1.1–1.3 & 1.8)
  2. `location-globalisation-external` — Location, Globalisation, Government Policy & External Factors (1.4–1.7)
  3. `people-communication-recruitment` — Communication, Recruitment, Selection & Training (2.1–2.3)
  4. `motivation-organisation` — Motivation Theories, Rewards & Organisational Structures (2.4–2.5)
  5. `sources-cashflow-breakeven` — Sources of Finance, Cash-Flow Forecasting & Break-Even Analysis (3.1–3.3)
  6. `accounts-ratios` — Financial Documents & Ratio Analysis (3.4–3.5)
  7. `marketing-and-operations` — Marketing Mix & Business Operations (4.1–4.3 & 5.1–5.4)
- **Grade 9 Exam Marks-Savers & Formula Vault (`/formulas`)**: Paper 1 vs Paper 2 firm-size filter, AO1–AO4 command-word marks blueprint, AJIM 9/12-mark evaluation guide, *Never Write ❌ → Write Instead ✅* examiner-report traps, and every un-sheeted `4BS1` finance equation & ratio.
- **AoPS Discovery Lessons**: try-first business dilemmas, inline SVG diagrams, step-by-step worked examples, and auto-marked *Your Turn* checks.
- **Auto-Marked Practice & 4 Mock Exams (`/exam`)**: per-topic Quick Checks, 3 MCQ Papers, 2 Short & Written Case-Study Papers, 8+ Challenge Problems, plus 2 Paper 1 (`< 50` staff) and 2 Paper 2 (`> 250` staff) full cross-topic mock exams.
- **Interactive Business Explorables**: live Break-Even & Margin-of-Safety Chart, 6-Month Cash-Flow Simulator, SPICED Exchange-Rate & Interest-Rate Explorer, Income Statement & Liquidity/ROCE Analyser, Hierarchy Span-of-Control Builder, and Marketing Mix & Operations Lab.
- **Procedural Finance & Terms Drills + 60s Sprint (`/skills`, `/sprint`)**: seeded 3-tier drills across all 5 strands, Daily 5 interleaved sets, and `[1, 3, 7, 16, 35]`-day spaced review.
- **Boardroom Bananas: Edexcel 4BS1 (`/watch`, `/episodes`, `/shorts`)**: 7 narrated `.mp4` animated sitcom episodes starring Vanishree, Dad, Ledger (the 100-eyed CFO calculator monster), and Examiner Sterling roasting classic 9/12-mark traps — plus 3 pause challenges per episode and vertical 60s Shorts.
- **Zero-Login Local Persistence**: opens straight into Vanishree's profile saved in `localStorage` (`y11bus.*`), with optional Cloud Family Sync (`BLOB_READ_WRITE_TOKEN`) and **Advisor Sterling** AI hints (`ANTHROPIC_API_KEY`).

## Develop

```bash
npm install
npm run gen
npm run validate
npm test
npm run lint
npm run build
```
