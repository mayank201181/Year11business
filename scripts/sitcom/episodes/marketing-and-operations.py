# "Boardroom Bananas: Edexcel 4BS1" S01E07 "Just In Time For Chaos"
# Topics 4.1–4.3 & 5.1–5.4: Research, PED, 4Ps, Boston Matrix & PLC; Job/Batch/Flow, Lean/JIT/Kaizen, Economies of Scale & Quality.

EP = dict(
    topic="marketing-and-operations",
    logline="Dad launches fifty-pound Glow-in-the-Dark Banana Soup without asking a single customer, runs zero buffer stock under Just-in-Time during a port strike, and only checks quality after customers gag. "
            "Vani, Ledger and Examiner Sterling unite Marketing and Operations for the Season Finale!"
)

D_BOSTON = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<rect x="14" y="14" width="328" height="114" rx="10" fill="#1e3a8a" stroke="#60a5fa" stroke-width="3"/>
<rect x="358" y="14" width="328" height="114" rx="10" fill="#581c87" stroke="#c084fc" stroke-width="3"/>
<rect x="14" y="140" width="328" height="114" rx="10" fill="#065f46" stroke="#34d399" stroke-width="3"/>
<rect x="358" y="140" width="328" height="114" rx="10" fill="#7f1d1d" stroke="#f87171" stroke-width="3"/>
<text x="178" y="58" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fde047" text-anchor="middle">★ STAR (Invest)</text>
<text x="178" y="102" font-family="sans-serif" font-size="28" fill="#fff" text-anchor="middle">High Share · Growth</text>
<text x="522" y="58" font-family="sans-serif" font-size="30" font-weight="bold" fill="#e9d5ff" text-anchor="middle">? QUESTION MARK</text>
<text x="522" y="102" font-family="sans-serif" font-size="28" fill="#fff" text-anchor="middle">Low Share · Growth</text>
<text x="178" y="184" font-family="sans-serif" font-size="30" font-weight="bold" fill="#86efac" text-anchor="middle">£ CASH COW (Milk)</text>
<text x="178" y="228" font-family="sans-serif" font-size="28" fill="#fff" text-anchor="middle">High Share · Mature</text>
<text x="522" y="184" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fca5a5" text-anchor="middle">✗ DOG (Divest)</text>
<text x="522" y="228" font-family="sans-serif" font-size="28" fill="#fff" text-anchor="middle">Low Share · Low Gr.</text>
<rect x="14" y="264" width="672" height="44" rx="8" fill="#1e293b"/>
<text x="350" y="296" font-family="sans-serif" font-size="28" font-weight="bold" fill="#7dd3fc" text-anchor="middle">PLC: Intro → Growth → Maturity → Decline</text>
</svg>"""

D_PROD = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<rect x="16" y="14" width="668" height="68" rx="10" fill="#312e81" stroke="#818cf8" stroke-width="3"/>
<text x="34" y="58" font-family="sans-serif" font-size="29" font-weight="bold" fill="#c7d2fe">JOB</text>
<text x="664" y="58" font-family="sans-serif" font-size="28" fill="#fff" text-anchor="end">One-off bespoke · High unit cost</text>
<rect x="16" y="92" width="668" height="68" rx="10" fill="#065f46" stroke="#34d399" stroke-width="3"/>
<text x="34" y="136" font-family="sans-serif" font-size="29" font-weight="bold" fill="#a7f3d0">BATCH</text>
<text x="664" y="136" font-family="sans-serif" font-size="28" fill="#fff" text-anchor="end">Identical groups · Reset delays</text>
<rect x="16" y="170" width="668" height="68" rx="10" fill="#7c2d12" stroke="#fb923c" stroke-width="3"/>
<text x="34" y="214" font-family="sans-serif" font-size="29" font-weight="bold" fill="#fed7aa">FLOW</text>
<text x="664" y="214" font-family="sans-serif" font-size="28" fill="#86efac" text-anchor="end">24/7 line · Lowest cost (EoS)</text>
<rect x="16" y="250" width="668" height="56" rx="10" fill="#1e293b"/>
<text x="350" y="288" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047" text-anchor="middle">JIT: zero buffer · Kaizen: continuous steps</text>
</svg>"""

D_EOS = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<line x1="40" y1="216" x2="348" y2="216" stroke="#94a3b8" stroke-width="3"/>
<line x1="40" y1="216" x2="40" y2="26" stroke="#94a3b8" stroke-width="3"/>
<path d="M58 64 Q194 212 334 68" stroke="#38bdf8" stroke-width="5" fill="none"/>
<circle cx="196" cy="140" r="8" fill="#fde047"/>
<text x="112" y="50" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac" text-anchor="middle">EoS ↓</text>
<text x="278" y="50" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fca5a5" text-anchor="middle">Dis-EoS ↑</text>
<text x="196" y="182" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047" text-anchor="middle">Min Cost</text>
<text x="194" y="258" font-family="sans-serif" font-size="28" fill="#cbd5e1" text-anchor="middle">Output Scale →</text>
<rect x="366" y="18" width="320" height="284" rx="12" fill="#1e1b4b" stroke="#818cf8" stroke-width="3"/>
<text x="526" y="60" font-family="sans-serif" font-size="29" font-weight="bold" fill="#c7d2fe" text-anchor="middle">QUALITY</text>
<text x="384" y="114" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fca5a5">QC (Control):</text>
<text x="384" y="152" font-family="sans-serif" font-size="28" fill="#fff">Check at END</text>
<text x="384" y="216" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">QA / TQM:</text>
<text x="384" y="254" font-family="sans-serif" font-size="28" fill="#fff">Check ALL stages</text>
</svg>"""

D_TRAP7 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#1e1b4b"/>
<rect x="16" y="16" width="668" height="56" rx="10" fill="#be185d"/>
<text x="350" y="54" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fff" text-anchor="middle">MARKETING &amp; OPS TRAPS</text>
<text x="28" y="116" font-family="sans-serif" font-size="28" fill="#fda4af">✗ Keep all 4Ps consistent (Price/Place)!</text>
<text x="28" y="170" font-family="sans-serif" font-size="28" fill="#fda4af">✗ JIT fails if overseas supply delays!</text>
<text x="28" y="224" font-family="sans-serif" font-size="28" fill="#86efac">✓ QC = end inspect · QA/TQM = prevent</text>
<text x="28" y="280" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047">✓ Elastic → cut P · Inelastic → raise P</text>
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
