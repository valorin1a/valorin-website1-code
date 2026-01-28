import { Layout } from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { 
  TrendingUp, 
  ArrowRight, 
  CheckCircle, 
  Target, 
  Users, 
  DollarSign,
  PieChart,
  Briefcase,
  Layers,
  Scale
} from "lucide-react";
import { useEffect } from "react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const MAValuation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    updateSEO({
      title: "M&A Advisory & Business Valuation | VALORIN Finance & Advisory",
      description: "Buy-side and sell-side M&A advisory, due diligence, and independent business valuations (DCF, Multiples) for UAE transactions.",
      canonical: `${SITE_URL}/services/ma-valuation`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }, []);

  const services = [
    {
      title: "Buy-Side Advisory",
      description: "Target identification, due diligence, valuation modeling, and deal structuring for acquisitions.",
      icon: Target
    },
    {
      title: "Sell-Side Preparation",
      description: "Financial clean-up, VDD readiness, Information Memorandum preparation, and buyer negotiation support.",
      icon: Users
    },
    {
      title: "Business Valuation",
      description: "DCF, market multiples, and precedent transaction analysis for fair market value opinions.",
      icon: DollarSign
    }
  ];

  const dueDiligenceChecklist = [
    "Quality of Earnings (QoE) Analysis",
    "Normalized EBITDA Adjustments",
    "Working Capital Requirements",
    "Net Debt Calculation",
    "Revenue Recognition & Sustainability",
    "Customer Concentration Risk",
    "Supplier Dependency Analysis",
    "Contingent Liabilities Review",
    "Tax Compliance & Exposure Assessment",
    "Post-Acquisition Integration Planning"
  ];

  const valuationMethods = [
    {
      title: "Discounted Cash Flow (DCF)",
      description: "Five-year projection model with terminal value calculation using WACC (Weighted Average Cost of Capital). Includes sensitivity analysis on key assumptions like revenue growth, EBITDA margins, and discount rates.",
      bestFor: "Mature businesses with predictable cashflows"
    },
    {
      title: "Market Multiples",
      description: "Comparable company analysis using EV/EBITDA, EV/Revenue, and P/E multiples from publicly traded peers or private market transactions. Adjusted for size, growth, and risk premiums.",
      bestFor: "Companies in active M&A sectors"
    },
    {
      title: "Asset-Based Valuation",
      description: "Net Asset Value (NAV) calculation with adjustments for fair market value of tangible and intangible assets. Includes real estate revaluation, inventory obsolescence, and goodwill impairment testing.",
      bestFor: "Asset-heavy businesses or liquidation scenarios"
    }
  ];

  const integratedServices = [
    "Corporate Tax Structuring",
    "Financial Due Diligence",
    "Banking & Finance Advisory",
    "Post-Merger Integration"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
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
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">M&A & Valuation</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              M&A Advisory & <br/>
              <span className="text-gradient-gold">Business Valuation</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              Whether acquiring, selling, or raising capital, you need credible, defensible valuations and rigorous 
              due diligence. 
              <br/><br/>
              VALORIN delivers CFO-grade financial analysis, protecting deal integrity and maximizing 
              value for both buyers and sellers in the UAE M&A market.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button onClick={() => navigate('/contact')} className="btn-gold">
                Schedule a Deal Consultation
              </button>
              <span className="text-xs text-muted-foreground italic">*NDA available on request*</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-12 text-center">
            Core M&A <span className="text-gradient-gold">Services</span>
          </h2>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="glass-card rounded-xl p-8 text-center hover:border-primary/30 transition-colors">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Due Diligence Checklist */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-4 text-center">
              Financial Due Diligence <span className="text-gradient-gold">Checklist</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Comprehensive review areas we cover in every M&A transaction to uncover risks and validate value.
            </p>
            
            <div className="glass-card rounded-xl p-8 bg-background/50">
              <div className="grid md:grid-cols-2 gap-4">
                {dueDiligenceChecklist.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border/50 hover:border-primary/30 transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valuation Methodologies */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
            Valuation <span className="text-gradient-gold">Methodologies</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {valuationMethods.map((method, index) => (
              <div key={index} className="glass-card rounded-xl p-8 hover:border-primary/30 transition-all flex flex-col h-full">
                <h3 className="text-xl font-bold font-serif text-foreground mb-3">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-grow">
                  {method.description}
                </p>
                <div className="mt-auto pt-4 border-t border-white/5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <Scale className="w-3 h-3 text-primary" />
                    <span className="text-xs text-primary font-medium">{method.bestFor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Example */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
              Success Story: <span className="text-gradient-gold">Value Protection</span>
            </h2>
            
            <div className="glass-card rounded-xl p-8 bg-background/50 border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="mb-8 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Services Sector Acquisition</h3>
                </div>
                <p className="text-sm text-muted-foreground italic">Buy-Side Financial Due Diligence</p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-8 relative z-10">
                A regional investor approached us to conduct financial due diligence on a target services company 
                with reported EBITDA of AED 15M. Our Quality of Earnings analysis uncovered AED 3.2M of non-recurring 
                revenue and AED 1.8M of understated expenses, resulting in a normalized EBITDA of AED 10M.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8 relative z-10">
                <div className="p-6 bg-background rounded-lg text-center border border-border shadow-sm">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Reported EBITDA</p>
                  <p className="text-2xl font-bold font-serif text-foreground">AED 15M</p>
                </div>
                <div className="p-6 bg-background rounded-lg text-center border border-primary/30 shadow-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5" />
                  <p className="text-xs text-primary uppercase tracking-wider mb-2 relative z-10">Normalized EBITDA</p>
                  <p className="text-2xl font-bold font-serif text-gradient-gold relative z-10">AED 10M</p>
                </div>
                <div className="p-6 bg-background rounded-lg text-center border border-border shadow-sm">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Value Saved</p>
                  <p className="text-2xl font-bold font-serif text-primary">AED 30M+</p>
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 relative z-10">
                <p className="text-sm text-primary font-medium mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" /> Impact
                </p>
                <p className="text-muted-foreground text-sm">
                  Using a 6x EBITDA multiple, this adjustment prevented overpayment of approximately AED 30M 
                  (AED 5M × 6). The client renegotiated the purchase price, saving millions and securing a fair deal.
                </p>
              </div>
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
                Successful transactions require more than just valuation:
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
              We ensure every angle of the deal is covered, from tax to post-merger integration.
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
              Discuss Your Transaction
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Secure a confidential consultation to discuss your acquisition, sale, or valuation requirements.
            </p>
            
            <button onClick={() => navigate('/contact')} className="btn-gold inline-flex items-center gap-2">
              <PieChart className="w-5 h-5" />
              Schedule a Confidential Call
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MAValuation;
