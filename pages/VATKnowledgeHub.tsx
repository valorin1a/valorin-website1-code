import { Layout } from "@/components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  ShieldAlert, 
  FileText, 
  Info,
  CheckCircle2,
  BookOpen,
  AlertTriangle,
  Calculator
} from "lucide-react";
import { useEffect } from "react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const VATKnowledgeHub = () => {
  useEffect(() => {
    updateSEO({
      title: "VALORIN VAT Tax Center | UAE VAT Compliance & Audit Readiness",
      description: "VALORIN VAT Tax Center – a 360° UAE VAT knowledge hub covering registration, input VAT non-recoverability, partial exemption, reverse charge, Designated Zones, and FTA audit risks.",
      canonical: `${SITE_URL}/tax-center/vat/knowledge-hub`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "article",
      keywords: "UAE VAT, VAT Registration, Input VAT, Reverse Charge, Designated Zones, FTA Audit, VAT Compliance",
    });
  }, []);

  const navigate = useNavigate();

  const penaltyData = [
    {
      violation: "Late Registration",
      scenario: "Failing to register within 30 days of crossing the mandatory threshold.",
      penalty: "Fixed penalty (e.g., AED 10,000 under current rules – subject to change; always confirm latest FTA schedule)."
    },
    {
      violation: "Late Filing of VAT Return",
      scenario: "Missing the VAT return deadline for a period.",
      penalty: "Initial fixed penalty for first offense; higher penalty for repetition within 24 months."
    },
    {
      violation: "Late Payment of VAT",
      scenario: "Paying net VAT liability after due date.",
      penalty: "Immediate 2 % penalty on unpaid VAT & total cumulative penalty can reach up to 300 % of the unpaid VAT if the amount remains unpaid for a very long period."
    },
    {
      violation: "Failure to Keep Records",
      scenario: "Not maintaining invoices, ledgers and supporting documents for the statutory retention period.",
      penalty: "Fixed penalties for first and repeated failures (amounts defined in FTA schedule)."
    },
    {
      violation: "Incorrect Voluntary Disclosure (VD)",
      scenario: "Submitting a VD to correct errors, but the VD itself contains inaccuracies or omissions.",
      penalty: "Fixed penalties escalating for repeated incorrect VDs."
    }
  ];

  const statutoryBlockedExpenses = [
    {
      id: "1",
      scenario: "Dual-Cab Delivery Vehicle",
      businessCase: "Business buys a dual-cab truck for deliveries; driver takes vehicle home every night.",
      riskRecommendation: (
        <>
          <p className="mb-2"><strong className="text-red-600">Risk:</strong> Vehicle may be deemed “available for personal use”. Input VAT on purchase, maintenance and fuel can be treated as <strong>blocked</strong>.</p>
          <p><strong className="text-emerald-600">Recommendation:</strong> Implement a strict, auditable policy prohibiting personal use outside working hours and maintain logs. If personal use cannot be ruled out, treat Input VAT as <strong>non-recoverable</strong>.</p>
        </>
      ),
      reference: "Executive Regulation Art. 53(1)(b) & (2) – definition of motor vehicle."
    },
    {
      id: "2",
      scenario: "Client Entertainment at Offsite Venue",
      businessCase: "Sponsoring a client for a sporting event, or paying for a celebratory dinner outside the office.",
      riskRecommendation: (
        <>
          <p className="mb-2"><strong className="text-red-600">Risk:</strong> This is “entertainment services” to a <strong>non-employee</strong>. Input VAT is <strong>100% blocked</strong>, regardless of commercial purpose.</p>
          <p><strong className="text-emerald-600">Recommendation:</strong> Treat VAT on client entertainment as non-recoverable; restructure to business meetings where possible.</p>
        </>
      ),
      reference: "ER Art. 53(1)(a) and FTA Public Clarification on entertainment."
    },
    {
      id: "3",
      scenario: "Employee Lunch/Dinner (Non-Contractual)",
      businessCase: "Company provides daily free meals to staff which are not stated in the employment contract.",
      riskRecommendation: (
        <>
          <p className="mb-2"><strong className="text-red-600">Risk:</strong> Cost is considered for the <strong>personal benefit</strong> of employees; Input VAT is blocked. <strong>Exception:</strong> Where provision is contractually required or legally mandated.</p>
          <p><strong className="text-emerald-600">Recommendation:</strong> Only recover VAT where meals are contractual/mandatory and clearly evidenced.</p>
        </>
      ),
      reference: "ER Art. 53(1)(c)."
    },
    {
      id: "4",
      scenario: "Enhanced Health Insurance",
      businessCase: "Enhanced medical insurance that exceeds legal/contractual minimums (e.g., dental, cosmetic, luxury coverage).",
      riskRecommendation: (
        <>
          <p className="mb-2"><strong className="text-red-600">Risk:</strong> VAT on the <strong>“enhanced”</strong> portion may be treated as a personal benefit and disallowed.</p>
          <p><strong className="text-emerald-600">Recommendation:</strong> Segregate base (mandatory) cover vs. enhanced cover. Recover VAT only on the <strong>mandatory portion</strong>; treat enhanced coverage as non-recoverable.</p>
        </>
      ),
      reference: "ER Art. 53(1)(c)(3) and FTA clarifications on medical insurance."
    },
    {
      id: "5",
      scenario: "Staff Team-Building Trip",
      businessCase: "Corporate retreat or incentive trip that includes leisure/entertainment components.",
      riskRecommendation: (
        <>
          <p className="mb-2"><strong className="text-red-600">Risk:</strong> Classified as trips provided for <strong>pleasure or entertainment</strong>. Input VAT is blocked.</p>
          <p><strong className="text-emerald-600">Recommendation:</strong> Avoid claiming VAT on such trips; consider designing strictly business-focused offsites where recoverability can be justified.</p>
        </>
      ),
      reference: "ER Art. 53(2)."
    },
    {
      id: "6",
      scenario: "Gifts to Customers / Suppliers",
      businessCase: "Expensive generic gifts to top customers (e.g., hampers) costing over AED 500 per recipient.",
      riskRecommendation: (
        <>
          <p className="mb-2"><strong className="text-red-600">Risk:</strong> Treated as entertainment/hospitality; Input VAT is blocked. Gifts above AED 500 per person may also trigger <strong>deemed supply</strong> and Output VAT.</p>
          <p><strong className="text-emerald-600">Recommendation:</strong> Block Input VAT on gifts to non-employees and monitor deemed supply thresholds.</p>
        </>
      ),
      reference: "ER Art. 53(1)(a); ER Art. 3(1)(c) – deemed supply threshold."
    }
  ];

  const dualUseRisks = [
    {
      id: "7",
      scenario: "Sales Team Mobile Phone Packages",
      businessCase: "Company gives staff unlimited mobile plans with free business and personal use. No cost split.",
      riskRecommendation: (
        <>
          <p className="mb-2"><strong className="text-red-600">Risk:</strong> Free personal use is a benefit to employees. If business vs. personal use cannot be clearly segregated, FTA can treat the <strong>entire Input VAT as non-recoverable</strong>.</p>
          <p><strong className="text-emerald-600">Recommendation:</strong> Implement written policies, usage caps and recharge mechanisms. Where not segregated, either block VAT or have employees reimburse the private-use element.</p>
        </>
      )
    },
    {
      id: "8",
      scenario: "Fuel for Personal Vehicles (Reimbursed)",
      businessCase: "Employees use personal cars for business and claim reimbursement for fuel/Salik (with VAT). No detailed logbook.",
      riskRecommendation: (
        <>
          <p className="mb-2"><strong className="text-red-600">Risk:</strong> Without robust trip records (date, start/end, distance, business purpose), FTA will assume <strong>personal use</strong> and disallow Input VAT.</p>
          <p><strong className="text-emerald-600">Recommendation:</strong> Require electronic or GPS-based logbooks; only reclaim VAT on the demonstrably business portion.</p>
        </>
      )
    },
    {
      id: "9",
      scenario: "General Overheads (Partial Exemption)",
      businessCase: "Entity makes both taxable and exempt supplies but reclaims full VAT on shared overheads (rent, utilities, head office costs).",
      riskRecommendation: (
        <>
          <p className="mb-2"><strong className="text-red-600">Risk:</strong> Input VAT on shared costs must be <strong>apportioned</strong> based on taxable vs. total supplies. Claiming 100% recovery will trigger large audit adjustments.</p>
          <p><strong className="text-emerald-600">Recommendation:</strong> Apply standard Partial Exemption Method or request a Special Method from FTA if beneficial and supportable.</p>
        </>
      )
    },
    {
      id: "10",
      scenario: "Missing or Defective Tax Invoice",
      businessCase: "VAT claimed based on delivery notes, pro forma invoices or documents missing TRN, VAT amount, issue date, or the words “Tax Invoice”.",
      riskRecommendation: (
        <>
          <p className="mb-2"><strong className="text-red-600">Risk:</strong> A valid Tax Invoice is a <strong>legal prerequisite</strong> for Input VAT recovery. Missing or defective invoices can lead to permanent disallowance.</p>
          <p><strong className="text-emerald-600">Recommendation:</strong> Implement an internal <strong>VAT invoice checklist</strong> and reject non-compliant invoices before posting.</p>
        </>
      )
    },
    {
      id: "11",
      scenario: "Input VAT on Fines / Penalties",
      businessCase: "Company incurs a regulatory fine (e.g., traffic, late filing) where VAT was erroneously charged.",
      riskRecommendation: (
        <>
          <p className="mb-2"><strong className="text-red-600">Risk:</strong> Fines and penalties are generally <strong>outside the scope</strong> of VAT and not consideration for a supply. Any associated VAT is non-recoverable.</p>
          <p><strong className="text-emerald-600">Recommendation:</strong> Do not claim VAT on penalties. If VAT was incorrectly charged, seek a <strong>corrected invoice/credit note</strong> from the supplier or authority.</p>
        </>
      )
    }
  ];

  const adminRulesData = [
    { 
      question: "Mandatory Registration Threshold?", 
      answer: "AED 375,000 of taxable supplies and imports over the last 12 months, or expected over the next 30 days." 
    },
    { 
      question: "Voluntary Registration Threshold?", 
      answer: "AED 187,500 of taxable supplies or expenses, allowing recovery of Input VAT even if below the mandatory threshold." 
    },
    { 
      question: "Zero-Rated (0%) vs. Exempt?", 
      answer: "Zero-Rated (0%) – taxable at 0%; related Input VAT is recoverable (e.g., exports, first supply of new residential property, certain education & healthcare). Exempt – non-taxable; related Input VAT is NOT recoverable (e.g., residential rental, many financial services)." 
    },
    { 
      question: "Record Retention Period?", 
      answer: "Minimum 5 years following the end of the tax period for general records. For Capital Assets Scheme (CAS) – e.g., buildings – certain records must be kept for 10 years." 
    }
  ];

  const advancedRisks = [
    {
      id: "12",
      scenario: "Capital Assets Scheme (CAS) Adjustment",
      businessCase: "Company buys a high-value asset (e.g., IT infrastructure, building) > AED 5M and recovers 100% VAT. After 2 years, asset is used partly for exempt activities.",
      riskRecommendation: (
        <>
          <p className="mb-2"><strong className="text-red-600">Risk:</strong> CAS requires monitoring over <strong>5–10 years</strong> (depending on asset). If exempt use increases, part of the recovered VAT must be <strong>adjusted and repaid</strong>. Failure leads to underpaid VAT and penalties.</p>
          <p><strong className="text-emerald-600">Recommendation:</strong> Maintain a dedicated <strong>CAS register</strong> and perform annual CAS adjustments in VAT returns.</p>
        </>
      )
    },
    {
      id: "13",
      scenario: "Failure to Apply Reverse Charge (RCM)",
      businessCase: "UAE entity receives cross-border management or consultancy services from a non-resident (no UAE VAT charged on invoice).",
      riskRecommendation: (
        <>
          <p className="mb-2"><strong className="text-red-600">Risk:</strong> UAE recipient must self-account for VAT under the <strong>Reverse Charge Mechanism</strong> (Box 1 and Box 10). Failure to do so leads to unpaid Output VAT plus penalties.</p>
          <p><strong className="text-emerald-600">Recommendation:</strong> Implement procurement screening to identify <strong>import of services</strong> and ensure RCM is correctly posted and reported.</p>
        </>
      )
    },
    {
      id: "14",
      scenario: "Rental in Designated Zones (DZ)",
      businessCase: "Mainland business rents office space from a landlord in a Designated Zone, landlord charges 5% VAT.",
      riskRecommendation: (
        <>
          <p className="mb-2"><strong className="text-red-600">Risk:</strong> Many real estate supplies within a Designated Zone are <strong>out of scope</strong>. If VAT is incorrectly charged, it is <strong>not recoverable</strong>.</p>
          <p><strong className="text-emerald-600">Recommendation:</strong> Verify tax treatment of Designated Zone property; request a <strong>credit note</strong> where VAT was incorrectly charged and correct previous returns if necessary.</p>
        </>
      )
    },
    {
      id: "15",
      scenario: "Place of Supply for Services",
      businessCase: "UAE IT firm provides software licensing to a Saudi client (no UAE establishment), but charges 5% UAE VAT.",
      riskRecommendation: (
        <>
          <p className="mb-2"><strong className="text-red-600">Risk:</strong> Service may qualify as <strong>zero-rated export of services</strong> if conditions are met (non-resident, no UAE fixed establishment, benefit enjoyed outside UAE). Overcharging 5% may cause disputes and misapplication of law.</p>
          <p><strong className="text-emerald-600">Recommendation:</strong> Review and document <strong>place of supply</strong> for all cross-border services; zero-rate only where conditions are satisfied and properly evidenced.</p>
        </>
      )
    }
  ];

  const ambiguousClassifications = [
    {
      id: "1",
      scenario: "Financial Services (Fees vs. Margin)",
      guidance: (
        <>
          <p className="mb-1">A bank charges an explicit <strong>processing fee</strong> for a loan vs. earns <strong>interest</strong> on the loan.</p>
          <div className="mt-2 pt-2 border-t border-border">
            <p><strong className="text-primary">Guidance:</strong> Explicit fees (account maintenance, card fees, advisory fees) are usually <strong>5% Standard Rated</strong>. Income derived from interest/margin on loans or qualifying life insurance is typically <strong>Exempt</strong>. Entities must use <strong>Partial Exemption</strong> to allocate Input VAT correctly.</p>
          </div>
        </>
      )
    },
    {
      id: "2",
      scenario: "Real Estate – Residential",
      guidance: (
        <>
          <p className="mb-1">First sale/lease of a new residential apartment vs. lease 4 years later.</p>
          <div className="mt-2 pt-2 border-t border-border">
            <p><strong className="text-primary">Guidance:</strong> First supply of new residential property <strong>within 3 years</strong> of completion is <strong>0% Zero-Rated</strong>. Subsequent sales and all residential leases thereafter are <strong>Exempt</strong>. Misclassifying the first sale as Exempt can permanently block Input VAT on construction.</p>
          </div>
        </>
      )
    },
    {
      id: "3",
      scenario: "Designated Zones – Goods vs. Services",
      guidance: (
        <>
          <p className="mb-1">A DZ company sells goods to a mainland customer vs. provides consultancy services to another DZ company.</p>
          <div className="mt-2 pt-2 border-t border-border">
            <p><strong className="text-primary">Guidance:</strong> Moving goods from a DZ to mainland is treated as an <strong>import</strong>, subject to 5% accounted for via <strong>RCM</strong> by the mainland recipient. All <strong>services in, to, or from a DZ</strong> are treated as supplied in the UAE and generally <strong>5% Standard Rated</strong>.</p>
          </div>
        </>
      )
    },
    {
      id: "4",
      scenario: "Export of Services (B2B vs. B2C)",
      guidance: (
        <>
          <p className="mb-1">UAE marketing agency provides social media services to: (a) a VAT-registered Saudi business; (b) a UK individual.</p>
          <div className="mt-2 pt-2 border-t border-border">
            <p><strong className="text-primary">Guidance:</strong> (a) B2B non-resident business – often <strong>Outside Scope / Export</strong> where place of supply is abroad or zero-rated, subject to documentation. (b) B2C non-resident individual – may be <strong>0% Zero-Rated</strong> if benefit is enjoyed outside UAE and conditions are met. Incorrectly charging 5% can make the business uncompetitive.</p>
          </div>
        </>
      )
    },
    {
      id: "5",
      scenario: "Education Sector – Bundled Supplies",
      guidance: (
        <>
          <p className="mb-1">Qualifying school charges tuition, uniforms and student transport on one invoice.</p>
          <div className="mt-2 pt-2 border-t border-border">
            <p><strong className="text-primary">Guidance:</strong> Tuition by a qualifying institution is generally <strong>0%</strong>. Uniforms, devices and canteen are <strong>5% Standard Rated</strong>. Regular student transport is usually <strong>Exempt</strong>. Proper <strong>itemisation and apportionment</strong> are critical to avoid underdeclared Output VAT.</p>
          </div>
        </>
      )
    },
    {
      id: "6",
      scenario: "Commercial Property Sale – TOGC",
      guidance: (
        <>
          <p className="mb-1">Sale of a fully leased commercial tower to another VAT-registered investor who continues the leasing business.</p>
          <div className="mt-2 pt-2 border-t border-border">
            <p><strong className="text-primary">Guidance:</strong> Normal sale or lease of commercial property is <strong>5%</strong>. However, if the transaction qualifies as a <strong>Transfer of a Going Concern (TOGC)</strong> (continuation of the same business by a taxable person), it may be <strong>Outside the Scope</strong> of VAT. Incorrectly charging VAT can create major cash-flow issues for the buyer.</p>
          </div>
        </>
      )
    }
  ];

  return (
    <Layout>
      {/* SECTION 1 – HERO & POSITIONING */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="flex justify-center mb-8">
              <button 
                onClick={() => navigate(-1)} 
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline bg-background/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Go Back
              </button>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6 leading-tight">
              VALORIN VAT Tax Center: <br/>
              <span className="text-gradient-gold">360° Compliance Hub</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-foreground/80 mb-8">
              Transforming VAT Complexity into Certainty
            </h2>

            <div className="bg-card border border-border/50 rounded-xl p-8 mb-10 text-left shadow-sm">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Most businesses are comfortable charging <strong>5% VAT</strong>. 
                The real risk lies in the <strong>hidden 10% of cases</strong> that drive:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Input VAT non-recoverability",
                  "Partial exemption errors",
                  "Reverse Charge failures",
                  "Incorrect place of supply",
                  "Penalties and FTA audit findings"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded-lg p-6">
                <p className="text-foreground/90 mb-4">
                  The VALORIN VAT Tax Center is designed as a <strong>free knowledge hub</strong> that:
                </p>
                <ul className="space-y-3">
                  {[
                    "Covers 90% of recurring VAT scenarios",
                    "Flags high-risk edge cases where a tailored advisory is essential",
                    "Helps you move from reactive compliance to proactive VAT governance"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link to="/services/vat-governance" className="btn-gold flex items-center justify-center gap-2 px-8 py-3 rounded-lg text-base">
                View VAT Governance & Optimization Services <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-sm text-amber-600/90 leading-relaxed flex items-start gap-3">
                <Info className="w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  <strong>Note:</strong> This resource is for <strong>UAE VAT</strong>. It is not a substitute for legal advice or a formal FTA ruling.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO READ THIS PAGE */}
      <section className="py-12 md:py-16 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold font-serif text-foreground mb-8 text-center">How to Read This Page</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { part: "Part I", title: "Quick-reference administrative rules", icon: FileText },
                { part: "Part II", title: "Input VAT non-recoverability (blocked & dual-use)", icon: ShieldAlert },
                { part: "Part III", title: "Advanced technical & cross-border risk areas", icon: BookOpen },
                { part: "Part IV", title: "Ambiguous VAT classifications (rate & scope hotspots)", icon: Info },
                { part: "Part V", title: "Penalty landscape (why this matters to CFOs)", icon: AlertTriangle },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-background border border-border shadow-sm hover:border-primary/30 transition-colors">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-foreground mb-1">{item.part}</strong>
                    <span className="text-muted-foreground text-sm">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PART I – FOUNDATIONS & ADMIN RULES */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold font-serif text-foreground">Part I – Foundations & Admin Rules</h2>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground pl-4 border-l-4 border-primary">1. VAT Core Rules – Quick Reference</h3>
              
              {/* Desktop Table */}
              <div className="hidden md:block overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-muted/50 border-b border-border">
                      <th className="p-5 font-serif font-bold text-foreground w-1/3">Question</th>
                      <th className="p-5 font-serif font-bold text-foreground w-2/3">Answer Summary</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {adminRulesData.map((row, i) => (
                      <tr key={i} className="hover:bg-muted/30 transition-colors">
                        <td className="p-5 font-medium text-foreground align-top">{row.question}</td>
                        <td className="p-5 text-muted-foreground leading-relaxed align-top">{row.answer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                {adminRulesData.map((row, i) => (
                  <div key={i} className="bg-card border border-border rounded-lg p-5 shadow-sm space-y-3">
                    <h4 className="font-bold text-foreground text-lg">{row.question}</h4>
                    <p className="text-muted-foreground leading-relaxed border-t border-border pt-3">
                      {row.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PART II – INPUT VAT NON-RECOVERABILITY (AUDIT HOTSPOTS) */}
      <section className="py-12 md:py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold font-serif text-foreground">Part II – Input VAT Non-Recoverability (Audit Hotspots)</h2>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
              <p className="text-lg text-foreground/90 leading-relaxed">
                This part focuses on where <strong>Input VAT is blocked</strong>, either <strong>by law</strong> or due to <strong>documentation / dual-use weaknesses</strong>.
              </p>
            </div>
            
            {/* Group 1 – Statutory Blocked Expenses */}
            <div className="space-y-6 mb-12">
              <div className="pl-4 border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-foreground">Group 1 – Statutory Blocked Expenses</h3>
                <p className="text-muted-foreground text-sm mt-1 italic">
                  (Executive Regulation Article 53 – explicitly blocked by law)
                </p>
              </div>
              
              {/* Desktop Table */}
              <div className="hidden lg:block overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-muted/50 border-b border-border">
                      <th className="p-4 font-serif font-bold text-foreground w-12 text-center">#</th>
                      <th className="p-4 font-serif font-bold text-foreground w-1/5">Scenario</th>
                      <th className="p-4 font-serif font-bold text-foreground w-1/4">Business Case</th>
                      <th className="p-4 font-serif font-bold text-foreground w-1/3">FTA Compliance Risk & Recommendation</th>
                      <th className="p-4 font-serif font-bold text-foreground">Law / FTA Reference</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {statutoryBlockedExpenses.map((row, i) => (
                      <tr key={i} className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-medium text-muted-foreground text-center align-top">{row.id}</td>
                        <td className="p-4 font-bold text-foreground align-top">{row.scenario}</td>
                        <td className="p-4 text-muted-foreground text-sm leading-relaxed align-top">{row.businessCase}</td>
                        <td className="p-4 text-sm leading-relaxed align-top bg-red-500/5">{row.riskRecommendation}</td>
                        <td className="p-4 text-muted-foreground text-xs font-mono align-top">{row.reference}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden space-y-4">
                {statutoryBlockedExpenses.map((row, i) => (
                  <div key={i} className="bg-card border border-border rounded-lg p-5 shadow-sm space-y-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 bg-muted text-xs font-bold text-muted-foreground rounded-bl-lg">
                      #{row.id}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-1">{row.scenario}</h4>
                      <p className="text-sm text-muted-foreground italic">{row.businessCase}</p>
                    </div>
                    <div className="bg-red-500/5 p-4 rounded-lg border border-red-500/10 text-sm space-y-2">
                      {row.riskRecommendation}
                    </div>
                    <div className="flex items-start gap-2 text-xs text-muted-foreground bg-muted/50 p-2 rounded">
                      <FileText className="w-3 h-3 mt-0.5 shrink-0" />
                      <span className="font-mono">{row.reference}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Group 2 – Dual-Use & Documentation Failures */}
            <div className="space-y-6">
              <div className="pl-4 border-l-4 border-amber-500">
                <h3 className="text-xl font-semibold text-foreground">Group 2 – Dual-Use & Documentation Failures</h3>
                <p className="text-muted-foreground text-sm mt-1 italic">
                  (Not blocked by law automatically, but commonly disallowed in audits)
                </p>
              </div>
              
              {/* Desktop Table */}
              <div className="hidden lg:block overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-muted/50 border-b border-border">
                      <th className="p-4 font-serif font-bold text-foreground w-12 text-center">#</th>
                      <th className="p-4 font-serif font-bold text-foreground w-1/4">Scenario</th>
                      <th className="p-4 font-serif font-bold text-foreground w-1/3">Business Case</th>
                      <th className="p-4 font-serif font-bold text-foreground">FTA Compliance Risk & Recommendation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {dualUseRisks.map((row, i) => (
                      <tr key={i} className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-medium text-muted-foreground text-center align-top">{row.id}</td>
                        <td className="p-4 font-bold text-foreground align-top">{row.scenario}</td>
                        <td className="p-4 text-muted-foreground text-sm leading-relaxed align-top">{row.businessCase}</td>
                        <td className="p-4 text-sm leading-relaxed align-top bg-amber-500/5">{row.riskRecommendation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden space-y-4">
                {dualUseRisks.map((row, i) => (
                  <div key={i} className="bg-card border border-border rounded-lg p-5 shadow-sm space-y-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 bg-muted text-xs font-bold text-muted-foreground rounded-bl-lg">
                      #{row.id}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-1">{row.scenario}</h4>
                      <p className="text-sm text-muted-foreground italic">{row.businessCase}</p>
                    </div>
                    <div className="bg-amber-500/5 p-4 rounded-lg border border-amber-500/10 text-sm space-y-2">
                      {row.riskRecommendation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* PART III – ADVANCED TECHNICAL & CROSS-BORDER RISKS */}
      <section className="py-12 md:py-20 bg-background border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold font-serif text-foreground">Part III – Advanced Technical & Cross-Border Risks</h2>
            </div>

            <div className="bg-blue-500/5 border border-blue-500/10 rounded-xl p-8 mb-12 shadow-sm">
              <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                These are <strong>high-complexity areas</strong> that often justify a <strong>VAT Retainer / Advisory engagement</strong>.
              </p>
            </div>
            
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    <th className="p-4 font-serif font-bold text-foreground w-12 text-center">#</th>
                    <th className="p-4 font-serif font-bold text-foreground w-1/4">Scenario</th>
                    <th className="p-4 font-serif font-bold text-foreground w-1/3">Business Case</th>
                    <th className="p-4 font-serif font-bold text-foreground">FTA Compliance Risk & Recommendation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {advancedRisks.map((row, i) => (
                    <tr key={i} className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-medium text-muted-foreground text-center align-top">{row.id}</td>
                      <td className="p-4 font-bold text-foreground align-top">{row.scenario}</td>
                      <td className="p-4 text-muted-foreground text-sm leading-relaxed align-top">{row.businessCase}</td>
                      <td className="p-4 text-sm leading-relaxed align-top bg-blue-500/5">{row.riskRecommendation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden space-y-4">
              {advancedRisks.map((row, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-5 shadow-sm space-y-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 bg-muted text-xs font-bold text-muted-foreground rounded-bl-lg">
                    #{row.id}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">{row.scenario}</h4>
                    <p className="text-sm text-muted-foreground italic">{row.businessCase}</p>
                  </div>
                  <div className="bg-blue-500/5 p-4 rounded-lg border border-blue-500/10 text-sm space-y-2">
                    {row.riskRecommendation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PART IV – AMBIGUOUS SUPPLY CLASSIFICATION (RATE HOTSPOTS) */}
      <section className="py-12 md:py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                <Info className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold font-serif text-foreground">Part IV – Ambiguous Supply Classification (Rate Hotspots)</h2>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-12 shadow-sm">
              <p className="text-lg text-foreground/90 leading-relaxed">
                These scenarios create confusion between <strong>5% / 0% / Exempt / Out of Scope</strong> and are frequent <strong>FTA enquiry topics</strong>.
              </p>
            </div>
            
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    <th className="p-4 font-serif font-bold text-foreground w-12 text-center">#</th>
                    <th className="p-4 font-serif font-bold text-foreground w-1/3">Scenario</th>
                    <th className="p-4 font-serif font-bold text-foreground">Business Case & Treatment Guidance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {ambiguousClassifications.map((row, i) => (
                    <tr key={i} className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-medium text-muted-foreground text-center align-top">{row.id}</td>
                      <td className="p-4 font-bold text-foreground align-top">{row.scenario}</td>
                      <td className="p-4 text-sm leading-relaxed align-top">{row.guidance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden space-y-4">
              {ambiguousClassifications.map((row, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-5 shadow-sm space-y-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 bg-muted text-xs font-bold text-muted-foreground rounded-bl-lg">
                    #{row.id}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-2">{row.scenario}</h4>
                    <div className="bg-background border border-border p-4 rounded-lg text-sm space-y-2">
                      {row.guidance}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PART V – PENALTIES & WHY GOVERNANCE MATTERS */}
      <section className="py-20 bg-background border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold font-serif text-foreground">Part V – Penalties & Why Governance Matters</h2>
            </div>

            <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-8 mb-12 shadow-sm">
              <p className="text-lg text-foreground/90 leading-relaxed">
                VAT mistakes do not just cost <strong>5%</strong> – they trigger <strong>retrospective adjustments, administrative penalties and daily interest</strong>.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold text-foreground mb-6 pl-4 border-l-4 border-red-500">Selected Common Administrative Penalties</h3>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-hidden rounded-xl border border-border bg-card shadow-sm mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    <th className="p-4 font-serif font-bold text-foreground w-1/4">Violation</th>
                    <th className="p-4 font-serif font-bold text-foreground w-1/3">Scenario Example</th>
                    <th className="p-4 font-serif font-bold text-foreground">Administrative Penalty (indicative)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {penaltyData.map((row, i) => (
                    <tr key={i} className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-bold text-red-600 align-top">{row.violation}</td>
                      <td className="p-4 text-muted-foreground text-sm leading-relaxed align-top">{row.scenario}</td>
                      <td className="p-4 text-sm font-medium text-foreground align-top">{row.penalty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden space-y-4 mb-8">
              {penaltyData.map((row, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-5 shadow-sm space-y-3">
                  <h4 className="font-bold text-red-600 text-lg">{row.violation}</h4>
                  <p className="text-sm text-muted-foreground">{row.scenario}</p>
                  <div className="bg-muted p-3 rounded text-sm font-medium text-foreground">
                    {row.penalty}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-4 max-w-3xl mx-auto text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Important:</strong> Exact penalty amounts and structures are subject to updates via Cabinet / FTA decisions. Always verify the <strong>current penalty schedule</strong> at the time of assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR BANNER (FUTURE) */}
      <section className="py-12 bg-gradient-to-r from-emerald-900/10 to-emerald-500/10 border-y border-emerald-500/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-600">
                <Calculator className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Looking for quick estimates?</h3>
                <p className="text-muted-foreground">Use the <strong>VALORIN VAT Impact & Payable Estimator</strong> for standard transactions.</p>
              </div>
            </div>
            <Link 
              to="/tax-center/vat-calculator"
              className="w-full md:w-auto text-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/20"
            >
              Go to VAT Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* CALL-TO-ACTION */}
      <section className="py-16 md:py-24 bg-gradient-dark text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
              Need a VAT Health Check or <br/>
              <span className="text-gradient-gold">Audit Readiness Review?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              If any of the scenarios in <strong>Part II, III or IV</strong> sound familiar:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background/5 border border-white/10">
                <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                <span className="text-gray-300">You may be <strong>over-claiming</strong> Input VAT and exposed to future FTA assessments</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background/5 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                <span className="text-gray-300">You may be <strong>under-claiming</strong> and losing cash that can be legally recovered</span>
              </div>
            </div>

            <div className="bg-card/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-10">
              <p className="text-lg text-white mb-6">
                <strong>VALORIN Finance & Advisory</strong> specializes in:
              </p>
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 text-left">
                {[
                  "VAT Health Check Reviews",
                  "FTA Audit Readiness & mock reviews",
                  "VAT Process & Policy Design inside ERP",
                  "Structuring Partial Exemption and CAS models"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link 
              to="/contact" 
              className="btn-gold text-lg px-10 py-4 shadow-lg shadow-primary/20 w-full sm:w-auto inline-flex justify-center"
            >
              Book a VAT Health Check Call
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default VATKnowledgeHub;