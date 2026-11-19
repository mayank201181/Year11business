"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

function MarketingPedSimulator() {
  const [pricePct, setPricePct] = useState(0); // -30% to +30% vs £20 base
  const [pedMag, setPedMag] = useState(1.8); // 0.3 to 3.0
  const [promoSpend, setPromoSpend] = useState(20); // £0k to £80k
  const [extensionOn, setExtensionOn] = useState<"off" | "on">("off");

  const basePrice = 20;
  const baseQty = 5000 + promoSpend * 45; // Promotion shifts base demand right
  const newPrice = basePrice * (1 + pricePct / 100);
  const qtyPctChange = -pedMag * pricePct;
  const newQty = Math.max(200, Math.round(baseQty * (1 + qtyPctChange / 100)));

  const baseRevenue = basePrice * baseQty;
  const newRevenue = Math.round(newPrice * newQty);
  const revDelta = newRevenue - baseRevenue;

  const unitVarCost = 8;
  const fixedCost = 25000;
  const operatingProfit = Math.round(newQty * (newPrice - unitVarCost) - fixedCost - promoSpend * 1000);

  const isElastic = pedMag > 1.05;
  const isInelastic = pedMag < 0.95;

  // Build Product Life Cycle SVG curve
  const plcMain = "M 32 158 C 68 158, 92 142, 128 108 C 165 72, 205 44, 255 44 C 298 44, 332 85, 388 142";
  const plcExt = "M 268 46 C 302 30, 344 26, 392 42";

  return (
    <WidgetFrame
      title="Marketing Mix Pricing, PED & Product Life Cycle Simulator"
      tryThis={[
        "Set **|PED| = 2.2 (Elastic)** and raise Price by **+20%** — watch **Total Revenue crash** as shoppers switch to substitutes!",
        "Now flip **|PED| = 0.4 (Inelastic USP)** at **+20% Price** — watch **Revenue and Operating Profit surge**!",
        "Toggle **Extension Strategy ON** to see how a Maturity rebrand/new flavour lifts the Product Life Cycle curve.",
      ]}
      caption={
        <div className="space-y-1">
          <p>
            <strong>PED Diagnosis ({isElastic ? "Price Elastic |PED| > 1" : isInelastic ? "Price Inelastic |PED| < 1" : "Unit Elastic |PED| ≈ 1"}):</strong>{" "}
            A <strong>{pricePct >= 0 ? `+${pricePct}%` : `${pricePct}%`}</strong> price move (£20.00 → <strong>£{newPrice.toFixed(2)}</strong>) causes quantity demanded to move by{" "}
            <strong>{qtyPctChange >= 0 ? `+${qtyPctChange.toFixed(1)}%` : `${qtyPctChange.toFixed(1)}%`}</strong> to <strong>{newQty.toLocaleString("en-GB")} units</strong>.
          </p>
          <p>
            <strong>Grade 9 Profit Check:</strong> Revenue changed by{" "}
            <strong>
              {revDelta >= 0 ? "+" : "−"}£{Math.abs(revDelta).toLocaleString("en-GB")}
            </strong>
            , leaving Operating Profit (after £8/unit VC, £25k FC and £{promoSpend}k Promotion) at{" "}
            <strong>
              {operatingProfit < 0 ? "−" : ""}£{Math.abs(operatingProfit).toLocaleString("en-GB")}
            </strong>
            .
          </p>
        </div>
      }
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-bold uppercase tracking-wide text-ink-2">Product Life Cycle Maturity Action:</span>
        <Segmented
          label="Extension Strategy"
          value={extensionOn}
          onChange={setExtensionOn}
          options={[
            { value: "off", label: "No Extension (Enters Decline)" },
            { value: "on", label: "Launch Extension Strategy!" },
          ]}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <Slider
            label="Price Change from £20 Base (%)"
            value={pricePct}
            min={-30}
            max={30}
            step={5}
            onChange={setPricePct}
            format={(v) => `${v >= 0 ? "+" : ""}${v}% (£${(20 * (1 + v / 100)).toFixed(2)})`}
          />
          <Slider
            label="Price Elasticity Magnitude |PED|"
            value={pedMag}
            min={0.3}
            max={3.0}
            step={0.1}
            onChange={setPedMag}
            format={(v) => `${v.toFixed(1)} (${v > 1.05 ? "Elastic" : v < 0.95 ? "Inelastic" : "Unit"})`}
          />
          <Slider
            label="Promotion Spend (£000)"
            value={promoSpend}
            min={0}
            max={80}
            step={5}
            onChange={setPromoSpend}
            format={(v) => `£${v}k`}
          />
        </div>

        <div className="space-y-3">
          <svg
            viewBox="0 0 420 185"
            className="w-full rounded-xl border border-line bg-surface"
            role="img"
            aria-label="Product Life Cycle curve with optional Extension Strategy boost at Maturity"
          >
            <text x={210} y={19} textAnchor="middle" fontSize={11} fontWeight={700} className="fill-ink">
              Product Life Cycle &amp; Demand Trajectory
            </text>
            <line x1={28} y1={160} x2={398} y2={160} className="stroke-line" strokeWidth={1.5} />
            <line x1={28} y1={26} x2={28} y2={160} className="stroke-line" strokeWidth={1.5} />

            <path d={plcMain} fill="none" stroke="#2563eb" strokeWidth={3} />
            {extensionOn === "on" ? (
              <g>
                <path d={plcExt} fill="none" stroke="#16a34a" strokeWidth={3} strokeDasharray="6,4" />
                <circle cx={268} cy={46} r={4.5} fill="#16a34a" />
                <text x={335} y={24} textAnchor="middle" fontSize={10} fontWeight={800} fill="#15803d">
                  Extension Boost!
                </text>
              </g>
            ) : null}

            <text x={60} y={175} textAnchor="middle" fontSize={9} className="fill-ink-2">
              Intro
            </text>
            <text x={150} y={175} textAnchor="middle" fontSize={9} className="fill-ink-2">
              Growth
            </text>
            <text x={255} y={175} textAnchor="middle" fontSize={9} fontWeight={700} className="fill-ink">
              Maturity (Cash Cow)
            </text>
            <text x={358} y={175} textAnchor="middle" fontSize={9} className="fill-ink-2">
              {extensionOn === "on" ? "Extended!" : "Decline"}
            </text>
          </svg>

          <div className="grid grid-cols-2 gap-2">
            <Readout label="Units Demanded" value={newQty.toLocaleString("en-GB")} tone="brand" />
            <Readout
              label="Total Revenue"
              value={`£${newRevenue.toLocaleString("en-GB")}`}
              tone={revDelta >= 0 ? "good" : "bad"}
            />
            <Readout
              label="Rev vs £20 Base"
              value={`${revDelta >= 0 ? "+" : "−"}£${Math.abs(revDelta).toLocaleString("en-GB")}`}
              tone={revDelta >= 0 ? "good" : "bad"}
            />
            <Readout
              label="Operating Profit"
              value={`${operatingProfit < 0 ? "−" : ""}£${Math.abs(operatingProfit).toLocaleString("en-GB")}`}
              tone={operatingProfit > 0 ? "good" : "bad"}
            />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

function ScaleAndJitSimulator() {
  const [scaleK, setScaleK] = useState(30); // 5k to 100k units
  const [mode, setMode] = useState<"labour" | "capital">("capital");
  const [stockPolicy, setStockPolicy] = useState<"buffer" | "jit">("jit");

  // U-shaped LRAC function: optimal Minimum Efficient Scale around 55k (capital) or 35k (labour)
  const mes = mode === "capital" ? 58 : 36;
  const minUnitCost = mode === "capital" ? 14 : 19;
  const slope = mode === "capital" ? 0.011 : 0.014;
  const stockCostPerUnit = stockPolicy === "buffer" ? 2.4 : 0.3;

  const unitCostAt = (q: number) => minUnitCost + slope * (q - mes) * (q - mes) + stockCostPerUnit;
  const currentUnitCost = unitCostAt(scaleK);
  const totalCostK = Math.round(currentUnitCost * scaleK);

  const inDiseconomies = scaleK > mes + 4;
  const nearOptimal = Math.abs(scaleK - mes) <= 4;

  // Build SVG polyline across q = 5..100 with dynamic y-scale so both modes keep a smooth U-curve
  const maxCost = Math.max(58, Math.ceil(Math.max(unitCostAt(5), unitCostAt(100)) / 5) * 5 + 4);
  const xPx = (q: number) => 45 + ((q - 5) / 95) * 345;
  const yPx = (c: number) => 162 - Math.min(130, Math.max(5, ((c - 10) / (maxCost - 10)) * 130));

  const pts: string[] = [];
  for (let q = 5; q <= 100; q += 5) {
    pts.push(`${xPx(q).toFixed(1)},${yPx(unitCostAt(q)).toFixed(1)}`);
  }

  return (
    <WidgetFrame
      title="Production Scale, Unit-Cost Curve & JIT vs Buffer Simulator"
      tryThis={[
        "Slide **Output Scale** from **10k → 58k** to watch **Economies of Scale** drive **Average Unit Cost** down while Total Cost still rises!",
        "Push **Output Scale past 75k** to enter **Diseconomies of Scale** (communication & coordination breakdown pushes unit cost back up).",
        "Switch between **Just-in-Time (JIT)** and **Buffer Stock** to see how warehouse holding costs shift the entire unit-cost curve.",
      ]}
      caption={
        <div className="space-y-1">
          <p>
            <strong>Grade 9 Axis Check:</strong> At <strong>{scaleK},000 units</strong>, Total Cost is <strong>£{totalCostK.toLocaleString("en-GB")}k</strong>, and{" "}
            <strong>Average Unit Cost is £{currentUnitCost.toFixed(2)}</strong> —{" "}
            {nearOptimal
              ? "right at Minimum Efficient Scale (lowest unit cost)!"
              : inDiseconomies
                ? "in DISECONOMIES OF SCALE (communication distortion & worker alienation are pushing average unit cost UP!)."
                : "unlocking ECONOMIES OF SCALE (expanding towards optimal scale cuts average unit cost)."}
          </p>
          <p>
            <strong>Lean Stock Trade-off:</strong>{" "}
            {stockPolicy === "jit"
              ? "JIT trims £2.10/unit in warehouse rent & insurance, freeing working capital — but zero buffer stock means any supplier delay halts the line!"
              : "Buffer stock adds £2.10/unit in storage & tied-up working capital, but shields production against late supplier deliveries."}
          </p>
        </div>
      }
    >
      <div className="mb-3 flex flex-wrap gap-3">
        <Segmented
          label="Resource Intensity"
          value={mode}
          onChange={setMode}
          options={[
            { value: "capital", label: "Capital-Intensive (Flow)" },
            { value: "labour", label: "Labour-Intensive (Batch)" },
          ]}
        />
        <Segmented
          label="Inventory Policy"
          value={stockPolicy}
          onChange={setStockPolicy}
          options={[
            { value: "jit", label: "Just-in-Time (JIT)" },
            { value: "buffer", label: "Buffer Safety Stock" },
          ]}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <Slider
            label="Output Scale (000s units / year)"
            value={scaleK}
            min={5}
            max={100}
            step={5}
            onChange={setScaleK}
            format={(v) => `${v},000 units`}
          />
          <div className="grid grid-cols-2 gap-2 pt-1">
            <Readout
              label="Avg Unit Cost"
              value={`£${currentUnitCost.toFixed(2)}`}
              tone={nearOptimal ? "good" : inDiseconomies ? "bad" : "brand"}
            />
            <Readout label="Total Cost" value={`£${totalCostK.toLocaleString("en-GB")}k`} tone="ink" />
            <Readout
              label="Min Efficient Scale"
              value={`${mes},000`}
              tone="good"
            />
            <Readout
              label="Scale Phase"
              value={nearOptimal ? "Optimal MES" : inDiseconomies ? "Diseconomies ↑" : "Economies ↓"}
              tone={nearOptimal ? "good" : inDiseconomies ? "bad" : "brand"}
            />
          </div>
        </div>

        <div>
          <svg
            viewBox="0 0 420 190"
            className="w-full rounded-xl border border-line bg-surface"
            role="img"
            aria-label="Long-Run Average Cost U-curve showing Economies of Scale, Minimum Efficient Scale and Diseconomies of Scale"
          >
            <text x={215} y={19} textAnchor="middle" fontSize={11} fontWeight={700} className="fill-ink">
              Long-Run Average Unit Cost (LRAC) Curve
            </text>
            <line x1={45} y1={162} x2={395} y2={162} className="stroke-line" strokeWidth={1.5} />
            <line x1={45} y1={26} x2={45} y2={162} className="stroke-line" strokeWidth={1.5} />

            <polyline fill="none" stroke="#2563eb" strokeWidth={3} points={pts.join(" ")} />

            {/* Optimal MES marker */}
            <line
              x1={xPx(mes)}
              y1={yPx(unitCostAt(mes))}
              x2={xPx(mes)}
              y2={162}
              stroke="#16a34a"
              strokeWidth={1.5}
              strokeDasharray="4,3"
            />
            <circle cx={xPx(mes)} cy={yPx(unitCostAt(mes))} r={4.5} fill="#16a34a" />

            {/* Current operating point */}
            <circle
              cx={xPx(scaleK)}
              cy={yPx(currentUnitCost)}
              r={6.5}
              fill={inDiseconomies ? "#dc2626" : "#0ea5e9"}
              stroke="#ffffff"
              strokeWidth={2}
            />
            <text
              x={Math.min(365, Math.max(75, xPx(scaleK)))}
              y={Math.max(36, yPx(currentUnitCost) - 10)}
              textAnchor="middle"
              fontSize={10}
              fontWeight={800}
              fill={inDiseconomies ? "#dc2626" : "#0369a1"}
            >
              £{currentUnitCost.toFixed(2)}/unit
            </text>

            <text x={115} y={178} textAnchor="middle" fontSize={9} fontWeight={600} fill="#1d4ed8">
              ← Economies of Scale
            </text>
            <text x={325} y={178} textAnchor="middle" fontSize={9} fontWeight={600} fill="#b91c1c">
              Diseconomies of Scale →
            </text>
          </svg>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "mkt-ped-plc-simulator",
    title: "Marketing Mix Pricing, PED & Product Life Cycle Simulator",
    blurb: "Explore how Price Elasticity of Demand (PED), Promotion and Extension Strategies drive Revenue and Profit.",
    Component: MarketingPedSimulator,
  },
  {
    id: "ops-scale-jit-simulator",
    title: "Production Scale, Average Unit Cost & JIT/Buffer Simulator",
    blurb: "Slide output scale across Economies and Diseconomies of Scale while comparing JIT against Buffer Stock.",
    Component: ScaleAndJitSimulator,
  },
];
