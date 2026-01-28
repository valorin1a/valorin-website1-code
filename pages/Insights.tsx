import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { BookOpen, TrendingUp, Database, Building2, DollarSign, Calendar, ArrowRight } from "lucide-react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";

import { articles } from "@/data/articles";

const Insights = () => {
  useEffect(() => {
    updateSEO({
      title: "VALORIN Insights - Finance & Tax Articles",
      description: "Read expert insights on UAE tax, corporate finance, ERP transformation, and CFO strategies. Financial articles and compliance guides.",
      canonical: `${SITE_URL}/insights`,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }, []);

  const categories = [
    { name: "Tax & Compliance", icon: DollarSign, count: 12 },
    { name: "ERP & Technology", icon: Database, count: 8 },
    { name: "Strategy & CFO Insights", icon: TrendingUp, count: 15 },
    { name: "Banking & Finance", icon: Building2, count: 6 }
  ];

  const featuredArticles = articles;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Insights & Resources</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
              CFO-Level <span className="text-gradient-gold">Insights</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Expert guidance on UAE finance, tax compliance, ERP systems, and CFO strategy. Written by practitioners 
              who've navigated these challenges firsthand.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 md:py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-4">
            {categories.map((category, i) => {
              const Icon = category.icon;
              return (
                <button
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">{category.name}</p>
                    <p className="text-xs text-muted-foreground">{category.count} articles</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-12 text-center">
            Featured <span className="text-gradient-gold">Articles</span>
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-6">
            {featuredArticles.map((article, i) => (
              <article key={i} className="glass-card rounded-xl p-8 hover:border-primary/30 transition-colors group">
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {article.category}
                      </span>
                      {article.date && (
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          {article.date}
                        </div>
                      )}
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <Link 
                      to={`/insights/${article.slug}`}
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
              Need Expert <span className="text-gradient-gold">Advice?</span>
            </h2>
            <p className="text-muted-foreground mb-10">
              Get in touch with our team for personalized financial and tax strategies.
            </p>
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2 px-8 py-3">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
