import { Layout } from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { Building2, ArrowRight, CheckCircle, Download, TrendingDown, Shield, FileText } from "lucide-react";

const services = [
  {
    title: "Bank Debt Advisory",
    description: "Restructuring existing facilities, negotiating better terms, or preparing for new credit applications.",
    outcomes: ["Lower Interest Rates", "Extended Tenors", "Covenant Relaxation"]
  },
  {
    title: "Working Capital Optimization",
    description: "Credit facility structuring (OD, LC, BG, SBLC) to fund inventory cycles and receivables.",
    outcomes: ["Improved Cash Conversion", "Reduced Financing Costs", "Enhanced Liquidity"]
  },
  {
    title: "Bank Presentation Packs",
    description: "Professional financial models and business plans that meet institutional lending standards.",
    outcomes: ["Faster Approvals", "Higher LTV", "Reduced Collateral Requirements"]
  }
];

const typicalClient = {
  scenario: "Company with AED 20M revenue, struggling with AED 8M bank debt at 7% interest with restrictive covenants.",
  intervention: "VALORIN restructures debt, negotiates 1.5% rate reduction, extends tenor by 2 years, and relaxes covenants.",
  impact: [
    { label: "Annual Savings", value: "AED 300K+" },
    { label: "Cashflow Relief", value: "AED 150K/month" },
    { label: "Covenant Breaches", value: "Zero" }
  ]
};

const BankingFinance = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-dark relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-6">
              <button 
                onClick={() => navigate(-1)} 
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline bg-background/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Go Back
              </button>
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Banking & Finance</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Banking & Finance <br/>
              <span className="text-gradient-gold">Advisory</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl">
              When securing financing or restructuring existing debt, banks demand trust, clarity, and compliance. 
              VALORIN presents your numbers with CFO-level rigor, ensuring bankability. We reduce your cost of capital 
              through stronger financial positioning and negotiated rate improvements.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-12 text-center">
            Core <span className="text-gradient-gold">Services</span>
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-6">
            {services.map((service, i) => (
              <div key={i} className="glass-card rounded-xl p-8 hover:border-primary/30 transition-colors">
                <h3 className="text-2xl font-bold font-serif text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="flex flex-wrap gap-3">
                  {service.outcomes.map((outcome, j) => (
                    <div key={j} className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Client Case */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
              Typical Client <span className="text-gradient-gold">Scenario</span>
            </h2>
            
            <div className="glass-card rounded-xl p-8">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">The Challenge</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{typicalClient.scenario}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">VALORIN Intervention</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{typicalClient.intervention}</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                {typicalClient.impact.map((metric, i) => (
                  <div key={i} className="p-6 bg-background rounded-lg text-center">
                    <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
                    <p className="text-2xl font-bold font-serif text-gradient-gold">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
            What We <span className="text-gradient-gold">Deliver</span>
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Bank-Ready Financial Models</h3>
              <p className="text-sm text-muted-foreground">
                Three-statement projection models with sensitivity analysis, covenant tracking, and debt service coverage ratios (DSCR).
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingDown className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Debt Restructuring Plans</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive proposals with comparative analysis of existing vs. proposed terms, cashflow impact projections.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Facility Structuring Advice</h3>
              <p className="text-sm text-muted-foreground">
                Optimal mix of overdrafts, term loans, LC/BG facilities based on your working capital cycle and growth plans.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Covenant Management</h3>
              <p className="text-sm text-muted-foreground">
                Ongoing monitoring of financial covenants with early warning alerts and proactive remediation strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Banking Advisory CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
              Request Banking <span className="text-gradient-gold">Advisory</span>
            </h2>
            <p className="text-muted-foreground mb-10">
              Secure a confidential consultation to review your current banking arrangements and identify cost-saving opportunities.
            </p>
            
            <div className="glass-card rounded-xl p-8 text-left">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company Name *</label>
                    <input type="text" className="calculator-input" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Annual Revenue (AED)</label>
                    <input type="text" className="calculator-input" placeholder="e.g., 20,000,000" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Current Bank Debt (AED)</label>
                    <input type="text" className="calculator-input" placeholder="e.g., 8,000,000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Current Interest Rate (%)</label>
                    <input type="number" className="calculator-input" step="0.1" placeholder="e.g., 7.0" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Primary Objective *</label>
                  <select className="calculator-select" required>
                    <option value="">Select objective</option>
                    <option>Reduce interest rate</option>
                    <option>Extend loan tenor</option>
                    <option>Relax covenants</option>
                    <option>Secure new facility</option>
                    <option>Restructure existing debt</option>
                    <option>Improve working capital access</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Additional Context</label>
                  <textarea className="calculator-input min-h-24" placeholder="Any covenant challenges, upcoming refinancing, etc..." />
                </div>
                
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="nda-banking" className="w-4 h-4" />
                  <label htmlFor="nda-banking" className="text-sm text-muted-foreground">
                    Request NDA for this consultation
                  </label>
                </div>
                
                <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground">Finance Health Checkup</h2>
            <h3 className="text-2xl font-semibold font-serif text-foreground">Is Your Business Financially Safe, Controlled, and Decision-Ready?</h3>
            <p className="text-muted-foreground">
              Most business owners don’t worry about profit on paper.  
              They worry about <strong>what can go wrong tomorrow</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Can someone misuse cash without you knowing?</li>
              <li>Are numbers coming late — or worse, unreliable?</li>
              <li>Is your finance team actually protecting the business, or just booking entries?</li>
              <li>If you stop watching for a month, will things stay under control?</li>
            </ul>
            <p className="text-muted-foreground">
              This Finance Health Checkup is designed for <strong>real businesses</strong>, not theory. 
              It answers one core question:
            </p>
            <p className="text-foreground font-semibold">
              “If I step back today, is my business financially safe and under control?”
            </p>
            <p className="text-muted-foreground">---</p>
            
            <h3 className="text-2xl font-semibold font-serif text-foreground">The Real Problems This Solves</h3>
            <p className="text-muted-foreground">
              This checkup is for you if <strong>any</strong> of the following feel familiar:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>You see profits, but cash is always tight</li>
              <li>You rely heavily on one person for finance control</li>
              <li>You don’t fully trust reports until you double-check them</li>
              <li>Fraud feels “unlikely” — but you’ve never actually tested controls</li>
              <li>Decisions are made using <strong>old numbers</strong></li>
              <li>You only understand the business when the auditor arrives</li>
              <li>You feel blind between month-end reports</li>
            </ul>
            <p className="text-muted-foreground">This is not your fault. <br/>Most SMEs grow <strong>faster than their controls</strong>.</p>
            <p className="text-muted-foreground">---</p>
            
            <h3 className="text-2xl font-semibold font-serif text-foreground">What This Checkup Actually Checks (Practical, Not Theoretical)</h3>
            <h4 className="text-xl font-semibold text-foreground">✅ Fraud-Resistant</h4>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Money can’t move without approval</li>
              <li>One person can’t create, approve, and pay</li>
              <li>Vendor and customer data can’t be changed silently</li>
            </ul>
            <h4 className="text-xl font-semibold text-foreground">✅ Control-Driven (Not Person-Dependent)</h4>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Processes work even if a key employee is absent</li>
              <li>Rules are written, not assumed</li>
              <li>Exceptions are visible, not hidden</li>
            </ul>
            <h4 className="text-xl font-semibold text-foreground">✅ Decision-Ready</h4>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>You can see cash, sales, margins, and risks <strong>in near real time</strong></li>
              <li>You don’t wait for month-end surprises</li>
              <li>Numbers are consistent across teams</li>
            </ul>
            <h4 className="text-xl font-semibold text-foreground">✅ Future-Proof</h4>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Ready for banks, investors, audits, or expansion</li>
              <li>Finance supports growth instead of slowing it down</li>
            </ul>
            <p className="text-muted-foreground">---</p>
            
            <h3 className="text-2xl font-semibold font-serif text-foreground">Who This Is For</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Business Owners &amp; Managing Directors</li>
              <li>CEOs of SMEs</li>
              <li>Growing Manufacturing, Trading &amp; Service Companies</li>
              <li>Businesses with 5–200 staff</li>
              <li>Companies where owner is still closely involved</li>
            </ul>
            <p className="text-muted-foreground">---</p>
            
            <h3 className="text-2xl font-semibold font-serif text-foreground">How It Works (Simple)</h3>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
              <li>Answer practical questions about <strong>how your business actually runs</strong></li>
              <li>No accounting knowledge required</li>
              <li>Takes <strong>10–12 minutes</strong></li>
              <li>You receive <strong>instant insights</strong>, not generic advice</li>
            </ol>
            <p className="text-muted-foreground">No documents upload.</p>
            <p className="text-muted-foreground">No jargon.</p>
            <p className="text-muted-foreground">No obligations.</p>
            <p className="text-muted-foreground">---</p>
            
            <h3 className="text-2xl font-semibold font-serif text-foreground">What You Will Get Immediately</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Clear visibility on <strong>risk areas</strong></li>
              <li>Confirmation of <strong>what is under control</strong></li>
              <li>Identification of <strong>blind spots</strong></li>
              <li>Direction on <strong>what to fix first</strong></li>
            </ul>
            <p className="text-muted-foreground">This is about <strong>comfort, clarity, and control</strong>.</p>
            <p className="text-muted-foreground">---</p>
            
            <h3 className="text-2xl font-semibold font-serif text-foreground">Start the Finance Health Checkup</h3>
            <p className="text-foreground font-semibold">👉 Begin Finance Health Checkup</p>
            <p className="italic text-muted-foreground">Confidential. No data shared. NDA-based reviews available.</p>
            <p className="text-muted-foreground">---</p>
            
            <h4 className="text-xl font-semibold text-foreground">Disclaimer</h4>
            <p className="text-muted-foreground">
              This tool provides management insight only and does not replace audit, tax, or legal advice.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BankingFinance;
