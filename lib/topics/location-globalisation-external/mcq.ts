import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "location-globalisation-external-m1",
    title: "Paper 1 — Core Concepts: Location, Globalisation, Exchange Rates & Policy",
    questions: [
      {
        id: "location-globalisation-external-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "location-decisions",
        question:
          "A 6-employee independent sandwich bar relies on lunchtime office workers walking past its window. Which location factor is most decisive for its survival?",
        options: [
          "Proximity to target customers and high pedestrian footfall",
          "Proximity to deep-water iron-ore shipping ports",
          "Cheap rural agricultural land 25 miles outside town",
          "Access to overseas multinational tax havens",
        ],
        answerIndex: 0,
        explanation:
          "Walk-in convenience food businesses depend directly on **proximity to the market (high pedestrian footfall)** near offices; cheap remote land would starve a sandwich bar of lunchtime customers.",
        hints: [
          "Ask how office workers buy a lunchtime sandwich — do they drive 25 miles or walk two minutes?",
          "Retail and convenience hospitality must prioritise proximity to customers.",
        ],
      },
      {
        id: "location-globalisation-external-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "location-decisions",
        question:
          "What term describes a digital software or consultancy business that is not tied to raw material deposits or walk-in high-street shoppers and can locate almost anywhere with fast broadband?",
        options: ["Bulk-reducing", "Footloose", "Protectionist", "Nationalised"],
        answerIndex: 1,
        explanation:
          "A **footloose** business is free to locate wherever digital connectivity, skilled staff and office rents are attractive because it neither processes heavy raw materials nor relies on passing footfall.",
        hints: [
          "Think of the term meaning 'free to step/move anywhere' because physical transport of raw inputs isn't needed.",
          "Common examples include cloud SaaS studios, graphic designers and remote consultancies.",
        ],
      },
      {
        id: "location-globalisation-external-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "globalisation-mncs",
        question:
          "Which business accurately meets the Edexcel IGCSE definition of a **Multinational Corporation (MNC)**?",
        options: [
          "A Yorkshire jam sole trader who ships gift jars to online buyers in Canada and Japan",
          "A Manchester bicycle shop that imports carbon frames from Taiwan",
          "An electronics company headquartered in Seoul that owns and operates factories in Vietnam, Poland and Mexico",
          "A state-owned regional bus operator running routes across three English counties",
        ],
        answerIndex: 2,
        explanation:
          "An **MNC** must **own and operate production or service bases in two or more countries**. Simply exporting jam from one UK kitchen or importing bike frames does NOT make a firm an MNC!",
        hints: [
          "Watch out for the classic Edexcel trap: merely exporting or importing from one country does NOT make a firm an MNC!",
          "Look for the company that physically operates facilities in multiple countries.",
        ],
      },
      {
        id: "location-globalisation-external-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "globalisation-mncs",
        question:
          "When a foreign multinational builds a factory in a developing **host country**, what is meant by the drawback of **profit repatriation**?",
        options: [
          "Local domestic SMEs copy the multinational's lean production techniques",
          "The multinational trains local workers who later start their own businesses",
          "The host government collects corporation tax on factory profits",
          "The multinational sends most of its overseas subsidiary's profits back to shareholders in its home country",
        ],
        answerIndex: 3,
        explanation:
          "**Profit repatriation** occurs when an MNC transfers after-tax profits earned inside the host economy back to its home-country headquarters and shareholders rather than reinvesting them locally.",
        hints: [
          "'Repatriate' means sending something back to its home country.",
          "Think about where the MNC's headquarters and shareholders live versus where the factory sits.",
        ],
      },
      {
        id: "location-globalisation-external-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "trade-exchange-rates",
        question:
          "How does an import **tariff** differ from an import **quota**?",
        options: [
          "A tariff is a tax on imported goods that raises government revenue, whereas a quota is a physical cap on import quantity",
          "A tariff bans all exports completely, whereas a quota subsidises domestic wages",
          "A tariff is a physical limit on units imported, whereas a quota is a percentage customs duty",
          "A tariff lowers the retail price of foreign goods, whereas a quota lowers domestic taxes",
        ],
        answerIndex: 0,
        explanation:
          "A **tariff** places a customs tax/duty on imports (raising their landed price and earning tax revenue for the government), whereas a **quota** restricts the maximum physical volume of imports allowed in.",
        hints: [
          "Match 'tax/duty' vs 'physical quantity limit' to the right protectionist tool.",
          "Only one of the two directly generates customs tax revenue for the government.",
        ],
      },
      {
        id: "location-globalisation-external-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "trade-exchange-rates",
        question:
          "A UK giftware wholesaler exports a crate of teapots priced at **£600** to a retailer in New York when the exchange rate is **£1 = $1.30**. What price in US dollars ($) does the New York retailer pay (ignoring shipping)?",
        options: ["$461.54", "$601.30", "$730.00", "$780.00"],
        answerIndex: 3,
        explanation:
          "Converting Home (£) → Foreign ($): **multiply** by the exchange rate: {{£600 * 1.30 = $780.00}}. Dividing 600 by 1.30 gives the $461.54 trap!",
        hints: [
          "Since £1 buys $1.30, the number of dollars must be larger than 600.",
          "Multiply £600 × 1.30.",
        ],
      },
      {
        id: "location-globalisation-external-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "trade-exchange-rates",
        question:
          "The pound **appreciates** from **£1 = €1.12** to **£1 = €1.28**. Using **SPICED**, how will this affect a UK bicycle assembler that **imports** gearsets from Italy and **exports** finished bikes to France?",
        options: [
          "Italian gearsets become dearer in £ and French bike exports become cheaper in €",
          "Italian gearsets become cheaper in £ while finished UK bikes become dearer in € for French buyers",
          "Both Italian imports and French exports become cheaper",
          "Exchange-rate changes have zero effect on eurozone trade",
        ],
        answerIndex: 1,
        explanation:
          "Under **SPICED** (**S**trong **P**ound **I**mports **C**heaper **E**xports **D**earer), a stronger pound lowers the £ cost of imported Italian gearsets while raising the € price of exported UK bikes in France.",
        hints: [
          "Write out S-P-I-C-E-D: Strong Pound → Imports ______, Exports ______.",
          "Apply 'Imports' to the Italian gearsets and 'Exports' to the finished bikes sold in France!",
        ],
      },
      {
        id: "location-globalisation-external-m1-q08",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "government-policies",
        question:
          "Which pair consists strictly of **direct taxes** levied on household income or company profits?",
        options: [
          "Value Added Tax (VAT) and fuel duty",
          "Import tariffs and sugar excise duty",
          "Income tax and corporation tax",
          "Goods and Services Tax (GST) and airport passenger duty",
        ],
        answerIndex: 2,
        explanation:
          "**Income tax** (on wages/salaries) and **corporation tax** (on company net profits) are **direct taxes**, whereas VAT/GST, tariffs and excise duties are indirect taxes on spending.",
        hints: [
          "Direct taxes are deducted directly from earnings or profits rather than added onto product prices at checkout.",
          "Eliminate any option containing VAT, GST, tariffs or excise duties.",
        ],
      },
      {
        id: "location-globalisation-external-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "government-policies",
        question:
          "The central bank raises its base **interest rate** from 3% to 6%. Which type of business is most likely to suffer the **sharpest fall** in customer demand?",
        options: [
          "A luxury kitchen showroom whose customers finance £25,000 refurbishments using home-equity loans and credit",
          "A local pharmacy selling essential prescription medicines",
          "A budget discount grocer selling £0.85 own-brand tinned tomatoes",
          "A municipal water utility supplying tap water",
        ],
        answerIndex: 0,
        explanation:
          "Higher interest rates raise monthly mortgage bills (squeezing disposable income) and make consumer credit costly — hitting **income-elastic, credit-financed big-ticket purchases** like £25,000 kitchens hardest.",
        hints: [
          "Ask which purchase relies heavily on household borrowing/credit and can easily be postponed!",
          "Medicines and tap water are necessities; budget grocers often gain shoppers trading down.",
        ],
      },
      {
        id: "location-globalisation-external-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "government-policies",
        question:
          "The government announces an £8 billion public spending programme to electrify regional rail freight lines and upgrade motorway junctions. How does this fiscal spending most directly benefit domestic manufacturers?",
        options: [
          "It eliminates corporation tax for all sole traders permanently",
          "It cuts transport congestion and unit distribution costs while creating orders for engineering and construction suppliers",
          "It forces the domestic currency to depreciate by 50%",
          "It bans foreign multinationals from selling online",
        ],
        answerIndex: 1,
        explanation:
          "Government **infrastructure spending** directly boosts aggregate demand (contracts for steel/engineering suppliers) and raises supply-side efficiency by speeding up freight deliveries.",
        hints: [
          "Think about both the builders hired to upgrade the rail/roads AND the factories shipping goods along them afterwards.",
          "Infrastructure investment reduces transport bottlenecks and unit logistics costs.",
        ],
      },
      {
        id: "location-globalisation-external-m1-q11",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "external-pestle-ethics",
        question:
          "In a **PESTLE** analysis, an ageing national population and growing consumer preference for plant-based diets fall under which category?",
        options: ["Political", "Technological", "Legal", "Social"],
        answerIndex: 3,
        explanation:
          "Demographic changes (ageing population) and lifestyle/cultural shifts (plant-based eating) are **Social** external factors in PESTLE.",
        hints: [
          "Demographics, culture, health trends and lifestyle habits all belong to one letter of PESTLE.",
          "Check P-E-S-T-L-E: Social!",
        ],
      },
      {
        id: "location-globalisation-external-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "external-pestle-ethics",
        question:
          "A cosmetics company prints green leaves on its plastic bottles and advertises them as *'100% Earth-Kind'* despite increasing its fossil-plastic use by 12% behind the scenes. What term describes this practice?",
        options: ["Lean kaizen", "Greenwashing", "Import quota", "Privatisation"],
        answerIndex: 1,
        explanation:
          "**Greenwashing** is using deceptive eco-themed branding or unsubstantiated sustainability claims to mislead ethical consumers without genuine environmental improvements.",
        hints: [
          "Combines 'green' (eco image) with 'whitewashing' (covering up the truth).",
          "Regulators and pressure groups target this heavily because it misleads ethical shoppers.",
        ],
      },
      {
        id: "location-globalisation-external-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "external-pestle-ethics",
        question:
          "How does **competition law** protect consumers and small businesses in a market?",
        options: [
          "By guaranteeing every start-up a 15% Operating Profit Margin",
          "By prohibiting rival firms from forming price-fixing cartels and blocking abusive mergers that create monopolies",
          "By setting the foreign exchange rate at £1 = $1.50",
          "By requiring all workers to join an autocratic trade union",
        ],
        answerIndex: 1,
        explanation:
          "**Competition legislation** outlaws collusive price-fixing cartels, predatory pricing and anti-competitive mergers so dominant firms cannot exploit consumers or crush innovative SMEs unfairly.",
        hints: [
          "Ask what happens to prices and choice if big rivals secretly collude or merge into a single monopoly.",
          "Competition regulators police cartels, price-fixing and monopoly abuse.",
        ],
      },
      {
        id: "location-globalisation-external-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "external-pestle-ethics",
        question:
          "An animal-welfare **pressure group** launches a viral TikTok campaign urging shoppers to stop buying eggs from `MegaFarm Plc` until it ends caged hens. What tactic is the pressure group using?",
        options: [
          "Monetary base-rate tightening",
          "A consumer boycott aimed at damaging MegaFarm Plc's sales and brand reputation",
          "Foreign direct investment repatriation",
          "Internal job rotation",
        ],
        answerIndex: 1,
        explanation:
          "Organising shoppers to refuse to buy a target company's products is a **consumer boycott**, directly threatening revenue and supermarket shelf listings until the firm reforms its practices.",
        hints: [
          "When customers collectively refuse to purchase a brand's goods to force ethical change, what is that campaign called?",
          "Starts with 'b' — a classic pressure-group weapon!",
        ],
      },
      {
        id: "location-globalisation-external-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "location-decisions",
        question:
          "Why do heavy **bulk-reducing** manufacturers (such as timber sawmills or sugar-beet refineries) typically locate close to forests, farms or ports rather than inside city centres?",
        options: [
          "Raw logs and sugar beet are heavy and expensive to transport, so processing them near the source slashes freight costs",
          "Sawmills rely on spontaneous high-street window shoppers walking past",
          "City-centre land is cheaper per square metre than rural industrial land",
          "Sawmills require zero electricity or road access",
        ],
        answerIndex: 0,
        explanation:
          "In **bulk-reducing** industries, raw inputs weigh far more than finished planks or refined sugar — locating close to **raw materials or ports** avoids paying to haul tonnes of waste bark or soil.",
        hints: [
          "Compare the weight and transport cost of raw tree trunks versus finished cut timber planks!",
          "City-centre land is expensive and congested for heavy lorries.",
        ],
      },
    ],
  },
  {
    id: "location-globalisation-external-m2",
    title: "Paper 2 — Data, Calculations & Case-Study Application",
    questions: [
      {
        id: "location-globalisation-external-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "trade-exchange-rates",
        question:
          "Manchester Roasters Ltd imports green coffee beans from Colombia invoiced at **$18,000**. Last month **£1 = $1.20**; today **£1 = $1.50**. How much **less** in sterling (£) does Manchester Roasters Ltd pay for this $18,000 shipment today?",
        options: ["£2,400", "£3,000", "£5,400", "£12,000"],
        answerIndex: 1,
        explanation:
          "Last month: {{$18000 / 1.20 = £15000}}. Today: {{$18000 / 1.50 = £12000}}. Saving = {{£15000 - £12000 = £3000}} (**SPICED**: Strong Pound Imports Cheaper!). (£12,000 is the new cost, not the saving; £5,400 comes from multiplying instead of dividing.)",
        hints: [
          "Convert $18,000 into £ at BOTH rates by dividing: 18,000 ÷ 1.20 and 18,000 ÷ 1.50.",
          "Subtract the new £ cost (£12,000) from the old £ cost (£15,000).",
        ],
      },
      {
        id: "location-globalisation-external-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "trade-exchange-rates",
        question:
          "Yorkshire Bikes Ltd imports carbon rims from abroad valued at **$24,000** when **£1 = $1.25**. UK customs also levies a **15% import tariff**. What is the **total landed cost in £** (including the tariff)?",
        options: ["£19,200", "£22,080", "£27,600", "£34,500"],
        answerIndex: 1,
        explanation:
          "Pre-tariff £ value = {{$24000 / 1.25 = £19200}}. Add 15% import tariff ({{£19200 * 0.15 = £2880}}): {{£19200 + £2880 = £22080}}. (£19,200 forgets the tariff; £34,500 multiplies by 1.25 instead of dividing!)",
        hints: [
          "Step 1: Convert $24,000 → £ by dividing by 1.25 (£19,200).",
          "Step 2: Multiply £19,200 by 1.15 to include the 15% import tariff.",
        ],
      },
      {
        id: "location-globalisation-external-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "trade-exchange-rates",
        question:
          "The pound **depreciates** from **£1 = $1.40** to **£1 = $1.12** (**WPIDEC**). How does this currency movement affect `ScotLodge Ltd`, a boutique hotel in the Scottish Highlands that attracts American tourists and buys 100% of its food and staff locally in Scotland?",
        options: [
          "US tourists find a £250/night room falls from $350 to $280, boosting bookings while ScotLodge's local £ costs stay flat",
          "US tourists find a £250/night room rises from $280 to $350, reducing bookings",
          "ScotLodge Ltd's local Scottish food bills jump by 25% overnight",
          "ScotLodge Ltd is forced to pay an export tariff on Highland hotel rooms",
        ],
        answerIndex: 0,
        explanation:
          "Inbound foreign tourism counts as a **service export**! At $1.40, £250 cost US guests {{250 * 1.40 = $350}}; at $1.12 (**WPIDEC**), £250 costs only {{250 * 1.12 = $280}} — **Exports Cheaper** lifts bookings with zero imported input inflation because supplies are local!",
        hints: [
          "Calculate what £250 costs an American tourist at $1.40 (250 × 1.40) versus at $1.12 (250 × 1.12).",
          "Inbound tourism is an invisible EXPORT — under WPIDEC, exports become cheaper for overseas visitors!",
        ],
      },
      {
        id: "location-globalisation-external-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "government-policies",
        question:
          "Harbour Logistics Ltd has an **operating profit of £420,000** and a **£1,200,000 variable-rate bank loan**. When loan interest rises from **5% to 7.5%**, how much **after-tax profit** does Harbour Logistics Ltd earn if **corporation tax is 20%** (assuming operating profit stays £420,000)?",
        options: ["£264,000", "£288,000", "£330,000", "£336,000"],
        answerIndex: 0,
        explanation:
          "New annual interest at 7.5% = {{£1200000 * 0.075 = £90000}}. Profit before tax = {{£420000 - £90000 = £330000}}. Deduct 20% corporation tax ({{£330000 * 0.20 = £66000}}): after-tax profit = **£264,000**. (£288,000 uses the old 5% rate; £330,000 forgets corporation tax.)",
        hints: [
          "Step 1: Compute new loan interest at 7.5% on £1,200,000 (£90,000) and subtract from £420,000 (£330,000).",
          "Step 2: Deduct 20% corporation tax from £330,000.",
        ],
      },
      {
        id: "location-globalisation-external-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "location-decisions",
        question:
          "Craft Gelato Ltd earns **£4 contribution per tub** (fixed staff wages £48,000 at both sites). **Seafront Promenade** charges **£62,000** annual rent and sells **34,000 tubs**; **Side-Street Alley** charges **£24,000** rent and sells **22,000 tubs**. Which location yields higher annual operating profit, and by how much?",
        options: [
          "Side-Street Alley by £38,000",
          "Side-Street Alley by £10,000",
          "Seafront Promenade by £10,000",
          "Both sites earn the exact same £16,000 profit",
        ],
        answerIndex: 2,
        explanation:
          "Seafront Promenade: contribution = {{34000 * £4 = £136000}}; profit = {{£136000 - £62000 - £48000 = £26000}}. Side-Street Alley: contribution = {{22000 * £4 = £88000}}; profit = {{£88000 - £24000 - £48000 = £16000}}. Seafront Promenade wins by **£10,000** because 12,000 extra tubs (+£48,000 contribution) outweigh the £38,000 higher rent!",
        hints: [
          "Work out total contribution (tubs × £4) minus fixed costs (rent + £48,000 wages) for each site.",
          "Seafront: £136k − £110k = £26k; Side-Street: £88k − £72k = £16k.",
        ],
      },
      {
        id: "location-globalisation-external-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "globalisation-mncs",
        question:
          "Why did several Asian electric-vehicle (EV) manufacturers announce plans in 2024–2025 to build assembly plants inside Hungary and Spain (both EU member states) after the EU raised import tariffs on Chinese-built EVs up to 35%?",
        options: [
          "Producing inside EU borders avoids the 35% external import tariff and cuts ocean shipping lead times to European drivers",
          "Factory wages and industrial land in Western Europe are cheaper than anywhere in Asia",
          "EU member states abolish all consumer protection and environmental laws for foreign MNCs",
          "Building factories abroad turns an MNC back into an unincorporated sole trader",
        ],
        answerIndex: 0,
        explanation:
          "Setting up production **inside a trade bloc** (`tariff-jumping FDI`) allows an MNC to sell tariff-free across all EU member countries while shortening delivery times.",
        hints: [
          "What happens to the 35% EU *import* tariff if the car is assembled *inside* Hungary or Spain (which are in the EU)?",
          "Bypassing trade bloc tariffs is one of the classic textbook reasons firms become MNCs!",
        ],
      },
      {
        id: "location-globalisation-external-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "globalisation-mncs",
        question:
          "SolarCell Plc's Malaysian factory earns **$45 million** operating profit, pays **20% Malaysian corporation tax**, and **repatriates 70%** of after-tax profit to London while reinvesting 30% into expanding its Penang cleanroom. How much profit ($ millions) is **reinvested inside Malaysia**?",
        options: ["$9.0 million", "$10.8 million", "$13.5 million", "$25.2 million"],
        answerIndex: 1,
        explanation:
          "After-tax profit = {{$45m * (1 - 0.20) = $36.0m}}. Since 70% ($25.2m) is repatriated, **30%** is reinvested in Malaysia: {{$36.0m * 0.30 = $10.8m}}!",
        hints: [
          "Deduct 20% Malaysian corporation tax from $45m first ($36m after-tax profit).",
          "Read carefully: $25.2m (70%) is repatriated, while 30% of $36m is REINVESTED in Malaysia!",
        ],
      },
      {
        id: "location-globalisation-external-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "government-policies",
        question:
          "If the government increases **Value Added Tax (VAT)** from 20% to 23% on restaurant meals, how does this indirect tax hike affect a mid-market pizza chain facing **price-elastic** consumer demand?",
        options: [
          "Passing the full 3% VAT rise onto menu prices causes a more-than-proportional drop in diners, or absorbing it squeezes profit margins",
          "Diner numbers jump by 23% because VAT is paid to the restaurant's shareholders",
          "Only corporations' retained profits are taxed while menu prices and demand stay untouched",
          "Variable ingredient costs fall by 3% automatically",
        ],
        answerIndex: 0,
        explanation:
          "When demand is **price elastic**, raising VAT-inclusive menu prices drives customers away more than proportionally; if the restaurant keeps menu prices flat to protect volume, it absorbs the higher VAT out of its own net revenue, squeezing margins.",
        hints: [
          "VAT is an indirect tax added to selling prices.",
          "With price-elastic demand, shoppers are sensitive to higher prices — so either volume drops sharply or the firm absorbs the tax hit!",
        ],
      },
      {
        id: "location-globalisation-external-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "external-pestle-ethics",
        question:
          "EcoSip Ltd switches from 4p plastic straws to 9p biodegradable paper straws across **2,000,000 smoothies** a year. Avoiding plastic helps EcoSip win a university catering contract that lifts annual smoothie volume by **5%** at an unchanged **£3.50 selling price** (other variable ingredient cost = **£1.21** per smoothie). What is the **net change** in EcoSip Ltd's annual total contribution?",
        options: [
          "Falls by £100,000",
          "Rises by £120,000",
          "Rises by £125,000",
          "Rises by £220,000",
        ],
        answerIndex: 1,
        explanation:
          "Before: total VC = {{£1.21 + £0.04 = £1.25}} → unit contribution = {{£3.50 - £1.25 = £2.25}} → {{2000000 * £2.25 = £4500000}}. After: total VC = {{£1.21 + £0.09 = £1.30}} → unit contribution = {{£3.50 - £1.30 = £2.20}}; new volume (+5%) = {{2100000}} → {{2100000 * £2.20 = £4620000}}. Net gain = {{£4620000 - £4500000 = +£120000}}!",
        hints: [
          "Before: unit contribution = £3.50 − (£1.21 + £0.04) = £2.25 across 2,000,000 smoothies (£4,500,000).",
          "After: unit contribution = £3.50 − (£1.21 + £0.09) = £2.20 across 2,100,000 smoothies (£4,620,000).",
        ],
      },
      {
        id: "location-globalisation-external-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "external-pestle-ethics",
        question:
          "Which business is **most vulnerable** to a sudden sales collapse from a social-media **pressure-group boycott**?",
        options: [
          "A high-street branded coffee chain surrounded by rival cafés on every block",
          "A B2B tungsten-carbide drill-bit supplier holding 10-year industrial patents",
          "A state-owned regional water monopoly",
          "An emergency hospital ambulance equipment maker",
        ],
        answerIndex: 0,
        explanation:
          "Pressure-group boycotts hit hardest when the firm is a **high-profile consumer brand** AND consumers have **zero switching costs / plenty of close substitutes** (walking next door to a rival café).",
        hints: [
          "Compare consumer brand visibility AND how easily buyers can switch to an alternative in 30 seconds!",
          "Shoppers can boycott a coffee chain effortlessly; factories or hospitals cannot boycott patented drill bits or water utilities.",
        ],
      },
      {
        id: "location-globalisation-external-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "location-decisions",
        question:
          "MedAI Ltd (38 employees) develops radiology software for hospitals worldwide. Why might MedAI Ltd choose to locate on Cambridge Science Park despite office rents being three times higher than in a coastal resort town?",
        options: [
          "Access to specialist AI & biomedical postgraduates, research hospitals and venture-capital networks outweighs higher office rent",
          "Cambridge Science Park is next to cheap iron-ore mines and heavy container ports",
          "Software code weighs several tonnes per gigabyte to ship by lorry",
          "Locating on a science park exempts MedAI Ltd from UK employment law",
        ],
        answerIndex: 0,
        explanation:
          "Knowledge-intensive firms prioritise **availability of highly skilled specialist labour** and R&D clustering (external economies of scale) over low rent per square metre.",
        hints: [
          "What scarce resource does a 38-person medical AI software firm need most?",
          "Clustering near elite universities and research hospitals supplies specialist AI talent.",
        ],
      },
      {
        id: "location-globalisation-external-m2-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "trade-exchange-rates",
        question:
          "BritChoc Ltd imports cocoa butter from West Africa priced at **$2,400 per batch** and exports luxury truffle boxes to New York at **£50 per box** (1 batch makes 120 boxes). Last year **£1 = $1.20** and BritChoc sold 120 boxes (1.00 batch). This year **£1 = $1.50**, causing US truffle orders to drop by **15%** to 102 boxes (requiring 0.85 batches of cocoa) while BritChoc keeps its **£50** sterling export price. What happens to BritChoc's **gross profit in £** (Revenue − Cocoa Cost)?",
        options: [
          "Rises from £4,000 to £4,250",
          "Falls from £4,000 to £3,500",
          "Falls from £4,000 to £3,740",
          "Stays identical at £4,000",
        ],
        answerIndex: 2,
        explanation:
          "**Last year:** Revenue = {{120 * £50 = £6000}}; 1.00 batch cocoa = {{$2400 / 1.20 = £2000}} → Gross profit = {{£6000 - £2000 = £4000}}. **This year:** Revenue = {{102 * £50 = £5100}}; 1 batch now costs {{$2400 / 1.50 = £1600}}, so 0.85 batches = {{0.85 * £1600 = £1360}} → Gross profit = {{£5100 - £1360 = £3740}}! Cheaper imported cocoa partially cushions the £900 export revenue drop.",
        hints: [
          "Last year: (120 × £50 = £6,000) minus ($2,400 ÷ 1.20 = £2,000) = £4,000.",
          "This year: 1 batch costs $2,400 ÷ 1.50 = £1,600, so 0.85 batches cost 0.85 × £1,600 = £1,360.",
          "Subtract £1,360 from this year's £5,100 (102 × £50) revenue!",
        ],
      },
      {
        id: "location-globalisation-external-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "government-policies",
        question:
          "A government cuts **income tax** on lower- and middle-income earners while simultaneously introducing a steep **carbon excise tax** on petrol and aviation fuel. Which business is best positioned to gain both higher demand AND unaffected operating costs?",
        options: [
          "A domestic short-haul budget airline",
          "A diesel road-haulage courier firm",
          "A local electric-powered cinema and bowling entertainment complex",
          "An importer of 4-litre petrol pickup trucks",
        ],
        answerIndex: 2,
        explanation:
          "Lower **income tax** boosts households' **disposable income** for local leisure (cinema/bowling), while running on electricity avoids the steep **petrol/aviation carbon duty** that hits airlines, diesel couriers and petrol trucks.",
        hints: [
          "Split the two policies: (1) higher household disposable income + (2) dearer petrol & jet fuel.",
          "Which business benefits from leisure spending WITHOUT burning petrol or jet fuel?",
        ],
      },
      {
        id: "location-globalisation-external-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "external-pestle-ethics",
        question:
          "How can strict **consumer protection legislation** (requiring accurate food-allergen labelling and 2-year electronics warranties) benefit a reputable domestic manufacturer in the long run?",
        options: [
          "It eliminates all quality-testing and packaging expenses immediately",
          "It builds consumer confidence and prevents rogue rivals from undercutting reputable firms with unsafe or mislabelled goods",
          "It allows the manufacturer to form a legal price-fixing cartel",
          "It guarantees zero corporation tax on domestic sales",
        ],
        answerIndex: 1,
        explanation:
          "Although testing and labelling add compliance costs, consumer law **levels the competitive playing field** by banning unsafe/fake cut-price imports and boosting shopper trust.",
        hints: [
          "Think beyond short-term compliance costs: who gets driven OUT of the market when strict safety/allergen laws are enforced?",
          "Reputable firms gain trust and no longer get undercut by dishonest corners-cutters.",
        ],
      },
      {
        id: "location-globalisation-external-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "globalisation-mncs",
        question:
          "How does **globalisation** pose BOTH an opportunity and a threat to a 35-employee Scottish cashmere knitwear firm (`GlenKnit Ltd`)?",
        options: [
          "Opportunity to sell high-margin jumpers via e-commerce to wealthy buyers in Tokyo and New York, alongside the threat of low-cost imported knitwear undercutting it at home",
          "Opportunity to become a state-owned public corporation, alongside the threat of unlimited liability",
          "Opportunity to ban all UK imports via private quotas, alongside the threat of local council rates",
          "Globalisation affects only Paper 2 firms with over 250 employees and never touches SMEs",
        ],
        answerIndex: 0,
        explanation:
          "Globalisation is a two-way street even for Paper 1 SMEs: **global e-commerce** opens lucrative niche export markets (Tokyo/New York), while freer trade exposes domestic shelves to **cheaper overseas competitors**.",
        hints: [
          "Remember globalisation works in BOTH directions: selling out to the world AND world rivals selling into your home market!",
          "Match both halves to a 35-staff luxury Scottish knitwear maker.",
        ],
      },
    ],
  },
  {
    id: "location-globalisation-external-m3",
    title: "Paper 3 — Grade 9 Exam Traps, Strategy & Synoptic Judgement",
    questions: [
      {
        id: "location-globalisation-external-m3-q01",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "trade-exchange-rates",
        question:
          "MedValve Plc exports patented titanium heart valves from Oxford to US hospitals at **£2,000 per valve**. Over six months the pound appreciates sharply from **£1 = $1.20** to **£1 = $1.50** (**SPICED**), raising the dollar price by 25% ($2,400 → $3,000), yet MedValve Plc's US sales volume drops by only **2%**. What explains MedValve Plc's resilience?",
        options: [
          "Heart valves have highly price-elastic demand with dozens of cheap supermarket substitutes",
          "A stronger pound makes UK exports 25% cheaper in US dollars",
          "US hospitals pay UK corporation tax on Oxford exports",
          "Patented life-saving medical devices face highly price-inelastic demand, so hospitals continue buying despite the 25% higher dollar price",
        ],
        answerIndex: 3,
        explanation:
          "**Grade 9 Evaluation Pivot:** **SPICED** makes exports dearer in foreign currency, *but* how badly volume falls **depends on Price Elasticity of Demand (PED)**! Patented life-saving heart valves have almost no substitutes (**price inelastic**), so volume barely moves (−2%).",
        hints: [
          "Check the % change in quantity (−2%) versus the % change in dollar price (+25%)!",
          "Why can't a US cardiac surgeon swap a patented titanium heart valve for a cheap substitute?",
          "Price inelasticity of demand shields unique/patented exporters from SPICED!",
        ],
      },
      {
        id: "location-globalisation-external-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "government-policies",
        question:
          "Central bank base rates jump from **2.0% to 6.0%**. Compare `Firm DebtHeavy` (luxury motorhomes sold on finance; £8m variable-rate bank loan) with `Firm CashKing` (budget bicycle repair parts; £0 debt and £3m cash held in an instant-access business savings account). Which synoptic evaluation is accurate?",
        options: [
          "Both firms suffer identical percentage falls in net profit",
          "Firm DebtHeavy suffers a double squeeze (falling credit-reliant motorhome sales + £320k extra annual loan interest), whereas Firm CashKing earns £120k extra interest income and gains customers repairing bikes instead of buying cars",
          "Firm CashKing pays £120k extra loan interest while Firm DebtHeavy sees motorhome credit demand surge",
          "Interest-rate rises affect only banks and never alter non-financial firms' income statements",
        ],
        answerIndex: 1,
        explanation:
          "Extra 4 percentage points on `DebtHeavy`'s £8m loan = {{£8m * 0.04 = £320000}} higher interest cost ON TOP of collapsing motorhome credit sales; meanwhile `CashKing` earns {{£3m * 0.04 = £120000}} *more* savings interest and benefits as squeezed commuters repair bikes!",
        hints: [
          "Compute 4% (6% − 2%) on `DebtHeavy`'s £8m loan (£320k cost) AND on `CashKing`'s £3m cash deposit (£120k extra interest earned!).",
          "Contrast demand for credit-funded luxury motorhomes against budget DIY bike repairs during a squeeze.",
          "This gearing + income-elasticity contrast is pure Grade 9 evaluation!",
        ],
      },
      {
        id: "location-globalisation-external-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "trade-exchange-rates",
        question:
          "A student writes in an exam: *'When the exchange rate changes from £1 = $1.45 to £1 = $1.18, the pound has got stronger because 1.18 is closer to 1.00.'* What is wrong with this reasoning?",
        options: [
          "Nothing — moving closer to 1.00 always means currency appreciation",
          "£1 = $1.18 means the US dollar has been abolished",
          "A fall from $1.45 to $1.18 is an import quota rather than an exchange rate",
          "£1 now buys FEWER dollars ($1.18 instead of $1.45), meaning the pound has **depreciated (weakened — WPIDEC)**, making imports dearer and exports cheaper",
        ],
        answerIndex: 3,
        explanation:
          "Always read `£1 = $X` as *'How many dollars can £1 buy?'* Buying only **$1.18** instead of **$1.45** means £1 has lost purchasing power — **depreciation (WPIDEC)**!",
        hints: [
          "Read '£1 = $1.45' as 'One pound buys 1 dollar and 45 cents'.",
          "If tomorrow £1 buys only 1 dollar and 18 cents, is the pound stronger or weaker?",
        ],
      },
      {
        id: "location-globalisation-external-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "trade-exchange-rates",
        question:
          "WatchMaker Ltd (in London) imports Swiss movements priced at **CHF 180 each** and exports finished watches to New York at **$650 each** (holding its $650 US price fixed!). Other UK assembly cost is **£120 per watch**. Yesterday **£1 = CHF 1.20** and **£1 = $1.30**. Today the pound **depreciates** against both currencies to **£1 = CHF 1.00** and **£1 = $1.00**. What happens to WatchMaker Ltd's **gross profit in £ per watch**?",
        options: [
          "Rises from £230 to £350 per watch",
          "Falls from £230 to £180 per watch",
          "Stays unchanged at £230 per watch",
          "Turns into a £50 loss per watch",
        ],
        answerIndex: 0,
        explanation:
          "**Yesterday:** £ revenue = {{$650 / 1.30 = £500}}; Swiss movement = {{180 / 1.20 = £150}}; UK assembly = £120 → Profit = {{£500 - £150 - £120 = £230}}. **Today (£1 = 1.00):** £ revenue from $650 = {{$650 / 1.00 = £650}}; Swiss movement = {{180 / 1.00 = £180}}; UK assembly = £120 → Profit = {{£650 - £180 - £120 = £350}}! Because the $650 export value exceeds the CHF 180 imported part, a weaker pound boosts £ revenue (+£150) far more than it raises £ import cost (+£30)!",
        hints: [
          "Careful: WatchMaker invoices US buyers in DOLLARS ($650), so convert $650 → £ by dividing!",
          "Yesterday: (£650/1.30 = £500) − (180/1.20 = £150) − £120 = £230.",
          "Today: (£650/1.00 = £650) − (180/1.00 = £180) − £120 = £350!",
        ],
      },
      {
        id: "location-globalisation-external-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "globalisation-mncs",
        question:
          "In a 12-mark Paper 2 essay asking *'Evaluate whether the Indonesian government should offer a 5-year corporation tax holiday to attract a multinational battery gigafactory'*, which **AJIM** conclusion earns top-band AO4 marks?",
        options: [
          "Tax holidays have pros and cons so the Indonesian government cannot decide either way",
          "Reject all foreign multinationals permanently because every MNC destroys small businesses",
          "Grant the tax holiday because skilled engineering jobs, export earnings and local supplier multiplier effects outweigh lost short-term corporate tax — PROVIDED the deal legally binds the MNC to local component quotas, clean waste treatment and minimum stay clauses",
          "Offer the tax holiday because Indonesia is a sole trader with unlimited liability",
        ],
        answerIndex: 2,
        explanation:
          "Top-band **AJIM** makes a clear judgement, weighs long-run jobs/exports/skills against forgone short-run tax and profit repatriation, and attaches smart **host-government contract conditions** (*It depends on...*).",
        hints: [
          "Eliminate fence-sitting ('cannot decide') and extreme blanket statements immediately.",
          "Look for weighed host-country pros vs cons PLUS enforceable policy conditions (*It depends on*).",
        ],
      },
      {
        id: "location-globalisation-external-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "location-decisions",
        question:
          "A regional government offers a **£50,000 start-up grant** to firms opening in a remote former mining valley with 11% unemployment. Why might a **biotech gene-sequencing start-up** still refuse to locate there?",
        options: [
          "Government grants must be repaid at 40% interest every month",
          "Biotech firms require high-street pedestrian footfall from tourists",
          "A £50,000 one-off grant cannot compensate if the local labour pool lacks PhD molecular biologists and laboratory infrastructure",
          "Unemployed workers are legally barred from working in private limited companies",
        ],
        answerIndex: 2,
        explanation:
          "Location grants are **one-off capital sweeteners**; if **skills mismatch** means the firm cannot recruit specialist PhD scientists locally, productivity fails every single year.",
        hints: [
          "Distinguish between *high unemployment* (lots of available workers) and *possessing the right specialist skills*!",
          "Can a gene-sequencing lab function without specialist biotech scientists?",
        ],
      },
      {
        id: "location-globalisation-external-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "external-pestle-ethics",
        question:
          "Why do giant established multinationals sometimes **welcome** stricter national environmental packaging regulations even though re-tooling their lines costs £10 million?",
        options: [
          "Environmental regulations abolish all employee wages in factories",
          "Fines for breaking environmental laws are paid by customers at the till",
          "Stricter laws force consumers to boycott compliant products",
          "Large MNCs can spread the £10m compliance fixed cost across millions of units (economies of scale), whereas under-capitalised small rivals struggle to afford compliance — raising barriers to entry",
        ],
        answerIndex: 3,
        explanation:
          "Heavy regulatory compliance acts as a **fixed cost** that giant firms absorb easily per unit via **economies of scale**, while smaller cut-price competitors may be squeezed out of the market.",
        hints: [
          "Compare £10m compliance cost spread across 200 million units (5p/unit) vs across a tiny rival's 100,000 units (£100/unit!).",
          "Regulation can act as a strategic barrier to entry protecting compliant incumbents.",
        ],
      },
      {
        id: "location-globalisation-external-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "government-policies",
        question:
          "Country A's government wants to reduce youth obesity while funding new hospital wards. Which fiscal policy instrument directly achieves **both** aims at once?",
        options: [
          "Cutting corporation tax on fast-food chains from 25% to 15%",
          "Introducing an indirect sugar excise duty per litre on high-sugar fizzy drinks",
          "Lowering central-bank interest rates to 0.5%",
          "Imposing an export quota on fresh fruit and vegetables",
        ],
        answerIndex: 1,
        explanation:
          "An **indirect excise tax** on sugary drinks raises their retail price (discouraging consumption / encouraging manufacturers to reformulate recipes with less sugar) AND generates ring-fenced **tax revenue** for healthcare.",
        hints: [
          "Which tax specifically targets a harmful product to raise its price AND collect government revenue?",
          "Think of the UK Soft Drinks Industry Levy ('sugar tax').",
        ],
      },
      {
        id: "location-globalisation-external-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "location-decisions",
        question:
          "BakeBox Ltd sells celebration cakes (`£35 selling price`, `£15 variable cost`). Its current High-Street shop pays **£66,000 annual rent** and sells **4,800 cakes/year**. Moving to a Dark Kitchen industrial unit cuts rent to **£18,000/year**, adds **£12,000/year** in Instagram ads, and adds a **£3 per cake** refrigerated courier variable cost. What **minimum whole-cake annual volume** must the Dark Kitchen sell to **match or exceed** the High-Street shop's £30,000 annual profit?",
        options: ["1,765 cakes", "2,400 cakes", "3,530 cakes", "3,600 cakes"],
        answerIndex: 2,
        explanation:
          "**High-Street profit:** Contribution = {{4800 * (£35 - £15) = 4800 * £20 = £96000}}; less £66,000 rent = **£30,000** profit. **Dark Kitchen:** Fixed costs = {{£18000 + £12000 = £30000}}; new unit contribution = {{£35 - (£15 + £3) = £17}}. To earn at least £30,000 profit: needed contribution = {{£30000 fixed + £30000 target profit = £60000}} → {{60000 / 17 = 3529.41}} → rounding up to the next whole cake gives **3,530 cakes** (since 3,529 cakes earns £29,993).",
        hints: [
          "Step 1: High-Street profit = 4,800 × £20 − £66,000 = £30,000.",
          "Step 2: Dark Kitchen fixed costs = £18,000 + £12,000 = £30,000; Dark Kitchen unit contribution = £35 − £18 = £17.",
          "Step 3: Required volume = (Fixed Costs £30,000 + Target Profit £30,000) ÷ £17 = 60,000 ÷ 17 = 3,529.41 → round up to 3,530 whole cakes!",
        ],
      },
      {
        id: "location-globalisation-external-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "external-pestle-ethics",
        question:
          "Rapid advances in generative AI and self-service checkouts (**Technological** factor in PESTLE) create which strategic trade-off for a 10,000-employee retail bank?",
        options: [
          "Zero upfront software investment vs higher long-run branch rent bills",
          "Unlimited liability for shareholders vs lower ATM electricity bills",
          "High short-run capital expenditure and branch redundancy payouts vs lower long-run unit operating costs and 24/7 digital customer speed",
          "Higher import tariffs on mobile apps vs primary-sector industrialisation",
        ],
        answerIndex: 2,
        explanation:
          "Adopting new **technology** requires heavy upfront **capital expenditure**, retraining and redundancy costs (plus elderly customer resistance), traded off against **lower long-run unit labour/rent costs** and instant 24/7 digital service.",
        hints: [
          "Contrast the upfront Year 1 pain (software capex + redundancy + elderly alienations) against Year 3+ efficiency gains.",
          "This short-run capex vs long-run unit-cost reduction is the core Technological PESTLE chain.",
        ],
      },
      {
        id: "location-globalisation-external-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "globalisation-mncs",
        question:
          "Domestic toy maker `PlayWood Ltd`'s **home government** imposes a **25% tighter import quota** on foreign plastic toys entering `PlayWood`'s home market. How does this protectionist quota affect `PlayWood Ltd` in the short run?",
        options: [
          "PlayWood Ltd must pay a 25% customs tax on every wooden toy it sells domestically",
          "Foreign rivals flood the domestic market with unlimited cheap toys",
          "PlayWood Ltd's domestic factory is nationalised",
          "PlayWood Ltd faces less foreign competition as imported plastic toys become scarcer, allowing PlayWood to win higher domestic sales and market share",
        ],
        answerIndex: 3,
        explanation:
          "Domestic **protectionism** (quotas or tariffs on foreign imports) shields **home producers** like `PlayWood Ltd` from overseas competition, boosting domestic market share — though foreign governments may retaliate against `PlayWood`'s own exports!",
        hints: [
          "Careful who the quota restricts: it restricts *foreign imported toys* entering `PlayWood`'s home country!",
          "Fewer rival imports on toy-shop shelves leaves a bigger gap for domestic `PlayWood Ltd`.",
        ],
      },
      {
        id: "location-globalisation-external-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "trade-exchange-rates",
        question:
          "If a country suffers persistent **cost-push inflation** because it imports oil, wheat and semiconductors priced in US dollars, which currency movement will **worsen** that domestic inflation?",
        options: [
          "Appreciation of the home currency against the US dollar (SPICED)",
          "Fixing import tariffs at 0%",
          "Complete stability of the exchange rate",
          "Depreciation of the home currency against the US dollar (WPIDEC)",
        ],
        answerIndex: 3,
        explanation:
          "Under **WPIDEC** (depreciation), **Imports become Dearer** in domestic currency — raising the local cost of imported oil, wheat and microchips and driving up economy-wide **cost-push inflation**.",
        hints: [
          "Ask whether SPICED or WPIDEC makes imported oil and wheat MORE expensive in home currency!",
          "Weak currency → Imports Dearer → higher fuel & food costs!",
        ],
      },
      {
        id: "location-globalisation-external-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "government-policies",
        question:
          "Why might a Paper 1 12-employee engineering workshop with **zero bank loans** still lose 30% of its orders six months after the central bank raises interest rates?",
        options: [
          "Zero-debt companies are fined by the central bank when rates rise",
          "Its B2B factory customers postpone debt-financed machinery purchases when borrowing costs rise and consumer demand cools",
          "Higher interest rates force sole traders to pay corporation tax twice",
          "Higher interest rates automatically make exports cheaper under WPIDEC",
        ],
        answerIndex: 1,
        explanation:
          "Even a **debt-free B2B supplier** feels monetary tightening indirectly when **its customers** delay capital investment or cut orders due to weaker downstream consumer spending!",
        hints: [
          "Even if the 12-staff workshop owes £0 to banks, who buys its engineering parts?",
          "Other factories postpone borrowing to buy machinery when interest rates jump!",
        ],
      },
      {
        id: "location-globalisation-external-m3-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "location-decisions",
        question:
          "What is the primary commercial reason five independent antique shops choose to locate side-by-side on the same historic lane (**clustering**) despite competing for similar buyers?",
        options: [
          "The lane becomes a known 'destination magnet' attracting far more specialist collectors than any lone shop on a quiet street could draw",
          "Landlords charge £0 rent whenever five rivals sit on one street",
          "Clustering legally merges the five sole traders into one PLC",
          "Antique furniture is a bulk-reducing primary extraction industry",
        ],
        answerIndex: 0,
        explanation:
          "Retail **clustering** in comparison goods (antiques, fashion, restaurants, car showrooms) creates a **destination hub** that enlarges total footfall for every shop on the street.",
        hints: [
          "Think about how antique collectors or diners shop — they love browsing several options in one trip!",
          "Total footfall drawn to the cluster outweighs sharing the street with rivals.",
        ],
      },
      {
        id: "location-globalisation-external-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "external-pestle-ethics",
        question:
          "Fast-fashion giant `TrendNow Plc` discovers illegal sub-minimum-wage overtime at a tier-2 fabric mill in its supply chain before any media outlet knows. Which response best protects **long-term shareholder value**?",
        options: [
          "Delete audit emails and launch a 'Green & Kind' poster campaign hoping journalists never find out",
          "Immediately switch silently to another unaudited low-cost mill with zero worker compensation",
          "Transparently disclose the audit finding, fund back-pay remediation for affected mill workers, and publish independent third-party factory audits",
          "Raise retail dress prices by 80% while keeping the illegal overtime unchanged",
        ],
        answerIndex: 2,
        explanation:
          "Cover-ups and **greenwashing** risk catastrophic viral leaks, boycotts and investor flight; proactive **transparent remediation + independent audits** protects long-run brand trust and ESG institutional investment.",
        hints: [
          "Imagine what happens if leaked emails later prove `TrendNow Plc` covered up sweatshop pay while running 'Kind' posters!",
          "Compare short-term cover-up temptation against long-term brand trust and institutional ESG investors.",
          "Authentic remediation + independent verification neutralises pressure-group boycotts.",
        ],
      },
    ],
  },
];
