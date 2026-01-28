'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone, FiMapPin, FiLock } from 'react-icons/fi';
import TikTokShopIcon from './icons/TikTokShopIcon';

export default function Footer() {
    const handleComingSoon = (e: React.MouseEvent) => {
        e.preventDefault();
        alert("Thank you for your interest! This section is currently under development as we work to enhance your shopping experience. Please stay tuned for updates.");
    };

    return (
        <footer className="bg-white border-t border-light-gray">
            {/* Main Footer Content */}
            <div className="bg-white py-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

                        {/* Brand Column */}
                        <div className="lg:col-span-1 relative">
                            {/* Decorative 3D Element */}
                            <Link href="https://www.trendbox.uk" className="flex items-center gap-3 mb-6 hover-lift inline-flex">
                                <Image
                                    src="/logo/trendbox-logo.jpg"
                                    alt="TrendBox"
                                    width={55}
                                    height={55}
                                    className="rounded-full"
                                />
                                <div>
                                    <h3 className="text-2xl font-black text-primary-black">
                                        Trend<span className="text-accent-gold">Box</span>
                                    </h3>
                                    <p className="text-xs text-medium-gray uppercase tracking-wide">Premium Shopping</p>
                                </div>
                            </Link>
                            <p className="text-medium-gray leading-relaxed mb-6 text-sm">
                                Discover premium quality products curated just for you. From fashion to tech, we bring you the latest trends.
                            </p>

                            {/* Social Media */}
                            <div className="flex gap-3">
                                <a href="https://www.tiktok.com/@trendingbox1?_r=1&_t=ZN-93KoagAhfE6" target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 bg-primary-gray hover:bg-accent-gold text-dark-gray hover:text-white rounded-lg flex items-center justify-center transition-all">
                                    <FiFacebook size={18} />
                                </a>
                                <a href="https://www.tiktok.com/@trendingbox1?_r=1&_t=ZN-93KoagAhfE6" target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 bg-primary-gray hover:bg-accent-gold text-dark-gray hover:text-white rounded-lg flex items-center justify-center transition-all">
                                    <FiInstagram size={18} />
                                </a>
                                <a href="https://www.tiktok.com/@trendingbox1?_r=1&_t=ZN-93KoagAhfE6" target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 bg-primary-gray hover:bg-accent-gold text-dark-gray hover:text-white rounded-lg flex items-center justify-center transition-all">
                                    <TikTokShopIcon size={18} />
                                </a>
                                <a href="https://www.tiktok.com/@trendingbox1?_r=1&_t=ZN-93KoagAhfE6" target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 bg-primary-gray hover:bg-accent-gold text-dark-gray hover:text-white rounded-lg flex items-center justify-center transition-all">
                                    <FiTwitter size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Shop Column */}
                        <div>
                            <h4 className="text-lg font-bold text-primary-black mb-5">Shop</h4>
                            <ul className="space-y-3">
                                <li><Link href="/shop" className="text-dark-gray hover:text-accent-gold transition-colors text-sm">All Products</Link></li>
                                <li><Link href="/shop?category=Electronics" className="text-dark-gray hover:text-accent-gold transition-colors text-sm">Electronics</Link></li>
                                <li><Link href="/shop?category=Fashion" className="text-dark-gray hover:text-accent-gold transition-colors text-sm">Fashion</Link></li>
                                <li><Link href="/shop?category=Beauty" className="text-dark-gray hover:text-accent-gold transition-colors text-sm">Beauty & Health</Link></li>
                                <li><Link href="/shop?category=Home & Living" className="text-dark-gray hover:text-accent-gold transition-colors text-sm">Home & Living</Link></li>
                                <li><a href="#" onClick={handleComingSoon} className="text-dark-gray hover:text-accent-gold transition-colors text-sm">New Arrivals</a></li>
                            </ul>
                        </div>

                        {/* Support Column */}
                        <div>
                            <h4 className="text-lg font-bold text-primary-black mb-5">Support</h4>
                            <ul className="space-y-3">
                                <li><Link href="/about" className="text-dark-gray hover:text-accent-gold transition-colors text-sm">About Us</Link></li>
                                <li><Link href="/contact" className="text-dark-gray hover:text-accent-gold transition-colors text-sm">Contact Us</Link></li>
                                <li><a href="#" onClick={handleComingSoon} className="text-dark-gray hover:text-accent-gold transition-colors text-sm">Track Your Order</a></li>
                                <li><a href="#" onClick={handleComingSoon} className="text-dark-gray hover:text-accent-gold transition-colors text-sm">Shipping & Returns</a></li>
                                <li><a href="#" onClick={handleComingSoon} className="text-dark-gray hover:text-accent-gold transition-colors text-sm">FAQ</a></li>
                                <li><a href="#" onClick={handleComingSoon} className="text-dark-gray hover:text-accent-gold transition-colors text-sm">Size Guide</a></li>
                            </ul>
                        </div>

                        {/* Policies Column */}
                        <div>
                            <h4 className="text-lg font-bold text-primary-black mb-5">Policies</h4>
                            <ul className="space-y-3">
                                <li><a href="#" onClick={handleComingSoon} className="text-dark-gray hover:text-accent-gold transition-colors text-sm">Privacy Policy</a></li>
                                <li><a href="#" onClick={handleComingSoon} className="text-dark-gray hover:text-accent-gold transition-colors text-sm">Terms of Service</a></li>
                                <li><a href="#" onClick={handleComingSoon} className="text-dark-gray hover:text-accent-gold transition-colors text-sm">Cookie Policy</a></li>
                                <li><a href="#" onClick={handleComingSoon} className="text-dark-gray hover:text-accent-gold transition-colors text-sm">Return Policy</a></li>
                                <li><a href="#" onClick={handleComingSoon} className="text-dark-gray hover:text-accent-gold transition-colors text-sm">Accessibility</a></li>
                            </ul>
                        </div>

                        {/* Contact Column */}
                        <div>
                            <h4 className="text-lg font-bold text-primary-black mb-5">Contact</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <FiMapPin size={18} className="text-accent-gold flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="text-dark-gray text-sm font-medium">230 Parkhouse Court, Hatfield</p>
                                        <p className="text-medium-gray text-xs">Hertfordshire, UK</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FiPhone size={18} className="text-accent-gold flex-shrink-0 mt-1" />
                                    <div>
                                        <a href="tel:+447376212680" className="text-dark-gray text-sm hover:text-accent-gold font-medium">+44 73 7621 2680</a>
                                        <p className="text-medium-gray text-xs">Mon-Fri 9AM-6PM EST</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FiMail size={18} className="text-accent-gold flex-shrink-0 mt-1" />
                                    <div>
                                        <a href="mailto:uktrendbox@gmail.com" className="text-dark-gray text-sm hover:text-accent-gold font-medium">uktrendbox@gmail.com</a>
                                        <p className="text-medium-gray text-xs">24/7 Support</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-primary-black py-5">
                <div className="container">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © 2020 <span className="text-accent-gold font-semibold">TrendBox</span>. All rights reserved.
                        </p>

                        {/* Payment Methods */}
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500 text-xs mr-1">We Accept:</span>
                            <div className="bg-white px-2.5 py-1.5 rounded"><span className="text-blue-700 font-bold text-xs">VISA</span></div>
                            <div className="bg-white px-2.5 py-1.5 rounded"><span className="font-bold text-xs">MC</span></div>
                            <div className="bg-blue-600 px-2.5 py-1.5 rounded"><span className="text-white font-bold text-xs">AMEX</span></div>
                            <div className="bg-blue-500 px-2.5 py-1.5 rounded"><span className="text-white font-bold text-xs">PayPal</span></div>
                            <div className="bg-green-700 px-2.5 py-1.5 rounded flex items-center gap-1">
                                <FiLock size={12} className="text-white" />
                                <span className="text-white font-bold text-xs">SSL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
