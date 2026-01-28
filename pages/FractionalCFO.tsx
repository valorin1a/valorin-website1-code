import { Layout } from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { 
  Users, 
  ArrowRight,
  TrendingUp,
  BarChart3,
  Calendar,
  Shield,
  CheckCircle,
  FileText,
  Briefcase,
  Target,
  Layers,
  Network
} from "lucide-react";
import { useEffect } from "react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const FractionalCFO = () => {
  const navigate = useNavigate();

  useEffect(() => {
    updateSEO({
      title: "Fractional CFO Leadership | VALORIN Finance & Advisory",
      description: "CFO-led finance leadership delivering board reporting, cash flow clarity, pricing strategy and investor readiness for UAE businesses.",
      canonical: `${SITE_URL}/services/fractional-cfo`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }, []);

  const coreDeliverables = [
    {
      title: "Board Reporting Architecture",
      description: "Clear, concise and reliable board packs that translate numbers into insight.",
      items: [
        "Monthly or quarterly board reports",
        "KPI frameworks aligned to strategy",
        "Variance analysis and commentary"
      ]
    },
    {
      title: "Costing & Strategic Pricing Models",
      description: "Understanding true margins before pricing decisions are made.",
      items: [
        "Product and service costing structures",
        "Margin and break-even analysis",
        "Support for pricing and tender decisions"
      ]
    },
    {
      title: "Bank Covenant Monitoring & Negotiation",
      description: "Improving bank confidence through disciplined reporting.",
      items: [
        "Covenant tracking and forecasting",
        "Cash flow conversions and explanations",
        "Support negotiations for new and renewing banking facilities"
      ]
    },
    {
      title: "Investor-Ready Financial & Compliance Packs",
      description: "Preparing information that withstands scrutiny.",
      items: [
        "Financial models and forecasts",
        "Information packages for investors or partners",
        "Alignment with tax, audit and ERP data"
      ]
    }
  ];

  const engagementSteps = [
    {
      step: "Step 1",
      title: "Initial Assessment",
      description: "We review your current reporting, structure and priorities to identify gaps and risks."
    },
    {
      step: "Step 2",
      title: "Agreed Scope & Cadence",
      description: "A clear scope is defined — frequency, deliverables and decision areas — with no ambiguity."
    },
    {
      step: "Step 3",
      title: "Ongoing CFO Involvement",
      description: "We participate in reviews, discussions and planning as required, acting as your CFO across agreed areas."
    }
  ];

  const targetAudience = [
    {
      title: "Owner-Led & Family-Owned Businesses",
      description: "Where decisions rest with ownership and require trusted financial interpretation."
    },
    {
      title: "Growing Mid-Market Companies",
      description: "Businesses that have outgrown basic accounting but are not ready for a full-time CFO."
    },
    {
      title: "PE-Backed or Investor-Focused Entities",
      description: "Companies needing professional reporting, control and financial discipline."
    }
  ];

  const integratedServices = [
    "Corporate Tax (CT) readiness and filings",
    "VAT governance and audit defense",
    "ERP selection and implementation oversight",
    "Banking and financing support"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
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
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Fractional CFO Leadership</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Executive Financial <span className="text-gradient-gold">Leadership</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              CFO-led financial leadership that brings structure, clarity and confidence to decision-making — without the cost of a full-time CFO.
              <br/><br/>
              VALORIN Finance & Advisory provides senior financial stewardship designed for owners, CEOs and boards navigating growth, complexity and regulatory pressure.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button onClick={() => navigate('/contact')} className="btn-gold">
                Request a CFO Consultation
              </button>
              <span className="text-xs text-muted-foreground italic">*NDA available on request*</span>
            </div>
          </div>
        </div>
      </section>

      {/* What Fractional CFO Means */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6">
              What Fractional CFO Means at <span className="text-gradient-gold">VALORIN</span>
            </h2>
            <div className="glass-card p-8 rounded-xl">
              <p className="text-lg text-foreground mb-4 font-medium">
                A Fractional CFO at VALORIN is not a part-time accountant.
              </p>
              <p className="text-muted-foreground mb-4">
                It is access to experienced CFO-level thinking — applied precisely where your business needs it most.
              </p>
              <p className="text-muted-foreground">
                We sit between ownership, management, banks and auditors, ensuring financial information is reliable, forward-looking and decision-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When Businesses Engage */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
              When Businesses Typically <span className="text-gradient-gold">Engage Us</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Financial reports exist, but do not drive decisions",
                "Cash flow feels unpredictable despite reported profits",
                "Banks require better visibility and covenant discipline",
                "Pricing decisions are not supported by clear costing",
                "The business is preparing for funding, restructuring or growth",
                "The owner needs a second, independent financial view"
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

      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full" />
      </div>

      {/* Core Deliverables */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-12 text-center">
            Core Fractional CFO <span className="text-gradient-gold">Deliverables</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coreDeliverables.map((item, index) => (
              <div key={index} className="glass-card rounded-xl p-8 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-xl font-bold font-serif text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>
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

      {/* How It Works */}
      <section className="py-12 md:py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
            How the <span className="text-gradient-gold">Engagement Works</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {engagementSteps.map((step, index) => (
              <div key={index} className="relative p-6 rounded-xl border border-primary/20 bg-primary/5">
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
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
              <div key={index} className="glass-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Beyond Numbers */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6 text-center">
              Value Beyond the <span className="text-gradient-gold">Numbers</span>
            </h2>
            
            <p className="text-center text-lg text-muted-foreground mb-12">
              Fractional CFO support is about improving outcomes, not just reports.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Better cash visibility and working capital control",
                "Fewer surprises during audits or bank reviews",
                "More confident pricing and investment decisions",
                "Reduced dependency on reactive advisors"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connection to Other Services */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-4">
                Integrated With VALORIN’s Other Services
              </h2>
              <p className="text-muted-foreground">
                Fractional CFO engagements often connect naturally with:
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
              This ensures that strategy, systems and compliance move together — not in isolation.
            </p>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center glass-card p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6">
              Speak to a CFO, Not Just an Advisor
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you need a clearer view of your finances or independent CFO-level judgement, we should start with a conversation.
            </p>
            
            <button onClick={() => navigate('/contact')} className="btn-gold inline-flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Schedule a Confidential CFO Call
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FractionalCFO;
