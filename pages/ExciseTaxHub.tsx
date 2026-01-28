import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, ArrowRight, AlertCircle } from "lucide-react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const ExciseTaxHub = () => {
  useEffect(() => {
    updateSEO({
      title: "UAE Excise Tax Knowledge Hub | Registration, Rates & Compliance | VALORIN",
      description: "Comprehensive UAE Excise Tax knowledge hub covering excisable goods, registration triggers, valuation, tax point, designated zones, filing, penalties and FTA audit risks.",
      canonical: `${SITE_URL}/tax-center/excise-tax`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
      keywords: "Excise Tax, excisable goods, tobacco, energy drinks, UAE tax",
    });
  }, []);

  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            {/* Back Button */}
            <div className="flex justify-center mb-8">
              <button 
                onClick={() => navigate(-1)} 
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline bg-background/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Go Back
              </button>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Knowledge Hub</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-4">
              Excise Tax: 360° Compliance &amp; <span className="text-gradient-gold">Risk Control</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Excise Tax in the UAE is not a consumption tax. It is a behavioral tax designed to increase prices and reduce demand for harmful products. It applies at import, production, or stock release — often before revenue is realized — making it one of the highest cash-flow risk taxes in the UAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/tax-center/excise-tax-calculator" className="btn-gold flex items-center justify-center gap-2">
                Go to Calculator
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services/excise-tax" className="btn-outline-gold flex items-center justify-center gap-2">
                View Advisory Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* What is Excise Tax */}
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold font-serif text-foreground mb-6">What is Excise Tax in the UAE?</h2>
              <p className="text-muted-foreground mb-6">
                Excise Tax is an indirect tax imposed on specific goods considered harmful to human health or the environment. Unlike VAT, Excise Tax is not recoverable and is applied once at the tax point — paid regardless of whether goods are sold.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Legal Basis:</strong> Federal Decree-Law No. (7) of 2017, supported by Executive Regulations and Cabinet Decisions
                </p>
              </div>
            </div>

            {/* Excisable Goods */}
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold font-serif text-foreground mb-6">Excisable Products & Rates</h2>
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground mb-1">Tobacco & Tobacco Products</h3>
                  <p className="text-sm text-muted-foreground">Cigarettes, cigars, pipe tobacco — <strong>100% excise tax</strong></p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground mb-1">Energy Drinks</h3>
                  <p className="text-sm text-muted-foreground">Products with stimulants (caffeine/taurine) — <strong>100% excise tax</strong></p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground mb-1">Electronic Smoking Devices</h3>
                  <p className="text-sm text-muted-foreground">E-cigarettes, vaping devices — <strong>100% excise tax</strong></p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground mb-1">E-Smoking Liquids</h3>
                  <p className="text-sm text-muted-foreground">Nicotine or non-nicotine vaping liquids — <strong>100% excise tax</strong></p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground mb-1">Sweetened Drinks</h3>
                  <p className="text-sm text-muted-foreground">Carbonated & non-carbonated drinks with added sweeteners — <strong>50% ad-valorem</strong> (changing to tiered volumetric from 1 Jan 2026)</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p className="text-sm text-yellow-700">
                  <strong>Important:</strong> From 1 January 2026, sweetened drinks will shift from 50% ad-valorem to a tiered volumetric model based on sugar content (g/100ml). Update systems in advance.
                </p>
              </div>
            </div>

            {/* Registration */}
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold font-serif text-foreground mb-6">When Excise Tax Registration is Mandatory</h2>
              <p className="text-muted-foreground mb-6">
                A business must register for Excise Tax if it imports, produces, stockpiles, or releases excisable goods from a Designated Zone. <strong>There is no threshold</strong> — registration is mandatory from the first transaction.
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span><strong>Import:</strong> Any import of excisable goods into the UAE</span>
                </p>
                <p className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span><strong>Production:</strong> Manufacturing excisable goods in the UAE</span>
                </p>
                <p className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span><strong>Stockpiling:</strong> Storing excisable goods for later release</span>
                </p>
                <p className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span><strong>Designated Zone release:</strong> Moving goods from Designated Zone to Mainland or customer</span>
                </p>
              </div>
            </div>

            {/* Tax Point */}
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold font-serif text-foreground mb-6">Tax Point & Liability Event</h2>
              <p className="text-muted-foreground mb-6">
                Excise tax is due at the <strong>earliest of</strong>: Import, Production, Stock Release, or Sale. This means you may owe excise tax before you receive revenue from the customer — a significant cash-flow risk.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Example:</strong> You import 10,000 packs of cigarettes on 15 September. Excise tax of AED 300,000+ is due by 22 September regardless of whether you've sold any goods. If products sit in inventory, excise remains due but not recoverable if goods are later lost or destroyed.
                </p>
              </div>
            </div>

            {/* Valuation */}
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold font-serif text-foreground mb-6">Excise Price & Valuation Methods</h2>
              <p className="text-muted-foreground mb-6">
                Excise tax is calculated on the <strong>Excise Price</strong> — the highest of:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">1.</span>
                  <span><strong>Cost Insurance Freight (CIF):</strong> For imported goods, includes cost + insurance + freight to UAE</span>
                </p>
                <p className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">2.</span>
                  <span><strong>Designated Retail Price (DRP):</strong> Published maximum retail price set by FTA for certain goods</span>
                </p>
                <p className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">3.</span>
                  <span><strong>Standard Price:</strong> Fair market value if DRP not published</span>
                </p>
              </div>
            </div>

            {/* Common Risks */}
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold font-serif text-foreground mb-6">Common Excise Tax Compliance Risks</h2>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Late registration:</p>
                    <p className="text-sm text-muted-foreground">Missing registration deadline triggers penalties and interest backdated to first transaction</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Incorrect valuation:</p>
                    <p className="text-sm text-muted-foreground">Undervaluing excise price to reduce tax base — FTA conducts post-audit adjustments</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Misclassification:</p>
                    <p className="text-sm text-muted-foreground">Treating non-excisable goods as excisable or vice versa — audits often focus on commodity boundary</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Poor record-keeping:</p>
                    <p className="text-sm text-muted-foreground">Inadequate invoicing, movement records or FTA communications lead to penalties</p>
                  </div>
                </div>
              </div>
            </div>

            {/* When to Seek Help */}
            <div className="glass-card rounded-xl p-6 md:p-8 border-primary/30 bg-primary/5">
              <h2 className="text-2xl font-bold font-serif text-foreground mb-6">When Professional Excise Tax Support is Critical</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">✓</span>
                  <span>You import, manufacture or stock excisable goods</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">✓</span>
                  <span>You're unsure if your product is excisable under FTA definitions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">✓</span>
                  <span>You need to register for Excise Tax and set up compliance processes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">✓</span>
                  <span>You have cash-flow concerns due to excise liabilities</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">✓</span>
                  <span>FTA has requested information or conducted an excise audit</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-gold mt-6 inline-flex items-center gap-2">
                Book Excise Tax Compliance Review
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ExciseTaxHub;
