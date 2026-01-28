import { Layout } from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  ShieldAlert, 
  FileText, 
  BarChart3, 
  Building2, 
  Layers, 
  Globe, 
  CheckCircle, 
  AlertTriangle,
  Calculator,
  Briefcase
} from "lucide-react";
import { useEffect } from "react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const ExciseTaxService = () => {
  const navigate = useNavigate();

  useEffect(() => {
    updateSEO({
      title: "Excise Tax Registration & Compliance | VALORIN Finance & Advisory",
      description: "CFO-led Excise Tax services covering registration, return filing and compliance support for excisable goods under UAE Excise Tax law.",
      canonical: `${SITE_URL}/services/excise-tax`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }, []);

  const services = [
    {
      title: "Excise Tax Registration",
      description: "Ensuring correct and timely registration with the Federal Tax Authority.",
      icon: <FileText className="w-6 h-6 text-primary" />,
      items: [
        "Liability assessment and applicability review",
        "Registration support for importers, manufacturers and stockpilers",
        "Alignment with customs and operational activities"
      ]
    },
    {
      title: "Excise Tax Return Filing",
      description: "Accurate preparation and filing of Excise Tax returns.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      items: [
        "Review of excisable goods movements",
        "Valuation review (excise price determination)",
        "Reconciliation with customs and inventory records"
      ]
    },
    {
      title: "Ongoing Excise Tax Compliance Support",
      description: "Practical assistance to reduce ongoing risk.",
      icon: <ShieldAlert className="w-6 h-6 text-primary" />,
      items: [
        "Review of internal processes and controls",
        "Support with amendments and corrections",
        "Advisory on changes in product lines or supply chains"
      ]
    },
  ];

  const riskAreas = [
    "Failure to register before importing or producing goods",
    "Incorrect excise price or valuation method",
    "Errors in quantity reporting",
    "Misunderstanding designated zone rules",
    "Inadequate inventory data and tracking"
  ];

  const targetAudience = [
    {
      title: "Importers & Distributors",
      description: "Businesses importing excisable goods into the UAE.",
      icon: <Globe className="w-6 h-6 text-primary" />
    },
    {
      title: "Manufacturers",
      description: "Local producers of excisable goods with ongoing filing obligations.",
      icon: <Building2 className="w-6 h-6 text-primary" />
    },
    {
      title: "Traders & Stockpilers",
      description: "Businesses holding excisable goods within the supply chain.",
      icon: <Layers className="w-6 h-6 text-primary" />
    }
  ];

  const engagementSteps = [
    {
      step: "Step 1",
      title: "Liability Assessment",
      description: "Determine if and when Excise Tax registration is required."
    },
    {
      step: "Step 2",
      title: "Compliance Setup",
      description: "Align registration, valuation method and reporting structure."
    },
    {
      step: "Step 3",
      title: "Filing & Support",
      description: "Prepare returns and support compliance on an ongoing basis."
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
              Excise Tax Compliance & Advisory
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              Excise Tax is a transaction-driven tax with immediate financial impact.
              Errors in registration, valuation or reporting can trigger penalties regardless of intent.
              <br/><br/>
              VALORIN Finance & Advisory provides CFO-led Excise Tax support to help businesses comply correctly, early and consistently.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button onClick={() => navigate('/contact')} className="btn-gold w-full sm:w-auto text-center">
                Book an Excise Tax Consultation
              </button>
              <span className="text-xs text-muted-foreground italic">*NDA available on request*</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHO EXCISE TAX APPLIES TO */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6">
              Who Excise Tax Applies To
            </h2>
            <div className="glass-card p-8 rounded-xl mb-8 text-left">
              <p className="text-muted-foreground mb-6">
                Excise Tax applies to businesses involved in:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  "Importing excisable goods into the UAE",
                  "Manufacturing excisable goods in the UAE",
                  "Stockpiling excisable goods",
                  "Releasing excisable goods from designated zones"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-muted-foreground mb-4">
                Excisable goods include:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                 {[
                  "Tobacco and tobacco products",
                  "Energy drinks",
                  "Sweetened drinks",
                  "Electronic smoking devices and liquids"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Many businesses become liable unintentionally due to operational changes or supply chain decisions.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR EXCISE TAX SERVICES */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-12 text-center">
            VALORIN Excise Tax Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((item, index) => (
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

      {/* SECTION 4: COMMON EXCISE TAX RISK AREAS */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-8 text-center">
              Common Excise Tax Risk Areas
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              In practice, Excise Tax issues often arise around:
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
              Unlike VAT or Corporate Tax, corrections after the event are limited and penalties are often strict.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: LINK TO EXCISE TAX KNOWLEDGE HUB */}
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
                    Need Excise Tax Scenarios or Calculators?
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
                    For detailed reference — including:
                  </p>

                  <div className="bg-background/40 backdrop-blur-sm rounded-xl p-6 mb-8 border border-border/50 max-w-lg mx-auto text-left hover:bg-background/60 transition-colors">
                    <ul className="space-y-3">
                      {[
                        "Excise valuation examples",
                        "Product-category tax rates",
                        "Scenario-based calculations"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <button onClick={() => navigate('/tax-center/excise-tax')} className="btn-gold inline-flex items-center gap-2 px-8 py-3 text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                      Go to Excise Tax Knowledge Hub
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-xs text-muted-foreground italic max-w-md mx-auto opacity-70">
                      *The Knowledge Hub provides structured guidance and tools. Final Excise Tax treatment depends on product classification, valuation and timing.*
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHO THIS SERVICE IS FOR */}
      <section className="py-12 md:py-20 bg-muted/30">
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

      {/* SECTION 7: HOW WE ENGAGE */}
      <section className="py-12 md:py-20">
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

      {/* SECTION 8: FINAL CALL-TO-ACTION */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center glass-card p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6">
              Avoid Penalties Through Early Excise Tax Compliance
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              If your business deals with excisable goods, early review prevents costly errors.
            </p>
            
            <button onClick={() => navigate('/contact')} className="btn-gold inline-flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Speak to an Excise Tax Advisor
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ExciseTaxService;
