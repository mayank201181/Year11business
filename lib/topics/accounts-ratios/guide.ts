import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "accounts-ratios",
  title: "Financial Documents & Ratio Analysis",
  strand: "Finance",
  icon: "📊",
  summary:
    "Decode Statements of Comprehensive Income and Financial Position, master GPM vs Markup, benchmark ROCE against interest rates, and stress-test liquidity with Current and Acid-Test ratios.",
  intro:
    "Every stakeholder — from a Paper 1 café owner applying for a bank loan to a Paper 2 institutional investor analysing a FTSE 100 retailer — relies on two statutory financial statements to judge performance and financial health.\n\nThe **Statement of Comprehensive Income** acts like a *video recording* over 12 months, tracking how **Revenue** is whittled down by **Cost of Sales**, **Expenses**, **Finance Costs** and **Taxation** into **Profit for the Year**. By contrast, the **Statement of Financial Position** acts like a *freeze-frame photograph* on a single date, balancing everything the business owns (**Assets**) against everything it owes (**Liabilities**) and the owners' stake (**Equity**).\n\nRaw pound figures alone can mislead: £100,000 operating profit is spectacular for a corner bakery employing £250,000 of capital, yet dismal for a supermarket chain tying up £20 million. In Pearson Edexcel IGCSE Business (4BS1 Topics 3.4–3.5), Grade 9 candidates combine **profitability ratios** (GPM, OPM, Markup, ROCE) with **liquidity ratios** (Current Ratio, Acid-Test Ratio) to deliver sharp, contextualised judgements.",
  guide: [
    {
      id: "income-statement",
      heading: "Statement of Comprehensive Income (profit & loss)",
      discovery: {
        problem:
          "Vani's artisan gelato parlour takes £120,000 at the till this year. Milk, cream, cones and toppings cost £42,000. Shop rent, staff salaries, electricity and marketing total £50,000, and bank loan interest plus corporation tax come to £8,000. Her dad boasts: 'We made £78,000 profit to spend on a new van!' How much profit is *actually* left for the owners at the end of the year, and what is the £78,000 figure properly called?",
        idea:
          "£120,000 minus £42,000 equals **£78,000 Gross Profit** — that only deducts direct **Cost of Sales**! Subtracting £50,000 of overheads leaves **£28,000 Operating Profit**, and deducting £8,000 of interest and tax leaves **£20,000 Profit for the Year** (Net Profit). Spending £78,000 on a van would ignore rent, wages and tax!",
      },
      body: "The **Statement of Comprehensive Income** (historically called the *Profit and Loss Account*) measures a firm's trading performance over a financial period — usually 12 months. You must know the exact vertical order of lines and every subtraction step:\n\n| Statement of Comprehensive Income (for year ended 31 Dec) | £000 | Formula / Meaning |\n|---|---|---|\n| **Revenue** (Turnover / Sales) | 500 | Total value of goods/services sold ({{P * Q}}) |\n| *Less:* **Cost of Sales** (Direct costs) | (200) | Raw materials, stock bought for resale, direct factory labour |\n| **Gross Profit** | **300** | {{\"Gross Profit\" = \"Revenue\" - \"Cost of Sales\"}} |\n| *Less:* **Expenses** (Overheads) | (180) | Rent, admin salaries, marketing, utilities, depreciation |\n| **Operating Profit** | **120** | {{\"Operating Profit\" = \"Gross Profit\" - \"Expenses\"}} |\n| *Less:* **Finance Costs** & **Taxation** | (30) | Net interest paid on loans/overdrafts + corporation tax |\n| **Profit for the Year** (Net Profit) | **90** | {{\"Profit for the Year\" = \"Operating Profit\" - \"Interest\" - \"Tax\"}} |\n\n### Where does Profit for the Year go?\nIn an incorporated company (**Ltd** or **Plc**), **Profit for the Year** is split in two ways (appropriation):\n- **Dividends**: distributed to shareholders as a cash reward for risking their capital.\n- **Retained Profit**: ploughed back into the business as a zero-interest **internal source of finance** for expansion or working capital ({{\"Retained Profit\" = \"Profit for the Year\" - \"Dividends\"}}).\n\n### Cost of Sales vs Expenses — the classic sorting test\n- **Cost of Sales** varies directly with trading volume: flour in a bakery, wholesale trainers bought by a shoe shop, or packaging per parcel.\n- **Expenses (Overheads)** are running costs not tied directly to making each unit: head-office rent, insurance, administrative salaries, advertising campaigns and delivery van depreciation.",
      diagram:
        '<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Income Statement waterfall from Revenue £500k down to Profit for the Year £90k"><rect width="640" height="250" rx="14" fill="#f8fafc"/><text x="320" y="26" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#0f172a">Statement of Comprehensive Income Waterfall (£000)</text><line x1="50" y1="210" x2="600" y2="210" stroke="#cbd5e1" stroke-width="1.5"/><rect x="65" y="50" width="68" height="160" rx="5" fill="#2563eb"/><text x="99" y="43" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#1d4ed8">£500k</text><text x="99" y="228" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="600" fill="#334155">Revenue</text><rect x="150" y="50" width="68" height="64" rx="5" fill="#ef4444"/><text x="184" y="43" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#dc2626">−£200k</text><text x="184" y="228" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="600" fill="#334155">Cost of Sales</text><rect x="235" y="114" width="68" height="96" rx="5" fill="#0ea5e9"/><text x="269" y="107" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#0284c7">£300k</text><text x="269" y="228" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="600" fill="#334155">Gross Profit</text><rect x="320" y="114" width="68" height="58" rx="5" fill="#f97316"/><text x="354" y="107" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#ea580c">−£180k</text><text x="354" y="228" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="600" fill="#334155">Expenses</text><rect x="405" y="172" width="68" height="38" rx="5" fill="#8b5cf6"/><text x="439" y="165" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#7c3aed">£120k</text><text x="439" y="228" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="600" fill="#334155">Operating</text><rect x="490" y="172" width="48" height="10" rx="3" fill="#eab308"/><text x="514" y="165" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#ca8a04">−£30k</text><text x="514" y="228" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="600" fill="#334155">Int &amp; Tax</text><rect x="550" y="182" width="52" height="28" rx="5" fill="#16a34a"/><text x="576" y="175" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#15803d">£90k</text><text x="576" y="228" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#15803d">Net Profit</text></svg>',
      diagramCaption:
        "Each tier of profit strips away one layer of costs: Cost of Sales leaves Gross Profit, Expenses leave Operating Profit, and Finance Costs + Tax leave Profit for the Year.",
      workedExamples: [
        {
          title: "Building an Income Statement down to Retained Profit",
          problem:
            "NorthStar Bikes Ltd sells 1,200 electric bikes at £800 each. Direct components and assembly cost £480,000. Rent, admin salaries and advertising total £290,000. Loan interest is £25,000 and corporation tax is £33,000. Shareholders are paid £52,000 in dividends. Calculate Gross Profit, Operating Profit, Profit for the Year, and Retained Profit.",
          steps: [
            "Calculate **Revenue**: {{1200 * 800 = 960000}} (£960,000).",
            "Subtract Cost of Sales for **Gross Profit**: {{960000 - 480000 = 480000}} (£480,000).",
            "Subtract Expenses for **Operating Profit**: {{480000 - 290000 = 190000}} (£190,000).",
            "Subtract Finance Costs and Tax for **Profit for the Year**: {{190000 - 25000 - 33000 = 132000}} (£132,000).",
            "Subtract Dividends for **Retained Profit**: {{132000 - 52000 = 80000}} (£80,000).",
          ],
          answer:
            "Gross Profit = £480,000; Operating Profit = £190,000; Profit for the Year = £132,000; Retained Profit = £80,000.",
          yourTurn: {
            question:
              "Harbour Roasters Ltd earns Revenue of £640,000. Cost of Sales is £260,000, Expenses are £210,000, and Interest plus Tax total £45,000. Calculate Profit for the Year (in £).",
            answer: { type: "number", value: 125000, display: "£125,000" },
            solution:
              "Gross Profit = £640,000 − £260,000 = £380,000. Operating Profit = £380,000 − £210,000 = £170,000. Profit for the Year = £170,000 − £45,000 = £125,000.",
          },
        },
        {
          title: "Working backwards to find a missing cost line",
          problem:
            "In an Edexcel Paper 1 extract, a florist reports Revenue of £185,000, Operating Profit of £38,000, and Overhead Expenses of £67,000. Find the missing Cost of Sales figure.",
          steps: [
            "Since {{\"Operating Profit\" = \"Gross Profit\" - \"Expenses\"}}, rearrange to find Gross Profit first: {{\"Gross Profit\" = 38000 + 67000 = 105000}} (£105,000).",
            "Now use {{\"Gross Profit\" = \"Revenue\" - \"Cost of Sales\"}}: {{\"Cost of Sales\" = 185000 - 105000 = 80000}} (£80,000).",
          ],
          answer: "Cost of Sales = £80,000.",
          yourTurn: {
            question:
              "A bakery reports Revenue of £240,000, Overhead Expenses of £85,000, and Operating Profit of £55,000. What was its Cost of Sales (in £)?",
            answer: { type: "number", value: 100000, display: "£100,000" },
            solution:
              "Gross Profit = Operating Profit + Expenses = £55,000 + £85,000 = £140,000. Cost of Sales = Revenue − Gross Profit = £240,000 − £140,000 = £100,000.",
          },
        },
      ],
      keyPoints: [
        "**Gross Profit** = Revenue − Cost of Sales (measures core trading buy/make-and-sell margin).",
        "**Operating Profit** = Gross Profit − Expenses (measures profit from normal day-to-day operations before financing and tax).",
        "**Profit for the Year** = Operating Profit − Finance Costs − Taxation (bottom-line net profit belonging to owners).",
        "Brackets `(200)` in accounting tables always mean **subtract** (a negative or outflow figure).",
        "Profit is recorded when a sale is invoiced (accruals basis), NOT when cash lands in the bank — profitable firms can still have zero cash!",
      ],
      whyItWorks:
        "Separating Gross Profit from Operating Profit isolates *where* a problem lies: if Gross Profit falls, either selling prices dropped or supplier/raw-material costs surged; if Gross Profit holds steady while Operating Profit plunges, overhead expenses like rent, salaries or marketing have spiralled out of control.",
      strategies: [
        "Read parenthesised numbers `(150)` as negative subtractions in Edexcel tables.",
        "Work up the ladder by adding back costs when an exam table blanks out Cost of Sales or Revenue.",
      ],
      thinkDeeper:
        "Suppose a high-street bookshop sells its flagship building for a £400,000 one-off gain, boosting Profit for the Year even though Operating Profit was negative. Why would a bank manager focus on **Operating Profit** rather than **Profit for the Year** before approving a 5-year loan?",
    },
    {
      id: "financial-position",
      heading: "Statement of Financial Position (balance sheet)",
      discovery: {
        problem:
          "Vani's uncle owns delivery vans and ovens worth £90,000, stock and cash of £30,000, owes suppliers £20,000 next month, and has a £40,000 5-year bank loan. How much day-to-day liquidity cushion (**Working Capital**) does he have, and how much is the business actually worth net of all debts (**Net Assets**)?",
        idea:
          "Day-to-day **Working Capital** compares short-term **Current Assets** (£30,000) minus **Current Liabilities** (£20,000) = **£10,000**. Total Assets (£90,000 + £30,000 = £120,000) minus Total Liabilities (£20,000 + £40,000 = £60,000) leaves **£60,000 Net Assets**, which balances **Total Equity** pound-for-pound!",
      },
      body: "The **Statement of Financial Position** (traditionally called the *Balance Sheet*) is a snapshot on a specific date showing what a business owns (**Assets**), what it owes (**Liabilities**), and how it was funded (**Equity / Capital**). Every balance sheet obeys the fundamental accounting identity:\n\n{{\"Net Assets\" = \"Total Assets\" - \"Total Liabilities\" = \"Total Equity\"}}\n\n| Statement of Financial Position (as at 31 Dec) | £000 | Key Items & Definitions |\n|---|---|---|\n| **Non-Current Assets** | 420 | Long-term items kept > 1 year: property, machinery, vehicles, patents |\n| **Current Assets** | 150 | Liquid items turned into cash < 1 year: **inventory**, **trade receivables**, **cash** |\n| *Less:* **Current Liabilities** | (90) | Debts due < 1 year: **trade payables**, **bank overdraft**, short-term tax |\n| **Net Current Assets (Working Capital)** | **60** | {{\"Working Capital\" = \"Current Assets\" - \"Current Liabilities\"}} |\n| *Less:* **Non-Current Liabilities** | (160) | Long-term debts due > 1 year: **bank loans**, **mortgages**, debentures |\n| **Net Assets** | **320** | {{420 + 60 - 160 = 320}} (equals Total Assets £570k − Total Liabilities £250k) |\n| **Share Capital** | 200 | Original money invested by shareholders buying shares |\n| **Retained Profit (Reserves)** | 120 | Cumulative undistributed profits kept inside the firm |\n| **Total Equity** | **320** | Balances **Net Assets** exactly! |\n\n### Mastering Working Capital & Capital Employed\n- **Working Capital (Net Current Assets)** = {{\"Current Assets\" - \"Current Liabilities\"}}. It funds the everyday cash cycle (buying stock, paying wages and electricity while waiting for credit customers to pay). Negative working capital signals severe short-term liquidity stress unless the business is a cash-only supermarket.\n- **Capital Employed** measures the total long-term funds tied up in the business:\n  {{\"Capital Employed\" = \"Total Equity\" + \"Non-Current Liabilities\" = \"Total Assets\" - \"Current Liabilities\"}}\n  In our table above, Capital Employed = £320k + £160k = **£480k** (or £570k − £90k = **£480k**).",
      diagram:
        '<svg viewBox="0 0 640 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Statement of Financial Position balancing Total Assets £570k against Liabilities £250k plus Equity £320k"><rect width="640" height="245" rx="14" fill="#f8fafc"/><text x="320" y="25" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#0f172a">Statement of Financial Position: Total Assets = Liabilities + Equity (£570k)</text><rect x="70" y="45" width="210" height="122" rx="6" fill="#2563eb"/><text x="175" y="102" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#ffffff">Non-Current Assets</text><text x="175" y="120" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#dbeafe">Property, Machinery: £420k</text><rect x="70" y="171" width="210" height="46" rx="6" fill="#0ea5e9"/><text x="175" y="191" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#ffffff">Current Assets: £150k</text><text x="175" y="207" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#e0f2fe">Inventory · Receivables · Cash</text><text x="320" y="138" text-anchor="middle" font-family="system-ui,sans-serif" font-size="22" font-weight="800" fill="#475569">=</text><rect x="360" y="45" width="210" height="94" rx="6" fill="#16a34a"/><text x="465" y="88" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#ffffff">Total Equity: £320k</text><text x="465" y="106" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#dcfce7">Share Capital + Retained Profit</text><rect x="360" y="143" width="210" height="45" rx="6" fill="#7c3aed"/><text x="465" y="164" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#ffffff">Non-Current Liabilities: £160k</text><text x="465" y="180" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#ede9fe">Capital Employed = £320k + £160k = £480k</text><rect x="360" y="192" width="210" height="25" rx="5" fill="#ef4444"/><text x="465" y="209" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#ffffff">Current Liabilities: £90k</text><text x="175" y="235" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#1e40af">Total Assets = £570k</text><text x="465" y="235" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#15803d">Equity + Liabilities = £570k</text></svg>',
      diagramCaption:
        "Everything the firm owns on the left (£570k) is funded on the right by long-term Capital Employed (£480k = Equity £320k + Non-Current Liabilities £160k) plus short-term Current Liabilities (£90k).",
      workedExamples: [
        {
          title: "Calculating Working Capital, Net Assets & Capital Employed",
          problem:
            "Apex Packaging Ltd holds Non-Current Assets of £350,000, Inventory of £45,000, Trade Receivables of £35,000, and Cash of £20,000. It has Trade Payables of £40,000, a Bank Overdraft of £15,000, and a 10-year Mortgage of £125,000. Calculate (a) Working Capital, (b) Net Assets, and (c) Capital Employed.",
          steps: [
            "Sum **Current Assets**: {{45000 + 35000 + 20000 = 100000}} (£100,000).",
            "Sum **Current Liabilities**: {{40000 + 15000 = 55000}} (£55,000).",
            "(a) **Working Capital** = Current Assets − Current Liabilities = {{100000 - 55000 = 45000}} (£45,000).",
            "(b) **Net Assets** = Non-Current Assets + Working Capital − Non-Current Liabilities = {{350000 + 45000 - 125000 = 270000}} (£270,000).",
            "(c) **Capital Employed** = Total Equity (equals Net Assets £270,000) + Non-Current Liabilities (£125,000) = {{270000 + 125000 = 395000}} (£395,000). Check: Total Assets (£450k) − Current Liabilities (£55k) = £395,000.",
          ],
          answer:
            "Working Capital = £45,000; Net Assets = £270,000; Capital Employed = £395,000.",
          yourTurn: {
            question:
              "Breeze Logistics Ltd has Non-Current Assets of £500,000, Current Assets of £140,000, Current Liabilities of £80,000, and Non-Current Liabilities of £190,000. Calculate Net Assets (in £).",
            answer: { type: "number", value: 370000, display: "£370,000" },
            solution:
              "Total Assets = £500,000 + £140,000 = £640,000. Total Liabilities = £80,000 + £190,000 = £270,000. Net Assets = £640,000 − £270,000 = £370,000.",
          },
        },
      ],
      keyPoints: [
        "**Trade Receivables** (debtors) = Current Asset (customers owe money *to* us); **Trade Payables** (creditors) = Current Liability (we owe money *to* suppliers).",
        "**Working Capital** (Net Current Assets) = Current Assets − Current Liabilities.",
        "**Net Assets** = Total Assets − Total Liabilities, which always equals **Total Equity**.",
        "**Capital Employed** = Total Equity + Non-Current Liabilities (long-term funds invested in the firm).",
      ],
      whyItWorks:
        "Double-entry bookkeeping records two sides of every transaction — where money came from (Equity or Liabilities) and what it is currently held as (Non-Current or Current Assets) — guaranteeing the two halves of the Statement of Financial Position always match.",
      strategies: [
        "Sort items by the **12-month rule**: < 1 year = Current; > 1 year = Non-Current.",
        "Cross-check Capital Employed two ways: `Total Equity + Non-Current Liabilities` must equal `Total Assets − Current Liabilities`.",
      ],
      thinkDeeper:
        "If a retailer takes £30,000 out of its bank account (cash) to buy £30,000 of winter coats (inventory), what happens to Total Current Assets, Working Capital, and its true ability to pay wages tomorrow morning?",
    },
    {
      id: "profitability-ratios",
      heading: "Gross Profit Margin, Operating Profit Margin & Markup",
      discovery: {
        problem:
          "Vani buys an artisan candle from a wholesaler for **£8** (Cost of Sales) and sells it in her gift shop for **£10** (Revenue), making **£2** Gross Profit. Her dad yells: '£2 on £8 is 25% — our Gross Profit Margin is 25%!' Vani shakes her head: 'No Dad, 25% is the **Markup**! Our **Gross Profit Margin** is only 20%!' Verify both numbers and spot the exact denominator difference.",
        idea:
          "**Markup** divides Gross Profit by **Cost of Sales**: {{2 / 8 * 100 = 25%}} (how much you *mark up* the buying cost). **Gross Profit Margin (GPM)** divides Gross Profit by **Revenue**: {{2 / 10 * 100 = 20%}} (how many pence of every £1 of sales stay as gross profit). Because Revenue > Cost of Sales whenever GP > 0, **Markup % is always numerically larger than GPM %**!",
      },
      body: "**Profitability ratios** express profit as a percentage of sales (or cost) so we can compare firms of different sizes or track efficiency across years.\n\n| Ratio | Exact Edexcel 4BS1 Formula | What 25% means in plain English |\n|---|---|---|\n| **Gross Profit Margin (GPM)** | {{\"GPM\" = (\"Gross Profit\") / (\"Revenue\") * 100}} | Every £1 of revenue generates **25p** of gross profit after direct costs |\n| **Operating Profit Margin (OPM)** | {{\"OPM\" = (\"Operating Profit\") / (\"Revenue\") * 100}} | Every £1 of revenue generates **25p** of operating profit after direct costs *and* overheads |\n| **Markup** | {{\"Markup\" = (\"Gross Profit\") / (\"Cost of Sales\") * 100}} | Direct buying/making cost was marked up by **25%** to set the selling price |\n\n### Diagnosing the gap between GPM and OPM\nComparing GPM and OPM across two years is a classic Edexcel 6-, 9- or 12-mark data-response skill:\n- **GPM falls while Revenue rises**: the business may have slashed prices (promotional discounting) or failed to pass higher raw-material/import costs on to customers.\n- **GPM rises from 42% to 45%, yet OPM falls from 14% to 8%**: core trading margin improved, **but overhead expenses** (e.g. a costly new flagship store lease, bloated head-office salaries or heavy TV advertising) grew much faster than revenue!\n\n### How to improve GPM vs OPM (and the AO4 'It depends' trade-offs)\n1. **Raise selling prices**: lifts GPM & OPM *if* demand is **price inelastic** (strong brand USP); if demand is price elastic, sales volume collapses.\n2. **Source cheaper raw materials / negotiate bulk discounts**: cuts Cost of Sales to lift GPM, *provided* inferior quality does not trigger customer returns or damage brand reputation.\n3. **Cut overhead expenses** (delayering admin staff, relocating to lower-rent premises, switching to targeted social media marketing): boosts **OPM directly** without changing GPM.",
      diagram:
        '<svg viewBox="0 0 640 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Visual comparison of Gross Profit Margin 20 percent vs Markup 25 percent on a £10 candle costing £8"><rect width="640" height="235" rx="14" fill="#f8fafc"/><text x="320" y="26" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#0f172a">Never Confuse Margin with Markup! (£8 Cost + £2 GP = £10 Selling Price)</text><rect x="35" y="48" width="270" height="165" rx="10" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/><text x="170" y="72" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#1d4ed8">Gross Profit Margin (GPM)</text><text x="170" y="92" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#334155">Denominator = Revenue (£10)</text><rect x="60" y="108" width="176" height="32" rx="4" fill="#94a3b8"/><text x="148" y="129" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#ffffff">Cost £8 (80%)</text><rect x="236" y="108" width="44" height="32" rx="4" fill="#2563eb"/><text x="258" y="129" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#ffffff">£2</text><text x="170" y="168" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#1e40af">£2 ÷ £10 × 100 = 20%</text><text x="170" y="192" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#475569">20p of every £1 revenue is GP</text><rect x="335" y="48" width="270" height="165" rx="10" fill="#fef3c7" stroke="#fcd34d" stroke-width="1.5"/><text x="470" y="72" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#b45309">Markup Percentage</text><text x="470" y="92" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#334155">Denominator = Cost of Sales (£8)</text><rect x="360" y="108" width="160" height="32" rx="4" fill="#d97706"/><text x="440" y="129" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#ffffff">Cost Base £8 (100%)</text><rect x="524" y="108" width="40" height="32" rx="4" fill="#16a34a"/><text x="544" y="129" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#ffffff">+£2</text><text x="470" y="168" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#92400e">£2 ÷ £8 × 100 = 25%</text><text x="470" y="192" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#475569">25% added on top of £8 cost</text></svg>',
      diagramCaption:
        "Same £2 Gross Profit, two different denominators: dividing by £10 Revenue gives 20% GPM; dividing by £8 Cost of Sales gives 25% Markup.",
      workedExamples: [
        {
          title: "Computing GPM, OPM and Markup from one extract",
          problem:
            "Velvet Bean Café Ltd earns Revenue of £250,000. Cost of Sales is £100,000 and Overhead Expenses are £95,000. Calculate (a) Gross Profit Margin, (b) Markup, and (c) Operating Profit Margin.",
          steps: [
            "First find **Gross Profit**: {{250000 - 100000 = 150000}} (£150,000), and **Operating Profit**: {{150000 - 95000 = 55000}} (£55,000).",
            "(a) **Gross Profit Margin** = {{(150000 / 250000) * 100 = 60%}}.",
            "(b) **Markup** = {{(150000 / 100000) * 100 = 150%}} (notice 150% > 60%!).",
            "(c) **Operating Profit Margin** = {{(55000 / 250000) * 100 = 22%}}.",
          ],
          answer: "GPM = 60%; Markup = 150%; OPM = 22%.",
          yourTurn: {
            question:
              "A furniture maker earns Revenue of £400,000 with Cost of Sales of £250,000. Calculate the Markup percentage (give your answer as a percentage to 2 d.p. or exact integer).",
            answer: { type: "number", value: 60, display: "60%" },
            solution:
              "Gross Profit = £400,000 − £250,000 = £150,000. Markup = (£150,000 ÷ £250,000) × 100 = 60% (whereas GPM would be £150,000 ÷ £400,000 × 100 = 37.5%).",
          },
        },
      ],
      keyPoints: [
        "**Margin** always divides by **Revenue**; **Markup** divides Gross Profit by **Cost of Sales**.",
        "Always round non-integer Edexcel 4BS1 financial ratios to **2 decimal places** (e.g. `33.33%`) unless instructed otherwise.",
        "Cutting factory raw-material waste raises **both** GPM and OPM; cutting head-office rent raises **OPM only**.",
      ],
      whyItWorks:
        "Expressing profit per £100 of sales strips away inflation and scale differences, letting an analyst compare a £400k boutique against a £4bn department store on equal footing.",
      strategies: [
        "Sanity check: if GP > 0, **Markup % > GPM % > OPM %** every single time!",
        "When evaluating margins in 9/12-mark essays, compare against industry rivals (e.g. discount supermarkets survive on 3–4% OPM via huge volume, whereas luxury jewellers need high OPM on low volume).",
      ],
      thinkDeeper:
        "A supermarket cuts its Operating Profit Margin from 5% to 4% through everyday low prices, yet its total Operating Profit in pounds *increases* by £12 million. How is that mathematically possible?",
    },
    {
      id: "roce-performance",
      heading: "Return on Capital Employed (ROCE)",
      discovery: {
        problem:
          "Vani has £200,000 to invest. Business X earns £30,000 Operating Profit using £150,000 of Capital Employed. Business Y earns £45,000 Operating Profit, so it makes more money in pounds — right? Wait: Business Y tied up £900,000 of Capital Employed, and a risk-free bank savings account currently pays 5.5% interest! Which business is genuinely outperforming the bank?",
        idea:
          "Business X achieves **ROCE = (£30k ÷ £150k) × 100 = 20%**, comfortably beating the 5.5% risk-free bank rate. Business Y achieves **ROCE = (£45k ÷ £900k) × 100 = 5%** — its investors endured commercial risk to earn *less* per £100 than leaving cash safely in a savings account!",
      },
      body: "**Return on Capital Employed (ROCE)** is often called the **primary efficiency ratio** because it measures how effectively management turns long-term capital invested in the business into operating profit:\n\n{{\"ROCE\" = (\"Operating Profit\") / (\"Capital Employed\") * 100}}\n\nwhere:\n{{\"Capital Employed\" = \"Total Equity\" + \"Non-Current Liabilities\" = \"Total Assets\" - \"Current Liabilities\"}}\n\n### Three essential benchmarks for interpreting ROCE\nA single ROCE percentage means little in isolation. Grade 9 evaluation compares ROCE against three yardsticks:\n1. **Risk-free bank interest rate**: if central bank / savings rates are **5%** and ROCE is **4.2%**, shareholders are not being compensated for entrepreneurial risk.\n2. **Previous years' ROCE**: a rising trend (e.g. `11.4% → 14.8%`) signals improving capital efficiency; a falling trend after buying a new factory may simply reflect a temporary lag before the new capacity reaches full output.\n3. **Industry competitors**: capital-heavy airlines or steelworks naturally have huge Capital Employed denominators, whereas asset-light software agencies often post much higher ROCE.\n\n### Two levers to raise ROCE\n- **Increase the numerator (Operating Profit)** without adding long-term capital — e.g. sweat existing machinery across a second shift, raise prices on inelastic lines, or trim overheads.\n- **Reduce the denominator (Capital Employed)** — e.g. sell idle/underused non-current assets (vacant land or surplus machinery) or pay down expensive long-term debt.",
      diagram:
        '<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart comparing ROCE of Firm X 20 percent, Competitor Avg 12 percent, Bank Interest Rate 5.5 percent, and Firm Y 5 percent"><rect width="640" height="230" rx="14" fill="#f8fafc"/><text x="320" y="26" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#0f172a">Benchmarking ROCE Against Rivals &amp; Risk-Free Bank Interest Rate</text><line x1="70" y1="190" x2="590" y2="190" stroke="#94a3b8" stroke-width="1.5"/><line x1="70" y1="152" x2="590" y2="152" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="6,4"/><text x="585" y="146" text-anchor="end" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#dc2626">Risk-Free Bank Savings Benchmark (5.5%)</text><rect x="105" y="50" width="90" height="140" rx="6" fill="#16a34a"/><text x="150" y="43" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#15803d">20.0%</text><text x="150" y="209" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#334155">Firm X</text><rect x="255" y="106" width="90" height="84" rx="6" fill="#2563eb"/><text x="300" y="99" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#1d4ed8">12.0%</text><text x="300" y="209" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#334155">Sector Avg</text><rect x="405" y="155" width="90" height="35" rx="6" fill="#ef4444"/><text x="450" y="148" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#dc2626">5.0%</text><text x="450" y="209" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#334155">Firm Y (Below Bank!)</text></svg>',
      diagramCaption:
        "ROCE must clear the risk-free bank interest rate hurdle (dashed line) to reward investors for commercial risk.",
      workedExamples: [
        {
          title: "Two-statement ROCE calculation",
          problem:
            "Solaris Tech Plc reports Gross Profit of £420,000 and Overhead Expenses of £240,000. On its Statement of Financial Position, Total Equity is £850,000 and Non-Current Liabilities are £350,000. Calculate ROCE.",
          steps: [
            "Calculate **Operating Profit**: {{420000 - 240000 = 180000}} (£180,000).",
            "Calculate **Capital Employed**: Total Equity + Non-Current Liabilities = {{850000 + 350000 = 1200000}} (£1,200,000).",
            "Apply the **ROCE** formula: {{(180000 / 1200000) * 100 = 15%}}.",
          ],
          answer: "ROCE = 15%.",
          yourTurn: {
            question:
              "Orchard Foods Ltd earns Operating Profit of £96,000. Its Total Equity is £460,000 and Non-Current Liabilities are £180,000. Calculate ROCE (as a %).",
            answer: { type: "number", value: 15, display: "15%" },
            solution:
              "Capital Employed = £460,000 + £180,000 = £640,000. ROCE = (£96,000 ÷ £640,000) × 100 = 15%.",
          },
        },
      ],
      keyPoints: [
        "**ROCE** = `(Operating Profit ÷ Capital Employed) × 100` — NEVER divide by Revenue!",
        "**Capital Employed** = `Total Equity + Non-Current Liabilities` (do NOT include Current Liabilities).",
        "Always compare ROCE against **current bank interest rates**, **historic trends**, and **same-industry rivals**.",
        "A brand-new factory loan increases Capital Employed *immediately* on day 1 before extra Operating Profit arrives, temporarily depressing ROCE.",
      ],
      whyItWorks:
        "OPM only asks how profitable sales are; ROCE asks how hard every £1 of long-term debt and shareholder equity worked to generate that operating profit — unifying the Income Statement and Statement of Financial Position into a single metric.",
      strategies: [
        "Pull Operating Profit from the Income Statement and Capital Employed from the Balance Sheet.",
        "In 12-mark investment evaluations, point out timing: heavy capital investment often causes a short-term dip in ROCE before long-term gains.",
      ],
      thinkDeeper:
        "If a firm sells its factory and leases it back instead, Capital Employed drops sharply while yearly rent Expense rises. How could this make ROCE jump upwards even though the business is now locked into risky annual lease payments?",
    },
    {
      id: "liquidity-ratios",
      heading: "Current Ratio, Acid-Test Ratio & limitations of accounts",
      discovery: {
        problem:
          "Fashion-haus Boutique has Current Assets of £180,000 and Current Liabilities of £100,000 — so its Current Ratio is a seemingly healthy **1.8 : 1**. Yet next week the bailiffs arrive because it cannot pay a £60,000 supplier bill! You inspect its Current Assets and discover **£150,000 is unsold last-season winter coats (Inventory)** and only £30,000 is receivables + cash. What is its **Acid-Test Ratio**, and why did the Current Ratio hide the crisis?",
        idea:
          "Subtracting £150,000 of illiquid **Inventory** leaves Liquid Assets of only **£30,000**. Dividing by £100,000 Current Liabilities gives an **Acid-Test Ratio of 0.3 : 1** — the boutique has just **30p of liquid assets for every £1 owed short term**! Unsold fashion stock cannot pay wages or suppliers unless dumped at huge discounts.",
      },
      body: "**Liquidity** measures a firm's ability to pay its short-term debts (**Current Liabilities**) as they fall due within 12 months. Edexcel 4BS1 tests two liquidity ratios, customarily expressed as `X : 1` (or as a decimal to 2 d.p.):\n\n| Liquidity Ratio | Exact Edexcel 4BS1 Formula | Rule-of-Thumb Benchmark & Warnings |\n|---|---|---|\n| **Current Ratio** | {{\"Current Ratio\" = (\"Current Assets\") / (\"Current Liabilities\")}} | **~1.5 : 1 to 2 : 1** ideal. Below `1 : 1` = liquidity danger; far above `2.5 : 1` = **idle working capital** earning little return! |\n| **Acid-Test (Quick) Ratio** | {{\"Acid-Test Ratio\" = (\"Current Assets\" - \"Inventory\") / (\"Current Liabilities\")}} | **~1 : 1** ideal. Strips out **Inventory** because stock is the *least liquid* current asset (may perish, go out of fashion, or take months to sell on credit). |\n\n### Context matters: why supermarkets break the '1 : 1' rule\nNever apply textbook benchmarks blindly! Major supermarkets (e.g. Tesco, Sainsbury's) routinely operate safely with an Acid-Test Ratio around **0.5 : 1 to 0.7 : 1** because:\n- Shoppers pay immediately in **cash/debit card** at the checkout (tiny receivables, rapid stock turnover), whereas\n- Supermarkets enjoy **60–90 days trade credit** from food suppliers (high trade payables).\nConversely, a bespoke yacht builder or luxury furniture workshop needs a much higher buffer because stock sits in production for months.\n\n### Improving liquidity vs Limitations of published accounts\n- **Ways to improve liquidity**: sell surplus non-current assets for cash, replace a short-term bank overdraft with a long-term bank loan (moves debt out of Current Liabilities!), chase overdue receivables, or adopt leaner **Just-in-Time (JIT)** stock control.\n- **Limitations of financial accounts & ratios (Grade 9 AO4 evaluation)**:\n  1. **Historical backward-looking data**: last year's balance sheet cannot reflect a rival launching a disruptive product last week or an impending recession.\n  2. **Window dressing**: managers can legally manipulate year-end snapshots (e.g. delaying supplier payments or running a one-week clearance sale right before 31 December to inflate year-end cash).\n  3. **Qualitative blind spots**: ratios omit staff morale, labour turnover, brand loyalty, ethical reputation and product pipeline.\n  4. **Accounting policy differences**: firms value non-current assets and depreciation differently, distorting cross-firm ROCE comparisons.",
      diagram:
        '<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Current Ratio 1.8 to 1 versus Acid-Test Ratio 0.3 to 1 when £150k of £180k Current Assets is tied up in Inventory"><rect width="640" height="240" rx="14" fill="#f8fafc"/><text x="320" y="25" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#0f172a">Why the Acid-Test Ratio Strips Out Inventory (Fashion Boutique Stress-Test)</text><rect x="40" y="50" width="265" height="165" rx="10" fill="#ecfdf5" stroke="#6ee7b7" stroke-width="1.5"/><text x="172" y="73" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#047857">Current Ratio = 1.8 : 1</text><text x="172" y="92" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#334155">Looks safe! (£180k CA ÷ £100k CL)</text><rect x="62" y="108" width="37" height="26" rx="4" fill="#0ea5e9"/><rect x="99" y="108" width="183" height="26" rx="4" fill="#f59e0b"/><text x="190" y="125" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#ffffff">Unsold Coats £150k</text><rect x="62" y="144" width="122" height="24" rx="4" fill="#ef4444"/><text x="123" y="160" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#ffffff">Current Liabilities £100k</text><text x="172" y="195" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#065f46">Counts slow-moving stock as cash-ready</text><rect x="335" y="50" width="265" height="165" rx="10" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5"/><text x="467" y="73" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#b91c1c">Acid-Test Ratio = 0.3 : 1</text><text x="467" y="92" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#334155">Crisis exposed! ((£180k − £150k) ÷ £100k)</text><rect x="357" y="108" width="37" height="26" rx="4" fill="#0ea5e9"/><text x="445" y="125" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#0369a1">Cash + Rec £30k only!</text><rect x="357" y="144" width="122" height="24" rx="4" fill="#ef4444"/><text x="418" y="160" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#ffffff">Current Liabilities £100k</text><text x="467" y="195" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#991b1b">Only 30p liquid per £1 owed short term!</text></svg>',
      diagramCaption:
        "A wide gap between the Current Ratio (1.8 : 1) and Acid-Test Ratio (0.3 : 1) warns that working capital is trapped inside slow-moving inventory.",
      workedExamples: [
        {
          title: "Calculating Current Ratio and Acid-Test Ratio",
          problem:
            "Kestrel Electronics Ltd holds Inventory of £90,000, Trade Receivables of £66,000, and Cash of £24,000. Its Current Liabilities are £120,000. Calculate (a) the Current Ratio and (b) the Acid-Test Ratio, and comment on its liquidity.",
          steps: [
            "Total **Current Assets** = {{90000 + 66000 + 24000 = 180000}} (£180,000).",
            "(a) **Current Ratio** = {{180000 / 120000 = 1.5}} → **1.5 : 1**.",
            "(b) Subtract Inventory for Liquid Assets: {{180000 - 90000 = 90000}} (£90,000). **Acid-Test Ratio** = {{90000 / 120000 = 0.75}} → **0.75 : 1**.",
            "**Comment**: While the Current Ratio (1.5 : 1) sits at the textbook lower benchmark, half of Current Assets are tied up in electronics inventory (which risks rapid technological obsolescence), leaving only 75p of liquid assets per £1 of short-term debt.",
          ],
          answer: "Current Ratio = 1.5 : 1; Acid-Test Ratio = 0.75 : 1.",
          yourTurn: {
            question:
              "A garden centre has Current Assets of £154,000 (including Inventory of £66,000) and Current Liabilities of £80,000. Calculate the Acid-Test Ratio (give your answer as a decimal to 2 d.p., or as X : 1).",
            answer: { type: "number", value: 1.1, display: "1.1 : 1" },
            solution:
              "Liquid assets = £154,000 − £66,000 = £88,000. Acid-Test Ratio = £88,000 ÷ £80,000 = 1.1 (or 1.1 : 1).",
          },
        },
      ],
      keyPoints: [
        "**Current Ratio** = `Current Assets ÷ Current Liabilities` (healthy zone typically `1.5 : 1` to `2 : 1`).",
        "**Acid-Test Ratio** = `(Current Assets − Inventory) ÷ Current Liabilities` (healthy benchmark around `1 : 1`).",
        "A Current Ratio of `5 : 1` is NOT 'amazing' — it signals **inefficient, idle cash or bloated inventory** failing to earn ROCE!",
        "Published accounts are **historical**, vulnerable to **window dressing**, and ignore **qualitative strengths** like staff loyalty or R&D.",
      ],
      whyItWorks:
        "Creditors and employees must be paid in cash, not warehouse boxes. Stripping out Inventory tests whether a firm could survive a sudden freeze in sales without defaulting on its overdraft or trade payables.",
      strategies: [
        "Always check whether an exam table gives **Total Current Assets** (subtract Inventory!) or lists **Inventory, Receivables, Cash separately** (Acid-Test numerator = Receivables + Cash!).",
        "Use **window dressing** and **qualitative factors** as your killer AO4 evaluation paragraph in 9- and 12-mark financial questions.",
      ],
      thinkDeeper:
        "Why does replacing a £50,000 short-term bank overdraft with a £50,000 five-year bank loan *immediately* improve both the Current Ratio and the Acid-Test Ratio, yet reduce Profit for the Year?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Formula for Gross Profit",
        back: "**Gross Profit = Revenue − Cost of Sales** (deducts direct material/stock costs only).",
      },
      {
        front: "Formula for Operating Profit",
        back: "**Operating Profit = Gross Profit − Expenses (Overheads)**.",
      },
      {
        front: "Formula for Profit for the Year (Net Profit)",
        back: "**Profit for the Year = Operating Profit − Finance Costs (net interest) − Taxation**.",
      },
      {
        front: "Difference between Cost of Sales and Expenses",
        back: "**Cost of Sales** varies directly with making/buying goods sold (raw materials, wholesale stock). **Expenses** are fixed/running overheads (rent, admin salaries, marketing).",
      },
      {
        front: "Gross Profit Margin (GPM) vs Markup — exact denominator trap!",
        back: "**GPM** = `(Gross Profit ÷ Revenue) × 100`. **Markup** = `(Gross Profit ÷ Cost of Sales) × 100`. Never swap their denominators!",
      },
      {
        front: "Formula for Operating Profit Margin (OPM)",
        back: "**OPM = (Operating Profit ÷ Revenue) × 100**.",
      },
      {
        front: "Two equivalent formulas for Capital Employed",
        back: "**Total Equity + Non-Current Liabilities** OR **Total Assets − Current Liabilities**.",
      },
      {
        front: "Formula for Return on Capital Employed (ROCE)",
        back: "**ROCE = (Operating Profit ÷ Capital Employed) × 100** — benchmarks how hard long-term capital works against bank interest rates.",
      },
      {
        front: "Non-Current Assets vs Current Assets",
        back: "**Non-Current Assets** are kept > 12 months for use (buildings, machinery, vans). **Current Assets** turn into cash < 12 months (inventory, receivables, cash).",
      },
      {
        front: "Trade Receivables vs Trade Payables",
        back: "**Trade Receivables** = money credit customers owe *to* the business (Current Asset). **Trade Payables** = money the business owes *to* suppliers (Current Liability).",
      },
      {
        front: "Formula for Working Capital (Net Current Assets)",
        back: "**Working Capital = Current Assets − Current Liabilities**.",
      },
      {
        front: "Formula for Current Ratio & typical benchmark",
        back: "**Current Assets ÷ Current Liabilities** (expressed as `X : 1`). Typical healthy range: **1.5 : 1 to 2 : 1**.",
      },
      {
        front: "Formula for Acid-Test (Quick) Ratio & why Inventory is excluded",
        back: "**(Current Assets − Inventory) ÷ Current Liabilities** (~`1 : 1` benchmark). Inventory is excluded because it is the **least liquid** current asset and may not sell quickly at full value.",
      },
      {
        front: "Why can a Current Ratio of 4.5 : 1 be a problem?",
        back: "Too much capital is sitting **idle** in low-return cash or excessive stock (high storage/obsolescence cost) instead of being invested in productive assets to boost **ROCE**.",
      },
      {
        front: "What is 'window dressing' in financial accounts?",
        back: "Legally presenting year-end accounts in a flattering light (e.g. delaying supplier payments or holding flash sales right before year-end to temporarily inflate cash).",
      },
      {
        front: "Four limitations of relying solely on ratio analysis",
        back: "1. **Historical** backward-looking data. 2. **Window dressing** at year-end. 3. Ignores **qualitative** factors (staff morale, brand reputation). 4. Different accounting/depreciation policies.",
      },
    ],
    mustKnow: [
      "Construct and fill missing blanks in a **Statement of Comprehensive Income** (`Revenue → Cost of Sales → Gross Profit → Expenses → Operating Profit → Finance Costs & Tax → Profit for the Year`).",
      "Distinguish **Dividends** (paid out to shareholders) from **Retained Profit** (reinvested internally onto the Statement of Financial Position).",
      "Classify any item on a **Statement of Financial Position** into Non-Current Assets, Current Assets, Current Liabilities, Non-Current Liabilities or Equity, and compute **Working Capital**, **Net Assets** and **Capital Employed**.",
      "Calculate **Gross Profit Margin**, **Operating Profit Margin** and **Markup** accurately to **2 decimal places** without confusing Margin (`/ Revenue`) and Markup (`/ Cost of Sales`).",
      "Diagnose why GPM and OPM diverge (e.g. rising overheads shrinking OPM despite stable GPM).",
      "Calculate **ROCE** (`Operating Profit ÷ Capital Employed × 100`) and evaluate it against central bank interest rates, past trends and industry rivals.",
      "Calculate **Current Ratio** and **Acid-Test Ratio**, express as `X : 1`, and explain why inventory-heavy retailers face far higher liquidity risk than cash-rich supermarkets.",
      "Evaluate the **limitations of published financial accounts** (historical snapshots, window dressing, inflation, qualitative factors).",
      "Master Edexcel 4BS1 command words: **Calculate** (2 marks: show formula/working + 2 d.p. unit `%` or `: 1`), **Analyse** (6 marks: two linked AO2/AO3 chains of reasoning in context), **Assess** (9 marks) and **Evaluate** (12 marks).",
      "Use the **AJIM Grade 9 framework** on 9- and 12-mark financial questions: **A**nswer the exact option/judgement upfront, **J**ustify with calculated ratios from the case extract (AO2), **I**t depends on (industry model, elasticity, window dressing, qualitative factors), **M**ost important driver in this specific business context.",
      "Distinguish Paper 1 (< 50 staff SMEs with thin cash buffers and unincorporated accounts) from Paper 2 (> 250 staff PLCs publishing audited statutory statements for institutional shareholders).",
    ],
    misconceptions: [
      {
        wrong:
          "Never write: 'Gross Profit Margin and Markup mean the same thing — both divide Gross Profit by Revenue.'",
        right:
          "Write instead (Grade 9): '**Gross Profit Margin** divides Gross Profit by **Revenue** (`GP ÷ Revenue × 100`), whereas **Markup** divides Gross Profit by **Cost of Sales** (`GP ÷ Cost of Sales × 100`). For positive profit, Markup % is always larger than GPM %.'",
      },
      {
        wrong:
          "Never write: 'Acid-Test Ratio = Current Assets ÷ Current Liabilities (same numerator as Current Ratio).'",
        right:
          "Write instead (Grade 9): '**Acid-Test Ratio = (Current Assets − Inventory) ÷ Current Liabilities**. You MUST subtract Inventory because stock is the least liquid current asset and cannot immediately settle short-term debts.'",
      },
      {
        wrong:
          "Never write: 'Gross Profit is the final profit left after paying rent, office wages and advertising.'",
        right:
          "Write instead (Grade 9): '**Gross Profit** only deducts direct **Cost of Sales** (`Revenue − Cost of Sales`). Overhead expenses like rent, admin salaries and marketing are subtracted *after* Gross Profit to find **Operating Profit**.'",
      },
      {
        wrong:
          "Never write: 'ROCE = (Operating Profit ÷ Revenue) × 100.'",
        right:
          "Write instead (Grade 9): 'Dividing Operating Profit by Revenue gives **OPM**, not ROCE! **ROCE = (Operating Profit ÷ Capital Employed) × 100**, where Capital Employed = Total Equity + Non-Current Liabilities.'",
      },
      {
        wrong:
          "Never write: 'The higher the Current Ratio (e.g. 5 : 1), the better the business is managed.'",
        right:
          "Write instead (Grade 9): 'An excessively high Current Ratio (e.g. `5 : 1`) indicates **inefficient working capital** — cash is sitting idle or warehouses are overstocked with unsold inventory instead of being invested to earn a higher **ROCE**.'",
      },
      {
        wrong:
          "Never write: 'Because Profit for the Year is £150,000, the business definitely has £150,000 of cash in the bank.'",
        right:
          "Write instead (Grade 9): '**Profit ≠ Cash**: credit sales count as Revenue immediately even if Trade Receivables have not paid yet, while buying a £200,000 machine drains cash immediately without reducing Operating Profit in full.'",
      },
      {
        wrong:
          "Never write: 'Any firm with an Acid-Test Ratio of 0.7 : 1 is about to go bankrupt.'",
        right:
          "Write instead (Grade 9): 'Liquidity benchmarks depend on the **business model**: fast-turnover supermarkets safely operate at `0.6 : 1` because customers pay cash immediately while suppliers grant 60 days trade credit.'",
      },
    ],
    examMistakes: [
      "Rounding intermediate figures too early or forgetting Edexcel's **2 decimal places** rule on calculate questions (e.g. writing `33%` instead of `33.33%` loses the accuracy mark).",
      "Subtracting Inventory *twice* when an exam table lists `Inventory £40k, Receivables £30k, Cash £20k` instead of Total Current Assets — here Liquid Assets = `£30k + £20k = £50k`, NOT `£50k − £40k`!",
      "Including **Current Liabilities** inside Capital Employed (`Capital Employed = Equity + Non-Current Liabilities` ONLY).",
      "Quoting raw data in 9/12-mark essays ('Revenue rose from £2m to £2.5m') instead of **calculating the ratio** (`GPM fell from 40% to 32%`) to unlock top-band AO2/AO3 marks.",
      "Recommending 'just increase prices to raise GPM' without evaluating **Price Elasticity of Demand (PED)** and competitor retaliation.",
      "Writing generic textbook definitions in **Analyse (6)**, **Assess (9)** and **Evaluate (12)** questions with zero reference to the named business's products, sector or size.",
      "Forgetting that brackets `(45)` on financial statements represent **negative / subtracted** numbers.",
      "Evaluating a single year's ratios in isolation without asking for prior-year trends, competitor benchmarks, and qualitative context.",
    ],
    mnemonics: [
      {
        topic: "Income Statement Ladder (top to bottom)",
        device: "R-C-G-E-O-I-P — 'Real Chefs Grill Every Onion In Butter/Pan'",
        explanation:
          "**R**evenue − **C**ost of Sales = **G**ross Profit − **E**xpenses = **O**perating Profit − **I**nterest & Tax = **P**rofit for the Year.",
      },
      {
        topic: "Margin vs Markup Denominator Saver",
        device: "Mar-GIN = Reve-NUE (both end with N-sound) · Mark-UP = Cost Built UP",
        explanation:
          "**Margin** always divides by **Revenue**; **Markup** divides Gross Profit by the **Cost of Sales** you marked *up*.",
      },
      {
        topic: "Acid-Test Ratio",
        device: "ACID melts away the STOCK (Inventory)!",
        explanation:
          "Pouring 'acid' onto Current Assets burns away illiquid **Inventory**, leaving `(Current Assets − Inventory) ÷ Current Liabilities`.",
      },
      {
        topic: "9 & 12-Mark Ratio Essay Structure",
        device: "AJIM — Answer · Justify (with Ratios!) · It Depends · Most Important",
        explanation:
          "Open with a clear decision, calculate at least 2 ratios from the table as AO2 evidence, weigh Limitations/PED/Window Dressing ('It depends'), and clinch with the decisive factor.",
      },
    ],
    realWorld: [
      {
        title: "Tesco Plc: Thriving on a 0.6 : 1 Acid-Test & 4% OPM",
        detail:
          "UK supermarket leader Tesco routinely operates with an Operating Profit Margin around 4% and an Acid-Test Ratio near 0.6 : 1. Massive daily checkout cash inflows and generous supplier credit terms make low liquidity ratios completely sustainable.",
        emoji: "🛒",
      },
      {
        title: "LVMH vs Discount Retail: High Margin vs High Volume",
        detail:
          "Luxury house LVMH (Louis Vuitton, Dior) achieves Gross Profit Margins above 68% thanks to brand heritage and price-inelastic demand, whereas Aldi relies on razor-thin margins multiplied across rapid inventory turnover.",
        emoji: "👜",
      },
      {
        title: "Carillion Plc Collapse (2018): Profit on Paper, Zero Cash",
        detail:
          "Construction giant Carillion reported healthy accounting profits and paid dividends shortly before collapsing with £7 billion of liabilities — proving why analysts scrutinise cash, receivables and window dressing alongside Income Statements.",
        emoji: "🏗️",
      },
      {
        title: "Next Plc: High ROCE via Disciplined Capital Allocation",
        detail:
          "Fashion retailer Next Plc consistently posts ROCE well above high-street peers by closing underperforming leases early, scaling asset-light online directory sales, and returning surplus cash rather than hoarding idle assets.",
        emoji: "📈",
      },
      {
        title: "Bank of England Rate Rises Raising the ROCE Hurdle",
        detail:
          "When UK base interest rates climbed from 0.1% to over 5%, a business earning 5% ROCE went from looking respectable to barely matching a risk-free savings deposit — forcing boards to cut low-return projects.",
        emoji: "🏦",
      },
    ],
    videos: [
      {
        title: "Edexcel IGCSE Business 4BS1 — Statement of Comprehensive Income Explained",
        channel: "Tutor2u / TakingTheBiz Search",
        url: "https://www.youtube.com/results?search_query=Edexcel+IGCSE+Business+Statement+of+Comprehensive+Income+4BS1",
      },
      {
        title: "Statement of Financial Position (Balance Sheet) & Working Capital — IGCSE Business",
        channel: "Edexcel IGCSE Business Revision Search",
        url: "https://www.youtube.com/results?search_query=Edexcel+IGCSE+Business+Statement+of+Financial+Position+Working+Capital",
      },
      {
        title: "Gross Profit Margin vs Markup & ROCE Calculations — IGCSE Business",
        channel: "TakingTheBiz / Bizconsesh Search",
        url: "https://www.youtube.com/results?search_query=IGCSE+Business+Gross+Profit+Margin+vs+Markup+ROCE",
      },
      {
        title: "Current Ratio, Acid-Test Ratio & Limitations of Accounts — Edexcel 4BS1",
        channel: "Edexcel IGCSE Business Finance Search",
        url: "https://www.youtube.com/results?search_query=Edexcel+IGCSE+Business+Current+Ratio+Acid+Test+Ratio+4BS1",
      },
    ],
    formulas: [
      {
        name: "Revenue (Turnover)",
        formula: "{{\"Revenue\" = \"Selling Price\" * \"Quantity Sold\"}}",
        note: "Top line of the Statement of Comprehensive Income before any costs are deducted.",
      },
      {
        name: "Gross Profit",
        formula: "{{\"Gross Profit\" = \"Revenue\" - \"Cost of Sales\"}}",
        note: "Profit after direct materials and stock bought for resale.",
      },
      {
        name: "Operating Profit",
        formula: "{{\"Operating Profit\" = \"Gross Profit\" - \"Expenses\"}}",
        note: "Profit from normal trading after overheads (rent, salaries, marketing) before interest & tax.",
      },
      {
        name: "Profit for the Year (Net Profit)",
        formula: "{{\"Profit for the Year\" = \"Operating Profit\" - \"Finance Costs\" - \"Tax\"}}",
        note: "Bottom-line profit available for shareholder dividends or retained profit.",
      },
      {
        name: "Retained Profit",
        formula: "{{\"Retained Profit\" = \"Profit for the Year\" - \"Dividends\"}}",
        note: "Ploughed back into Total Equity on the Statement of Financial Position.",
      },
      {
        name: "Working Capital (Net Current Assets)",
        formula: "{{\"Working Capital\" = \"Current Assets\" - \"Current Liabilities\"}}",
        note: "Day-to-day liquidity buffer funding routine operations.",
      },
      {
        name: "Net Assets",
        formula: "{{\"Net Assets\" = \"Total Assets\" - \"Total Liabilities\"}}",
        note: "Always equals Total Equity on the Statement of Financial Position.",
      },
      {
        name: "Capital Employed",
        formula: "{{\"Capital Employed\" = \"Total Equity\" + \"Non-Current Liabilities\"}}",
        note: "Equivalent to Total Assets − Current Liabilities; total long-term funds invested.",
      },
      {
        name: "Gross Profit Margin (GPM)",
        formula: "{{\"GPM\" = (\"Gross Profit\") / (\"Revenue\") * 100}}",
        note: "Percentage of revenue retained after Cost of Sales (round to 2 d.p.).",
      },
      {
        name: "Markup",
        formula: "{{\"Markup\" = (\"Gross Profit\") / (\"Cost of Sales\") * 100}}",
        note: "Percentage added on top of direct Cost of Sales — denominator is Cost of Sales, NOT Revenue!",
      },
      {
        name: "Operating Profit Margin (OPM)",
        formula: "{{\"OPM\" = (\"Operating Profit\") / (\"Revenue\") * 100}}",
        note: "Percentage of revenue converted into Operating Profit after overheads.",
      },
      {
        name: "Return on Capital Employed (ROCE)",
        formula: "{{\"ROCE\" = (\"Operating Profit\") / (\"Capital Employed\") * 100}}",
        note: "Primary efficiency ratio; benchmark against bank interest rates and rivals.",
      },
      {
        name: "Current Ratio",
        formula: "{{\"Current Ratio\" = (\"Current Assets\") / (\"Current Liabilities\")}}",
        note: "Expressed as X : 1; typical textbook guide is 1.5 : 1 to 2 : 1.",
      },
      {
        name: "Acid-Test (Quick) Ratio",
        formula: "{{\"Acid-Test\" = (\"Current Assets\" - \"Inventory\") / (\"Current Liabilities\")}}",
        note: "Excludes illiquid Inventory; typical textbook benchmark is ~1 : 1.",
      },
    ],
  },
};
