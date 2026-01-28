import { Layout } from "@/components/layout/Layout";
import { Shield, Mail, Lock } from "lucide-react";
import { useEffect } from "react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const Privacy = () => {
  useEffect(() => {
    updateSEO({
      title: "Privacy Policy | VALORIN Finance & Advisory",
      description: "Our commitment to protecting your data. Learn how VALORIN handles your information with discretion and integrity.",
      canonical: `${SITE_URL}/privacy`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Privacy & Data Protection</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Privacy <span className="text-gradient-gold">Policy</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Last Updated: December 31, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-xl p-8 md:p-12 prose prose-lg dark:prose-invert max-w-none">
              
              <div className="mb-12 border-b border-border pb-8">
                <h2 className="text-2xl font-bold font-serif text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground">
                  VALORIN Finance & Advisory (“VALORIN”, “we”, “our”, or “us”) respects the privacy of visitors to our website and is committed to handling information responsibly, ethically, and with discretion.
                </p>
                <p className="text-muted-foreground">
                  This Privacy Policy explains, in clear and practical terms, how information may be handled when you visit our website or voluntarily interact with our advisory tools and contact forms.
                </p>
                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg my-6">
                  <p className="text-foreground font-medium m-0">
                    Our guiding principle is simple: we collect the minimum information necessary and treat all interactions as confidential.
                  </p>
                </div>
              </div>

              <div className="mb-12 border-b border-border pb-8">
                <h2 className="text-2xl font-bold font-serif text-foreground mb-4">2. Scope of This Policy</h2>
                <p className="text-muted-foreground mb-4">This Privacy Policy applies to:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                  <li>Visits to the VALORIN website</li>
                  <li>Voluntary use of contact forms, calculators, or advisory tools</li>
                  <li>Requests for information, consultations, or insights</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  It does <strong>not</strong> apply to third-party websites linked from our site.
                </p>
              </div>

              <div className="mb-12 border-b border-border pb-8">
                <h2 className="text-2xl font-bold font-serif text-foreground mb-4">3. Information You Voluntarily Provide</h2>
                <p className="text-muted-foreground mb-4">You may choose to provide limited information when you:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5 mb-6">
                  <li>Submit a contact or enquiry form</li>
                  <li>Use an advisory tool or diagnostic</li>
                  <li>Request a consultation or follow-up</li>
                </ul>
                <p className="text-muted-foreground mb-4">This information typically includes:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5 mb-6">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Company or business name</li>
                  <li>General business context you choose to share</li>
                </ul>
                <div className="bg-background/50 border border-border p-4 rounded-lg">
                  <p className="text-foreground font-bold mb-2">Important:</p>
                  <p className="text-muted-foreground m-0">
                    We do <strong>not</strong> require, request, or store detailed financial records, bank details, transaction data, or confidential accounting data through this website. Any information you provide is done so voluntarily and at your discretion.
                  </p>
                </div>
              </div>

              <div className="mb-12 border-b border-border pb-8">
                <h2 className="text-2xl font-bold font-serif text-foreground mb-4">4. Use of Advisory Tools and Calculators</h2>
                <p className="text-muted-foreground mb-4">
                  Our calculators, checklists, and diagnostic tools are designed to provide <strong>general management insight</strong>.
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5 mb-6">
                  <li>Inputs are used to generate on-screen results or reports requested by you</li>
                  <li>Submitted data is not used for profiling, automated decision-making, or resale</li>
                  <li>Reports generated are shared only with you and, where applicable, retained briefly for support or follow-up purposes</li>
                </ul>
                <p className="text-muted-foreground">
                  These tools are <strong>informational only</strong> and do not replace professional advice.
                </p>
              </div>

              <div className="mb-12 border-b border-border pb-8">
                <h2 className="text-2xl font-bold font-serif text-foreground mb-4">5. Automatically Collected Information</h2>
                <p className="text-muted-foreground mb-4">
                  Like most websites, limited technical information may be collected automatically to ensure basic functionality and performance, such as:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5 mb-6">
                  <li>Browser type</li>
                  <li>Device type</li>
                  <li>Pages visited</li>
                  <li>Approximate geographic region (not precise location)</li>
                </ul>
                <p className="text-muted-foreground mb-4">This information is:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5 mb-6">
                  <li>Aggregated</li>
                  <li>Non-identifying</li>
                  <li>Used solely to improve website stability and user experience</li>
                </ul>
                <p className="text-muted-foreground">
                  We do not use this information to identify individuals.
                </p>
              </div>

              <div className="mb-12 border-b border-border pb-8">
                <h2 className="text-2xl font-bold font-serif text-foreground mb-4">6. Cookies and Similar Technologies</h2>
                <p className="text-muted-foreground mb-4">Our website may use basic cookies for:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5 mb-6">
                  <li>Essential site functionality</li>
                  <li>Performance measurement</li>
                </ul>
                <p className="text-muted-foreground mb-4">Cookies are not used to:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5 mb-6">
                  <li>Track individuals across websites</li>
                  <li>Build marketing profiles</li>
                  <li>Collect sensitive personal information</li>
                </ul>
                <p className="text-muted-foreground">
                  You may disable cookies through your browser settings without affecting core site access.
                </p>
              </div>

              <div className="mb-12 border-b border-border pb-8">
                <h2 className="text-2xl font-bold font-serif text-foreground mb-4">7. How We Use Information</h2>
                <p className="text-muted-foreground mb-4">Information provided through the website may be used to:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5 mb-6">
                  <li>Respond to enquiries or requests you initiate</li>
                  <li>Share requested materials or reports</li>
                  <li>Improve the clarity and usefulness of our content</li>
                  <li>Maintain the security and integrity of our website</li>
                </ul>
                <p className="text-muted-foreground">
                  We do not use your information for unsolicited marketing.
                </p>
              </div>

              <div className="mb-12 border-b border-border pb-8">
                <h2 className="text-2xl font-bold font-serif text-foreground mb-4">8. Confidentiality and Ethical Handling</h2>
                <p className="text-muted-foreground mb-4">
                  As an advisory firm, confidentiality is fundamental to our approach.
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                  <li>Access to information is restricted to authorized personnel only</li>
                  <li>Information is not shared internally unless necessary to respond to your request</li>
                  <li>We are prepared to enter into Non-Disclosure Agreements (NDAs) where appropriate</li>
                </ul>
              </div>

              <div className="mb-12 border-b border-border pb-8">
                <h2 className="text-2xl font-bold font-serif text-foreground mb-4">9. Sharing of Information</h2>
                <p className="text-muted-foreground mb-4">We do not sell, rent, or trade personal information.</p>
                <p className="text-muted-foreground mb-4">Information may be shared only:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                  <li>With trusted service providers supporting website operations (e.g., hosting or email delivery), under confidentiality obligations</li>
                  <li>Where required by applicable law or regulatory authority</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>

              <div className="mb-12 border-b border-border pb-8">
                <h2 className="text-2xl font-bold font-serif text-foreground mb-4">10. Data Retention</h2>
                <p className="text-muted-foreground mb-4">
                  Information submitted through the website is retained only for as long as reasonably necessary to:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5 mb-6">
                  <li>Respond to your enquiry</li>
                  <li>Provide requested support</li>
                  <li>Meet legal or regulatory obligations, if any</li>
                </ul>
                <p className="text-muted-foreground">
                  We do not maintain long-term personal data repositories for website visitors.
                </p>
              </div>

              <div className="mb-12 border-b border-border pb-8">
                <h2 className="text-2xl font-bold font-serif text-foreground mb-4">11. Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We apply reasonable and appropriate technical measures to protect information, including:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5 mb-6">
                  <li>Secure hosting environments</li>
                  <li>Access controls</li>
                  <li>Encryption in transit where applicable</li>
                </ul>
                <p className="text-muted-foreground">
                  No internet transmission is entirely risk-free, but we take care to handle information responsibly.
                </p>
              </div>

              <div className="mb-12 border-b border-border pb-8">
                <h2 className="text-2xl font-bold font-serif text-foreground mb-4">12. Your Rights</h2>
                <p className="text-muted-foreground mb-4">Depending on your jurisdiction, you may have the right to:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5 mb-6">
                  <li>Request access to information you provided</li>
                  <li>Request correction or deletion of your information</li>
                  <li>Withdraw consent for future communications</li>
                </ul>
                <p className="text-muted-foreground">
                  Requests may be made by contacting us using the details below.
                </p>
              </div>

              <div className="mb-12 border-b border-border pb-8">
                <h2 className="text-2xl font-bold font-serif text-foreground mb-4">13. International Visitors</h2>
                <p className="text-muted-foreground">
                  VALORIN operates with international best practices in mind. Where applicable, we aim to align with recognized data protection principles without overstating regulatory coverage.
                </p>
              </div>

              <div className="mb-12 border-b border-border pb-8">
                <h2 className="text-2xl font-bold font-serif text-foreground mb-4">14. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal environment. The latest version will always be available on this page.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6">15. Contact</h2>
                <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                  <p className="text-muted-foreground mb-4">
                    For questions regarding this Privacy Policy or privacy practices, please contact:
                  </p>
                  <div className="flex flex-col gap-2">
                    <p className="font-bold text-foreground">VALORIN Finance & Advisory</p>
                    <div className="flex items-center gap-2 text-primary">
                      <Mail className="w-4 h-4" />
                      <a href="mailto:advisory@valorin.uk" className="hover:underline">advisory@valorin.uk</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-sm font-serif italic text-muted-foreground">
                  Finance with Integrity. Growth with Insight.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
