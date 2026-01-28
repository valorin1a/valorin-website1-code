import { memo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Shield } from "lucide-react";

const CTAComponent = () => {
  return (
    <section className="py-12 md:py-20 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold opacity-50" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">NDA Available Upon Request</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
            Let’s Review Your <br/>
            <span className="text-gradient-gold">Financial Position</span>
          </h2>
          
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Schedule a confidential conversation to review your current challenges and explore how our senior CFO leadership can strengthen discipline, compliance and capital control.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-gold flex items-center gap-2 text-base">
              <Calendar className="w-5 h-5" />
              Schedule a Confidential CFO Discussion
            </Link> 
          </div>
        </div>
      </div>
    </section>
  );
};

export const CTA = memo(CTAComponent);
