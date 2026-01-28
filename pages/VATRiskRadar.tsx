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
  ArrowRight,
  Globe,
  Coins,
  Warehouse
} from "lucide-react";
import { useEffect } from "react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const VATRiskRadar = () => {
  useEffect(() => {
    updateSEO({
      title: "VAT Risk Checklist (UAE) | FTA Audit Exposure Areas",
      description: "Identify high-risk VAT positions and interpretation errors. Download the VAT Risk Checklist.",
      canonical: `${SITE_URL}/tax-center/vat/risk-radar`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
      keywords: "UAE VAT Checklist, FTA Audit Risk, VAT Compliance UAE, Blocked Input VAT, Reverse Charge Mechanism",
    });
  }, []);

  const riskAreas = [
    {
      title: "Blocked & Restricted Input VAT",
      icon: FileWarning,
      items: [
        "Entertainment and hospitality provided to customers or third parties",
        "Staff benefits not contractually required",
        "Motor vehicles available for personal use",
        "Gifts and promotional items exceeding acceptable thresholds"
      ]
    },
    {
      title: "Mixed Supplies & Partial Exemption",
      icon: Coins,
      items: [
        "Businesses making both taxable and exempt supplies",
        "Overheads claimed without apportionment",
        "Incorrect recovery of input VAT on shared costs"
      ]
    },
    {
      title: "Reverse Charge & Cross-Border Services",
      icon: Globe,
      items: [
        "Services received from non-resident suppliers",
        "Imported management, IT, and professional services",
        "Incorrect application of place-of-supply rules"
      ]
    },
    {
      title: "Capital Assets Scheme",
      icon: Calculator,
      items: [
        "Capital assets not tracked for adjustment periods",
        "Change in use not reflected in VAT returns"
      ]
    },
    {
      title: "Designated Zones & Special Transactions",
      icon: Warehouse,
      items: [
        "Goods vs services confusion in Designated Zones",
        "Insufficient evidence for zero-rated exports"
      ]
    }
  ];

  const targetAudience = [
    "High entertainment or marketing spend",
    "Regular cross-border services",
    "Mixed taxable and exempt income",
    "Designated Zone operations",
    "Preparation for FTA audit or reassessment"
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

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <ShieldAlert className="w-4 h-4 text-red-500" />
              <span className="text-sm text-red-500 font-medium">VAT Risk Checklist (UAE)</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Common FTA Audit <br/>
              <span className="text-gradient-gold">Exposure Areas</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Many VAT penalties arise not from late filing, but from <strong>interpretation errors and missing evidence</strong>.
              <br/><br/>
              This VAT Risk Checklist highlights <strong>high-risk VAT positions</strong> that frequently result in FTA audit adjustments, assessments, and penalties.
            </p>
          </div>
        </div>
      </section>

      {/* Key Risk Areas */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-4">
              High-Risk Areas <span className="text-gradient-gold">Covered</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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

      {/* When This Checklist Is Critical */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
              When This Checklist <span className="text-gradient-gold">Is Critical</span>
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
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            
            {/* CTA Box */}
            <div className="glass-card rounded-2xl p-8 md:p-12 text-center border-primary/20 relative overflow-hidden order-2 md:order-1">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />
              
              <FileWarning className="w-16 h-16 text-red-500 mx-auto mb-6 opacity-80" />
              
              <h2 className="text-3xl font-bold font-serif text-foreground mb-4">
                Get the VAT Risk Checklist
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
                {/* Removed duplicate disclaimer from inside the box since we added a global one */}
              </div>
            </div>

            {/* Need Expert Review? */}
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold font-serif text-foreground mb-6">
                Need Expert <span className="text-gradient-gold">Review?</span>
              </h3>
              <div className="space-y-6 text-lg text-muted-foreground">
                <div className="p-6 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="leading-relaxed">
                    If multiple risks apply, a <strong className="text-foreground">confidential VAT risk review</strong> can identify exposure before FTA does.
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

      {/* Disclaimer */}
      <section className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Disclaimer</strong><br/>
            This checklist is for general information only and does not constitute tax advice.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default VATRiskRadar;
