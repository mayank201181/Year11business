"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

type OwnershipKey = "sole" | "partnership" | "ltd" | "plc" | "franchise";

interface StructureProfile {
  label: string;
  legal: string;
  liability: "Unlimited" | "Limited";
  paperFit: string;
  privacy: string;
  takeoverRisk: string;
  royaltyPct: number;
}

const PROFILES: Record<OwnershipKey, StructureProfile> = {
  sole: {
    label: "Sole Trader",
    legal: "Unincorporated",
    liability: "Unlimited",
    paperFit: "Paper 1 (<50 staff)",
    privacy: "High (private accounts)",
    takeoverRisk: "None (100% owner)",
    royaltyPct: 0,
  },
  partnership: {
    label: "Partnership",
    legal: "Unincorporated (Deed)",
    liability: "Unlimited",
    paperFit: "Paper 1 (<50 staff)",
    privacy: "High (private accounts)",
    takeoverRisk: "None (partners agree)",
    royaltyPct: 0,
  },
  ltd: {
    label: "Private Ltd",
    legal: "Incorporated",
    liability: "Limited",
    paperFit: "Paper 1 / Medium Firm",
    privacy: "Medium (Companies House)",
    takeoverRisk: "Blocked unless board agrees",
    royaltyPct: 0,
  },
  plc: {
    label: "Public PLC",
    legal: "Incorporated (Stock Exch.)",
    liability: "Limited",
    paperFit: "Paper 2 (>250 staff)",
    privacy: "Low (full public audit)",
    takeoverRisk: "High if >50% shares bought!",
    royaltyPct: 0,
  },
  franchise: {
    label: "Franchisee (Sole)",
    legal: "Unincorporated Branch",
    liability: "Unlimited",
    paperFit: "Paper 1 Local Branch",
    privacy: "Audited by Franchisor",
    takeoverRisk: "Strict brand rules apply",
    royaltyPct: 8,
  },
};

function OwnershipLiabilityExplorer() {
  const [structure, setStructure] = useState<OwnershipKey>("sole");
  const [founderStakePct, setFounderStakePct] = useState(60);
  const [investedK, setInvestedK] = useState(25);
  const [debtShortfallK, setDebtShortfallK] = useState(80);
  const [annualRevK, setAnnualRevK] = useState(300);

  const prof = PROFILES[structure];
  const effectiveStake = structure === "sole" || structure === "franchise" ? 100 : founderStakePct;
  const personalAssetsLostK =
    prof.liability === "Limited"
      ? 0
      : structure === "partnership"
        ? Math.round((debtShortfallK * effectiveStake) / 100)
        : debtShortfallK;
  const totalFounderLossK = investedK + personalAssetsLostK;
  const royaltyPaidK = Math.round((annualRevK * prof.royaltyPct) / 100);
  const hostileTakeoverPossible = structure === "plc" && effectiveStake < 51;
  const canBeOutvoted = (structure === "ltd" || structure === "plc" || structure === "partnership") && effectiveStake <= 50;

  return (
    <WidgetFrame
      title="Business Ownership Liability & Control Comparator"
      tryThis={[
        "Set **Unpaid Debt Shortfall** to £120k and switch from **Sole Trader** to **Private Ltd** — watch personal house/savings risk drop straight to **£0**!",
        "Select **Public PLC** and slide **Founder Voting Share %** below **51%** to trigger the hostile takeover warning.",
        "Switch to **Franchisee** and raise **Annual Revenue** to see how an 8% revenue royalty grows even before operating costs are paid.",
      ]}
      caption={
        <>
          <strong>{prof.label}</strong> ({prof.legal}, {prof.paperFit}):{" "}
          {prof.liability === "Limited" ? (
            <>
              Incorporation creates a <strong>separate legal identity</strong>. Even with a <strong>£{debtShortfallK}k</strong> corporate debt shortfall, the founder loses at most their <strong>£{investedK}k</strong> share investment — personal savings and home are 100% protected.
            </>
          ) : (
            <>
              Because there is <strong>no separate legal identity</strong>, creditors claim <strong>£{personalAssetsLostK}k</strong> directly from personal savings, cars or house equity on top of the initial <strong>£{investedK}k</strong> stake!
              {structure === "partnership" && debtShortfallK > personalAssetsLostK ? (
                <> (Under <strong>joint and several unlimited liability</strong>, creditors can even pursue one partner for the full <strong>£{debtShortfallK}k</strong> if co-partners cannot pay!)</>
              ) : null}
            </>
          )}{" "}
          {hostileTakeoverPossible
            ? "⚠️ Holding under 51% on a public Stock Exchange exposes the PLC to a hostile takeover!"
            : canBeOutvoted
              ? "⚠️ With ≤50% voting stake, outside investors/partners can outvote the founder."
              : "✅ Founder retains majority decision-making control."}
        </>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Business ownership structure"
          value={structure}
          onChange={setStructure}
          options={[
            { value: "sole", label: "Sole Trader" },
            { value: "partnership", label: "Partnership" },
            { value: "ltd", label: "Private Ltd" },
            { value: "plc", label: "Public PLC" },
            { value: "franchise", label: "Franchisee" },
          ]}
        />

        <div className="grid gap-3 sm:grid-cols-2">
          <Slider
            label="Founder Capital Invested"
            value={investedK}
            min={5}
            max={100}
            step={5}
            onChange={setInvestedK}
            format={(v) => `£${v}k`}
          />
          <Slider
            label="Unpaid Debt Shortfall on Collapse"
            value={debtShortfallK}
            min={0}
            max={200}
            step={10}
            onChange={setDebtShortfallK}
            format={(v) => `£${v}k`}
          />
          {structure === "sole" || structure === "franchise" ? (
            <div className="rounded-xl border border-line bg-surface-2 px-3 py-2 text-xs text-ink-2">
              <strong className="text-ink">100% Sole Equity:</strong> Sole traders cannot issue shares (though franchisees must still obey franchisor menu &amp; pricing rules).
            </div>
          ) : (
            <Slider
              label="Founder Voting / Deed Share"
              value={founderStakePct}
              min={15}
              max={90}
              step={5}
              onChange={setFounderStakePct}
              format={(v) => `${v}%`}
            />
          )}
          <Slider
            label="Annual Branch / Firm Revenue"
            value={annualRevK}
            min={100}
            max={1000}
            step={50}
            onChange={setAnnualRevK}
            format={(v) => `£${v}k`}
          />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Readout
            label="Liability Type"
            value={prof.liability}
            tone={prof.liability === "Limited" ? "good" : "bad"}
          />
          <Readout
            label="Personal Assets Seized"
            value={`£${personalAssetsLostK}k`}
            tone={personalAssetsLostK === 0 ? "good" : "bad"}
          />
          <Readout
            label="Total Max Founder Loss"
            value={`£${totalFounderLossK}k`}
            tone={personalAssetsLostK === 0 ? "brand" : "bad"}
          />
          <Readout
            label={structure === "franchise" ? "8% Franchise Royalty" : "Voting Control"}
            value={
              structure === "franchise"
                ? `£${royaltyPaidK}k/yr`
                : effectiveStake >= 51
                  ? `${effectiveStake}% (Safe)`
                  : `${effectiveStake}% (At Risk)`
            }
            tone={
              structure === "franchise"
                ? "ink"
                : effectiveStake >= 51
                  ? "good"
                  : "bad"
            }
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

type ScenarioKey = "automation" | "payrise" | "latepay" | "greenpack";

interface StakeholderScenario {
  label: string;
  summary: string;
  knobLabel: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  defaultVal: number;
  score: (v: number) => {
    shareholders: number;
    employees: number;
    customers: number;
    suppliers: number;
    community: number;
    shortRunNote: string;
    longRunPivot: string;
  };
}

const SCENARIOS: Record<ScenarioKey, StakeholderScenario> = {
  payrise: {
    label: "Staff Wage Rise",
    summary: "Management increases annual wages across a 40-worker SME (base wage bill £1,000k; base profit £200k).",
    knobLabel: "Annual Wage Increase",
    unit: "%",
    min: 0,
    max: 15,
    step: 1,
    defaultVal: 8,
    score: (v) => ({
      shareholders: Math.round(60 - v * 4.2),
      employees: Math.min(100, Math.round(45 + v * 4)),
      customers: Math.min(90, Math.round(55 + v * 1.8)),
      suppliers: 50,
      community: Math.min(85, Math.round(50 + v * 1.5)),
      shortRunNote: `Adds £${v * 10}k to annual wage costs, trimming short-run operating profit from £200k to £${200 - v * 10}k.`,
      longRunPivot: "Lower staff turnover & higher morale boost customer service and cut recruitment fees over 2–3 years.",
    }),
  },
  automation: {
    label: "Factory Automation",
    summary: "A Paper 2 manufacturer replaces manual assembly lines with AI-guided robotics.",
    knobLabel: "Lines Automated",
    unit: "%",
    min: 10,
    max: 80,
    step: 10,
    defaultVal: 50,
    score: (v) => ({
      shareholders: Math.min(95, Math.round(48 + v * 0.55)),
      employees: Math.max(5, Math.round(75 - v * 0.85)),
      customers: Math.min(92, Math.round(52 + v * 0.45)),
      suppliers: Math.min(80, Math.round(50 + v * 0.25)),
      community: Math.max(15, Math.round(65 - v * 0.55)),
      shortRunNote: `Cuts unit labour costs by ${Math.round(v * 0.35)}% and improves defect consistency, but threatens ${v * 3} factory jobs.`,
      longRunPivot: "Retraining displaced workers to maintain robots softens union backlash and protects brand reputation.",
    }),
  },
  latepay: {
    label: "Supplier Credit Stretch",
    summary: "Finance directors delay paying component suppliers to boost the firm's own cash balance.",
    knobLabel: "Payment Delay (Days)",
    unit: " days",
    min: 30,
    max: 120,
    step: 15,
    defaultVal: 90,
    score: (v) => ({
      shareholders: Math.min(82, Math.round(45 + (v - 30) * 0.35)),
      employees: 52,
      customers: v > 75 ? 38 : 52,
      suppliers: Math.max(8, Math.round(85 - (v - 30) * 0.85)),
      community: v > 75 ? 36 : 50,
      shortRunNote: `Waiting ${v} days keeps extra cash inside the buyer's bank account interest-free, starving small suppliers of liquidity.`,
      longRunPivot: v >= 90 ? "Angry suppliers may halt deliveries or refuse discounts, causing stock-outs that hurt customers!" : "30–45 days maintains healthy mutual trust.",
    }),
  },
  greenpack: {
    label: "Zero-Plastic Packaging",
    summary: "Switching from cheap single-use plastic to compostable plant-fibre packaging.",
    knobLabel: "Eco-Material Rollout",
    unit: "%",
    min: 0,
    max: 100,
    step: 20,
    defaultVal: 80,
    score: (v) => ({
      shareholders: Math.round(58 - v * 0.18),
      employees: Math.min(85, Math.round(52 + v * 0.22)),
      customers: Math.min(94, Math.round(50 + v * 0.38)),
      suppliers: 55,
      community: Math.min(98, Math.round(45 + v * 0.5)),
      shortRunNote: `Raises packaging unit cost by ${Math.round(v * 0.14)}p per item, squeezing short-run Gross Profit Margin unless prices rise.`,
      longRunPivot: "Prevents pressure-group boycotts and lets ethical brands charge a price-inelastic premium.",
    }),
  },
};

function StakeholderConflictSimulator() {
  const [scenKey, setScenKey] = useState<ScenarioKey>("payrise");
  const [intensity, setIntensity] = useState<number>(SCENARIOS.payrise.defaultVal);
  const [horizonYears, setHorizonYears] = useState(1);

  const scen = SCENARIOS[scenKey];
  const pickScenario = (k: ScenarioKey) => {
    setScenKey(k);
    setIntensity(SCENARIOS[k].defaultVal);
  };

  const base = scen.score(intensity);
  // Longer horizon softens pure short-term profit conflict via reputation/retention feedback
  const hBoost = (horizonYears - 1) * 5;
  const rows = [
    { name: "Shareholders / Owners", tag: "Internal", val: Math.max(5, Math.min(98, base.shareholders + (scenKey === "latepay" ? -hBoost * 2 : hBoost))) },
    { name: "Employees & Unions", tag: "Internal", val: base.employees },
    { name: "Customers", tag: "External", val: base.customers },
    { name: "Suppliers", tag: "External", val: base.suppliers },
    { name: "Local Community", tag: "External", val: base.community },
  ];

  const winners = rows.filter((r) => r.val >= 60).map((r) => r.name.split(" ")[0]);
  const losers = rows.filter((r) => r.val <= 42).map((r) => r.name.split(" ")[0]);

  return (
    <WidgetFrame
      title="Stakeholder Conflict Matrix Simulator"
      tryThis={[
        "Test **Staff Wage Rise** at **12%** in **Year 1**, then step **Evaluation Horizon** up to **Year 3** to see how retention & service quality help rebuild shareholder value.",
        "Switch to **Factory Automation** at **70%** and identify which two stakeholder groups clash sharpest.",
        "Try **Supplier Credit Stretch** at **90+ days** and watch long-run shareholder benefit reverse when suppliers retaliate!",
      ]}
      caption={
        <>
          <strong>Short-run impact:</strong> {base.shortRunNote}{" "}
          <strong>AJIM 9/12-Mark Pivot (Year {horizonYears}):</strong> {base.longRunPivot}
        </>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Business decision scenario"
          value={scenKey}
          onChange={pickScenario}
          options={[
            { value: "payrise", label: "Staff Wage Rise" },
            { value: "automation", label: "Automation" },
            { value: "latepay", label: "90-Day Credit" },
            { value: "greenpack", label: "Eco Packaging" },
          ]}
        />
        <p className="text-xs text-ink-2">{scen.summary}</p>

        <div className="grid gap-4 sm:grid-cols-2">
          <Slider
            label={scen.knobLabel}
            value={intensity}
            min={scen.min}
            max={scen.max}
            step={scen.step}
            onChange={setIntensity}
            format={(v) => `${v}${scen.unit}`}
          />
          <Stepper
            label="AJIM Evaluation Horizon"
            value={horizonYears}
            min={1}
            max={3}
            step={1}
            onChange={setHorizonYears}
            format={(v) => `Year ${v}`}
          />
        </div>

        <div className="space-y-2 rounded-xl border border-line bg-surface-2 p-3">
          {rows.map((r) => {
            const good = r.val >= 58;
            const bad = r.val <= 42;
            const barColor = good ? "bg-good" : bad ? "bg-bad" : "bg-brand";
            return (
              <div key={r.name} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-ink">
                    {r.name} <span className="text-ink-2">({r.tag})</span>
                  </span>
                  <span className={good ? "text-good" : bad ? "text-bad" : "text-ink-2"}>
                    {good ? " Benefits" : bad ? " Hurt / Conflict" : " Neutral"} ({r.val}/100)
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface">
                  <div className={`h-full rounded-full transition-all ${barColor}`} style={{ width: `${r.val}%` }} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Readout
            label="Gaining Stakeholders"
            value={winners.length ? winners.join(", ") : "Balanced"}
            tone="good"
          />
          <Readout
            label="Conflicting / Losing Group"
            value={losers.length ? losers.join(", ") : "Minimal clash"}
            tone={losers.length ? "bad" : "brand"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "business-ownership-comparator",
    title: "Business Ownership Liability & Control Comparator",
    blurb: "Stress-test sole traders, partnerships, Ltds, PLCs and franchises against debt crashes, royalties and hostile takeovers.",
    Component: OwnershipLiabilityExplorer,
  },
  {
    id: "stakeholder-conflict-simulator",
    title: "Stakeholder Conflict Matrix Simulator",
    blurb: "Simulate wage rises, factory automation, 90-day supplier delays and eco-packaging across short- and long-run horizons.",
    Component: StakeholderConflictSimulator,
  },
];
