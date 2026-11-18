import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "business-activity-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "business-objectives",
      question:
        "Which of the following is the clearest example of a **SMART** business objective for a 22-employee craft bakery?",
      options: [
        "Sell lots more sourdough bread to local cafés soon",
        "Become the most loved bakery in the country one day",
        "Increase monthly wholesale sourdough revenue by 12% across Bristol cafés within 6 months",
        "Try to keep costs down whenever possible",
      ],
      answerIndex: 2,
      explanation:
        "*'Increase monthly wholesale sourdough revenue by 12% across Bristol cafés within 6 months'* is **Specific** (wholesale sourdough in Bristol), **Measurable** (+12%), **Achievable/Relevant**, and **Time-bound** (within 6 months).",
      hints: [
        "Look for both a clear numerical measure (%) and a clear deadline!",
      ],
    },
    {
      id: "business-activity-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "unincorporated-incorporated",
      question:
        "State the type of liability (one word before *'liability'*, or the two-word phrase) held by shareholders in a **Private Limited Company (`Ltd`)**.",
      answer: {
        type: "text",
        accept: ["limited liability", "limited"],
        display: "limited liability",
      },
      solution: [
        "Private limited companies (`Ltd`) and public limited companies (`Plc`) are **incorporated**, giving their shareholders **limited liability** (maximum loss = share capital invested).",
      ],
      commonError: "Writing 'unlimited liability' — unlimited liability applies to unincorporated sole traders and ordinary partnerships.",
      traps: [
        {
          spec: { type: "text", accept: ["unlimited liability", "unlimited"] },
          feedback: "Careful! Unlimited liability applies to sole traders and partnerships; incorporated Ltd companies protect shareholders with LIMITED liability.",
        },
      ],
      hints: [
        "An incorporated `Ltd` has a separate legal identity shielding personal homes and savings.",
      ],
    },
    {
      id: "business-activity-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "business-objectives",
      question:
        "Velvet Tea Ltd generates annual sales of **£450,000** in a speciality loose-leaf tea market worth **£3,000,000** in total. Calculate Velvet Tea Ltd's **market share** as a percentage.",
      answer: { type: "number", value: 15, display: "15%" },
      solution: [
        "Market Share (%) = {{(Firm Sales / Total Market Sales) * 100}}.",
        "Substitute: (£450,000 ÷ £3,000,000) × 100 = 0.15 × 100 = **15%**.",
      ],
      commonError: "Dividing 450,000 by 3,000,000 to get 0.15 and forgetting to multiply by 100 for a percentage.",
      traps: [
        {
          spec: { type: "number", value: 0.15 },
          feedback: "0.15 is the decimal proportion — multiply by 100 to give the percentage (15%)!",
        },
      ],
      hints: [
        "Formula: (Firm's Sales ÷ Total Market Sales) × 100.",
        "Compute 450,000 ÷ 3,000,000 × 100.",
      ],
    },
    {
      id: "business-activity-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "stakeholders-conflicts",
      question:
        "Which pair represents **one internal stakeholder** followed by **one external stakeholder**?",
      options: [
        "Customers and Local Community",
        "Managers and Suppliers",
        "Government and Commercial Banks",
        "Suppliers and Trade Creditors",
      ],
      answerIndex: 1,
      explanation:
        "**Managers** work inside the firm (**internal**), whereas **suppliers** are separate businesses selling inputs from outside (**external**).",
      hints: [
        "Internal = owners/shareholders, managers, employees.",
        "Check the first group in each pair to see which one sits inside the firm.",
      ],
    },
    {
      id: "business-activity-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "franchises-social-public",
      question:
        "Owen operates a `PizzaPod` branch as a franchisee. His annual revenue is **£280,000**, local running costs are **£215,000**, and he pays an **8% ongoing royalty on revenue** to the franchisor. Calculate Owen's annual operating profit, in £.",
      answer: { type: "number", value: 42600, display: "£42,600" },
      solution: [
        "Franchisor royalty = 8% × £280,000 = £22,400.",
        "Total branch costs = £215,000 + £22,400 = £237,400.",
        "Operating profit = £280,000 − £237,400 = **£42,600**.",
      ],
      commonError: "Calculating the 8% royalty on (£280,000 − £215,000 = £65,000) instead of on £280,000 revenue.",
      traps: [
        {
          spec: { type: "number", value: 59800 },
          feedback: "Trap! Franchise royalties are charged on total REVENUE (£280,000 × 8% = £22,400), not on the £65,000 pre-royalty surplus!",
        },
        {
          spec: { type: "number", value: 22400 },
          feedback: "£22,400 is the royalty paid to the franchisor — subtract both £215,000 and £22,400 from £280,000!",
        },
      ],
      hints: [
        "First find 8% of £280,000 revenue.",
        "Subtract local running costs (£215,000) and the royalty from £280,000.",
      ],
    },
    {
      id: "business-activity-quiz-q06",
      kind: "short",
      difficulty: "warmup",
      guideRef: "unincorporated-incorporated",
      question:
        "What is the name of the legal document that partners sign to agree capital contributions, duties and profit-sharing ratios?",
      answer: {
        type: "text",
        accept: [
          "deed of partnership",
          "partnership deed",
          "partnership agreement",
        ],
        display: "Deed of Partnership",
      },
      solution: [
        "A **Deed of Partnership** (or partnership agreement) sets out how profits/losses are shared, capital contributed, responsibilities and rules when partners join or leave.",
      ],
      commonError: "Confusing a Deed of Partnership with Memorandum/Articles of Association (used for incorporated companies).",
      hints: [
        "Three-word legal phrase: '____ of Partnership'.",
      ],
    },
    {
      id: "business-activity-quiz-q07",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "sectors-and-success",
      question:
        "A commercial law firm providing legal advice to tech start-ups operates in which sector of the economy?",
      options: ["Primary sector", "Secondary sector", "Tertiary sector", "Extractive sector"],
      answerIndex: 2,
      explanation:
        "Providing professional legal advice is a commercial **service**, placing the law firm in the **tertiary sector**.",
      hints: [
        "Primary extracts raw materials; Secondary manufactures goods; Tertiary provides services.",
      ],
    },
    {
      id: "business-activity-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "sectors-and-success",
      question:
        "In Economy R, total GDP is **$250 billion**. Primary output is **$15 billion** and secondary output is **$55 billion**. Calculate the percentage of GDP produced by the **tertiary sector**.",
      answer: { type: "number", value: 72, display: "72%" },
      solution: [
        "Tertiary output = $250bn − ($15bn + $55bn) = $180bn.",
        "Tertiary % = (180 ÷ 250) × 100 = **72%**.",
      ],
      commonError: "Giving $180bn without converting into a percentage of $250bn.",
      traps: [
        {
          spec: { type: "number", value: 180 },
          feedback: "$180bn is the dollar output — divide by $250bn and multiply by 100 to find the percentage!",
        },
        {
          spec: { type: "number", value: 28 },
          feedback: "28% is the combined primary + secondary share; subtract from 100% for the tertiary sector (72%).",
        },
      ],
      hints: [
        "Subtract $15bn and $55bn from $250bn first.",
        "Divide $180bn by $250bn and multiply by 100.",
      ],
    },
    {
      id: "business-activity-quiz-q09",
      kind: "written",
      difficulty: "core",
      guideRef: "stakeholders-conflicts",
      question:
        "**Case Study — TimberLine Ltd (35 employees):** TimberLine Ltd manufactures bespoke wooden garden offices in Devon. To boost operating profit, directors plan to switch from certified local British oak to cheaper imported softwood and freeze carpenter wages for 12 months.\n\n**Outline** one stakeholder conflict this plan creates at TimberLine Ltd. *(2 marks)*",
      marks: 2,
      modelAnswer:
        "Shareholders gain higher short-term profit margins from cheaper softwood and frozen pay, whereas skilled carpenters suffer falling real income when their garden-office wages fail to keep pace with inflation.",
      markScheme: [
        {
          point: "Identifies a valid clash between two stakeholders (e.g. shareholders/owners gaining higher profit vs employees losing real pay, or local oak suppliers/customers losing quality).",
          keywords: ["shareholders", "employees", "carpenters", "suppliers", "customers", "profit", "real income", "quality"],
        },
        {
          point: "Applies directly to TimberLine Ltd's context (carpenters, wooden garden offices, oak, softwood or Devon).",
          keywords: ["carpenters", "garden", "oak", "softwood", "wooden", "devon"],
        },
      ],
      commonError: "Writing 'workers want more pay and owners want profit' with zero reference to carpenters, oak/softwood or garden offices (caps at 1/2!).",
      hints: [
        "Remember Edexcel's 2-mark *Outline* rule: 1 conflict point + 1 contextual word from TimberLine Ltd!",
        "Name two stakeholder groups (e.g. shareholders vs carpenters, or shareholders vs local oak suppliers).",
      ],
    },
    {
      id: "business-activity-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "unincorporated-incorporated",
      question:
        "**Explain** one advantage to a sole trader of converting their growing business into a **Private Limited Company (`Ltd`)**. *(3 marks)*",
      marks: 3,
      modelAnswer:
        "Incorporating creates a separate legal identity with limited liability for the founder. This means that if the company collapses with unpaid debts, creditors cannot seize personal assets such as the owner's house or savings. Consequently, the entrepreneur feels greater confidence to invest in expansion and take calculated commercial risks.",
      markScheme: [
        {
          point: "AO1 Knowledge: Identifies a valid advantage of an Ltd (e.g. limited liability / separate legal identity / raising equity from private shareholders).",
          keywords: ["limited liability", "separate legal", "private investors", "share capital"],
        },
        {
          point: "AO3 Link 1: Explains the legal mechanism (personal assets/house/savings are protected beyond share capital invested).",
          keywords: ["personal assets", "house", "savings", "seize", "protected", "capped"],
        },
        {
          point: "AO3 Link 2: Develops the business impact (greater confidence to expand, borrow or attract private equity without risking personal ruin).",
          keywords: ["confidence", "expand", "expansion", "risk", "invest", "attract"],
        },
      ],
      commonError: "Stopping after 'they get limited liability so they don't lose personal money' (2/3) without adding the third step showing how that helps the business grow or take risks.",
      hints: [
        "Generic 3-mark *Explain* = 1 point + 2 linked cause-and-effect steps!",
        "Start with **limited liability**, explain how **personal house/savings** are protected, then state why that encourages **risk-taking/expansion**.",
      ],
    },
  ],
  papers: [
    {
      id: "business-activity-p1",
      title: "Practice Paper 1 — Investigating Small Business (<50 Employees)",
      questions: [
        {
          id: "business-activity-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "business-objectives",
          question:
            "In the **SMART** objectives acronym, what word does the letter **M** stand for?",
          answer: {
            type: "text",
            accept: ["measurable"],
            display: "Measurable",
          },
          solution: [
            "**SMART** stands for Specific, **Measurable**, Achievable, Relevant, Time-bound.",
          ],
          commonError: "Writing 'Manageable' or 'Marketable' instead of **Measurable**.",
          traps: [
            {
              spec: { type: "text", accept: ["manageable", "marketable", "monetary"] },
              feedback: "Careful! In SMART targets, M stands for MEASURABLE (quantified with a number, % or £).",
            },
          ],
          hints: [
            "Think about why 'increase sales by 15%' works better than 'increase sales'.",
          ],
        },
        {
          id: "business-activity-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "unincorporated-incorporated",
          question:
            "Leila runs an unincorporated dog-grooming parlour as a sole trader. She invested **£9,000** at launch. Her parlour closes owing **£34,000** to creditors, while its equipment sells for **£11,000**. How much **extra personal money** must Leila pay from her personal savings to settle the remaining business debts, in £?",
          answer: { type: "number", value: 23000, display: "£23,000" },
          solution: [
            "Equipment sale proceeds cover £11,000 of the £34,000 debt.",
            "Unpaid business debt = £34,000 − £11,000 = **£23,000**.",
            "Under **unlimited liability**, Leila must pay the full £23,000 shortfall from personal funds.",
          ],
          commonError: "Writing £0 (confusing sole trader with an Ltd) or forgetting to subtract the £11,000 asset sale.",
          traps: [
            {
              spec: { type: "number", value: 0 },
              feedback: "£0 applies to an Ltd with limited liability! As an unincorporated sole trader, Leila has unlimited liability.",
            },
            {
              spec: { type: "number", value: 34000 },
              feedback: "Sell the £11,000 of parlour equipment first: £34,000 − £11,000 = £23,000.",
            },
          ],
          hints: [
            "Subtract the £11,000 equipment proceeds from the £34,000 total debt.",
          ],
        },
        {
          id: "business-activity-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "unincorporated-incorporated",
          question:
            "Samir and Chloe run an accounting partnership with a **Deed of Partnership** sharing profits in the ratio **5 : 3** (Samir : Chloe). Annual partnership profit is **£136,000**. Calculate **Chloe's** share of the profit, in £.",
          answer: { type: "number", value: 51000, display: "£51,000" },
          solution: [
            "Total ratio parts = 5 + 3 = 8 parts.",
            "Value of 1 part = £136,000 ÷ 8 = £17,000.",
            "Chloe's share (3 parts) = 3 × £17,000 = **£51,000**.",
          ],
          commonError: "Calculating Samir's 5-part share (£85,000) instead of Chloe's 3-part share.",
          traps: [
            {
              spec: { type: "number", value: 85000 },
              feedback: "£85,000 is Samir's share (5 parts) — the question asks for Chloe's share (3 parts)!",
            },
            {
              spec: { type: "number", value: 68000 },
              feedback: "£68,000 would be a 50:50 split — use the 5 : 3 Deed of Partnership ratio!",
            },
          ],
          hints: [
            "Total parts = 5 + 3 = 8; divide £136,000 by 8 first.",
            "Multiply the value of 1 part (£17,000) by Chloe's 3 parts.",
          ],
        },
        {
          id: "business-activity-p1-q04",
          kind: "short",
          difficulty: "warmup",
          guideRef: "franchises-social-public",
          question:
            "In a franchise agreement, what term describes the **established brand owner** who grants the licence and receives ongoing royalties?",
          answer: {
            type: "text",
            accept: ["franchisor", "the franchisor"],
            display: "franchisor",
          },
          solution: [
            "The **franchisor** owns the established brand and licences it to local **franchisees**.",
          ],
          commonError: "Confusing franchisor (brand owner) with franchisee (local branch buyer).",
          traps: [
            {
              spec: { type: "text", accept: ["franchisee", "the franchisee"] },
              feedback: "Backwards! The franchisee BUYS the local branch licence; the brand owner granting it is the FRANCHISOR.",
            },
          ],
          hints: [
            "Check the suffix: `-OR` = Originator/Owner of the brand.",
          ],
        },
        {
          id: "business-activity-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "franchises-social-public",
          question:
            "Amara runs a `WrapIt` salad bar as a franchisee. In Year 1 her branch revenue is **£210,000**, local rent and wages are **£158,000**, and she pays a **6% royalty** plus a **2% marketing fee** on all revenue. Calculate Amara's Year 1 operating profit, in £.",
          answer: { type: "number", value: 35200, display: "£35,200" },
          solution: [
            "Combined franchisor fee = (6% + 2%) × £210,000 = 8% × £210,000 = £16,800.",
            "Total expenses = £158,000 + £16,800 = £174,800.",
            "Operating profit = £210,000 − £174,800 = **£35,200**.",
          ],
          commonError: "Forgetting the 2% marketing fee or applying 8% to (£210,000 − £158,000) instead of revenue.",
          traps: [
            {
              spec: { type: "number", value: 39400 },
              feedback: "You subtracted the 6% royalty (£12,600) — don't forget the 2% (£4,200) marketing fee as well!",
            },
            {
              spec: { type: "number", value: 47840 },
              feedback: "Royalties and marketing fees (8%) are calculated on £210,000 REVENUE (£16,800), not on pre-royalty profit!",
            },
          ],
          hints: [
            "Add 6% + 2% = 8% and multiply by £210,000 revenue.",
            "Deduct both £158,000 and £16,800 from £210,000.",
          ],
        },
        {
          id: "business-activity-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "business-objectives",
          question:
            "Petal & Stem Ltd (a 14-staff florist) increased its annual wedding revenue from **£160,000** last year to **£196,000** this year. Calculate the **percentage growth in wedding revenue** (give your answer to 1 d.p. if needed).",
          answer: { type: "number", value: 22.5, display: "22.5%" },
          solution: [
            "Revenue increase = £196,000 − £160,000 = £36,000.",
            "Percentage growth = (£36,000 ÷ £160,000) × 100 = **22.5%**.",
          ],
          commonError: "Dividing £36,000 by £196,000 (18.37%) instead of the original £160,000.",
          traps: [
            {
              spec: { type: "number", value: 18.4, tolerance: 0.05 },
              feedback: "Divide the £36,000 increase by the ORIGINAL revenue (£160,000), not the new £196,000 figure!",
            },
          ],
          hints: [
            "Use ((New − Old) ÷ Old) × 100.",
            "Compute (196,000 − 160,000) ÷ 160,000 × 100.",
          ],
        },
        {
          id: "business-activity-p1-q07",
          kind: "short",
          difficulty: "warmup",
          guideRef: "sectors-and-success",
          question:
            "State the economic sector (**primary**, **secondary** or **tertiary**) in which a dairy farm milking cows operates.",
          answer: {
            type: "text",
            accept: ["primary", "primary sector"],
            display: "primary sector",
          },
          solution: [
            "Farming and producing raw milk extracts agricultural resources directly from the land — **primary sector**.",
          ],
          commonError: "Confusing raw milk farming (primary) with factory cheese processing (secondary).",
          traps: [
            {
              spec: { type: "text", accept: ["secondary", "secondary sector"] },
              feedback: "Secondary is factory processing (e.g. bottling/cheese-making); milking cows on a farm is PRIMARY.",
            },
          ],
          hints: [
            "Farming, fishing, forestry and mining extract natural resources.",
          ],
        },
        {
          id: "business-activity-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "stakeholders-conflicts",
          question:
            "Bistro 19 Ltd employs **15 kitchen and waiting staff** on an average annual wage of **£24,000**. Current operating profit is **£78,000**. If the owners grant a **5% pay rise** with no change in menu prices or customer numbers, calculate the **new operating profit**, in £.",
          answer: { type: "number", value: 60000, display: "£60,000" },
          solution: [
            "Current total wage bill = 15 × £24,000 = £360,000.",
            "Extra cost of 5% pay rise = £360,000 × 5% = £18,000.",
            "New operating profit = £78,000 − £18,000 = **£60,000**.",
          ],
          commonError: "Taking 5% of £78,000 (£3,900) instead of 5% of the £360,000 wage bill.",
          traps: [
            {
              spec: { type: "number", value: 74100 },
              feedback: "Apply the 5% rise to the total WAGE BILL (15 × £24,000 = £360,000), not to operating profit!",
            },
            {
              spec: { type: "number", value: 18000 },
              feedback: "£18,000 is the extra wage cost — subtract it from £78,000 to get the new operating profit (£60,000).",
            },
          ],
          hints: [
            "Total wage bill = 15 staff × £24,000 = £360,000.",
            "Subtract 5% of £360,000 (£18,000) from £78,000.",
          ],
        },
        {
          id: "business-activity-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "franchises-social-public",
          question:
            "What two-word term describes a commercial business that trades goods or services competitively but reinvests most of its profits into a community or environmental mission?",
          answer: {
            type: "text",
            accept: ["social enterprise", "social enterprises"],
            display: "social enterprise",
          },
          solution: [
            "A **social enterprise** operates commercially (unlike a pure donation-based charity) while prioritising social or environmental impact.",
          ],
          commonError: "Writing 'public corporation' (state-owned) or 'charity' (non-commercial donation model).",
          traps: [
            {
              spec: { type: "text", accept: ["public corporation", "public sector"] },
              feedback: "Public corporations are government-owned; a mission-driven private trading business is a SOCIAL ENTERPRISE.",
            },
          ],
          hints: [
            "Examples include Divine Chocolate and The Big Issue: '______ enterprise'.",
            "Unlike a pure charity, it trades commercially and reinvests surpluses into a social goal.",
          ],
        },
        {
          id: "business-activity-p1-q10",
          kind: "written",
          difficulty: "core",
          guideRef: "business-objectives",
          question:
            "**Case Study — Tidal Surfboards (4 employees):** Talia founded Tidal Surfboards in Newquay 18 months ago, hand-shaping custom eco-resin surfboards. Having survived Year 1, she now wants to stop working 65-hour weeks while earning a steady £42,000 annual income.\n\n**Outline** one reason why Talia's business objectives have changed since launching Tidal Surfboards. *(2 marks)*",
          marks: 2,
          modelAnswer:
            "Now that her custom eco-resin surfboard workshop is established with repeat buyers, Talia no longer fears immediate insolvency and can shift from survival toward work-life balance and steady personal income.",
          markScheme: [
            {
              point: "Identifies shift from Year 1 survival to lifestyle/work-life balance/financial security once established.",
              keywords: ["survival", "established", "insolvency", "work-life", "lifestyle", "security", "steady"],
            },
            {
              point: "Links explicitly to Tidal Surfboards' context (eco-resin, surfboards, Newquay, 65-hour weeks or £42,000).",
              keywords: ["surfboard", "surfboards", "eco-resin", "newquay", "42,000", "hand-shaping"],
            },
          ],
          commonError: "Stating 'objectives change as businesses grow' with zero mention of surfboards, eco-resin or Talia's hours.",
          hints: [
            "Contrast Year 1 (survival) with Month 18 (steady income + cutting long hours).",
            "Include a specific context word like *eco-resin surfboards* for the 2nd mark!",
          ],
        },
        {
          id: "business-activity-p1-q11",
          kind: "written",
          difficulty: "core",
          guideRef: "unincorporated-incorporated",
          question:
            "**Explain** one benefit to two partners of drawing up a **Deed of Partnership** before opening a business together. *(3 marks)*",
          marks: 3,
          modelAnswer:
            "A Deed of Partnership legally specifies each partner's capital contribution, workload duties and exact profit-sharing ratio in writing. This prevents automatic 50:50 statutory splits when one partner invests far more money or hours than the other. Therefore, costly legal disputes are avoided and decision-making stays smooth.",
          markScheme: [
            {
              point: "AO1: States that a Deed sets out agreed rules (profit split, capital, duties or voting rights).",
              keywords: ["profit", "ratio", "capital", "duties", "voting", "legally"],
            },
            {
              point: "AO3 Link 1: Explains how this avoids unfair default 50:50 splits or ambiguity over roles.",
              keywords: ["50:50", "equal", "unequal", "unfair", "clarifies", "ambiguity"],
            },
            {
              point: "AO3 Link 2: Connects to business performance (prevents partner disputes, protects working relationships or speeds decisions).",
              keywords: ["disputes", "disagreements", "conflict", "relationships", "smooth"],
            },
          ],
          commonError: "Writing only 'it stops arguments' (1/3) without explaining *what* is inside the Deed and *why* the statutory 50:50 rule causes friction.",
          hints: [
            "What happens under partnership law if there is NO Deed when one partner puts in 80% of the cash?",
            "Chain 3 steps: Written agreement on ratios/duties → avoids unfair 50:50 default → prevents costly partner disputes.",
          ],
        },
        {
          id: "business-activity-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "sectors-and-success",
          question:
            "**Explain** one reason why a profitable new small business may still fail within its first two years of trading. *(3 marks)*",
          marks: 3,
          modelAnswer:
            "A new firm may record strong credit sales on paper yet suffer severe cash-flow shortages if customers take 60 to 90 days to pay invoices. Meanwhile, suppliers, landlords and staff demand immediate monthly cash payments. Without an overdraft buffer, the business becomes insolvent and is forced to cease trading.",
          markScheme: [
            {
              point: "AO1: Identifies cash-flow shortage / poor liquidity / late-paying credit customers despite paper profit.",
              keywords: ["cash flow", "cash-flow", "liquidity", "credit", "invoices"],
            },
            {
              point: "AO3 Link 1: Contrasts delayed cash inflows against immediate cash outflows (rent, suppliers, wages).",
              keywords: ["suppliers", "rent", "wages", "immediate", "outflows", "60", "90"],
            },
            {
              point: "AO3 Link 2: Concludes with insolvency / inability to pay short-term debts forcing closure.",
              keywords: ["insolvent", "insolvency", "cease trading", "close", "overdraft"],
            },
          ],
          commonError: "Saying 'it fails because it makes no sales' — the question specifically asks how a *profitable* start-up can still fail!",
          hints: [
            "Remember the golden rule: **Profit ≠ Cash**!",
            "Explain credit sales waiting 60–90 days vs rent/suppliers due today → insolvency.",
          ],
        },
        {
          id: "business-activity-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "franchises-social-public",
          question:
            "**Case Study — Koko Gelato (18 employees):** Marco wants to open an artisan gelato parlour in Brighton with £45,000 of savings. He is considering buying a **Koko Gelato franchise** (upfront fee £20,000 + 9% revenue royalty, with national Instagram campaigns and Italian recipe training) instead of launching his own unknown gelato brand.\n\n**Analyse** the benefits to Marco of opening his parlour as a **Koko Gelato franchisee**. *(6 marks)*",
          marks: 6,
          modelAnswer:
            "Buying a Koko Gelato franchise gives Marco immediate brand recognition along Brighton's busy seafront, backed by national Instagram campaigns. Tourists and families already trust the Koko name over an unknown start-up, generating stronger Day 1 footfall and reducing the risk of Year 1 cash-flow failure.\n\nFurthermore, Marco receives proven Italian recipe training and vetted dairy equipment suppliers from the franchisor. Because banks view established gelato franchises as far lower risk than independent cafés, Marco can more easily negotiate a business loan on top of his £45,000 savings to fit out chillers and seating.",
          markScheme: [
            {
              point: "Benefit 1 identified: Established brand recognition and national marketing support.",
              keywords: ["brand", "recognition", "instagram", "marketing", "trusted", "trust"],
            },
            {
              point: "Application 1 to Brighton / gelato / £45,000 / Italian recipes context.",
              keywords: ["brighton", "gelato", "italian", "45,000", "seafront", "chillers"],
            },
            {
              point: "Chain of reasoning 1: Stronger initial customer footfall/sales reduces Year 1 start-up failure risk.",
              keywords: ["footfall", "failure", "cash-flow", "day 1", "initial"],
            },
            {
              point: "Benefit 2 identified: Training, proven supplier network, or easier access to bank finance.",
              keywords: ["training", "suppliers", "banks", "loan", "proven"],
            },
            {
              point: "Chain of reasoning 2: Fewer costly operational mistakes / lower perceived lending risk helps fund parlour equipment.",
              keywords: ["lower risk", "loan", "mistakes", "equipment", "negotiate"],
            },
            {
              point: "Two distinct developed strands sustained in Marco's franchisee perspective (not franchisor!).",
              keywords: ["franchisee", "marco", "franchisor"],
            },
          ],
          commonError: "Writing advantages for Koko Gelato headquarters (the franchisor) instead of Marco (the franchisee), or omitting Brighton/gelato context.",
          hints: [
            "6-mark *Analyse* = **2 separate, fully developed chains in context** (no counter-arguments needed!).",
            "Chain 1: Recognised Koko brand + Instagram ads → Brighton seafront footfall → lower Year 1 failure risk.",
            "Chain 2: Italian recipe training + lower risk to banks → easier loan approval alongside his £45k savings.",
          ],
        },
        {
          id: "business-activity-p1-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "unincorporated-incorporated",
          question:
            "**Case Study — VoltFix Electricals (9 employees):** Priya has run VoltFix Electricals as a **sole trader** in Leeds for four years, installing domestic EV chargers. Demand is booming, and a commercial property developer wants VoltFix to wire 120 new apartments — a contract requiring £60,000 of upfront cable stock and carrying heavy penalty clauses if delayed. Priya owns a family home worth £280,000.\n\n**Assess** whether Priya should convert VoltFix Electricals into a **Private Limited Company (`Ltd`)** before signing the apartment contract. *(9 marks)*",
          marks: 6,
          modelAnswer:
            "Converting to VoltFix Electricals Ltd gives Priya limited liability and a separate corporate legal identity. Because the 120-apartment EV contract requires £60,000 of upfront cable stock and carries strict delay penalties, staying an unincorporated sole trader puts Priya's £280,000 Leeds family home directly at risk if the developer withholds payment. Incorporating also lets Priya sell a minority stake (e.g. 30% of shares) to a private investor to fund the £60,000 cable purchase without expensive overdraft interest.\n\nHowever, setting up an Ltd involves legal incorporation costs, administrative paperwork and publishing annual accounts at Companies House, allowing rival Leeds electrical contractors to inspect VoltFix's financial position. In addition, if Priya sells shares to raise the £60,000, she must share future dividends and consult co-shareholders.\n\nOverall, Priya should definitely incorporate as an Ltd (**AJIM**). While losing financial privacy is a minor nuisance for a 9-staff firm, shielding her £280,000 home from high-value commercial penalty clauses is paramount — provided she retains at least 51% of voting shares so she keeps full strategic control.",
          markScheme: [
            {
              point: "Case FOR Ltd: Limited liability / separate legal identity shields personal wealth.",
              keywords: ["limited liability", "separate", "legal identity", "shield", "shields"],
            },
            {
              point: "Strong AO2 application to VoltFix context (£280,000 home, £60,000 cable stock, 120 apartments, EV chargers, penalty clauses).",
              keywords: ["280,000", "60,000", "cable", "apartments", "penalty", "ev"],
            },
            {
              point: "Additional FOR point: Ability to raise private share equity (<50%) without debt interest.",
              keywords: ["minority", "shares", "investor", "interest", "equity"],
            },
            {
              point: "Case AGAINST Ltd: Loss of financial privacy (Companies House accounts visible to Leeds rivals) + admin/dividend sharing.",
              keywords: ["companies house", "privacy", "accounts", "rivals", "dividends"],
            },
            {
              point: "Clear AJIM judgement weighing why protecting the £280k home outweighs minor admin/privacy costs.",
              keywords: ["overall", "outweighs", "paramount", "minor"],
            },
            {
              point: "'It depends on' contingency: retaining at least 51% voting shares (or whether banks still demand a personal guarantee).",
              keywords: ["51%", "control", "voting"],
            },
          ],
          commonError: "Suggesting Priya float her 9-person firm on the Stock Exchange as a PLC, or forgetting an 'It depends on' 51% control condition.",
          hints: [
            "Use **AJIM**: Case FOR (`Ltd` protects her £280k house from £60k cable/penalty risk + private equity) vs Case AGAINST (Companies House accounts + sharing dividends).",
            "Never mention PLC flotation for a 9-staff electrician!",
            "Conclude decisively: protecting her £280,000 home wins, *provided* she keeps ≥51% of shares.",
          ],
        },
        {
          id: "business-activity-p1-q15",
          kind: "short",
          difficulty: "core",
          guideRef: "sectors-and-success",
          question:
            "Oakridge Bakery Ltd has current assets of £14,000 (almost all tied up in 60-day hotel invoices) and must pay £9,500 in flour bills and baker wages tomorrow, with only **£1,200 cash** in its bank account and no overdraft. What single business term describes the failure to pay debts as they fall due despite being profitable on paper?",
          answer: {
            type: "text",
            accept: [
              "insolvency",
              "cash-flow insolvency",
              "cash flow insolvency",
              "illiquidity",
              "insolvent",
            ],
            display: "insolvency",
          },
          solution: [
            "Being unable to pay short-term debts/payables when they fall due because of a lack of liquid cash is **insolvency** (specifically cash-flow insolvency).",
          ],
          commonError: "Writing 'unprofitability' — Oakridge Bakery is profitable on paper via hotel invoices, just out of cash!",
          traps: [
            {
              spec: { type: "text", accept: ["loss", "unprofitable", "depreciation"] },
              feedback: "The bakery has £14,000 of sales invoices — its problem isn't lack of profit, it is INSOLVENCY (lack of liquid cash)!",
            },
          ],
          hints: [
            "Starts with 'in-' (the opposite of being solvent).",
            "Cash-flow __________ occurs when short-term bills fall due with insufficient liquid cash.",
          ],
        },
      ],
    },
    {
      id: "business-activity-p2",
      title: "Practice Paper 2 — Investigating Large Business (>250 Employees)",
      questions: [
        {
          id: "business-activity-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "unincorporated-incorporated",
          question:
            "What minimum percentage of voting shares (as a whole number) must an outside acquirer buy on a stock exchange to guarantee control in a **hostile takeover** of a `Plc` (assuming 1 share = 1 vote)?",
          answer: { type: "number", value: 51, tolerance: 0.9, display: "51%" },
          solution: [
            "Holding **over 50%** (conventionally stated as **51%** in whole-percentage terms, or 50% + 1 share) gives majority voting control to replace the board of directors.",
          ],
          commonError: "Writing 50% (which causes a deadlock rather than a guaranteed majority) or 100%.",
          traps: [
            {
              spec: { type: "number", value: 100 },
              feedback: "An acquirer does NOT need 100% of shares — just a majority (>50%, i.e. 51%) wins voting control!",
            },
          ],
          hints: [
            "Think what whole-number percentage just exceeds 50%.",
          ],
        },
        {
          id: "business-activity-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "business-objectives",
          question:
            "FreshMart Plc generates **£4.5 billion** in annual UK grocery sales inside a total UK grocery market worth **£180 billion**. Calculate FreshMart Plc's **market share** as a percentage.",
          answer: { type: "number", value: 2.5, display: "2.5%" },
          solution: [
            "Market share = (£4.5bn ÷ £180bn) × 100 = 0.025 × 100 = **2.5%**.",
          ],
          commonError: "Dividing 180 by 4.5 = 40% (upside-down fraction!).",
          traps: [
            {
              spec: { type: "number", value: 40 },
              feedback: "Upside down! Divide the firm's sales (£4.5bn) by the total market (£180bn), then multiply by 100.",
            },
          ],
          hints: [
            "Use Market Share (%) = (Firm Sales ÷ Total Market Sales) × 100.",
            "Compute (4.5 ÷ 180) × 100.",
          ],
        },
        {
          id: "business-activity-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "sectors-and-success",
          question:
            "Over 25 years, manufacturing falls from 34% to 13% of Country D's GDP while financial, digital and healthcare services rise to 84% of GDP. What economic term describes this structural decline in the secondary sector's share?",
          answer: {
            type: "text",
            accept: [
              "de-industrialisation",
              "deindustrialisation",
              "de-industrialization",
              "deindustrialization",
            ],
            display: "de-industrialisation",
          },
          solution: [
            "A sustained decline in the relative importance of the secondary (manufacturing) sector alongside tertiary expansion in developed economies is **de-industrialisation**.",
          ],
          commonError: "Writing 'industrialisation' (the exact opposite!) or 'privatisation'.",
          traps: [
            {
              spec: { type: "text", accept: ["industrialisation", "industrialization"] },
              feedback: "Industrialisation is when manufacturing GROWS; when manufacturing shrinks relative to services, add the prefix 'de-'!",
            },
          ],
          hints: [
            "Opposite of industrialisation — add a two-letter prefix!",
            "Occurs in developed economies as tertiary services overtake secondary manufacturing.",
          ],
        },
        {
          id: "business-activity-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "stakeholders-conflicts",
          question:
            "SkyLine Airlines Plc employs **4,000 cabin crew** on an average salary of **£28,000**. Operating profit before pay talks is **£45,000,000**. If directors agree to a **6% salary increase** with no ticket-price change in the short run, calculate the new operating profit **in £ millions** (to 2 d.p., e.g. `38.28`).",
          answer: { type: "number", value: 38.28, tolerance: 0.01, display: "£38.28 million" },
          solution: [
            "Total cabin-crew wage bill = 4,000 × £28,000 = £112,000,000 (£112m).",
            "Cost of 6% pay rise = £112m × 6% = £6.72m.",
            "New operating profit = £45.00m − £6.72m = **£38.28 million**.",
          ],
          commonError: "Deducting 6% of £45m (£2.7m → £42.3m) instead of 6% of the £112m cabin-crew wage bill.",
          traps: [
            {
              spec: { type: "number", value: 42.3 },
              feedback: "Apply 6% to the £112m cabin-crew WAGE BILL (£6.72m), not directly to the £45m operating profit!",
            },
            {
              spec: { type: "number", value: 6.72 },
              feedback: "£6.72m is the extra wage cost — subtract it from £45m to find new operating profit (38.28)!",
            },
          ],
          hints: [
            "Find the cabin-crew wage bill in £ millions: (4,000 × £28,000) = £112m.",
            "Subtract 6% of £112m (£6.72m) from £45m.",
          ],
        },
        {
          id: "business-activity-p2-q05",
          kind: "short",
          difficulty: "warmup",
          guideRef: "franchises-social-public",
          question:
            "What term describes the government policy of selling a state-owned public corporation (such as a national airline or water utility) to private-sector shareholders?",
          answer: {
            type: "text",
            accept: ["privatisation", "privatization"],
            display: "privatisation",
          },
          solution: [
            "Transferring state-owned public-sector enterprises into private ownership is **privatisation**.",
          ],
          commonError: "Writing 'nationalisation' (which moves private firms INTO state ownership).",
          traps: [
            {
              spec: { type: "text", accept: ["nationalisation", "nationalization"] },
              feedback: "Nationalisation is private → state; state → private shareholders is PRIVATISATION.",
            },
          ],
          hints: [
            "State-owned → Private sector.",
          ],
        },
        {
          id: "business-activity-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "franchises-social-public",
          question:
            "`FitNation Plc` (the franchisor) has **150 franchised gyms**. Each gym earns an average annual revenue of **£400,000** and pays a **7% revenue royalty** to `FitNation Plc`. Calculate `FitNation Plc`'s **total annual royalty income** across all 150 branches, in **£ millions** (to 1 d.p., e.g. `4.2`).",
          answer: { type: "number", value: 4.2, tolerance: 0.01, display: "£4.2 million" },
          solution: [
            "Royalty per branch = £400,000 × 7% = £28,000.",
            "Total across 150 branches = 150 × £28,000 = £4,200,000 = **£4.2 million**.",
          ],
          commonError: "Giving £28,000 (one branch only) or misplacing the decimal point.",
          traps: [
            {
              spec: { type: "number", value: 0.42 },
              feedback: "Check your zeros: 150 × £28,000 = £4,200,000, which is 4.2 million!",
            },
          ],
          hints: [
            "Royalty per gym = 7% of £400,000 = £28,000.",
            "Multiply £28,000 by 150 gyms and express in £ millions.",
          ],
        },
        {
          id: "business-activity-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "unincorporated-incorporated",
          question:
            "What three-letter abbreviation denotes an Initial Public Offering when a Private Limited Company lists its shares on a public stock exchange for the first time?",
          answer: {
            type: "text",
            accept: ["ipo", "initial public offering", "flotation"],
            display: "IPO",
          },
          solution: [
            "**IPO** stands for **Initial Public Offering** (also known as a stock-exchange flotation).",
          ],
          commonError: "Writing 'PLC' (which is the company structure, not the flotation event).",
          hints: [
            "Initial Public Offering → three letters!",
            "Also referred to as a stock-exchange flotation.",
          ],
        },
        {
          id: "business-activity-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "business-objectives",
          question:
            "NextGen Solar Plc had sales of **£240 million** last year in a market worth **£2,000 million**. This year the total market grew by **10%**, and NextGen Solar Plc captured **15% market share**. Calculate NextGen Solar Plc's **increase in sales (£ millions)** from last year to this year.",
          answer: { type: "number", value: 90, display: "£90 million" },
          solution: [
            "This year's total market = £2,000m × 1.10 = £2,200m.",
            "NextGen Solar Plc's sales this year = 15% × £2,200m = £330m.",
            "Increase in sales = £330m − £240m = **£90 million**.",
          ],
          commonError: "Giving £330m (total new sales) instead of subtracting £240m, or forgetting the 10% market growth.",
          traps: [
            {
              spec: { type: "number", value: 330 },
              feedback: "£330m is this year's total sales — subtract last year's £240m to find the INCREASE (£90m)!",
            },
            {
              spec: { type: "number", value: 60 },
              feedback: "Don't forget the total market grew by 10% to £2,200m before taking 15%!",
            },
          ],
          hints: [
            "Grow the £2,000m market by 10% first (£2,200m).",
            "Find 15% of £2,200m (£330m), then subtract £240m.",
          ],
        },
        {
          id: "business-activity-p2-q09",
          kind: "short",
          difficulty: "warmup",
          guideRef: "franchises-social-public",
          question:
            "Does a **Public Limited Company (`Plc`)** operate in the **private sector** or the **public sector**?",
          answer: {
            type: "text",
            accept: ["private sector", "private"],
            display: "private sector",
          },
          solution: [
            "Despite the word 'Public' in its name (meaning the public can buy shares on a stock exchange), a **`Plc` is in the private sector**, owned by private/institutional shareholders rather than the state!",
          ],
          commonError: "Falling for the classic name trap and writing 'public sector'!",
          traps: [
            {
              spec: { type: "text", accept: ["public sector", "public"] },
              feedback: "Classic Edexcel trap! 'Public' in PLC only means shares trade on a public stock exchange — PLCs are owned by private shareholders in the PRIVATE SECTOR!",
            },
          ],
          hints: [
            "Watch out for the #1 Edexcel naming trap: is Tesco Plc owned by the government or by private shareholders?",
          ],
        },
        {
          id: "business-activity-p2-q10",
          kind: "written",
          difficulty: "core",
          guideRef: "unincorporated-incorporated",
          question:
            "**Case Study — MediScan Plc (1,400 employees):** MediScan Plc designs hospital MRI scanners. Its CEO wants to spend £90 million of this year's profits on a 5-year AI diagnostics research lab, whereas pension-fund shareholders are demanding an immediate dividend increase.\n\n**Outline** how this situation illustrates a **divorce between ownership and control** at MediScan Plc. *(2 marks)*",
          marks: 2,
          modelAnswer:
            "Pension-fund shareholders own MediScan Plc and want immediate cash dividends, whereas the salaried CEO controls strategic spending and prefers investing £90m into a 5-year AI MRI lab.",
          markScheme: [
            {
              point: "Contrasts shareholders (owners wanting short-term dividends) against the CEO/directors (controlling strategy/long-term R&D).",
              keywords: ["shareholders", "dividends", "ceo", "directors", "controls", "own"],
            },
            {
              point: "Applies explicitly to MediScan Plc's context (pension funds, £90m, MRI scanners or AI lab).",
              keywords: ["pension", "90m", "90 million", "mri", "ai", "scanners"],
            },
          ],
          commonError: "Defining divorce of ownership and control generically without referencing £90m, AI lab or MRI scanners.",
          hints: [
            "Name who owns MediScan Plc vs who controls the £90m budget.",
            "Include context words (*pension funds*, *£90m AI MRI lab*) for 2/2!",
          ],
        },
        {
          id: "business-activity-p2-q11",
          kind: "written",
          difficulty: "core",
          guideRef: "franchises-social-public",
          question:
            "**Explain** one advantage to a large manufacturer of forming a **joint venture** with a local company when entering a new overseas market. *(3 marks)*",
          marks: 3,
          modelAnswer:
            "Partnering in a joint venture gives the manufacturer instant access to the local partner's knowledge of consumer tastes, distribution networks and regulations. In addition, both parent firms split the heavy capital cost of factories and marketing. Consequently, the financial risk of expensive product-launch failures abroad is significantly reduced.",
          markScheme: [
            {
              point: "AO1: Identifies shared local market knowledge/regulations/distribution OR shared capital cost.",
              keywords: ["local", "knowledge", "regulations", "distribution", "tastes", "split", "shared"],
            },
            {
              point: "AO3 Link 1: Explains how sharing investment/expertise avoids blind cultural or legal missteps.",
              keywords: ["capital", "marketing", "factories", "expertise"],
            },
            {
              point: "AO3 Link 2: Connects to lower financial risk / faster profitable market entry.",
              keywords: ["risk", "failures", "reduced", "faster"],
            },
          ],
          commonError: "Confusing a joint venture with a franchise or full merger.",
          hints: [
            "Identify what the local partner brings (consumer tastes, distribution, legal knowledge) plus shared investment.",
            "Chain 3 steps: local expertise + split capital cost → fewer cultural/legal mistakes → lower risk of foreign failure.",
          ],
        },
        {
          id: "business-activity-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "stakeholders-conflicts",
          question:
            "**Case Study — QuickMart Plc (28,000 employees):** QuickMart Plc plans to build a 24-hour automated regional distribution megahub on greenbelt land near a market town in Oxfordshire, creating 350 technician and driver jobs while routing 400 heavy lorries per day past local schools.\n\n**Analyse** how QuickMart Plc's planned megahub creates conflicting impacts on **two external stakeholder groups**. *(6 marks)*",
          marks: 6,
          modelAnswer:
            "The local government and job-seekers benefit from 350 skilled technician and driver roles plus higher business-rate tax receipts in Oxfordshire. Rising household incomes boost spending in nearby town-centre shops, supporting regional economic growth.\n\nConversely, the local community living near the Oxfordshire schools suffers severe negative externalities as 400 heavy lorries thunder past 24 hours a day. Diesel emissions, night-time noise and road-safety hazards around school gates reduce residents' quality of life and house values, prompting local planning protests that could delay QuickMart Plc's build.",
          markScheme: [
            {
              point: "External Group 1 identified & positive impact traced (e.g. government / regional economy gaining tax revenue & 350 jobs).",
              keywords: ["government", "tax", "350", "jobs", "incomes"],
            },
            {
              point: "AO2 context integrated in Strand 1 (Oxfordshire, technician/driver roles, automated megahub).",
              keywords: ["oxfordshire", "technician", "driver", "megahub"],
            },
            {
              point: "External Group 2 identified: Local community / residents / parents.",
              keywords: ["local community", "residents", "schools"],
            },
            {
              point: "AO2 context integrated in Strand 2 (400 heavy lorries, 24-hour noise, greenbelt land, school gates).",
              keywords: ["400", "lorries", "24", "greenbelt", "noise", "emissions"],
            },
            {
              point: "Developed chain 2: Noise/pollution/congestion lowers quality of life or house values and sparks planning objections.",
              keywords: ["quality of life", "house", "protests", "planning", "safety"],
            },
            {
              point: "Both chosen stakeholder groups are strictly EXTERNAL (not shareholders, managers or existing staff!).",
              keywords: ["external", "residents", "government", "shops"],
            },
          ],
          commonError: "Choosing shareholders or QuickMart's existing managers — the question strictly specifies **external** stakeholder groups!",
          hints: [
            "Read the constraint twice: **two EXTERNAL stakeholder groups** (e.g. Local Government vs Local Community/Residents).",
            "Weave in *350 technician jobs*, *Oxfordshire greenbelt*, and *400 lorries past schools 24/7*.",
          ],
        },
        {
          id: "business-activity-p2-q13",
          kind: "written",
          difficulty: "challenge",
          guideRef: "unincorporated-incorporated",
          question:
            "**Case Study — PureBrew Ltd (420 employees):** Founded by three sisters, PureBrew Ltd manufactures low-sugar kombucha across the UK and currently holds 9% of the functional drinks market. Each sister owns 33.3% of the shares. To build a £55 million canning plant in Rotterdam and expand across Europe, the finance director proposes converting PureBrew Ltd into **PureBrew Plc** via a Stock Exchange IPO.\n\n**Evaluate** whether the sisters should convert PureBrew Ltd into a **Public Limited Company (`Plc`)** to fund European expansion. *(12 marks)*",
          marks: 6,
          modelAnswer:
            "Floating as PureBrew Plc via an IPO unlocks £55 million of permanent, interest-free equity capital from institutional investors to build the Rotterdam canning plant. Unlike a £55m bank loan, share capital carries no mandatory monthly interest repayments, protecting PureBrew's cash flow while scaling kombucha distribution beyond its 9% UK share. Stock-exchange status also raises PureBrew's media profile with major European supermarket buyers.\n\nHowever, going public exposes the three sisters to severe loss of control and a potential hostile takeover. If selling new shares dilutes their combined stake below 51%, a global drinks giant could buy a majority of PureBrew Plc's shares on the open market and replace the sisters. Furthermore, institutional shareholders often demand high short-term dividends, clashing with PureBrew's low-sugar ethical brand ethos, alongside millions in legal and underwriting flotation fees.\n\nOverall, PureBrew Ltd should convert to a Plc (**AJIM**), because £55 million for a Rotterdam factory is far too large to fund solely from retained profits without dangerously high debt gearing. Crucially, **it depends on** how the IPO is structured: if the three sisters sell at most 40%–45% of total post-IPO equity (retaining >51% between them), they secure European growth capital while legally blocking any hostile takeover.",
          markScheme: [
            {
              point: "Case FOR PLC: Raises large £55m interest-free equity capital + raises European brand profile.",
              keywords: ["55 million", "55m", "interest-free", "equity", "ipo", "profile"],
            },
            {
              point: "Rich AO2 context throughout (three sisters, kombucha, 9% UK share, Rotterdam canning plant, European supermarkets).",
              keywords: ["sisters", "kombucha", "rotterdam", "canning", "9%", "european"],
            },
            {
              point: "Case AGAINST PLC: Risk of hostile takeover if diluted <51%, divorce of ownership & control / short-term dividend pressure, heavy listing fees.",
              keywords: ["hostile takeover", "dilutes", "dividends", "underwriting", "control"],
            },
            {
              point: "Contrast with debt alternative (avoiding crippling interest repayments on a £55m loan).",
              keywords: ["loan", "interest", "gearing", "cash flow"],
            },
            {
              point: "Decisive AJIM verdict answering whether to float (no 50/50 fence-sitting).",
              keywords: ["overall", "should convert"],
            },
            {
              point: "High-level 'It depends on' condition: sisters retaining >51% combined voting equity post-IPO.",
              keywords: ["51%", "it depends on", "retaining"],
            },
          ],
          commonError: "Saying 'converting from Ltd to Plc gives the sisters limited liability' — an `Ltd` ALREADY has limited liability!",
          hints: [
            "**Major Grade 9 Trap to Avoid:** Never say converting `Ltd → Plc` gives limited liability — `PureBrew Ltd` already has limited liability!",
            "Weigh £55m interest-free equity for the Rotterdam kombucha plant against hostile takeover risk & short-term dividend pressure.",
            "Finish with **AJIM**: float as a PLC *provided* the three sisters retain >51% combined voting shares!",
          ],
        },
        {
          id: "business-activity-p2-q14",
          kind: "short",
          difficulty: "core",
          guideRef: "sectors-and-success",
          question:
            "Global retailer `Style Giant Plc` failed to invest in mobile shopping apps between 2014 and 2024 while digital-first rivals captured younger shoppers, forcing `Style Giant Plc` to close 180 stores. Complete the phrase describing why established firms collapse when they do not update products or processes in a changing market: **failure to ________** *(or write the full three-word phrase)*.",
          answer: {
            type: "text",
            accept: [
              "innovate",
              "failure to innovate",
              "adapt",
              "failure to adapt",
              "modernise",
            ],
            display: "innovate",
          },
          solution: [
            "Established market leaders often fail not from lack of brand awareness, but from complacency and **failure to innovate** (or adapt) when technology and consumer habits shift.",
          ],
          commonError: "Blaming start-up under-capitalisation for a mature 180-store PLC.",
          hints: [
            "Think of Kodak and Blockbuster: failure to i_______.",
            "Failing to update products or adopt new e-commerce technology in a dynamic market.",
          ],
        },
        {
          id: "business-activity-p2-q15",
          kind: "short",
          difficulty: "core",
          guideRef: "unincorporated-incorporated",
          question:
            "Founder Noor holds **60,000 shares** in `NoorBio Plc`, which currently has **100,000 shares** in total. If `NoorBio Plc` issues **50,000 brand-new shares** to institutional investors on the stock exchange (and Noor buys none of them), what is Noor's **new percentage ownership** of `NoorBio Plc`?",
          answer: { type: "number", value: 40, display: "40%" },
          solution: [
            "New total shares in issue = 100,000 + 50,000 = 150,000 shares.",
            "Noor's new ownership % = (60,000 ÷ 150,000) × 100 = **40%** (diluted below the 51% control threshold!).",
          ],
          commonError: "Subtracting 50% from 60% or forgetting to add the 50,000 new shares to the denominator.",
          traps: [
            {
              spec: { type: "number", value: 60 },
              feedback: "Noor still owns 60,000 shares, but total shares grew to 150,000 — recalculate 60,000 ÷ 150,000 × 100!",
            },
            {
              spec: { type: "number", value: 10 },
              feedback: "Don't subtract percentages — divide Noor's 60,000 shares by the new total of 150,000 shares!",
            },
          ],
          hints: [
            "New total shares = 100,000 + 50,000 = 150,000.",
            "Calculate (60,000 ÷ 150,000) × 100.",
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "business-activity-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "unincorporated-incorporated",
      question:
        "Founder Dev currently owns **100%** of `DevRobotics Ltd`, consisting of **102,000 shares**. He wants to issue **new shares** at **£5 per share** to a venture investor to raise cash, while keeping **at least 51% voting control** of the enlarged company. What is the **maximum cash (£)** `DevRobotics Ltd` can raise from this share issue?",
      answer: { type: "number", value: 490000, display: "£490,000" },
      solution: [
        "Dev's 102,000 shares must represent at least 51% of post-issue total shares T: {{102000 / T >= 0.51}}.",
        "Maximum total shares {{T = 102000 / 0.51 = 200000}} shares.",
        "Maximum new shares issued = {{200000 - 102000 = 98000}} shares.",
        "Maximum cash raised at £5 per share = {{98000 * £5 = £490000}}.",
      ],
      commonError: "Taking 49% of 102,000 shares (49,980 × £5 = £249,900) instead of recognising that 102,000 becomes 51% of the NEW larger share total!",
      traps: [
        {
          spec: { type: "number", value: 249900 },
          feedback: "Careful! Dev isn't selling his existing shares — the company is issuing NEW shares, so 102,000 = 51% of the NEW total (200,000 shares)!",
        },
        {
          spec: { type: "number", value: 98000 },
          feedback: "98,000 is the maximum number of new shares — multiply by £5 per share to find the cash raised!",
        },
      ],
      hints: [
        "After issuing N new shares, total shares become 102,000 + N.",
        "Set 102,000 ÷ (102,000 + N) = 0.51 → solve for total shares = 102,000 ÷ 0.51 = 200,000.",
        "New shares N = 200,000 − 102,000 = 98,000; multiply by £5 per share!",
      ],
    },
    {
      id: "business-activity-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "franchises-social-public",
      question:
        "Zoe compares two 3-year business plans. **Plan Independent** has no upfront fee, earns £180,000 annual revenue, and has £142,000 annual operating costs in each of Years 1–3. **Plan Franchise** requires a **£27,000 one-off upfront franchise fee** on Day 1, earns **£280,000 annual revenue**, incurs **£198,000 annual local costs**, and pays a **10% ongoing royalty on revenue** each year. Over the **full 3 years combined** (after deducting the upfront franchise fee), by how much does Plan Franchise's cumulative net surplus beat Plan Independent's? Give your answer in £.",
      answer: { type: "number", value: 21000, display: "£21,000" },
      solution: [
        "Plan Independent annual profit = £180,000 − £142,000 = £38,000/yr → 3-year total = 3 × £38,000 = £114,000.",
        "Plan Franchise annual royalty = 10% × £280,000 = £28,000/yr.",
        "Plan Franchise annual trading profit = £280,000 − £198,000 − £28,000 = £54,000/yr → 3-year trading total = 3 × £54,000 = £162,000.",
        "Deduct the one-off £27,000 upfront fee once: £162,000 − £27,000 = £135,000.",
        "Advantage of Plan Franchise over 3 years = £135,000 − £114,000 = **£21,000**.",
      ],
      commonError: "Deducting the one-off £27,000 start-up fee three times (once every year) instead of once on Day 1, or forgetting to subtract £114,000.",
      traps: [
        {
          spec: { type: "number", value: 48000 },
          feedback: "Don't forget to deduct the one-off £27,000 upfront franchise fee from the £48,000 trading difference (£48,000 − £27,000 = £21,000)!",
        },
        {
          spec: { type: "number", value: 135000 },
          feedback: "£135,000 is Plan Franchise's 3-year net total — subtract Plan Independent's £114,000 to find the difference (£21,000)!",
        },
      ],
      hints: [
        "Work out Plan Independent's 3-year total first: 3 × (£180,000 − £142,000) = £114,000.",
        "Work out Plan Franchise's annual profit after the 10% (£28,000) revenue royalty (£54,000/yr), multiply by 3 years (£162,000), then subtract the ONE-OFF £27,000 fee once (£135,000).",
        "Subtract £114,000 from £135,000!",
      ],
    },
    {
      id: "business-activity-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "business-objectives",
      question:
        "Aura Cosmetics Ltd currently holds **8% market share** in a skincare market worth **£50,000,000**. Next year, rival launches will grow the total market by **20%**. Aura's board sets a SMART target to hold **11% market share** next year. By what **percentage** must Aura Cosmetics Ltd grow its **own annual revenue** to achieve that target?",
      answer: { type: "number", value: 65, display: "65%" },
      solution: [
        "Aura's current revenue = 8% × £50,000,000 = £4,000,000.",
        "Next year's total market = £50,000,000 × 1.20 = £60,000,000.",
        "Aura's required Year 2 revenue = 11% × £60,000,000 = £6,600,000.",
        "Required % growth in Aura's revenue = ((£6,600,000 − £4,000,000) ÷ £4,000,000) × 100 = (£2.6m ÷ £4.0m) × 100 = **65%**.",
      ],
      commonError: "Doing (11 − 8) ÷ 8 = 37.5% and forgetting that the total market itself expands by 20%!",
      traps: [
        {
          spec: { type: "number", value: 37.5 },
          feedback: "37.5% only works if the market size stays flat — remember the total market also grows by 20% to £60m!",
        },
        {
          spec: { type: "number", value: 2600000 },
          feedback: "£2,600,000 is the £ revenue increase — express it as a percentage of original £4,000,000 sales (65%)!",
        },
      ],
      hints: [
        "Step 1: Find Aura's current £ sales (8% of £50m = £4.0m).",
        "Step 2: Find next year's market size (£50m × 1.20 = £60m) and Aura's target £ sales (11% of £60m = £6.6m).",
        "Step 3: Compute ((6.6 − 4.0) ÷ 4.0) × 100.",
      ],
    },
    {
      id: "business-activity-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "stakeholders-conflicts",
      question:
        "Precision Parts Ltd employs **50 machinists** on **£30,000** per year. Current revenue is **£4,000,000**, variable material costs are **45% of revenue**, and fixed non-wage overheads are **£420,000**. Management awards an **8% pay rise** to all machinists, which motivates them to reduce scrap and lift revenue (and material usage proportionally) by **6%**. Calculate the **net change in annual operating profit** (in £, positive if profit rises, negative if it falls).",
      answer: { type: "number", value: 12000, display: "£12,000" },
      solution: [
        "Extra wage cost = (50 × £30,000) × 8% = £1,500,000 × 8% = £120,000.",
        "Before: contribution = (100% − 45%) × £4,000,000 = 55% × £4,000,000 = £2,200,000.",
        "6% higher sales lifts contribution by 6% × £2,200,000 = £132,000 (since material cost stays 45% of revenue).",
        "Net change in operating profit = +£132,000 − £120,000 = **+£12,000** (both employees AND shareholders win!).",
      ],
      commonError: "Adding the full 6% of £4m (£240,000) without deducting the 45% variable material cost on those extra sales!",
      traps: [
        {
          spec: { type: "number", value: 120000 },
          feedback: "Remember that the extra £240,000 of sales also requires 45% (£108,000) of extra raw materials!",
        },
        {
          spec: { type: "number", value: -120000 },
          feedback: "You deducted the £120,000 wage rise, but forgot the extra contribution from the 6% revenue increase!",
        },
      ],
      hints: [
        "Step 1: Extra wage bill = (50 × £30,000) × 8% = £120,000.",
        "Step 2: Extra revenue = 6% of £4,000,000 = £240,000, of which 45% (£108,000) goes on variable materials — leaving £132,000 extra contribution.",
        "Step 3: Compare +£132,000 extra contribution against −£120,000 extra wages!",
      ],
    },
    {
      id: "business-activity-ch-q05",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "unincorporated-incorporated",
      question:
        "Partners Kwame and Sian have a Deed of Partnership giving Kwame an annual partner salary of **£20,000** first, with remaining profits split **3 : 2** (Kwame : Sian). In a tough year, total partnership profit before partner salaries is only **£15,000**. Following standard partnership accounting under this Deed, how is the £15,000 allocated?",
        options: [
          "Kwame receives £20,000 salary and the resulting −£5,000 residual deficit is split 3 : 2 (−£3,000 Kwame, −£2,000 Sian), leaving Kwame on +£17,000 and Sian on −£2,000",
          "Kwame and Sian receive £7,500 each because the Deed cancels whenever profit drops below £20,000",
          "Kwame receives £9,000 and Sian receives £6,000, ignoring the salary clause",
          "Neither partner receives anything and HMRC confiscates the £15,000",
        ],
        answerIndex: 0,
        explanation:
          "Under a Deed of Partnership, fixed partner appropriations (Kwame's £20,000 salary) are credited first, creating a residual appropriation deficit of {{£15000 - £20000 = -£5000}}, which is shared in the **3 : 2** ratio (−£3,000 and −£2,000): Kwame nets **£17,000** and Sian bears **−£2,000** (totalling £15,000).",
        hints: [
          "Apply the Deed strictly in order: allocate Kwame's £20,000 salary out of the £15,000 pool first.",
          "That leaves £15,000 − £20,000 = −£5,000 remaining to be shared in the 3 : 2 ratio.",
          "Check that Kwame's total (+£20k − £3k = £17k) plus Sian's (−£2k) sums to +£15,000!",
        ],
      },
    {
      id: "business-activity-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "sectors-and-success",
      question:
        "Country V's GDP grows from **$300 billion** in 2015 to **$480 billion** in 2025. Over that decade, primary-sector share fell from **15% to 5%** of GDP, and secondary-sector share fell from **35% to 20%** of GDP. By how many **$ billions** did the **tertiary sector's** output increase between 2015 and 2025?",
      answer: { type: "number", value: 210, display: "$210 billion" },
      solution: [
        "2015 tertiary % = 100% − 15% − 35% = 50% → 2015 tertiary output = 50% × $300bn = $150bn.",
        "2025 tertiary % = 100% − 5% − 20% = 75% → 2025 tertiary output = 75% × $480bn = $360bn.",
        "Increase in tertiary dollar output = $360bn − $150bn = **$210 billion**.",
      ],
      commonError: "Taking (75% − 50%) × $480bn = $120bn instead of computing 2015 and 2025 dollar values separately!",
      traps: [
        {
          spec: { type: "number", value: 120 },
          feedback: "Careful! Total GDP changed from $300bn to $480bn — compute 50% of $300bn ($150bn) and 75% of $480bn ($360bn) separately!",
        },
        {
          spec: { type: "number", value: 360 },
          feedback: "$360bn is the 2025 tertiary output — subtract the 2015 tertiary output ($150bn) to find the increase!",
        },
      ],
      hints: [
        "Find 2015 tertiary % (100 − 15 − 35 = 50%) and multiply by $300bn.",
        "Find 2025 tertiary % (100 − 5 − 20 = 75%) and multiply by $480bn.",
        "Subtract 2015 tertiary output from 2025 tertiary output!",
      ],
    },
    {
      id: "business-activity-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "franchises-social-public",
      question:
        "**Case Study — Bright Spark Tutoring (310 tutors across 18 centres):** Bright Spark Ltd runs 18 company-owned maths & English centres in southern England. Its directors want to expand to **100 centres nationwide within three years**, but the company holds only £1.4m in cash reserves and each new centre costs £95,000 to lease and equip.\n\n**Assess** whether Bright Spark Ltd should expand nationwide by **selling franchises** (acting as a franchisor) rather than opening company-owned centres. *(9 marks)*",
          marks: 6,
      modelAnswer:
        "Becoming a franchisor allows Bright Spark Ltd to scale to 82 additional tutoring centres rapidly using local franchisees' £95,000 fit-out capital rather than depleting its own £1.4m cash buffer (which could fund fewer than 15 owned centres!). Local franchisee owner-managers also have intense personal profit incentives to recruit local students and supervise tutors carefully, while paying Bright Spark upfront fees and ongoing revenue royalties.\n\nHowever, Bright Spark surrenders a large share of each centre's annual operating profit compared with owning profitable branches outright. Worse, tutoring relies heavily on parent trust and safeguarding: if even one poorly vetted franchisee hires unqualified tutors or delivers weak exam results, viral parent complaints could tarnish all 100 Bright Spark centres.\n\nOverall, franchising is the superior growth route (**AJIM**), because £1.4m of internal cash cannot fund ~£7.8m of nationwide fit-outs within a strict three-year target without dangerous bank borrowing. **It depends on** Bright Spark enforcing rigorous franchisee vetting, mandatory tutor curriculum audits and termination clauses to protect educational quality.",
      markScheme: [
        {
          point: "Case FOR Franchisor route: Franchisees fund the £95,000 fit-outs + upfront/royalty income + motivated local owner-managers.",
          keywords: ["franchisees", "95,000", "royalties", "capital", "motivated"],
        },
        {
          point: "Quantitative AO2 application: £1.4m cash only covers ~14 centres vs ~£7.8m needed for 82 new tutoring centres in 3 years.",
          keywords: ["1.4m", "82", "100", "tutoring", "three years"],
        },
        {
          point: "Case AGAINST Franchisor route: Shares outlet profits + severe brand/safeguarding reputation risk if one centre delivers weak teaching.",
          keywords: ["profit", "reputation", "safeguarding", "tutors", "trust", "tarnish"],
        },
        {
          point: "Sustains strict FRANCHISOR perspective throughout (not franchisee!).",
          keywords: ["franchisor", "bright spark"],
        },
        {
          point: "Clear AJIM conclusion choosing franchising given the binding capital/time constraint.",
          keywords: ["overall", "superior", "borrowing"],
        },
        {
          point: "'It depends on' quality-control condition (vetting franchisees, curriculum audits, termination clauses).",
          keywords: ["it depends on", "vetting", "audits", "clauses", "quality"],
        },
      ],
      commonError: "Writing from the franchisee's viewpoint ('Bright Spark gets brand awareness') — Bright Spark IS the brand owner (franchisor)!",
      hints: [
        "Check the perspective: Bright Spark Ltd is becoming a **FRANCHISOR**!",
        "Use the numbers! 82 new centres × £95,000 ≈ £7.79m needed vs only £1.4m cash in bank!",
        "Balance rapid capital-light expansion against sharing branch profits & safeguarding/brand risk, ending with AJIM!",
      ],
    },
    {
      id: "business-activity-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "business-objectives",
      question:
        "**Case Study — EcoLoop Shoes Ltd (42 employees):** EcoLoop Shoes Ltd makes trainers from recycled ocean plastic in Brighton, selling at £110 per pair. Historically its primary objective was **social and environmental impact** (funding coastal clean-ups with 40% of profits). Facing rising energy bills and two cheap fast-fashion copycats, the finance director argues EcoLoop must abandon its coastal clean-up pledge and focus purely on **cost-cutting and profit maximisation**.\n\n**Evaluate** whether EcoLoop Shoes Ltd should replace its social/environmental objective with pure profit maximisation. *(12 marks)*",
      marks: 6,
      modelAnswer:
        "Pivoting toward cost control and profit retention immediately preserves cash buffers against rising Brighton factory energy bills and gives EcoLoop retained profit to cut prices or match fast-fashion copycats' marketing. Retaining the 40% profit previously donated to coastal clean-ups strengthens short-term solvency for a 42-staff SME.\n\nHowever, abandoning the ocean clean-up mission destroys EcoLoop's core Unique Selling Point (USP) that justifies its premium £110 trainer price! Ethical shoppers buy EcoLoop specifically for authentic sustainability; stripping away clean-up funding risks accusations of greenwashing, customer boycotts and demotivated eco-conscious staff — pushing EcoLoop into a price war against giant fast-fashion factories with far bigger economies of scale.\n\nOverall, EcoLoop should **not** abandon its social/environmental objective (**AJIM**), because a 42-employee Brighton maker can never beat mass-production copycats on low cost alone — its ethical mission *is* the commercial driver of long-run price-inelastic profitability. **It depends on** cash-flow severity: EcoLoop could temporarily trim the clean-up pledge from 40% to 20% of profits for 12 months while improving energy efficiency, preserving both survival and brand authenticity.",
      markScheme: [
        {
          point: "Case FOR Profit/Cost focus: Builds cash/retained profit buffer to survive energy inflation and fund competitive response.",
          keywords: ["retained profit", "energy", "solvency", "cash", "buffer"],
        },
        {
          point: "Strong AO2 application (£110 trainers, recycled ocean plastic, 40% coastal clean-ups, 42 staff, copycats).",
          keywords: ["110", "ocean plastic", "40%", "clean-up", "clean-ups", "copycats"],
        },
        {
          point: "Case AGAINST abandoning mission: Destroys ethical USP / triggers greenwashing backlash / loses price-inelastic loyalty.",
          keywords: ["usp", "greenwashing", "boycotts", "inelastic", "ethical"],
        },
        {
          point: "Strategic scale insight: A 42-staff SME cannot win a pure low-cost price war against mass-market fast-fashion rivals.",
          keywords: ["42", "economies of scale", "price war"],
        },
        {
          point: "Clear AJIM judgement rejecting total abandonment of the ethical mission.",
          keywords: ["overall", "should not", "authenticity"],
        },
        {
          point: "Nuanced 'It depends on' synthesis (e.g. flexing donation % temporarily from 40% to 20% if liquidity is critical).",
          keywords: ["it depends on", "temporarily", "20%"],
        },
      ],
      commonError: "Treating ethical objectives and financial survival as mutually exclusive rather than showing how EcoLoop's mission underpins its £110 price premium.",
      hints: [
        "Ask WHY customers willingly pay £110 for EcoLoop's ocean-plastic trainers in the first place!",
        "Can a 42-worker Brighton workshop beat giant fast-fashion rivals on cheap unit costs?",
        "Use **AJIM** to show how non-financial authenticity protects long-run financial profit — perhaps flexing the 40% pledge temporarily rather than scrapping it.",
      ],
    },
  ],
};
