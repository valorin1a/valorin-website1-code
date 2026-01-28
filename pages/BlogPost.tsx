import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { updateSEO, DEFAULT_OG_IMAGE, SITE_URL } from "@/components/ui/SEO";
import { getArticleBySlug } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = slug ? getArticleBySlug(slug) : undefined;

  useEffect(() => {
    if (article) {
      updateSEO({
        title: `${article.title} | VALORIN Insights`,
        description: article.excerpt,
        canonical: `${SITE_URL}/insights/${article.slug}`,
        ogImage: DEFAULT_OG_IMAGE,
        ogType: "article",
      });
    }
  }, [article]);

  if (!article) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <Button onClick={() => navigate("/insights")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Insights
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button 
            variant="ghost" 
            className="mb-8 pl-0 hover:pl-2 transition-all"
            onClick={() => navigate("/insights")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Insights
          </Button>

          <div className="mb-8">
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-medium">
                  {article.category}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-6 py-2 bg-muted/10 rounded-r-lg">
              {article.excerpt}
            </p>
          </div>

          <div 
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: article.content || "<p>Content coming soon...</p>" }}
          />

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-bold mb-4">Share this article</h3>
            {/* Social share buttons could go here */}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
