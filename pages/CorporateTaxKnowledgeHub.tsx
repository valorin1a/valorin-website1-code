import { Layout } from "@/components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  Building2, 
  ShieldAlert, 
  FileText, 
  Info,
  CheckCircle2,
  AlertTriangle,
  Calculator
} from "lucide-react";
import { useEffect } from "react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const CorporateTaxKnowledgeHub = () => {
  useEffect(() => {
    updateSEO({
      title: "UAE Corporate Tax (CT) Knowledge Hub | VALORIN Finance & Advisory",
      description: "Comprehensive UAE Corporate Tax knowledge hub covering 0% and 9% rates, Free Zone rules, adjustments, risks and compliance guidance.",
      canonical: `${SITE_URL}/tax-center/corporate-tax/knowledge-hub`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "article",
      keywords: "UAE Corporate Tax, 0% Tax Rate, Free Zone CT Rules, Tax Adjustments, QFZP, Corporate Tax Knowledge Hub",
    });
  }, []);

  const navigate = useNavigate();

  const ratesData = [
    { category: "Mainland Taxable Income", rate: "0%", condition: "Taxable Income up to AED 375,000 per Tax Period", ref: "Article 3" },
    { category: "Mainland Taxable Income", rate: "9%", condition: "Taxable Income above AED 375,000", ref: "Article 3" },
    { category: "Qualifying Free Zone Person (QFZP)", rate: "0%", condition: "On Qualifying Income only, subject to all conditions", ref: "Article 18" },
    { category: "QFZP – Non-Qualifying Revenue", rate: "9%", condition: "Applies if De Minimis threshold is breached", ref: "Article 18" },
    { category: "Small Business Relief (SBR)", rate: "0%", condition: "Revenue ≤ AED 3,000,000 (election required)", ref: "Article 21" },
    { category: "Non-Qualifying Free Zone Person", rate: "9%", condition: "Entire taxable income taxed if QFZP fails", ref: "Article 18" }
  ];

  const hotspotsData = [
    { 
      scenario: "De Minimis Breach", 
      case: "FZ Revenue AED 15M; NQRI AED 0.8M", 
      risk: "Threshold = lower of AED 5M or 5% (AED 0.75M). Breach results in loss of QFZP for 5 years", 
      rec: "Monitor NQRI monthly, segregate Mainland activity", 
      ref: "MD 229/2023" 
    },
    { 
      scenario: "Lack of Adequate Substance", 
      case: "FZ entity outsources all operations", 
      risk: "Loss of 0% status due to failure of CIGA requirements", 
      rec: "Ensure UAE-based decision-making, staff and assets", 
      ref: "Article 18" 
    },
    { 
      scenario: "Dealing with Natural Persons", 
      case: "Services provided to UAE individuals", 
      risk: "Income becomes Non-Qualifying; counts toward De Minimis", 
      rec: "Avoid B2C unless explicitly permitted", 
      ref: "MD 229/2023" 
    },
    { 
      scenario: "Immovable Property Income", 
      case: "Residential vs Commercial rent", 
      risk: "Residential rent is 9% and counts toward De Minimis", 
      rec: "Segregate revenue and costs", 
      ref: "CD 55/2023" 
    }
  ];

  const adjustmentsData = [
    { item: "Client Entertainment", scenario: "AED 50,000 incurred", calc: "50% disallowed → Add back AED 25,000", risk: "Over-deduction risk", ref: "Article 32" },
    { item: "Fines & Penalties", scenario: "Traffic & VAT penalties AED 20,000", calc: "100% Add-Back", risk: "Non-deductible by law", ref: "Art. 31(2)(a)" },
    { item: "Personal Expenses", scenario: "Owner’s car lease AED 40,000", calc: "Add-Back AED 40,000", risk: "Audit exposure", ref: "Article 28" },
    { item: "Transfer Pricing", scenario: "RPT payment exceeds ALP", calc: "Excess added back", risk: "Profit shifting risk", ref: "Article 34" }
  ];

  return (
    <Layout>
      {/* SECTION 1: PAGE HERO */}
      <section className="relative py-16 md:py-24 bg-gradient-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-30 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Back Button */}
            <div className="flex justify-center mb-8">
              <button 
                onClick={() => navigate(-1)} 
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline bg-background/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Back to Tax Center
              </button>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6 leading-tight">
              UAE Corporate Tax <br/>
              <span className="text-gradient-gold">Knowledge Hub</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Clear decisions in Corporate Tax depend on classification, structure and documentation — not just automated calculations.
            </p>

            <div className="glass-card p-6 md:p-8 rounded-xl max-w-3xl mx-auto mb-10 text-left border-primary/20 bg-primary/5">
              <p className="text-foreground/90 leading-relaxed text-lg">
                This Corporate Tax Knowledge Hub provides practical guidance on UAE CT rules, Free Zone qualification, adjustments and high-risk areas that directly impact the final tax outcome.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/tax-center/corporate-tax-calculator" className="btn-gold flex items-center justify-center gap-2 px-8 py-3 rounded-lg text-base">
                <Calculator className="w-5 h-5" />
                Go to Corporate Tax Calculator
              </Link>
              <Link to="/services/corporate-tax" className="btn-outline bg-background/5 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground border-primary/30 flex items-center justify-center gap-2 px-8 py-3 rounded-lg text-base transition-all">
                <Building2 className="w-5 h-5" />
                View Corporate Tax Advisory Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PURPOSE & SCOPE */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6">What This Guide Covers</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              This page focuses on <strong className="text-foreground">decision-critical areas</strong> of UAE Corporate Tax, including:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 text-left mb-8">
              {[
                "0% and 9% tax rate application",
                "Mainland vs Free Zone distinctions",
                "Qualifying Free Zone Person (QFZP) conditions",
                "Mandatory tax adjustments (add-backs)",
                "Scenarios that trigger audit risk"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/50">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground/80 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground italic border-t border-border pt-6">
              It is designed for <strong>owners, CFOs and decision-makers</strong> — not as legislative commentary.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE RATE STRUCTURE */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold font-serif text-foreground">Core Corporate Tax Rates & Status</h2>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    <th className="p-4 font-serif font-bold text-foreground">Category / Entity</th>
                    <th className="p-4 font-serif font-bold text-foreground">Tax Rate</th>
                    <th className="p-4 font-serif font-bold text-foreground">Application Condition</th>
                    <th className="p-4 font-serif font-bold text-foreground">CT Law Reference</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {ratesData.map((row, i) => (
                    <tr key={i} className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-medium text-foreground">{row.category}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          row.rate === "0%" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"
                        }`}>
                          {row.rate}
                        </span>
                      </td>
                      <td className="p-4 text-muted-foreground">{row.condition}</td>
                      <td className="p-4 text-xs text-muted-foreground/70 font-mono">{row.ref}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {ratesData.map((row, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-5 shadow-sm space-y-3">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-bold text-foreground">{row.category}</h3>
                    <span className={`shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      row.rate === "0%" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"
                    }`}>
                      {row.rate}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <strong className="text-foreground/70 block mb-1 text-xs uppercase tracking-wider">Condition:</strong>
                    {row.condition}
                  </div>
                  <div className="pt-2 border-t border-border flex justify-end">
                    <span className="text-xs text-muted-foreground/70 font-mono bg-muted/50 px-2 py-1 rounded">
                      Ref: {row.ref}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FREE ZONE COMPLIANCE HOTSPOTS */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold font-serif text-foreground">Free Zone Compliance Hotspots (0% vs 9%)</h2>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    <th className="p-4 font-serif font-bold text-foreground w-1/4">Scenario</th>
                    <th className="p-4 font-serif font-bold text-foreground w-1/4">Business Case</th>
                    <th className="p-4 font-serif font-bold text-foreground w-1/4">Risk & Calculation</th>
                    <th className="p-4 font-serif font-bold text-foreground w-1/4">Recommendation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {hotspotsData.map((row, i) => (
                    <tr key={i} className="hover:bg-muted/30 transition-colors align-top">
                      <td className="p-4 font-medium text-foreground">{row.scenario}</td>
                      <td className="p-4 text-muted-foreground text-sm">{row.case}</td>
                      <td className="p-4">
                        <div className="p-2 rounded bg-red-500/5 border border-red-500/10 text-sm text-red-600/90">
                          {row.risk}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-sm text-emerald-600/90 font-medium mb-1">{row.rec}</div>
                        <div className="text-xs text-muted-foreground/50 font-mono">{row.ref}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {hotspotsData.map((row, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-5 shadow-sm space-y-4">
                  <h3 className="font-bold text-foreground text-lg border-b border-border pb-2">{row.scenario}</h3>
                  
                  <div>
                    <strong className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">Business Case</strong>
                    <p className="text-sm text-foreground/80">{row.case}</p>
                  </div>

                  <div className="bg-red-500/5 p-3 rounded border border-red-500/10">
                    <strong className="text-xs uppercase tracking-wider text-red-500 block mb-1 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" /> Risk & Impact
                    </strong>
                    <p className="text-sm text-red-600/90 leading-snug">{row.risk}</p>
                  </div>

                  <div>
                    <strong className="text-xs uppercase tracking-wider text-emerald-600 block mb-1">Recommendation</strong>
                    <p className="text-sm text-foreground/80">{row.rec}</p>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground/50 font-mono">Ref: {row.ref}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MANDATORY CT ADJUSTMENTS */}
      <section className="py-12 md:py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                  <Info className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold font-serif text-foreground">Mandatory Adjustments Before Tax Calculation</h2>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                Corporate Tax is calculated <strong className="text-foreground">after statutory add-backs</strong> — not directly from accounting profit.
              </p>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    <th className="p-4 font-serif font-bold text-foreground">Adjustment Item</th>
                    <th className="p-4 font-serif font-bold text-foreground">Scenario</th>
                    <th className="p-4 font-serif font-bold text-foreground">Add-Back Calculation</th>
                    <th className="p-4 font-serif font-bold text-foreground">Risk</th>
                    <th className="p-4 font-serif font-bold text-foreground">Law Reference</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {adjustmentsData.map((row, i) => (
                    <tr key={i} className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-medium text-foreground">{row.item}</td>
                      <td className="p-4 text-sm text-muted-foreground">{row.scenario}</td>
                      <td className="p-4">
                        <span className="font-mono text-sm text-amber-600 bg-amber-500/10 px-2 py-1 rounded">
                          {row.calc}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-foreground/80">{row.risk}</td>
                      <td className="p-4 text-xs text-muted-foreground/70 font-mono">{row.ref}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {adjustmentsData.map((row, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-5 shadow-sm space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-foreground">{row.item}</h3>
                    <span className="text-xs text-muted-foreground/70 font-mono bg-muted/50 px-2 py-1 rounded">
                      {row.ref}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{row.scenario}</p>
                  
                  <div className="bg-amber-500/5 p-3 rounded border border-amber-500/10">
                    <strong className="text-xs uppercase tracking-wider text-amber-600 block mb-1">Add-Back</strong>
                    <p className="text-sm font-medium text-amber-700">{row.calc}</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-red-500/80">
                    <AlertTriangle className="w-3 h-3" />
                    <span>{row.risk}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: COMMON CORPORATE TAX RISKS */}
      <section className="py-12 md:py-20 bg-background border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-8 text-center">
              Common Corporate Tax Risks We See
            </h2>
            
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <ul className="space-y-4 mb-8">
                {[
                  "Treating accounting profit as taxable profit",
                  "Missing mandatory add-backs",
                  "Free Zone income misclassification",
                  "Weak substance documentation",
                  "Unsupported related-party pricing"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-red-500/10 text-red-500 shrink-0">
                      <AlertTriangle className="w-3 h-3" />
                    </div>
                    <span className="text-lg text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="p-4 bg-muted/30 rounded-lg text-center border border-border/50">
                <p className="text-muted-foreground font-medium">
                  These risks usually surface during FTA reviews — not at filing stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FROM KNOWLEDGE TO ACTION */}
      <section className="py-20 bg-gradient-dark text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
              When Professional Support Is Required
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              This knowledge hub covers most <strong className="text-foreground">standard CT scenarios</strong>.
            </p>

            <div className="glass-card p-8 rounded-xl mb-10 text-left border-primary/20 bg-background/40 backdrop-blur-md">
              <h3 className="text-lg font-bold text-primary mb-4 uppercase tracking-wide">Professional advisory is recommended when:</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Free Zone status is at risk",
                  "Group structures or related-party transactions exist",
                  "Adjustments materially change tax outcomes",
                  "FTA reviews or assessments arise"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/services/corporate-tax" className="btn-gold inline-flex items-center gap-2 px-10 py-4 rounded-lg text-lg shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
              Explore Corporate Tax Advisory Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: DISCLAIMER */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="border border-border/60 bg-background/50 rounded-lg p-6 md:p-8 text-center backdrop-blur-sm">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Important Disclaimer</h3>
              <div className="space-y-4 text-sm text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
                <p>
                  This content is for general guidance only. Corporate Tax outcomes depend on specific facts, documentation and current legislation.
                </p>
                <p className="font-medium text-foreground/80">
                  Professional advice should be obtained before filing or restructuring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CorporateTaxKnowledgeHub;
