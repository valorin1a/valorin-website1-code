import React from "react";

type ResponsiveImageProps = {
  /**
   * Base path WITHOUT extension and WITHOUT width suffix.
   * Example: "/images/hero" will map to
   * /public/images/hero-1600.avif, /public/images/hero-800.webp, /public/images/hero-400.jpg
   */
  srcBase: string;
  alt: string;
  /** widths (px) that you provide for each image file */
  widths?: number[];
  /** sizes attribute for responsive images, default is full width */
  sizes?: string;
  className?: string;
  loading?: "lazy" | "eager";
  /** file extensions in order of preference */
  formats?: string[]; // e.g. ["avif","webp","jpg"]
};

/**
 * ResponsiveImage
 * Simple component that outputs a <picture> element with multiple formats and srcset entries.
 *
 * Usage notes:
 * - You must place pre-generated images in `public` following the naming convention:
 *     {srcBase}-{width}.{ext}
 *   Example: `/public/images/hero-1600.avif`, `/public/images/hero-800.webp`, `/public/images/hero-400.jpg`
 * - widths default to [1600, 800, 400]
 * - formats default to ["avif","webp","jpg"]
 *
 * This keeps runtime simple and avoids adding a heavy image-processing dependency.
 */

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  srcBase,
  alt,
  widths = [1600, 800, 400],
  sizes = "(max-width: 640px) 100vw, 50vw",
  className,
  loading = "lazy",
  formats = ["avif", "webp", "jpg"],
}) => {
  // Helper to build srcset for a given extension
  const buildSrcSet = (ext: string) =>
    widths
      .map((w) => `${srcBase}-${w}.${ext} ${w}w`)
      .join(", ");

  // Fallback img src: pick largest jpg/webp present
  const fallbackExt = formats.includes("jpg") ? "jpg" : formats[formats.length - 1];
  const fallbackSrc = `${srcBase}-${widths[0]}.${fallbackExt}`;

  return (
    <picture className={className}>
      {formats.map((ext) => (
        // For each format create a <source> with type and srcSet
        <source
          key={ext}
          type={ext === "jpg" || ext === "jpeg" ? "image/jpeg" : `image/${ext}`}
          srcSet={buildSrcSet(ext)}
          sizes={sizes}
        />
      ))}

      <img
        src={fallbackSrc}
        srcSet={buildSrcSet(fallbackExt)}
        sizes={sizes}
        alt={alt}
        loading={loading}
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </picture>
  );
};

export default ResponsiveImage;
