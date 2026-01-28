import { useEffect } from "react";
import type { ComponentType } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { 
  FileText, 
  Calculator, 
  ClipboardCheck, 
  ShieldAlert, 
  ArrowRight, 
  CheckCircle2,
  BookOpen,
  PlayCircle
} from "lucide-react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const VATHub = () => {
  useEffect(() => {
    updateSEO({
      title: "VAT Advisory Services | VALORIN",
      description: "Expert VAT advisory services, knowledge content, calculators, and health checklists.",
      canonical: `${SITE_URL}/tax-center/vat`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
      keywords: "VAT Advisory, UAE VAT, VAT Calculator, VAT Health Check, VAT Risk Assessment",
    });
  }, []);

  interface Feature {
    title: string;
    description: string;
    icon: ComponentType<{ className?: string }>;
    action: string;
    href: string;
    color: string;
    bg: string;
    borderColor: string;
    isLocked?: boolean;
  }

  const features: Feature[] = [
    {
      title: "Knowledge Hub",
      description: "Deep-dive articles on input recovery, partial exemption, and FTA audit protocols.",
      icon: BookOpen,
      action: "Explore Guides",
      href: "/tax-center/vat/knowledge-hub",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      borderColor: "hover:border-blue-500/50"
    },
    {
      title: "VAT Calculator",
      description: "Precise liability estimation including reverse charge and apportionment rules.",
      icon: Calculator,
      action: "Launch Tool",
      href: "/tax-center/vat-calculator",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      borderColor: "hover:border-emerald-500/50"
    },
    {
      title: "Health Checklist",
      description: "10-point diagnostic to assess your baseline VAT compliance and reporting hygiene.",
      icon: ClipboardCheck,
      action: "Start Assessment",
      href: "/advisory-tools/vat-health-checklist",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      borderColor: "hover:border-amber-500/50"
    },
    {
      title: "Risk Radar",
      description: "Identify high-impact triggers like intercompany transactions and zero-rating risks.",
      icon: ShieldAlert,
      action: "Check Risks",
      href: "/tax-center/vat/risk-radar",
      color: "text-red-500",
      bg: "bg-red-500/10",
      borderColor: "hover:border-red-500/50"
    }
  ];

  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark z-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-50 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            {/* Back Button */}
            <div className="flex justify-start mb-8">
              <button 
                onClick={() => navigate(-1)} 
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline bg-background/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Go Back
              </button>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-xs text-primary font-medium tracking-wide uppercase">VAT Advisory & Compliance</span>
            </div>
            
            <h1 className="text-3xl md:text-6xl font-bold font-serif text-foreground mb-6 leading-tight">
              Master Your <br />
              <span className="text-gradient-gold">VAT Position</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Moving beyond basic filing to strategic optimization. Leverage our 8 years of tax expertise to navigate audits, refunds, and complex transaction structures with absolute confidence.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold text-base px-8 py-3 rounded-lg">
                Book a Consultation
              </Link>
              <a href="#tools" className="btn-outline text-base px-8 py-3 rounded-lg bg-background/5 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Explore Tools
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Ecosystem Grid */}
      <section id="tools" className="py-12 md:py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
              Comprehensive <span className="text-gradient-gold">VAT Ecosystem</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              A complete suite of advisory tools designed for CFOs and Tax Managers to ensure compliance and optimize cash flow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Link 
                  key={idx}
                  to={feature.href}
                  className={`group relative overflow-hidden rounded-xl p-6 border border-border/50 bg-card hover:bg-muted/50 transition-all duration-300 ${feature.borderColor} hover:shadow-lg`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-lg ${feature.bg} ${feature.color} transition-transform group-hover:scale-110 duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {feature.isLocked ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-muted text-[10px] font-medium text-muted-foreground border border-border">
                        Premium
                      </span>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-background transition-colors -rotate-45 group-hover:rotate-0 duration-300" />
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold font-serif text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
                    {feature.action}
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expert Insight Strip */}
      <section className="py-12 md:py-20 border-y border-border/50 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-primary rounded-full" />
                <span className="text-primary font-medium tracking-wider uppercase">Why Expert Advisory Matters</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
                Most VAT Errors Are <br/>
                <span className="text-gradient-gold">Structurally Preventable</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                In our 8 years of experience, we've seen that 80% of VAT penalties stem not from calculation errors, but from incorrect transaction mapping and documentation gaps. Our advisory approach fixes the root cause.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Audit-proof documentation frameworks",
                  "Complex transaction mapping (Free Zones, Exports)",
                  "Refund optimization and cash flow timing",
                  "Dispute resolution and FTA correspondence"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-2xl" />
              <div className="glass-card rounded-2xl p-8 md:p-12 relative border-primary/20">
                <FileText className="w-12 h-12 text-primary mb-6" />
                <blockquote className="text-xl md:text-2xl font-serif italic text-foreground mb-6 leading-relaxed">
                  "Tax compliance is not just about paying what you owe. It's about knowing exactly why you owe it, and ensuring you don't pay a dirham more than necessary due to inefficiency."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <span className="font-bold text-black">V</span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">VALORIN Advisory Team</div>
                    <div className="text-sm text-muted-foreground">Expert Tax Consultants</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 bg-gradient-dark text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-8">
            Ready to Secure Your <span className="text-gradient-gold">Tax Position?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Schedule a confidential discovery call with our senior tax advisors to discuss your specific challenges.
          </p>
          <Link to="/contact" className="btn-gold text-lg px-10 py-4 shadow-lg shadow-primary/20">
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default VATHub;
