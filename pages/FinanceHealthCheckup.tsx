import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  FileText, 
  Target,
  Users,
  Lock,
  TrendingUp,
  Mail,
  Phone,
  Send,
  AlertCircle
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";
import FinanceHealthCheckupAssessment from "@/components/tools/FinanceHealthCheckupAssessment";
import { useForm } from "@/hooks/useForm";
import { validateForm, ValidationRules, ValidationRule } from "@/lib/validation";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const FinanceHealthCheckup = () => {
  const { toast } = useToast();
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    updateSEO({
      title: "Finance Health Checkup | Is Your Business Financially Safe? | VALORIN",
      description: "A practical 10-minute assessment to check if your business is fraud-resistant, control-driven, and decision-ready. No accounting knowledge required.",
      canonical: `${SITE_URL}/advisory-tools/finance-health-checkup`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }, []);

  // Validation rules for the health checkup form
  const validationRules: Record<string, ValidationRule[]> = {
    name: [ValidationRules.required, ValidationRules.minLength(2)],
    company: [ValidationRules.required, ValidationRules.minLength(2)],
    email: [ValidationRules.required, ValidationRules.email],
    phone: [ValidationRules.phone],
  };

  const {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    submitError,
    handleChange,
    handleSubmit: handleSubmitBase,
    resetForm,
  } = useForm(
    {
      name: "",
      company: "",
      email: "",
      phone: "",
      role: "",
      revenue_range: "",
      ndaRequired: false,
      consent: false,
    },
    validationRules,
    async (data) => {
      // Use specific Finance Service ID if available, otherwise fallback to default
      // FALLBACK: Hardcoded ID added to ensure functionality if env var is missing during reload
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID_FINANCE || "service_fo4bd1a";
      
      // Use the specific Finance Health Checkup Template ID
      // If not set, fallback to the shared finance template or hardcoded default
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_FINANCE_HEALTH || import.meta.env.VITE_EMAILJS_TEMPLATE_ID_FINANCE || "template_ddd8tlm";
      
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY_FINANCE || import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      console.log("Sending email with:", { serviceId, templateId, publicKey });

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Email service is not configured");
      }

      const ndaText = data.ndaRequired
        ? "Confidentiality Agreement: As requested, a Non-Disclosure Agreement will be sent to you separately within the next hour for your review and signature."
        : "";

      const emailParams = {
        to_email: "advisory@valorin.uk",
        reply_to: data.email,
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        role: data.role,
        revenue_range: data.revenue_range,
        nda_text: ndaText,
        submitted_at: new Date().toISOString(),
        source_url: window.location.href,
      };

      try {
        // Attempt 1: Send using the Finance Account Credentials
        await emailjs.send(
          serviceId,
          templateId,
          emailParams,
          { publicKey }
        );
      } catch (error: unknown) {
        console.warn("Finance account send failed, trying default account...", error);
        
        // Attempt 2: Fallback to Default Account (in case user created template in the wrong account)
        const defaultServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const defaultPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        
        if (defaultServiceId && defaultPublicKey && defaultServiceId !== serviceId) {
          await emailjs.send(
            defaultServiceId,
            templateId,
            emailParams,
            { publicKey: defaultPublicKey }
          );
        } else {
          throw error;
        }
      }

      // Send confirmation email to user using the general confirmation template
      const confirmationTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONFIRMATION || "template_7x8riyg";
      const defaultServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const defaultPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Only send confirmation if user consented
      // We wrap this in a top-level try/catch to ensure that even if the confirmation email fails completely
      // (e.g. template missing in both accounts), the main form submission is still considered successful.
      if (confirmationTemplateId && data.email && data.consent) {
        try {
          let confirmationSent = false;

          // Attempt 1: Try Default Account first (standard behavior)
          if (defaultServiceId && defaultPublicKey) {
            try {
              await emailjs.send(
                defaultServiceId,
                confirmationTemplateId,
                {
                  to_email: data.email,
                  email: data.email,
                  name: data.name,
                  company: data.company,
                  phone: data.phone,
                  turnover: data.revenue_range,
                  challenge: "Finance Health Checkup Request",
                  nda_text: ndaText,
                  submitted_at: new Date().toISOString(),
                },
                { publicKey: defaultPublicKey }
              );
              confirmationSent = true;
            } catch (err) {
              console.warn("Confirmation email failed with default account:", err);
            }
          }

          // Attempt 2: Fallback to Finance Account (if first attempt failed)
          if (!confirmationSent && serviceId && publicKey) {
             await emailjs.send(
              serviceId,
              confirmationTemplateId,
              {
                to_email: data.email,
                email: data.email,
                name: data.name,
                company: data.company,
                phone: data.phone,
                turnover: data.revenue_range,
                challenge: "Finance Health Checkup Request",
                nda_text: ndaText,
                submitted_at: new Date().toISOString(),
              },
              { publicKey: publicKey }
            );
          }
        } catch (finalConfirmError) {
          // If both attempts fail, we log it but DO NOT throw.
          // This allows the user to see the "Success" screen for their diagnostic request.
          console.error("Confirmation email failed to send (non-fatal):", finalConfirmError);
        }
      }

      toast({
        title: "Checkup Request Started",
        description: "We've received your request. A consultant will contact you shortly to conduct the assessment.",
      });
    }
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      await handleSubmitBase(e);
    },
    [handleSubmitBase]
  );

  const problems = [
    "You see profits, but cash is always tight",
    "You rely heavily on one person for finance control",
    "You don’t fully trust reports until you double-check them",
    "Fraud feels “unlikely” — but you’ve never actually tested controls",
    "Decisions are made using old numbers",
    "You only understand the business when the auditor arrives",
    "You feel blind between month-end reports"
  ];

  const checks = [
    {
      title: "Fraud-Resistant",
      icon: Lock,
      items: [
        "Money can’t move without approval",
        "One person can’t create, approve, and pay",
        "Vendor and customer data can’t be changed silently"
      ]
    },
    {
      title: "Control-Driven (Not Person-Dependent)",
      icon: Shield,
      items: [
        "Processes work even if a key employee is absent",
        "Rules are written, not assumed",
        "Exceptions are visible, not hidden"
      ]
    },
    {
      title: "Decision-Ready",
      icon: TrendingUp, // Imported below, need to add to imports
      items: [
        "You can see cash, sales, margins, and risks in near real time",
        "You don’t wait for month-end surprises",
        "Numbers are consistent across teams"
      ]
    },
    {
      title: "Future-Proof",
      icon: Target,
      items: [
        "Ready for banks, investors, audits, or expansion",
        "Finance supports growth instead of slowing it down"
      ]
    }
  ];

  const whoIsThisFor = [
    "Business Owners & Managing Directors",
    "CEOs of SMEs",
    "Growing Manufacturing, Trading & Service Companies",
    "Businesses with 5–200 staff",
    "Companies where owner is still closely involved"
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Answer Practical Questions",
      desc: "Answer questions about how your business actually runs. No accounting knowledge required."
    },
    {
      step: "02",
      title: "10–12 Minutes",
      desc: "Quick and efficient. Designed for busy owners."
    },
    {
      step: "03",
      title: "Instant Insights",
      desc: "Receive immediate feedback, not generic advice. No documents upload. No jargon."
    }
  ];

  const benefits = [
    "Clear visibility on risk areas",
    "Confirmation of what is under control",
    "Identification of blind spots",
    "Direction on what to fix first"
  ];

  return (
    <Layout>
      {isStarted ? (
        <div className="container mx-auto py-20 min-h-screen">
          <FinanceHealthCheckupAssessment />
        </div>
      ) : (
        <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Finance Health Checkup</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Is Your Business Financially Safe, <br/>
              <span className="text-gradient-gold">Controlled, and Decision-Ready?</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              Most business owners don’t worry about profit on paper. They worry about <strong>what can go wrong tomorrow</strong>. 
              This checkup answers one core question: 
              <br/><br/>
              <span className="text-foreground font-medium italic">“If I step back today, is my business financially safe and under control?”</span>
            </p>

            <button onClick={() => setIsStarted(true)} className="btn-gold inline-flex items-center gap-2">
              Start Checkup <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* The Real Problems This Solves */}
      <section className="py-12 md:py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-8 text-center">
              The Real Problems <span className="text-gradient-gold">This Solves</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              This checkup is for you if <strong>any</strong> of the following feel familiar:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {problems.map((problem, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border/50">
                  <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/90">{problem}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-lg text-muted-foreground">
                This is not your fault. <br/>
                <span className="text-foreground font-semibold">Most SMEs grow faster than their controls.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What This Checkup Actually Checks */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-4 text-center">
            What This Checkup <span className="text-gradient-gold">Actually Checks</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">(Practical, Not Theoretical)</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {checks.map((check, i) => {
              const Icon = check.icon;
              return (
                <div key={i} className="glass-card rounded-xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-serif text-foreground">{check.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {check.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-12">
              Who This <span className="text-gradient-gold">Is For</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {whoIsThisFor.map((item, i) => (
                <div key={i} className="px-6 py-3 rounded-full bg-background border border-primary/20 text-foreground font-medium shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="text-xl font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immediate Benefits */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-12">
              What You Will Get <span className="text-gradient-gold">Immediately</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 p-6 rounded-xl bg-background border border-border shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-lg font-medium text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <p className="text-xl font-serif text-foreground italic">
              This is about <strong>comfort, clarity, and control</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="start-checkup" className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold font-serif text-foreground mb-6">
              Start the Finance <span className="text-gradient-gold">Health Checkup</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Confidential. No data shared. NDA-based reviews available.
            </p>
            
          <div className="glass-card p-8 md:p-12 rounded-2xl border-primary/20">
            <div className="text-center space-y-6 mb-8">
              <FileText className="w-16 h-16 text-primary mx-auto opacity-50" />
              <p className="text-lg text-foreground">
                Ready to assess your business financial health?
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              {/* Success Message */}
              {submitSuccess && (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-600 text-sm">
                  Request submitted successfully. Check your email for confirmation.
                </div>
              )}

              {/* Error Message */}
              {submitError && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-600 text-sm">{submitError}</p>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`calculator-input ${errors.name ? "border-red-500" : ""}`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`calculator-input ${errors.company ? "border-red-500" : ""}`}
                    placeholder="Company name"
                  />
                  {errors.company && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.company}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                    Job Title / Role
                  </label>
                  <input
                    id="role"
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="calculator-input"
                    placeholder="e.g. CFO, CEO, Finance Manager"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`calculator-input ${errors.email ? "border-red-500" : ""}`}
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`calculator-input ${errors.phone ? "border-red-500" : ""}`}
                    placeholder="+971 XX XXX XXXX"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="revenue_range" className="block text-sm font-medium text-foreground mb-2">
                    Annual Revenue Range
                  </label>
                  <select
                    id="revenue_range"
                    name="revenue_range"
                    value={formData.revenue_range}
                    onChange={handleChange}
                    className="calculator-select"
                  >
                    <option value="">Select range</option>
                    <option value="Below AED 1M">Below AED 1M</option>
                    <option value="AED 1M - 3M">AED 1M - 3M</option>
                    <option value="AED 3M - 5M">AED 3M - 5M</option>
                    <option value="AED 5M - 25M">AED 5M - 25M</option>
                    <option value="AED 25M - 100M">AED 25M - 100M</option>
                    <option value="Above AED 100M">Above AED 100M</option>
                  </select>
                </div>

                <div className="sm:col-span-2 space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="ndaRequired"
                      checked={formData.ndaRequired}
                      onChange={handleChange}
                      className="w-5 h-5 rounded border-border bg-background text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-foreground">
                      I require an NDA before starting the assessment
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent as boolean}
                      onChange={handleChange}
                      className="w-5 h-5 rounded border-border bg-background text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-foreground">
                      I consent to receiving the diagnostic report via email
                    </span>
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-gold w-full px-12 py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Starting Assessment...
                  </>
                ) : (
                  <>
                    Begin Finance Health Checkup
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
          </div>
        </div>
      </section>

      <section className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Disclaimer</strong><br/>
            This tool provides management insight only and does not replace audit, tax, or legal advice.
          </p>
        </div>
      </section>

        </>
      )}
    </Layout>
  );
};

export default FinanceHealthCheckup;
