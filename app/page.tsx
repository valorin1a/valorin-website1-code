'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import { products } from '@/lib/products';
import {
    FiMonitor,
    FiShoppingBag,
    FiHome,
    FiHeart,
    FiTruck,
    FiShield,
    FiHeadphones,
    FiRefreshCw,
} from 'react-icons/fi';

export default function Home() {
    const featuredProducts = products.filter(p => p.isNew || p.isSale).slice(0, 8);
    const allProducts = products.slice(0, 8);

    const categoryData = [
        {
            name: 'Electronics',
            icon: FiMonitor,
            itemCount: products.filter(p => p.category === 'Electronics').length,
            href: '/shop?category=Electronics',
        },
        {
            name: 'Fashion',
            icon: FiShoppingBag,
            itemCount: products.filter(p => p.category === 'Fashion').length,
            href: '/shop?category=Fashion',
        },
        {
            name: 'Home & Living',
            icon: FiHome,
            itemCount: products.filter(p => p.category === 'Home & Living').length,
            href: '/shop?category=Home & Living',
        },
        {
            name: 'Beauty',
            icon: FiHeart,
            itemCount: products.filter(p => p.category === 'Beauty').length,
            href: '/shop?category=Beauty',
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <Hero />

            {/* Featured Categories */}
            <section className="section-padding bg-primary-gray/50">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Shop by <span className="text-gradient">Category</span>
                        </h2>
                        <div className="section-divider"></div>
                        <p className="text-lg text-medium-gray max-w-2xl mx-auto mt-4">
                            Browse our diverse range of products across different categories
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categoryData.map((category) => (
                            <CategoryCard key={category.name} {...category} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            {featuredProducts.length > 0 && (
                <section className="section-padding bg-primary-gray/50">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                Featured <span className="text-gradient">Products</span>
                            </h2>
                            <div className="section-divider"></div>
                            <p className="text-lg text-medium-gray max-w-2xl mx-auto mt-4">
                                Check out our newest arrivals and special deals
                            </p>
                        </div>

                        <div className="grid-products">
                            {featuredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link href="/shop" className="btn btn-primary text-lg">
                                View All Products
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Trending Products */}
            <section className="section-padding bg-primary-gray/50">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Trending <span className="text-gradient">Now</span>
                        </h2>
                        <div className="section-divider"></div>
                        <p className="text-lg text-medium-gray max-w-2xl mx-auto mt-4">
                            Most popular products loved by our customers
                        </p>
                    </div>

                    <div className="grid-products">
                        {allProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-primary-gray/50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Why Choose <span className="text-gradient">TrendBox</span>
                        </h2>
                        <div className="section-divider"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center space-y-4 p-8 bg-white rounded-3xl shadow-sm border border-light-gray/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="inline-flex p-5 bg-accent-gold/10 rounded-2xl mb-2">
                                <FiTruck size={32} className="text-accent-gold" />
                            </div>
                            <h3 className="text-xl font-bold text-primary-black">Free Shipping</h3>
                            <p className="text-medium-gray font-medium">
                                Free shipping on all orders over $50
                            </p>
                        </div>

                        <div className="text-center space-y-4 p-8 bg-white rounded-3xl shadow-sm border border-light-gray/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="inline-flex p-5 bg-accent-gold/10 rounded-2xl mb-2">
                                <FiShield size={32} className="text-accent-gold" />
                            </div>
                            <h3 className="text-xl font-bold text-primary-black">Secure Payment</h3>
                            <p className="text-medium-gray font-medium">
                                100% secure payment processing
                            </p>
                        </div>

                        <div className="text-center space-y-4 p-8 bg-white rounded-3xl shadow-sm border border-light-gray/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="inline-flex p-5 bg-accent-gold/10 rounded-2xl mb-2">
                                <FiHeadphones size={32} className="text-accent-gold" />
                            </div>
                            <h3 className="text-xl font-bold text-primary-black">24/7 Support</h3>
                            <p className="text-medium-gray font-medium">
                                Dedicated customer support anytime
                            </p>
                        </div>

                        <div className="text-center space-y-4 p-8 bg-white rounded-3xl shadow-sm border border-light-gray/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="inline-flex p-5 bg-accent-gold/10 rounded-2xl mb-2">
                                <FiRefreshCw size={32} className="text-accent-gold" />
                            </div>
                            <h3 className="text-xl font-bold text-primary-black">Easy Returns</h3>
                            <p className="text-medium-gray font-medium">
                                30-day hassle-free return policy
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="section-padding bg-[#FDF8E1] border-y border-accent-gold/10 overflow-hidden relative">
                <div className="container relative">
                    {/* Decorative Elements - Desktop Only */}

                    {/* Left: Hand-drawn Arrow */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 hidden xl:block opacity-90">
                        <div className="relative w-40 h-40">
                            <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-12 drop-shadow-xl">
                                {/* Increased curve (bend) as per user's drawing */}
                                <path d="M20 110 Q 80 20 170 60" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 5" />
                                {/* Perfectly aligned symmetrical arrowhead wings */}
                                <path d="M170 60 L 145 34" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" />
                                <path d="M170 60 L 145 64" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                            <span className="font-handwriting text-accent-gold bg-white px-3 py-1 rounded-full shadow-lg absolute top-0 left-10 -rotate-12 transform -translate-y-4 font-bold text-sm">
                                Don&apos;t Miss Out!
                            </span>
                        </div>
                    </div>

                    {/* Right: Floating 3D Elements */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 hidden lg:block">
                        <div className="relative w-80 h-80">
                            {/* Headphones */}
                            <div className="absolute top-0 right-10 w-56 h-56 animate-float z-10">
                                <Image
                                    src="/products/headphones.png"
                                    alt="Premium Headphones"
                                    width={250}
                                    height={250}
                                    className="object-contain drop-shadow-2xl transform rotate-[15deg]"
                                />
                            </div>
                            {/* Sunglasses */}
                            <div className="absolute bottom-10 left-0 w-40 h-40 animate-float-delay z-0">
                                <Image
                                    src="/products/sunglasses.png"
                                    alt="Stylish Sunglasses"
                                    width={180}
                                    height={180}
                                    className="object-contain drop-shadow-xl transform -rotate-[20deg] blur-[0.5px] opacity-90"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-black">
                            Join Our Newsletter
                        </h2>
                        <p className="text-xl mb-8 text-dark-gray/90">
                            Subscribe to get special offers, free giveaways, and exclusive deals
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-4 rounded-lg bg-white text-dark-gray border-2 border-accent-gold/20 focus:outline-none focus:ring-4 focus:ring-accent-gold/10 shadow-lg transition-shadow"
                                required
                            />
                            <button
                                type="submit"
                                className="px-8 py-4 bg-primary-black hover:bg-zinc-800 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-sm text-medium-gray mt-6 font-medium">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
