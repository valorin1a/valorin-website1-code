import { Link } from "react-router-dom";
import { Calculator, FileText, ArrowRight, Shield } from "lucide-react";

export const TaxHubCTA = () => {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              Tax Hub
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
              Protect Your Business: <br/>
              <span className="text-gradient-gold">Compliance Readiness</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Don't navigate the complexity alone. Use our free UAE tax calculators to estimate your VAT and Corporate Tax obligations with precision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/calculators" className="btn-gold flex items-center justify-center gap-2">
                <Calculator className="w-5 h-5" />
                View All Calculators
              </Link>
              <Link to="/tax-center" className="btn-outline-gold flex items-center justify-center gap-2">
                <FileText className="w-5 h-5" />
                Tax Center
              </Link>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-6">
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">UAE VAT Calculator</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Calculate VAT for mainland, designated zones, and exports with Reverse Charge Mechanism support.
                  </p>
                  <Link to="/tax-hub/vat-calculator" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                    Calculate Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Corporate Tax Estimator</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Estimate your CT liability with QFZP support, mandatory add-backs, and AED 375,000 threshold calculation.
                  </p>
                  <Link to="/tax-hub/ct-calculator" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                    Estimate Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl border-primary/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Need Expert Review?</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Get a confidential consultation with our tax specialists to ensure compliance.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                    Request Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
