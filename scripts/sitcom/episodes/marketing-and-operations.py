# "Boardroom Bananas: Edexcel 4BS1" S01E07 "Just In Time For Chaos"
# Topics 4.1–4.3 & 5.1–5.4: Research, PED, 4Ps, Boston Matrix & PLC; Job/Batch/Flow, Lean/JIT/Kaizen, Economies of Scale & Quality.

EP = dict(
    topic="marketing-and-operations",
    logline="Dad launches fifty-pound Glow-in-the-Dark Banana Soup without asking a single customer, runs zero buffer stock under Just-in-Time during a port strike, and only checks quality after customers gag. "
            "Vani, Ledger and Examiner Sterling unite Marketing and Operations for the Season Finale!"
)

D_BOSTON = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 215">
<rect width="520" height="215" rx="12" fill="#0f172a"/>
<text x="145" y="22" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fde047" text-anchor="middle">BOSTON MATRIX</text>
<rect x="14" y="32" width="128" height="78" rx="8" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2"/>
<rect x="148" y="32" width="128" height="78" rx="8" fill="#581c87" stroke="#c084fc" stroke-width="2"/>
<rect x="14" y="116" width="128" height="78" rx="8" fill="#065f46" stroke="#34d399" stroke-width="2"/>
<rect x="148" y="116" width="128" height="78" rx="8" fill="#7f1d1d" stroke="#f87171" stroke-width="2"/>
<text x="78" y="54" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fde047" text-anchor="middle">★ STAR</text>
<text x="78" y="74" font-family="sans-serif" font-size="10" fill="#fff" text-anchor="middle">High Share · High Growth</text>
<text x="78" y="92" font-family="sans-serif" font-size="10" fill="#bae6fd" text-anchor="middle">(Invest heavily!)</text>
<text x="212" y="54" font-family="sans-serif" font-size="12" font-weight="bold" fill="#e9d5ff" text-anchor="middle">? QUESTION MARK</text>
<text x="212" y="74" font-family="sans-serif" font-size="10" fill="#fff" text-anchor="middle">Low Share · High Growth</text>
<text x="212" y="92" font-family="sans-serif" font-size="10" fill="#f3e8ff" text-anchor="middle">(Needs cash or drop)</text>
<text x="78" y="138" font-family="sans-serif" font-size="12" font-weight="bold" fill="#86efac" text-anchor="middle">£ CASH COW</text>
<text x="78" y="158" font-family="sans-serif" font-size="10" fill="#fff" text-anchor="middle">High Share · Low Growth</text>
<text x="78" y="176" font-family="sans-serif" font-size="10" fill="#a7f3d0" text-anchor="middle">(Milks cash for Stars!)</text>
<text x="212" y="138" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fca5a5" text-anchor="middle">✗ DOG</text>
<text x="212" y="158" font-family="sans-serif" font-size="10" fill="#fff" text-anchor="middle">Low Share · Low Growth</text>
<text x="212" y="176" font-family="sans-serif" font-size="10" fill="#fecaca" text-anchor="middle">(Phase out / divest)</text>
<rect x="292" y="32" width="214" height="162" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
<text x="399" y="52" font-family="sans-serif" font-size="12" font-weight="bold" fill="#7dd3fc" text-anchor="middle">PRODUCT LIFE CYCLE</text>
<path d="M308 170 Q335 168 355 125 Q385 65 425 75 Q455 82 485 135" stroke="#34d399" stroke-width="3" fill="none"/>
<path d="M445 88 Q470 62 496 68" stroke="#fde047" stroke-width="2.5" stroke-dasharray="5 3" fill="none"/>
<text x="468" y="58" font-family="sans-serif" font-size="10" font-weight="bold" fill="#fde047" text-anchor="middle">Extension!</text>
<text x="399" y="186" font-family="sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Dev → Intro → Growth → Maturity → Decline</text>
</svg>"""

D_PROD = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 205">
<rect width="520" height="205" rx="12" fill="#0f172a"/>
<rect x="12" y="14" width="156" height="122" rx="8" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
<rect x="182" y="14" width="156" height="122" rx="8" fill="#065f46" stroke="#34d399" stroke-width="2"/>
<rect x="352" y="14" width="156" height="122" rx="8" fill="#7c2d12" stroke="#fb923c" stroke-width="2"/>
<text x="90" y="36" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c7d2fe" text-anchor="middle">JOB</text>
<text x="22" y="60" font-family="sans-serif" font-size="11" fill="#fff">• One-off bespoke item</text>
<text x="22" y="82" font-family="sans-serif" font-size="11" fill="#fff">• Skilled labour, high price</text>
<text x="22" y="104" font-family="sans-serif" font-size="11" fill="#fca5a5">• High unit cost, slow</text>
<text x="260" y="36" font-family="sans-serif" font-size="13" font-weight="bold" fill="#a7f3d0" text-anchor="middle">BATCH</text>
<text x="192" y="60" font-family="sans-serif" font-size="11" fill="#fff">• Identical groups/flavours</text>
<text x="192" y="82" font-family="sans-serif" font-size="11" fill="#fff">• Flexible menu variety</text>
<text x="192" y="104" font-family="sans-serif" font-size="11" fill="#fde68a">• Machine reset delays</text>
<text x="430" y="36" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fed7aa" text-anchor="middle">FLOW (Mass)</text>
<text x="362" y="60" font-family="sans-serif" font-size="11" fill="#fff">• Continuous 24/7 line</text>
<text x="362" y="82" font-family="sans-serif" font-size="11" fill="#86efac">• Lowest unit cost (EoS)</text>
<text x="362" y="104" font-family="sans-serif" font-size="11" fill="#fca5a5">• High capex, inflexible</text>
<rect x="12" y="146" width="496" height="46" rx="8" fill="#1e293b"/>
<text x="260" y="166" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fde047" text-anchor="middle">LEAN: JIT = zero buffer stock (saves storage vs halt risk!) · KAIZEN = continuous small steps</text>
<text x="260" y="184" font-family="sans-serif" font-size="11" fill="#7dd3fc" text-anchor="middle">Labour Productivity = Total Output ÷ Number of Workers</text>
</svg>"""

D_EOS = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 205">
<rect width="520" height="205" rx="12" fill="#0f172a"/>
<line x1="48" y1="165" x2="290" y2="165" stroke="#94a3b8" stroke-width="2"/>
<line x1="48" y1="165" x2="48" y2="24" stroke="#94a3b8" stroke-width="2"/>
<path d="M64 46 Q165 162 276 52" stroke="#38bdf8" stroke-width="3.5" fill="none"/>
<circle cx="170" cy="106" r="5" fill="#fde047"/>
<text x="105" y="42" font-family="sans-serif" font-size="11" font-weight="bold" fill="#86efac">Economies ↓</text>
<text x="232" y="42" font-family="sans-serif" font-size="11" font-weight="bold" fill="#fca5a5">Diseconomies ↑</text>
<text x="170" y="128" font-family="sans-serif" font-size="11" fill="#fde047" text-anchor="middle">Min Unit Cost</text>
<text x="170" y="184" font-family="sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">Output Scale → ( Purchasing · Technical · Financial )</text>
<rect x="306" y="22" width="200" height="166" rx="8" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
<text x="406" y="44" font-family="sans-serif" font-size="12" font-weight="bold" fill="#c7d2fe" text-anchor="middle">QUALITY MANAGEMENT</text>
<text x="316" y="70" font-family="sans-serif" font-size="11" font-weight="bold" fill="#fca5a5">Quality Control (QC):</text>
<text x="316" y="88" font-family="sans-serif" font-size="11" fill="#fff">Inspect at END → high scrap</text>
<text x="316" y="120" font-family="sans-serif" font-size="11" font-weight="bold" fill="#86efac">Quality Assurance / TQM:</text>
<text x="316" y="138" font-family="sans-serif" font-size="11" fill="#fff">Every worker checks EVERY</text>
<text x="316" y="156" font-family="sans-serif" font-size="11" fill="#fff">stage → zero-defect culture!</text>
</svg>"""

D_TRAP7 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 185">
<rect width="520" height="185" rx="12" fill="#1e1b4b"/>
<rect x="16" y="14" width="488" height="38" rx="8" fill="#be185d"/>
<text x="260" y="38" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">EXAMINER MARKETING &amp; OPERATIONS TRAPS</text>
<text x="28" y="78" font-family="sans-serif" font-size="13" fill="#fda4af">✗ TRAP 1: Mismatched 4Ps (e.g. luxury skimming price in a discount bin)!</text>
<text x="28" y="106" font-family="sans-serif" font-size="13" fill="#fda4af">✗ TRAP 2: Praising JIT without checking if overseas suppliers face delays!</text>
<text x="28" y="134" font-family="sans-serif" font-size="13" fill="#86efac">✓ TRAP 3: QC inspects at the END; QA &amp; TQM prevent defects at EVERY stage.</text>
<text x="28" y="162" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fde047">✓ PED rule: Price ELASTIC → cut price · Price INELASTIC → raise price!</text>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("kitchen", [("vani", 260), ("mum", 580), ("dad", 920)])
L("dad", "Witness our grand finale invention! Glow in the Dark Hot Banana Soup, fifty pounds a bowl! Did I ask customers first? Never, visionaries use pure product orientation!", mood="excited", shot="wide", prop="plate")
L("mum", "Vikram, it smells like boiled crayons, AND the blender cupboard is completely empty!", mood="shock", shot="two")
L("dad", "Because I switched us to Just in Time lean manufacturing! Zero buffer stock! Our single banana lorry arrives right at noon!", mood="smug", shot="close", prop="phone")
L("vani", "Dad, the radio says the motorway is closed, AND you forgot to taste test batch one before serving Uncle Hock!", mood="shock", shot="close")
freeze("ZERO BUFFER STOCK?!", 2.4, narrator="Narrator: Uncle Hock had already taken a spoonful.")

confess("vani", "VANISHREE RAO · Season Finale Operations Rescue")
L("vani", "Product orientation, broken Just in Time supply chains, and zero quality assurance. Ledger, let us bring Marketing and Operations home for a Grade Nine!", mood="determined", prop="calculator", gap=0.5)

title()

# ---------------- ACT 1: RESEARCH, SEGMENTATION & PED ----------------
scene("living", [("vani", 260), ("dad", 560)])
poof("centi", 920)
L("centi", "Topic four point one! Market oriented firms research customer wants BEFORE inventing soup!", mood="teach", shot="close",
  boardClear=True, board="PRIMARY: fresh & tailored vs costly/slow")
L("centi", "Primary field research collects fresh first hand data via questionnaires, focus groups, observation, or test marketing.", mood="teach", shot="close")
L("vani", "Secondary desk research uses existing census stats, market reports, and internet articles.", mood="happy", shot="close",
  board="SECONDARY: cheap & fast vs outdated")
L("vani", "It is cheap and instant, yet often outdated and open to competitors too!", mood="thinking", shot="close")
L("dad", "Wait, asking Mum's cat was neither primary nor secondary?", mood="worried", shot="close")
L("centi", "Unusable sample bias! Segment real humans by age, gender, income, geography, or lifestyle into mass or niche markets.", mood="teach", shot="close",
  board="Segmentation: age, income, geo, lifestyle")
L("dad", "How do we calculate Market Share and choose whether to raise or cut prices?", mood="thinking", shot="close")
L("vani", "Market Share is firm sales divided by total market sales times one hundred!", mood="teach", shot="close",
  boardClear=True, board="Market Share = (Firm ÷ Market Sales) × 100")
L("vani", "And pricing depends on Price Elasticity of Demand, P E D!", mood="happy", shot="close")
L("centi", "Price elastic demand has many substitutes, so raising price crashes revenue!", mood="teach", shot="close",
  board="Elastic: cut price · Inelastic: raise price")
L("centi", "Price inelastic brands have loyal fans, so raising price boosts total revenue!", mood="teach", shot="close")

# ---------------- ACT 2: THE 4PS, BOSTON MATRIX & PLC ----------------
card("ACT TWO: THE MARKETING MIX", "Kai audits Dad's 4Ps at the mall.", 2.3)
scene("checkout", [("vani", 240), ("dad", 560), ("cashier", 1000)], "MALL POP-UP · Fixing The 4Ps")
L("cashier", "Mate, fifty pound price skimming in a soggy paper cup fails! Product, Price, Place, and Promotion must match!", mood="deadpan", shot="wide", prop="tablet")
L("vani", "Topic four point three! Balance function, aesthetics, and cost in the design mix, and use the Boston Matrix and Product Life Cycle!", mood="teach", shot="close",
  boardClear=True, board="4Ps: Product · Price · Place · Promotion", diagram=D_BOSTON)
L("cashier", "In the Boston Matrix, a Cash Cow holds high share in a mature market, funding rising Stars and Question Marks!", mood="happy", shot="close",
  board="Cash Cow funds Stars & Question Marks!")
L("cashier", "Meanwhile Dogs have low share and low growth, like glow in the dark soup!", mood="smug", shot="close")
L("vani", "At Maturity on the Product Life Cycle, launch extension strategies like new flavours, rebranding, or new markets to stop Decline!", mood="happy", shot="close",
  board="Extension strategy stops Decline stage!")
L("dad", "What pricing, place, and promotion fit a new smoothie?", mood="thinking", shot="close")
L("cashier", "Skimming needs a unique patent! Use penetration pricing to win early market share, competitive pricing, or cost plus.", mood="teach", shot="close",
  boardClear=True, board="Skimming (new USP) vs Penetration (low)")
L("vani", "For Place, sell direct online for higher margins, or via retailers for wide reach.", mood="happy", shot="close",
  board="Place: Direct online vs Wholesaler/Retail")
L("vani", "For Promotion, blend mass media adverts with sales promotions, P R, sponsorship, and social media!", mood="happy", shot="close")

# ---------------- ACT 3: PRODUCTION, LEAN/JIT, SCALE & QUALITY ----------------
scene("hawker", [("mum", 240), ("vani", 540), ("dad", 780), ("uncle", 1000)], "UNCLE HOCK'S PRODUCTION FLOOR")
L("uncle", "Now Section Five, Operations! Compare Job, Batch, and Flow production.", mood="happy", shot="wide", prop="plate")
L("vani", "Job production crafts bespoke one off items like custom cakes with high unit costs.", mood="teach", shot="close",
  boardClear=True, board="Job (custom) · Batch (groups) · Flow (24/7)", diagram=D_PROD)
L("vani", "Batch production makes groups of mango smoothies then berry smoothies for flexible variety!", mood="happy", shot="close")
L("mum", "Flow production runs continuous automated lines with tiny unit costs, though setup costs are huge and work is repetitive!", mood="teach", shot="close",
  board="Productivity = Total Output ÷ Workers")
L("mum", "And Labour Productivity equals Total Output divided by Number of Workers!", mood="smug", shot="close")
L("uncle", "In Lean Production, Kaizen uses continuous worker ideas, while Just in Time holds zero buffer stock to cut storage waste.", mood="teach", shot="close",
  board="JIT: £0 storage vs halts if lorry late!")
L("dad", "Except one motorway jam stops my whole kitchen!", mood="worried", shot="close")
L("vani", "Classic J I T risk! Now check average unit cost, Total Cost divided by Output, as scale grows!", mood="teach", shot="close",
  boardClear=True, board="Economies of Scale: unit cost FALLS ↓", diagram=D_EOS)
L("mum", "Internal economies of scale lower unit costs through bulk purchasing, specialist machinery, and cheaper finance.", mood="happy", shot="close",
  board="Diseconomies: comm, coordination, morale")
L("vani", "Grow too giant, and diseconomies of scale raise unit costs via slow communication, poor coordination, and low morale!", mood="thinking", shot="close",
  board="QC (end check) vs QA/TQM (every stage!)")
L("uncle", "Finally, Quality Control only checks soup at the end, wasting bad batches!", mood="annoyed", shot="close")
L("uncle", "Switch to Quality Assurance and Total Quality Management, T Q M, checking quality at every single stage!", mood="determined", shot="close")

# ---------------- ACT 4: EXAMINER STERLING FINALE TRAP ----------------
card("EXAMINER 12-MARK TRAP", "Examiner Sterling's final Grade 9 masterclass.", 2.4)
scene("classroom", [("vani", 260), ("dad", 580), ("teacher", 920)], "EDEXCEL 4BS1 EXAM HALL")
L("teacher", "Final exam warning! Three traps separate Grade Six from Grade Nine in Marketing and Operations!", mood="teach", shot="wide", prop="book")
L("dad", "One, align all four P's! Never put luxury skimming prices in discount bins!", mood="happy", shot="close")
L("teacher", "Two, never praise Just in Time without checking supplier reliability! Late overseas shipments with zero buffer stock halt output!", mood="teach", shot="close",
  boardClear=True, board="TRAP: Evaluate JIT supplier reliability!", diagram=D_TRAP7)
L("vani", "Three, separate end of line Quality Control from every stage T Q M, weighing zero waste against staff training costs!", mood="happy", shot="close",
  board="TQM: zero waste & brand ↑ vs training cost")
L("teacher", "Use A O two context, two step chains, and A J I M evaluation, and Vanishree will smash Edexcel four B S one!", mood="excited", shot="close", gap=0.5)

# ---------------- BUTTON ----------------
scene("living", [("vani", 260), ("mum", 580), ("dad", 920)])
L("dad", "Season One complete! Rao Smoothies L T D has primary research, batch production, small buffer stock, T Q M, and twenty percent R O C E!", mood="excited", shot="wide", prop="plate")
L("mum", "Wait. Did Vikram actually make a sensible business plan?", mood="shock", shot="two")
L("vani", "Quick, take a photo before he invents blockchain bananas!", mood="happy", shot="close")
sfx("ding")

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Final 3 questions with Ledger — smash it, Vanishree!", 2.8)
challenge(1, "In the Boston Matrix, which product has HIGH market share in a LOW-growth market?", "CASH COW", "Cash Cow = high share, low growth · Star = high growth",
  "Question one. In the Boston Matrix, which product category has a high market share in a low growth market?",
  "A Cash Cow! It generates steady cash inflows to fund Stars and Question Marks.")
challenge(2, "Which Lean system holds zero buffer stock so parts arrive right when needed?", "JUST IN TIME", "JIT = zero buffer stock, relies on reliable suppliers",
  "Question two. Which lean production system holds zero buffer stock so materials arrive right when needed?",
  "Just in Time, J I T! It cuts storage and waste costs, yet halts production if suppliers are late.")
challenge(3, "Checking quality at EVERY stage rather than only at the end is called what?", "QA / TQM", "QA & TQM = every stage · Quality Control = end check",
  "Question three. Checking quality at every stage of production rather than only at the end is called what?",
  "Quality Assurance, or Total Quality Management, T Q M! It prevents defects early and cuts scrap waste.")
end_card()
