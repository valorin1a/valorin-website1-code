'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowRight, FiShoppingBag } from 'react-icons/fi';

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-primary-gray via-white to-accent-rosegold/20 overflow-hidden">
            <div className="container section-padding">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
                    {/* Left Content */}
                    <div className="space-y-8 animate-fade-in">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
                            <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                            <span className="text-sm font-semibold text-dark-gray">
                                Now Available Online
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                            Discover the
                            <span className="block mt-2 text-gradient">
                                Latest Trends
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl text-medium-gray max-w-lg leading-relaxed">
                            Explore our curated collection of premium products. From tech to fashion, find everything you love in one place.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/shop" className="btn btn-primary text-lg group">
                                <FiShoppingBag size={20} />
                                Shop Now
                                <FiArrowRight
                                    size={20}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </Link>
                            <Link href="/about" className="btn btn-outline text-lg">
                                Learn More
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-light-gray">
                            <div>
                                <p className="text-3xl font-bold text-accent-gold">20k+</p>
                                <p className="text-sm text-medium-gray">Products</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-accent-gold">17K+</p>
                                <p className="text-sm text-medium-gray">Happy Customers</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-accent-gold">4.9★</p>
                                <p className="text-sm text-medium-gray">Rating</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Decorative Elements */}
                    <div className="relative lg:block hidden">
                        {/* Floating Cards */}
                        <div className="relative h-[600px] flex items-center justify-center">
                            {/* Card 1 */}
                            <div className="absolute top-0 right-0 w-64 h-80 bg-white rounded-2xl shadow-xl transform rotate-6 hover:rotate-12 transition-transform duration-500 overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-br from-accent-gold/20 to-accent-rosegold/40 flex items-center justify-center">
                                    <div className="text-center p-6">
                                        <div className="text-6xl mb-4">🎁</div>
                                        <h3 className="text-2xl font-bold text-primary-black">Premium</h3>
                                        <p className="text-medium-gray">Quality</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="absolute bottom-12 left-0 w-64 h-80 bg-white rounded-2xl shadow-xl transform -rotate-6 hover:-rotate-12 transition-transform duration-500 overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-br from-primary-gray to-white flex items-center justify-center">
                                    <div className="text-center p-6">
                                        <div className="text-6xl mb-4">✨</div>
                                        <h3 className="text-2xl font-bold text-primary-black">Latest</h3>
                                        <p className="text-medium-gray">Trends</p>
                                    </div>
                                </div>
                            </div>

                            {/* Center Element */}
                            <div className="relative z-10 w-80 h-96 bg-gradient-to-br from-accent-gold to-accent-gold-dark rounded-3xl shadow-2xl flex items-center justify-center hover-glow">
                                <div className="text-center text-white p-8">
                                    <div className="text-7xl mb-4">📦</div>
                                    <h2 className="text-3xl font-bold mb-2">TrendBox</h2>
                                    <p className="text-lg opacity-90">Unbox Happiness</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-rosegold/20 rounded-full blur-3xl -z-10"></div>
        </section>
    );
}
