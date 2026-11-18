import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-p2b",
  title: "Paper 2B: Investigating Large Business (> 250 Employees — Mock B)",
  calculator: true,
  minutes: 90,
  questions: [
    // -------------------------------------------------------------------------
    // 1. BUSINESS ACTIVITY (4 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p2b-q01",
      topicId: "business-activity",
      guideRef: "sectors-and-success",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "Over the past 40 years in developed economies such as the UK and Singapore, the share of GDP and employment in heavy manufacturing has declined while financial services, cloud computing, aviation and hospitality have grown rapidly.\n\nWhat is this structural shift in economic sectors called?",
      options: [
        "De-industrialisation — shifting away from the secondary sector toward the tertiary service sector",
        "Primary collectivisation — returning urban workers to subsistence farming",
        "Hostile nationalisation of all public limited companies",
        "Unlimited liability incorporation",
      ],
      answerIndex: 0,
      hints: [
        "Manufacturing belongs to the **secondary** sector; finance, IT and hospitality belong to the **tertiary** sector.",
        "What term describes the relative decline of secondary-sector manufacturing in mature economies?",
      ],
      explanation:
        "De-industrialisation describes the long-term structural shift in developed economies away from secondary-sector manufacturing toward higher-value tertiary services as automation rises and labour-intensive manufacturing moves overseas.",
    },
    {
      id: "exam-p2b-q02",
      topicId: "business-activity",
      guideRef: "unincorporated-incorporated",
      kind: "mcq",
      difficulty: "core",
      question:
        "**NutraVibe Beverages Plc** (6,400 employees) sees its stock-market share price fall 32% after a rival conglomerate quietly buys up 51% of NutraVibe's ordinary shares on the open market and replaces the Board.\n\nWhy was NutraVibe Beverages Plc exposed to this **hostile takeover**, whereas a family-owned private limited company (Ltd) would not be?",
      options: [
        "Private limited companies are protected by government ownership from ever changing directors",
        "Public limited companies have unlimited liability if their share price drops",
        "Ordinary shares in a Plc are freely traded by anyone on a public stock exchange without needing existing directors' permission",
        "Only firms with more than 5,000 staff are allowed to retain profits",
      ],
      answerIndex: 2,
      hints: [
        "Compare how shares change hands in an **Ltd** (private consent required) versus a **Plc** (freely bought/sold on the public stock market).",
        "What percentage of voting shares gives an acquirer majority control?",
      ],
      explanation:
        "Because Plc shares trade freely on a public stock exchange, an external predator can accumulate over 50% of voting equity directly from market investors without Board consent — a classic disadvantage of Plc flotation.",
    },
    {
      id: "exam-p2b-q03",
      topicId: "business-activity",
      guideRef: "franchises-social-public",
      kind: "short",
      difficulty: "core",
      question:
        "**HelioGrid Renewables Plc** (4,100 employees, UK) and a major Indian engineering conglomerate set up a **new shared company (50% equity each)** to manufacture offshore wind-turbine blades in Gujarat — pooling £160 million of capital risk and local regulatory knowledge while keeping their parent companies independent.\n\nState the **two-word term** for this collaborative business structure.",
      answer: {
        type: "text",
        accept: ["joint venture"],
        display: "joint venture",
      },
      traps: [
        {
          spec: { type: "text", accept: ["franchise", "franchising"] },
          feedback:
            "A franchise licenses an existing brand format in return for royalties. Two independent firms creating a shared 50:50 enterprise for a specific market/project is a joint venture!",
        },
        {
          spec: { type: "text", accept: ["merger", "takeover"] },
          feedback: "Notice both parent companies remain independent — they only co-own the new Gujarat enterprise: a joint venture.",
        },
      ],
      hints: [
        "Two separate parent businesses pool capital, expertise and risk into a shared enterprise for an overseas market while staying independent.",
        "Think of the exact two-word Edexcel ownership/growth term starting with 'joint'.",
      ],
      solution: [
        "When two or more independent businesses establish a shared enterprise to pool capital, local knowledge and risk on a specific venture, it is a **joint venture**.",
      ],
      commonError: "Confusing a joint venture (shared equity enterprise between independent firms) with a full merger or franchise.",
    },
    {
      id: "exam-p2b-q04",
      topicId: "business-activity",
      guideRef: "franchises-social-public",
      kind: "written",
      difficulty: "core",
      marks: 3,
      question:
        "A national government decides to **privatise** its state-owned freight rail corporation (employing 11,000 staff) by selling it to private-sector investors.\n\n**Explain** one advantage to the government or economy of privatising this large public corporation. *(3 marks)*",
      hints: [
        "Choose EITHER the **profit motive driving efficiency/innovation** (cutting taxpayer subsidies) OR the **huge one-off capital receipt for the government treasury**.",
        "Develop a clear 3-step chain applied to the 11,000-worker freight rail network.",
      ],
      modelAnswer:
        "Transferring freight rail operations to private shareholders introduces a strong profit motive and accountability to capital markets, pressuring managers to modernise locomotive scheduling and cut bureaucratic waste. Higher operational efficiency eliminates the need for ongoing taxpayer subsidies while freeing government funds from the sale proceeds to invest in hospitals or schools.",
      markScheme: [
        {
          point: "Identifies profit motive / market discipline (or large one-off sale revenue raised for the government).",
          keywords: ["profit motive", "shareholder", "sale proceed", "treasury", "private investor"],
        },
        {
          point: "Explains how management behaviour changes (cutting waste, modernising freight scheduling or raising efficiency).",
          keywords: ["efficien", "modernis", "waste", "bureaucra", "innovat"],
        },
        {
          point: "Links to fiscal/economic benefit (ends taxpayer loss subsidies or funds public services like healthcare/education).",
          keywords: ["subsid", "taxpayer", "hospital", "school", "public service"],
        },
      ],
      commonError: "Confusing privatisation (public sector → private sector) with nationalisation (private → state ownership).",
    },

    // -------------------------------------------------------------------------
    // 2. LOCATION, GLOBALISATION & EXTERNAL FACTORS (4 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p2b-q05",
      topicId: "location-globalisation-external",
      guideRef: "government-policies",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "The government cuts the headline rate of **Corporation Tax** (a direct tax on company profits) from 25% to 19%.\n\nWhat is the most direct positive impact on **4,100-employee HelioGrid Renewables Plc**?",
      options: [
        "Customers pay less Value Added Tax at supermarket checkouts",
        "HelioGrid retains a larger share of post-tax profit, boosting internal funds available to reinvest in turbine R&D or pay dividends",
        "Central bank mortgage interest rates automatically drop to zero",
        "Foreign import quotas on steel are abolished worldwide",
      ],
      answerIndex: 1,
      hints: [
        "Corporation tax is deducted directly from a company's taxable profits.",
        "If less tax is taken out, what happens to retained profit available for R&D investment and dividends?",
      ],
      explanation:
        "Cutting corporation tax leaves HelioGrid Plc with higher post-tax profit, directly increasing retained earnings for capital investment in wind-turbine R&D and making the country more attractive for FDI.",
    },
    {
      id: "exam-p2b-q06",
      topicId: "location-globalisation-external",
      guideRef: "trade-exchange-rates",
      kind: "short",
      difficulty: "core",
      question:
        "**AeroLink Aviation Plc** (19,500 employees, UK) imports flight-deck avionics sensors from a US aerospace supplier invoiced at **$585,000**.\n\nThe exchange rate is **£1 = $1.30**.\n\nCalculate the cost of this avionics order in pounds (**£**).",
      answer: {
        type: "number",
        value: 450000,
        display: "£450,000",
      },
      traps: [
        {
          spec: { type: "number", value: 760500 },
          feedback: "You multiplied $585,000 by 1.30! Since £1 = $1.30, divide the US dollar invoice by 1.30 to convert back into £.",
        },
        {
          spec: { type: "number", value: 585000 },
          feedback: "$585,000 is the US dollar amount — divide by 1.30 to find the cost in pounds (£).",
        },
      ],
      hints: [
        "You are converting foreign currency ($) back into domestic currency (£) where £1 = $1.30.",
        "Divide $585,000 by 1.30.",
      ],
      solution: [
        "Cost in pounds (£) = $585,000 ÷ 1.30 = **£450,000**.",
      ],
      commonError: "Multiplying $585,000 by 1.30 instead of dividing.",
    },
    {
      id: "exam-p2b-q07",
      topicId: "location-globalisation-external",
      guideRef: "external-pestle-ethics",
      kind: "mcq",
      difficulty: "core",
      question:
        "**UrbanStyle Apparel Plc** (22,000 employees) discovers through an independent audit that a subcontracted overseas garment factory has been paying workers below local statutory minimums. UrbanStyle immediately funds wage remediation, publishes a full supplier map and switches to audited Living-Wage factories, raising garment Cost of Sales by 9%.\n\nWhich statement best captures the **ethical vs financial trade-off** for a large listed PLC?",
      options: [
        "Ethical sourcing guarantees that Cost of Sales falls to zero within one week",
        "Large PLCs are legally exempt from reputational damage or consumer boycotts",
        "Publishing supplier maps violates competition law in all OECD countries",
        "Short-term gross margins tighten due to +9% unit costs, but long-term brand equity, investor ESG support and protection from viral boycotts are safeguarded",
      ],
      answerIndex: 3,
      hints: [
        "Contrast the immediate short-term hit (+9% Cost of Sales) against what happens to a global fashion PLC if a sweatshop scandal goes viral!",
        "Think both customers (boycotts) and institutional PLC investors (ESG funds).",
      ],
      explanation:
        "Paying Living Wages raises short-term Cost of Sales by 9%, squeezing gross margins unless prices adjust, but protects UrbanStyle Plc from devastating global consumer boycotts, talent flight and institutional shareholder divestment.",
    },
    {
      id: "exam-p2b-q08",
      topicId: "location-globalisation-external",
      guideRef: "trade-exchange-rates",
      kind: "written",
      difficulty: "challenge",
      marks: 6,
      question:
        "**AeroLink Aviation Plc** (19,500 employees, London hub) earns 35% of its ticket revenue from **American tourists booking UK holidays in US dollars ($)**, while **aviation jet fuel and Boeing spare parts are priced globally in US dollars ($)**. Over three months, **the pound (£) depreciates sharply** against the US dollar.\n\n**Analyse** the likely impact of this weaker pound on AeroLink Aviation Plc. *(6 marks)*",
      hints: [
        "Apply **WPIDEC** (**W**eak **P**ound **I**mports **D**earer **E**xports **C**heaper) to *both* sides of AeroLink's transatlantic business!",
        "1) Inbound US tourism = UK service export (cheaper in $ → fuller flights / higher £ revenue per $ earned). 2) Jet fuel & Boeing parts = $ imports (dearer in £ → higher operating costs!).",
      ],
      modelAnswer:
        "Under WPIDEC (Weak Pound, Imports Dearer, Exports Cheaper), a weaker pound makes UK flights and London hotel stays cheaper in US dollars for American travellers. Higher transatlantic passenger bookings raise AeroLink's load factors, and every dollar of ticket revenue converts back into more sterling on the airline's income statement.\n\nConversely, because jet fuel and aircraft spare parts are priced internationally in US dollars, sterling depreciation makes these essential imported inputs far more expensive in pounds. Unless AeroLink has hedged its fuel bills or adds ticket surcharges, surging sterling fuel expenses will squeeze its operating profit margin.",
      markScheme: [
        {
          point: "Applies currency depreciation to exports/inbound tourism (cheaper in US dollars / WPIDEC).",
          keywords: ["wpidec", "cheaper in us", "cheaper for american", "inbound", "transatlantic"],
        },
        {
          point: "Develops revenue gain for AeroLink (higher US passenger demand / fuller aircraft or $ revenue converts into more £).",
          keywords: ["load factor", "more sterling", "booking", "converts"],
        },
        {
          point: "Applies currency depreciation to dollar-denominated imports (imports become dearer / more expensive in £).",
          keywords: ["more expensive in pound", "dearer", "imported input"],
        },
        {
          point: "Applies specifically to aviation jet fuel and aircraft spare parts.",
          keywords: ["fuel", "spare part", "aircraft"],
        },
        {
          point: "Develops cost/profitability impact (higher operating expenses / squeezed operating profit margin).",
          keywords: ["operating profit", "margin", "squeeze", "surcharge"],
        },
        {
          point: "Notes mitigating airline factor (fuel hedging or passing fuel surcharges onto fares).",
          keywords: ["hedg", "surcharge", "pass"],
        },
      ],
      commonError: "Seeing only that US tourists bring higher bookings while missing the massive surge in US-dollar jet fuel costs!",
    },

    // -------------------------------------------------------------------------
    // 3. PEOPLE: COMMUNICATION, RECRUITMENT & TRAINING (4 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p2b-q09",
      topicId: "people-communication-recruitment",
      guideRef: "training-employment-law",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "**AeroLink Aviation Plc** (19,500 employees) trains cabin crew inside a full-motion emergency-evacuation cabin simulator at an aviation academy away from live passenger flights.\n\nWhy is **off-the-job simulator training** essential here rather than learning purely on-the-job during real passenger flights?",
      options: [
        "Off-the-job aviation simulators are completely free to build and operate",
        "Cabin crew are legally forbidden from speaking to experienced senior pursers on aircraft",
        "High-risk emergencies (cabin smoke or water ditching) can be practised safely without endangering paying passengers or disrupting live flight schedules",
        "Simulator training guarantees zero cabin crew ever resign for rival airlines",
      ],
      answerIndex: 2,
      hints: [
        "Imagine trying to practise an aircraft smoke evacuation for the first time on a real commercial flight at 36,000 feet!",
        "What makes off-the-job simulation worth its high cost in aviation?",
      ],
      explanation:
        "Off-the-job simulator training lets crew rehearse life-critical emergency evacuations safely and repeatedly under expert instruction without risking passenger safety or delaying commercial flights, despite high facility costs.",
    },
    {
      id: "exam-p2b-q10",
      topicId: "people-communication-recruitment",
      guideRef: "recruitment-selection",
      kind: "short",
      difficulty: "warmup",
      question:
        "**CyberShield Cloud Plc** (1,800 employees) appoints a specialist headhunting agency and advertises internationally to hire a new Chief AI Security Officer from outside the company rather than promoting an existing manager.\n\nState the **two-word term** for hiring candidates from outside the organisation.",
      answer: {
        type: "text",
        accept: ["external recruitment"],
        display: "external recruitment",
      },
      traps: [
        {
          spec: { type: "text", accept: ["internal recruitment"] },
          feedback: "Internal recruitment promotes someone already employed *inside* CyberShield. Hiring from outside the organisation is external recruitment!",
        },
      ],
      hints: [
        "The candidate is recruited from *outside* the existing 1,800-person workforce.",
        "Contrast 'internal' versus 'external' recruitment.",
      ],
      solution: [
        "Filling a job vacancy by attracting and appointing applicants from outside the existing workforce is **external recruitment**.",
      ],
      commonError: "Confusing external recruitment (hiring from outside) with off-the-job training (external courses for existing staff).",
    },
    {
      id: "exam-p2b-q11",
      topicId: "people-communication-recruitment",
      guideRef: "effective-communication",
      kind: "mcq",
      difficulty: "core",
      question:
        "At **NutraVibe Beverages Plc** (6,400 employees), the Marketing Director, Operations Director and Finance Director hold a weekly cross-departmental video meeting to align summer bottle-production capacity with TV advertising launches.\n\nWhich type of internal communication is taking place between these three directors?",
      options: [
        "Horizontal (lateral) formal communication between managers at the same hierarchical level",
        "Downward informal gossip from directors to casual cleaners",
        "Upward external communication with supermarket shoppers",
        "Unincorporated sole-trader delegation",
      ],
      answerIndex: 0,
      hints: [
        "Marketing Director, Operations Director and Finance Director all sit on the **same tier** of the organisational chart.",
        "What is communication *across* the same level of hierarchy called?",
      ],
      explanation:
        "Communication between heads of functional departments sitting at the same level of authority is horizontal (lateral) communication, vital in large PLCs so Marketing never promotes stock that Operations hasn't bottled.",
    },
    {
      id: "exam-p2b-q12",
      topicId: "people-communication-recruitment",
      guideRef: "training-employment-law",
      kind: "written",
      difficulty: "core",
      marks: 3,
      question:
        "**UrbanStyle Apparel Plc** employs 22,000 staff, including 4,500 order-pickers inside highly automated robotic fulfilment warehouses. Last quarter, UrbanStyle invested £3.2 million upgrading conveyor guardrails, ergonomic lifting stations and safety sensors above minimum legal standards.\n\n**Explain** one financial or operational benefit to UrbanStyle Apparel Plc of investing heavily in workplace health and safety. *(3 marks)*",
      hints: [
        "Trace what happens inside a 4,500-worker robotic warehouse when injuries fall!",
        "Chain: fewer warehouse accidents/sick days → uninterrupted robotic dispatch + avoiding tribunal fines/compensation → lower disruption costs & stronger employer brand.",
      ],
      modelAnswer:
        "Upgrading robotic guardrails and ergonomic stations reduces warehouse injuries and musculoskeletal strain among the 4,500 order-pickers, cutting staff absenteeism and halting costly conveyor shutdowns. Avoiding workplace accidents also protects UrbanStyle from heavy regulatory fines, compensation claims and adverse media headlines.",
      markScheme: [
        {
          point: "Identifies drop in workplace accidents, injuries or sick leave/absenteeism.",
          keywords: ["injur", "accident", "absentee", "sick"],
        },
        {
          point: "Links to warehouse operational continuity or productivity (fewer conveyor stoppages / faster order fulfilment).",
          keywords: ["shutdown", "stoppage", "productiv", "fulfil", "morale"],
        },
        {
          point: "Links to financial/legal protection (avoids health-and-safety fines, compensation lawsuits or reputational harm).",
          keywords: ["fine", "compensation", "lawsuit", "claim", "media", "reputation"],
        },
      ],
      commonError: "Viewing health-and-safety spending purely as a dead cost while ignoring avoided fines, compensation payouts and warehouse downtime.",
    },

    // -------------------------------------------------------------------------
    // 4. PEOPLE: MOTIVATION & ORGANISATION (4 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p2b-q13",
      topicId: "motivation-organisation",
      guideRef: "centralisation-leadership",
      kind: "mcq",
      difficulty: "core",
      question:
        "During an volcanic-ash airspace closure stranding 48 aircraft across Europe, the Operations Control Director of **19,500-employee AeroLink Aviation Plc** issues immediate non-negotiable flight-diversion and crew-redeployment orders without holding team consultations.\n\nWhy is an **autocratic leadership style** appropriate in this situation?",
      options: [
        "AeroLink pilots and engineers are unskilled workers who dislike aviation safety",
        "Autocratic leadership permanently maximises creative blue-sky R&D brainstorming",
        "Large PLCs are legally barred from ever consulting trade unions in calm periods",
        "Time-critical safety crises require rapid, decisive, coordinated command from the centre rather than lengthy group debate",
      ],
      answerIndex: 3,
      hints: [
        "Even in a skilled airline, what matters most when 48 planes are airborne during an emergency airspace closure?",
        "Match leadership style to **time pressure and safety risk**.",
      ],
      explanation:
        "In an acute operational and safety emergency with 48 aircraft needing instant diversion slots, autocratic command delivers fast, unambiguous coordination — whereas democratic consultation would cause dangerous delays.",
    },
    {
      id: "exam-p2b-q14",
      topicId: "motivation-organisation",
      guideRef: "financial-rewards",
      kind: "short",
      difficulty: "challenge",
      question:
        "At **HelioGrid Renewables Plc** (4,100 employees), a corporate sales director earns a **basic annual salary of £54,000** plus **1.5% sales commission** on the value of grid-battery contracts signed **above a £1,000,000 annual threshold**.\n\nThis year she signs **£3,400,000** of grid-battery contracts.\n\nCalculate her **total gross annual pay** (£).",
      answer: {
        type: "number",
        value: 90000,
        display: "£90,000",
      },
      traps: [
        {
          spec: { type: "number", value: 105000 },
          feedback:
            "Read carefully: the 1.5% commission applies only to sales **above £1,000,000** (£3,400,000 − £1,000,000 = £2,400,000), not the whole £3,400,000!",
        },
        {
          spec: { type: "number", value: 36000 },
          feedback: "£36,000 is her commission — add her £54,000 basic annual salary to find total gross pay!",
        },
        {
          spec: { type: "number", value: 414000 },
          feedback: "Check your percentage: 1.5% is 0.015 (not 15% = 0.15)!",
        },
      ],
      hints: [
        "Step 1: Commissionable sales = £3,400,000 − £1,000,000 = £2,400,000.",
        "Step 2: Commission = 1.5% (0.015) × £2,400,000; then add the £54,000 basic salary.",
      ],
      solution: [
        "Sales above £1,000,000 threshold = £3,400,000 − £1,000,000 = £2,400,000.",
        "Commission = 0.015 × £2,400,000 = £36,000.",
        "Total gross annual pay = £54,000 + £36,000 = **£90,000**.",
      ],
      commonError: "Applying 1.5% to all £3.4m instead of the £2.4m above the threshold, or forgetting to add the £54,000 base salary.",
    },
    {
      id: "exam-p2b-q15",
      topicId: "motivation-organisation",
      guideRef: "organisational-charts",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "**ParcelSwift Logistics Plc** employs 3,600 staff organised into four specialist head-office divisions: **Human Resources, Finance, Marketing, and Operations**.\n\nWhat is the main advantage of organising a large PLC into **functional departments**?",
      options: [
        "Each department works in total secrecy to prevent company-wide goals",
        "Specialists (such as chartered accountants or logistics engineers) pool expertise, raising departmental efficiency and clear career progression",
        "Functional departments eliminate all layers of hierarchy so 3,600 staff report to nobody",
        "Every van driver simultaneously writes audited PLC tax returns",
      ],
      answerIndex: 1,
      hints: [
        "Why group qualified accountants together in Finance and route-planning engineers together in Operations?",
        "Think division of labour, specialist mentoring and managerial economies of scale!",
      ],
      explanation:
        "Grouping specialists into functional departments captures managerial economies of scale: experts share technical knowledge, avoid duplicating admin systems and follow clear specialist promotion ladders (though senior leaders must guard against departmental silos).",
    },
    {
      id: "exam-p2b-q16",
      topicId: "motivation-organisation",
      guideRef: "centralisation-leadership",
      kind: "written",
      difficulty: "core",
      marks: 6,
      question:
        "**UrbanStyle Apparel Plc** (22,000 employees) operates 340 fashion stores across the UK, Southern Europe, Japan and Southeast Asia. Currently, **100% of clothing ranges and fabric purchasing are centralised** in London — which resulted in heavy wool winter coats arriving in Singapore stores during 31 °C tropical heat.\n\n**Analyse** whether UrbanStyle Apparel Plc should switch to **decentralised** regional buying teams. *(6 marks)*",
      hints: [
        "Analyse the clear **advantage of decentralising** (fixing the 31 °C winter-coat blunder! Regional buyers match tropical vs European climates, body sizing and local street-fashion trends fast).",
        "Counter with the **cost of losing centralisation** (losing global bulk-fabric purchasing economies of scale, duplicating four regional buying offices' salaries, or inconsistent global brand identity).",
      ],
      modelAnswer:
        "Empowering decentralised regional buying teams in Asia and Southern Europe ensures clothing ranges fit local climates, sizing and fast-moving street trends, preventing costly blunders like shipping heavy wool coats into tropical Singapore. Faster local stock decisions reduce end-of-season clearance markdowns and motivate regional managers through greater autonomy.\n\nHowever, splitting procurement across separate regional offices sacrifices UrbanStyle's global bulk-buying clout when ordering cotton and denim, raising fabric Cost of Sales. Hiring separate buying and merchandising teams in each region also duplicates fixed salary overheads and risks fragmenting UrbanStyle's coherent global brand image.",
      markScheme: [
        {
          point: "Explains local market responsiveness (matching climate, sizing and regional fashion trends).",
          keywords: ["climate", "tropical", "local", "sizing", "trend"],
        },
        {
          point: "Links tailored ranges to commercial benefit (fewer unsold winter coats / fewer clearance markdowns / higher sales) or manager autonomy.",
          keywords: ["markdown", "unsold", "clearance", "autonom", "faster"],
        },
        {
          point: "Identifies loss of central purchasing economies of scale (smaller fabric orders raise unit Cost of Sales).",
          keywords: ["bulk", "purchasing", "clout", "cotton", "cost of sales"],
        },
        {
          point: "Identifies duplication of fixed managerial overheads across multiple regional buying offices.",
          keywords: ["duplicat", "overhead", "salary", "separate"],
        },
        {
          point: "Notes risk of inconsistent global brand image or quality standards across countries.",
          keywords: ["fragment", "inconsistent", "brand image", "coherent"],
        },
        {
          point: "Applies cleanly to multi-country fashion retail context.",
          keywords: ["fashion", "denim", "garment", "merchandising"],
        },
      ],
      commonError: "Analysing only why London got Singapore's weather wrong without weighing the loss of global fabric bulk-buying economies of scale!",
    },

    // -------------------------------------------------------------------------
    // 5. FINANCE: SOURCES, CASH FLOW & BREAK-EVEN (5 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p2b-q17",
      topicId: "sources-cashflow-breakeven",
      guideRef: "internal-external-finance",
      kind: "mcq",
      difficulty: "core",
      question:
        "**NutraVibe Beverages Plc** (6,400 employees) holds £95 million in **retained profit** from previous years and uses £60 million of it to automate a new canning plant in Germany.\n\nAlthough retained profit requires **zero interest payments** and **no share dilution**, what is a key drawback or trade-off of using retained profit for a listed PLC?",
      options: [
        "Retained profit must be repaid to the central bank within 90 days",
        "Using internal retained profit automatically increases the company's gearing ratio above 80%",
        "Opportunity cost — funds reinvested cannot be paid out as immediate shareholder dividends or earn interest elsewhere, which may displease income-focused investors",
        "Private partnerships are the only legal structure permitted to retain profits",
      ],
      answerIndex: 2,
      hints: [
        "Retained profit has no explicit bank interest charge, so why isn't it completely 'costless' in economics and PLC shareholder relations?",
        "Think **opportunity cost** and short-term dividend expectations!",
      ],
      explanation:
        "Even though retained profit avoids interest and share dilution, it carries an opportunity cost (forgone interest or alternative projects) and reduces cash available for short-term dividends, potentially displeasing pension funds seeking regular income.",
    },
    {
      id: "exam-p2b-q18",
      topicId: "sources-cashflow-breakeven",
      guideRef: "costs-revenue-profit",
      kind: "short",
      difficulty: "core",
      question:
        "**NutraVibe Beverages Plc** (6,400 employees) operates an automated sparkling-tea bottling plant producing and selling **400,000 cases** in May:\n\n- Wholesale selling price per case: **£18.00**\n- Variable cost per case (cans, tea extract, shrink-wrap): **£7.50**\n- Monthly fixed factory overheads: **£1,400,000**\n\nCalculate the bottling plant's **monthly profit** (£) in May.",
      answer: {
        type: "number",
        value: 2800000,
        display: "£2,800,000",
      },
      traps: [
        {
          spec: { type: "number", value: 4200000 },
          feedback: "£4,200,000 is Total Contribution (400,000 × £10.50) — subtract Monthly Fixed Overheads of £1,400,000!",
        },
        {
          spec: { type: "number", value: 4400000 },
          feedback: "£4,400,000 is Total Cost (£3,000,000 + £1,400,000) — subtract it from Total Revenue (£7,200,000)!",
        },
        {
          spec: { type: "number", value: 7200000 },
          feedback: "£7,200,000 is Total Revenue — subtract Total Costs (£4,400,000) to find Profit!",
        },
      ],
      hints: [
        "Total Revenue = 400,000 × £18.00 = £7,200,000.",
        "Total Variable Cost = 400,000 × £7.50 = £3,000,000; add Fixed Costs (£1,400,000) and subtract from Revenue.",
      ],
      solution: [
        "Total Revenue = 400,000 × £18.00 = £7,200,000.",
        "Total Variable Costs = 400,000 × £7.50 = £3,000,000; Total Costs = £3,000,000 + £1,400,000 = £4,400,000.",
        "Monthly Profit = £7,200,000 − £4,400,000 = **£2,800,000**.",
      ],
      commonError: "Stopping at Total Contribution (£4,200,000) without deducting the £1,400,000 fixed overheads.",
    },
    {
      id: "exam-p2b-q19",
      topicId: "sources-cashflow-breakeven",
      guideRef: "breakeven-charts-mos",
      kind: "short",
      difficulty: "challenge",
      question:
        "A European factory owned by **NutraVibe Beverages Plc** (6,400 employees) forecasts annual sales of **520,000 crates** of isotonic sports drink using the following data:\n\n- Annual fixed costs: **£2,880,000**\n- Wholesale selling price per crate: **£20**\n- Variable cost per crate: **£12**\n\nCalculate the factory's forecast **Margin of Safety** in crates (units).",
      answer: {
        type: "number",
        value: 160000,
        display: "160,000 units",
      },
      traps: [
        {
          spec: { type: "number", value: 360000 },
          feedback: "360,000 crates is the Break-Even Output (£2,880,000 ÷ £8)! Now subtract 360,000 from forecast sales (520,000) for the Margin of Safety.",
        },
        {
          spec: { type: "number", value: 376000 },
          feedback: "You calculated Break-Even by dividing Fixed Costs by Selling Price (£20) instead of Contribution (£20 − £12 = £8)!",
        },
        {
          spec: { type: "number", value: 880000 },
          feedback: "Subtract Break-Even Output (360,000) from Forecast Output (520,000) — don't add them!",
        },
      ],
      hints: [
        "Step 1: Find Break-Even Output = £2,880,000 ÷ (£20 − £12).",
        "Step 2: Margin of Safety = Forecast Output (520,000) − Break-Even Output.",
      ],
      solution: [
        "Contribution per crate = £20 − £12 = £8.",
        "Break-Even Output = £2,880,000 ÷ £8 = 360,000 crates.",
        "Margin of Safety = 520,000 − 360,000 = **160,000** crates.",
      ],
      commonError: "Stopping after step 1 (Break-Even = 360,000) instead of subtracting from 520,000 to give Margin of Safety (160,000).",
    },
    {
      id: "exam-p2b-q20",
      topicId: "sources-cashflow-breakeven",
      guideRef: "cash-flow-forecasting",
      kind: "written",
      difficulty: "challenge",
      marks: 9,
      question:
        "**HelioGrid Renewables Plc** (4,100 employees) is owed **£40 million in trade receivables** by three European utility companies on 90-day credit terms, creating a temporary £28 million cash-flow deficit next month when copper-cable suppliers and engineers' salaries must be paid. The Finance Director compares two short-term remedies:\n\n- **Remedy 1**: Sell the £40 million utility invoices immediately to a specialist **debt-factoring** company (receiving 88% cash within 48 hours, with the factor keeping a 4% fee = £1.6 million).\n- **Remedy 2**: Arrange a **short-term corporate bank overdraft** and negotiate **staged progress payments** on future turbine contracts.\n\n**Assess** which remedy HelioGrid Renewables Plc should use to resolve its cash-flow deficit. *(9 marks)*",
      hints: [
        "Quantify Remedy 1: 88% of £40m injects **£35.2m cash in 48 hours** (easily clearing the £28m deficit!), BUT sacrifices **£1.6m of pure profit** in factoring fees and risks alienating prestigious government/utility clients if chased aggressively by a third-party factor!",
        "Compare Remedy 2: paying overdraft interest *only* on the exact £28m gap for ~60–90 days costs a fraction of £1.6m (e.g. ~£350k–£400k at 6% p.a. for 2–3 months!) and preserves client relationships, while staged payments fix the root cause long-term!",
      ],
      modelAnswer:
        "Debt factoring (Remedy 1) guarantees an immediate cash injection of £35.2 million (88% of £40 million) within 48 hours, comfortably eliminating next month's £28 million cash-flow deficit so engineers' payroll and copper-cable bills are paid on time without increasing bank debt. Factoring also hands credit-control administration to the specialist agency. However, forfeiting a 4% fee sacrifices £1.6 million directly off HelioGrid's operating profit on blue-chip European utility invoices that were virtually certain to be paid at 90 days anyway, and aggressive third-party chasing could sour delicate B2B relationships needed for repeat wind-farm tenders.\n\nBy contrast, Remedy 2 uses a flexible corporate bank overdraft to bridge only the exact £28 million shortfall for the remaining two to three months until the utilities pay: even at 6% annual overdraft interest, two months of borrowing costs roughly £280,000 — saving well over £1.3 million compared with factoring. Pairing an overdraft with staged milestone payments on future turbine contracts also cures the structural working-capital gap without signalling financial distress to clients, though overdrafts are technically repayable on demand.\n\nOverall, HelioGrid Renewables Plc should choose Remedy 2: because state-backed European utilities carry minimal bad-debt risk and a 4,100-staff PLC can readily secure credit lines, giving away £1.6 million to a debt factor is unnecessarily expensive compared with temporary overdraft cover and milestone billing.",
      markScheme: [
        {
          point: "Uses figures on Remedy 1: 88% of £40m delivers £35.2m immediate cash within 48 hours, clearing the £28m deficit.",
          keywords: ["35.2", "48 hour", "immediate cash"],
        },
        {
          point: "Notes administrative/risk benefit of factoring (outsources credit chasing / no new bank borrowing).",
          keywords: ["credit-control", "administration", "payroll"],
        },
        {
          point: "Analyses profit hit of Remedy 1 (£1.6 million fee directly reduces operating profit on low-default utility clients).",
          keywords: ["1.6 million", "1.6m", "forfeit", "operating profit"],
        },
        {
          point: "Analyses B2B relationship/reputation risk if external factor chases utility clients aggressively or signals distress.",
          keywords: ["sour", "relationship", "distress", "tender", "repeat"],
        },
        {
          point: "Explains flexibility and lower cost of Remedy 2 (overdraft charges interest only on the £28m daily balance for 2–3 months, far below £1.6m).",
          keywords: ["280,000", "1.3 million", "exact", "bridge", "only"],
        },
        {
          point: "Explains how staged milestone payments solve the underlying long-term cash-flow timing problem.",
          keywords: ["milestone", "root cause", "structural", "future"],
        },
        {
          point: "Acknowledges drawback of overdraft (variable interest rate / technically repayable on demand by the bank).",
          keywords: ["on demand", "repayable"],
        },
        {
          point: "Reaches a clear, explicit recommendation between Remedy 1 and Remedy 2.",
          keywords: ["overall", "should choose", "recommend"],
        },
        {
          point: "Justifies choice using the high creditworthiness of European utility debtors and PLC banking standing.",
          keywords: ["bad-debt", "blue-chip", "unnecessarily expensive", "credit line"],
        },
      ],
      commonError: "Describing debt factoring generically without spotting that giving up £1.6m on ultra-safe utility invoices is vastly dearer than a 60-day PLC overdraft!",
    },
    {
      id: "exam-p2b-q21",
      topicId: "sources-cashflow-breakeven",
      guideRef: "cash-flow-forecasting",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "**UrbanStyle Apparel Plc** (22,000 employees) buys £45 million of autumn denim inventory in July (paid in cash in August) and sells all of it to shoppers for £82 million in October.\n\nHow do **August's net cash flow** and **annual profit** compare on this transaction?",
      options: [
        "August suffers £82 million of accounting loss and +£45 million cash inflow",
        "August suffers a £45 million cash outflow (hurting short-term liquidity), whereas the overall transaction generates £37 million of gross profit across the autumn",
        "Cash flow and profit are always identical in every calendar month",
        "Buying inventory is neither a cash outflow nor a Cost of Sales",
      ],
      answerIndex: 1,
      hints: [
        "Separate *when cash leaves the bank* (August: −£45m) from *gross profit earned when the denim sells* (£82m − £45m = £37m).",
        "Classic Edexcel timing difference between Cash Flow and Profit!",
      ],
      explanation:
        "Paying suppliers £45m in August creates a heavy August cash outflow before shoppers buy a single pair of jeans, whereas matching October revenue (£82m) against Cost of Sales (£45m) yields £37m of gross profit.",
    },

    // -------------------------------------------------------------------------
    // 6. FINANCE: ACCOUNTS & RATIOS (5 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p2b-q22",
      topicId: "accounts-ratios",
      guideRef: "income-statement",
      kind: "short",
      difficulty: "core",
      question:
        "Summary Statement of Comprehensive Income for **UrbanStyle Apparel Plc** (22,000 employees, all figures in **£ million**):\n\n| Item | £ million |\n|---|---|\n| Revenue | 940 |\n| Cost of Sales | 520 |\n| Store, Logistics & Admin Expenses | 310 |\n| Net Finance Interest & Corporation Tax | 25 |\n| Dividends Paid to Shareholders | 34 |\n\nCalculate **Retained Profit** for the year **in £ million** *(e.g. write `51` for £51 million)*.",
      answer: {
        type: "number",
        value: 51,
        display: "51",
      },
      traps: [
        {
          spec: { type: "number", value: 85 },
          feedback: "85 (£85m) is Profit for the Year — subtract the £34m Dividends Paid to Shareholders to find Retained Profit!",
        },
        {
          spec: { type: "number", value: 110 },
          feedback: "110 (£110m) is Operating Profit — still deduct Interest & Tax (25) and Dividends (34)!",
        },
        {
          spec: { type: "number", value: 119 },
          feedback: "Dividends (34) are paid *out* of Profit for the Year (85), so subtract 34 rather than adding!",
        },
      ],
      hints: [
        "Work down step-by-step: Gross Profit = 940 − 520 = 420; Operating Profit = 420 − 310 = 110.",
        "Profit for the Year = 110 − 25 = 85; Retained Profit = Profit for the Year − Dividends (34).",
      ],
      solution: [
        "Gross Profit = £940m − £520m = £420m.",
        "Operating Profit = £420m − £310m = £110m; Profit for the Year = £110m − £25m = £85m.",
        "Retained Profit = £85m − £34m = **51** (£51 million).",
      ],
      commonError: "Stopping at Profit for the Year (£85m) before deducting shareholder dividends (£34m).",
    },
    {
      id: "exam-p2b-q23",
      topicId: "accounts-ratios",
      guideRef: "liquidity-ratios",
      kind: "short",
      difficulty: "core",
      question:
        "Statement of Financial Position extract for **HelioGrid Renewables Plc** (4,100 employees, in **£ million**):\n\n| Item | £ million |\n|---|---|\n| Inventory (wind-turbine blades & battery modules) | 150 |\n| Trade Receivables | 185 |\n| Cash at Bank | 85 |\n| Current Liabilities | 240 |\n\nCalculate HelioGrid's **Current Ratio** to **2 decimal places**.",
      answer: {
        type: "number",
        value: 1.75,
        display: "1.75 : 1",
      },
      traps: [
        {
          spec: { type: "number", value: 1.13, tolerance: 0.01 },
          feedback:
            "1.125 (1.13 : 1) is the Acid-Test Ratio! The **Current Ratio** includes ALL Current Assets (Inventory 150 + Receivables 185 + Cash 85 = 420) ÷ 240.",
        },
        {
          spec: { type: "number", value: 0.57, tolerance: 0.01 },
          feedback: "Upside down! Divide Current Assets (420) by Current Liabilities (240).",
        },
        {
          spec: { type: "number", value: 180 },
          feedback: "£180m is Working Capital (420 − 240). Current Ratio *divides* Current Assets by Current Liabilities (420 ÷ 240)!",
        },
      ],
      hints: [
        "Current Ratio includes Inventory inside Current Assets: Total Current Assets = 150 + 185 + 85 = £420m.",
        "Current Ratio = Current Assets (420) ÷ Current Liabilities (240).",
      ],
      solution: [
        "Total Current Assets = £150m + £185m + £85m = £420m.",
        "Current Ratio = £420m ÷ £240m = **1.75 : 1** (or **1.75**).",
      ],
      commonError: "Excluding Inventory (calculating Acid-Test 1.13 : 1) when the question asks for the Current Ratio (1.75 : 1).",
    },
    {
      id: "exam-p2b-q24",
      topicId: "accounts-ratios",
      guideRef: "profitability-ratios",
      kind: "short",
      difficulty: "core",
      question:
        "**UrbanStyle Apparel Plc** (22,000 employees) reports annual **Revenue of £600 million** and **Cost of Sales of £270 million**.\n\nCalculate **Gross Profit Margin** as a percentage (**%**).",
      answer: {
        type: "number",
        value: 55,
        display: "55%",
      },
      traps: [
        {
          spec: { type: "number", value: 122.22, tolerance: 0.05 },
          feedback: "122.22% is Markup (Gross Profit ÷ Cost of Sales × 100)! Gross Profit Margin divides Gross Profit (£330m) by Revenue (£600m).",
        },
        {
          spec: { type: "number", value: 45 },
          feedback: "45% is Cost of Sales ÷ Revenue! Subtract Cost of Sales first: (£600m − £270m) ÷ £600m × 100.",
        },
      ],
      hints: [
        "Gross Profit = £600m − £270m = £330m.",
        "Gross Profit Margin (%) = (Gross Profit ÷ Revenue) × 100.",
      ],
      solution: [
        "Gross Profit = £600m − £270m = £330m.",
        "Gross Profit Margin = (£330m ÷ £600m) × 100 = **55%**.",
      ],
      commonError: "Dividing by Cost of Sales (Markup) or forgetting to subtract Cost of Sales from Revenue first.",
    },
    {
      id: "exam-p2b-q25",
      topicId: "accounts-ratios",
      guideRef: "liquidity-ratios",
      kind: "mcq",
      difficulty: "core",
      question:
        "Institutional investors reviewing **AeroLink Aviation Plc's** annual report note that management sold three aircraft on 29 December and repurchased two on 4 January so that year-end cash balances on 31 December looked unusually strong.\n\nWhat limitation of published financial accounts does this illustrate?",
      options: [
        "Window dressing — legally timing year-end transactions to flatter the balance-sheet snapshot on reporting day",
        "Using primary focus-group sampling bias instead of census data",
        "Confusing job rotation with piece-rate remuneration",
        "Applying price skimming to mature commodities",
      ],
      answerIndex: 0,
      hints: [
        "Look at the suspicious dates right around the 31 December balance-sheet snapshot!",
        "What is the Edexcel accounting term for dressing up year-end figures to look healthier than normal?",
      ],
      explanation:
        "Because a Statement of Financial Position is only a single-day snapshot (31 December), timing asset sales right before year-end to temporarily inflate cash is known as window dressing — a key limitation when relying solely on published accounts.",
    },
    {
      id: "exam-p2b-q26",
      topicId: "accounts-ratios",
      guideRef: "roce-performance",
      kind: "written",
      difficulty: "challenge",
      marks: 9,
      question:
        "**AeroLink Aviation Plc** (19,500 employees) has seen its **Return on Capital Employed (ROCE)** slide from **13.8% to 6.4%**, barely above the 5% risk-free bond yield. Activist shareholders demand immediate action, and the Board debates two options:\n\n- **Option 1**: **Retire and sell four under-utilised wide-body cargo jets** (shrinking Capital Employed by £320 million after repaying associated aircraft debt, while sacrificing £8 million of annual cargo operating profit).\n- **Option 2**: Keep the full fleet and launch **AI-driven dynamic ancillary pricing** for cabin bags, extra-legroom seats and lounge upgrades (forecast to add £45 million to annual Operating Profit).\n\n**Assess** which option AeroLink Aviation Plc should prioritise to restore its ROCE. *(9 marks)*",
      hints: [
        "Remember `ROCE = (Operating Profit ÷ Capital Employed) × 100`! Option 1 shrinks the *denominator* (Capital Employed) by £320m while barely denting Operating Profit (notice £8m ÷ £320m = a dismal 2.5% return on those cargo jets!).",
        "Option 2 boosts the *numerator* (Operating Profit +£45m) with minimal extra capital employed, BUT faces price-elastic leisure backlash against 'drip-pricing' bag fees!",
      ],
      modelAnswer:
        "Option 1 improves ROCE through the denominator by stripping £320 million of unproductive non-current assets and debt out of Capital Employed. Because those four under-used cargo jets currently earn just £8 million of operating profit on £320 million of capital — a dismal 2.5% return that drags down the entire group — disposing of them mechanically lifts group ROCE and cuts maintenance overheads. However, permanently shrinking cargo capacity is irreversible if global air-freight demand rebounds next year, and second-hand wide-body jet sales may fetch discounted prices.\n\nOption 2 attacks the numerator of ROCE instead, aiming to add £45 million of high-margin ancillary operating profit using software rather than heavy aircraft capital expenditure. Because empty extra-legroom seats and lounge slots have near-zero variable cost, extra revenue flows almost straight into Operating Profit. Yet aggressive baggage and seat charges risk alienating passengers on price-elastic leisure routes, pushing travellers toward rival full-service carriers so base ticket sales fall.\n\nOverall, AeroLink Aviation Plc should prioritise Option 1 immediately alongside a cautious rollout of Option 2: offloading £320 million of dead capital earning only 2.5% delivers a guaranteed structural ROCE boost without risking passenger goodwill, whereas aggressive bag fees could backfire on core ticket load factors.",
      markScheme: [
        {
          point: "Explains how Option 1 raises ROCE by shrinking the denominator (Capital Employed down £320m).",
          keywords: ["denominator", "320 million", "320m", "capital employed"],
        },
        {
          point: "Uses quantitative insight on cargo jets (£8m ÷ £320m = just 2.5% return, dragging down group ROCE).",
          keywords: ["2.5%", "drag", "unproductive", "dismal"],
        },
        {
          point: "Analyses drawback of Option 1 (irreversible loss of cargo capacity if freight rebounds or fire-sale disposal prices).",
          keywords: ["irreversib", "rebound", "second-hand", "cargo capacity"],
        },
        {
          point: "Explains how Option 2 raises ROCE via the numerator (+£45m Operating Profit with minimal extra capital invested).",
          keywords: ["numerator", "45 million", "45m", "minimal", "software"],
        },
        {
          point: "Links ancillary extras (bags/seats/lounges) to very low variable cost / high contribution margin.",
          keywords: ["variable cost", "high-margin", "ancillary", "legroom"],
        },
        {
          point: "Analyses demand risk of Option 2 (price-elastic passengers resent hidden fees and switch to rival airlines).",
          keywords: ["alienat", "price-elastic", "rival", "resent", "backfire"],
        },
        {
          point: "Connects ROCE improvement back to satisfying activist institutional shareholders vs 5% bond yield.",
          keywords: ["shareholder", "institutional", "activist", "goodwill"],
        },
        {
          point: "States a clear, explicit recommendation between Option 1 and Option 2.",
          keywords: ["overall", "should prioritise", "recommend"],
        },
        {
          point: "Justifies priority by contrasting guaranteed disposal of 2.5%-return capital against uncertain passenger fee elasticity.",
          keywords: ["guaranteed", "dead capital", "load factor"],
        },
      ],
      commonError: "Focusing only on Operating Profit while forgetting ROCE can also rise sharply by pruning £320m of low-return Capital Employed!",
    },

    // -------------------------------------------------------------------------
    // 7. MARKETING & BUSINESS OPERATIONS (4 Qs)
    // -------------------------------------------------------------------------
    {
      id: "exam-p2b-q27",
      topicId: "marketing-and-operations",
      guideRef: "markets-ped-competition",
      kind: "mcq",
      difficulty: "core",
      question:
        "Market research shows that **AeroLink Aviation Plc's** Tuesday-morning London–Frankfurt **corporate business-class flights** have **price inelastic demand**, whereas Saturday budget beach flights to Spain have **price elastic demand**.\n\nTo maximise total revenue across both routes, what pricing action makes the most economic sense?",
      options: [
        "Slash Tuesday corporate business-class fares by 40% and double Saturday beach fares",
        "Set identical fixed cost-plus fares on every seat regardless of route or day",
        "Cancel all business-class flights because inelastic demand means zero passengers fly",
        "Raise fares on price-inelastic Tuesday corporate business flights (where % drop in bookings is smaller than % price rise) while keeping Saturday beach fares competitive",
      ],
      answerIndex: 3,
      hints: [
        "When demand is **price inelastic**, corporate travellers on urgent Tuesday meetings still fly even if fares rise 10% — what happens to Total Revenue?",
        "When demand is **price elastic** (budget beach holidays with easy substitutes), raising prices causes a much larger % drop in bookings!",
      ],
      explanation:
        "On price-inelastic corporate routes, a percentage fare increase triggers a smaller percentage fall in seats sold, increasing total revenue. On price-elastic holiday routes with many rival airlines, competitive fares are essential to prevent a steep fall in bookings.",
    },
    {
      id: "exam-p2b-q28",
      topicId: "marketing-and-operations",
      guideRef: "markets-ped-competition",
      kind: "short",
      difficulty: "core",
      question:
        "Total annual sales in the UK functional & sports-hydration drinks market equal **£1,250 million**. **NutraVibe Beverages Plc** (6,400 employees) achieves UK annual sales of **£230 million**.\n\nCalculate NutraVibe's **UK market share** as a percentage (**%**) to **1 decimal place**.",
      answer: {
        type: "number",
        value: 18.4,
        display: "18.4%",
      },
      traps: [
        {
          spec: { type: "number", value: 5.43, tolerance: 0.02 },
          feedback: "Upside down! Divide NutraVibe's sales (£230m) by Total Market Sales (£1,250m) × 100.",
        },
        {
          spec: { type: "number", value: 0.184 },
          feedback: "Multiply 0.184 by 100 to give market share as a percentage (18.4%)!",
        },
        {
          spec: { type: "number", value: 22.55, tolerance: 0.05 },
          feedback: "Divide by *total* market sales (£1,250m), not rival-only sales (£1,020m)!",
        },
      ],
      hints: [
        "Formula: Market Share (%) = (Firm's Sales ÷ Total Market Sales) × 100.",
        "Calculate (230 ÷ 1,250) × 100.",
      ],
      solution: [
        "UK Market Share = (£230m ÷ £1,250m) × 100 = **18.4%**.",
      ],
      commonError: "Inverting the fraction (1,250 ÷ 230) or forgetting to multiply by 100.",
    },
    {
      id: "exam-p2b-q29",
      topicId: "marketing-and-operations",
      guideRef: "production-lean-jit",
      kind: "short",
      difficulty: "warmup",
      question:
        "**NutraVibe Beverages Plc** (6,400 employees) operates a 24-hour automated canning line where identical 330 ml electrolyte cans move non-stop along high-speed conveyors through filling, nitrogen sealing, laser date-coding and tray-packing at 42,000 cans per hour.\n\nState the **two-word method of production** being used.",
      answer: {
        type: "text",
        accept: ["flow production", "mass production"],
        display: "flow production",
      },
      traps: [
        {
          spec: { type: "text", accept: ["batch production"] },
          feedback: "Batch production makes set groups and stops to reset for different recipes. Non-stop 24/7 conveyor manufacturing of identical items is flow production!",
        },
        {
          spec: { type: "text", accept: ["job production"] },
          feedback: "Job production crafts bespoke one-off items. Continuous 42,000-can-per-hour automated conveyors use flow production!",
        },
      ],
      hints: [
        "Identical standardised cans move continuously 24/7 along an automated capital-intensive line.",
        "Choose between job, batch, and flow production.",
      ],
      solution: [
        "Continuous, capital-intensive 24-hour assembly/bottling of standardised high-volume items is **flow production** (mass production).",
      ],
      commonError: "Calling a continuous 24-hour standardised canning conveyor 'batch production'.",
    },
    {
      id: "exam-p2b-q30",
      topicId: "marketing-and-operations",
      guideRef: "marketing-mix-4ps",
      kind: "written",
      difficulty: "challenge",
      marks: 12,
      question:
        "**NutraVibe Beverages Plc** (6,400 employees) launched its flagship sugary blue isotonic drink *HydroBurst* 14 years ago. UK and European sales have now entered the **saturation/decline phase of the Product Life Cycle**, slipping 6% last year as health-conscious Gen-Z consumers shun artificial dyes and sugar taxes rise. To achieve a **Product Life Cycle extension strategy**, the Board compares:\n\n- **Extension 1**: **Reformulate & widen the domestic product line** — launching zero-sugar *HydroBurst Zero* with added electrolytes and magnesium in infinitely recyclable sleek aluminium cans (£18m R&D and canning retooling).\n- **Extension 2**: Keep the original sugary PET-bottle recipe unchanged and spend £32 million on **entering emerging markets in Latin America** backed by football-league sponsorship.\n\n**Evaluate** both extension strategies and recommend which one NutraVibe Beverages Plc should prioritise. *(12 marks — use AJIM evaluation)*",
      hints: [
        "Analyse Extension 1: directly fixes the *root PESTLE cause* of UK/EU decline (Gen-Z sugar/dye shift + sugar taxes + plastic backlash), leverages existing supermarket distribution & £18m retooling on existing flow lines, though risks cannibalising remaining classic *HydroBurst* drinkers.",
        "Analyse Extension 2: unlocks huge high-growth populations & hot climates with zero R&D change, BUT costs £32m upfront promotion, faces unfamiliar local distributors/exchange-rate volatility, AND Latin American governments (e.g. Mexico/Chile/Colombia) already enforce tough sugar-warning labels and soda taxes too! Deliver a crisp **AJIM** conclusion!",
      ],
      modelAnswer:
        "Extension 1 directly tackles the social and legislative root causes pushing *HydroBurst* into decline across Britain and Europe: eliminating sugar avoids punitive government soft-drink taxes while magnesium wellness benefits and recyclable aluminium cans appeal to eco-conscious Gen-Z buyers. Crucially, NutraVibe already commands established shelf space across major UK and EU supermarkets, allowing *HydroBurst Zero* to scale rapidly for £18 million — £14 million less upfront than Extension 2. However, retooling 24/7 flow lines causes temporary factory downtime, and zero-sugar cans may cannibalise sales from loyal drinkers of original *HydroBurst*.\n\nExtension 2 unlocks vast, young, warm-climate populations in Latin America where sports-hydration consumption is still growing and football sponsorship builds rapid mass brand awareness without spending a penny on recipe R&D. Yet committing £32 million to above-the-line sponsorship and new overseas distribution channels carries high financial risk, currency-fluctuation exposure and fierce retaliation from entrenched rivals like Gatorade. Worse still, several major Latin American economies already enforce strict front-of-pack black sugar warnings and soda taxes, meaning an unchanged sugary plastic-bottle drink could stall quickly abroad too.\n\nOverall, NutraVibe Beverages Plc should prioritise Extension 1 first (Answer). Defending its core £230m+ European supermarket distribution base by modernising the product for permanent anti-sugar and anti-plastic consumer trends costs £14 million less and fixes the fundamental product weakness rather than exporting an outdated formula (Justify). Success depends on blind taste-testing ensuring *HydroBurst Zero* matches original flavour expectations without alienating core athletes, and once proven domestically, the zero-sugar formula can later support Latin American expansion (It depends on). Ultimately, aligning the Product element of the 4Ps with long-term global health and sustainability trends is the decisive driver of lasting PLC revenue growth (Most important).",
      markScheme: [
        {
          point: "Links Extension 1 to solving root PESTLE trends (avoids government sugar taxes + meets Gen-Z health & anti-plastic preferences).",
          keywords: ["sugar tax", "soft-drink tax", "anti-plastic", "recyclable", "root cause"],
        },
        {
          point: "Uses PLC distribution / financial comparison (£18m vs £32m saves £14m; leverages existing UK/EU supermarket shelf space).",
          keywords: ["14 million", "shelf space", "supermarket", "existing"],
        },
        {
          point: "Analyses drawback of Extension 1 (cannibalisation of original HydroBurst sales or flow-line retooling downtime).",
          keywords: ["cannibalis", "downtime", "retool"],
        },
        {
          point: "Analyses benefit of Extension 2 (fast-growing warm-climate Latin American market + mass brand reach via football sponsorship).",
          keywords: ["warm-climate", "growing", "awareness", "mass"],
        },
        {
          point: "Analyses financial & competitive risk of Extension 2 (£32m sunk promotional outlay, currency risk and entrenched rivals like Gatorade).",
          keywords: ["currency", "gatorade", "entrenched", "retaliat"],
        },
        {
          point: "Spots key global PESTLE flaw in Extension 2 (Latin American countries also impose strict sugar warning labels / soda taxes).",
          keywords: ["warning", "soda tax", "outdated"],
        },
        {
          point: "Evaluates 4Ps / Product Life Cycle fit (rejuvenating core Product vs geographic Place/Promotion push).",
          keywords: ["4ps", "product element", "formula"],
        },
        {
          point: "AJIM — Answer: states a clear, unambiguous recommendation between Extension 1 and Extension 2.",
          keywords: ["overall", "should prioritise", "recommend"],
        },
        {
          point: "AJIM — Justify: backs recommendation using lower £18m cost, protected European retail base and fixing structural product decline.",
          keywords: ["defending", "fundamental", "14 million less"],
        },
        {
          point: "AJIM — It depends on (1): consumer taste acceptance / primary research on the zero-sugar recipe.",
          keywords: ["depends on", "taste-test", "flavour"],
        },
        {
          point: "AJIM — It depends on (2): sequencing — rolling the proven zero-sugar can into Latin America later.",
          keywords: ["later", "once proven", "support"],
        },
        {
          point: "AJIM — Most important factor: concludes why adapting to permanent global health & sustainability shifts outweighs geographic escape.",
          keywords: ["ultimately", "decisive", "sustainability", "lasting"],
        },
      ],
      commonError: "Assuming emerging markets have no health regulations or sugar taxes, or forgetting the £14m cost gap (£18m vs £32m) and cannibalisation risk.",
    },
  ],
};
