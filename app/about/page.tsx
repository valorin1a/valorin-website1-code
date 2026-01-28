import React from 'react';
import Image from 'next/image';
import { FiTarget, FiHeart, FiAward, FiUsers } from 'react-icons/fi';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-gradient-to-br from-primary-black to-dark-gray text-white section-padding">
                <div className="container text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        About <span className="text-gradient">TrendBox</span>
                    </h1>
                    <div className="section-divider"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
                        We're on a mission to bring you the latest trends in fashion, technology, and lifestyle. Every product. is handpicked for quality and style.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="section-padding">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold">Our Story</h2>
                            <p className="text-lg text-medium-gray leading-relaxed">
                                Founded in 2020, TrendBox started with a simple idea: make premium products accessible to everyone. We believe that quality and style shouldn't come with a premium price tag.
                            </p>
                            <p className="text-lg text-medium-gray leading-relaxed">
                                Today, we serve over 50,000 happy customers worldwide, offering a curated selection of products across electronics, fashion, home & living, beauty, and more.
                            </p>
                            <p className="text-lg text-medium-gray leading-relaxed">
                                Every product in our collection is carefully selected to ensure it meets our high standards for quality, design, and value.
                            </p>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-accent-gold/20 to-accent-rosegold/40 flex items-center justify-center">
                                <div className="text-8xl">📦</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section-padding bg-primary-gray">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
                        <div className="section-divider"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="card text-center p-8">
                            <div className="inline-flex p-6 bg-accent-gold/10 rounded-2xl mb-4">
                                <FiTarget size={40} className="text-accent-gold" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Quality First</h3>
                            <p className="text-medium-gray">
                                We never compromise on quality. Every product is tested and verified.
                            </p>
                        </div>

                        <div className="card text-center p-8">
                            <div className="inline-flex p-6 bg-accent-gold/10 rounded-2xl mb-4">
                                <FiHeart size={40} className="text-accent-gold" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Customer Love</h3>
                            <p className="text-medium-gray">
                                Your satisfaction is our top priority. We're here to help 24/7.
                            </p>
                        </div>

                        <div className="card text-center p-8">
                            <div className="inline-flex p-6 bg-accent-gold/10 rounded-2xl mb-4">
                                <FiAward size={40} className="text-accent-gold" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Excellence</h3>
                            <p className="text-medium-gray">
                                We strive for excellence in everything we do, from products to service.
                            </p>
                        </div>

                        <div className="card text-center p-8">
                            <div className="inline-flex p-6 bg-accent-gold/10 rounded-2xl mb-4">
                                <FiUsers size={40} className="text-accent-gold" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Community</h3>
                            <p className="text-medium-gray">
                                Building a community of trendsetters who love quality and style.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <h3 className="text-5xl font-bold text-accent-gold mb-2">50K+</h3>
                            <p className="text-medium-gray">Happy Customers</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-5xl font-bold text-accent-gold mb-2">500+</h3>
                            <p className="text-medium-gray">Products</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-5xl font-bold text-accent-gold mb-2">4.9★</h3>
                            <p className="text-medium-gray">Average Rating</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-5xl font-bold text-accent-gold mb-2">100%</h3>
                            <p className="text-medium-gray">Satisfaction</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
