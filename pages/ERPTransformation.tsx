import { Layout } from "@/components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { Cpu, ArrowRight, CheckCircle, Database, Users, Settings } from "lucide-react";
import { useEffect } from "react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";
import { trackEvent } from "@/lib/analytics";

const ERPTransformation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    updateSEO({
      title: "ERP Licensing & Implementation Advisory | VALORIN Finance & Advisory",
      description:
        "CFO-led ERP licensing and implementation advisory covering system selection, partner evaluation and business-side functional consulting to ensure ERP success.",
      canonical: `${SITE_URL}/services/erp`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }, []);

  return (
    <Layout>
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
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">ERP Advisory</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              ERP Licensing & Implementation <span className="text-gradient-gold">Advisory</span>
            </h1>
            <div className="space-y-4 text-lg text-muted-foreground max-w-3xl">
              <p>ERP failures rarely originate from technology.</p>
              <p>They fail due to weak business design, poor ownership and misalignment between finance, operations and systems.</p>
              <p>
                VALORIN Finance & Advisory provides CFO-led ERP advisory to ensure systems are selected, implemented and governed to
                support reporting, compliance and growth.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="/contact"
                className="btn-gold inline-flex items-center justify-center gap-2"
                onClick={() => trackEvent("erp_service_footer_cta")}
              >
                Book an ERP Advisory Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-muted-foreground italic">*NDA available on request*</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
              Why <span className="text-gradient-gold">ERP Projects Fail</span>
            </h2>
            <div className="glass-card rounded-xl p-8">
              <div className="space-y-3 text-muted-foreground">
                <p>• Selecting systems without business-led evaluation</p>
                <p>• Over-reliance on technical implementation partners</p>
                <p>• Poor definition of reporting, controls and workflows</p>
                <p>• Finance, tax and operations treated as afterthoughts</p>
                <p>• Lack of ownership from senior management</p>
              </div>
              <p className="text-foreground mt-6">
                ERP success requires strong finance leadership at the core — not just IT execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-8">
              VALORIN ERP <span className="text-gradient-gold">Advisory Services</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card rounded-xl p-8 flex flex-col h-full text-center">
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Database className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 min-h-[3.5rem] flex items-center justify-center">ERP Product Licensing Facilitation</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  Support in selecting appropriate ERP solutions aligned with business scale and complexity.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mt-auto text-left mx-auto max-w-xs w-full">
                  <li>• ERP needs assessment from a business perspective</li>
                  <li>• Comparison of ERP options (finance, operations, reporting)</li>
                  <li>• Independent support during licensing discussions</li>
                </ul>
              </div>
              
              <div className="glass-card rounded-xl p-8 flex flex-col h-full text-center">
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 min-h-[3.5rem] flex items-center justify-center">Implementation Partner Evaluation</h3>
                <p className="text-muted-foreground mb-4 flex-grow">Objective assessment of implementation partners before engagement.</p>
                <ul className="space-y-2 text-sm text-muted-foreground mt-auto text-left mx-auto max-w-xs w-full">
                  <li>• Review of partner capability and approach</li>
                  <li>• Evaluation of proposed implementation scope and timelines</li>
                  <li>• Risk identification before project launch</li>
                </ul>
              </div>
              
              <div className="glass-card rounded-xl p-8 flex flex-col h-full text-center">
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Settings className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 min-h-[3.5rem] flex items-center justify-center">Business-Side Functional Consulting</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  CFO-led oversight during implementation to protect business outcomes.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mt-auto text-left mx-auto max-w-xs w-full">
                  <li>• Design of finance, cost, inventory and reporting structures</li>
                  <li>• Alignment with VAT, Corporate Tax and audit requirements</li>
                  <li>• Translation of business needs into system logic</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
              ERP as the Foundation for <span className="text-gradient-gold">Finance, Tax & Decisions</span>
            </h2>
            <div className="glass-card rounded-xl p-8">
              <div className="space-y-3 text-muted-foreground">
                <p>• Financial reporting and MIS accuracy</p>
                <p>• VAT and Corporate Tax compliance</p>
                <p>• Transfer Pricing data consistency</p>
                <p>• Budgeting, forecasting and cash visibility</p>
              </div>
              <p className="text-foreground mt-6">
                ERP design mistakes often cascade into compliance issues and management blind spots.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
              Common <span className="text-gradient-gold">ERP Risks</span> We See
            </h2>
            <div className="glass-card rounded-xl p-8">
              <div className="space-y-3 text-muted-foreground">
                <p>• Generic chart of accounts not aligned to management and Compline needs</p>
                <p>• Inadequate documentation of processes and controls</p>
                <p>• Poor data migration and opening balances</p>
                <p>• Manual workarounds replacing system controls</p>
                <p>• Reports that satisfy auditors but not decision-makers</p>
              </div>
              <p className="text-foreground mt-6">
                These risks usually surface after go-live — when correction becomes expensive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Service Is Designed For */}
      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
              Who This Service Is <span className="text-gradient-gold">Designed For</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Growing Businesses</h3>
                <p className="text-sm text-muted-foreground">
                  Companies upgrading from spreadsheets or basic accounting systems.
                </p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">ERP Replacements or Upgrades</h3>
                <p className="text-sm text-muted-foreground">
                  Organisations transitioning to new systems or modules.
                </p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Groups & Multi-Entity Structures</h3>
                <p className="text-sm text-muted-foreground">
                  Businesses needing consistent data across entities and locations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-8">How We Engage</h2>
            <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 glass-card rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center mb-3">
                  <span className="text-sm font-bold text-black">1</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">ERP Readiness Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  Understand current systems, pain points and reporting needs.
                </p>
              </div>
              <div className="flex-1 glass-card rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center mb-3">
                  <span className="text-sm font-bold text-black">2</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Design & Partner Support</h3>
                <p className="text-sm text-muted-foreground">
                  Support selection of ERP system and implementation approach.
                </p>
              </div>
              <div className="flex-1 glass-card rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center mb-3">
                  <span className="text-sm font-bold text-black">3</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Implementation Oversight</h3>
                <p className="text-sm text-muted-foreground">
                  Business-side supervision to ensure outcomes align with objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
              Integrated with VALORIN <span className="text-gradient-gold">Advisory Services</span>
            </h2>
            <div className="glass-card rounded-xl p-8">
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  • <Link to="/services/accounting-mis" className="text-primary hover:underline">Accounting & MIS enablement</Link>
                </p>
                <p>
                  •{" "}
                  <Link to="/services/vat-governance" className="text-primary hover:underline">
                    VAT
                  </Link>{" "}
                  and{" "}
                  <Link to="/services/corporate-tax" className="text-primary hover:underline">
                    Corporate Tax
                  </Link>{" "}
                  structuring
                </p>
                <p>
                  • <Link to="/services/fractional-cfo" className="text-primary hover:underline">Fractional CFO Leadership</Link>
                </p>
                <p>
                  • <Link to="/services/banking-financing" className="text-primary hover:underline">Banking and financing readiness</Link>
                </p>
              </div>
              <p className="text-foreground mt-6">This ensures systems support strategy — not constrain it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-4">Get ERP Right Before Implementation Begins</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Correcting ERP mistakes after go-live is costly and disruptive.
            </p>
            <a
              href="/contact"
              className="btn-gold inline-flex items-center gap-2"
              onClick={() => trackEvent("erp_service_footer_cta")}
            >
              Speak to an ERP Advisory Specialist
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-muted-foreground italic mt-4">*NDA available on request*</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ERPTransformation;
