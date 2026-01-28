import { Layout } from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  FileCheck, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle, 
  AlertTriangle, 
  Briefcase, 
  Award,
  Users
} from "lucide-react";
import { useEffect } from "react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const ICVAdvisoryService = () => {
  const navigate = useNavigate();

  useEffect(() => {
    updateSEO({
      title: "ICV Certification & Advisory Services | VALORIN Finance & Advisory",
      description: "CFO-led ICV certification, improvement roadmap, policies and advisory support to enhance In-Country Value scores and procurement competitiveness in the UAE.",
      canonical: `${SITE_URL}/services/icv-advisory`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }, []);

  const icvServices = [
    {
      title: "ICV Certification Execution",
      description: "End-to-end support for obtaining an approved ICV certificate.",
      icon: <FileCheck className="w-6 h-6 text-primary" />,
      items: [
        "Review of financial statements and cost structure",
        "Alignment with accredited ICV certifying bodies",
        "Support through certification process and queries"
      ]
    },
    {
      title: "ICV Improvement Roadmap",
      description: "A structured plan to improve ICV scores over time.",
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      items: [
        "Analysis of current ICV drivers and gaps",
        "Local spend, workforce and asset optimisation strategies",
        "Medium-term improvement targets aligned with business plans"
      ]
    },
    {
      title: "ICV Policies & Standard Operating Procedures",
      description: "Embedding ICV into everyday operations.",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      items: [
        "Procurement and vendor policies",
        "Emiratisation and workforce documentation alignment",
        "Capital expenditure and localisation frameworks"
      ]
    },
    {
      title: "Ongoing ICV Advisory & Support",
      description: "Continuous guidance as operations evolve.",
      icon: <Users className="w-6 h-6 text-primary" />,
      items: [
        "Support during tender periods",
        "Scenario analysis for major contracts",
        "Alignment with finance, ERP and reporting systems"
      ]
    }
  ];

  const engagementSteps = [
    {
      step: "Step 1",
      title: "ICV Assessment",
      description: "Review of financial data, cost drivers and current score."
    },
    {
      step: "Step 2",
      title: "Certification or Improvement Plan",
      description: "Certification support or structured roadmap depending on objectives."
    },
    {
      step: "Step 3",
      title: "Implementation & Advisory",
      description: "Ongoing support to improve and maintain ICV positioning."
    }
  ];

  const commonChallenges = [
    "Treating ICV as a one-time certification exercise",
    "Misclassification of local vs non-local spend",
    "Inconsistent financial data used for certification",
    "Misalignment between operations and reported ICV data",
    "Lack of documented ICV policies and controls"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-6">
              <button 
                onClick={() => navigate(-1)} 
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline bg-card/50 px-4 py-2 rounded-full backdrop-blur-sm border border-border hover:border-primary/30 transition-all"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Go Back
              </button>
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">National In-Country Value (ICV)</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              ICV Advisory & <span className="text-primary">Certification</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              ICV is no longer just a compliance metric. It is a strategic lever that directly affects eligibility, tender outcomes and long-term growth in the UAE.
              <br/><br/>
              VALORIN Finance & Advisory provides CFO-led ICV advisory and certification support to help businesses build, present and improve their In-Country Value profile.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button 
                onClick={() => navigate('/contact')} 
                className="btn-gold w-full sm:w-auto text-center justify-center"
                data-analytics="icv_service_consultation"
              >
                Book an ICV Consultation
              </button>
              <span className="text-xs text-muted-foreground italic">*NDA available on request*</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why ICV Matters */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6">
              Why ICV <span className="text-gradient-gold">Matters</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground mb-8">
                ICV scores play a critical role in procurement decisions across:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-8">
                {[
                  "Federal and local government entities",
                  "Semi-government organisations",
                  "ADNOC and related procurement ecosystems",
                  "Strategic infrastructure, industrial and energy projects"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground font-medium">
                A low or poorly structured ICV score can disqualify otherwise capable businesses from competitive tenders. ICV therefore requires strategic financial planning – not last-minute certification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Single Column */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-12 text-center">
            VALORIN ICV <span className="text-gradient-gold">Services</span>
          </h2>
          
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {icvServices.map((service, index) => (
              <div key={index} className="glass-card rounded-xl p-8 hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="mb-4 md:mb-0 p-3 bg-primary/10 rounded-lg w-fit h-fit flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold font-serif text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6 text-center">
              Common ICV <span className="text-gradient-gold">Challenges We See</span>
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Businesses often struggle with:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {commonChallenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors h-full">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                  <span className="text-muted-foreground">{challenge}</span>
                </div>
              ))}
            </div>
            
            <p className="text-center text-muted-foreground">
              These gaps reduce scores and credibility during procurement reviews.
            </p>
          </div>
        </div>
      </section>

      {/* CFO Connection */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-8">
              ICV Requires <span className="text-gradient-gold">CFO-Level Coordination</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Effective ICV improvement depends on:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-8">
              {[
                "Reliable financial data",
                "Procurement and payroll integration",
                "Capital expenditure planning",
                "ERP and reporting discipline"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground font-medium">
              VALORIN’s CFO-led approach ensures ICV is integrated into financial planning – not treated as an isolated certificate.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
            Who This Service Is <span className="text-gradient-gold">Designed For</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { 
                title: "Government & Semi-Government Contractors", 
                desc: "Businesses participating in public procurement and tenders." 
              },
              { 
                title: "Industrial & Infrastructure Companies", 
                desc: "Manufacturing, construction and energy-linked businesses." 
              },
              { 
                title: "Growing UAE Businesses", 
                desc: "Companies seeking to improve eligibility and competitiveness over time." 
              }
            ].map((item, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all h-full flex flex-col">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 min-h-[3.5rem] flex items-center justify-center">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
            How We <span className="text-gradient-gold">Engage</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {engagementSteps.map((step, index) => (
              <div key={index} className="relative p-6 rounded-xl border border-primary/20 bg-background/50 h-full flex flex-col">
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-3 min-h-[3.5rem] flex items-center">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center glass-card p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6">
              Strengthen Your ICV Position Before the Tender Stage
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Early ICV planning improves outcomes – not reactions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => navigate('/contact')} 
                className="btn-gold inline-flex items-center gap-2"
                data-analytics="icv_service_footer_cta"
              >
                <FileCheck className="w-5 h-5" />
                Speak to an ICV Advisor
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">*NDA available on request*</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ICVAdvisoryService;
