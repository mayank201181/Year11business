"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

type ChannelKey = "face" | "video" | "email" | "notice";

interface ChannelSpec {
  label: string;
  baseClarity: number;
  writtenRecord: string;
  empathyScore: number;
  costPerStaff: number;
}

const CHANNELS: Record<ChannelKey, ChannelSpec> = {
  face: {
    label: "1-to-1 / Huddle",
    baseClarity: 96,
    writtenRecord: "None unless minuted",
    empathyScore: 95,
    costPerStaff: 14,
  },
  video: {
    label: "Video Call",
    baseClarity: 88,
    writtenRecord: "Recording / chat log",
    empathyScore: 78,
    costPerStaff: 4,
  },
  email: {
    label: "Group Email",
    baseClarity: 76,
    writtenRecord: "Full searchable trail",
    empathyScore: 30,
    costPerStaff: 1,
  },
  notice: {
    label: "Noticeboard",
    baseClarity: 62,
    writtenRecord: "Pinned poster only",
    empathyScore: 15,
    costPerStaff: 0.5,
  },
};

function CommunicationChannelSimulator() {
  const [channel, setChannel] = useState<ChannelKey>("email");
  const [layers, setLayers] = useState(4);
  const [jargonLevel, setJargonLevel] = useState(30); // % jargon
  const [feedbackLoop, setFeedbackLoop] = useState<"oneway" | "twoway">("oneway");
  const [dailyEmails, setDailyEmails] = useState(80);

  const spec = CHANNELS[channel];
  // Tall hierarchy degrades clarity per extra layer beyond 1
  const layerFactor = Math.pow(0.92, layers - 1);
  const jargonPenalty = jargonLevel * 0.42;
  const overloadPenalty = channel === "email" ? Math.max(0, (dailyEmails - 30) * 0.22) : 0;
  const feedbackBoost = feedbackLoop === "twoway" ? 18 : 0;

  const rawClarity = spec.baseClarity * layerFactor - jargonPenalty - overloadPenalty + feedbackBoost;
  const finalClarity = Math.max(12, Math.min(99, Math.round(rawClarity)));
  const estErrorRatePct = Math.max(1, Math.round((100 - finalClarity) * 0.45));
  const moraleTone =
    channel === "email" && feedbackLoop === "oneway" && layers >= 5
      ? "Low (Alienated)"
      : feedbackLoop === "twoway" && finalClarity >= 80
        ? "High (Engaged)"
        : "Moderate";

  return (
    <WidgetFrame
      title="Communication Channel & Barrier Simulator"
      tryThis={[
        "Set **Group Email**, **6 Hierarchy Layers**, **50% Technical Jargon** and **One-Way** — see how overload + tall chains slash clarity below 40%!",
        "Now switch **Feedback** to **Two-Way Loop**, cut **Jargon to 0%**, and **Delayer to 2 Layers** — watch clarity rebound above 90%.",
        "Compare **1-to-1 / Huddle** vs **Noticeboard** when communicating sensitive HR restructures vs routine factory safety reminders.",
      ]}
      caption={
        <>
          <strong>{spec.label}</strong> across <strong>{layers} hierarchy layers</strong> ({feedbackLoop === "twoway" ? "with two-way feedback check" : "one-way with zero check"}):{" "}
          message clarity reaches <strong>{finalClarity}%</strong>, leaving an estimated{" "}
          <strong>{estErrorRatePct}%</strong> operational misunderstanding rate. Written trail:{" "}
          <strong>{spec.writtenRecord}</strong>.
        </>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Communication channel"
            value={channel}
            onChange={setChannel}
            options={[
              { value: "face", label: "Face-to-Face" },
              { value: "video", label: "Video Call" },
              { value: "email", label: "Group Email" },
              { value: "notice", label: "Noticeboard" },
            ]}
          />
          <Segmented
            label="Feedback mode"
            value={feedbackLoop}
            onChange={setFeedbackLoop}
            options={[
              { value: "oneway", label: "One-Way Only" },
              { value: "twoway", label: "Two-Way Feedback" },
            ]}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <Stepper
            label="Hierarchy Layers"
            value={layers}
            min={1}
            max={7}
            step={1}
            onChange={setLayers}
            format={(v) => `${v} layers`}
          />
          <Slider
            label="Technical Jargon Level"
            value={jargonLevel}
            min={0}
            max={60}
            step={10}
            onChange={setJargonLevel}
            format={(v) => `${v}%`}
          />
          <Slider
            label="Inbox Load (Emails/Day)"
            value={dailyEmails}
            min={10}
            max={150}
            step={10}
            onChange={setDailyEmails}
            format={(v) => `${v}/day`}
          />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Readout
            label="Message Clarity"
            value={`${finalClarity}%`}
            tone={finalClarity >= 82 ? "good" : finalClarity <= 55 ? "bad" : "brand"}
          />
          <Readout
            label="Misunderstanding Risk"
            value={`${estErrorRatePct}%`}
            tone={estErrorRatePct <= 8 ? "good" : estErrorRatePct >= 20 ? "bad" : "ink"}
          />
          <Readout
            label="HR Empathy Fit"
            value={`${spec.empathyScore}/100`}
            tone={spec.empathyScore >= 75 ? "good" : "bad"}
          />
          <Readout
            label="Staff Morale Impact"
            value={moraleTone}
            tone={moraleTone.startsWith("High") ? "good" : moraleTone.startsWith("Low") ? "bad" : "brand"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

type RecruitRoute = "internal" | "external";
type TrainMethod = "onjob" | "offjob";

function RecruitmentTrainingExplorer() {
  const [route, setRoute] = useState<RecruitRoute>("external");
  const [training, setTraining] = useState<TrainMethod>("offjob");
  const [salaryK, setSalaryK] = useState(40);
  const [trainees, setTrainees] = useState(4);
  const [poachRiskPct, setPoachRiskPct] = useState(20);

  // Recruitment funnel numbers per role
  const applicants = route === "external" ? 85 : 6;
  const shortlisted = route === "external" ? 12 : 3;
  const recruitCost =
    route === "external"
      ? Math.round(salaryK * 1000 * 0.16) + 900 // 16% agency + £900 ads
      : 1300; // £0 agency, £1,300 to backfill junior knock-on role

  // Training cost & productivity return across `trainees` staff
  const courseFeePerHead = training === "offjob" ? 1400 : 150;
  const lostOutputPerHead = training === "offjob" ? 600 : 280; // mentor slowdown on-the-job!
  const totalTrainCost = trainees * (courseFeePerHead + lostOutputPerHead);

  const grossProdGainPerHead = training === "offjob" ? 3800 : 2100;
  const retentionMultiplier = training === "offjob" ? 1 - poachRiskPct / 100 : 0.94;
  const expectedAnnualGain = Math.round(trainees * grossProdGainPerHead * retentionMultiplier);
  const netYear1Benefit = expectedAnnualGain - totalTrainCost;

  return (
    <WidgetFrame
      title="Recruitment Funnel & Training Cost-Benefit Explorer"
      tryThis={[
        "Toggle **Internal Promotion** vs **External Recruitment** at a **£55k salary** — compare the **85-applicant** external talent pool against **£8,400+** saved in agency fees!",
        "Switch between **On-the-Job** and **Off-the-Job** training, then raise **Rival Poaching Risk %** to **45%** to see when rival poaching wipes out off-the-job ROI!",
        "Step **Staff Trained** from **1 to 8** and track net Year 1 contribution gain after tuition and lost output days.",
      ]}
      caption={
        <>
          <strong>{route === "external" ? "External Recruitment" : "Internal Promotion"}</strong> draws{" "}
          <strong>{applicants} applicants</strong> ({shortlisted} shortlisted against the{" "}
          <strong>Person Specification</strong>) at a hiring cost of <strong>£{recruitCost.toLocaleString()}</strong>
          {route === "internal" ? " (including backfilling the knock-on junior vacancy)" : " (16% agency + ads)"}.{" "}
          <strong>{training === "offjob" ? "Off-the-job" : "On-the-job"}</strong> training for{" "}
          <strong>{trainees} staff</strong> costs <strong>£{totalTrainCost.toLocaleString()}</strong> (fees + lost output) and yields{" "}
          <strong>{netYear1Benefit >= 0 ? "+" : "−"}£{Math.abs(netYear1Benefit).toLocaleString()}</strong> net Year 1 benefit.
        </>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Recruitment source"
            value={route}
            onChange={setRoute}
            options={[
              { value: "internal", label: "Internal Promotion" },
              { value: "external", label: "External Agency/Ads" },
            ]}
          />
          <Segmented
            label="Training method"
            value={training}
            onChange={setTraining}
            options={[
              { value: "onjob", label: "On-the-Job (Shadowing)" },
              { value: "offjob", label: "Off-the-Job (College)" },
            ]}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <Slider
            label="Role Annual Salary"
            value={salaryK}
            min={24}
            max={70}
            step={2}
            onChange={setSalaryK}
            format={(v) => `£${v}k`}
          />
          <Stepper
            label="Staff Trained"
            value={trainees}
            min={1}
            max={10}
            step={1}
            onChange={setTrainees}
            format={(v) => `${v} staff`}
          />
          <Slider
            label="Rival Poaching Risk (Off-Job)"
            value={poachRiskPct}
            min={0}
            max={50}
            step={5}
            onChange={setPoachRiskPct}
            format={(v) => `${v}%`}
          />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Readout
            label="Funnel (Apps → Shortlist)"
            value={`${applicants} → ${shortlisted}`}
            tone="brand"
          />
          <Readout
            label="Recruitment Cost"
            value={`£${recruitCost.toLocaleString()}`}
            tone={route === "internal" ? "good" : "ink"}
          />
          <Readout
            label="Total Training Cost"
            value={`£${totalTrainCost.toLocaleString()}`}
            tone="ink"
          />
          <Readout
            label="Net Year 1 Training ROI"
            value={`${netYear1Benefit >= 0 ? "+" : "−"}£${Math.abs(netYear1Benefit).toLocaleString()}`}
            tone={netYear1Benefit > 1500 ? "good" : netYear1Benefit < 0 ? "bad" : "brand"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "communication-barrier-simulator",
    title: "Communication Channel & Barrier Simulator",
    blurb: "Test how hierarchy layers, technical jargon, inbox overload and two-way feedback loops transform clarity and morale.",
    Component: CommunicationChannelSimulator,
  },
  {
    id: "recruitment-training-explorer",
    title: "Recruitment Funnel & Training Cost-Benefit Explorer",
    blurb: "Compare internal promotion vs external recruitment costs alongside on-the-job shadowing vs off-the-job training ROI and poaching risk.",
    Component: RecruitmentTrainingExplorer,
  },
];
