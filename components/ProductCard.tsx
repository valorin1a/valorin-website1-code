'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingCart, FiHeart, FiStar } from 'react-icons/fi';
import { Product } from '@/lib/products';
import { useCart } from '@/lib/cart';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);
    const { addToCart } = useCart();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        addToCart(product);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);
    };

    const handleWishlist = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsWishlisted(!isWishlisted);
    };

    const discountPercentage = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    return (
        <Link href={`/product/${product.id}`} className="group">
            <div className="card card-product">
                {/* Image Container */}
                <div className="relative overflow-hidden bg-primary-gray">
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-72 object-cover"
                        unoptimized
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.isNew && (
                            <span className="badge badge-new">New</span>
                        )}
                        {product.isSale && (
                            <span className="badge badge-sale">-{discountPercentage}%</span>
                        )}
                    </div>

                    {/* Wishlist Button */}
                    <button
                        onClick={handleWishlist}
                        className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                        aria-label="Add to Wishlist"
                    >
                        <FiHeart
                            size={20}
                            className={isWishlisted ? 'fill-accent-gold text-accent-gold' : 'text-dark-gray'}
                        />
                    </button>

                    {/* Add to Cart Button - Shows on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                            onClick={handleAddToCart}
                            className={`w-full btn ${addedToCart ? 'bg-success' : 'btn-primary'
                                } flex items-center justify-center gap-2`}
                        >
                            <FiShoppingCart size={18} />
                            {addedToCart ? 'Added!' : 'Add to Cart'}
                        </button>
                    </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                    {/* Category */}
                    <p className="text-xs text-medium-gray uppercase tracking-wider mb-1">
                        {product.category}
                    </p>

                    {/* Product Name */}
                    <h3 className="font-semibold text-base mb-2 text-primary-black group-hover:text-accent-gold transition-colors line-clamp-2">
                        {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                        <div className="rating flex">
                            {[...Array(5)].map((_, i) => (
                                <FiStar
                                    key={i}
                                    size={14}
                                    className={
                                        i < Math.floor(product.rating)
                                            ? 'fill-accent-gold text-accent-gold'
                                            : 'text-light-gray'
                                    }
                                />
                            ))}
                        </div>
                        <span className="text-xs text-medium-gray">({product.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-primary-black">
                            £{product.price}
                        </span>
                        {product.originalPrice && (
                            <span className="text-sm text-medium-gray line-through">
                                £{product.originalPrice}
                            </span>
                        )}
                    </div>

                    {/* Stock Status */}
                    {product.stock < 10 && product.stock > 0 && (
                        <p className="text-xs text-alert mt-2">
                            Only {product.stock} left in stock!
                        </p>
                    )}
                    {product.stock === 0 && (
                        <p className="text-xs text-alert mt-2 font-semibold">
                            Out of Stock
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
}
