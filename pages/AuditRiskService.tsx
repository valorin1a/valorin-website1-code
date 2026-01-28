import { Layout } from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { 
  Shield, 
  ArrowRight,
  Search,
  FileCheck,
  Scale,
  AlertTriangle,
  CheckCircle,
  Briefcase,
  Layers,
  Lock
} from "lucide-react";
import { useEffect } from "react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const AuditRiskService = () => {
  const navigate = useNavigate();

  useEffect(() => {
    updateSEO({
      title: "Audit & Risk Advisory | VALORIN Finance & Advisory",
      description: "Internal audit, risk management frameworks, and compliance assurance to protect your business and ensure regulatory integrity.",
      canonical: `${SITE_URL}/services/audit-risk`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }, []);

  const coreDeliverables = [
    {
      title: "Internal Audit & Control Frameworks",
      description: "Strengthening your first line of defense against errors and fraud.",
      items: [
        "Internal control design and testing",
        "Standard Operating Procedure (SOP) development",
        "Operational efficiency reviews"
      ]
    },
    {
      title: "Enterprise Risk Management (ERM)",
      description: "Identifying and mitigating threats to your business continuity.",
      items: [
        "Risk register development and maintenance",
        "Strategic and operational risk assessments",
        "Business continuity planning"
      ]
    },
    {
      title: "Regulatory Compliance (ESR, AML, UBO)",
      description: "Navigating the complex landscape of UAE regulations.",
      items: [
        "Economic Substance Regulations (ESR) filings",
        "AML/CFT policy development and screening",
        "Ultimate Beneficial Owner (UBO) declarations"
      ]
    },
    {
      title: "Forensic & Special Investigations",
      description: "Uncovering the truth behind financial irregularities.",
      items: [
        "Fraud investigation and prevention",
        "Dispute resolution support",
        "Transaction verification"
      ]
    }
  ];

  const engagementSteps = [
    {
      step: "Step 1",
      title: "Risk Assessment",
      description: "We analyze your business processes to identify key vulnerabilities and compliance gaps."
    },
    {
      step: "Step 2",
      title: "Framework Design",
      description: "We design practical controls and policies tailored to your specific risk appetite and operations."
    },
    {
      step: "Step 3",
      title: "Implementation & Monitoring",
      description: "We support the rollout of new controls and provide ongoing monitoring to ensure effectiveness."
    }
  ];

  const targetAudience = [
    {
      title: "Regulated Entities",
      description: "Businesses subject to specific oversight (e.g., financial services, real estate) requiring strict compliance."
    },
    {
      title: "Family Groups & Conglomerates",
      description: "Large organizations needing standardized controls across diverse business units."
    },
    {
      title: "SMEs Seeking Investment",
      description: "Companies needing to demonstrate robust governance to attract investors or bank financing."
    }
  ];

  const integratedServices = [
    "Corporate Tax Governance",
    "VAT Health Checks",
    "Fractional CFO Leadership",
    "ERP Process Design"
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
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Audit & Risk Advisory</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Protect Value & <span className="text-gradient-gold">Ensure Integrity</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              Robust internal controls and risk management strategies that protect your assets, ensure compliance, and build stakeholder trust.
              <br/><br/>
              VALORIN provides independent assurance and practical solutions to navigate regulatory complexity and operational risks.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button onClick={() => navigate('/contact')} className="btn-gold">
                Schedule a Risk Consultation
              </button>
              <span className="text-xs text-muted-foreground italic">*Confidentiality Guaranteed*</span>
            </div>
          </div>
        </div>
      </section>

      {/* What Audit & Risk Means */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6">
              More Than Just <span className="text-gradient-gold">Checking Boxes</span>
            </h2>
            <div className="glass-card p-8 rounded-xl">
              <p className="text-lg text-foreground mb-4 font-medium">
                Effective risk management is an enabler of growth, not a roadblock.
              </p>
              <p className="text-muted-foreground mb-4">
                We move beyond standard compliance checklists to understand the specific risks facing your business—financial, operational, and regulatory.
              </p>
              <p className="text-muted-foreground">
                Our goal is to build resilience into your operations so you can pursue opportunities with confidence.
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
              When to <span className="text-gradient-gold">Engage Us</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Preparing for a first-time external audit",
                "Concerns about internal fraud or leakage",
                "Navigating new regulations (ESR, AML, CT)",
                "Processes are inefficient or undocumented",
                "Rapid growth has outpaced existing controls",
                "Investors require independent assurance"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors">
                  <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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
            Core Advisory <span className="text-gradient-gold">Services</span>
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
            Our <span className="text-gradient-gold">Approach</span>
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
              The Value of <span className="text-gradient-gold">Assurance</span>
            </h2>
            
            <p className="text-center text-lg text-muted-foreground mb-12">
              Investing in risk management pays dividends in stability and reputation.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Reduced risk of financial loss and fraud",
                "Compliance with evolving UAE regulations",
                "Enhanced confidence for banks and investors",
                "Streamlined operations and reduced waste"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border">
                  <CheckCircle className="w-5 h-5 text-primary" />
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
                Integrated With VALORIN’s Ecosystem
              </h2>
              <p className="text-muted-foreground">
                Risk management is most effective when integrated with:
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
              We ensure your controls support your business strategy rather than hindering it.
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
              Secure Your Business Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't wait for a crisis to evaluate your risks. Let's build a stronger, more resilient business together.
            </p>
            
            <button onClick={() => navigate('/contact')} className="btn-gold inline-flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Get a Risk Assessment
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AuditRiskService;
