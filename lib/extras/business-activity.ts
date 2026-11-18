import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "In 1602, the Dutch East India Company invented tradable limited-liability shares so spice ships could sink in storms without bankrupting ordinary Amsterdam bakers — creating the blueprint for every `Ltd` and `Plc` on Earth today.",
  didYouKnow: [
    "**Over 99% of UK businesses are SMEs**, yet large enterprises (`>250` employees — the focus of Edexcel Paper 2!) generate roughly **half of all private-sector turnover** and employ around **40% of the workforce**.",
    "Without a written **Deed of Partnership**, the Partnership Act 1890 forces partners to split profits **50 : 50** — even if one partner invested 90% of the start-up cash and works 70 hours a week while the other stays at home!",
    "When **Rolex** sells a £10,000 watch, **£0 goes to stock-market speculators**: Rolex is wholly owned by the Hans Wilsdorf Foundation, blending ultra-luxury manufacturing with charitable and social reinvestment.",
    "Nearly **80% of small business failures** trace back to **cash-flow crises** rather than lack of customer demand — proving that full order books cannot save a firm whose customers pay 90 days late.",
    "In developed economies like Singapore and the UK, the **tertiary sector** accounts for **75%–80%+ of GDP**, whereas agriculture (**primary sector**) contributes less than **1%** despite feeding millions through high-tech mechanisation.",
  ],
  activities: [
    {
      title: "The Ownership Stress-Test Roleplay",
      emoji: "⚖️",
      materials: ["A sheet of paper folded into 4 columns", "Pen & calculator"],
      steps: [
        "Invent a small venture you would love to launch with £20,000 of savings (e.g. bubble-tea kiosk, tutoring agency, 3D-printed bike accessories).",
        "Write four column headers: **Sole Trader**, **50:50 Partnership**, **Private Limited Company (`Ltd`)**, and **Franchisee**.",
        "Run Scenario A (**Boom Year**: £120,000 revenue, £40,000 profit before royalties) and calculate how much *you personally* keep and who can overrule your product menu in each column.",
        "Run Scenario B (**Crash Year**: supplier lawsuit leaves £65,000 unpaid debt above business assets) and write down your exact personal loss in each column.",
      ],
      maths:
        "Comparing upside profit retention ({{100%}} vs {{50%}} vs after {{8%}} revenue royalty) against downside personal liability (unlimited **£65,000** personal hit vs **£0** extra beyond your £20,000 `Ltd` share capital) brings Paper 1 9-mark ownership evaluations to life.",
    },
    {
      title: "10-Minute Fridge-to-Field Sector Audit",
      emoji: "🥛",
      materials: ["3 everyday items from your kitchen or desk", "Notebook"],
      steps: [
        "Pick three items (e.g. a carton of oat milk, a smartphone case, a pair of running shoes).",
        "For each item, map one **Primary** firm (extraction/farming), one **Secondary** firm (processing/assembly), and two **Tertiary** firms (logistics, retail, marketing, payment app) needed to put it in your hand.",
        "Identify where the **highest profit margin** sits along that chain — and write two sentences explaining why developed economies specialise in the tertiary links (design, software, branding).",
      ],
      maths:
        "Tracing **interdependence** across primary → secondary → tertiary value chains shows why a drought or mining strike in one country ripples straight into secondary factory costs and tertiary retail prices.",
    },
  ],
  history: {
    title: "The South Sea Bubble & Why Incorporation Rules Exist",
    story:
      "In 1720 London went wild for shares in the **South Sea Company**, promising riches from Atlantic trade. Speculators launched dozens of absurd copycat ventures — one famously advertised *'A company for carrying on an undertaking of great advantage, but nobody to know what it is!'* — and thousands queued to hand over their life savings. When the bubble burst, families were ruined overnight (even Isaac Newton lost £20,000, sighing that he could *'calculate the motions of the heavenly bodies, but not the madness of people'*). Parliament responded by heavily restricting joint-stock companies for over a century until the **Limited Liability Act 1855** created modern regulated registration, audited public accounts for PLCs, and the legal firewall between corporate risk and household savings.",
  },
};
