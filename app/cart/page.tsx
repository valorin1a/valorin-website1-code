'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cart';
import { FiTrash2, FiShoppingBag, FiArrowRight } from 'react-icons/fi';

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

    const shipping = cart.length > 0 ? (getTotalPrice() > 50 ? 0 : 10) : 0;
    const tax = getTotalPrice() * 0.08;
    const total = getTotalPrice() + shipping + tax;

    return (
        <div className="min-h-screen bg-primary-gray py-12">
            <div className="container">
                <h1 className="text-5xl font-bold mb-8">Shopping Cart</h1>

                {cart.length === 0 ? (
                    <div className="bg-white rounded-2xl p-12 text-center">
                        <FiShoppingBag size={80} className="mx-auto mb-6 text-light-gray" />
                        <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
                        <p className="text-medium-gray mb-8 text-lg">
                            Looks like you haven't added anything to your cart yet
                        </p>
                        <Link href="/shop" className="btn btn-primary text-lg">
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {cart.map((item) => (
                                <div
                                    key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                                    className="bg-white rounded-2xl p-6 flex gap-6 hover-lift"
                                >
                                    {/* Image */}
                                    <Image
                                        src={item.images[0]}
                                        alt={item.name}
                                        width={150}
                                        height={150}
                                        className="w-32 h-32 object-cover rounded-xl flex-shrink-0"
                                    />

                                    {/* Details */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                                        <p className="text-medium-gray text-sm mb-3">
                                            {item.category}
                                        </p>
                                        {item.selectedColor && (
                                            <p className="text-sm text-dark-gray">
                                                <span className="font-semibold">Color:</span> {item.selectedColor}
                                            </p>
                                        )}
                                        {item.selectedSize && (
                                            <p className="text-sm text-dark-gray">
                                                <span className="font-semibold">Size:</span> {item.selectedSize}
                                            </p>
                                        )}

                                        {/* Quantity Controls */}
                                        <div className="flex items-center gap-4 mt-4">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-10 h-10 bg-primary-gray hover:bg-accent-gold hover:text-white rounded-lg font-bold transition-colors"
                                            >
                                                -
                                            </button>
                                            <span className="w-12 text-center font-bold text-lg">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-10 h-10 bg-primary-gray hover:bg-accent-gold hover:text-white rounded-lg font-bold transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    {/* Price & Remove */}
                                    <div className="flex flex-col items-end justify-between">
                                        <p className="text-2xl font-bold text-accent-gold">
                                            £{(item.price * item.quantity).toFixed(2)}
                                        </p>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="p-3 text-alert hover:bg-alert hover:text-white rounded-lg transition-colors"
                                        >
                                            <FiTrash2 size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div>
                            <div className="bg-white rounded-2xl p-6 sticky top-24">
                                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-medium-gray">Subtotal</span>
                                        <span className="font-semibold">£{getTotalPrice().toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-medium-gray">Shipping</span>
                                        <span className="font-semibold">
                                            {shipping === 0 ? 'FREE' : `£${shipping.toFixed(2)}`}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-medium-gray">Tax (8%)</span>
                                        <span className="font-semibold">£{tax.toFixed(2)}</span>
                                    </div>
                                    <div className="border-t border-light-gray pt-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xl font-bold">Total</span>
                                            <span className="text-3xl font-bold text-accent-gold">
                                                £{total.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {shipping > 0 && (
                                    <p className="text-sm text-medium-gray mb-6 p-3 bg-primary-gray rounded-lg">
                                        Add £{(50 - getTotalPrice()).toFixed(2)} more for FREE shipping!
                                    </p>
                                )}

                                <Link
                                    href="/checkout"
                                    className="btn btn-primary w-full text-lg flex items-center justify-center gap-2 mb-4"
                                >
                                    Proceed to Checkout
                                    <FiArrowRight size={20} />
                                </Link>

                                <Link
                                    href="/shop"
                                    className="btn btn-outline w-full text-center"
                                >
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
