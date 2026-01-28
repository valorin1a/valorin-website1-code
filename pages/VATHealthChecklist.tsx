import { Layout } from "@/components/layout/Layout";
import { useNavigate, Link } from "react-router-dom";
import { 
  ClipboardCheck, 
  ArrowRight, 
  FileCheck, 
  Receipt, 
  Calculator, 
  Archive,
  Users,
  Building2,
  Factory,
  ShieldCheck,
  Lock
} from "lucide-react";
import { useEffect } from "react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const VATHealthChecklist = () => {
  useEffect(() => {
    updateSEO({
      title: "VAT Health Checklist (UAE) | Compliance Hygiene for Audit Readiness",
      description: "Ensure your baseline VAT framework is structurally sound with our comprehensive VAT Health Checklist for UAE businesses.",
      canonical: `${SITE_URL}/advisory-tools/vat-health-checklist`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
      keywords: "VAT Checklist UAE, VAT Audit Readiness, UAE VAT Compliance, VAT Health Check",
    });
  }, []);

  const coverageAreas = [
    {
      title: "Registration & Setup",
      icon: FileCheck,
      items: [
        "VAT registration status matches actual business activities and trade license",
        "Mandatory and voluntary registration thresholds are monitored on an ongoing basis",
        "VAT treatment is clearly defined for key revenue streams (5%, 0%, exempt, out of scope)"
      ]
    },
    {
      title: "Invoicing & Documentation",
      icon: Receipt,
      items: [
        "Tax invoices contain all mandatory particulars (supplier name, TRN, VAT rate and amount)",
        "Credit notes are correctly linked to original tax invoices",
        "Export and zero-rated supplies are supported with complete evidence",
        "Supplier invoices are validated before claiming input VAT"
      ]
    },
    {
      title: "VAT Returns & Reconciliations",
      icon: Calculator,
      items: [
        "VAT return figures reconcile with general ledger and sub-ledgers",
        "Reverse Charge Mechanism (RCM) transactions are correctly identified and reported",
        "VAT returns and payments are submitted on time with internal approvals",
        "Errors discovered post-filing are addressed through a documented voluntary disclosure process"
      ]
    },
    {
      title: "Records & Governance",
      icon: Archive,
      items: [
        "VAT records are retained for statutory periods",
        "VAT roles and responsibilities are clearly assigned",
        "High-risk expense categories are flagged for review"
      ]
    }
  ];

  const targetAudience = [
    { label: "CFOs and Finance Managers", icon: Users },
    { label: "Manufacturing, Trading, and Service Businesses", icon: Factory },
    { label: "Companies strengthening VAT controls before audit or expansion", icon: Building2 }
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

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <ClipboardCheck className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">VAT Health Checklist (UAE)</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Compliance Hygiene for <br/>
              <span className="text-gradient-gold">Audit Readiness</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Most VAT issues do not arise from the 5% rate. They arise from weak controls, missing documentation, and poor reconciliation discipline.
              <br/><br/>
              This VAT Health Checklist helps UAE businesses confirm that their <strong>baseline VAT framework is structurally sound</strong>, consistent with UAE VAT law and Federal Tax Authority (FTA) expectations.
            </p>
          </div>
        </div>
      </section>

      {/* What This Checklist Covers */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-4">
              What This <span className="text-gradient-gold">Checklist Covers</span>
            </h2>
            <p className="text-muted-foreground">Comprehensive coverage of key compliance areas</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coverageAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <div key={i} className="glass-card rounded-xl p-8 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-serif text-foreground">{area.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {area.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
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

      {/* Who This Is For & How To Use */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Who This Is For */}
            <div>
              <h3 className="text-2xl font-bold font-serif text-foreground mb-8 flex items-center gap-3">
                <Users className="w-6 h-6 text-primary" />
                Who This Is For
              </h3>
              <div className="space-y-4">
                {targetAudience.map((target, i) => {
                  const Icon = target.icon;
                  return (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border/50">
                      <div className="p-2 rounded-md bg-primary/5 text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-foreground/90">{target.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* How to Use */}
            <div>
              <h3 className="text-2xl font-bold font-serif text-foreground mb-8 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-primary" />
                How to Use
              </h3>
              <div className="space-y-6">
                {[
                  "Complete the checklist internally.",
                  "Mark each item as In Place / Needs Attention / Not Applicable.",
                  "Address gaps before they become audit issues."
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <p className="text-lg text-foreground/80 pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="download" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            
            {/* CTA Box */}
            <div className="glass-card rounded-2xl p-8 md:p-12 text-center border-primary/20 relative overflow-hidden order-2 md:order-1">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
              
              <ClipboardCheck className="w-16 h-16 text-primary mx-auto mb-6 opacity-80" />
              
              <h2 className="text-3xl font-bold font-serif text-foreground mb-4">
                Get the VAT Health Checklist
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact our team to receive the comprehensive checklist and expert guidance.
              </p>

              <div className="max-w-sm mx-auto">
                <Link to="/contact" className="w-full btn-gold py-3 text-lg rounded-lg inline-flex items-center justify-center gap-2">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-border/50 text-xs text-muted-foreground">
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
    </Layout>
  );
};

export default VATHealthChecklist;
