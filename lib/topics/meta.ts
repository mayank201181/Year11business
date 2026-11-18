// ---------------------------------------------------------------------------
// Topic registry: order, strand, icon and the fixed guide-section outline.
// Section ids here are the contract shared by guide authors (who must use
// them) and question / drill authors (whose guideRef must point at them).
// Pure data — safe to import from Node scripts.
//
// Source: Pearson Edexcel International GCSE in Business (4BS1 9–1) —
// Paper 1: Investigating Small Business (< 50 employees, 50%)
// Paper 2: Investigating Large Business (> 250 employees, 50%)
// All 5 syllabus sections:
//   1. Business Activity & Influences on Business (1.1–1.8)
//   2. People in Business (2.1–2.5)
//   3. Business Finance (3.1–3.5)
//   4. Marketing (4.1–4.3)
//   5. Business Operations (5.1–5.4)
// ---------------------------------------------------------------------------
import type { Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  /** What this section must teach. */
  covers: string;
  /** IB / A-Level Business look-ahead. */
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  /** Optional second strand when a combined syllabus unit spans two strands. */
  secondaryStrand?: Strand;
  icon: string;
  /** Which Edexcel 4BS1 specification units this topic covers. */
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = ["Activity & External", "People", "Finance", "Marketing", "Operations"];

export const TOPIC_META: TopicMeta[] = [
  // ----------------------- ACTIVITY & EXTERNAL -----------------------------
  {
    id: "business-activity",
    title: "Objectives, Stakeholders & Business Ownership",
    strand: "Activity & External",
    icon: "🏢",
    curriculum: "Edexcel 4BS1 Topics 1.1–1.3 & 1.8 — Business Objectives, Stakeholders, Types of Organisations, Classification of Businesses & Business Success/Failure",
    sections: [
      {
        id: "business-objectives",
        heading: "Financial & non-financial objectives",
        covers: "Financial objectives (survival, profit, sales, market share, financial security) vs non-financial objectives (social objectives, personal satisfaction, challenge, independence and control), SMART targets, and why objectives evolve as a business grows or market conditions change.",
      },
      {
        id: "stakeholders-conflicts",
        heading: "Stakeholders & conflicting objectives",
        covers: "Internal stakeholders (owners/shareholders, managers, employees) and external stakeholders (customers, suppliers, financiers/banks, local community, government); how business decisions create trade-offs and conflicts (e.g. higher wages vs shareholder dividends, automation vs job security).",
      },
      {
        id: "unincorporated-incorporated",
        heading: "Sole traders, partnerships, Ltds & Plcs",
        covers: "Unincorporated businesses (sole traders, partnerships, Deeds of Partnership) with unlimited liability vs incorporated companies (private limited companies Ltd and public limited companies Plc) with limited liability, separate legal identity, divorce between ownership and control, and stock exchange flotation (IPO).",
      },
      {
        id: "franchises-social-public",
        heading: "Franchises, social enterprises & public sector",
        covers: "Franchising (royalties, start-up fee, brand support — advantages and drawbacks for franchisor and franchisee), joint ventures, social enterprises, lifestyle & online businesses, multinationals overview, public corporations and privatisation.",
      },
      {
        id: "sectors-and-success",
        heading: "Economic sectors & business success or failure",
        covers: "Primary, secondary and tertiary sectors across developing vs developed economies (industrialisation and de-industrialisation); measuring business size (revenue, employees, capital employed, market share) and why businesses succeed or fail (cash-flow insolvency, lack of finance, poor management, competition, failure to innovate).",
      },
    ],
  },
  {
    id: "location-globalisation-external",
    title: "Location, Globalisation, Policy & External Factors",
    strand: "Activity & External",
    icon: "🌐",
    curriculum: "Edexcel 4BS1 Topics 1.4–1.7 — Location Decisions, Globalisation & MNCs, Exchange Rates, Government Policy & PESTLE External Factors",
    sections: [
      {
        id: "location-decisions",
        heading: "Business location decisions",
        covers: "Proximity to market, labour, raw materials and competitors; nature of business activity (heavy manufacturing vs high-street retail vs footloose e-commerce); land/rent costs, transport & digital infrastructure, legal regulations and government regional grants.",
      },
      {
        id: "globalisation-mncs",
        heading: "Globalisation & multinationals (MNCs)",
        covers: "Concept and drivers of globalisation (falling transport costs, e-commerce, trade blocs/deregulation), opportunities and threats for domestic firms, why firms become MNCs, and positive vs negative impacts of FDI/MNCs on host countries (jobs, tax revenue, skills transfer vs profit repatriation, environmental strain and squeezing local SMEs).",
      },
      {
        id: "trade-exchange-rates",
        heading: "International trade & exchange rates (SPICED / WPIDEC)",
        covers: "Imports and exports, protectionism (tariffs and quotas), currency conversion calculations, and how appreciation (SPICED: Strong Pound Imports Cheaper Exports Dearer) and depreciation (WPIDEC) affect importers, exporters, inflation and competitiveness.",
      },
      {
        id: "government-policies",
        heading: "Government spending, taxation & interest rates",
        covers: "Government economic objectives; fiscal policy — direct taxes (income tax, corporation tax) and indirect taxes (VAT/GST, excise duties) plus infrastructure/subsidy spending; monetary policy — central bank interest rates and their impact on consumer spending/saving, mortgages, overdraft/loan costs and business investment.",
      },
      {
        id: "external-pestle-ethics",
        heading: "PESTLE, legislation, ethics & pressure groups",
        covers: "Social, technological, environmental/sustainable, political and competitive external shocks (PESTLE); consumer protection, competition and environmental legislation; ethical trade-offs (fair wages, supply chains, greenwashing vs costs) and pressure-group tactics (boycotts, viral campaigns, lobbying).",
      },
    ],
  },

  // ------------------------------- PEOPLE ----------------------------------
  {
    id: "people-communication-recruitment",
    title: "Communication, Recruitment, Selection & Training",
    strand: "People",
    icon: "🤝",
    curriculum: "Edexcel 4BS1 Topics 2.1–2.3 — Internal & External Communication, Recruitment & Selection Process, Training & Employment Law",
    sections: [
      {
        id: "effective-communication",
        heading: "Internal & external communication channels",
        covers: "Upward, downward and horizontal communication; formal vs informal channels; choosing between face-to-face meetings, video calls, email, written reports, noticeboards and social media; why poor communication damages morale, efficiency and customer retention.",
      },
      {
        id: "barriers-to-communication",
        heading: "Barriers to communication & how to overcome them",
        covers: "Technical jargon, language/cultural differences, excessively tall hierarchies (distortion along chains of command), information overload, poor timing, geographical/time-zone distance and technological failure — plus practical fixes (feedback loops, plain language, flatter channels).",
      },
      {
        id: "recruitment-selection",
        heading: "Employment types, recruitment & selection",
        covers: "Full-time, part-time, job share, temporary, seasonal, freelance and zero-hours contracts; Job Description (duties, pay, reporting line) vs Person Specification (essential/desirable qualifications, experience, skills); Internal vs External recruitment; selection stages (CVs, application forms, shortlisting, interviews, aptitude/psychometric tests, references).",
      },
      {
        id: "training-employment-law",
        heading: "Induction, on/off-the-job training & employment law",
        covers: "Induction training for new starters, On-the-job training (shadowing, mentoring, coaching) vs Off-the-job training (external courses, simulations, college) — cost, productivity and retention trade-offs; legal controls on employment (equal opportunities / anti-discrimination on gender, race, disability, age and religion; National Minimum/Living Wage; health & safety; unfair dismissal).",
      },
    ],
  },
  {
    id: "motivation-organisation",
    title: "Motivation Theories, Rewards & Organisational Structures",
    strand: "People",
    icon: "🏗️",
    curriculum: "Edexcel 4BS1 Topics 2.4–2.5 — Motivation Theories (Maslow, Herzberg, Taylor), Financial & Non-Financial Methods, Hierarchies & Leadership",
    sections: [
      {
        id: "motivation-theories",
        heading: "Why motivation matters: Taylor, Maslow & Herzberg",
        covers: "Impact of motivation on labour productivity, absenteeism, labour turnover (staff retention) and customer service; F.W. Taylor (scientific management & piece-rate pay), Abraham Maslow (5-tier Hierarchy of Needs) and Frederick Herzberg (Two-Factor Theory: hygiene factors prevent dissatisfaction vs motivators create satisfaction).",
      },
      {
        id: "financial-rewards",
        heading: "Financial methods of motivation",
        covers: "Remuneration methods: time-rate wages, piece-rate wages, annual salaries, sales commission, performance-related pay (PRP), bonuses, profit sharing, share ownership schemes and fringe benefits (perks such as health insurance, company cars, subsidised meals) — matching pay systems to Paper 1 SMEs and Paper 2 PLCs.",
      },
      {
        id: "non-financial-motivation",
        heading: "Non-financial methods of motivation",
        covers: "Job rotation (variety, multi-skilling), job enlargement (more tasks at same level), job enrichment (greater challenge and responsibility — Herzberg), empowerment, autonomous workgroups/teamworking and career progression.",
      },
      {
        id: "organisational-charts",
        heading: "Tall vs flat hierarchies, span of control & delegation",
        covers: "Reading organisational charts: chain of command, layers of hierarchy, wide vs narrow span of control, tall vs flat structures, delayering (cutting middle management), delegation (passing authority down while ultimate responsibility stays with the manager) and functional departments (HR, Finance, Marketing, Operations).",
      },
      {
        id: "centralisation-leadership",
        heading: "Centralised vs decentralised & leadership styles",
        covers: "Centralised vs decentralised decision-making (consistency & bulk buying vs local market responsiveness & manager empowerment); Autocratic, Democratic and Laissez-faire leadership styles — when each succeeds (crisis/unskilled tasks vs skilled teams vs R&D/creative studios).",
      },
    ],
  },

  // ------------------------------- FINANCE ---------------------------------
  {
    id: "sources-cashflow-breakeven",
    title: "Sources of Finance, Cash Flow & Break-Even Analysis",
    strand: "Finance",
    icon: "💷",
    curriculum: "Edexcel 4BS1 Topics 3.1–3.3 — Internal & External Finance, Cash-Flow Forecasting, Costs, Revenue & Break-Even Analysis",
    sections: [
      {
        id: "internal-external-finance",
        heading: "Internal & external sources of finance (short vs long term)",
        covers: "Capital vs revenue expenditure; Internal finance (owner's personal savings, retained profit, sale of surplus assets); Short-term external finance (bank overdraft, trade credit, debt factoring); Long-term external finance (bank loan, commercial mortgage, hire purchase, leasing, share capital — Ltd vs Plc!, venture capital, crowdfunding, government grants).",
      },
      {
        id: "cash-flow-forecasting",
        heading: "Cash vs profit & 6-month cash-flow forecasts",
        covers: "Critical distinction between cash (liquidity) and profit (credit sales, timing of payments, capital purchases); completing cash-flow tables (Net Cash Flow = Cash Inflows − Cash Outflows; Closing Balance = Opening Balance + Net Cash Flow; next Opening Balance = previous Closing Balance); solving cash deficits (overdrafts, chasing receivables, extending trade credit, cutting stock).",
      },
      {
        id: "costs-revenue-profit",
        heading: "Fixed, variable & total costs, revenue and profit",
        covers: "Fixed costs (rent, salaries, insurance), variable costs (raw materials, packaging, piece-rate wages: VC = VC per unit × output), total costs (TC = FC + VC), average unit cost (TC ÷ output), total revenue (TR = Price × Quantity) and profit or loss (TR − TC).",
      },
      {
        id: "breakeven-calculation",
        heading: "Contribution & break-even output calculations",
        covers: "Contribution per unit (Selling Price − Variable Cost per unit), total contribution (Contribution per unit × output), Break-Even Output formula (Fixed Costs ÷ Contribution per unit, rounding up when whole units are required), and output needed for a target profit ((Fixed Costs + Target Profit) ÷ Contribution per unit).",
      },
      {
        id: "breakeven-charts-mos",
        heading: "Break-even charts, margin of safety & evaluation",
        covers: "Constructing and interpreting break-even charts (horizontal FC line, TC starting at FC, TR starting at origin, break-even point, profit and loss wedges), Margin of Safety (Actual Output − Break-Even Output), shifting lines when price/FC/VC changes, and limitations of break-even analysis (assumes all output is sold at one price and linear costs).",
      },
    ],
  },
  {
    id: "accounts-ratios",
    title: "Financial Documents & Ratio Analysis",
    strand: "Finance",
    icon: "📊",
    curriculum: "Edexcel 4BS1 Topics 3.4–3.5 — Statement of Comprehensive Income, Statement of Financial Position, Profitability & Liquidity Ratios",
    sections: [
      {
        id: "income-statement",
        heading: "Statement of Comprehensive Income (profit & loss)",
        covers: "Structure and calculations: Revenue, Cost of Sales, Gross Profit = Revenue − Cost of Sales, Expenses/Overheads, Operating Profit = Gross Profit − Expenses, Finance Costs (interest) and Taxation, Profit for the Year (Net Profit), and how profit is split between dividends and retained profit.",
      },
      {
        id: "financial-position",
        heading: "Statement of Financial Position (balance sheet)",
        covers: "Non-current assets (property, machinery, vehicles), Current assets (inventory, trade receivables, cash), Current liabilities (overdraft, trade payables), Net Current Assets / Working Capital (Current Assets − Current Liabilities), Non-current liabilities (long-term loans, mortgages), Net Assets and Total Equity / Capital Employed.",
      },
      {
        id: "profitability-ratios",
        heading: "Gross Profit Margin, Operating Profit Margin & Markup",
        covers: "Gross Profit Margin = (Gross Profit ÷ Revenue) × 100, Operating Profit Margin = (Operating Profit ÷ Revenue) × 100, and Markup = (Gross Profit ÷ Cost of Sales) × 100 — never confuse Margin with Markup! Strategies to boost GPM vs OPM and stakeholder interpretation.",
      },
      {
        id: "roce-performance",
        heading: "Return on Capital Employed (ROCE)",
        covers: "Capital Employed = Total Equity + Non-Current Liabilities (or Total Assets − Current Liabilities); ROCE = (Operating Profit ÷ Capital Employed) × 100; benchmarking ROCE against central bank interest rates, prior years and competitors, and how to improve ROCE.",
      },
      {
        id: "liquidity-ratios",
        heading: "Current Ratio, Acid-Test Ratio & limitations of accounts",
        covers: "Current Ratio = Current Assets ÷ Current Liabilities (ideal benchmark ~1.5:1 to 2:1), Acid-Test (Quick) Ratio = (Current Assets − Inventory) ÷ Current Liabilities (benchmark ~1:1; why inventory is least liquid and why cash-rich supermarkets differ from manufacturers), working capital management, and limitations of published accounts (historical figures, window dressing, qualitative factors omitted).",
      },
    ],
  },

  // ----------------------- MARKETING & OPERATIONS --------------------------
  {
    id: "marketing-and-operations",
    title: "Marketing Mix & Business Operations",
    strand: "Marketing",
    secondaryStrand: "Operations",
    icon: "🚀",
    curriculum: "Edexcel 4BS1 Topics 4.1–4.3 & 5.1–5.4 — Market Research, Segmentation, The 4Ps Marketing Mix, Production Methods, Lean/JIT, Economies of Scale & Quality",
    sections: [
      {
        id: "market-research-segmentation",
        heading: "Market research, sampling & market segmentation",
        covers: "Market orientation vs product orientation; Primary (field) research (questionnaires, interviews, focus groups, observation, test marketing) vs Secondary (desk) research (market reports, census, company accounts); quantitative vs qualitative data, sampling bias; mass vs niche markets and segmentation (demographic, geographic, income, behavioural/lifestyle).",
      },
      {
        id: "markets-ped-competition",
        heading: "Market share, dynamic markets & price elasticity",
        covers: "Market size and Market Share = (Firm's Sales ÷ Total Market Sales) × 100; dynamic markets & e-commerce; Price Elasticity of Demand (price elastic vs price inelastic demand) and how PED guides pricing decisions to maximise revenue; competing via differentiation, price and service.",
      },
      {
        id: "marketing-mix-4ps",
        heading: "The 4Ps Marketing Mix: Product, Price, Place & Promotion",
        covers: "Product (design mix, branding, USP, Boston Matrix: Star, Cash Cow, Question Mark, Dog; Product Life Cycle & extension strategies); Pricing strategies (cost-plus, competitive, penetration, skimming, promotional, predatory); Place (distribution channels: producer → wholesaler → retailer → consumer vs direct e-commerce); Promotion (above-the-line advertising vs below-the-line sales promotions, PR, sponsorship, social media).",
      },
      {
        id: "production-lean-jit",
        heading: "Job, batch & flow production, productivity & Lean/JIT",
        covers: "Factors of production (land, labour, capital, enterprise); Capital-intensive vs Labour-intensive operations; Job, Batch and Flow (mass) production — pros/cons for Paper 1 artisan firms vs Paper 2 global factories; Labour Productivity = Total Output ÷ Number of Workers; Lean production: Kaizen (continuous improvement), Just-in-Time (JIT) vs buffer stock, and cell production.",
      },
      {
        id: "economies-scale-quality",
        heading: "Economies & diseconomies of scale and quality management",
        covers: "Average unit cost = Total Cost ÷ Output; Internal economies of scale (purchasing, technical, managerial, financial, marketing, risk-bearing) & External economies of scale vs Diseconomies of scale (poor communication, coordination failure, worker alienation); Quality Control (end-of-line inspection) vs Quality Assurance & Total Quality Management (TQM — zero defects built into every stage) and competitive advantage.",
      },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
