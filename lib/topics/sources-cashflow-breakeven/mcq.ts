import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "sources-cashflow-breakeven-m1",
    title: "Paper 1 — Sources of Finance & Cash-Flow Forecasting",
    questions: [
      {
        id: "sources-cashflow-breakeven-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "internal-external-finance",
        question:
          "Which of the following is an **internal** source of finance for an established manufacturing business?",
        options: [
          "Retained profit",
          "A 5-year bank loan",
          "Trade credit from raw material suppliers",
          "Crowdfunding from online customers",
        ],
        answerIndex: 0,
        hints: [
          "Internal finance is raised *inside* the firm without borrowing from banks, suppliers or external backers.",
        ],
        explanation:
          "**Retained profit** (along with owner's savings and selling surplus assets) is generated internally with zero interest charges, whereas bank loans, trade credit and crowdfunding are external sources.",
      },
      {
        id: "sources-cashflow-breakeven-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "internal-external-finance",
        question:
          "Which type of business is **legally permitted** to raise long-term finance by floating new shares on a **public Stock Exchange**?",
        options: [
          "A sole trader",
          "A Deed-of-Partnership law firm",
          "A private limited company (Ltd)",
          "A public limited company (Plc)",
        ],
        answerIndex: 3,
        hints: [
          "Sole traders and partnerships have no shares at all, and an Ltd can only sell shares privately.",
        ],
        explanation:
          "Only a **public limited company (Plc)** can offer shares to the general public on a Stock Exchange (IPO). An **Ltd** sells shares privately to invited investors, while unincorporated sole traders and partnerships cannot issue shares.",
      },
      {
        id: "sources-cashflow-breakeven-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "internal-external-finance",
        question:
          "A sole-trader plumber (Paper 1) faces a temporary 3-week cash gap while waiting for a commercial client to pay a £3,500 invoice, and needs £900 today to buy copper pipes. Which source of finance is **most appropriate**?",
        options: [
          "A 20-year commercial mortgage",
          "An agreed bank overdraft or 30-day supplier trade credit",
          "Issuing ordinary shares on the Stock Exchange",
          "Venture capital in exchange for 35% of company shares",
        ],
        answerIndex: 1,
        hints: [
          "Match the **short-term revenue expenditure** (£900 pipes for 3 weeks) to a short-term source (< 1 year).",
          "Remember a sole trader cannot issue shares!",
        ],
        explanation:
          "**Supplier trade credit** (buy pipes now, pay in 30 days once the client pays) or a flexible **bank overdraft** matches a 3-week working-capital gap cleanly; mortgages are 20-year property loans, and sole traders have no shares.",
      },
      {
        id: "sources-cashflow-breakeven-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "internal-external-finance",
        question:
          "What is the **key difference** between **leasing** delivery vans and acquiring them via **Hire Purchase (HP)**?",
        options: [
          "With leasing the business never owns the vans (and maintenance is usually included), whereas with Hire Purchase the business owns the vans after the final instalment",
          "With leasing the business pays 100% cash upfront on Day 1, whereas Hire Purchase is completely interest-free",
          "Leasing is an internal source of finance, whereas Hire Purchase is only available to PLCs",
          "With Hire Purchase the lessor repairs breakdowns forever and swaps the van every 6 months",
        ],
        answerIndex: 0,
        hints: [
          "Think 'Lease = Loaned rental' vs 'Hire Purchase = Home Permanently at the end'.",
          "Who handles repairs and retains legal ownership under a lease?",
        ],
        explanation:
          "Under a **lease**, legal ownership stays with the leasing company (which typically covers servicing and upgrades); under **Hire Purchase**, ownership transfers to the business once the final payment is made.",
      },
      {
        id: "sources-cashflow-breakeven-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "internal-external-finance",
        question:
          "A high-growth biotech startup Ltd needs £800,000 for clinical trials. Banks refuse a loan due to lack of collateral, so the founders approach a **venture capitalist**. What is the **main drawback** for the founders?",
        options: [
          "The founders must surrender a significant equity stake and share strategic control of the company",
          "Venture capitalists demand monthly repayments starting next Tuesday regardless of revenue",
          "Venture capitalists are forbidden from giving any business mentoring or contacts",
          "Venture capital can only be used to pay weekly electricity bills",
        ],
        answerIndex: 0,
        hints: [
          "Venture capitalists invest *equity* (shares) in high-risk startups rather than simple interest-only loans.",
          "What happens to the founders' 100% ownership and board voting power?",
        ],
        explanation:
          "**Venture capitalists** take a substantial shareholding (e.g. 25–40%) and board influence in return for bearing high startup risk — causing **dilution of ownership and control** for the original founders.",
      },
      {
        id: "sources-cashflow-breakeven-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cash-flow-forecasting",
        question:
          "Why can a furniture manufacturer record **£25,000 profit** in October yet still suffer a **negative closing cash balance** at the end of October?",
        options: [
          "Cash and profit are identical, so the accountant must have added up wrongly",
          "The firm sold £60,000 of sofas to hotels on 60-day trade credit while paying cash immediately for timber and October wages",
          "Paying lower corporation tax always turns positive cash into a negative balance",
          "Depreciation is a huge monthly cash payment to the bank",
        ],
        answerIndex: 1,
        hints: [
          "When is **revenue/profit** recorded vs when does **cash** actually enter the bank account on 60-day credit sales?",
          "Note also that depreciation is a *non-cash* accounting expense!",
        ],
        explanation:
          "**Credit sales** count immediately towards October **revenue and profit**, but £0 cash arrives until December — meanwhile October wages and timber must be paid in **cash** immediately, draining liquidity.",
      },
      {
        id: "sources-cashflow-breakeven-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "cash-flow-forecasting",
        question:
          "In a 6-month cash-flow forecast, March ends with a **Closing Balance of (£1,450)**. What MUST **April's Opening Balance** be?",
        options: [
          "£0",
          "£1,450",
          "(£1,450)",
          "£2,900",
        ],
        answerIndex: 2,
        hints: [
          "Next month's Opening Balance at 00:01 AM on 1 April is identical to the bank balance at 23:59 PM on 31 March!",
        ],
        explanation:
          "By the cash-flow chain rule, **April's Opening Balance equals March's Closing Balance** — including its negative sign: **(£1,450)** (i.e. −£1,450).",
      },
      {
        id: "sources-cashflow-breakeven-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cash-flow-forecasting",
        question:
          "Study the cash-flow extract for *Coastline Surf Shop*:\n\n| (£) | September | October |\n|---|---|---|\n| Opening Balance | 1,200 | **(900)** |\n| Total Cash Inflows | 6,400 | 9,500 |\n| Total Cash Outflows | 8,500 | 7,200 |\n| Net Cash Flow | (2,100) | **X** |\n| Closing Balance | (900) | **Y** |\n\nWhat are the correct values for **X (October Net Cash Flow)** and **Y (October Closing Balance)**?",
        options: [
          "X = £2,300 and Y = £3,200",
          "X = (£2,300) and Y = (£3,200)",
          "X = £16,700 and Y = £15,800",
          "X = £2,300 and Y = £1,400",
        ],
        answerIndex: 3,
        hints: [
          "Step 1: X = October Inflows (9,500) − October Outflows (7,200).",
          "Step 2: Y = October Opening Balance (−900, watch the brackets!) + X.",
        ],
        explanation:
          "October Net Cash Flow **X** = {{9500 - 7200 = 2300}} (**£2,300**). October Closing Balance **Y** = {{-900 + 2300 = 1400}} (**£1,400**). Picking £3,200 treats `(900)` as `+900` instead of `−900`!",
      },
      {
        id: "sources-cashflow-breakeven-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cash-flow-forecasting",
        question:
          "Study the November cash-flow column for *Bistro 24*:\n\n| November (£) | Value |\n|---|---|\n| Opening Balance | 2,800 |\n| Total Cash Inflows | 14,200 |\n| Total Cash Outflows | **?** |\n| Net Cash Flow | **?** |\n| Closing Balance | **(600)** |\n\nWhat were *Bistro 24*'s **Total Cash Outflows** in November?",
        options: ["£10,800", "£16,400", "£17,600", "£14,800"],
        answerIndex: 2,
        hints: [
          "Find November's Net Cash Flow first: Closing (−600) − Opening (+2,800) = −£3,400.",
          "Since Inflows (14,200) − Outflows = −3,400, Outflows must be £3,400 *larger* than £14,200!",
        ],
        explanation:
          "To drop from `+£2,800` down to `−£600`, Net Cash Flow was {{-600 - 2800 = -3400}} (−£3,400). Therefore Total Cash Outflows = {{14200 + 3400 = 17600}} (**£17,600**). Picking £16,400 treats `(600)` as `+600`!",
      },
      {
        id: "sources-cashflow-breakeven-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "internal-external-finance",
        question:
          "A wholesaler sells £50,000 of unpaid 90-day customer invoices to a specialist finance house in exchange for **£44,000 cash today**. What is this short-term source of finance called, and how much margin did it cost?",
        options: [
          "Trade credit — £6,000 cost",
          "Hire purchase — £44,000 cost",
          "Crowdfunding — £6,000 cost",
          "Debt factoring — £6,000 cost",
        ],
        answerIndex: 3,
        hints: [
          "Selling unpaid trade receivables (invoices) at a discount for instant liquidity.",
          "Subtract £44,000 received from the £50,000 face value of the invoices.",
        ],
        explanation:
          "**Debt factoring** converts unpaid invoices into immediate cash (£44,000), while the factor retains {{50000 - 44000 = 6000}} (**£6,000**, or 12%) as its fee/profit.",
      },
      {
        id: "sources-cashflow-breakeven-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cash-flow-forecasting",
        question:
          "Which action would **directly improve** a retailer's **July Closing Cash Balance** without reducing product quality?",
        options: [
          "Extending customer credit periods from 30 days to 90 days",
          "Paying all suppliers cash on delivery instead of taking 60-day trade credit",
          "Buying a new £25,000 delivery van outright with cash in July instead of leasing it at £450/month",
          "Negotiating 60-day trade credit with stock suppliers instead of paying upfront in July",
        ],
        answerIndex: 3,
        hints: [
          "To improve July's Closing Balance, you must either speed cash *inflows* into July or delay cash *outflows* past July!",
          "What happens to July's cash outflow if July's stock bill isn't paid until September?",
        ],
        explanation:
          "Negotiating **60-day supplier trade credit** pushes July's stock payment out to September, cutting July Cash Outflows and boosting July's Closing Balance. Giving customers longer credit or buying vans outright in cash worsens July liquidity.",
      },
      {
        id: "sources-cashflow-breakeven-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "internal-external-finance",
        question:
          "Why is **retained profit** NOT completely 'free' even though no bank interest is charged?",
        options: [
          "Companies must pay 50% extra corporation tax on retained profit",
          "Retained profit is repayable on demand to suppliers within 14 days",
          "Retained profit dilutes the founder's shareholding to external venture capitalists",
          "Using retained profit carries an opportunity cost — funds reinvested cannot be paid as dividends to shareholders or earn interest in a savings account",
        ],
        answerIndex: 3,
        hints: [
          "Think of the economic concept of **opportunity cost** and how PLC/Ltd shareholders react when dividends are cut.",
          "Eliminate statements about debt repayment or ownership dilution.",
        ],
        explanation:
          "Retained profit has zero interest or dilution, **but** carries an **opportunity cost**: shareholders forgo immediate **dividends** (which may displease income-focused investors) and the cash forfeits bank deposit interest.",
      },
      {
        id: "sources-cashflow-breakeven-m1-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "internal-external-finance",
        question:
          "A delivery startup compares two ways to finance a £20,000 electric van over 3 years (36 months):\n- **Hire Purchase**: **10% deposit** + **36 monthly payments of £580** (van is worth **£6,500** resale at Year 3)\n- **Leasing**: £0 deposit + **36 monthly lease payments of £510** (van returned to lessor at Year 3)\n\nIgnoring maintenance, compare the **3-year total cash outflow** vs the **net 3-year cost after deducting Year 3 asset value**.",
        options: [
          "Leasing has £4,520 lower cash outflow over 3 years, whereas Hire Purchase is £1,980 cheaper once the £6,500 Year 3 van value is counted",
          "Hire Purchase has lower cash outflows in Year 1 and lower total cash payments than leasing",
          "Leasing costs £22,880 in cash outflows while Hire Purchase costs £18,360",
          "Both options have identical £20,000 cash outflows",
        ],
        answerIndex: 0,
        hints: [
          "Step 1: HP total cash outflow = £2,000 deposit + (36 × £580) = £22,880; Leasing total cash outflow = 36 × £510 = £18,360 (difference = £4,520).",
          "Step 2: Subtract the £6,500 owned van value from HP's £22,880 (£16,380 net) and compare against Leasing's £18,360!",
        ],
        explanation:
          "HP cash outflow = {{2000 + 20880 = 22880}} (£22,880) vs Lease cash outflow = {{36 * 510 = 18360}} (£18,360) — so Leasing saves **£4,520 in cash flow**. However, owning the £6,500 van leaves HP's net economic cost at {{22880 - 6500 = 16380}} (£16,380), **£1,980 cheaper** than leasing!",
      },
      {
        id: "sources-cashflow-breakeven-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cash-flow-forecasting",
        question:
          "What is a fundamental **limitation** of relying on a 6-month cash-flow forecast for a beach-resort ice-cream parlour?",
        options: [
          "Cash-flow forecasts include depreciation and ignore bank balances",
          "Inflows and outflows are only estimates — an unseasonably cold, wet August or sudden energy-bill spike can invalidate the forecast",
          "Banks refuse to read cash-flow forecasts when assessing loan applications",
          "Cash-flow forecasts cannot show negative figures",
        ],
        answerIndex: 1,
        hints: [
          "Why does a *forecast* written in January often differ from *actual* August bank statements?",
          "Think external shocks: weather, competitors, supplier inflation.",
        ],
        explanation:
          "Cash-flow forecasts rely on **assumptions and predictions**; external shocks (poor summer weather, rising dairy/energy costs, new competitors) mean actual cash balances can diverge sharply from forecasts.",
      },
      {
        id: "sources-cashflow-breakeven-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "internal-external-finance",
        question:
          "Why does an eco-gadget startup launching a solar backpack benefit from using **reward-based crowdfunding** rather than a traditional bank loan?",
        options: [
          "Crowdfunding validates real customer demand, builds viral pre-launch publicity, and avoids fixed monthly interest repayments",
          "Crowdfunding is kept completely secret from competitors and the public",
          "Government law guarantees every crowdfunding campaign reaches 100% of its target",
          "Banks charge 0% interest whereas crowdfunding charges 25% APR",
        ],
        answerIndex: 0,
        hints: [
          "Think how Kickstarter/Indiegogo pre-orders double as **market research** and **promotion** alongside raising cash!",
          "Notice startups with unproven gadgets often get rejected by risk-averse banks.",
        ],
        explanation:
          "**Crowdfunding** raises capital without bank collateral or fixed interest debt while simultaneously proving market demand and generating loyal word-of-mouth buzz (though public campaigns can be copied by rivals or fail to hit funding targets).",
      },
    ],
  },
  {
    id: "sources-cashflow-breakeven-m2",
    title: "Paper 2 — Costs, Revenue, Profit & Break-Even Calculations",
    questions: [
      {
        id: "sources-cashflow-breakeven-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "costs-revenue-profit",
        question:
          "Which of the following is a **fixed cost** for a high-street bakery?",
        options: [
          "Flour, yeast and butter used in loaves",
          "Paper bread bags handed out with each loaf sold",
          "Monthly shop rent on a 3-year lease",
          "Piece-rate bonuses paid per tray of croissants baked",
        ],
        answerIndex: 2,
        hints: [
          "Which cost must still be paid in full even if the bakery closes for a week and bakes zero loaves?",
        ],
        explanation:
          "**Monthly shop rent** does not change with daily loaf output (**fixed cost**), whereas flour, bread bags and piece-rate wages vary directly with production volume (**variable costs**).",
      },
      {
        id: "sources-cashflow-breakeven-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "costs-revenue-profit",
        question:
          "A T-shirt printer has monthly **Fixed Costs of £2,500** and **Variable Cost of £4.00 per T-shirt**. In April it prints **600 T-shirts**. What are its **Total Costs** in April?",
        options: ["£2,400", "£2,504", "£4,900", "£15,000"],
        answerIndex: 2,
        hints: [
          "Total Costs = Fixed Costs + (Variable Cost per unit × Output).",
        ],
        explanation:
          "Total Variable Costs = {{600 * 4 = 2400}} (£2,400). Total Costs = {{2500 + 2400 = 4900}} (**£4,900**). Picking £2,400 forgets Fixed Costs!",
      },
      {
        id: "sources-cashflow-breakeven-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "costs-revenue-profit",
        question:
          "Study the annual cost and sales table for *Pure Glow Skincare Ltd*:\n\n| Item | Value |\n|---|---|\n| Monthly factory rent & salaries (Fixed Costs) | **£5,000 per month** |\n| Variable cost per jar | **£3.50** |\n| Selling price per jar | **£11.50** |\n| Annual jars produced and sold | **10,000 jars** |\n\nWhat is *Pure Glow*'s **annual profit**?",
        options: ["£75,000", "£20,000", "£80,000", "£115,000"],
        answerIndex: 1,
        hints: [
          "WATCH THE TIME TRAP: Fixed Costs are £5,000 **per month** — multiply by **12** for annual Fixed Costs (£60,000)!",
          "Compute Annual TR (10,000 × £11.50 = £115,000) minus Annual TC (£60,000 + £35,000).",
        ],
        explanation:
          "Annual Fixed Costs = {{5000 * 12 = 60000}} (£60,000). Annual VC = {{10000 * 3.50 = 35000}} (£35,000). Annual TC = £95,000. Annual TR = {{10000 * 11.50 = 115000}} (£115,000). Annual Profit = {{115000 - 95000 = 20000}} (**£20,000**). Picking £75,000 forgot to multiply monthly rent by 12!",
      },
      {
        id: "sources-cashflow-breakeven-m2-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "breakeven-calculation",
        question:
          "A handmade soap bar sells for **£7.50** and has a **variable cost per bar of £2.10** (essential oils, Shea butter and wrapper). What is the **contribution per bar**?",
        options: ["£9.60", "£7.50", "£2.10", "£5.40"],
        answerIndex: 3,
        hints: [
          "Contribution per unit = Selling Price − Variable Cost per unit.",
        ],
        explanation:
          "Contribution per bar = {{7.50 - 2.10 = 5.40}} (**£5.40**).",
      },
      {
        id: "sources-cashflow-breakeven-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "breakeven-calculation",
        question:
          "A pizza van has weekly **Fixed Costs of £1,050**, **Variable Cost of £3.00 per pizza**, and a **Selling Price of £10.00 per pizza**. What is its weekly **break-even output**?",
        options: ["150 pizzas", "105 pizzas", "350 pizzas", "81 pizzas"],
        answerIndex: 0,
        hints: [
          "NEVER divide Fixed Costs by Selling Price (£10)!",
          "First find Contribution per pizza (£10 − £3 = £7), then divide £1,050 by £7.",
        ],
        explanation:
          "Contribution per pizza = {{10 - 3 = 7}} (£7). Break-even output = {{1050 / 7 = 150}} (**150 pizzas**). Picking 105 pizzas commits the classic error of dividing Fixed Costs by Selling Price!",
      },
      {
        id: "sources-cashflow-breakeven-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "breakeven-calculation",
        question:
          "Using the same pizza van (**Fixed Costs = £1,050/week**, **VC = £3/pizza**, **SP = £10/pizza**), what is the **break-even revenue (£)** per week?",
        options: ["£1,050", "£450", "£1,500", "£1,057"],
        answerIndex: 2,
        hints: [
          "Break-even output is 150 pizzas per week.",
          "Multiply break-even output (150 pizzas) by Selling Price (£10) — and check that it equals Total Costs at 150 pizzas!",
        ],
        explanation:
          "Break-even revenue = {{150 * 10 = 1500}} (**£1,500**). Check: Total Costs at 150 pizzas = `£1,050 + (150 × £3) = £1,500` — Revenue equals Total Costs!",
      },
      {
        id: "sources-cashflow-breakeven-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "breakeven-calculation",
        question:
          "A workshop builds wooden garden benches (**Fixed Costs = £9,000/month**, **Variable Cost = £40/bench**, **Selling Price = £115/bench**). How many benches must it make and sell in a month to achieve a **target profit of £4,500**?",
        options: ["120 benches", "180 benches", "60 benches", "117 benches"],
        answerIndex: 1,
        hints: [
          "Contribution per bench = £115 − £40 = £75.",
          "Use Target Profit Output = (Fixed Costs + Target Profit) ÷ Contribution per unit.",
        ],
        explanation:
          "Contribution = {{115 - 40 = 75}} (£75). Target output = {{(9000 + 4500) / 75 = 13500 / 75 = 180}} (**180 benches**). 120 benches is the zero-profit break-even output.",
      },
      {
        id: "sources-cashflow-breakeven-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "costs-revenue-profit",
        question:
          "Factory Alpha produces **2,000 kettles** with Fixed Costs of **£16,000** and Variable Cost of **£7 per kettle**. If output rises to **4,000 kettles** (with the same Fixed Costs and £7 VC per kettle), how does the **average unit cost per kettle** change?",
        options: [
          "It stays constant at £15.00 per kettle",
          "It rises from £11.00 per kettle to £15.00 per kettle",
          "It halves from £15.00 per kettle to £7.50 per kettle",
          "It falls from £15.00 per kettle to £11.00 per kettle",
        ],
        answerIndex: 3,
        hints: [
          "At 2,000 kettles: TC = £16,000 + £14,000 = £30,000 → divide by 2,000.",
          "At 4,000 kettles: TC = £16,000 + £28,000 = £44,000 → divide by 4,000.",
        ],
        explanation:
          "At 2,000 units, AC = {{30000 / 2000 = 15.00}} (£15.00). At 4,000 units, AC = {{44000 / 4000 = 11.00}} (**£11.00**) — Fixed Cost per kettle halves from £8 to £4 while VC stays £7.",
      },
      {
        id: "sources-cashflow-breakeven-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "breakeven-calculation",
        question:
          "A bespoke surfboard shaper has annual **Fixed Costs of £25,000**, **Variable Cost of £140 per surfboard**, and **Selling Price of £440 per surfboard**. Since partial surfboards cannot be sold, what is the **minimum whole number of surfboards** required so the shaper does **not** make a loss?",
        options: ["83 surfboards", "84 surfboards", "57 surfboards", "80 surfboards"],
        answerIndex: 1,
        hints: [
          "Calculate £25,000 ÷ (£440 − £140) = £25,000 ÷ £300 = 83.33 surfboards.",
          "Check 83 surfboards: 83 × £300 = £24,900 total contribution (still a £100 loss!) — so round UP!",
        ],
        explanation:
          "Exact break-even = {{25000 / 300 = 83.33}} boards. At 83 boards the shaper still loses £100 (`83 × £300 − £25,000 = −£100`), so **84 whole surfboards** must be sold to cover all costs.",
      },
      {
        id: "sources-cashflow-breakeven-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "breakeven-calculation",
        question:
          "A sunglasses brand sells **1,500 pairs** at **£40 each**, with **Variable Cost of £12 per pair** and **Fixed Costs of £28,000**. What is its **Total Contribution** (NOT profit!)?",
        options: ["£14,000", "£60,000", "£42,000", "£28,000"],
        answerIndex: 2,
        hints: [
          "Read carefully: the question asks for **Total Contribution**, NOT Profit!",
          "Total Contribution = (SP − VC) × Quantity = (£40 − £12) × 1,500.",
        ],
        explanation:
          "Contribution per pair = {{40 - 12 = 28}} (£28). **Total Contribution** = {{28 * 1500 = 42000}} (**£42,000**). Subtracting £28,000 Fixed Costs gives £14,000 *Profit* — never confuse Total Contribution with Profit!",
      },
      {
        id: "sources-cashflow-breakeven-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "breakeven-calculation",
        question:
          "A pottery café breaks even at **500 mugs per month**. Its monthly **Fixed Costs are £4,500** and **Variable Cost per mug is £3.00**. What **Selling Price per mug** is the café charging?",
        options: ["£9.00", "£6.00", "£12.00", "£15.00"],
        answerIndex: 2,
        hints: [
          "First find Contribution per mug: Fixed Costs (£4,500) ÷ Break-Even Output (500 mugs) = £9.00.",
          "Since Contribution = SP − £3.00 = £9.00, add £3.00 to find Selling Price!",
        ],
        explanation:
          "Contribution per mug = {{4500 / 500 = 9.00}} (£9.00). Since `SP − £3.00 = £9.00`, Selling Price = {{9.00 + 3.00 = 12.00}} (**£12.00**). Stopping at £9.00 forgets to add back Variable Cost!",
      },
      {
        id: "sources-cashflow-breakeven-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "costs-revenue-profit",
        question:
          "If a manufacturing firm produces **zero units** during a two-week August factory shutdown, which equation holds true during that fortnight?",
        options: [
          "Total Costs = Fixed Costs and Loss = Fixed Costs",
          "Total Costs = £0 and Profit = £0",
          "Variable Costs = Fixed Costs and Total Revenue > £0",
          "Total Costs = Variable Costs = £0",
        ],
        answerIndex: 0,
        hints: [
          "At Q = 0, Revenue = £0 and Variable Costs = £0, while rent, insurance and salaried staff still have to be paid!",
          "Plug TR = 0 and TC = FC into Profit = TR − TC.",
        ],
        explanation:
          "At zero output, `VC = £0` and `TR = £0`, so **Total Costs equal Fixed Costs** (`TC = FC + 0 = FC`), leaving a **loss equal to Fixed Costs** (`0 − FC = −FC`).",
      },
      {
        id: "sources-cashflow-breakeven-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "breakeven-calculation",
        question:
          "An e-scooter rental depot has monthly **Fixed Costs of £15,000**, **Variable Cost of £2.50 per ride**, and **Selling Price of £7.50 per ride**. If electricity inflation raises Variable Cost by **20%** while Selling Price and Fixed Costs stay unchanged, by how many rides per month does **break-even output increase**?",
        options: [
          "3,334 rides",
          "334 rides (or 333.3 rides exact)",
          "600 rides",
          "Break-even output falls by 333 rides",
        ],
        answerIndex: 1,
        hints: [
          "Original Contribution = £7.50 − £2.50 = £5.00 → Original BEP = 15,000 ÷ 5 = 3,000 rides.",
          "New VC = £2.50 × 1.20 = £3.00 → New Contribution = £7.50 − £3.00 = £4.50 → New BEP = 15,000 ÷ 4.50 = 3,333.3 rides (3,334 whole rides).",
        ],
        explanation:
          "Old BEP = {{15000 / 5 = 3000}} rides. A 20% rise lifts VC from £2.50 to **£3.00**, cutting Contribution to £4.50; new BEP = {{15000 / 4.50 = 3333.33}} (3,334 whole rides) — an **increase of 334 rides** (333.3 exact).",
      },
      {
        id: "sources-cashflow-breakeven-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "costs-revenue-profit",
        question:
          "Which cost at a delivery company is best classified as a **semi-variable cost**?",
        options: [
          "Cardboard parcel tape used per box",
          "Annual warehouse fire-insurance premium",
          "Piece-rate £0.50 paid per parcel sorted",
          "Van telephone & telematics contract charging £25/month fixed line rental plus £0.08 per mile tracked",
        ],
        answerIndex: 3,
        hints: [
          "Look for a cost combining a fixed monthly standing fee (> £0 at zero miles) AND a per-unit usage charge.",
          "Eliminate pure variable costs (tape, piece-rate) and pure fixed costs (annual fire insurance).",
        ],
        explanation:
          "A £25 standing charge plus £0.08/mile combines both fixed and variable components (**semi-variable cost**).",
      },
      {
        id: "sources-cashflow-breakeven-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "breakeven-calculation",
        question:
          "A theatre show has Fixed Costs of **£24,000**, Variable Cost of **£2 per ticket**, and Ticket Price of **£22**. On Friday night **1,450 tickets** are sold. Using the **Contribution shortcut**, what is the show's profit?",
        options: ["£29,000", "£31,900", "£5,000", "£7,900"],
        answerIndex: 2,
        hints: [
          "Contribution per ticket = £22 − £2 = £20; Break-even = £24,000 ÷ £20 = 1,200 tickets.",
          "Margin of Safety = 1,450 − 1,200 = 250 tickets; multiply 250 × £20 Contribution!",
        ],
        explanation:
          "Contribution = £20/ticket; BEP = 1,200 tickets; Margin of Safety = {{1450 - 1200 = 250}} tickets. Profit = {{250 * 20 = 5000}} (**£5,000**). Check: `TR (£31,900) − TC (£24,000 + £2,900) = £5,000`!",
      },
    ],
  },
  {
    id: "sources-cashflow-breakeven-m3",
    title: "Paper 3 — Break-Even Charts, Margin of Safety & Synthesis",
    questions: [
      {
        id: "sources-cashflow-breakeven-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "breakeven-charts-mos",
        question:
          "On a standard break-even chart, where does the **Total Cost (TC)** line begin at **zero output**?",
        options: [
          "At the origin (0, £0)",
          "On the vertical axis at the level of Fixed Costs (0, £FC)",
          "At the Break-Even Point",
          "Below zero in the negative quadrant",
        ],
        answerIndex: 1,
        hints: [
          "At 0 output, Variable Costs = £0, so Total Costs = Fixed Costs + £0 = Fixed Costs!",
        ],
        explanation:
          "Because Fixed Costs are incurred even at zero output, **TC starts at `(0, £FC)`** on the vertical axis, whereas **Total Revenue (TR)** starts at `(0, £0)`.",
      },
      {
        id: "sources-cashflow-breakeven-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "breakeven-charts-mos",
        question:
          "A waffle kiosk breaks even at **320 waffles per week** and actually sells **490 waffles** this week. What is its **Margin of Safety**?",
        options: ["810 waffles", "320 waffles", "490 waffles", "170 waffles"],
        answerIndex: 3,
        hints: [
          "Margin of Safety = Actual Output − Break-Even Output.",
        ],
        explanation:
          "Margin of Safety = {{490 - 320 = 170}} (**170 waffles**): weekly sales can drop by up to 170 waffles before the kiosk starts making a loss.",
      },
      {
        id: "sources-cashflow-breakeven-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "breakeven-charts-mos",
        question:
          "A landlord increases a gym's **monthly fixed rent by £1,500** while membership fees and variable costs stay unchanged. How does the gym's **break-even chart** change?",
        options: [
          "Total Revenue pivots steeper downwards, lowering break-even output",
          "Fixed Cost and Total Cost lines shift parallel upwards by £1,500, raising break-even output and shrinking Margin of Safety",
          "Total Cost pivots steeper from the origin (0,0), leaving break-even unchanged",
          "Fixed Cost shifts downwards and Margin of Safety increases",
        ],
        answerIndex: 1,
        hints: [
          "Rent is a Fixed Cost — does a fixed cost change the *slope* (per-unit VC) or the *vertical intercept* of FC and TC?",
          "When TC shifts up while TR stays fixed, their intersection moves right (higher BEP).",
        ],
        explanation:
          "A £1,500 rent rise shifts **both FC and TC parallel upwards** by £1,500, pushing the TR/TC intersection to a **higher break-even membership count** and **narrowing Margin of Safety**.",
      },
      {
        id: "sources-cashflow-breakeven-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "breakeven-charts-mos",
        question:
          "Suppose a coffee roaster raises its **Selling Price** from £8 to £10 per bag while Fixed and Variable Costs remain constant. On a break-even chart, what happens to the **Total Revenue (TR)** line and the **Break-Even Point**?",
        options: [
          "TR pivots steeper upwards from (0,0), lowering Break-Even Output",
          "TR shifts parallel upwards so it no longer starts at (0,0)",
          "TR pivots flatter downwards, raising Break-Even Output",
          "TC shifts downwards while TR stays completely unchanged",
        ],
        answerIndex: 0,
        hints: [
          "At 0 bags sold, Revenue is STILL £0 — so TR always starts at (0,0)!",
          "Each bag brings in £10 instead of £8, making TR climb more steeply to cross TC earlier.",
        ],
        explanation:
          "A higher Selling Price makes **TR pivot steeper upwards from `(0,0)`**, intersecting TC further to the left — **lowering Break-Even Output**.",
      },
      {
        id: "sources-cashflow-breakeven-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "breakeven-charts-mos",
        question:
          "Study the break-even data for *Urban Backpack Co*:\n\n| Metric | Value |\n|---|---|\n| Monthly Fixed Costs | £14,000 |\n| Variable Cost per backpack | £16 |\n| Selling Price per backpack | £36 |\n| Forecast monthly sales | 950 backpacks |\n\nWhat are *Urban Backpack Co*'s **Margin of Safety (in backpacks)** and **forecast monthly profit (£)**?",
        options: [
          "Margin of Safety = 250 backpacks; Forecast Profit = £5,000",
          "Margin of Safety = 700 backpacks; Forecast Profit = £14,000",
          "Margin of Safety = 250 backpacks; Forecast Profit = £9,000",
          "Margin of Safety = 561 backpacks; Forecast Profit = £5,000",
        ],
        answerIndex: 0,
        hints: [
          "Step 1: Contribution = £36 − £16 = £20 → Break-even = £14,000 ÷ £20 = 700 backpacks.",
          "Step 2: Margin of Safety = 950 − 700 = 250 backpacks; Profit = 250 × £20.",
        ],
        explanation:
          "Contribution = £20; BEP = {{14000 / 20 = 700}} backpacks. Margin of Safety = {{950 - 700 = 250}} backpacks; Profit = {{250 * 20 = 5000}} (**£5,000**).",
      },
      {
        id: "sources-cashflow-breakeven-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "breakeven-charts-mos",
        question:
          "Which of the following is a valid **AO4 evaluation limitation** of break-even analysis in an Edexcel 4BS1 9-mark or 12-mark essay?",
        options: [
          "Break-even charts make it impossible to see Fixed Costs visually",
          "Break-even assumes every single unit produced is sold at one fixed price, ignoring unsold perishable wastage and bulk-buying cost curves",
          "Banks dislike seeing break-even calculations in startup business plans",
          "Break-even analysis only works for public sector hospitals",
        ],
        answerIndex: 1,
        hints: [
          "Think about realistic retail/food trading: is 100% of baked bread sold at full price before closing time, and are supplier unit costs strictly linear?",
          "Remember banks actually *love* seeing break-even in business plans — its flaw is overly simplified linear assumptions!",
        ],
        explanation:
          "Break-even's classic weaknesses are assuming **`Output = Sales`** (zero wastage/unsold stock), **constant single Selling Price** (ignoring markdowns/PED), and **strictly linear Variable Costs** (ignoring bulk-buying discounts).",
      },
      {
        id: "sources-cashflow-breakeven-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "breakeven-charts-mos",
        question:
          "On a break-even chart, what does the **vertical gap** between the **Total Revenue (TR)** line and the **Total Cost (TC)** line at an output level **to the right** of the Break-Even Point represent?",
        options: [
          "Total Variable Costs",
          "Margin of Safety in units",
          "Total Profit at that output level",
          "Total Fixed Costs",
        ],
        answerIndex: 2,
        hints: [
          "Right of BEP, TR sits *above* TC.",
          "Vertical axis measures £: what is `TR − TC` in £?",
        ],
        explanation:
          "To the right of BEP, `TR > TC`, so the **vertical £ distance `TR − TC`** equals **Total Profit** at that output (whereas **Margin of Safety** is measured **horizontally** along the units axis!).",
      },
      {
        id: "sources-cashflow-breakeven-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "breakeven-charts-mos",
        question:
          "A boutique cinema raises ticket prices by **25%** from **£12 to £15** (Variable Cost = £2/ticket; Fixed Costs = £6,500/week). Break-even falls from **650 tickets** to **500 tickets**. However, because cinema demand is **price elastic**, actual weekly attendance drops by **40%** from **900 tickets** down to **540 tickets**. What happens to the cinema's **weekly profit**?",
        options: [
          "Weekly profit rises because Break-Even Output fell by 150 tickets",
          "Weekly profit doubles from £2,500 to £5,000",
          "The cinema makes a weekly loss of £1,100",
          "Weekly profit falls sharply from £2,500 down to £520",
        ],
        answerIndex: 3,
        hints: [
          "Old Profit: Margin of Safety (900 − 650 = 250) × Old Contribution (£10) = £2,500.",
          "New Profit: Margin of Safety (540 − 500 = 40) × New Contribution (£13) = £520!",
        ],
        explanation:
          "Old profit = {{(900 - 650) * 10 = 2500}} (£2,500). Despite break-even dropping to 500, elastic demand slashed actual attendance to 540 (MoS = 40 tickets), shrinking profit to {{40 * 13 = 520}} (**£520**) — a textbook Grade 9 AO4 evaluation point!",
      },
      {
        id: "sources-cashflow-breakeven-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "internal-external-finance",
        question:
          "A Paper 2 airline PLC already has **very high debt (high gearing)** and central-bank **interest rates have just risen to 5.5%**. It needs £120 million to acquire fuel-efficient jets. Which funding route avoids adding further interest burden and bankruptcy risk?",
        options: [
          "Taking out a variable-rate bank overdraft for £120 million",
          "Issuing new ordinary share capital on the Stock Exchange (rights issue / equity)",
          "Using 30-day trade credit from catering suppliers",
          "Using the CEO's personal savings account",
        ],
        answerIndex: 1,
        hints: [
          "High existing debt + high interest rates make extra borrowing risky and expensive.",
          "Because the airline is a **PLC**, what permanent interest-free external source can raise £120m?",
        ],
        explanation:
          "As a **PLC** already carrying heavy debt during high interest rates, **issuing new share capital** raises £120m permanently with **zero mandatory interest repayments** (at the trade-off of shareholder dilution and future dividend expectations).",
      },
      {
        id: "sources-cashflow-breakeven-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cash-flow-forecasting",
        question:
          "Study the 3-month cash-flow forecast for *Peak Climbing Gym*:\n\n| (£) | Jan | Feb | Mar |\n|---|---|---|---| \n| Opening Balance | 4,000 | 1,500 | (2,000) |\n| Total Cash Inflows | 8,000 | 7,500 | 12,000 |\n| Total Cash Outflows | 10,500 | 11,000 | 9,000 |\n| Net Cash Flow | (2,500) | (3,500) | 3,000 |\n| Closing Balance | 1,500 | (2,000) | **Z** |\n\nWhat is the value of **Z (March Closing Balance)**, and in which month(s) does the gym require an **overdraft** at month-end?",
        options: [
          "Z = £5,000; overdraft needed in January and February",
          "Z = £1,000; overdraft needed at the end of February only",
          "Z = (£5,000); overdraft needed in February and March",
          "Z = £1,000; overdraft needed in January, February and March",
        ],
        answerIndex: 1,
        hints: [
          "Calculate Z = March Opening (−2,000) + March Net Cash Flow (+3,000) = +£1,000.",
          "Check Closing Balances across Jan (+1,500), Feb (−2,000) and Mar (+1,000): only negative closing balances need an overdraft!",
        ],
        explanation:
          "**Z** = {{-2000 + 3000 = 1000}} (**+£1,000**). Note that January has a negative *Net Cash Flow* `(2,500)` yet still finishes with `+£1,500` in the bank! Only **February** ends with a negative **Closing Balance** `(2,000)`, requiring an overdraft.",
      },
      {
        id: "sources-cashflow-breakeven-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "costs-revenue-profit",
        question:
          "Why does switching warehouse workers from **fixed annual salaries** to **piece-rate pay per parcel** lower a courier firm's **break-even output** during quiet months (assuming total cost at peak is similar)?",
        options: [
          "Piece-rate converts fixed salary overheads into variable costs, reducing Fixed Costs in the numerator of the break-even formula",
          "Piece-rate increases Fixed Costs by 100%",
          "Piece-rate makes Selling Price infinite",
          "Fixed salaries are already counted as zero in break-even charts",
        ],
        answerIndex: 0,
        hints: [
          "Look at `BEP = Fixed Costs ÷ (SP − VC)` when £10,000/month of fixed salaries shifts into per-unit VC!",
          "During a quiet recession slump, paying per parcel means zero idle fixed payroll.",
        ],
        explanation:
          "Converting fixed salaries into variable piece-rate **slashes Fixed Costs**, lowering the minimum volume needed to survive quiet troughs (linking Topic 2.4 Remuneration directly to Topic 3.3 Break-Even!).",
      },
      {
        id: "sources-cashflow-breakeven-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "breakeven-charts-mos",
        question:
          "A craft soda maker currently sells **12,000 cans/month** at **£2.00/can**, with **Variable Cost = £0.80/can** and **Fixed Costs = £9,600/month**. A supermarket offers to stock the cans if the maker cuts wholesale Selling Price to **£1.60/can**, forecasting volume will jump to **18,000 cans/month** (Fixed Costs rise by **£1,600/month** for extra bottling lease). Compare **old vs new monthly profit**.",
        options: [
          "Monthly profit rises from £4,800 to £6,400",
          "Monthly profit stays unchanged at £4,800",
          "The soda maker makes a monthly loss of £1,600",
          "Monthly profit falls from £4,800 to £3,200",
        ],
        answerIndex: 3,
        hints: [
          "Old profit: 12,000 × (£2.00 − £0.80) − £9,600 = £14,400 − £9,600 = £4,800.",
          "New profit: 18,000 × (£1.60 − £0.80) − (£9,600 + £1,600) = £14,400 − £11,200 = £3,200!",
        ],
        explanation:
          "Old profit = **£4,800**. Under the supermarket deal, Contribution halves from £1.20 to £0.80 (`18,000 × £0.80 = £14,400` total contribution), while Fixed Costs rise to £11,200 — **cutting monthly profit from £4,800 down to £3,200** despite 50% higher volume!",
      },
      {
        id: "sources-cashflow-breakeven-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "internal-external-finance",
        question:
          "A regional manufacturer wants to install solar panels on its factory roof and discovers a **local government green transition grant** covering £25,000. What is the main advantage AND main catch of a **government grant**?",
        options: [
          "Advantage: Never has to be repaid and carries zero interest; Catch: Strict eligibility criteria (e.g. carbon targets/job creation) and lengthy application paperwork",
          "Advantage: Instant cash in 5 minutes with no forms; Catch: Government takes 51% voting control of the firm",
          "Advantage: Doubles the firm's bank overdraft rate; Catch: Must be repaid with 18% interest within 6 months",
          "Advantage: Only sole traders qualify; Catch: All factory machines must be sold",
        ],
        answerIndex: 0,
        hints: [
          "Grants are non-repayable, interest-free awards — why doesn't every business get one effortlessly?",
          "Think strict green/regional job conditions and competitive red tape.",
        ],
        explanation:
          "**Government grants** require **neither repayment nor interest nor equity dilution**, but applicants face **strict qualifying conditions**, audits and time-consuming applications with no guarantee of approval.",
      },
      {
        id: "sources-cashflow-breakeven-m3-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "breakeven-charts-mos",
        question:
          "If global cocoa shortages push a chocolate maker's **Variable Cost per bar** up from **£0.90 to £1.30** (while Fixed Costs and £2.50 Selling Price remain unchanged), how does the **Total Cost (TC)** line move on its break-even chart?",
        options: [
          "TC shifts parallel upwards to a higher vertical intercept",
          "TC starts at the same vertical intercept (0, £FC) but pivots steeper upwards, raising Break-Even Output",
          "TC pivots flatter downwards, lowering Break-Even Output",
          "TC drops to the origin (0, £0)",
        ],
        answerIndex: 1,
        hints: [
          "Fixed Costs did NOT change — so at Output = 0, TC still starts at exact same `(0, £FC)`!",
          "Each bar adds £1.30 instead of £0.90, so TC's slope becomes steeper.",
        ],
        explanation:
          "Because Fixed Costs are unchanged, TC stays anchored at `(0, £FC)` and **pivots steeper upwards**, intersecting TR further right (**higher Break-Even Output, smaller Margin of Safety**).",
      },
      {
        id: "sources-cashflow-breakeven-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "cash-flow-forecasting",
        question:
          "In an Edexcel 4BS1 **12-mark 'Evaluate'** question asking whether a rapidly expanding food wholesaler suffering negative monthly cash balances should use **debt factoring** or a **bank overdraft**, what distinguishes a **Grade 9 (Level 3)** conclusion?",
        options: [
          "Defining inflows and outflows without mentioning the wholesaler's invoices or profit margins",
          "Recommending issuing PLC shares on the Stock Exchange to pay next Friday's electricity bill",
          "Weighing factoring's permanent 10–15% margin sacrifice on invoices against an overdraft's variable interest and 'repayable-on-demand' risk, then judging which fits the wholesaler's gross profit margin and debtor reliability",
          "Stating that because the wholesaler is expanding, its cash balance must actually be positive",
        ],
        answerIndex: 2,
        hints: [
          "Compare the exact financial mechanics of both short-term options in context!",
          "If the food wholesaler operates on razor-thin **8% gross margins**, giving 12% to a debt factor would turn every sale into a loss!",
        ],
        explanation:
          "Food wholesalers typically have **thin gross margins** — surrendering 10–15% to a debt factor could wipe out profit completely, making an agreed **bank overdraft** (plus tighter credit control) superior *unless* bad debts/slow payers cannot be chased internally (**AJIM** in action!).",
      },
    ],
  },
];
