import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Calculator, AlertCircle, Info, FileDown, RotateCcw, ArrowRight } from "lucide-react";
import { trackVATCalculation } from "@/lib/analytics";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

type VATMode = "exclude" | "include";
type SupplyOrigin = "mainland" | "designated_zone" | "export";
type SupplyType = "goods" | "services" | "new_res_property" | "res_rental" | "financial_service";

interface VATResult {
  netAmount: number;
  vatAmount: number;
  grossAmount: number;
  vatRate: number;
  rcmFlag: boolean;
  exportEvidence: boolean;
  notes: string;
}

interface ValidationErrors {
  amount?: string;
}

const VAT_RATE = 0.05;

const formatAED = (n: number): string => {
  return n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const VATCalculator = () => {
  const [amount, setAmount] = useState<string>("");
  const [mode, setMode] = useState<VATMode>("exclude");
  const [origin, setOrigin] = useState<SupplyOrigin>("mainland");
  const [supplyType, setSupplyType] = useState<SupplyType>("goods");
  const [result, setResult] = useState<VATResult | null>(null);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const navigate = useNavigate();

  useEffect(() => {
    updateSEO({
      title: "UAE VAT Calculator - Free Tax Calculation Tool",
      description: "Calculate your UAE VAT obligations with our free VAT calculator. Supports all supply types, origins, and special VAT treatments. Accurate and compliant with UAE VAT Decree-Law.",
      canonical: `${SITE_URL}/tax-hub/vat-calculator`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
      keywords: "VAT calculator, UAE VAT, VAT calculation, tax calculator, VAT treatment, designated zone",
    });
  }, []);

  const validateAmount = (value: string): boolean => {
    const newErrors: ValidationErrors = {};
    
    if (!value.trim()) {
      newErrors.amount = "Amount is required";
    } else {
      const numAmount = parseFloat(value);
      if (isNaN(numAmount)) {
        newErrors.amount = "Please enter a valid number";
      } else if (numAmount <= 0) {
        newErrors.amount = "Amount must be greater than 0";
      } else if (numAmount > 999999999) {
        newErrors.amount = "Amount must be less than 1 billion";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateVAT = () => {
    if (!validateAmount(amount)) {
      return;
    }

    const numAmount = parseFloat(amount);

    let net = numAmount;
    let vat = 0;
    let gross = numAmount;
    let vatRate = VAT_RATE;
    let rcmFlag = false;
    let exportEvidence = false;
    let notes = "Standard 5% VAT Treatment applied.";

    // Determine rate based on Supply Type
    if (supplyType === "new_res_property") {
      vatRate = 0;
      notes = "Zero-Rated (0%) Supply: Input VAT is recoverable.";
    } else if (supplyType === "res_rental" || supplyType === "financial_service") {
      vatRate = 0;
      notes = supplyType === "res_rental" 
        ? "Exempt Supply: No VAT charged. Input VAT may not be recoverable."
        : "Exempt Financial Service: No VAT charged. Input VAT may not be recoverable.";
    }

    // Adjust for Supply Origin
    if (origin === "export") {
      vatRate = 0;
      exportEvidence = true;
      notes = "Zero-Rated Export: VAT at 0%. Ensure export evidence is maintained for audit.";
    } else if (origin === "designated_zone" && supplyType === "goods") {
      vatRate = 0;
      notes = "Designated Zone (Goods): Zero-rated within the zone. Standard VAT applies on exit to Mainland.";
    }

    // Check for Reverse Charge Mechanism (imported services)
    if (origin === "mainland" && supplyType === "services") {
      // For imported services, RCM applies
      rcmFlag = false; // Set to true if user indicates imported service
    }

    // Calculate based on mode
    if (mode === "exclude") {
      net = numAmount;
      vat = net * vatRate;
      gross = net + vat;
    } else {
      gross = numAmount;
      net = gross / (1 + vatRate);
      vat = gross - net;
    }

    setResult({
      netAmount: net,
      vatAmount: vat,
      grossAmount: gross,
      vatRate: vatRate * 100,
      rcmFlag,
      exportEvidence,
      notes,
    });
    
    // Track calculation with analytics
    trackVATCalculation({
      mode: mode,
      origin: origin,
      supplyType: supplyType,
      rcFlag: rcmFlag
    });
  };

  const resetForm = () => {
    setAmount("");
    setMode("exclude");
    setOrigin("mainland");
    setSupplyType("goods");
    setResult(null);
  };

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
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

            {/* Header Section */}

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Tax Hub</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
              UAE <span className="text-gradient-gold">VAT Calculator</span>
            </h1>
            <p className="text-muted-foreground">
              Calculate your VAT obligations accurately based on UAE VAT Decree-Law provisions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Calculator Form */}
              <div className="glass-card rounded-xl p-6 md:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-6">Enter Details</h2>
                
                <div className="space-y-6">
                  {/* Amount Input */}
                  <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-foreground mb-2">
                      Amount (AED) <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="amount"
                      type="number"
                      value={amount}
                      onChange={(e) => {
                        setAmount(e.target.value);
                        setErrors({}); // Clear errors when user types
                      }}
                      onBlur={() => validateAmount(amount)}
                      placeholder="Enter amount"
                      aria-invalid={errors.amount ? "true" : "false"}
                      aria-describedby={errors.amount ? "amount-error" : undefined}
                      className={`calculator-input ${errors.amount ? "border-red-500" : ""}`}
                    />
                    {errors.amount && (
                      <p id="amount-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.amount}
                      </p>
                    )}
                  </div>

                  {/* Calculation Mode */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Calculation Mode
                    </label>
                    <select
                      value={mode}
                      onChange={(e) => setMode(e.target.value as VATMode)}
                      className="calculator-select"
                    >
                      <option value="exclude">Net Amount (Exclude VAT)</option>
                      <option value="include">Gross Amount (Include VAT)</option>
                    </select>
                  </div>

                  {/* Supply Origin */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Supply Origin (Tax Place)
                    </label>
                    <select
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value as SupplyOrigin)}
                      className="calculator-select"
                    >
                      <option value="mainland">UAE Mainland / Non-Freezone</option>
                      <option value="designated_zone">Designated Zone (Domestic Sale)</option>
                      <option value="export">Export of Goods/Services (Outside GCC)</option>
                    </select>
                  </div>

                  {/* Supply Type */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Type of Supply
                    </label>
                    <select
                      value={supplyType}
                      onChange={(e) => setSupplyType(e.target.value as SupplyType)}
                      className="calculator-select"
                    >
                      <option value="goods">Goods (Standard 5%)</option>
                      <option value="services">Services (Standard 5%)</option>
                      <option value="new_res_property">New Residential Property (Zero-Rated 0%)</option>
                      <option value="res_rental">Residential Rental (Exempt)</option>
                      <option value="financial_service">Certain Financial Services (Exempt)</option>
                    </select>
                    <p className="text-xs text-muted-foreground mt-2">
                      The final VAT treatment is determined by the specific criteria of the VAT Decree-Law.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button onClick={calculateVAT} className="btn-gold flex-1 flex items-center justify-center gap-2">
                      <Calculator className="w-4 h-4" />
                      Calculate VAT
                    </button>
                    <button onClick={resetForm} className="btn-outline-gold px-4">
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                {result ? (
                  <>
                    <div className="result-card">
                      <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-primary" />
                        VAT Calculation Result
                      </h2>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-border">
                          <span className="text-muted-foreground">Final VAT Rate Applied</span>
                          <span className="text-xl font-semibold text-primary">{result.vatRate}%</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-border">
                          <span className="text-muted-foreground">Net Amount</span>
                          <span className="text-lg font-medium text-foreground">AED {formatAED(result.netAmount)}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-border">
                          <span className="text-muted-foreground">VAT Amount</span>
                          <span className="text-lg font-medium text-primary">AED {formatAED(result.vatAmount)}</span>
                        </div>
                        <div className="flex justify-between items-center py-3">
                          <span className="text-muted-foreground">Gross Amount</span>
                          <span className="text-xl font-bold text-foreground">AED {formatAED(result.grossAmount)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Notes */}
                    <div className="glass-card rounded-xl p-5">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-foreground mb-1">Notes</h4>
                          <p className="text-sm text-muted-foreground">{result.notes}</p>
                        </div>
                      </div>
                    </div>

                    {result.exportEvidence && (
                      <div className="glass-card rounded-xl p-5 border-yellow-500/30">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-foreground mb-1">Export Documentation Required</h4>
                            <p className="text-sm text-muted-foreground">
                              Maintain proper export evidence including customs declarations and proof of export for audit purposes.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <button className="btn-outline-gold w-full flex items-center justify-center gap-2">
                      <FileDown className="w-4 h-4" />
                      Export Estimate (PDF)
                    </button>
                  </>
                ) : (
                  <div className="result-card flex flex-col items-center justify-center min-h-[300px] text-center">
                    <Calculator className="w-16 h-16 text-muted-foreground/30 mb-4" />
                    <h3 className="text-lg font-medium text-foreground mb-2">No Calculation Yet</h3>
                    <p className="text-sm text-muted-foreground max-w-xs">
                      Enter your details and click "Calculate VAT" to see the results here.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 rounded-lg bg-muted/50 border border-border">
              <p className="text-xs text-muted-foreground text-center">
                <strong>Disclaimer:</strong> This calculator provides estimates only and should not be considered as professional tax advice. 
                The final VAT treatment depends on the specific circumstances of each transaction and the provisions of the UAE VAT Decree-Law. 
                Please consult with a qualified tax professional for accurate guidance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VATCalculator;
