import { useCallback, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Send, Clock, Shield, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "@/hooks/useForm";
import { validateForm, ValidationRules, ValidationRule } from "@/lib/validation";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();

  useEffect(() => {
    updateSEO({
      title: "Contact VALORIN - Schedule Your CFO Consultation",
      description: "Get in touch with VALORIN Finance & Advisory. Schedule a confidential 30-minute consultation with our CFO advisors. NDA available upon request.",
      canonical: `${SITE_URL}/contact`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }, []);

  // Validation rules for the contact form
  const validationRules: Record<string, ValidationRule[]> = {
    name: [ValidationRules.required, ValidationRules.minLength(2)],
    company: [ValidationRules.required, ValidationRules.minLength(2)],
    email: [ValidationRules.required, ValidationRules.email],
    phone: [ValidationRules.phone],
    challenge: [ValidationRules.required, ValidationRules.minLength(10)],
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
      turnover: "",
      challenge: "",
      ndaRequired: false,
    },
    validationRules,
    async (data) => {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Email service is not configured");
      }
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: "advisory@valorin.uk",
          reply_to: data.email,
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone,
          turnover: data.turnover,
          challenge: data.challenge,
          ndaRequired: data.ndaRequired ? "Yes" : "No",
          submitted_at: new Date().toISOString(),
          source_url: window.location.href,
        },
        { publicKey }
      );
      const confirmationTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONFIRMATION;
      if (confirmationTemplateId && data.email) {
        const ndaText = data.ndaRequired
          ? "Confidentiality Agreement: As requested, a Non-Disclosure Agreement will be sent to you separately within the next hour for your review and signature."
          : "";

        await emailjs.send(
          serviceId,
          confirmationTemplateId,
          {
            to_email: data.email,
            email: data.email,
            name: data.name,
            company: data.company,
            phone: data.phone,
            turnover: data.turnover,
            challenge: data.challenge,
            nda_text: ndaText,
            submitted_at: new Date().toISOString(),
          },
          { publicKey }
        );
      }
      toast({
        title: "Request Submitted Successfully",
        description: "We'll contact you within 24 hours to schedule your consultation.",
      });
    }
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      await handleSubmitBase(e);
    },
    [handleSubmitBase]
  );

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Get in Touch</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
              Request Executive <span className="text-gradient-gold">Consultation</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Tell us about your challenge, and we will scope a precise, executive-led solution.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-xl font-semibold font-serif text-foreground mb-6">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">Office</h3>
                        <p className="text-muted-foreground text-sm">
                          Dubai, United Arab Emirates
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">Phone</h3>
                        <a
                          href="https://wa.me/971582754282"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground text-sm hover:text-primary transition-colors"
                        >
                          +971 58 275 4282
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">Email</h3>
                        <a href="mailto:Advisory@valorin.uk" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                          Advisory@valorin.uk
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">Response Time</h3>
                        <p className="text-muted-foreground text-sm">
                          Within 24 business hours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl glass-card border-primary/30">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-foreground mb-2">Confidentiality Guaranteed</h3>
                      <p className="text-sm text-muted-foreground">
                        All consultations are conducted under strict confidentiality. NDA available upon request for all engagements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 md:p-8">
                  <h2 className="text-xl font-semibold font-serif text-foreground mb-6">
                    Request a Tailored Proposal
                  </h2>

                  {/* Success Message */}
                  {submitSuccess && (
                    <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-600 text-sm">
                      Request submitted successfully. Check your email for confirmation.
                    </div>
                  )}

                  {/* Error Message */}
                  {submitError && (
                    <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-start gap-3">
                      <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-red-600 text-sm">{submitError}</p>
                    </div>
                  )}
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
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
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={`calculator-input ${errors.name ? "border-red-500" : ""}`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Company */}
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
                        aria-invalid={errors.company ? "true" : "false"}
                        aria-describedby={errors.company ? "company-error" : undefined}
                        className={`calculator-input ${errors.company ? "border-red-500" : ""}`}
                        placeholder="Company name"
                      />
                      {errors.company && (
                        <p id="company-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.company}
                        </p>
                      )}
                    </div>

                    {/* Email */}
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
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`calculator-input ${errors.email ? "border-red-500" : ""}`}
                        placeholder="you@company.com"
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
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
                        aria-invalid={errors.phone ? "true" : "false"}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        className={`calculator-input ${errors.phone ? "border-red-500" : ""}`}
                        placeholder="+971 XX XXX XXXX"
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Turnover */}
                    <div className="sm:col-span-2">
                      <label htmlFor="turnover" className="block text-sm font-medium text-foreground mb-2">
                        Annual Turnover Range
                      </label>
                      <select
                        id="turnover"
                        name="turnover"
                        value={formData.turnover}
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

                    {/* Challenge */}
                    <div className="sm:col-span-2">
                      <label htmlFor="challenge" className="block text-sm font-medium text-foreground mb-2">
                        Primary Challenge <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="challenge"
                        name="challenge"
                        rows={4}
                        value={formData.challenge}
                        onChange={handleChange}
                        aria-invalid={errors.challenge ? "true" : "false"}
                        aria-describedby={errors.challenge ? "challenge-error" : undefined}
                        className={`calculator-input resize-none ${errors.challenge ? "border-red-500" : ""}`}
                        placeholder="Describe your main financial or operational challenge..."
                      />
                      {errors.challenge && (
                        <p id="challenge-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.challenge}
                        </p>
                      )}
                    </div>

                    {/* NDA Checkbox */}
                    <div className="sm:col-span-2">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="ndaRequired"
                          checked={formData.ndaRequired}
                          onChange={handleChange}
                          className="w-5 h-5 rounded border-border bg-background text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-foreground">
                          I require an NDA before detailed discussions
                        </span>
                      </label>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-gold w-full mt-8 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Request
                      </>
                    )}
                  </button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
