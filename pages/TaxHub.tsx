import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Calculator, FileText, ArrowRight, BookOpen, Shield, Download } from "lucide-react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const TaxHub = () => {
  useEffect(() => {
    updateSEO({
      title: "UAE Tax Hub - VAT & Corporate Tax Resources",
      description: "Free UAE tax calculators and compliance resources. VAT calculator, corporate tax estimator, and expert guidance for tax compliance.",
      canonical: `${SITE_URL}/tax-hub`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
      keywords: "UAE tax, VAT, corporate tax, tax hub, tax calculator, tax compliance, tax resources",
    });
  }, []);

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Resources</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
              UAE <span className="text-gradient-gold">Tax Hub</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Your comprehensive resource for UAE VAT and Corporate Tax compliance.
              Access free calculators, guides, and expert insights.
            </p>
          </div>

          {/* Calculator Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12 md:mb-16">
            <Link 
              to="/tax-hub/vat-calculator"
              className="service-card group p-8"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Calculator className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
                VAT Calculator
              </h2>
              <p className="text-muted-foreground mb-6">
                Calculate VAT for mainland, designated zones, and exports. Includes support for 
                zero-rated supplies, exempt categories, and Reverse Charge Mechanism.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Standard 5% VAT calculation
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Zero-rated & exempt supplies
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Export documentation guidance
                </li>
              </ul>
              <span className="inline-flex items-center gap-2 text-primary font-medium">
                Open Calculator <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link 
              to="/tax-hub/ct-calculator"
              className="service-card group p-8"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
                Corporate Tax Estimator
              </h2>
              <p className="text-muted-foreground mb-6">
                Estimate your CT liability with full support for QFZP status, mandatory 
                add-backs, and the AED 375,000 threshold calculation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  9% CT rate calculation
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  QFZP & Free Zone support
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Non-deductible adjustments
                </li>
              </ul>
              <span className="inline-flex items-center gap-2 text-primary font-medium">
                Open Estimator <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Additional Resources */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold font-serif text-foreground text-center mb-8">
              Additional Resources
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-card rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">CT & VAT Checklist</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Essential compliance checklist for UAE businesses.
                </p>
                <button className="text-sm text-primary hover:underline">
                  Download PDF →
                </button>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">QFZP Guide</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Understanding Qualifying Free Zone Person status.
                </p>
                <button className="text-sm text-primary hover:underline">
                  Read Guide →
                </button>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Expert Review</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get your tax position reviewed by our specialists.
                </p>
                <Link to="/contact" className="text-sm text-primary hover:underline">
                  Request Review →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TaxHub;
