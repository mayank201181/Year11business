import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Why did Toyota engineers spend weeks studying American supermarket shelves in the 1950s — and how did watching shoppers restock milk bottles inspire Just-in-Time manufacturing across the entire planet?",
  didYouKnow: [
    "**Toyota's supermarket epiphany**: When Taiichi Ohno visited US Piggly Wiggly supermarkets in the 1950s, he noticed shelves were restocked *only* as shoppers picked items up — inspiring **Just-in-Time (JIT)** and *Kanban* pull cards!",
    "**Sony's Walkman** was famously **product-orientated**: market research initially suggested nobody wanted a cassette player that couldn't record, yet co-founder Akio Morita backed the engineering vision and created a global icon.",
    "**Coca-Cola's 1985 'New Coke' fiasco**: blind primary taste tests measured sweet 3-second sips (**quantitative** preference) while completely missing emotional **qualitative** brand attachment — triggering 400,000 angry phone calls until Classic Coke returned 79 days later!",
    "Every worker on a **Toyota TQM** assembly line can pull an overhead **Andon cord** the second they spot a tiny scratch or loose bolt, halting a multi-million-pound line until the root cause is fixed permanently.",
    "**Lego's Moulding Economies of Scale**: a single precision steel injection mould can cost over £150,000 to engineer, yet spreading that fixed technical cost across hundreds of millions of bricks pushes unit manufacturing cost down to fractions of a penny.",
  ],
  activities: [
    {
      title: "Supermarket Aisle 4Ps & Segmentation Audit",
      emoji: "🛍️",
      materials: ["Smartphone camera or notebook", "Any supermarket coffee, cereal or chocolate aisle"],
      steps: [
        "Pick **three products** sitting on the exact same shelf: an own-label budget pack, a mass-market household brand, and an artisan/organic luxury brand.",
        "Record **Price per 100g**, **Packaging Aesthetics** (Product design mix), **Shelf Eye-Level Placement** (Place/BTL), and **Target Segment** (income, lifestyle, age).",
        "Predict which of the three has the most **price-inelastic demand** and which relies on **flow-production purchasing economies of scale**.",
      ],
      maths:
        "Comparing price per 100g exposes huge added-value and Gross Profit Margin differences engineered purely through branding and segmentation.",
    },
    {
      title: "Paper-Aeroplane Job vs Batch vs Flow Factory Trial",
      emoji: "✈️",
      materials: ["30 sheets of scrap A4 paper", "Coloured pens", "60-second timer"],
      steps: [
        "**Round 1 (Job Production)**: fold and custom-decorate aeroplanes one by one from start to finish for 2 minutes. Count good planes and defective planes.",
        "**Round 2 (Flow + QA)**: assign Step 1 (centre crease), Step 2 (nose folds), Step 3 (wing folds + self-check) — run for 2 minutes!",
        "Calculate **Labour Productivity** (`Good Planes ÷ Workers`) and **Defect Rate %** in both rounds, then test what happens if Step 1 runs out of paper for 20 seconds (**JIT supply shock**!).",
      ],
      maths:
        "Specialisation under Flow leaps Labour Productivity upwards, while zero buffer stock immediately exposes bottleneck downtime.",
    },
  ],
  history: {
    title: "Henry Ford's Highland Park (1913) Meets W. Edwards Deming & Toyota (1950)",
    story:
      "In December 1913 at Highland Park, Michigan, **Henry Ford** switched Model T assembly onto a moving **flow production** line — slashing chassis assembly time from **12.5 hours to 93 minutes** and halving unit car prices, though rigid standardisation ('any colour so long as it is black') and repetitive work caused 370% annual staff turnover! Four decades later in post-war Japan, statistician **W. Edwards Deming** and Toyota's **Taiichi Ohno** fused flow efficiency with **Total Quality Management (TQM)**, **Kaizen** worker empowerment and **Just-in-Time**, proving factories could achieve low unit costs *and* world-beating zero-defect quality simultaneously.",
  },
};
