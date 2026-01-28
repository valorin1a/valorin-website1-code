import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Calculator, ArrowRight, DollarSign, FileText, GitBranch, BookOpen } from "lucide-react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const Calculators = () => {
  useEffect(() => {
    updateSEO({
      title: "Tax Calculators | UAE Corporate Tax, VAT & Transfer Pricing Estimators | VALORIN",
      description: "Free UAE tax calculators: Corporate Tax (CT), VAT, Transfer Pricing and Excise Tax estimators. Scenario planning and liability estimation tools.",
      canonical: `${SITE_URL}/calculators`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }, []);

  const calculators = [
    {
      icon: DollarSign,
      title: "Corporate Tax Calculator",
      description: "Estimate your Corporate Tax liability based on accounting profit and mandatory adjustments. Supports Mainland, QFZP, and Free Zone entities.",
      href: "/tax-center/corporate-tax-calculator",
      category: "Corporate Tax",
    },
    {
      icon: FileText,
      title: "VAT Calculator",
      description: "Calculate your VAT obligations accurately based on UAE VAT Decree-Law provisions. Supports all supply types and origins.",
      href: "/tax-center/vat-calculator",
      category: "VAT",
    },
    {
      icon: GitBranch,
      title: "Transfer Pricing Calculator",
      description: "Evaluate multiple related-party transactions and estimate mandatory Arm's Length adjustments and Corporate Tax add-backs.",
      href: "/tax-center/transfer-pricing-calculator",
      category: "Transfer Pricing",
    },
    {
      icon: BookOpen,
      title: "Excise Tax Calculator",
      description: "Estimate your Excise Tax payable based on product classification and tax point. Supports all excisable goods.",
      href: "/tax-center/excise-tax-calculator",
      category: "Excise Tax",
    },
  ];

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Tools</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
              Tax <span className="text-gradient-gold">Calculators</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Estimate your tax liability with VALORIN's practical calculators. Use these tools for scenario planning, cash-flow estimation, and informed decision-making.
            </p>
          </div>

          {/* Purpose Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-semibold font-serif text-foreground mb-4">How to Use These Calculators</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-primary font-semibold flex-shrink-0">1.</span>
                  <span>Select the calculator that matches your tax area (Corporate Tax, VAT, Transfer Pricing, or Excise Tax)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold flex-shrink-0">2.</span>
                  <span>Enter your financial details or transaction information</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold flex-shrink-0">3.</span>
                  <span>Review the estimated liability and use for planning and budgeting</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold flex-shrink-0">4.</span>
                  <span>For complex scenarios, consult with a tax advisor for formal guidance</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p className="text-sm text-white">
                  <strong>Important:</strong> Calculators are illustrative tools for scenario assessment only and do not replace professional tax advice or formal filing.
                </p>
              </div>
            </div>
          </div>

          {/* Calculators Grid */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {calculators.map((calc) => (
                <div key={calc.title} className="glass-card rounded-xl p-6 md:p-8 hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <calc.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">{calc.category}</p>
                      <h3 className="text-lg font-semibold font-serif text-foreground">{calc.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-6">{calc.description}</p>
                  <Link
                    to={calc.href}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
                  >
                    Open Calculator
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-xl font-semibold font-serif text-foreground mb-4">Need Professional Guidance?</h2>
              <p className="text-gray-300 mb-6">
                Our calculators are designed for scenario planning. For complex tax structures or compliance support, our advisors can provide expert guidance tailored to your business.
              </p>
              <Link to="/contact" className="btn-gold inline-flex items-center gap-2">
                Speak to a Tax Advisor
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Calculators;
