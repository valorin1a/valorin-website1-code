import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
  import { 
  BarChart2,
  Briefcase,
  Receipt,
  GitBranch,
  Flame,
  Target,
  Landmark,
  ShieldCheck,
  ChevronDown,
  Globe,
  Award,
  PieChart
} from "lucide-react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const Services = () => {
  const [strategicExpanded, setStrategicExpanded] = useState(true);
  const [taxExpanded, setTaxExpanded] = useState(true);
  const [opsExpanded, setOpsExpanded] = useState(true);

  useEffect(() => {
    updateSEO({
      title: "Professional Financial Advisory Services - VALORIN",
      description: "VALORIN's 9 specialized financial advisory services: Corporate Tax, VAT Governance, Transfer Pricing, Excise Tax, ICV Advisory, Accounting & MIS, ERP Advisory, Banking & Financing, Audit & Risk.",
      canonical: `${SITE_URL}/services`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }, []);

  // Strategic & Financial Leadership
  const strategicServices = [
    {
      icon: Briefcase,
      title: "Fractional CFO",
      description: "Strategic financial leadership on a flexible basis to drive growth and profitability.",
      href: "/services/fractional-cfo",
    },
    {
      icon: PieChart,
      title: "M&A Advisory & Valuation",
      description: "Buy-side/sell-side advisory and independent business valuations (DCF, Multiples).",
      href: "/services/ma-valuation",
    },
    {
      icon: Landmark,
      title: "Banking & Financing",
      description: "Debt restructuring, trade finance, and working capital optimization.",
      href: "/services/banking-financing",
    },
  ];

  // Tax & Regulatory Compliance
  const taxServices = [
    {
      icon: Receipt,
      title: "Corporate Tax Advisory",
      description: "Structuring, filing and FTA engagement support for UAE Corporate Tax compliance.",
      href: "/services/corporate-tax",
    },
    {
      icon: GitBranch,
      title: "VAT Advisory",
      description: "VAT advisory, compliance, refunds and audit defence with FTA expertise.",
      href: "/services/vat-governance",
    },
    {
      icon: Globe,
      title: "Transfer Pricing",
      description: "TP documentation, master/local files, and arm's length strategy support.",
      href: "/services/transfer-pricing",
    },
    {
      icon: Flame,
      title: "Excise Tax Services",
      description: "Registration, product registration, and compliance for excisable goods.",
      href: "/services/excise-tax",
    },
    {
      icon: Award,
      title: "ICV Advisory",
      description: "In-Country Value score improvement and certification support for tenders.",
      href: "/services/icv-advisory",
    },
  ];

  // Operational Excellence & Risk
  const opsServices = [
    {
      icon: BarChart2,
      title: "Finance & MIS Advisory",
      description: "Month-end acceleration, COA design, FP&A model building, and Power BI dashboards.",
      href: "/services/accounting-mis",
    },
    {
      icon: Target,
      title: "ERP Advisory",
      description: "ERP selection, implementation support, and process optimization.",
      href: "/services/erp-advisory",
    },
    {
      icon: ShieldCheck,
      title: "Audit & Risk Advisory",
      description: "Internal audit, risk management frameworks, and compliance assurance.",
      href: "/services/audit-risk",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Our Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Expert <span className="text-gradient-gold">Financial Advisory</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              VALORIN provides comprehensive financial advisory across 9 specialized service areas. 
              Tax compliance, accounting, ERP advisory, banking support, and risk management—all delivered 
              with CFO-level expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Expandable Sections */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-16 text-center">
              Our <span className="text-gradient-gold">Services</span>
            </h2>

            <div className="space-y-6">
              {/* Strategic & Financial Leadership */}
              <div className="glass-card rounded-xl overflow-hidden border border-primary/20">
                <button
                  onClick={() => setStrategicExpanded(!strategicExpanded)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-2xl font-bold font-serif text-gradient-gold flex items-center gap-3">
                    Strategic & Financial Leadership
                    <span className="text-sm text-muted-foreground">({strategicServices.length})</span>
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-primary transition-transform duration-300 ${
                      strategicExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {strategicExpanded && (
                  <div className="border-t border-primary/10 px-8 py-6 space-y-4">
                    {strategicServices.map((service, index) => (
                      <Link
                        key={service.title}
                        to={service.href}
                        className="group p-5 glass-card rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer flex items-start gap-4"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        
                        <div className="flex-grow">
                          <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Tax & Regulatory Compliance */}
              <div className="glass-card rounded-xl overflow-hidden border border-primary/20">
                <button
                  onClick={() => setTaxExpanded(!taxExpanded)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-2xl font-bold font-serif text-gradient-gold flex items-center gap-3">
                    Tax & Regulatory Compliance
                    <span className="text-sm text-muted-foreground">({taxServices.length})</span>
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-primary transition-transform duration-300 ${
                      taxExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {taxExpanded && (
                  <div className="border-t border-primary/10 px-8 py-6 space-y-4">
                    {taxServices.map((service, index) => (
                      <Link
                        key={service.title}
                        to={service.href}
                        className="group p-5 glass-card rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer flex items-start gap-4"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        
                        <div className="flex-grow">
                          <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Operational Excellence & Risk */}
              <div className="glass-card rounded-xl overflow-hidden border border-primary/20">
                <button
                  onClick={() => setOpsExpanded(!opsExpanded)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-2xl font-bold font-serif text-gradient-gold flex items-center gap-3">
                    Operational Excellence & Risk
                    <span className="text-sm text-muted-foreground">({opsServices.length})</span>
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-primary transition-transform duration-300 ${
                      opsExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {opsExpanded && (
                  <div className="border-t border-primary/10 px-8 py-6 space-y-4">
                    {opsServices.map((service, index) => (
                      <Link
                        key={service.title}
                        to={service.href}
                        className="group p-5 glass-card rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer flex items-start gap-4"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        
                        <div className="flex-grow">
                          <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
              Request a <span className="text-gradient-gold">Service Consultation</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-10">
              Discuss your specific financial advisory needs with our expert team.
            </p>
            
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition font-semibold"
            >
              <Briefcase className="w-5 h-5" />
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
