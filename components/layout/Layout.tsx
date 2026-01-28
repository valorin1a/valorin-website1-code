import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Chatbot } from "../ui/Chatbot";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip to main content link for keyboard navigation accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2"
      >
        Skip to main content
      </a>

      <Navbar />

      <main
        id="main-content"
        className="flex-1 pt-20 md:pt-24"
        role="main"
        aria-label="Main content"
      >
        {children}
      </main>

      <Chatbot />
      <Footer />
    </div>
  );
};
