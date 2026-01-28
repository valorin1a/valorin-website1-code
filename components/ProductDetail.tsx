'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/products';
import { useCart } from '@/lib/cart';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import {
    FiShoppingCart,
    FiHeart,
    FiStar,
    FiTruck,
    FiShield,
    FiRefreshCw,
    FiCheck,
} from 'react-icons/fi';

interface ProductDetailProps {
    product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
    const { addToCart } = useCart();

    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
    const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);

    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    const handleAddToCart = () => {
        addToCart(product, quantity, selectedColor, selectedSize);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb */}
            <div className="bg-primary-gray py-4">
                <div className="container">
                    <div className="flex items-center gap-2 text-sm text-medium-gray">
                        <Link href="/" className="hover:text-accent-gold">
                            Home
                        </Link>
                        <span>/</span>
                        <Link href="/shop" className="hover:text-accent-gold">
                            Shop
                        </Link>
                        <span>/</span>
                        <span className="text-dark-gray font-medium">{product.name}</span>
                    </div>
                </div>
            </div>

            {/* Product Details */}
            <div className="container py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Left: Images */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-primary-gray">
                            <Image
                                src={product.images[selectedImage]}
                                alt={product.name}
                                width={800}
                                height={800}
                                className="w-full h-full object-cover"
                            />
                            {product.isSale && (
                                <div className="absolute top-4 left-4">
                                    <span className="badge badge-sale text-lg px-4 py-2">
                                        SALE
                                    </span>
                                </div>
                            )}
                            {product.isNew && (
                                <div className="absolute top-4 left-4">
                                    <span className="badge badge-new text-lg px-4 py-2">
                                        NEW
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Thumbnails */}
                        {product.images.length > 1 && (
                            <div className="flex gap-4">
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index
                                            ? 'border-accent-gold scale-105'
                                            : 'border-light-gray hover:border-accent-gold'
                                            }`}
                                    >
                                        <Image
                                            src={image}
                                            alt={`${product.name} ${index + 1}`}
                                            width={100}
                                            height={100}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right: Product Info */}
                    <div className="space-y-6">
                        {/* Category */}
                        <p className="text-sm text-medium-gray uppercase tracking-wider">
                            {product.category}
                        </p>

                        {/* Title */}
                        <h1 className="text-4xl lg:text-5xl font-bold">{product.name}</h1>

                        {/* Rating */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="rating flex">
                                    {[...Array(5)].map((_, i) => (
                                        <FiStar
                                            key={i}
                                            size={20}
                                            className={
                                                i < Math.floor(product.rating)
                                                    ? 'fill-accent-gold text-accent-gold'
                                                    : 'text-light-gray'
                                            }
                                        />
                                    ))}
                                </div>
                                <span className="text-dark-gray font-semibold">
                                    {product.rating}
                                </span>
                            </div>
                            <span className="text-medium-gray">({product.reviews} reviews)</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-baseline gap-4">
                            <span className="text-5xl font-bold text-accent-gold">
                                £{product.price}
                            </span>
                            {product.originalPrice && (
                                <span className="text-2xl text-medium-gray line-through">
                                    £{product.originalPrice}
                                </span>
                            )}
                        </div>

                        {/* Description */}
                        <p className="text-lg text-medium-gray leading-relaxed">
                            {product.description}
                        </p>

                        {/* Color Selection */}
                        {product.colors && product.colors.length > 0 && (
                            <div>
                                <label className="block text-sm font-semibold mb-3">
                                    Color: <span className="text-accent-gold">{selectedColor}</span>
                                </label>
                                <div className="flex gap-3">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`px-4 py-2 rounded-lg border-2 transition-all ${selectedColor === color
                                                ? 'border-accent-gold bg-accent-gold text-white'
                                                : 'border-light-gray hover:border-accent-gold'
                                                }`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Size Selection */}
                        {product.sizes && product.sizes.length > 0 && (
                            <div>
                                <label className="block text-sm font-semibold mb-3">
                                    Size: <span className="text-accent-gold">{selectedSize}</span>
                                </label>
                                <div className="flex gap-3">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-4 py-2 rounded-lg border-2 transition-all ${selectedSize === size
                                                ? 'border-accent-gold bg-accent-gold text-white'
                                                : 'border-light-gray hover:border-accent-gold'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity */}
                        <div>
                            <label className="block text-sm font-semibold mb-3">
                                Quantity
                            </label>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-12 h-12 bg-primary-gray hover:bg-accent-gold hover:text-white rounded-lg font-bold transition-colors"
                                >
                                    -
                                </button>
                                <span className="w-16 text-center text-2xl font-bold">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-12 h-12 bg-primary-gray hover:bg-accent-gold hover:text-white rounded-lg font-bold transition-colors"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Stock Status */}
                        {product.stock > 0 ? (
                            <div className="flex items-center gap-2 text-success">
                                <FiCheck size={20} />
                                <span className="font-semibold">
                                    In Stock ({product.stock} available)
                                </span>
                            </div>
                        ) : (
                            <div className="text-alert font-semibold">Out of Stock</div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-4">
                            <button
                                onClick={handleAddToCart}
                                disabled={product.stock === 0}
                                className={`flex-1 btn ${addedToCart ? 'bg-success' : 'btn-primary'} text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`}
                            >
                                <FiShoppingCart size={22} />
                                {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
                            </button>
                            <button className="btn btn-outline px-6">
                                <FiHeart size={22} />
                            </button>
                        </div>

                        {/* Features */}
                        {product.features && product.features.length > 0 && (
                            <div className="bg-primary-gray p-6 rounded-xl">
                                <h3 className="font-bold text-lg mb-4">Key Features:</h3>
                                <ul className="space-y-2">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <FiCheck className="text-success mt-1 flex-shrink-0" size={18} />
                                            <span className="text-dark-gray">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Guarantees */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-light-gray">
                            <div className="text-center">
                                <FiTruck className="mx-auto mb-2 text-accent-gold" size={24} />
                                <p className="text-xs font-semibold">Free Shipping</p>
                            </div>
                            <div className="text-center">
                                <FiShield className="mx-auto mb-2 text-accent-gold" size={24} />
                                <p className="text-xs font-semibold">Secure Payment</p>
                            </div>
                            <div className="text-center">
                                <FiRefreshCw className="mx-auto mb-2 text-accent-gold" size={24} />
                                <p className="text-xs font-semibold">30-Day Returns</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section>
                        <h2 className="text-3xl font-bold mb-8">Related Products</h2>
                        <div className="grid-products">
                            {relatedProducts.map((relatedProduct) => (
                                <ProductCard key={relatedProduct.id} product={relatedProduct} />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
