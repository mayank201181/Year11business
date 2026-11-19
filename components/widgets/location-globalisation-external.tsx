"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

type FirmRole = "exporter" | "importer" | "both";

function ExchangeRateTariffExplorer() {
  const [role, setRole] = useState<FirmRole>("both");
  const [rateUsd, setRateUsd] = useState(1.25); // £1 = $rateUsd (base 1.25)
  const [tariffPct, setTariffPct] = useState(10);
  const [ukExportPriceGbp, setUkExportPriceGbp] = useState(100);
  const [usImportInputUsd, setUsImportInputUsd] = useState(50);

  const baseRate = 1.25;
  const exportUsdNow = +(ukExportPriceGbp * rateUsd).toFixed(2);
  const exportUsdBase = +(ukExportPriceGbp * baseRate).toFixed(2);
  const importGbpPreTariff = +(usImportInputUsd / rateUsd).toFixed(2);
  const importGbpLanded = +(importGbpPreTariff * (1 + tariffPct / 100)).toFixed(2);
  const importGbpBase = +((usImportInputUsd / baseRate) * (1 + tariffPct / 100)).toFixed(2);

  // Volume sensitivity on US export orders (assume 1,000 base orders at $125)
  const priceRatio = exportUsdNow / exportUsdBase;
  const estExportUnits = Math.max(350, Math.round(1000 * (1 - (priceRatio - 1) * 0.9)));
  const gbpMarginPerUnit =
    role === "exporter"
      ? ukExportPriceGbp - 45
      : role === "importer"
        ? 95 - importGbpLanded
        : ukExportPriceGbp - importGbpLanded;

  const regime =
    rateUsd > baseRate + 0.01
      ? "SPICED (Strong Pound: Imports Cheaper, Exports Dearer)"
      : rateUsd < baseRate - 0.01
        ? "WPIDEC (Weak Pound: Imports Dearer, Exports Cheaper)"
        : "Baseline Exchange Rate (£1 = $1.25)";

  return (
    <WidgetFrame
      title="Exchange-Rate (SPICED) & Tariff Impact Explorer"
      tryThis={[
        "Slide **£1 in US Dollars** up from **$1.25 to $1.55 (SPICED)** — watch landed £ import cost drop while the US export price jumps!",
        "Slide **£1 in US Dollars** down to **$1.05 (WPIDEC)** and switch between **Pure Exporter**, **Pure Importer** and **Imports Inputs + Exports Goods**.",
        "Raise **UK Import Tariff %** from **0% to 25%** to see how protectionism squeezes importer margins even when the currency stays flat.",
      ]}
      caption={
        <>
          <strong>{regime}:</strong> A <strong>${usImportInputUsd}</strong> US component shipment costs{" "}
          <strong>£{importGbpPreTariff.toFixed(2)}</strong> before duty and <strong>£{importGbpLanded.toFixed(2)}</strong>{" "}
          after a <strong>{tariffPct}%</strong> tariff (vs £{importGbpBase.toFixed(2)} at $1.25). Meanwhile, a{" "}
          <strong>£{ukExportPriceGbp}</strong> UK export costs US buyers <strong>${exportUsdNow.toFixed(2)}</strong>{" "}
          (vs ${exportUsdBase.toFixed(2)} at $1.25), shifting estimated US order volume to{" "}
          <strong>{estExportUnits.toLocaleString()} units</strong>.
        </>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Business trade profile"
          value={role}
          onChange={setRole}
          options={[
            { value: "both", label: "Imports Inputs + Exports" },
            { value: "exporter", label: "Pure UK Exporter" },
            { value: "importer", label: "Pure UK Importer" },
          ]}
        />

        <div className="grid gap-3 sm:grid-cols-2">
          <Slider
            label="Exchange Rate (£1 = $ USD)"
            value={rateUsd}
            min={1.0}
            max={1.6}
            step={0.05}
            onChange={setRateUsd}
            format={(v) => `$${v.toFixed(2)}`}
          />
          <Slider
            label="Import Tariff on US Components"
            value={tariffPct}
            min={0}
            max={30}
            step={5}
            onChange={setTariffPct}
            format={(v) => `${v}%`}
          />
          <Slider
            label="UK Export Selling Price (£)"
            value={ukExportPriceGbp}
            min={60}
            max={160}
            step={10}
            onChange={setUkExportPriceGbp}
            format={(v) => `£${v}`}
          />
          <Slider
            label="US Supplier Component Price ($)"
            value={usImportInputUsd}
            min={20}
            max={90}
            step={5}
            onChange={setUsImportInputUsd}
            format={(v) => `$${v}`}
          />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Readout
            label="US Buyer Price ($)"
            value={`$${exportUsdNow.toFixed(2)}`}
            tone={rateUsd > baseRate ? "bad" : rateUsd < baseRate ? "good" : "brand"}
          />
          <Readout
            label="Landed Import Cost (£)"
            value={`£${importGbpLanded.toFixed(2)}`}
            tone={importGbpLanded < importGbpBase ? "good" : importGbpLanded > importGbpBase ? "bad" : "brand"}
          />
          <Readout
            label="Unit Contribution (£)"
            value={`${gbpMarginPerUnit < 0 ? "−" : ""}£${Math.abs(gbpMarginPerUnit).toFixed(2)}`}
            tone={gbpMarginPerUnit >= 50 ? "good" : gbpMarginPerUnit <= 35 ? "bad" : "ink"}
          />
          <Readout
            label="Est. US Export Demand"
            value={`${estExportUnits} units`}
            tone={estExportUnits >= 1000 ? "good" : "bad"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

type SectorKind = "luxury" | "essential" | "discounter";

function InterestTaxPolicySimulator() {
  const [sector, setSector] = useState<SectorKind>("luxury");
  const [interestRate, setInterestRate] = useState(5.5); // %
  const [corpTaxPct, setCorpTaxPct] = useState(25); // %
  const [vatPct, setVatPct] = useState(20); // %
  const [debtHalfMillions, setDebtHalfMillions] = useState(2); // in £500k steps => £1.0m

  const loanM = debtHalfMillions * 0.5; // £ millions
  // Base operating profit at 3% base rate & 20% VAT = £600k
  const rateDelta = interestRate - 3.0;
  const vatDelta = vatPct - 20;

  const demandMultiplier =
    sector === "luxury"
      ? Math.max(0.45, 1 - rateDelta * 0.08 - vatDelta * 0.018)
      : sector === "essential"
        ? Math.max(0.82, 1 - rateDelta * 0.015 - vatDelta * 0.005)
        : Math.min(1.35, 1 + rateDelta * 0.045 - vatDelta * 0.004); // discounters gain when rates squeeze mortgages!

  const opProfitK = Math.round(600 * demandMultiplier);
  const annualInterestK = Math.round(loanM * 1000 * (interestRate / 100));
  const profitBeforeTaxK = opProfitK - annualInterestK;
  const corpTaxPaidK = profitBeforeTaxK > 0 ? Math.round((profitBeforeTaxK * corpTaxPct) / 100) : 0;
  const retainedAfterTaxK = profitBeforeTaxK - corpTaxPaidK;

  return (
    <WidgetFrame
      title="Interest-Rate & Tax Policy Simulator"
      tryThis={[
        "Keep **Luxury / Credit Goods** selected and push **Base Interest Rate** from **2% to 8%** — watch operating profit AND loan interest squeeze after-tax profit from both sides!",
        "Now switch to **Value Discounter** at **8% interest rate** with **£0m Debt** — see why cash-rich discount supermarkets thrive during mortgage squeezes!",
        "Raise **Corporation Tax** from **15% to 30%** and observe that it cuts **Retained After-Tax Profit** without changing Operating Profit.",
      ]}
      caption={
        <>
          With a <strong>{interestRate.toFixed(1)}%</strong> interest rate and <strong>£{loanM.toFixed(1)}m</strong>{" "}
          variable-rate debt, annual interest costs <strong>£{annualInterestK}k</strong>. Demand multiplier for{" "}
          <strong>
            {sector === "luxury" ? "credit-funded luxuries" : sector === "essential" ? "everyday essentials" : "value discounters"}
          </strong>{" "}
          is <strong>{(demandMultiplier * 100).toFixed(0)}%</strong> of baseline, yielding{" "}
          <strong>{profitBeforeTaxK < 0 ? `−£${Math.abs(profitBeforeTaxK)}k` : `£${profitBeforeTaxK}k`}</strong> profit before tax and{" "}
          <strong>{retainedAfterTaxK < 0 ? `−£${Math.abs(retainedAfterTaxK)}k` : `£${retainedAfterTaxK}k`}</strong> after{" "}
          <strong>{corpTaxPct}%</strong> direct corporation tax.
        </>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Product & income elasticity profile"
          value={sector}
          onChange={setSector}
          options={[
            { value: "luxury", label: "Luxury / Credit (Cars, Sofas)" },
            { value: "essential", label: "Inelastic Essential" },
            { value: "discounter", label: "Value Discounter" },
          ]}
        />

        <div className="grid gap-3 sm:grid-cols-2">
          <Slider
            label="Central Bank / Loan Interest Rate"
            value={interestRate}
            min={1.5}
            max={9.0}
            step={0.5}
            onChange={setInterestRate}
            format={(v) => `${v.toFixed(1)}%`}
          />
          <Stepper
            label="Variable-Rate Bank Debt"
            value={debtHalfMillions}
            min={0}
            max={6}
            step={1}
            onChange={setDebtHalfMillions}
            format={(v) => `£${(v * 0.5).toFixed(1)}m`}
          />
          <Slider
            label="Corporation Tax (Direct Tax)"
            value={corpTaxPct}
            min={12}
            max={32}
            step={1}
            onChange={setCorpTaxPct}
            format={(v) => `${v}%`}
          />
          <Slider
            label="VAT / Sales Tax (Indirect Tax)"
            value={vatPct}
            min={10}
            max={25}
            step={1}
            onChange={setVatPct}
            format={(v) => `${v}%`}
          />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Readout
            label="Operating Profit"
            value={`£${opProfitK}k`}
            tone={opProfitK >= 580 ? "good" : opProfitK <= 420 ? "bad" : "brand"}
          />
          <Readout
            label="Loan Interest Cost"
            value={`£${annualInterestK}k`}
            tone={annualInterestK === 0 ? "good" : annualInterestK >= 140 ? "bad" : "ink"}
          />
          <Readout
            label="Corp. Tax Bill"
            value={`£${corpTaxPaidK}k`}
            tone="ink"
          />
          <Readout
            label="After-Tax Profit"
            value={`${retainedAfterTaxK < 0 ? "−" : ""}£${Math.abs(retainedAfterTaxK)}k`}
            tone={retainedAfterTaxK >= 300 ? "good" : retainedAfterTaxK < 120 ? "bad" : "brand"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "exchange-rate-spiced-explorer",
    title: "Exchange-Rate (SPICED) & Tariff Impact Explorer",
    blurb: "Explore how currency appreciation (SPICED), depreciation (WPIDEC) and import tariffs reshape importer costs and exporter demand.",
    Component: ExchangeRateTariffExplorer,
  },
  {
    id: "interest-tax-policy-simulator",
    title: "Interest-Rate & Tax Policy Simulator",
    blurb: "Test central-bank interest-rate hikes, debt gearing, direct corporation tax and indirect VAT across luxury, essential and discount firms.",
    Component: InterestTaxPolicySimulator,
  },
];
