/**
 * SEO Component for managing meta tags and open graph data
 * Since we're using Vite without react-helmet, we manually update document head
 * This component provides a clean API for setting page-level SEO metadata
 */

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "business.business";
  keywords?: string;
  author?: string;
  twitterHandle?: string;
  children?: React.ReactNode;
}

/**
 * Update document head with SEO metadata
 * Call this in useEffect on page mount
 */
export const updateSEO = (props: SEOProps) => {
  // Update title
  document.title = `${props.title} | VALORIN Finance & Advisory`;

  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute("content", props.description);

  // Update or create keywords meta
  if (props.keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", props.keywords);
  }

  // Update or create author meta
  if (props.author) {
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement("meta");
      metaAuthor.setAttribute("name", "author");
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute("content", props.author);
  }

  // Update or create canonical link
  if (props.canonical) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", props.canonical);
  }

  // Update or create Open Graph meta tags
  const ogTags = [
    { property: "og:title", content: props.title },
    { property: "og:description", content: props.description },
    { property: "og:type", content: props.ogType || "website" },
  ];

  if (props.ogImage) {
    ogTags.push({ property: "og:image", content: props.ogImage });
    ogTags.push({ property: "og:image:alt", content: props.title });
  }

  ogTags.forEach(({ property, content }) => {
    let meta = document.querySelector(`meta[property="${property}"]`);
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("property", property);
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  });

  // Update or create Twitter Card meta tags
  if (props.twitterHandle) {
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:creator", content: props.twitterHandle },
      { name: "twitter:title", content: props.title },
      { name: "twitter:description", content: props.description },
    ];

    if (props.ogImage) {
      twitterTags.push({ name: "twitter:image", content: props.ogImage });
    }

    twitterTags.forEach(({ name, content }) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    });
  }
};

/**
 * SEO Component - wraps page content and manages SEO metadata
 * Usage: <SEO {...seoProps}>{children}</SEO>
 */
export const SEO = (props: SEOProps) => {
  updateSEO(props);
  return props.children || null;
};

// Default SEO configuration for the site
export const DEFAULT_OG_IMAGE = "https://valorin.ae/og-image.jpg";
export const SITE_URL = "https://valorin.ae";
export const TWITTER_HANDLE = "@VALORIN_Advisory";
