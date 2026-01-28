import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { GitBranch, ArrowRight } from "lucide-react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const TransferPricingHub = () => {
  useEffect(() => {
    updateSEO({
      title: "VALORIN Transfer Pricing Hub | Arm's Length, Related Parties & CT Add-Backs",
      description: "VALORIN Transfer Pricing (TP) Tax Center – a UAE-focused knowledge hub covering related party rules, arm's length principle, TP adjustments, documentation, Free Zone implications and FTA audit readiness.",
      canonical: `${SITE_URL}/tax-center/transfer-pricing`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
      keywords: "Transfer Pricing, TP, arm's length, related parties, TP study, documentation",
    });
  }, []);

  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background z-0" />
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
              <GitBranch className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Knowledge Hub</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-4">
              Transfer Pricing: Profit <span className="text-gradient-gold">Integrity & Compliance</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Under UAE Corporate Tax, Transfer Pricing tests whether profits booked in the UAE are fair and arm's length, especially when dealing with related parties. If pricing is not at Arm's Length, the FTA can add back the difference and apply 9% Corporate Tax on the adjusted amount.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/tax-center/transfer-pricing-calculator" className="btn-gold flex items-center justify-center gap-2">
                Go to Calculator
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services/transfer-pricing" className="btn-outline-gold flex items-center justify-center gap-2">
                View Advisory Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* TP Basics */}
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold font-serif text-foreground mb-6">Transfer Pricing Basics</h2>
              <p className="text-muted-foreground mb-6">
                Transfer Pricing (TP) is the framework that ensures transactions between Related Parties and Connected Persons are priced as if they were between independent, third parties — this is the Arm's Length Principle.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Typical TP Transaction Areas</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Sale/purchase of goods within the group</li>
                    <li>• Management fees and head office charges</li>
                    <li>• Technical and support services</li>
                    <li>• Royalties, IP and brand usage fees</li>
                    <li>• Intra-group loans, guarantees and notional interest</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Related Parties */}
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold font-serif text-foreground mb-6">Who is a Related Party / Connected Person?</h2>
              <div className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Parent / Holding Company</h3>
                  <p className="text-sm text-muted-foreground">Foreign parent owning the UAE entity. Management, royalty and financing charges from parent must be arm's length and justifiable.</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Subsidiaries & Sister Companies</h3>
                  <p className="text-sm text-muted-foreground">Multiple UAE or foreign entities under common control. Intercompany trading and shared services must reflect market-level margins.</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Owners & Key Shareholders</h3>
                  <p className="text-sm text-muted-foreground">Individual who owns or controls the UAE entity. Lease of property, director fees or service charges must be commercially reasonable.</p>
                </div>
              </div>
            </div>

            {/* Arm's Length Principle */}
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold font-serif text-foreground mb-6">The Arm's Length Principle</h2>
              <p className="text-muted-foreground mb-6">
                Arm's Length means the price or terms agreed between related parties must be the same as what independent parties would agree. If not, the FTA can adjust the price upwards (or margin downwards) and tax the difference.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-muted-foreground">
                  <strong>Example:</strong> Your UAE entity buys goods from a parent company at AED 100/unit. Independent competitors source the same goods at AED 85/unit. The FTA can adjust your cost to AED 85 and add back AED 15 per unit as a TP adjustment, increasing your Corporate Tax base.
                </p>
              </div>
            </div>

            {/* Documentation Requirements */}
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold font-serif text-foreground mb-6">TP Documentation Requirements</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Local File</h3>
                  <p className="text-muted-foreground">Entity-level TP policy, benchmarking studies, comparables analysis, and contemporaneous documentation supporting arm's length pricing</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Master File</h3>
                  <p className="text-muted-foreground">Group-level TP documentation, group structure, intra-group transactions, and overall TP strategy</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Contemporaneous Documentation</h3>
                  <p className="text-muted-foreground">Documentation prepared at or before the time of transaction — not retroactively created during audit</p>
                </div>
              </div>
            </div>

            {/* High-Risk Scenarios */}
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold font-serif text-foreground mb-6">High-Risk Transfer Pricing Scenarios</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span><strong>Intercompany loans:</strong> Interest rates must reflect market credit conditions. Below-market rates trigger FTA adjustment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span><strong>Management fees:</strong> Charged without clear service definition or benchmarking are often disallowed</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span><strong>Royalties & IP:</strong> Charging for IP without documented ownership or valuation study is audit-vulnerable</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span><strong>Free Zone transfers:</strong> Moving goods or services between Free Zone and Mainland at artificial pricing</span>
                </li>
              </ul>
            </div>

            {/* When to Seek Help */}
            <div className="glass-card rounded-xl p-6 md:p-8 border-primary/30 bg-primary/5">
              <h2 className="text-2xl font-bold font-serif text-foreground mb-6">When You Need TP Professional Support</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">✓</span>
                  <span>You have material intra-group transactions (goods, services, loans, IP)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">✓</span>
                  <span>You have Free Zone and Mainland entities transacting with each other</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">✓</span>
                  <span>Your group has cross-border related-party transactions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">✓</span>
                  <span>You're preparing for first Corporate Tax filing with related-party activity</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">✓</span>
                  <span>FTA has questioned related-party pricing or requested TP documentation</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-gold mt-6 inline-flex items-center gap-2">
                Request TP Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TransferPricingHub;
