import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Factory, ShoppingCart, Briefcase, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Costing, yield, BOM accuracy, inventory controls, and fixed asset management.",
    challenges: [
      "Inaccurate unit costing due to poor overhead absorption",
      "Inventory valuation errors impacting auditability",
      "Lack of real-time profitability data by product line"
    ],
    href: "/industries/manufacturing",
  },
  {
    icon: ShoppingCart,
    title: "Trading",
    description: "Landed cost calculations, FX exposure, margin analysis, and import/export VAT rules.",
    challenges: [
      "Hidden costs in landed cost calculations",
      "FX volatility impacting margins",
      "Complex VAT treatments on cross-border trade"
    ],
    href: "/industries/trading",
  },
  {
    icon: Briefcase,
    title: "Services",
    description: "Project accounting, consultant utilization, revenue recognition, and contract profitability.",
    challenges: [
      "Inconsistent revenue recognition across projects",
      "Low consultant utilization rates",
      "Inability to track project profitability in real-time"
    ],
    href: "/industries/services",
  },
];

const Industries = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    phone: "",
    industry: "",
    challenge: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID_INDUSTRY;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_INDUSTRY;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY_INDUSTRY;

      if (!serviceId || !templateId || !publicKey) {
         console.warn("Email service is not configured");
         // For demo purposes if env vars are missing, we simulate success after delay
         await new Promise(resolve => setTimeout(resolve, 1500));
      } else {
        await emailjs.send(
          serviceId,
          templateId,
          {
            to_email: "advisory@valorin.uk",
            reply_to: formData.email,
            company: formData.company,
            email: formData.email,
            phone: formData.phone,
            industry: formData.industry,
            challenge: formData.challenge,
            source_url: window.location.href,
            submitted_at: new Date().toISOString()
          },
          { publicKey }
        );
      }

      toast({
        title: "Request Submitted Successfully",
        description: "We'll analyze your industry challenges and contact you shortly.",
      });

      setFormData({
        company: "",
        email: "",
        phone: "",
        industry: "",
        challenge: ""
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Industry Expertise</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Industries We <span className="text-gradient-gold">Serve</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Finance is not one-size-fits-all. We embed industry-specific knowledge into every solution, 
              ensuring practical advice for your sector's unique cost structures, regulatory requirements, and operational benchmarks.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <Link
                key={industry.title}
                to={industry.href}
                className="service-card group p-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h2 className="text-2xl font-semibold font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
                  {industry.title}
                </h2>
                
                <p className="text-muted-foreground mb-6">{industry.description}</p>
                
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-medium text-foreground">Common Challenges:</p>
                  {industry.challenges.map((challenge, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{challenge}</span>
                    </div>
                  ))}
                </div>
                
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  View Solutions <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
              Request an Industry-Specific <span className="text-gradient-gold">Diagnostic</span>
            </h2>
            <p className="text-muted-foreground mb-10">
              Get a customized analysis of your industry-specific financial challenges and opportunities.
            </p>
            
            <div className="glass-card rounded-xl p-8 text-left">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company Name *</label>
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="calculator-input" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="calculator-input" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="calculator-input" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Industry *</label>
                    <select 
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className="calculator-select"
                    >
                      <option value="">Select industry</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Trading">Trading</option>
                      <option value="Services">Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Biggest Challenge in Your Industry
                  </label>
                  <textarea 
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    className="calculator-input min-h-32" 
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Request Diagnostic"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
