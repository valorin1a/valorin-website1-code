import React, { useEffect, useRef, useState } from "react";

type FieldHelpProps = {
  title?: string;      // Optional title inside popup
  helpText: React.ReactNode;    // Help text shown on click (ReactNode to allow bold/br tags)
};

export function FieldHelp({
  title = "Information",
  helpText
}: FieldHelpProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Close popup when clicking outside
  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Close popup on Escape key
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <span
      ref={ref}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        marginLeft: "8px", // Added margin for spacing from label text
        verticalAlign: "middle" // Align with text
      }}
    >
      <button
        type="button"
        aria-label="Information"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={(e) => {
          e.preventDefault(); // Prevent form submission or label activation
          e.stopPropagation(); // Stop event bubbling
          setOpen(v => !v);
        }}
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          border: "1px solid #94a3b8",
          background: "#ffffff",
          color: "#334155",
          cursor: "pointer",
          fontSize: 12,
          fontWeight: 700,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0 // Reset padding
        }}
      >
        ⓘ
      </button>

      {open && (
        <div
          role="dialog"
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: -10, // Slight adjustment
            width: 320,
            padding: 12,
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: 10,
            boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
            zIndex: 999,
            textAlign: "left" // Ensure text aligns left
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: 6, color: "#0f172a" }}>
            {title}
          </div>

          <div
            style={{
              color: "#334155", // Changed from red to slate-700 for better readability
              fontSize: 13,
              lineHeight: 1.4,
              fontWeight: 400 // Changed from 600 for body text
            }}
          >
            {helpText}
          </div>
        </div>
      )}
    </span>
  );
}
