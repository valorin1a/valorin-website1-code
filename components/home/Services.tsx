import { memo } from "react";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  PieChart, 
  Landmark, 
  Receipt, 
  GitBranch, 
  Globe, 
  Flame, 
  Award, 
  BarChart2, 
  Target, 
  ShieldCheck,
  ArrowRight
} from "lucide-react";

const services = [
  // Row 1
  {
    icon: Briefcase,
    title: "Fractional CFO",
    description: "Strategic financial leadership, board packs, and executive coaching.",
    href: "/services/fractional-cfo",
  },
  {
    icon: Landmark,
    title: "Banking & Financing",
    description: "Trade finance, debt restructuring, and liquidity optimisation.",
    href: "/services/banking-financing",
  },
  {
    icon: BarChart2,
    title: "Accounting & MIS Advisory",
    description: "Month-end acceleration, COA design, and Power BI dashboards.",
    href: "/services/accounting-mis",
  },
  {
    icon: Target,
    title: "ERP Advisory",
    description: "Selection, implementation, and optimization for Oracle, Zoho & Odoo.",
    href: "/services/erp-advisory",
  },
  // Row 2
  {
    icon: Receipt,
    title: "Corporate Tax Advisory",
    description: "Structuring, filing and FTA audit defense for UAE Corporate Tax.",
    href: "/services/corporate-tax",
  },
  {
    icon: GitBranch,
    title: "VAT Advisory",
    description: "VAT governance, refund recovery, and risk mitigation strategies.",
    href: "/services/vat-governance",
  },
  {
    icon: Globe,
    title: "Transfer Pricing",
    description: "TP documentation, master/local files, and arm's length strategy support.",
    href: "/services/transfer-pricing",
  },
  {
    icon: Flame,
    title: "Excise Tax Services",
    description: "Registration, product registration, and compliance for excisable goods.",
    href: "/services/excise-tax",
  },
  // Row 3
  {
    icon: Award,
    title: "ICV Advisory",
    description: "In-Country Value score improvement and certification support.",
    href: "/services/icv-advisory",
  },
  {
    icon: ShieldCheck,
    title: "Audit & Risk Advisory",
    description: "Internal audit, risk management frameworks, and compliance assurance.",
    href: "/services/audit-risk",
  },
  {
    icon: PieChart,
    title: "M&A Advisory & Valuation",
    description: "Buy-side/sell-side advisory and independent business valuations.",
    href: "/services/ma-valuation",
  },
];

const ServicesComponent = () => {
  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
            Core Strategic <span className="text-gradient-gold">Pillars</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Executive-level financial expertise to transform your business operations and drive sustainable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="service-card group p-5 rounded-lg border border-border/40 hover:border-primary/40 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:bg-background/80"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-serif text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Services = memo(ServicesComponent);
