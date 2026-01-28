import { Layout } from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight,
  Calculator,
  BarChart3,
  FileSpreadsheet,
  TrendingUp,
  ShieldAlert,
  Users,
  Briefcase,
  CheckCircle,
  Database,
  PieChart,
  ClipboardList,
  AlertTriangle,
  Layers
} from "lucide-react";
import { useEffect } from "react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const AccountingMISService = () => {
  const navigate = useNavigate();

  useEffect(() => {
    updateSEO({
      title: "Accounting Supervision & MIS Enablement | VALORIN Finance & Advisory",
      description: "CFO-led accounting supervision, budgeting, MIS dashboards, financial modelling and bookkeeping health checks for UAE businesses.",
      canonical: `${SITE_URL}/services/accounting-mis`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }, []);

  const serviceFeatures = [
    {
      title: "Accounting Supervision & Compliance",
      description: "Oversight to ensure accuracy, consistency and regulatory alignment.",
      icon: <Calculator className="w-6 h-6 text-primary" />,
      items: [
        "Review and supervision of accounting records",
        "Support for month-end and year-end close",
        "Alignment with VAT and Corporate Tax requirements"
      ]
    },
    {
      title: "Budgeting & Forecasting Frameworks",
      description: "Structured planning that supports control and growth.",
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      items: [
        "Annual budgets and rolling forecasts",
        "Scenario and sensitivity analysis",
        "Cash flow and working capital projections"
      ]
    },
    {
      title: "Part-Time & On-Demand Bookkeeping",
      description: "Flexible support without building full in-house teams.",
      icon: <ClipboardList className="w-6 h-6 text-primary" />,
      items: [
        "Periodic bookkeeping support",
        "Review and correction of existing books",
        "Coverage during staff transitions"
      ]
    },
    {
      title: "MIS Dashboards & Financial Modelling",
      description: "Turning accounting data into management insight.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      items: [
        "Custom MIS reports for owners and management",
        "Profitability, cost and trend analysis",
        "Models to support investment and pricing decisions"
      ]
    },
    {
      title: "Bookkeeping Health Check Reports",
      description: "Independent assessment of accounting quality and risk.",
      icon: <ShieldAlert className="w-6 h-6 text-primary" />,
      items: [
        "Review of documentation, controls and cut-offs",
        "Identification of errors and compliance gaps",
        "Actionable remediation recommendations"
      ]
    },
    {
      title: "Training & Supervision of Accounting Teams",
      description: "Building internal capability without loss of control.",
      icon: <Users className="w-6 h-6 text-primary" />,
      items: [
        "On-the-job supervision",
        "Process improvement guidance",
        "Skill upgradation aligned with business needs"
      ]
    }
  ];

  const riskAreas = [
    "Manual processes with weak controls",
    "ERP outputs not aligned with management needs",
    "Inconsistent treatment of costs and revenues",
    "Lack of documented accounting policies",
    "Over-dependence on individuals instead of systems"
  ];

  const engagementSteps = [
    {
      step: "Step 1",
      title: "Accounting & MIS Review",
      description: "Assess current processes, reports and control environment."
    },
    {
      step: "Step 2",
      title: "Framework Design",
      description: "Define reporting, budgeting and data requirements."
    },
    {
      step: "Step 3",
      title: "Implementation & Supervision",
      description: "Embed systems, supervise teams and refine outputs."
    }
  ];

  const targetAudience = [
    {
      title: "Growing Businesses",
      description: "Companies outgrowing basic bookkeeping and Excel-based reporting.",
      icon: <TrendingUp className="w-6 h-6 text-primary" />
    },
    {
      title: "Owner-Managed Enterprises",
      description: "Businesses where owners need clarity without operational overload.",
      icon: <Users className="w-6 h-6 text-primary" />
    },
    {
      title: "Finance Teams Under Transition",
      description: "Organisations with new systems, staff changes or audit pressure.",
      icon: <ClipboardList className="w-6 h-6 text-primary" />
    }
  ];

  const integratedServices = [
    "Fractional CFO Leadership",
    "VAT and Corporate Tax compliance",
    "ERP implementation advisory",
    "Banking and financing support"
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
              <FileSpreadsheet className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Accounting & MIS</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Accounting & MIS <span className="text-gradient-gold">Enablement</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              Reliable decisions require reliable numbers. <br className="hidden md:block" />
              Accounting is not just about compliance — it is the foundation of cash control, tax accuracy and strategic insight.
              <br/><br/>
              VALORIN Finance & Advisory delivers CFO-led accounting supervision and MIS enablement to transform raw data into decision-ready financial intelligence.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button onClick={() => navigate('/contact')} className="btn-gold">
                Book an Accounting & MIS Consultation
              </button>
              <span className="text-xs text-muted-foreground italic">*NDA available on request*</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Accounting Fails */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6">
              Why Accounting Often Fails as a <span className="text-gradient-gold">Decision Tool</span>
            </h2>
            <div className="glass-card p-8 rounded-xl mb-8">
              <p className="text-lg text-foreground mb-6 font-medium">
                Many businesses maintain books, yet still face:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                {[
                  "Conflicting versions of financial reports",
                  "Delays in closing and reporting",
                  "Weak link between operations and financial outcomes",
                  "Numbers that satisfy auditors but not management"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-foreground font-medium mt-8 pt-6 border-t border-white/5">
                This happens when accounting is treated as a clerical function rather than a managed financial system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full" />
      </div>

      {/* Services Grid */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-12 text-center">
            VALORIN Accounting & MIS <span className="text-gradient-gold">Services</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {serviceFeatures.map((item, index) => (
              <div key={index} className="glass-card rounded-xl p-8 hover:border-primary/30 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold font-serif text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 text-sm flex-grow">{item.description}</p>
                <ul className="space-y-3 mt-auto">
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

      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full" />
      </div>

      {/* MIS as Backbone */}
      <section className="py-12 md:py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-6">
              MIS as the Backbone of CFO, Tax & ERP Functions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Effective MIS sits at the centre of:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-8">
              {[
                "Corporate Tax accuracy and add-back discipline",
                "VAT compliance and audit defence",
                "Transfer Pricing documentation and consistency",
                "ERP integrity and data reliability"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-muted-foreground">
              Without structured MIS, compliance risks increase and decision-making weakens.
            </p>
          </div>
        </div>
      </section>

      {/* Risk Areas */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
              Common Accounting & MIS <span className="text-gradient-gold">Risks We See</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {riskAreas.map((risk, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background border border-destructive/20 hover:border-destructive/40 transition-colors group">
                  <AlertTriangle className="w-5 h-5 text-destructive/60 group-hover:text-destructive transition-colors mt-0.5" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{risk}</span>
                </div>
              ))}
            </div>
            
            <p className="text-center text-muted-foreground mt-8">
              These risks compound over time if not addressed early.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full" />
      </div>

      {/* Who This Is For */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
            Who This Service Is <span className="text-gradient-gold">Designed For</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {targetAudience.map((item, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
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
              <div key={index} className="relative p-6 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connection to Other Services */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-4">
                A Platform for <span className="text-gradient-gold">Scalable Advisory</span>
              </h2>
              <p className="text-muted-foreground">
                Most clients combine Accounting & MIS enablement with:
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
              {integratedServices.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Layers className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
            
            <p className="text-center text-sm text-muted-foreground italic">
              This integrated approach ensures numbers remain accurate, relevant and actionable.
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
              Turn Your Numbers into Decisions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              If your reports do not support confident decisions, change the system behind them.
            </p>
            
            <button onClick={() => navigate('/contact')} className="btn-gold inline-flex items-center justify-center gap-2">
              <FileSpreadsheet className="w-5 h-5" />
              Speak to an Accounting & MIS Advisor
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AccountingMISService;
