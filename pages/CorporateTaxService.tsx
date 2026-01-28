import { Layout } from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { 
  Building2, 
  ArrowRight, 
  CheckCircle, 
  FileText, 
  ShieldCheck, 
  Scale, 
  Calculator,
  Briefcase,
  Layers,
  Calendar
} from "lucide-react";
import { useEffect } from "react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const CorporateTaxService = () => {
  const navigate = useNavigate();

  useEffect(() => {
    updateSEO({
      title: "Corporate Tax Advisory | VALORIN Finance & Advisory",
      description: "Expert UAE Corporate Tax structuring, compliance, and FTA engagement support to minimize liability and ensure full regulatory adherence.",
      canonical: `${SITE_URL}/services/corporate-tax`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }, []);

  const coreDeliverables = [
    {
      title: "Tax Impact Assessment & Structuring",
      description: "Strategic analysis to optimize your tax position.",
      items: [
        "Entity classification and residency analysis",
        "Free Zone qualifying income assessment",
        "Group structuring for tax optimization"
      ]
    },
    {
      title: "Registration & Compliance Filing",
      description: "End-to-end support for all FTA requirements.",
      items: [
        "Corporate Tax registration support",
        "Annual tax return preparation and filing",
        "Maintenance of proper accounting records"
      ]
    },
    {
      title: "Complex Transaction Advisory",
      description: "Navigating specific reliefs and limitations.",
      items: [
        "Restructuring relief analysis",
        "Interest deduction limitation rules",
        "Small Business Relief application"
      ]
    },
    {
      title: "FTA Representation & Dispute Resolution",
      description: "Professional support during audits and queries.",
      items: [
        "Responding to FTA queries and audits",
        "Filing clarification requests",
        "Penalty waiver applications"
      ]
    }
  ];

  const engagementSteps = [
    {
      step: "Step 1",
      title: "Impact Assessment",
      description: "We analyze your current business structure and financial data to estimate tax liability and identify risks."
    },
    {
      step: "Step 2",
      title: "Strategy & Registration",
      description: "We design an optimal tax structure, apply for relevant reliefs, and handle your FTA registration."
    },
    {
      step: "Step 3",
      title: "Ongoing Compliance",
      description: "We manage your annual filings, maintain required documentation, and keep you updated on regulatory changes."
    }
  ];

  const targetAudience = [
    {
      title: "UAE Mainland Companies",
      description: "Businesses subject to the standard 9% Corporate Tax rate requiring full compliance."
    },
    {
      title: "Free Zone Entities (QFZP)",
      description: "Companies seeking to benefit from the 0% rate through Qualifying Free Zone Person status."
    },
    {
      title: "Multinational Groups",
      description: "Entities with complex cross-border structures requiring transfer pricing and tax treaty analysis."
    }
  ];

  const integratedServices = [
    "VAT Governance & Compliance",
    "Transfer Pricing Documentation",
    "Accounting & MIS Reporting",
    "Audit & Risk Advisory"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
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
              <span className="text-sm text-primary font-medium">Corporate Tax Advisory</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Strategic <span className="text-gradient-gold">Corporate Tax</span> Advisory
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              Navigating the UAE's Corporate Tax landscape requires more than just filing returns. 
              <br/><br/>
              VALORIN provides comprehensive structuring, compliance, and advisory services to optimize your tax efficiency and ensure full regulatory adherence.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button onClick={() => navigate('/contact')} className="btn-gold">
                Schedule a Tax Consultation
              </button>
              <span className="text-xs text-muted-foreground italic">*NDA available on request*</span>
            </div>
          </div>
        </div>
      </section>

      {/* When Businesses Engage */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
              When Businesses Typically <span className="text-gradient-gold">Engage Us</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Preparing for first tax period filing",
                "Restructuring group entities or ownership",
                "Assessing Free Zone vs. Mainland tax impact",
                "Managing complex deductions or exemptions",
                "Facing FTA audit or clarification requests",
                "Optimizing tax efficiency across borders"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Deliverables */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-12 text-center">
            Core Corporate Tax <span className="text-gradient-gold">Deliverables</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coreDeliverables.map((item, index) => (
              <div key={index} className="glass-card rounded-xl p-8 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                <h3 className="text-xl font-bold font-serif text-foreground mb-3 min-h-[3.5rem] flex items-center">{item.title}</h3>
                <p className="text-muted-foreground mb-6 min-h-[3rem]">{item.description}</p>
                <ul className="space-y-3">
                  {item.items.map((subItem, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {subItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full" />
      </div>

      {/* How It Works */}
      <section className="py-12 md:py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
            How the <span className="text-gradient-gold">Engagement Works</span>
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

      {/* Who This Is Designed For */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
            Who This Service Is <span className="text-gradient-gold">Designed For</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {targetAudience.map((item, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center h-full flex flex-col">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 min-h-[3rem] flex items-center justify-center">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Connection to Other Services */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-4">
                Integrated With VALORIN’s Ecosystem
              </h2>
              <p className="text-muted-foreground">
                Corporate Tax management works best when aligned with your broader financial picture:
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {integratedServices.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Layers className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
            
            <p className="text-center text-sm text-muted-foreground italic">
              We ensure your tax strategy supports your long-term business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Knowledge Hub Section */}
      <section className="py-12 md:py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-6">
              Need Corporate Tax Scenarios or Calculators?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Access our comprehensive Knowledge Hub for detailed insights, including tax group scenarios, free zone qualifying income guides, and liability calculators.
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <button onClick={() => navigate('/tax-center/corporate-tax/knowledge-hub')} className="btn-gold inline-flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Visit Corporate Tax Knowledge Hub
              </button>
              <p className="text-xs text-muted-foreground italic max-w-md">
                *The Knowledge Hub provides structured guidance and tools. Final tax positions should always be confirmed based on specific facts and contracts.*
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full" />
      </div>

      {/* Final Call to Action */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center glass-card p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6">
              Ready to Optimize Your Corporate Tax?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ensure compliance and efficiency with VALORIN's expert guidance. Schedule a consultation today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => navigate('/contact')} className="btn-gold inline-flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Tax Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CorporateTaxService;
