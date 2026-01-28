'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiX, FiMinus, FiPlus, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '@/lib/cart';

export default function ShoppingCart() {
    const { cart, removeFromCart, updateQuantity, getTotalPrice, isCartOpen, setIsCartOpen } = useCart();

    if (!isCartOpen) return null;

    return (
        <>
            {/* Overlay */}
            <div
                className="overlay"
                onClick={() => setIsCartOpen(false)}
            />

            {/* Cart Panel */}
            <div className="fixed top-0 right-0 w-full max-w-md h-screen bg-white shadow-2xl z-50 flex flex-col animate-slide-in">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-light-gray">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <FiShoppingBag className="text-accent-gold" />
                        Shopping Cart
                        {cart.length > 0 && (
                            <span className="text-base text-medium-gray font-normal">
                                ({cart.length} {cart.length === 1 ? 'item' : 'items'})
                            </span>
                        )}
                    </h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="p-2 hover:bg-primary-gray rounded-full transition-colors"
                        aria-label="Close cart"
                    >
                        <FiX size={24} />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                    {cart.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <FiShoppingBag size={64} className="text-light-gray mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
                            <p className="text-medium-gray mb-6">
                                Start shopping to add items to your cart!
                            </p>
                            <Link
                                href="/shop"
                                onClick={() => setIsCartOpen(false)}
                                className="btn btn-primary"
                            >
                                Start Shopping
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div
                                    key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                                    className="flex gap-4 p-4 bg-primary-gray rounded-lg"
                                >
                                    {/* Product Image */}
                                    <Image
                                        src={item.images[0]}
                                        alt={item.name}
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                                    />

                                    {/* Product Details */}
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-sm mb-1 line-clamp-2">
                                            {item.name}
                                        </h3>
                                        {item.selectedColor && (
                                            <p className="text-xs text-medium-gray">
                                                Color: {item.selectedColor}
                                            </p>
                                        )}
                                        {item.selectedSize && (
                                            <p className="text-xs text-medium-gray">
                                                Size: {item.selectedSize}
                                            </p>
                                        )}
                                        <p className="text-base font-bold text-accent-gold mt-2">
                                            £{item.price}
                                        </p>

                                        {/* Quantity Controls */}
                                        <div className="flex items-center gap-3 mt-3">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-1 bg-white hover:bg-accent-gold hover:text-white rounded transition-colors"
                                                aria-label="Decrease quantity"
                                            >
                                                <FiMinus size={16} />
                                            </button>
                                            <span className="w-8 text-center font-semibold">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-1 bg-white hover:bg-accent-gold hover:text-white rounded transition-colors"
                                                aria-label="Increase quantity"
                                            >
                                                <FiPlus size={16} />
                                            </button>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="ml-auto p-2 text-alert hover:bg-alert hover:text-white rounded transition-colors"
                                                aria-label="Remove item"
                                            >
                                                <FiTrash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer - Totals and Checkout */}
                {cart.length > 0 && (
                    <div className="border-t border-light-gray p-6 space-y-4">
                        {/* Subtotal */}
                        <div className="flex justify-between items-center text-lg">
                            <span className="font-semibold">Subtotal:</span>
                            <span className="font-bold text-2xl text-accent-gold">
                                £{getTotalPrice().toFixed(2)}
                            </span>
                        </div>

                        {/* Shipping Note */}
                        <p className="text-xs text-medium-gray text-center">
                            Shipping and taxes calculated at checkout
                        </p>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                            <Link
                                href="/checkout"
                                onClick={() => setIsCartOpen(false)}
                                className="btn btn-primary w-full text-center"
                            >
                                Proceed to Checkout
                            </Link>
                            <Link
                                href="/cart"
                                onClick={() => setIsCartOpen(false)}
                                className="btn btn-outline w-full text-center"
                            >
                                View Full Cart
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
