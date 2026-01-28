import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "@/components/ErrorBoundary";

// Main Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Tax Center & Calculators Hub
import TaxCenter from "./pages/TaxCenter";
import Calculators from "./pages/Calculators";
import CorporateTaxHub from "./pages/CorporateTaxHub";
import VATHub from "./pages/VATHub";
import VATKnowledgeHub from "./pages/VATKnowledgeHub";
import CorporateTaxKnowledgeHub from "./pages/CorporateTaxKnowledgeHub";
import VATRiskRadar from "./pages/VATRiskRadar";
import TransferPricingHub from "./pages/TransferPricingHub";
import ExciseTaxHub from "./pages/ExciseTaxHub";

// Legacy Tax Hub (can be removed in future)
import TaxHub from "./pages/TaxHub";

// Calculators
import VATCalculator from "./pages/VATCalculator";
import CTCalculator from "./pages/CorporateTaxCalculator";
import TransferPricingCalculator from "./pages/TransferPricingCalculator";
import ExciseTaxCalculator from "./pages/ExciseTaxCalculator";

// Services (9 only)
import Services from "./pages/Services";
import FractionalCFO from "./pages/FractionalCFO";
import CorporateTax from "./pages/CorporateTaxService";
import VATGovernance from "./pages/VATGovernanceService";
import TransferPricingService from "./pages/TransferPricingService";
import ExciseTaxService from "./pages/ExciseTaxService";
import ICVAdvisory from "./pages/ICVAdvisoryService";
import AccountingMIS from "./pages/AccountingMISService";
import ERPAdvisory from "./pages/ERPAdvisoryService";
import BankingFinancingService from "./pages/BankingFinancingService";
import MAValuation from "./pages/MAValuation";
import AuditRisk from "./pages/AuditRiskService";

// Industries
import Industries from "./pages/Industries";
import Manufacturing from "./pages/Manufacturing";
import Trading from "./pages/Trading";
import ServicesIndustry from "./pages/ServicesIndustry";

// Content & Legal
import CaseStudies from "./pages/CaseStudies";
import Insights from "./pages/Insights";
import Privacy from "./pages/Privacy";

// Advisory Tools
import VATHealthChecklist from "./pages/VATHealthChecklist";
import CorporateTaxHealthChecklist from "./pages/CorporateTaxHealthChecklist";
import CorporateTaxRiskChecklist from "./pages/CorporateTaxRiskChecklist";
import FinanceHealthCheckup from "./pages/FinanceHealthCheckup";
import Article from "./pages/Article";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5 }, // 5 minutes
  },
});

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Services (9 only) */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/fractional-cfo" element={<FractionalCFO />} />
            <Route path="/services/corporate-tax" element={<CorporateTax />} />
            <Route path="/services/vat-governance" element={<VATGovernance />} />
            <Route path="/services/transfer-pricing" element={<TransferPricingService />} />
            <Route path="/services/excise-tax" element={<ExciseTaxService />} />
            <Route path="/services/icv-advisory" element={<ICVAdvisory />} />
            <Route path="/services/accounting-mis" element={<AccountingMIS />} />
            <Route path="/services/erp-advisory" element={<ERPAdvisory />} />
            <Route path="/services/banking-financing" element={<BankingFinancingService />} />
            <Route path="/services/ma-valuation" element={<MAValuation />} />
            <Route path="/services/audit-risk" element={<AuditRisk />} />

            {/* Tax Center - NEW STRUCTURE */}
            <Route path="/tax-center" element={<TaxCenter />} />
            <Route path="/tax-center/corporate-tax" element={<CorporateTaxHub />} />
            <Route path="/tax-center/corporate-tax/knowledge-hub" element={<CorporateTaxKnowledgeHub />} />
            <Route path="/tax-center/vat" element={<VATHub />} />
            <Route path="/tax-center/vat/knowledge-hub" element={<VATKnowledgeHub />} />
            <Route path="/tax-center/vat/risk-radar" element={<VATRiskRadar />} />
            <Route path="/tax-center/transfer-pricing" element={<TransferPricingHub />} />
            <Route path="/tax-center/excise-tax" element={<ExciseTaxHub />} />

            {/* Calculators Hub */}
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/tax-center/corporate-tax-calculator" element={<CTCalculator />} />
            <Route path="/tax-center/vat-calculator" element={<VATCalculator />} />
            <Route path="/tax-center/transfer-pricing-calculator" element={<TransferPricingCalculator />} />
            <Route path="/tax-center/excise-tax-calculator" element={<ExciseTaxCalculator />} />

            {/* Advisory Tools */}
            <Route path="/advisory-tools/vat-health-checklist" element={<VATHealthChecklist />} />
            <Route path="/advisory-tools/corporate-tax-health-checklist" element={<CorporateTaxHealthChecklist />} />
            <Route path="/advisory-tools/corporate-tax-risk-checklist" element={<CorporateTaxRiskChecklist />} />
            <Route path="/advisory-tools/finance-health-checkup" element={<FinanceHealthCheckup />} />

            {/* Legacy Tax Hub - For backward compatibility (can be removed later) */}
            <Route path="/tax-hub" element={<TaxHub />} />
            <Route path="/tax-hub/vat-calculator" element={<VATCalculator />} />
            <Route path="/tax-hub/ct-calculator" element={<CTCalculator />} />

            {/* Industries */}
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/manufacturing" element={<Manufacturing />} />
            <Route path="/industries/trading" element={<Trading />} />
            <Route path="/industries/services" element={<ServicesIndustry />} />

            {/* Content */}
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<Article />} />

            {/* Legal */}
            <Route path="/privacy" element={<Privacy />} />

            {/* 404 - MUST BE LAST */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
