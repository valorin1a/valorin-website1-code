import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Calendar, BookOpen, User, ArrowRight, ArrowLeft } from "lucide-react";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";
import { articles } from "@/data/articles";

const Article = () => {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);
  const navigate = useNavigate();

  useEffect(() => {
    if (article) {
      updateSEO({
        title: article.seo?.metaTitle || article.title,
        description: article.seo?.metaDescription || article.excerpt,
        canonical: article.seo?.canonical 
          ? (article.seo.canonical.startsWith('http') ? article.seo.canonical : `${SITE_URL}/${article.seo.canonical.replace(/^\//, '')}`) 
          : `${SITE_URL}/insights/${article.slug}`,
        ogImage: DEFAULT_OG_IMAGE,
        ogType: "article",
        keywords: article.tags?.join(", ") || `${article.category}, ${article.title}`,
      });
    } else {
      updateSEO({
        title: "Article Not Found | VALORIN Insights",
        description: "The requested article could not be found.",
        canonical: `${SITE_URL}/insights/${slug}`,
        ogImage: DEFAULT_OG_IMAGE,
        ogType: "website",
      });
    }
  }, [article, slug]);

  if (!article) {
    return (
      <Layout>
        <section className="py-24 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you are looking for does not exist.</p>
            <Link to="/insights" className="btn-gold inline-flex items-center gap-2">
              Back to Insights
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-4">
            <button
              onClick={() => navigate(-1)}
              className="btn-back inline-flex items-center gap-2"
              aria-label="Go Back"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">{article.category}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              {article.title}
            </h1>
            {article.excerpt && (
              <p className="text-lg text-muted-foreground mb-6">
                {article.excerpt}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              {article.date && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>
              )}
              {article.readTime && <span>{article.readTime}</span>}
              {article.author && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {article.author}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="prose prose-invert max-w-4xl mx-auto">
            {article.content ? (
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            ) : (
              <p className="text-muted-foreground">
                Full content coming soon. Please check back later.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-6">
              Need CFO-Level Guidance?
            </h2>
            <p className="text-muted-foreground mb-8">
              Talk to our advisory team about implementing 13-week cash flow forecasting in your business.
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

export default Article;
