import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "marketing-and-operations-m1",
    title: "Paper 1: Market Research, Segmentation, PED & The 4Ps",
    questions: [
      {
        id: "marketing-and-operations-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "market-research-segmentation",
        question:
          "Which activity is an example of **Primary (field) market research** for a new bubble-tea café?",
        options: [
          "Running taste-test focus groups with 30 sixth-form students on the high street",
          "Downloading population age tables from the government national census",
          "Reading a three-year-old beverage industry report in a library",
          "Inspecting a rival café's published annual accounts at Companies House",
        ],
        answerIndex: 0,
        hints: [
          "Primary research collects brand-new first-hand data directly from potential customers.",
          "Census tables, library reports and published accounts already exist (desk research).",
        ],
        explanation:
          "**Taste-test focus groups** gather brand-new first-hand feedback tailored specifically to the café's drinks (**Primary research**). The other three options reuse pre-existing **Secondary** sources.",
      },
      {
        id: "marketing-and-operations-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "market-research-segmentation",
        question:
          "A questionnaire asks shoppers: *'Why does our new glass bottle feel more appealing to you than a plastic carton?'* What type of data does this open question generate?",
        options: [
          "Secondary census data",
          "Macroeconomic fiscal data",
          "Quantitative data",
          "Qualitative data",
        ],
        answerIndex: 3,
        hints: [
          "Notice the question asks *'Why... feel...'*, inviting detailed opinions and emotions rather than numbers.",
          "Contrast numerical percentages against descriptive motivations.",
        ],
        explanation:
          "**Qualitative data** captures in-depth consumer feelings, attitudes and motivations (*why*), whereas **quantitative data** measures numerical counts or percentages.",
      },
      {
        id: "marketing-and-operations-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "markets-ped-competition",
        question:
          "Total UK sales of electric scooters are **£150 million** per year. VoltRide Ltd achieves annual UK sales of **£27 million**. What is VoltRide's **market share**?",
        options: ["15%", "27%", "18%", "5.56%"],
        answerIndex: 2,
        hints: [
          "Apply `Market Share = (Firm's Sales ÷ Total Market Sales) × 100`.",
          "Calculate `(27 ÷ 150) × 100`.",
        ],
        explanation:
          "**Market Share** = `(£27m ÷ £150m) × 100 = 18%`. (`5.56%` divides upside down `150 ÷ 27`!).",
      },
      {
        id: "marketing-and-operations-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "markets-ped-competition",
        question:
          "A luxury Swiss watchmaker has strong brand heritage and **price inelastic demand** (`|PED| = 0.3`). If it **increases watch prices by 10%**, what happens to quantity demanded and Total Revenue?",
        options: [
          "Quantity demanded rises by 3%, and Total Revenue rises",
          "Quantity demanded falls by 30%, and Total Revenue falls sharply",
          "Quantity demanded falls by 10%, leaving Total Revenue unchanged",
          "Quantity demanded falls by only 3%, so Total Revenue increases",
        ],
        answerIndex: 3,
        hints: [
          "With `|PED| = 0.3`, `%ΔQ = 0.3 × 10% = 3%` in the opposite direction to the price rise.",
          "Does a 10% higher price outweigh a tiny 3% drop in units sold?",
        ],
        explanation:
          "Because demand is **price inelastic** (`|PED| = 0.3 < 1`), a 10% price hike causes only a **3% drop in quantity demanded**, so **Total Revenue increases**.",
      },
      {
        id: "marketing-and-operations-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "marketing-mix-4ps",
        question:
          "In the **Boston Matrix**, how is a mature product with a **high market share** in a **low-growth market** classified?",
        options: ["Star", "Question Mark", "Dog", "Cash Cow"],
        answerIndex: 3,
        hints: [
          "Mature markets grow slowly, so heavy defensive advertising is no longer required.",
          "High market share brings economies of scale and steady surplus cash.",
        ],
        explanation:
          "High market share + low market growth defines a **Cash Cow** — generating surplus net cash flow that can be 'milked' to fund Stars and Question Marks.",
      },
      {
        id: "marketing-and-operations-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "marketing-mix-4ps",
        question:
          "A console manufacturer launches a revolutionary VR headset with patented eye-tracking at **£899** to capture tech enthusiasts before lowering the price a year later. Which pricing strategy is this?",
        options: [
          "Penetration pricing",
          "Cost-plus pricing",
          "Predatory pricing",
          "Price skimming",
        ],
        answerIndex: 3,
        hints: [
          "Notice the innovative patented technology and high initial launch price aimed at early adopters.",
          "Predatory pricing is illegal below-cost pricing; penetration pricing starts *low*.",
        ],
        explanation:
          "**Price skimming** charges a high initial price on a unique/patented innovation to maximise margins from price-inelastic early adopters and recoup R&D costs rapidly.",
      },
      {
        id: "marketing-and-operations-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "marketing-mix-4ps",
        question:
          "A cereal brand whose flagship flakes have reached **Maturity / Saturation** launches a high-protein chocolate version and expands into South Korean supermarkets. In the Product Life Cycle, this is an example of:",
        options: [
          "An extension strategy",
          "Product orientation",
          "Diseconomies of scale",
          "Batch downtime",
        ],
        answerIndex: 0,
        hints: [
          "The product is at Maturity and the company wants to prevent it entering Decline.",
          "New flavours and new export markets classicly rejuvenate mature sales.",
        ],
        explanation:
          "Launching product-line variations and entering new geographic markets at Maturity are classic **extension strategies** designed to prolong profitable sales and delay Decline.",
      },
      {
        id: "marketing-and-operations-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "market-research-segmentation",
        question:
          "Why can a small Paper 1 start-up thrive inside a **niche market** (such as custom left-handed ergonomic guitars) despite lacking economies of scale?",
        options: [
          "Niche markets guarantee millions of daily mass-market unit sales",
          "Specialised unmet needs face little direct competition, allowing premium prices and wider Gross Profit Margins",
          "Niche markets never require any market research or quality checks",
          "Large multinationals are legally banned from entering niche segments",
        ],
        answerIndex: 1,
        hints: [
          "Mass giants often ignore tiny specialised segments as too small to justify retooling flow lines.",
          "How does being the specialist provider affect PED and pricing power?",
        ],
        explanation:
          "**Niche markets** serve specific customer needs largely ignored by mass rivals, creating **inelastic loyalty and premium pricing power** that offsets higher small-scale unit costs.",
      },
      {
        id: "marketing-and-operations-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "marketing-mix-4ps",
        question:
          "Which promotional method is classified as **Above-the-Line (ATL)** promotion?",
        options: [
          "A Prime-Time national television commercial during a major football tournament",
          "A 'Buy-One-Get-One-Free' shelf sticker inside a supermarket aisle",
          "A 15%-off loyalty-card voucher emailed to existing subscribers",
          "Free sample tastings handed out at a Saturday farmers' market",
        ],
        answerIndex: 0,
        hints: [
          "ATL uses independent paid mass media (TV, radio, newspapers, cinema, billboards) via advertising agencies.",
          "Vouchers, BOGOF and free samples are Below-the-Line (BTL) sales promotions.",
        ],
        explanation:
          "**National television advertising** is classic **Above-the-Line (ATL)** paid mass-media promotion. BOGOF deals, loyalty vouchers and free samples are **Below-the-Line (BTL)**.",
      },
      {
        id: "marketing-and-operations-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "marketing-mix-4ps",
        question:
          "A Yorkshire jacket maker switches from selling through **wholesalers and department stores** to selling **100% direct to consumers via its own website**. What is a major advantage AND drawback of this Place shift?",
        options: [
          "Advantage: wholesales break bulk for free; Drawback: zero access to customer emails",
          "Advantage: eliminates all parcel delivery costs; Drawback: retail margin drops to zero",
          "Advantage: keeps the full retail profit margin and customer data; Drawback: loses physical try-on footfall and must handle individual parcel returns",
          "Advantage: guarantees zero website cybersecurity costs; Drawback: forces Job production",
        ],
        answerIndex: 2,
        hints: [
          "Cutting out middlemen means keeping the margin retailers used to take!",
          "What new operational headache hits an online clothing brand when shoppers cannot try jackets on first?",
        ],
        explanation:
          "Direct **e-commerce** captures **100% of the retail margin** and direct customer data, **but** sacrifices high-street browsing footfall and incurs heavy parcel-fulfilment and garment-return costs.",
      },
      {
        id: "marketing-and-operations-m1-q11",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "production-lean-jit",
        question:
          "A Savile Row tailor measures an actor and hand-stitches a one-off velvet tuxedo for an awards ceremony. Which method of production is used?",
        options: [
          "Flow production",
          "Batch production",
          "Job production",
          "Automated cell mass production",
        ],
        answerIndex: 2,
        hints: [
          "Exactly ONE unique item is crafted to a single customer's measurements.",
          "Contrast bespoke one-offs against grouped runs or continuous lines.",
        ],
        explanation:
          "**Job production** creates unique, custom one-off items tailored to an individual client's specification using skilled craft labour.",
      },
      {
        id: "marketing-and-operations-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "production-lean-jit",
        question:
          "A ceramic mug factory employs **16 workers** who produce **4,480 mugs per week**. What is its weekly **labour productivity**?",
        options: [
          "4,480 mugs",
          "71,680 mugs per worker",
          "0.0036 workers per mug",
          "280 mugs per worker",
        ],
        answerIndex: 3,
        hints: [
          "4,480 is Total Output, NOT productivity!",
          "Divide Total Output (4,480) by Number of Workers (16).",
        ],
        explanation:
          "**Labour Productivity** = `Total Output ÷ Number of Workers = 4,480 ÷ 16 = 280 mugs per worker`.",
      },
      {
        id: "marketing-and-operations-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "economies-scale-quality",
        question:
          "Which statement gives the **exact Grade 9 definition** of **Internal Economies of Scale**?",
        options: [
          "A fall in average cost per unit as an individual firm expands its scale of output",
          "A reduction in total variable and fixed costs as a firm cuts output",
          "An increase in selling prices caused by industry-wide inflation",
          "A rise in average cost per unit caused by poor communication in a giant firm",
        ],
        answerIndex: 0,
        hints: [
          "Check the crucial word **average / unit** cost — total costs rise when output expands!",
          "Rising unit cost is *diseconomies* of scale.",
        ],
        explanation:
          "**Internal economies of scale** occur when a firm's own expansion causes its **average cost per unit** (`Total Cost ÷ Output`) to fall.",
      },
      {
        id: "marketing-and-operations-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "economies-scale-quality",
        question:
          "How does **Quality Assurance (QA)** fundamentally differ from traditional **Quality Control (QC)**?",
        options: [
          "Quality Assurance inspects a small random sample only after goods are packed for dispatch",
          "Quality Assurance eliminates all need for employee training",
          "Quality Control empowers every worker to check their own work without end-of-line inspectors",
          "Quality Assurance builds self-checking quality standards into every stage of production to prevent defects at source",
        ],
        answerIndex: 3,
        hints: [
          "Remember: Control = Catch at the end; Assurance = All along the line!",
          "Which system prevents scrap waste *before* finishing the product?",
        ],
        explanation:
          "**Quality Assurance** embeds quality checks at **every stage** of design and manufacture (workers self-inspecting), preventing defective scrap before resources are wasted.",
      },
      {
        id: "marketing-and-operations-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "markets-ped-competition",
        question:
          "In 2024, FreshSip Ltd sold **£12m** in a **£60m** juice market. In 2025, FreshSip's sales rose to **£15m**, while total market sales grew to **£100m**. Which statement is accurate?",
        options: [
          "FreshSip's revenue fell, and its market share fell from 20% to 15%",
          "FreshSip's revenue grew by 25%, AND its market share rose from 20% to 25%",
          "FreshSip's revenue grew by 25%, YET its market share fell from 20% to 15% because rivals grew faster",
          "FreshSip's market share stayed constant at 20%",
        ],
        answerIndex: 2,
        hints: [
          "Calculate 2024 Market Share: `(12 ÷ 60) × 100`.",
          "Calculate 2025 Market Share: `(15 ÷ 100) × 100`, and compare against FreshSip's £3m revenue gain!",
        ],
        explanation:
          "2024 Market Share = `12/60 = 20%`; 2025 Market Share = `15/100 = 15%`. Even though FreshSip's own sales grew by **25%** (`£12m → £15m`), total market size surged by **66.7%**, so FreshSip lost relative **market share**!",
      },
    ],
  },
  {
    id: "marketing-and-operations-m2",
    title: "Paper 2: Operations, Lean/JIT, Economies of Scale & TQM",
    questions: [
      {
        id: "marketing-and-operations-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "production-lean-jit",
        question:
          "An artisan bakery bakes 120 sourdough loaves, cleans and resets the ovens, and then bakes 120 brioche rolls. Which production method is this?",
        options: [
          "Batch production",
          "Job production",
          "Continuous flow production",
          "Primary extraction",
        ],
        answerIndex: 0,
        hints: [
          "Items are produced in identical *groups* with a machine/oven reset between varieties.",
          "Neither one-off bespoke items nor 24/7 single-product lines.",
        ],
        explanation:
          "**Batch production** manufactures identical groups of one product before resetting equipment to produce a batch of a different variety.",
      },
      {
        id: "marketing-and-operations-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "production-lean-jit",
        question:
          "In Lean manufacturing, what does the Japanese term **Kaizen** mean?",
        options: [
          "Holding six months of emergency buffer stock in regional warehouses",
          "Replacing all factory workers overnight with fully automated robots",
          "Continuous small improvements suggested regularly by shop-floor workers",
          "Inspecting finished goods at the loading bay before delivery",
        ],
        answerIndex: 2,
        hints: [
          "Think of daily incremental ideas from the employees operating the workstations.",
          "Contrasts with big-bang top-down reorganisation.",
        ],
        explanation:
          "**Kaizen** means **continuous improvement** — empowering employees at all levels to propose small, ongoing waste-saving tweaks.",
      },
      {
        id: "marketing-and-operations-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "production-lean-jit",
        question:
          "A car plant switches from holding **buffer stocks** to **Just-in-Time (JIT)** component deliveries. Which financial AND operational consequence should it expect?",
        options: [
          "Higher warehouse rent costs, but complete immunity to port strikes",
          "Lower cash tied up in inventory (improving working capital), but severe vulnerability if a component supplier misses a delivery",
          "Guaranteed bulk-buying discounts on giant quarterly orders, and lower delivery frequency",
          "Immediate increase in Non-Current Liabilities and lower Acid-Test Ratio",
        ],
        answerIndex: 1,
        hints: [
          "With near-zero stock in warehouses, less cash is trapped in Inventory.",
          "What happens on Tuesday morning if the seat-belt supplier's truck breaks down and you hold zero spares?",
        ],
        explanation:
          "**JIT** slashes storage costs and frees **working capital** previously trapped in inventory, **but** leaves zero buffer cushion if suppliers or transport links fail.",
      },
      {
        id: "marketing-and-operations-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "economies-scale-quality",
        question:
          "A supermarket giant negotiates a **22% lower cost per crate** of strawberries from farms because it orders 5 million crates per season. Which specific internal economy of scale is this?",
        options: [
          "Managerial economy of scale",
          "Financial economy of scale",
          "External economy of scale",
          "Purchasing (bulk-buying) economy of scale",
        ],
        answerIndex: 3,
        hints: [
          "The saving comes directly from buying raw stock in massive quantities.",
          "Suppliers accept a slimmer margin per crate to secure a huge guaranteed contract.",
        ],
        explanation:
          "Winning lower input prices per unit through giant order volumes is a **purchasing (bulk-buying) internal economy of scale**.",
      },
      {
        id: "marketing-and-operations-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "economies-scale-quality",
        question:
          "A tech start-up moves to Cambridge because local universities train specialist AI graduates and dozens of specialist microchip suppliers already operate nearby. This cost advantage is an example of:",
        options: [
          "External economies of scale",
          "Internal financial economies of scale",
          "Diseconomies of scale",
          "Predatory pricing",
        ],
        answerIndex: 0,
        hints: [
          "Notice the start-up itself is still small — it benefits because the *whole local industry cluster* is concentrated there!",
          "Internal = firm grows; External = industry/region grows.",
        ],
        explanation:
          "**External economies of scale** lower average unit costs for *all* firms (even small ones) located inside an established industry cluster via skilled local labour pools and specialist suppliers.",
      },
      {
        id: "marketing-and-operations-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "economies-scale-quality",
        question:
          "After merging with three rivals to reach 85,000 employees across nine layers of hierarchy, a parcel courier notices **average cost per parcel rising** as instructions get distorted and drivers feel ignored. What is occurring?",
        options: [
          "Technical economies of scale",
          "Total Quality Management",
          "Diseconomies of scale",
          "Market segmentation",
        ],
        answerIndex: 2,
        hints: [
          "Average cost per unit is *rising* as a direct result of excessive organisational size.",
          "Look at the classic triggers: tall hierarchy communication distortion and worker alienation.",
        ],
        explanation:
          "Rising average unit costs caused by communication breakdown, coordination failure and worker demotivation in an oversized firm are **diseconomies of scale**.",
      },
      {
        id: "marketing-and-operations-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "economies-scale-quality",
        question:
          "A headphone factory has monthly **Fixed Costs of £48,000** and **Variable Costs of £14 per pair**. If it manufactures **6,000 pairs** this month, what is its **Average Unit Cost**?",
        options: ["£8.00", "£14.00", "£22.00", "£6.00"],
        answerIndex: 2,
        hints: [
          "First find Total Cost = `£48,000 + (£14 × 6,000)`.",
          "Divide Total Cost by Output (`6,000` pairs) — or notice `FC per unit (£8) + VC per unit (£14)`!",
        ],
        explanation:
          "Total Cost = `£48,000 + £84,000 = £132,000`. **Average Unit Cost** = `£132,000 ÷ 6,000 = £22.00` (`£8.00` fixed cost per unit + `£14.00` variable cost per unit).",
      },
      {
        id: "marketing-and-operations-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "production-lean-jit",
        question:
          "Which business activity is naturally **labour-intensive** rather than **capital-intensive**?",
        options: [
          "Oil refining in an automated petrochemical complex",
          "Semiconductor wafer lithography in a cleanroom fab",
          "High-speed aluminium beverage can stamping",
          "Bespoke physiotherapy and elderly home-care nursing",
        ],
        answerIndex: 3,
        hints: [
          "Which service depends overwhelmingly on human empathy, touch and adaptable personal judgement?",
          "Refineries, chip fabs and canning plants spend billions on robotics per worker.",
        ],
        explanation:
          "**Physiotherapy and home-care nursing** rely primarily on skilled human staff (wages dominate total costs), making them **labour-intensive**.",
      },
      {
        id: "marketing-and-operations-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "economies-scale-quality",
        question:
          "Under **Total Quality Management (TQM)**, what does the concept of **internal customers** mean?",
        options: [
          "Employees receive a 20% staff discount when buying finished products",
          "Every worker or department treats the next stage on the production chain as a valued customer and refuses to pass on defective work",
          "Only senior directors are allowed to speak to external retail buyers",
          "Defective goods are sold cheaply inside the staff canteen",
        ],
        answerIndex: 1,
        hints: [
          "Think about how Chassis Welding hands its work to Paint Shop on an assembly line.",
          "If every link refuses to pass a fault to the next colleague, zero defects reach the final shopper!",
        ],
        explanation:
          "In **TQM**, each team treats the next internal department as an **internal customer**, taking personal ownership for **zero defects** at every handover.",
      },
      {
        id: "marketing-and-operations-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "market-research-segmentation",
        question:
          "A sportswear brand launches an ultra-light marathon shoe aimed at runners who train 50+ km a week, alongside a casual retro trainer for fashion-conscious teenagers. Which two segmentation methods is it combining?",
        options: [
          "Behavioural/lifestyle and demographic (age) segmentation",
          "Geographic and corporation-tax segmentation",
          "Random quota and secondary segmentation",
          "Tall and flat organisational segmentation",
        ],
        answerIndex: 0,
        hints: [
          "Training 50+ km a week reflects *lifestyle / usage behaviour*.",
          "Targeting teenagers reflects *age* (a demographic variable).",
        ],
        explanation:
          "Serious marathon running is **behavioural / lifestyle segmentation**, while targeting teenagers segments by age (**demographic segmentation**).",
      },
      {
        id: "marketing-and-operations-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "marketing-mix-4ps",
        question:
          "At which stage of the **Product Life Cycle** are unit sales typically at their **highest plateau**, market growth has slowed, and **Cash Cow** status is usually achieved?",
        options: ["Development", "Introduction", "Maturity", "Decline"],
        answerIndex: 2,
        hints: [
          "Development has zero sales; Introduction has low launch sales; Decline has shrinking sales.",
          "Where does the sales curve flatten near its peak?",
        ],
        explanation:
          "During **Maturity (and Saturation)**, brand awareness is established, sales volume peaks on a plateau, launch R&D has been recouped, and strong brands act as **Cash Cows**.",
      },
      {
        id: "marketing-and-operations-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "markets-ped-competition",
        question:
          "A budget airline operates on a competitive holiday route with four rival carriers (`|PED| = 2.4`). To **increase Total Seat Revenue** next month, what pricing action should it take?",
        options: [
          "Raise ticket fares by 15%",
          "Double baggage fees without informing passengers",
          "Keep fares 30% higher than identical rival flights at the same time",
          "Reduce ticket fares (e.g. by 10%), attracting a 24% surge in passengers",
        ],
        answerIndex: 3,
        hints: [
          "`|PED| = 2.4 > 1` means demand is highly **price elastic**.",
          "With elastic demand, Price and Total Revenue move in *opposite* directions!",
        ],
        explanation:
          "Because `|PED| = 2.4` is **price elastic**, a 10% fare reduction stimulates a **24% increase in quantity demanded**, expanding **Total Revenue**.",
      },
      {
        id: "marketing-and-operations-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "production-lean-jit",
        question:
          "Why does a manufacturer switching to **Just-in-Time (JIT)** almost always need to replace end-of-line **Quality Control** with **Total Quality Management (TQM)** at the same time?",
        options: [
          "Because TQM legally requires holding massive warehouses of spare stock",
          "Because with zero buffer stock under JIT, discovering a batch of faulty parts only at the end of the line halts customer deliveries immediately",
          "Because JIT only works under Job production for single handmade items",
          "Because end-of-line Quality Control makes Labour Productivity infinitely high",
        ],
        answerIndex: 1,
        hints: [
          "Imagine holding *zero* spare components on the factory floor.",
          "What happens if 15% of parts turn out defective right at the final loading bay?",
        ],
        explanation:
          "**JIT eliminates safety buffer stock** — so every component arriving and passing along the line *must* be right first time (**TQM / QA**), otherwise a late-discovered defect stops dispatch completely.",
      },
      {
        id: "marketing-and-operations-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "economies-scale-quality",
        question:
          "Why can large PLCs borrow £50 million at **4.8% interest**, whereas a local sole trader pays **11.5% interest** on a £20,000 loan — and what is this called?",
        options: [
          "Financial economy of scale — PLCs hold diversified revenues and substantial Non-Current Assets as collateral, lowering lender risk",
          "Technical economy of scale — PLCs own faster computers",
          "External economy of scale — central banks set lower base rates for sole traders",
          "Purchasing economy of scale — banks sell raw materials in bulk",
        ],
        answerIndex: 0,
        hints: [
          "Cheaper borrowing costs on loans/capital are *financial* advantages of size.",
          "Why does a bank consider a £2bn asset-backed Plc safer than a one-shop sole trader?",
        ],
        explanation:
          "**Financial economies of scale** allow large firms with proven track records and property collateral to negotiate **lower interest rates** and access stock-market equity unavailable to SMEs.",
      },
      {
        id: "marketing-and-operations-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "marketing-mix-4ps",
        question:
          "A skincare start-up has a **Question Mark (Problem Child)** serum: **2% market share** in an anti-ageing segment growing at **28% per year**. What is the core strategic dilemma facing its directors?",
        options: [
          "Whether to 'milk' its huge current cash surplus without spending anything",
          "How to survive a shrinking, dying market with negative growth",
          "Whether to raise prices using illegal predatory pricing",
          "Whether to invest heavy cash into promotion and distribution to turn it into a Star, or withdraw before burning scarce cash reserves",
        ],
        answerIndex: 3,
        hints: [
          "A Question Mark sits in a booming market (28% growth) *but* has tiny 2% market share.",
          "Doing nothing means getting left behind; scaling up requires heavy cash!",
        ],
        explanation:
          "**Question Marks** absorb cash: management must decide whether the product's USP justifies **heavy investment to build a Star**, or whether to divest if it cannot win viable share.",
      },
    ],
  },
  {
    id: "marketing-and-operations-m3",
    title: "Paper 3: Synoptic Marketing + Operations Strategy & Calculations",
    questions: [
      {
        id: "marketing-and-operations-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "market-research-segmentation",
        question:
          "An ice-cream van owner interviews **only 12 personal friends** to decide whether to invest £45,000 in vegan sorbet machines. What is the main flaw in this primary research?",
        options: [
          "Friends represent secondary desk data rather than primary data",
          "Small sample size and severe sampling bias make the findings unrepresentative of real paying customers",
          "Primary research is illegal for unincorporated sole traders",
          "Vegan sorbet belongs to the primary agricultural sector",
        ],
        answerIndex: 1,
        hints: [
          "Friends may be polite to avoid hurting the owner's feelings, and 12 people is tiny!",
          "Recall the key statistical risk of unrepresentative convenience samples.",
        ],
        explanation:
          "A sample of 12 friends suffers from **tiny sample size and heavy sampling bias** (polite bias + narrow demographic), risking a costly £45,000 misjudgement.",
      },
      {
        id: "marketing-and-operations-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "marketing-mix-4ps",
        question:
          "In the **Design Mix**, which three core elements must product designers balance?",
        options: [
          "Function, Aesthetics and Cost (economic manufacture)",
          "Taxation, Tariffs and Quotas",
          "Assets, Liabilities and Equity",
          "Tall, Flat and Matrix hierarchies",
        ],
        answerIndex: 0,
        hints: [
          "Think about: Does it *work* well? Does it *look/feel* appealing? Can we *afford* to make it profitably?",
          "These three pillars form the Edexcel Design Mix triangle.",
        ],
        explanation:
          "The **Design Mix** balances **Function** (how well it performs), **Aesthetics** (appearance, style, feel) and **Cost** (cost-effective production).",
      },
      {
        id: "marketing-and-operations-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "marketing-mix-4ps",
        question:
          "A wooden toy workshop calculates a **total unit cost of £15.00** per train set and applies a **60% cost-plus markup**. What is its selling price, and what is ONE limitation of cost-plus pricing?",
        options: [
          "£24.00; it ignores competitor prices and what customers are actually willing to pay",
          "£9.00; it always results in selling below variable cost",
          "£21.00; it is illegal under UK competition law",
          "£25.00; it can only be used during the Decline stage",
        ],
        answerIndex: 0,
        hints: [
          "Compute `£15.00 + (0.60 × £15.00)`.",
          "Why might adding a rigid 60% markup fail if a rival shop next door sells identical train sets for £19.99?",
        ],
        explanation:
          "60% of £15 = £9, so Selling Price = **£24.00**. **Cost-plus pricing** is simple and covers unit costs, **but completely ignores rival prices and customer PED**.",
      },
      {
        id: "marketing-and-operations-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "markets-ped-competition",
        question:
          "How does effective **branding and a clear Unique Selling Point (USP)** change a firm's **Price Elasticity of Demand (PED)**?",
        options: [
          "It makes demand much more price elastic (`|PED|` rises above 5)",
          "It forces the business to adopt penetration pricing permanently",
          "It reduces market share to zero",
          "It makes demand more price inelastic (`|PED|` moves closer to 0), allowing higher Gross Profit Margins",
        ],
        answerIndex: 3,
        hints: [
          "When shoppers feel no rival product is an acceptable substitute for *your* brand, do they leave if price rises 8%?",
          "Link brand loyalty → fewer perceived substitutes → inelastic demand.",
        ],
        explanation:
          "A strong **brand / USP** reduces perceived substitutes, making demand **more price inelastic** so the firm can charge premium prices and widen its **Gross Profit Margin**.",
      },
      {
        id: "marketing-and-operations-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "production-lean-jit",
        question:
          "Last month **20 assemblers** built **3,600 blender units** (`£1,800` monthly wage per worker). This month, new power tools lift output by the same **20 assemblers** to **4,500 blender units** (wages unchanged at `£1,800` each). How did **labour cost per blender** change?",
        options: [
          "Rose from £8.00 to £10.00 per blender",
          "Stayed unchanged at £10.00 per blender because monthly wages stayed £1,800",
          "Fell from £10.00 to £8.00 per blender because higher labour productivity spread wages over more units",
          "Fell to £0.00 because power tools eliminate all wages",
        ],
        answerIndex: 2,
        hints: [
          "Total monthly wage bill = `20 × £1,800 = £36,000` in both months.",
          "Divide `£36,000` by `3,600` units (Month 1) vs `4,500` units (Month 2)!",
        ],
        explanation:
          "Total wages = £36,000. Month 1 labour cost/unit = `£36,000 ÷ 3,600 = £10.00` (productivity 180/worker). Month 2 = `£36,000 ÷ 4,500 = £8.00` (productivity 225/worker) — proving **higher productivity cuts unit cost**!",
      },
      {
        id: "marketing-and-operations-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "production-lean-jit",
        question:
          "A greeting-card printer invests £800,000 in robotic folding and packing lines (**switching from labour-intensive to capital-intensive** operations). Which short-term risk MUST directors plan for?",
        options: [
          "Higher long-run variable labour cost per card",
          "Heavy initial cash outflow / gearing strain, potential staff redundancy resistance, and lower flexibility for bespoke handmade cards",
          "Inability to ever achieve technical economies of scale",
          "Guaranteed elimination of all fixed depreciation and maintenance costs",
        ],
        answerIndex: 1,
        hints: [
          "£800,000 upfront hits cash flow or Capital Employed immediately.",
          "Also consider existing staff morale/redundancy pay and machine rigidity.",
        ],
        explanation:
          "Capital-intensive automation slashes long-run unit cost, **but** imposes heavy upfront capital expenditure, redundancy costs/staff anxiety, maintenance fixed costs and reduced custom flexibility.",
      },
      {
        id: "marketing-and-operations-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "economies-scale-quality",
        question:
          "A global snack Plc spends **£4 million** filming one celebrity Super Bowl advert and airs it to sell **80 million bags** (`£0.05` ad cost per bag), whereas a regional crisp firm spending £400,000 across **1 million bags** pays `£0.40` per bag. Which economy of scale is this?",
        options: [
          "Marketing economy of scale",
          "External economy of scale",
          "Managerial economy of scale",
          "Quality assurance economy",
        ],
        answerIndex: 0,
        hints: [
          "An indivisible promotional campaign cost is spread thinly over a massive output volume.",
          "Look at the exact functional area: advertising!",
        ],
        explanation:
          "Spreading high fixed advertising/promotional budgets across tens of millions of units so **marketing cost per unit falls** is a **marketing internal economy of scale**.",
      },
      {
        id: "marketing-and-operations-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "economies-scale-quality",
        question:
          "An orthopaedic surgical-implant manufacturer has a zero-tolerance safety requirement. Why is **Quality Assurance / TQM** far more appropriate than end-of-line **Quality Control sampling**?",
        options: [
          "Sampling 5% of implants at the end guarantees 0% defective implants ever reach patients",
          "Scrapping titanium implants at the end wastes expensive metal, and random sampling could let a life-threatening defect slip through",
          "Quality Control is illegal in all manufacturing industries",
          "TQM allows unskilled staff to skip sterilisation steps to save time",
        ],
        answerIndex: 1,
        hints: [
          "Does checking 1 in 20 implants at the end catch the other 19 if one has a micro-crack?",
          "Medical titanium is also very expensive to scrap after full machining!",
        ],
        explanation:
          "Sample-based **Quality Control** risks letting a dangerous defect pass unspotted and wastes costly titanium on late-rejected batches; **QA/TQM** verifies precision at **every stage**.",
      },
      {
        id: "marketing-and-operations-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "marketing-mix-4ps",
        question:
          "During the **Development** and **Introduction** stages of the Product Life Cycle, why is **Net Cash Flow** typically **negative** even for a product that later becomes a blockbuster?",
        options: [
          "Sales volume is already at its all-time peak during Development",
          "Heavy R&D, tooling and launch promotion outflows occur before high repeat customer sales inflows build up",
          "Corporation tax is charged at 100% during Development",
          "Competitors force illegal predatory pricing during Development",
        ],
        answerIndex: 1,
        hints: [
          "During Development, Revenue = £0 while R&D engineers and prototypes must be paid for.",
          "During Introduction, launch marketing is heavy while early sales trickle in.",
        ],
        explanation:
          "Upfront **R&D, prototyping and launch promotion outflows** precede mass revenue inflows, creating negative cash flow that must be bridged (ideally by mature **Cash Cows**!).",
      },
      {
        id: "marketing-and-operations-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "markets-ped-competition",
        question:
          "Total global smartwatch sales rose from **160 million units** last year to **200 million units** this year. What was the **percentage market growth**?",
        options: ["20%", "40%", "25%", "80%"],
        answerIndex: 2,
        hints: [
          "Change in market size = `200m − 160m = 40m` units.",
          "Divide by the **original** market size (`160m`), NOT the new size (`200m`)!",
        ],
        explanation:
          "**Market Growth** = `((200 − 160) ÷ 160) × 100 = (40 ÷ 160) × 100 = 25%`. (`20%` mistakenly divides by the new figure `200m`!).",
      },
      {
        id: "marketing-and-operations-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "production-lean-jit",
        question:
          "How does **cell production** help overcome the classic motivation drawback of traditional **flow assembly lines**?",
        options: [
          "Workers work completely alone in soundproof booths doing a single screw turn forever",
          "Multi-skilled teams share responsibility for a complete module, rotating tasks and enjoying social belonging and ownership",
          "Cell production replaces all quality standards with piece-rate quotas",
          "Cell production deliberately triples work-in-progress buffer inventory",
        ],
        answerIndex: 1,
        hints: [
          "Link Operations to Maslow (social needs) and Herzberg (job enrichment / responsibility).",
          "Instead of one isolated repetitive step, a small team completes a whole sub-assembly together.",
        ],
        explanation:
          "**Cell production** groups multi-skilled workers into cohesive teams responsible for whole units/modules — fulfilling **Maslow's social needs** and **Herzberg's job enrichment / quality ownership**.",
      },
      {
        id: "marketing-and-operations-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "economies-scale-quality",
        question:
          "How do independent **Paper 1 coffee shops** survive on the same high street as global chains like Costa and Starbucks that enjoy massive **purchasing and marketing economies of scale**?",
        options: [
          "By undercutting global chains on raw coffee-bean bulk import prices",
          "By differentiating through personal barista relationships, locally roasted speciality blends, agility and cosy artisan ambience",
          "By outspending global chains on national prime-time TV campaigns",
          "By suffering deliberate diseconomies of scale",
        ],
        answerIndex: 1,
        hints: [
          "A one-site café can never beat a 3,000-store chain on bulk bean discounts or TV ads.",
          "What non-price strengths do small agile independents have that giant chains struggle to replicate?",
        ],
        explanation:
          "Small firms offset higher unit input costs via **personal customer service, bespoke local product differentiation, rapid agility** and zero bureaucratic diseconomies of scale.",
      },
      {
        id: "marketing-and-operations-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "markets-ped-competition",
        question:
          "A theme park currently sells **4,000 tickets/day at £50** (Variable Cost per visitor is **£5**; Fixed Costs are **£100,000/day**). Market research estimates `|PED| = 2.0`. If it cuts ticket price by **10% to £45**, what happens to daily **Operating Profit**?",
        options: [
          "Operating Profit falls from £80,000 to £72,000",
          "Operating Profit rises from £100,000 to £116,000",
          "Operating Profit stays unchanged at £80,000",
          "Operating Profit rises from £80,000 to £92,000",
        ],
        answerIndex: 3,
        hints: [
          "Before: `4,000 × (£50 − £5 contribution) − £100,000 FC = £80,000` profit.",
          "With `|PED| = 2.0`, a 10% price cut boosts visitors by `2.0 × 10% = +20%` → `4,800` visitors at `£45 − £5 = £40` contribution!",
        ],
        explanation:
          "Before: `4,000 × £45 − £100k = £80,000`. After 10% price cut, visitors rise 20% to `4,800`: Total Contribution = `4,800 × (£45 − £5) = £192,000`; subtracting £100k FC gives **£92,000 Operating Profit** (+£12,000)!",
      },
      {
        id: "marketing-and-operations-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "marketing-mix-4ps",
        question:
          "A heritage British luggage brand (`£1,200` handmade leather suitcases, sold only in Harrods and flagship boutiques) is bought by a new CEO who proposes **slashing prices to £299**, switching to **synthetic PVC flow production**, and stocking **supermarket aisles**. What is the sharpest Grade 9 evaluation?",
        options: [
          "The plan is guaranteed to succeed because all 4Ps remain luxury-aligned",
          "While Flow production cuts unit cost, mass supermarket Place and £299 pricing destroy brand exclusivity — alienating loyal price-inelastic buyers while entering a crowded price-elastic market against giant rivals",
          "Switching from Job to Flow production always increases Average Unit Cost",
          "Luxury suitcases are Dogs in the Boston Matrix so price cuts have zero brand impact",
        ],
        answerIndex: 1,
        hints: [
          "Evaluate how changing Product + Price + Place transforms brand perception and PED.",
          "Will wealthy Harrods shoppers still pay for the brand badge once PVC versions sit in grocery aisles?",
        ],
        explanation:
          "Eroding craftsmanship and exclusive **Place** destroys **brand equity**, alienating loyal inelastic customers while thrusting the firm into fierce mass-market price competition.",
      },
      {
        id: "marketing-and-operations-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "economies-scale-quality",
        question:
          "Factory Alpha produces **10,000 bikes** at Total Cost **£1,200,000** (`50 workers`). After expanding to **25,000 bikes**, Total Cost is **£2,500,000** (`100 workers`). Which pair of operational changes occurred?",
        options: [
          "Economies of scale (`unit cost fell from £120 to £100`), AND labour productivity rose from 200 to 250 bikes per worker",
          "Diseconomies of scale (`unit cost rose`), and labour productivity fell",
          "Economies of scale (`total cost fell`), and labour productivity stayed at 200 bikes per worker",
          "Diseconomies of scale (`total cost rose from £1.2m to £2.5m`), despite higher productivity",
        ],
        answerIndex: 0,
        hints: [
          "Compute Average Unit Cost: `£1,200,000 ÷ 10,000` vs `£2,500,000 ÷ 25,000`.",
          "Compute Labour Productivity: `10,000 ÷ 50` vs `25,000 ÷ 100`!",
        ],
        explanation:
          "Average Unit Cost fell from **£120 to £100** (**economies of scale** — even though Total Cost rose!), while Labour Productivity climbed from **200 to 250 bikes per worker**.",
      },
    ],
  },
];
