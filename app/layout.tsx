import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShoppingCart from "@/components/ShoppingCart";
import { CartProvider } from "@/lib/cart";

export const metadata: Metadata = {
    title: "TrendBox - Discover the Latest Trends",
    description: "Explore our curated collection of premium products. From tech to fashion, find everything you love in one place.",
    keywords: ["e-commerce", "shopping", "fashion", "electronics", "lifestyle", "trending products"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/logo/trendbox-logo.jpg" />
            </head>
            <body>
                <CartProvider>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                    <ShoppingCart />
                </CartProvider>
            </body>
        </html>
    );
}
