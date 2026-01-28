import { Layout } from "@/components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Calculator, Plus, Trash2, RefreshCcw, Info, AlertTriangle, Building2, Landmark } from "lucide-react";
import { useEffect, useState } from "react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";
import { cn } from "@/lib/utils";

type TransactionType = 'expense' | 'income';
type EntityType = 'mainland' | 'freezone';

interface TransactionRow {
  id: string;
  type: TransactionType;
  description: string;
  amount: number;
  armLength: number;
}

const TransferPricingCalculator = () => {
  useEffect(() => {
    updateSEO({
      title: "UAE Transfer Pricing Calculator (Multi-Transaction) | CT Add-Back Simulator | VALORIN",
      description: "Advanced UAE Transfer Pricing calculator supporting multiple related-party transactions, automatic arm’s length adjustments, Corporate Tax add-backs, and Free Zone risk flags.",
      canonical: `${SITE_URL}/tax-center/transfer-pricing-calculator`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
      keywords: "UAE Transfer Pricing Calculator, Arm's Length Adjustment, Corporate Tax Add-Backs, Related Party Transactions",
    });
  }, []);

  const navigate = useNavigate();
  const [entityType, setEntityType] = useState<EntityType>('mainland');
  const [rows, setRows] = useState<TransactionRow[]>([
    { id: '1', type: 'expense', description: '', amount: 0, armLength: 0 }
  ]);

  // Calculate results dynamically
  const results = rows.reduce((acc, row) => {
    let addBack = 0;
    
    if (row.type === 'expense') {
      // For expenses: If Actual > Arm's Length, the difference is disallowed (add-back)
      if (row.amount > row.armLength) {
        addBack = row.amount - row.armLength;
      }
    } else {
      // For income: If Actual < Arm's Length, the difference is taxable income (add-back)
      if (row.amount < row.armLength) {
        addBack = row.armLength - row.amount;
      }
    }

    return {
      totalAddBack: acc.totalAddBack + addBack,
      ctImpact: acc.ctImpact + (addBack * 0.09)
    };
  }, { totalAddBack: 0, ctImpact: 0 });

  const addRow = () => {
    setRows([
      ...rows,
      { id: Math.random().toString(36).substr(2, 9), type: 'expense', description: '', amount: 0, armLength: 0 }
    ]);
  };

  const removeRow = (id: string) => {
    if (rows.length > 1) {
      setRows(rows.filter(r => r.id !== id));
    }
  };

  const updateRow = (id: string, field: keyof TransactionRow, value: string | number) => {
    setRows(rows.map(row => {
      if (row.id === id) {
        return { ...row, [field]: value };
      }
      return row;
    }));
  };

  const resetCalculator = () => {
    setRows([{ id: Math.random().toString(36).substr(2, 9), type: 'expense', description: '', amount: 0, armLength: 0 }]);
    setEntityType('mainland');
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-AE', { style: 'currency', currency: 'AED' }).format(val);
  };

  return (
    <Layout>
      {/* SECTION 1 – HERO & POSITIONING */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            
            <div className="mb-8">
              <button 
                onClick={() => navigate(-1)} 
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline bg-background/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Go Back
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border border-primary/20 shadow-xl shadow-primary/5 shrink-0 backdrop-blur-sm">
                <Calculator className="w-10 h-10 text-primary" />
              </div>
              
              <div className="flex-1 space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground leading-tight">
                  Transfer Pricing <span className="text-gradient-gold">Calculator</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                  Evaluate <strong>multiple related-party transactions</strong> to identify mandatory Arm’s Length adjustments and estimate potential Corporate Tax add-backs.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                   {[
                    "Arm’s Length Testing",
                    "Add-Back Calculation",
                    "CT Impact Estimation"
                  ].map((tag, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-md border border-border/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-10 pt-8 border-t border-border/40">
              <div className="bg-background/50 border border-border/60 rounded-lg p-6 md:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                  <AlertTriangle className="w-4 h-4" />
                  <h3 className="text-sm font-bold uppercase tracking-widest">Important Transfer Pricing Disclaimer</h3>
                </div>
                
                <div className="space-y-4 text-sm text-muted-foreground/90 leading-relaxed">
                  <p>
                    This calculator estimates mandatory upward transfer pricing adjustments only, where related-party transactions are priced below arm’s length income or above arm’s length expense, resulting in an increase in Taxable Income under UAE Corporate Tax.
                  </p>
                  <p>
                    Downward transfer pricing differences (where expenses are below arm’s length or income exceeds arm’s length) are not reflected in the results, as such adjustments are not automatically deductible under UAE Corporate Tax and generally require prior approval from the Federal Tax Authority (FTA).
                  </p>
                  <p>
                    The estimated Corporate Tax impact is calculated at the standard 9% rate and is provided for scenario planning only. Actual tax outcomes depend on facts, benchmarking support, and regulatory review.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 & 3 – CALCULATOR INTERFACE */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            {/* Control Panel */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 p-6 rounded-xl glass-card border border-border/50 shadow-sm">
              <div className="flex items-center gap-3">
                <Calculator className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold font-serif text-foreground">Transaction Simulator</h2>
              </div>
              
              <div className="flex items-center bg-muted/50 p-1 rounded-lg border border-border">
                <button
                  onClick={() => setEntityType('mainland')}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300",
                    entityType === 'mainland' 
                      ? "bg-background text-primary shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Landmark className="w-4 h-4" />
                  Mainland Entity
                </button>
                <button
                  onClick={() => setEntityType('freezone')}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300",
                    entityType === 'freezone' 
                      ? "bg-background text-primary shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Building2 className="w-4 h-4" />
                  Free Zone (QFZP)
                </button>
              </div>
            </div>

            {/* Calculator Table */}
            <div className="glass-card rounded-2xl overflow-hidden border border-border/50 mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-muted/30 border-b border-border/50">
                      <th className="p-4 text-xs font-semibold uppercase text-muted-foreground tracking-wider w-[200px]">Transaction Type</th>
                      <th className="p-4 text-xs font-semibold uppercase text-muted-foreground tracking-wider">Transaction Description</th>
                      <th className="p-4 text-xs font-semibold uppercase text-muted-foreground tracking-wider">Actual Amount (AED)</th>
                      <th className="p-4 text-xs font-semibold uppercase text-muted-foreground tracking-wider">Arm's Length (AED)</th>
                      <th className="p-4 text-xs font-semibold uppercase text-muted-foreground tracking-wider w-[150px]">Status</th>
                      <th className="p-4 text-xs font-semibold uppercase text-muted-foreground tracking-wider w-[50px]"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30">
                    {rows.map((row, index) => {
                      const isExpense = row.type === 'expense';
                      const diff = isExpense ? row.amount - row.armLength : row.armLength - row.amount;
                      const hasRisk = isExpense ? row.amount > row.armLength : row.amount < row.armLength;

                      return (
                        <tr key={row.id} className="group hover:bg-muted/20 transition-colors">
                          <td className="p-4">
                            <select
                              value={row.type}
                              onChange={(e) => updateRow(row.id, 'type', e.target.value as TransactionType)}
                              className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                            >
                              <option value="expense">Expense (Payment)</option>
                              <option value="income">Income (Revenue)</option>
                            </select>
                          </td>
                          <td className="p-4">
                            <input
                              type="text"
                              value={row.description || ''}
                              onChange={(e) => updateRow(row.id, 'description', e.target.value)}
                              placeholder="Description..."
                              className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                            />
                          </td>
                          <td className="p-4">
                            <input
                              type="number"
                              min="0"
                              value={row.amount || ''}
                              onChange={(e) => updateRow(row.id, 'amount', parseFloat(e.target.value) || 0)}
                              placeholder="0.00"
                              className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors font-mono"
                            />
                          </td>
                          <td className="p-4">
                            <input
                              type="number"
                              min="0"
                              value={row.armLength || ''}
                              onChange={(e) => updateRow(row.id, 'armLength', parseFloat(e.target.value) || 0)}
                              placeholder="0.00"
                              className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors font-mono"
                            />
                          </td>
                          <td className="p-4">
                            {hasRisk ? (
                              <div className="flex flex-col">
                                <span className="text-xs font-bold text-red-500 flex items-center gap-1">
                                  <AlertTriangle className="w-3 h-3" />
                                  Add-Back
                                </span>
                                <span className="text-xs text-muted-foreground font-mono">
                                  {formatCurrency(Math.abs(diff))}
                                </span>
                              </div>
                            ) : (
                              <span className="text-xs font-medium text-emerald-500 flex items-center gap-1">
                                <Info className="w-3 h-3" />
                                Compliant
                              </span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {rows.length > 1 && (
                              <button
                                onClick={() => removeRow(row.id)}
                                className="text-muted-foreground hover:text-red-500 transition-colors p-1"
                                title="Remove Row"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              
              <div className="p-4 bg-muted/10 border-t border-border/50 flex justify-between items-center">
                <button
                  onClick={addRow}
                  className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Transaction
                </button>
                <button
                  onClick={resetCalculator}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <RefreshCcw className="w-3 h-3" />
                  Reset
                </button>
              </div>
            </div>

            {/* Results Summary */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Summary Card 1: Add-Backs */}
              <div className="glass-card rounded-xl p-6 border border-border/50 bg-gradient-to-br from-card to-muted/20">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Total Taxable Add-Backs</h3>
                <div className="text-3xl font-bold font-mono text-foreground mb-2">
                  {formatCurrency(results.totalAddBack)}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The aggregate amount to be added back to your Net Income for Corporate Tax purposes due to non-arm's length pricing.
                </p>
              </div>

              {/* Summary Card 2: CT Impact */}
              <div className={cn(
                "rounded-xl p-6 border transition-all duration-300",
                results.ctImpact > 0 
                  ? "bg-amber-500/10 border-amber-500/30" 
                  : "bg-emerald-500/10 border-emerald-500/30"
              )}>
                <h3 className={cn(
                  "text-sm font-medium uppercase tracking-wider mb-2",
                  results.ctImpact > 0 ? "text-amber-500" : "text-emerald-500"
                )}>
                  Estimated CT Impact (@ 9%)
                </h3>
                <div className={cn(
                  "text-3xl font-bold font-mono mb-2",
                  results.ctImpact > 0 ? "text-amber-500" : "text-emerald-500"
                )}>
                  {formatCurrency(results.ctImpact)}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Additional Corporate Tax liability resulting specifically from Transfer Pricing adjustments.
                  {entityType === 'freezone' && (
                    <span className="block mt-1 font-medium text-foreground">
                      *Note: For QFZPs, if QDI conditions are met, 0% may apply, but TP documentation remains mandatory.
                    </span>
                  )}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 – KEY INSIGHTS & CTA */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-serif text-foreground">
                Why Arm's Length Matters?
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Info className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Mandatory Compliance</h3>
                    <p className="text-sm text-muted-foreground">
                      All Related Party Transactions (domestic & foreign) must meet the Arm's Length Standard (Art. 34).
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Audit Trigger</h3>
                    <p className="text-sm text-muted-foreground">
                      Significant deviations without TP documentation (Master/Local File) are primary audit targets.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <RefreshCcw className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Self-Correction Mechanism</h3>
                    <p className="text-sm text-muted-foreground">
                      Entities must self-adjust taxable income if reported results are not arm's length.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-primary/20 bg-primary/5 text-center">
              <h3 className="text-2xl font-bold font-serif text-foreground mb-4">
                Need a Transfer Pricing Study?
              </h3>
              <p className="text-muted-foreground mb-8">
                Don't guess. Get a certified Benchmarking Study and TP Policy to defend your pricing strategy.
              </p>
              <Link 
                to="/services/transfer-pricing" 
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                View TP Advisory Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TransferPricingCalculator;
