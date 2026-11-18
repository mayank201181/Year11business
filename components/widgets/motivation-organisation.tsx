"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

function HierarchyBuilderWidget() {
  const [layers, setLayers] = useState(4); // 2, 3, or 4 layers
  const [span, setSpan] = useState(3); // 2..6 direct subordinates per manager
  const [delayerOne, setDelayerOne] = useState<"keep" | "delayer">("keep");
  const [mgrSalaryK, setMgrSalaryK] = useState(45); // £k/yr per middle manager

  const effectiveLayers = delayerOne === "delayer" && layers >= 3 ? layers - 1 : layers;

  // Baseline workforce at bottom layer = span^(layers - 1)
  const operatives = Math.pow(span, layers - 1);
  // Count middle managers in baseline (layers 2 .. layers-1)
  let baselineMiddleMgrs = 0;
  for (let l = 1; l <= layers - 2; l++) {
    baselineMiddleMgrs += Math.pow(span, l);
  }
  const baselineTotalStaff = 1 + baselineMiddleMgrs + operatives;

  // After optional delayering of the lowest supervisor tier (size = span^(layers-2)):
  const removedMgrs = delayerOne === "delayer" && layers >= 3 ? Math.pow(span, layers - 2) : 0;
  const remainingMiddleMgrs = baselineMiddleMgrs - removedMgrs;
  // Frontline supervisor span: if delayered, the tier above absorbs all operatives!
  const frontlineManagerCount =
    effectiveLayers === 2 ? 1 : Math.pow(span, effectiveLayers - 2);
  const frontlineSpan = Math.round(operatives / frontlineManagerCount);

  const annualSalarySavedK = removedMgrs * mgrSalaryK;
  const redundancyOneOffK = removedMgrs * 15; // £15k statutory/contractual redundancy per post
  const netYear1SavingK = annualSalarySavedK - redundancyOneOffK;

  // Communication fidelity: ~90% clarity retained per link in chain of command
  const chainLinks = effectiveLayers - 1;
  const commClarityPct = Math.round(Math.pow(0.9, chainLinks) * 100);

  // Build visual nodes for SVG org chart (cap drawn circles cleanly per layer so wide charts stay crisp)
  const svgW = 640;
  const svgH = 250;
  const layerY = (idx: number) => {
    if (effectiveLayers === 2) return idx === 0 ? 52 : 185;
    if (effectiveLayers === 3) return 42 + idx * 80;
    return 36 + idx * 58;
  };

  const layerCounts: number[] = [];
  for (let i = 0; i < effectiveLayers - 1; i++) {
    layerCounts.push(Math.pow(span, i));
  }
  layerCounts.push(operatives);

  return (
    <WidgetFrame
      title="Interactive Hierarchy, Span-of-Control & Delayering Builder"
      tryThis={[
        "Set **Layers = 4** and **Span = 3**, then toggle **Delayer 1 Middle Tier** — watch frontline span jump from **3 to 9** while saving recurring salaries!",
        "Notice the **Edexcel 4BS1 trap**: even when total staff exceeds 80, the CEO's **direct span of control** stays equal to just Layer 2!",
      ]}
      caption={
        <span>
          <strong>Diagnosis:</strong> Structure is currently{" "}
          <strong>{effectiveLayers >= 4 ? "Tall" : effectiveLayers === 2 ? "Flat" : "Balanced (3-tier)"}</strong>{" "}
          with <strong>{effectiveLayers} layers</strong> ({chainLinks} link{chainLinks === 1 ? "" : "s"} in the chain of command, ~
          <strong>{commClarityPct}%</strong> message clarity).{" "}
          {removedMgrs > 0 ? (
            <>
              Delayering <strong>{removedMgrs} supervisors</strong> saves <strong>£{annualSalarySavedK.toLocaleString("en-GB")}k/yr</strong> from Year 2+, or{" "}
              <strong>£{netYear1SavingK.toLocaleString("en-GB")}k net in Year 1</strong> after £{redundancyOneOffK.toLocaleString("en-GB")}k redundancy payouts —
              but frontline manager span widens to <strong>{frontlineSpan}</strong>{" "}
              {frontlineSpan >= 10 ? "(high overload risk — delegation & training essential!)." : "(manageable with delegation — remember ultimate responsibility stays with the manager!)."}
            </>
          ) : (
            <>
              Middle-management payroll costs <strong>£{(remainingMiddleMgrs * mgrSalaryK).toLocaleString("en-GB")}k/yr</strong> across{" "}
              <strong>{remainingMiddleMgrs}</strong> middle managers.
            </>
          )}
        </span>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <Stepper
            label="Baseline Hierarchy Layers"
            value={layers}
            min={2}
            max={4}
            onChange={(v) => {
              setLayers(v);
              if (v === 2) setDelayerOne("keep");
            }}
            format={(v) => `${v} layers`}
          />
          <Slider
            label="Base Span of Control (direct reports)"
            value={span}
            min={2}
            max={5}
            onChange={setSpan}
            format={(v) => `${v} direct reports`}
          />
          <Slider
            label="Middle Manager Annual Cost"
            value={mgrSalaryK}
            min={30}
            max={65}
            step={5}
            onChange={setMgrSalaryK}
            format={(v) => `£${v}k / yr`}
          />
          <div className="flex items-center justify-between gap-2 pt-1">
            <span className="text-sm font-semibold text-ink-2">Restructure Action:</span>
            <Segmented
              label="Delayering option"
              value={delayerOne}
              onChange={(v) => {
                if (layers === 2 && v === "delayer") return;
                setDelayerOne(v);
              }}
              options={[
                { value: "keep", label: "Keep All Layers" },
                { value: "delayer", label: layers >= 3 ? "✂️ Delayer 1 Tier" : "Min 2 Layers" },
              ]}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 self-start">
          <Readout label="CEO Direct Span" value={`${effectiveLayers === 2 ? frontlineSpan : span} staff`} tone="brand" />
          <Readout
            label="Frontline Mgr Span"
            value={`${frontlineSpan} staff`}
            tone={frontlineSpan >= 10 ? "bad" : "good"}
          />
          <Readout label="Total Workforce" value={`${baselineTotalStaff - removedMgrs} staff`} tone="ink" />
          <Readout
            label={removedMgrs > 0 ? "Year 1 Net Saving" : "Middle-Mgr Payroll"}
            value={
              removedMgrs > 0
                ? `£${netYear1SavingK.toLocaleString("en-GB")}k`
                : `£${(remainingMiddleMgrs * mgrSalaryK).toLocaleString("en-GB")}k/yr`
            }
            tone={removedMgrs > 0 ? "good" : "ink"}
          />
        </div>
      </div>

      <div className="mt-4 overflow-x-auto rounded-xl border border-line bg-surface p-2">
        <svg
          viewBox={`0 0 ${svgW} ${svgH}`}
          className="w-full h-auto"
          role="img"
          aria-label="Live organisational chart showing layers of hierarchy and direct span of control"
        >
          {layerCounts.map((count, lIdx) => {
            const capped = Math.min(count, 16);
            const y = layerY(lIdx);
            const spacing = (svgW - 90) / Math.max(1, capped);
            const xs = Array.from({ length: capped }, (_, i) =>
              capped === 1 ? svgW / 2 : 45 + spacing * (i + 0.5),
            );

            // Parent layer positions for connecting lines
            const lines: { x1: number; y1: number; x2: number; y2: number }[] = [];
            if (lIdx > 0) {
              const pCount = Math.min(layerCounts[lIdx - 1], 16);
              const pSpacing = (svgW - 90) / Math.max(1, pCount);
              const pY = layerY(lIdx - 1);
              const pXs = Array.from({ length: pCount }, (_, i) =>
                pCount === 1 ? svgW / 2 : 45 + pSpacing * (i + 0.5),
              );
              xs.forEach((cx, ci) => {
                const parentIdx = Math.min(pXs.length - 1, Math.floor((ci * pXs.length) / xs.length));
                lines.push({ x1: pXs[parentIdx], y1: pY + 12, x2: cx, y2: y - 12 });
              });
            }

            const roleLabel =
              lIdx === 0
                ? "CEO / MD"
                : lIdx === effectiveLayers - 1
                  ? `Operatives (${count})`
                  : lIdx === 1
                    ? `Directors (${count})`
                    : `Supervisors (${count})`;

            return (
              <g key={`layer-${lIdx}`}>
                {lines.map((ln, li) => (
                  <line
                    key={`ln-${lIdx}-${li}`}
                    x1={ln.x1}
                    y1={ln.y1}
                    x2={ln.x2}
                    y2={ln.y2}
                    stroke="var(--ink-2)"
                    strokeWidth={1.3}
                    opacity={0.65}
                  />
                ))}
                {xs.map((cx, ni) => (
                  <circle
                    key={`nd-${lIdx}-${ni}`}
                    cx={cx}
                    cy={y}
                    r={lIdx === 0 ? 13 : lIdx === effectiveLayers - 1 ? 8.5 : 10.5}
                    fill={
                      lIdx === 0
                        ? "var(--brand)"
                        : lIdx === effectiveLayers - 1
                          ? "var(--good-soft)"
                          : "var(--accent-soft)"
                    }
                    stroke={
                      lIdx === 0
                        ? "var(--brand)"
                        : lIdx === effectiveLayers - 1
                          ? "var(--good)"
                          : "var(--warn)"
                    }
                    strokeWidth={1.8}
                  />
                ))}
                <text x={14} y={y + 4} fontSize={10.5} fontWeight={700} fill="var(--ink-2)">
                  L{lIdx + 1}: {roleLabel}
                  {count > 16 ? " …" : ""}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </WidgetFrame>
  );
}

function PayMotivationSimulatorWidget() {
  const [scheme, setScheme] = useState<"salary" | "hybrid" | "piece">("hybrid");
  const [monthlyUnits, setMonthlyUnits] = useState(400);
  const [baseSalary, setBaseSalary] = useState(1500);
  const [incentiveRate, setIncentiveRate] = useState(3); // £ per unit above 200 (hybrid) or all units (piece)
  const [enrichment, setEnrichment] = useState<"hygiene-only" | "enriched">("enriched");

  let grossPay = 0;
  if (scheme === "salary") {
    grossPay = baseSalary + 700; // higher flat salary
  } else if (scheme === "hybrid") {
    const bonusUnits = Math.max(0, monthlyUnits - 200);
    grossPay = baseSalary + bonusUnits * incentiveRate;
  } else {
    grossPay = monthlyUnits * (incentiveRate + 1.5);
  }

  // Quality & turnover modelling based on Taylor vs Herzberg
  const rawDefectPct =
    scheme === "piece"
      ? enrichment === "enriched"
        ? 4.2
        : 8.5
      : scheme === "hybrid"
        ? enrichment === "enriched"
          ? 1.4
          : 3.1
        : enrichment === "enriched"
          ? 1.1
          : 2.4;

  const passedUnits = Math.max(1, Math.round(monthlyUnits * (1 - rawDefectPct / 100)));
  const unitLabourCost = grossPay / passedUnits;
  const estTurnoverPct =
    enrichment === "enriched"
      ? scheme === "piece"
        ? 19
        : 10
      : scheme === "piece"
        ? 34
        : 22;

  return (
    <WidgetFrame
      title="Pay & Herzberg Motivation Package Simulator"
      tryThis={[
        "Switch to **Pure Piece-Rate (Taylor)** with **Hygiene Only** — notice how rushing spikes defects to **8.5%** and inflates labour turnover!",
        "Switch to **Base + Bonus (Hybrid)** + **Herzberg Job Enrichment** — compare **unit labour cost per passed item** and retention.",
      ]}
      caption={
        <span>
          <strong>Herzberg &amp; Maslow Verdict:</strong>{" "}
          {scheme === "piece" ? (
            <>
              Pure piece-rate threatens <strong>Maslow&apos;s safety need</strong> during quiet weeks and tempts workers to rush quality ({rawDefectPct}% rejects).{" "}
            </>
          ) : scheme === "salary" ? (
            <>
              Flat salary (£{(baseSalary + 700).toLocaleString("en-GB")}/mo) satisfies <strong>hygiene &amp; safety</strong>, protecting care ({rawDefectPct}% defects), though cash pay alone won&apos;t push extra output.{" "}
            </>
          ) : (
            <>
              Base salary (£{baseSalary.toLocaleString("en-GB")}) protects <strong>Maslow safety</strong> while £{incentiveRate}/unit above 200 rewards output.{" "}
            </>
          )}
          {enrichment === "enriched"
            ? "Adding Job Enrichment (autonomy, quality sign-off & recognition) activates true Herzberg motivators, cutting turnover to ~10–19%."
            : "Without Herzberg motivators (Hygiene Only), boredom keeps annual labour turnover elevated (~22–34%)."}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Segmented
            label="Remuneration structure"
            value={scheme}
            onChange={setScheme}
            options={[
              { value: "salary", label: "Flat Salary" },
              { value: "hybrid", label: "Salary + Bonus" },
              { value: "piece", label: "Pure Piece-Rate (Taylor)" },
            ]}
          />
          <Segmented
            label="Herzberg job design"
            value={enrichment}
            onChange={setEnrichment}
            options={[
              { value: "hygiene-only", label: "Hygiene Only" },
              { value: "enriched", label: "✨ + Job Enrichment" },
            ]}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Slider
            label="Monthly Worker Output"
            value={monthlyUnits}
            min={150}
            max={600}
            step={25}
            onChange={setMonthlyUnits}
            format={(v) => `${v} units`}
          />
          <Slider
            label="Base Monthly Salary"
            value={baseSalary}
            min={1100}
            max={2200}
            step={100}
            onChange={setBaseSalary}
            format={(v) => (scheme === "piece" ? "£0 (Piece)" : `£${scheme === "salary" ? v + 700 : v}`)}
          />
          <Slider
            label="Unit Incentive Rate"
            value={incentiveRate}
            min={1}
            max={6}
            step={0.5}
            onChange={setIncentiveRate}
            format={(v) =>
              scheme === "salary"
                ? "£0 / unit"
                : scheme === "hybrid"
                  ? `£${v.toFixed(2)} (>200)`
                  : `£${(v + 1.5).toFixed(2)} / unit`
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label="Worker Monthly Pay" value={`£${Math.round(grossPay).toLocaleString("en-GB")}`} tone="brand" />
          <Readout
            label="Passed Output (Net)"
            value={`${passedUnits} / ${monthlyUnits}`}
            tone={rawDefectPct > 5 ? "bad" : "good"}
          />
          <Readout
            label="Cost / Passed Unit"
            value={`£${unitLabourCost.toFixed(2)}`}
            tone={unitLabourCost > 6 ? "bad" : "ink"}
          />
          <Readout
            label="Est. Staff Turnover"
            value={`${estTurnoverPct}% / yr`}
            tone={estTurnoverPct >= 22 ? "bad" : "good"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "motivation-organisation-hierarchy-builder",
    title: "Hierarchy, Span of Control & Delayering Lab",
    blurb: "Adjust layers and span of control on a live organisational chart, then test delayering wage savings vs overload risk.",
    Component: HierarchyBuilderWidget,
  },
  {
    id: "motivation-organisation-pay-simulator",
    title: "Pay Systems & Herzberg Motivator Simulator",
    blurb: "Compare Flat Salary, Hybrid Bonus and Taylor Piece-Rate alongside Herzberg Job Enrichment.",
    Component: PayMotivationSimulatorWidget,
  },
];
