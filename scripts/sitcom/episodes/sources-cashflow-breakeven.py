# "Boardroom Bananas: Edexcel 4BS1" S01E05 "Profit Rich, Cash Broke"
# Topics 3.1–3.3: Sources of Finance, Cash vs Profit, Cash-Flow Forecasts, Costs, Contribution, Break-Even & Margin of Safety.

EP = dict(
    topic="sources-cashflow-breakeven",
    logline="Dad celebrates ten thousand pounds of paper profit on ninety-day credit while his bank account hits zero on rent day—and he bought a van on an overdraft! "
            "Vani, Ledger and Examiner Sterling master finance sources, cash-flow forecasts and break-even."
)

D_FIN = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 205">
<rect width="520" height="205" rx="12" fill="#0f172a"/>
<rect x="12" y="16" width="156" height="174" rx="10" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
<rect x="182" y="16" width="156" height="174" rx="10" fill="#451a03" stroke="#f59e0b" stroke-width="2"/>
<rect x="352" y="16" width="156" height="174" rx="10" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2"/>
<text x="90" y="38" font-family="sans-serif" font-size="13" font-weight="bold" fill="#86efac" text-anchor="middle">INTERNAL</text>
<text x="22" y="64" font-family="sans-serif" font-size="11" fill="#fff">• Retained profit (0% int.)</text>
<text x="22" y="88" font-family="sans-serif" font-size="11" fill="#fff">• Owner personal savings</text>
<text x="22" y="112" font-family="sans-serif" font-size="11" fill="#fff">• Selling surplus assets</text>
<text x="22" y="148" font-family="sans-serif" font-size="11" fill="#a7f3d0">✓ No interest or control</text>
<text x="22" y="168" font-family="sans-serif" font-size="11" fill="#fca5a5">✗ Limited amount</text>
<text x="260" y="38" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fcd34d" text-anchor="middle">SHORT EXTERNAL</text>
<text x="192" y="64" font-family="sans-serif" font-size="11" fill="#fff">• Bank overdraft</text>
<text x="192" y="88" font-family="sans-serif" font-size="11" fill="#fff">• Trade credit (30–60d)</text>
<text x="192" y="112" font-family="sans-serif" font-size="11" fill="#fff">• Debt factoring</text>
<text x="192" y="148" font-family="sans-serif" font-size="11" fill="#fde68a">For working capital</text>
<text x="192" y="168" font-family="sans-serif" font-size="11" fill="#fde68a">(stock &amp; cash dips)</text>
<text x="430" y="38" font-family="sans-serif" font-size="13" font-weight="bold" fill="#93c5fd" text-anchor="middle">LONG EXTERNAL</text>
<text x="362" y="64" font-family="sans-serif" font-size="11" fill="#fff">• Bank loan / Mortgage</text>
<text x="362" y="88" font-family="sans-serif" font-size="11" fill="#fff">• Leasing / Hire purchase</text>
<text x="362" y="112" font-family="sans-serif" font-size="11" fill="#fff">• Share capital / VC</text>
<text x="362" y="134" font-family="sans-serif" font-size="11" fill="#fff">• Crowdfunding / Grants</text>
<text x="362" y="168" font-family="sans-serif" font-size="11" fill="#bae6fd">For Capital Expenditure!</text>
</svg>"""

D_CF = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 210">
<rect width="520" height="210" rx="12" fill="#0f172a"/>
<text x="260" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fde047" text-anchor="middle">CASH-FLOW FORECAST (£) — BRACKETS = NEGATIVE!</text>
<rect x="20" y="36" width="480" height="128" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
<text x="34" y="58" font-family="sans-serif" font-size="12" font-weight="bold" fill="#94a3b8">ROW</text>
<text x="280" y="58" font-family="sans-serif" font-size="12" font-weight="bold" fill="#7dd3fc" text-anchor="middle">JAN</text>
<text x="410" y="58" font-family="sans-serif" font-size="12" font-weight="bold" fill="#7dd3fc" text-anchor="middle">FEB</text>
<text x="34" y="82" font-family="sans-serif" font-size="12" fill="#fff">Cash Inflows − Outflows = NCF</text>
<text x="280" y="82" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fca5a5" text-anchor="middle">(1,500)</text>
<text x="410" y="82" font-family="sans-serif" font-size="12" font-weight="bold" fill="#86efac" text-anchor="middle">2,200</text>
<text x="34" y="112" font-family="sans-serif" font-size="12" fill="#cbd5e1">Opening Balance (prev. Closing)</text>
<text x="280" y="112" font-family="sans-serif" font-size="12" fill="#fff" text-anchor="middle">1,000</text>
<text x="410" y="112" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fca5a5" text-anchor="middle">(500)</text>
<text x="34" y="142" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fde047">Closing Balance (Open + NCF)</text>
<text x="280" y="142" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fca5a5" text-anchor="middle">(500)</text>
<text x="410" y="142" font-family="sans-serif" font-size="12" font-weight="bold" fill="#86efac" text-anchor="middle">1,700</text>
<text x="260" y="190" font-family="sans-serif" font-size="12" fill="#86efac" text-anchor="middle">Fix deficit: Overdraft · Chase receivables · Longer trade credit · Lease</text>
</svg>"""

D_BEP = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<rect width="520" height="220" rx="12" fill="#0f172a"/>
<line x1="60" y1="185" x2="480" y2="185" stroke="#94a3b8" stroke-width="2"/>
<line x1="60" y1="185" x2="60" y2="20" stroke="#94a3b8" stroke-width="2"/>
<line x1="60" y1="135" x2="460" y2="135" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6 4"/>
<line x1="60" y1="135" x2="460" y2="45" stroke="#f87171" stroke-width="3"/>
<line x1="60" y1="185" x2="460" y2="25" stroke="#34d399" stroke-width="3"/>
<circle cx="282" cy="85" r="6" fill="#fde047"/>
<line x1="282" y1="85" x2="282" y2="185" stroke="#fde047" stroke-width="2" stroke-dasharray="4 4"/>
<line x1="380" y1="57" x2="380" y2="185" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 4"/>
<text x="466" y="139" font-family="sans-serif" font-size="11" font-weight="bold" fill="#fcd34d">FC</text>
<text x="466" y="48" font-family="sans-serif" font-size="11" font-weight="bold" fill="#fca5a5">TC</text>
<text x="466" y="28" font-family="sans-serif" font-size="11" font-weight="bold" fill="#86efac">TR</text>
<text x="282" y="72" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fde047" text-anchor="middle">BEP = 800</text>
<text x="331" y="206" font-family="sans-serif" font-size="12" font-weight="bold" fill="#7dd3fc" text-anchor="middle">MoS = 300 (1,100 − 800)</text>
<text x="150" y="40" font-family="sans-serif" font-size="12" fill="#e2e8f0">BEP = FC ÷ (SP − VC)</text>
<text x="150" y="58" font-family="sans-serif" font-size="12" fill="#fde047">2,400 ÷ (5 − 2) = 800</text>
</svg>"""

D_TRAP5 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 185">
<rect width="520" height="185" rx="12" fill="#1e1b4b"/>
<rect x="16" y="14" width="488" height="38" rx="8" fill="#be185d"/>
<text x="260" y="38" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">EXAMINER PAPER 1 &amp; 2 FINANCE TRAPS</text>
<text x="28" y="78" font-family="sans-serif" font-size="13" fill="#fda4af">✗ TRAP 1: Saying 'taking a bank loan increases profit' — NO, it boosts CASH!</text>
<text x="28" y="106" font-family="sans-serif" font-size="13" fill="#86efac">✓ TRAP 2: Brackets (500) = −500! So Opening (500) + NCF (300) = (800)!</text>
<text x="28" y="134" font-family="sans-serif" font-size="13" fill="#7dd3fc">✓ TRAP 3: Divide Fixed Costs by CONTRIBUTION (SP − VC), never Selling Price!</text>
<text x="28" y="162" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fde047">✓ Match finance horizon: Overdraft → cash dip · Loan/Lease → 5-year van!</text>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("kitchen", [("vani", 260), ("mum", 580), ("dad", 920)])
L("dad", "Pop the sparkling apple juice! I sold ten thousand pounds of smoothies to Grand Hotel, so we are officially ten thousand pounds richer!", mood="excited", shot="wide", prop="plate")
L("mum", "Wonderful! Pay the landlord the two thousand pounds rent waiting at the front door.", mood="happy", shot="two")
L("dad", "Tiny detail! The hotel pays in ninety days on trade credit, and our bank balance is minus four hundred pounds because I bought a delivery van using my bank overdraft!", mood="worried", shot="close", prop="phone")
L("vani", "Dad! You bought a five year asset on a daily overdraft, AND you are about to go insolvent while making a profit!", mood="shock", shot="close")
freeze("PROFIT RICH CASH BROKE", 2.4, narrator="Narrator: The landlord did not accept ninety-day promises.")

confess("mum", "MUM · Household Chief Treasury Officer")
L("mum", "Vikram thinks paper profit pays electricity bills. Ledger, step out of that calculator and audit this man immediately.", mood="annoyed", prop="calculator", gap=0.5)

title()

# ---------------- ACT 1: SOURCES OF FINANCE ----------------
scene("living", [("vani", 260), ("dad", 560)])
poof("centi", 920)
L("centi", "Topic three point one! Match finance to the spending horizon.", mood="teach", shot="close",
  boardClear=True, board="Capital Exp (van) vs Revenue Exp (fruit)", diagram=D_FIN)
L("centi", "Short term revenue expenditure buys daily stock, while long term capital expenditure buys vans and machinery.", mood="teach", shot="close")
L("vani", "Start with internal finance! Retained profit has zero interest and no loss of control, though new start ups have none yet.", mood="happy", shot="close",
  board="INTERNAL: retained profit, savings, assets")
L("vani", "Owners can also invest personal savings or sell surplus assets!", mood="happy", shot="close")
L("centi", "Short term external finance covers temporary working capital dips! A bank overdraft lets your account go negative flexibly, yet charges high variable interest.", mood="teach", shot="close",
  board="SHORT: overdraft, trade credit, factoring")
L("vani", "Trade credit lets you buy fruit today and pay suppliers in thirty days interest free.", mood="happy", shot="close")
L("vani", "And debt factoring sells unpaid invoices to an agency for instant cash minus a fee!", mood="thinking", shot="close")
L("dad", "So how SHOULD I finance my five year refrigerated banana van?", mood="thinking", shot="close")
L("centi", "Long term external finance! Use a five year bank loan with fixed monthly repayments, hire purchase, or leasing!", mood="teach", shot="close",
  boardClear=True, board="LONG: bank loan, lease, hire purchase")
L("centi", "Leasing avoids a huge upfront cash payment and often includes maintenance, though you never own the van.", mood="teach", shot="close")
L("vani", "Growing firms also use commercial mortgages, share capital, venture capital, crowdfunding, or government grants!", mood="happy", shot="close",
  board="Also: shares, venture cap, crowdfunding")

# ---------------- ACT 2: CASH VS PROFIT & CASH-FLOW FORECASTS ----------------
card("ACT TWO: LIQUIDITY EMERGENCY", "Uncle Hock inspects the cash-flow table.", 2.3)
scene("hawker", [("vani", 240), ("mum", 540), ("dad", 780), ("uncle", 1000)], "UNCLE HOCK'S COUNTER · Cash-Flow Clinic")
L("uncle", "Listen closely, Vikram! Topic three point two explains why profitable businesses collapse.", mood="teach", shot="wide", prop="calculator")
L("uncle", "Profit records revenue minus costs when a sale is agreed, even on ninety day credit!", mood="teach", shot="close")
L("mum", "Whereas cash is liquid money in your bank right now to pay wages and rent. Run out of cash and you face insolvency!", mood="determined", shot="close",
  boardClear=True, board="PROFIT ≠ CASH (credit sales delay cash!)")
L("vani", "Build a six month cash flow forecast using three golden formulas!", mood="teach", shot="close",
  boardClear=True, board="NCF = Cash Inflows − Cash Outflows", diagram=D_CF)
L("vani", "One, Net Cash Flow equals Cash Inflows minus Cash Outflows. January is negative fifteen hundred pounds in brackets!", mood="happy", shot="close",
  board="Closing = Opening Balance + NCF")
L("mum", "Two, Closing Balance equals Opening Balance plus Net Cash Flow. One thousand plus negative fifteen hundred equals negative five hundred in brackets!", mood="teach", shot="close",
  board="Next Opening = Previous Closing!")
L("uncle", "Three, January's Closing Balance becomes February's Opening Balance! Negative five hundred plus twenty two hundred gives positive seventeen hundred!", mood="happy", shot="close")
L("dad", "How do I survive January's five hundred pound cash deficit?", mood="worried", shot="close")
L("vani", "Arrange an overdraft early, or chase Grand Hotel's receivables faster!", mood="determined", shot="close")
L("mum", "You can also negotiate longer trade credit with suppliers, or lease equipment instead of buying outright!", mood="teach", shot="close")
L("uncle", "See? Four practical Paper One cash flow fixes without touching a magic wand.", mood="smug", shot="close")

# ---------------- ACT 3: COSTS, CONTRIBUTION & BREAK-EVEN ----------------
scene("kitchen", [("mum", 260), ("vani", 580), ("dad", 920)])
L("dad", "Smoothies sell at five pounds, variable fruit and cup cost is two pounds, and monthly fixed costs are two thousand four hundred pounds.", mood="thinking", shot="wide", prop="tablet")
L("dad", "How many cups must I sell to stop losing money?", mood="worried", shot="close")
L("vani", "Topic three point three, Break Even! Fixed costs stay at two thousand four hundred even at zero output.", mood="teach", shot="close",
  boardClear=True, board="FC = £2,400 · SP = £5 · VC = £2/unit")
L("vani", "Variable costs rise with every cup, and Total Costs equal Fixed Costs plus Variable Costs!", mood="happy", shot="close")
L("mum", "First find Contribution per unit! Selling Price minus Variable Cost, five minus two equals three pounds per cup!", mood="happy", shot="close",
  board="Contribution = SP − VC = £3 per cup")
L("vani", "Now divide Fixed Costs by Contribution! Two thousand four hundred divided by three equals eight hundred cups to break even!", mood="excited", shot="close",
  boardClear=True, board="BEP = FC ÷ Contribution = 800 cups", diagram=D_BEP)
L("dad", "And if Kai and I sell eleven hundred cups next month?", mood="excited", shot="close")
L("vani", "Margin of Safety is Actual Output minus Break Even! Eleven hundred minus eight hundred leaves a three hundred cup buffer!", mood="happy", shot="close",
  board="Margin of Safety = 1,100 − 800 = 300")
L("mum", "For evaluation, break even assumes every unit made is sold at one price, and ignores bulk discounts that bend cost lines.", mood="smug", shot="close",
  board="Limits: assumes all sold & linear costs")

# ---------------- ACT 4: EXAMINER STERLING TRAP ----------------
card("EXAMINER 9-MARK TRAP", "Examiner Sterling circles three finance howlers.", 2.3)
scene("classroom", [("vani", 260), ("dad", 580), ("teacher", 920)], "EDEXCEL 4BS1 EXAM HALL")
L("teacher", "Red pen alert! Three finance blunders ruin marks every summer! One, writing that a bank loan boosts profit.", mood="annoyed", shot="wide", prop="book")
L("dad", "A loan boosts cash inflow today, while loan interest actually reduces net profit!", mood="happy", shot="close")
L("teacher", "Two, brackets mean minus! Opening Balance five hundred in brackets plus Net Cash Flow three hundred in brackets equals eight hundred in brackets!", mood="teach", shot="close",
  boardClear=True, board="TRAP: (500) + (300) = (800), NOT (200)!", diagram=D_TRAP5)
L("teacher", "And three, always divide Fixed Costs by Contribution per unit, never by Selling Price!", mood="happy", shot="close",
  board="BEP = FC ÷ (SP − VC), never FC ÷ SP!")
L("vani", "Evaluate finance choices with A J I M, weighing interest cost against dilution of control!", mood="determined", shot="close", gap=0.5)

# ---------------- BUTTON ----------------
scene("living", [("vani", 260), ("mum", 580), ("dad", 920)])
L("dad", "Good news! I leased the van, chased a fifty percent deposit from Grand Hotel, and sold cup number eight hundred and one!", mood="excited", shot="two", prop="plate")
L("mum", "Three pounds of pure operating profit! Spend it wisely.", mood="smug", shot="close")
L("dad", "I just ordered a three thousand pound gold smoothie trophy on thirty day credit.", mood="smug", shot="close")
sfx("trombone")
L("vani", "Ledger, lock his wallet in the freezer.", mood="deadpan", shot="close", gap=0.5)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "5 seconds per finance calculation!", 2.6)
challenge(1, "Fixed Costs = £2,400, Selling Price = £5, Variable Cost = £2. What is Break-Even Output?", "800 UNITS", "Contribution = £5 − £2 = £3 · BEP = £2,400 ÷ £3 = 800",
  "Question one. Fixed costs are two thousand four hundred pounds, selling price is five pounds, and variable cost is two pounds. What is break even output?",
  "Eight hundred units! Contribution is five minus two equals three pounds, and two thousand four hundred divided by three is eight hundred.")
challenge(2, "Opening Balance is (£500) and Net Cash Flow is £1,200. What is the Closing Balance?", "£700", "Closing = Opening + NCF = −500 + 1,200 = £700",
  "Question two. Opening balance is negative five hundred pounds in brackets, and net cash flow is positive one thousand two hundred pounds. What is the closing balance?",
  "Positive seven hundred pounds! Negative five hundred plus one thousand two hundred equals seven hundred.")
challenge(3, "Actual sales are 1,100 cups and Break-Even Output is 800 cups. What is the Margin of Safety?", "300 CUPS", "Margin of Safety = Actual Output − Break-Even = 1,100 − 800",
  "Question three. Actual sales are one thousand one hundred cups and break even output is eight hundred cups. What is the margin of safety?",
  "Three hundred cups! Subtract break even output of eight hundred from actual output of one thousand one hundred.")
end_card()
