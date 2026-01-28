import { Layout } from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { Users, ArrowRight, Calendar, DollarSign, FileCheck } from "lucide-react";

const ServicesIndustry = () => {
  const navigate = useNavigate();

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
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Professional Services <span className="text-gradient-gold">Finance</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl">
              Service businesses—consulting, engineering, IT, legal, advisory—monetize expertise and time. VALORIN 
              delivers CFO-level precision in project accounting, utilization tracking, and revenue recognition that 
              maximizes profitability and ensures compliance with IFRS 15.
            </p>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-12 text-center">
            Common Services <span className="text-gradient-gold">Challenges</span>
          </h2>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="glass-card rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Poor Utilization Tracking</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Inability to measure billable vs. non-billable hours, hiding team productivity issues.
              </p>
              <div className="text-xs text-destructive font-medium">Impact: 20-35% revenue leakage</div>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Revenue Recognition Errors</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Incorrect timing of revenue recognition (IFRS 15) on milestone or fixed-price projects.
              </p>
              <div className="text-xs text-destructive font-medium">Impact: Audit adjustments, restatements</div>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Project Profitability Blindness</h3>
              <p className="text-sm text-muted-foreground mb-4">
                No tracking of actual costs vs. budgets by project, hiding loss-making engagements.
              </p>
              <div className="text-xs text-destructive font-medium">Impact: Unprofitable projects continue</div>
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
              <h3 className="text-2xl font-bold font-serif text-foreground mb-4">1. Utilization & Realization Analytics</h3>
              <p className="text-muted-foreground mb-4">
                Real-time dashboards tracking: billable hours, non-billable hours (admin, training, bench time), 
                utilization rate %, realization rate (billed vs. collected), and individual consultant performance.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Target Utilization</p>
                  <p className="text-xl font-bold font-serif text-primary">75-85%</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Realization Rate</p>
                  <p className="text-xl font-bold font-serif text-primary">90%+</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Revenue per FTE</p>
                  <p className="text-xl font-bold font-serif text-primary">AED 450K+</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold font-serif text-foreground mb-4">2. Project Accounting & Profitability</h3>
              <p className="text-muted-foreground mb-4">
                Project-level P&L tracking: budgeted vs. actual costs (labor, expenses, subcontractors), 
                revenue recognized to date (POC method for fixed-price, T&M for time-based), and margin %.
              </p>
              <div className="p-4 bg-background rounded-lg">
                <p className="text-sm font-medium text-foreground mb-2">Example: IT Consulting Project</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Budgeted Cost</p>
                    <p className="text-foreground">AED 180,000</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Actual Cost (to date)</p>
                    <p className="text-foreground">AED 195,000</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Budgeted Revenue</p>
                    <p className="text-foreground">AED 250,000</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Projected Margin</p>
                    <p className="text-destructive font-medium">22% → 16% (Alert!)</p>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-primary/5 border border-primary/20 rounded">
                  <p className="text-xs text-primary">Action: Scope management, change order request, or accelerate delivery to control costs.</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold font-serif text-foreground mb-4">3. IFRS 15 Revenue Recognition</h3>
              <p className="text-muted-foreground mb-4">
                Automated revenue recognition based on contract terms: Percentage of Completion (POC) for fixed-price 
                projects, time-based for T&M, milestone-based for phased deliverables. Includes contract asset/liability 
                tracking and disclosure preparation.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Fixed-Price Projects</p>
                  <p className="text-sm text-foreground">POC method based on costs incurred / total estimated costs</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Retainer Agreements</p>
                  <p className="text-sm text-foreground">Straight-line over contract period or based on deliverables</p>
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
              <h3 className="font-semibold text-foreground mb-3">Utilization Dashboard</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Billable vs. non-billable hours</li>
                <li>• Consultant utilization rates</li>
                <li>• Bench time tracking</li>
                <li>• Revenue per consultant (RPC)</li>
              </ul>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-3">Project P&L Reports</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Budget vs. actual cost analysis</li>
                <li>• Revenue recognized to date</li>
                <li>• Margin % by project phase</li>
                <li>• Earned Value Management (EVM)</li>
              </ul>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-3">Revenue Recognition Schedule</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• IFRS 15 compliant calculations</li>
                <li>• Contract asset/liability tracking</li>
                <li>• Milestone completion documentation</li>
                <li>• POC method support</li>
              </ul>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-3">Client Profitability Matrix</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Revenue by client over time</li>
                <li>• Margin % by client</li>
                <li>• Realization rate analysis</li>
                <li>• Strategic account recommendations</li>
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
              Request Services <span className="text-gradient-gold">Diagnostic</span>
            </h2>
            <p className="text-muted-foreground mb-10">
              Get a confidential assessment of your utilization rates, project profitability, and revenue recognition controls.
            </p>
            
            <div className="glass-card rounded-xl p-8 text-left">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company Name *</label>
                    <input type="text" className="calculator-input" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Service Type</label>
                    <select className="calculator-select">
                      <option>Consulting</option>
                      <option>Engineering</option>
                      <option>IT Services</option>
                      <option>Legal/Advisory</option>
                      <option>Design/Creative</option>
                      <option>Other Professional Services</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Number of Fee Earners</label>
                    <input type="number" className="calculator-input" placeholder="e.g., 25" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Current Avg Utilization Rate (%)</label>
                    <input type="number" className="calculator-input" step="1" placeholder="e.g., 65" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Billing Model (Select all that apply)</label>
                  <div className="grid md:grid-cols-3 gap-3">
                    {["Time & Materials", "Fixed Price", "Retainer", "Milestone-based", "Contingency", "Mixed"].map((model) => (
                      <label key={model} className="flex items-center gap-2 p-3 rounded-lg bg-background border border-border hover:border-primary/30 cursor-pointer transition-colors">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="text-sm text-foreground">{model}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Primary Pain Point *</label>
                  <select className="calculator-select" required>
                    <option value="">Select primary challenge</option>
                    <option>Low utilization rates</option>
                    <option>Project profitability tracking</option>
                    <option>Revenue recognition compliance</option>
                    <option>Timesheet/billing accuracy</option>
                    <option>Client profitability analysis</option>
                    <option>Cash collection issues</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Additional Context</label>
                  <textarea className="calculator-input min-h-24" placeholder="Describe your business model, typical project duration, key challenges..." />
                </div>
                
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="nda-services" className="w-4 h-4" />
                  <label htmlFor="nda-services" className="text-sm text-muted-foreground">
                    Request NDA for this diagnostic
                  </label>
                </div>
                
                <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                  <Users className="w-5 h-5" />
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

export default ServicesIndustry;
