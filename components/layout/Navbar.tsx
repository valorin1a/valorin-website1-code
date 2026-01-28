import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      // Strategic & Operational Column
      { label: "Fractional CFO", href: "/services/fractional-cfo", category: "Ops" },
      { label: "Banking & Financing Advisory", href: "/services/banking-financing", category: "Ops" },
      { label: "Accounting & MIS Advisory", href: "/services/accounting-mis", category: "Ops" },
      { label: "ERP Advisory", href: "/services/erp-advisory", category: "Ops" },
      { label: "Audit & Risk Advisory", href: "/services/audit-risk", category: "Ops" },
      { label: "M&A Advisory", href: "/services/ma-valuation", category: "Ops" },

      // Tax & Compliance Column
      { label: "Corporate Tax Advisory", href: "/services/corporate-tax", category: "Tax" },
      { label: "VAT Advisory", href: "/services/vat-governance", category: "Tax" },
      { label: "Transfer Pricing", href: "/services/transfer-pricing", category: "Tax" },
      { label: "Excise Tax Services", href: "/services/excise-tax", category: "Tax" },
      { label: "ICV Advisory", href: "/services/icv-advisory", category: "Tax" },

    ]
  },
  {
    label: "Tax Center",
    href: "/tax-center",
    children: [
      { label: "VAT Advisory", href: "/tax-center/vat" },
      { label: "Corporate Tax Advisory", href: "/tax-center/corporate-tax" },
      { label: "Transfer Pricing Knowledge Hub", href: "/tax-center/transfer-pricing" },
      { label: "Excise Tax Knowledge Hub", href: "/tax-center/excise-tax" },
    ],
  },
  { label: "Tax Calculators", href: "/calculators" },
  {
    label: "Advisory Tools",
    href: "/industries",
    children: [
      { label: "Finance Health Assessment", href: "/advisory-tools/finance-health-checkup" }
    ]
  },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;
  const toggleExpanded = (key: string) => {
    setExpandedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/40"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 flex-shrink-0"
            aria-label="VALORIN Finance & Advisory - Home"
          >
            <div className="relative">
              <div className="w-9 h-9 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-black font-serif">V</span>
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-lg font-bold font-serif text-foreground tracking-wide leading-tight">VALORIN</span>
              <span className="text-[9px] text-muted-foreground tracking-widest uppercase leading-tight">Finance & Advisory</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.href}
                  className={`nav-link flex items-center gap-1 px-3 py-2 text-xs font-medium uppercase tracking-wider ${isActive(item.href) ? 'text-primary' : ''}`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  aria-haspopup={item.children ? "true" : undefined}
                  aria-expanded={item.children ? "false" : undefined}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" aria-hidden="true" />}
                </Link>
                {item.children && (
                  <div
                    className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                    role="menu"
                    aria-label={`${item.label} submenu`}
                  >
                    {/* Services Menu - Always use the structured layout */}
                    {item.label === "Services" ? (
                      <div className="bg-card border border-border rounded-lg shadow-2xl p-5 min-w-[500px] animate-fade-up">
                        <div className="grid grid-cols-2 gap-6">
                          {/* Strategic & Operational Column */}
                          <div>
                            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/30">
                              <div className="w-1 h-4 bg-primary rounded-full"></div>
                              <h3 className="text-xs font-bold text-primary uppercase tracking-wider">Strategic & Operational</h3>
                            </div>
                            <div className="space-y-1">
                              {item.children.filter(c => c.category === "Ops").map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.href}
                                  className="group/item flex items-center justify-between px-3 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted/50 transition-all duration-200 rounded-md font-medium"
                                  role="menuitem"
                                  aria-current={isActive(child.href) ? "page" : undefined}
                                >
                                  {child.label}
                                  <ChevronDown className="w-3 h-3 opacity-0 -rotate-90 group-hover/item:opacity-100 transition-all" />
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Tax & Compliance Column */}
                          <div>
                            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/30">
                              <div className="w-1 h-4 bg-primary rounded-full"></div>
                              <h3 className="text-xs font-bold text-primary uppercase tracking-wider">Tax & Compliance</h3>
                            </div>
                            <div className="space-y-1">
                              {item.children.filter(c => c.category === "Tax").map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.href}
                                  className="group/item flex items-center justify-between px-3 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted/50 transition-all duration-200 rounded-md font-medium"
                                  role="menuitem"
                                  aria-current={isActive(child.href) ? "page" : undefined}
                                >
                                  {child.label}
                                  <ChevronDown className="w-3 h-3 opacity-0 -rotate-90 group-hover/item:opacity-100 transition-all" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Standard Layout for other dropdowns (Advisory Tools, etc.)
                      <div className="bg-card border border-border rounded-lg shadow-xl py-3 min-w-[280px] animate-fade-up">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="group/item flex items-center justify-between mx-2 px-3 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-muted/50 transition-all duration-200 rounded-md font-medium"
                            role="menuitem"
                            aria-current={isActive(child.href) ? "page" : undefined}
                          >
                            {child.label}
                            <ChevronDown className="w-3 h-3 opacity-0 -rotate-90 group-hover/item:opacity-100 transition-all" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/971582754282"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label="WhatsApp us at +971 58 275 4282"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>+971 58 275 4282</span>
            </a>
            <Link to="/contact" className="btn-gold text-sm">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 z-[60] bg-background animate-fade-in flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-4 h-20 border-b border-border/40 shrink-0">
              <Link
                to="/"
                className="flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center">
                  <span className="text-base font-bold text-primary-foreground font-serif">V</span>
                </div>
                <span className="text-lg font-bold font-serif text-foreground tracking-wide">VALORIN</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 -mr-2 text-foreground/80 hover:text-primary transition-colors rounded-full hover:bg-muted"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 overflow-y-auto py-6 px-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-border/30 last:border-0 pb-2 mb-2 last:mb-0 last:pb-0">
                    {item.children ? (
                      <div className="space-y-2">
                        <button
                          onClick={() => toggleExpanded(item.label)}
                          className="flex items-center justify-between w-full py-2 text-base font-semibold text-foreground"
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${expandedItems[item.label] ? 'rotate-180' : ''
                              }`}
                          />
                        </button>

                        {/* Nested Submenu */}
                        {expandedItems[item.label] && (
                          <div className="pl-0 mt-4 pb-2 animate-fade-in">
                            {/* Grouped Services Handling - MATCHES REFERENCE IMAGE (2 Columns) */}
                            {item.label === "Services" ? (
                              <div className="grid grid-cols-2 gap-4">
                                {/* Left Column: Tax & Compliance */}
                                <div>
                                  <div className="flex items-center gap-2 mb-3">
                                    <div className="w-1 h-3 bg-gradient-gold rounded-full"></div>
                                    <h3 className="text-[10px] font-bold text-accent uppercase tracking-wider">Tax & Compliance</h3>
                                  </div>
                                  <div className="space-y-3">
                                    {item.children.filter(c => c.category === "Tax").map((child) => (
                                      <Link
                                        key={child.label}
                                        to={child.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-[11px] leading-tight text-muted-foreground hover:text-white transition-colors font-medium"
                                      >
                                        {child.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>

                                {/* Right Column: Strategic & Operational */}
                                <div>
                                  <div className="flex items-center gap-2 mb-3">
                                    <div className="w-1 h-3 bg-gradient-gold rounded-full"></div>
                                    <h3 className="text-[10px] font-bold text-accent uppercase tracking-wider">Strategic & Ops</h3>
                                  </div>
                                  <div className="space-y-3">
                                    {item.children.filter(c => c.category === "Ops").map((child) => (
                                      <Link
                                        key={child.label}
                                        to={child.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-[11px] leading-tight text-muted-foreground hover:text-white transition-colors font-medium"
                                      >
                                        {child.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              // Standard List for other dropdowns
                              <div className="space-y-2 pl-4 border-l border-border/30">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    to={child.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block py-2 text-base font-semibold transition-colors ${isActive(item.href) ? 'text-primary' : 'text-foreground'
                          }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Footer / CTA */}
            <div className="p-4 border-t border-border/40 bg-muted/20 shrink-0">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-gold hover:opacity-90 text-primary-foreground font-bold text-lg rounded-xl shadow-lg transition-all active:scale-[0.98]"
              >
                Get Started
              </Link>
              <div className="mt-4 text-center">
                <a
                  href="https://wa.me/971582754282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+971 58 275 4282</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
