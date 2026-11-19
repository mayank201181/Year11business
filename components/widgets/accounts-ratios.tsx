"use client";

import { useState } from "react";
import { M, Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

function IncomeProfitabilityAnalyser() {
  const [revenue, setRevenue] = useState(500);
  const [costOfSales, setCostOfSales] = useState(200);
  const [expenses, setExpenses] = useState(180);
  const [capEmployed, setCapEmployed] = useState(800);
  const [bankRate, setBankRate] = useState(5.0);

  const gp = revenue - costOfSales;
  const op = gp - expenses;
  const gpm = revenue > 0 ? (gp / revenue) * 100 : 0;
  const opm = revenue > 0 ? (op / revenue) * 100 : 0;
  const markup = costOfSales > 0 ? (gp / costOfSales) * 100 : 0;
  const roce = capEmployed > 0 ? (op / capEmployed) * 100 : 0;

  const maxScale = Math.max(revenue, costOfSales, expenses, Math.abs(gp), Math.abs(op), 100);
  const barH = (v: number) => Math.max(4, (Math.abs(v) / maxScale) * 142);
  const baseY = 188;

  const revH = barH(revenue);
  const cosH = barH(costOfSales);
  const gpH = barH(gp);
  const expH = barH(expenses);
  const opH = barH(op);

  // Keep waterfall bars cleanly above baseY even when Cost of Sales > Revenue or Expenses > Gross Profit
  const cosTop = Math.max(28, baseY - Math.max(revH, cosH));
  const cosBarHeight = Math.min(cosH, baseY - cosTop);
  const expTop = Math.max(28, baseY - Math.max(gp >= 0 ? gpH : 0, expH));
  const expBarHeight = Math.min(expH, baseY - expTop);
  const fmtK = (v: number) => (v < 0 ? `−£${Math.abs(v)}k` : `£${v}k`);

  return (
    <WidgetFrame
      title="Interactive Income Statement & Profitability / ROCE Analyser"
      tryThis={[
        "Set **Revenue £100k** and **Cost of Sales £80k** — spot why **GPM is 20%** while **Markup is 25%**!",
        "Keep Gross Profit positive while pushing **Expenses** high enough to turn Operating Profit negative.",
        "Adjust **Capital Employed** until **ROCE** drops below the **5.0% Bank Savings Rate** benchmark.",
      ]}
      caption={
        <div className="space-y-1">
          <p>
            <strong>Margin vs Markup check:</strong> Gross Profit is <strong>£{gp}k</strong>. Dividing by Revenue (£{revenue}k) gives{" "}
            <strong>GPM = {gpm.toFixed(2)}%</strong>, whereas dividing by Cost of Sales (£{costOfSales}k) gives{" "}
            <strong>Markup = {markup.toFixed(2)}%</strong>.
          </p>
          <p>
            <strong>ROCE verdict:</strong> Operating Profit of <strong>£{op}k</strong> on <strong>£{capEmployed}k</strong> Capital Employed yields{" "}
            <strong>{roce.toFixed(2)}% ROCE</strong> —{" "}
            {roce >= bankRate * 2
              ? "comfortably outperforming the risk-free bank benchmark!"
              : roce >= bankRate
                ? "clearing the bank rate, though with a modest risk premium."
                : "falling BELOW the risk-free bank deposit rate — investors are not rewarded for commercial risk!"}
          </p>
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <Slider
            label="Revenue (£000)"
            value={revenue}
            min={100}
            max={1000}
            step={10}
            onChange={setRevenue}
            format={(v) => `£${v}k`}
          />
          <Slider
            label="Cost of Sales (£000)"
            value={costOfSales}
            min={20}
            max={700}
            step={10}
            onChange={setCostOfSales}
            format={(v) => `£${v}k`}
          />
          <Slider
            label="Overhead Expenses (£000)"
            value={expenses}
            min={20}
            max={500}
            step={10}
            onChange={setExpenses}
            format={(v) => `£${v}k`}
          />
          <Slider
            label="Capital Employed (£000)"
            value={capEmployed}
            min={200}
            max={2000}
            step={25}
            onChange={setCapEmployed}
            format={(v) => `£${v}k`}
          />
          <Slider
            label="Bank Interest Benchmark (%)"
            value={bankRate}
            min={1}
            max={10}
            step={0.5}
            onChange={setBankRate}
            format={(v) => `${v.toFixed(1)}%`}
          />
        </div>

        <div className="space-y-3">
          <svg
            viewBox="0 0 420 220"
            className="w-full rounded-xl border border-line bg-surface"
            role="img"
            aria-label="Live Income Statement waterfall chart from Revenue to Operating Profit"
          >
            <text x={210} y={20} textAnchor="middle" fontSize={12} fontWeight={700} className="fill-ink">
              Live Profit Waterfall (£000)
            </text>
            <line x1={25} y1={baseY} x2={395} y2={baseY} className="stroke-line" strokeWidth={1.5} />

            {/* Revenue */}
            <rect x={36} y={baseY - revH} width={54} height={revH} rx={5} fill="#2563eb" />
            <text x={63} y={baseY - revH - 5} textAnchor="middle" fontSize={10} fontWeight={700} fill="#1d4ed8">
              £{revenue}k
            </text>
            <text x={63} y={205} textAnchor="middle" fontSize={10} fontWeight={600} className="fill-ink-2">
              Revenue
            </text>

            {/* Cost of Sales */}
            <rect x={108} y={cosTop} width={54} height={cosBarHeight} rx={5} fill="#ef4444" />
            <text x={135} y={Math.max(24, cosTop - 5)} textAnchor="middle" fontSize={10} fontWeight={700} fill="#dc2626">
              −£{costOfSales}k
            </text>
            <text x={135} y={205} textAnchor="middle" fontSize={10} fontWeight={600} className="fill-ink-2">
              Cost Sales
            </text>

            {/* Gross Profit */}
            <rect
              x={180}
              y={gp >= 0 ? baseY - gpH : baseY - 12}
              width={54}
              height={gp >= 0 ? gpH : 12}
              rx={5}
              fill={gp >= 0 ? "#0ea5e9" : "#b91c1c"}
            />
            <text x={207} y={(gp >= 0 ? baseY - gpH : baseY - 12) - 5} textAnchor="middle" fontSize={10} fontWeight={700} fill={gp >= 0 ? "#0284c7" : "#b91c1c"}>
              {fmtK(gp)}
            </text>
            <text x={207} y={205} textAnchor="middle" fontSize={10} fontWeight={600} className="fill-ink-2">
              Gross P.
            </text>

            {/* Expenses */}
            <rect x={252} y={expTop} width={54} height={expBarHeight} rx={5} fill="#f97316" />
            <text x={279} y={Math.max(24, expTop - 5)} textAnchor="middle" fontSize={10} fontWeight={700} fill="#ea580c">
              −£{expenses}k
            </text>
            <text x={279} y={205} textAnchor="middle" fontSize={10} fontWeight={600} className="fill-ink-2">
              Expenses
            </text>

            {/* Operating Profit */}
            <rect
              x={324}
              y={op >= 0 ? baseY - opH : baseY - 12}
              width={54}
              height={op >= 0 ? opH : 12}
              rx={5}
              fill={op >= 0 ? "#16a34a" : "#dc2626"}
            />
            <text
              x={351}
              y={(op >= 0 ? baseY - opH : baseY - 12) - 5}
              textAnchor="middle"
              fontSize={10}
              fontWeight={700}
              fill={op >= 0 ? "#15803d" : "#dc2626"}
            >
              {fmtK(op)}
            </text>
            <text x={351} y={205} textAnchor="middle" fontSize={10} fontWeight={700} className="fill-ink">
              Op. Profit
            </text>
          </svg>

          <div className="grid grid-cols-2 gap-2">
            <Readout
              label={<>GPM (<M>{'"GP" / "Rev"'}</M>)</>}
              value={`${gpm.toFixed(2)}%`}
              tone={gpm >= 30 ? "good" : gpm > 0 ? "brand" : "bad"}
            />
            <Readout
              label={<>Markup (<M>{'"GP" / "CoS"'}</M>)</>}
              value={`${markup.toFixed(2)}%`}
              tone={markup > 0 ? "brand" : "bad"}
            />
            <Readout
              label={<>OPM (<M>{'"OP" / "Rev"'}</M>)</>}
              value={`${opm.toFixed(2)}%`}
              tone={opm >= 12 ? "good" : opm > 0 ? "ink" : "bad"}
            />
            <Readout
              label={`ROCE (vs ${bankRate.toFixed(1)}% Bank)`}
              value={`${roce.toFixed(2)}%`}
              tone={roce >= bankRate ? "good" : "bad"}
            />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

function LiquidityStressTester() {
  const [sector, setSector] = useState<"retail" | "supermarket">("retail");
  const [currentAssets, setCurrentAssets] = useState(180);
  const [inventoryShare, setInventoryShare] = useState(90);
  const [currentLiabilities, setCurrentLiabilities] = useState(100);

  const inventory = Math.min(inventoryShare, currentAssets);
  const liquidAssets = currentAssets - inventory;
  const workingCapital = currentAssets - currentLiabilities;
  const currentRatio = currentAssets / currentLiabilities;
  const acidTest = liquidAssets / currentLiabilities;

  const healthMessage =
    sector === "supermarket"
      ? acidTest >= 0.55
        ? "Healthy for a supermarket: daily checkout cash and 60-day supplier credit make 0.55–0.90 : 1 comfortable."
        : "Tight even for a supermarket — supplier payables significantly outweigh checkout cash!"
      : currentRatio > 2.8
        ? "Idle Working Capital alert: Current Ratio > 2.8 : 1 means excess stock or uninvested cash is dragging down ROCE."
        : acidTest < 0.8
          ? "Liquidity danger: Acid-Test < 0.8 : 1 warns too much working capital is trapped inside slow-moving Inventory!"
          : currentRatio >= 1.4 && acidTest >= 0.95
            ? "Balanced liquidity zone: Current Ratio (~1.5–2 : 1) and Acid-Test (~1 : 1) comfortably cover short-term debts."
            : "Borderline buffer: monitor credit control and stock turnover closely.";

  const maxBar = Math.max(currentAssets, currentLiabilities, 120);
  const wScale = (v: number) => Math.max(4, (v / maxBar) * 290);

  return (
    <WidgetFrame
      title="Balance Sheet Liquidity & Acid-Test Stress-Tester"
      tryThis={[
        "Set **Current Assets £180k**, **Inventory £150k**, **Current Liabilities £100k** to recreate the **1.8 : 1 vs 0.3 : 1** fashion-boutique trap!",
        "Toggle **Sector Model** to **Cash Supermarket** at `0.65 : 1` Acid-Test to see why Edexcel AO4 rewards industry context.",
        "Push **Current Assets to £350k** on **£80k Liabilities** to trigger the **Idle Working Capital** warning.",
      ]}
      caption={
        <div className="space-y-1">
          <p>
            <strong>Working Capital:</strong> <strong>£{workingCapital}k</strong> (Liquid Cash + Receivables ={" "}
            <strong>£{liquidAssets}k</strong> · Illiquid Inventory = <strong>£{inventory}k</strong>).
          </p>
          <p>
            <strong>Examiner Diagnosis:</strong> {healthMessage}
          </p>
        </div>
      }
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-bold uppercase tracking-wide text-ink-2">Business Model Context (AO2 / AO4):</span>
        <Segmented
          label="Business Model"
          value={sector}
          onChange={setSector}
          options={[
            { value: "retail", label: "Boutique / Manufacturer" },
            { value: "supermarket", label: "Fast-Cash Supermarket" },
          ]}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <Slider
            label="Total Current Assets (£000)"
            value={currentAssets}
            min={40}
            max={400}
            step={10}
            onChange={(v) => {
              setCurrentAssets(v);
              if (inventoryShare > v) setInventoryShare(v);
            }}
            format={(v) => `£${v}k`}
          />
          <Slider
            label="Of which: Inventory / Stock (£000)"
            value={inventory}
            min={0}
            max={currentAssets}
            step={5}
            onChange={setInventoryShare}
            format={(v) => `£${v}k`}
          />
          <Slider
            label="Current Liabilities (£000)"
            value={currentLiabilities}
            min={30}
            max={300}
            step={10}
            onChange={setCurrentLiabilities}
            format={(v) => `£${v}k`}
          />
        </div>

        <div className="space-y-3">
          <svg
            viewBox="0 0 420 155"
            className="w-full rounded-xl border border-line bg-surface"
            role="img"
            aria-label="Horizontal bar comparison of Current Assets split into Liquid Assets and Inventory versus Current Liabilities"
          >
            <text x={18} y={24} fontSize={11} fontWeight={700} className="fill-ink">
              Current Assets (£{currentAssets}k)
            </text>
            {liquidAssets > 0 ? <rect x={18} y={32} width={wScale(liquidAssets)} height={26} rx={4} fill="#0ea5e9" /> : null}
            {inventory > 0 ? (
              <rect
                x={18 + (liquidAssets > 0 ? wScale(liquidAssets) : 0)}
                y={32}
                width={wScale(inventory)}
                height={26}
                rx={4}
                fill="#f59e0b"
              />
            ) : null}
            <text x={18} y={72} fontSize={10} className="fill-ink-2">
              Blue = Liquid Cash &amp; Receivables (£{liquidAssets}k) · Amber = Inventory (£{inventory}k)
            </text>

            <text x={18} y={100} fontSize={11} fontWeight={700} className="fill-ink">
              Current Liabilities (£{currentLiabilities}k)
            </text>
            <rect x={18} y={108} width={wScale(currentLiabilities)} height={26} rx={4} fill="#ef4444" />
          </svg>

          <div className="grid grid-cols-3 gap-2">
            <Readout
              label="Working Cap"
              value={`${workingCapital < 0 ? "−" : ""}£${Math.abs(workingCapital)}k`}
              tone={workingCapital >= 0 ? "good" : "bad"}
            />
            <Readout
              label="Current Ratio"
              value={`${currentRatio.toFixed(2)} : 1`}
              tone={currentRatio >= 1.2 && currentRatio <= 2.8 ? "good" : currentRatio < 1 ? "bad" : "brand"}
            />
            <Readout
              label="Acid-Test"
              value={`${acidTest.toFixed(2)} : 1`}
              tone={
                sector === "supermarket"
                  ? acidTest >= 0.55
                    ? "good"
                    : "bad"
                  : acidTest >= 0.9
                    ? "good"
                    : "bad"
              }
            />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "accounts-income-roce-analyser",
    title: "Income Statement, Margin vs Markup & ROCE Analyser",
    blurb: "Slide Revenue, Cost of Sales, Expenses and Capital Employed to see GPM, OPM, Markup and ROCE respond live.",
    Component: IncomeProfitabilityAnalyser,
  },
  {
    id: "accounts-liquidity-stress-tester",
    title: "Balance Sheet Liquidity & Acid-Test Stress-Tester",
    blurb: "See how warehouse Inventory creates a dangerous gap between the Current Ratio and the Acid-Test Ratio.",
    Component: LiquidityStressTester,
  },
];
