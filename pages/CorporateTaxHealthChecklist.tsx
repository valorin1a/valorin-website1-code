import { Layout } from "@/components/layout/Layout";
import { useNavigate, Link } from "react-router-dom";
import { 
  ClipboardCheck, 
  FileCheck, 
  Calculator, 
  TrendingUp, 
  Network, 
  FileText,
  ShieldCheck,
  ArrowRight,
  CheckSquare
} from "lucide-react";
import { useEffect } from "react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const CorporateTaxHealthChecklist = () => {
  useEffect(() => {
    updateSEO({
      title: "Corporate Tax Health Checklist (UAE) | Filing Readiness",
      description: "Confirm whether your Corporate Tax computation is structured, supported, and filing-ready under UAE Corporate Tax law.",
      canonical: `${SITE_URL}/advisory-tools/corporate-tax-health-checklist`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
      keywords: "UAE Corporate Tax Checklist, CT Filing Readiness, Tax Health Check",
    });
  }, []);

  const healthAreas = [
    {
      id: "A",
      title: "Computation Structure",
      icon: FileText,
      items: [
        "Accounting profit (PBT) reconciles to finalized financial statements",
        "Clear bridge exists from PBT to taxable income",
        "Adjustments are supported with schedules and explanations",
        "Tax period and filing timelines are clearly identified"
      ]
    },
    {
      id: "B",
      title: "Add-Back & Deductibility Discipline",
      icon: Calculator,
      items: [
        "Fines and penalties are excluded from deduction",
        "Personal or owner-related expenses are segregated",
        "Non-business expenses are identified and added back",
        "Customer entertainment expenses are tracked separately"
      ]
    },
    {
      id: "C",
      title: "Losses & Elections",
      icon: TrendingUp,
      items: [
        "Tax losses carried forward are tracked with documentation",
        "Loss utilization rules are understood and applied correctly",
        "Relevant elections are identified and documented"
      ]
    },
    {
      id: "D",
      title: "Related Parties & Governance",
      icon: Network,
      items: [
        "Related party transactions are identified and listed",
        "Intercompany agreements are in place",
        "Pricing rationale or benchmarking exists where required",
        "Management approvals support sensitive transactions"
      ]
    },
    {
      id: "E",
      title: "Evidence & Audit Trail",
      icon: FileCheck,
      items: [
        "Contracts and invoices support revenue classification",
        "Key judgments are documented",
        "Computation assumptions are traceable and reviewable"
      ]
    }
  ];

  const readinessLevels = [
    { label: "Filing-ready", color: "bg-emerald-500/20 text-emerald-500 border-emerald-500/30" },
    { label: "Minor gaps identified", color: "bg-amber-500/20 text-amber-500 border-amber-500/30" },
    { label: "Significant gaps – review required", color: "bg-red-500/20 text-red-500 border-red-500/30" }
  ];

  const navigate = useNavigate();

  return (
    <Layout>
      {/* Executive Header */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <button 
                onClick={() => navigate(-1)} 
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background/80 border border-border/50 hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 backdrop-blur-sm shadow-sm"
              >
                <ArrowRight className="w-4 h-4 rotate-180 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Back to Tax Center</span>
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 flex items-center justify-center border border-amber-500/20 shadow-xl shadow-amber-500/5 shrink-0 backdrop-blur-sm">
                <ClipboardCheck className="w-10 h-10 text-amber-500" />
              </div>
              
              <div className="flex-1 space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground leading-tight">
                  Corporate Tax <span className="text-gradient-gold">Health Checklist</span>
                </h1>
                <div className="flex items-center gap-3 text-lg text-muted-foreground">
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-xs font-bold uppercase tracking-wider border border-amber-500/20">
                    UAE Compliance
                  </span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="font-medium">Filing Readiness & Computation Discipline</span>
                </div>
                
                <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                  This executive diagnostic confirms whether your Corporate Tax computation is <strong>structured, supported, and filing-ready</strong>. Use this tool to identify documentation gaps before submission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Content */}
      <section className="py-12 md:py-20 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            
            {healthAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <div key={i} className="bg-card border border-border/60 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Section Header */}
                  <div className="p-6 md:p-8 border-b border-border/60 bg-gradient-to-r from-card to-muted/30 flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center shadow-sm shrink-0">
                      <span className="text-lg font-bold font-serif text-amber-500">{area.id}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-serif text-foreground mb-1">{area.title}</h3>
                    </div>
                  </div>

                  {/* Checklist Items */}
                  <div className="p-6 md:p-8 bg-card/50">
                    <div className="space-y-4">
                      {area.items.map((item, j) => (
                        <label key={j} className="flex items-start gap-4 p-4 rounded-lg border border-transparent hover:border-border hover:bg-muted/30 transition-all cursor-pointer group">
                          <div className="relative flex items-center justify-center shrink-0 mt-0.5">
                            <input type="checkbox" className="peer w-5 h-5 appearance-none border-2 border-muted-foreground/30 rounded-md checked:bg-amber-500 checked:border-amber-500 transition-colors" />
                            <CheckSquare className="w-3.5 h-3.5 text-white absolute opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" strokeWidth={3} />
                          </div>
                          <span className="text-foreground/80 group-hover:text-foreground transition-colors leading-relaxed font-medium">
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Assessment Scorecard */}
      <section className="py-12 md:py-20 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">
                  Overall Readiness Assessment
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-4 relative z-10">
                {readinessLevels.map((level, i) => (
                  <button key={i} className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex flex-col items-center justify-center gap-3 text-center ${level.color}`}>
                    <div className="w-4 h-4 rounded-full bg-current shadow-[0_0_10px_currentColor]" />
                    <span className="font-semibold">{level.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Professional Health Check?</h2>
          <div className="flex justify-center mt-8">
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2 px-8 py-3 text-lg">
              Book a Health Check
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Professional Footer / Disclaimer */}
      <section className="py-12 md:py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
             <div className="flex items-center justify-center gap-2 text-primary font-semibold">
               <ShieldCheck className="w-4 h-4" />
               <span>Confidentiality Note</span>
             </div>
             
             <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
               All CT reviews are conducted on a strict NDA basis.
             </p>

             <p className="text-muted-foreground/70 text-xs italic max-w-2xl mx-auto pt-4 border-t border-border/50">
               <strong>Disclaimer:</strong> This checklist is for general information only and does not constitute tax advice.
             </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CorporateTaxHealthChecklist;
