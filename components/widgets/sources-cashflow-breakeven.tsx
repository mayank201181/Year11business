"use client";

import { useState } from "react";
import { makePlane, PlaneGrid, Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

function BreakEvenChartWidget() {
  const [fc, setFc] = useState(6000);
  const [sp, setSp] = useState(25);
  const [vc, setVc] = useState(10);
  const [forecastQ, setForecastQ] = useState(650);

  const contrib = sp - vc;
  const viable = contrib > 0;
  const rawBep = viable ? fc / contrib : Infinity;
  const wholeBep = viable ? Math.ceil(rawBep) : Infinity;
  const bepRev = viable ? rawBep * sp : 0;

  const trAtForecast = forecastQ * sp;
  const tcAtForecast = fc + forecastQ * vc;
  const profit = trAtForecast - tcAtForecast;
  const mos = viable ? forecastQ - wholeBep : -forecastQ;

  const xMax = 1000;
  const yMax = Math.max(25000, Math.ceil((Math.max(sp * xMax, fc + vc * xMax) * 1.05) / 5000) * 5000);
  const plane = makePlane({ width: 640, height: 280, xMin: 0, xMax, yMin: 0, yMax, pad: 44 });
  const { px, py } = plane;

  const bepInChart = viable && rawBep <= xMax;

  return (
    <WidgetFrame
      title="Live Break-Even & Margin-of-Safety SVG Chart"
      tryThis={[
        "Slide **Variable Cost** up towards **Selling Price** — watch **Contribution (SP − VC)** shrink and Break-Even shoot off to the right!",
        "Set **FC = £6,000, SP = £25, VC = £10** (BEP = 400 units), then slide **Forecast Output** below 400 to cross from the green **Profit Wedge** into the red **Loss Wedge**.",
      ]}
      caption={
        viable ? (
          <span>
            <strong>Contribution per unit:</strong> £{sp} − £{vc} = <strong>£{contrib}</strong>.{" "}
            <strong>Break-Even Output:</strong> £{fc.toLocaleString("en-GB")} ÷ £{contrib} ={" "}
            <strong>
              {Number.isInteger(rawBep) ? `${rawBep} units` : `${rawBep.toFixed(1)} → ${wholeBep} whole units`}
            </strong>{" "}
            (Break-even revenue = £{Math.round(bepRev).toLocaleString("en-GB")}). At{" "}
            <strong>{forecastQ} units</strong>, your <strong>Margin of Safety is {mos} units</strong> and{" "}
            {profit >= 0 ? (
              <>
                <strong>Profit = £{profit.toLocaleString("en-GB")}</strong>.
              </>
            ) : (
              <>
                <strong>Loss = −£{Math.abs(profit).toLocaleString("en-GB")}</strong>.
              </>
            )}
          </span>
        ) : (
          <span className="text-bad font-bold">
            Warning: Selling Price (£{sp}) ≤ Variable Cost (£{vc})! Contribution is £{contrib} per unit — every unit sold increases losses, so break-even is impossible!
          </span>
        )
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <Slider
            label="Fixed Costs (FC)"
            value={fc}
            min={2000}
            max={14000}
            step={500}
            onChange={setFc}
            format={(v) => `£${v.toLocaleString("en-GB")}`}
          />
          <Slider
            label="Selling Price per Unit (SP)"
            value={sp}
            min={10}
            max={40}
            step={1}
            onChange={setSp}
            format={(v) => `£${v}`}
          />
          <Slider
            label="Variable Cost per Unit (VC)"
            value={vc}
            min={4}
            max={30}
            step={1}
            onChange={setVc}
            format={(v) => `£${v}`}
          />
          <Slider
            label="Forecast / Actual Output"
            value={forecastQ}
            min={100}
            max={950}
            step={25}
            onChange={setForecastQ}
            format={(v) => `${v} units`}
          />
        </div>

        <div className="grid grid-cols-2 gap-2.5 self-start">
          <Readout
            label="Contribution (SP − VC)"
            value={contrib >= 0 ? `£${contrib} / unit` : `−£${Math.abs(contrib)}`}
            tone={contrib > 0 ? "brand" : "bad"}
          />
          <Readout
            label="Break-Even Output"
            value={viable ? `${wholeBep.toLocaleString("en-GB")} units` : "Impossible"}
            tone={viable && wholeBep <= xMax ? "ink" : "bad"}
          />
          <Readout
            label="Margin of Safety"
            value={viable ? `${mos > 0 ? "+" : ""}${mos} units` : "N/A"}
            tone={viable && mos > 0 ? "good" : "bad"}
          />
          <Readout
            label={profit >= 0 ? "Forecast Profit" : "Forecast Loss"}
            value={profit >= 0 ? `£${profit.toLocaleString("en-GB")}` : `−£${Math.abs(profit).toLocaleString("en-GB")}`}
            tone={profit >= 0 ? "good" : "bad"}
          />
        </div>
      </div>

      <div className="mt-4 overflow-x-auto rounded-xl border border-line bg-surface p-2">
        <svg
          viewBox="0 0 640 280"
          className="w-full h-auto"
          role="img"
          aria-label="Interactive Break-Even Chart with Fixed Cost, Total Cost, Total Revenue, Break-Even intersection and Margin of Safety"
        >
          <PlaneGrid plane={plane} step={yMax > 30000 ? 10000 : 5000} labels={false} />
          {[200, 400, 600, 800, 1000].map((x) => (
            <line key={`vg-${x}`} x1={px(x)} x2={px(x)} y1={py(0)} y2={py(yMax)} className="stroke-line" strokeWidth={1} opacity={0.7} />
          ))}

          {/* X-axis tick labels */}
          {[0, 200, 400, 600, 800, 1000].map((x) => (
            <text key={`xl-${x}`} x={px(x)} y={py(0) + 15} fontSize={10} textAnchor="middle" fill="var(--ink-2)">
              {x}
            </text>
          ))}
          {/* Y-axis tick labels */}
          {[0, Math.round(yMax / 2), yMax].map((y) => (
            <text key={`yl-${y}`} x={px(0) - 6} y={py(y) + 3} fontSize={9.5} textAnchor="end" fill="var(--ink-2)">
              £{Math.round(y / 1000)}k
            </text>
          ))}

          {/* Loss & Profit shaded wedges */}
          {bepInChart ? (
            <>
              <polygon
                points={`${px(0)},${py(fc)} ${px(rawBep)},${py(bepRev)} ${px(0)},${py(0)}`}
                fill="var(--bad)"
                opacity={0.14}
              />
              <polygon
                points={`${px(rawBep)},${py(bepRev)} ${px(xMax)},${py(sp * xMax)} ${px(xMax)},${py(fc + vc * xMax)}`}
                fill="var(--good)"
                opacity={0.16}
              />
            </>
          ) : (
            <g>
              <polygon
                points={`${px(0)},${py(fc)} ${px(xMax)},${py(fc + vc * xMax)} ${px(xMax)},${py(sp * xMax)} ${px(0)},${py(0)}`}
                fill="var(--bad)"
                opacity={0.14}
              />
              <rect x={px(180)} y={14} width={280} height={24} rx={6} fill="var(--bad-soft)" stroke="var(--bad)" strokeWidth={1.2} />
              <text x={px(180) + 140} y={30} fontSize={10.5} fontWeight={800} textAnchor="middle" fill="var(--bad)">
                {viable ? `Loss Zone: BEP (${wholeBep.toLocaleString("en-GB")}u) > 1,000u` : "Loss at All Outputs (SP ≤ VC: Impossible BEP!)"}
              </text>
            </g>
          )}

          {/* Fixed Cost line */}
          <line
            x1={px(0)}
            y1={py(fc)}
            x2={px(xMax)}
            y2={py(fc)}
            stroke="#d97706"
            strokeWidth={2.3}
            strokeDasharray="6,4"
          />
          <text x={px(xMax) - 6} y={py(fc) - 6} fontSize={10.5} fontWeight={800} textAnchor="end" fill="#d97706">
            FC (£{fc.toLocaleString("en-GB")})
          </text>

          {/* Total Cost line starting at (0, FC) */}
          <line
            x1={px(0)}
            y1={py(fc)}
            x2={px(xMax)}
            y2={py(fc + vc * xMax)}
            stroke="var(--bad)"
            strokeWidth={2.8}
          />
          <text
            x={px(xMax) - 6}
            y={Math.max(16, py(fc + vc * xMax) - 6)}
            fontSize={10.5}
            fontWeight={800}
            textAnchor="end"
            fill="var(--bad)"
          >
            TC
          </text>

          {/* Total Revenue line starting at (0, 0) */}
          <line
            x1={px(0)}
            y1={py(0)}
            x2={px(xMax)}
            y2={py(sp * xMax)}
            stroke="var(--good)"
            strokeWidth={3}
          />
          <text
            x={px(xMax) - 6}
            y={Math.max(16, py(sp * xMax) + 14)}
            fontSize={10.5}
            fontWeight={800}
            textAnchor="end"
            fill="var(--good)"
          >
            TR
          </text>

          {/* Forecast output vertical line */}
          <line
            x1={px(forecastQ)}
            y1={py(0)}
            x2={px(forecastQ)}
            y2={py(Math.max(trAtForecast, tcAtForecast))}
            stroke="var(--ink-2)"
            strokeWidth={1.6}
            strokeDasharray="4,3"
          />

          {/* Break-Even Point marker & Margin of Safety bar */}
          {bepInChart ? (
            <g>
              <line
                x1={px(rawBep)}
                y1={py(bepRev)}
                x2={px(rawBep)}
                y2={py(0)}
                stroke="var(--brand)"
                strokeWidth={1.8}
                strokeDasharray="4,3"
              />
              <circle cx={px(rawBep)} cy={py(bepRev)} r={6} fill="var(--brand)" />
              <text
                x={px(rawBep)}
                y={Math.max(16, py(bepRev) - 10)}
                fontSize={10.5}
                fontWeight={800}
                textAnchor="middle"
                fill="var(--brand)"
              >
                BEP ({wholeBep}u)
              </text>
              {forecastQ > wholeBep ? (
                <g>
                  <line
                    x1={px(rawBep)}
                    y1={py(0) + 28}
                    x2={px(forecastQ)}
                    y2={py(0) + 28}
                    stroke="var(--good)"
                    strokeWidth={4}
                  />
                  <text
                    x={(px(rawBep) + px(forecastQ)) / 2}
                    y={py(0) + 40}
                    fontSize={10}
                    fontWeight={800}
                    textAnchor="middle"
                    fill="var(--good)"
                  >
                    MoS = {mos}u
                  </text>
                </g>
              ) : null}
            </g>
          ) : null}
        </svg>
      </div>
    </WidgetFrame>
  );
}

const SIX_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] as const;
const SEASONAL_MULT = [0.75, 0.8, 0.95, 1.1, 1.2, 1.3] as const;

function fmtCF(n: number): string {
  const r = Math.round(n);
  return r < 0 ? `(${Math.abs(r).toLocaleString("en-GB")})` : r.toLocaleString("en-GB");
}

function CashFlowForecastSimulatorWidget() {
  const [openingJan, setOpeningJan] = useState(2500);
  const [baseMonthlySales, setBaseMonthlySales] = useState(10000);
  const [creditLag, setCreditLag] = useState<"cash" | "credit-1m" | "credit-2m">("credit-1m");
  const [capexMode, setCapexMode] = useState<"buy-cash" | "lease">("buy-cash");

  // Monthly sales earned (for Accounting Profit comparison!) vs Cash Inflows received
  // Prior Dec/Nov sales assumed at 8,000/mo so credit lag brings realistic prior receivables
  const priorSales = [8000, 8000];
  const earnedSales = SIX_MONTHS.map((_, i) => Math.round(baseMonthlySales * SEASONAL_MULT[i]));

  const inflows = SIX_MONTHS.map((_, i) => {
    if (creditLag === "cash") return earnedSales[i];
    if (creditLag === "credit-1m") return i === 0 ? priorSales[1] : earnedSales[i - 1];
    // 60-day (2-month) credit lag!
    if (i === 0) return priorSales[0];
    if (i === 1) return priorSales[1];
    return earnedSales[i - 2];
  });

  // Outflows: variable stock (45% of current month's sales paid upfront!) + £3,800 fixed wages/rent + Feb £9,000 van OR £350/mo lease
  const outflows = SIX_MONTHS.map((_, i) => {
    const stockAndWages = Math.round(earnedSales[i] * 0.45) + 3800;
    const equip = capexMode === "buy-cash" ? (i === 1 ? 9000 : 0) : 350;
    return stockAndWages + equip;
  });

  const openings: number[] = [];
  const ncfs: number[] = [];
  const closings: number[] = [];

  for (let i = 0; i < 6; i++) {
    const op = i === 0 ? openingJan : closings[i - 1];
    const ncf = inflows[i] - outflows[i];
    const cl = op + ncf;
    openings.push(op);
    ncfs.push(ncf);
    closings.push(cl);
  }

  // 6-month accounting profit (ignoring £9k capex principal; assume £250/mo depreciation if owned, or £350/mo lease)
  const sixMonthRevenue = earnedSales.reduce((a, b) => a + b, 0);
  const sixMonthOperatingCosts = earnedSales.reduce((a, s) => a + Math.round(s * 0.45) + 3800, 0) + (capexMode === "buy-cash" ? 250 * 6 : 350 * 6);
  const sixMonthProfit = sixMonthRevenue - sixMonthOperatingCosts;

  const minClosing = Math.min(...closings);
  const deficitMonths = SIX_MONTHS.filter((_, i) => closings[i] < 0);

  return (
    <WidgetFrame
      title="Interactive 6-Month Cash-Flow Forecast & Overdraft Simulator"
      tryThis={[
        "Set Customer Terms to **60-Day Credit** + **Buy £9k Van Cash (Feb)** — see how the business earns **strong 6-month Profit** while plunging into a **negative Closing Cash Balance**!",
        "Switch from **Buy £9k Van Cash** to **Lease (£350/mo)** and tighten credit to **Cash Sales** — watch the overdraft danger disappear!",
      ]}
      caption={
        <span>
          <strong>Cash vs Profit Spotlight:</strong> Over these 6 months, your <strong>Accounting Profit is £{sixMonthProfit.toLocaleString("en-GB")}</strong>, yet your{" "}
          <strong>June Closing Cash Balance is {closings[5] < 0 ? `−£${Math.abs(closings[5]).toLocaleString("en-GB")}` : `£${closings[5].toLocaleString("en-GB")}`}</strong>!{" "}
          {deficitMonths.length > 0 ? (
            <span className="text-bad font-bold">
              ⚠️ Overdraft Alert: Negative Closing Balance in {deficitMonths.join(", ")} (peak deficit {fmtCF(minClosing)} — arrange at least a £
              {(Math.ceil(Math.abs(minClosing) / 500) * 500).toLocaleString("en-GB")} bank overdraft or lease equipment!).
            </span>
          ) : (
            <span className="text-good font-bold">
              ✅ Healthy Liquidity: Every month ends with a positive Closing Balance (lowest point: £{minClosing.toLocaleString("en-GB")}).
            </span>
          )}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Slider
            label="Jan Opening Bank Balance"
            value={openingJan}
            min={0}
            max={8000}
            step={500}
            onChange={setOpeningJan}
            format={(v) => `£${v.toLocaleString("en-GB")}`}
          />
          <Slider
            label="Baseline Monthly Sales"
            value={baseMonthlySales}
            min={7000}
            max={15000}
            step={500}
            onChange={setBaseMonthlySales}
            format={(v) => `£${v.toLocaleString("en-GB")}`}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Customer Payment Terms</div>
            <Segmented
              label="Customer credit lag"
              value={creditLag}
              onChange={setCreditLag}
              options={[
                { value: "cash", label: "Cash (0 days)" },
                { value: "credit-1m", label: "30-Day Credit" },
                { value: "credit-2m", label: "60-Day Credit" },
              ]}
            />
          </div>

          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Feb £9,000 Delivery Van</div>
            <Segmented
              label="Equipment finance choice"
              value={capexMode}
              onChange={setCapexMode}
              options={[
                { value: "buy-cash", label: "Buy Cash (£9k in Feb)" },
                { value: "lease", label: "Lease (£350/mo)" },
              ]}
            />
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-line bg-surface">
          <table className="w-full text-right text-xs sm:text-sm tabular-nums">
            <thead>
              <tr className="border-b border-line bg-surface-2 text-ink">
                <th className="px-3 py-2 text-left font-extrabold">Cash-Flow Row (£)</th>
                {SIX_MONTHS.map((m) => (
                  <th key={m} className="px-2.5 py-2 font-extrabold">
                    {m}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              <tr>
                <td className="px-3 py-2 text-left font-semibold text-ink-2">Opening Balance</td>
                {openings.map((v, i) => (
                  <td key={`op-${i}`} className={`px-2.5 py-2 font-semibold ${v < 0 ? "text-bad" : "text-ink"}`}>
                    {fmtCF(v)}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-3 py-2 text-left font-semibold text-ink-2">Cash Inflows</td>
                {inflows.map((v, i) => (
                  <td key={`in-${i}`} className="px-2.5 py-2 text-good font-semibold">
                    {fmtCF(v)}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-3 py-2 text-left font-semibold text-ink-2">Cash Outflows</td>
                {outflows.map((v, i) => (
                  <td key={`out-${i}`} className="px-2.5 py-2 text-ink">
                    {fmtCF(v)}
                  </td>
                ))}
              </tr>
              <tr className="bg-surface-2/60">
                <td className="px-3 py-2 text-left font-bold text-ink">Net Cash Flow</td>
                {ncfs.map((v, i) => (
                  <td key={`ncf-${i}`} className={`px-2.5 py-2 font-bold ${v < 0 ? "text-bad" : "text-good"}`}>
                    {fmtCF(v)}
                  </td>
                ))}
              </tr>
              <tr className="bg-brand-soft/40">
                <td className="px-3 py-2.5 text-left font-extrabold text-ink">Closing Balance</td>
                {closings.map((v, i) => (
                  <td
                    key={`cl-${i}`}
                    className={`px-2.5 py-2.5 font-extrabold ${v < 0 ? "bg-bad-soft text-bad" : "text-brand"}`}
                  >
                    {fmtCF(v)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "sources-cashflow-breakeven-chart-lab",
    title: "Live Break-Even & Margin of Safety Chart",
    blurb: "Drag Fixed Costs, Selling Price, Variable Cost and Output sliders to see TR, TC, Break-Even and Margin of Safety shift live.",
    Component: BreakEvenChartWidget,
  },
  {
    id: "sources-cashflow-breakeven-cashflow-sim",
    title: "6-Month Cash-Flow Forecast & Cash-vs-Profit Simulator",
    blurb: "Test 30/60-day customer credit delays and equipment leasing vs cash purchase across a 6-month forecast.",
    Component: CashFlowForecastSimulatorWidget,
  },
];
