import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "accounts-ratios-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "income-statement",
      question:
        "Bramble Bakery earns **Revenue of £145,000** and has **Cost of Sales of £58,000**. Overhead Expenses are £49,000. Calculate **Gross Profit** (in £).",
      answer: { type: "number", value: 87000, display: "£87,000" },
      traps: [
        {
          spec: { type: "number", value: 38000 },
          feedback:
            "£38,000 is Operating Profit! Gross Profit only subtracts Cost of Sales (£58,000) from Revenue (£145,000) — do not subtract Expenses yet.",
        },
      ],
      hints: [
        "Gross Profit sits BEFORE Overhead Expenses on the Statement of Comprehensive Income.",
        "Calculate `£145,000 − £58,000`.",
      ],
      solution: [
        "Use `Gross Profit = Revenue − Cost of Sales`.",
        "Gross Profit = £145,000 − £58,000 = **£87,000**.",
      ],
      commonError:
        "Subtracting Overhead Expenses (£49,000) as well, which gives Operating Profit (£38,000) rather than Gross Profit.",
    },
    {
      id: "accounts-ratios-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "financial-position",
      question:
        "A cycle shop holds **Current Assets of £76,000** and **Current Liabilities of £44,000**. Calculate its **Working Capital** (in £).",
      answer: { type: "number", value: 32000, display: "£32,000" },
      traps: [
        {
          spec: { type: "number", value: 120000 },
          feedback:
            "You added Current Liabilities instead of subtracting! Working Capital = Current Assets − Current Liabilities.",
        },
      ],
      hints: [
        "Working Capital is another name for Net Current Assets.",
        "Subtract short-term debts (£44,000) from short-term assets (£76,000).",
      ],
      solution: [
        "Working Capital = Current Assets − Current Liabilities.",
        "Working Capital = £76,000 − £44,000 = **£32,000**.",
      ],
    },
    {
      id: "accounts-ratios-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "profitability-ratios",
      question:
        "Which formula accurately calculates **Markup** in Edexcel IGCSE Business?",
      options: [
        "(Gross Profit ÷ Revenue) × 100",
        "(Gross Profit ÷ Cost of Sales) × 100",
        "(Operating Profit ÷ Revenue) × 100",
        "(Operating Profit ÷ Capital Employed) × 100",
      ],
      answerIndex: 1,
      hints: [
        "Markup measures what percentage was added on top of the direct buying/manufacturing cost.",
        "Dividing by Revenue gives a *Margin*, never a *Markup*!",
      ],
      explanation:
        "**Markup = (Gross Profit ÷ Cost of Sales) × 100**. Dividing Gross Profit by Revenue gives Gross Profit Margin.",
    },
    {
      id: "accounts-ratios-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "profitability-ratios",
      question:
        "Luna Candles Ltd buys wax jars for **£12** each (Cost of Sales) and sells them for **£20** each (Revenue). Calculate the **Gross Profit Margin** (as a %).",
      answer: { type: "number", value: 40, display: "40%" },
      traps: [
        {
          spec: { type: "number", value: 66.67, tolerance: 0.05 },
          feedback:
            "66.67% is the Markup (`£8 ÷ £12 × 100`)! For Gross Profit Margin, divide Gross Profit (£8) by Revenue (£20).",
        },
        {
          spec: { type: "number", value: 60 },
          feedback:
            "60% is the Cost-of-Sales ratio (`£12 ÷ £20 × 100`). First find Gross Profit (`£20 − £12 = £8`), then divide by £20.",
        },
      ],
      hints: [
        "First find Gross Profit per jar: `£20 − £12 = £8`.",
        "Gross Profit Margin divides Gross Profit (£8) by **Revenue (£20)**, then multiplies by 100.",
      ],
      solution: [
        "Gross Profit = £20 − £12 = £8.",
        "Gross Profit Margin = `(£8 ÷ £20) × 100` = **40%**.",
      ],
      commonError: "Dividing £8 by £12 Cost of Sales (66.67% Markup) instead of £20 Revenue.",
    },
    {
      id: "accounts-ratios-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "profitability-ratios",
      question:
        "Using the same candle costing **£12** (Cost of Sales) and selling for **£20** (Revenue), calculate the **Markup** percentage to **2 decimal places**.",
      answer: { type: "number", value: 66.67, tolerance: 0.01, display: "66.67%" },
      traps: [
        {
          spec: { type: "number", value: 40 },
          feedback:
            "40% is the Gross Profit Margin (`£8 ÷ £20 × 100`)! Markup divides Gross Profit (£8) by Cost of Sales (£12).",
        },
      ],
      hints: [
        "Gross Profit per candle is `£20 − £12 = £8`.",
        "Divide £8 by **Cost of Sales (£12)**, multiply by 100, and round to 2 d.p.",
      ],
      solution: [
        "Gross Profit = £20 − £12 = £8.",
        "Markup = `(£8 ÷ £12) × 100 = 66.666...%` = **66.67%** (to 2 d.p.).",
      ],
    },
    {
      id: "accounts-ratios-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "roce-performance",
      question:
        "Peak Climbing Walls Ltd earns **Operating Profit of £63,000** on Revenue of £420,000. Total Equity is **£250,000** and Non-Current Liabilities are **£100,000**. Calculate **ROCE** (as a %).",
      answer: { type: "number", value: 18, display: "18%" },
      traps: [
        {
          spec: { type: "number", value: 15 },
          feedback:
            "15% is the Operating Profit Margin (`£63,000 ÷ £420,000 × 100`)! ROCE divides Operating Profit by Capital Employed (`£250,000 + £100,000`), not Revenue.",
        },
        {
          spec: { type: "number", value: 25.2 },
          feedback:
            "You divided by Total Equity (£250,000) alone! Capital Employed = Total Equity (£250,000) + Non-Current Liabilities (£100,000) = £350,000.",
        },
      ],
      hints: [
        "First find Capital Employed = Total Equity + Non-Current Liabilities.",
        "Divide Operating Profit (£63,000) by Capital Employed (£350,000) and multiply by 100.",
      ],
      solution: [
        "Capital Employed = £250,000 + £100,000 = £350,000.",
        "ROCE = `(£63,000 ÷ £350,000) × 100` = **18%**.",
      ],
      commonError: "Dividing Operating Profit by Revenue (£420,000), which gives OPM (15%) instead of ROCE.",
    },
    {
      id: "accounts-ratios-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "liquidity-ratios",
      question:
        "Fern Boutique holds **Current Assets of £135,000** (including **Inventory of £60,000**) and **Current Liabilities of £100,000**. Calculate the **Acid-Test Ratio**. Give your answer as a decimal to 2 d.p. (or as X : 1).",
      answer: { type: "number", value: 0.75, display: "0.75 : 1" },
      traps: [
        {
          spec: { type: "number", value: 1.35 },
          feedback:
            "1.35 : 1 is the Current Ratio! You forgot to subtract Inventory (£60,000) from Current Assets (£135,000) before dividing by £100,000.",
        },
        {
          spec: { type: "number", value: 0.6 },
          feedback:
            "0.6 : 1 divides Inventory (£60,000) by Current Liabilities! Subtract £60,000 from £135,000 first to get £75,000 of liquid assets.",
        },
      ],
      hints: [
        "Acid-Test strips out illiquid Inventory from Current Assets.",
        "Compute `(£135,000 − £60,000) ÷ £100,000`.",
      ],
      solution: [
        "Liquid Assets = Current Assets − Inventory = £135,000 − £60,000 = £75,000.",
        "Acid-Test Ratio = `£75,000 ÷ £100,000` = **0.75** (or **0.75 : 1**).",
      ],
      commonError: "Forgetting to subtract Inventory (£60,000) and reporting the Current Ratio (1.35 : 1).",
    },
    {
      id: "accounts-ratios-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "financial-position",
      question:
        "Which line on a Statement of Financial Position represents money owed *to* the business by credit customers who have not yet paid their invoices?",
      options: [
        "Trade Payables",
        "Trade Receivables",
        "Retained Profit",
        "Non-Current Liabilities",
      ],
      answerIndex: 1,
      hints: [
        "Think about whether cash will be *received* or *paid* when the invoice is settled.",
        "It is recorded inside Current Assets.",
      ],
      explanation:
        "**Trade Receivables** (debtors) are invoices owed *to* the business by credit customers, recorded as a **Current Asset**. Trade Payables are owed *by* the business to suppliers.",
    },
    {
      id: "accounts-ratios-quiz-q09",
      kind: "written",
      difficulty: "core",
      guideRef: "liquidity-ratios",
      marks: 3,
      question:
        "Explain **one reason** why an outdoor ski-equipment shop might still face a short-term cash crisis despite reporting a Current Ratio of **1.9 : 1**. (3 marks)",
      modelAnswer:
        "Most of its current assets could be tied up in unsold seasonal inventory such as winter skis and jackets, which is illiquid once spring arrives. Consequently, its acid-test ratio may sit well below 1 : 1, leaving insufficient cash or receivables to pay trade payables and overdraft demands on time.",
      markScheme: [
        {
          point: "Identifies that a large share of Current Assets may consist of unsold seasonal inventory / stock.",
          keywords: ["inventory", "stock", "unsold", "skis", "jackets"],
        },
        {
          point: "Explains why stock is illiquid (slow to convert into cash without heavy discounting out of season / low acid-test ratio).",
          keywords: ["illiquid", "acid-test", "acid test", "convert", "cash", "slow"],
        },
        {
          point: "Links to inability to settle immediate short-term debts (trade payables, suppliers, wages or overdraft).",
          keywords: ["payables", "suppliers", "overdraft", "short-term debts", "bills"],
        },
      ],
      hints: [
        "What hidden item sits inside Current Assets for a seasonal ski shop?",
        "Link illiquid stock → low Acid-Test Ratio → inability to pay suppliers/overdraft.",
      ],
      commonError: "Assuming a Current Ratio near 2 : 1 automatically guarantees cash in the bank.",
    },
    {
      id: "accounts-ratios-quiz-q10",
      kind: "short",
      difficulty: "core",
      guideRef: "income-statement",
      question:
        "Metro Print Ltd reports **Operating Profit of £94,000**, **Finance Costs of £14,000**, and **Corporation Tax of £16,000**. Shareholders receive **£24,000 in dividends**. Calculate **Retained Profit** for the year (in £).",
      answer: { type: "number", value: 40000, display: "£40,000" },
      traps: [
        {
          spec: { type: "number", value: 64000 },
          feedback:
            "£64,000 is Profit for the Year! Subtract the £24,000 dividend payout to find Retained Profit kept inside the firm.",
        },
      ],
      hints: [
        "First find Profit for the Year = `Operating Profit − Finance Costs − Tax`.",
        "Then subtract Dividends (£24,000) from Profit for the Year.",
      ],
      solution: [
        "Profit for the Year = £94,000 − £14,000 − £16,000 = £64,000.",
        "Retained Profit = £64,000 − £24,000 = **£40,000**.",
      ],
    },
  ],
  papers: [
    {
      id: "accounts-ratios-p1",
      title: "Practice Paper 1: Small Business Accounts & Ratios (Paper 1 Focus)",
      questions: [
        {
          id: "accounts-ratios-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "income-statement",
          question:
            "Willow Florist sells £82,000 of bouquets in a year. Fresh cut flowers, ribbons and vases cost £31,000. Shop rent, wages and van fuel total £29,000. Calculate **Gross Profit** (in £).",
          answer: { type: "number", value: 51000, display: "£51,000" },
          traps: [
            {
              spec: { type: "number", value: 22000 },
              feedback:
                "£22,000 is Operating Profit! Gross Profit only deducts direct Cost of Sales (£31,000) from Revenue (£82,000).",
            },
          ],
          hints: [
            "Identify Revenue (£82,000) and direct Cost of Sales (£31,000).",
            "Ignore shop rent and van fuel — those are Overhead Expenses.",
          ],
          solution: [
            "Gross Profit = Revenue − Cost of Sales.",
            "Gross Profit = £82,000 − £31,000 = **£51,000**.",
          ],
        },
        {
          id: "accounts-ratios-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "income-statement",
          question:
            "Using Willow Florist's figures (**Revenue £82,000**, **Cost of Sales £31,000**, **Overhead Expenses £29,000**), calculate **Operating Profit** (in £).",
          answer: { type: "number", value: 22000, display: "£22,000" },
          traps: [
            {
              spec: { type: "number", value: 51000 },
              feedback:
                "£51,000 is Gross Profit — now subtract Overhead Expenses (£29,000) to reach Operating Profit.",
            },
          ],
          hints: [
            "Start from Gross Profit (£51,000).",
            "Subtract Overhead Expenses (£29,000).",
          ],
          solution: [
            "Gross Profit = £82,000 − £31,000 = £51,000.",
            "Operating Profit = £51,000 − £29,000 = **£22,000**.",
          ],
        },
        {
          id: "accounts-ratios-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "profitability-ratios",
          question:
            "An independent bookshop earns **Revenue of £160,000** and **Gross Profit of £64,000**. Calculate its **Gross Profit Margin** (as a %).",
          answer: { type: "number", value: 40, display: "40%" },
          traps: [
            {
              spec: { type: "number", value: 66.67, tolerance: 0.05 },
              feedback:
                "66.67% is the Markup (`£64,000 ÷ £96,000 Cost of Sales`)! GPM divides £64,000 by Revenue (£160,000).",
            },
          ],
          hints: [
            "Gross Profit is already given (£64,000) — do not subtract it from £160,000!",
            "Compute `(£64,000 ÷ £160,000) × 100`.",
          ],
          solution: [
            "Gross Profit Margin = `(Gross Profit ÷ Revenue) × 100`.",
            "GPM = `(£64,000 ÷ £160,000) × 100` = **40%**.",
          ],
        },
        {
          id: "accounts-ratios-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "profitability-ratios",
          question:
            "That same bookshop has **Revenue of £160,000** and **Gross Profit of £64,000** (so Cost of Sales is **£96,000**). Calculate its **Markup** percentage to **2 decimal places**.",
          answer: { type: "number", value: 66.67, tolerance: 0.01, display: "66.67%" },
          traps: [
            {
              spec: { type: "number", value: 40 },
              feedback:
                "40% is the Gross Profit Margin! For Markup, divide Gross Profit (£64,000) by Cost of Sales (£96,000).",
            },
          ],
          hints: [
            "Markup divides Gross Profit (£64,000) by **Cost of Sales (£96,000)**.",
            "Multiply by 100 and round `66.666...` to 2 decimal places.",
          ],
          solution: [
            "Markup = `(Gross Profit ÷ Cost of Sales) × 100`.",
            "Markup = `(£64,000 ÷ £96,000) × 100` = **66.67%** (to 2 d.p.).",
          ],
          commonError: "Writing `66.6%` (truncating instead of rounding to `66.67%`) or dividing by Revenue.",
        },
        {
          id: "accounts-ratios-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "profitability-ratios",
          question:
            "Craft Gelato Ltd reports **Revenue of £225,000**, **Cost of Sales of £81,000**, and **Overhead Expenses of £99,000**. Calculate its **Operating Profit Margin** (as a %).",
          answer: { type: "number", value: 20, display: "20%" },
          traps: [
            {
              spec: { type: "number", value: 64 },
              feedback:
                "64% is the Gross Profit Margin (`£144,000 ÷ £225,000 × 100`)! Deduct Overhead Expenses (£99,000) first to get Operating Profit (£45,000).",
            },
          ],
          hints: [
            "Find Gross Profit (`£225k − £81k = £144k`), then Operating Profit (`£144k − £99k = £45k`).",
            "Divide Operating Profit (£45,000) by Revenue (£225,000) and multiply by 100.",
          ],
          solution: [
            "Gross Profit = £225,000 − £81,000 = £144,000.",
            "Operating Profit = £144,000 − £99,000 = £45,000.",
            "Operating Profit Margin = `(£45,000 ÷ £225,000) × 100` = **20%**.",
          ],
        },
        {
          id: "accounts-ratios-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "financial-position",
          question:
            "Oakwood Carpentry Ltd holds **Inventory of £28,000**, **Trade Receivables of £19,000**, and **Cash of £13,000**. It owes **Trade Payables of £24,000** and has a **Bank Overdraft of £16,000**. Calculate **Working Capital** (in £).",
          answer: { type: "number", value: 20000, display: "£20,000" },
          traps: [
            {
              spec: { type: "number", value: 36000 },
              feedback:
                "You forgot to include the £16,000 Bank Overdraft inside Current Liabilities! Total Current Liabilities = £24,000 + £16,000 = £40,000.",
            },
          ],
          hints: [
            "Sum all three Current Assets: `£28,000 + £19,000 + £13,000`.",
            "Sum both Current Liabilities (`£24,000 + £16,000`) and subtract from Current Assets.",
          ],
          solution: [
            "Current Assets = £28,000 + £19,000 + £13,000 = £60,000.",
            "Current Liabilities = £24,000 + £16,000 = £40,000.",
            "Working Capital = £60,000 − £40,000 = **£20,000**.",
          ],
        },
        {
          id: "accounts-ratios-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "liquidity-ratios",
          question:
            "Using Oakwood Carpentry's figures (**Current Assets £60,000**, **Inventory £28,000**, **Current Liabilities £40,000**), calculate its **Current Ratio**. Give your answer as a decimal to 2 d.p. (or as X : 1).",
          answer: { type: "number", value: 1.5, display: "1.5 : 1" },
          traps: [
            {
              spec: { type: "number", value: 0.8 },
              feedback:
                "0.8 : 1 is the Acid-Test Ratio! The Current Ratio includes ALL Current Assets (£60,000 ÷ £40,000).",
            },
            {
              spec: { type: "number", value: 0.67, tolerance: 0.01 },
              feedback:
                "Upside down! Divide Current Assets (£60,000) by Current Liabilities (£40,000), not the reverse.",
            },
          ],
          hints: [
            "Current Ratio uses Total Current Assets (£60,000) without subtracting Inventory.",
            "Divide £60,000 by £40,000.",
          ],
          solution: [
            "Current Ratio = Current Assets ÷ Current Liabilities.",
            "Current Ratio = `£60,000 ÷ £40,000` = **1.5** (or **1.5 : 1**).",
          ],
        },
        {
          id: "accounts-ratios-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "liquidity-ratios",
          question:
            "Now calculate Oakwood Carpentry's **Acid-Test Ratio** (**Current Assets £60,000**, **Inventory £28,000**, **Current Liabilities £40,000**). Give your answer as a decimal to 2 d.p. (or as X : 1).",
          answer: { type: "number", value: 0.8, display: "0.8 : 1" },
          traps: [
            {
              spec: { type: "number", value: 1.5 },
              feedback:
                "1.5 : 1 is the Current Ratio! Subtract Inventory (£28,000) from Current Assets (£60,000) before dividing by £40,000.",
            },
          ],
          hints: [
            "Subtract Inventory (£28,000) from Current Assets (£60,000) to get Liquid Assets.",
            "Divide £32,000 by Current Liabilities (£40,000).",
          ],
          solution: [
            "Liquid Assets = £60,000 − £28,000 = £32,000.",
            "Acid-Test Ratio = `£32,000 ÷ £40,000` = **0.8** (or **0.8 : 1**).",
          ],
        },
        {
          id: "accounts-ratios-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "financial-position",
          question:
            "BrightSpark Tutors Ltd has **Total Equity of £185,000**, **Non-Current Liabilities of £65,000**, and **Current Liabilities of £30,000**. Calculate **Capital Employed** (in £).",
          answer: { type: "number", value: 250000, display: "£250,000" },
          traps: [
            {
              spec: { type: "number", value: 280000 },
              feedback:
                "Do NOT include Current Liabilities (£30,000)! Capital Employed = Total Equity + Non-Current Liabilities only.",
            },
          ],
          hints: [
            "Capital Employed measures *long-term* funds invested in the firm.",
            "Add Total Equity (£185,000) and Non-Current Liabilities (£65,000); ignore Current Liabilities!",
          ],
          solution: [
            "Capital Employed = Total Equity + Non-Current Liabilities.",
            "Capital Employed = £185,000 + £65,000 = **£250,000**.",
          ],
          commonError: "Adding short-term Current Liabilities (£30,000) onto Capital Employed.",
        },
        {
          id: "accounts-ratios-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "roce-performance",
          question:
            "BrightSpark Tutors Ltd generated **Gross Profit of £115,000** and **Overhead Expenses of £75,000** using **Capital Employed of £250,000**. Calculate its **ROCE** (as a %).",
          answer: { type: "number", value: 16, display: "16%" },
          traps: [
            {
              spec: { type: "number", value: 46 },
              feedback:
                "46% uses Gross Profit (£115,000) in the numerator! ROCE uses **Operating Profit** (`£115,000 − £75,000 = £40,000`).",
            },
          ],
          hints: [
            "First calculate Operating Profit = Gross Profit (£115,000) − Expenses (£75,000).",
            "Divide Operating Profit (£40,000) by Capital Employed (£250,000) and multiply by 100.",
          ],
          solution: [
            "Operating Profit = £115,000 − £75,000 = £40,000.",
            "ROCE = `(£40,000 ÷ £250,000) × 100` = **16%**.",
          ],
        },
        {
          id: "accounts-ratios-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "income-statement",
          question:
            "In a damaged Income Statement table, **Operating Profit is £48,000**, **Overhead Expenses are £72,000**, and **Revenue is £210,000**. Calculate the missing **Cost of Sales** figure (in £).",
          answer: { type: "number", value: 90000, display: "£90,000" },
          traps: [
            {
              spec: { type: "number", value: 120000 },
              feedback:
                "£120,000 is Gross Profit (`£48,000 + £72,000`)! Subtract £120,000 from Revenue (£210,000) to find Cost of Sales.",
            },
          ],
          hints: [
            "Work upwards: `Gross Profit = Operating Profit + Overhead Expenses`.",
            "Then use `Cost of Sales = Revenue − Gross Profit`.",
          ],
          solution: [
            "Gross Profit = £48,000 + £72,000 = £120,000.",
            "Cost of Sales = £210,000 − £120,000 = **£90,000**.",
          ],
        },
        {
          id: "accounts-ratios-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "profitability-ratios",
          marks: 4,
          question:
            "Kip's Artisan Roastery saw its **Gross Profit Margin fall from 58% to 47%** after world arabica coffee bean prices surged. Analyse **one way** Kip could restore his Gross Profit Margin. (4 marks)",
          modelAnswer:
            "Kip could raise retail espresso and bag selling prices for café customers, increasing revenue earned per cup relative to direct bean cost. Because speciality single-origin drinkers often have brand loyalty and price-inelastic demand, sales volume should barely dip, lifting gross profit per pound of sales.",
          markScheme: [
            {
              point: "Identifies a valid GPM lever (raising selling prices OR negotiating cheaper/bulk bean supplier costs).",
              keywords: ["selling price", "raise price", "prices", "cheaper supplier", "bulk"],
            },
            {
              point: "Applies directly to the coffee/roastery context (cups, espresso, café drinkers, single-origin bags).",
              keywords: ["espresso", "cup", "café", "cafe", "drinkers", "single-origin", "bags"],
            },
            {
              point: "Explains the accounting link (higher revenue per unit or lower direct cost widens gross profit per £1 of sales).",
              keywords: ["revenue", "direct cost", "gross profit"],
            },
            {
              point: "Develops why it succeeds in context (loyal customers / price-inelastic demand sustain sales volume).",
              keywords: ["inelastic", "loyalty", "loyal", "volume"],
            },
          ],
          hints: [
            "Remember overhead cuts (like rent) do NOT change Gross Profit Margin — stick to Selling Price or direct Cost of Sales!",
            "Link your action to coffee drinkers and explain why sales volume holds up (PED / loyalty).",
          ],
          commonError:
            "Suggesting cutting café rent or electricity — those are overhead Expenses and only improve Operating Profit Margin, NOT Gross Profit Margin!",
        },
        {
          id: "accounts-ratios-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "income-statement",
          marks: 4,
          question:
            "Distinguish between **Retained Profit** and **Dividends**, explaining the trade-off faced by directors of a growing Private Limited Company (Ltd). (4 marks)",
          modelAnswer:
            "Dividends are cash payments distributed out of profit for the year to reward shareholders, whereas retained profit is kept inside the company as an interest-free internal source of finance. Paying generous dividends satisfies family shareholders seeking immediate income, but leaves fewer funds to reinvest in new machinery or expansion without borrowing.",
          markScheme: [
            {
              point: "Defines Dividends accurately as profit paid out to reward shareholders.",
              keywords: ["paid out", "distributed", "reward shareholders", "payments"],
            },
            {
              point: "Defines Retained Profit as profit kept/reinvested inside the firm as internal finance.",
              keywords: ["kept", "reinvest", "internal", "interest-free"],
            },
            {
              point: "Explains shareholder perspective (desire for immediate cash income / return).",
              keywords: ["income", "satisf", "immediate"],
            },
            {
              point: "Explains the opportunity-cost trade-off (less money left for expansion/machinery or need to borrow).",
              keywords: ["expansion", "machinery", "borrow", "fewer funds", "growth"],
            },
          ],
          hints: [
            "Define both appropriations of Profit for the Year clearly.",
            "Explain why paying £1 more in dividends leaves £1 less internal finance for growth.",
          ],
        },
        {
          id: "accounts-ratios-p1-q14",
          kind: "short",
          difficulty: "core",
          guideRef: "liquidity-ratios",
          question:
            "Which **two-word accounting term** describes legally manipulating year-end payment or sales timing so a Statement of Financial Position snapshot looks artificially cash-rich?",
          answer: {
            type: "text",
            accept: ["window dressing", "window-dressing"],
            display: "window dressing",
          },
          traps: [
            {
              spec: { type: "text", accept: ["fraud", "tax evasion", "false accounting"] },
              feedback: "Illegal falsification is fraud — legally timing year-end transactions to flatter a balance-sheet snapshot is **window dressing**.",
            },
          ],
          commonError: "Confusing legal year-end **window dressing** with illegal false accounting or fraud.",
          hints: [
            "Think of making a shop-front display look prettier than what is inside.",
            "Two words: `w_____ d_______`.",
          ],
          solution: [
            "Legally flattering year-end balance sheet figures (e.g. delaying supplier payments past 31 Dec) is called **window dressing**.",
          ],
        },
        {
          id: "accounts-ratios-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "roce-performance",
          marks: 6,
          question:
            "A local gym chain achieved a **ROCE of 13.5%** in 2025 when bank savings interest rates were **4.5%**. Assess whether the directors should rely on this ROCE figure alone before opening three new gyms. (6 marks)",
          modelAnswer:
            "Earning 13.5% triples the 4.5% risk-free bank deposit benchmark, proving existing gym equipment and long-term capital generate a strong operating return. However, published ROCE is historical and ignores liquidity: if cash is tied up or overdrafts are stretched, funding three new sites could trigger insolvency. Ultimately, directors must check acid-test liquidity, local competitor openings and staff retention alongside ROCE before expanding.",
          markScheme: [
            {
              point: "Benchmarks 13.5% ROCE positively against the 4.5% risk-free bank rate (triples safe return).",
              keywords: ["risk-free", "triples", "beats", "benchmark", "deposit"],
            },
            {
              point: "Applies to gym context (fitness equipment / membership return on capital).",
              keywords: ["equipment", "membership", "sites", "fitness"],
            },
            {
              point: "Counter-argues that ROCE is backward-looking / historical.",
              keywords: ["historical", "backward", "past"],
            },
            {
              point: "Points out ROCE ignores short-term liquidity / cash flow (insolvency risk during expansion).",
              keywords: ["liquidity", "insolvency", "acid-test", "cash", "overdraft"],
            },
            {
              point: "Identifies qualitative / external factors omitted (rival gyms, staff retention, local demand).",
              keywords: ["competitor", "rival", "retention", "qualitative"],
            },
            {
              point: "Reaches a balanced judgement combining ROCE with liquidity and market research.",
              keywords: ["ultimately", "alongside", "combine", "must check"],
            },
          ],
          hints: [
            "Start with the strength: compare `13.5%` against `4.5%` (3× the risk-free rate!).",
            "Counter-balance with what ROCE misses: historical data, liquidity/cash-flow strain, and qualitative rivals.",
            "Finish with a clear evaluative judgement (`Ultimately...`).",
          ],
        },
      ],
    },
    {
      id: "accounts-ratios-p2",
      title: "Practice Paper 2: Large Plc Financial Analysis & Evaluation (Paper 2 Focus)",
      questions: [
        {
          id: "accounts-ratios-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "income-statement",
          question:
            "Astra Retail Plc reports **Revenue of £4,800,000**, **Cost of Sales of £2,880,000**, **Expenses of £1,200,000**, and **Finance Costs plus Tax of £210,000**. Calculate **Profit for the Year** (in £).",
          answer: { type: "number", value: 510000, display: "£510,000" },
          traps: [
            {
              spec: { type: "number", value: 720000 },
              feedback:
                "£720,000 is Operating Profit! Subtract Finance Costs plus Tax (£210,000) to get Profit for the Year.",
            },
          ],
          hints: [
            "Gross Profit = `£4,800k − £2,880k = £1,920k`; Operating Profit = `£1,920k − £1,200k = £720k`.",
            "Subtract £210,000 of Finance Costs and Tax from Operating Profit.",
          ],
          solution: [
            "Gross Profit = £4,800,000 − £2,880,000 = £1,920,000.",
            "Operating Profit = £1,920,000 − £1,200,000 = £720,000.",
            "Profit for the Year = £720,000 − £210,000 = **£510,000**.",
          ],
        },
        {
          id: "accounts-ratios-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "profitability-ratios",
          question:
            "Using Astra Retail Plc's figures (**Revenue £4,800,000**, **Cost of Sales £2,880,000**, **Operating Profit £720,000**), calculate its **Operating Profit Margin** (as a %).",
          answer: { type: "number", value: 15, display: "15%" },
          traps: [
            {
              spec: { type: "number", value: 40 },
              feedback:
                "40% is the Gross Profit Margin (`£1,920k ÷ £4,800k × 100`)! Divide Operating Profit (£720,000) by Revenue (£4,800,000).",
            },
          ],
          hints: [
            "Use `OPM = (Operating Profit ÷ Revenue) × 100`.",
            "Compute `(720,000 ÷ 4,800,000) × 100`.",
          ],
          solution: [
            "OPM = `(£720,000 ÷ £4,800,000) × 100` = **15%**.",
          ],
        },
        {
          id: "accounts-ratios-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "profitability-ratios",
          question:
            "Using Astra Retail Plc's **Gross Profit of £1,920,000** and **Cost of Sales of £2,880,000**, calculate its **Markup** percentage to **2 decimal places**.",
          answer: { type: "number", value: 66.67, tolerance: 0.01, display: "66.67%" },
          traps: [
            {
              spec: { type: "number", value: 40 },
              feedback:
                "40% is the Gross Profit Margin (`£1,920k ÷ £4,800k Revenue`)! Markup divides Gross Profit by Cost of Sales (£2,880,000).",
            },
          ],
          hints: [
            "Divide Gross Profit (£1,920,000) by Cost of Sales (£2,880,000) and multiply by 100.",
            "Simplify `192 ÷ 288 = 2/3` and round to 2 d.p.",
          ],
          solution: [
            "Markup = `(£1,920,000 ÷ £2,880,000) × 100 = 66.666...%` = **66.67%** (to 2 d.p.).",
          ],
        },
        {
          id: "accounts-ratios-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "financial-position",
          question:
            "Helios Energy Plc holds **Non-Current Assets of £12.4m**, **Current Assets of £3.6m**, **Current Liabilities of £2.2m**, and **Non-Current Liabilities of £5.8m**. Calculate **Net Assets** in **£ millions** (e.g. `8` for £8m).",
          answer: { type: "number", value: 8, display: "£8m" },
          traps: [
            {
              spec: { type: "number", value: 13.8 },
              feedback:
                "£13.8m is Capital Employed (`£12.4m + £3.6m − £2.2m`)! Subtract Non-Current Liabilities (£5.8m) as well to get Net Assets.",
            },
          ],
          hints: [
            "Total Assets = `12.4 + 3.6 = £16.0m`.",
            "Total Liabilities = `2.2 + 5.8 = £8.0m`. Subtract Total Liabilities from Total Assets!",
          ],
          solution: [
            "Total Assets = £12.4m + £3.6m = £16.0m.",
            "Total Liabilities = £2.2m + £5.8m = £8.0m.",
            "Net Assets = £16.0m − £8.0m = **£8m**.",
          ],
        },
        {
          id: "accounts-ratios-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "roce-performance",
          question:
            "Helios Energy Plc (**Total Equity £8.0m**, **Non-Current Liabilities £5.8m**) earned **Operating Profit of £2.07m**. Calculate its **ROCE** (as a %).",
          answer: { type: "number", value: 15, display: "15%" },
          traps: [
            {
              spec: { type: "number", value: 25.88, tolerance: 0.05 },
              feedback:
                "You divided by Total Equity (£8.0m) alone! Capital Employed = £8.0m + £5.8m = £13.8m.",
            },
          ],
          hints: [
            "Capital Employed = Total Equity (`£8.0m`) + Non-Current Liabilities (`£5.8m`) = `£13.8m`.",
            "Calculate `(2.07 ÷ 13.8) × 100`.",
          ],
          solution: [
            "Capital Employed = £8.0m + £5.8m = £13.8m.",
            "ROCE = `(£2.07m ÷ £13.8m) × 100` = **15%**.",
          ],
        },
        {
          id: "accounts-ratios-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "liquidity-ratios",
          question:
            "Vanguard Apparel Plc holds **Inventory of £4.5m**, **Trade Receivables of £1.8m**, and **Cash of £0.9m**. Its **Current Liabilities are £3.6m**. Calculate its **Current Ratio**. Give your answer as a decimal to 2 d.p. (or as X : 1).",
          answer: { type: "number", value: 2, display: "2 : 1" },
          traps: [
            {
              spec: { type: "number", value: 0.75 },
              feedback:
                "0.75 : 1 is the Acid-Test Ratio! The Current Ratio includes Inventory (`£4.5m + £1.8m + £0.9m = £7.2m`) divided by `£3.6m`.",
            },
          ],
          hints: [
            "Add all three Current Assets: `4.5 + 1.8 + 0.9 = £7.2m`.",
            "Divide £7.2m by Current Liabilities (£3.6m).",
          ],
          solution: [
            "Total Current Assets = £4.5m + £1.8m + £0.9m = £7.2m.",
            "Current Ratio = `£7.2m ÷ £3.6m` = **2** (or **2 : 1**).",
          ],
        },
        {
          id: "accounts-ratios-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "liquidity-ratios",
          question:
            "Using Vanguard Apparel Plc's figures (**Inventory £4.5m**, **Trade Receivables £1.8m**, **Cash £0.9m**, **Current Liabilities £3.6m**), calculate its **Acid-Test Ratio**. Give your answer as a decimal to 2 d.p. (or as X : 1).",
          answer: { type: "number", value: 0.75, display: "0.75 : 1" },
          traps: [
            {
              spec: { type: "number", value: 2 },
              feedback:
                "2 : 1 is the Current Ratio! Exclude Inventory (£4.5m) so only Receivables (£1.8m) + Cash (£0.9m) remain in the numerator.",
            },
          ],
          hints: [
            "Exclude Inventory (£4.5m): Liquid Assets = `£1.8m + £0.9m = £2.7m`.",
            "Divide £2.7m by £3.6m.",
          ],
          solution: [
            "Liquid Assets = £1.8m + £0.9m = £2.7m.",
            "Acid-Test Ratio = `£2.7m ÷ £3.6m` = **0.75** (or **0.75 : 1**).",
          ],
          commonError: "Subtracting £4.5m from £2.7m (double-subtracting Inventory when individual items were listed).",
        },
        {
          id: "accounts-ratios-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "profitability-ratios",
          question:
            "Nordic Homeware Plc achieved **Revenue of £900,000** and a **Gross Profit Margin of 45%**. Its **Operating Profit Margin was 17%**. Calculate its **Overhead Expenses** (in £).",
          answer: { type: "number", value: 252000, display: "£252,000" },
          traps: [
            {
              spec: { type: "number", value: 405000 },
              feedback:
                "£405,000 is Gross Profit (`45% of £900,000`)! Subtract Operating Profit (`17% of £900,000 = £153,000`) to find Expenses.",
            },
            {
              spec: { type: "number", value: 153000 },
              feedback:
                "£153,000 is Operating Profit (`17% of £900,000`)! Overhead Expenses = Gross Profit (£405,000) − Operating Profit (£153,000).",
            },
          ],
          hints: [
            "Expenses consume the percentage gap between GPM (`45%`) and OPM (`17%`), which is `28%` of Revenue!",
            "Compute `28% of £900,000` (or `£405,000 − £153,000`).",
          ],
          solution: [
            "Gross Profit = `0.45 × £900,000 = £405,000`.",
            "Operating Profit = `0.17 × £900,000 = £153,000`.",
            "Overhead Expenses = `£405,000 − £153,000` = **£252,000**.",
          ],
        },
        {
          id: "accounts-ratios-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "profitability-ratios",
          question:
            "A medical-device manufacturer builds a sensor at a direct **Cost of Sales of £80** and applies a **35% Markup**. Calculate the **Selling Price** per sensor (in £).",
          answer: { type: "number", value: 108, display: "£108" },
          traps: [
            {
              spec: { type: "number", value: 28 },
              feedback:
                "£28 is the Gross Profit added (`35% of £80`) — add £28 onto the £80 cost to find the Selling Price!",
            },
          ],
          hints: [
            "Calculate Gross Profit per unit: `35% of £80`.",
            "Add that Gross Profit onto the £80 Cost of Sales.",
          ],
          solution: [
            "Gross Profit per unit = `0.35 × £80 = £28`.",
            "Selling Price = `£80 + £28` = **£108**.",
          ],
        },
        {
          id: "accounts-ratios-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "roce-performance",
          question:
            "Crown Hotels Plc has **Total Assets of £28,000,000**, **Current Liabilities of £3,000,000**, and achieved a **ROCE of 11.2%**. Calculate its **Operating Profit** (in £).",
          answer: { type: "number", value: 2800000, display: "£2,800,000" },
          traps: [
            {
              spec: { type: "number", value: 3136000 },
              feedback:
                "You multiplied 11.2% by Total Assets (£28m) without subtracting Current Liabilities (£3m) first! Capital Employed = £25,000,000.",
            },
          ],
          hints: [
            "First calculate Capital Employed = Total Assets (£28m) − Current Liabilities (£3m) = £25m.",
            "Then compute `Operating Profit = 11.2% × £25,000,000`.",
          ],
          solution: [
            "Capital Employed = £28,000,000 − £3,000,000 = £25,000,000.",
            "Operating Profit = `0.112 × £25,000,000` = **£2,800,000**.",
          ],
        },
        {
          id: "accounts-ratios-p2-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "financial-position",
          question:
            "Which transaction **increases Working Capital** for an electronics Plc?",
          options: [
            "Using £500,000 of cash to pay off £500,000 of Trade Payables",
            "Selling an unused regional warehouse for £1.2 million cash",
            "Buying £400,000 of microchips on 60 days trade credit",
            "Collecting £300,000 cash from Trade Receivables",
          ],
          answerIndex: 1,
          hints: [
            "Paying payables with cash lowers CA and CL by the exact same £500k — Working Capital (`CA − CL`) stays unchanged!",
            "Look for a transaction that converts a **Non-Current** item into a **Current Asset (cash)**.",
          ],
          explanation:
            "Selling an unused **Non-Current Asset** (warehouse) brings **£1.2m cash into Current Assets** without adding any Current Liability, increasing Working Capital by £1.2m. All other options change CA and CL equally (net zero).",
        },
        {
          id: "accounts-ratios-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "profitability-ratios",
          marks: 4,
          question:
            "Between 2024 and 2025, **SwiftAir Plc** saw its **Gross Profit Margin rise from 38% to 41%**, yet its **Operating Profit Margin fell from 12% to 6%**. Analyse how both trends could happen simultaneously at an airline. (4 marks)",
          modelAnswer:
            "Lower aviation fuel prices or higher cabin ticket fares reduced direct flight cost per pound of sales, lifting gross profit per passenger. Meanwhile, heavy overhead expenses such as airport terminal leases, head-office admin salaries and global brand advertising surged much faster than revenue, halving operating margin.",
          markScheme: [
            {
              point: "Explains why GPM rose in airline context (cheaper aviation fuel or higher ticket/baggage fares).",
              keywords: ["fuel", "fares", "ticket", "passenger"],
            },
            {
              point: "Identifies that Overhead Expenses surged faster than revenue between Gross and Operating Profit.",
              keywords: ["overhead", "expenses", "faster"],
            },
            {
              point: "Gives contextual airline overhead examples (airport leases, admin salaries, marketing).",
              keywords: ["airport", "leases", "admin", "advertising", "marketing", "salaries"],
            },
            {
              point: "Links bloated overheads directly to eroding Operating Profit per £1 of sales.",
              keywords: ["erod", "halv", "operating margin", "operating profit"],
            },
          ],
          hints: [
            "Explain the first shift (`38% → 41%` GPM) via airline direct costs (jet fuel / fares).",
            "Explain the second shift (`12% → 6%` OPM) via airline **overhead expenses** between GP and OP!",
          ],
        },
        {
          id: "accounts-ratios-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "liquidity-ratios",
          marks: 4,
          question:
            "Analyse **one way** a large clothing Plc with an **Acid-Test Ratio of 0.45 : 1** could improve its short-term liquidity without issuing new shares. (4 marks)",
          modelAnswer:
            "Management could clear excess warehouse garment stock via promotional discounts or adopt leaner just-in-time ordering, converting slow-moving clothes into cash balances. Holding more cash relative to trade payables raises liquid assets immediately, protecting the retailer against supplier credit withdrawal or overdraft recalls.",
          markScheme: [
            {
              point: "Identifies a valid non-share liquidity fix (clearing excess garment stock / JIT / refinancing overdraft into a long-term loan / selling surplus property).",
              keywords: ["just-in-time", "jit", "promotional", "clear", "long-term loan", "surplus"],
            },
            {
              point: "Applies to clothing retail context (garments, fashion stock, seasonal warehouse lines).",
              keywords: ["garment", "clothes", "fashion", "warehouse"],
            },
            {
              point: "Explains the balance-sheet mechanism (converts stock into cash OR shifts debt out of Current Liabilities).",
              keywords: ["cash", "liquid assets", "payables"],
            },
            {
              point: "Links to reduced insolvency risk / maintaining supplier credit terms.",
              keywords: ["supplier", "overdraft", "protect", "insolvency"],
            },
          ],
          hints: [
            "Do NOT suggest issuing shares (the question forbids it).",
            "Convert fashion inventory into cash (JIT / clearance) OR refinance a short-term overdraft into a 5-year loan.",
          ],
        },
        {
          id: "accounts-ratios-p2-q14",
          kind: "short",
          difficulty: "challenge",
          guideRef: "liquidity-ratios",
          question:
            "Canyon Bikes Plc has **Current Liabilities of £450,000**, a **Current Ratio of 1.8 : 1**, and an **Acid-Test Ratio of 0.92 : 1**. Calculate the exact value of its **Inventory** (in £).",
          answer: { type: "number", value: 396000, display: "£396,000" },
          traps: [
            {
              spec: { type: "number", value: 810000 },
              feedback:
                "£810,000 is Total Current Assets (`1.8 × £450,000`)! Subtract Liquid Assets (`0.92 × £450,000 = £414,000`) to isolate Inventory.",
            },
            {
              spec: { type: "number", value: 414000 },
              feedback:
                "£414,000 is Liquid Assets (`Receivables + Cash`)! Subtract £414,000 from Total Current Assets (£810,000) to find Inventory.",
            },
          ],
          hints: [
            "Find Current Assets = `1.8 × £450,000`.",
            "Find Liquid Assets = `0.92 × £450,000`, then subtract from Current Assets!",
          ],
          solution: [
            "Current Assets = `1.8 × £450,000 = £810,000`.",
            "Liquid Assets (`CA − Inventory`) = `0.92 × £450,000 = £414,000`.",
            "Inventory = `£810,000 − £414,000` = **£396,000**.",
          ],
        },
        {
          id: "accounts-ratios-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "roce-performance",
          marks: 6,
          question:
            "Evaluate whether **cutting overhead marketing and staff training budgets** is the best way for a luxury hotel chain to improve its **Operating Profit Margin and ROCE**. (6 marks)",
          modelAnswer:
            "Trimming training and marketing overheads immediately lowers annual expenses, boosting operating profit and lifting both OPM and ROCE in the short run without extra capital employed. However, five-star hotel guests pay premium inelastic room rates for impeccable personal service; under-trained concierge teams damage TripAdvisor reviews and occupancy. Ultimately, efficiency savings in back-office energy or admin beat cutting guest-facing training, because service quality sustains long-term luxury revenue.",
          markScheme: [
            {
              point: "Explains the immediate short-run boost: lower expenses directly raise Operating Profit, OPM and ROCE.",
              keywords: ["lower", "expenses", "short run", "boost", "immediately"],
            },
            {
              point: "Applies specifically to the luxury hotel context (five-star guests, room rates, concierge, occupancy).",
              keywords: ["guests", "five-star", "room", "concierge", "occupancy", "reviews"],
            },
            {
              point: "Analyses the counter-risk: poorer staff service / weaker brand awareness erodes guest loyalty and bookings.",
              keywords: ["service", "loyalty", "damage", "bookings", "under-trained"],
            },
            {
              point: "Links falling occupancy / room rates to weaker long-term Revenue and Operating Profit.",
              keywords: ["long-term", "revenue"],
            },
            {
              point: "Contrasts guest-facing cuts with safer back-office / energy overhead efficiencies.",
              keywords: ["back-office", "energy", "admin"],
            },
            {
              point: "Delivers a justified AJIM conclusion grounded in luxury positioning.",
              keywords: ["ultimately", "beat", "sustains", "positioning"],
            },
          ],
          hints: [
            "Give the accounting upside first: cutting Expenses raises Operating Profit → higher OPM and ROCE this year.",
            "Challenge it in context: what happens to a *luxury* hotel's occupancy and reviews if staff are untrained?",
            "Conclude using AJIM: cut non-guest back-office waste rather than service quality.",
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "accounts-ratios-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "profitability-ratios",
      question:
        "An electronics distributor prices every laptop using a **Markup of 60%** on Cost of Sales. What is its exact **Gross Profit Margin** percentage? (Give an exact value to 1 d.p.)",
      answer: { type: "number", value: 37.5, display: "37.5%" },
      traps: [
        {
          spec: { type: "number", value: 60 },
          feedback:
            "60% is the Markup on Cost! Pick a test cost like £100 → Selling Price £160 → GPM = £60 ÷ £160 × 100.",
        },
        {
          spec: { type: "number", value: 40 },
          feedback:
            "Do not do `100% − 60%`! If Cost = £100 and Markup = 60%, Gross Profit = £60 and Revenue = £160.",
        },
      ],
      hints: [
        "Pick a clean test number: let Cost of Sales = **£100**.",
        "With a 60% Markup, Gross Profit = **£60**, so Revenue (Selling Price) = `£100 + £60 = £160`.",
        "Now calculate `GPM = (£60 ÷ £160) × 100`.",
      ],
      solution: [
        "Let Cost of Sales = £100. A 60% Markup adds £60 Gross Profit, giving Revenue = £160.",
        "Gross Profit Margin = `(£60 ÷ £160) × 100 = 37.5%`.",
        "General identity: `GPM = Markup ÷ (100 + Markup) × 100 = 60 ÷ 160 × 100` = **37.5%**.",
      ],
      strategy: "Pick a convenient test number (£100)",
    },
    {
      id: "accounts-ratios-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "profitability-ratios",
      question:
        "Conversely, a luxury watch boutique achieves a **Gross Profit Margin of 60%** on every watch sold. What **Markup** percentage did it apply to its Cost of Sales?",
      answer: { type: "number", value: 150, display: "150%" },
      traps: [
        {
          spec: { type: "number", value: 60 },
          feedback:
            "60% is GPM! If Revenue = £100 and GPM = 60%, Gross Profit = £60, so Cost of Sales is only £40!",
        },
        {
          spec: { type: "number", value: 40 },
          feedback:
            "40% (`£40`) is the Cost of Sales share of Revenue — divide £60 Gross Profit by £40 Cost of Sales!",
        },
      ],
      hints: [
        "Pick a clean test Revenue: let Selling Price = **£100**.",
        "At 60% GPM, Gross Profit = **£60**, which means Cost of Sales = `£100 − £60 = £40`.",
        "Now compute `Markup = (£60 ÷ £40) × 100`.",
      ],
      solution: [
        "Let Revenue = £100. With 60% GPM, Gross Profit = £60 and Cost of Sales = £100 − £60 = £40.",
        "Markup = `(£60 ÷ £40) × 100` = **150%**.",
      ],
      strategy: "Pick a convenient test number (£100)",
    },
    {
      id: "accounts-ratios-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "roce-performance",
      question:
        "Atlas Engineering Plc has **Revenue of £2,400,000**, **Gross Profit Margin of 35%**, and **Overhead Expenses of £504,000**. Its Statement of Financial Position shows **Total Assets of £2,500,000** and **Current Liabilities of £400,000**. Calculate **ROCE** (as a %).",
      answer: { type: "number", value: 16, display: "16%" },
      traps: [
        {
          spec: { type: "number", value: 14 },
          feedback:
            "14% is the Operating Profit Margin (`£336k ÷ £2,400k Revenue`)! Divide Operating Profit (£336,000) by Capital Employed (£2,100,000).",
        },
        {
          spec: { type: "number", value: 13.44 },
          feedback:
            "You divided by Total Assets (£2,500,000) instead of subtracting Current Liabilities (£400,000) to get Capital Employed (£2,100,000)!",
        },
      ],
      hints: [
        "Step 1 (Income Statement): Gross Profit = `35% of £2,400,000 = £840,000`; subtract Expenses (£504,000) for Operating Profit.",
        "Step 2 (Balance Sheet): Capital Employed = `Total Assets (£2,500,000) − Current Liabilities (£400,000)`.",
        "Step 3: Divide Operating Profit (£336,000) by Capital Employed (£2,100,000) and multiply by 100.",
      ],
      solution: [
        "Gross Profit = `0.35 × £2,400,000 = £840,000`.",
        "Operating Profit = `£840,000 − £504,000 = £336,000`.",
        "Capital Employed = `£2,500,000 − £400,000 = £2,100,000`.",
        "ROCE = `(£336,000 ÷ £2,100,000) × 100` = **16%**.",
      ],
      strategy: "Bridge Income Statement to Balance Sheet",
    },
    {
      id: "accounts-ratios-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "liquidity-ratios",
      question:
        "A wholesaler currently holds **Current Assets of £240,000** (including **Inventory of £100,000**) and **Current Liabilities of £150,000**. Today it uses **£50,000 of its cash** to pay off **£50,000 of Trade Payables**. Calculate its **NEW Acid-Test Ratio** immediately after this payment (as a decimal to 2 d.p., or as X : 1).",
      answer: { type: "number", value: 0.9, display: "0.9 : 1" },
      traps: [
        {
          spec: { type: "number", value: 0.93, tolerance: 0.01 },
          feedback:
            "0.93 : 1 was the OLD Acid-Test Ratio (`£140k ÷ £150k`) before paying off £50k of payables with £50k cash!",
        },
        {
          spec: { type: "number", value: 1.9 },
          feedback:
            "1.9 : 1 is the NEW Current Ratio (`£190k ÷ £100k`) — remember to subtract the £100,000 Inventory!",
        },
      ],
      hints: [
        "Update Current Assets: `£240,000 − £50,000 cash paid = £190,000` (Inventory is still £100,000).",
        "Update Current Liabilities: `£150,000 − £50,000 payables settled = £100,000`.",
        "Compute the new Acid-Test Ratio: `(£190,000 − £100,000) ÷ £100,000`.",
      ],
      solution: [
        "New Current Assets = £240,000 − £50,000 = £190,000 (Inventory remains £100,000, so Liquid Assets = £90,000).",
        "New Current Liabilities = £150,000 − £50,000 = £100,000.",
        "New Acid-Test Ratio = `£90,000 ÷ £100,000` = **0.9** (or **0.9 : 1**). Notice how paying payables when Acid-Test < 1 actually nudges the ratio *down* from 0.93 to 0.90!",
      ],
      strategy: "Update both numerator and denominator after a balance-sheet transaction",
    },
    {
      id: "accounts-ratios-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "financial-position",
      question:
        "At the start of 2025, Nova Design Ltd had **Total Equity of £310,000**. During 2025 it earned **Revenue of £520,000**, **Cost of Sales of £210,000**, **Expenses of £175,000**, **Finance Costs plus Tax of £35,000**, and paid **£40,000 in Dividends** (no new shares were issued). Calculate **Closing Total Equity** at the end of 2025 (in £).",
      answer: { type: "number", value: 370000, display: "£370,000" },
      traps: [
        {
          spec: { type: "number", value: 410000 },
          feedback:
            "You added all £100,000 of Profit for the Year without deducting the £40,000 paid out in Dividends!",
        },
      ],
      hints: [
        "Walk down the 2025 Income Statement to find **Profit for the Year**.",
        "Subtract **Dividends (£40,000)** to find **2025 Retained Profit**.",
        "Add 2025 Retained Profit onto Opening Total Equity (£310,000)!",
      ],
      solution: [
        "Gross Profit = £520k − £210k = £310k; Operating Profit = £310k − £175k = £135k.",
        "Profit for the Year = £135k − £35k = £100,000.",
        "Retained Profit added to reserves = £100,000 − £40,000 = £60,000.",
        "Closing Total Equity = £310,000 + £60,000 = **£370,000**.",
      ],
      strategy: "Link Income Statement Retained Profit into Balance Sheet Equity",
    },
    {
      id: "accounts-ratios-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "roce-performance",
      question:
        "Two rival bakeries both have **Capital Employed of £400,000**. Bakery A has **Revenue of £800,000** and an **OPM of 9%**. Bakery B has **Revenue of £500,000** and an **OPM of 16%**. By how many **percentage points** does Bakery B's **ROCE** beat Bakery A's **ROCE**?",
      answer: { type: "number", value: 2, display: "2 percentage points" },
      traps: [
        {
          spec: { type: "number", value: 7 },
          feedback:
            "7 percentage points is the gap in OPM (`16% − 9%`), NOT the gap in ROCE! Compute Operating Profit for each bakery first.",
        },
      ],
      hints: [
        "Bakery A Operating Profit = `9% of £800,000 = £72,000` → compute `ROCE_A`.",
        "Bakery B Operating Profit = `16% of £500,000 = £80,000` → compute `ROCE_B`.",
        "Subtract `ROCE_A` from `ROCE_B`!",
      ],
      solution: [
        "Bakery A: Operating Profit = `0.09 × £800,000 = £72,000` → `ROCE_A = (£72,000 ÷ £400,000) × 100 = 18%`.",
        "Bakery B: Operating Profit = `0.16 × £500,000 = £80,000` → `ROCE_B = (£80,000 ÷ £400,000) × 100 = 20%`.",
        "Difference = `20% − 18%` = **2** percentage points.",
      ],
    },
    {
      id: "accounts-ratios-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "liquidity-ratios",
      question:
        "Zenith Toys Ltd currently has **Current Assets of £180,000** (including **£90,000 Inventory**) and **Current Liabilities of £150,000** (which includes a **£60,000 Bank Overdraft**). It refinances the entire **£60,000 overdraft** into a **5-year bank loan**. Calculate its **new Acid-Test Ratio** after refinancing (as a decimal to 2 d.p., or as X : 1).",
      answer: { type: "number", value: 1, display: "1 : 1" },
      traps: [
        {
          spec: { type: "number", value: 2 },
          feedback:
            "2 : 1 is the new Current Ratio (`£180,000 ÷ £90,000`)! Subtract Inventory (£90,000) for the Acid-Test Ratio.",
        },
        {
          spec: { type: "number", value: 0.6 },
          feedback:
            "0.6 : 1 was the old Acid-Test Ratio before moving the £60,000 overdraft out of Current Liabilities!",
        },
      ],
      hints: [
        "Refinancing an overdraft into a 5-year loan leaves Current Assets unchanged (`£180,000`, with `£90,000` Liquid Assets).",
        "Current Liabilities drop by £60,000 because a 5-year loan is a **Non-Current Liability**: `£150,000 − £60,000 = £90,000`.",
        "Compute `£90,000 ÷ £90,000`.",
      ],
      solution: [
        "Liquid Assets (`CA − Inventory`) remain `£180,000 − £90,000 = £90,000`.",
        "New Current Liabilities = `£150,000 − £60,000 = £90,000` (the £60k moves to Non-Current Liabilities).",
        "New Acid-Test Ratio = `£90,000 ÷ £90,000` = **1** (or **1 : 1**).",
      ],
    },
    {
      id: "accounts-ratios-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "liquidity-ratios",
      marks: 6,
      question:
        "Two clothing retailers are up for sale. **TrendFast** has **ROCE of 21%** and an **Acid-Test Ratio of 0.35 : 1**. **ClassicWear** has **ROCE of 11%** and an **Acid-Test Ratio of 1.25 : 1**. Evaluate which company is the safer acquisition for a risk-averse investor. (6 marks)",
      modelAnswer:
        "TrendFast delivers superior capital efficiency at 21%, nearly doubling ClassicWear's return per pound invested. However, an acid-test of 0.35 : 1 signals severe illiquidity, likely caused by fast-fashion garments piling up unsold while supplier payables fall due. For a risk-averse buyer, ClassicWear is the wiser choice: its 11% return still comfortably beats bank deposit rates while 1.25 : 1 liquid cover shields against sudden insolvency, provided accounts were not window-dressed.",
      markScheme: [
        {
          point: "Recognises TrendFast's high 21% capital efficiency advantage (nearly double 11%).",
          keywords: ["efficiency", "doubl", "superior"],
        },
        {
          point: "Diagnoses TrendFast's 0.35 : 1 liquidity danger in fashion context (unsold fast-fashion garments / payables crisis).",
          keywords: ["illiquidity", "fast-fashion", "garments", "unsold", "payables"],
        },
        {
          point: "Evaluates ClassicWear's 11% return positively against bank interest benchmarks.",
          keywords: ["bank", "deposit", "beats"],
        },
        {
          point: "Explains ClassicWear's 1.25 : 1 liquidity buffer protecting against short-term insolvency.",
          keywords: ["buffer", "shields", "insolvency", "liquid cover"],
        },
        {
          point: "Adds Grade 9 caveat on accounts limitations (window dressing, multi-year trends or brand strength).",
          keywords: ["window-dressed", "window dressing", "trends", "brand"],
        },
        {
          point: "Selects ClassicWear explicitly linked to the investor's risk-averse objective.",
          keywords: ["wiser", "safer", "choice", "classicwear"],
        },
      ],
      hints: [
        "Contrast profitability efficiency (`21%` vs `11%` ROCE) against liquidity peril (`0.35 : 1` vs `1.25 : 1`).",
        "Tie `0.35 : 1` to fast-fashion unsold garment stock risk.",
        "Anchor your final AJIM verdict in the buyer's **risk-averse** profile + add a window-dressing caveat.",
      ],
    },
  ],
};
