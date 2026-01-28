import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  Database, 
  Server, 
  Settings, 
  CheckCircle, 
  AlertTriangle, 
  Code, 
  Users, 
  Activity
} from "lucide-react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";
import { trackCTAClick } from "@/lib/analytics";

const ERPAdvisoryService = () => {
  const navigate = useNavigate();

  useEffect(() => {
    updateSEO({
      title: "ERP Licensing & Implementation Advisory | VALORIN Finance & Advisory",
      description: "CFO-led ERP licensing and implementation advisory covering system selection, partner evaluation and business-side functional consulting to ensure ERP success.",
      canonical: `${SITE_URL}/services/erp-advisory`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }, []);

  const erpServices = [
    {
      title: "ERP Product Licensing Facilitation",
      description: "Support in selecting appropriate ERP solutions aligned with business scale and complexity.",
      icon: <Database className="w-6 h-6 text-primary" />,
      items: [
        "ERP needs assessment from a business perspective",
        "Comparison of ERP options (finance, operations, reporting)",
        "Independent support during licensing discussions"
      ]
    },
    {
      title: "Implementation Partner Evaluation",
      description: "Objective assessment of implementation partners before engagement.",
      icon: <Users className="w-6 h-6 text-primary" />,
      items: [
        "Review of partner capability and approach",
        "Evaluation of proposed implementation scope and timelines",
        "Risk identification before project launch"
      ]
    },
    {
      title: "Business-Side Functional Consulting",
      description: "CFO-led oversight during implementation to protect business outcomes.",
      icon: <Settings className="w-6 h-6 text-primary" />,
      items: [
        "Design of finance, cost, inventory and reporting structures",
        "Alignment with VAT, Corporate Tax and audit requirements",
        "Translation of business needs into system logic"
      ]
    }
  ];

  const commonRisks = [
    "Generic chart of accounts not aligned to management ,tax & other compliance needs",
    "Inadequate documentation of processes and controls",
    "Poor data migration and opening balances",
    "Manual workarounds replacing system controls",
    "Reports that satisfy auditors but not decision-makers"
  ];

  const engagementSteps = [
    {
      step: "Step 1",
      title: "ERP Readiness Assessment",
      description: "Understand current systems, pain points and reporting needs."
    },
    {
      step: "Step 2",
      title: "Design & Partner Support",
      description: "Support selection of ERP system and implementation approach."
    },
    {
      step: "Step 3",
      title: "Implementation Oversight",
      description: "Business-side supervision to ensure outcomes align with objectives."
    }
  ];

  const targetAudience = [
    {
      title: "Growing Businesses",
      description: "Companies upgrading from spreadsheets or basic accounting systems."
    },
    {
      title: "ERP Replacements or Upgrades",
      description: "Organisations transitioning to new systems or modules."
    },
    {
      title: "Groups & Multi-Entity Structures",
      description: "Businesses needing consistent data across entities and locations."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-card to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
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
              <Server className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">ERP Advisory</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              ERP Licensing & <span className="text-gradient-gold">Implementation Advisory</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              ERP failures rarely originate from technology. <br className="hidden md:block" />
              They fail due to weak business design, poor ownership and misalignment between finance, operations and systems.
              <br/><br/>
              VALORIN Finance & Advisory provides CFO-led ERP advisory to ensure systems are selected, implemented and governed to support reporting, compliance and growth.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                onClick={() => {
                  trackCTAClick('erp_service_consultation', 'hero');
                  navigate('/contact');
                }}
                className="btn-gold w-full sm:w-auto"
              >
                Book an ERP Advisory Consultation
              </button>
              <span className="text-xs text-muted-foreground italic">*NDA available on request*</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why ERP Projects Fail */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6">
              Why ERP Projects <span className="text-gradient-gold">Fail</span>
            </h2>
            <div className="glass-card p-8 rounded-xl text-left">
              <p className="text-lg text-foreground mb-6 font-medium text-center">
                Most ERP implementations struggle due to:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Selecting systems without business-led evaluation",
                  "Over-reliance on technical implementation partners",
                  "Poor definition of reporting, controls and workflows",
                  "Finance, tax and operations treated as afterthoughts",
                  "Lack of ownership from senior management"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-destructive/80 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-foreground font-medium mt-8 pt-6 border-t border-white/5">
                ERP success requires strong finance leadership at the core — not just IT execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full" />
      </div>

      {/* Services Grid */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-12 text-center">
            VALORIN ERP Advisory <span className="text-gradient-gold">Services</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {erpServices.map((service, index) => (
              <div key={index} className="glass-card rounded-xl p-8 hover:border-primary/30 transition-all duration-300 flex flex-col h-full text-center">
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="scale-125 transform">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold font-serif text-foreground mb-3 min-h-[3.5rem] flex items-center justify-center">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                <ul className="space-y-3 mt-auto text-left mx-auto max-w-xs w-full">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {item}
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

      {/* ERP as Foundation */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
              ERP as the Foundation for <span className="text-gradient-gold">Finance, Tax & Decisions</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                 <p className="text-lg text-muted-foreground">
                   ERP systems directly impact:
                 </p>
                 <ul className="space-y-3">
                   {[
                     "Financial reporting and MIS accuracy",
                     "VAT and Corporate Tax compliance",
                     "Transfer Pricing data consistency",
                     "Budgeting, forecasting and cash visibility"
                   ].map((item, index) => (
                     <li key={index} className="flex items-center gap-3">
                       <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                       <span className="text-foreground">{item}</span>
                     </li>
                   ))}
                 </ul>
              </div>
              <div className="glass-card p-6 rounded-xl border-l-4 border-l-primary">
                <p className="text-lg font-medium text-foreground italic">
                  "ERP design mistakes often cascade into compliance issues and management blind spots."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full" />
      </div>

      {/* Common Risks */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
              Common ERP Risks <span className="text-gradient-gold">We See</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {commonRisks.map((risk, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background border border-destructive/20 hover:border-destructive/40 transition-colors group">
                  <AlertTriangle className="w-5 h-5 text-destructive/60 group-hover:text-destructive transition-colors mt-0.5" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{risk}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8">
              These risks usually surface after go-live — when correction becomes expensive.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
            Who This Service Is <span className="text-gradient-gold">Designed For</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {targetAudience.map((item, index) => (
              <div key={index} className="glass-card rounded-xl p-8 text-center hover:border-primary/30 transition-all">
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Activity className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full" />
      </div>

      {/* How We Engage */}
      <section className="py-12 md:py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
            How We <span className="text-gradient-gold">Engage</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {engagementSteps.map((step, index) => (
              <div key={index} className="relative p-8 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors h-full flex flex-col">
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-4 min-h-[3.5rem] flex items-center">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated with VALORIN Advisory Services */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-6">
              Integrated with VALORIN <span className="text-gradient-gold">Advisory Services</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              ERP advisory engagements often run alongside:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-8">
              {[
                "Accounting & MIS enablement",
                "VAT and Corporate Tax structuring",
                "Fractional CFO Leadership",
                "Banking and financing readiness"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground font-medium">
              This ensures systems support strategy — not constrain it.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center glass-card p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6">
              Get ERP Right Before Implementation Begins
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Correcting ERP mistakes after go-live is costly and disruptive.
            </p>
            
            <button onClick={() => navigate('/contact')} className="btn-gold inline-flex items-center gap-2">
              Speak to an ERP Advisory Specialist
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ERPAdvisoryService;
