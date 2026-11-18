import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "location-globalisation-external-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "trade-exchange-rates",
      question:
        "In the exchange-rate mnemonic **SPICED**, what do the letters **I C E D** stand for?",
      options: [
        "Imports Costlier, Exports Discounted",
        "Imports Cheaper, Exports Dearer",
        "Interest Cut, Economy Deflates",
        "Investments Climb, Exports Double",
      ],
      answerIndex: 1,
      explanation:
        "**SPICED** = **S**trong **P**ound **I**mports **C**heaper **E**xports **D**earer.",
      hints: [
        "When the pound is Strong, what happens to UK Imports vs UK Exports?",
      ],
    },
    {
      id: "location-globalisation-external-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "trade-exchange-rates",
      question:
        "A Brighton surfboard maker exports boards priced at **£400** to an Australian surf shop when the exchange rate is **£1 = A$1.95**. Calculate the price in **Australian dollars (A$)**.",
      answer: { type: "number", value: 780, display: "A$780" },
      solution: [
        "Converting Home (£) → Foreign (A$): multiply by the exchange rate.",
        "£400 × 1.95 = **A$780**.",
      ],
      commonError: "Dividing 400 by 1.95 (A$205.13) instead of multiplying.",
      traps: [
        {
          spec: { type: "number", value: 205.13, tolerance: 0.05 },
          feedback: "You divided instead of multiplying! Since £1 buys A$1.95, multiply 400 × 1.95 = 780.",
        },
      ],
      hints: [
        "£1 = A$1.95 → multiply £400 by 1.95.",
      ],
    },
    {
      id: "location-globalisation-external-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "trade-exchange-rates",
      question:
        "A London café imports Italian coffee grinders invoiced at **€3,600** when **£1 = €1.20**, and pays a **10% UK import tariff**. Calculate the **total landed cost in £** (including the tariff).",
      answer: { type: "number", value: 3300, display: "£3,300" },
      solution: [
        "Convert €3,600 to £: €3,600 ÷ 1.20 = £3,000.",
        "Add 10% import tariff (£300): £3,000 × 1.10 = **£3,300**.",
      ],
      commonError: "Forgetting the 10% tariff (£3,000) or multiplying €3,600 × 1.20.",
      traps: [
        {
          spec: { type: "number", value: 3000 },
          feedback: "£3,000 is the pre-tariff sterling value — add the 10% (£300) import tariff as well!",
        },
        {
          spec: { type: "number", value: 4752 },
          feedback: "Divide (don't multiply!) €3,600 by 1.20 when converting euros into pounds.",
        },
      ],
      hints: [
        "Step 1: Divide €3,600 by 1.20 to get £3,000.",
        "Step 2: Add 10% tariff to £3,000.",
      ],
    },
    {
      id: "location-globalisation-external-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      guideRef: "trade-exchange-rates",
      question:
        "What single word describes a government **physical limit** on the maximum quantity of an imported good allowed into a country per year?",
      answer: {
        type: "text",
        accept: ["quota", "import quota", "quotas"],
        display: "quota",
      },
      solution: [
        "An import **quota** caps the physical volume of imports, whereas a **tariff** is a customs tax on imports.",
      ],
      commonError: "Writing 'tariff' (which is a tax, not a physical quantity cap).",
      traps: [
        {
          spec: { type: "text", accept: ["tariff", "import tariff", "tariffs"] },
          feedback: "A tariff is a TAX on imports; a physical limit on import quantity is a QUOTA!",
        },
      ],
      hints: [
        "Starts with 'q' — physical volume cap rather than a tax.",
      ],
    },
    {
      id: "location-globalisation-external-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "government-policies",
      question:
        "Apex Joinery Ltd has a **£600,000** variable-rate bank loan. When the central bank raises base rates, Apex's loan interest rate jumps from **4.5% to 7.0%**. Calculate the **increase** in Apex's annual interest expense, in £.",
      answer: { type: "number", value: 15000, display: "£15,000" },
      solution: [
        "Interest rate increase = 7.0% − 4.5% = 2.5 percentage points.",
        "Extra annual interest = £600,000 × 2.5% = **£15,000** (rising from £27,000 to £42,000).",
      ],
      commonError: "Giving the new total interest bill (£42,000) instead of the £15,000 increase.",
      traps: [
        {
          spec: { type: "number", value: 42000 },
          feedback: "£42,000 is the NEW total interest bill — subtract the old £27,000 bill to find the increase (£15,000)!",
        },
      ],
      hints: [
        "Find the jump in interest rate: 7.0% − 4.5% = 2.5%.",
        "Calculate 2.5% of £600,000.",
      ],
    },
    {
      id: "location-globalisation-external-quiz-q06",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "location-decisions",
      question:
        "Which incentive do governments commonly offer to persuade manufacturers to locate in regions suffering from high structural unemployment?",
      options: [
        "Regional location grants and enterprise-zone tax reliefs",
        "Higher corporation tax rates exclusively for new factories",
        "Mandatory import tariffs on domestic raw materials",
        "Strict bans on hiring local workers",
      ],
      answerIndex: 0,
      explanation:
        "Governments offer **regional development grants**, training subsidies and business-rate reliefs in enterprise zones to lower start-up capital costs and create jobs in high-unemployment areas.",
      hints: [
        "Which policy lowers capital costs to attract employers into deprived regions?",
      ],
    },
    {
      id: "location-globalisation-external-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "globalisation-mncs",
      question:
        "Which of the following is a **positive** impact on a developing **host country** when a foreign multinational builds an electronics plant there?",
      options: [
        "Repatriation of 85% of profits back to the MNC's home country",
        "Skills and technology transfer as local engineers and suppliers are trained in modern quality standards",
        "Pricing small local family electronics workshops out of the domestic market",
        "Depletion of local river water and heavy industrial emissions",
      ],
      answerIndex: 1,
      explanation:
        "**Skills and technology transfer** upgrades the host nation's human capital and local supply chain, whereas profit repatriation, squeezing local SMEs and pollution are host-country drawbacks.",
      hints: [
        "Three options are classic host-country drawbacks; find the genuine host-country gain!",
        "Look at long-run human capital and supplier capability.",
      ],
    },
    {
      id: "location-globalisation-external-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "external-pestle-ethics",
      question:
        "What single-word term describes misleading marketing that exaggerates a company's eco-friendly credentials while hiding polluting practices?",
      answer: {
        type: "text",
        accept: ["greenwashing", "green-washing", "greenwash"],
        display: "greenwashing",
      },
      solution: [
        "**Greenwashing** misleads ethical consumers with superficial sustainability claims unsupported by real environmental action.",
      ],
      commonError: "Writing 'whitewashing' without the environmental 'green-' prefix.",
      hints: [
        "Starts with 'green-' and ends with '-washing'.",
        "Target of both consumer regulators and environmental pressure groups.",
      ],
    },
    {
      id: "location-globalisation-external-quiz-q09",
      kind: "written",
      difficulty: "core",
      guideRef: "trade-exchange-rates",
      question:
        "**Case Study — Devon Cheese Co (24 employees):** Devon Cheese Co ages organic cheddar in Exeter and exports 60% of its wheels to speciality delis across Germany and France.\n\n**Outline** one impact on Devon Cheese Co if the pound **appreciates** sharply against the euro. *(2 marks)*",
      marks: 2,
      modelAnswer:
        "A stronger pound makes Devon Cheese Co's organic cheddar dearer in euros for German and French delis, reducing export orders and squeezing the creamery's revenue.",
      markScheme: [
        {
          point: "Applies SPICED correctly: exports become dearer in euros / less price-competitive, lowering overseas demand or forcing a £ margin cut.",
          keywords: ["dearer", "more expensive", "less competitive", "fall", "reducing", "orders"],
        },
        {
          point: "Explicit AO2 context from Devon Cheese Co (organic cheddar, wheels, delis, Germany/France or 60% exports).",
          keywords: ["cheddar", "devon cheese", "creamery", "delis", "germany", "france", "60%", "wheels"],
        },
      ],
      commonError: "Reversing SPICED (claiming exports get cheaper!) or omitting cheddar/Germany/France context.",
      hints: [
        "Apply **SPICED**: Strong Pound → Exports **Dearer**!",
        "Tie directly to *organic cheddar* and *German/French delis* for 2/2 marks.",
      ],
    },
    {
      id: "location-globalisation-external-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "government-policies",
      question:
        "**Explain** one way an increase in **income tax** can affect a business selling luxury holidays. *(3 marks)*",
      marks: 3,
      modelAnswer:
        "Higher income tax takes a larger slice of households' gross wages, directly reducing consumers' disposable income. Because luxury overseas holidays are non-essential income-elastic purchases, families cut back or trade down to cheaper domestic breaks. Consequently, the travel company suffers falling bookings and lower sales revenue.",
      markScheme: [
        {
          point: "AO1: States that higher income tax reduces household disposable income.",
          keywords: ["disposable income", "take-home pay", "spending power"],
        },
        {
          point: "AO3 Link 1: Explains that luxury holidays are non-essential / discretionary / income-elastic, so households postpone or trade down.",
          keywords: ["non-essential", "discretionary", "elastic", "postpone", "trade down", "cut back"],
        },
        {
          point: "AO3 Link 2: Connects to business impact (falling holiday bookings, lower revenue or pressure to discount prices).",
          keywords: ["bookings", "revenue", "sales", "discount"],
        },
      ],
      commonError: "Confusing income tax with corporation tax (saying the holiday company pays more tax on its profits).",
      hints: [
        "Careful: **income tax** hits households' **disposable income** (not company profits!).",
        "Chain 3 steps: Disposable income falls → non-essential luxury holidays cut first → bookings & revenue drop.",
      ],
    },
  ],
  papers: [
    {
      id: "location-globalisation-external-p1",
      title: "Practice Paper 1 — Small Business: Location, Trade, Policy & Ethics (<50 Staff)",
      questions: [
        {
          id: "location-globalisation-external-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "trade-exchange-rates",
          question:
            "In the depreciation mnemonic **WPIDEC**, what word does **D** stand for (*Weak Pound Imports ______*)?",
          answer: {
            type: "text",
            accept: ["dearer", "more expensive"],
            display: "Dearer",
          },
          solution: [
            "**WPIDEC** = **W**eak **P**ound **I**mports **D**earer **E**xports **C**heaper.",
          ],
          commonError: "Confusing WPIDEC with SPICED and writing 'Cheaper'.",
          traps: [
            {
              spec: { type: "text", accept: ["cheaper", "discounted"] },
              feedback: "Imports Cheaper is SPICED (strong pound)! Under a WEAK pound (WPIDEC), imports become DEARER.",
            },
          ],
          hints: [
            "Write out W-P-I-D-E-C: Weak Pound Imports D_____, Exports Cheaper.",
          ],
        },
        {
          id: "location-globalisation-external-p1-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "trade-exchange-rates",
          question:
            "Cornish Surf Ltd imports wetsuit neoprene from California invoiced at **$9,000**. Calculate the sterling (£) cost when the exchange rate is **£1 = $1.25**.",
          answer: { type: "number", value: 7200, display: "£7,200" },
          solution: [
            "Foreign ($) → Home (£): divide by the exchange rate.",
            "$9,000 ÷ 1.25 = **£7,200**.",
          ],
          commonError: "Multiplying 9,000 × 1.25 = £11,250.",
          traps: [
            {
              spec: { type: "number", value: 11250 },
              feedback: "You multiplied! Convert $ → £ by DIVIDING $9,000 by 1.25 (£7,200).",
            },
          ],
          hints: [
            "Sanity check: since £1 is worth more than $1, the £ figure must be smaller than 9,000.",
            "Divide 9,000 by 1.25.",
          ],
        },
        {
          id: "location-globalisation-external-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "trade-exchange-rates",
          question:
            "If the pound weakens from **£1 = $1.25** to **£1 = $1.00**, how much **more** in £ must Cornish Surf Ltd pay for that same **$9,000** wetsuit neoprene shipment?",
          answer: { type: "number", value: 1800, display: "£1,800" },
          solution: [
            "Old cost at $1.25 = $9,000 ÷ 1.25 = £7,200.",
            "New cost at $1.00 = $9,000 ÷ 1.00 = £9,000.",
            "Increase in import cost = £9,000 − £7,200 = **£1,800**.",
          ],
          commonError: "Writing £9,000 (the new cost) instead of the £1,800 increase.",
          traps: [
            {
              spec: { type: "number", value: 9000 },
              feedback: "£9,000 is the new total cost — subtract the old £7,200 cost to get the £1,800 increase!",
            },
          ],
          hints: [
            "Compare ($9,000 ÷ 1.00 = £9,000) against ($9,000 ÷ 1.25 = £7,200).",
            "Find the £ difference between the two costs.",
          ],
        },
        {
          id: "location-globalisation-external-p1-q04",
          kind: "short",
          difficulty: "warmup",
          guideRef: "trade-exchange-rates",
          question:
            "What single word names a customs **tax or duty** charged by a government on goods imported from abroad?",
          answer: {
            type: "text",
            accept: ["tariff", "import tariff", "tariffs", "customs duty"],
            display: "tariff",
          },
          solution: [
            "An import **tariff** is a tax on imported goods that raises their price and generates government revenue.",
          ],
          commonError: "Writing 'quota' (which is a volume limit, not a tax).",
          traps: [
            {
              spec: { type: "text", accept: ["quota", "quotas", "import quota"] },
              feedback: "A quota is a physical quantity limit; a TAX on imports is a TARIFF!",
            },
          ],
          hints: [
            "Starts with 't' — customs tax on imports.",
          ],
        },
        {
          id: "location-globalisation-external-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "location-decisions",
          question:
            "A Welsh enterprise zone offers `Byte Studio Ltd` (18 staff) a **20% regional location grant** towards fitting out a **£140,000** coding lab. How much **net capital (£)** must `Byte Studio Ltd` fund itself?",
          answer: { type: "number", value: 112000, display: "£112,000" },
          solution: [
            "Government grant = 20% × £140,000 = £28,000.",
            "Net capital funded by Byte Studio Ltd = £140,000 − £28,000 = **£112,000**.",
          ],
          commonError: "Giving £28,000 (the grant amount) instead of £112,000.",
          traps: [
            {
              spec: { type: "number", value: 28000 },
              feedback: "£28,000 is the government grant — subtract £28,000 from £140,000 to find what Byte Studio must fund (£112,000)!",
            },
          ],
          hints: [
            "Calculate the 20% grant (£28,000) first.",
            "Subtract £28,000 from £140,000.",
          ],
        },
        {
          id: "location-globalisation-external-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "government-policies",
          question:
            "Willow Pottery Ltd earns **£95,000** in profit before tax. If the small-profits **corporation tax** rate is **20%**, calculate Willow Pottery Ltd's **after-tax profit** in £.",
          answer: { type: "number", value: 76000, display: "£76,000" },
          solution: [
            "Corporation tax = 20% × £95,000 = £19,000.",
            "After-tax profit = £95,000 − £19,000 = **£76,000**.",
          ],
          commonError: "Giving £19,000 (the tax bill) instead of £76,000 after-tax profit.",
          traps: [
            {
              spec: { type: "number", value: 19000 },
              feedback: "£19,000 is the tax paid to HMRC — subtract it from £95,000 to find after-tax profit (£76,000)!",
            },
          ],
          hints: [
            "Deduct 20% (£19,000) from £95,000.",
            "Or multiply £95,000 × 0.80.",
          ],
        },
        {
          id: "location-globalisation-external-p1-q07",
          kind: "short",
          difficulty: "warmup",
          guideRef: "government-policies",
          question:
            "Is **Value Added Tax (VAT)** classified as a **direct** tax or an **indirect** tax?",
          answer: {
            type: "text",
            accept: ["indirect", "indirect tax"],
            display: "indirect tax",
          },
          solution: [
            "VAT is levied on expenditure on goods and services rather than directly on income/profits, making it an **indirect tax**.",
          ],
          commonError: "Writing 'direct tax' (which applies to income tax and corporation tax).",
          traps: [
            {
              spec: { type: "text", accept: ["direct", "direct tax"] },
              feedback: "Direct taxes hit wages/profits (Income Tax, Corporation Tax); VAT on spending is an INDIRECT tax!",
            },
          ],
          hints: [
            "Taxes added to prices of goods/services at the checkout are _______ taxes.",
          ],
        },
        {
          id: "location-globalisation-external-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "external-pestle-ethics",
          question:
            "PureSoap Ltd sells **15,000 bars** a month at **£6.00** per bar with **£2.20** variable costs. Switching to certified palm-free oils raises variable costs to **£2.70** per bar, while ethical branding lets PureSoap raise its price to **£6.80** at the same 15,000-bar volume. Calculate the **increase** in monthly total contribution, in £.",
          answer: { type: "number", value: 4500, display: "£4,500" },
          solution: [
            "Old unit contribution = £6.00 − £2.20 = £3.80 → 15,000 × £3.80 = £57,000.",
            "New unit contribution = £6.80 − £2.70 = £4.10 → 15,000 × £4.10 = £61,500.",
            "Increase in monthly contribution = £61,500 − £57,000 = **£4,500** (£0.30 extra per bar × 15,000).",
          ],
          commonError: "Giving £61,500 (new total contribution) instead of the £4,500 increase.",
          traps: [
            {
              spec: { type: "number", value: 61500 },
              feedback: "£61,500 is the new total contribution — subtract the old £57,000 to find the £4,500 increase!",
            },
            {
              spec: { type: "number", value: 12000 },
              feedback: "You counted the £0.80 price rise (£12,000) without subtracting the £0.50 (£7,500) extra palm-free oil cost!",
            },
          ],
          hints: [
            "Unit contribution rises from (£6.00 − £2.20 = £3.80) to (£6.80 − £2.70 = £4.10) — a net gain of £0.30/bar.",
            "Multiply £0.30 by 15,000 bars.",
          ],
        },
        {
          id: "location-globalisation-external-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "external-pestle-ethics",
          question:
            "What two-word term describes organised non-profit activist groups (such as Greenpeace or local anti-pollution coalitions) that campaign via boycotts, protests and lobbying to change business behaviour?",
          answer: {
            type: "text",
            accept: ["pressure group", "pressure groups", "lobby group", "lobby groups"],
            display: "pressure groups",
          },
          solution: [
            "**Pressure groups** campaign on environmental, ethical or community issues using boycotts, media publicity and lobbying.",
          ],
          commonError: "Confusing external pressure groups with trade unions (which specifically represent employees' workplace pay and conditions).",
          traps: [
            {
              spec: { type: "text", accept: ["trade union", "trade unions"] },
              feedback: "Trade unions represent employees over pay/working conditions; broader activist groups like Greenpeace are PRESSURE GROUPS.",
            },
          ],
          hints: [
            "Two words: '________ groups' — organisations applying public & media pressure on firms.",
            "They use consumer boycotts, petitions and government lobbying.",
          ],
        },
        {
          id: "location-globalisation-external-p1-q10",
          kind: "written",
          difficulty: "core",
          guideRef: "location-decisions",
          question:
            "**Case Study — Bao & Broth (7 employees):** Jin wants to open a steamed-bao noodle bar in Manchester. He is choosing between a small unit opposite Manchester Piccadilly rail station (£52,000/yr rent) and a larger unit on an industrial estate 4 miles away (£16,000/yr rent).\n\n**Outline** one reason why Jin should choose the Piccadilly station site despite the higher rent. *(2 marks)*",
          marks: 2,
          modelAnswer:
            "Locating opposite Manchester Piccadilly gives Jin's steamed-bao bar massive daily commuter footfall, generating far higher walk-in noodle sales than an isolated industrial estate.",
          markScheme: [
            {
              point: "Identifies proximity to customers / high walk-in footfall boosting sales revenue.",
              keywords: ["footfall", "walk-in", "commuter", "commuters", "customers", "sales"],
            },
            {
              point: "Applies explicitly to Bao & Broth context (Manchester Piccadilly, rail station, bao, noodle or £52,000).",
              keywords: ["piccadilly", "station", "bao", "noodle", "52,000", "manchester"],
            },
          ],
          commonError: "Writing 'more customers will come' without mentioning commuters, Piccadilly rail station or steamed bao/noodles.",
          hints: [
            "Why would a noodle bar fail on a quiet industrial estate 4 miles out?",
            "Mention *Piccadilly commuters* and *bao/noodle walk-in footfall* for full 2/2!",
          ],
        },
        {
          id: "location-globalisation-external-p1-q11",
          kind: "written",
          difficulty: "core",
          guideRef: "trade-exchange-rates",
          question:
            "**Explain** one way a **depreciation** in the domestic currency affects a small manufacturer that imports raw materials from abroad. *(3 marks)*",
          marks: 3,
          modelAnswer:
            "When the currency depreciates, each unit of home currency buys fewer units of foreign currency (WPIDEC: Weak Pound Imports Dearer). Consequently, the manufacturer must pay more in domestic currency for the exact same overseas shipment of raw materials, raising its variable Cost of Sales. Unless it raises selling prices and risks losing customers, its Gross Profit Margin falls.",
          markScheme: [
            {
              point: "AO1: States that currency depreciation makes imported raw materials dearer / more expensive in domestic currency.",
              keywords: ["dearer", "more expensive", "fewer", "wpidec"],
            },
            {
              point: "AO3 Link 1: Explains that Cost of Sales / unit variable production costs increase.",
              keywords: ["cost of sales", "variable", "production costs", "unit cost"],
            },
            {
              point: "AO3 Link 2: Connects to squeezed Gross Profit Margin OR higher selling prices reducing domestic competitiveness.",
              keywords: ["margin", "gross profit", "prices", "competitiveness", "squeezed"],
            },
          ],
          commonError: "Stopping at 'imports get more expensive so costs rise' (2/3) without adding the 3rd impact on profit margins or selling prices!",
          hints: [
            "Apply **WPIDEC**: Weak Pound → **Imports Dearer**!",
            "Chain 3 steps: Imported raw materials cost more £ → Cost of Sales rises → Gross Profit Margin falls (or prices must rise).",
          ],
        },
        {
          id: "location-globalisation-external-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "external-pestle-ethics",
          question:
            "**Explain** one reason why complying with **consumer protection legislation** can increase costs for a small business. *(3 marks)*",
          marks: 3,
          modelAnswer:
            "Consumer protection laws require accurate product labelling, safety testing and full refunds or replacements for faulty items. A small business must spend money on laboratory safety checks, updated packaging and staff training to avoid illegal misdescriptions. This raises operating expenses and reduces short-term net profit.",
          markScheme: [
            {
              point: "AO1: Identifies legal duties (safety standards, accurate labelling or refunding faulty goods).",
              keywords: ["safety", "labelling", "testing", "refunds", "faulty"],
            },
            {
              point: "AO3 Link 1: Explains the practical resource outlay (paying for lab checks, redesigned packaging, quality inspections or replacements).",
              keywords: ["checks", "packaging", "training", "inspections", "replacements"],
            },
            {
              point: "AO3 Link 2: Connects to higher overheads / operating expenses lowering short-term profit.",
              keywords: ["expenses", "overheads", "profit", "reduces"],
            },
          ],
          commonError: "Confusing consumer protection law with minimum-wage employment law!",
          hints: [
            "Keep strictly to **consumer protection law** (safe goods, truthful labels, faulty refunds — NOT minimum wage!).",
            "Link legal safety/labelling requirements → testing & packaging spend → higher operating costs.",
          ],
        },
        {
          id: "location-globalisation-external-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "government-policies",
          question:
            "**Case Study — Cotswold Cabins Ltd (29 employees):** Cotswold Cabins Ltd builds £28,000 luxury cedar hot-tub cabins for homeowners, funded mostly by customers using bank personal loans. Cotswold Cabins also relies on a £180,000 bank overdraft to buy Canadian cedar timber. Last week the Bank of England raised interest rates by 2.5 percentage points.\n\n**Analyse** how this rise in interest rates is likely to affect Cotswold Cabins Ltd. *(6 marks)*",
          marks: 6,
          modelAnswer:
            "Higher interest rates immediately increase the monthly finance charges on Cotswold Cabins Ltd's £180,000 bank overdraft used to buy Canadian cedar timber. Rising finance overheads directly inflate total expenses and squeeze the 29-staff firm's net profit margin and cash flow.\n\nSimultaneously, homeowners face steeper monthly mortgage bills and much costlier personal loans, making a £28,000 luxury hot-tub cabin far less affordable. Because garden cabins are non-essential big-ticket luxuries, households postpone orders, causing a sharp drop in Cotswold Cabins' sales revenue and workshop capacity utilisation.",
          markScheme: [
            {
              point: "Strand 1 (Cost side): Higher interest charges on the £180,000 bank overdraft.",
              keywords: ["overdraft", "180,000", "finance", "charges"],
            },
            {
              point: "Chain 1 developed: Raises finance expenses, squeezing net profit and monthly cash flow.",
              keywords: ["expenses", "net profit", "cash flow", "squeeze"],
            },
            {
              point: "AO2 context integrated (Canadian cedar timber, 29 staff, £28,000 hot-tub cabins, personal loans).",
              keywords: ["cedar", "hot-tub", "cabins", "28,000", "personal loans"],
            },
            {
              point: "Strand 2 (Demand side): Higher mortgage costs + dearer personal loans cut homeowner disposable income/borrowing.",
              keywords: ["mortgage", "homeowners", "disposable", "borrowing", "affordable"],
            },
            {
              point: "Chain 2 developed: Luxury non-essential cabins are postponed, slashing order volume and revenue.",
              keywords: ["luxury", "non-essential", "postpone", "revenue", "orders"],
            },
            {
              point: "Two distinct developed analytical chains sustained in context.",
              keywords: ["simultaneously", "consequently", "directly", "causing"],
            },
          ],
          commonError: "Analysing only consumer demand OR only overdraft interest instead of developing BOTH 3-mark analytical chains!",
          hints: [
            "Spot BOTH clues planted in the case study: (1) £180,000 overdraft for cedar timber AND (2) £28,000 luxury cabins bought on personal loans!",
            "Develop Chain 1 on overdraft finance costs and Chain 2 on credit-dependent luxury customer demand.",
          ],
        },
        {
          id: "location-globalisation-external-p1-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "external-pestle-ethics",
          question:
            "**Case Study — GlowSkin Lab Ltd (22 employees):** GlowSkin Lab Ltd makes facial serums in Bristol, selling at £24 per bottle (variable cost £6). Currently its serums come in non-recyclable metallic plastic pumps. A student eco pressure group threatens an Instagram boycott unless GlowSkin switches to refillable glass droppers, which would raise variable cost by **£1.80 per bottle**. GlowSkin's marketing manager believes ethical refillable glass would justify raising the retail price to **£26**.\n\n**Assess** whether GlowSkin Lab Ltd should switch to refillable glass droppers. *(9 marks)*",
          marks: 6,
          modelAnswer:
            "Switching to refillable glass droppers defuses the student eco pressure group's Instagram boycott, protecting GlowSkin Lab's brand reputation among environmentally conscious skincare shoppers. Even though unit variable cost rises by £1.80 (from £6.00 to £7.80), if ethical differentiation allows GlowSkin to charge £26 per bottle, unit contribution actually rises from £18.00 to £18.20 while attracting green beauty retailers.\n\nHowever, glass droppers are heavier to post (raising courier charges) and break more easily in transit, while price-sensitive buyers during a cost-of-living squeeze may balk at paying £26 instead of £24 — causing sales volume to dip if rival serums stay cheaper.\n\nOverall, GlowSkin Lab should switch to refillable glass (**AJIM**), because a viral Instagram boycott over non-recyclable plastic pumps could devastate a 22-employee indie beauty brand that relies on social-media trust. **It depends on** Price Elasticity of Demand among GlowSkin's core customers: offering a £2 discount on refill pouches would lock in repeat customer loyalty while proving the change is authentic rather than greenwashing.",
          markScheme: [
            {
              point: "Case FOR Glass: Prevents Instagram boycott, builds ethical skincare USP, and lifts unit contribution (£18.00 → £18.20) if £26 holds.",
              keywords: ["boycott", "instagram", "reputation", "18.20", "contribution", "usp"],
            },
            {
              point: "Quantitative & contextual AO2 use (£24 → £26, £6 + £1.80 = £7.80, serums, pumps, 22 staff).",
              keywords: ["1.80", "7.80", "26", "serums", "glass", "pumps"],
            },
            {
              point: "Case AGAINST Glass: Higher unit cost/breakage/postage risk + £26 price hike may lose price-sensitive shoppers.",
              keywords: ["heavier", "break", "courier", "price-sensitive", "volume"],
            },
            {
              point: "Clear AJIM decision backing the switch for a social-media-reliant indie brand.",
              keywords: ["overall", "should switch", "trust"],
            },
            {
              point: "'It depends on' PED / willingness to pay £26 + avoiding greenwashing via genuine refill discounts.",
              keywords: ["it depends on", "elasticity", "refill", "greenwashing"],
            },
            {
              point: "Balanced two-sided reasoning before weighed final judgement.",
              keywords: ["however", "overall"],
            },
          ],
          commonError: "Ignoring the numbers (£24 − £6 = £18 vs £26 − £7.80 = £18.20!) — doing that 5-second calculation unlocks instant top-band AO2/AO3 credit!",
          hints: [
            "Do the maths! Old contribution = £24 − £6 = £18.00; New contribution at £26 = £26 − (£6 + £1.80) = £18.20!",
            "Balance avoiding the Instagram boycott + £0.20 higher contribution against breakage/postage & price sensitivity at £26.",
            "Conclude with **AJIM**: switch, *depending on* customer PED and offering refill incentives!",
          ],
        },
        {
          id: "location-globalisation-external-p1-q15",
          kind: "short",
          difficulty: "core",
          guideRef: "globalisation-mncs",
          question:
            "A 19-employee Cornish biscuit bakery sells 30% of its tins to department stores in Tokyo, while baking 100% of its biscuits in one Cornwall oven. Answer **yes** or **no**: is this bakery a **Multinational Corporation (MNC)**?",
          answer: {
            type: "text",
            accept: ["no", "not an mnc", "no it is an exporter"],
            display: "no",
          },
          solution: [
            "**No!** Exporting from a single UK factory makes the bakery an **exporter**, NOT an MNC; an MNC must own/operate production or service facilities in **more than one country**.",
          ],
          commonError: "Writing 'yes' because the biscuits are sold in Japan!",
          traps: [
            {
              spec: { type: "text", accept: ["yes"] },
              feedback: "Classic Edexcel trap! Selling abroad from one UK oven makes it an EXPORTER, not an MNC — an MNC must operate facilities in 2+ countries!",
            },
          ],
          hints: [
            "Check how many countries the bakery physically bakes/operates in (only Cornwall!).",
            "Does exporting alone make a firm an MNC?",
          ],
        },
      ],
    },
    {
      id: "location-globalisation-external-p2",
      title: "Practice Paper 2 — Large Business: Globalisation, MNCs, Trade & Policy (>250 Staff)",
      questions: [
        {
          id: "location-globalisation-external-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "globalisation-mncs",
          question:
            "What three-letter abbreviation stands for **Foreign Direct Investment**, when a multinational builds or acquires factories and offices in a host country?",
          answer: {
            type: "text",
            accept: ["fdi", "foreign direct investment"],
            display: "FDI",
          },
          solution: [
            "**FDI** stands for **Foreign Direct Investment**.",
          ],
          commonError: "Writing 'IPO' (Initial Public Offering) or 'WTO'.",
          hints: [
            "Foreign Direct Investment → three initials!",
          ],
        },
        {
          id: "location-globalisation-external-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "globalisation-mncs",
          question:
            "ElectroDrive Plc's assembly plant in Thailand earns **$80 million** operating profit, pays **15% Thai corporation tax**, and **repatriates 75%** of after-tax profit back to its European parent company. Calculate how many **$ millions** are repatriated.",
          answer: { type: "number", value: 51, display: "$51 million" },
          solution: [
            "After-tax profit in Thailand = $80m × (1 − 0.15) = $68m.",
            "Repatriated profit (75%) = $68m × 0.75 = **$51 million**.",
          ],
          commonError: "Taking 75% of $80m ($60m) before deducting the 15% host corporation tax.",
          traps: [
            {
              spec: { type: "number", value: 60 },
              feedback: "Deduct the 15% Thai corporation tax ($12m) FIRST, then take 75% of $68m ($51m)!",
            },
            {
              spec: { type: "number", value: 17 },
              feedback: "$17m is the 25% kept in Thailand — the question asks for the 75% repatriated ($51m)!",
            },
          ],
          hints: [
            "Step 1: After-tax profit = $80m × 0.85 = $68m.",
            "Step 2: Multiply $68m by 75%.",
          ],
        },
        {
          id: "location-globalisation-external-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "trade-exchange-rates",
          question:
            "AeroTurbine Plc exports jet fan blades priced at **£1,500,000** per consignment to an airline in Chicago. If the pound **appreciates** from **£1 = $1.22** to **£1 = $1.38**, by how many **US dollars ($)** does the consignment become dearer for the Chicago airline?",
          answer: { type: "number", value: 240000, display: "$240,000" },
          solution: [
            "Old US price = £1,500,000 × 1.22 = $1,830,000.",
            "New US price = £1,500,000 × 1.38 = $2,070,000.",
            "Increase in dollar price = $2,070,000 − $1,830,000 = **$240,000** (£1.5m × 0.16).",
          ],
          commonError: "Giving $2,070,000 (the new price) instead of the $240,000 increase.",
          traps: [
            {
              spec: { type: "number", value: 2070000 },
              feedback: "$2,070,000 is the new total price — subtract $1,830,000 to find how much dearer it became ($240,000)!",
            },
          ],
          hints: [
            "Rate jump = $1.38 − $1.22 = $0.16 per £1.",
            "Multiply £1,500,000 by $0.16.",
          ],
        },
        {
          id: "location-globalisation-external-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "trade-exchange-rates",
          question:
            "SuperRetail Plc imports 10,000 air-fryers from abroad at **$48 each** when **£1 = $1.20**, subject to a **12% import tariff**. Calculate the **landed cost per air-fryer in £** (to 2 d.p., e.g. `44.80`).",
          answer: { type: "number", value: 44.8, tolerance: 0.01, display: "£44.80" },
          solution: [
            "Pre-tariff sterling cost per air-fryer = $48 ÷ 1.20 = £40.00.",
            "Add 12% import tariff (£4.80): £40.00 × 1.12 = **£44.80**.",
          ],
          commonError: "Forgetting the 12% tariff (£40.00) or multiplying 48 × 1.20 × 1.12 (£64.51).",
          traps: [
            {
              spec: { type: "number", value: 40 },
              feedback: "£40.00 is before customs duty — add the 12% (£4.80) import tariff!",
            },
            {
              spec: { type: "number", value: 64.51, tolerance: 0.02 },
              feedback: "Divide $48 by 1.20 (£40) instead of multiplying!",
            },
          ],
          hints: [
            "Divide $48 by 1.20 to get £40.00.",
            "Multiply £40.00 by 1.12 to add the 12% tariff.",
          ],
        },
        {
          id: "location-globalisation-external-p2-q05",
          kind: "short",
          difficulty: "warmup",
          guideRef: "globalisation-mncs",
          question:
            "What two-word term describes a group of countries (such as the EU or ASEAN) that abolish internal tariffs between members while often charging a common external tariff on outsiders?",
          answer: {
            type: "text",
            accept: ["trade bloc", "trading bloc", "trade blocs", "trading blocs", "customs union"],
            display: "trade bloc",
          },
          solution: [
            "A **trade bloc** (or trading bloc / customs union) promotes free trade among member nations.",
          ],
          commonError: "Writing 'pressure group' or 'cartel'.",
          hints: [
            "Examples: EU, USMCA, ASEAN — a 'trade ____'.",
          ],
        },
        {
          id: "location-globalisation-external-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "government-policies",
          question:
            "Horizon Hotels Plc carries **£40 million** of variable-rate debt. Its annual operating profit is **£14.0 million**. When its loan interest rate rises from **4% to 6.5%**, calculate Horizon Hotels Plc's **after-tax profit (£ millions)** assuming **25% corporation tax** (give to 2 d.p., e.g. `8.55`).",
          answer: { type: "number", value: 8.55, tolerance: 0.01, display: "£8.55 million" },
          solution: [
            "New annual loan interest = £40m × 6.5% = £2.60m.",
            "Profit before tax = £14.00m − £2.60m = £11.40m.",
            "After-tax profit (after 25% corporation tax) = £11.40m × 0.75 = **£8.55 million**.",
          ],
          commonError: "Forgetting corporation tax (£11.40m) or deducting only the 2.5% interest *increase* (£1.0m) from £14m.",
          traps: [
            {
              spec: { type: "number", value: 11.4 },
              feedback: "£11.40m is profit before tax — deduct 25% corporation tax (× 0.75) to get £8.55m!",
            },
            {
              spec: { type: "number", value: 9.75 },
              feedback: "Subtract the FULL 6.5% (£2.60m) interest bill from £14.00m operating profit, not just the 2.5% increase!",
            },
          ],
          hints: [
            "Step 1: Full annual interest at 6.5% on £40m = £2.60m → Profit before tax = £14.00m − £2.60m = £11.40m.",
            "Step 2: Multiply £11.40m by (1 − 0.25).",
          ],
        },
        {
          id: "location-globalisation-external-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "external-pestle-ethics",
          question:
            "In **PESTLE**, consumer-rights laws, anti-monopoly merger rules and workplace safety statutes belong under which letter's full word?",
          answer: {
            type: "text",
            accept: ["legal", "legislation"],
            display: "Legal",
          },
          solution: [
            "Statutes and regulations passed by parliament/courts form the **Legal** dimension of PESTLE.",
          ],
          commonError: "Writing 'Social' or 'Technological'.",
          hints: [
            "The second-to-last letter 'L' in P-E-S-T-L-E!",
            "Covers consumer, competition and employment laws.",
          ],
        },
        {
          id: "location-globalisation-external-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "location-decisions",
          question:
            "SteelForge Plc processes **4.0 tonnes** of raw iron ore and coal to produce **1.0 tonne** of finished sheet steel. Transporting raw inputs costs **£18 per tonne-mile**, whereas transporting finished steel costs **£22 per tonne-mile**. How much transport cost (£) does SteelForge Plc save **per tonne of finished steel** over a **100-mile** distance between mine and car plant by locating its steelworks **at the mine** rather than **at the car plant**?",
          answer: { type: "number", value: 5000, display: "£5,000" },
          solution: [
            "If located at the car plant (hauling 4.0t raw inputs 100 miles): 4.0 × £18 × 100 = £7,200.",
            "If located at the mine (hauling 1.0t finished steel 100 miles): 1.0 × £22 × 100 = £2,200.",
            "Transport saving = £7,200 − £2,200 = **£5,000** per tonne of finished steel (why bulk-reducing industries locate near raw materials!).",
          ],
          commonError: "Comparing £18 vs £22 without multiplying by the 4.0 tonnes of raw inputs!",
          traps: [
            {
              spec: { type: "number", value: 400 },
              feedback: "Remember it takes 4.0 TONNES of raw ore/coal (4 × £18 × 100 = £7,200) to make 1.0 tonne of finished steel (£2,200)!",
            },
          ],
          hints: [
            "Cost if steelworks sits at car plant = hauling 4.0 tonnes × £18 × 100 miles (£7,200).",
            "Cost if steelworks sits at mine = hauling 1.0 tonne × £22 × 100 miles (£2,200). Subtract!",
          ],
        },
        {
          id: "location-globalisation-external-p2-q09",
          kind: "short",
          difficulty: "warmup",
          guideRef: "globalisation-mncs",
          question:
            "What term describes an MNC sending most of its overseas factory's profits back to shareholders in its home country (*profit ____________*)?",
          answer: {
            type: "text",
            accept: [
              "repatriation",
              "profit repatriation",
            ],
            display: "repatriation",
          },
          solution: [
            "**Profit repatriation** drains potential reinvestment funds out of the host economy back to the MNC's home headquarters.",
          ],
          commonError: "Writing 'depreciation' or 'privatisation'.",
          hints: [
            "Starts with 'repatr-' — returning profits to the patria (homeland).",
          ],
        },
        {
          id: "location-globalisation-external-p2-q10",
          kind: "written",
          difficulty: "core",
          guideRef: "globalisation-mncs",
          question:
            "**Case Study — VoltShoe Plc (9,200 employees):** VoltShoe Plc is closing its athletic trainer factory in Portugal and opening a larger automated factory inside Indonesia (a fast-growing ASEAN economy with lower industrial wages and abundant natural rubber).\n\n**Outline** one reason why VoltShoe Plc chose Indonesia for its new trainer factory. *(2 marks)*",
          marks: 2,
          modelAnswer:
            "Locating in Indonesia cuts VoltShoe Plc's trainer unit costs through lower industrial wages and proximity to local natural rubber for shoe soles, while giving tariff-free access to ASEAN consumers.",
          markScheme: [
            {
              point: "Identifies lower labour cost, proximity to raw materials, or ASEAN market/tariff access.",
              keywords: ["wages", "labour", "raw materials", "asean", "unit costs"],
            },
            {
              point: "Applies explicitly to VoltShoe Plc's context (athletic trainers, shoe soles, natural rubber or Portugal).",
              keywords: ["trainer", "trainers", "rubber", "soles", "portugal"],
            },
          ],
          commonError: "Writing 'wages are lower' without linking to trainers or natural rubber.",
          hints: [
            "Pick one clear location pull factor and link it to *athletic trainers* or *natural rubber* for 2/2!",
            "Remember Outline = 1 point + 1 AO2 context word.",
          ],
        },
        {
          id: "location-globalisation-external-p2-q11",
          kind: "written",
          difficulty: "core",
          guideRef: "trade-exchange-rates",
          question:
            "**Explain** one way a government imposing an **import tariff** on foreign steel affects domestic car manufacturers. *(3 marks)*",
          marks: 3,
          modelAnswer:
            "An import tariff adds a percentage customs tax onto foreign sheet steel entering the country, raising its landed price (and allowing domestic steelmills to charge more too). Consequently, car manufacturers suffer higher variable raw-material costs per vehicle. This either squeezes their Operating Profit Margin or forces them to raise car prices and lose export competitiveness.",
          markScheme: [
            {
              point: "AO1: States that an import tariff taxes imported steel, raising its price.",
              keywords: ["tax", "customs", "landed price", "more expensive", "dearer"],
            },
            {
              point: "AO3 Link 1: Explains that carmakers face higher variable raw-material / Cost of Sales per car.",
              keywords: ["variable", "raw-material", "cost of sales", "per vehicle"],
            },
            {
              point: "AO3 Link 2: Connects to squeezed profit margins OR higher car prices hurting competitiveness.",
              keywords: ["margin", "squeezes", "car prices", "competitiveness"],
            },
          ],
          commonError: "Writing about steelmakers instead of answering how it affects **domestic car manufacturers** (who BUY steel as an input!).",
          hints: [
            "Read the target firm carefully: **car manufacturers** BUY steel as a raw material!",
            "Chain 3 steps: Tariff taxes imported steel → carmakers' unit material cost rises → margins fall or car prices rise.",
          ],
        },
        {
          id: "location-globalisation-external-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "globalisation-mncs",
          question:
            "**Case Study — PharmaCore Plc (18,000 employees):** PharmaCore Plc plans to invest $350 million building a vaccine manufacturing and R&D campus near Kuala Lumpur, Malaysia, hiring 1,100 local biochemists and technicians.\n\n**Analyse** two **positive** impacts of PharmaCore Plc's investment on **Malaysia as the host country**. *(6 marks)*",
          marks: 6,
          modelAnswer:
            "First, hiring 1,100 Malaysian biochemists and technicians directly lowers graduate unemployment and injects high-skilled salaries into Kuala Lumpur. As those workers spend wages in local housing, cafés and retail, a positive multiplier effect boosts wider Malaysian GDP and income tax receipts.\n\nSecond, establishing a $350m vaccine R&D campus transfers advanced sterile biotechnology know-how and training to local Malaysian scientists and laboratory suppliers. Upgrading workforce skills raises Malaysia's long-run productivity and attracts further high-tech healthcare FDI.",
          markScheme: [
            {
              point: "Positive Impact 1: High-skilled job creation & rising household incomes / local multiplier / tax receipts.",
              keywords: ["unemployment", "salaries", "wages", "multiplier", "tax"],
            },
            {
              point: "AO2 context integrated in Strand 1 (1,100 biochemists/technicians, Kuala Lumpur, $350m).",
              keywords: ["1,100", "biochemists", "kuala lumpur", "350m", "350 million"],
            },
            {
              point: "Positive Impact 2: Skills & technology transfer to local scientists and domestic suppliers (or export balance of payments boost).",
              keywords: ["skills", "technology transfer", "training", "know-how", "suppliers"],
            },
            {
              point: "AO2 context integrated in Strand 2 (vaccine R&D campus, sterile biotechnology, healthcare).",
              keywords: ["vaccine", "biotechnology", "sterile", "healthcare", "campus"],
            },
            {
              point: "Developed chain 2: Higher long-run labour productivity / attracts future high-value FDI.",
              keywords: ["productivity", "fdi", "long-run"],
            },
            {
              point: "Both strands strictly analyse HOST COUNTRY (Malaysia) benefits rather than PharmaCore's own profits.",
              keywords: ["malaysia", "malaysian"],
            },
          ],
          commonError: "Analysing benefits to PharmaCore Plc (lower costs) instead of benefits to **Malaysia (the host country)**!",
          hints: [
            "Stay 100% focused on **Malaysia (the host country)** — zero marks for PharmaCore's own profits!",
            "Chain 1: 1,100 biochemist jobs in Kuala Lumpur → local wage spending multiplier & tax receipts.",
            "Chain 2: $350m vaccine R&D campus → biotech skills & tech transfer → higher long-run productivity.",
          ],
        },
        {
          id: "location-globalisation-external-p2-q13",
          kind: "written",
          difficulty: "challenge",
          guideRef: "trade-exchange-rates",
          question:
            "**Case Study — Heritage Cycles Plc (640 employees):** Heritage Cycles Plc hand-builds lightweight titanium road bikes in Birmingham priced at **£3,200** each, exporting **70% of output** to cycling clubs in the USA and Japan. However, Heritage Cycles **imports 100% of its aerospace titanium tubing** from US mills and carbon gearsets from Japan (accounting for 45% of Cost of Sales). Over the past year the pound **appreciated by 18%** against both the US dollar and Japanese yen.\n\n**Evaluate** whether this 18% appreciation of the pound will significantly reduce Heritage Cycles Plc's annual profit. *(12 marks)*",
          marks: 6,
          modelAnswer:
            "Under SPICED (Strong Pound Imports Cheaper Exports Dearer), an 18% stronger pound makes a £3,200 Birmingham road bike 18% more expensive in US dollars and Japanese yen. Because 70% of Heritage Cycles' bikes are exported to US and Japanese cycling clubs, overseas rivals become relatively cheaper — threatening a sharp fall in export volume unless Heritage cuts its sterling price and sacrifices profit margin.\n\nHowever, the exact same 18% appreciation slashes the sterling cost of imported US aerospace titanium tubing and Japanese carbon gearsets, which represent 45% of Cost of Sales! Cheaper imported components directly lower variable unit costs, cushioning Gross Profit Margin. Furthermore, hand-built £3,200 titanium road bikes target affluent enthusiast cyclists whose demand is likely relatively price inelastic thanks to British heritage branding.\n\nOverall, the 18% pound appreciation will **moderately reduce, rather than devastate**, Heritage Cycles' profit (**AJIM**), because losing revenue on 70% of total sales outweighs saving 18% on only 45% of Cost of Sales. Crucially, **it depends on** the Price Elasticity of Demand of US/Japanese club cyclists: if Heritage's hand-built titanium USP keeps demand price inelastic, export volume will barely dip while cheaper imported tubing actually widens unit margins!",
          markScheme: [
            {
              point: "Case FOR Profit Fall (SPICED Export hit): 18% stronger pound makes £3,200 bikes dearer in $ and ¥ across 70% of sales.",
              keywords: ["spiced", "dearer", "70%", "3,200", "yen", "dollars"],
            },
            {
              point: "Case AGAINST / Cushion 1 (SPICED Import gain): Cheaper imported US titanium tubing & Japanese gearsets cuts 45% of Cost of Sales.",
              keywords: ["titanium", "gearsets", "45%", "cost of sales", "cheaper"],
            },
            {
              point: "Case AGAINST / Cushion 2 (PED): Hand-built £3,200 enthusiast bikes enjoy brand differentiation & relatively price-inelastic demand.",
              keywords: ["inelastic", "hand-built", "enthusiast", "differentiation"],
            },
            {
              point: "Quantitative weight comparison: 70% of total revenue exposed vs 45% of Cost of Sales cushioned.",
              keywords: ["outweighs", "moderately", "revenue"],
            },
            {
              point: "Decisive AJIM verdict avoiding a 50/50 fence-sit.",
              keywords: ["overall"],
            },
            {
              point: "Sharp 'It depends on' contingency anchored on overseas PED (or currency hedging).",
              keywords: ["it depends on", "price elasticity"],
            },
          ],
          commonError: "Writing a one-sided 'exports get dearer so profit crashes' answer and completely missing the planted clue that **titanium & gearsets are imported**!",
          hints: [
            "**Spot the planted two-way trade clue!** Heritage exports 70% of bikes AND imports 45% of Cost of Sales (US titanium + Japanese gearsets)!",
            "Also ask: how price-sensitive are wealthy cyclists buying a £3,200 hand-built titanium bike (**PED**)?",
            "Weigh 70% export revenue exposure against 45% imported component savings + PED in your **AJIM** conclusion!",
          ],
        },
        {
          id: "location-globalisation-external-p2-q14",
          kind: "short",
          difficulty: "core",
          guideRef: "government-policies",
          question:
            "What two-word economic policy category covers government decisions on **taxation** and **public spending** (as opposed to central-bank monetary policy on interest rates)?",
          answer: {
            type: "text",
            accept: ["fiscal policy", "fiscal"],
            display: "fiscal policy",
          },
          solution: [
            "Taxation and government expenditure form **fiscal policy**, whereas interest rates and money supply form **monetary policy**.",
          ],
          commonError: "Confusing fiscal policy (tax & spending) with monetary policy (interest rates).",
          traps: [
            {
              spec: { type: "text", accept: ["monetary policy", "monetary"] },
              feedback: "Monetary policy is central-bank interest rates; government tax & spending is FISCAL policy!",
            },
          ],
          hints: [
            "Starts with 'f' — contrasts with monetary policy.",
            "Covers Income Tax, Corporation Tax, VAT and infrastructure spending.",
          ],
        },
        {
          id: "location-globalisation-external-p2-q15",
          kind: "short",
          difficulty: "core",
          guideRef: "external-pestle-ethics",
          question:
            "What single word names an illegal secret agreement between rival businesses to fix high prices or divide markets rather than competing fairly (banned under competition law)?",
          answer: {
            type: "text",
            accept: ["cartel", "cartels", "collusion", "price-fixing cartel"],
            display: "cartel",
          },
          solution: [
            "A **cartel** (collusive price-fixing ring) artificially inflates prices for consumers and is heavily fined under competition law.",
          ],
          commonError: "Writing 'joint venture' (which is a legal, transparent project partnership).",
          hints: [
            "Starts with 'c' — secret price-fixing ring banned by competition authorities.",
            "Also described as collusion.",
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "location-globalisation-external-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "trade-exchange-rates",
      question:
        "Precision Optics Ltd (in Oxford) imports German lenses at **€180 per camera**, incurs **£140** UK assembly cost per camera, and exports finished cameras to the USA at a fixed dollar contract price of **$650 per camera**. Last quarter **£1 = €1.20** and **£1 = $1.30**. This quarter the pound moves to **£1 = €1.25** and **£1 = $1.25**. Calculate the **increase in gross profit (£) per camera** from last quarter to this quarter.",
      answer: { type: "number", value: 26, display: "£26" },
      solution: [
        "Last quarter: £ revenue = $650 ÷ 1.30 = £500; £ lens cost = €180 ÷ 1.20 = £150; assembly = £140 → Profit = £500 − £150 − £140 = £210.",
        "This quarter: £ revenue = $650 ÷ 1.25 = £520; £ lens cost = €180 ÷ 1.25 = £144; assembly = £140 → Profit = £520 − £144 − £140 = £236.",
        "Increase in profit per camera = £236 − £210 = **£26** (+£20 from weaker £/$ + £6 from stronger £/€!).",
      ],
      commonError: "Multiplying instead of dividing on $650 or €180, or giving £236 instead of the £26 change.",
      traps: [
        {
          spec: { type: "number", value: 236 },
          feedback: "£236 is this quarter's profit per camera — subtract last quarter's £210 to get the £26 increase!",
        },
        {
          spec: { type: "number", value: 14 },
          feedback: "Check signs: £/$ weakened ($1.30 → $1.25, adding £20 revenue) AND £/€ strengthened (€1.20 → €1.25, saving £6 on lenses): 20 + 6 = £26!",
        },
      ],
      hints: [
        "Convert BOTH foreign figures into £ by DIVIDING: $650 ÷ ($/£ rate) for revenue, and €180 ÷ (€/£ rate) for lens cost.",
        "Last quarter profit = (650/1.30) − (180/1.20) − 140 = 500 − 150 − 140 = £210.",
        "This quarter profit = (650/1.25) − (180/1.25) − 140 = 520 − 144 − 140 = £236. Subtract!",
      ],
    },
    {
      id: "location-globalisation-external-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "trade-exchange-rates",
      question:
        "VeloImport Ltd buys e-bikes from Taiwan at **$600 each** when **£1 = $1.20** and sells them in the UK for **£750 each**. Today the UK imposes a **16% import tariff** on the e-bikes, AND the pound appreciates to **£1 = $1.25**. If VeloImport Ltd keeps its UK retail price at **£750**, calculate its **new gross profit (£) per e-bike** (to 2 d.p. if needed).",
      answer: { type: "number", value: 193.2, tolerance: 0.01, display: "£193.20" },
      solution: [
        "New pre-tariff sterling cost at £1 = $1.25: $600 ÷ 1.25 = £480.00.",
        "Add 16% import tariff: £480.00 × 1.16 = £556.80 landed cost.",
        "New gross profit per e-bike = £750.00 − £556.80 = **£193.20** (down from £250.00 before).",
      ],
      commonError: "Applying the 16% tariff at the old $1.20 rate (£580 → £170) or forgetting the tariff (£270).",
      traps: [
        {
          spec: { type: "number", value: 556.8, tolerance: 0.01 },
          feedback: "£556.80 is the landed import cost — subtract it from the £750 retail price to get gross profit (£193.20)!",
        },
        {
          spec: { type: "number", value: 170 },
          feedback: "Remember the pound also appreciated to £1 = $1.25 ($600 ÷ 1.25 = £480 before the 16% tariff)!",
        },
      ],
      hints: [
        "Step 1: Convert $600 at the NEW rate £1 = $1.25 ($600 ÷ 1.25 = £480).",
        "Step 2: Multiply £480 by 1.16 to include the 16% import tariff (£556.80).",
        "Step 3: Subtract £556.80 from the £750 selling price.",
      ],
    },
    {
      id: "location-globalisation-external-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "location-decisions",
      question:
        "EuroAuto Plc sells **40,000 cars per year** into Trade Bloc B at **€25,000 per car**. Currently it builds them outside the bloc (`variable cost €16,000/car`; `existing factory fixed costs €140m/yr`) and pays a **15% import tariff** on the €16,000 customs transfer value of every car entering Bloc B. Alternatively, building an MNC plant **inside Bloc B** eliminates the 15% tariff completely, raises variable labour cost to **€17,200/car**, and has plant fixed costs of **€165m/yr** (replacing the €140m plant). By how many **€ millions per year** does locating inside Bloc B **increase** EuroAuto Plc's annual operating profit?",
      answer: { type: "number", value: 23, display: "€23 million" },
      solution: [
        "Tariff saved per car = 15% × €16,000 = €2,400/car.",
        "Extra variable labour cost inside Bloc B = €17,200 − €16,000 = €1,200/car.",
        "Net variable saving per car = €2,400 − €1,200 = €1,200/car → across 40,000 cars = €48,000,000 (€48m).",
        "Deduct higher annual plant fixed costs (€165m − €140m = €25m): €48m − €25m = **€23 million** higher profit!",
      ],
      commonError: "Forgetting to deduct the €25m higher annual fixed cost (€48m) or applying the 15% tariff to €25,000 instead of the stated €16,000 customs transfer value.",
      traps: [
        {
          spec: { type: "number", value: 48 },
          feedback: "€48m is the variable tariff-minus-labour gain — don't forget fixed plant costs rise from €140m to €165m (−€25m)!",
        },
      ],
      hints: [
        "Step 1: Tariff per car currently = 15% × €16,000 = €2,400, so current landed VC = €16,000 + €2,400 = €18,400/car.",
        "Step 2: Inside Bloc B, VC = €17,200/car (saving €1,200/car × 40,000 cars = €48m/yr).",
        "Step 3: Subtract the extra €25m fixed cost (€165m − €140m) from €48m!",
      ],
    },
    {
      id: "location-globalisation-external-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "government-policies",
      question:
        "LuxurySofa Ltd sells sofas at **£2,000** (excluding VAT), with variable cost **£1,100** and fixed overheads **£1,200,000**. It carries a **£3,000,000** variable-rate loan. Last year it sold **2,500 sofas** at **4% loan interest** and **20% corporation tax**. This year an interest-rate hike to **7%** cuts sofa sales volume by **12%**, while corporation tax rises to **25%**. By how much (£) does LuxurySofa Ltd's **after-tax profit fall** from last year to this year?",
      answer: { type: "number", value: 316500, display: "£316,500" },
      solution: [
        "Unit contribution = £2,000 − £1,100 = £900.",
        "**Last year:** Contribution = 2,500 × £900 = £2,250,000; Op Profit = £2,250,000 − £1,200,000 = £1,050,000; Interest (4% × £3m) = £120,000 → PBT = £930,000 → After 20% tax = £930,000 × 0.80 = **£744,000**.",
        "**This year:** Volume (−12%) = 2,500 × 0.88 = 2,200 sofas; Contribution = 2,200 × £900 = £1,980,000; Op Profit = £1,980,000 − £1,200,000 = £780,000; Interest (7% × £3m) = £210,000 → PBT = £570,000 → After 25% tax = £570,000 × 0.75 = **£427,500**.",
        "Fall in after-tax profit = £744,000 − £427,500 = **£316,500**.",
      ],
      commonError: "Forgetting to reduce sales volume by 12% or giving £427,500 (new after-tax profit) instead of the £316,500 drop.",
      traps: [
        {
          spec: { type: "number", value: 427500 },
          feedback: "£427,500 is this year's after-tax profit — subtract it from last year's £744,000 to find the fall (£316,500)!",
        },
        {
          spec: { type: "number", value: 360000 },
          feedback: "£360,000 is the fall in Profit Before Tax (£930k → £570k) — apply 20% tax last year and 25% tax this year first!",
        },
      ],
      hints: [
        "Compute Last Year after-tax profit first: ((2,500 × £900) − £1.2m − £120k) × 0.80 = £744,000.",
        "Compute This Year after-tax profit: ((2,200 × £900) − £1.2m − £210k) × 0.75 = £427,500.",
        "Subtract £427,500 from £744,000!",
      ],
    },
    {
      id: "location-globalisation-external-ch-q05",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "government-policies",
      question:
        "A machine costs **£400,000** and is forecast to generate **£28,000 per year** in extra annual operating profit (`expected ROCE = 7.0%`). When central-bank hikes push bank business loan interest rates from **4.5% to 8.2%**, why does a rational finance director cancel the debt-funded machine purchase?",
        options: [
          "Because the 8.2% annual cost of borrowing (£32,800/yr interest) now exceeds the 7.0% (£28,000/yr) operating return, reducing Profit Before Tax by £4,800 every year",
          "Because machines cannot legally be bought when interest rates exceed 5%",
          "Because higher interest rates reduce annual depreciation to zero",
          "Because a 7.0% ROCE is higher than an 8.2% loan interest rate",
        ],
        answerIndex: 0,
        explanation:
          "Debt-financed capital investment adds value only when **expected ROCE > interest rate on the loan**: at 8.2%, annual loan interest ({{£32800}}) exceeds the machine's operating return ({{£28000}}), destroying £4,800/yr of pre-tax profit!",
        hints: [
          "Compare annual operating profit gained (£28,000 = 7.0%) against annual loan interest at 8.2% (£400,000 × 0.082 = £32,800)!",
          "Would you borrow at 8.2% to invest in a project yielding 7.0%?",
          "This ROCE-vs-loan-rate link connects Strand 1 policy directly to Strand 3 finance!",
        ],
      },
    {
      id: "location-globalisation-external-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "globalisation-mncs",
      question:
        "GlobalTex Plc operates a garment plant in Country B generating **$60 million** revenue. It pays **$18 million** in local wages, **$14 million** to local fabric mills, and **$8 million** for imported dyes. Country B charges **20% corporation tax** on operating profit, and GlobalTex **repatriates 85%** of after-tax profit abroad. Calculate the **total gross money retained inside Country B's economy** from wages, local mill orders, corporation tax AND un-repatriated retained profit combined (in **$ millions**, to 1 d.p.).",
      answer: { type: "number", value: 38.4, tolerance: 0.05, display: "$38.4 million" },
      solution: [
        "Operating profit = $60m − ($18m + $14m + $8m) = $20m.",
        "Host corporation tax (20% of $20m) = $4.0m → After-tax profit = $16.0m.",
        "Un-repatriated profit kept in Country B (15% of $16.0m) = $2.4m.",
        "Total retained in Country B = $18.0m (wages) + $14.0m (local mills) + $4.0m (tax) + $2.4m (retained profit) = **$38.4 million** (even with 85% profit repatriation!).",
      ],
      commonError: "Counting only the $2.4m retained profit and forgetting $18m local wages, $14m local supplier orders and $4m host tax!",
      traps: [
        {
          spec: { type: "number", value: 2.4 },
          feedback: "$2.4m is only the un-repatriated profit — add $18m wages, $14m local mill orders and $4m host tax!",
        },
        {
          spec: { type: "number", value: 46.4 },
          feedback: "Exclude the $8m spent on IMPORTED dyes (that money leaks abroad, not into Country B)!",
        },
      ],
      hints: [
        "First find operating profit: $60m − $18m − $14m − $8m = $20m.",
        "Host tax = 20% × $20m = $4.0m; un-repatriated local profit = 15% × $16.0m = $2.4m.",
        "Sum all four host inflows: $18m wages + $14m local mills + $4.0m tax + $2.4m retained profit!",
      ],
    },
    {
      id: "location-globalisation-external-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "location-decisions",
      question:
        "**Case Study — Artisanal Chocolatier 'Velvet Bean Ltd' (34 employees):** Velvet Bean Ltd hand-tempers luxury gift chocolates in Bath, currently operating both its kitchen and flagship boutique in a prime Georgian city-centre townhouse (combined rent £115,000/yr). With online gift orders now reaching 55% of revenue, the operations manager proposes closing the Bath city-centre townhouse and moving everything to an industrial food park 8 miles outside Bath (rent £32,000/yr, next to the M4 motorway).\n\n**Assess** whether Velvet Bean Ltd should relocate completely to the out-of-town food park. *(9 marks)*",
      marks: 6,
      modelAnswer:
        "Relocating to the M4 industrial food park slashes annual fixed rent by £83,000 (from £115,000 down to £32,000), lowering Velvet Bean Ltd's break-even output substantially. Because 55% of revenue already comes from online gift orders, fast M4 motorway courier access speeds up nationwide refrigerated dispatch while giving 34 chocolatiers room to expand tempering capacity.\n\nHowever, closing the prime Georgian Bath townhouse sacrifices the remaining 45% of revenue driven by wealthy Bath tourists and impulse gift shoppers! Luxury hand-tempered chocolates rely heavily on heritage prestige; losing a visible Bath boutique could erode brand equity and hike online customer-acquisition ad costs.\n\nOverall, Velvet Bean Ltd should **split** rather than fully abandon Bath (**AJIM**): move the space-hungry 34-staff tempering kitchen and online fulfilment to the £32,000 food park, while keeping a tiny, lower-rent Bath tasting kiosk to preserve tourist sales and luxury brand cachet. **It depends on** how much of the 45% walk-in revenue comes from one-off Bath tourists who would never order online without seeing the shopfront.",
      markScheme: [
        {
          point: "Case FOR Relocation: Saves £83,000/yr fixed rent (£115k → £32k) + M4 courier speed for the 55% online orders.",
          keywords: ["83,000", "32,000", "55%", "m4", "online", "fixed"],
        },
        {
          point: "Case AGAINST Relocation: Threatens 45% walk-in Bath tourist gift sales + damages luxury Georgian brand image.",
          keywords: ["45%", "tourists", "bath", "georgian", "luxury", "brand"],
        },
        {
          point: "Rich AO2 numbers and context woven throughout (34 chocolatiers, hand-tempered chocolates, £115k vs £32k).",
          keywords: ["chocolates", "34", "115,000", "tempering"],
        },
        {
          point: "Strategic AJIM synthesis (e.g. splitting kitchen/fulfilment out of town while retaining a compact Bath boutique).",
          keywords: ["overall", "split", "kiosk"],
        },
        {
          point: "'It depends on' tourist impulse share of the 45% physical sales vs online retention.",
          keywords: ["it depends on", "impulse"],
        },
        {
          point: "Sustained two-sided evaluation rather than generic location checklist.",
          keywords: ["however", "break-even"],
        },
      ],
      commonError: "Focusing only on the £83,000 rent saving and ignoring that **45% of revenue** still comes from walk-in Bath shoppers!",
      hints: [
        "Compute the exact rent saving (£115,000 − £32,000 = £83,000) AND spot the 55% online vs 45% walk-in split!",
        "What happens to luxury brand prestige and the 45% Bath tourist gift sales if the Georgian boutique shuts?",
        "Propose a smart **AJIM** hybrid (kitchen on M4 food park + tiny Bath tasting shopfront)!",
      ],
    },
    {
      id: "location-globalisation-external-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "globalisation-mncs",
      question:
        "**Case Study — CobaltPeak Mining Plc (6,500 employees):** CobaltPeak Mining Plc proposes a $900 million open-cast cobalt mine in a rural province of Country Z (a developing economy where youth unemployment is 28%), promising 2,200 jobs and a new paved highway to the coast. Environmental pressure groups warn that chemical run-off threatens local farmland and that 80% of CobaltPeak's profits will be repatriated to London.\n\n**Evaluate** whether Country Z's government should approve CobaltPeak Mining Plc's mine. *(12 marks)*",
      marks: 6,
      modelAnswer:
        "Approving the $900m FDI project directly creates 2,200 formal jobs in a rural province suffering 28% youth unemployment, injecting steady wages that spark a local multiplier across shops and housing. Furthermore, CobaltPeak's paved coastal highway upgrades Country Z's primary/secondary infrastructure for other domestic exporters while generating royalty and payroll taxes plus foreign-exchange export earnings.\n\nConversely, extractive open-cast mining carries severe, irreversible externalities: toxic chemical run-off could poison local rivers and destroy smallholder farming livelihoods long after cobalt reserves are exhausted. Moreover, repatriating 80% of after-tax profits to London drains wealth out of Country Z, while capital-intensive mining transfers fewer transferable high-tech skills than manufacturing.\n\nOverall, Country Z's government **should approve** the project conditionally (**AJIM**), because leaving 28% rural youth unemployment unaddressed entrenches poverty and Country Z lacks $900m of domestic capital to build highways or mines alone. Crucially, **it depends on** enforceable contractual safeguards: approval must mandate lined zero-run-off tailings dams backed by an upfront environmental cleanup bond, minimum local mineral-processing quotas, and mineral royalties that capture value before profit repatriation.",
      markScheme: [
        {
          point: "Case FOR Approval: 2,200 jobs tackling 28% youth unemployment + local multiplier + $900m highway infrastructure & export taxes.",
          keywords: ["2,200", "28%", "unemployment", "highway", "multiplier", "900m"],
        },
        {
          point: "Case AGAINST Approval: Chemical run-off ruining rural farmland + non-renewable resource depletion + 80% profit repatriation to London.",
          keywords: ["run-off", "farmland", "80%", "repatriated", "repatriation", "exhausted"],
        },
        {
          point: "Nuanced sectoral insight: Extractive primary mining transfers fewer skills and leaves permanent land scars compared with clean manufacturing.",
          keywords: ["extractive", "open-cast", "cobalt", "skills"],
        },
        {
          point: "Clear AJIM decision weighing urgent poverty/infrastructure needs against environmental harm.",
          keywords: ["overall", "approve"],
        },
        {
          point: "High-level 'It depends on' host-government bargaining conditions (environmental bond, tailings regulation, mineral royalties/local processing).",
          keywords: ["it depends on", "safeguards", "royalties", "bond"],
        },
        {
          point: "Consistent host-country macroeconomic & stakeholder evaluation throughout.",
          keywords: ["country z", "london"],
        },
      ],
      commonError: "Sitting on the fence or forgetting to address BOTH the 80% profit repatriation AND the environmental chemical run-off!",
      hints: [
        "Use every figure in the extract: *$900m FDI*, *2,200 jobs*, *28% youth unemployment*, *coastal highway*, *chemical run-off on farmland*, *80% profit repatriation*!",
        "Contrast short/medium-term jobs & infrastructure against permanent environmental harm & resource depletion.",
        "Land a Grade 9 **AJIM** verdict: approve *only if* legally bound by upfront environmental bonds, lined waste dams and mineral royalties!",
      ],
    },
  ],
};
