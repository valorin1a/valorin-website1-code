import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { BookOpen, FileText, GitBranch, DollarSign, ArrowRight } from "lucide-react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const TaxCenter = () => {
  useEffect(() => {
    updateSEO({
      title: "Tax Center | UAE Tax Knowledge Hub | VALORIN Finance & Advisory",
      description: "VALORIN Tax Center — a practical knowledge hub covering UAE Corporate Tax, VAT, Transfer Pricing and Excise Tax with guidance, insights and calculators.",
      canonical: `${SITE_URL}/tax-center`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }, []);

  const taxDomains = [
    {
      icon: DollarSign,
      title: "Corporate Tax",
      description: "0% vs 9% rules, QFZP compliance, adjustments and filing risks",
      href: "/tax-center/corporate-tax",
      calculatorHref: "/tax-center/corporate-tax-calculator",
    },
    {
      icon: FileText,
      title: "Value Added Tax (VAT)",
      description: "Input VAT recovery, partial exemption, audits and refunds",
      href: "/tax-center/vat",
      calculatorHref: "/tax-center/vat-calculator",
    },
    {
      icon: GitBranch,
      title: "Transfer Pricing",
      description: "Arm's length rules, impact studies and documentation requirements",
      href: "/tax-center/transfer-pricing",
      calculatorHref: "/tax-center/transfer-pricing-calculator",
    },
    {
      icon: BookOpen,
      title: "Excise Tax",
      description: "Registration, valuation methods and filing obligations",
      href: "/tax-center/excise-tax",
      calculatorHref: "/tax-center/excise-tax-calculator",
    },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="container px-4 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Resources</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
              UAE <span className="text-gradient-gold">Tax Center</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Your comprehensive resource for UAE VAT and Corporate Tax compliance. Expert guidance, practical knowledge, and calculators designed for decision-makers.
            </p>
          </div>

          {/* Purpose Section */}
          <div className="max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-semibold font-serif text-foreground mb-4">Why the Tax Center Exists</h2>
              <p className="text-muted-foreground mb-4">
                Most tax risks do not arise from headline rates. They arise from misclassification, poor documentation and missed adjustments.
              </p>
              <p className="text-muted-foreground">
                The Tax Center is designed to help businesses understand real tax exposure, highlight audit and compliance hotspots, provide clarity before filings and transactions, and support informed discussions with advisors.
              </p>
            </div>
          </div>

          {/* Tax Domains Grid */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl font-bold font-serif text-foreground mb-8 text-center">Explore by Tax Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {taxDomains.map((domain) => (
                <div key={domain.title} className="glass-card rounded-xl p-6 md:p-8 hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <domain.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold font-serif text-foreground">{domain.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6">{domain.description}</p>
                  <div className="flex flex-col gap-3">
                    <Link
                      to={domain.href}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
                    >
                      Knowledge Hub
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      to={domain.calculatorHref}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
                    >
                      Calculator
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Disclaimer */}
          <div className="max-w-3xl mx-auto">
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <p className="text-xs text-muted-foreground text-center">
                <strong>Disclaimer:</strong> Content in the Tax Center is provided for general information purposes only. Tax treatment depends on specific facts and circumstances, and legislation is subject to change. Professional advice should be sought before acting on any information contained here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
              Need Expert <span className="text-gradient-gold">Tax Guidance?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Navigate the complexities of UAE tax laws with our expert advisory services.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TaxCenter;
