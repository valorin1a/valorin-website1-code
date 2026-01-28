import React, { useState } from "react";

type BlurImageProps = {
  src: string; // final image path (best to use a small set of breakpoints or a single large image)
  alt: string;
  placeholder?: string; // small base64 or low-res image path
  className?: string;
  width?: number | string;
  height?: number | string;
};

/**
 * BlurImage - simple blur-up placeholder pattern.
 * Provide a tiny placeholder (base64 or low-res file) to show while the main image loads.
 * If no placeholder provided, it will simply lazy-load the image.
 */
export const BlurImage: React.FC<BlurImageProps> = ({ src, alt, placeholder, className, width, height }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={className}
      style={{ position: "relative", overflow: "hidden", width: width || "100%", height: height || "auto" }}
    >
      {placeholder && (
        <img
          src={placeholder}
          alt={alt}
          aria-hidden
          style={{
            filter: "blur(12px)",
            transform: "scale(1.05)",
            transition: "opacity 300ms ease",
            width: "100%",
            height: "auto",
            display: loaded ? "none" : "block",
          }}
        />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height: "auto",
          display: loaded ? "block" : "none",
        }}
      />
    </div>
  );
};

export default BlurImage;
