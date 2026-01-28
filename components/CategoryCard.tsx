'use client';

import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FiArrowRight } from 'react-icons/fi';

interface CategoryCardProps {
    name: string;
    icon: IconType;
    itemCount: number;
    href: string;
}

export default function CategoryCard({ name, icon: Icon, itemCount, href }: CategoryCardProps) {
    return (
        <Link
            href={href}
            className="group block h-full"
        >
            <div className="bg-white p-8 rounded-3xl border border-light-gray/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center h-full">
                {/* Icon Container - Matches "Why Choose Us" exactly */}
                <div className="inline-flex p-5 bg-accent-gold/10 rounded-2xl mb-6 group-hover:bg-accent-gold transition-all duration-300">
                    <Icon size={32} className="text-accent-gold group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary-black mb-2 group-hover:text-accent-gold transition-colors duration-300">
                    {name}
                </h3>
                <p className="text-medium-gray font-medium mb-6">
                    {itemCount} {itemCount === 1 ? 'Product' : 'Products'}
                </p>

                <div className="mt-auto flex items-center gap-2 text-accent-gold font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span>Explore Collection</span>
                    <FiArrowRight size={14} />
                </div>
            </div>
        </Link>
    );
}
