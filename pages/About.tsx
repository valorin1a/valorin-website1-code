import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Award, Target, Users, TrendingUp, Shield, Lightbulb, Clock, Building2, CheckCircle, Briefcase, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const About = () => {
  useEffect(() => {
    updateSEO({
      title: "About VALORIN - CFO Advisory & Finance Consulting",
      description: "Learn about VALORIN's mission, values, and expertise. Leading CFO advisory firm in UAE serving businesses since 2007. Executive-led financial consulting.",
      canonical: `${SITE_URL}/about`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }, []);

  const achievements = [
    { metric: "AED 45M+", label: "Credit Exposure Reduced" },
    { metric: "200+", label: "Businesses Served" },
    { metric: "20+", label: "Years of Excellence" },
    { metric: "98%", label: "Client Retention Rate" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-card/50 via-background to-background" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              About VALORIN
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              Senior Financial Leadership with
              <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent"> Discipline </span>
              and
              <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent"> Control </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              VALORIN Finance & Advisory stands at the forefront of strategic financial consulting,
              delivering transformative solutions that empower businesses to achieve sustainable growth
              and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why VALORIN Exists - Replaces previous "Executive Leadership" */}
      <section className="py-12 md:py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-primary font-medium tracking-wider text-sm uppercase mb-4 block">
                Executive Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Senior Financial Leadership
              </h2>

              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  VALORIN’s leadership is grounded in over twenty years of senior finance experience at the executive level, including Chief Financial Officer roles within manufacturing, trading, and services organizations. This experience spans multiple business cycles—growth, restructuring, regulatory evolution, and capital discipline—where financial judgment directly impacts resilience and value creation.
                </p>

                <p className="leading-relaxed">
                  This depth of experience informs a leadership-driven approach centered on clarity, control, and disciplined execution. Strategic priorities are translated into robust financial structures that improve cash-flow visibility, strengthen risk management, and support sustainable performance across complex operating environments.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg border border-border">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">Institutional Discipline</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg border border-border">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">Executive Judgment</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl p-8 border border-primary/20 h-full flex flex-col justify-center">
                <blockquote className="text-xl italic text-foreground leading-relaxed mb-6">
                  "We bring institutional financial discipline and executive judgment to organizations that need CFO-level leadership."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">VF</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">VALORIN Finance & Advisory</p>
                    <p className="text-sm text-muted-foreground">Strategic Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6">
              <span className="text-gradient-gold">Our Purpose</span>
            </h2>
            <div className="glass-card p-8 rounded-xl">
              <p className="text-3xl font-bold font-serif text-foreground mb-6 ">
                Why <span className="text-gradient-gold">VALORIN</span> Exists
              </p>
              <p className="text-muted-foreground mb-4">
                Many growing organizations reach a point where financial decisions become more complex, regulatory exposure increases, and informal systems no longer provide sufficient control. At this stage, the absence of senior financial leadership often creates risk—while hiring a full-time executive may be impractical or premature.
              </p>
              <p className="text-muted-foreground">
                VALORIN was established to bridge this gap. We bring institutional financial discipline and executive judgment to organizations that need CFO-level leadership, but in a form that is practical, focused, and aligned with business realities.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Achievements (Kept as proof points) */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <p className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-2">
                  {item.metric}
                </p>
                <p className="text-muted-foreground text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Think */}
      <section className="py-12 md:py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium tracking-wider text-sm uppercase mb-4 block">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              How We Think
            </h2>
            <p className="text-lg text-muted-foreground">
              We believe effective financial leadership is defined by judgment, not reporting volume.
              Our approach emphasizes:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Discipline",
                desc: "Over expansion without control"
              },
              {
                icon: Lightbulb,
                title: "Clarity",
                desc: "Over complexity"
              },
              {
                icon: Target,
                title: "Substance",
                desc: "Over presentation"
              },
              {
                icon: TrendingUp,
                title: "Resilience",
                desc: "Long-term over short-term results"
              }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors group text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground">
              Financial leadership should enable informed decision-making, protect the organization from avoidable risk, and create a stable foundation for sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium tracking-wider text-sm uppercase mb-4 block">
                Our Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                How We Work
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We operate as a senior extension of leadership teams, not as external advisors delivering isolated recommendations.
                We focus on what changes after engagement—not what is produced during it.
              </p>

              <div className="space-y-4">
                {[
                  "Clear priorities and decision ownership",
                  "Executive-level analysis focused on outcomes",
                  "Practical frameworks that hold under regulatory and banking scrutiny",
                  "Direct engagement with leadership, boards, and key stakeholders"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 min-w-5">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold font-serif text-foreground mb-6">What Clients Experience</h3>
              <p className="text-muted-foreground mb-6">
                Organizations working with VALORIN typically gain:
              </p>
              <div className="grid gap-4">
                {[
                  "Stronger financial control and visibility",
                  "Improved confidence in regulatory compliance",
                  "More disciplined capital and cash-flow management",
                  "Clearer decision frameworks at leadership level"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border/50">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-6 font-medium">
                The result is not just better reporting, but better decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Standards & Confidentiality */}
      <section className="py-12 md:py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-foreground mb-4">Standards and Confidentiality</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                VALORIN operates to enterprise-grade standards of governance, confidentiality, and professional integrity. All engagements are treated with discretion, and confidentiality is assured, with NDAs available upon request.
              </p>
              <p className="text-foreground font-medium">
                Our reputation is built on trust, judgment, and consistency of standards.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-foreground mb-4">Our Role</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                VALORIN is not a replacement for management, and not a transactional service provider.
              </p>
              <p className="text-foreground font-medium">
                We serve as a senior financial leadership partner, supporting organizations through periods of complexity, growth, and change with discipline and control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Ready to Transform Your Financial Strategy?
            </h2>
            <p className="text-muted-foreground mb-8">
              Partner with VALORIN and experience the difference that 20 years of
              financial expertise can make for your business.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
              <Link to="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
