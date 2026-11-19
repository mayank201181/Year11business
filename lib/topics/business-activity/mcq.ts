import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "business-activity-m1",
    title: "Paper 1 — Core Concepts: Objectives, Stakeholders & Ownership",
    questions: [
      {
        id: "business-activity-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "business-objectives",
        question:
          "Ravi opened an independent 3-staff bicycle repair workshop two months ago using his personal savings. Which financial objective is most likely to be his top priority during his first 12 months of trading?",
        options: [
          "Survival by ensuring monthly cash inflows cover rent, tools and wages",
          "Paying high quarterly dividends to institutional stock-exchange investors",
          "Achieving global market share dominance across Europe and Asia",
          "Merging with a multinational car manufacturer",
        ],
        answerIndex: 0,
        explanation:
          "New start-ups face uncertain demand and high initial set-up outflows, making **survival** their primary Year 1 financial objective. Sole traders do not have stock-exchange shareholders or global market-share scale.",
        hints: [
          "Consider the size (3 staff) and age (two months old) of Ravi's workshop.",
          "What must a brand-new small business achieve before it can chase large profits or expansion?",
        ],
      },
      {
        id: "business-activity-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "business-objectives",
        question:
          "Which of the following is a **non-financial** objective for an entrepreneur setting up an artisan jewellery studio?",
        options: [
          "Increasing Operating Profit Margin from 12% to 16%",
          "Personal satisfaction and creative independence over every design",
          "Growing annual sales revenue by £40,000",
          "Capturing 8% of the regional bridal jewellery market",
        ],
        answerIndex: 1,
        explanation:
          "**Personal satisfaction and independence** are non-financial motives rather than monetary targets; operating profit margin, sales revenue and market share are all financial objectives.",
        hints: [
          "Separate money/revenue/market-share metrics from personal or social motives.",
          "Which target cannot be measured directly on an income statement?",
        ],
      },
      {
        id: "business-activity-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "business-objectives",
        question:
          "A regional organic juice company sets the objective: *'Increase online bottle sales in Scotland by 15% before 30 November this year.'* Which letter of the **SMART** framework is explicitly satisfied by including *'before 30 November this year'*?",
        options: ["Specific", "Measurable", "Achievable", "Time-bound"],
        answerIndex: 3,
        explanation:
          "Setting a clear deadline (*before 30 November this year*) makes the target **Time-bound**, whereas *15%* makes it Measurable and *online bottle sales in Scotland* makes it Specific.",
        hints: [
          "Recall the five letters of SMART: Specific, Measurable, Achievable, Relevant, Time-bound.",
          "Focus specifically on the calendar deadline in the stated target.",
        ],
      },
      {
        id: "business-activity-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "stakeholders-conflicts",
        question: "Which group is classified as an **internal stakeholder** of a private limited company (`Ltd`)?",
        options: [
          "Local residents living opposite the company's warehouse",
          "Commercial banks providing the company's overdraft facility",
          "Full-time and part-time employees working on the factory floor",
          "Component suppliers delivering raw materials on 30-day credit",
        ],
        answerIndex: 2,
        explanation:
          "**Employees** (alongside managers and owners/shareholders) work inside or own the organisation and are **internal stakeholders**. Residents, banks and suppliers are external stakeholders.",
        hints: [
          "Internal stakeholders operate inside the business itself rather than interacting from outside.",
          "Only three groups are internal: owners/shareholders, managers and staff.",
        ],
      },
      {
        id: "business-activity-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stakeholders-conflicts",
        question:
          "SuperSave Plc extends the trade credit period it takes to pay small dairy farmers from 30 days to 90 days. Which stakeholder conflict does this decision directly illustrate?",
        options: [
          "SuperSave Plc's managers/shareholders gain stronger short-term cash flow while suppliers suffer tighter liquidity",
          "Employees gain higher job security while local government loses corporation tax revenue",
          "Suppliers receive faster cash inflows while customers pay higher supermarket prices",
          "Banks earn higher loan interest while shareholders lose limited liability",
        ],
        answerIndex: 0,
        explanation:
          "Delaying trade payables keeps cash inside SuperSave Plc's bank account for an extra 60 days (benefiting **managers/shareholders**), directly starving **suppliers** (dairy farmers) of working capital.",
        hints: [
          "Ask whose bank balance stays higher for 60 extra days and who is left waiting to be paid.",
          "Match the winner inside SuperSave Plc against the external group supplying milk.",
        ],
      },
      {
        id: "business-activity-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "unincorporated-incorporated",
        question: "What does **unlimited liability** mean for a sole trader?",
        options: [
          "The owner can borrow an unlimited sum from high-street banks without paying interest",
          "The business can sell an unlimited number of shares on a public stock exchange",
          "There is no separate legal identity, so the owner's personal possessions can be seized to pay unpaid business debts",
          "The owner only loses the initial cash invested if the business becomes insolvent",
        ],
        answerIndex: 2,
        explanation:
          "An unincorporated sole trader has **no separate legal identity** from the owner; if business assets cannot cover business debts, creditors can claim the owner's personal savings, car or house. Losing only the initial investment describes *limited* liability.",
        hints: [
          "Ask whether the law treats a sole trader and their business as one person or two separate entities.",
          "What happens to the owner's personal house if business debts exceed business assets?",
        ],
      },
      {
        id: "business-activity-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "unincorporated-incorporated",
        question:
          "Two dentists, Dr Kwon and Dr Patel, set up a dental practice together without signing a **Deed of Partnership**. Dr Kwon contributed 75% of the start-up capital. Under standard UK partnership rules, how will annual profits legally be shared if a dispute arises?",
        options: [
          "75% to Dr Kwon and 25% to Dr Patel in proportion to capital invested",
          "100% retained inside the business until it incorporates as a PLC",
          "Decided each year by the practice's commercial bank manager",
          "Equally (50% each) between both partners",
        ],
        answerIndex: 3,
        explanation:
          "Without a written **Deed of Partnership** specifying a custom profit-sharing ratio, statutory partnership law divides profits and losses **equally (50 : 50)** regardless of unequal capital or workload.",
        hints: [
          "Why do business advisers insist partners sign a Deed of Partnership when contributions are unequal?",
          "In the absence of a Deed, statutory partnership rules apply an equal split.",
        ],
      },
      {
        id: "business-activity-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "unincorporated-incorporated",
        question:
          "Why might a growing 28-employee family furniture maker convert from a **Partnership** into a **Private Limited Company (`Ltd`)** rather than a **Public Limited Company (`Plc`)**?",
        options: [
          "An Ltd gives shareholders limited liability while preventing outsiders from buying shares without family board approval",
          "An Ltd avoids filing any annual financial accounts with the government registrar",
          "An Ltd allows shares to be traded freely by the general public on the London Stock Exchange",
          "An Ltd guarantees the company can never become insolvent",
        ],
        answerIndex: 0,
        explanation:
          "Converting to an `Ltd` secures **limited liability** and separate legal identity while keeping share transfers private (blocking hostile takeovers). `Ltd`s still file accounts at Companies House and can still fail financially; only `Plc`s list on a stock exchange.",
        hints: [
          "Compare how shares are sold in an `Ltd` versus a `Plc`.",
          "Which structure protects personal assets AND stops strangers taking over the 28-staff family business?",
        ],
      },
      {
        id: "business-activity-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "unincorporated-incorporated",
        question:
          "What is meant by the **divorce between ownership and control** in a large Public Limited Company (`Plc`)?",
        options: [
          "Two co-founders legally dissolve their Deed of Partnership after a disagreement",
          "Government regulators force a monopoly to split into two smaller businesses",
          "Millions of shareholders own the company, while salaried directors and managers run day-to-day strategy",
          "Franchisees break away from the franchisor's national marketing contract",
        ],
        answerIndex: 2,
        explanation:
          "In a large `Plc`, **shareholders** own the equity (often seeking dividends) whereas professional **directors/managers** exercise operational control (sometimes prioritising growth, status or bonuses).",
        hints: [
          "Ask who *owns* a huge PLC on the stock market versus who sits in the offices making daily decisions.",
          "Notice how their objectives (high dividends vs executive growth/perks) can diverge.",
        ],
      },
      {
        id: "business-activity-m1-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "franchises-social-public",
        question:
          "Nadia pays an upfront fee of £30,000 and an ongoing 7% revenue royalty to open a local branch of an established bubble-tea chain. In this arrangement, Nadia is the:",
        options: ["Franchisor", "Franchisee", "Venture capitalist", "Public corporation"],
        answerIndex: 1,
        explanation:
          "Nadia buys the licence and pays the fee/royalty to run a local outlet, making her the **franchisee**. The established bubble-tea brand owner granting the licence is the **franchisor**.",
        hints: [
          "Remember the ending rule: `-OR` owns/originates the brand; `-EE` pays the fee to run a branch.",
          "Nadia is the local entrepreneur paying £30,000 + 7% royalty.",
        ],
      },
      {
        id: "business-activity-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "franchises-social-public",
        question:
          "Which statement accurately describes a key advantage **to the franchisor** of expanding through franchising?",
        options: [
          "The franchisor receives free training and national advertising paid for by local branches",
          "The franchisor keeps 100% of every local branch's operating profit",
          "The franchisor faces zero reputational risk if one branch fails a food-hygiene inspection",
          "The franchisor expands its store network rapidly using franchisees' capital rather than borrowing heavily itself",
        ],
        answerIndex: 3,
        explanation:
          "Because **franchisees** fund branch fit-outs and pay upfront fees plus royalties, the **franchisor** scales geographically much faster with lower capital outlay. Training is provided *by* the franchisor, branch profits belong to franchisees (after royalties), and one dirty branch hurts the whole brand.",
        hints: [
          "Read carefully: we want an advantage for the **franchisor** (the brand owner), NOT the franchisee!",
          "Who pays for fitting out each new local store in a franchise network?",
        ],
      },
      {
        id: "business-activity-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "franchises-social-public",
        question: "How does a **social enterprise** differ from a traditional charity?",
        options: [
          "A social enterprise earns most of its income through commercial trading of goods/services while reinvesting surpluses into a social or environmental mission",
          "A social enterprise aims to maximise dividend payouts to stock-exchange shareholders",
          "A social enterprise is owned and funded entirely by central government",
          "A social enterprise is legally forbidden from employing paid staff",
        ],
        answerIndex: 0,
        explanation:
          "Unlike pure charities reliant on donations/grants, **social enterprises** compete commercially in markets (selling coffee, chocolate, magazines or services) and reinvest the majority of their trading surplus into their social or environmental purpose.",
        hints: [
          "Focus on *how* a social enterprise generates revenue (selling products vs relying purely on donations) and *what* it does with its surplus.",
          "Think of real-world examples like Divine Chocolate or The Big Issue.",
        ],
      },
      {
        id: "business-activity-m1-q13",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "sectors-and-success",
        question:
          "A company owns copper mines in Chile, a cable-manufacturing plant in Germany, and an IT repair consultancy in Singapore. Which sequence correctly classifies those three operations in order?",
        options: [
          "Secondary → Primary → Tertiary",
          "Tertiary → Secondary → Primary",
          "Primary → Tertiary → Secondary",
          "Primary → Secondary → Tertiary",
        ],
        answerIndex: 3,
        explanation:
          "Copper mining extracts raw materials (**Primary**); cable manufacturing turns copper into finished goods (**Secondary**); IT repair consultancy provides a commercial service (**Tertiary**).",
        hints: [
          "Match extraction, manufacturing and service provision in exact order.",
          "Mining = extraction; factory = manufacturing; consultancy = service.",
        ],
      },
      {
        id: "business-activity-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sectors-and-success",
        question:
          "Which metric is **least** reliable when comparing the **size** of two businesses in the airline industry during a fuel-price spike?",
        options: [
          "Annual sales revenue (turnover)",
          "Capital employed in aircraft and terminals",
          "Annual net profit",
          "Market share of total passenger journeys",
        ],
        answerIndex: 2,
        explanation:
          "**Profit** measures financial performance and efficiency rather than **scale** — a huge multinational airline can record a temporary loss during a fuel shock while still employing 30,000 staff and holding billions in capital employed.",
        hints: [
          "Recall the four valid textbook measures of business size.",
          "Can a massive company make a £0 or negative figure on one of these metrics in a bad year?",
        ],
      },
      {
        id: "business-activity-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sectors-and-success",
        question:
          "FreshCrate Ltd, a 16-employee meal-kit delivery start-up, has rising customer orders from corporate offices on 60-day invoice terms, yet goes into administration after nine months because it cannot pay its vegetable suppliers or van lease on Friday. What is the direct cause of FreshCrate Ltd's failure?",
        options: [
          "De-industrialisation in the primary sector",
          "Hostile takeover on the stock exchange",
          "Cash-flow insolvency caused by a timing mismatch between cash outflows and credit inflows",
          "Excessive diseconomies of scale across global subsidiaries",
        ],
        answerIndex: 2,
        explanation:
          "Even with growing credit sales (profit on paper), paying suppliers/leases immediately while waiting 60 days for customer cash creates a fatal liquidity gap — **cash-flow insolvency**.",
        hints: [
          "Notice that orders are rising, yet customers take 60 days to pay cash while van and veg bills are due now.",
          "Distinguish carefully between profitability and liquid cash flow.",
        ],
      },
    ],
  },
  {
    id: "business-activity-m2",
    title: "Paper 2 — Data, Calculations & Case-Study Application",
    questions: [
      {
        id: "business-activity-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "business-objectives",
        question:
          "PeakTrail Ltd sells £720,000 of hiking boots per year in a national outdoor footwear market worth £4,800,000. Its SMART target was to reach 14% market share. Which statement is correct?",
        options: [
          "Market share is 15.0%, beating the SMART target by 1.0 percentage point",
          "Market share is 12.0%, missing the SMART target by 2.0 percentage points",
          "Market share is 6.67%, missing the SMART target by 7.33 percentage points",
          "Market share is 14.0%, exactly matching the SMART target",
        ],
        answerIndex: 0,
        explanation:
          "Market share = {{(£720000 / £4800000) * 100 = 15.0%}}, which is **1.0 percentage point above** the 14% SMART objective. Dividing upside-down (£4.8m ÷ £0.72m) gives the 6.67 distractor.",
        hints: [
          'Use {{"Market Share (%)" = ("Firm Sales" / "Total Market Sales") * 100}}.',
          "Compute 720,000 ÷ 4,800,000 × 100 and compare against 14%.",
        ],
      },
      {
        id: "business-activity-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "unincorporated-incorporated",
        question:
          "Callum trades as a sole trader (`Callum's Carpentry`). He originally invested £12,000 of savings. After a major client goes bankrupt without paying, Callum's business closes with **£68,000 in total debts** and tools/vans that sell for **£18,000**. How much **additional personal money** must Callum pay from his personal house/savings to clear the business's debts?",
        options: ["£0", "£12,000", "£50,000", "£68,000"],
        answerIndex: 2,
        explanation:
          "Selling business assets covers £18,000 of the £68,000 debt, leaving **£50,000** ({{£68000 - £18000}}) unpaid. Under **unlimited liability**, Callum is personally liable for the full £50,000 shortfall (on top of having already lost his £12,000 start-up stake).",
        hints: [
          "First use the £18,000 from selling tools and vans to pay down part of the £68,000 debt.",
          "Because Callum is a sole trader with unlimited liability, who must pay the remaining shortfall?",
        ],
      },
      {
        id: "business-activity-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "unincorporated-incorporated",
        question:
          "Suppose instead that Callum had incorporated `Callum's Carpentry Ltd`, investing **£12,000** in fully paid shares, and the company collapsed with the exact same **£68,000 debts** and **£18,000 company assets**. How much **additional personal money** would Callum have to pay creditors from his personal savings?",
        options: ["£0", "£12,000", "£50,000", "£62,000"],
        answerIndex: 0,
        explanation:
          "Because `Callum's Carpentry Ltd` has **limited liability** and a separate legal identity, Callum loses his original £12,000 share investment, and creditors can demand **£0 extra** from his personal bank account or home.",
        hints: [
          "Read the wording carefully: how much *additional personal money* beyond his already-invested £12,000 share capital must he pay?",
          "Limited liability erects a firewall protecting personal assets from the £50,000 unpaid company debt.",
        ],
      },
      {
        id: "business-activity-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "franchises-social-public",
        question:
          "Sana runs a `CleanWave` dry-cleaning franchise. Last year her branch earned **£240,000 in revenue** and incurred **£198,000 in local rent, wages and power**. Her franchise contract requires a **7.5% ongoing royalty on revenue**. What was Sana's branch operating profit after paying the royalty?",
        options: ["£18,000", "£24,000", "£38,850", "£42,000"],
        answerIndex: 1,
        explanation:
          "Royalty = {{7.5% * £240000 = £18000}}. Branch operating profit = {{£240000 - £198000 - £18000 = £24000}}. (Taking 7.5% of the £42,000 pre-royalty surplus gives the trap figure £38,850 — royalties are charged on *revenue*, not profit!)",
        hints: [
          "Calculate the 7.5% royalty on **total revenue** (£240,000), NOT on profit!",
          "Subtract both the £198,000 local costs and the £18,000 royalty from £240,000.",
        ],
      },
      {
        id: "business-activity-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "unincorporated-incorporated",
        question:
          "Three architects sign a **Deed of Partnership** sharing profits in the ratio **5 : 3 : 2** (Lin : Omar : Freya). If the partnership makes **£160,000** profit this year, how much more does Lin receive than Freya?",
        options: ["£32,000", "£48,000", "£53,333", "£80,000"],
        answerIndex: 1,
        explanation:
          "Total parts = {{5 + 3 + 2 = 10}}, so 1 part = {{£160000 / 10 = £16000}}. Lin gets {{5 * £16000 = £80000}} and Freya gets {{2 * £16000 = £32000}}; difference = {{£80000 - £32000 = £48000}} (3 parts).",
        hints: [
          "Sum the ratio parts (5 + 3 + 2 = 10) to find the value of 1 part.",
          "Lin has 5 parts and Freya has 2 parts, so Lin receives 5 − 2 = 3 parts more than Freya.",
        ],
      },
      {
        id: "business-activity-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sectors-and-success",
        question:
          "Economy Z employs **12 million workers** in total: **1.8 million** in farming and fishing, **3.0 million** in manufacturing and construction, and the rest in services. What percentage of Economy Z's workforce is employed in the **tertiary sector**?",
        options: ["25%", "40%", "60%", "72%"],
        answerIndex: 2,
        explanation:
          "Tertiary workers = {{12 - 1.8 - 3.0 = 7.2}} million. Percentage = {{(7.2 / 12) * 100 = 60%}}. (7.2 without dividing by 12 × 100 gives the 72% trap!)",
        hints: [
          "Subtract primary (1.8m) and secondary (3.0m) workers from the 12m total workforce.",
          "Divide the remaining 7.2 million service workers by 12 million and multiply by 100.",
        ],
      },
      {
        id: "business-activity-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stakeholders-conflicts",
        question:
          "MetroBus Plc (employing 1,800 drivers on an average salary of £30,000) faces a threatened strike unless it grants a **5% pay rise**. Current operating profit is **£6.2 million**. Assuming ticket prices and passenger numbers stay unchanged in the short run, what will MetroBus Plc's new operating profit be if it agrees to the 5% rise?",
        options: ["£2.70 million", "£3.50 million", "£5.89 million", "£6.05 million"],
        answerIndex: 1,
        explanation:
          "Total current wage bill = {{1800 * £30000 = £54000000}} (£54m). A 5% pay rise adds {{£54m * 0.05 = £2.7m}} in wage costs, reducing operating profit from £6.2m to {{£6.2m - £2.7m = £3.50m}}. (Taking 5% off £6.2m gives the £5.89m trap!)",
        hints: [
          "First calculate the total annual wage bill: 1,800 drivers × £30,000.",
          "Find 5% of that £54m wage bill and subtract it from the £6.2m operating profit.",
        ],
      },
      {
        id: "business-activity-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "business-objectives",
        question:
          "During a sudden spike in energy prices and inflation, a 400-employee hotel chain pauses its plan to open four luxury spas and instead introduces strict heating controls and freezes non-essential hiring. Which shift in primary objective has occurred?",
        options: [
          "From market share / expansion to cost control and survival",
          "From survival to global diversification",
          "From private sector profit to public sector nationalisation",
          "From limited liability to unlimited liability",
        ],
        answerIndex: 0,
        explanation:
          "Adverse external economic shocks (energy inflation squeezing margins) commonly force even large firms to pivot away from **expansion/growth** toward **cost control, cash preservation and survival**.",
        hints: [
          "Compare what the hotel chain was doing before (opening 4 spas) with what it is doing now (cutting energy & hiring costs).",
          "External cost shocks push firms back down the objective ladder toward cost control/survival.",
        ],
      },
      {
        id: "business-activity-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "franchises-social-public",
        question:
          "AutoVolt Plc (a European electric-van maker) and BatTech Corp (a South Korean battery specialist) create a 50:50 shared subsidiary to build a gigafactory in Seoul. What type of business arrangement is this?",
        options: ["Sole proprietorship", "Public corporation", "Privatisation", "Joint venture"],
        answerIndex: 3,
        explanation:
          "When two independent businesses pool capital, technology and local market expertise into a shared entity for a specific project while keeping their parent companies separate, it is a **joint venture**.",
        hints: [
          "Notice that two separate companies stay independent overall while creating one shared 50:50 project entity.",
          "This structure is widely used to share heavy R&D costs and enter foreign markets.",
        ],
      },
      {
        id: "business-activity-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "franchises-social-public",
        question:
          "When a government sells a state-owned national telecommunications provider to private shareholders via a stock-market flotation, the policy is known as:",
        options: ["Nationalisation", "Privatisation", "De-industrialisation", "Franchising"],
        answerIndex: 1,
        explanation:
          "**Privatisation** transfers ownership of a public-sector state enterprise into the private sector (often creating a `Plc`) to raise government funds and introduce profit-driven efficiency incentives.",
        hints: [
          "Check the direction of transfer: Public Sector (state) → Private Sector (shareholders).",
          "Nationalisation is the exact opposite (private → state).",
        ],
      },
      {
        id: "business-activity-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stakeholders-conflicts",
        question:
          "Which action by a fast-fashion retailer creates **alignment** (rather than conflict) between **ethical customers**, **garment factory employees** and **long-term shareholders**?",
        options: [
          "Switching to audited living-wage factories and marketing durable organic cotton ranges at a 12% price premium",
          "Cutting factory safety inspections to trim 30p off unit costs while keeping retail prices unchanged",
          "Delaying supplier payments to 120 days while paying an immediate special dividend",
          "Replacing all store customer-service staff with unmonitored self-checkouts overnight",
        ],
        answerIndex: 0,
        explanation:
          "Audited living-wage factories improve **workers'** pay/safety, satisfy **ethical customers** willing to pay a price-inelastic 12% premium, and protect **long-term shareholders** from sweatshop boycotts while preserving margins.",
        hints: [
          "Look for the option where workers, ethical shoppers AND long-term brand value all move in a positive direction.",
          "Short-term corner-cutting hurts workers or suppliers and risks viral reputational damage.",
        ],
      },
      {
        id: "business-activity-m2-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "unincorporated-incorporated",
        question:
          "Founder Mei owns 100% of `MeiLabs Ltd` (80,000 shares). To fund new lab equipment without bank debt, she issues **new shares** to an angel investor while ensuring she still holds **at least 51% voting control**. What is the **maximum** number of new shares `MeiLabs Ltd` can issue to the angel investor (to the nearest whole share)?",
        options: ["39,200 shares", "76,862 shares", "80,000 shares", "83,265 shares"],
        answerIndex: 1,
        explanation:
          "Mei's 80,000 shares must equal at least 51% of total post-issue shares {{(80000 + N)}}: {{80000 / (80000 + N) >= 0.51}}, so {{80000 + N <= 80000 / 0.51 = 156862.74}}, giving {{N <= 76862}} shares! (Issuing 80,000 shares leaves Mei on exactly 50.0% — NOT a 51% majority!)",
        hints: [
          "Careful! After issuing N new shares, total shares in the company become 80,000 + N, not 80,000!",
          "Set 80,000 ÷ (80,000 + N) ≥ 0.51 → 80,000 ÷ 0.51 = 156,862.7 total shares → subtract Mei's 80,000.",
          "Check: 80,000 ÷ (80,000 + 76,862) = 80,000 ÷ 156,862 = 51.0002%!",
        ],
      },
      {
        id: "business-activity-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sectors-and-success",
        question:
          "Over 30 years in Country M, agriculture falls from 48% to 14% of GDP while manufacturing rises from 16% to 44% of GDP and services rise from 36% to 42%. What structural process is Country M primarily experiencing?",
        options: [
          "De-industrialisation",
          "Nationalisation",
          "Unlimited incorporation",
          "Industrialisation",
        ],
        answerIndex: 3,
        explanation:
          "A sharp expansion in the **secondary (manufacturing)** sector's share of GDP and employment (from 16% to 44%) as labour moves out of primary agriculture is the textbook definition of **industrialisation**.",
        hints: [
          "Check which sector grew fastest: manufacturing jumped from 16% to 44% of GDP!",
          "De-industrialisation is when manufacturing *shrinks*; here manufacturing is surging.",
        ],
      },
      {
        id: "business-activity-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "franchises-social-public",
        question:
          "Why is a **public corporation** (such as a state-owned rail operator) sometimes able to keep rural train routes open even when ticket revenue on those routes is lower than operating costs?",
        options: [
          "Because public corporations are exempt from paying employee wages",
          "Because its primary objective is social welfare and universal public access, funded or subsidised by government tax revenue",
          "Because stock-exchange speculators buy rural route shares for capital gains",
          "Because rural routes are operated by unpaid sole traders",
        ],
        answerIndex: 1,
        explanation:
          "**Public corporations** are owned by the state to deliver essential **public services and social benefits** (such as connecting remote towns and cutting road congestion), allowing government subsidies to cover loss-making socially valuable routes.",
        hints: [
          "Who owns a public corporation and what is its main objective compared with a private PLC?",
          "Taxpayer subsidies allow state bodies to prioritise social welfare over pure route-by-route profit.",
        ],
      },
      {
        id: "business-activity-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sectors-and-success",
        question:
          "Which Edexcel 4BS1 Paper investigates **large businesses employing more than 250 staff**, such as multinational retailers and stock-exchange PLCs?",
        options: [
          "Paper 1: Investigating Small Business",
          "Coursework Controlled Assessment Paper 3",
          "Practical Oral Viva Paper 4",
          "Paper 2: Investigating Large Business",
        ],
        answerIndex: 3,
        explanation:
          "Edexcel IGCSE Business (`4BS1`) has two 90-minute written papers worth 50% each: **Paper 1** covers small businesses (`<50` employees) and **Paper 2** covers large businesses (`>250` employees).",
        hints: [
          "Recall the two-paper structure of Pearson Edexcel 4BS1.",
          "Paper 1 = <50 employees; Paper 2 = >250 employees.",
        ],
      },
    ],
  },
  {
    id: "business-activity-m3",
    title: "Paper 3 — Grade 9 Exam Traps, Strategy & Synoptic Judgement",
    questions: [
      {
        id: "business-activity-m3-q01",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "unincorporated-incorporated",
        question:
          "In an Edexcel 4BS1 Paper 1 exam, the case study describes *'Bella's Blooms, a profitable 6-employee florist run by Bella as a sole trader who wants £35,000 to open a second shop while protecting her personal flat.'* Which recommendation earns full AO2/AO4 evaluation credit?",
        options: [
          "Float Bella's Blooms as a Public Limited Company (PLC) on the London Stock Exchange to raise millions from pension funds",
          "Convert Bella's Blooms into a Private Limited Company (Ltd) and invite a trusted private investor to buy a minority (<50%) stake",
          "Convert Bella's Blooms into a state-owned public corporation funded by local council taxes",
          "Remain a sole trader because sole traders already enjoy limited liability on their personal flat",
        ],
        answerIndex: 1,
        explanation:
          "Incorporating as an **`Ltd`** directly solves Bella's two Paper 1 needs: **limited liability** protects her personal flat, and selling a **<50% private equity stake** raises £35,000 while keeping Bella in majority control. Recommending a PLC flotation for a 6-staff florist is the classic Paper 1 Grade-killer mistake!",
        hints: [
          "Spot the two clues in the stem: 6 employees (tiny Paper 1 firm needing £35k) + wants to protect her personal flat (needs limited liability).",
          "Why is floating as a PLC completely unrealistic for a 6-person florist?",
          "Which incorporated structure protects her flat AND lets her raise £35k privately while keeping >50% control?",
        ],
      },
      {
        id: "business-activity-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "business-objectives",
        question:
          "Cloud Bite Ltd cuts its meal-box price by 20% to chase an aggressive **market share** objective. Sales volume rises by 25%, while variable cost per box and fixed overheads remain unchanged. Before the price cut, each box sold for **£40** with a **£28 variable cost**. What happens to Cloud Bite Ltd's **total contribution** per 1,000 original boxes?",
        options: [
          "Total contribution rises from £12,000 to £15,000",
          "Total contribution stays unchanged at £12,000",
          "Total contribution becomes negative at −£4,000",
          "Total contribution falls from £12,000 to £5,000 despite higher market share",
        ],
        answerIndex: 3,
        explanation:
          "Before: contribution/box = {{£40 - £28 = £12}}, so 1,000 boxes = **£12,000**. After 20% price cut: new price = {{£40 * 0.8 = £32}}, so contribution/box drops to {{£32 - £28 = £4}}; even with 25% more volume ({{1250}} boxes), total contribution = {{1250 * £4 = £5000}}! Chasing market share via deep price cuts can severely erode **profitability**.",
        hints: [
          "Calculate contribution per box BEFORE the cut (£40 − £28) × 1,000 boxes.",
          "New price = £40 × 0.80 = £32, so new contribution per box = £32 − £28 = £4.",
          "New volume = 1,000 × 1.25 = 1,250 boxes; multiply 1,250 × £4 and compare!",
        ],
      },
      {
        id: "business-activity-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "franchises-social-public",
        question:
          "A franchisee's burger outlet earns **£18,000 revenue** in a quiet January while local rent, wages and food ingredients total **£19,500**. The franchise agreement specifies an **8% royalty on monthly revenue**. What is the franchisee's overall net loss for January?",
        options: ["£1,380 loss", "£1,500 loss", "£2,940 loss", "£0 loss because royalties are waived in loss-making months"],
        answerIndex: 2,
        explanation:
          "Because franchise royalties are charged on **revenue** (not profit), the franchisee still owes {{8% * £18000 = £1440}} to the franchisor! Total January loss = {{£19500 + £1440 - £18000 = £2940}} loss.",
        hints: [
          "Trap alert: are revenue royalties cancelled just because local costs exceed revenue?",
          "Compute 8% of £18,000 (£1,440) and add that to the £1,500 pre-royalty trading deficit.",
        ],
      },
      {
        id: "business-activity-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stakeholders-conflicts",
        question:
          "When answering an Edexcel 4BS1 **2-mark 'Outline one way...'** question based on a named case study (e.g. *'Outline one impact on suppliers of Kofi's Coffee Bar switching to local milk'*), what is required for full 2/2 marks?",
        options: [
          "Two separate textbook definitions with no mention of coffee or milk",
          "One valid business point plus one linked development or explicit application to Kofi's Coffee Bar context",
          "A balanced 4-paragraph AJIM essay weighing short-run and long-run milk prices",
          "A diagram of the primary, secondary and tertiary dairy chain",
        ],
        answerIndex: 1,
        explanation:
          "In Edexcel 4BS1, **Outline (2 marks)** is always **1 AO1/AO3 point + 1 AO2 case-study context link** (mentioning milk, coffee bar freshness, delivery miles or local dairy farms). Pure generic answers without context are capped at **1/2**!",
        hints: [
          "Remember the Edexcel 4BS1 command-word trap for 2-mark *Outline* questions!",
          "Why does a named business appear in every *Outline* stem?",
        ],
      },
      {
        id: "business-activity-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stakeholders-conflicts",
        question:
          "By contrast, what does an Edexcel 4BS1 **3-mark 'Explain one advantage of...'** question (which does *not* name the case-study firm) require for 3/3 marks?",
        options: [
          "Three separate bullet-pointed advantages with no explanation",
          "Quoting three numbers from the case-study extract with no reasoning",
          "A counter-argument and final AJIM conclusion",
          "One valid advantage developed through two linked logical steps of cause-and-effect reasoning (AO1 + AO3)",
        ],
        answerIndex: 3,
        explanation:
          "Generic **3-mark Explain** questions in 4BS1 test **1 AO1 point + 2 linked AO3 reasoning connectors** (*this means that... therefore...*). Listing three separate undeveloped points scores only 1/3!",
        hints: [
          "Notice the wording: 'Explain **one** advantage (3)' — never list three separate advantages!",
          "Build a 3-link chain: Point → 'which means that...' → 'leading to...'.",
        ],
      },
      {
        id: "business-activity-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "unincorporated-incorporated",
        question:
          "Hassan and Jude run an unincorporated logistics partnership without limited liability (`HJ Couriers`). Jude secretly orders £90,000 of vans in the partnership's name, then disappears abroad with zero personal assets when the firm collapses. Under **joint and several unlimited liability**, what is Hassan's legal position?",
        options: [
          "Hassan only owes £45,000 (half the debt) because there are two partners",
          "Creditors can pursue Hassan's personal assets for up to the entire £90,000 unpaid partnership debt",
          "Hassan owes £0 because he did not personally sign the van order",
          "Companies House pays the £90,000 from a statutory partnership insurance fund",
        ],
        answerIndex: 1,
        explanation:
          "In an ordinary unincorporated partnership, partners bind the firm as agents and carry **joint and several unlimited liability** — if one partner cannot pay or vanishes, creditors can recover **100% of the unpaid partnership debt** from the remaining solvent partner's personal assets!",
        hints: [
          "Recall one of the biggest legal risks of an ordinary partnership when a partner acts recklessly.",
          "Does 'joint and several' unlimited liability cap each partner at 50% if the other partner defaults?",
          "Creditors can claim the entire unpaid business debt from whichever partner has personal wealth.",
        ],
      },
      {
        id: "business-activity-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sectors-and-success",
        question:
          "A handcrafted chocolate maker (`CocoaBean Ltd`) buys raw cocoa from Ghanaian farms, roasts and moulds bars in its York factory, and sells gift boxes in its own York tearoom. Operating across all three economic sectors makes `CocoaBean Ltd` vertically integrated across:",
        options: [
          "Primary (cocoa farming) → Secondary (roasting & moulding) → Tertiary (tearoom retail)",
          "Tertiary (cocoa farming) → Primary (roasting) → Secondary (tearoom retail)",
          "Public sector → Social sector → Private sector",
          "Sole trader → Partnership → Public corporation",
        ],
        answerIndex: 0,
        explanation:
          "Cocoa farming is **primary** extraction, roasting/moulding bars is **secondary** manufacturing, and serving customers in a tearoom is **tertiary** retail/hospitality.",
        hints: [
          "Classify farming, factory processing and retail/hospitality in sequence.",
          "Raw material = Primary; processing = Secondary; shop/tearoom service = Tertiary.",
        ],
      },
      {
        id: "business-activity-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "sectors-and-success",
        question:
          "Between 2015 and 2025 in Economy K, manufacturing output rose in money terms from **$80 billion to $100 billion**, while total GDP rose from **$250 billion to $500 billion**. Which statement accurately interprets these figures?",
        options: [
          "Manufacturing shrank in absolute dollar output between 2015 and 2025",
          "Manufacturing's share of GDP increased from 20% to 32%",
          "Economy K shifted from a tertiary economy back into a primary agricultural economy",
          "Manufacturing grew in absolute output (+25%), yet Economy K still experienced relative de-industrialisation as manufacturing's GDP share fell from 32% to 20%",
        ],
        answerIndex: 3,
        explanation:
          "In 2015 manufacturing share = {{(80 / 250) * 100 = 32%}}; in 2025 share = {{(100 / 500) * 100 = 20%}}. Even though dollar factory output rose by 25% ($80bn → $100bn), services grew much faster — reducing manufacturing's **relative share** of GDP (**de-industrialisation**).",
        hints: [
          "Calculate manufacturing as a % of GDP in 2015 (80 ÷ 250 × 100) and in 2025 (100 ÷ 500 × 100).",
          "Check both absolute dollar output ($80bn → $100bn) and relative % share (32% → 20%)!",
          "De-industrialisation can mean a falling *percentage share* of GDP even when automated factory output rises.",
        ],
      },
      {
        id: "business-activity-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "unincorporated-incorporated",
        question:
          "Why might institutional pension funds buy millions of shares in `SolarGrid Plc` on Tuesday, yet its board of directors still faces a **hostile takeover** bid on Friday?",
        options: [
          "Because PLC shares are freely tradable on a public stock exchange, allowing a rival firm to buy over 50% of voting shares directly from existing shareholders",
          "Because PLC shareholders have unlimited liability and must sell when ordered by the government",
          "Because PLCs are prohibited from holding Annual General Meetings",
          "Because any company with fewer than 50 employees automatically becomes a rival's subsidiary",
        ],
        answerIndex: 0,
        explanation:
          "Once shares are listed on a public **Stock Exchange**, existing shareholders (including pension funds tempted by a premium offer price) can sell their shares freely without board permission — if one buyer accumulates **>50%**, it wins voting control.",
        hints: [
          "Unlike an `Ltd`, does a `Plc` board have the legal power to stop shareholders selling their shares to a rival bidder?",
          "What percentage of voting shares gives an acquirer control?",
        ],
      },
      {
        id: "business-activity-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "business-objectives",
        question:
          "A surf-instructor sole trader in Cornwall turns down a lucrative contract to manage five indoor city wave-pools because she wants to surf every afternoon and avoid employing managers. Which pair of objectives is guiding her decision?",
        options: [
          "Market share dominance and stock-exchange flotation",
          "Financial security and lifestyle / personal independence",
          "Privatisation and joint-venture expansion",
          "Predatory pricing and diseconomies of scale",
        ],
        answerIndex: 1,
        explanation:
          "**Lifestyle entrepreneurs** prioritise **personal independence, work-life balance and comfortable financial security** over rapid profit-maximising corporate expansion.",
        hints: [
          "Look at what she values: free afternoons surfing and zero management stress while earning a steady living.",
          "This is the classic Paper 1 'lifestyle business' profile.",
        ],
      },
      {
        id: "business-activity-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "stakeholders-conflicts",
        question:
          "AeroJet Plc announces £120m of investment into quieter, fuel-efficient aircraft engines that cut aviation fuel burn by 18% per flight. How does this capital investment reshape stakeholder trade-offs over time?",
        options: [
          "Short-run dividends may dip due to the £120m outlay, but long-run shareholder profits, airport communities (lower noise/emissions) and government carbon targets all align positively",
          "Local communities suffer louder noise while long-run fuel expenses increase by 18%",
          "Suppliers of new aircraft engines lose orders while short-run cash balances immediately increase by £120m",
          "Employees lose limited liability while passengers pay higher airport noise fines",
        ],
        answerIndex: 0,
        explanation:
          "Capital expenditure creates a **short-run conflict** (cash outflow / lower immediate dividends for impatient shareholders), yet **long-run alignment**: 18% lower unit fuel costs boost future profits while quieter, cleaner flights benefit **local communities** and **government** environmental goals.",
        hints: [
          "Separate the immediate Year 1 effect (£120m capital cost) from the Year 3–10 operating effect (18% less fuel + quieter skies).",
          "Notice how Grade 9 stakeholder evaluation contrasts short-run cost pain against long-run multi-stakeholder alignment.",
        ],
      },
      {
        id: "business-activity-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "franchises-social-public",
        question:
          "Two branches of `Burger Barn` operate in neighbouring towns. Branch North fails a health inspection and appears on national TV news after a food-poisoning outbreak. Branch South (spotlessly clean, owned by a different franchisee) sees sales drop by 35% the next week. Which franchise drawback does this illustrate?",
        options: [
          "Interdependent brand reputation — poor standards at one rogue franchisee tarnish every franchisee and the franchisor",
          "Unlimited liability forcing Branch South to pay Branch North's legal fines",
          "Public-sector nationalisation of fast-food restaurants",
          "Divorce between primary and secondary economic sectors",
        ],
        answerIndex: 0,
        explanation:
          "Customers view all outlets under one shared brand banner; a hygiene or ethical scandal at **one rogue branch** damages trust and footfall across the entire franchise network.",
        hints: [
          "Customers seeing `Burger Barn` on TV news don't check which local entrepreneur owns which branch!",
          "Shared brand identity is a double-edged sword: shared marketing trust, but shared reputational risk.",
        ],
      },
      {
        id: "business-activity-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sectors-and-success",
        question:
          "Why can an **online-only** clothing start-up often survive Year 1 on much lower start-up capital than a traditional high-street boutique?",
        options: [
          "Online businesses are legally exempt from consumer protection laws and corporation tax",
          "Selling via e-commerce avoids expensive city-centre shop leases and full-time shop-floor staffing, lowering monthly fixed cash outflows",
          "Online businesses never need inventory, digital marketing or delivery couriers",
          "Every online business automatically receives government public-corporation subsidies",
        ],
        answerIndex: 1,
        explanation:
          "Bypassing prime high-street retail rent and shop-front staffing slashes **fixed overheads**, lowering break-even output and protecting early **cash flow** — though online start-ups still face digital marketing costs, returns logistics and intense global competition.",
        hints: [
          "Compare monthly fixed costs (city-centre rent, shop-front rates, counter staff) between an e-commerce store and a physical boutique.",
          "Online firms still pay taxes, obey consumer laws and pay for stock/ads!",
        ],
      },
      {
        id: "business-activity-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "franchises-social-public",
        question:
          "Compare two options for entrepreneur Leo (budget £50,000): **Independent Café** (forecast Year 1 revenue £160,000; operating costs £132,000; 0% royalty) vs **BeanScene Franchise** (forecast Year 1 revenue £250,000 due to brand pull; local operating costs £190,000; 9% revenue royalty + 2% marketing levy). Which option yields the higher Year 1 trading profit (before one-off start-up fees), and by how much?",
        options: [
          "BeanScene Franchise by £4,500",
          "Independent Café by £4,500",
          "BeanScene Franchise by £32,000",
          "Both yield identical £28,000 trading profit",
        ],
        answerIndex: 0,
        explanation:
          "Independent Café profit = {{£160000 - £132000 = £28000}}. BeanScene Franchise: combined franchisor fees = {{(9% + 2%) * £250000 = £27500}}; trading profit = {{£250000 - £190000 - £27500 = £32500}}. BeanScene beats the independent café by {{£32500 - £28000 = £4500}}!",
        hints: [
          "Work out Independent Café profit first: £160,000 − £132,000 = £28,000.",
          "For BeanScene, deduct 11% (9% + 2%) of £250,000 (£27,500) PLUS £190,000 local costs from £250,000.",
          "Compare £32,500 against £28,000!",
        ],
      },
      {
        id: "business-activity-m3-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "business-objectives",
        question:
          "In an Edexcel 4BS1 **12-mark 'Evaluate...'** conclusion using the **AJIM** structure, what makes the *'It depends on'* (`I`) step reach Level 3 (Grade 8–9) evaluation?",
        options: [
          "Repeating the exact wording of the two advantages already written in Paragraph 1",
          "Identifying the decisive case-study condition (such as cash reserves, founder desire for >50% control, or short-run vs long-run horizon) that determines whether the chosen option succeeds",
          "Writing 'There are both pros and cons so it is 50/50 and impossible to decide'",
          "Listing five unrelated definitions from other syllabus strands",
        ],
        answerIndex: 1,
        explanation:
          "Examiners despise fence-sitting (*'50/50'*). Top-band **AO4 Evaluation** makes a firm decision (**A**nswer), backs it in context (**J**ustify), specifies the critical contingency (**I**t depends on...), and weighs the **M**ost important driver.",
        hints: [
          "Remember: never sit on the fence in a 9-mark or 12-mark conclusion!",
          "What does the 'I' in AJIM ask you to weigh in specific case-study context?",
        ],
      },
    ],
  },
];
