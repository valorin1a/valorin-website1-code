import { Link } from "react-router-dom";
import { Award, Users, Target, Handshake, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Integrity",
    description: "Unbiased advice and ethical delivery, always prioritizing client stability.",
  },
  {
    icon: Users,
    title: "Confidentiality",
    description: "Absolute discretion in all matters; NDA process standard on all engagements.",
  },
  {
    icon: Target,
    title: "Results",
    description: "Focusing on measurable outcomes: cash flow, compliance scores, and P&L improvement.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "Working as an integrated, long-term extension of your senior leadership team.",
  },
];

export const About = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              About VALORIN
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
              The Executive Vision: <br/>
              <span className="text-gradient-gold">Integrity and Results</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              VALORIN was established to provide senior-level financial leadership to growing organizations that require enterprise discipline without the cost and bureaucracy of large institutions.            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our approach is grounded in executive experience across manufacturing, trading and services, where financial decisions carry real consequences for cash flow, risk exposure and regulatory standing. We work at the intersection of strategy, control and execution — translating boardroom intent into practical financial structures that perform under scrutiny.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              By strengthening financial discipline, capital control and compliance readiness, we help leadership teams build resilient organizations that grow with clarity and confidence.
            </p>
            <Link to="/about" className="btn-gold inline-flex items-center gap-2">
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
