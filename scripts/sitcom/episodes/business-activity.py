# "Boardroom Bananas: Edexcel 4BS1" S01E01 "Unlimited Liability, Unlimited Regret"
# Topics 1.1–1.3 & 1.8: Objectives, Stakeholders, Ownership (Sole Trader/Partnership/Ltd/Plc), Franchises & Sectors.

EP = dict(
    topic="business-activity",
    logline="Dad registers his two-person banana stand as a Sole Trader while trying to float homemade PLC shares at the hawker centre. "
            "Vani, Ledger and Examiner Sterling rescue Mum's sofa by teaching objectives, stakeholders, liability, franchises and sectors."
)

D_STAKE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 210">
<rect width="520" height="210" rx="12" fill="#0f172a"/>
<rect x="16" y="38" width="232" height="126" rx="10" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
<rect x="272" y="38" width="232" height="126" rx="10" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
<text x="132" y="26" font-family="sans-serif" font-size="14" font-weight="bold" fill="#a5b4fc" text-anchor="middle">INTERNAL STAKEHOLDERS</text>
<text x="388" y="26" font-family="sans-serif" font-size="14" font-weight="bold" fill="#6ee7b7" text-anchor="middle">EXTERNAL STAKEHOLDERS</text>
<text x="30" y="66" font-family="sans-serif" font-size="13" fill="#fff">• Owners / Shareholders (profit)</text>
<text x="30" y="94" font-family="sans-serif" font-size="13" fill="#fff">• Managers (bonuses, growth)</text>
<text x="30" y="122" font-family="sans-serif" font-size="13" fill="#fff">• Employees (pay, job security)</text>
<text x="286" y="64" font-family="sans-serif" font-size="13" fill="#fff">• Customers (low price, quality)</text>
<text x="286" y="88" font-family="sans-serif" font-size="13" fill="#fff">• Suppliers (prompt payment)</text>
<text x="286" y="112" font-family="sans-serif" font-size="13" fill="#fff">• Banks · Government · Local area</text>
<rect x="46" y="172" width="428" height="28" rx="6" fill="#7f1d1d"/>
<text x="260" y="191" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fecaca" text-anchor="middle">CONFLICT: Higher wages ↑ costs → Lower dividends or higher prices</text>
</svg>"""

D_OWN = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<rect width="520" height="220" rx="12" fill="#0f172a"/>
<rect x="14" y="16" width="240" height="188" rx="10" fill="#451a03" stroke="#f59e0b" stroke-width="2"/>
<rect x="266" y="16" width="240" height="188" rx="10" fill="#172554" stroke="#38bdf8" stroke-width="2"/>
<text x="134" y="40" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fcd34d" text-anchor="middle">UNINCORPORATED</text>
<text x="134" y="60" font-family="sans-serif" font-size="12" fill="#fde68a" text-anchor="middle">Sole Trader · Partnership</text>
<text x="28" y="90" font-family="sans-serif" font-size="13" fill="#fff">• NO separate legal identity</text>
<text x="28" y="116" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fca5a5">• UNLIMITED LIABILITY</text>
<text x="28" y="140" font-family="sans-serif" font-size="12" fill="#cbd5e1">• Personal house &amp; car at risk!</text>
<text x="28" y="166" font-family="sans-serif" font-size="12" fill="#cbd5e1">• Fast setup, accounts private</text>
<text x="386" y="40" font-family="sans-serif" font-size="14" font-weight="bold" fill="#7dd3fc" text-anchor="middle">INCORPORATED</text>
<text x="386" y="60" font-family="sans-serif" font-size="12" fill="#bae6fd" text-anchor="middle">Private (Ltd) · Public (Plc)</text>
<text x="280" y="90" font-family="sans-serif" font-size="13" fill="#fff">• Separate legal identity</text>
<text x="280" y="116" font-family="sans-serif" font-size="13" font-weight="bold" fill="#86efac">• LIMITED LIABILITY</text>
<text x="280" y="140" font-family="sans-serif" font-size="12" fill="#cbd5e1">• Only lose share investment</text>
<text x="280" y="166" font-family="sans-serif" font-size="12" fill="#fde047">• Ltd: invited · Plc: Stock Exch.</text>
</svg>"""

D_SECTORS = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 190">
<rect width="520" height="190" rx="12" fill="#0f172a"/>
<rect x="16" y="24" width="152" height="118" rx="10" fill="#14532d" stroke="#4ade80" stroke-width="2"/>
<rect x="184" y="24" width="152" height="118" rx="10" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2"/>
<rect x="352" y="24" width="152" height="118" rx="10" fill="#4c1d95" stroke="#c084fc" stroke-width="2"/>
<text x="92" y="50" font-family="sans-serif" font-size="14" font-weight="bold" fill="#86efac" text-anchor="middle">1. PRIMARY</text>
<text x="92" y="76" font-family="sans-serif" font-size="12" fill="#fff" text-anchor="middle">Extract raw materials</text>
<text x="92" y="102" font-family="sans-serif" font-size="12" fill="#dcfce7" text-anchor="middle">Farming bananas,</text>
<text x="92" y="120" font-family="sans-serif" font-size="12" fill="#dcfce7" text-anchor="middle">mining, fishing</text>
<text x="260" y="50" font-family="sans-serif" font-size="14" font-weight="bold" fill="#93c5fd" text-anchor="middle">2. SECONDARY</text>
<text x="260" y="76" font-family="sans-serif" font-size="12" fill="#fff" text-anchor="middle">Manufacture &amp; build</text>
<text x="260" y="102" font-family="sans-serif" font-size="12" fill="#dbeafe" text-anchor="middle">Banana-chip factory,</text>
<text x="260" y="120" font-family="sans-serif" font-size="12" fill="#dbeafe" text-anchor="middle">construction</text>
<text x="428" y="50" font-family="sans-serif" font-size="14" font-weight="bold" fill="#e9d5ff" text-anchor="middle">3. TERTIARY</text>
<text x="428" y="76" font-family="sans-serif" font-size="12" fill="#fff" text-anchor="middle">Provide services</text>
<text x="428" y="102" font-family="sans-serif" font-size="12" fill="#f3e8ff" text-anchor="middle">Smoothie cafe, retail,</text>
<text x="428" y="120" font-family="sans-serif" font-size="12" fill="#f3e8ff" text-anchor="middle">banking, delivery</text>
<text x="260" y="170" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fde047" text-anchor="middle">Developing → Primary high · Industrialising → Secondary · Developed → Tertiary</text>
</svg>"""

D_TRAP1 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 190">
<rect width="520" height="190" rx="12" fill="#1e1b4b"/>
<rect x="16" y="16" width="488" height="40" rx="8" fill="#be185d"/>
<text x="260" y="41" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">EXAMINER 9 &amp; 12-MARK CHECKLIST (4BS1)</text>
<text x="28" y="82" font-family="sans-serif" font-size="13" fill="#fda4af">✗ NEVER tell a tiny sole trader to float as a PLC on the Stock Exchange!</text>
<text x="28" y="108" font-family="sans-serif" font-size="13" fill="#86efac">✓ DO suggest Partnership or Private Limited Company (Ltd) for limited liability.</text>
<text x="28" y="134" font-family="sans-serif" font-size="13" fill="#7dd3fc">✓ AO2 CONTEXT: Name the product, staff count &amp; figures in EVERY point.</text>
<text x="28" y="162" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fde047">✓ AJIM Conclusion: Answer · Justify · It depends on · Most important factor</text>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("living", [("vani", 260), ("mum", 580), ("dad", 920)])
sfx("door")
L("dad", "Sound the opening bell, ladies! Welcome to Rao Global Bananas P L C! Total staff, me, and whoever works for free on Saturdays.", mood="excited", shot="wide", prop="tablet")
L("mum", "Vikram, why have you printed share certificates on the back of my grocery coupons?", mood="annoyed", shot="two")
L("dad", "Because to save registration fees, I ticked Sole Trader on the tax form, and wrote Public Limited Company in gold marker on top!", mood="smug", shot="close")
L("vani", "Dad! A sole trader has unlimited liability, and a P L C floats on the stock exchange! You just invented an illegal contradiction.", mood="shock", shot="close")
L("dad", "Relax, Vani! What is the worst that happens if my banana catapult injures a passing pigeon?", mood="happy", shot="close")
L("mum", "Wait. If someone sues your banana stand, can bailiffs repossess my velvet sofa?", mood="worried", shot="close")
freeze("SOLE TRADER PLC?!", 2.4, narrator="Narrator: The velvet sofa was already packing its bags.")

confess("vani", "VANISHREE RAO · Year 11 · Edexcel 4BS1 Survivor")
L("vani", "Dad wants stock market status with zero paperwork and Mum's sofa at risk. Time to wake the chief financial officer in my calculator.", mood="deadpan", prop="calculator", gap=0.5)

title()

# ---------------- ACT 1: OBJECTIVES & STAKEHOLDERS ----------------
scene("kitchen", [("vani", 260), ("dad", 560)])
L("vani", "Ledger! Emergency audit in the kitchen!", mood="determined", shot="two", prop="calculator")
poof("centi", 920)
L("centi", "All one hundred eyes have read your father's business plan. Ninety nine of them are weeping.", mood="bored", shot="close")
L("dad", "My objective is simple, Ledger. Conquer global fruit by Tuesday, and also be my own boss.", mood="smug", shot="close")
L("centi", "Start with Topic one point one. Every firm sets financial objectives or non financial objectives, ideally written as S M A R T targets.", mood="teach", shot="close",
  boardClear=True, board="FINANCIAL: survival, profit, sales")
L("vani", "Financial objectives are survival, profit, sales volume, market share, and financial security.", mood="happy", shot="close",
  board="Also: market share, financial security")
L("centi", "Non financial objectives are personal satisfaction, challenge, independence and control, or social objectives helping the community.", mood="teach", shot="close",
  board="NON-FINANCIAL: independence, social")
L("vani", "And objectives change over time! A brand new start up focuses on survival in year one, then shifts to profit or market share once established.", mood="thinking", shot="close",
  board="Start-up: SURVIVAL → Later: PROFIT")
L("dad", "Great! So tonight I launch midnight megaphone promotions outside the flats! Every stakeholder will cheer!", mood="excited", shot="close")
L("centi", "Incorrect. Stakeholders are anyone with an interest in a business, split into internal and external groups, and their objectives clash.", mood="teach", shot="close",
  boardClear=True, board="STAKEHOLDERS: internal vs external", diagram=D_STAKE)
L("vani", "Internal stakeholders work inside or own the firm, owners, managers, and employees.", mood="happy", shot="close",
  board="Employees want pay ↑ vs Owners profit ↑")
L("vani", "External stakeholders sit outside, customers, suppliers, banks, government, and the local community.", mood="happy", shot="close")
L("centi", "Higher wages raise costs, squeezing dividends or raising prices. Midnight megaphones boost sales while annoying neighbours.", mood="teach", shot="close",
  board="Growth vs Local community noise/traffic")

# ---------------- ACT 2: OWNERSHIP & LIABILITY ----------------
card("ACT TWO: LEGAL STRUCTURE", "Dad visits the mall to pitch shares to a teenager.", 2.3)
scene("checkout", [("vani", 260), ("dad", 580), ("cashier", 1000)], "MEGA MALL CHECKOUT · Pitching To Kai")
L("dad", "Kai! Buy one share in Rao Bananas for ten pounds! Limited edition!", mood="smug", shot="two", prop="tablet")
L("cashier", "Mate, I scan baked beans. Are you incorporated at Companies House, or am I buying a receipt?", mood="deadpan", shot="close")
poof("centi", 780)
L("centi", "Listen to the cashier. Unincorporated businesses, sole traders and partnerships, have no separate legal identity from their owners.", mood="teach", shot="close",
  boardClear=True, board="UNINCORPORATED: owner = the business", diagram=D_OWN)
L("vani", "Which means unlimited liability! If the business collapses with debts, creditors claim the owner's personal savings, car, and Mum's sofa.", mood="worried", shot="close",
  board="UNLIMITED LIABILITY: personal assets lost")
L("dad", "What if I invite Uncle Hock in as a partner? Two heads, half the workload!", mood="thinking", shot="close")
L("centi", "A partnership shares capital, skills, and workload under a Deed of Partnership, yet ordinary partners still suffer unlimited liability and split profits.", mood="teach", shot="close",
  board="Partnership: shared skills, still unlimited")
L("vani", "To protect personal assets, you incorporate! A Private Limited Company, L T D, and a Public Limited Company, P L C, are separate legal entities with limited liability.", mood="happy", shot="close",
  boardClear=True, board="INCORPORATED: separate legal identity")
L("centi", "Shareholders only risk what they invested. An L T D sells shares privately to invited investors, keeping control safe.", mood="teach", shot="close",
  board="Ltd: private shares, keeps control")
L("centi", "A P L C floats on the stock exchange via an I P O, raising huge capital yet risking hostile takeovers and divorce between ownership and control.", mood="teach", shot="close",
  board="Plc: Stock Exchange, takeover risk!")
L("cashier", "Translation, Uncle. Keep your crayon share certificate.", mood="eyeroll", shot="close")

# ---------------- ACT 3: FRANCHISES, SECTORS & FAILURE ----------------
scene("hawker", [("mum", 240), ("vani", 540), ("dad", 760), ("uncle", 1000)], "UNCLE HOCK'S SMOOTHIE STALL")
L("mum", "Forget starting from zero! Uncle Hock runs a Boom Banana smoothie franchise. Why not buy a franchise?", mood="excited", shot="wide")
L("uncle", "Careful, sister! As franchisee, I got an established brand, training, bulk supplies, and national adverts, so banks lent to me easily.", mood="happy", shot="close", prop="plate")
L("uncle", "However, I paid a hefty start up fee, I hand over an ongoing royalty percentage of revenue every month, and I cannot invent durian smoothies!", mood="annoyed", shot="close")
L("vani", "Whereas the franchisor expands fast using franchisees' capital, though one sloppy franchisee could ruin the whole brand's reputation.", mood="thinking", shot="close",
  boardClear=True, board="FRANCHISEE: brand + training vs royalties")
L("dad", "Fine! What sector am I even in if I grow bananas, fry crisps, and run a smoothie cafe?", mood="thinking", shot="close",
  board="FRANCHISOR: fast growth vs brand risk")
L("vani", "All three economic sectors! Farming raw fruit is primary, manufacturing crisps is secondary, and retail service is tertiary.", mood="happy", shot="close",
  boardClear=True, board="Primary → Secondary → Tertiary", diagram=D_SECTORS)
L("mum", "Developing economies rely heavily on primary farming, industrialising ones grow secondary factories, and developed economies are dominated by tertiary services.", mood="smug", shot="close",
  board="Measure size: revenue, staff, cap. emp.")
L("vani", "Measure business size by revenue, employees, capital employed, or market share, never profit!", mood="teach", shot="close",
  board="NEVER measure business size by profit!")
L("mum", "And why do start ups fail? Poor cash flow, weak market research, lack of finance, and refusing to innovate!", mood="smug", shot="close")

# ---------------- ACT 4: EXAMINER STERLING TRAP ----------------
card("EXAMINER 9-MARK TRAP", "Examiner Sterling inspects Paper 1 scripts.", 2.3)
scene("classroom", [("vani", 260), ("dad", 580), ("teacher", 920)], "EDEXCEL 4BS1 EXAM HALL")
L("teacher", "Pens down! I am Examiner Sterling, and half the country just lost four marks on Paper One!", mood="annoyed", shot="wide", prop="book")
L("dad", "Did they spell banana with three n's?", mood="worried", shot="close")
L("teacher", "Worse! The case study showed a tiny sole trader baker with three staff wanting limited liability, and students told her to become a Public Limited Company!", mood="teach", shot="close",
  boardClear=True, board="TRAP 1: Never tell a small firm → PLC!", diagram=D_TRAP1)
L("vani", "Paper One covers small firms under fifty staff! A Private Limited Company gives limited liability cleanly without stock market flotation.", mood="happy", shot="close",
  board="Small firm fix: Partnership or Ltd")
L("teacher", "Trap two is zero A O two context! Generic phrases like the business sells products cap your marks. Name the bananas and Mum's sofa!", mood="teach", shot="close",
  board="TRAP 2: Generic 'the firm' = ZERO AO2!")
L("teacher", "Finish nine and twelve mark evaluations with A J I M. Answer, Justify in context, It depends on, and Most important factor.", mood="determined", shot="close", gap=0.5)

# ---------------- BUTTON ----------------
scene("living", [("vani", 260), ("mum", 580), ("dad", 920)])
L("dad", "Decision made! Rao Bananas L T D. Mum holds ninety nine percent of shares, so my sofa liability is zero!", mood="happy", shot="two", prop="tablet")
L("mum", "Hold on. As majority shareholder, my first board resolution is firing the chief executive.", mood="smug", shot="close")
sfx("trombone")
L("vani", "Divorce between ownership and Dad's ego, complete in ten seconds.", mood="deadpan", shot="close", gap=0.6)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Ledger gives you 5 seconds per question.", 2.6)
challenge(1, "A sole trader's personal assets are at risk for business debts. What is this called?", "UNLIMITED", "Owner & firm share 1 legal identity → Unlimited liability",
  "Question one. A sole trader's personal assets are at risk for business debts. What kind of liability is this?",
  "Unlimited liability. Because an unincorporated business has no separate legal identity from its owner.")
challenge(2, "Which incorporated structure sells shares privately to invited investors, NOT the public?", "LTD (PRIVATE)", "Private Limited Company (Ltd) = invited shareholders",
  "Question two. Which incorporated structure sells shares privately to invited investors rather than the general public?",
  "A Private Limited Company, L T D. You get limited liability without stock exchange flotation or hostile takeovers.")
challenge(3, "Which economic sector turns raw bananas into packaged banana crisps in a factory?", "SECONDARY", "Primary extracts · Secondary manufactures · Tertiary serves",
  "Question three. Which economic sector turns raw bananas into packaged banana crisps in a factory?",
  "The secondary sector, which manufactures and processes raw materials into finished goods.")
end_card()
