import { memo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, TrendingUp, BarChart3 } from "lucide-react";

const HeroComponent = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a373' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float animation-delay-300" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">CFO-Led Advisory</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight mb-6 animate-fade-up animation-delay-100">
            <span className="text-foreground">Financial Leadership</span>{" "}
            <br />
            <span className="text-gradient-gold">With Discipline and Control</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up animation-delay-200">
Senior CFO leadership enabling disciplined growth, regulatory compliance and sound capital decisions for Middle East businesses. Delivered by seasoned finance leaders with deep executive operating experience.          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up animation-delay-300">
            <Link to="/contact" className="btn-gold flex items-center gap-2 text-base">
              Request Executive Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/tax-center" className="btn-outline-gold flex items-center gap-2 text-base">
              Visit Tax Center
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto animate-fade-up animation-delay-400">
            <div className="text-center p-6 rounded-xl glass-card">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold font-serif counter-value mb-2">$50M+</div>
              <p className="text-sm text-muted-foreground">Client Capital Optimized</p>
            </div>
            <div className="text-center p-6 rounded-xl glass-card">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold font-serif counter-value mb-2">95%</div>
              <p className="text-sm text-muted-foreground">Audit Findings Prevented</p>
            </div>
            <div className="text-center p-6 rounded-xl glass-card">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold font-serif counter-value mb-2">20+</div>
              <p className="text-sm text-muted-foreground">Years Executive Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Hero = memo(HeroComponent);
