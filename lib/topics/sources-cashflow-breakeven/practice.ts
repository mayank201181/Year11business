import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "sources-cashflow-breakeven-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "cash-flow-forecasting",
      question:
        "In April, a café's **Total Cash Inflows** are **£11,400** and **Total Cash Outflows** are **£13,100**. Calculate April's **Net Cash Flow** in £ *(include a minus sign if negative)*.",
      answer: { type: "number", value: -1700, display: "−£1,700" },
      traps: [
        {
          spec: { type: "number", value: 1700 },
          feedback:
            "Check the sign! Outflows (£13,100) exceed Inflows (£11,400), so Net Cash Flow is NEGATIVE (−£1,700).",
        },
      ],
      hints: [
        "Net Cash Flow = Total Cash Inflows − Total Cash Outflows.",
      ],
      solution: [
        "Net Cash Flow = {{11400 - 13100 = -1700}} (**−£1,700**, shown as `(1,700)` on Edexcel tables).",
      ],
      commonError:
        "Subtracting the smaller number from the larger number and dropping the minus sign when outflows exceed inflows.",
    },
    {
      id: "sources-cashflow-breakeven-quiz-q02",
      kind: "short",
      difficulty: "core",
      guideRef: "cash-flow-forecasting",
      question:
        "Study May's cash-flow column for *Harbour Kayaks*:\n\n| May (£) | Value |\n|---|---|\n| Opening Balance | **(1,250)** |\n| Total Cash Inflows | 9,800 |\n| Total Cash Outflows | 6,400 |\n\nCalculate May's **Closing Balance** in £.",
      answer: { type: "number", value: 2150, display: "£2,150" },
      traps: [
        {
          spec: { type: "number", value: 4650 },
          feedback:
            "Watch the brackets! `(1,250)` means −£1,250, NOT +£1,250! Compute −1,250 + 3,400.",
        },
        {
          spec: { type: "number", value: 3400 },
          feedback:
            "£3,400 is May's Net Cash Flow — add the Opening Balance (−£1,250) to find the Closing Balance!",
        },
      ],
      hints: [
        "Step 1: Net Cash Flow = £9,800 − £6,400 = +£3,400.",
        "Step 2: Closing Balance = Opening Balance (−£1,250) + Net Cash Flow (+£3,400).",
      ],
      solution: [
        "May Net Cash Flow = {{9800 - 6400 = 3400}} (+£3,400).",
        "May Closing Balance = {{-1250 + 3400 = 2150}} (**£2,150**).",
      ],
    },
    {
      id: "sources-cashflow-breakeven-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "internal-external-finance",
      question:
        "Which source of finance allows a current account balance to dip **below zero** up to an agreed limit to cover temporary seasonal cash shortages?",
      options: [
        "Retained profit",
        "Commercial mortgage",
        "Bank overdraft",
        "Share capital flotation",
      ],
      answerIndex: 2,
      hints: [
        "Short-term, flexible facility attached directly to a business's current bank account.",
      ],
      explanation:
        "A **bank overdraft** lets the bank balance go negative temporarily up to an agreed ceiling — flexible for short-term cash dips, though variable interest is high and it is repayable on demand.",
    },
    {
      id: "sources-cashflow-breakeven-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      guideRef: "costs-revenue-profit",
      question:
        "A cupcake bakery has monthly **Fixed Costs of £1,800**, **Variable Cost of £0.90 per cupcake**, and bakes **2,000 cupcakes** in June. Calculate June's **Total Costs** in £.",
      answer: { type: "number", value: 3600, display: "£3,600" },
      traps: [
        {
          spec: { type: "number", value: 1800 },
          feedback:
            "£1,800 is Total Variable Costs alone (2,000 × £0.90) — add the £1,800 Fixed Costs!",
        },
      ],
      hints: [
        "Total Costs = Fixed Costs + (Variable Cost per unit × Output).",
      ],
      solution: [
        "Total Variable Costs = {{2000 * 0.90 = 1800}} (£1,800).",
        "Total Costs = {{1800 + 1800 = 3600}} (**£3,600**).",
      ],
    },
    {
      id: "sources-cashflow-breakeven-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "breakeven-calculation",
      question:
        "A phone-charger assembler has monthly **Fixed Costs of £7,200**, **Variable Cost of £4.00 per charger**, and a **Selling Price of £13.00 per charger**. Calculate the monthly **break-even output** in chargers.",
      answer: { type: "number", value: 800, display: "800 chargers" },
      traps: [
        {
          spec: { type: "number", value: 553.85, tolerance: 1 },
          feedback:
            "NEVER divide Fixed Costs by Selling Price (£13)! Divide £7,200 by Contribution (£13 − £4 = £9)!",
        },
        {
          spec: { type: "number", value: 1800 },
          feedback:
            "You divided Fixed Costs by Variable Cost (£4) — divide by Contribution (£13 − £4 = £9)!",
        },
      ],
      hints: [
        "First find Contribution per charger = Selling Price (£13) − Variable Cost (£4).",
        "Divide Fixed Costs (£7,200) by Contribution (£9).",
      ],
      solution: [
        "Contribution per charger = {{13 - 4 = 9}} (£9).",
        "Break-even output = {{7200 / 9 = 800}} (**800 chargers**).",
      ],
      commonError:
        "Dividing Fixed Costs by Selling Price (£13) instead of Contribution (£9).",
    },
    {
      id: "sources-cashflow-breakeven-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "breakeven-charts-mos",
      question:
        "Using the same phone-charger assembler (**break-even output = 800 chargers**), if actual monthly sales reach **1,150 chargers**, calculate the **Margin of Safety** in chargers.",
      answer: { type: "number", value: 350, display: "350 chargers" },
      traps: [
        {
          spec: { type: "number", value: 1950 },
          feedback:
            "Subtract break-even output from actual output (1,150 − 800) — don't add them!",
        },
      ],
      hints: [
        "Margin of Safety = Actual Output − Break-Even Output.",
        "Compute 1,150 − 800.",
      ],
      solution: [
        "Margin of Safety = {{1150 - 800 = 350}} (**350 chargers**).",
      ],
    },
    {
      id: "sources-cashflow-breakeven-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "internal-external-finance",
      question:
        "Why is a **sole trader** garden landscaper **unable** to raise £15,000 for a mini-digger by issuing shares?",
      options: [
        "Sole traders are unincorporated businesses and legally do not have share capital",
        "Mini-diggers are classified as short-term revenue expenditure",
        "Shares must be repaid with monthly interest within 90 days",
        "Only public sector charities are allowed to issue shares",
      ],
      answerIndex: 0,
      hints: [
        "Check the legal ownership rules from Topic 1.2 & Topic 3.1.",
        "Which business structures have share capital (Ltd and Plc) vs unincorporated ownership?",
      ],
      explanation:
        "A **sole trader** is unincorporated and has **no shares**; only incorporated companies (**Ltd** privately, **Plc** publicly) can raise share capital.",
    },
    {
      id: "sources-cashflow-breakeven-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "costs-revenue-profit",
      question:
        "A candle brand sells **900 candles** at **£14 each**. Monthly **Fixed Costs** are **£3,200** and **Variable Cost** is **£5 per candle**. Calculate the brand's **monthly profit** in £.",
      answer: { type: "number", value: 4900, display: "£4,900" },
      traps: [
        {
          spec: { type: "number", value: 8100 },
          feedback:
            "£8,100 is Total Contribution (£12,600 − £4,500) — don't forget to subtract the £3,200 Fixed Costs!",
        },
        {
          spec: { type: "number", value: 12600 },
          feedback:
            "£12,600 is Total Revenue (900 × £14), NOT Profit — subtract Total Costs (£7,700)!",
        },
      ],
      hints: [
        "Total Revenue = 900 × £14 = £12,600.",
        "Total Costs = £3,200 + (900 × £5) = £7,700; subtract Total Costs from Total Revenue.",
      ],
      solution: [
        "Total Revenue = {{900 * 14 = 12600}} (£12,600).",
        "Total Costs = {{3200 + (900 * 5) = 3200 + 4500 = 7700}} (£7,700).",
        "Monthly Profit = {{12600 - 7700 = 4900}} (**£4,900**).",
      ],
    },
    {
      id: "sources-cashflow-breakeven-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "breakeven-calculation",
      question:
        "State the exact single-word business term for `Selling Price − Variable Cost per unit` (the amount each unit puts towards covering Fixed Costs).",
      answer: {
        type: "text",
        accept: ["contribution", "unit contribution", "contribution per unit"],
        display: "Contribution",
      },
      traps: [
        {
          spec: { type: "text", accept: ["profit", "net profit", "gross profit"] },
          feedback:
            "Never call `SP − VC` 'profit'! Until Fixed Costs are paid off, `SP − VC` is **contribution**!",
        },
        {
          spec: { type: "text", accept: ["revenue", "markup"] },
          feedback:
            "Revenue is `Price × Quantity`; `Selling Price − Variable Cost per unit` is **contribution**.",
        },
      ],
      hints: [
        "Not profit! Each unit 'c.........s' towards paying Fixed Costs.",
        "12-letter noun starting with 'Contrib...'",
      ],
      solution: [
        "**Contribution** (`SP − VC`) pays off Fixed Costs first and becomes profit once break-even is passed.",
      ],
    },
    {
      id: "sources-cashflow-breakeven-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "cash-flow-forecasting",
      marks: 3,
      question:
        "Explain **one** reason why preparing a 6-month **cash-flow forecast** helps a business avoid failure. *(Edexcel 4BS1 3-mark Explain — AO1 + AO3)*",
      modelAnswer:
        "Tracking monthly cash inflows against cash outflows identifies future months with a negative closing balance well in advance. Consequently, managers can arrange an agreed bank overdraft or chase trade receivables early, preventing bounced supplier payments and cash-flow insolvency.",
      markScheme: [
        {
          point: "AO1 (1m): Identifies spotting future cash shortages / negative closing balances in advance.",
          keywords: ["negative", "shortage", "deficit", "inflows", "outflows", "advance"],
        },
        {
          point: "AO3a (1m): Explains corrective action — arranging an overdraft, chasing receivables or delaying outflows.",
          keywords: ["overdraft", "receivables", "credit", "arrange", "suppliers"],
        },
        {
          point: "AO3b (1m): Develops survival impact — bills/wages paid on time, avoiding insolvency or liquidation.",
          keywords: ["insolvency", "insolvent", "liquidation", "bounced", "bills"],
        },
      ],
      hints: [
        "Remember: Edexcel 3-mark Explain = 1 clear point + 2 linked reasoning steps (no case-study invention needed).",
        "Chain: Spots negative closing balance early → Arrange overdraft / chase debtors → Avoid insolvency!",
      ],
    },
  ],
  papers: [
    {
      id: "sources-cashflow-breakeven-p1",
      title: "Practice Paper 1 — Small Business Cash Flow, Costs & Finance (< 50 Staff)",
      questions: [
        {
          id: "sources-cashflow-breakeven-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "cash-flow-forecasting",
          question:
            "In January, *BeanThere Coffee Cart* starts with an **Opening Balance of £1,600**, receives **Cash Inflows of £5,200**, and pays **Cash Outflows of £4,350**. Calculate January's **Closing Balance** in £.",
          answer: { type: "number", value: 2450, display: "£2,450" },
          traps: [
            {
              spec: { type: "number", value: 850 },
              feedback:
                "£850 is January's Net Cash Flow (£5,200 − £4,350) — add the £1,600 Opening Balance!",
            },
          ],
          hints: [
            "Net Cash Flow = £5,200 − £4,350 = £850; add £1,600 Opening Balance.",
          ],
          solution: [
            "Net Cash Flow = {{5200 - 4350 = 850}} (£850).",
            "Closing Balance = {{1600 + 850 = 2450}} (**£2,450**).",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p1-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "cash-flow-forecasting",
          question:
            "Study the 3-month cash-flow forecast for *Tideway Paddleboards*:\n\n| (£) | Feb | Mar | Apr |\n|---|---|---|---|\n| Opening Balance | 900 | (1,400) | **(2,100)** |\n| Total Cash Inflows | 4,200 | 5,100 | 9,600 |\n| Total Cash Outflows | 6,500 | 5,800 | 6,200 |\n| Net Cash Flow | (2,300) | (700) | **A** |\n| Closing Balance | (1,400) | (2,100) | **B** |\n\nCalculate **B (April's Closing Balance)** in £.",
          answer: { type: "number", value: 1300, display: "£1,300" },
          traps: [
            {
              spec: { type: "number", value: 5500 },
              feedback:
                "Watch the brackets! `(2,100)` is −£2,100, NOT +£2,100! Compute −2,100 + 3,400.",
            },
            {
              spec: { type: "number", value: 3400 },
              feedback:
                "£3,400 is **A** (April Net Cash Flow) — add April's Opening Balance (−£2,100) to get **B**!",
            },
          ],
          hints: [
            "Find **A** (April Net Cash Flow) = 9,600 − 6,200 = +3,400.",
            "Find **B** = April Opening (−2,100) + 3,400.",
          ],
          solution: [
            "April Net Cash Flow **A** = {{9600 - 6200 = 3400}} (+£3,400).",
            "April Closing Balance **B** = {{-2100 + 3400 = 1300}} (**£1,300**).",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "cash-flow-forecasting",
          question:
            "In October, a bakery starts with an **Opening Balance of £1,900**, pays **Total Cash Outflows of £11,200**, and finishes October with a **Closing Balance of (£700)** [i.e. −£700]. Calculate October's **Total Cash Inflows** in £.",
          answer: { type: "number", value: 8600, display: "£8,600" },
          traps: [
            {
              spec: { type: "number", value: 10000 },
              feedback:
                "You treated `(700)` as `+700` instead of `−700`! Dropping from +£1,900 to −£700 means Net Cash Flow was −£2,600.",
            },
            {
              spec: { type: "number", value: 13800 },
              feedback:
                "If Inflows were £13,800, Net Cash Flow would be +£2,600 (Closing +£4,500) — Net Cash Flow is −£2,600!",
            },
          ],
          hints: [
            "Step 1: Find October Net Cash Flow = Closing (−700) − Opening (+1,900) = −£2,600.",
            "Step 2: Solve Inflows − 11,200 = −2,600 → Inflows = 11,200 − 2,600.",
          ],
          solution: [
            "October Net Cash Flow = {{-700 - 1900 = -2600}} (−£2,600).",
            "Total Cash Inflows = {{11200 + (-2600) = 8600}} (**£8,600**).",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "internal-external-finance",
          question:
            "A pet-grooming salon buys a £6,000 hydro-bath using **Hire Purchase**: a **15% deposit** upfront followed by **24 monthly payments of £245**. Calculate the **total Hire Purchase finance charge** (the extra amount paid above the £6,000 cash price) in £.",
          answer: { type: "number", value: 780, display: "£780" },
          traps: [
            {
              spec: { type: "number", value: 6780 },
              feedback:
                "£6,780 is the TOTAL Hire Purchase cost — subtract the £6,000 cash price to find the extra finance charge!",
            },
          ],
          hints: [
            "Calculate total HP paid = (15% × £6,000) + (24 × £245) = £900 + £5,880 = £6,780.",
            "Subtract the £6,000 cash price from £6,780.",
          ],
          solution: [
            "Deposit = {{6000 * 0.15 = 900}} (£900); instalments = {{24 * 245 = 5880}} (£5,880).",
            "Total HP cost = {{900 + 5880 = 6780}} (£6,780).",
            "Extra finance charge = {{6780 - 6000 = 780}} (**£780**).",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "internal-external-finance",
          question:
            "A small packaging supplier sells **£18,000** of unpaid 60-day invoices to a **debt factoring** company that advances **88%** of invoice value immediately (retaining 12% as its fee). How much **immediate cash** does the supplier receive in £?",
          answer: { type: "number", value: 15840, display: "£15,840" },
          traps: [
            {
              spec: { type: "number", value: 2160 },
              feedback:
                "£2,160 is the 12% fee kept by the factor — the cash received by the supplier is 88% of £18,000!",
            },
          ],
          hints: [
            "Multiply £18,000 by 0.88.",
            "Check: £18,000 − 12% fee (£2,160) = ?",
          ],
          solution: [
            "Immediate cash received = {{18000 * 0.88 = 15840}} (**£15,840**).",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p1-q06",
          kind: "short",
          difficulty: "warmup",
          guideRef: "costs-revenue-profit",
          question:
            "A dog-treat kitchen pays **£1,500/month** in rent and insurance (Fixed Costs) and **£1.40 per pouch** in oats, peanut butter and pouch film (Variable Cost). In March it produces **1,500 pouches**. Calculate the **average unit cost per pouch** in £ *(to 2 decimal places)*.",
          answer: { type: "number", value: 2.4, display: "£2.40" },
          traps: [
            {
              spec: { type: "number", value: 3600 },
              feedback:
                "£3,600 is March's Total Cost — divide £3,600 by 1,500 pouches for the average cost per pouch!",
            },
          ],
          hints: [
            "Total Costs = £1,500 + (1,500 × £1.40) = £3,600; divide by 1,500 pouches.",
          ],
          solution: [
            "Total Costs = {{1500 + (1500 * 1.40) = 1500 + 2100 = 3600}} (£3,600).",
            "Average unit cost = {{3600 / 1500 = 2.40}} (**£2.40** per pouch).",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "breakeven-calculation",
          question:
            "A leather belt maker has monthly **Fixed Costs of £4,500**, **Variable Cost of £9.00 per belt**, and **Selling Price of £24.00 per belt**. Calculate the monthly **break-even output** in belts.",
          answer: { type: "number", value: 300, display: "300 belts" },
          traps: [
            {
              spec: { type: "number", value: 187.5 },
              feedback:
                "Never divide Fixed Costs by Selling Price (£24)! Divide £4,500 by Contribution (£24 − £9 = £15)!",
            },
          ],
          hints: [
            "Contribution per belt = £24 − £9 = £15.",
            "Break-even output = £4,500 ÷ £15.",
          ],
          solution: [
            "Contribution per belt = {{24 - 9 = 15}} (£15).",
            "Break-even output = {{4500 / 15 = 300}} (**300 belts**).",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "breakeven-calculation",
          question:
            "Using the same leather belt maker (**FC = £4,500/month**, **VC = £9/belt**, **SP = £24/belt**), calculate how many belts must be sold in a month to earn a **target profit of £2,250**.",
          answer: { type: "number", value: 450, display: "450 belts" },
          traps: [
            {
              spec: { type: "number", value: 150 },
              feedback:
                "150 belts covers ONLY the £2,250 target profit — add the 300 belts needed to cover Fixed Costs first (total = 450)!",
            },
          ],
          hints: [
            "Target Profit Output = (Fixed Costs + Target Profit) ÷ Contribution per belt.",
            "Compute (£4,500 + £2,250) ÷ £15.",
          ],
          solution: [
            "Target Profit Output = {{(4500 + 2250) / 15 = 6750 / 15 = 450}} (**450 belts**).",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "breakeven-charts-mos",
          question:
            "A mobile crêpe van has weekly **Fixed Costs of £480**, **Variable Cost of £1.20 per crêpe**, and **Selling Price of £5.20 per crêpe**. On a sunny bank-holiday week it sells **210 crêpes**. Calculate its **Margin of Safety** in crêpes.",
          answer: { type: "number", value: 90, display: "90 units" },
          traps: [
            {
              spec: { type: "number", value: 120 },
              feedback:
                "120 crêpes is the Break-Even Output (£480 ÷ £4) — subtract 120 from actual sales (210) for Margin of Safety!",
            },
            {
              spec: { type: "number", value: 360 },
              feedback:
                "£360 is the weekly Profit (90 × £4) — Margin of Safety is measured in crêpes (210 − 120 = 90)!",
            },
          ],
          hints: [
            "Step 1: Contribution = £5.20 − £1.20 = £4.00 → Break-even = £480 ÷ £4.00 = 120 crêpes.",
            "Step 2: Margin of Safety = 210 − 120.",
          ],
          solution: [
            "Contribution = {{5.20 - 1.20 = 4.00}} (£4.00); Break-even = {{480 / 4.00 = 120}} crêpes.",
            "Margin of Safety = {{210 - 120 = 90}} (**90 crêpes**).",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "costs-revenue-profit",
          question:
            "A ceramicist has **monthly** studio rent & insurance of **£950/month** (Fixed Costs), **Variable Cost of £6 per vase**, and **Selling Price of £26 per vase**. Over a **full 12-month year**, she makes and sells **800 vases**. Calculate her **annual profit** in £.",
          answer: { type: "number", value: 4600, display: "£4,600" },
          traps: [
            {
              spec: { type: "number", value: 15050 },
              feedback:
                "Time-period trap! You subtracted only ONE month's Fixed Costs (£950) instead of 12 months (£950 × 12 = £11,400)!",
            },
          ],
          hints: [
            "Convert monthly Fixed Costs to annual Fixed Costs FIRST: £950 × 12 = £11,400!",
            "Annual Total Contribution = 800 × (£26 − £6) = £16,000; subtract £11,400 annual Fixed Costs.",
          ],
          solution: [
            "Annual Fixed Costs = {{950 * 12 = 11400}} (£11,400).",
            "Annual Revenue = {{800 * 26 = 20800}} (£20,800); Annual VC = {{800 * 6 = 4800}} (£4,800).",
            "Annual Profit = {{20800 - (11400 + 4800) = 20800 - 16200 = 4600}} (**£4,600**).",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p1-q11",
          kind: "short",
          difficulty: "warmup",
          guideRef: "internal-external-finance",
          question:
            "State the two-word short-term source of finance where a business receives raw materials from a supplier today and pays the invoice **30 to 90 days later** with zero interest.",
          answer: {
            type: "text",
            accept: ["trade credit", "supplier credit"],
            display: "Trade credit",
          },
          traps: [
            {
              spec: { type: "text", accept: ["debt factoring", "factoring"] },
              feedback:
                "**Debt factoring** sells *customer* invoices to a finance house; paying *suppliers* 30–90 days later is **trade credit**.",
            },
            {
              spec: { type: "text", accept: ["bank overdraft", "overdraft"] },
              feedback:
                "An **overdraft** is a negative bank balance facility; buying stock now and paying the supplier in 30–90 days is **trade credit**.",
            },
          ],
          hints: [
            "Two words: 'T.... c.....' granted by suppliers.",
          ],
          solution: [
            "**Trade credit** delays supplier cash outflows by 30–90 days interest-free.",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "cash-flow-forecasting",
          marks: 3,
          question:
            "Explain **one** reason why a profitable business can still run out of cash. *(Edexcel 4BS1 3-mark Explain)*",
          modelAnswer:
            "A business may sell goods to commercial customers on 60-day trade credit, which records sales revenue and profit immediately on the income statement. However, zero liquid cash enters the bank account for two months while wages and rent must be paid immediately, creating a cash deficit.",
          markScheme: [
            {
              point: "AO1 (1m): Identifies credit sales / trade receivables delay (or heavy upfront inventory / capital asset cash purchase).",
              keywords: ["credit", "receivables", "debtors", "inventory", "stock", "equipment"],
            },
            {
              point: "AO3a (1m): Explains timing mismatch — revenue/profit is booked immediately before cash inflow arrives.",
              keywords: ["recorded", "booked", "two months", "delay", "inflow", "later"],
            },
            {
              point: "AO3b (1m): Links immediate outflows (wages/rent/suppliers) to a negative bank balance / deficit.",
              keywords: ["wages", "rent", "suppliers", "deficit", "negative", "bank"],
            },
          ],
          hints: [
            "Use the **60-day credit sales** timing mismatch!",
            "3-step chain: Sell on 60-day credit (profit booked now) → Cash inflow delayed 2 months → Immediate wage/rent outflows drain bank balance.",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "internal-external-finance",
          marks: 3,
          question:
            "Explain **one** advantage to a business of using **retained profit** to fund expansion. *(Edexcel 4BS1 3-mark Explain)*",
          modelAnswer:
            "Retained profit is an internal source of finance generated from past earnings, so the business incurs zero interest charges or monthly debt repayments. Consequently, fixed finance overheads stay lower, keeping break-even output down while existing owners retain full voting control.",
          markScheme: [
            {
              point: "AO1 (1m): Identifies zero interest charges / no repayment schedule / no dilution of ownership.",
              keywords: ["interest", "repayment", "dilution", "internal"],
            },
            {
              point: "AO3a (1m): Explains lower fixed finance costs or avoiding giving equity/shares away.",
              keywords: ["fixed", "overheads", "control", "voting", "shares"],
            },
            {
              point: "AO3b (1m): Develops commercial benefit — higher net profit margins, lower break-even or preserved cash outflows.",
              keywords: ["break-even", "margin", "outflows", "cash"],
            },
          ],
          hints: [
            "Contrast retained profit with a bank loan (interest!) or venture capital (dilution of control!).",
            "Build a 3-step chain: No interest / repayments → Lower fixed finance costs → Higher profit margin / lower break-even.",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "breakeven-charts-mos",
          marks: 6,
          question:
            "**Case Study (Paper 1 — 14 staff):** *KokoBean Chocolates Ltd* hand-crafts luxury truffle boxes in Bath. Global cocoa prices have surged by 35%, sharply raising its **variable cost per box** and cutting its **Margin of Safety** to just 40 boxes per month. **Analyse** how *KokoBean* could use **break-even analysis** to respond to this cocoa cost shock. *(6 marks — AO2 + AO3)*",
          modelAnswer:
            "Modelling a higher retail price per luxury truffle box on its break-even chart shows KokoBean's directors how much steeper Total Revenue pivots to restore contribution per box. Quantifying the exact drop in break-even boxes helps KokoBean judge whether affluent Bath gift shoppers will accept a modest price rise without wiping out the fragile 40-box Margin of Safety.\n\nAdditionally, KokoBean can test 'what-if' cost-reduction scenarios — such as redesigning gift-box packaging or negotiating bulk cocoa contracts — to pivot the Total Cost line flatter, identifying how much variable cost per box must fall to rebuild a safe profit buffer before Christmas trading.",
          markScheme: [
            {
              point: "AO2 (1m): Applies break-even modelling to truffle boxes / Bath gift shoppers / cocoa shock.",
              keywords: ["truffle", "bath", "gift", "shoppers", "christmas"],
            },
            {
              point: "AO3 (1m): Explains testing a Selling Price rise pivoting Total Revenue steeper to boost contribution.",
              keywords: ["total revenue", "steeper", "contribution", "pivots"],
            },
            {
              point: "AO3 (1m): Links lower break-even point to widening the narrow 40-box buffer.",
              keywords: ["buffer", "widen", "drop in break-even", "accept"],
            },
            {
              point: "AO2 (1m): Second contextualised strand — testing gift-box packaging redesign or bulk cocoa contracts.",
              keywords: ["packaging", "redesign", "bulk", "contracts"],
            },
            {
              point: "AO3 (1m): Explains flattening the Total Cost slope by trimming non-cocoa variable costs.",
              keywords: ["total cost", "flatter", "what-if", "scenarios"],
            },
            {
              point: "AO3 (1m): Develops commercial value — informed pricing/sourcing decision before losses occur.",
              keywords: ["profit", "safe", "restore", "losses"],
            },
          ],
          hints: [
            "Show TWO distinct ways *KokoBean* uses break-even 'what-if' modelling in truffle-box context!",
            "Chain 1: Modelling a retail price rise on luxury Bath truffle boxes (steeper TR → higher contribution). Chain 2: Modelling packaging/sourcing cuts (flatter TC → wider buffer).",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "internal-external-finance",
          marks: 9,
          question:
            "**Case Study (Paper 1 — 9 staff):** *SolarWash*, a 2-year-old **private limited company (Ltd)** cleaning commercial solar farms with drones, has won a major contract and needs **£48,000** for two specialist thermal-imaging drones (expected asset life: 4 years). Bank interest rates are currently high at 7.5%, and the two founders own 50% of the shares each. They are choosing between:\n- **Option 1**: Taking out a **4-year Bank Loan** for £48,000\n- **Option 2**: Bringing in a **Venture Capitalist (Business Angel)** offering £48,000 in exchange for **30% of SolarWash Ltd's shares**\n\n**Justify** which option *SolarWash Ltd* should choose. *(9 marks — use AJIM)*",
          modelAnswer:
            "SolarWash Ltd should choose Option 1 (the 4-year bank loan). Because SolarWash has already secured a confirmed commercial solar-farm contract, predictable client revenues can comfortably service fixed monthly loan instalments over the drones' exact 4-year working life. Crucially, once the loan is repaid after 4 years, the two founders retain 100% equity ownership and keep all future solar-cleaning profits rather than surrendering 30% of dividends forever.\n\nConversely, while Option 2's angel investor charges zero interest and brings sector contacts — easing cash outflows while interest rates sit at 7.5% — giving away 30% share capital permanently dilutes each founder from 50% down to 35% and lets an outsider block or steer board decisions. Admittedly, high 7.5% loan interest raises fixed finance costs and requires drone collateral if the young 2-year-old Ltd lacks credit history. Nevertheless, because a signed contract underpins cash inflows, paying 4 years of temporary interest is a far smaller price than losing nearly a third of a fast-growing drone company permanently.",
          markScheme: [
            {
              point: "AO2 (1m): Clear recommendation anchored in thermal-imaging drones / solar-farm contract / 4-year life.",
              keywords: ["thermal", "solar-farm", "client", "4-year"],
            },
            {
              point: "AO3 (1m): Matches 4-year long-term loan horizon to the 4-year capital asset life with predictable repayments.",
              keywords: ["instalments", "predictable", "working life", "service"],
            },
            {
              point: "AO3 (1m): Explains founders preserve 100% ownership and future dividends once loan ends.",
              keywords: ["100%", "equity", "dividends", "retain"],
            },
            {
              point: "AO2/AO3 (1m): Analyses Option 2 drawback — permanent dilution from 50% to 35% each and loss of control.",
              keywords: ["35%", "dilutes", "outsider", "board", "permanently"],
            },
            {
              point: "AO3 (1m): Acknowledges Option 2 benefit — zero interest outflow and mentoring during 7.5% rates.",
              keywords: ["zero interest", "contacts", "outflows"],
            },
            {
              point: "AO3/AO4 (1m): Counter-argument on Option 1 — 7.5% interest raises fixed costs + bank collateral demand.",
              keywords: ["fixed", "collateral", "credit history"],
            },
            {
              point: "AO4 (1m): Evaluates key 'it depends on' factor — certainty of cash inflows from the signed contract.",
              keywords: ["signed", "confirmed", "underpins", "inflows"],
            },
            {
              point: "AO4 (1m): Weighs 4 years of temporary interest against permanent 30% equity loss.",
              keywords: ["temporary", "third", "smaller price"],
            },
            {
              point: "AO4 (1m): Reaches a decisive, context-supported final judgement (AJIM).",
              keywords: ["should choose", "fast-growing"],
            },
          ],
          hints: [
            "Pick ONE option in sentence 1 (**A**nswer).",
            "Spot the killer clue in the stem: *SolarWash has ALREADY won a major contract* (predictable cash inflows!) AND founders hold 50%/50% equity!",
            "Weigh 4 years of 7.5% interest against surrendering 30% of the company *forever* (**AJIM**).",
          ],
        },
      ],
    },
    {
      id: "sources-cashflow-breakeven-p2",
      title: "Practice Paper 2 — Large Business Finance, Forecasting & Break-Even (> 250 Staff)",
      questions: [
        {
          id: "sources-cashflow-breakeven-p2-q01",
          kind: "short",
          difficulty: "core",
          guideRef: "cash-flow-forecasting",
          question:
            "Study the Q3 cash-flow forecast (in **£ thousands**) for *EuroSportswear PLC*:\n\n| (£000s) | July | August | September |\n|---|---|---|---|\n| Opening Balance | 450 | **(350)** | **(850)** |\n| Total Cash Inflows | 1,900 | 2,100 | 3,800 |\n| Total Cash Outflows | 2,700 | 2,600 | 2,400 |\n| Net Cash Flow | (800) | (500) | **P** |\n| Closing Balance | (350) | (850) | **Q** |\n\nCalculate **Q** (September's Closing Balance, in **£ thousands** — e.g. type `550` for £550k).",
          answer: { type: "number", value: 550, display: "550" },
          traps: [
            {
              spec: { type: "number", value: 2250 },
              feedback:
                "Bracket trap! `(850)` means −850, NOT +850! Compute −850 + 1,400 = 550.",
            },
            {
              spec: { type: "number", value: 1400 },
              feedback:
                "1,400 is **P** (September Net Cash Flow) — add September's Opening Balance (−850) to find **Q**!",
            },
          ],
          hints: [
            "First find **P** (September Net Cash Flow) = 3,800 − 2,400 = +1,400.",
            "Then **Q** = September Opening (−850) + 1,400.",
          ],
          solution: [
            "September Net Cash Flow **P** = {{3800 - 2400 = 1400}} (£1,400k).",
            "September Closing Balance **Q** = {{-850 + 1400 = 550}} (**£550k**).",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "internal-external-finance",
          question:
            "Airline *SkyJet PLC* issues **15,000,000 new ordinary shares** via a Stock Exchange rights issue at **£2.40 per share**, paying investment-bank underwriting fees of **£1,200,000**. Calculate the **net long-term finance raised** in £.",
          answer: { type: "number", value: 34800000, display: "£34,800,000" },
          traps: [
            {
              spec: { type: "number", value: 36000000 },
              feedback:
                "£36,000,000 is the gross share proceeds — subtract the £1,200,000 underwriting fees!",
            },
          ],
          hints: [
            "Gross share issue = 15,000,000 × £2.40 = £36,000,000.",
            "Subtract £1,200,000 underwriting costs.",
          ],
          solution: [
            "Gross proceeds = {{15000000 * 2.40 = 36000000}} (£36,000,000).",
            "Net finance raised = {{36000000 - 1200000 = 34800000}} (**£34,800,000**).",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "costs-revenue-profit",
          question:
            "AutoBattery PLC has monthly **Fixed Costs of £1,200,000** and **Variable Cost of £180 per battery pack**. At a monthly output of **15,000 battery packs**, calculate the **average unit cost per battery pack** in £.",
          answer: { type: "number", value: 260, display: "£260" },
          traps: [
            {
              spec: { type: "number", value: 80 },
              feedback:
                "£80 is only the Fixed Cost per pack (£1,200,000 ÷ 15,000) — add the £180 Variable Cost per pack!",
            },
          ],
          hints: [
            "Total Costs = £1,200,000 + (15,000 × £180) = £3,900,000.",
            "Divide £3,900,000 by 15,000 packs (or add £80 fixed cost/pack + £180 VC/pack).",
          ],
          solution: [
            "Total Costs = {{1200000 + (15000 * 180) = 1200000 + 2700000 = 3900000}} (£3,900,000).",
            "Average unit cost = {{3900000 / 15000 = 260}} (**£260** per pack).",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "breakeven-calculation",
          question:
            "Using the same *AutoBattery PLC* (**FC = £1,200,000/month**, **VC = £180/pack**), if each pack sells to carmakers for **£330**, calculate the monthly **break-even output** in packs.",
          answer: { type: "number", value: 8000, display: "8,000 packs" },
          traps: [
            {
              spec: { type: "number", value: 3636.36, tolerance: 1 },
              feedback:
                "Never divide Fixed Costs by Selling Price (£330)! Divide £1,200,000 by Contribution (£330 − £180 = £150)!",
            },
          ],
          hints: [
            "Contribution per pack = £330 − £180 = £150.",
            "Break-even output = £1,200,000 ÷ £150.",
          ],
          solution: [
            "Contribution per pack = {{330 - 180 = 150}} (£150).",
            "Break-even output = {{1200000 / 150 = 8000}} (**8,000 packs**).",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "breakeven-charts-mos",
          question:
            "At **15,000 packs** sold per month and a **break-even output of 8,000 packs** (**Contribution = £150/pack**), calculate *AutoBattery PLC*'s **monthly profit** in £.",
          answer: { type: "number", value: 1050000, display: "£1,050,000" },
          traps: [
            {
              spec: { type: "number", value: 7000 },
              feedback:
                "7,000 packs is the Margin of Safety — multiply 7,000 packs by £150 Contribution per pack for monthly profit!",
            },
            {
              spec: { type: "number", value: 2250000 },
              feedback:
                "£2,250,000 is Total Contribution (15,000 × £150) — subtract £1,200,000 Fixed Costs!",
            },
          ],
          hints: [
            "Margin of Safety = 15,000 − 8,000 = 7,000 packs.",
            "Profit = Margin of Safety (7,000) × Contribution per pack (£150).",
          ],
          solution: [
            "Margin of Safety = {{15000 - 8000 = 7000}} packs.",
            "Monthly Profit = {{7000 * 150 = 1050000}} (**£1,050,000**).",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "breakeven-calculation",
          question:
            "A stadium concert promoter faces **Fixed Costs of £360,000** (stadium hire, stage lighting, security), **Variable Cost of £6 per attendee** (wristband & stewarding), and charges **£51 per ticket**. How many tickets must be sold to achieve a **target profit of £180,000**?",
          answer: { type: "number", value: 12000, display: "12,000 tickets" },
          traps: [
            {
              spec: { type: "number", value: 8000 },
              feedback:
                "8,000 tickets only breaks even (£0 profit) — add £180,000 target profit to £360,000 before dividing by £45!",
            },
          ],
          hints: [
            "Contribution per ticket = £51 − £6 = £45.",
            "Target Profit Output = (£360,000 + £180,000) ÷ £45.",
          ],
          solution: [
            "Contribution per ticket = {{51 - 6 = 45}} (£45).",
            "Target tickets = {{(360000 + 180000) / 45 = 540000 / 45 = 12000}} (**12,000 tickets**).",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "breakeven-calculation",
          question:
            "Appliance maker *CoolBreeze PLC* has annual **Fixed Costs of £2,400,000** and **Selling Price of £160 per air-fryer**. It currently **breaks even at 40,000 air-fryers**. Calculate *CoolBreeze PLC*'s **Variable Cost per air-fryer** in £.",
          answer: { type: "number", value: 100, display: "£100" },
          traps: [
            {
              spec: { type: "number", value: 60 },
              feedback:
                "£60 is the Contribution per air-fryer (£2,400,000 ÷ 40,000) — subtract £60 from the £160 Selling Price to find Variable Cost!",
            },
          ],
          hints: [
            "Step 1: Contribution per air-fryer = Fixed Costs (£2,400,000) ÷ Break-Even Output (40,000) = £60.",
            "Step 2: Since £160 − VC = £60, solve for VC!",
          ],
          solution: [
            "Contribution per unit = {{2400000 / 40000 = 60}} (£60).",
            "Variable Cost per unit = {{160 - 60 = 100}} (**£100**).",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p2-q08",
          kind: "short",
          difficulty: "warmup",
          guideRef: "internal-external-finance",
          question:
            "State the exact business term for spending on **non-current (fixed) assets** lasting **more than one year** (such as factory buildings, robotic arms or delivery lorries).",
          answer: {
            type: "text",
            accept: ["capital expenditure", "capex"],
            display: "Capital expenditure",
          },
          traps: [
            {
              spec: { type: "text", accept: ["revenue expenditure"] },
              feedback:
                "**Revenue expenditure** is day-to-day running costs (< 1 year: stock, wages, electricity); multi-year fixed assets are **capital expenditure**.",
            },
          ],
          hints: [
            "Contrast 'revenue expenditure' (day-to-day) with 'c...... expenditure' (fixed assets > 1 yr).",
          ],
          solution: [
            "**Capital expenditure** purchases long-term non-current assets lasting over 12 months.",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "internal-external-finance",
          question:
            "Retail PLC *Style Loft* borrows **£5,000,000** via a 5-year corporate bank loan at simple flat annual interest of **6% per year** on the principal (with principal repaid at maturity). How much **total interest** does *Style Loft* pay over the 5 years in £?",
          answer: { type: "number", value: 1500000, display: "£1,500,000" },
          traps: [
            {
              spec: { type: "number", value: 300000 },
              feedback:
                "£300,000 is the interest for ONE year — multiply by 5 years for total 5-year interest!",
            },
            {
              spec: { type: "number", value: 6500000 },
              feedback:
                "£6,500,000 includes the £5,000,000 principal repayment — the question asks strictly for total INTEREST!",
            },
          ],
          hints: [
            "Annual interest = 6% × £5,000,000 = £300,000 per year.",
            "Multiply £300,000 by 5 years.",
          ],
          solution: [
            "Annual interest = {{5000000 * 0.06 = 300000}} (£300,000/yr).",
            "5-year total interest = {{300000 * 5 = 1500000}} (**£1,500,000**).",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "cash-flow-forecasting",
          question:
            "In December, *ToyWorld PLC* has **Cash Sales of £4,200,000**, **Receipts from October Trade Receivables of £1,800,000**, **Credit Sales invoiced in December (payable in February) of £2,500,000**, and **Total Cash Outflows of £4,600,000**. Calculate December's **Net Cash Flow** in £.",
          answer: { type: "number", value: 1400000, display: "£1,400,000" },
          traps: [
            {
              spec: { type: "number", value: 3900000 },
              feedback:
                "Cash-vs-Profit trap! The £2,500,000 December credit sales aren't paid until FEBRUARY, so they bring £0 cash inflow in December!",
            },
          ],
          hints: [
            "CRITICAL TRAP: Do December credit sales payable in February bring ANY cash into the bank in December?",
            "December Cash Inflows = £4,200,000 + £1,800,000 ONLY! Then subtract £4,600,000 Outflows.",
          ],
          solution: [
            "Exclude £2,500,000 unpaid credit sales (payable in February).",
            "December Total Cash Inflows = {{4200000 + 1800000 = 6000000}} (£6,000,000).",
            "December Net Cash Flow = {{6000000 - 4600000 = 1400000}} (**£1,400,000**).",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "breakeven-charts-mos",
          question:
            "A ferry route breaks even at **1,400 passengers** and carries **2,000 passengers** per sailing. Express its **Margin of Safety as a percentage of actual passenger numbers (%)**.",
          answer: { type: "number", value: 30, display: "30%" },
          traps: [
            {
              spec: { type: "number", value: 600 },
              feedback:
                "600 passengers is the unit Margin of Safety — divide 600 by 2,000 actual passengers and multiply by 100 for the percentage!",
            },
            {
              spec: { type: "number", value: 42.86, tolerance: 0.1 },
              feedback:
                "Divide 600 by ACTUAL passengers (2,000), not by break-even passengers (1,400) — passenger demand can drop by 30% before hitting break-even!",
            },
          ],
          hints: [
            "Unit Margin of Safety = 2,000 − 1,400 = 600 passengers.",
            "Percentage of actual passengers = (600 ÷ 2,000) × 100.",
          ],
          solution: [
            "Margin of Safety = {{2000 - 1400 = 600}} passengers.",
            "As % of actual passengers = {{(600 / 2000) * 100 = 30%}}.",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "breakeven-charts-mos",
          marks: 3,
          question:
            "Explain **one** limitation of using **break-even analysis** when launching a new product. *(Edexcel 4BS1 3-mark Explain)*",
          modelAnswer:
            "Break-even charts assume every single unit manufactured is sold at one fixed price with zero unsold inventory. In reality, demand forecasts for an untested launch may be overly optimistic, forcing price markdowns that flatten Total Revenue and cause unexpected losses.",
          markScheme: [
            {
              point: "AO1 (1m): Identifies unrealistic assumption — all output is sold / constant single price / linear variable costs.",
              keywords: ["sold", "unsold", "inventory", "fixed price", "linear"],
            },
            {
              point: "AO3a (1m): Explains real-world deviation — optimistic forecasts or price cuts/discounts needed to clear stock.",
              keywords: ["optimistic", "markdowns", "discounts", "wastage", "forecasts"],
            },
            {
              point: "AO3b (1m): Links to distorted break-even figure / unexpected financial loss.",
              keywords: ["total revenue", "losses", "loss", "inaccurate"],
            },
          ],
          hints: [
            "Pick the cleanest assumption flaw: **Output = Sales** (zero unsold stock) or **constant single price**.",
            "Chain in 3 steps: Assumes 100% sold at 1 price → New product may need discounts to clear unsold stock → Flattens TR and causes unexpected losses.",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "cash-flow-forecasting",
          marks: 6,
          question:
            "**Case Study (Paper 2 — 620 staff):** *AlpineSki Equipment PLC* manufactures skis between April and September for European retail chains, who only pay invoices in December. Its cash-flow forecast shows Closing Balances of **(£1.8m)** in August and **(£2.4m)** in September. **Analyse** two actions *AlpineSki Equipment PLC* could take to manage this seasonal cash-flow deficit. *(6 marks — AO2 + AO3)*",
          modelAnswer:
            "AlpineSki can present its 6-month forecast to its corporate bank now to negotiate an agreed £2.5m seasonal overdraft facility covering August and September. Securing an authorised overdraft limit prevents unpaid carbon-fibre supplier cheques bouncing during summer ski production, while interest is paid only on the days the account sits negative until December retail receipts arrive.\n\nAlternatively, AlpineSki could offer European ski-shop chains a small 3% early-settlement discount for paying half their ski orders on delivery in September rather than waiting until December, pulling cash inflows forward to shrink the £2.4m trough without heavy borrowing.",
          markScheme: [
            {
              point: "AO2 (1m): Applies first cure to ski production / £2.4m August–September trough / December retail receipts.",
              keywords: ["£2.5m", "£2.4m", "summer", "carbon-fibre", "december"],
            },
            {
              point: "AO3 (1m): Explains how an agreed seasonal overdraft bridges temporary deficits with daily interest only.",
              keywords: ["overdraft", "authorised", "only on the days", "negative"],
            },
            {
              point: "AO3 (1m): Develops operational protection — avoids bounced payments / halted production.",
              keywords: ["bouncing", "prevents", "unpaid"],
            },
            {
              point: "AO2 (1m): Applies second cure in context — early-settlement discount / staged deposits from European ski chains.",
              keywords: ["ski-shop", "early-settlement", "discount", "delivery"],
            },
            {
              point: "AO3 (1m): Explains pulling cash inflows forward into September.",
              keywords: ["inflows", "forward", "pulling"],
            },
            {
              point: "AO3 (1m): Develops financial benefit — reduces peak deficit and lowers bank interest charges.",
              keywords: ["shrink", "trough", "borrowing"],
            },
          ],
          hints: [
            "Weave *skis, summer manufacturing, £2.4m August/September deficit, December retail chain payments* into BOTH chains!",
            "Action 1: Pre-agreed £2.5m seasonal bank overdraft. Action 2: Early-settlement discount / deposits from European ski retailers.",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p2-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "internal-external-finance",
          marks: 6,
          question:
            "**Case Study (Paper 2 — 1,900 staff):** *MedScan PLC* builds MRI hospital scanners whose sensor technology becomes outdated every 3 years. To equip its mobile diagnostic fleet with **£9 million** of scanners, **analyse** the benefits to *MedScan PLC* of **leasing** the scanners rather than buying them outright using retained profit. *(6 marks — AO2 + AO3)*",
          modelAnswer:
            "Leasing avoids an immediate £9m lump-sum cash outflow from MedScan's retained profit reserves, spreading scanner payments into predictable monthly revenue expenditure matched directly against NHS/hospital scan fees. Preserving £9m of liquid cash protects MedScan's working capital buffer for R&D and technician salaries.\n\nFurthermore, because MRI sensor hardware becomes obsolete every 3 years, leasing lets MedScan upgrade smoothly to next-generation diagnostic scanners at lease renewal with specialist lessor maintenance included — avoiding being stuck owning depreciated, outdated medical machines.",
          markScheme: [
            {
              point: "AO2 (1m): Applies cash-flow benefit to £9m MRI fleet / hospital scan fees.",
              keywords: ["£9m", "mri", "hospital", "scan"],
            },
            {
              point: "AO3 (1m): Explains avoiding lump-sum cash drain via predictable monthly lease instalments.",
              keywords: ["lump-sum", "spreading", "predictable", "monthly"],
            },
            {
              point: "AO3 (1m): Links preserved liquidity/working capital to funding R&D or operations.",
              keywords: ["working capital", "liquid", "r&d", "reserves"],
            },
            {
              point: "AO2 (1m): Applies obsolescence point to 3-year MRI sensor upgrade cycle.",
              keywords: ["3 years", "obsolete", "next-generation", "diagnostic"],
            },
            {
              point: "AO3 (1m): Explains easy equipment upgrades at lease end + lessor maintenance cover.",
              keywords: ["upgrade", "maintenance", "lessor", "renewal"],
            },
            {
              point: "AO3 (1m): Develops competitive/clinical benefit — avoids owning depreciated outdated assets.",
              keywords: ["depreciated", "stuck", "owning"],
            },
          ],
          hints: [
            "Anchor Chain 1 in preserving **£9m liquid cash / working capital** vs lump-sum outflow.",
            "Anchor Chain 2 in the stem's big clue: *MRI sensor technology becomes outdated every 3 years* (upgrades + maintenance included!).",
          ],
        },
        {
          id: "sources-cashflow-breakeven-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "internal-external-finance",
          marks: 12,
          question:
            "**Case Study (Paper 2 — 3,100 staff):** *GreenVolt Motors PLC* manufactures electric delivery vans. To build a **£150 million** automated gigafactory, the CFO must choose between:\n- **Method A**: Raising £150m via a **10-year Corporate Bank Loan** (current interest rate: 6.5% p.a.; *GreenVolt*'s existing debt gearing is already high at 58%)\n- **Method B**: Raising £150m by **issuing new Ordinary Shares** on the London Stock Exchange\n\n**Evaluate** which method *GreenVolt Motors PLC* should use to finance the £150m gigafactory. *(12 marks — Edexcel 4BS1 Evaluate, use AJIM)*",
          modelAnswer:
            "Borrowing £150m via a 10-year bank loan (Method A) avoids issuing extra shares, protecting existing institutional shareholders and founders from voting dilution and keeping 100% of future electric-van profits once the gigafactory loan is repaid. However, with interest rates at 6.5% (adding £9.75m annual interest) and GreenVolt's gearing already stretched at 58%, piling on £150m of mandatory debt repayments dramatically raises Fixed Costs and break-even van output during the 2-year construction phase before a single van rolls off the line — risking cash-flow insolvency if EV subsidies dip.\n\nConversely, issuing £150m of new PLC share capital on the London Stock Exchange (Method B) provides permanent long-term capital matched to a 25-year gigafactory asset with zero mandatory interest outflows and zero repayment deadline, lowering financial risk and strengthening GreenVolt's balance sheet. On the other hand, floating £150m of new equity incurs millionaire underwriting fees, dilutes existing ownership stakes (exposing GreenVolt to potential hostile takeover bids if its share price dips), and creates shareholder expectations of higher future dividends.\n\nOverall, GreenVolt Motors PLC should choose Method B (new ordinary share capital). When gearing already sits at 58% amid 6.5% interest rates, financial survival during a multi-year factory build outweighs ownership dilution: equity protects cash liquidity while the gigafactory ramps up, whereas an extra £150m loan could push break-even and interest cover past safe limits.",
          markScheme: [
            {
              point: "AO2 (1m): Applies Method A to £150m gigafactory / electric-van profits.",
              keywords: ["gigafactory", "electric-van", "ev"],
            },
            {
              point: "AO3 (1m): Explains loan benefit — zero equity dilution and retaining future profits after repayment.",
              keywords: ["dilution", "voting", "100%"],
            },
            {
              point: "AO2/AO3 (1m): Quantifies/applies 6.5% interest (£9.75m/yr) + high 58% existing gearing risk.",
              keywords: ["£9.75m", "58%", "mandatory"],
            },
            {
              point: "AO3 (1m): Links extra fixed interest during construction to higher break-even and cash-flow insolvency risk.",
              keywords: ["construction", "fixed costs", "break-even", "insolvency"],
            },
            {
              point: "AO2/AO3 (1m): Explains Method B — permanent PLC Stock Exchange equity with zero interest or repayment date.",
              keywords: ["permanent", "zero mandatory", "repayment deadline"],
            },
            {
              point: "AO3 (1m): Analyses Method B drawbacks — underwriting fees, hostile takeover risk and dividend expectations.",
              keywords: ["underwriting", "hostile takeover", "dividends"],
            },
            {
              point: "AO4 (1m):Directly weighs solvency/cash-flow safety during ramp-up against ownership dilution.",
              keywords: ["outweighs", "survival", "ramps up"],
            },
            {
              point: "AO4 (1m): Identifies decisive contingency — existing 58% high gearing + 6.5% interest environment.",
              keywords: ["already sits", "safe limits", "environment"],
            },
            {
              point: "AO4 (1m): Connects multi-year zero-revenue factory construction lag to why fixed interest is dangerous.",
              keywords: ["2-year", "before a single", "subsidies"],
            },
            {
              point: "AO4 (1m): Matches 25-year capital expenditure horizon to permanent share capital.",
              keywords: ["25-year", "balance sheet"],
            },
            {
              point: "AO4 (1m): Sustains balanced evaluative judgement across both options.",
              keywords: ["conversely", "overall"],
            },
            {
              point: "AO4 (1m): Concludes decisively for Method B with supported rationale (AJIM).",
              keywords: ["should choose method b", "protects cash"],
            },
          ],
          hints: [
            "Spot the TWO giant clues in the stem: **58% high existing gearing** + **6.5% interest rate** (= £9.75m/yr extra fixed cost while the gigafactory is still being built!).",
            "Give full balanced chains for Loan (no dilution vs dangerous fixed interest/break-even) AND Share Issue (zero interest permanent capital vs dilution/underwriting/hostile takeover).",
            "Use **AJIM** to justify why 58% gearing + construction lag makes **Share Capital (Method B)** the safer choice.",
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "sources-cashflow-breakeven-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "cash-flow-forecasting",
      question:
        "Trace all 4 months of *Harbour Gelato*'s spring cash-flow table carefully:\n\n| (£) | Feb | Mar | Apr | May |\n|---|---|---|---|---|\n| Opening Balance | 1,500 | ? | ? | ? |\n| Total Cash Inflows | 3,200 | 4,000 | 7,500 | 11,200 |\n| Total Cash Outflows | 5,400 | 6,100 | 5,900 | 7,000 |\n\nPropagating each month's Closing Balance into the next month's Opening Balance, calculate **May's Closing Balance** in £.",
      answer: { type: "number", value: 3000, display: "£3,000" },
      traps: [
        {
          spec: { type: "number", value: 1500 },
          feedback:
            "£1,500 is only the sum of the 4 Net Cash Flows — don't forget to include February's starting Opening Balance of £1,500!",
        },
        {
          spec: { type: "number", value: 4200 },
          feedback:
            "£4,200 is May's Net Cash Flow alone — add May's Opening Balance (−£1,200)!",
        },
      ],
      hints: [
        "Step 1: Feb NCF = 3,200 − 5,400 = −2,200 → Feb Closing = 1,500 − 2,200 = −700 (= Mar Opening).",
        "Step 2: Mar NCF = 4,000 − 6,100 = −2,100 → Mar Closing = −700 − 2,100 = −2,800 (= Apr Opening).",
        "Step 3: Apr NCF = +1,600 → Apr Closing = −1,200 (= May Opening); add May NCF (+4,200) — or use the AoPS shortcut: Feb Opening + Total 4-month Inflows − Total 4-month Outflows!",
      ],
      solution: [
        "Feb Closing = {{1500 + (3200 - 5400) = -700}}; Mar Closing = {{-700 + (4000 - 6100) = -2800}}.",
        "Apr Closing = {{-2800 + (7500 - 5900) = -1200}} (= May Opening).",
        "May Closing = {{-1200 + (11200 - 7000) = -1200 + 4200 = 3000}} (**£3,000**).",
      ],
    },
    {
      id: "sources-cashflow-breakeven-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "cash-flow-forecasting",
      question:
        "In March, *Precision Joinery Ltd* delivers **£60,000** of bespoke kitchens: **40%** of customers pay cash in March, while **60%** take 60-day trade credit (paying in May). In March the firm incurs **£38,000** of timber and wage costs (**paid 100% in cash in March**) plus **£4,000** of monthly non-cash machinery depreciation. Calculate the **difference** (`March Accounting Profit − March Net Cash Flow`) in £.",
      answer: { type: "number", value: 32000, display: "£32,000" },
      traps: [
        {
          spec: { type: "number", value: 18000 },
          feedback:
            "£18,000 is March's Accounting Profit alone — now find March's Net Cash Flow (−£14,000) and compute 18,000 − (−14,000)!",
        },
        {
          spec: { type: "number", value: 4000 },
          feedback:
            "Watch signs! 18,000 − (−14,000) = +£32,000, not 18,000 − 14,000!",
        },
      ],
      hints: [
        "Step 1 (March Profit): All £60,000 revenue counts in March, minus £38,000 timber/wages AND minus £4,000 depreciation = +£18,000 profit.",
        "Step 2 (March Cash Flow): Only 40% of £60,000 (£24,000) arrives in cash in March, minus £38,000 cash paid (depreciation is non-cash!) = −£14,000 Net Cash Flow.",
        "Step 3: Compute Profit − Net Cash Flow = 18,000 − (−14,000).",
      ],
      solution: [
        "March Accounting Profit = {{60000 - 38000 - 4000 = 18000}} (+£18,000).",
        "March Cash Inflow = {{60000 * 0.40 = 24000}} (£24,000); March Cash Outflow = £38,000 (depreciation is non-cash); Net Cash Flow = {{24000 - 38000 = -14000}} (−£14,000).",
        "Difference = {{18000 - (-14000) = 32000}} (**£32,000**).",
      ],
    },
    {
      id: "sources-cashflow-breakeven-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "breakeven-calculation",
      question:
        "A backpack manufacturer currently has monthly **Fixed Costs of £24,000**, **Variable Cost of £14 per backpack**, and **Selling Price of £30 per backpack**. Installing a laser fabric-cutter increases monthly Fixed Costs by **£6,000**, while cutting Variable Cost by **£4 per backpack** (Selling Price stays £30). At what exact **monthly output (in backpacks)** do the **old method** and the **automated laser method** produce the **exact same Total Cost**?",
      answer: { type: "number", value: 1500, display: "1,500 backpacks" },
      traps: [
        {
          spec: { type: "number", value: 300 },
          feedback:
            "Notice BOTH break-even points happen to be 1,500 backpacks (£24k÷£16 = 1,500 and £30k÷£20 = 1,500)! Set Old TC = New TC: 24,000 + 14Q = 30,000 + 10Q.",
        },
      ],
      hints: [
        "Write Old Total Cost as a function of Q: 24,000 + 14Q.",
        "Write New Total Cost: Fixed Costs become £30,000 and VC becomes £10 → 30,000 + 10Q.",
        "Solve 24,000 + 14Q = 30,000 + 10Q for Q!",
      ],
      solution: [
        "Old Total Cost = {{24000 + 14Q}}.",
        "New Total Cost = {{(24000 + 6000) + (14 - 4)Q = 30000 + 10Q}}.",
        "Equate: {{24000 + 14Q = 30000 + 10Q}} → {{4Q = 6000}} → {{Q = 1500}} (**1,500 backpacks**).",
      ],
    },
    {
      id: "sources-cashflow-breakeven-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "breakeven-charts-mos",
      question:
        "A juice bar sells **2,500 bottles** per month at **£4.80 per bottle** and currently earns a **monthly profit of £2,200**. Its monthly **Fixed Costs are £4,800**. Calculate the juice bar's current **break-even output** *(give the exact whole number of bottles, rounding UP if needed)*.",
      answer: { type: "number", value: 1715, display: "1,715 bottles" },
      traps: [
        {
          spec: { type: "number", value: 1714 },
          feedback:
            "Exact BEP is 1,714.29 bottles — at 1,714 bottles the juice bar still makes a £0.80 loss, so round UP to 1,715 whole bottles!",
        },
        {
          spec: { type: "number", value: 1000 },
          feedback:
            "1,000 divides Fixed Costs (£4,800) by Selling Price (£4.80) — work out Contribution per bottle first!",
        },
      ],
      hints: [
        "Step 1: Use Profit = Total Contribution − Fixed Costs → £2,200 = Total Contribution − £4,800 → Total Contribution = £7,000.",
        "Step 2: Divide £7,000 Total Contribution across 2,500 bottles to find Contribution per bottle (£2.80).",
        "Step 3: Divide £4,800 Fixed Costs by £2.80 (= 1,714.285...) and round UP to the next whole bottle!",
      ],
      solution: [
        "Total Contribution = {{\"Profit\" + \"FC\" = 2200 + 4800 = 7000}} (£7,000).",
        "Contribution per bottle = {{7000 / 2500 = 2.80}} (£2.80; so VC = £2.00/bottle).",
        "Exact break-even = {{4800 / 2.80 = 1714.29}} → round UP to **1,715 bottles**.",
      ],
    },
    {
      id: "sources-cashflow-breakeven-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "internal-external-finance",
      question:
        "A food manufacturer has **£80,000** of 90-day supermarket invoices outstanding and faces a 90-day cash deficit of £68,000. Compare:\n- **Choice 1 (Debt Factoring)**: Factor advances **85%** cash immediately and keeps a **9% non-refundable factoring fee** on the full £80,000 invoice face value (returning the remaining 6% once supermarkets pay).\n- **Choice 2 (Bank Overdraft)**: Overdraw **£68,000** for **3 months** (1/4 of a year) at **12% per annum** simple interest.\n\nHow much **cheaper (in £)** is Choice 2 than Choice 1?",
      answer: { type: "number", value: 5160, display: "£5,160" },
      traps: [
        {
          spec: { type: "number", value: 2040 },
          feedback:
            "£2,040 is the 3-month overdraft interest cost alone — subtract £2,040 from the £7,200 factoring fee!",
        },
        {
          spec: { type: "number", value: 960 },
          feedback:
            "You charged a full 12 months of overdraft interest (£8,160) instead of 3 months (3/12 of a year = £2,040)!",
        },
      ],
      hints: [
        "Step 1: Choice 1 factoring fee = 9% of £80,000 = £7,200.",
        "Step 2: Choice 2 overdraft interest for 3 months = £68,000 × 12% × (3 ÷ 12) = £2,040.",
        "Step 3: Subtract £2,040 from £7,200.",
      ],
      solution: [
        "Debt factoring fee (Choice 1) = {{80000 * 0.09 = 7200}} (£7,200).",
        "3-month overdraft interest (Choice 2) = {{68000 * 0.12 * (3 / 12) = 2040}} (£2,040).",
        "Saving from Choice 2 = {{7200 - 2040 = 5160}} (**£5,160** cheaper!).",
      ],
    },
    {
      id: "sources-cashflow-breakeven-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "breakeven-charts-mos",
      question:
        "A ski-jacket brand has **Fixed Costs = £90,000**, **Variable Cost = £40/jacket**, **Selling Price = £100/jacket**, and sells **2,000 jackets**. Management considers cutting Selling Price by **10%** (to £90) after market research predicts demand will jump by **30%** (to 2,600 jackets). How do **Break-Even Output**, **Margin of Safety (units)** and **Total Profit** all change?",
      options: [
        "Break-even rises from 1,500 to 1,800 jackets, Margin of Safety rises from 500 to 800 jackets, and Profit rises from £30,000 to £40,000",
        "Break-even falls from 1,500 to 1,200 jackets, Margin of Safety rises, and Profit falls",
        "Break-even rises from 1,500 to 1,800 jackets, Margin of Safety falls to 200 jackets, and Profit falls to £10,000",
        "Break-even stays 1,500 jackets while Profit doubles to £60,000",
      ],
      answerIndex: 0,
      hints: [
        "Old: Contribution = £60 → BEP = 90,000 ÷ 60 = 1,500; MoS = 2,000 − 1,500 = 500; Profit = 500 × £60 = £30,000.",
        "New: SP = £90 → Contribution = £50 → New BEP = 90,000 ÷ 50 = 1,800 jackets (BEP RISES!).",
        "Check New MoS at 2,600 jackets (2,600 − 1,800 = 800) and New Profit (800 × £50 = £40,000) — even though BEP rose, elastic volume lifted both MoS and Profit!",
      ],
      explanation:
        "Cutting price trims Contribution from £60 to £50, so **BEP rises** from 1,500 to **1,800**. Yet the 30% elastic demand surge to 2,600 jackets widens **Margin of Safety** from 500 to **800** and lifts **Profit** from £30,000 to **£40,000**!",
    },
    {
      id: "sources-cashflow-breakeven-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "costs-revenue-profit",
      question:
        "At an output of **1,200 units**, *Vertex Components Ltd* has an **average unit cost of £25.00**. At an output of **2,000 units** (within the same factory capacity and same Variable Cost per unit), its **average unit cost falls to £21.00**. Calculate *Vertex Components Ltd*'s **Fixed Costs** in £.",
      answer: { type: "number", value: 12000, display: "£12,000" },
      traps: [
        {
          spec: { type: "number", value: 15 },
          feedback:
            "£15 is the Variable Cost per unit — plug VC = £15 back into TC at 1,200 units (£30,000 − 1,200×£15) to find Fixed Costs!",
        },
        {
          spec: { type: "number", value: 30000 },
          feedback:
            "£30,000 is Total Cost at 1,200 units — subtract Variable Costs (1,200 × £15 = £18,000)!",
        },
      ],
      hints: [
        "Step 1: Find Total Cost at 1,200 units (1,200 × £25 = £30,000) and Total Cost at 2,000 units (2,000 × £21 = £42,000).",
        "Step 2: Since Fixed Costs don't change, the £12,000 jump in Total Cost comes purely from the extra 800 units → VC = £12,000 ÷ 800 = £15/unit!",
        "Step 3: Substitute VC = £15 into FC + 1,200(15) = 30,000.",
      ],
      solution: [
        "TC at 1,200 units = {{1200 * 25 = 30000}} (£30,000); TC at 2,000 units = {{2000 * 21 = 42000}} (£42,000).",
        "Variable Cost per unit = {{(42000 - 30000) / (2000 - 1200) = 12000 / 800 = 15}} (£15/unit).",
        "Fixed Costs = {{30000 - (1200 * 15) = 30000 - 18000 = 12000}} (**£12,000**).",
      ],
    },
    {
      id: "sources-cashflow-breakeven-ch-q08",
      kind: "short",
      difficulty: "challenge",
      guideRef: "breakeven-calculation",
      question:
        "An artisan bakery has monthly **Fixed Costs of £6,600** and **Variable Cost of £1.80 per sourdough loaf**, currently selling **2,500 loaves/month** at **£4.80 per loaf**. Wheat inflation raises Variable Cost to **£2.35 per loaf**. Keeping monthly volume at **2,500 loaves**, what **new Selling Price per loaf (in £, to 2 d.p.)** must the bakery charge to earn the **exact same monthly profit** as before?",
      answer: { type: "number", value: 5.35, display: "£5.35" },
      traps: [
        {
          spec: { type: "number", value: 4.99 },
          feedback:
            "Check the AoPS invariance shortcut! If volume and Fixed Costs stay identical, keeping Contribution per loaf at £3.00 simply means passing on the exact £0.55 VC rise!",
        },
      ],
      hints: [
        "Step 1: Find original Contribution per loaf = £4.80 − £1.80 = £3.00 (giving £900 monthly profit at 2,500 loaves).",
        "Step 2: Since Fixed Costs (£6,600) and volume (2,500 loaves) are unchanged, what Contribution per loaf is still needed for £900 profit?",
        "Step 3: Set New SP − £2.35 = £3.00!",
      ],
      solution: [
        "Original Contribution per loaf = {{4.80 - 1.80 = 3.00}} (£3.00; original profit = {{2500 * 3 - 6600 = 900}}).",
        "To earn the same £900 profit at 2,500 loaves, Contribution must stay £3.00.",
        "New Selling Price = {{2.35 + 3.00 = 5.35}} (**£5.35**).",
      ],
    },
    {
      id: "sources-cashflow-breakeven-ch-q09",
      kind: "written",
      difficulty: "challenge",
      guideRef: "cash-flow-forecasting",
      marks: 9,
      question:
        "**Case Study (Paper 1 — 32 staff):** *FreshCrate Ltd* delivers organic vegetable boxes to restaurants on 60-day credit while paying local organic farmers within 7 days. Despite recording £42,000 net profit this year, *FreshCrate*'s bank balance has hit **(£19,000)**, and its bank threatens to withdraw its £20,000 overdraft limit. To solve its liquidity crisis, the directors are choosing between:\n- **Option 1**: Using **debt factoring** on £50,000 of restaurant invoices (advancing 86% cash immediately for a 10% fee)\n- **Option 2**: Cutting restaurant **credit terms from 60 days to 14 days** and demanding **cash on delivery** from new bistros\n\n**Justify** which option *FreshCrate Ltd* should choose. *(9 marks — use AJIM)*",
      modelAnswer:
        "FreshCrate Ltd should choose Option 1 (debt factoring) immediately to survive the imminent £20,000 overdraft cliff, then phase in tighter credit terms carefully. Because FreshCrate pays organic farmers in 7 days while restaurants take 60 days, classic overtrading has pushed its balance to −£19,000 — just £1,000 away from insolvency if the bank calls in the overdraft. Factoring £50,000 of invoices injects £43,000 cash within 48 hours, swinging the bank balance positive to +£24,000 and guaranteeing farmer payments continue smoothly.\n\nConversely, while Option 2 avoids surrendering £5,000 (10% fee) of FreshCrate's organic vegetable profit margin, abruptly slashing restaurant credit from 60 days to 14 days risks loyal chefs switching to rival catering wholesalers who still offer 60-day trade credit — collapsing sales revenue. Admittedly, repeated 10% factoring fees would severely erode long-term operating profit on low-margin produce. However, because cash survival this week trumps profit margin when sitting £1,000 from the overdraft ceiling, factoring the current £50,000 backlog is the decisive emergency lifeline.",
      markScheme: [
        {
          point: "AO2 (1m): Clear choice applied to organic farmers (7-day pay), restaurants (60-day credit) and −£19k vs £20k limit.",
          keywords: ["farmers", "restaurants", "£1,000", "cliff", "chefs"],
        },
        {
          point: "AO3 (1m): Quantifies/explains immediate cash injection (£43,000 / positive balance) preventing insolvency.",
          keywords: ["£43,000", "48 hours", "positive", "insolvency"],
        },
        {
          point: "AO3 (1m): Explains Cash vs Profit overtrading mismatch despite £42k profit.",
          keywords: ["overtrading", "mismatch", "survival"],
        },
        {
          point: "AO2/AO3 (1m): Analyses Option 2 risk — restaurants switch to rival catering wholesalers offering 60-day credit.",
          keywords: ["rival", "wholesalers", "switching", "collapsing"],
        },
        {
          point: "AO3 (1m): Acknowledges Option 2 benefit / Option 1 drawback — £5,000 (10%) fee erodes produce profit margin.",
          keywords: ["£5,000", "margin", "erode", "low-margin"],
        },
        {
          point: "AO4 (1m): Weighs immediate liquidity survival against profit-margin erosion.",
          keywords: ["trumps", "lifeline", "emergency"],
        },
        {
          point: "AO4 (1m): Identifies key 'it depends on' factor — proximity to £20k overdraft withdrawal + rival credit norms.",
          keywords: ["ceiling", "repeated", "imminent"],
        },
        {
          point: "AO4 (1m): Proposes smart staged synthesis — factor current backlog now, tighten credit gradually later.",
          keywords: ["phase", "backlog", "tighter"],
        },
        {
          point: "AO4 (1m): Reaches a decisive, supported overall judgement (AJIM).",
          keywords: ["should choose", "decisive"],
        },
      ],
      hints: [
        "Look at the emergency numbers in the stem: `−£19,000` balance against a `£20,000` overdraft limit the bank is threatening to pull! Plus calculate 86% of £50,000 = £43,000 cash!",
        "Compare Option 1 (instant £43k liquidity rescue vs £5k / 10% margin loss) against Option 2 (zero fee vs losing 60-day restaurant clients to rival wholesalers).",
        "Conclude decisively with **AJIM**: survive the immediate cash cliff first via factoring!",
      ],
    },
  ],
};
