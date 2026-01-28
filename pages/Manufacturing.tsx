import { Layout } from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { Factory, ArrowRight, TrendingUp, Package, DollarSign, BarChart3 } from "lucide-react";

const Manufacturing = () => {
  const navigate = useNavigate();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
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
              <Factory className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Manufacturing</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Manufacturing <span className="text-gradient-gold">Finance Excellence</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl">
              Manufacturing demands precision in costing, yield management, and inventory control. VALORIN delivers 
              CFO-level expertise in Bill of Materials (BOM) accuracy, overhead absorption, and real-time production 
              analytics that drive margin improvement and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-12 text-center">
            Common Manufacturing <span className="text-gradient-gold">Challenges</span>
          </h2>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="glass-card rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Inaccurate Costing</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Bill of Materials (BOM) errors leading to understated production costs and margin erosion.
              </p>
              <div className="text-xs text-destructive font-medium">Impact: 15-25% margin leakage</div>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Poor Yield Tracking</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Inability to measure actual vs. standard yield rates, hiding production inefficiencies.
              </p>
              <div className="text-xs text-destructive font-medium">Impact: 10-20% waste undetected</div>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Overhead Allocation Issues</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Incorrect factory overhead absorption distorting true product profitability.
              </p>
              <div className="text-xs text-destructive font-medium">Impact: Mispriced products</div>
            </div>
          </div>
        </div>
      </section>

      {/* VALORIN Approach */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-12 text-center">
              The VALORIN <span className="text-gradient-gold">Approach</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold font-serif text-foreground mb-4">1. BOM Accuracy & Costing Framework</h3>
              <p className="text-muted-foreground mb-4">
                We audit your Bill of Materials against actual production records, identifying discrepancies in raw material 
                consumption, labor hours, and machine time. Result: true unit costs and margin visibility.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">BOM Accuracy Target</p>
                  <p className="text-xl font-bold font-serif text-primary">99%+</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Cost Variance Reduction</p>
                  <p className="text-xl font-bold font-serif text-primary">85%</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Margin Improvement</p>
                  <p className="text-xl font-bold font-serif text-primary">3-7%</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold font-serif text-foreground mb-4">2. Yield Rate Monitoring</h3>
              <p className="text-muted-foreground mb-4">
                Real-time dashboards tracking actual yield vs. standard yield by product line. Variance alerts trigger 
                root-cause analysis (quality issues, machine efficiency, operator training gaps).
              </p>
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-sm text-primary font-medium mb-2">Example Output</p>
                <p className="text-sm text-muted-foreground">
                  Product X: Standard yield 95%, actual yield 87% → Investigation reveals faulty tooling → 
                  Fix implemented → Yield recovered to 94%, saving AED 120K annually.
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold font-serif text-foreground mb-4">3. Overhead Absorption & Product Profitability</h3>
              <p className="text-muted-foreground mb-4">
                Activity-Based Costing (ABC) to allocate factory overheads (rent, utilities, depreciation, supervision) 
                to products based on actual resource consumption, not arbitrary percentages.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Before ABC</p>
                  <p className="text-sm text-foreground">Product A appears profitable at 18% margin</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">After ABC</p>
                  <p className="text-sm text-primary font-medium">Product A actually loss-making at -2% margin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Deliverables */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
            Sample <span className="text-gradient-gold">Deliverables</span>
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-3">Production Cost Dashboard</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Real-time unit cost by product</li>
                <li>• Material, labor, overhead breakdown</li>
                <li>• Variance analysis (actual vs. standard)</li>
                <li>• Trend charts for cost drivers</li>
              </ul>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-3">Yield Analysis Report</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Standard vs. actual yield by SKU</li>
                <li>• Scrap/waste quantification (AED)</li>
                <li>• Root-cause investigation findings</li>
                <li>• Corrective action tracking</li>
              </ul>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-3">Product Profitability Matrix</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Gross margin by product line</li>
                <li>• Contribution margin analysis</li>
                <li>• ABC-based overhead allocation</li>
                <li>• Strategic recommendations</li>
              </ul>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-3">Inventory Controls Framework</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Cycle count procedures</li>
                <li>• Obsolescence reserve methodology</li>
                <li>• Minimum/maximum stock levels</li>
                <li>• FIFO/LIFO compliance</li>
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
              Request Manufacturing <span className="text-gradient-gold">Diagnostic</span>
            </h2>
            <p className="text-muted-foreground mb-10">
              Get a confidential assessment of your costing accuracy, yield efficiency, and margin opportunities.
            </p>
            
            <div className="glass-card rounded-xl p-8 text-left">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company Name *</label>
                    <input type="text" className="calculator-input" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Manufacturing Type</label>
                    <select className="calculator-select">
                      <option>Discrete Manufacturing</option>
                      <option>Process Manufacturing</option>
                      <option>Mixed-Mode</option>
                      <option>Assembly/Fabrication</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Number of SKUs Produced</label>
                    <input type="number" className="calculator-input" placeholder="e.g., 150" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Average Monthly Production Volume</label>
                    <input type="text" className="calculator-input" placeholder="Units or AED value" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Primary Pain Point *</label>
                  <select className="calculator-select" required>
                    <option value="">Select primary challenge</option>
                    <option>Inaccurate product costing</option>
                    <option>High scrap/waste rates</option>
                    <option>Poor margin visibility</option>
                    <option>Inventory valuation issues</option>
                    <option>Overhead allocation problems</option>
                    <option>Lack of real-time production data</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Additional Context</label>
                  <textarea className="calculator-input min-h-24" placeholder="Describe your specific challenges, ERP system used, current costing method..." />
                </div>
                
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="nda-mfg" className="w-4 h-4" />
                  <label htmlFor="nda-mfg" className="text-sm text-muted-foreground">
                    Request NDA for this diagnostic
                  </label>
                </div>
                
                <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                  <DollarSign className="w-5 h-5" />
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

export default Manufacturing;
