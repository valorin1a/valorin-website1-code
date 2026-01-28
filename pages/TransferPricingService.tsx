
import { Layout } from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  Globe, 
  FileText, 
  Scale, 
  AlertTriangle, 
  Briefcase, 
  Building2, 
  Layers, 
  CheckCircle,
  Network,
  Calculator
} from "lucide-react";
import { useEffect } from "react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const TransferPricingService = () => {
  const navigate = useNavigate();

  useEffect(() => {
    updateSEO({
      title: "Transfer Pricing Advisory & Documentation | VALORIN",
      description: "CFO-led Transfer Pricing services including impact studies and Master & Local File documentation to support UAE Corporate Tax compliance.",
      canonical: `${SITE_URL}/services/transfer-pricing`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }, []);

  const serviceFeatures = [
    {
      title: "Transfer Pricing Impact Study",
      description: "An upfront assessment of Transfer Pricing exposure before filing or audits.",
      icon: <Scale className="w-6 h-6 text-primary" />,
      items: [
        "Identification of related-party transactions",
        "Review of pricing methodology and margins",
        "Risk assessment under Arm’s Length Principle",
        "Alignment with UAE Corporate Tax requirements"
      ]
    },
    {
      title: "Transfer Pricing Documentation (Master & Local File)",
      description: "Preparation of compliant, defensible documentation as required under UAE law.",
      icon: <FileText className="w-6 h-6 text-primary" />,
      items: [
        "Master File — group structure, business model and value chain",
        "Local File — entity-level transactions, benchmarking and pricing logic",
        "Support for disclosures within CT returns"
      ]
    }
  ];

  const riskAreas = [
    "Charging or paying non-arm’s-length prices",
    "Management fees without substance or evidence",
    "Cost-sharing arrangements lacking documentation",
    "Inconsistent pricing across similar transactions",
    "Lack of benchmarking or outdated studies"
  ];

  const engagementSteps = [
    {
      step: "Step 1",
      title: "Transaction Mapping",
      description: "Identify related-party flows and materiality."
    },
    {
      step: "Step 2",
      title: "Risk & Methodology Review",
      description: "Assess pricing logic against arm’s-length benchmarks."
    },
    {
      step: "Step 3",
      title: "Documentation & Support",
      description: "Prepare defensible files aligned with UAE Corporate Tax expectations."
    }
  ];

  const targetAudience = [
    {
      title: "UAE Groups & Holding Structures",
      description: "Entities with inter-company services, funding or asset use.",
      icon: <Layers className="w-6 h-6 text-primary" />
    },
    {
      title: "Multinational Businesses",
      description: "Cross-border transactions subject to global Transfer Pricing standards.",
      icon: <Globe className="w-6 h-6 text-primary" />
    },
    {
      title: "Free Zone & Mainland Groups",
      description: "Structures where pricing impacts 0% vs 9% Corporate Tax outcomes.",
      icon: <Building2 className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <Layout>
      {/* SECTION 1: PAGE HERO */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-6">
              <button 
                onClick={() => navigate(-1)} 
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline bg-background/5 px-4 py-2 rounded-full backdrop-blur-sm border border-border hover:border-primary/30 transition-all"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Go Back
              </button>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Transfer Pricing Advisory & Documentation
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              Transfer Pricing is no longer a theoretical concept. 
              Under UAE Corporate Tax, related-party transactions are a primary focus area for scrutiny, adjustments and penalties.
              <br/><br/>
              VALORIN Finance & Advisory provides CFO-led Transfer Pricing support that aligns commercial reality, documentation and Corporate Tax compliance.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button onClick={() => navigate('/contact')} className="btn-gold w-full sm:w-auto text-center">
                Book a Transfer Pricing Consultation
              </button>
              <span className="text-xs text-muted-foreground italic">*NDA available on request*</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY TRANSFER PRICING MATTERS IN UAE */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6">
              Why Transfer Pricing Matters in the UAE
            </h2>
            <p className="text-lg text-foreground mb-8">
              Transfer Pricing impacts how profits are taxed — and where.
            </p>
            <div className="glass-card p-8 rounded-xl mb-8 text-left">
              <p className="text-muted-foreground mb-6">
                In the UAE Corporate Tax environment, Transfer Pricing applies whenever there are transactions between:
              </p>
              <div className="grid sm:grid-cols-1 gap-4">
                {[
                  "Related parties",
                  "Connected persons",
                  "Group entities across borders or within the UAE"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Even routine management fees, cost allocations or inter-company sales can trigger adjustments if not supported by documentation and economic rationale.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR TRANSFER PRICING SERVICES */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-12 text-center">
            VALORIN Transfer Pricing Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {serviceFeatures.map((item, index) => (
              <div key={index} className="glass-card rounded-xl p-8 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold font-serif text-foreground min-h-[3.5rem] flex items-center">{item.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 text-sm min-h-[3rem]">{item.description}</p>
                <div className="border-t border-border/50 pt-4 mt-4">
                  <ul className="space-y-3">
                    {item.items.map((subItem, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: COMMON TRANSFER PRICING RISKS */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-8 text-center">
              Common Transfer Pricing Risks We See
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Businesses frequently face exposure due to:
            </p>
            
            <div className="grid sm:grid-cols-1 gap-4 max-w-2xl mx-auto">
              {riskAreas.map((risk, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-background border border-border hover:border-destructive/40 transition-colors group">
                  <AlertTriangle className="w-5 h-5 text-destructive/60 group-hover:text-destructive transition-colors mt-0.5" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{risk}</span>
                </div>
              ))}
            </div>
            
            <p className="text-center text-muted-foreground mt-8">
              These gaps often surface during Corporate Tax reviews — <span className="text-foreground font-medium">not during internal reporting.</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONNECTION WITH CORPORATE TAX */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6">
              Transfer Pricing and Corporate Tax Are Linked
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Under UAE Corporate Tax, Transfer Pricing differences directly impact:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-8">
              {[
                "Taxable income",
                "Mandatory add-backs",
                "Free Zone qualification and De Minimis thresholds",
                "Exposure during FTA enquiries"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            
            <p className="text-muted-foreground font-medium">
              A robust Transfer Pricing framework is therefore essential for sustainable <span className="text-primary hover:underline cursor-pointer" onClick={() => navigate('/services/corporate-tax')}>Corporate Tax compliance</span>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: LINK TO TRANSFER PRICING KNOWLEDGE HUB */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-12 text-center relative overflow-hidden border border-primary/20 shadow-lg group hover:border-primary/40 transition-all duration-500">
               {/* Background Gradient */}
               <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

               <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Calculator className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-4">
                    Want to Understand Adjustment Scenarios?
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
                    Visit our <span className="text-primary font-medium">Transfer Pricing Knowledge Hub</span> for deeper guidance, including:
                  </p>

                  <div className="bg-background/40 backdrop-blur-sm rounded-xl p-6 mb-8 border border-border/50 max-w-lg mx-auto text-left hover:bg-background/60 transition-colors">
                    <ul className="space-y-3">
                      {[
                        "Arm’s length adjustment examples",
                        "Income vs expense related-party scenarios",
                        "Simplified adjustment calculations"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <button onClick={() => navigate('/tax-center/transfer-pricing')} className="btn-gold inline-flex items-center gap-2 px-8 py-3 text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                      Go to Knowledge Hub
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-xs text-muted-foreground italic max-w-md mx-auto opacity-70">
                      *The Knowledge Hub provides structured guidance and tools. Final Transfer Pricing positions must be supported by entity-specific facts and documentation.*
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHO THIS SERVICE IS FOR */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
            Who This Service Is Designed For
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {targetAudience.map((item, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center h-full flex flex-col">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 min-h-[3rem] flex items-center justify-center">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: HOW WE ENGAGE */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
            How We Engage
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {engagementSteps.map((step, index) => (
              <div key={index} className="relative p-6 rounded-xl border border-primary/20 bg-primary/5 h-full flex flex-col">
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-3 min-h-[3.5rem] flex items-center">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CALL-TO-ACTION */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center glass-card p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6">
              Reduce Transfer Pricing Exposure Before the FTA Does
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Early review and proper documentation prevent forced adjustments and penalties.
            </p>
            
            <button onClick={() => navigate('/contact')} className="btn-gold inline-flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Book a Transfer Pricing Consultation
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TransferPricingService;
