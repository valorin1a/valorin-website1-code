import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Fractional CFO", href: "/services/fractional-cfo" },
    { label: "Accounting & MIS Advisory", href: "/services/accounting-mis" },
    { label: "ERP Advisory", href: "/services/erp-advisory" },
    { label: "Banking & Financing", href: "/services/banking-financing" },
    { label: "Audit & Risk Advisory", href: "/services/audit-risk" },
    { label: "M&A Advisory & Valuation", href: "/services/ma-valuation" },
    { label: "ICV Advisory", href: "/services/icv-advisory" },
  ],
  taxCenter: [
    { label: "Corporate Tax", href: "/tax-center/corporate-tax" },
    { label: "VAT", href: "/tax-center/vat" },
    { label: "Transfer Pricing", href: "/tax-center/transfer-pricing" },
    { label: "Excise Tax", href: "/tax-center/excise-tax" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-black font-serif">V</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-lg font-bold font-serif text-foreground">VALORIN</span>
                <span className="text-[9px] text-muted-foreground tracking-widest uppercase">Finance & Advisory</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Senior CFO leadership enabling disciplined growth in complex and regulated organizations.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/valorin-finance-advisory"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group w-10 h-10 rounded-lg bg-muted flex items-center justify-center transition-colors hover:bg-gradient-gold"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-black" />
              </a>
              <a
                href="https://x.com/ValorinFA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="group w-10 h-10 rounded-lg bg-muted flex items-center justify-center transition-colors hover:bg-gradient-gold"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-muted-foreground group-hover:text-black" aria-hidden="true">
                  <path d="M18 3h3l-7.5 9 7.5 9h-3l-6-7.2L6 21H3l7.5-9L3 3h3l6 7.2L18 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tax Center */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">Tax Center</h4>
            <ul className="space-y-3">
              {footerLinks.taxCenter.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <a href="tel:+971582754282" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +971 58 275 4282
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <a href="mailto:Advisory@valorin.uk" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  advisory@valorin.uk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Dubai, UAE
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              © 2024 VALORIN Finance & Advisory. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
