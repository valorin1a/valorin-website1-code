import { Layout } from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight,
  Calculator,
  ShieldCheck,
  FileText,
  AlertTriangle,
  Scale,
  Briefcase,
  Layers,
  Building2,
  Coins,
  Search,
  CheckCircle,
  AlertOctagon
} from "lucide-react";
import { useEffect } from "react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const VATGovernanceService = () => {
  const navigate = useNavigate();

  useEffect(() => {
    updateSEO({
      title: "VAT Advisory, Compliance & Audit Support | VALORIN Finance & Advisory",
      description: "CFO-led VAT governance covering advisory, return filings, refunds, FTA audit support and operational VAT health checks for UAE businesses.",
      canonical: `${SITE_URL}/services/vat-governance`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }, []);

  const vatServices = [
    {
      title: "VAT Advisory & Structuring",
      description: "Practical guidance on VAT treatment before transactions occur.",
      icon: <Scale className="w-6 h-6 text-primary" />,
      items: [
        "Supply classification (standard, zero-rated, exempt, out-of-scope)",
        "Impact of business model and contracts",
        "Reverse Charge assessment",
        "Cross-border VAT considerations"
      ]
    },
    {
      title: "VAT Compliance & Return Calculations",
      description: "Accurate and defensible VAT filings.",
      icon: <FileText className="w-6 h-6 text-primary" />,
      items: [
        "VAT return preparation and review",
        "Reconciliations to accounting and ERP data",
        "Review of input VAT eligibility and adjustments"
      ]
    },
    {
      title: "VAT Refund Strategy",
      description: "Maximising recoverable VAT while meeting FTA scrutiny.",
      icon: <Coins className="w-6 h-6 text-primary" />,
      items: [
        "Refund eligibility assessment",
        "Documentation preparation",
        "Support through FTA refund reviews"
      ]
    },
    {
      title: "FTA Audit Support",
      description: "Hands-on support during VAT audits and reviews.",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      items: [
        "Audit file preparation",
        "Technical responses to FTA queries",
        "Reconciliation support and clarifications"
      ]
    },
    {
      title: "VAT Operational Health Check",
      description: "A forward-looking review of VAT processes before problems arise.",
      icon: <Search className="w-6 h-6 text-primary" />,
      items: [
        "Review of invoices, controls and systems",
        "Identification of blocked or high-risk input VAT",
        "Recommendations to strengthen compliance"
      ]
    }
  ];

  const riskAreas = [
    "Blocked input VAT (motor vehicles, entertainment, staff benefits)",
    "Partial exemption on shared overheads",
    "Reverse Charge missed on foreign services",
    "Incorrect treatment of Designated Zone transactions",
    "Weak audit trail and invalid tax invoices"
  ];

  const engagementSteps = [
    {
      step: "Step 1",
      title: "VAT Risk Review",
      description: "High-level assessment of VAT flows, returns and controls."
    },
    {
      step: "Step 2",
      title: "Defined Scope",
      description: "Advisory, compliance, audit support or health check – clearly scoped."
    },
    {
      step: "Step 3",
      title: "Implementation & Support",
      description: "Practical execution aligned with ERP, accounting and operations."
    }
  ];

  const targetAudience = [
    {
      title: "Trading & Distribution",
      description: "High transaction volumes and inventory-driven VAT exposure.",
      icon: <Layers className="w-6 h-6 text-primary" />
    },
    {
      title: "Manufacturing & Industrial",
      description: "Complex input VAT, imports and multi-department processes.",
      icon: <Building2 className="w-6 h-6 text-primary" />
    },
    {
      title: "Professional & Service Firms",
      description: "Cross-border services, RCM exposure and partial exemption issues.",
      icon: <Briefcase className="w-6 h-6 text-primary" />
    }
  ];

  const failureReasons = [
    "Input VAT claimed without proper eligibility",
    "Weak documentation and invoice controls",
    "Mixed taxable and exempt activity (partial exemption)",
    "Reverse Charge Mechanism (RCM) mistakes",
    "ERP and operational misalignment"
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
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">VAT Advisory</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              VAT Governance & <span className="text-gradient-gold">Optimization</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              VAT is not a 5% calculation exercise. <br className="hidden md:block" />
              It is an operational discipline that directly impacts cash flow, margins and audit exposure.
              <br/><br/>
              VALORIN Finance & Advisory provides CFO-led VAT governance that goes beyond return filing – protecting businesses from leakage, penalties and FTA challenges.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button onClick={() => navigate('/contact')} className="btn-gold">
                Book a VAT Consultation
              </button>
              <span className="text-xs text-muted-foreground italic">*NDA available on request*</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why VAT Fails */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-8 text-center">
              Why VAT Fails <span className="text-gradient-gold">in Practice</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Most VAT issues do not arise due to incorrect rates – they arise due to:
            </p>
            
            <div className="glass-card p-8 rounded-xl border border-white/10 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                {failureReasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              These gaps often surface only during FTA audits – when correction becomes costly.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full" />
      </div>

      {/* Services Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-12 text-center">
            VALORIN VAT Governance <span className="text-gradient-gold">Services</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {vatServices.map((service, index) => (
              <div key={index} className="glass-card rounded-xl p-8 hover:border-primary/30 transition-all duration-300 flex flex-col h-full">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold font-serif text-foreground mb-3 min-h-[3.5rem] flex items-center">{service.title}</h3>
                <p className="text-muted-foreground mb-6 min-h-[3rem]">{service.description}</p>
                <ul className="space-y-3">
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

      {/* Common VAT Risk Areas - Dark/Red Style */}
      <section className="py-16 md:py-24 bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-destructive/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-destructive/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-xs font-bold uppercase tracking-wider mb-4">
                <AlertOctagon className="w-3 h-3" />
                Risk Areas
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
                Common VAT <span className="text-destructive">Risk Areas We See</span>
              </h2>
              <p className="text-muted-foreground">
                These risks often go unnoticed until an FTA audit or transaction due diligence.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {riskAreas.map((risk, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background/5 border border-destructive/20 hover:border-destructive/40 transition-colors group h-full">
                  <AlertTriangle className="w-5 h-5 text-destructive/60 group-hover:text-destructive transition-colors mt-0.5" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{risk}</span>
                </div>
              ))}
            </div>
            
            <p className="text-center text-muted-foreground mt-8 text-sm italic">
              These risks are operational – not theoretical.
            </p>
          </div>
        </div>
      </section>

      {/* VAT Knowledge Hub */}
      <section className="py-12 md:py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-6">
              Need Detailed VAT Scenarios or Calculators?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              For deeper reference – including input VAT recoverability scenarios, partial exemption logic, reverse charge case studies, VAT risk matrices and calculators.
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <button onClick={() => navigate('/tax-center/vat/knowledge-hub')} className="btn-gold inline-flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Visit VAT Knowledge Hub
              </button>
              <p className="text-xs text-muted-foreground italic max-w-md">
                *The Knowledge Hub provides structured guidance and tools. Final VAT positions should always be confirmed based on specific facts and contracts.*
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full" />
      </div>

      {/* Who This Service Is For */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
            Who This Service Is <span className="text-gradient-gold">Designed For</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {targetAudience.map((item, index) => (
              <div key={index} className="glass-card rounded-xl p-8 text-left hover:border-primary/30 transition-all h-full flex flex-col">
                <div className="w-14 h-14 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 min-h-[3rem] flex items-center">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Engage */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
            How We <span className="text-gradient-gold">Engage</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {engagementSteps.map((step, index) => (
              <div key={index} className="relative p-8 rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm h-full flex flex-col">
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-3 min-h-[3.5rem] flex items-center">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center glass-card p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6">
              Prevent VAT Leakage Before It Reaches the FTA
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Proactive VAT governance protects cash flow and reduces audit stress.
            </p>
            
            <button onClick={() => navigate('/contact')} className="btn-gold inline-flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Speak to a VAT Advisor
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VATGovernanceService;
