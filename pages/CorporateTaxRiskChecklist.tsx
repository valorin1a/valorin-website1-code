import { Layout } from "@/components/layout/Layout";
import { useNavigate, Link } from "react-router-dom";
import { 
  ShieldAlert, 
  Building, 
  FileWarning, 
  Network, 
  Calculator, 
  Target,
  Download,
  Lock,
  AlertTriangle,
  ArrowRight
} from "lucide-react";
import { useEffect } from "react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const CorporateTaxRiskChecklist = () => {
  useEffect(() => {
    updateSEO({
      title: "Corporate Tax Risk Checklist (UAE) | 0% vs 9% Exposure",
      description: "Identify high-impact Corporate Tax risk triggers. Download the Corporate Tax Risk Checklist.",
      canonical: `${SITE_URL}/advisory-tools/corporate-tax-risk-checklist`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
      keywords: "UAE Corporate Tax Checklist, Free Zone Tax Risk, CT Compliance UAE",
    });
  }, []);

  const riskAreas = [
    {
      title: "Free Zone Qualification Risk",
      icon: Building,
      items: [
        "Non-qualifying revenue not monitored against de minimis limits",
        "Revenue streams not segregated between qualifying and non-qualifying",
        "Transactions with natural persons not reviewed for excluded activity exposure"
      ]
    },
    {
      title: "Substance & CIGA Alignment",
      icon: Target,
      items: [
        "Core Income Generating Activities not clearly performed in the UAE",
        "Insufficient people, assets, or expenditure to support income",
        "Governance and decision-making evidence gaps"
      ]
    },
    {
      title: "Related Party & Pricing Risk",
      icon: Network,
      items: [
        "Related party services not benchmarked to arm’s length",
        "Missing or weak intercompany agreements",
        "Inconsistent invoicing and delivery evidence"
      ]
    },
    {
      title: "Add-Back & Deductibility Risk",
      icon: Calculator,
      items: [
        "Fines and penalties deducted incorrectly",
        "Personal expenses mixed with business costs",
        "Customer entertainment treated inconsistently"
      ]
    }
  ];

  const targetAudience = [
    "Free Zone entities applying 0% tax",
    "Groups with related-party services",
    "Rapidly growing or restructuring businesses",
    "First-time CT filers"
  ];

  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Back Button */}
            <div className="flex justify-center mb-8">
              <button 
                onClick={() => navigate(-1)} 
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline bg-background/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Go Back
              </button>
            </div>

            {/* Restored Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <ShieldAlert className="w-4 h-4 text-red-500" />
              <span className="text-sm text-red-500 font-medium">Corporate Tax Risk Checklist (UAE)</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              0% vs 9% Exposure & <br/>
              <span className="text-gradient-gold">High-Impact Triggers</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For many businesses, especially Free Zone entities, <strong>small compliance failures can result in disproportionate tax outcomes</strong>.
              <br/><br/>
              This checklist highlights <strong>high-impact Corporate Tax risk triggers</strong> that frequently lead to reassessment or loss of preferred tax position.
            </p>
          </div>
        </div>
      </section>

      {/* Key Risk Areas */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-4">
              Key Risk Areas <span className="text-gradient-gold">Covered</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {riskAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <div key={i} className="glass-card rounded-xl p-8 hover:border-red-500/30 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold font-serif text-foreground">{area.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {area.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <AlertTriangle className="w-4 h-4 text-red-500/60 flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* When This Checklist Matters Most */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
              When This Checklist <span className="text-gradient-gold">Matters Most</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {targetAudience.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-6 rounded-lg bg-background border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif font-bold text-primary">{i + 1}</span>
                  </div>
                  <span className="font-medium text-foreground/90 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section & CTA */}
      <section id="download" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Restored Split Layout */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            
            {/* CTA Box */}
            <div className="glass-card rounded-2xl p-8 md:p-12 text-center border-primary/20 relative overflow-hidden order-2 md:order-1">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />
              
              <FileWarning className="w-16 h-16 text-red-500 mx-auto mb-6 opacity-80" />
              
              <h2 className="text-3xl font-bold font-serif text-foreground mb-4">
                Get the Risk Checklist
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact our team to receive the comprehensive checklist and expert guidance.
              </p>

              {/* Contact Button */}
              <div className="max-w-sm mx-auto">
                <Link to="/contact" className="w-full btn-gold py-3 text-lg rounded-lg inline-flex items-center justify-center gap-2">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-border/50 text-xs text-muted-foreground">
                <p className="italic opacity-70">
                  Disclaimer: This checklist is for general information only and does not constitute tax advice.
                </p>
              </div>
            </div>

            {/* Protect Your Position Text */}
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold font-serif text-foreground mb-6">
                Protect Your <span className="text-gradient-gold">Position</span>
              </h3>
              <div className="space-y-6 text-lg text-muted-foreground">
                <div className="p-6 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-foreground font-medium mb-2">
                    If any risk applies:
                  </p>
                  <p>
                    A <strong>confidential CT risk review</strong> can prevent unexpected 9% exposure.
                  </p>
                </div>
                <p className="text-sm flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  All engagements handled with strict confidentiality.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CorporateTaxRiskChecklist;
