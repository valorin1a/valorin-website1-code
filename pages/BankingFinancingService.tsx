import { Layout } from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { 
  Building2, 
  ArrowRight, 
  CheckCircle, 
  TrendingDown, 
  Shield, 
  FileText, 
  PieChart,
  Layers,
  Landmark,
  Briefcase,
  Users,
  AlertTriangle
} from "lucide-react";
import { useEffect } from "react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const BankingFinancingService = () => {
  const navigate = useNavigate();

  useEffect(() => {
    updateSEO({
      title: "Banking & Financing Advisory | VALORIN Finance & Advisory",
      description: "CFO-led banking and financing advisory covering account opening, trade finance, auto and equipment loans, mortgages and ongoing bank relationship management in the UAE.",
      canonical: `${SITE_URL}/services/banking-financing`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }, []);

  const services = [
    {
      title: "Business Bank Account Opening",
      description: "Structured support to improve bank acceptance.",
      icon: <Building2 className="w-6 h-6 text-primary" />,
      items: [
        "Review of business model and documentation",
        "Preparation of KYC and compliance packs",
        "Coordination with selected banks"
      ],
      note: "*Final approval remains subject to bank discretion.*"
    },
    {
      title: "Auto, Equipment & Asset Financing",
      description: "Support for asset-based financing needs.",
      icon: <TrendingDown className="w-6 h-6 text-primary" />,
      items: [
        "Financing assessment and structuring",
        "Support for vehicle and equipment loans",
        "Alignment with cash flow and repayment capacity"
      ]
    },
    {
      title: "Trade Financing Advisory",
      description: "Practical support for working capital efficiency.",
      icon: <FileText className="w-6 h-6 text-primary" />,
      items: [
        "Letters of Credit (LCs)",
        "Bank Guarantees (BGs)",
        "Trade finance structuring and optimisation"
      ]
    },
    {
      title: "Mortgage Facilitation",
      description: "Support for property-linked financing needs.",
      icon: <Landmark className="w-6 h-6 text-primary" />,
      items: [
        "Documentation preparation",
        "Bank coordination and process support",
        "Alignment with income and risk profiles"
      ]
    },
    {
      title: "Bank Relationship Management",
      description: "Ongoing support beyond initial financing.",
      icon: <Users className="w-6 h-6 text-primary" />,
      items: [
        "Financial packs for periodic bank reviews",
        "Covenant monitoring and compliance support",
        "Strategic preparation for renewals or expansion"
      ]
    }
  ];

  const commonRisks = [
    "Submitting inconsistent financial information",
    "Applying for facilities without readiness",
    "Poor covenant visibility and monitoring",
    "Misalignment between ERP data and bank reporting",
    "Over-extension without cash flow planning"
  ];

  const targetAudience = [
    {
      title: "Growing Businesses",
      description: "Companies seeking structured access to banking facilities."
    },
    {
      title: "Trading & Manufacturing Firms",
      description: "Businesses dependent on working capital and trade finance."
    },
    {
      title: "Entrepreneurs & Asset Owners",
      description: "Individuals and groups seeking financing support with clarity and discipline."
    }
  ];

  const engagementSteps = [
    {
      title: "Financial Readiness Review",
      description: "Assess reporting quality, cash flows and bank expectations."
    },
    {
      title: "Financing Strategy",
      description: "Define appropriate facilities, structure and approach."
    },
    {
      title: "Bank Coordination & Support",
      description: "Support discussions, submissions and ongoing engagement."
    }
  ];

  const integratedServices = [
    "Fractional CFO Leadership",
    "Accounting & MIS enablement",
    "ERP implementation advisory",
    "Corporate Tax and VAT compliance"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
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
              <Landmark className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Banking & Financing</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Banking & Financing <span className="text-gradient-gold">Advisory</span>
            </h1>
            
            <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mb-8">
              <p>
                Access to banking and finance is a credibility test. <br />
                Strong relationships depend on transparent financials, disciplined reporting and informed negotiation — not introductions alone.
              </p>
              <p>
                VALORIN Finance & Advisory provides CFO-led banking and financing support to help businesses engage confidently with UAE banks and lenders.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button onClick={() => navigate('/contact')} className="btn-gold">
                Book a Banking & Financing Consultation
              </button>
              <span className="text-xs text-muted-foreground italic">*NDA available on request*</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Banking Fails */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-8">
              Why Banking & Financing <span className="text-gradient-gold">Often Fails</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Most banking challenges arise due to:
            </p>
            <div className="text-left bg-background p-8 rounded-xl border border-border/50 shadow-sm space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <span className="text-foreground">Weak or inconsistent financial reporting</span>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <span className="text-foreground">Lack of clear cash flow visibility</span>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <span className="text-foreground">Poor alignment with bank risk expectations</span>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <span className="text-foreground">Inadequate preparation for credit discussions</span>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <span className="text-foreground">Over-reliance on relationship managers</span>
              </div>
            </div>
            <p className="text-lg font-medium text-foreground">
              Banks respond to structured, CFO-level engagement — not reactive requests.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-12 text-center">
            VALORIN Banking & Financing <span className="text-gradient-gold">Services</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all group">
                <div className="mb-4 p-3 bg-primary/5 rounded-lg w-fit group-hover:bg-primary/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold font-serif text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {service.note && (
                  <p className="text-xs text-muted-foreground italic mt-auto border-t border-border/50 pt-4">
                    {service.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CFO-Led Engagement */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6">
              CFO-Led Bank <span className="text-gradient-gold">Engagement</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Banks assess more than numbers — they assess control, governance and transparency.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-background p-6 rounded-xl border border-border/50">
                <PieChart className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-medium text-foreground">Financial information is decision-grade</p>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border/50">
                <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-medium text-foreground">Cash flow and risks are clearly articulated</p>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border/50">
                <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-medium text-foreground">Questions are anticipated before banks ask them</p>
              </div>
            </div>

            <p className="text-lg font-medium text-foreground">
              This approach builds confidence and improves outcomes over time.
            </p>
          </div>
        </div>
      </section>

      {/* Common Risks */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
              Common Risks <span className="text-gradient-gold">We See</span>
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
              These issues reduce bank confidence and negotiation strength.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
            Who This Service Is <span className="text-gradient-gold">Designed For</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {targetAudience.map((audience, index) => (
              <div key={index} className="glass-card p-8 rounded-xl text-center hover:border-primary/30 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-serif text-foreground mb-3">{audience.title}</h3>
                <p className="text-muted-foreground">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
            How We <span className="text-gradient-gold">Engage</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            
            {engagementSteps.map((step, index) => (
              <div key={index} className="relative pt-8 text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 font-bold text-primary text-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold font-serif text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-4">
                Integrated with VALORIN Advisory Services
              </h2>
              <p className="text-muted-foreground">
                Banking and financing outcomes improve when aligned with:
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
              This integrated approach strengthens credibility across stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center glass-card p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6">
              Approach Banks with Confidence
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Structured preparation improves bank outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => navigate('/contact')} className="btn-gold inline-flex items-center justify-center gap-2">
                Speak to a Banking & Financing Advisor
              </button>
            </div>
            <p className="text-xs text-muted-foreground italic mt-6">
              *NDA available on request*
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BankingFinancingService;
