import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "location-globalisation-external",
  title: "Location, Globalisation, Policy & External Factors",
  strand: "Activity & External",
  icon: "🌐",
  summary:
    "Master location trade-offs, multinational pros and cons for host countries, SPICED/WPIDEC exchange-rate conversions, tariffs, interest rates, taxation and PESTLE ethics.",
  intro:
    "No business operates inside a bubble. Whether it is a **Paper 1** 14-staff craft exporter in Cornwall hit by a **strong pound (SPICED)** or a **Paper 2** multinational (`>250` employees) opening an assembly plant in Vietnam to bypass import tariffs, external forces — **location, globalisation, exchange rates, central-bank interest rates, government taxes and PESTLE shocks** — can double or wipe out profit margins overnight.",
  guide: [
    {
      id: "location-decisions",
      heading: "Business location decisions",
      discovery: {
        problem:
          "Why does a luxury hairdresser happily pay £75,000 a year in city-centre high-street rent for a tiny shopfront, whereas a steelworks locates 40 miles out of town beside a deep-water port, and a graphic-design agency works from a converted barn in rural Wales?",
        idea:
          "Optimal location depends on the **nature of the business activity**! Services needing face-to-face walk-in footfall (**hairdresser**) must locate **close to the market** despite high rent; **bulk-reducing heavy manufacturers** (**steelworks**) locate near **ports/raw materials** and cheap industrial land; **footloose digital services** (**design agency**) only need fast **broadband infrastructure** and low overheads.",
      },
      body: `Choosing where to locate — domestically or internationally — is a long-term strategic commitment because relocating factories or breaking commercial leases is expensive and disruptive.

### Core Factors Influencing Location Decisions

| Location Factor | When It Dominates | Paper 1 SME vs Paper 2 Large Business Contrast |
|---|---|---|
| **Proximity to Market (Customers)** | High-street retail, cafés, hair salons, fresh food & urgent local repairs. | **Paper 1** local café lives or dies by pedestrian footfall; **Paper 2** global e-commerce warehouse locates near motorway hubs instead of high streets. |
| **Proximity to Raw Materials** | **Bulk-reducing** heavy industries (steel, timber mills, sugar refining, quarries) where raw inputs are heavier or more perishable than finished goods. | Rarely applies to high-street SMEs; decisive for **Paper 2** mining, food-processing and chemical plants. |
| **Availability & Cost of Labour** | Labour-intensive assembly (low-wage regions/countries) vs high-tech R&D needing university graduates (Cambridge, Singapore, Silicon Valley). | **Paper 1** artisan hires locally; **Paper 2** MNC splits R&D (high-skill hub) from manufacturing (lower-wage economy). |
| **Land / Rent Costs** | Warehousing, car showrooms, solar farms and low-margin factories needing large floor area. | Start-ups often trade from home or out-of-town industrial estates to keep fixed costs and break-even low. |
| **Transport & Digital Infrastructure** | Motorways, container ports, airports and fibre broadband (**footloose** cloud/remote firms). | Fast broadband lets **Paper 1** online boutiques sell globally without paying prime high-street rent! |
| **Proximity to Competitors** | **Clustering** works for restaurants, car dealerships and fashion streets (comparison shopping attracts crowds), whereas convenience stores avoid sitting next door to rivals. | Independent cafés often cluster near cinemas/offices; supermarkets map competitor catchment zones carefully. |
| **Government Grants, Taxes & Laws** | Enterprise zones, regional development subsidies (areas of high unemployment), lower corporation tax or looser planning laws abroad. | Regional grants lower capital start-up costs and attract **Foreign Direct Investment (FDI)** from large MNCs. |`,
      diagram: `<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Decision matrix matching three business types to their decisive location drivers">
  <rect x="8" y="8" width="624" height="224" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="320" y="33" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Matching Business Activity to Primary Location Drivers</text>
  <rect x="24" y="52" width="186" height="158" rx="11" fill="var(--surface)" stroke="var(--brand)" stroke-width="2"/>
  <text x="117" y="75" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">High-Street Service / Retail</text>
  <text x="117" y="95" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">(Salon, Bakery, Boutique)</text>
  <text x="117" y="120" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">1. Pedestrian Footfall</text>
  <text x="117" y="141" text-anchor="middle" font-size="11" fill="var(--ink)">2. Parking &amp; Public Transit</text>
  <text x="117" y="162" text-anchor="middle" font-size="11" fill="var(--ink)">3. Complementary Cluster</text>
  <text x="117" y="191" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">Accepts high rent per sq m</text>
  <rect x="227" y="52" width="186" height="158" rx="11" fill="var(--surface)" stroke="var(--accent)" stroke-width="2"/>
  <text x="320" y="75" text-anchor="middle" font-size="12" font-weight="800" fill="var(--warn)">Heavy Manufacturing</text>
  <text x="320" y="95" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">(EV Plant, Steel, Canning)</text>
  <text x="320" y="120" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">1. Cheap Large Land Plot</text>
  <text x="320" y="141" text-anchor="middle" font-size="11" fill="var(--ink)">2. Ports / Motorway Links</text>
  <text x="320" y="162" text-anchor="middle" font-size="11" fill="var(--ink)">3. Skilled Manual Labour &amp; Grants</text>
  <text x="320" y="191" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">Lowers unit transport &amp; fixed cost</text>
  <rect x="430" y="52" width="186" height="158" rx="11" fill="var(--surface)" stroke="var(--good)" stroke-width="2"/>
  <text x="523" y="75" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">Footloose / E-Commerce</text>
  <text x="523" y="95" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">(SaaS App, Online Retailer)</text>
  <text x="523" y="120" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">1. Fibre Cloud Broadband</text>
  <text x="523" y="141" text-anchor="middle" font-size="11" fill="var(--ink)">2. Courier Hub Access</text>
  <text x="523" y="162" text-anchor="middle" font-size="11" fill="var(--ink)">3. Low-Rent Office / Remote</text>
  <text x="523" y="191" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">Minimises break-even output</text>
</svg>`,
      diagramCaption:
        "Never apply a one-size-fits-all location checklist: diagnose whether the case-study firm relies on walk-in footfall, heavy logistics or digital connectivity.",
      workedExamples: [
        {
          title: "Comparing High-Street vs Out-of-Town Site Profitability",
          problem:
            "Loom & Thread Ltd (a 16-staff sofa maker) compares **Site City** (annual rent £96,000; forecast sales 400 sofas at £900 each) and **Site Retail Park** (annual rent £42,000 + £14,000 extra local delivery van costs; forecast sales 370 sofas at £900 each). Variable manufacturing cost is **£500 per sofa** at both sites, and other fixed wages are **£80,000**. Calculate annual operating profit at each site and identify the more profitable location.",
          steps: [
            "Contribution per sofa at both sites = {{£900 - £500 = £400}}.",
            "**Site City:** Total contribution = {{400 * £400 = £160000}}. Fixed costs = {{£96000 + £80000 = £176000}} → Operating loss = {{£160000 - £176000 = -£16000}}!",
            "**Site Retail Park:** Total contribution = {{370 * £400 = £148000}}. Fixed costs = {{£42000 + £14000 + £80000 = £136000}} → Operating profit = {{£148000 - £136000 = +£12000}}.",
          ],
          answer: "Site Retail Park (£12,000 profit vs £16,000 loss at Site City — £28,000 better despite 30 fewer sales!).",
          yourTurn: {
            question:
              "A bakery compares Town Centre (rent £54,000; annual contribution from sales £130,000) and Edge-of-Town (rent £22,000; annual contribution from sales £108,000). Other fixed wages are £60,000 at both sites. How much higher is annual operating profit at Edge-of-Town than Town Centre, in £?",
            answer: { type: "number", value: 10000, display: "£10,000" },
            solution:
              "Town Centre profit = £130,000 − £54,000 − £60,000 = £16,000. Edge-of-Town profit = £108,000 − £22,000 − £60,000 = £26,000. Difference = £26,000 − £16,000 = £10,000.",
          },
        },
      ],
      keyPoints: [
        "Always weigh the **cost vs revenue trade-off**: cheap rent in a remote industrial estate saves fixed costs, but can destroy walk-in sales for a retail café.",
        "**Footloose businesses** are not tied to raw materials or walk-in markets and can locate wherever digital infrastructure, skills and rents are best.",
        "**Government regional grants** reduce upfront capital costs to lure businesses to high-unemployment areas — but verify whether local workers actually possess the required skills!",
      ],
      whyItWorks:
        "Location fixes both a firm's **monthly fixed cost floor** (rent/rates) and its **natural demand ceiling** (footfall/logistics speed); getting the trade-off right lowers break-even output while protecting customer convenience.",
      strategies: [
        "In 9-mark location questions, pit **Fixed Cost Savings** (Site X) against **Revenue/Footfall/Skill Access** (Site Y), then use **e-commerce/delivery** in your AJIM conclusion!",
      ],
      thinkDeeper:
        "Why do five rival luxury watch boutiques deliberately open on the *exact same* Bond Street block rather than spreading five miles apart across London?",
    },
    {
      id: "globalisation-mncs",
      heading: "Globalisation & multinationals (MNCs)",
      discovery: {
        problem:
          "An American sportswear giant opens a 3,500-worker shoe factory in Vietnam, paying 18% above the local factory average wage. Why do Vietnamese trade ministers welcome the factory on television while owners of small Vietnamese family shoe workshops protest?",
        idea:
          "**Multinational Corporations (MNCs)** bring **Foreign Direct Investment (FDI)**, thousands of formal jobs, export revenue and modern factory training to the **host country** — yet simultaneously outspend local SMEs for skilled workers, squeeze domestic workshops out of business through economies of scale, and often **repatriate profits** back to headquarters!",
      },
      body: `**Globalisation** is the growing integration and interdependence of the world's economies through cross-border trade in goods and services, capital flows, technology and labour migration.

*(Crucial Definition: A **Multinational Corporation (MNC)** produces or operates facilities in **more than one country** — a firm that merely exports from a single UK factory is an **exporter**, NOT an MNC!)*

### Four Key Drivers of Globalisation
1. **Transport breakthroughs:** Containerisation and wide-body air freight slashed per-unit shipping costs across oceans.
2. **Digital & communications tech:** Instant e-commerce, cloud software and video calls let firms coordinate global supply chains in real time.
3. **Deregulation & Trade Blocs:** WTO tariff reductions and free-trade blocs (EU, ASEAN, USMCA) removed customs barriers between member states.
4. **saturating domestic markets & emerging middle classes:** Rapidly rising incomes across Asia and Latin America created vast new consumer markets.

### Impacts of MNCs / FDI on Host Countries (Classic Paper 2 9/12-Mark Essay!)

| Positive Impacts on Host Country | Negative Impacts on Host Country |
|---|---|
| **Job creation & higher incomes:** Reduces unemployment; wages often exceed informal local alternatives, triggering a local multiplier effect in shops. | **Profit repatriation:** Majority of operating profits are sent back to shareholders in the MNC's home country rather than reinvested locally. |
| **Skills & technology transfer:** Trains local engineers, managers and domestic component suppliers in lean/quality methods. | **Squeezing local SMEs:** Huge purchasing and marketing economies of scale drive smaller domestic competitors out of business. |
| **Tax revenue & infrastructure:** Pays host corporation/payroll taxes and often funds better roads, ports or power grids. | **Tax avoidance & footloose exit:** Transfer pricing shifts profits to low-tax havens, and MNCs may abruptly close plants if cheaper countries emerge. |
| **Improved Balance of Payments:** Exporting finished goods from the host factory earns foreign currency for the host nation. | **Environmental & labour exploitation:** Weak host regulations can tempt unethical MNCs to pollute rivers, deplete resources or run long-hour sweatshops. |`,
      diagram: `<svg viewBox="0 0 640 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Balance scale comparing MNC inflows to a host country against outflows and local costs">
  <rect x="8" y="8" width="624" height="229" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="320" y="33" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">MNC Foreign Direct Investment (FDI) Impact on a Host Country</text>
  <rect x="26" y="52" width="276" height="166" rx="11" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2"/>
  <text x="164" y="75" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">HOST COUNTRY GAINS (+)</text>
  <text x="44" y="100" font-size="11" font-weight="700" fill="var(--ink)">• Direct &amp; supplier jobs (multiplier)</text>
  <text x="44" y="123" font-size="11" fill="var(--ink)">• Modern tech &amp; manager training</text>
  <text x="44" y="146" font-size="11" fill="var(--ink)">• Host tax receipts &amp; port/road upgrades</text>
  <text x="44" y="169" font-size="11" fill="var(--ink)">• Export earnings &amp; wider consumer choice</text>
  <text x="164" y="199" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">Strongest when MNC sources components locally</text>
  <rect x="338" y="52" width="276" height="166" rx="11" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="2"/>
  <text x="476" y="75" text-anchor="middle" font-size="12" font-weight="800" fill="var(--bad)">HOST COUNTRY RISKS (−)</text>
  <text x="356" y="100" font-size="11" font-weight="700" fill="var(--ink)">• Profit repatriation to foreign HQ</text>
  <text x="356" y="123" font-size="11" fill="var(--ink)">• Domestic SMEs priced out of market</text>
  <text x="356" y="146" font-size="11" fill="var(--ink)">• Pollution &amp; resource depletion</text>
  <text x="356" y="169" font-size="11" fill="var(--ink)">• Transfer pricing &amp; footloose closure</text>
  <text x="476" y="199" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">Worst when host labour/green laws are weak</text>
</svg>`,
      diagramCaption:
        "Examiners love asking whether a host government should subsidise a giant MNC factory: weigh jobs, skills transfer and exports against profit repatriation, SME closures and environmental strain.",
      workedExamples: [
        {
          title: "Host-Country Net Economic Retention vs Profit Repatriation",
          problem:
            "GlobalAuto Plc builds an assembly plant in Country H. In Year 1 the plant generates **$120 million** in export revenue, pays **$38 million** in local wages and **$26 million** to domestic Country H component suppliers, imports **$20 million** of steel from abroad, pays **15% host corporation tax** on its operating profit, and **repatriates 80%** of after-tax profit to its European headquarters. Calculate how much after-tax profit ($ millions) is repatriated abroad.",
          steps: [
            "Plant operating costs = {{$38m + $26m + $20m = $84m}}.",
            "Operating profit in Country H = {{$120m - $84m = $36m}}.",
            "Host corporation tax (15%) = {{$36m * 0.15 = $5.4m}}, leaving after-tax profit = {{$36m - $5.4m = $30.6m}}.",
            "Profit repatriated to headquarters (80%) = {{$30.6m * 0.80 = $24.48m}} (while {{$6.12m}} is retained in Country H alongside $38m wages, $26m local orders and $5.4m tax!).",
          ],
          answer: "$24.48 million repatriated abroad.",
          yourTurn: {
            question:
              "An MNC subsidiary earns $50 million operating profit in a host country, pays 20% local corporation tax, and repatriates 75% of the remaining after-tax profit to its home headquarters. How many $ millions are repatriated?",
            answer: { type: "number", value: 30, display: "$30 million" },
            solution:
              "After-tax profit = $50m × (1 − 0.20) = $40m. Repatriated amount = $40m × 0.75 = $30 million.",
          },
        },
      ],
      keyPoints: [
        "An **MNC** owns and operates production or service bases in **two or more countries** (not merely exporting!).",
        "Why firms become MNCs: lower labour/land costs, access to growing foreign markets, bypassing **import tariffs/quotas** by producing inside a trade bloc, and spreading risk across economies.",
        "Always include **profit repatriation** and **squeezing local SMEs** when evaluating MNC drawbacks on Paper 2.",
      ],
      whyItWorks:
        "Globalisation lets firms slice their value chain across borders — placing R&D in high-skill hubs, manufacturing in cost-efficient industrial zones, and retail wherever consumer demand grows fastest.",
      strategies: [
        "In 12-mark host-country evaluations, use **government bargaining conditions** in your AJIM conclusion (e.g. requiring local component sourcing, training quotas and strict emissions rules before granting tax holidays).",
      ],
      thinkDeeper:
        "Why might a Japanese carmaker build a factory *inside* the European Union even though factory wages in the EU are higher than in parts of Asia?",
    },
    {
      id: "trade-exchange-rates",
      heading: "International trade & exchange rates (SPICED / WPIDEC)",
      discovery: {
        problem:
          "Last month £1 bought $1.20. Today the pound strengthens so £1 buys $1.50. Cotswold Wool Ltd exports a jumper priced at £80 in the UK to New York boutiques, while importing zip fasteners priced at $15 per pack from Chicago. Without changing its £80 UK price or the supplier's $15 US price, who celebrates today and who panics?",
        idea:
          "**Buying zip imports gets cheaper** ($15 cost {{15 / 1.20 = £12.50}} last month, now {{15 / 1.50 = £10.00}}!), whereas **New York buyers see the £80 jumper jump in dollar price** from {{80 * 1.20 = $96}} to {{80 * 1.50 = $120}}! That is **SPICED**: **S**trong **P**ound **I**mports **C**heaper **E**xports **D**earer!",
      },
      body: `### Imports, Exports & Protectionism (Tariffs vs Quotas)
- **Exports:** Goods/services produced domestically and sold to overseas buyers (money flows **into** the home economy).
- **Imports:** Goods/services bought from overseas producers (money flows **out** of the home economy).
- **Tariff:** A **tax / customs duty** on imported goods (e.g. a {{20%}} tariff raises a £10,000 imported machine's landed cost to {{£12000}}), making imports less price-competitive and raising government tax revenue.
- **Quota:** A strict **physical limit** on the maximum quantity/volume of a product allowed into a country per year (generates **zero** government tax revenue, creates scarcity and pushes prices up).

### Currency Conversion Rules (Never Multiply When You Should Divide!)
Suppose the exchange rate is quoted as **£1 = $1.25** (1 unit of Home Currency = *R* units of Foreign Currency):
- **Home (£) → Foreign ($):** **Multiply** by the rate → {{£200 * 1.25 = $250}}.
- **Foreign ($) → Home (£):** **Divide** by the rate → {{$250 / 1.25 = £200}}.

### Appreciation (SPICED) vs Depreciation (WPIDEC)

| Currency Movement | Mnemonic | Effect on Importers | Effect on Exporters |
|---|---|---|---|
| **Appreciation** (e.g. £1 rises from $1.20 to $1.40) | **SPICED**: **S**trong **P**ound **I**mports **C**heaper **E**xports **D**earer | Raw materials & stock imported from abroad cost **fewer £**, lowering Cost of Sales and boosting **Gross Profit Margin**. | Foreign buyers pay **more foreign currency** for UK exports → export sales volume falls (or UK firm must cut its £ price and sacrifice margin). |
| **Depreciation** (e.g. £1 falls from $1.40 to $1.15) | **WPIDEC**: **W**eak **P**ound **I**mports **D**earer **E**xports **C**heaper | Imported energy, components & stock cost **more £**, squeezing profit margins or forcing domestic retail price rises (imported inflation). | UK exports become **cheaper in foreign currency**, boosting export demand and international price competitiveness! |

**Grade 9 Nuance — Price Elasticity of Demand (PED):** If a firm exports a unique, patented luxury or medical device (**price inelastic demand**), an appreciating currency (**SPICED**) barely dents export volume because foreign buyers have no close substitutes!`,
      diagram: `<svg viewBox="0 0 640 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SPICED versus WPIDEC diagram showing currency conversion formulas and importer versus exporter profit effects">
  <rect x="8" y="8" width="624" height="229" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Exchange-Rate Cheat Sheet: Conversion + SPICED vs WPIDEC</text>
  <rect x="24" y="46" width="592" height="40" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="320" y="71" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">When £1 = $1.25:   £ → $ MULTIPLY (× 1.25)   •   $ → £ DIVIDE (÷ 1.25)   •   Tariff = Import Value × Tariff %</text>
  <rect x="24" y="98" width="286" height="124" rx="10" fill="var(--surface)" stroke="var(--brand)" stroke-width="2"/>
  <text x="167" y="120" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--brand)">APPRECIATION: S P I C E D</text>
  <text x="167" y="139" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Strong Pound (£1: $1.20 → $1.45)</text>
  <text x="40" y="162" font-size="11" fill="var(--good)">✓ Imports Cheaper (lower £ raw material cost)</text>
  <text x="40" y="183" font-size="11" fill="var(--bad)">✗ Exports Dearer (hurt export competitiveness)</text>
  <text x="40" y="204" font-size="10.5" fill="var(--ink-2)">• Foreign tourists find visiting the UK dearer</text>
  <rect x="330" y="98" width="286" height="124" rx="10" fill="var(--surface)" stroke="var(--accent)" stroke-width="2"/>
  <text x="473" y="120" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--warn)">DEPRECIATION: W P I D E C</text>
  <text x="473" y="139" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Weak Pound (£1: $1.45 → $1.15)</text>
  <text x="346" y="162" font-size="11" fill="var(--bad)">✗ Imports Dearer (higher £ component bills)</text>
  <text x="346" y="183" font-size="11" fill="var(--good)">✓ Exports Cheaper (boosts overseas orders)</text>
  <text x="346" y="204" font-size="10.5" fill="var(--ink-2)">• Inbound tourism to the UK surges!</text>
</svg>`,
      diagramCaption:
        "Write SPICED in the margin of your exam paper the instant an exchange-rate question appears — and check whether the case-study firm BOTH imports raw materials AND exports finished goods!",
      workedExamples: [
        {
          title: "Multi-Step Exchange-Rate & Tariff Margin Calculation",
          problem:
            "BritAudio Ltd imports speaker cones from the USA priced at **$60 per set** (plus a **10% UK import tariff**) and exports finished amplifiers to Germany priced at **£400 each**. Last quarter **£1 = $1.20** and **£1 = €1.15**. Today the pound **appreciates** to **£1 = $1.50** and **£1 = €1.30**. Calculate (a) the £ saving per imported cone set including the 10% tariff, and (b) the € price increase per amplifier for German buyers.",
          steps: [
            "Part (a) Old £ cost per cone set before tariff = {{$60 / 1.20 = £50}}; with 10% tariff = {{£50 * 1.10 = £55.00}}.",
            "New £ cost before tariff = {{$60 / 1.50 = £40}}; with 10% tariff = {{£40 * 1.10 = £44.00}}. Saving = {{£55.00 - £44.00 = £11.00}} per set (**Imports Cheaper!**).",
            "Part (b) Old German export price = {{£400 * 1.15 = €460}}. New German price = {{£400 * 1.30 = €520}}. Increase = {{€520 - €460 = €60}} dearer per amplifier (**Exports Dearer!**).",
          ],
          answer: "(a) £11.00 saved per imported set; (b) €60 dearer per exported amplifier.",
          yourTurn: {
            question:
              "A UK café imports espresso machines from Italy priced at €1,800 each. If the exchange rate is £1 = €1.20 and there is a 10% import tariff, what is the total cost of one machine in £ (including the tariff)?",
            answer: { type: "number", value: 1650, display: "£1,650" },
            solution:
              "Pre-tariff cost in £ = €1,800 ÷ 1.20 = £1,500. Add 10% tariff (£150): £1,500 × 1.10 = £1,650.",
          },
        },
      ],
      keyPoints: [
        "**Tariff** = tax on imports (raises landed cost & government tax revenue); **Quota** = physical cap on import volume.",
        "**SPICED** (appreciation): **S**trong **P**ound **I**mports **C**heaper **E**xports **D**earer.",
        "**WPIDEC** (depreciation): **W**eak **P**ound **I**mports **D**earer **E**xports **C**heaper.",
        "**Top Evaluation Insight:** Many manufacturers *import* raw materials AND *export* finished goods — so SPICED cuts their Cost of Sales while hurting their export price, partially offsetting the shock!",
      ],
      whyItWorks:
        "An exchange rate is simply the price of one currency in terms of another: when £1 commands more dollars, every dollar invoice shrinks in pounds while every pound invoice swells in dollars.",
      strategies: [
        "Sanity-check conversions: if £1 = $1.25, the number of dollars MUST be **larger** than the number of pounds ($125 > £100)!",
        "Check **PED** and **hedging/foreign factories** when evaluating how badly SPICED hurts an exporter.",
      ],
      thinkDeeper:
        "Why does a sharp depreciation of the pound (**WPIDEC**) delight a Scottish hotel in Edinburgh even though the hotel never ships a physical box abroad?",
    },
    {
      id: "government-policies",
      heading: "Government spending, taxation & interest rates",
      discovery: {
        problem:
          "On Thursday at noon, the central bank raises its base interest rate from 2% to 5.5%. Why do sales of £35,000 family SUVs plunge 22% the next month while discount supermarket own-label pasta sales jump 14%?",
        idea:
          "Higher **interest rates** raise monthly **variable-rate mortgage repayments** (slashing household disposable income) AND make **car-finance credit** expensive — crushing big-ticket **income-elastic luxuries** (SUVs) while pushing families to trade down to **inferior/budget essentials** (own-label pasta)!",
      },
      body: `Governments pursue four macroeconomic goals — **economic growth, low unemployment, low/stable inflation, and a healthy balance of payments** — using **fiscal policy** (taxation & public spending) and **monetary policy** (interest rates).

### Fiscal Policy: Direct vs Indirect Taxes & Government Spending

| Policy Tool | Examples | Impact on Businesses & Consumers |
|---|---|---|
| **Direct Tax: Income Tax** | Tax deducted directly from wages/salaries | Higher income tax cuts **disposable income** → lower consumer spending on non-essential/luxury goods (restaurants, holidays, fashion). |
| **Direct Tax: Corporation Tax** | Tax on company net profits | Higher corporation tax leaves **less retained profit** for R&D, automation or dividends, and may deter inward MNC FDI. |
| **Indirect Tax: VAT / GST & Excise Duties** | Sales tax added to goods/services; fuel/sugar/alcohol duties | Raises retail selling prices (or squeezes margins if firms absorb the tax); hits **price-elastic** products hardest. |
| **Government Spending & Subsidies** | Roads, rail, schools, green grants, R&D tax credits | Creates massive contracts for private construction/IT suppliers, cuts logistics times, and upskills the future workforce. |

### Monetary Policy: How Higher Interest Rates Ripple Through Business
1. **Higher borrowing costs for firms:** Existing overdrafts and variable-rate loans cost more interest (raising finance expenses), while new debt-funded **capital investment** (factories, machinery) is postponed because expected ROCE may no longer beat the loan rate.
2. **Higher reward for saving & lower household disposable income:** Consumers earn more by leaving cash in savings accounts, pay **more on variable-rate home mortgages**, and avoid credit-card/hire-purchase borrowing — cutting demand for **housing, cars, furniture and luxury leisure**.
3. **Currency link:** Higher interest rates attract foreign 'hot money' into domestic banks, often causing the currency to **appreciate (SPICED)** — double trouble for exporters!`,
      diagram: `<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Transmission mechanism showing how a central bank interest rate rise affects households, firms and exchange rates">
  <rect x="8" y="8" width="624" height="224" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Monetary Policy Ripple: Central Bank Raises Interest Rates (e.g. 2% → 5.5%)</text>
  <rect x="215" y="46" width="210" height="36" rx="8" fill="var(--bad)" stroke="var(--bad)"/>
  <text x="320" y="69" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">BASE INTEREST RATE RISES ↑</text>
  <line x1="255" y1="82" x2="115" y2="108" stroke="var(--bad)" stroke-width="2"/>
  <line x1="320" y1="82" x2="320" y2="108" stroke="var(--bad)" stroke-width="2"/>
  <line x1="385" y1="82" x2="525" y2="108" stroke="var(--bad)" stroke-width="2"/>
  <rect x="22" y="110" width="186" height="106" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="115" y="131" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--ink)">1. Firm Finance Costs ↑</text>
  <text x="115" y="151" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Overdraft &amp; variable loan</text>
  <text x="115" y="168" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">interest bills jump; new</text>
  <text x="115" y="185" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">factory investment delayed</text>
  <rect x="227" y="110" width="186" height="106" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="320" y="131" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--ink)">2. Consumer Demand ↓</text>
  <text x="320" y="151" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Mortgage bills ↑ + saving ↑</text>
  <text x="320" y="168" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">+ credit dearer → big-ticket</text>
  <text x="320" y="185" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">luxury/car/home sales fall</text>
  <rect x="432" y="110" width="186" height="106" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="525" y="131" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--ink)">3. Currency &amp; Budget Shift</text>
  <text x="525" y="151" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Hot-money inflows strengthen</text>
  <text x="525" y="168" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">currency (SPICED); budget</text>
  <text x="525" y="185" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--good)">discounters (Aldi) can gain!</text>
</svg>`,
      diagramCaption:
        "Higher interest rates hurt highly geared firms and luxury credit-dependent retailers, while cash-rich firms and discount supermarkets can actually benefit!",
      workedExamples: [
        {
          title: "Interest-Rate Shock & Corporation Tax Impact on Net Profit",
          problem:
            "Crestline Homes Ltd carries a **£1,500,000** variable-rate bank loan. Operating profit is **£320,000**. Last year the loan interest rate was **4%** and corporation tax on profit after interest was **20%**. This year the interest rate rises to **7%** and corporation tax rises to **25%**. Assuming operating profit stays £320,000, calculate how much Crestline's **after-tax profit** falls in £.",
          steps: [
            "**Last year:** Interest = {{£1500000 * 0.04 = £60000}}. Profit before tax = {{£320000 - £60000 = £260000}}. After 20% tax = {{£260000 * (1 - 0.20) = £208000}}.",
            "**This year:** Interest = {{£1500000 * 0.07 = £105000}}. Profit before tax = {{£320000 - £105000 = £215000}}. After 25% tax = {{£215000 * (1 - 0.25) = £161250}}.",
            "Fall in after-tax profit = {{£208000 - £161250 = £46750}} less retained profit available for reinvestment.",
          ],
          answer: "After-tax profit falls by £46,750 (from £208,000 down to £161,250).",
          yourTurn: {
            question:
              "A small engineering firm has an £800,000 variable-rate bank loan. If the annual interest rate rises from 5% to 8.5%, by how much does its annual interest expense increase, in £?",
            answer: { type: "number", value: 28000, display: "£28,000" },
            solution:
              "Old interest = £800,000 × 0.05 = £40,000. New interest = £800,000 × 0.085 = £68,000. Increase = £68,000 − £40,000 = £28,000 (or 3.5% × £800,000).",
          },
        },
      ],
      keyPoints: [
        "**Direct taxes** (income tax, corporation tax) fall on incomes/profits; **indirect taxes** (VAT/GST, excise duties) are added to spending on goods/services.",
        "Higher **interest rates** squeeze firms **twice**: raising loan/overdraft costs AND depressing credit-fuelled consumer demand.",
        "**Grade 9 Evaluation Angle:** Impact depends on **gearing** (a debt-free firm funded by retained profit pays £0 loan interest!) and **product type** (essentials & value discounters outperform credit-funded luxuries).",
      ],
      whyItWorks:
        "Central banks raise interest rates to cool excess demand and tame inflation by making borrowing dearer and saving more rewarding across the entire economy.",
      strategies: [
        "Always check the case study for **bank loans/overdrafts** AND whether customers buy the product **on credit** (cars, sofas, kitchens, holidays).",
      ],
      thinkDeeper:
        "If the government cuts **income tax** by 3% at the exact same time the central bank raises **interest rates** by 2%, which types of households spend more and which spend less?",
    },
    {
      id: "external-pestle-ethics",
      heading: "PESTLE, legislation, ethics & pressure groups",
      discovery: {
        problem:
          "ChocLux Plc obeys every labour law in its supplier countries, yet an environmental pressure group posts drone footage of rainforest clearing on ChocLux's palm-oil plantations. Within 72 hours, three supermarket chains delist ChocLux bars and its share price drops 18%. How could ChocLux suffer when it broke zero laws?",
        idea:
          "**Legal compliance** is only the minimum floor; **business ethics** is doing what stakeholders judge morally right *beyond* the law! Viral **pressure-group** campaigns turn ethical failures into consumer **boycotts** and retailer delistings faster than any courtroom!",
      },
      body: `### Scanning the External Environment with PESTLE
- **Political:** Trade deals, government stability, subsidies, public infrastructure priorities.
- **Economic:** Interest rates, exchange rates, inflation, unemployment, tax rates, economic cycle.
- **Social:** Ageing populations, health/vegan/wellness trends, remote working, demographic shifts.
- **Technological:** AI automation, e-commerce apps, EPOS inventory systems, renewable energy tech (creates new products AND shortens product life cycles!).
- **Legal:** Consumer protection laws (accurate descriptions, safe goods, refund rights), competition law (banning price-fixing cartels & predatory monopoly abuse), employment & health-and-safety law.
- **Environmental:** Carbon-net-zero targets, plastic packaging taxes, extreme weather disrupting primary harvests, circular/recyclable design.

### Business Ethics, Sustainability & Pressure Groups
- **Ethical vs Profit Trade-Off:** Paying living wages across overseas factories, auditing supply chains against child labour, and eliminating single-use plastics **increases unit Variable Costs** in the short run — squeezing margins unless customers accept a **ethical price premium**.
- **Greenwashing Trap:** Making exaggerated or unverified eco-claims in marketing without real supply-chain reform triggers regulatory fines and fierce consumer backlash.
- **Pressure Groups:** Non-profit activist organisations (e.g. Greenpeace, Fairtrade campaigns, local resident coalitions) that influence business behaviour and government laws through:
  1. **Consumer boycotts** & viral social-media naming-and-shaming (hits revenue and brand equity directly).
  2. **Direct action / protests / strikes** outside flagship stores or AGMs (media publicity).
  3. **Lobbying governments** to pass stricter environmental, sugar-tax or labour laws.`,
      diagram: `<svg viewBox="0 0 640 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="PESTLE external framework connected to ethical versus profit trade-offs and pressure group tactics">
  <rect x="8" y="8" width="624" height="219" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">PESTLE External Shocks, Ethics &amp; Pressure-Group Leverage</text>
  <rect x="22" y="48" width="300" height="164" rx="10" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.8"/>
  <text x="172" y="69" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">P E S T L E Radar</text>
  <text x="36" y="92" font-size="10.8" fill="var(--ink)"><tspan font-weight="800">P</tspan>olitical — tariffs, subsidies, trade blocs</text>
  <text x="36" y="112" font-size="10.8" fill="var(--ink)"><tspan font-weight="800">E</tspan>conomic — rates, taxes, SPICED, inflation</text>
  <text x="36" y="132" font-size="10.8" fill="var(--ink)"><tspan font-weight="800">S</tspan>ocial — demographics, vegan/health lifestyles</text>
  <text x="36" y="152" font-size="10.8" fill="var(--ink)"><tspan font-weight="800">T</tspan>echnological — AI, robotics, e-commerce</text>
  <text x="36" y="172" font-size="10.8" fill="var(--ink)"><tspan font-weight="800">L</tspan>egal — consumer, competition &amp; safety law</text>
  <text x="36" y="192" font-size="10.8" fill="var(--ink)"><tspan font-weight="800">E</tspan>nvironmental — net-zero, plastic tax, climate</text>
  <rect x="338" y="48" width="278" height="164" rx="10" fill="var(--surface)" stroke="var(--accent)" stroke-width="1.8"/>
  <text x="477" y="69" text-anchor="middle" font-size="12" font-weight="800" fill="var(--warn)">Pressure-Group Leverage Loop</text>
  <text x="352" y="95" font-size="11" font-weight="700" fill="var(--bad)">1. Viral Investigation / Protest</text>
  <text x="352" y="114" font-size="10.5" fill="var(--ink-2)">Exposes sweatshops or pollution</text>
  <text x="352" y="138" font-size="11" font-weight="700" fill="var(--bad)">2. Consumer Boycott + Delisting</text>
  <text x="352" y="157" font-size="10.5" fill="var(--ink-2)">Threatens revenue &amp; PLC share price</text>
  <text x="352" y="181" font-size="11" font-weight="700" fill="var(--good)">3. Authentic Ethical Reform</text>
  <text x="352" y="200" font-size="10.5" fill="var(--ink-2)">Higher unit cost → stronger brand USP!</text>
</svg>`,
      diagramCaption:
        "Proactive firms turn PESTLE threats and ethical expectations into competitive USPs before pressure groups or laws force expensive emergency changes.",
      workedExamples: [
        {
          title: "Ethical Sourcing Cost vs Price-Premium Contribution",
          problem:
            "BeanPure Ltd sells **50,000 bags** of coffee per month at **£8.00 per bag** with variable costs of **£3.20 per bag**. Switching to 100% rainforest-certified Fairtrade beans adds **£0.80 per bag** to variable costs, but allows BeanPure Ltd to raise its retail price to **£9.00 per bag** while ethical demand lifts monthly volume by **10%**. Calculate the change in monthly **total contribution**.",
          steps: [
            "**Before:** Contribution per bag = {{£8.00 - £3.20 = £4.80}}. Monthly contribution = {{50000 * £4.80 = £240000}}.",
            "**After:** New variable cost = {{£3.20 + £0.80 = £4.00}}. New contribution per bag = {{£9.00 - £4.00 = £5.00}}.",
            "New monthly volume (+10%) = {{50000 * 1.10 = 55000}} bags. New monthly contribution = {{55000 * £5.00 = £275000}}.",
            "Change in monthly contribution = {{£275000 - £240000 = +£35000}} per month!",
          ],
          answer: "+£35,000 per month higher contribution (from £240,000 to £275,000).",
          yourTurn: {
            question:
              "A clothing brand sells 10,000 T-shirts at £20 each with a £9 variable cost. Switching to certified organic cotton raises variable cost to £11, while ethical branding lets it raise the price to £23 at the same 10,000-unit volume. Calculate the new total contribution in £.",
            answer: { type: "number", value: 120000, display: "£120,000" },
            solution:
              "New contribution per T-shirt = £23 − £11 = £12. Total contribution = 10,000 × £12 = £120,000 (up from £110,000).",
          },
        },
      ],
      keyPoints: [
        "**Consumer protection laws** prevent misleading claims and faulty goods — raising compliance/testing costs in the short run while building consumer trust and cutting product-recall lawsuits.",
        "**Competition law** bans cartels (collusive price-fixing) and predatory abuse of monopoly power, protecting smaller SMEs and consumer choice.",
        "Pressure groups wield greatest power against **high-profile consumer-facing brands** with **elastic substitutes** (fashion, coffee, supermarkets) rather than obscure B2B mining monopolies.",
      ],
      whyItWorks:
        "External PESTLE scanning gives managers early warning so they can adapt products, supply chains and pricing smoothly rather than suffering sudden boycotts, fines or obsolescence.",
      strategies: [
        "When evaluating pressure groups (9/12 marks), weigh **brand visibility & availability of substitutes**: a boycott devastates a high-street coffee chain if shoppers can walk 20 metres to a rival!",
      ],
      thinkDeeper:
        "Why do large established PLCs sometimes *lobby in favour of* tougher environmental or safety regulations even when compliance costs them millions?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "What is a 'footloose' business?",
        back: "A business not tied to raw material deposits or walk-in high-street footfall (e.g. software studio, online consultancy), free to locate wherever broadband, skills and rents are attractive.",
      },
      {
        front: "Define globalisation.",
        back: "The growing integration and interdependence of national economies worldwide through freer cross-border trade, capital flows (FDI), technology and migration.",
      },
      {
        front: "What is the exact Edexcel definition of a Multinational Corporation (MNC)?",
        back: "A business that **produces goods or operates facilities/branches in more than one country** (merely exporting from one home country does NOT make a firm an MNC!).",
      },
      {
        front: "State 3 advantages and 3 drawbacks of MNCs (FDI) for a host country.",
        back: "**Pros:** creates local jobs & incomes, transfers skills/technology, boosts host tax & export earnings. **Cons:** **profit repatriation** abroad, squeezes local SMEs out of business, risk of environmental damage or footloose closure.",
      },
      {
        front: "Distinguish between an import tariff and an import quota.",
        back: "**Tariff:** a tax/duty placed on imports, raising their price and generating government tax revenue. **Quota:** a physical limit on the quantity of imports allowed in (generates zero tax revenue).",
      },
      {
        front: "What does SPICED stand for when a currency appreciates?",
        back: "**S**trong **P**ound **I**mports **C**heaper **E**xports **D**earer.",
      },
      {
        front: "What does WPIDEC stand for when a currency depreciates?",
        back: "**W**eak **P**ound **I**mports **D**earer **E**xports **C**heaper.",
      },
      {
        front: "If £1 = $1.25, how do you convert (a) £400 into $, and (b) $500 into £?",
        back: "(a) **£ → $ multiply:** £400 × 1.25 = **$500**. (b) **$ → £ divide:** $500 ÷ 1.25 = **£400**.",
      },
      {
        front: "Distinguish between direct taxes and indirect taxes, giving two examples of each.",
        back: "**Direct taxes** are levied on income/profits (**Income Tax, Corporation Tax**). **Indirect taxes** are levied on spending on goods/services (**VAT/GST, Excise Duties**).",
      },
      {
        front: "Give three ways a rise in central bank interest rates affects businesses.",
        back: "1. Increases overdraft & variable loan interest costs. 2. Discourages debt-funded capital investment. 3. Reduces household disposable income (higher mortgages) & credit spending on big-ticket luxuries.",
      },
      {
        front: "What does PESTLE stand for?",
        back: "**P**olitical, **E**conomic, **S**ocial, **T**echnological, **L**egal, **E**nvironmental external factors.",
      },
      {
        front: "Distinguish between legal compliance and business ethics.",
        back: "**Legislation** is the mandatory legal minimum enforced by courts/fines; **ethics** goes voluntarily *beyond* the law to treat workers, suppliers, communities and the environment morally fairly.",
      },
      {
        front: "What is greenwashing?",
        back: "Marketing deceptive or exaggerated environmental claims to appear sustainable without making genuine reductions in carbon emissions, waste or supply-chain harm.",
      },
      {
        front: "How do pressure groups influence business decisions?",
        back: "Through **consumer boycotts**, viral social-media campaigns, public protests/direct action (threatening brand reputation and sales), and **lobbying** governments for stricter laws.",
      },
      {
        front: "How should you structure a 9-mark (Assess) or 12-mark (Evaluate) Edexcel 4BS1 answer on exchange rates or interest rates?",
        back: "Use **AJIM**: analyse both winners & losers **in AO2 context**, then evaluate that the net impact *depends on* **PED**, whether the firm **both imports inputs and exports output**, or its **level of debt gearing**!",
      },
    ],
    mustKnow: [
      "Evaluate domestic and international **location factors** (market, labour, raw materials, competitors, land rent, infrastructure, government grants) for Paper 1 SMEs vs Paper 2 factories.",
      "Explain the drivers of **globalisation** and evaluate **MNC / FDI** pros and cons for both the business and the **host country** (including profit repatriation).",
      "Convert currencies accurately in **both directions** (multiply vs divide) and calculate landed import costs including **percentage tariffs**.",
      "Apply **SPICED** (appreciation) and **WPIDEC** (depreciation) to importers, exporters, domestic inflation and firms that both import materials and export goods.",
      "Analyse **fiscal policy** — direct taxes (**income tax, corporation tax**), indirect taxes (**VAT/GST, excise duties**) and **government infrastructure/subsidy spending**.",
      "Trace the full transmission chain of **central bank interest rate** rises or cuts across firm finance costs, capital investment, mortgages, saving and luxury vs budget consumer demand.",
      "Apply **PESTLE** shocks (demographic, tech, environmental, legal, competitive) to business strategy and 4Ps adjustments.",
      "Assess the **ethics vs profit** trade-off (living wages, sustainable packaging, avoiding greenwashing) and evaluate when **pressure groups** succeed.",
      "Apply **Edexcel 4BS1 Command Words** cleanly: *State* (1), *Outline* (2 = point + **AO2 context**), *Explain* (3 = point + 2 linked AO3 steps), *Analyse* (6 = 2 contextual chains), *Assess* (9) & *Evaluate* (12).",
      "Use **AJIM** on 9/12-mark external-factor essays — e.g. showing how SPICED hurts export prices *unless* product demand is **price inelastic** or raw materials are imported!",
    ],
    misconceptions: [
      {
        wrong: "Never write: 'When £1 rises from $1.20 to $1.50, the pound has depreciated so UK exports become cheaper.'",
        right: "Write instead (Grade 9): 'When £1 buys more dollars ($1.20 → $1.50), the pound has **appreciated (SPICED)**: UK imports become cheaper in £, while UK exports become **dearer** in $ for US buyers.'",
      },
      {
        wrong: "Never write: 'Cornwall Cider Ltd sells bottles to France, therefore Cornwall Cider Ltd is a Multinational Corporation (MNC).'",
        right: "Write instead (Grade 9): 'Selling abroad from a single UK orchard makes Cornwall Cider Ltd an **exporter**, NOT an MNC; an **MNC** must own and operate production or service bases in **at least two countries**.'",
      },
      {
        wrong: "Never write: 'Imposing an import quota raises extra tax revenue for the domestic government.'",
        right: "Write instead (Grade 9): 'An import **tariff** is a customs tax that generates government tax revenue; an import **quota** is a physical volume cap that restricts foreign supply without raising tax revenue.'",
      },
      {
        wrong: "Never write: 'Higher interest rates hurt every single business equally.'",
        right: "Write instead (Grade 9): 'Higher interest rates hit **highly geared** firms (with large overdrafts/variable loans) and sellers of **credit-funded luxuries** (cars, sofas) hardest, whereas debt-free firms with cash reserves earn higher interest and **budget discounters** often gain customers trading down!'",
      },
      {
        wrong: "Never write: 'Corporation tax is an indirect tax added onto customer receipts at the checkout.'",
        right: "Write instead (Grade 9): '**Corporation tax** is a **direct tax** levied on a company's net profits (reducing retained profit available for reinvestment); checkout sales taxes like **VAT or GST** are **indirect taxes**.'",
      },
      {
        wrong: "Never write: 'Behaving ethically always lowers a company's long-term profits because ethical materials cost more.'",
        right: "Write instead (Grade 9): 'Although Fairtrade wages and compostable packaging raise short-run unit costs, authentic ethics builds a **differentiated brand USP**, allows a **price-inelastic premium**, motivates staff and shields the firm from costly **pressure-group boycotts**.'",
      },
      {
        wrong: "Never write: 'To convert $300 into £ when £1 = $1.20, multiply 300 × 1.20 = £360.'",
        right: "Write instead (Grade 9): 'When converting **Foreign ($) back into Home (£)**, **divide** by the exchange rate: $300 ÷ 1.20 = **£250** (sanity check: since £1 > $1, the £ number must be smaller than 300!).'",
      },
    ],
    examMistakes: [
      "**Multiplying instead of dividing on Foreign → Home currency questions:** Always write the ratio line `£1 = $1.25` first — going left-to-right (`£ → $`) multiplies; going right-to-left (`$ → £`) divides!",
      "**Reversing SPICED and WPIDEC under exam pressure:** Write **S-P-I-C-E-D** (`Strong Pound Imports Cheaper Exports Dearer`) in full before answering.",
      "**Missing the two-way trade insight on 9/12-mark exchange-rate questions:** Check if the case-study business **imports raw materials** (e.g. cocoa, cotton, microchips) AND **exports finished goods** — currency moves pull costs and export demand in opposite directions!",
      "**Forgetting AO2 context on Paper 1 & Paper 2 location questions:** Don't just say 'rent is cheaper out of town' — tie it directly to *heavy steel machinery*, *walk-in bubble-tea shoppers*, or *fibre broadband for app developers*.",
      "**Confusing Income Tax with Corporation Tax:** Income tax reduces **consumers' disposable income**; corporation tax reduces **companies' retained after-tax profit**.",
      "**Assuming pressure-group boycotts always succeed:** Evaluate whether the target business sells **branded consumer goods with close substitutes** (vulnerable!) or **essential/B2B industrial inputs** (much less vulnerable!).",
      "**Ignoring fixed-rate vs variable-rate loans when analysing interest rates:** A firm locked into a 5-year fixed-rate loan sees no immediate jump in loan repayments, though its customers' spending may still fall!",
    ],
    mnemonics: [
      {
        topic: "Currency Appreciation Effects",
        device: "SPICED",
        explanation: "**S**trong **P**ound → **I**mports **C**heaper, **E**xports **D**earer.",
      },
      {
        topic: "Currency Depreciation Effects",
        device: "WPIDEC",
        explanation: "**W**eak **P**ound → **I**mports **D**earer, **E**xports **C**heaper.",
      },
      {
        topic: "External Environment Scan",
        device: "PESTLE",
        explanation: "**P**olitical • **E**conomic • **S**ocial • **T**echnological • **L**egal • **E**nvironmental.",
      },
      {
        topic: "9/12-Mark Evaluation Architecture",
        device: "AJIM",
        explanation: "**A**nswer clearly • **J**ustify both sides in context • **I**t depends on (PED, gearing, import/export mix) • **M**ost important driver.",
      },
    ],
    realWorld: [
      {
        title: "Nissan Sunderland & Toyota Burnaston (Bypassing Trade Barriers)",
        detail: "Japanese carmakers invested billions in UK & European plants (**MNC Foreign Direct Investment**) to manufacture close to European buyers, slash ocean shipping costs on bulky cars, and avoid external import **tariffs**.",
        emoji: "🚗",
      },
      {
        title: "Aldi & Lidl During High Interest-Rate Squeezes",
        detail: "When central banks raised interest rates sharply in 2022–2024, rising mortgage bills squeezed household disposable incomes — driving millions of middle-income shoppers to switch from premium grocers to **Aldi and Lidl**, lifting their market share.",
        emoji: "🛒",
      },
      {
        title: "Patagonia & Tony's Chocolonely (Ethics as a Commercial USP)",
        detail: "Tony's Chocolonely pays West African cocoa farmers a living-income premium above market prices to eradicate illegal child labour — turning higher ethical unit costs into a distinctive brand story that commands loyal supermarket shelf space.",
        emoji: "🍫",
      },
      {
        title: "Apple & Foxconn Supply-Chain Diversification (Vietnam & India)",
        detail: "To reduce geopolitical tariff risk and single-country disruption, major electronics MNCs diversified assembly plants across **Vietnam and India**, bringing skilled engineering training and export infrastructure to host regions.",
        emoji: "📱",
      },
    ],
    videos: [
      {
        title: "Exchange Rates (SPICED & WPIDEC) — Edexcel IGCSE Business 4BS1",
        channel: "TakingTheBiz",
        url: "https://www.youtube.com/results?search_query=exchange+rates+spiced+wpidec+igcse+business+takingthebiz",
      },
      {
        title: "Globalisation & Multinationals (MNCs) Host Country Impacts",
        channel: "Tutor2u Business",
        url: "https://www.youtube.com/results?search_query=globalisation+and+multinationals+host+country+igcse+business+tutor2u",
      },
      {
        title: "Government Policy: Interest Rates & Taxation in IGCSE Business",
        channel: "Bizconsesh",
        url: "https://www.youtube.com/results?search_query=interest+rates+and+taxation+government+policy+igcse+business+bizconsesh",
      },
      {
        title: "Business Ethics, Environment & Pressure Groups (Edexcel 4BS1)",
        channel: "Edexcel Business Revision",
        url: "https://www.youtube.com/results?search_query=business+ethics+environment+pressure+groups+edexcel+igcse+business",
      },
    ],
    formulas: [
      {
        name: "Home Currency (£) → Foreign Currency ($)",
        formula: '{{"Foreign Value" = "Home Value" * "Exchange Rate"}}',
        note: "When £1 = $1.25, multiply £ amount by 1.25 to get $ export price.",
      },
      {
        name: "Foreign Currency ($) → Home Currency (£)",
        formula: '{{"Home Value" = "Foreign Value" / "Exchange Rate"}}',
        note: "When £1 = $1.25, divide $ invoice by 1.25 to get £ import cost.",
      },
      {
        name: "Landed Import Cost Including Tariff",
        formula: '{{"Pre-Tariff Import Cost" * (1 + "Tariff %" / 100)}}',
        note: "Tariffs are customs taxes added as a percentage of imported goods' value.",
      },
      {
        name: "Annual Loan Interest Expense",
        formula: '{{"Loan Principal" * ("Annual Interest Rate %" / 100)}}',
        note: "Rises immediately on overdrafts and variable-rate loans when central bank base rates increase.",
      },
      {
        name: "Disposable Income",
        formula: '{{"Gross Household Income" - "Direct Income Taxes"}}',
        note: "Discretionary spending left further drops when variable mortgage interest repayments rise.",
      },
      {
        name: "After-Tax Corporate Profit",
        formula: '{{"Profit Before Tax" * (1 - "Corporation Tax %" / 100)}}',
        note: "Determines maximum retained profit available for business reinvestment and dividends.",
      },
      {
        name: "MNC Profit Repatriation",
        formula: '{{"Subsidiary After-Tax Profit" * ("Repatriation %" / 100)}}',
        note: "Outflow of profits from the host country back to the MNC's home-country headquarters.",
      },
      {
        name: "SPICED (Currency Appreciation)",
        formula: "Strong Pound → Imports Cheaper, Exports Dearer",
        note: "Lowers £ cost of imported raw materials; raises foreign-currency price of exports.",
      },
      {
        name: "WPIDEC (Currency Depreciation)",
        formula: "Weak Pound → Imports Dearer, Exports Cheaper",
        note: "Boosts export price competitiveness & inbound tourism; causes imported cost-push inflation.",
      },
    ],
  },
};
