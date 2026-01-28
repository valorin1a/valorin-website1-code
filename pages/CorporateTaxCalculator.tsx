/* ============================================================
   UAE CORPORATE TAX CALCULATOR
   Author: VALORIN Finance & Advisory
   Purpose: Corporate Tax estimation (Mainland, Non-QFZP, QFZP)
   ============================================================ */

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Calculator, ArrowRight, Info, AlertCircle, CheckCircle, Smartphone } from "lucide-react";

/* =========================
   Helpers
   ========================= */

function clampMin0(val: number): number {
  return Math.max(0, val);
}

function formatAed(val: number): string {
  return val.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function toNumberOrNull(val: string): number | null {
  if (val.trim() === "") return null;
  const num = Number(val);
  return isNaN(num) ? null : num;
}

/* =========================
   Types
   ========================= */

type CtRegimeKey = "MAINLAND" | "QFZP" | "NON_QFZP";

type CtFieldKey =
  | "pbt"
  | "addback_entertainment"
  | "addback_fines"
  | "addback_donations"
  | "addback_other"
  | "tp_upward_adj"
  | "interest_disallowed"
  | "exempt_income"
  | "loss_bf";

type CtInputs = Record<CtFieldKey, number | null>;

type FzFieldKey = "fz_total_revenue" | "fz_nonqual_revenue" | "fz_nonqual_income";

type FzInputs = Record<FzFieldKey, number | null>;

type DeMinimisStatus = "NOT_TESTED" | "MET" | "BREACHED";

/* =========================
   Constants
   ========================= */

const CT_THRESHOLD = 375000;
const CT_RATE = 0.09;
const FZ_CAP = 5000000;

/* =========================
   LOV (Card 1)
   ========================= */

const CT_REGIME_LOV: Array<{
  key: CtRegimeKey;
  label: string;
  helper: string;
}> = [
    {
      key: "MAINLAND",
      label: "Mainland (Standard Corporate Tax)",
      helper: "Use when the entity is not a Free Zone Person or is treated as mainland for CT.",
    },
    {
      key: "QFZP",
      label: "Free Zone Person (QFZP – 0% on Qualifying Income)",
      helper:
        "Use when the entity is a Free Zone Person and expects to qualify as QFZP (the calculator will run De-Minimis test and show QFZP outcome).",
    },
    {
      key: "NON_QFZP",
      label: "Free Zone Person (Non-QFZP - Standard Corporate Tax )",
      helper:
        "Use when the Free Zone Person is not QFZP (for any reason including De-Minimis breach or failing QFZP conditions) and should be taxed under the standard regime.",
    },
  ];

/* =========================
   Field definitions (Card 2)
   ========================= */

const CARD2_FIELDS: Array<{
  key: CtFieldKey;
  label: string;
  treatment: string;
}> = [
    { key: "pbt", label: "Accounting Profit Before Tax (PBT)", treatment: "Base" },
    { key: "addback_entertainment", label: "Client Entertainment", treatment: "Add (50%)" },
    { key: "addback_fines", label: "Fines and Penalties", treatment: "Add (100%)" },
    { key: "addback_donations", label: "Non-Qualifying Donations", treatment: "Add (100%)" },
    { key: "addback_other", label: "Other Non-Deductible Expenses", treatment: "Add (100%)" },
    { key: "tp_upward_adj", label: "Transfer Pricing Adjustment", treatment: "Add (100%)" },
    { key: "interest_disallowed", label: "Disallowed Interest For The Period", treatment: "Add (100%)" },
    { key: "exempt_income", label: "Exempt Income", treatment: "Deduct (100%)" },
    { key: "loss_bf", label: "Tax Loss Brought Forward", treatment: "Deduct (75% cap)" },
  ];

const FIELD_LABELS_CT: Record<CtFieldKey, string> = CARD2_FIELDS.reduce((acc, f) => {
  acc[f.key] = f.label;
  return acc;
}, {} as Record<CtFieldKey, string>);

const FIELD_LABELS_FZ: Record<FzFieldKey, string> = {
  fz_total_revenue: "Total Revenue (Gross)",
  fz_nonqual_revenue: "Non-Qualifying Revenue",
  fz_nonqual_income: "Non-Qualifying Income (Taxable)",
};

/* =========================
   Info Popup Engine (Modal)
   ========================= */

type HelpItem = { title: string; body: React.ReactNode };
const info = (title: string, body: React.ReactNode): HelpItem => ({ title, body });

/* =========================
   Popup Info Content
   ========================= */

const HELP_CT: Record<CtFieldKey, HelpItem> = {
  pbt: info(
    "Accounting Profit Before Tax (PBT)",
    <>
      <p className="mb-2"><b>What to include:</b> Net profit or loss before tax as per your audited or management financial statements (IFRS). Use the final PBT figure from your income statement.</p>
      <p className="mb-2"><b>Example:</b> Audited PBT AED 3,200,000 → enter <b>3200000</b>.</p>
      <p>If your company has a loss then enter a negative number (for example <b>-450000</b>).</p>
    </>
  ),
  addback_entertainment: info(
    "Client Entertainment",
    <>
      <p className="mb-2"><b>What to include:</b> Client dinners, events, hospitality, gifts, staff parties and entertainment related spend, sponsorship hospitality portion.</p>
      <p className="mb-2"><b>Example:</b> Total entertainment AED 15,000 → enter <b>15000</b>.</p>
      <p>The calculator automatically adds back <b>50%</b> as non-deductible.</p>
    </>
  ),
  addback_fines: info(
    "Fines and Penalties",
    <>
      <p className="mb-2"><b>What to include:</b> Fines and penalties charged to P&L such as traffic fines, municipality fines, regulatory penalties and VAT penalties and late payment fines.</p>
      <p className="mb-2"><b>Example:</b> Fines AED 8,000 → enter <b>8000</b>.</p>
      <p>The calculator automatically adds back <b>100%</b> as non-deductible.</p>
    </>
  ),
  addback_donations: info(
    "Non-Qualifying Donations",
    <>
      <p className="mb-2"><b>What to include:</b> Donations and charitable payments that are not eligible under UAE Corporate Tax rules for deduction.</p>
      <p className="mb-2"><b>Example:</b> Donations AED 25,000 → enter <b>25000</b>.</p>
      <p>The calculator automatically adds back <b>100%</b> as non-deductible.</p>
    </>
  ),
  addback_other: info(
    "Other Non-Deductible Expenses",
    <>
      <p className="mb-2"><b>What to include:</b> Any other expenses recorded in accounts that are not deductible for CT such as personal expenses, non-business expenses, unsupported expenses or disallowed items.</p>
      <p className="mb-2"><b>Example:</b> Non-deductible expenses AED 50,000 → enter <b>50000</b>.</p>
      <p>The calculator automatically adds back <b>100%</b> as non-deductible.</p>
    </>
  ),
  tp_upward_adj: info(
    "Transfer Pricing Adjustment",
    <>
      <p className="mb-2"><b>What to include:</b> Upward transfer pricing adjustment where accounting expense is higher than arm’s length or income is lower than arm’s length and adjustment is added back to taxable income.</p>
      <p className="mb-2"><b>Example:</b> Upward TP adjustment AED 120,000 → enter <b>120000</b>.</p>
      <p>The calculator adds back <b>100%</b> as taxable increase.</p>
    </>
  ),
  interest_disallowed: info(
    "Disallowed Interest For The Period",
    <>
      <p className="mb-2"><b>What to include:</b> Interest expense that is disallowed under UAE CT interest limitation rules for the current period.</p>
      <p className="mb-2"><b>Example:</b> Disallowed interest AED 40,000 → enter <b>40000</b>.</p>
      <p>The calculator adds back <b>100%</b> as non-deductible.</p>
    </>
  ),
  exempt_income: info(
    "Exempt Income",
    <>
      <p className="mb-2"><b>What to include:</b> Income that is exempt from UAE Corporate Tax such as qualifying dividend income or qualifying capital gains that meet exemption conditions.</p>
      <p className="mb-2"><b>Example:</b> Exempt income AED 200,000 → enter <b>200000</b>.</p>
      <p>The calculator deducts <b>100%</b> from taxable income.</p>
    </>
  ),
  loss_bf: info(
    "Tax Loss Brought Forward",
    <>
      <p className="mb-2"><b>What to include:</b> Tax losses brought forward from prior years that are available for utilisation in the current period.</p>
      <p className="mb-2"><b>Example:</b> Brought forward tax loss AED 900,000 → enter <b>900000</b>.</p>
      <p><b>Auto rule:</b> Loss utilisation is capped at <b>75%</b> of current taxable income (before loss utilisation).</p>
    </>
  ),
};

const HELP_FZ: Record<FzFieldKey, HelpItem> = {
  fz_total_revenue: info(
    "Total Revenue (Gross)",
    <>
      <p className="mb-2"><b>What to include:</b> Total revenue as per financial statements for the period. Include all sales and service revenue (gross).</p>
      <p className="mb-2"><b>Example:</b> Total revenue AED 50,000 → enter <b>50000</b>.</p>
      <p>The calculator uses this value to compute <b>5%</b> threshold for the De-Minimis test.</p>
    </>
  ),
  fz_nonqual_revenue: info(
    "Non-Qualifying Revenue",
    <>
      <p className="mb-2"><b>What to include:</b> Revenue from activities that are treated as non-qualifying for the QFZP De-Minimis test.</p>
      <div className="mb-2">
        <ul className="list-disc pl-4 space-y-1">
          <li>Sale by a Free Zone entity to a <b>natural person</b> for use within UAE.</li>
          <li>Sale to a <b>Mainland registered company</b> where goods are consumed in UAE.</li>
          <li>Local UAE sales to <b>non-Free-Zone persons</b>.</li>
          <li>Revenue from <b>excluded activities</b> (financial services, etc).</li>
        </ul>
      </div>
      <p>The calculator compares this value with the De-Minimis limit.</p>
    </>
  ),
  fz_nonqual_income: info(
    "Non-Qualifying Income (Taxable)",
    <>
      <p className="mb-2"><b>What to include:</b> Profit (taxable income) from non-qualifying activities only. This is <b>not revenue</b>.</p>
      <p className="mb-2"><b>How to compute:</b> Non-qualifying income = (non-qualifying revenue) minus directly attributable costs and indirect costs.</p>
      <p>If De-Minimis is <b>met</b> then the calculator applies <b>9%</b> on this full amount.</p>
    </>
  ),
};

/* =========================
   Core Logic
   ========================= */

function computeTaxableIncome(ct: CtInputs) {
  const v = (k: CtFieldKey) => Number(ct[k] ?? 0);

  const addbackEntertainment = v("addback_entertainment") * 0.5;
  const addbackFines = v("addback_fines") * 1.0;
  const addbackDonations = v("addback_donations") * 1.0;
  const addbackOther = v("addback_other") * 1.0;
  const tpUpwardAdj = v("tp_upward_adj") * 1.0;
  const interestDisallowed = v("interest_disallowed") * 1.0;

  const totalAddBacks =
    addbackEntertainment +
    addbackFines +
    addbackDonations +
    addbackOther +
    tpUpwardAdj +
    interestDisallowed;

  const exemptIncome = v("exempt_income") * 1.0;
  const taxableBeforeLoss = v("pbt") + totalAddBacks - exemptIncome;

  const lossBF = v("loss_bf");
  const maxLossUtilisation = clampMin0(taxableBeforeLoss) * 0.75;
  const lossUtilised = Math.min(clampMin0(lossBF), maxLossUtilisation);

  const taxableIncome = taxableBeforeLoss - lossUtilised;

  return {
    addbackEntertainment,
    addbackFines,
    addbackDonations,
    addbackOther,
    tpUpwardAdj,
    interestDisallowed,
    totalAddBacks,
    exemptIncome,
    taxableBeforeLoss,
    maxLossUtilisation,
    lossUtilised,
    taxableIncome,
  };
}

function computeDeMinimis(fz: FzInputs) {
  const A = Number(fz.fz_total_revenue ?? 0);
  const B = Number(fz.fz_nonqual_revenue ?? 0);
  const E = A * 0.05;
  const F = Math.min(FZ_CAP, E);
  const met = B <= F;
  return { A, B, E, F, met };
}

function computeQfzpTaxIfMet(fz: FzInputs) {
  const C = Number(fz.fz_nonqual_income ?? 0);
  return clampMin0(C) * CT_RATE;
}

function missingCtFields(ct: CtInputs): CtFieldKey[] {
  const keys = Object.keys(ct) as CtFieldKey[];
  return keys.filter((k) => ct[k] === null);
}

function missingFzFieldsForTest(fz: FzInputs): FzFieldKey[] {
  const req: FzFieldKey[] = ["fz_total_revenue", "fz_nonqual_revenue"];
  return req.filter((k) => fz[k] === null);
}

/* =========================
   React Component
   ========================= */

export default function CorporateTaxCalculator() {
  const navigate = useNavigate();
  const [regime, setRegime] = useState<CtRegimeKey>("MAINLAND");

  const [ct, setCt] = useState<CtInputs>({
    pbt: null,
    addback_entertainment: null,
    addback_fines: null,
    addback_donations: null,
    addback_other: null,
    tp_upward_adj: null,
    interest_disallowed: null,
    exempt_income: null,
    loss_bf: null,
  });

  const [fz, setFz] = useState<FzInputs>({
    fz_total_revenue: null,
    fz_nonqual_revenue: null,
    fz_nonqual_income: null,
  });

  const [fzStatus, setFzStatus] = useState<DeMinimisStatus>("NOT_TESTED");
  const [hasCalculated, setHasCalculated] = useState(false);

  // Custom modal state
  const [activeHelp, setActiveHelp] = useState<HelpItem | null>(null);

  const computed = useMemo(() => computeTaxableIncome(ct), [ct]);
  const dm = useMemo(() => computeDeMinimis(fz), [fz]);

  const standard_taxable_at_0 = clampMin0(Math.min(computed.taxableIncome, CT_THRESHOLD));
  const standard_taxable_at_9 = clampMin0(computed.taxableIncome - CT_THRESHOLD);
  const standard_tax_row_0 = standard_taxable_at_0 * 0;
  const standard_tax_row_9 = standard_taxable_at_9 * CT_RATE;
  const qfzpTaxIfMet = useMemo(() => computeQfzpTaxIfMet(fz), [fz]);
  const totalTaxPayable = regime === "QFZP" && fzStatus === "MET" ? qfzpTaxIfMet : standard_tax_row_0 + standard_tax_row_9;

  useEffect(() => {
    setHasCalculated(false);
    if (regime !== "QFZP") setFzStatus("NOT_TESTED");
  }, [regime]);

  // Click outside handler for modal
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setActiveHelp(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function runDeMinimisTest() {
    const missing = missingFzFieldsForTest(fz);
    if (missing.length > 0) {
      alert(`Please enter missing fields: ${missing.map((k) => FIELD_LABELS_FZ[k]).join(", ")}`);
      setFzStatus("NOT_TESTED");
      return;
    }
    if (dm.met) {
      setFzStatus("MET");
      return;
    }
    setFzStatus("BREACHED");
    alert("De-Minimis limit breached. Standard CT regime applies.");
  }

  function calculateCorporateTaxLiability() {
    if (regime === "QFZP") {
      if (fzStatus === "NOT_TESTED") {
        alert("Please run De-Minimis test first");
        setHasCalculated(false);
        return;
      }
      if (fzStatus === "MET") {
        if (fz.fz_nonqual_income === null) {
          alert(`Please enter missing field: ${FIELD_LABELS_FZ.fz_nonqual_income}`);
          setHasCalculated(false);
          return;
        }
        setHasCalculated(true);
        return;
      }
    }
    const missingCt = missingCtFields(ct);
    if (missingCt.length > 0) {
      alert(`Please enter missing CT fields: ${missingCt.map((k) => FIELD_LABELS_CT[k]).join(", ")}`);
      setHasCalculated(false);
      return;
    }
    setHasCalculated(true);
  }

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            {/* Back Button */}
            <div className="flex justify-center mb-8">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline bg-background/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Go Back
              </button>
            </div>

            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Calculator className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Tax Hub</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
                UAE <span className="text-gradient-gold">Corporate Tax Calculator</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive estimation tool for Mainland and Free Zone entities.
                Calculate your tax liability based on the latest Federal Decree-Law.
              </p>
            </div>

            {/* GUIDANCE BLOCK */}
            <div className="glass-card rounded-xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">How this Corporate Tax Calculator Works</h2>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                This calculator estimates UAE Corporate Tax based on the tax regime you select and the information you provide.
                For Mainland and Non-QFZP the tax is calculated using the standard Corporate Tax bands.
                For Free Zone Persons (QFZP) the calculator applies the De-Minimis test and determines whether QFZP treatment applies.
                Results are indicative and based on current UAE Corporate Tax rules and guidance.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-4 left-1/6 right-1/6 h-0.5 bg-border -z-10"></div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold border border-primary/20 mb-3 bg-background relative z-10">1</div>
                  <div className="text-sm font-medium text-foreground">Select Corporate Tax Regime</div>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold border border-primary/20 mb-3 bg-background relative z-10">2</div>
                  <div className="text-sm font-medium text-foreground">Enter financial data and run De-Minimis test if applicable</div>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold border border-primary/20 mb-3 bg-background relative z-10">3</div>
                  <div className="text-sm font-medium text-foreground">View estimated Corporate Tax liability</div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-5 border border-border">
                <div className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  Important assumptions
                </div>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5 ml-1">
                  <li>All amounts are in AED</li>
                  <li>Calculations assume correct classification of income and expenses</li>
                  <li>For QFZP the De-Minimis outcome determines applicable tax treatment</li>
                </ul>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">

              {/* LEFT COLUMN: INPUTS */}
              <div className="space-y-6">

                {/* 1. Regime Selection */}
                <div className="glass-card rounded-xl p-6">
                  <h2 className="text-lg font-semibold text-foreground mb-4">Corporate Tax Regime</h2>
                  <label className="block text-sm font-medium text-foreground mb-2">Select Entity Regime</label>
                  <select
                    value={regime}
                    onChange={(e) => setRegime(e.target.value as CtRegimeKey)}
                    className="calculator-select mb-4"
                  >
                    {CT_REGIME_LOV.map((o) => (
                      <option key={o.key} value={o.key}>{o.label}</option>
                    ))}
                  </select>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border">
                    <p className="text-xs font-semibold text-primary mb-1">Use when:</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {CT_REGIME_LOV.find((x) => x.key === regime)?.helper}
                    </p>
                  </div>
                </div>

                {/* 2. Accounting Profit & Adjustments */}
                <div className="glass-card rounded-xl p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold text-foreground">Profit & Adjustments</h2>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Computed Taxable Income</div>
                      <div className="text-lg font-bold text-primary">AED {formatAed(computed.taxableIncome)}</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {CARD2_FIELDS.map((f) => (
                      <div key={f.key} className="p-3 rounded-lg border border-border bg-background/50 hover:border-primary/20 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="text-sm font-medium text-foreground flex items-center gap-2">
                              {f.label}
                              <button onClick={() => setActiveHelp(HELP_CT[f.key])} className="text-muted-foreground hover:text-primary transition-colors">
                                <Info className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <div className="text-xs text-muted-foreground opacity-80">{f.treatment}</div>
                          </div>
                        </div>
                        <input
                          type="number"
                          placeholder="0.00"
                          value={ct[f.key] === null ? "" : String(ct[f.key])}
                          onChange={(e) => setCt({ ...ct, [f.key]: toNumberOrNull(e.target.value) })}
                          className="calculator-input h-10 text-sm"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. QFZP De-Minimis Test (Conditional) */}
                {regime === "QFZP" && (
                  <div className="glass-card rounded-xl p-6 border-primary/20">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                      <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Smartphone className="w-5 h-5 text-primary" />
                        QFZP De-Minimis Test
                      </h2>
                      <button
                        onClick={runDeMinimisTest}
                        className="btn-outline-gold text-xs h-9 px-4"
                      >
                        Run Test
                      </button>
                    </div>

                    <div className="space-y-4 mb-6">
                      {(["fz_total_revenue", "fz_nonqual_revenue", "fz_nonqual_income"] as FzFieldKey[]).map((k) => (
                        <div key={k}>
                          <div className="flex items-center gap-2 mb-1.5">
                            <label className="text-sm font-medium text-foreground">{FIELD_LABELS_FZ[k]}</label>
                            <button onClick={() => setActiveHelp(HELP_FZ[k])} className="text-muted-foreground hover:text-primary">
                              <Info className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <input
                            type="number"
                            placeholder="0.00"
                            value={fz[k] === null ? "" : String(fz[k])}
                            onChange={(e) => setFz({ ...fz, [k]: toNumberOrNull(e.target.value) })}
                            className="calculator-input"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Status Badge */}
                    <div className="p-4 rounded-lg bg-background/50 border border-border">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">5% of Revenue:</span>
                        <span className="font-mono">AED {formatAed(dm.E)}</span>
                      </div>
                      <div className="flex justify-between text-sm mb-4 border-b border-border pb-2">
                        <span className="text-muted-foreground">Threshold (Max 5M):</span>
                        <span className="font-mono">AED {formatAed(dm.F)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-foreground">Status:</span>
                        {fzStatus === "NOT_TESTED" && <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">Not Tested</span>}
                        {fzStatus === "MET" && <span className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-500 font-bold border border-green-500/20">PASSED (Within Limit)</span>}
                        {fzStatus === "BREACHED" && <span className="text-xs px-2 py-1 rounded bg-red-500/10 text-red-500 font-bold border border-red-500/20">BREACHED</span>}
                      </div>
                    </div>
                  </div>
                )}

                {/* CALC BUTTON */}
                <button
                  onClick={calculateCorporateTaxLiability}
                  className="btn-gold w-full flex items-center justify-center gap-2 h-12 text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                >
                  <Calculator className="w-5 h-5" />
                  Calculate Liability
                </button>
              </div>

              {/* RIGHT COLUMN: RESULTS */}
              <div className="space-y-6">

                {/* 1. Working Preview */}
                <div className="glass-card rounded-xl p-6">
                  <h2 className="text-lg font-semibold text-foreground mb-4">Calculation Working</h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Total Add-backs</span>
                      <span>AED {formatAed(computed.totalAddBacks)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Exempt Income</span>
                      <span>(AED {formatAed(computed.exemptIncome)})</span>
                    </div>
                    <div className="h-px bg-border my-2"></div>
                    <div className="flex justify-between font-medium text-foreground">
                      <span>Taxable Before Loss</span>
                      <span>AED {formatAed(computed.taxableBeforeLoss)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Loss Utilised (Max 75%)</span>
                      <span>(AED {formatAed(computed.lossUtilised)})</span>
                    </div>
                    <div className="h-px bg-border my-2"></div>
                    <div className="flex justify-between text-lg font-bold text-primary">
                      <span>Final Taxable Income</span>
                      <span>AED {formatAed(computed.taxableIncome)}</span>
                    </div>
                  </div>
                </div>

                {/* 2. Final Result Card */}
                {hasCalculated ? (
                  <div className="result-card animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="p-6 border-b border-white/10 bg-primary/5">
                      <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                        Tax Liability Result
                      </h2>
                    </div>

                    <div className="p-6 space-y-6">

                      {/* Standard Details */}
                      {(regime !== "QFZP" || fzStatus === "BREACHED") && (
                        <div className="space-y-4">
                          <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <div>
                              <div className="font-medium text-foreground">0% Tier</div>
                              <div className="text-xs text-muted-foreground">First AED 375,000</div>
                            </div>
                            <div className="font-mono text-foreground">AED {formatAed(standard_tax_row_0)}</div>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <div>
                              <div className="font-medium text-foreground">9% Tier</div>
                              <div className="text-xs text-muted-foreground">Above AED 375,000</div>
                            </div>
                            <div className="font-mono text-foreground">AED {formatAed(standard_tax_row_9)}</div>
                          </div>
                        </div>
                      )}

                      {/* QFZP Detail */}
                      {regime === "QFZP" && fzStatus === "MET" && (
                        <div className="p-4 rounded bg-green-500/10 border border-green-500/20">
                          <div className="flex justify-between items-center">
                            <div className="text-sm font-medium text-green-500">QFZP Tax (9% on Non-Qualifying)</div>
                            <div className="font-bold text-green-500">AED {formatAed(qfzpTaxIfMet)}</div>
                          </div>
                        </div>
                      )}

                      {/* Total */}
                      <div className="pt-4 mt-2">
                        <div className="flex justify-between items-end">
                          <div className="text-sm text-muted-foreground mb-1">Total Corporate Tax Payable</div>
                          <div className="text-3xl font-bold text-primary ml-4">
                            AED {formatAed(totalTaxPayable)}
                          </div>
                        </div>
                      </div>

                      {/* Regime Note */}
                      {regime === "QFZP" && fzStatus === "BREACHED" && (
                        <div className="flex items-start gap-2 mt-4 text-xs text-red-400 bg-red-500/10 p-3 rounded">
                          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                          Since De-Minimis was breached, you are taxed under the standard regime (0% / 9%).
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="glass-card rounded-xl p-10 text-center flex flex-col items-center justify-center min-h-[300px] border-dashed border-2 border-white/10">
                    <Calculator className="w-16 h-16 text-muted-foreground/20 mb-4" />
                    <h3 className="text-lg font-medium text-foreground mb-2">Ready to Calculate</h3>
                    <p className="text-sm text-muted-foreground max-w-xs">
                      Enter your financial details on the left and click "Calculate Liability" to see your tax breakdown.
                    </p>
                  </div>
                )}

                {/* Disclaimer */}
                <div className="text-xs text-muted-foreground/60 text-center leading-relaxed px-4">
                  Disclaimer: This tool is for estimation only. Final tax liability depends on FTA assessments and specific entity circumstances. Consult a tax professional for filing.
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Help Modal */}
      {activeHelp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div ref={modalRef} className="glass-card w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 animate-in zoom-in-95 duration-200">
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-muted/20">
              <h3 className="font-bold text-foreground">{activeHelp.title}</h3>
              <button onClick={() => setActiveHelp(null)} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                <span className="sr-only">Close</span>
                <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="p-6 text-sm text-muted-foreground leading-relaxed">
              {activeHelp.body}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
