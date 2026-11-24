# "Boardroom Bananas: Edexcel 4BS1" S01E06 "Margin Of Error"
# Topics 3.4–3.5: Income Statement, Statement of Financial Position, GPM vs Markup, OPM, ROCE, Current & Acid-Test Ratios.

EP = dict(
    topic="accounts-ratios",
    logline="Dad confuses Gross Profit Margin with Markup, counts rotting brown bananas as instant cash in his Acid-Test Ratio, and brags about a tiny ROCE. "
            "Vani, Ledger and Examiner Sterling untangle both financial statements and every 4BS1 ratio."
)

D_SOCI = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<text x="350" y="40" font-family="sans-serif" font-size="29" font-weight="bold" fill="#fde047" text-anchor="middle">INCOME STATEMENT (£)</text>
<rect x="16" y="54" width="668" height="52" rx="8" fill="#1e3a8a"/>
<text x="32" y="90" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fff">Rev 100k − CoS 60k</text>
<text x="668" y="90" font-family="sans-serif" font-size="28" font-weight="bold" fill="#7dd3fc" text-anchor="end">GP = £40k</text>
<rect x="16" y="116" width="668" height="52" rx="8" fill="#065f46"/>
<text x="32" y="152" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fff">GP 40k − Overheads 25k</text>
<text x="668" y="152" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac" text-anchor="end">OP = £15k</text>
<rect x="16" y="178" width="668" height="52" rx="8" fill="#581c87"/>
<text x="32" y="214" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fff">OP 15k − Int &amp; Tax 4k</text>
<text x="668" y="214" font-family="sans-serif" font-size="28" font-weight="bold" fill="#e9d5ff" text-anchor="end">Net = £11k</text>
<rect x="16" y="242" width="668" height="64" rx="10" fill="#1e293b"/>
<text x="350" y="284" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047" text-anchor="middle">Working Cap = CA − CL · Cap Emp = Eq+NCL</text>
</svg>"""

D_PROF = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<rect x="14" y="14" width="328" height="186" rx="12" fill="#1e3a8a" stroke="#38bdf8" stroke-width="3"/>
<rect x="358" y="14" width="328" height="186" rx="12" fill="#7c2d12" stroke="#fb923c" stroke-width="3"/>
<text x="178" y="54" font-family="sans-serif" font-size="28" font-weight="bold" fill="#7dd3fc" text-anchor="middle">GPM (÷ REVENUE)</text>
<text x="178" y="100" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fff" text-anchor="middle">40k ÷ 100k = 40%</text>
<text x="178" y="152" font-family="sans-serif" font-size="28" fill="#bae6fd" text-anchor="middle">OPM = OP÷Rev = 15%</text>
<text x="522" y="54" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fed7aa" text-anchor="middle">MARKUP (÷ COST)</text>
<text x="522" y="100" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047" text-anchor="middle">40k ÷ 60k = 66.7%</text>
<text x="522" y="152" font-family="sans-serif" font-size="28" fill="#fca5a5" text-anchor="middle">Divides by CoS!</text>
<rect x="14" y="214" width="672" height="92" rx="12" fill="#064e3b" stroke="#34d399" stroke-width="3"/>
<text x="350" y="252" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac" text-anchor="middle">ROCE = (OP ÷ Capital Employed) × 100</text>
<text x="350" y="290" font-family="sans-serif" font-size="28" fill="#fff" text-anchor="middle">£15k ÷ £75k = 20% (vs bank interest)</text>
</svg>"""

D_LIQ = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<text x="350" y="42" font-family="sans-serif" font-size="29" font-weight="bold" fill="#fde047" text-anchor="middle">LIQUIDITY RATIOS (X : 1)</text>
<rect x="14" y="60" width="328" height="246" rx="12" fill="#1e293b" stroke="#60a5fa" stroke-width="3"/>
<rect x="358" y="60" width="328" height="246" rx="12" fill="#451a03" stroke="#f59e0b" stroke-width="3"/>
<text x="178" y="102" font-family="sans-serif" font-size="28" font-weight="bold" fill="#93c5fd" text-anchor="middle">CURRENT RATIO</text>
<text x="178" y="148" font-family="sans-serif" font-size="28" fill="#fff" text-anchor="middle">CA ÷ CL</text>
<text x="178" y="198" font-family="sans-serif" font-size="29" font-weight="bold" fill="#86efac" text-anchor="middle">30k ÷ 20k = 1.5 : 1</text>
<text x="178" y="248" font-family="sans-serif" font-size="28" fill="#cbd5e1" text-anchor="middle">Ideal: 1.5–2 : 1</text>
<text x="522" y="102" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fcd34d" text-anchor="middle">ACID-TEST RATIO</text>
<text x="522" y="148" font-family="sans-serif" font-size="28" fill="#fff" text-anchor="middle">(CA − Stock) ÷ CL</text>
<text x="522" y="198" font-family="sans-serif" font-size="29" font-weight="bold" fill="#fca5a5" text-anchor="middle">16k ÷ 20k = 0.8 : 1</text>
<text x="522" y="248" font-family="sans-serif" font-size="28" fill="#fde68a" text-anchor="middle">Ideal: ~ 1 : 1</text>
</svg>"""

D_TRAP6 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#1e1b4b"/>
<rect x="16" y="16" width="668" height="56" rx="10" fill="#be185d"/>
<text x="350" y="54" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fff" text-anchor="middle">RATIO &amp; ACCOUNTS TRAPS</text>
<text x="28" y="116" font-family="sans-serif" font-size="28" fill="#fda4af">✗ Don't swap GPM (÷Rev) &amp; Markup (÷CoS)</text>
<text x="28" y="170" font-family="sans-serif" font-size="28" fill="#fda4af">✗ Subtract INVENTORY in Acid-Test!</text>
<text x="28" y="224" font-family="sans-serif" font-size="28" fill="#86efac">✓ Profit/ROCE = % · Liquidity = : 1</text>
<text x="28" y="280" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047">✓ Limits: Historic · Window dressing</text>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("kitchen", [("vani", 260), ("mum", 580), ("dad", 920)])
L("dad", "Feast your eyes on Rao Bananas' annual accounts! I declared a sixty seven percent Gross Profit Margin by dividing Gross Profit by Cost of Sales!", mood="smug", shot="wide", prop="tablet")
L("vani", "Dad! Dividing Gross Profit by Cost of Sales is Markup, NOT Gross Profit Margin!", mood="shock", shot="close")
L("mum", "And why have you listed fourteen thousand pounds of mushy brown bananas in the garage as instant liquid cash?", mood="annoyed", shot="two")
L("dad", "Because Current Assets are Current Assets! Plus we earned a mighty three percent Return on Capital Employed!", mood="excited", shot="close")
L("mum", "My ordinary high street savings account pays five percent risk free without smelling of overripe fruit!", mood="deadpan", shot="close")
freeze("MUSHY LIQUIDITY?!", 2.4, narrator="Narrator: Even the fruit flies were shorting Dad's shares.")

confess("vani", "VANISHREE RAO · Teenage Forensic Accountant")
L("vani", "Two financial statements, five core ratios, and one delusional Chief Executive. Ledger, power up the holo board!", mood="determined", prop="calculator", gap=0.5)

title()

# ---------------- ACT 1: BOTH FINANCIAL STATEMENTS ----------------
scene("living", [("vani", 260), ("dad", 560)])
poof("centi", 920)
L("centi", "Topic three point four! First, the Statement of Comprehensive Income tracks revenue, costs, and profit over a year.", mood="teach", shot="close",
  boardClear=True, board="INCOME STATEMENT: 1-year profit flow", diagram=D_SOCI)
L("vani", "Revenue of one hundred thousand pounds minus Cost of Sales of sixty thousand gives Gross Profit of forty thousand.", mood="happy", shot="close",
  board="GP = Revenue − Cost of Sales")
L("centi", "Subtract overheads like rent and salaries, twenty five thousand, leaving Operating Profit of fifteen thousand pounds.", mood="teach", shot="close",
  board="OP = Gross Profit − Expenses")
L("vani", "Then subtract interest and tax to get Profit for the Year, split between dividends and retained profit!", mood="happy", shot="close")
L("dad", "What about the Statement of Financial Position?", mood="thinking", shot="close")
L("centi", "The Statement of Financial Position is a balance sheet snapshot showing assets, liabilities, and equity on one day.", mood="teach", shot="close",
  boardClear=True, board="BALANCE SHEET: Assets, Liab. & Equity")
L("vani", "Non current assets stay over a year, vans and machinery. Current assets turn to cash within a year, inventory, receivables, and cash.", mood="happy", shot="close",
  board="Working Capital = CA − CL")
L("centi", "Current Assets minus Current Liabilities gives Net Current Assets, also called Working Capital!", mood="teach", shot="close",
  board="Cap. Employed = Equity + Non-Curr Liab.")
L("vani", "And Total Equity plus Non Current Liabilities equals Capital Employed, the total long term funds invested!", mood="happy", shot="close")

# ---------------- ACT 2: PROFITABILITY RATIOS & ROCE ----------------
card("ACT TWO: MARGIN VS MARKUP", "Kai checks Dad's percentage maths at the counter.", 2.3)
scene("checkout", [("vani", 240), ("dad", 560), ("cashier", 1000)], "SMOOTHIE COUNTER · Profitability Audit")
L("cashier", "Boss, let us check your sixty seven percent boast. Profitability ratios use percentages, and denominators matter!", mood="smug", shot="wide", prop="calculator")
L("vani", "Gross Profit Margin is Gross Profit divided by Revenue times one hundred! Forty thousand over one hundred thousand is forty percent.", mood="teach", shot="close",
  boardClear=True, board="GPM = (GP ÷ Revenue) × 100 = 40%", diagram=D_PROF)
L("cashier", "Markup is Gross Profit divided by Cost of Sales times one hundred! Forty thousand over sixty thousand is sixty six point seven percent.", mood="happy", shot="close",
  board="Markup = (GP ÷ Cost of Sales) × 100")
L("dad", "What about Operating Profit Margin, and how do we raise them?", mood="thinking", shot="close")
L("vani", "Operating Profit Margin is Operating Profit divided by Revenue times one hundred, giving fifteen percent.", mood="teach", shot="close",
  board="OPM = (OP ÷ Revenue) × 100 = 15%")
L("vani", "Boost Gross Margin via cheaper supplier stock or higher prices if demand is inelastic.", mood="determined", shot="close",
  boardClear=True, board="Boost GPM: cheaper stock / raise price")
L("vani", "Boost Operating Margin by trimming overheads like rent, energy, or admin expenses!", mood="happy", shot="close")
L("cashier", "Next, Return on Capital Employed, R O C E! Operating Profit divided by Capital Employed times one hundred.", mood="teach", shot="close",
  board="ROCE = (OP ÷ Capital Employed) × 100")
L("vani", "Fifteen thousand divided by seventy five thousand gives twenty percent R O C E, easily beating a five percent bank savings rate!", mood="happy", shot="close",
  board="Compare ROCE vs bank interest & rivals!")
L("dad", "Twenty percent! Take that, Mum's savings account!", mood="excited", shot="close")
L("cashier", "Easy tiger, we have not checked your bank balance yet!", mood="smug", shot="close")

# ---------------- ACT 3: LIQUIDITY RATIOS & LIMITATIONS ----------------
scene("hawker", [("mum", 240), ("vani", 540), ("dad", 780), ("uncle", 1000)], "UNCLE HOCK'S STALL · Liquidity Test")
L("uncle", "Hold on, Vikram! High profit does not prove liquidity! Can you pay bills due this month?", mood="happy", shot="wide", prop="plate")
L("mum", "Test liquidity with Current Ratio and Acid Test Ratio, written against one!", mood="teach", shot="close",
  boardClear=True, board="Current Ratio = CA ÷ CL (30k÷20k = 1.5:1)", diagram=D_LIQ)
L("vani", "Thirty thousand Current Assets divided by twenty thousand Current Liabilities gives one point five to one, a healthy Current Ratio!", mood="happy", shot="close",
  board="Healthy Current Ratio: 1.5 : 1 to 2 : 1")
L("mum", "Except fourteen thousand of that thirty thousand is mushy banana inventory in our warm garage!", mood="annoyed", shot="close")
L("uncle", "So banks check the Acid Test Ratio! Subtract Inventory from Current Assets first, then divide by Current Liabilities!", mood="teach", shot="close",
  board="Acid-Test = (CA − Inventory) ÷ CL")
L("vani", "Thirty minus fourteen leaves sixteen thousand. Divide by twenty thousand and Acid Test drops to zero point eight to one!", mood="worried", shot="close")
L("dad", "Below one to one! Why subtract my lovely bananas?", mood="shock", shot="close")
L("mum", "Because inventory is the least liquid current asset! It may rot or need steep discounts to turn into cash!", mood="teach", shot="close",
  boardClear=True, board="Below 1:1 Acid-Test = liquidity risk!")
L("vani", "Only cash rich supermarkets safely run below one to one because stock sells in days.", mood="thinking", shot="close")
L("vani", "And remember accounts limitations! Figures are historical, may be window dressed, and ignore staff morale or brand loyalty!", mood="happy", shot="close",
  board="Limits: historical, window-dressed, no HR")

# ---------------- ACT 4: EXAMINER STERLING TRAP ----------------
card("EXAMINER 12-MARK TRAP", "Examiner Sterling checks formulas and units.", 2.3)
scene("classroom", [("vani", 260), ("dad", 580), ("teacher", 920)], "EDEXCEL 4BS1 EXAM HALL")
L("teacher", "Stop writing! Students drop easy marks on Topic Three point five every June!", mood="annoyed", shot="wide", prop="book")
L("dad", "Margin divides by Revenue, Markup divides by Cost of Sales, and Acid Test subtracts Inventory!", mood="determined", shot="close")
L("teacher", "Good! Now nail your units! Profitability and R O C E use percent, whereas liquidity ratios use to one, never percent!", mood="teach", shot="close",
  boardClear=True, board="TRAP: % for profit/ROCE · :1 for liquidity!", diagram=D_TRAP6)
L("vani", "In twelve mark investment questions, compare trends across years, rival benchmarks, bank rates, and non financial risks!", mood="happy", shot="close",
  board="Compare trends, rivals & bank rates!")
L("teacher", "And a Current Ratio of five to one is NOT great, it means idle working capital locked in stock or cash!", mood="determined", shot="close", gap=0.5)

# ---------------- BUTTON ----------------
scene("living", [("vani", 260), ("mum", 580), ("dad", 920)])
L("dad", "Emergency smoothie flash sale complete! We turned the garage inventory into cash and lifted our Acid Test Ratio to one point one to one!", mood="happy", shot="two", prop="plate")
L("mum", "Impressive! Who bought fourteen thousand pounds of brown bananas?", mood="thinking", shot="close")
L("dad", "Uncle Hock's banana bread bakery! Though he paid me in banana bread, so our garage is full again.", mood="worried", shot="close")
sfx("trombone")
L("vani", "Back to subtracting inventory, everyone.", mood="deadpan", shot="close", gap=0.5)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "5 seconds per ratio with Ledger!", 2.6)
challenge(1, "Revenue = £100,000, Cost of Sales = £60,000, Gross Profit = £40,000. What is Gross Profit Margin?", "40%", "GPM = (Gross Profit ÷ Revenue) × 100 = 40k ÷ 100k × 100",
  "Question one. Revenue is one hundred thousand pounds, cost of sales is sixty thousand, and gross profit is forty thousand. What is the gross profit margin?",
  "Forty percent! Divide gross profit of forty thousand by revenue of one hundred thousand, times one hundred.")
challenge(2, "Current Assets = £30k, Inventory = £14k, Current Liabilities = £20k. What is the Acid-Test Ratio?", "0.8 : 1", "Acid-Test = (30k − 14k) ÷ 20k = 16k ÷ 20k = 0.8 : 1",
  "Question two. Current assets are thirty thousand pounds, inventory is fourteen thousand, and current liabilities are twenty thousand. What is the acid test ratio?",
  "Zero point eight to one! Subtract inventory first to get sixteen thousand, then divide by twenty thousand.")
challenge(3, "Operating Profit is £15,000 and Capital Employed is £75,000. What is ROCE?", "20%", "ROCE = (Operating Profit ÷ Capital Employed) × 100",
  "Question three. Operating profit is fifteen thousand pounds and capital employed is seventy five thousand pounds. What is Return on Capital Employed?",
  "Twenty percent! Divide operating profit of fifteen thousand by capital employed of seventy five thousand, times one hundred.")
end_card()
