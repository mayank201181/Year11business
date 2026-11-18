import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "marketing-and-operations-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "markets-ped-competition",
      question:
        "Breeze Smoothies earns **£9 million** of annual sales in a total UK smoothie market worth **£45 million**. Calculate Breeze Smoothies' **market share** (as a %).",
      answer: { type: "number", value: 20, display: "20%" },
      traps: [
        {
          spec: { type: "number", value: 5 },
          feedback:
            "Upside down! You divided £45m by £9m — Market Share = (Firm's Sales ÷ Total Market Sales) × 100.",
        },
      ],
      hints: [
        "Use `Market Share = (Firm's Sales ÷ Total Market Sales) × 100`.",
        "Calculate `(9 ÷ 45) × 100`.",
      ],
      solution: ["Market Share = `(£9m ÷ £45m) × 100` = **20%**."],
    },
    {
      id: "marketing-and-operations-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "market-research-segmentation",
      question: "Which method is a **Secondary (desk) research** source?",
      options: [
        "Street interviews conducted by the business outside its shop",
        "An online survey emailed by the founder to 200 customers",
        "Published national census demographic tables from the government",
        "A live focus group tasting three new chocolate recipes",
      ],
      answerIndex: 2,
      hints: [
        "Secondary research uses data *already collected* by an external body for another purpose.",
        "Street interviews, own surveys and focus groups collect brand-new primary data.",
      ],
      explanation:
        "**Government census tables** already exist prior to the firm's project, making them **Secondary (desk) research**.",
    },
    {
      id: "marketing-and-operations-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "production-lean-jit",
      question:
        "A skateboard workshop employs **12 workers** who assemble **420 skateboards** per week. Calculate weekly **labour productivity** (in skateboards per worker).",
      answer: { type: "number", value: 35, display: "35 units per worker" },
      traps: [
        {
          spec: { type: "number", value: 420 },
          feedback:
            "420 is Total Output! Divide Total Output (420) by Number of Workers (12) for Labour Productivity.",
        },
      ],
      hints: [
        "Labour Productivity = `Total Output ÷ Number of Workers`.",
        "Divide `420` by `12`.",
      ],
      solution: [
        "Labour Productivity = `420 ÷ 12` = **35** skateboards per worker.",
      ],
    },
    {
      id: "marketing-and-operations-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "marketing-mix-4ps",
      question:
        "A leather satchel has a **total unit cost of £40** and the workshop applies **cost-plus pricing with a 35% markup**. Calculate the **selling price** (in £).",
      answer: { type: "number", value: 54, display: "£54" },
      traps: [
        {
          spec: { type: "number", value: 14 },
          feedback:
            "£14 is the markup profit added (`35% of £40`) — add £14 onto the £40 unit cost!",
        },
      ],
      hints: [
        "Calculate `35% of £40`.",
        "Add that markup onto the `£40` unit cost.",
      ],
      solution: [
        "Markup added = `0.35 × £40 = £14`.",
        "Selling Price = `£40 + £14` = **£54**.",
      ],
    },
    {
      id: "marketing-and-operations-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "economies-scale-quality",
      question:
        "A water-bottle factory incurs monthly **Fixed Costs of £24,000** and **Variable Costs of £36,000** to produce **10,000 bottles**. Calculate the **Average Unit Cost** per bottle (in £).",
      answer: { type: "number", value: 6, display: "£6" },
      traps: [
        {
          spec: { type: "number", value: 3.6 },
          feedback:
            "£3.60 only divides Variable Costs (£36,000) by 10,000! Add Fixed Costs (£24,000) first to get Total Cost (£60,000).",
        },
      ],
      hints: [
        "First find Total Cost = `Fixed Costs + Variable Costs`.",
        "Divide Total Cost (£60,000) by Output (`10,000` bottles).",
      ],
      solution: [
        "Total Cost = £24,000 + £36,000 = £60,000.",
        "Average Unit Cost = `£60,000 ÷ 10,000` = **£6**.",
      ],
    },
    {
      id: "marketing-and-operations-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "production-lean-jit",
      question:
        "What **single Japanese Lean-production word** means **continuous small improvements** suggested by workers every day?",
      answer: { type: "text", accept: ["kaizen"], display: "Kaizen" },
      traps: [
        {
          spec: { type: "text", accept: ["jit", "just in time", "just-in-time", "kanban"] },
          feedback: "JIT/Kanban controls zero-buffer stock deliveries — continuous small worker-led improvements is **Kaizen**!",
        },
      ],
      commonError: "Writing 'Just-in-Time' (inventory control) instead of **Kaizen** (continuous improvement).",
      hints: [
        "Starts with `K` (`K_____`).",
        "Pioneered in Toyota's lean factories alongside Just-in-Time.",
      ],
      solution: [
        "**Kaizen** translates to 'change for the better' — continuous incremental improvement involving all employees.",
      ],
    },
    {
      id: "marketing-and-operations-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "marketing-mix-4ps",
      question:
        "In the **Boston Matrix**, which product has **high market share** in a **rapidly growing market** and typically needs heavy promotional investment to defend its lead?",
      options: ["Dog", "Cash Cow", "Question Mark", "Star"],
      answerIndex: 3,
      hints: [
        "Both Market Share AND Market Growth are HIGH.",
        "Cash Cows sit in *low*-growth mature markets.",
      ],
      explanation:
        "A **Star** enjoys both **high market share** and **high market growth**, requiring substantial promotional and capacity spending to maintain leadership.",
    },
    {
      id: "marketing-and-operations-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "markets-ped-competition",
      question:
        "When a coffee chain increases latte prices by **10%**, quantity demanded falls by **18%**. Calculate the **magnitude (positive value) of PED**.",
      answer: { type: "number", value: 1.8, display: "1.8" },
      traps: [
        {
          spec: { type: "number", value: 0.56, tolerance: 0.02 },
          feedback:
            "Upside down! PED puts `% Change in Quantity Demanded` (18%) on top and `% Change in Price` (10%) on the bottom.",
        },
      ],
      hints: [
        "Put **Quantity** on top: `|PED| = %ΔQ ÷ %ΔP`.",
        "Compute `18 ÷ 10`.",
      ],
      solution: [
        "`|PED| = 18% ÷ 10%` = **1.8** (since `1.8 > 1`, demand is price elastic).",
      ],
      commonError:
        "Inverting the PED formula (`%ΔP ÷ %ΔQ`). Always put Quantity on top ('Queen over Prince')!",
    },
    {
      id: "marketing-and-operations-quiz-q09",
      kind: "written",
      difficulty: "core",
      guideRef: "economies-scale-quality",
      marks: 3,
      question:
        "Explain **one advantage** to a bicycle manufacturer of switching from end-of-line **Quality Control** to **Quality Assurance**. (3 marks)",
      modelAnswer:
        "Assembly technicians inspect frames, gears and brakes at every stage of production rather than waiting until finished bikes reach dispatch. Catching misaligned parts early slashes scrapped aluminium waste and rework costs, while protecting brand reputation from faulty bikes.",
      markScheme: [
        {
          point: "Identifies checking at every stage of assembly / self-inspection by workers.",
          keywords: ["every stage", "self-check", "throughout", "early"],
        },
        {
          point: "Applies to the bicycle manufacturing context (frames, brakes, gears, aluminium).",
          keywords: ["frames", "brakes", "gears", "aluminium", "bikes"],
        },
        {
          point: "Links to lower scrap/rework waste costs or stronger customer brand reputation.",
          keywords: ["waste", "scrap", "rework", "reputation"],
        },
      ],
      hints: [
        "Contrast checking *at every stage* against catching defects *after* the whole bike is built.",
        "Mention bicycle parts (brakes/frames) and explain how early detection saves scrap waste!",
      ],
    },
    {
      id: "marketing-and-operations-quiz-q10",
      kind: "mcq",
      difficulty: "core",
      guideRef: "economies-scale-quality",
      question:
        "Why is writing *'economies of scale mean total costs fall when output increases'* marked **WRONG** by Edexcel 4BS1 examiners?",
      options: [
        "Because producing more units raises Total Cost — economies of scale strictly mean **average cost per unit** falls",
        "Because economies of scale only apply to sole traders with fewer than 5 staff",
        "Because economies of scale mean average unit cost rises",
        "Because Fixed Costs always drop to zero as output rises",
      ],
      answerIndex: 0,
      hints: [
        "Think about baking 20,000 loaves instead of 1,000 loaves: you buy 20× more flour, so Total Cost rises!",
        "What cost measure actually drops?",
      ],
      explanation:
        "Total Cost rises with output; **economies of scale** strictly mean **average cost per unit** (`Total Cost ÷ Output`) falls.",
    },
  ],
  papers: [
    {
      id: "marketing-and-operations-p1",
      title: "Practice Paper 1: Marketing Research, PED & Mix + SME Operations (Paper 1)",
      questions: [
        {
          id: "marketing-and-operations-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "markets-ped-competition",
          question:
            "Cornwall Ice Cream Ltd sells **£3.6 million** of tubs in a regional dessert market worth **£24 million**. Calculate its **market share** (as a %).",
          answer: { type: "number", value: 15, display: "15%" },
          traps: [
            {
              spec: { type: "number", value: 6.67, tolerance: 0.05 },
              feedback:
                "Upside down! Divide the firm's sales (£3.6m) by total market sales (£24m), then multiply by 100.",
            },
          ],
          hints: [
            "Market Share = `(Firm's Sales ÷ Total Market Sales) × 100`.",
            "Compute `(3.6 ÷ 24) × 100`.",
          ],
          solution: ["Market Share = `(£3.6m ÷ £24m) × 100` = **15%**."],
        },
        {
          id: "marketing-and-operations-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "markets-ped-competition",
          question:
            "Total UK vegan chocolate sales grew from **£80 million** last year to **£92 million** this year. Calculate the **percentage market growth** (as a %).",
          answer: { type: "number", value: 15, display: "15%" },
          traps: [
            {
              spec: { type: "number", value: 13.04, tolerance: 0.05 },
              feedback:
                "You divided the £12m increase by the NEW £92m market size! Always divide by the ORIGINAL £80m market size.",
            },
            {
              spec: { type: "number", value: 12 },
              feedback:
                "£12m is the raw pound increase — divide £12m by the original £80m and multiply by 100!",
            },
          ],
          hints: [
            "Find the increase: `£92m − £80m = £12m`.",
            "Divide `£12m` by the **original** market size (`£80m`) × 100.",
          ],
          solution: [
            "Change in market size = £92m − £80m = £12m.",
            "Market Growth = `(£12m ÷ £80m) × 100` = **15%**.",
          ],
          commonError:
            "Dividing by the new market size (£92m) instead of the original baseline (£80m).",
        },
        {
          id: "marketing-and-operations-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "market-research-segmentation",
          question:
            "A pet-grooming salon surveys **200 local dog owners**. **65%** say they buy organic dog shampoo, and **40%** of those organic buyers spend over £15 per bottle. How many respondents spend over £15 on organic shampoo?",
          answer: { type: "number", value: 52, display: "52 respondents" },
          traps: [
            {
              spec: { type: "number", value: 130 },
              feedback:
                "130 is the 65% who buy organic shampoo — now find 40% of those 130 owners!",
            },
            {
              spec: { type: "number", value: 80 },
              feedback:
                "80 is 40% of all 200 dog owners — take 40% of the 130 organic buyers instead!",
            },
          ],
          hints: [
            "Step 1: `65% of 200` organic buyers.",
            "Step 2: `40%` of your Step 1 answer.",
          ],
          solution: [
            "Organic shampoo buyers = `0.65 × 200 = 130`.",
            "Spending > £15 = `0.40 × 130` = **52** respondents.",
          ],
        },
        {
          id: "marketing-and-operations-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "marketing-mix-4ps",
          question:
            "A handmade scented candle has direct wax and jar costs of **£4.50** plus allocated workshop overhead of **£3.50** per candle. Using **cost-plus pricing with a 65% markup** on total unit cost, calculate the **selling price** (in £).",
          answer: { type: "number", value: 13.2, display: "£13.20" },
          traps: [
            {
              spec: { type: "number", value: 5.2 },
              feedback:
                "£5.20 is just the 65% markup added (`0.65 × £8.00`) — add £5.20 onto the £8.00 total unit cost!",
            },
            {
              spec: { type: "number", value: 10.93, tolerance: 0.02 },
              feedback:
                "You applied the 65% markup to the £4.50 direct cost only! Sum £4.50 + £3.50 = £8.00 total unit cost first.",
            },
          ],
          hints: [
            "Sum Total Unit Cost: `£4.50 + £3.50 = £8.00`.",
            "Multiply `£8.00 × 1.65`.",
          ],
          solution: [
            "Total Unit Cost = £4.50 + £3.50 = £8.00.",
            "65% markup = `0.65 × £8.00 = £5.20`.",
            "Selling Price = `£8.00 + £5.20` = **£13.20**.",
          ],
        },
        {
          id: "marketing-and-operations-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "markets-ped-competition",
          question:
            "A surfboard shaper sells **100 boards/year at £500** each. Demand is **price inelastic (`|PED| = 0.5`)**. If the shaper raises price by **10% to £550**, calculate the **new annual Total Revenue** (in £).",
          answer: { type: "number", value: 52250, display: "£52,250" },
          traps: [
            {
              spec: { type: "number", value: 55000 },
              feedback:
                "£55,000 assumes quantity stayed at 100 boards! With `|PED| = 0.5`, a 10% price rise lowers quantity by `0.5 × 10% = 5%` to 95 boards.",
            },
            {
              spec: { type: "number", value: 49500 },
              feedback:
                "£49,500 drops quantity by 10% (90 boards) — with `|PED| = 0.5`, quantity only drops by `5%` to 95 boards!",
            },
          ],
          hints: [
            "Find `%ΔQ`: with `|PED| = 0.5`, a `10%` price hike reduces quantity sold by `0.5 × 10% = 5%`.",
            "New quantity = `95` surfboards; multiply `95 × £550`!",
          ],
          solution: [
            "Quantity demanded falls by `0.5 × 10% = 5%`, from 100 down to `95` boards.",
            "New Total Revenue = `95 × £550` = **£52,250** (up by £2,250 from £50,000!).",
          ],
        },
        {
          id: "marketing-and-operations-p1-q06",
          kind: "short",
          difficulty: "warmup",
          guideRef: "production-lean-jit",
          question:
            "Which **single word** (`Job`, `Batch`, or `Flow`) names the production method used by a wedding dressmaker crafting one unique gown to a bride's exact measurements?",
          answer: {
            type: "text",
            accept: ["job", "job production"],
            display: "Job",
          },
          traps: [
            {
              spec: { type: "text", accept: ["batch", "batch production"] },
              feedback: "Batch makes identical groups of items before resetting — a single bespoke wedding gown is **Job** production!",
            },
          ],
          commonError: "Confusing **Job** production (single bespoke item) with **Batch** production (groups of identical items).",
          hints: [
            "Every item is a bespoke one-off made start-to-finish for one customer.",
            "Choose between `Job`, `Batch`, or `Flow`.",
          ],
          solution: [
            "One-off bespoke items crafted to individual customer specifications use **Job** production.",
          ],
        },
        {
          id: "marketing-and-operations-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "production-lean-jit",
          question:
            "A craft bakery employs **8 bakers** who bake **2,240 pastries per week**. After installing a new dough divider, the same **8 bakers** bake **2,760 pastries per week**. By how many **pastries per baker** did weekly **labour productivity** increase?",
          answer: { type: "number", value: 65, display: "65 units per worker" },
          traps: [
            {
              spec: { type: "number", value: 520 },
              feedback:
                "520 is the rise in Total Output (`2,760 − 2,240`) — divide by 8 bakers for the rise in Labour Productivity!",
            },
            {
              spec: { type: "number", value: 345 },
              feedback:
                "345 is the NEW productivity (`2,760 ÷ 8`) — subtract the old productivity (`2,240 ÷ 8 = 280`) to find the increase!",
            },
          ],
          hints: [
            "Before productivity = `2,240 ÷ 8`; After productivity = `2,760 ÷ 8`.",
            "Subtract Before from After!",
          ],
          solution: [
            "Old productivity = `2,240 ÷ 8 = 280` pastries per baker.",
            "New productivity = `2,760 ÷ 8 = 345` pastries per baker.",
            "Increase = `345 − 280` = **65** pastries per baker.",
          ],
        },
        {
          id: "marketing-and-operations-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "economies-scale-quality",
          question:
            "A pottery workshop has monthly **Fixed Costs of £6,400** and **Variable Cost of £7.00 per vase**. Calculate its **Average Unit Cost** when producing **800 vases** per month (in £).",
          answer: { type: "number", value: 15, display: "£15" },
          traps: [
            {
              spec: { type: "number", value: 8 },
              feedback:
                "£8.00 is just Fixed Cost per vase (`£6,400 ÷ 800`) — remember to add the £7.00 Variable Cost per vase!",
            },
          ],
          hints: [
            "Total Cost = `£6,400 + (£7.00 × 800)`.",
            "Divide Total Cost by `800` vases.",
          ],
          solution: [
            "Total Cost = £6,400 + £5,600 = £12,000.",
            "Average Unit Cost = `£12,000 ÷ 800` = **£15**.",
          ],
        },
        {
          id: "marketing-and-operations-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "economies-scale-quality",
          question:
            "Last week an organic jam workshop bottled **2,500 jars**, of which **45 jars** failed end-of-line Quality Control due to loose lids. Calculate the **defect rate** as a percentage.",
          answer: { type: "number", value: 1.8, display: "1.8%" },
          traps: [
            {
              spec: { type: "number", value: 1.83, tolerance: 0.02 },
              feedback:
                "Divide defective jars (45) by TOTAL jars produced (2,500), not by good jars (2,455)!",
            },
          ],
          hints: [
            "Defect Rate = `(Defective Units ÷ Total Units Produced) × 100`.",
            "Compute `(45 ÷ 2,500) × 100`.",
          ],
          solution: [
            "Defect Rate = `(45 ÷ 2,500) × 100` = **1.8%**.",
          ],
        },
        {
          id: "marketing-and-operations-p1-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "marketing-mix-4ps",
          question:
            "Which **Below-the-Line (BTL)** promotion is MOST cost-effective for a newly opened **Paper 1 independent dog-grooming parlour** with a £400 marketing budget?",
          options: [
            "A £250,000 national cinema advertisement before blockbuster films",
            "Local Instagram before-and-after reels plus a 'Refer-a-Friend for £10 off' loyalty card",
            "Sponsoring a Formula 1 racing team",
            "Hiring billboards at Heathrow Airport",
          ],
          answerIndex: 1,
          hints: [
            "Match promotional spend and geographic reach to a *local* £400 budget!",
            "Dog owners live within a few miles of the parlour.",
          ],
          explanation:
            "**Geo-targeted local social media reels and referral loyalty cards** directly reach local pet owners within the £400 budget without wasting money on national non-customers.",
        },
        {
          id: "marketing-and-operations-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "marketing-mix-4ps",
          question:
            "Name the **two-word pricing strategy** where a business launches an innovative, patented gadget at a **high initial price** to capture early adopters before lowering prices later.",
          answer: {
            type: "text",
            accept: ["price skimming", "market skimming"],
            display: "price skimming",
          },
          traps: [
            {
              spec: { type: "text", accept: ["penetration pricing", "price penetration"] },
              feedback: "Penetration pricing launches at a *low* introductory price — launching high for early adopters is **price skimming**!",
            },
          ],
          commonError: "Reversing **price skimming** (high launch price for innovative products) with **penetration pricing** (low launch price for mass market share).",
          hints: [
            "Think of 'skimming the cream' off the top of the market at launch.",
            "Two words: `p____ s_______`.",
          ],
          solution: [
            "Charging a high initial launch price on a unique/patented product is **price skimming**.",
          ],
        },
        {
          id: "marketing-and-operations-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "market-research-segmentation",
          marks: 4,
          question:
            "Saffron & Sage is a small Indian street-food van planning to launch bottled curry sauces online. Analyse **one benefit** of conducting **primary market research** before bottling the sauces. (4 marks)",
          modelAnswer:
            "Tasting focus groups and questionnaires with existing street-food diners gather tailored, first-hand feedback on spice heat levels, jar sizes and acceptable bottle prices. Discovering exact flavour preferences upfront cuts the risk of bottling thousands of unsold jars that miss customer tastes.",
          markScheme: [
            {
              point: "Identifies a valid primary method or tailored first-hand data feature (focus groups, taste tests, surveys).",
              keywords: ["focus group", "tasting", "questionnaire", "first-hand", "tailored"],
            },
            {
              point: "Applies directly to the curry sauce / street-food context (spice levels, flavours, jars, diners).",
              keywords: ["spice", "flavour", "jars", "diners", "bottle"],
            },
            {
              point: "Links findings to better 4Ps alignment (setting right price or recipe).",
              keywords: ["preferences", "acceptable", "recipe"],
            },
            {
              point: "Develops commercial impact: lowers launch failure risk / avoids wasted unsold stock.",
              keywords: ["risk", "unsold", "wasted", "failure"],
            },
          ],
          hints: [
            "Mention a specific primary tool (e.g. customer taste-testing focus groups at the van).",
            "Explain how feedback on spice/jar price prevents costly unsold sauce stock!",
          ],
        },
        {
          id: "marketing-and-operations-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "production-lean-jit",
          marks: 4,
          question:
            "Analyse **one risk** to a small UK bicycle repair and custom-build shop of adopting **Just-in-Time (JIT)** stock control for specialist Shimano gear sets imported from Japan. (4 marks)",
          modelAnswer:
            "Holding zero buffer stock of Japanese derailleur gears leaves the workshop exposed whenever shipping container delays or customs hold-ups strike. Waiting weeks for parts halts custom bike completions, frustrating cyclists who may cancel orders and switch to rival bike shops.",
          markScheme: [
            {
              point: "Identifies zero buffer stock / reliance on punctual deliveries.",
              keywords: ["zero buffer", "buffer stock", "no spare"],
            },
            {
              point: "Applies to imported Japanese bike components (shipping delays, customs, derailleur gears, cyclists).",
              keywords: ["shipping", "customs", "gears", "cyclists", "container"],
            },
            {
              point: "Explains the operational disruption (halts repairs / delays custom bike builds).",
              keywords: ["halts", "delays", "wait"],
            },
            {
              point: "Develops the commercial damage (cancelled orders, lost reputation, customers defecting to rivals).",
              keywords: ["cancel", "rival", "frustrat", "reputation"],
            },
          ],
          hints: [
            "Highlight the 6,000-mile import route from Japan + zero safety buffer stock.",
            "Trace shipping delay → halted bike repairs → angry cyclists cancelling orders!",
          ],
        },
        {
          id: "marketing-and-operations-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "marketing-mix-4ps",
          marks: 4,
          question:
            "Analyse how selling handmade silver jewellery **directly to consumers via an e-commerce website** (rather than through high-street gift shops) affects a small studio's **Place** and profitability. (4 marks)",
          modelAnswer:
            "Bypassing retail middlemen lets the silversmith keep the entire retail profit margin on every necklace and ring rather than surrendering a wholesale cut. Furthermore, selling online opens 24/7 international reach to niche jewellery collectors without paying expensive high-street shop rent.",
          markScheme: [
            {
              point: "Explains cutting out retail intermediaries / middlemen.",
              keywords: ["middlemen", "bypass", "intermediar", "wholesale"],
            },
            {
              point: "Applies to jewellery studio context (necklaces, rings, silversmith, collectors).",
              keywords: ["necklace", "ring", "silversmith", "collectors"],
            },
            {
              point: "Links direct sales to keeping the full retail profit margin.",
              keywords: ["margin", "full retail"],
            },
            {
              point: "Adds geographic reach / 24-7 access OR saving physical high-street rent.",
              keywords: ["24/7", "international", "global", "rent"],
            },
          ],
          hints: [
            "What happens to Gross Profit Margin when gift shops no longer take a 45% retail cut?",
            "Also link online selling to 24/7 global collector reach without high-street rent!",
          ],
        },
        {
          id: "marketing-and-operations-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "production-lean-jit",
          marks: 6,
          question:
            "A successful 15-employee handmade leather-boot workshop has a 6-week waiting list. Evaluate whether it should switch from **Job production** to **Batch production** using semi-automated cutting machines. (6 marks)",
          modelAnswer:
            "Switching to batch production with cutting machinery raises boot output per cobbler and lowers average unit cost, clearing the six-week waiting list to capture waiting revenue. However, investing in leather-cutting machines drains cash reserves, and standardised sizes risk diluting the bespoke handmade USP that justifies premium inelastic prices. Ultimately, using batch cutting for standard boot soles while keeping hand-stitched custom uppers balances capacity growth with artisan brand equity.",
          markScheme: [
            {
              point: "Explains Batch upside: higher productivity / faster output clears the 6-week backlog.",
              keywords: ["productivity", "faster", "clear", "backlog", "output"],
            },
            {
              point: "Links semi-automation to lower average unit cost.",
              keywords: ["unit cost", "lower"],
            },
            {
              point: "Applies specifically to bootmaking context (leather, cobblers, soles, uppers, sizes).",
              keywords: ["cobbler", "soles", "uppers", "sizes"],
            },
            {
              point: "Evaluates capital cost / machine resetting downtime drawback.",
              keywords: ["cash", "investing", "downtime"],
            },
            {
              point: "Evaluates marketing risk: losing bespoke USP and price-inelastic premium.",
              keywords: ["bespoke", "usp", "inelastic", "premium", "artisan"],
            },
            {
              point: "Reaches a nuanced AJIM judgement (e.g. hybrid semi-batch or phased transition).",
              keywords: ["ultimately", "balances", "brand equity"],
            },
          ],
          hints: [
            "Argue FOR Batch: faster output clears the 6-week queue + lower unit cost.",
            "Argue AGAINST Batch: capital cost + losing the bespoke handmade USP that supports luxury boot prices!",
            "Finish with a smart AJIM compromise (batch-cut standard soles, hand-finish bespoke uppers).",
          ],
        },
      ],
    },
    {
      id: "marketing-and-operations-p2",
      title: "Practice Paper 2: Portfolio Strategy, Scale Economies & TQM (Paper 2)",
      questions: [
        {
          id: "marketing-and-operations-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "markets-ped-competition",
          question:
            "Global electric-bus sales total **£18.5 billion** per year, and **VoltCoach Plc** holds a **12% market share**. Calculate VoltCoach Plc's annual sales in **£ billions** (to 2 d.p.).",
          answer: { type: "number", value: 2.22, display: "£2.22bn" },
          traps: [
            {
              spec: { type: "number", value: 1.54, tolerance: 0.02 },
              feedback:
                "You divided 18.5 by 12! Multiply `12% × £18.5bn` (`0.12 × 18.5`).",
            },
          ],
          hints: [
            "Rearrange Market Share: `Firm's Sales = (Market Share % ÷ 100) × Total Market Sales`.",
            "Compute `0.12 × 18.5`.",
          ],
          solution: [
            "VoltCoach Sales = `0.12 × £18.5bn` = **£2.22bn**.",
          ],
        },
        {
          id: "marketing-and-operations-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "marketing-mix-4ps",
          question:
            "Name the **two-word Boston Matrix category** for an established product with **high market share** in a **low-growth mature market** that generates surplus cash flow.",
          answer: { type: "text", accept: ["cash cow"], display: "Cash Cow" },
          traps: [
            {
              spec: { type: "text", accept: ["star", "rising star"] },
              feedback: "A Star has high market share in a *high-growth* market — high share in a *low-growth* mature market is a **Cash Cow**!",
            },
          ],
          commonError: "Calling a mature high-share product a **Star** (high growth, needs heavy investment) instead of a **Cash Cow** (low growth, generates net cash surplus).",
          hints: [
            "High Market Share + Low Market Growth.",
            "You 'milk' its surplus cash to fund Stars and Question Marks!",
          ],
          solution: [
            "High market share in a low-growth mature market defines a **Cash Cow**.",
          ],
        },
        {
          id: "marketing-and-operations-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "markets-ped-competition",
          question:
            "A streaming music Plc cuts its monthly plan by **15%**, triggering a **33% jump** in student sign-ups. Calculate the **magnitude (positive value) of PED**.",
          answer: { type: "number", value: 2.2, display: "2.2" },
          traps: [
            {
              spec: { type: "number", value: 0.45, tolerance: 0.02 },
              feedback:
                "Upside down! Put `% Change in Quantity Demanded` (33%) on top and `% Change in Price` (15%) underneath.",
            },
          ],
          hints: [
            "`|PED| = %ΔQ ÷ %ΔP`.",
            "Divide `33` by `15`.",
          ],
          solution: [
            "`|PED| = 33% ÷ 15%` = **2.2** (price elastic).",
          ],
        },
        {
          id: "marketing-and-operations-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "production-lean-jit",
          question:
            "NovaCar Plc's Sunderland plant employs **1,250 assembly staff** and produces **45,000 cars** per year. Calculate annual **labour productivity** (in cars per worker).",
          answer: { type: "number", value: 36, display: "36 units per worker" },
          traps: [
            {
              spec: { type: "number", value: 45000 },
              feedback:
                "45,000 is Total Output — divide by 1,250 workers to find Labour Productivity!",
            },
          ],
          hints: [
            "Labour Productivity = `Total Output ÷ Number of Workers`.",
            "Compute `45,000 ÷ 1,250`.",
          ],
          solution: [
            "Labour Productivity = `45,000 ÷ 1,250` = **36** cars per worker.",
          ],
        },
        {
          id: "marketing-and-operations-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "production-lean-jit",
          question:
            "Each worker at a washing-machine plant earns **£2,400 per month** and achieves a monthly **labour productivity of 80 machines per worker**. Calculate the **labour cost per washing machine** (in £).",
          answer: { type: "number", value: 30, display: "£30" },
          traps: [
            {
              spec: { type: "number", value: 192000 },
              feedback:
                "Divide the £2,400 monthly wage by 80 machines produced (`£2,400 ÷ 80`), do not multiply!",
            },
          ],
          hints: [
            "One worker costs £2,400 and builds 80 machines in that month.",
            "Divide `£2,400` by `80`.",
          ],
          solution: [
            "Labour Cost per Unit = `Wage per Worker ÷ Labour Productivity = £2,400 ÷ 80` = **£30**.",
          ],
        },
        {
          id: "marketing-and-operations-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "economies-scale-quality",
          question:
            "At **50,000 units**, Factory X has **Fixed Costs of £300,000** and **Variable Cost of £12 per unit**. At **150,000 units**, bulk-buying cuts **Variable Cost to £9.50 per unit** while Fixed Costs rise to **£375,000**. By how many **pounds (£)** does **Average Unit Cost** fall?",
          answer: { type: "number", value: 6, display: "£6" },
          traps: [
            {
              spec: { type: "number", value: 12 },
              feedback:
                "£12.00 is the NEW Average Unit Cost (`£375k/150k + £9.50 = £12.00`) — subtract it from the OLD Average Unit Cost (£18.00) to find the fall!",
            },
            {
              spec: { type: "number", value: 18 },
              feedback:
                "£18.00 is the OLD Average Unit Cost — now compute the new unit cost at 150,000 units (£12.00) and find the difference!",
            },
          ],
          hints: [
            "At 50,000 units: Unit Cost = `(£300,000 ÷ 50,000) + £12 = £18.00`.",
            "At 150,000 units: Unit Cost = `(£375,000 ÷ 150,000) + £9.50 = £12.00`. Find the drop!",
          ],
          solution: [
            "Old Unit Cost (50k) = `(£300,000 + £600,000) ÷ 50,000 = £18.00`.",
            "New Unit Cost (150k) = `(£375,000 + £1,425,000) ÷ 150,000 = £12.00`.",
            "Reduction in Average Unit Cost = `£18.00 − £12.00` = **£6**.",
          ],
        },
        {
          id: "marketing-and-operations-p2-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "economies-scale-quality",
          question:
            "A pharmaceutical Plc employs specialist patent lawyers, Treasury hedging directors and AI data scientists that a small chemist could never afford full-time. Which internal economy of scale is this?",
        options: [
            "Purchasing economy of scale",
            "External economy of scale",
            "Managerial economy of scale",
            "Diseconomy of scale",
          ],
          answerIndex: 2,
          hints: [
            "Hiring specialist expert functional executives boosts productivity and lowers unit admin errors.",
            "Look at the six internal economies: Purchasing, Technical, Managerial, Financial, Marketing, Risk-bearing.",
          ],
          explanation:
            "Recruiting specialist functional managers/experts to run distinct divisions efficiently is a **managerial internal economy of scale**.",
        },
        {
          id: "marketing-and-operations-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "marketing-mix-4ps",
          question:
            "An appliance Plc manufactures air fryers at a **unit cost of £32** and sells them to retailers using a **25% cost-plus markup**. Retailers then add a **50% markup** onto their wholesale buying price. Calculate the **final retail price** paid by shoppers (in £).",
          answer: { type: "number", value: 60, display: "£60" },
          traps: [
            {
              spec: { type: "number", value: 40 },
              feedback:
                "£40 is the wholesale price charged to retailers — now apply the retailer's 50% markup onto £40!",
            },
            {
              spec: { type: "number", value: 56 },
              feedback:
                "Markups compound sequentially (`£32 × 1.25 × 1.50`), rather than adding `25% + 50% = 75%` onto £32!",
            },
          ],
          hints: [
            "Step 1 (Wholesale price): `£32 × 1.25 = £40`.",
            "Step 2 (Retail price): `£40 × 1.50`.",
          ],
          solution: [
            "Manufacturer wholesale price = `£32 × 1.25 = £40`.",
            "Retailer selling price = `£40 × 1.50` = **£60**.",
          ],
        },
        {
          id: "marketing-and-operations-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "economies-scale-quality",
          question:
            "Before introducing TQM, a microchip plant scrapped **3.5%** of its **200,000 wafers** at a scrap cost of **£40 per wafer**. After TQM, the defect rate fell to **0.5%**. Calculate the **total cost saved** on scrapped wafers (in £).",
          answer: { type: "number", value: 240000, display: "£240,000" },
          traps: [
            {
              spec: { type: "number", value: 6000 },
              feedback:
                "6,000 is the number of wafers saved (`3% of 200,000`) — multiply by £40 per wafer for the pound saving!",
            },
          ],
          hints: [
            "Defect reduction = `3.5% − 0.5% = 3.0%` of 200,000 wafers = `6,000` fewer scrapped wafers.",
            "Multiply `6,000 × £40`.",
          ],
          solution: [
            "Wafers saved from scrap = `0.03 × 200,000 = 6,000` wafers.",
            "Cost saving = `6,000 × £40` = **£240,000**.",
          ],
        },
        {
          id: "marketing-and-operations-p2-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "marketing-mix-4ps",
          question:
            "Why would a dominant supermarket chain pricing bread at **12p a loaf** (well below its **48p wholesale cost**) for six months specifically to bankrupt a local bakery be investigated by regulators?",
          options: [
            "Cost-plus pricing is restricted to manufacturing companies",
            "Predatory pricing is anti-competitive and illegal under competition legislation",
            "Price skimming is banned on food items",
            "Below-the-line promotion is illegal in retail",
          ],
          answerIndex: 1,
          hints: [
            "Sustained below-cost pricing aimed at driving a competitor out of the market has a specific name.",
            "Once the rival goes bust, consumers face monopoly price hikes!",
          ],
          explanation:
            "Deliberately pricing below cost to eliminate competition is **predatory pricing**, which is **illegal** under competition law.",
        },
        {
          id: "marketing-and-operations-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "markets-ped-competition",
          question:
            "In 2024, **AeroPods Plc** sold **£45m** in a **£180m** headphone market. In 2025, AeroPods Plc's sales grew to **£54m** while total market sales expanded to **£240m**. Calculate the change in AeroPods Plc's **market share** in **percentage points** (include `−` if it fell).",
          answer: { type: "number", value: -2.5, display: "−2.5 percentage points" },
          traps: [
            {
              spec: { type: "number", value: 2.5 },
              feedback:
                "Check the sign! Market share fell from 25% (`45/180`) down to 22.5% (`54/240`), so the change is `−2.5` percentage points.",
            },
            {
              spec: { type: "number", value: 22.5 },
              feedback:
                "22.5% is the 2025 market share — subtract the 2024 market share (25%) to find the change!",
            },
          ],
          hints: [
            "2024 Market Share = `(45 ÷ 180) × 100 = 25%`.",
            "2025 Market Share = `(54 ÷ 240) × 100 = 22.5%`. Compute `2025 − 2024`!",
          ],
          solution: [
            "2024 Market Share = `(45 ÷ 180) × 100 = 25.0%`.",
            "2025 Market Share = `(54 ÷ 240) × 100 = 22.5%`.",
            "Change = `22.5% − 25.0%` = **−2.5** percentage points.",
          ],
        },
        {
          id: "marketing-and-operations-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "marketing-mix-4ps",
          marks: 4,
          question:
            "Analyse how a smartphone Plc can use the **Boston Matrix** alongside the **Product Life Cycle** to manage cash flow across its product portfolio. (4 marks)",
          modelAnswer:
            "Flagship phones sitting in maturity enjoy high market share and low market growth as cash cows, generating large surplus cash inflows with modest advertising needs. Management can channel this surplus cash into R&D and launch promotion for wearable question marks and fast-growing stars before older handsets enter decline.",
          markScheme: [
            {
              point: "Links Maturity stage of PLC to Cash Cow status (high share, low growth, net cash surplus).",
              keywords: ["cash cow", "surplus", "maturity"],
            },
            {
              point: "Applies to smartphone / tech Plc portfolio context (handsets, wearables, flagship).",
              keywords: ["flagship", "handsets", "wearable", "phones"],
            },
            {
              point: "Explains redirecting surplus cash internally into R&D / launch promotion.",
              keywords: ["r&d", "channel", "promotion", "launch"],
            },
            {
              point: "Links investment to growing Question Marks / Stars to replace products entering Decline.",
              keywords: ["question mark", "stars", "decline"],
            },
          ],
          hints: [
            "Connect **Maturity** on the PLC to **Cash Cows** generating net cash!",
            "Show where that cash goes: funding R&D/promotion for **Question Marks** & **Stars** before older handsets hit **Decline**.",
          ],
        },
        {
          id: "marketing-and-operations-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "economies-scale-quality",
          marks: 4,
          question:
            "After rapid global acquisitions, **MegaParcel Plc** saw its **average delivery cost per parcel rise by 14%**. Analyse **one diseconomy of scale** that could explain this unit-cost increase. (4 marks)",
          modelAnswer:
            "Rapid mergers created a sprawling, multi-layered hierarchy across international depots where routing instructions become delayed or distorted along chains of command. Miscommunication causes duplicate van journeys and mis-sorted parcels, driving up fuel and rework expenses faster than parcel volume so average unit cost rises.",
          markScheme: [
            {
              point: "Identifies a valid diseconomy of scale (poor communication, coordination failure, or worker alienation).",
              keywords: ["communication", "miscommunication", "coordination", "hierarchy", "alienation"],
            },
            {
              point: "Applies to parcel / courier logistics context (depots, vans, routing, mis-sorted parcels).",
              keywords: ["depots", "vans", "routing", "mis-sorted", "journeys"],
            },
            {
              point: "Explains the operational waste (duplicate trips, delays, errors).",
              keywords: ["duplicate", "distort", "delayed", "fuel"],
            },
            {
              point: "Links strictly to rising **average unit cost** (costs rising faster than output).",
              keywords: ["average unit cost", "faster than"],
            },
          ],
          hints: [
            "Pick ONE clear diseconomy (e.g. communication distortion across merged depots).",
            "Explain how mis-sorted vans waste fuel so **average unit cost** rises!",
          ],
        },
        {
          id: "marketing-and-operations-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "production-lean-jit",
          marks: 4,
          question:
            "Analyse **one reason** why an autocratic factory culture might cause a new **Kaizen** continuous-improvement programme to fail at a food-processing Plc. (4 marks)",
          modelAnswer:
            "Kaizen depends on line operatives feeling safe and empowered to suggest daily waste-cutting tweaks on packaging and mixing machines. Under strict autocratic managers who issue top-down orders and ignore shop-floor ideas, workers feel undervalued and stay silent, leaving operational inefficiencies unspotted.",
          markScheme: [
            {
              point: "Explains that Kaizen relies on empowered bottom-up employee suggestions.",
              keywords: ["empowered", "suggest", "bottom-up", "tweaks"],
            },
            {
              point: "Applies to food-processing factory context (line operatives, packaging, mixing).",
              keywords: ["operatives", "packaging", "mixing", "line"],
            },
            {
              point: "Contrasts with autocratic top-down command ignoring worker input.",
              keywords: ["top-down", "ignore", "orders"],
            },
            {
              point: "Links worker silence/demotivation to failure to eliminate waste.",
              keywords: ["silent", "undervalued", "inefficiencies", "unspotted"],
            },
          ],
          hints: [
            "Bridge Topic 2 (Autocratic leadership) with Topic 5 (Kaizen)!",
            "Why won't food-line workers share waste-saving ideas if managers dictate everything top-down?",
          ],
        },
        {
          id: "marketing-and-operations-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "economies-scale-quality",
          marks: 6,
          question:
            "Evaluate whether introducing **Total Quality Management (TQM)** is more effective than **penetration pricing** for an electric-vehicle Plc entering the European family-car market. (6 marks)",
          modelAnswer:
            "Penetration pricing undercuts established petrol and EV rivals to win rapid mass-market share and unlock flow-production economies of scale. However, families spending £30,000 prioritize battery safety and reliability; low prices squeeze gross profit margins and fail if battery recalls destroy trust. Ultimately, embedding zero-defect TQM across battery cells and assembly is decisive first, because safety credibility makes demand more inelastic and sustains long-term market share.",
          markScheme: [
            {
              point: "Explains Penetration Pricing benefit: wins rapid market share and unlocks flow economies of scale.",
              keywords: ["undercut", "market share", "economies of scale", "flow"],
            },
            {
              point: "Evaluates Penetration drawback: squeezes Gross Profit Margin / triggers rival price wars.",
              keywords: ["squeeze", "gross profit", "margins"],
            },
            {
              point: "Applies specifically to EV family-car context (battery safety, £30,000 purchase, recalls).",
              keywords: ["battery", "safety", "recalls", "£30,000"],
            },
            {
              point: "Explains TQM advantage: zero-defect culture prevents costly recalls and builds brand trust.",
              keywords: ["zero-defect", "trust", "reliability"],
            },
            {
              point: "Notes TQM trade-off or PED link (training cost/time vs making demand price inelastic).",
              keywords: ["inelastic", "credibility"],
            },
            {
              point: "Delivers a justified AJIM verdict prioritising EV battery quality credibility.",
              keywords: ["ultimately", "decisive", "sustains"],
            },
          ],
          hints: [
            "Weigh Penetration Pricing (fast share + scale vs squeezed margins) against TQM (zero battery defects + trust vs training costs).",
            "Anchor in EV buyer psychology: would a family risk an unsafe cheap EV battery?",
            "Finish with an AJIM verdict!",
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "marketing-and-operations-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "markets-ped-competition",
      question:
        "A meal-kit subscription company currently charges **£40 per box** and sells **5,000 boxes/week**. Its Variable Cost is **£22 per box** and weekly Fixed Costs are **£55,000**. Research shows `|PED| = 2.5`. If it cuts price by **10% to £36**, calculate its **new weekly Operating Profit** (in £).",
      answer: { type: "number", value: 32500, display: "£32,500" },
      traps: [
        {
          spec: { type: "number", value: 35000 },
          feedback:
            "£35,000 was the OLD Operating Profit (`5,000 × £18 − £55,000`)! Even though Revenue rose from £200k to £225k, check what happened to Variable Costs at 6,250 boxes!",
        },
        {
          spec: { type: "number", value: 225000 },
          feedback:
            "£225,000 is the new Total Revenue (`6,250 × £36`) — subtract Total Variable Costs (`6,250 × £22`) and Fixed Costs (£55,000)!",
        },
      ],
      hints: [
        "Step 1: With `|PED| = 2.5`, a `10%` price cut increases boxes sold by `2.5 × 10% = +25%` → `5,000 × 1.25 = 6,250` boxes.",
        "Step 2: New Contribution per box = `£36 − £22 = £14`.",
        "Step 3: Multiply `6,250 × £14` and subtract Fixed Costs (`£55,000`)!",
      ],
      solution: [
        "New weekly volume = `5,000 × (1 + 0.25) = 6,250` boxes (Revenue rises from £200k to £225k!).",
        "New Contribution per box = `£36 − £22 = £14`; Total Contribution = `6,250 × £14 = £87,500`.",
        "New Operating Profit = `£87,500 − £55,000` = **£32,500** (down from £35,000 — proving Grade 9 insight that **higher elastic revenue can still lower profit** when Variable Costs are high!).",
      ],
      strategy: "Track Contribution, not Revenue alone, after a PED price cut",
    },
    {
      id: "marketing-and-operations-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "economies-scale-quality",
      question:
        "A drone manufacturer produces **4,000 drones** at an **Average Unit Cost of £185**. After expanding to **10,000 drones**, technical and purchasing economies of scale cut **Average Unit Cost by 20%**, while the firm sells every drone at **£220**. Calculate its **total profit** at **10,000 drones** (in £).",
      answer: { type: "number", value: 720000, display: "£720,000" },
      traps: [
        {
          spec: { type: "number", value: 350000 },
          feedback:
            "£350,000 uses the OLD £185 unit cost (`10,000 × £35`)! Reduce £185 by 20% first.",
        },
        {
          spec: { type: "number", value: 1480000 },
          feedback:
            "£1,480,000 is the new Total Cost (`10,000 × £148`) — subtract it from Revenue (`10,000 × £220 = £2,200,000`)!",
        },
      ],
      hints: [
        "New Average Unit Cost = `£185 × (1 − 0.20) = £148`.",
        "Profit per drone at 10,000 scale = `£220 − £148 = £72`.",
        "Multiply `£72 × 10,000` drones!",
      ],
      solution: [
        "New Average Unit Cost = `£185 × 0.80 = £148`.",
        "Unit profit margin = `£220 − £148 = £72` per drone.",
        "Total Profit = `10,000 × £72` = **£720,000**.",
      ],
    },
    {
      id: "marketing-and-operations-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "production-lean-jit",
      question:
        "A furniture plant employs **40 workers** paid **£500/week each**, producing **800 chairs/week**. It invests in CNC routers costing **£4,000/week** in machine lease/depreciation, allowing **25 workers** (still paid **£500/week**) to produce **1,000 chairs/week** (raw timber stays **£18/chair**). By how much does **Average Unit Cost per chair** fall (in £)?",
      answer: { type: "number", value: 8.5, display: "£8.50" },
      traps: [
        {
          spec: { type: "number", value: 12.5 },
          feedback:
            "£12.50 ignores the new £4,000/week CNC machine lease cost (`£4.00` per chair)!",
        },
        {
          spec: { type: "number", value: 34.5 },
          feedback:
            "£34.50 is the NEW Average Unit Cost — subtract it from the OLD Average Unit Cost (£43.00) to find the reduction!",
        },
      ],
      hints: [
        "Timber (£18/chair) is identical before and after, or include it in both!",
        "Before non-timber cost per chair: `(40 × £500) ÷ 800 = £25.00` (`Total = £43.00`).",
        "After non-timber cost per chair: `((25 × £500) + £4,000) ÷ 1,000 = £16.50` (`Total = £34.50`). Subtract!",
      ],
      solution: [
        "Before: Total Weekly Cost = `(40 × £500) + (800 × £18) = £20,000 + £14,400 = £34,400` → Unit Cost = `£34,400 ÷ 800 = £43.00`.",
        "After: Total Weekly Cost = `(25 × £500) + £4,000 + (1,000 × £18) = £12,500 + £4,000 + £18,000 = £34,500` → Unit Cost = `£34,500 ÷ 1,000 = £34.50`.",
        "Fall in Average Unit Cost = `£43.00 − £34.50` = **£8.50** per chair.",
      ],
    },
    {
      id: "marketing-and-operations-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "markets-ped-competition",
      question:
        "In 2024, **GlowTea Ltd** held a **15% market share** of an **£80 million** iced-tea market. In 2025, the total iced-tea market grew by **25%**, and GlowTea's **market share rose to 18%**. By what **percentage** did GlowTea's own **Revenue** grow between 2024 and 2025?",
      answer: { type: "number", value: 50, display: "50%" },
      traps: [
        {
          spec: { type: "number", value: 28 },
          feedback:
            "Do not just add `25% + 3%`! Find GlowTea's 2024 Revenue (£12m) and 2025 Revenue (£18m), then compute percentage growth.",
        },
        {
          spec: { type: "number", value: 6 },
          feedback:
            "£6m is the pound increase (`£18m − £12m`) — divide £6m by 2024 Revenue (£12m) × 100!",
        },
      ],
      hints: [
        "2024 GlowTea Revenue = `15% of £80m = £12m`.",
        "2025 Total Market = `£80m × 1.25 = £100m`, so 2025 GlowTea Revenue = `18% of £100m = £18m`.",
        "Calculate percentage growth from `£12m` to `£18m`!",
      ],
      solution: [
        "2024 GlowTea Revenue = `0.15 × £80m = £12m`.",
        "2025 Market Size = `£80m × 1.25 = £100m` → 2025 GlowTea Revenue = `0.18 × £100m = £18m`.",
        "Revenue growth = `((£18m − £12m) ÷ £12m) × 100` = **50%**.",
      ],
    },
    {
      id: "marketing-and-operations-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "marketing-mix-4ps",
      question:
        "A backpack brand sells via high-street outdoor retailers at a **final shop price of £75**. Retailers take a **40% Gross Profit Margin** on the £75 shop price (so the brand receives 60% of £75), while direct manufacturing cost is **£27 per backpack**. If the brand switches to **direct e-commerce at £65** (incurring **£8 parcel shipping** per order), by how many **pounds (£)** does its **profit per backpack** increase?",
      answer: { type: "number", value: 12, display: "£12" },
      traps: [
        {
          spec: { type: "number", value: 20 },
          feedback:
            "Don't forget to deduct the £8 parcel shipping cost per direct online order!",
        },
        {
          spec: { type: "number", value: 30 },
          feedback:
            "£30 is the NEW profit per backpack (`£65 − £27 − £8`) — subtract the OLD wholesale profit (£18) to find the increase!",
        },
      ],
      hints: [
        "Old retailer channel: brand receives `60% of £75 = £45` wholesale revenue → Old profit = `£45 − £27 = £18`.",
        "New direct online channel: brand receives `£65` minus `£27` making cost minus `£8` parcel shipping.",
        "Subtract Old profit from New profit!",
      ],
      solution: [
        "Via retailers: wholesale price received = `0.60 × £75 = £45` → Profit/unit = `£45 − £27 = £18`.",
        "Direct e-commerce: Profit/unit = `£65 − £27 − £8 = £30`.",
        "Increase in profit per backpack = `£30 − £18` = **£12**.",
      ],
    },
    {
      id: "marketing-and-operations-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "economies-scale-quality",
      question:
        "Under end-of-line **Quality Control**, a ceramic tile line produces **10,000 tiles/day** (`£3.00` production cost per tile), scraps **8% defective tiles** (worth £0), and sells good tiles at **£5.00 each**. Switching to **Quality Assurance** adds **£1,600/day** in staff training/checking costs and cuts scrapped tiles to **1%**. By how much does **daily profit** rise (in £)?",
      answer: { type: "number", value: 1900, display: "£1,900" },
      traps: [
        {
          spec: { type: "number", value: 3500 },
          feedback:
            "£3,500 is the extra revenue from selling 700 more good tiles (`700 × £5`) — remember to deduct the £1,600/day QA cost!",
        },
      ],
      hints: [
        "Total tile manufacturing cost (`10,000 × £3 = £30,000`) is already spent in both systems!",
        "Cutting defects from `8%` (800 tiles) to `1%` (100 tiles) yields **700 extra saleable tiles** at **£5.00 each**.",
        "Subtract the **£1,600/day** QA cost from that extra £3,500 revenue!",
      ],
      solution: [
        "Under QC: `9,200` good tiles × £5 = £46,000 revenue − £30,000 cost = `£16,000` daily profit.",
        "Under QA: `9,900` good tiles × £5 = £49,500 revenue − (£30,000 + £1,600 QA) = `£17,900` daily profit.",
        "Daily profit rises by `£17,900 − £16,000` = **£1,900**.",
      ],
    },
    {
      id: "marketing-and-operations-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "production-lean-jit",
      question:
        "An e-bike factory holds **£600,000 of buffer inventory** incurring annual warehouse/insurance holding costs of **15% of stock value**. Switching to **Just-in-Time (JIT)** cuts average inventory to **£80,000**, though two courier delays per year halt the line at a penalty of **£19,000 per stoppage**. Calculate the **net annual cost saving** from switching to JIT (in £).",
      answer: { type: "number", value: 40000, display: "£40,000" },
      traps: [
        {
          spec: { type: "number", value: 78000 },
          feedback:
            "£78,000 is the gross holding-cost saving (`15% × £520,000`) — deduct the `2 × £19,000 = £38,000` stoppage cost!",
        },
      ],
      hints: [
        "Old holding cost = `15% of £600,000 = £90,000`; New holding cost = `15% of £80,000 = £12,000`.",
        "Calculate the gross storage saving (`£90,000 − £12,000`).",
        "Subtract the annual stoppage penalty (`2 × £19,000 = £38,000`)!",
      ],
      solution: [
        "Storage cost reduction = `0.15 × (£600,000 − £80,000) = £78,000`.",
        "Annual supply-delay stoppage cost = `2 × £19,000 = £38,000`.",
        "Net annual saving = `£78,000 − £38,000` = **£40,000**.",
      ],
    },
    {
      id: "marketing-and-operations-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "marketing-mix-4ps",
      marks: 6,
      question:
        "**VelvetCocoa Plc** sells luxury boxed Belgian chocolates in mature UK gift shops (**Cash Cow**). Sales growth has stalled at 1% a year. Evaluate whether launching a **low-price supermarket snack bar** under the *VelvetCocoa* brand is better than **expanding luxury online gifting into Japan and South Korea** as an extension strategy. (6 marks)",
      modelAnswer:
        "Launching a budget supermarket bar unlocks mass-market volume and flow-production economies of scale rapidly in domestic aisles. However, stamping the VelvetCocoa name onto cheap everyday snacks clashes violently with its luxury 4Ps positioning, eroding exclusivity and making core gift-box demand more price elastic. Ultimately, exporting luxury gift boxes online into wealthy Japanese and Korean gifting cultures is superior: it extends the product life cycle while preserving brand equity and wide gross profit margins.",
      markScheme: [
        {
          point: "Explains domestic supermarket bar upside: mass-market volume / flow economies of scale.",
          keywords: ["mass-market", "volume", "flow", "economies of scale"],
        },
        {
          point: "Critiques brand dilution / 4Ps clash from putting a luxury chocolate badge in budget aisles.",
          keywords: ["clashes", "exclusivity", "erod", "positioning", "dilution"],
        },
        {
          point: "Links brand damage to weakening PED / squeezing core luxury gift margins.",
          keywords: ["elastic", "gross profit", "margins"],
        },
        {
          point: "Explains Asian online export upside: accesses new high-income gifting markets without high-street store leases.",
          keywords: ["gifting", "japanese", "korean", "wealthy"],
        },
        {
          point: "Notes international e-commerce trade-off or Cash Cow funding synergy.",
          keywords: ["extends", "life cycle", "brand equity"],
        },
        {
          point: "Reaches a justified AJIM conclusion selecting Asian luxury e-commerce to protect brand alignment.",
          keywords: ["ultimately", "superior", "preserves"],
        },
      ],
      hints: [
        "Test Option 1 (budget supermarket bar) against **4Ps consistency**: what happens to luxury brand image and PED?",
        "Test Option 2 (Asian online gifting export) as a classic **Product Life Cycle extension strategy** funded by the UK Cash Cow!",
        "Clinch with an AJIM verdict protecting luxury Gross Profit Margins.",
      ],
    },
  ],
};
