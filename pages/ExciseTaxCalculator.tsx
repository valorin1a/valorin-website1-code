import { Layout } from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Flame, Info, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

interface ExciseResult {
  product: string;
  quantity: number;
  pricePerUnit: number;
  taxableBase: number;
  rate: number;
  exciseTax: number;
}

const ExciseTaxCalculator = () => {
  const [product, setProduct] = useState<"tobacco" | "energy" | "eliquid" | "sweetened">("tobacco");
  const [taxPoint, setTaxPoint] = useState("import");
  const [quantity, setQuantity] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [result, setResult] = useState<ExciseResult | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    updateSEO({
      title: "Excise Tax Calculator | UAE Excise Liability Estimator | VALORIN",
      description: "Advanced UAE Excise Tax calculator for tobacco, energy drinks, e-smoking products, and sweetened drinks. Estimate excise liability on imports and production.",
      canonical: `${SITE_URL}/tax-center/excise-tax-calculator`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }, []);

  const getRate = (): number => {
    return product === "sweetened" ? 0.5 : 1.0;
  };

  const getProductLabel = (): string => {
    const labels: Record<typeof product, string> = {
      tobacco: "Tobacco Products (100%)",
      energy: "Energy Drinks (100%)",
      eliquid: "E-Smoking Liquids (100%)",
      sweetened: "Sweetened Drinks (50%)",
    };
    return labels[product];
  };

  const calculate = () => {
    const rate = getRate();
    const qty = parseFloat(quantity) || 0;
    const unitPrice = parseFloat(price) || 0;
    const taxableBase = qty * unitPrice;
    const exciseTax = taxableBase * rate;

    setResult({
      product: getProductLabel(),
      quantity: qty,
      pricePerUnit: unitPrice,
      taxableBase,
      rate,
      exciseTax,
    });
  };

  const reset = () => {
    setQuantity("");
    setPrice("");
    setResult(null);
  };

  const formatAED = (num: number) => {
    return new Intl.NumberFormat("en-AE", { style: "currency", currency: "AED", minimumFractionDigits: 0 }).format(num);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-6">
              <button 
                onClick={() => navigate(-1)} 
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline bg-background/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Go Back
              </button>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Flame className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Excise Tax Calculator</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Excise Tax <br />
              <span className="text-gradient-gold">Liability Estimator</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-3xl">
              Estimate your Excise Tax payable in the UAE based on product classification, applicable rate, and tax point trigger. This is a cash tax due before sale and is non-recoverable.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Info Panels */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="glass-card rounded-xl p-6 border border-primary/20">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">Tax-Point Trigger</p>
                    <p className="text-xs text-muted-foreground">Excise tax is due at the earliest event: import, production, or release from designated zone.</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6 border border-destructive/20">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">Non-Recoverable</p>
                    <p className="text-xs text-muted-foreground">Excise Tax is NOT recoverable under VAT. It directly impacts cash flow and profitability.</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6 border border-primary/20">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">Valuation Basis</p>
                    <p className="text-xs text-muted-foreground">Use the higher of Designated Retail Price (DRP) or Standard Price (FTA method).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculator Card */}
            <div className="glass-card rounded-xl p-8 md:p-12 mb-12 shadow-lg border border-primary/10">
              <h2 className="text-3xl font-bold font-serif text-foreground mb-10">
                <span className="text-gradient-gold">Excise Tax</span> Calculation Engine
              </h2>

              {/* Product Selection */}
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <Flame className="w-5 h-5 text-primary" />
                  <label className="text-lg font-semibold text-foreground">Excisable Product Category</label>
                </div>
                <select
                  value={product}
                  onChange={(e) => setProduct(e.target.value as typeof product)}
                  className="w-full px-5 py-4 rounded-lg border-2 border-input bg-background text-foreground font-medium focus:border-primary transition-colors"
                >
                  <option value="tobacco">Tobacco Products (100% Rate)</option>
                  <option value="energy">Energy Drinks (100% Rate)</option>
                  <option value="eliquid">E-Smoking Liquids (100% Rate)</option>
                  <option value="sweetened">Sweetened Drinks (50% Rate)</option>
                </select>
                <p className="text-sm text-muted-foreground mt-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  All products must be classified under UAE Federal Excise Law.
                </p>
              </div>

              {/* Tax Point Selection */}
              <div className="mb-10">
                <label className="text-lg font-semibold text-foreground mb-4 block">Tax Point Trigger Event</label>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { value: "import", label: "Import into UAE", desc: "First event for imported goods" },
                    { value: "production", label: "Local Production", desc: "First event for locally produced" },
                    { value: "dz", label: "Release from DZ", desc: "Designated Zone release point" },
                    { value: "stockpiling", label: "Stockpiling", desc: "Deemed production event" }
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => setTaxPoint(option.value)}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        taxPoint === option.value
                          ? 'border-primary bg-primary/5'
                          : 'border-input hover:border-primary/50'
                      }`}
                    >
                      <p className="font-semibold text-foreground">{option.label}</p>
                      <p className="text-xs text-muted-foreground mt-1">{option.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                {/* Quantity */}
                <div>
                  <label className="text-lg font-semibold text-foreground block mb-4">Quantity (Units / Liters)</label>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g., 1000"
                    className="w-full px-6 py-4 rounded-lg border-2 border-input bg-background text-foreground text-lg font-semibold focus:border-primary focus:outline-none transition-colors"
                  />
                  <p className="text-xs text-muted-foreground mt-3">Example: 1,000 packs, 500 cartons, or 1,000 liters</p>
                </div>

                {/* Excise Price */}
                <div>
                  <label className="text-lg font-semibold text-foreground block mb-4">Excise Price per Unit (AED)</label>
                  <div className="relative">
                    <span className="absolute left-6 top-4 text-foreground font-semibold text-lg">AED</span>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="e.g., 100"
                      className="w-full px-6 py-4 pl-20 rounded-lg border-2 border-input bg-background text-foreground text-lg font-semibold focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">Use the higher of Designated Retail Price (DRP) or Standard Price</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={calculate}
                  className="flex-1 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-lg transition-all font-semibold text-lg flex items-center justify-center gap-2"
                >
                  <TrendingUp className="w-5 h-5" />
                  Calculate Excise Tax
                </button>
                <button
                  onClick={reset}
                  className="px-8 py-4 rounded-lg border-2 border-input bg-card hover:bg-card/80 transition font-semibold"
                >
                  Reset Form
                </button>
              </div>
            </div>

            {/* Results */}
            {result && (
              <div className="space-y-8 mb-12 animate-in fade-in">
                <div className="glass-card rounded-xl p-8 md:p-12 shadow-lg border border-primary/10">
                  <h2 className="text-3xl font-bold font-serif text-foreground mb-10">
                    Excise Tax <span className="text-gradient-gold">Calculation Results</span>
                  </h2>

                  {/* Calculation Breakdown - 4 Column Grid */}
                  <div className="grid md:grid-cols-4 gap-4 mb-10">
                    <div className="p-6 rounded-lg border border-input bg-card/50">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Product</p>
                      <p className="text-lg font-bold text-foreground">{result.product}</p>
                    </div>
                    <div className="p-6 rounded-lg border border-input bg-card/50">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Quantity</p>
                      <p className="text-lg font-bold text-foreground">{result.quantity.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground mt-1">Units/Liters</p>
                    </div>
                    <div className="p-6 rounded-lg border border-input bg-card/50">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Unit Price</p>
                      <p className="text-lg font-bold text-foreground">{formatAED(result.pricePerUnit)}</p>
                    </div>
                    <div className="p-6 rounded-lg border border-input bg-card/50">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Tax Rate</p>
                      <p className="text-lg font-bold text-primary">{(result.rate * 100).toFixed(0)}%</p>
                    </div>
                  </div>

                  {/* Calculation Steps */}
                  <div className="mb-10 p-8 rounded-lg bg-gradient-to-r from-primary/5 to-transparent border border-primary/20">
                    <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wide mb-4">Calculation Breakdown</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <p className="text-foreground">Quantity × Price per Unit</p>
                        <p className="font-semibold text-foreground">
                          {result.quantity.toLocaleString()} × {formatAED(result.pricePerUnit)}
                        </p>
                      </div>
                      <div className="h-px bg-gradient-to-r from-primary/20 to-transparent" />
                      <div className="flex items-center justify-between text-lg">
                        <p className="text-foreground font-semibold">Taxable Base</p>
                        <p className="text-2xl font-bold text-primary">{formatAED(result.taxableBase)}</p>
                      </div>
                    </div>
                  </div>

                  {/* Final Excise Tax - Prominent Display */}
                  <div className="p-8 rounded-xl border-2 border-destructive/30 bg-gradient-to-br from-destructive/10 to-destructive/5">
                    <p className="text-sm font-semibold text-destructive uppercase tracking-widest mb-3">EXCISE TAX PAYABLE</p>
                    <div className="flex items-baseline gap-3 mb-4">
                      <p className="text-5xl font-black text-destructive">{formatAED(result.exciseTax)}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {formatAED(result.taxableBase)} × {(result.rate * 100).toFixed(0)}% = {formatAED(result.exciseTax)}
                    </p>
                  </div>
                </div>

                {/* Important Note */}
                <div className="glass-card rounded-xl p-8 border-l-4 border-l-destructive bg-destructive/5">
                  <div className="flex gap-4">
                    <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground mb-2">Key Compliance Considerations</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Excise Tax is due <strong>before sale</strong> and cannot be recovered</li>
                        <li>• Must be remitted monthly to Federal Tax Authority</li>
                        <li>• Non-payment triggers penalties, fines, and potential criminal liability</li>
                        <li>• Requires accurate valuation methods (DRP or Standard Price)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div className="glass-card rounded-xl p-8 md:p-12 text-center border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <Flame className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-4">
                Need Expert <span className="text-gradient-gold">Excise Tax</span> Support?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Our Excise Tax specialists provide end-to-end support: registration, valuation guidance, Designated Zone management, monthly filing compliance, and FTA audit defence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition font-semibold"
                >
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/services/excise-tax"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-primary text-primary hover:bg-primary/5 transition font-semibold"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ExciseTaxCalculator;
