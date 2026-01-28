'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingCart, FiMenu, FiX, FiSearch, FiHeart } from 'react-icons/fi';
import { useCart } from '@/lib/cart';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { getTotalItems, setIsCartOpen } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'Shop', href: '/shop' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
    ];

    const handleComingSoon = (e: React.MouseEvent) => {
        e.preventDefault();
        alert("Thank you for your interest! This feature is currently under development as we work to enhance your shopping experience. Please stay tuned for our upcoming launch.");
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
                    ? 'bg-white shadow-md backdrop-blur-md bg-opacity-95'
                    : 'bg-white'
                    }`}
            >
                <div className="container overflow-visible">
                    <div className="flex lg:grid lg:grid-cols-3 items-center justify-between h-20">
                        {/* Column 1: Logo (Left) */}
                        <div className="flex justify-start items-center">
                            <Link href="https://www.trendbox.uk" className="flex items-center gap-3 hover-lift">
                                <Image
                                    src="/logo/trendbox-logo.jpg"
                                    alt="TrendBox Logo"
                                    width={50}
                                    height={50}
                                    className="rounded-full"
                                />
                                <span className="text-2xl font-bold text-primary-black">
                                    Trend<span className="text-gradient">Box</span>
                                </span>
                            </Link>
                        </div>

                        {/* Column 2: Desktop Navigation (Center) */}
                        <nav className="hidden lg:flex items-center justify-center gap-8">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-base font-medium text-dark-gray hover:text-accent-gold transition-colors duration-200 relative group whitespace-nowrap"
                                >
                                    {item.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </nav>

                        {/* Column 3: Search & Icons (Right) */}
                        <div className="flex items-center justify-end gap-2 sm:gap-3 xl:gap-4 ml-auto lg:ml-0 lg:pl-12 xl:pl-20">
                            {/* Search Bar - Permanent & Integrated */}
                            <div className="hidden lg:flex items-center w-40 xl:w-52 transition-all">
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        const form = e.target as HTMLFormElement;
                                        const input = form.elements.namedItem('search') as HTMLInputElement;
                                        if (input.value.trim()) {
                                            window.location.href = `/shop?search=${encodeURIComponent(input.value.trim())}`;
                                        }
                                    }}
                                    className="relative w-full"
                                >
                                    <input
                                        name="search"
                                        type="text"
                                        placeholder="Search..."
                                        className="w-full pl-9 pr-4 py-1.5 bg-primary-gray/50 rounded-full text-xs xl:text-sm border-2 border-transparent focus:border-accent-gold focus:bg-white outline-none transition-all placeholder:text-medium-gray/70"
                                    />
                                    <FiSearch
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-medium-gray"
                                        size={16}
                                    />
                                </form>
                            </div>

                            {/* Mobile Search Icon */}
                            <button
                                onClick={() => {
                                    const q = prompt("Search TrendBox:");
                                    if (q) window.location.href = `/shop?search=${encodeURIComponent(q.trim())}`;
                                }}
                                className="lg:hidden p-2 hover:bg-primary-gray rounded-full transition-colors"
                                aria-label="Search"
                            >
                                <FiSearch size={22} className="text-dark-gray" />
                            </button>

                            {/* Wishlist Icon */}
                            <button
                                onClick={handleComingSoon}
                                className="hidden sm:block p-2 hover:bg-primary-gray rounded-full transition-colors relative"
                                aria-label="Wishlist"
                            >
                                <FiHeart size={22} className="text-dark-gray" />
                            </button>

                            {/* Cart Icon */}
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="p-2 hover:bg-primary-gray rounded-full transition-colors relative"
                                aria-label="Shopping Cart"
                            >
                                <FiShoppingCart size={22} className="text-dark-gray" />
                                {getTotalItems() > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-accent-gold text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-scale-in">
                                        {getTotalItems()}
                                    </span>
                                )}
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-2 hover:bg-primary-gray rounded-full transition-colors"
                                aria-label="Toggle Menu"
                            >
                                {isMobileMenuOpen ? (
                                    <FiX size={24} className="text-dark-gray" />
                                ) : (
                                    <FiMenu size={24} className="text-dark-gray" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <div
                className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
            >
                <div className="p-6">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold">Menu</h2>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 hover:bg-primary-gray rounded-full"
                        >
                            <FiX size={24} />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-4">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-medium text-dark-gray hover:text-accent-gold transition-colors py-3 border-b border-light-gray"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="overlay md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Spacer */}
            <div className="h-20" />
        </>
    );
}
