import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { FileText, ArrowRight, CheckCircle, Download, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    title: "Securing QFZP Status for a Free Zone Trading Group",
    sector: "Large UAE Trading Group (Free Zone)",
    problem: "High-volume mainland sales threatened the QFZP De Minimis threshold, risking the 0% tax status for 5 years.",
    approach: "Conducted a transaction-by-transaction review, re-mapped the COA, and installed a real-time NQRI monitoring dashboard.",
    metrics: [
      { label: "Tax Liability Avoided", value: "AED 12M" },
      { label: "De Minimis Compliance", value: "100%" },
      { label: "QFZP Status", value: "Secured for 5 years" }
    ],
    quote: "VALORIN gave us confidence where we had uncertainty. The process was fast, decisive, and protected our core business model."
  },
  {
    title: "ERP-Driven Month-End Close Acceleration",
    sector: "Regional Trading Client",
    problem: "Fragmented spreadsheets resulted in a 12-day month-end close, delaying critical management decisions and strategic planning.",
    approach: "Led the implementation of a new Sage ERP system, installed automated reconciliation processes, and streamlined financial workflows.",
    metrics: [
      { label: "Close Time Reduction", value: "From 12 to 3 days" },
      { label: "Accuracy Improvement", value: "99.8%" },
      { label: "Team Efficiency Gain", value: "Finance freed for FP&A" }
    ],
    quote: "The transformation has been remarkable. We now have real-time visibility into our financial position, enabling faster, better-informed decisions."
  },
  {
    title: "Successful Bank Debt Restructuring",
    sector: "Mid-Sized UAE Manufacturer",
    problem: "Company needed to restructure substantial bank debt to improve cash flow and reduce the interest burden on operations.",
    approach: "Developed a robust 13-week cash flow model, cleaned up the Chart of Accounts, and built a credible Bank Information Memorandum (IM).",
    metrics: [
      { label: "Interest Cost Reduction", value: "1.5%" },
      { label: "Facility Extension", value: "3 years secured" },
      { label: "Cash Flow Improvement", value: "25%" }
    ],
    quote: "VALORIN's expertise in banking relations and financial modeling was instrumental in achieving favorable restructuring terms with our lenders."
  },
  {
    title: "VAT Compliance Transformation",
    sector: "Multi-Entity Services Group",
    problem: "Inconsistent VAT treatment across entities led to FTA audit risk and potential penalties exceeding AED 2M.",
    approach: "Performed comprehensive VAT health check, standardized processes, implemented automated compliance checks, and trained finance teams.",
    metrics: [
      { label: "Audit Risk Eliminated", value: "100%" },
      { label: "Potential Penalties Avoided", value: "AED 2M+" },
      { label: "Process Standardization", value: "Across 5 entities" }
    ],
    quote: "The VAT transformation gave us peace of mind. Our compliance posture is now bulletproof, and we're ready for any FTA review."
  }
];

const CaseStudies = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Success Stories</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Case Studies — <span className="text-gradient-gold">Anonymized Outcomes</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We measure our success by verifiable, measurable results. These anonymized impact stories demonstrate our 
              executive approach to solving complex financial and operational challenges.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="glass-card rounded-xl p-8 hover:border-primary/30 transition-all duration-300">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold font-serif text-foreground mb-3">{study.title}</h2>
                      <p className="text-primary text-sm font-medium">{study.sector}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center text-destructive text-xs font-bold">!</span>
                          Problem
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{study.problem}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">→</span>
                          Approach
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{study.approach}</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                        <p className="text-sm italic text-muted-foreground leading-relaxed">
                          <span className="text-primary text-2xl mr-2">"</span>
                          {study.quote}
                          <span className="text-primary text-2xl ml-1">"</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Measurable Outcomes</h4>
                    </div>
                    
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="glass-card rounded-lg p-4 border border-primary/20">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                            <p className="text-lg font-bold font-serif text-gradient-gold">{metric.value}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
              Request Your <span className="text-gradient-gold">Custom Case Study</span>
            </h2>
            <p className="text-muted-foreground mb-10">
              Every engagement is unique. Schedule a consultation to discuss how we can deliver similar results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-gold flex items-center gap-2">
                Request Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="btn-outline-gold flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Case Study PDF
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
