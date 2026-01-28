import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { About } from "@/components/home/About";
import { CTA } from "@/components/home/CTA";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

const Index = () => {
  useEffect(() => {
    updateSEO({
      title: "CFO Advisory & Financial Consulting UAE",
      description: "Executive-led CFO advisory, finance transformation, and tax optimization for UAE businesses. Fractional CFO, ERP, and tax consulting services.",
      keywords: "CFO, financial consulting, UAE, finance advisory, ERP transformation, tax optimization",
      canonical: SITE_URL,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }, []);

  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <CTA />
    </Layout>
  );
};

export default Index;
