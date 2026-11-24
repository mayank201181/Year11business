import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "accounts-ratios-m1",
    title: "Paper 1: Financial Statements & Core Margins",
    questions: [
      {
        id: "accounts-ratios-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "income-statement",
        question:
          "Which line on a Statement of Comprehensive Income is calculated directly by subtracting **Cost of Sales** from **Revenue**?",
        options: [
          "Gross Profit",
          "Operating Profit",
          "Profit for the Year",
          "Retained Profit",
        ],
        answerIndex: 0,
        hints: [
          "Think about the very first profit subtotal at the top of an Income Statement.",
          "Overhead expenses, interest and tax have NOT been deducted yet.",
        ],
        explanation:
          "**Gross Profit** equals `Revenue − Cost of Sales`. Operating Profit additionally deducts overhead expenses, Profit for the Year deducts finance costs and tax, and Retained Profit also deducts dividends.",
      },
      {
        id: "accounts-ratios-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "income-statement",
        question:
          "A handmade soap maker earns Revenue of £95,000. Essential oils, wax and packaging cost £34,000, while workshop rent, insurance and marketing cost £29,000. What is its **Operating Profit**?",
        options: ["£61,000", "£66,000", "£34,000", "£32,000"],
        answerIndex: 3,
        hints: [
          "First subtract direct Cost of Sales (£34,000) from Revenue (£95,000) to get Gross Profit.",
          "Then subtract overhead Expenses (£29,000) from Gross Profit.",
        ],
        explanation:
          "Gross Profit = £95,000 − £34,000 = £61,000. Subtracting overhead expenses of £29,000 gives **Operating Profit = £32,000**. Choosing £61,000 stops too early at Gross Profit.",
      },
      {
        id: "accounts-ratios-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "income-statement",
        question:
          "For an artisan pizzeria, which of the following would be classified under **Cost of Sales** rather than **Expenses**?",
        options: [
          "Mozzarella cheese and pizza dough ingredients",
          "Annual buildings insurance for the restaurant",
          "Monthly salary of the head-office bookkeeper",
          "Interest paid on a 5-year commercial bank loan",
        ],
        answerIndex: 0,
        hints: [
          "Cost of Sales includes direct inputs physically used up in making each unit sold.",
          "Rent, insurance and admin salaries are overhead expenses; loan interest is a finance cost.",
        ],
        explanation:
          "**Mozzarella cheese and pizza dough** vary directly with each pizza baked and sold, making them **Cost of Sales**. Insurance and bookkeeper salaries are overhead **Expenses**, while loan interest is a **Finance Cost**.",
      },
      {
        id: "accounts-ratios-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "financial-position",
        question:
          "Which item appears under **Non-Current Assets** on a Statement of Financial Position?",
        options: [
          "Trade receivables owed by credit customers within 30 days",
          "Unsold finished hoodies in the warehouse",
          "Refrigerated delivery vans used by the business for 6 years",
          "A 10-year commercial mortgage from a high-street bank",
        ],
        answerIndex: 2,
        hints: [
          "An asset is something the business *owns*; 'Non-Current' means kept for use for more than 12 months.",
          "Mortgages are liabilities, while receivables and stock are Current Assets.",
        ],
        explanation:
          "**Refrigerated delivery vans** are owned by the firm for long-term operational use (> 1 year), making them **Non-Current Assets**. Receivables and unsold hoodies are Current Assets; a mortgage is a Non-Current Liability.",
      },
      {
        id: "accounts-ratios-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "financial-position",
        question:
          "Harbour Books Ltd holds Current Assets of £84,000 and Current Liabilities of £52,000. Its Non-Current Assets are £210,000. What is its **Working Capital (Net Current Assets)**?",
        options: ["£158,000", "£136,000", "£242,000", "£32,000"],
        answerIndex: 3,
        hints: [
          "Working Capital measures short-term day-to-day liquidity only — ignore Non-Current Assets!",
          "Apply `Working Capital = Current Assets − Current Liabilities`.",
        ],
        explanation:
          "**Working Capital** = Current Assets (£84,000) − Current Liabilities (£52,000) = **£32,000**. Non-Current Assets (£210,000) are long-term assets and do not enter Working Capital.",
      },
      {
        id: "accounts-ratios-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "profitability-ratios",
        question:
          "A sports retailer buys tennis rackets for £60 each (Cost of Sales) and sells them for £100 each (Revenue). What are its **Gross Profit Margin** and **Markup** respectively?",
        options: [
          "Gross Profit Margin = 66.67%; Markup = 40%",
          "Gross Profit Margin = 60%; Markup = 40%",
          "Gross Profit Margin = 40%; Markup = 60%",
          "Gross Profit Margin = 40%; Markup = 66.67%",
        ],
        answerIndex: 3,
        hints: [
          "First find Gross Profit per racket: £100 − £60 = £40.",
          "GPM divides £40 by Revenue (£100); Markup divides £40 by Cost of Sales (£60).",
        ],
        explanation:
          "Gross Profit = £40. **Gross Profit Margin** = `(£40 ÷ £100) × 100 = 40%`. **Markup** = `(£40 ÷ £60) × 100 = 66.67%`. Swapping the denominators is the #1 Edexcel 4BS1 finance trap!",
      },
      {
        id: "accounts-ratios-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "profitability-ratios",
        question:
          "Cedar Furniture Ltd generated Revenue of £400,000, Gross Profit of £180,000, and Overhead Expenses of £110,000. What is its **Operating Profit Margin**?",
        options: ["45%", "27.5%", "38.89%", "17.5%"],
        answerIndex: 3,
        hints: [
          "First calculate Operating Profit = Gross Profit (£180,000) − Expenses (£110,000).",
          "Divide Operating Profit by Revenue (£400,000) and multiply by 100.",
        ],
        explanation:
          "Operating Profit = £180,000 − £110,000 = £70,000. **Operating Profit Margin** = `(£70,000 ÷ £400,000) × 100 = 17.5%`. Note that `45%` is the Gross Profit Margin (`£180k ÷ £400k`).",
      },
      {
        id: "accounts-ratios-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "roce-performance",
        question:
          "Orbit Robotics Ltd reports Operating Profit of £72,000 on Revenue of £600,000. On its Statement of Financial Position, Total Equity is £320,000 and Non-Current Liabilities are £160,000. What is its **Return on Capital Employed (ROCE)**?",
        options: ["12%", "22.5%", "15%", "45%"],
        answerIndex: 2,
        hints: [
          "Ignore Revenue (£600,000) — dividing Operating Profit by Revenue gives OPM, not ROCE!",
          "Capital Employed = Total Equity (£320,000) + Non-Current Liabilities (£160,000).",
        ],
        explanation:
          "Capital Employed = £320,000 + £160,000 = £480,000. **ROCE** = `(£72,000 ÷ £480,000) × 100 = 15%`. Choosing `12%` mistakenly divides by Revenue instead of Capital Employed.",
      },
      {
        id: "accounts-ratios-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "liquidity-ratios",
        question:
          "Meadow Garden Centre has Inventory of £54,000, Trade Receivables of £26,000, Cash of £16,000, and Current Liabilities of £60,000. What is its **Acid-Test Ratio**?",
        options: ["1.6 : 1", "1.17 : 1", "0.9 : 1", "0.7 : 1"],
        answerIndex: 3,
        hints: [
          "Notice the question lists Inventory, Receivables and Cash separately rather than Total Current Assets.",
          "Liquid assets exclude Inventory, leaving only Trade Receivables (£26,000) + Cash (£16,000).",
        ],
        explanation:
          "Liquid assets = £26,000 + £16,000 = £42,000 (equivalent to Total Current Assets £96,000 − Inventory £54,000). **Acid-Test Ratio** = `£42,000 ÷ £60,000 = 0.7 : 1`. `1.6 : 1` is the Current Ratio.",
      },
      {
        id: "accounts-ratios-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "financial-position",
        question:
          "How should **Trade Payables** and **Bank Overdraft** be classified on a Statement of Financial Position?",
        options: [
          "Current Assets",
          "Non-Current Liabilities",
          "Equity (Shareholders' Funds)",
          "Current Liabilities",
        ],
        answerIndex: 3,
        hints: [
          "Both represent money the business *owes* to external parties.",
          "Both must normally be repaid within 12 months (or on demand for an overdraft).",
        ],
        explanation:
          "Suppliers (trade payables) expect settlement within 30–90 days and bank overdrafts are repayable on demand within 12 months, so both are **Current Liabilities**.",
      },
      {
        id: "accounts-ratios-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "income-statement",
        question:
          "Coral Swimwear Ltd reports Profit for the Year of £88,000 and pays £30,000 in dividends to shareholders. Where does the remaining **£58,000 of Retained Profit** appear on its Statement of Financial Position?",
        options: [
          "Added to Total Equity (Reserves)",
          "Listed solely under Non-Current Liabilities",
          "Deducted from Non-Current Assets as depreciation",
          "Recorded as Trade Receivables",
        ],
        answerIndex: 0,
        hints: [
          "Retained profit belongs to the company's shareholders and stays invested in the business.",
          "Check the bottom funding section of the Statement of Financial Position.",
        ],
        explanation:
          "Undistributed profit (**Retained Profit** of £58,000) accumulates inside **Total Equity** alongside Share Capital, increasing the net worth of the company.",
      },
      {
        id: "accounts-ratios-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "liquidity-ratios",
        question:
          "Why is **Inventory** subtracted from Current Assets when calculating the **Acid-Test Ratio**?",
        options: [
          "Inventory legally belongs to suppliers until customers buy it",
          "Inventory is a Non-Current Asset kept for more than five years",
          "Inventory is the least liquid current asset and may not convert quickly into cash at full value",
          "Inventory has already been subtracted inside Trade Payables",
        ],
        answerIndex: 2,
        hints: [
          "Compare cash in the till against boxes of unsold stock sitting in a warehouse.",
          "Can you pay tomorrow's electricity bill directly with unsold boxes if demand dries up?",
        ],
        explanation:
          "**Inventory is the least liquid current asset**: goods can perish, fall out of fashion, or require steep price cuts and weeks of waiting before turning into cash.",
      },
      {
        id: "accounts-ratios-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "profitability-ratios",
        question:
          "Between 2024 and 2025, a bakery chain's **Gross Profit Margin stayed constant at 62%**, while its **Operating Profit Margin fell from 18% to 9%**. Which event best explains this pattern?",
        options: [
          "Wholesale flour and butter prices doubled while menu prices stayed frozen",
          "Corporation tax rates increased by 6 percentage points",
          "High-street shop rents and head-office marketing salaries rose sharply relative to sales",
          "Shareholder dividend payouts were doubled by the board",
        ],
        answerIndex: 2,
        hints: [
          "If flour prices had doubled without menu price rises, GPM itself would have fallen.",
          "What sits *between* Gross Profit and Operating Profit on the Income Statement?",
        ],
        explanation:
          "Because **Expenses (overheads)** sit between Gross Profit and Operating Profit, a stable GPM paired with a tumbling OPM proves **overhead expenses** such as rent and marketing salaries grew faster than revenue. Tax and dividends sit *below* Operating Profit.",
      },
      {
        id: "accounts-ratios-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "roce-performance",
        question:
          "A precision engineering firm reports Total Assets of £950,000, Current Liabilities of £150,000, Non-Current Liabilities of £300,000, and Operating Profit of £112,000. What is its **ROCE**?",
        options: ["14%", "11.79%", "8.96%", "22.4%"],
        answerIndex: 0,
        hints: [
          "Use the asset-side identity: `Capital Employed = Total Assets − Current Liabilities`.",
          "Check: Net Assets (Equity) = £950k − £150k − £300k = £500k, so Equity + Non-Current Liabilities also gives £800k!",
        ],
        explanation:
          "Capital Employed = Total Assets (£950,000) − Current Liabilities (£150,000) = **£800,000** (do NOT add £300k Non-Current Liabilities on top of £950k, as £950k already funds them!). **ROCE** = `(£112,000 ÷ £800,000) × 100 = 14%`.",
      },
      {
        id: "accounts-ratios-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "liquidity-ratios",
        question:
          "Which action would **immediately increase** a manufacturer's **Current Ratio** without changing its Operating Profit at the moment of the transaction?",
        options: [
          "Paying £25,000 cash to buy raw-material inventory",
          "Collecting £18,000 cash owed by existing Trade Receivables",
          "Purchasing a £40,000 CNC lathe using cash from the company bank account",
          "Refinancing a £60,000 short-term bank overdraft into a 5-year bank loan",
        ],
        answerIndex: 3,
        hints: [
          "Test how each transaction changes Total Current Assets and Total Current Liabilities.",
          "Swapping one Current Asset for another (cash ↔ stock or cash ↔ receivables) leaves Total Current Assets unchanged!",
        ],
        explanation:
          "Replacing a £60,000 **overdraft (Current Liability)** with a **5-year loan (Non-Current Liability)** cuts Current Liabilities while leaving Current Assets untouched, immediately lifting the Current Ratio. Buying a machine for cash *reduces* Current Assets.",
      },
    ],
  },
  {
    id: "accounts-ratios-m2",
    title: "Paper 2: Stakeholder Interpretation & Ratio Diagnostics",
    questions: [
      {
        id: "accounts-ratios-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "income-statement",
        question:
          "Which stakeholder group primarily examines **Operating Profit** and **Profit for the Year** to assess whether a Plc can sustain and grow annual **dividend** payments?",
        options: [
          "Local environmental pressure groups",
          "Shareholders and institutional investors",
          "Part-time seasonal warehouse temps",
          "Competitor delivery drivers",
        ],
        answerIndex: 1,
        hints: [
          "Dividends are paid out of Profit for the Year to the legal owners of an incorporated company.",
          "Who owns shares in a Public Limited Company?",
        ],
        explanation:
          "**Shareholders and institutional investors** own shares in the Plc and rely on Profit for the Year to fund both cash dividends and capital growth via retained profit.",
      },
      {
        id: "accounts-ratios-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "liquidity-ratios",
        question:
          "A raw-material supplier offering 60 days **trade credit** to a small clothing factory will be MOST interested in which ratios before extending credit?",
        options: [
          "Current Ratio and Acid-Test Ratio",
          "Markup percentage only",
          "Dividend yield per share",
          "Labour turnover rate",
        ],
        answerIndex: 0,
        hints: [
          "A trade creditor wants reassurance that its invoice will be paid in cash within 60 days.",
          "Which pair of ratios specifically measures short-term debt-paying ability?",
        ],
        explanation:
          "Trade suppliers become **Current Liabilities** (trade payables) and therefore scrutinise **Current and Acid-Test Ratios** to check the buyer has sufficient liquid assets to pay on time.",
      },
      {
        id: "accounts-ratios-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "income-statement",
        question:
          "In an Income Statement extract, **Gross Profit** is £215,000, **Cost of Sales** is £145,000, **Expenses** are £130,000, and **Finance Costs plus Tax** are £19,000. What was the firm's **Revenue**?",
        options: ["£70,000", "£345,000", "£85,000", "£360,000"],
        answerIndex: 3,
        hints: [
          "Since `Gross Profit = Revenue − Cost of Sales`, work upwards from Gross Profit!",
          "Expenses and Finance Costs happen *below* Gross Profit, so they are distractors here.",
        ],
        explanation:
          "Rearranging `Gross Profit = Revenue − Cost of Sales` gives **Revenue** = £215,000 + £145,000 = **£360,000**. Subtracting £145,000 instead of adding gives the trap £70,000.",
      },
      {
        id: "accounts-ratios-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "financial-position",
        question:
          "Pinewood Studios Ltd has Non-Current Assets of £620,000, Current Assets of £180,000, Current Liabilities of £110,000, and Non-Current Liabilities of £240,000. What is its **Total Equity**?",
        options: ["£800,000", "£690,000", "£450,000", "£350,000"],
        answerIndex: 2,
        hints: [
          "Remember the balance sheet identity: `Total Equity = Net Assets = Total Assets − Total Liabilities`.",
          "Total Assets = £620k + £180k = £800k; Total Liabilities = £110k + £240k = £350k.",
        ],
        explanation:
          "Total Assets (£800,000) − Total Liabilities (£350,000) = **£450,000 Net Assets**, which equals **Total Equity** (`£690,000` is Capital Employed before deducting the £240,000 long-term loan).",
      },
      {
        id: "accounts-ratios-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "profitability-ratios",
        question:
          "A coffee roaster purchases green beans and bags for £4.00 per pack and applies a **Markup of 75%**. What is the **Gross Profit Margin** on each pack sold?",
        options: ["75%", "57.14%", "25%", "42.86%"],
        answerIndex: 3,
        hints: [
          "75% Markup on £4.00 cost means Gross Profit = `0.75 × £4.00 = £3.00`, so Selling Price = `£7.00`.",
          "Now calculate Gross Profit Margin = `(Gross Profit ÷ Selling Price) × 100`.",
        ],
        explanation:
          "Gross Profit = 75% of £4.00 = £3.00, making Revenue per pack £4.00 + £3.00 = £7.00. **GPM** = `(£3.00 ÷ £7.00) × 100 = 42.86%`.",
      },
      {
        id: "accounts-ratios-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "roce-performance",
        question:
          "Central bank savings interest rates rise from **2% to 6%**, while a retailer's **ROCE falls from 8.5% to 5.2%**. Why will potential investors view this unfavourably?",
        options: [
          "A ROCE of 5.2% means the retailer made an operating loss in pound terms",
          "Investors could now earn a higher 6% return risk-free in a bank deposit than by risking capital in the retailer",
          "Higher bank interest rates automatically reduce the retailer's Gross Profit Margin",
          "A ROCE below 6% makes the business legally insolvent within 30 days",
        ],
        answerIndex: 1,
        hints: [
          "Positive ROCE (5.2%) still means positive Operating Profit, not a loss.",
          "Compare the 5.2% risky business return against the 6.0% risk-free bank deposit return.",
        ],
        explanation:
          "Shareholders demand a risk premium above safe bank savings. Earning **5.2% ROCE** when a **risk-free bank account pays 6%** fails to reward investors for commercial risk.",
      },
      {
        id: "accounts-ratios-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "liquidity-ratios",
        question:
          "A tile wholesaler holds Current Assets of £360,000 and Current Liabilities of £80,000, giving a **Current Ratio of 4.5 : 1**. What is the strongest Grade 9 criticism of this ratio?",
        options: [
          "The wholesaler lacks sufficient short-term assets to pay next month's trade payables",
          "Current Liabilities currently exceed Current Assets by a shortfall of £280,000",
          "Too much capital sits unproductively in idle cash or excess stock instead of lifting ROCE",
          "HMRC imposes automatic liquidity fines on companies whose Current Ratio exceeds 2.5 : 1",
        ],
        answerIndex: 2,
        hints: [
          "At 4.5 : 1, the firm has £4.50 of current assets for every £1 of short-term debt — liquidity is certainly NOT too low!",
          "Ask what opportunity cost arises from hoarding £360,000 in warehouse tiles or non-interest cash.",
        ],
        explanation:
          "A Current Ratio of **4.5 : 1** far exceeds the `1.5–2 : 1` guide, indicating **idle working capital** (excessive inventory incurring storage costs or idle cash) that could be invested in productive growth to boost **ROCE**.",
      },
      {
        id: "accounts-ratios-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "liquidity-ratios",
        question:
          "Why can a national supermarket chain operate safely with an **Acid-Test Ratio of 0.6 : 1**, whereas a bespoke furniture maker at **0.6 : 1** would face severe danger?",
        options: [
          "Supermarkets never hold any Current Liabilities on their balance sheets",
          "Supermarkets turn stock into checkout cash within days while taking 60 days trade credit from suppliers",
          "Supermarkets are exempt from paying employee wages until the end of the financial year",
          "Furniture makers sell exclusively for cash before buying timber",
        ],
        answerIndex: 1,
        hints: [
          "Compare how fast milk and bread turn into cash versus custom oak dining tables.",
          "Also compare customer payment terms (instant card/cash) against supplier payment terms (60-day credit).",
        ],
        explanation:
          "Supermarkets enjoy **rapid stock turnover and instant customer cash inflows** alongside long supplier credit terms, continuously replenishing cash without needing a `1 : 1` Acid-Test buffer.",
      },
      {
        id: "accounts-ratios-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "liquidity-ratios",
        question:
          "Which practice is an example of **window dressing** a Statement of Financial Position right before the 31 December year-end?",
        options: [
          "Recording annual machinery depreciation according to consistent accounting standards",
          "Delaying routine supplier payments until 2 January and running a brief flash sale to temporarily swell year-end cash",
          "Publishing five-year historical summaries in the annual report",
          "Appointing independent external auditors to check inventory counts",
        ],
        answerIndex: 1,
        hints: [
          "Window dressing means legally flattering the single-day balance-sheet photograph so liquidity looks stronger than normal.",
          "Look for temporary year-end timing tricks.",
        ],
        explanation:
          "Manipulating payment and promotional timing right around 31 December makes the year-end snapshot look artificially cash-rich — classic **window dressing**.",
      },
      {
        id: "accounts-ratios-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "profitability-ratios",
        question:
          "An organic juice brand raises bottle prices by 15% hoping to boost its **Gross Profit Margin**, but total Gross Profit in pounds actually **falls**. What is the most likely reason?",
        options: [
          "Demand was highly price elastic because shoppers easily switched to rival smoothie brands",
          "Overhead head-office rent increased by 10%",
          "Corporation tax rates were raised by the government",
          "Raising selling prices always reduces Gross Profit Margin per unit",
        ],
        answerIndex: 0,
        hints: [
          "Overhead rent and tax do not affect Gross Profit at all.",
          "Think about how quantity demanded responds to a 15% price hike when close substitutes exist.",
        ],
        explanation:
          "When demand is **price elastic**, a 15% price rise causes a **more than 15% slump in quantity sold**, shrinking Total Revenue and total Gross Profit in pounds despite a higher margin per bottle.",
      },
      {
        id: "accounts-ratios-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "roce-performance",
        question:
          "Which operational decision is most likely to **increase ROCE** over the coming year, assuming product quality is maintained?",
        options: [
          "Borrowing £500,000 via a long-term loan to buy vacant land that sits unused",
          "Selling an idle, underused warehouse and automating admin workflows to cut overhead expenses",
          "Hoarding £200,000 of extra buffer stock funded by a new 10-year debenture",
          "Doubling shareholder dividend payouts from last year's Profit for the Year",
        ],
        answerIndex: 1,
        hints: [
          "Recall `ROCE = (Operating Profit ÷ Capital Employed) × 100`.",
          "Look for an action that lifts Operating Profit AND/OR trims idle Capital Employed.",
        ],
        explanation:
          "Cutting admin overheads **raises Operating Profit** (the numerator), while disposing of idle non-current assets allows long-term capital to be trimmed (**lowering Capital Employed**), lifting **ROCE** from both sides.",
      },
      {
        id: "accounts-ratios-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "liquidity-ratios",
        question:
          "Which critical business strength is **completely omitted** from numerical ratio analysis of published accounts?",
        options: [
          "Short-term liquidity coverage of Current Liabilities by cash and receivables",
          "Percentage of total sales revenue absorbed directly by variable Cost of Sales",
          "Qualitative strengths such as staff motivation, brand loyalty and R&D pipeline",
          "Long-term bank debt and debentures measured relative to Total Equity reserves",
        ],
        answerIndex: 2,
        hints: [
          "Financial statements only record monetary, historical numbers.",
          "Which option describes non-financial, qualitative drivers of future competitiveness?",
        ],
        explanation:
          "Published accounts record historical monetary figures only; **qualitative factors** like staff morale, customer satisfaction and upcoming innovations never appear directly in ratios.",
      },
      {
        id: "accounts-ratios-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "liquidity-ratios",
        question:
          "A gadget retailer has a **Current Ratio of 2.1 : 1** and an **Acid-Test Ratio of 0.5 : 1**. Its Current Liabilities are £200,000. What is the exact value of its **Inventory**?",
        options: ["£420,000", "£100,000", "£320,000", "£220,000"],
        answerIndex: 2,
        hints: [
          "Use Current Ratio `2.1 = Current Assets ÷ £200,000` to find Total Current Assets.",
          "Use Acid-Test Ratio `0.5 = (Current Assets − Inventory) ÷ £200,000` to find Liquid Assets, then take the difference!",
        ],
        explanation:
          "Current Assets = `2.1 × £200,000 = £420,000`. Liquid Assets (`CA − Inventory`) = `0.5 × £200,000 = £100,000`. Therefore **Inventory** = `£420,000 − £100,000 = £320,000`.",
      },
      {
        id: "accounts-ratios-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "income-statement",
        question:
          "On 1 December, a stationery company sells £40,000 of paper on **60 days credit** (the paper originally cost £22,000). How does this sale affect **Gross Profit** and **Cash** in December's accounts?",
        options: [
          "Gross Profit rises by £18,000 in December; Cash does not increase until the customer pays in January/February",
          "Neither Gross Profit nor Cash changes until February",
          "Cash rises by £40,000 immediately; Gross Profit stays unchanged until February",
          "Gross Profit rises by £40,000 and Cash rises by £18,000 in December",
        ],
        answerIndex: 0,
        hints: [
          "Income Statements follow the accruals rule: revenue and cost of sales are recognised when goods are delivered/invoiced.",
          "When does cash actually arrive on a 60-day credit invoice?",
        ],
        explanation:
          "Under accruals accounting, **Gross Profit rises immediately in December by £18,000** (`£40k − £22k`), recorded alongside £40,000 of **Trade Receivables**, while **Cash receives £0** until settlement 60 days later.",
      },
      {
        id: "accounts-ratios-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "profitability-ratios",
        question:
          "Firms Alpha and Beta both operate in retail. Alpha is a **discount grocery chain** (OPM `3.8%`, ROCE `19%`), while Beta is a **bespoke Bond Street watchmaker** (OPM `26%`, ROCE `11%`). Which judgement is financially accurate?",
        options: [
          "Alpha is failing because its 3.8% OPM is far below Beta's 26% OPM",
          "Alpha generates higher return per £1 of long-term capital invested via high asset/stock turnover despite thin margins",
          "Beta must slash watch prices immediately to copy Alpha's 3.8% OPM",
          "OPM and ROCE must always move in the exact same direction across industries",
        ],
        answerIndex: 1,
        hints: [
          "Compare ROCE (`19%` vs `11%`) alongside the two completely different business models.",
          "How can a 3.8% margin supermarket achieve 19% ROCE?",
        ],
        explanation:
          "Alpha turns over enormous sales volume per £1 of Capital Employed, allowing a thin `3.8%` OPM to generate a superior **19% ROCE** — proving ratios must only be benchmarked against **same-industry** business models.",
      },
    ],
  },
  {
    id: "accounts-ratios-m3",
    title: "Paper 3: Multi-Step Exam Calculations & 4BS1 Synoptic Traps",
    questions: [
      {
        id: "accounts-ratios-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "income-statement",
        question:
          "On a published Statement of Comprehensive Income, figures printed inside brackets such as **(142)** indicate:",
        options: [
          "Estimated forecast numbers that have not been audited",
          "Amounts to be subtracted (costs, expenses or losses)",
          "Foreign currency figures awaiting conversion",
          "Bonus dividends reserved for directors",
        ],
        answerIndex: 1,
        hints: [
          "Look at Cost of Sales `(200)` right underneath Revenue `500`.",
          "Accounting conventions avoid minus signs that are easy to smudge.",
        ],
        explanation:
          "In accounting tables, parentheses `(142)` denote **negative / subtracted** figures (deductions such as Cost of Sales, Expenses, Finance Costs, Tax or net losses).",
      },
      {
        id: "accounts-ratios-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "financial-position",
        question:
          "Which formula correctly calculates **Net Assets** on a Statement of Financial Position?",
        options: [
          "Total Assets + Total Liabilities",
          "Non-Current Assets − Non-Current Liabilities",
          "Total Assets − Total Liabilities",
          "Current Assets − Inventory",
        ],
        answerIndex: 2,
        hints: [
          "'Net' means after deducting *all* debts (both Current and Non-Current Liabilities) from *all* assets.",
          "Net Assets always balances Total Equity.",
        ],
        explanation:
          "**Net Assets = Total Assets − Total Liabilities** (equivalently `Non-Current Assets + Working Capital − Non-Current Liabilities`), matching **Total Equity**.",
      },
      {
        id: "accounts-ratios-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "profitability-ratios",
        question:
          "Tidal Surfboards Ltd reports Revenue of £320,000 and a **Gross Profit Margin of 35%**. What was its **Cost of Sales**?",
        options: ["£112,000", "£285,000", "£192,000", "£208,000"],
        answerIndex: 3,
        hints: [
          "First find Gross Profit: `35% of £320,000`.",
          "Be careful — the question asks for **Cost of Sales**, NOT Gross Profit (`Revenue − Gross Profit`)!",
        ],
        explanation:
          "Gross Profit = `0.35 × £320,000 = £112,000`. Subtracting from Revenue gives **Cost of Sales** = `£320,000 − £112,000 = £208,000` (`65%` of Revenue). `£112,000` is the Gross Profit trap!",
      },
      {
        id: "accounts-ratios-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "profitability-ratios",
        question:
          "A cycle repair workshop buys spare tyres at £16 each and sells them at £28 each. Calculate its **Markup** to 2 decimal places.",
        options: ["42.86%", "57.14%", "75%", "175%"],
        answerIndex: 2,
        hints: [
          "Gross Profit per tyre = £28 − £16 = £12.",
          "Markup divides Gross Profit (£12) by **Cost of Sales (£16)**, not £28!",
        ],
        explanation:
          "Gross Profit = £12. **Markup** = `(£12 ÷ £16) × 100 = 75%`. (`42.86%` is the Gross Profit Margin `£12 ÷ £28 × 100`, while `175%` forgets to subtract cost first).",
      },
      {
        id: "accounts-ratios-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "income-statement",
        question:
          "Summit Sportswear Plc has Revenue of £1,500,000, Cost of Sales of £840,000, Expenses of £410,000, Finance Costs of £35,000, and Corporation Tax of £53,000. What is its **Profit for the Year**?",
        options: ["£250,000", "£660,000", "£215,000", "£162,000"],
        answerIndex: 3,
        hints: [
          "Walk step-by-step down the ladder: Gross Profit → Operating Profit → Profit for the Year.",
          "Remember to subtract BOTH Finance Costs (£35,000) and Corporation Tax (£53,000) from Operating Profit.",
        ],
        explanation:
          "Gross Profit = £1,500k − £840k = £660k. Operating Profit = £660k − £410k = £250k. **Profit for the Year** = £250k − £35k − £53k = **£162,000**.",
      },
      {
        id: "accounts-ratios-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "roce-performance",
        question:
          "Amber Logistics Plc achieved a **ROCE of 16%** last year using **Capital Employed of £750,000**. Its Overhead Expenses were £190,000. What was its **Gross Profit**?",
        options: ["£120,000", "£70,000", "£280,000", "£310,000"],
        answerIndex: 3,
        hints: [
          "First find Operating Profit from `16% = (Operating Profit ÷ £750,000) × 100`.",
          "Then add back Overhead Expenses (£190,000) to reach Gross Profit!",
        ],
        explanation:
          "Operating Profit = `0.16 × £750,000 = £120,000`. Since `Operating Profit = Gross Profit − Expenses`, **Gross Profit** = `£120,000 + £190,000 = £310,000`.",
      },
      {
        id: "accounts-ratios-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "liquidity-ratios",
        question:
          "Verve Cosmetics Ltd holds Total Current Assets of £210,000 (of which Inventory is £84,000) and Current Liabilities of £140,000. Calculate its **Current Ratio** and **Acid-Test Ratio**.",
        options: [
          "Current Ratio = 1.5 : 1; Acid-Test Ratio = 0.9 : 1",
          "Current Ratio = 1.5 : 1; Acid-Test Ratio = 0.6 : 1",
          "Current Ratio = 0.67 : 1; Acid-Test Ratio = 0.9 : 1",
          "Current Ratio = 2.1 : 1; Acid-Test Ratio = 1.5 : 1",
        ],
        answerIndex: 0,
        hints: [
          "Current Ratio = `£210,000 ÷ £140,000`.",
          "Acid-Test numerator = `£210,000 − £84,000 = £126,000`; divide by `£140,000`.",
        ],
        explanation:
          "**Current Ratio** = `£210,000 ÷ £140,000 = 1.5 : 1`. Liquid Assets = `£210,000 − £84,000 = £126,000`, so **Acid-Test Ratio** = `£126,000 ÷ £140,000 = 0.9 : 1` (`0.6 : 1` divides Inventory itself by £140k!).",
      },
      {
        id: "accounts-ratios-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "financial-position",
        question:
          "If a business has **Current Assets of £65,000** and **Current Liabilities of £92,000**, what is its **Working Capital** and what immediate risk does it face?",
        options: [
          "Working Capital = £27,000; risk of paying excess corporation tax",
          "Working Capital = −£27,000; risk of cash-flow insolvency if trade payables or overdrafts are called in",
          "Working Capital = £157,000; risk of holding idle cash",
          "Working Capital = −£27,000; automatic increase in Gross Profit Margin",
        ],
        answerIndex: 1,
        hints: [
          "Compute `£65,000 − £92,000` keeping careful track of the negative sign.",
          "What happens if short-term creditors demand £92,000 when total short-term assets are only £65,000?",
        ],
        explanation:
          "Working Capital = `£65,000 − £92,000 = −£27,000` (net current liabilities). Unless the firm has ultra-fast cash turnover, it risks **illiquidity / insolvency** if creditors press for immediate payment.",
      },
      {
        id: "accounts-ratios-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "roce-performance",
        question:
          "In November 2025, a solar-panel manufacturer takes out a **£2 million 10-year bank loan** to build a second factory that will not open until late 2026. What is the most likely effect on its **2025 year-end ROCE**?",
        options: [
          "ROCE jumps higher in 2025 because the £2m long-term bank loan is recorded as Revenue",
          "ROCE dips in 2025 as Capital Employed rises by £2m before the new factory earns Operating Profit",
          "ROCE stays completely unaffected because 10-year bank loans are classified as Current Liabilities",
          "ROCE doubles in 2025 because annual loan Finance Costs are added directly onto Operating Profit",
        ],
        answerIndex: 1,
        hints: [
          "A 10-year loan is a **Non-Current Liability**, so it enters Capital Employed on day 1.",
          "Has the unfinished factory produced any extra Operating Profit yet in 2025?",
        ],
        explanation:
          "The £2m Non-Current Liability swells **Capital Employed** (the denominator) immediately at year-end 2025 while contributing £0 to 2025 **Operating Profit** (the numerator), temporarily depressing **ROCE**.",
      },
      {
        id: "accounts-ratios-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "profitability-ratios",
        question:
          "Which strategy would improve a clothing retailer's **Operating Profit Margin** WITHOUT changing its **Gross Profit Margin**?",
        options: [
          "Switching to a lower-cost overseas fabric factory",
          "Raising dress selling prices by 10% across all stores",
          "Renegotiating store leases and cutting head-office utility bills",
          "Reducing corporation tax rates through government R&D credits",
        ],
        answerIndex: 2,
        hints: [
          "Fabric costs and selling prices change Gross Profit Margin as well as OPM.",
          "Tax sits *below* Operating Profit, so it changes neither GPM nor OPM!",
        ],
        explanation:
          "Store rent and head-office utilities are **Overhead Expenses** deducted *after* Gross Profit, so cutting them leaves **GPM unchanged** while raising **Operating Profit and OPM**.",
      },
      {
        id: "accounts-ratios-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "income-statement",
        question:
          "Why might employees and trade unions examine a large Plc's **Statement of Comprehensive Income** before annual pay negotiations?",
        options: [
          "To verify that strong Operating Profit and rising OPM make a real-terms wage rise affordable",
          "To calculate the exact personal VAT refund owed to employees on household shopping",
          "To check whether Trade Receivables currently exceed Non-Current Assets on the balance sheet",
          "To set the central bank's national base interest rate for upcoming commercial mortgages",
        ],
        answerIndex: 0,
        hints: [
          "Think about how a trade union builds a persuasive case for higher wages.",
          "If Operating Profit surged by 35%, can management credibly claim they cannot afford a pay rise?",
        ],
        explanation:
          "Employees and unions use strong **Operating Profit / Profit for the Year** figures as evidence that the business can afford higher wages or bonuses without threatening survival.",
      },
      {
        id: "accounts-ratios-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "profitability-ratios",
        question:
          "A gourmet chocolate firm has Revenue of £600,000, **Operating Profit Margin of 14%**, and Overhead Expenses of £156,000. What is its **Gross Profit Margin**?",
        options: ["26%", "12%", "35%", "40%"],
        answerIndex: 3,
        hints: [
          "Calculate Operating Profit first: `14% of £600,000`.",
          "Add Overhead Expenses (£156,000) to Operating Profit to recover Gross Profit, then divide by £600,000!",
        ],
        explanation:
          "Operating Profit = `0.14 × £600,000 = £84,000`. Gross Profit = `£84,000 + £156,000 = £240,000`. **Gross Profit Margin** = `(£240,000 ÷ £600,000) × 100 = 40%`.",
      },
      {
        id: "accounts-ratios-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "financial-position",
        question:
          "A Pound Sterling **depreciation** (WPIDEC) hits a UK bike assembler that **imports** carbon frames from Taiwan and sells exclusively to UK cyclists at fixed prices. Which immediate ratio impact is most likely?",
        options: [
          "Imported Cost of Sales rises in £, squeezing both Gross Profit Margin and Operating Profit Margin",
          "Imported Cost of Sales falls in £, boosting Gross Profit Margin",
          "Non-Current Liabilities double overnight while Gross Profit Margin rises",
          "Gross Profit Margin stays unchanged because imports are overhead expenses",
        ],
        answerIndex: 0,
        hints: [
          "Under WPIDEC (Weak Pound Imports Dearer Exports Cheaper), Taiwanese frames cost MORE in £.",
          "Bicycle frames are direct **Cost of Sales**, and UK selling prices are fixed.",
        ],
        explanation:
          "A weaker pound makes **imported components dearer**, inflating **Cost of Sales** while fixed UK prices cap Revenue — directly compressing **Gross Profit Margin** and flowing down into a lower **Operating Profit Margin**.",
      },
      {
        id: "accounts-ratios-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "liquidity-ratios",
        question:
          "Adopting **Just-in-Time (JIT)** lean stock management (slashing warehouse inventory while keeping cash and payables steady) has what effect on the gap between a firm's **Current Ratio** and **Acid-Test Ratio**?",
        options: [
          "The Acid-Test Ratio becomes numerically larger than the Current Ratio",
          "The gap between the Current Ratio and Acid-Test Ratio narrows towards zero",
          "Both ratios fall to zero even when the firm holds plenty of cash",
          "The gap widens dramatically because JIT multiplies warehouse stock",
        ],
        answerIndex: 1,
        hints: [
          "Write the difference between the two ratios: `Current Ratio − Acid-Test Ratio = Inventory ÷ Current Liabilities`.",
          "What happens to `Inventory ÷ Current Liabilities` as Inventory shrinks close to £0 under JIT?",
        ],
        explanation:
          "Because the mathematical difference between the two ratios is `Inventory ÷ Current Liabilities`, slashing Inventory towards zero under **JIT** brings the **Current Ratio and Acid-Test Ratio very close together**.",
      },
      {
        id: "accounts-ratios-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "roce-performance",
        question:
          "In an Edexcel 4BS1 **12-mark 'Evaluate'** question comparing two acquisition targets using two years of financial extracts, what separates a **Level 3 Grade 9** response from a mid-band answer?",
        options: [
          "Defining Revenue, Assets and Liabilities at length in the opening paragraph without calculating any ratios",
          "Computing ROCE, profitability and liquidity ratios in market context and weighing non-financial/window-dressing limits before judging",
          "Listing six generic textbook ratio formulas in bullet points without mentioning either target business by name",
          "Selecting whichever target reports the highest total Revenue in pounds while ignoring debt and liabilities completely",
        ],
        answerIndex: 1,
        hints: [
          "Edexcel 12-mark mark schemes reward integrated AO2 (context), AO3 (analytical chains using calculated ratios) and AO4 (balanced evaluation + 'it depends' judgement).",
          "Definitions alone earn zero AO4 evaluation marks.",
        ],
        explanation:
          "Top-band **Grade 9 12-mark evaluation** integrates calculated profitability/ROCE and liquidity ratios in context, contrasts the two firms' operational models, critiques historical/window-dressing blind spots, and delivers a decisive **AJIM** judgement.",
      },
    ],
  },
];
