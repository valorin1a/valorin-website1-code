import { Layout } from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, ArrowRight, CheckCircle, Download, AlertTriangle, FileCheck } from "lucide-react";

const auditChecks = [
  {
    title: "Pre-Audit Health Check",
    description: "Dry-run financial statement reviews and control assessments before external auditors arrive.",
    value: "90% reduction in audit queries"
  },
  {
    title: "UAE CT/VAT Compliance",
    description: "Ensuring Corporate Tax returns, VAT filings, and Transfer Pricing documentation are audit-ready.",
    value: "Zero penalties from FTA"
  },
  {
    title: "Internal Controls Review",
    description: "SOX-style control testing, segregation of duties analysis, and remediation plans.",
    value: "Strengthened governance"
  }
];

const complianceRisks = [
  "Late VAT filing penalties (AED 1,000 - AED 10,000)",
  "Corporate Tax late submission fines (AED 500 - AED 50,000)",
  "Incorrect QFZP claims leading to tax assessments",
  "Transfer pricing documentation gaps",
  "Economic substance regulation non-compliance"
];

const ComplianceAudit = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        
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
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Compliance & Audit</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Compliance & Audit <br/>
              <span className="text-gradient-gold">Health Check</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl">
              The UAE regulatory landscape is rapidly evolving—Corporate Tax, VAT, Economic Substance, and Transfer Pricing 
              now carry significant penalties. VALORIN pre-emptively identifies compliance gaps and delivers audit-ready 
              documentation, saving time, stress, and potential fines.
            </p>
          </div>
        </div>
      </section>

      {/* Core Audit Checks */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-12 text-center">
            Core Audit <span className="text-gradient-gold">Checks</span>
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-6">
            {auditChecks.map((check, i) => (
              <div key={i} className="glass-card rounded-xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-serif text-foreground mb-3">{check.title}</h3>
                    <p className="text-muted-foreground mb-4">{check.description}</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm text-primary font-medium">{check.value}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Risks */}
      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-4 text-center">
              Common Compliance <span className="text-gradient-gold">Risks</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Issues we frequently identify and remediate before they become costly problems
            </p>
            
            <div className="glass-card rounded-xl p-8">
              <div className="space-y-4">
                {complianceRisks.map((risk, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-background border border-destructive/20">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-white">{risk}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm text-primary font-medium mb-2">VALORIN Protection</p>
                <p className="text-muted-foreground text-sm">
                  Our compliance health checks proactively identify and remediate these risks before FTA or external 
                  auditors discover them, potentially saving tens of thousands of AED in penalties and protecting 
                  your company's reputation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
            What's <span className="text-gradient-gold">Included</span>
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Financial Statement Review</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  IFRS compliance verification
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Disclosure completeness check
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Related party transaction documentation
                </li>
              </ul>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Tax Compliance Audit</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  VAT return accuracy verification
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  CT calculation review & optimization
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  QFZP eligibility assessment
                </li>
              </ul>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Internal Controls Assessment</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Segregation of duties analysis
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Authorization workflow review
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Data security & access controls
                </li>
              </ul>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Remediation Roadmap</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Prioritized action items
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Timeline & resource requirements
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Implementation support available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Request Compliance Check CTA */}
      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
              Request Compliance <span className="text-gradient-gold">Health Check</span>
            </h2>
            <p className="text-muted-foreground mb-10">
              Secure a confidential review of your compliance posture before your next audit or FTA inspection.
            </p>
            
            <div className="glass-card rounded-xl p-8 text-left">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company Name *</label>
                    <input type="text" className="calculator-input" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Industry *</label>
                    <select className="calculator-select" required>
                      <option value="">Select industry</option>
                      <option>Manufacturing</option>
                      <option>Trading</option>
                      <option>Services</option>
                      <option>Real Estate</option>
                      <option>Technology</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Areas of Concern (Select all that apply)</label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {["VAT Compliance", "Corporate Tax", "Transfer Pricing", "Economic Substance", "Internal Controls", "Audit Preparation"].map((area) => (
                      <label key={area} className="flex items-center gap-2 p-3 rounded-lg bg-background border border-border hover:border-primary/30 cursor-pointer transition-colors">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="text-sm text-foreground">{area}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last External Audit Date</label>
                  <input type="date" className="calculator-input" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Specific Compliance Questions/Concerns</label>
                  <textarea className="calculator-input min-h-24" placeholder="Any specific issues you've identified or questions you have..." />
                </div>
                
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="nda-compliance" className="w-4 h-4" />
                  <label htmlFor="nda-compliance" className="text-sm text-muted-foreground">
                    Request NDA for this health check
                  </label>
                </div>
                
                <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Request Health Check
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ComplianceAudit;
