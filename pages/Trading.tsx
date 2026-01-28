import { Layout } from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { Ship, ArrowRight, TrendingDown, Globe, Percent } from "lucide-react";

const Trading = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
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
              <Ship className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Trading</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Trading & Distribution <span className="text-gradient-gold">Excellence</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl">
              Trading businesses operate on thin margins where landed cost accuracy, FX exposure management, and 
              customer/supplier profitability analysis are critical. VALORIN delivers CFO-level precision in pricing, 
              margin protection, and working capital optimization for trading enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-12 text-center">
            Common Trading <span className="text-gradient-gold">Challenges</span>
          </h2>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="glass-card rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <Ship className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Landed Cost Blind Spots</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Incomplete tracking of freight, customs, insurance, and handling costs leading to margin erosion.
              </p>
              <div className="text-xs text-destructive font-medium">Impact: 5-15% hidden cost leakage</div>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">FX Exposure Risk</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Unhedged currency exposure on USD/EUR purchases eroding margins when AED peg fluctuates.
              </p>
              <div className="text-xs text-destructive font-medium">Impact: 2-8% margin volatility</div>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <Percent className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Margin Mix Opacity</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Lack of customer/product margin analysis hiding unprofitable relationships.
              </p>
              <div className="text-xs text-destructive font-medium">Impact: Subsidizing loss-makers</div>
            </div>
          </div>
        </div>
      </section>

      {/* VALORIN Approach */}
      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
            VALORIN <span className="text-gradient-gold">Approach</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold font-serif text-foreground mb-4">1. True Landed Cost Calculation</h3>
              <p className="text-muted-foreground mb-4">
                We build a comprehensive landed cost model capturing: FOB/CIF price, freight (sea/air), insurance, 
                customs duties, VAT (recoverable/non-recoverable), port handling, inland transport, storage, and 
                quality inspection costs.
              </p>
              <div className="p-4 bg-background rounded-lg">
                <p className="text-sm font-medium text-foreground mb-2">Example: Electronics Importer</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Listed Purchase Price</p>
                    <p className="text-foreground">AED 100,000</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Hidden Costs (15%)</p>
                    <p className="text-destructive font-medium">AED 15,000</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Selling Price (Before)</p>
                    <p className="text-foreground">AED 120,000 (20% margin)</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Actual Margin (After)</p>
                    <p className="text-destructive font-medium">4.3% (Margin eroded!)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold font-serif text-foreground mb-4">2. FX Exposure Management</h3>
              <p className="text-muted-foreground mb-4">
                Monthly FX exposure dashboard tracking: open purchase orders in foreign currency, forward contracts 
                in place, natural hedges (USD revenue offsetting USD purchases), and unhedged exposure requiring action.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Total FX Exposure</p>
                  <p className="text-xl font-bold font-serif text-foreground">USD 2.5M</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Hedged</p>
                  <p className="text-xl font-bold font-serif text-primary">USD 1.8M</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Unhedged Risk</p>
                  <p className="text-xl font-bold font-serif text-destructive">USD 700K</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold font-serif text-foreground mb-4">3. Customer & Product Profitability</h3>
              <p className="text-muted-foreground mb-4">
                Margin matrix analyzing gross profit by customer, product line, and supplier. Identifies high-volume/low-margin 
                relationships requiring renegotiation and hidden champions worth protecting.
              </p>
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-sm text-primary font-medium mb-2">Strategic Insight</p>
                <p className="text-sm text-muted-foreground">
                  Customer A: 40% of revenue, 12% margin → profitable anchor <br/>
                  Customer B: 25% of revenue, 3% margin → negotiate better terms or exit <br/>
                  Customer C: 10% of revenue, 28% margin → expand relationship
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Deliverables */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-12 text-center">
            Sample <span className="text-gradient-gold">Deliverables</span>
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-3">Landed Cost Model</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• SKU-level cost breakdown</li>
                <li>• Freight allocation methodology</li>
                <li>• Customs duty calculations</li>
                <li>• Handling & storage costs</li>
              </ul>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-3">FX Exposure Dashboard</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Open PO currency summary</li>
                <li>• Forward contract tracking</li>
                <li>• Natural hedge identification</li>
                <li>• Unhedged exposure alerts</li>
              </ul>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-3">Margin Analysis Report</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Customer profitability matrix</li>
                <li>• Product line margin trends</li>
                <li>• Supplier cost comparison</li>
                <li>• Strategic recommendations</li>
              </ul>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-3">Working Capital Optimization</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• DSO/DPO analysis</li>
                <li>• Inventory turnover by category</li>
                <li>• Cash conversion cycle tracking</li>
                <li>• Supplier payment optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Diagnostic CTA */}
      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
              Request Trading <span className="text-gradient-gold">Diagnostic</span>
            </h2>
            <p className="text-muted-foreground mb-10">
              Get a confidential assessment of your landed cost accuracy, FX exposure, and margin opportunities.
            </p>
            
            <div className="glass-card rounded-xl p-8 text-left">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company Name *</label>
                    <input type="text" className="calculator-input" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Trading Focus</label>
                    <select className="calculator-select">
                      <option>Import/Distribution</option>
                      <option>Export</option>
                      <option>Re-Export/Entrepôt</option>
                      <option>Mixed</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Number of Active SKUs</label>
                    <input type="number" className="calculator-input" placeholder="e.g., 500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Average Gross Margin (%)</label>
                    <input type="number" className="calculator-input" step="0.1" placeholder="e.g., 18.5" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Primary Currencies Used</label>
                  <div className="grid grid-cols-4 gap-3">
                    {["USD", "EUR", "GBP", "CNY"].map((curr) => (
                      <label key={curr} className="flex items-center gap-2 p-3 rounded-lg bg-background border border-border hover:border-primary/30 cursor-pointer transition-colors">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="text-sm text-foreground">{curr}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Primary Pain Point *</label>
                  <select className="calculator-select" required>
                    <option value="">Select primary challenge</option>
                    <option>Inaccurate landed cost calculation</option>
                    <option>FX exposure management</option>
                    <option>Margin erosion/compression</option>
                    <option>Customer profitability analysis</option>
                    <option>Working capital constraints</option>
                    <option>Inventory valuation issues</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Additional Context</label>
                  <textarea className="calculator-input min-h-24" placeholder="Describe your supply chain, key suppliers/customers, ERP system..." />
                </div>
                
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="nda-trading" className="w-4 h-4" />
                  <label htmlFor="nda-trading" className="text-sm text-muted-foreground">
                    Request NDA for this diagnostic
                  </label>
                </div>
                
                <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                  <Ship className="w-5 h-5" />
                  Request Diagnostic
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Trading;
