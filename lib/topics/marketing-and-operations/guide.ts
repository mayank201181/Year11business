import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "marketing-and-operations",
  title: "Marketing Mix & Business Operations",
  strand: "Marketing",
  icon: "🚀",
  summary:
    "Connect customer-led market research, PED, Boston Matrix and the 4Ps directly to Job/Batch/Flow production, Lean/JIT, Economies of Scale and Total Quality Management.",
  intro:
    "Winning in business requires two halves of the engine to fire in harmony: **Marketing** (Edexcel 4BS1 Topics 4.1–4.3) identifies, anticipates and profitably satisfies customer needs, while **Operations** (Topics 5.1–5.4) transforms inputs into high-quality goods and services at a competitive unit cost.\n\nIf Marketing promises luxury bespoke trainers (**niche market, price skimming, exclusive boutiques**), Operations cannot run a rigid mass-assembly line with cheap materials; conversely, if Marketing competes on everyday low prices in a **price-elastic mass market**, Operations must unlock **flow production**, **lean Just-in-Time (JIT)** efficiency and **internal economies of scale**.\n\nAcross Paper 1 (< 50 staff SMEs) and Paper 2 (> 250 staff global PLCs), Edexcel examiners reward students who link the **4Ps Marketing Mix**, **Boston Matrix** and **Product Life Cycle** seamlessly to **productivity**, **average unit cost** and **Quality Control vs Quality Assurance (TQM)**.",
  guide: [
    {
      id: "market-research-segmentation",
      heading: "Market research, sampling & market segmentation",
      discovery: {
        problem:
          "Vani's dad spends £18,000 inventing a solar-powered heated umbrella before speaking to a single shopper ('Build it and they will buy it!'). Meanwhile, Vani stands outside Brighton station on a rainy Tuesday asking 40 commuters what they hate about umbrellas, AND downloads free Met Office rainfall data plus a Mintel umbrella industry report. Contrast Dad's orientation with Vani's, and separate Vani's two research methods — plus spot the hidden sampling flaw in interviewing 40 commuters at 8:30 am!",
        idea:
          "Dad is **product-orientated** (inward focus on the invention, high flop risk), whereas Vani is **market-orientated** (researching customer needs *before* launch). Her station interviews are **Primary (field) research** (first-hand, tailored, up-to-date), while Met Office/Mintel data is **Secondary (desk) research** (cheaper, rapid industry scale, but not tailored). However, interviewing only 8:30 am rail commuters introduces **sampling bias** — excluding retirees, school runs and car drivers!",
      },
      body: "### Market Orientation vs Product Orientation\n- **Market-orientated** businesses continually research changing consumer wants *before* designing products — lowering launch failure risk in fast-moving fashion, food and apps.\n- **Product-orientated** businesses focus inward on R&D engineering or scientific breakthroughs first (common in pharmaceuticals or pioneering tech like Dyson's early cyclone vacuum) and then persuade a market to buy.\n\n### Primary (Field) vs Secondary (Desk) Research\n\n| Research Type | Methods & Examples | Advantages (AO3) | Drawbacks (AO4) |\n|---|---|---|---|\n| **Primary (Field)** — new first-hand data gathered for this specific purpose | Questionnaires/surveys, focus groups, interviews, consumer panels, observation, test marketing | Up-to-date, tailored to exact brand questions, confidential from rivals | Expensive and slow to collect; risk of **interviewer/question bias** or tiny unrepresentative samples |\n| **Secondary (Desk)** — existing data collected previously by others | Government census/ONS data, Mintel/Euromonitor market reports, trade journals, competitor Plc accounts | Fast and cheap (often free); reveals macro industry size and multi-year trends | May be **outdated**, gathered for a different purpose, and equally available to competitors |\n\n### Quantitative vs Qualitative Data & Sampling\n- **Quantitative data**: numerical/statistical (*'74% of respondents would pay £3.50'* — easy to graph and spot trends, lacks *why*).\n- **Qualitative data**: in-depth opinions, feelings and motivations from focus groups (*'Packaging feels plasticky and cheap'* — explains *why*, hard to generalise statistically).\n- **Sampling**: because surveying an entire population is too costly, firms survey a sample (random, quota or stratified). Small or poorly chosen samples create **sampling bias**, leading to expensive marketing mistakes.\n\n### Niche vs Mass Markets & Segmentation\n- **Mass market**: high sales volume, fierce competition, standardised products, lower margins but huge **economies of scale** (e.g. Colgate toothpaste).\n- **Niche market**: small specialised segment with unmet needs — smaller volume, **less direct competition**, and ability to charge **premium prices** (e.g. vegan climbing shoes), though vulnerable if a giant rival enters or niche demand dries up.\n- **Market segmentation** splits a market into distinct customer groups: **Demographic** (age, gender, family size), **Geographic** (region, climate, urban/rural), **Income / Socio-economic** (luxury vs value), and **Behavioural / Lifestyle** (usage loyalty, hobbies, ethical/eco values).",
      diagram:
        '<svg viewBox="0 0 640 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison diagram of Primary Field Research versus Secondary Desk Research and Four Market Segmentation bases"><rect width="640" height="235" rx="14" fill="#f8fafc"/><text x="320" y="25" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#0f172a">Market Research &amp; Customer Segmentation Architecture</text><rect x="30" y="45" width="180" height="170" rx="10" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/><text x="120" y="68" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#1d4ed8">Primary (Field)</text><text x="120" y="90" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#334155">• Surveys &amp; Focus Groups</text><text x="120" y="108" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#334155">• Test Marketing &amp; Obs.</text><text x="120" y="136" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#15803d">+ Tailored &amp; Exclusive</text><text x="120" y="154" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#b91c1c">− Costly &amp; Sample Bias</text><rect x="230" y="45" width="180" height="170" rx="10" fill="#f5f3ff" stroke="#c4b5fd" stroke-width="1.5"/><text x="320" y="68" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#6d28d9">Secondary (Desk)</text><text x="320" y="90" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#334155">• Census / Gov Stats</text><text x="320" y="108" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#334155">• Market Reports / Accounts</text><text x="320" y="136" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#15803d">+ Fast &amp; Low Cost</text><text x="320" y="154" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#b91c1c">− Outdated / Generic</text><rect x="430" y="45" width="180" height="170" rx="10" fill="#ecfdf5" stroke="#6ee7b7" stroke-width="1.5"/><text x="520" y="68" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#047857">4 Segmentation Bases</text><text x="520" y="92" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="600" fill="#065f46">1. Demographic (Age/Fam)</text><text x="520" y="114" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="600" fill="#065f46">2. Geographic (Region)</text><text x="520" y="136" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="600" fill="#065f46">3. Income / Socio-econ</text><text x="520" y="158" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="600" fill="#065f46">4. Lifestyle / Behavioural</text><text x="520" y="192" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#475569">Targets ads &amp; avoids waste</text></svg>',
      diagramCaption:
        "Smart businesses combine cheap Secondary research (to size the market) with focused Primary research (to test specific product features on target segments).",
      workedExamples: [
        {
          title: "Quantifying quantitative survey findings for a target segment",
          problem:
            "A pet-food start-up surveys 250 dog owners (Primary research). 68% say they prefer grain-free kibble, and of those grain-free buyers, 40% are willing to pay over £35 per bag. How many respondents represent the high-income grain-free segment?",
          steps: [
            "Find respondents preferring grain-free kibble: {{0.68 * 250 = 170}} owners.",
            "Find the 40% willing to pay > £35: {{0.40 * 170 = 68}} owners.",
          ],
          answer: "68 dog owners (27.2% of the total sample).",
          yourTurn: {
            question:
              "A fitness app surveys 400 gym-goers. 55% use a smartwatch, and 30% of smartwatch users say they would subscribe at £9.99/month. How many respondents would subscribe?",
            answer: { type: "number", value: 66, display: "66 respondents" },
            solution:
              "Smartwatch users = 55% of 400 = 220. Subscribers = 30% of 220 = 66 respondents.",
          },
        },
      ],
      keyPoints: [
        "**Primary research** = new first-hand field data (tailored, costly); **Secondary research** = pre-existing desk data (cheap, potentially outdated).",
        "**Quantitative** answers *how many / how much* (numbers); **Qualitative** answers *why* (motivations & attitudes).",
        "**Niche markets** enjoy higher profit margins and weaker competition, whereas **mass markets** capture higher volume and economies of scale.",
        "Digital **social media analytics** and e-commerce loyalty cards give modern firms real-time quantitative primary data at low cost.",
      ],
      whyItWorks:
        "Segmenting a market prevents 'spray-and-pray' advertising waste — tailoring product design, pricing and promotion directly to the buyers most willing to pay.",
      strategies: [
        "Match research budget to business size: Paper 1 sole traders cannot afford £80,000 national TV polls — recommend small local focus groups, Instagram polls and free ONS secondary data!",
        "Always question **sample size and bias** when evaluating research evidence in 9- and 12-mark questions.",
      ],
      thinkDeeper:
        "Why do global PLCs like Nike still run small niche 'test-market' drops in one city even after spending millions on secondary market analytics?",
    },
    {
      id: "markets-ped-competition",
      heading: "Market share, dynamic markets & price elasticity",
      discovery: {
        problem:
          "Cinema A raises popcorn prices by **10%** (inside the theatre where outside snacks are banned) and sales volume barely dips by **2%** — total popcorn revenue *jumps up*! Next door, Smoothie Stall B raises mango smoothie prices by **10%** on a street packed with four rival juice bars, and sales volume crashes by **25%** — total revenue *collapses*! Why did the exact same 10% price rise enrich Cinema A yet punish Stall B?",
        idea:
          "Captive cinema popcorn has **price inelastic demand** (few substitutes inside the foyer, `%ΔQ < %ΔP`), so raising price increases Total Revenue! Street smoothies face fierce substitutes and **price elastic demand** (`%ΔQ > %ΔP`), so raising price drives customers to rivals and shrinks Total Revenue — Stall B should compete via differentiation or lower prices instead!",
      },
      body: "### Market Size, Market Growth & Market Share\n- **Market size**: total sales value (£m) or volume (units) across *all* firms in an industry.\n- **Market share** measures one firm's slice of the total market:\n  {{\"Market Share (%)\" = (\"Firm's Sales\") / (\"Total Market Sales\") * 100}}\n- High market share confers **market leader** power: stronger shelf-space bargaining with retailers, supplier bulk-buying discounts, and brand trust.\n\n### Dynamic Markets & E-Commerce\nMarkets are **dynamic** — consumer tastes, technology, viral social trends and new entrants shift constantly. Firms that fail to adapt (e.g. Kodak ignoring digital cameras, Blockbuster ignoring streaming) lose market share rapidly.\n\n### Price Elasticity of Demand (PED) & Revenue Rules\n**Price Elasticity of Demand** measures how sensitive quantity demanded is to a change in price:\n\n{{\"PED\" = (\"% Change in Quantity Demanded\") / (\"% Change in Price\")}}\n\n| Demand Type | PED Magnitude | Drivers (Why?) | Best Pricing Move to Boost Total Revenue |\n|---|---|---|---|\n| **Price Elastic** | `|PED| > 1` (`%ΔQ` bigger than `%ΔP`) | Many close substitutes, weak brand loyalty, luxury/non-essential item, high share of income | **Lower price** → huge surge in quantity sold outweighs lower unit price (**Revenue rises!**) |\n| **Price Inelastic** | `|PED| < 1` (`%ΔQ` smaller than `%ΔP`) | Few substitutes, strong brand USP/loyalty, necessity or habit-forming good | **Raise price** → tiny drop in quantity sold is outweighed by higher unit price (**Revenue rises!**) |\n\n> **Grade 9 Alert:** Never claim lowering price *automatically* increases profit! Even if lowering price on an elastic product raises **Total Revenue**, selling far more units also raises **Total Variable Costs** — check the unit margin too!",
      diagram:
        '<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side by side demand curves comparing Steep Price Inelastic Demand where price rise boosts revenue versus Flat Price Elastic Demand where price rise shrinks revenue"><rect width="640" height="240" rx="14" fill="#f8fafc"/><text x="320" y="24" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#0f172a">Price Elasticity of Demand (PED) &amp; Total Revenue Effect</text><rect x="30" y="42" width="275" height="180" rx="10" fill="#ecfdf5" stroke="#6ee7b7" stroke-width="1.5"/><text x="167" y="63" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#047857">Price Inelastic (|PED| &lt; 1, Steep D)</text><line x1="65" y1="190" x2="275" y2="190" stroke="#475569" stroke-width="1.5"/><line x1="65" y1="78" x2="65" y2="190" stroke="#475569" stroke-width="1.5"/><rect x="65" y="96" width="82" height="94" fill="#16a34a" opacity="0.22"/><line x1="115" y1="82" x2="175" y2="185" stroke="#047857" stroke-width="3"/><text x="188" y="112" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#065f46">P ↑ 20% → Q ↓ 4%</text><text x="188" y="130" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#15803d">Revenue RISES!</text><text x="167" y="210" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#334155">Strong USP · Few substitutes · Necessities</text><rect x="335" y="42" width="275" height="180" rx="10" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5"/><text x="472" y="63" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#b91c1c">Price Elastic (|PED| &gt; 1, Shallow D)</text><line x1="370" y1="190" x2="585" y2="190" stroke="#475569" stroke-width="1.5"/><line x1="370" y1="78" x2="370" y2="190" stroke="#475569" stroke-width="1.5"/><rect x="370" y="135" width="165" height="55" fill="#2563eb" opacity="0.18"/><line x1="382" y1="108" x2="572" y2="162" stroke="#b91c1c" stroke-width="3"/><text x="475" y="102" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#991b1b">P ↑ 10% → Q ↓ 25%</text><text x="475" y="120" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#dc2626">Revenue FALLS!</text><text x="472" y="210" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#334155">Many substitutes · Commodity / Price-sensitive</text></svg>',
      diagramCaption:
        "Steep inelastic demand rewards price rises with higher revenue; shallow elastic demand punishes price rises as buyers defect to substitutes.",
      workedExamples: [
        {
          title: "Calculating Market Share and Market Growth",
          problem:
            "The UK oat-milk market is worth £240 million in total annual sales. Oatly's UK sales are £78 million. Calculate Oatly's market share to 2 decimal places.",
          steps: [
            "Use {{\"Market Share\" = (\"Firm's Sales\") / (\"Total Market Sales\") * 100}}.",
            "Substitute: {{(78 / 240) * 100 = 32.5%}}.",
          ],
          answer: "Oatly's market share = 32.5%.",
          yourTurn: {
            question:
              "GlowSkin Cosmetics generates £18 million of revenue in a £120 million skincare market. Calculate GlowSkin's market share (as a %).",
            answer: { type: "number", value: 15, display: "15%" },
            solution:
              "Market Share = (£18m ÷ £120m) × 100 = 15%.",
          },
        },
        {
          title: "Calculating PED and Total Revenue impact",
          problem:
            "A streaming platform cuts monthly subscription price by 10% (from £10 to £9), causing subscribers to jump by 25% (from 100,000 to 125,000). Calculate PED and verify the change in monthly Total Revenue.",
          steps: [
            "**PED** = {{25 / (-10) = -2.5}} (`|PED| = 2.5 > 1`, so demand is **price elastic**).",
            "Old monthly Revenue = {{10 * 100000 = 1000000}} (£1,000,000).",
            "New monthly Revenue = {{9 * 125000 = 1125000}} (£1,125,000) — Revenue rises by **£125,000**!",
          ],
          answer: "PED = −2.5 (price elastic); monthly revenue increases by £125,000.",
          yourTurn: {
            question:
              "A bakery raises sourdough loaf price by 20% and quantity demanded falls by 8%. Calculate the magnitude (absolute value) of PED as a positive decimal.",
            answer: { type: "number", value: 0.4, display: "0.4" },
            solution:
              "|PED| = 8% ÷ 20% = 0.4 (since 0.4 < 1, demand is price inelastic).",
          },
        },
      ],
      keyPoints: [
        "**Market Share** = `(Firm's Sales ÷ Total Market Sales) × 100`.",
        "`|PED| > 1` = **Price Elastic** (cut price to raise revenue; avoid price hikes).",
        "`|PED| < 1` = **Price Inelastic** (raise price to raise revenue; strong branding & USP make demand more inelastic!).",
        "One core aim of branding and product differentiation is to make a firm's demand **more price inelastic**.",
      ],
      whyItWorks:
        "Total Revenue is `P × Q`: whenever a percentage change in `Q` outweighs the opposite percentage change in `P` (elastic), revenue moves in the direction of `Q`; when `%ΔP` dominates (inelastic), revenue moves in the direction of `P`.",
      strategies: [
        "Notice how a firm's market share can **fall** even when its own sales **grow** — if total market size grew even faster!",
        "Link Marketing to Finance: strong USP → inelastic PED → higher price → wider **Gross Profit Margin**!",
      ],
      thinkDeeper:
        "If an airline's revenue rises by 18% during a growing travel boom, yet its market share drops from 25% to 20%, should the CEO be congratulated or challenged?",
    },
    {
      id: "marketing-mix-4ps",
      heading: "The 4Ps Marketing Mix: Product, Price, Place & Promotion",
      discovery: {
        problem:
          "Imagine Rolex launched a £9,000 diamond watch, promoted it with 'Buy-One-Get-One-Free' leaflets at bus stops, and stocked it in bargain pound-shop bins! Why does that Marketing Mix collapse instantly — and how do **Boston Matrix** and **Product Life Cycle** tell a multi-product giant like Apple where to invest cash?",
        idea:
          "All **4Ps (Product, Price, Place, Promotion)** must reinforce one coherent brand message — bargain pound-shop **Place** and BOGOF **Promotion** destroy a £9,000 luxury **Product** and **Price**! Meanwhile, mature **Cash Cows** (high share, low growth) generate surplus cash to fund rising **Stars** and R&D **Question Marks** before ageing products hit **Decline**.",
      },
      body: "An integrated **4Ps Marketing Mix** ensures Product, Price, Place and Promotion fit the target segment seamlessly:\n\n### 1. Product — Design Mix, Boston Matrix & Product Life Cycle\n- **Design Mix**: balancing **Function** (reliability/performance), **Aesthetics** (style/look/feel), and **Cost** (economic manufacture) — plus modern eco-sustainability.\n- **Boston Matrix** classifies a product portfolio across **Market Share** (High/Low) and **Market Growth** (High/Low):\n\n| Quadrant | Market Share | Market Growth | Cash & Strategic Role |\n|---|---|---|---|\n| **Star** ⭐ | High | High | High revenue, but requires heavy promotional/capacity spending to defend share in a booming market |\n| **Cash Cow** 🐄 | High | Low (Mature) | **Net cash generator!** Established loyalty & economies of scale; 'milk' surplus cash to fund Stars & Question Marks |\n| **Question Mark (Problem Child)** ❓ | Low | High | Rapidly growing market but tiny share; absorbs cash — invest heavily to build into a Star or withdraw if failing |\n| **Dog** 🐕 | Low | Low | Weak share in a stagnant market; usually phased out/divested unless serving a profitable loyal niche |\n\n- **Product Life Cycle (PLC)**: **Development** (zero sales, heavy R&D cash outflow) → **Introduction** (slow sales, launch promotion costs) → **Growth** (rapidly rising sales & profits) → **Maturity / Saturation** (peak stable sales, fierce competition — Cash Cow stage) → **Decline** (falling sales).\n- **Extension Strategies** delay Decline at Maturity: new flavours/colours, rebranding/repackaging, entering new geographic export markets, or finding new uses (e.g. Lucozade pivoting from sickroom tonic to sports energy drink).\n\n### 2. Price — Six Edexcel 4BS1 Pricing Strategies\n1. **Cost-Plus**: unit cost + percentage markup (guarantees margin per unit sold, ignores rivals/PED).\n2. **Price Skimming**: high launch price for patented/innovative tech (early adopters with inelastic demand recoup R&D fast).\n3. **Penetration Pricing**: low launch price to grab rapid market share in mass markets (squeezes early GPM).\n4. **Competitive Pricing**: matching rivals when products are similar (compete on service/branding instead).\n5. **Promotional Pricing**: temporary markdowns/flash sales to clear seasonal inventory or revive declining lines.\n6. **Predatory Pricing**: pricing below cost by a dominant firm to drive out rivals (**illegal** under competition law in many jurisdictions!).\n\n### 3. Place (Distribution Channels) & 4. Promotion\n- **Place**: `Producer → Wholesaler → Retailer → Consumer` (wide shelf reach; wholesaler breaks bulk, but each middleman takes a margin!) vs **Direct E-Commerce** (`Producer → Consumer` online: firm keeps 100% of retail margin and customer data, reaches global buyers 24/7, but bears parcel logistics/returns costs).\n- **Promotion**: **Above-the-Line (ATL)** paid mass media (TV, radio, billboards, cinema) vs **Below-the-Line (BTL)** targeted non-media promotions (BOGOF, discount vouchers, loyalty cards, point-of-sale displays, PR, sponsorship, influencer/social media marketing).",
      diagram:
        '<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Product Life Cycle curve from Development through Introduction, Growth, Maturity with Extension Strategy dashed boost, and Decline alongside Boston Matrix quadrants"><rect width="640" height="250" rx="14" fill="#f8fafc"/><text x="195" y="24" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#0f172a">Product Life Cycle &amp; Extension Strategy</text><line x1="35" y1="205" x2="365" y2="205" stroke="#64748b" stroke-width="1.5"/><line x1="35" y1="42" x2="35" y2="205" stroke="#64748b" stroke-width="1.5"/><path d="M 40 205 C 75 205, 95 190, 125 160 C 155 120, 185 68, 235 65 C 275 64, 300 105, 345 168" fill="none" stroke="#2563eb" stroke-width="3"/><path d="M 255 70 C 285 52, 320 48, 360 65" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="6,4"/><text x="312" y="45" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#15803d">Extension Strategy!</text><text x="68" y="222" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" font-weight="600" fill="#475569">Dev/Intro</text><text x="155" y="222" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" font-weight="600" fill="#475569">Growth</text><text x="240" y="222" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" font-weight="600" fill="#475569">Maturity</text><text x="325" y="222" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" font-weight="600" fill="#475569">Decline</text><text x="510" y="24" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#0f172a">Boston Matrix Portfolio</text><rect x="405" y="45" width="102" height="78" rx="6" fill="#fef3c7" stroke="#f59e0b"/><text x="456" y="75" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#b45309">Star</text><text x="456" y="94" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" fill="#78350f">High Share · High Growth</text><rect x="513" y="45" width="102" height="78" rx="6" fill="#ede9fe" stroke="#8b5cf6"/><text x="564" y="75" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#6d28d9">Question Mark</text><text x="564" y="94" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" fill="#4c1d95">Low Share · High Growth</text><rect x="405" y="129" width="102" height="78" rx="6" fill="#dcfce7" stroke="#22c55e"/><text x="456" y="159" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#15803d">Cash Cow</text><text x="456" y="178" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" fill="#14532d">High Share · Low Growth</text><rect x="513" y="129" width="102" height="78" rx="6" fill="#fee2e2" stroke="#ef4444"/><text x="564" y="159" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#b91c1c">Dog</text><text x="564" y="178" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" fill="#7f1d1d">Low Share · Low Growth</text><text x="510" y="224" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#334155">Milk Cash Cows to fund Stars &amp; R&amp;D</text></svg>',
      diagramCaption:
        "Extension strategies launch right at Maturity/Saturation to prevent Decline, while Cash Cows fund rising Stars and Question Marks in a balanced Boston Matrix.",
      workedExamples: [
        {
          title: "Cost-Plus Pricing calculation",
          problem:
            "An outdoor backpack costs £18 in materials and direct labour, plus £6 in allocated factory overheads (total unit cost = £24). The manufacturer applies a 45% cost-plus markup. Calculate the selling price.",
          steps: [
            "Confirm **Total Unit Cost**: {{18 + 6 = 24}} (£24).",
            "Calculate **45% markup**: {{0.45 * 24 = 10.80}} (£10.80).",
            "Add onto unit cost: {{24 + 10.80 = 34.80}} (**£34.80**).",
          ],
          answer: "Selling price = £34.80.",
          yourTurn: {
            question:
              "A desk lamp has a total unit cost of £16.00 and the business uses cost-plus pricing with a 35% markup. Calculate the selling price (in £).",
            answer: { type: "number", value: 21.6, display: "£21.60" },
            solution:
              "35% of £16.00 = £5.60. Selling price = £16.00 + £5.60 = £21.60.",
          },
        },
      ],
      keyPoints: [
        "All **4Ps** must align consistently with target segment, brand image and PED.",
        "**Cash Cows** (high share, low growth) generate net positive cash flow; **Stars** (high share, high growth) often consume heavy cash to keep pace with market growth!",
        "**Price skimming** suits patented/unique launches; **penetration pricing** suits mass-market repeat-purchase launches.",
        "Selling through **wholesalers/retailers** widens geographic reach quickly but sacrifices retail profit margin compared with **direct e-commerce**.",
      ],
      whyItWorks:
        "A balanced Boston Matrix acts as an internal capital market: mature Cash Cows self-finance tomorrow's Stars without forcing the firm to rely on expensive external bank debt.",
      strategies: [
        "In 9/12-mark Marketing Mix questions, check whether changing ONE 'P' clashes with the other THREE 'Ps'!",
        "Never recommend expensive national TV advertising (ATL) for a tiny Paper 1 sole trader — suggest targeted Instagram/TikTok reels, local flyers and loyalty referrals (BTL).",
      ],
      thinkDeeper:
        "Why might a luxury perfume house *refuse* to let discount supermarkets stock its bottles even if doing so would double short-term unit sales?",
    },
    {
      id: "production-lean-jit",
      heading: "Job, batch & flow production, productivity & Lean/JIT",
      discovery: {
        problem:
          "Compare three food makers: (1) a wedding-cake artist sculpting one custom three-tier floral cake; (2) an artisan bakery baking 80 croissants, cleaning the trays, then baking 80 cinnamon buns; (3) Coca-Cola's canning line filling 2,000 cans per minute non-stop 24/7. Match each to **Job**, **Batch** or **Flow** production — and predict what happens to Coca-Cola's **Just-in-Time (JIT)** line if its aluminium-can lorry is stuck in a port strike for 48 hours!",
        idea:
          "(1) **Job** (bespoke one-off, skilled labour, highest unit cost & price); (2) **Batch** (flexible groups, resetting downtime between batches); (3) **Flow** (capital-intensive continuous mass line, tiny unit cost). Under **JIT** (zero buffer stock), a 48-hour lorry delay halts the entire canning line immediately, risking lost orders and damaged supermarket relationships!",
      },
      body: "### Job, Batch & Flow (Mass) Production\n\n| Method | How It Works & Examples | Key Advantages | Key Drawbacks |\n|---|---|---|---|\n| **Job Production** | Single bespoke one-off items made start-to-finish (custom wedding dress, tailored suit, bridge) | Exact customer specification, **high added value / premium price**, high worker pride/motivation (Herzberg) | Very **high unit cost**, slow output, requires expensive skilled craft labour |\n| **Batch Production** | Identical groups made together before switching machinery to the next batch (bakery loaves, clothing sizes S/M/L, craft beer) | Flexible variety for seasonal/flavour changes, lower unit cost than Job | **Downtime resetting machines** between batches, requires work-in-progress storage |\n| **Flow (Mass) Production** | Continuous 24/7 automated assembly of standardised items (bottled drinks, smartphones, cars) | **Lowest unit cost** (technical economies of scale), consistent automated output, fast high volume | Huge **capital start-up cost**, zero flexibility to customise, repetitive boring work demotivates staff, one breakdown halts whole line |\n\n### Capital-Intensive vs Labour-Intensive & Productivity\n- **Capital-intensive**: relies heavily on automated robotics/machinery relative to workers (high fixed cost, high consistency, low variable unit cost at scale).\n- **Labour-intensive**: relies heavily on human workers relative to capital (bespoke tailoring, hairdressing, fruit picking — lower fixed equipment cost, personal touch, harder to scale rapidly).\n- **Labour Productivity** measures output efficiency per worker over a time period:\n  {{\"Labour Productivity\" = (\"Total Output\") / (\"Number of Workers\")}}\n  Higher productivity spreads wage costs across more units, **lowering unit cost** and boosting competitiveness.\n\n### Lean Production: Kaizen, Just-in-Time (JIT) & Cell Production\n**Lean production** aims to eliminate all forms of waste (time, defects, excess motion, unsold stock):\n- **Kaizen** (*'continuous improvement'*): empowering shop-floor workers — who know the machines best — to suggest small, ongoing daily efficiency improvements rather than waiting for top-down overhauls.\n- **Just-in-Time (JIT)** vs **Buffer Stock**: under JIT, components arrive on the factory floor *just as needed* rather than sitting in warehouses. **Pros**: slashes warehousing rent, insurance and cash tied up in inventory (improves working capital!). **Cons**: zero safety cushion if suppliers fail, transport strikes hit, or demand spikes unexpectedly — plus loses bulk-buying discounts.\n- **Cell production**: splitting a linear assembly line into small multi-skilled self-managing teams responsible for complete sub-units (boosts teamwork and quality ownership).",
      diagram:
        '<svg viewBox="0 0 640 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Buffer Stock Sawtooth Inventory Chart versus Just-in-Time Minimal Stock Line and Job-Batch-Flow Volume Spectrum"><rect width="640" height="235" rx="14" fill="#f8fafc"/><text x="185" y="24" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#0f172a">Traditional Buffer Stock vs Lean JIT</text><line x1="40" y1="195" x2="335" y2="195" stroke="#64748b" stroke-width="1.5"/><line x1="40" y1="45" x2="40" y2="195" stroke="#64748b" stroke-width="1.5"/><polyline points="40,65 125,155 125,65 210,155 210,65 295,155 295,65" fill="none" stroke="#2563eb" stroke-width="2.5"/><line x1="40" y1="155" x2="330" y2="155" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5,4"/><text x="330" y="150" text-anchor="end" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#b45309">Buffer Safety Stock</text><line x1="40" y1="188" x2="330" y2="188" stroke="#16a34a" stroke-width="3"/><text x="185" y="182" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="800" fill="#15803d">Just-in-Time (Near-Zero Stock)</text><text x="185" y="216" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#475569">Time → (JIT frees cash, zero delay cushion)</text><rect x="370" y="42" width="240" height="52" rx="8" fill="#fef3c7" stroke="#f59e0b"/><text x="490" y="64" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#92400e">Job Production</text><text x="490" y="81" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#78350f">Unique 1-offs · Skilled · High Cost</text><rect x="370" y="103" width="240" height="52" rx="8" fill="#e0f2fe" stroke="#0ea5e9"/><text x="490" y="125" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#0369a1">Batch Production</text><text x="490" y="142" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#0c4a6e">Grouped runs · Flexible · Reset downtime</text><rect x="370" y="164" width="240" height="52" rx="8" fill="#dcfce7" stroke="#22c55e"/><text x="490" y="186" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#15803d">Flow (Mass) Production</text><text x="490" y="203" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#14532d">Continuous 24/7 · Capital-Intensive · Low Unit Cost</text></svg>',
      diagramCaption:
        "Buffer stock ties up warehouse space and cash to insure against supply shocks; JIT strips stock near zero, demanding ultra-reliable local suppliers.",
      workedExamples: [
        {
          title: "Calculating Labour Productivity before and after training",
          problem:
            "A solar-panel assembly plant employs 40 workers who assemble 1,400 panels per week. After Kaizen cell reorganisation and training, 35 workers assemble 1,575 panels per week. Calculate weekly labour productivity before and after, and the percentage improvement.",
          steps: [
            "**Before**: {{1400 / 40 = 35}} panels per worker per week.",
            "**After**: {{1575 / 35 = 45}} panels per worker per week.",
            "**Percentage rise**: {{((45 - 35) / 35) * 100 = 28.57%}}.",
          ],
          answer: "Productivity rose from 35 to 45 panels per worker (+28.57%).",
          yourTurn: {
            question:
              "A bicycle workshop employs 25 technicians who build 300 bicycles per month. Calculate monthly labour productivity (in bicycles per worker).",
            answer: { type: "number", value: 12, display: "12 bicycles per worker" },
            solution:
              "Labour Productivity = Total Output ÷ Number of Workers = 300 ÷ 25 = 12 bicycles per worker.",
          },
        },
      ],
      keyPoints: [
        "**Job** = custom uniqueness, high unit cost; **Batch** = grouped variety, changeover downtime; **Flow** = continuous automation, lowest unit cost.",
        "**Labour Productivity** = `Total Output ÷ Number of Workers` (NOT total output alone!).",
        "**JIT** frees working capital and eliminates storage waste, **but** collapses if global supply chains or transport links are unreliable.",
        "**Kaizen** relies on democratic/empowered culture — autocratic managers who ignore shop-floor staff kill Kaizen.",
      ],
      whyItWorks:
        "Matching production method to product positioning ensures Operations delivers what Marketing promised: bespoke luxury needs Job/skilled labour; mass penetration pricing needs Flow/automation.",
      strategies: [
        "Evaluate automation trade-offs across stakeholders: higher productivity & lower unit costs long term **vs** heavy short-term capital outflow, staff redundancies and loss of handmade USP.",
        "Always check **supplier reliability** before recommending JIT in an exam case study!",
      ],
      thinkDeeper:
        "Why did several global carmakers partially reintroduce small **buffer stocks** of semiconductor microchips after pandemic port closures paralysed pure JIT factories?",
    },
    {
      id: "economies-scale-quality",
      heading: "Economies & diseconomies of scale and quality management",
      discovery: {
        problem:
          "When Vani's bakery grows from baking 1,000 loaves a week to 20,000 loaves a week, its total flour and wage bill obviously rises — yet the **cost of baking ONE loaf** drops from **£1.40 to £0.65**! Five years later, after expanding into a sprawling 14-factory conglomerate of 50,000 staff, bureaucracy and miscommunication push the **cost per loaf back UP to £0.92**! Name both phases, and spot the fatal wording mistake that costs thousands of IGCSE students marks every June.",
        idea:
          "Phase 1 (`£1.40 → £0.65` per loaf) is **Economies of Scale**; Phase 2 (`£0.65 → £0.92` per loaf) is **Diseconomies of Scale**. **Fatal exam mistake**: NEVER write that economies of scale mean *'total costs fall'* or diseconomies mean *'total costs rise'* — producing more units ALWAYS raises total costs! You MUST write **average cost per unit** (`Total Cost ÷ Output`) falls or rises!",
      },
      body: "### Average Unit Cost & Internal Economies of Scale\n\n{{\"Average Unit Cost\" = (\"Total Cost\") / (\"Output\")}}\n\n**Economies of scale** occur when expanding the scale of output causes **average cost per unit to fall**.\n- **Internal Economies of Scale** (arise *inside* the growing firm itself — mnemonic **PT-MF-MR**):\n  1. **Purchasing (bulk-buying)**: ordering raw materials in giant volumes wins steep supplier discounts per kilo.\n  2. **Technical**: affording high-capacity automated flow machinery and spreading indivisible R&D across millions of units.\n  3. **Managerial**: hiring specialist Finance, HR, IT and Marketing directors rather than one overstretched generalist owner.\n  4. **Financial**: banks view large asset-backed PLCs as lower risk, granting larger loans at **lower interest rates**.\n  5. **Marketing**: a £2m national TV advert costs £2 per unit across 1 million units, vs £20 per unit across 100,000 units.\n  6. **Risk-bearing**: diversifying across multiple products and countries cushions any single market downturn.\n- **External Economies of Scale** benefit *every* firm in an industry cluster as the whole local sector grows — e.g. specialist local component suppliers, university training courses tailored to the sector (Silicon Valley tech, Motorsport Valley in Oxfordshire), and upgraded regional transport links.\n\n### Diseconomies of Scale (Beyond Minimum Efficient Scale)\nIf a firm grows *too* large and complex, **average unit cost starts rising again** due to three classic causes:\n1. **Poor communication**: messages distort across tall, multi-layered global hierarchies and time zones.\n2. **Coordination & control failure**: departments duplicate tasks or pull in conflicting directions.\n3. **Worker alienation / demotivation**: employees feel like anonymous cogs in a giant bureaucracy, raising absenteeism and mistakes.\n\n### Quality Control vs Quality Assurance & Total Quality Management (TQM)\n\n| Approach | How Quality Is Checked | Pros & Cons |\n|---|---|---|\n| **Quality Control (QC)** | Dedicated inspectors test samples **at the END** of the production line | Catches faulty goods before reaching customers, **but** defective batches have *already wasted* raw materials/time, and workers view quality as 'the inspector's job' |\n| **Quality Assurance (QA)** | Quality standards built into **EVERY stage** of design & production; workers self-check before passing items on | Prevents waste at source, reduces rework costs, empowers staff; requires training investment and staff buy-in |\n| **Total Quality Management (TQM)** | Whole-organisation culture of **zero defects** & internal customer chains (every department treats the next as a customer) | Builds elite brand reputation, repeat loyalty and lower warranty costs; slow and costly cultural shift if staff resist extra responsibility |",
      diagram:
        '<svg viewBox="0 0 640 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="U-shaped Long-Run Average Cost curve showing falling unit costs under Economies of Scale, Minimum Efficient Scale trough, and rising unit costs under Diseconomies of Scale"><rect width="640" height="245" rx="14" fill="#f8fafc"/><text x="320" y="25" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#0f172a">Economies &amp; Diseconomies of Scale (Average Unit Cost Curve)</text><line x1="75" y1="205" x2="585" y2="205" stroke="#475569" stroke-width="1.8"/><line x1="75" y1="45" x2="75" y2="205" stroke="#475569" stroke-width="1.8"/><text x="32" y="128" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#334155" transform="rotate(-90 32 128)">Average Unit Cost (£)</text><text x="330" y="232" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#334155">Scale of Output (Units per Year) →</text><path d="M 105 68 Q 325 258 555 78" fill="none" stroke="#2563eb" stroke-width="3.5"/><circle cx="330" cy="161" r="6" fill="#16a34a"/><line x1="330" y1="161" x2="330" y2="205" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,4"/><text x="330" y="148" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#15803d">Minimum Efficient Scale</text><text x="190" y="96" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#1d4ed8">Economies of Scale</text><text x="190" y="113" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#334155">Bulk buying · Tech · Finance</text><text x="190" y="127" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#15803d">Unit Cost FALLS ↓</text><text x="475" y="96" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#b91c1c">Diseconomies of Scale</text><text x="475" y="113" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#334155">Poor comms · Coordination · Alienation</text><text x="475" y="127" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#dc2626">Unit Cost RISES ↑</text></svg>',
      diagramCaption:
        "Crucial axis check: the vertical axis is ALWAYS Average Unit Cost (Total Cost ÷ Output), NEVER Total Cost!",
      workedExamples: [
        {
          title: "Calculating Average Unit Cost across output scales",
          problem:
            "At 4,000 units per month, a kayak factory has Fixed Costs of £36,000 and Variable Cost of £45 per kayak. After expanding with bulk resin contracts and automated moulds to 12,000 units per month, Fixed Costs rise to £60,000 while Variable Cost drops to £38 per kayak. Calculate Average Unit Cost before and after expansion.",
          steps: [
            "**Before (4,000 units)**: Total Cost = {{36000 + (45 * 4000) = 216000}} (£216,000). Average Unit Cost = {{216000 / 4000 = 54}} (**£54.00** per kayak).",
            "**After (12,000 units)**: Total Cost = {{60000 + (38 * 12000) = 516000}} (£516,000). Average Unit Cost = {{516000 / 12000 = 43}} (**£43.00** per kayak).",
            "Notice Total Cost rose (£216k → £516k), **yet Average Unit Cost fell by £11.00** due to technical and purchasing economies of scale!",
          ],
          answer: "Average Unit Cost falls from £54.00 to £43.00 per kayak.",
          yourTurn: {
            question:
              "A pottery studio incurs Fixed Costs of £9,000 and Variable Costs of £15,000 when producing 1,200 bowls. Calculate the Average Unit Cost per bowl (in £).",
            answer: { type: "number", value: 20, display: "£20" },
            solution:
              "Total Cost = £9,000 + £15,000 = £24,000. Average Unit Cost = £24,000 ÷ 1,200 = £20.",
          },
        },
      ],
      keyPoints: [
        "Always write **average cost per unit** (`Total Cost ÷ Output`) when defining economies or diseconomies of scale!",
        "**Internal** economies come from the firm's *own* growth; **External** economies come from the *industry/region* growing.",
        "**Diseconomies of scale** stem from **3 C's**: **C**ommunication breakdown, **C**oordination failure, and **C**og-in-a-machine worker alienation.",
        "**Quality Control** inspects finished goods at the *end* (wasteful scrap); **Quality Assurance / TQM** embeds zero-defect self-checking at *every stage*.",
      ],
      whyItWorks:
        "Lower average unit cost gives a business a strategic choice: either undercut rivals on price to win elastic market share, OR keep prices steady and pocket a wider Gross/Operating Profit Margin!",
      strategies: [
        "How can a small Paper 1 sole trader survive against a giant supermarket with huge purchasing economies of scale? **Personal bespoke service, niche specialisation, convenience and artisan quality**!",
        "Link **TQM** to **JIT**: JIT cannot function if defective parts arrive at the line with zero spares — so lean firms need TQM!",
      ],
      thinkDeeper:
        "How can **decentralisation**, **delayering** and modern collaboration software shift the Diseconomies of Scale upward curve further to the right for a global multinational?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Market orientation vs Product orientation",
        back: "**Market-orientated** firms research customer wants *first* before designing products. **Product-orientated** firms invent/build the product *first* and then seek buyers.",
      },
      {
        front: "Primary (Field) vs Secondary (Desk) Market Research",
        back: "**Primary** = new first-hand data (surveys, focus groups, test marketing — tailored but costly). **Secondary** = existing data (census, market reports — fast/cheap but possibly outdated).",
      },
      {
        front: "Quantitative vs Qualitative research data",
        back: "**Quantitative** = numerical/statistical (*what %*). **Qualitative** = in-depth opinions, feelings and *why* consumers behave that way.",
      },
      {
        front: "Formula for Market Share (%)",
        back: "**Market Share = (Firm's Sales ÷ Total Market Sales) × 100**.",
      },
      {
        front: "Price Elastic vs Price Inelastic Demand — Revenue rule!",
        back: "**Price Elastic (`|PED| > 1`)**: cut price → revenue rises; raise price → revenue falls. **Price Inelastic (`|PED| < 1`)**: raise price → revenue rises.",
      },
      {
        front: "Boston Matrix: Star vs Cash Cow",
        back: "**Star** = High Market Share + High Market Growth (needs heavy investment). **Cash Cow** = High Market Share + Low Market Growth (mature net cash generator).",
      },
      {
        front: "Boston Matrix: Question Mark vs Dog",
        back: "**Question Mark (Problem Child)** = Low Share + High Growth (risky cash user). **Dog** = Low Share + Low Growth (consider phasing out unless profitable niche).",
      },
      {
        front: "Product Life Cycle stages & Extension Strategies",
        back: "**Development → Introduction → Growth → Maturity → Decline**. **Extension strategies** (new flavours, rebranding, new markets) launch at Maturity to prevent Decline.",
      },
      {
        front: "Price Skimming vs Penetration Pricing",
        back: "**Skimming** = high initial price for unique/patented product to milk early adopters. **Penetration** = low launch price to capture mass market share fast.",
      },
      {
        front: "Above-the-Line (ATL) vs Below-the-Line (BTL) Promotion",
        back: "**ATL** = paid mass-media advertising (TV, radio, billboards). **BTL** = targeted direct promotions firm controls directly (BOGOF, vouchers, loyalty schemes, PR).",
      },
      {
        front: "Job vs Batch vs Flow Production",
        back: "**Job** = bespoke single items (high unit cost). **Batch** = groups switched between runs (flexible, changeover downtime). **Flow** = continuous 24/7 mass line (lowest unit cost, rigid).",
      },
      {
        front: "Formula for Labour Productivity",
        back: "**Labour Productivity = Total Output ÷ Number of Workers**.",
      },
      {
        front: "Just-in-Time (JIT) vs Buffer Stock",
        back: "**JIT** orders parts right as needed (zero warehouse stock, frees working capital, vulnerable to supply delays). **Buffer stock** holds safety inventory (insures against delays, ties up cash).",
      },
      {
        front: "Kaizen (Lean Production)",
        back: "Japanese term for **continuous small improvements** suggested by empowered shop-floor employees every day.",
      },
      {
        front: "Economies vs Diseconomies of Scale — exact Grade 9 wording!",
        back: "**Economies of scale**: **average unit cost falls** as output scale expands. **Diseconomies of scale**: **average unit cost rises** past optimal scale due to communication, coordination & morale issues.",
      },
      {
        front: "Quality Control (QC) vs Quality Assurance (QA) / TQM",
        back: "**QC** inspects samples at the **end** of the line (defects already wasted materials). **QA / TQM** builds zero-defect self-checking into **every stage** by every worker.",
      },
    ],
    mustKnow: [
      "Contrast **Primary** and **Secondary** market research, **Quantitative** vs **Qualitative** data, **sampling bias**, and **Mass vs Niche** markets across the 4 segmentation bases.",
      "Calculate **Market Share (%)**, **Market Growth (%)**, and **PED**, and predict whether a price rise or cut increases **Total Revenue**.",
      "Build an integrated **4Ps Marketing Mix** (Product, Price, Place, Promotion) where no single 'P' contradicts the others.",
      "Classify products on the **Boston Matrix** (`Star`, `Cash Cow`, `Question Mark`, `Dog`) and link directly to stages of the **Product Life Cycle** and **Extension Strategies**.",
      "Select and justify **Job, Batch or Flow** production and **Capital- vs Labour-intensive** methods for Paper 1 SMEs vs Paper 2 PLCs.",
      "Calculate **Labour Productivity** (`Total Output ÷ Workers`) and **Average Unit Cost** (`Total Cost ÷ Output`).",
      "Evaluate **Lean Production** (`Kaizen`, `Just-in-Time` vs `buffer stock`, `cell production`) including supply-chain vulnerability.",
      "Distinguish the 6 **Internal Economies of Scale** (purchasing, technical, managerial, financial, marketing, risk-bearing) from **External Economies** and the 3 **Diseconomies of Scale**.",
      "Contrast end-of-line **Quality Control** with every-stage **Quality Assurance** and cultural **Total Quality Management (TQM)**.",
      "Apply Edexcel 4BS1 command words accurately: **Define/State** (AO1), **Outline** (2 marks = point + case context!), **Analyse** (6 marks = 2 contextualised chains), **Assess** (9 marks) and **Evaluate** (12 marks).",
      "Deploy **AJIM** on 9- and 12-mark Marketing/Operations essays: **A**nswer clearly, **J**ustify in case context, **I**t depends on (PED, rival reaction, supplier reliability, staff culture, cash budget), **M**ost important factor.",
    ],
    misconceptions: [
      {
        wrong:
          "Never write: 'Diseconomies of scale happen when a firm grows so big that its total costs increase.'",
        right:
          "Write instead (Grade 9): 'Total costs ALWAYS rise when output rises! **Diseconomies of scale** mean **average cost per unit** (`Total Cost ÷ Output`) rises as excessive size causes communication, coordination and motivation problems.'",
      },
      {
        wrong:
          "Never write: 'Quality Control and Quality Assurance both mean inspectors checking products at the end of the factory line.'",
        right:
          "Write instead (Grade 9): '**Quality Control** inspects finished samples **at the end** of production (after waste has occurred), whereas **Quality Assurance / TQM** embeds self-checking standards **at every stage** to prevent defects before they happen.'",
      },
      {
        wrong:
          "Never write: 'Cutting prices always increases Total Revenue and Profit.'",
        right:
          "Write instead (Grade 9): 'Cutting prices only increases Total Revenue if demand is **price elastic** (`|PED| > 1`). If demand is **price inelastic**, cutting prices *reduces* Total Revenue — and even with elastic demand, higher output raises Total Variable Costs!'",
      },
      {
        wrong:
          "Never write: 'A Star in the Boston Matrix generates the biggest net cash surplus because market growth is high.'",
        right:
          "Write instead (Grade 9): 'Mature **Cash Cows** (high share, low growth) generate the biggest **net cash surplus** because promotion needs are modest. **Stars** earn high revenue *but* consume heavy cash on promotion and capacity to keep up with rapid market growth.'",
      },
      {
        wrong:
          "Never write: 'Primary research is when you research your most important rival's published website first.'",
        right:
          "Write instead (Grade 9): 'Reading existing websites or reports is **Secondary (desk) research** even if you do it first! **Primary (field) research** means collecting brand-new first-hand data directly from respondents.'",
      },
      {
        wrong:
          "Never write: 'Factory A produced 10,000 shoes and Factory B produced 8,000 shoes, so Factory A definitely has higher labour productivity.'",
        right:
          "Write instead (Grade 9): '10,000 shoes is **Total Output**, not productivity! **Labour Productivity = Total Output ÷ Number of Workers**: if Factory A used 200 workers (`50/worker`) and Factory B used 100 workers (`80/worker`), Factory B is far more productive!'",
      },
      {
        wrong:
          "Never write: 'Just-in-Time (JIT) lets a manufacturer win huge bulk-buying economies of scale.'",
        right:
          "Write instead (Grade 9): '**JIT** orders **frequent small deliveries** right as needed, which often *sacrifices* bulk-buying discounts and raises delivery frequency in exchange for near-zero warehouse storage costs.'",
      },
    ],
    examMistakes: [
      "Writing *'costs fall'* instead of **'average unit costs fall'** on Economies of Scale questions — Edexcel examiners dock marks immediately for omitting *unit/average*!",
      "Recommending **Flow production** or **£5m national TV ads** in Paper 1 for a tiny 8-person artisan business that lacks capital and sells bespoke goods.",
      "Confusing **Price Skimming** (high launch price on innovative product) with **Predatory Pricing** (illegal below-cost pricing to bankrupt a competitor).",
      "Recommending **JIT** for a manufacturer that imports components across 8,000 miles with frequent port delays without flagging the line-stoppage risk.",
      "Claiming **Market Share rose** just because a firm's own sales grew by 5% — if the whole market grew by 20%, the firm's market share actually *fell*!",
      "Forgetting that switching to **Quality Assurance / TQM** requires **staff training** and democratic buy-in — demotivated Taylor-style piece-rate workers may resist extra inspection duties.",
      "Ignoring how the **4Ps interact** (e.g. cutting price by 50% on a luxury watch destroys brand exclusivity).",
      "Leaving out context in **Outline (2-mark)** questions — in Edexcel 4BS1, 1 of the 2 marks on every Outline question is strictly reserved for AO2 case context!",
    ],
    mnemonics: [
      {
        topic: "6 Internal Economies of Scale",
        device: "Really Fun Monkeys Play Tennis Monthly",
        explanation:
          "**R**isk-bearing · **F**inancial · **M**anagerial · **P**urchasing (bulk-buying) · **T**echnical · **M**arketing.",
      },
      {
        topic: "3 Diseconomies of Scale",
        device: "3 C's — Communication · Coordination · Cog-in-a-Machine (Demotivation)",
        explanation:
          "Tall hierarchies distort **C**ommunication, sprawling departments lose **C**oordination, and alienated workers feel like **C**ogs.",
      },
      {
        topic: "PED Revenue Direction",
        device: "Inelastic = IN-step with Price · Elastic = Opposite to Price",
        explanation:
          "When demand is **Inelastic**, Price ↑ makes Revenue ↑ (move in step). When **Elastic**, Price ↓ makes Revenue ↑ (move opposite).",
      },
      {
        topic: "QC vs QA",
        device: "Control = Catch at the End · Assurance = All Along the Line",
        explanation:
          "**Quality Control** catches defects at the end; **Quality Assurance** prevents defects at every stage all along the line.",
      },
    ],
    realWorld: [
      {
        title: "Toyota Production System: Birthplace of Kaizen & JIT",
        detail:
          "Toyota pioneered Lean manufacturing in post-war Japan — combining Just-in-Time component deliveries, *Kaizen* daily worker suggestions, and *Jidoka* (any worker can pull the Andon cord to stop the line the instant a defect appears).",
        emoji: "🚗",
      },
      {
        title: "Apple Inc.'s Boston Matrix Ecosystem",
        detail:
          "Mature high-share **Cash Cows** (iPhone upgrades) generate tens of billions in free cash flow to fund fast-growing **Stars** (Apple Services / Wearables) and high-risk R&D **Question Marks** (spatial computing / AI silicon).",
        emoji: "📱",
      },
      {
        title: "Lucozade's Textbook Extension Strategy",
        detail:
          "Facing decline as a traditional chemist tonic wrapped in orange cellophane for sick children, Lucozade rebranded as an isotonic sports performance drink endorsed by elite athletes — launching decades of fresh growth.",
        emoji: "⚡",
      },
      {
        title: "Gymshark: Direct-to-Consumer Place & Influencer BTL",
        detail:
          "Founded in a UK garage, Gymshark bypassed traditional sports wholesalers/retailers entirely — using direct e-commerce (**Place**) and fitness influencer partnerships (**Below-the-Line Promotion**) to reach £500m+ revenue.",
        emoji: "🏋️",
      },
      {
        title: "Morgan Motor Company vs Tesla Gigafactory",
        detail:
          "In Malvern, craftspeople hand-shape ash wood and aluminium sports cars using **Job/Batch production** (waiting lists & bespoke luxury prices), while Tesla's Gigafactories deploy mega-castings and robotics in **Flow production** to slash EV unit costs.",
        emoji: "🏭",
      },
    ],
    videos: [
      {
        title: "Edexcel IGCSE Business 4BS1 — Market Research, Segmentation & PED",
        channel: "TakingTheBiz / Tutor2u Search",
        url: "https://www.youtube.com/results?search_query=Edexcel+IGCSE+Business+Market+Research+Segmentation+PED+4BS1",
      },
      {
        title: "The 4Ps Marketing Mix, Boston Matrix & Product Life Cycle — IGCSE Business",
        channel: "Edexcel IGCSE Business Marketing Search",
        url: "https://www.youtube.com/results?search_query=Edexcel+IGCSE+Business+4Ps+Boston+Matrix+Product+Life+Cycle",
      },
      {
        title: "Job, Batch & Flow Production + Lean Production (JIT & Kaizen) — 4BS1",
        channel: "TakingTheBiz / Bizconsesh Search",
        url: "https://www.youtube.com/results?search_query=Edexcel+IGCSE+Business+Job+Batch+Flow+Lean+JIT+Kaizen",
      },
      {
        title: "Economies & Diseconomies of Scale + Quality Control vs TQM — IGCSE Business",
        channel: "Edexcel IGCSE Business Operations Search",
        url: "https://www.youtube.com/results?search_query=Edexcel+IGCSE+Business+Economies+of+Scale+Quality+Control+Quality+Assurance+TQM",
      },
    ],
    formulas: [
      {
        name: "Market Share (%)",
        formula: "{{\"Market Share\" = (\"Firm's Sales\") / (\"Total Market Sales\") * 100}}",
        note: "Can be measured by revenue (£) or volume (units); round to 2 d.p.",
      },
      {
        name: "Market Growth (%)",
        formula: "{{\"Market Growth\" = (\"Change in Market Size\") / (\"Original Market Size\") * 100}}",
        note: "Positive in growing markets (Stars/Question Marks); near zero/negative in mature/declining markets.",
      },
      {
        name: "Price Elasticity of Demand (PED)",
        formula: "{{\"PED\" = (\"% Change in Quantity Demanded\") / (\"% Change in Price\")}}",
        note: "|PED| > 1 = Price Elastic; |PED| < 1 = Price Inelastic.",
      },
      {
        name: "Total Revenue",
        formula: "{{\"Total Revenue\" = \"Selling Price\" * \"Quantity Sold\"}}",
        note: "Rises on price hike if inelastic; rises on price cut if elastic.",
      },
      {
        name: "Cost-Plus Selling Price",
        formula: "{{\"Selling Price\" = \"Unit Cost\" * (1 + (\"Markup %\") / 100)}}",
        note: "Adds a fixed percentage profit markup onto total unit cost.",
      },
      {
        name: "Firm's Sales from Market Share",
        formula: "{{\"Firm's Sales\" = (\"Market Share %\" / 100) * \"Total Market Sales\"}}",
        note: "Reverse market-share formula frequently tested in Paper 1 & Paper 2.",
      },
      {
        name: "Labour Productivity",
        formula: "{{\"Labour Productivity\" = (\"Total Output\") / (\"Number of Workers\")}}",
        note: "Output per worker per time period (e.g. units per worker per week).",
      },
      {
        name: "Total Output from Productivity",
        formula: "{{\"Total Output\" = \"Labour Productivity\" * \"Number of Workers\"}}",
        note: "Rearrangement used to forecast capacity after hiring or training.",
      },
      {
        name: "Total Cost",
        formula: "{{\"Total Cost\" = \"Fixed Costs\" + (\"Variable Cost per Unit\" * \"Output\")}}",
        note: "Total Cost always increases with Output — never confuse with Average Unit Cost!",
      },
      {
        name: "Average Unit Cost",
        formula: "{{\"Average Unit Cost\" = (\"Total Cost\") / (\"Output\")}}",
        note: "Falls under Economies of Scale; rises under Diseconomies of Scale.",
      },
      {
        name: "Labour Cost per Unit",
        formula: "{{\"Labour Cost per Unit\" = (\"Wage per Worker\") / (\"Labour Productivity\")}}",
        note: "Shows why raising productivity lowers unit cost even if wages hold steady.",
      },
      {
        name: "Defect / Scrap Rate (%)",
        formula: "{{\"Defect Rate\" = (\"Defective Units\") / (\"Total Units Produced\") * 100}}",
        note: "Driven towards 0% under Quality Assurance and Total Quality Management (TQM).",
      },
    ],
  },
};
