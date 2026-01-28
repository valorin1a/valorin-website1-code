'use client';

import React, { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/products';
import { FiFilter, FiX } from 'react-icons/fi';

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState('All Products');
    const [sortBy, setSortBy] = useState('popular');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [showFilters, setShowFilters] = useState(false);

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let filtered = [...products];

        // Filter by category
        if (selectedCategory !== 'All Products') {
            filtered = filtered.filter(p => p.category === selectedCategory);
        }

        // Filter by Search Param
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const search = params.get('search');
            if (search) {
                const q = search.toLowerCase();
                filtered = filtered.filter(p =>
                    p.name.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q) ||
                    p.category.toLowerCase().includes(q)
                );
            }
        }

        // Filter by price range
        filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

        // Sort
        switch (sortBy) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            default:
                // popular - by reviews
                filtered.sort((a, b) => b.reviews - a.reviews);
        }

        return filtered;
    }, [selectedCategory, sortBy, priceRange]);

    return (
        <div className="min-h-screen bg-primary-gray">
            <div className="container pb-20" style={{ paddingTop: '50px' }}>
                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-5xl font-bold mb-4">Shop All Products</h1>
                    <p className="text-lg text-medium-gray">
                        Browse our complete collection of {products.length} amazing products
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <aside className={`
            lg:w-72 flex-shrink-0
            ${showFilters ? 'block' : 'hidden lg:block'}
          `}>
                        <div className="bg-white p-6 rounded-xl shadow-md sticky top-24">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold">Filters</h2>
                                <button
                                    onClick={() => setShowFilters(false)}
                                    className="lg:hidden p-2 hover:bg-primary-gray rounded-full"
                                >
                                    <FiX size={20} />
                                </button>
                            </div>

                            {/* Category Filter */}
                            <div className="mb-8">
                                <h3 className="font-semibold mb-4 text-dark-gray">Category</h3>
                                <div className="space-y-2">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedCategory === category
                                                ? 'bg-accent-gold text-white font-semibold'
                                                : 'bg-primary-gray hover:bg-light-gray text-dark-gray'
                                                }`}
                                        >
                                            {category}
                                            <span className="float-right text-sm opacity-70">
                                                {category === 'All Products'
                                                    ? products.length
                                                    : products.filter(p => p.category === category).length}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div className="mb-8">
                                <h3 className="font-semibold mb-4 text-dark-gray">
                                    Price Range: £{priceRange[0]} - £{priceRange[1]}
                                </h3>
                                <div className="space-y-3">
                                    <input
                                        type="range"
                                        min="0"
                                        max="1000"
                                        value={priceRange[1]}
                                        onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                        className="w-full accent-accent-gold"
                                    />
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setPriceRange([0, 100])}
                                            className="flex-1 px-3 py-2 text-xs bg-primary-gray hover:bg-accent-gold hover:text-white rounded-lg transition-colors"
                                        >
                                            Under £100
                                        </button>
                                        <button
                                            onClick={() => setPriceRange([100, 300])}
                                            className="flex-1 px-3 py-2 text-xs bg-primary-gray hover:bg-accent-gold hover:text-white rounded-lg transition-colors"
                                        >
                                            £100-£300
                                        </button>
                                        <button
                                            onClick={() => setPriceRange([300, 1000])}
                                            className="flex-1 px-3 py-2 text-xs bg-primary-gray hover:bg-accent-gold hover:text-white rounded-lg transition-colors"
                                        >
                                            £300+
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Reset Filters */}
                            <button
                                onClick={() => {
                                    setSelectedCategory('All Products');
                                    setPriceRange([0, 1000]);
                                    setSortBy('popular');
                                }}
                                className="w-full btn btn-outline"
                            >
                                Reset Filters
                            </button>
                        </div>
                    </aside>

                    {/* Products Grid */}
                    <div className="flex-1">
                        {/* Toolbar */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 bg-white p-4 rounded-2xl shadow-sm border border-light-gray/50">
                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className="lg:hidden p-3 border-2 border-light-gray rounded-xl hover:border-accent-gold hover:text-accent-gold transition-all"
                                >
                                    <FiFilter size={20} />
                                </button>
                                <p className="text-dark-gray font-medium text-sm md:text-base">
                                    Showing <span className="text-accent-gold font-bold">{filteredProducts.length}</span> premium products
                                </p>
                            </div>

                            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                                <label className="text-dark-gray font-bold text-base whitespace-nowrap">Sort by:</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="flex-1 md:flex-none px-4 py-2.5 border-2 border-light-gray rounded-xl focus:border-accent-gold outline-none bg-white text-base font-semibold cursor-pointer hover:border-accent-gold transition-colors"
                                >
                                    <option value="popular">Most Popular</option>
                                    <option value="newest">Newest Arrivals</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="rating">Highest Rated</option>
                                </select>
                            </div>
                        </div>

                        {/* Products */}
                        {filteredProducts.length > 0 ? (
                            <div className="grid-products">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <div className="text-6xl mb-4">🔍</div>
                                <h3 className="text-2xl font-bold mb-2">No products found</h3>
                                <p className="text-medium-gray mb-6">
                                    Try adjusting your filters to find what you're looking for
                                </p>
                                <button
                                    onClick={() => {
                                        setSelectedCategory('All Products');
                                        setPriceRange([0, 1000]);
                                    }}
                                    className="btn btn-primary"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Explicit Bottom Spacer */}
                <div className="h-24 w-full"></div>
            </div>
        </div>
    );
}
