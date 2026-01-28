'use client';

import React, { useState } from 'react';
import { useCart } from '@/lib/cart';
import Link from 'next/link';
import { FiCreditCard, FiLock } from 'react-icons/fi';

export default function CheckoutPage() {
    const { cart, getTotalPrice } = useCart();
    const [step, setStep] = useState<'shipping' | 'payment'>('shipping');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zip: ''
    });
    const [errors, setErrors] = useState<Record<string, boolean>>({});

    const shipping = getTotalPrice() > 50 ? 0 : 10;
    const tax = getTotalPrice() * 0.08;
    const total = getTotalPrice() + shipping + tax;

    const validateShipping = () => {
        const newErrors: Record<string, boolean> = {};

        if (!formData.firstName.trim()) newErrors.firstName = true;
        if (!formData.lastName.trim()) newErrors.lastName = true;
        if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = true;
        if (!formData.phone.trim()) newErrors.phone = true;
        if (!formData.address.trim()) newErrors.address = true;
        if (!formData.city.trim()) newErrors.city = true;
        if (!formData.zip.trim()) newErrors.zip = true;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleStepChange = (newStep: 'shipping' | 'payment') => {
        if (newStep === 'payment') {
            if (validateShipping()) {
                setStep('payment');
            }
        } else {
            setStep('shipping');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-primary-gray flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Your cart is empty</h1>
                    <Link href="/shop" className="btn btn-primary">
                        Go Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-primary-gray py-12">
            <div className="container max-w-6xl">
                <h1 className="text-5xl font-bold mb-8">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Checkout Form */}
                    <div className="lg:col-span-2 bg-white rounded-2xl p-8">
                        {/* Steps */}
                        <div className="flex mb-8">
                            <button
                                onClick={() => handleStepChange('shipping')}
                                className={`flex-1 py-3 font-semibold border-b-4 transition-colors ${step === 'shipping' ? 'border-accent-gold text-accent-gold' : 'border-light-gray text-medium-gray'
                                    }`}
                            >
                                1. Shipping
                            </button>
                            <button
                                onClick={() => handleStepChange('payment')}
                                className={`flex-1 py-3 font-semibold border-b-4 transition-colors ${step === 'payment' ? 'border-accent-gold text-accent-gold' : 'border-light-gray text-medium-gray'
                                    }`}
                            >
                                2. Payment
                            </button>
                        </div>

                        {step === 'shipping' && (
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">First Name *</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className={`w-full ${errors.firstName ? 'border-red-500 focus:ring-red-500 ring-1 ring-red-500' : ''}`}
                                            placeholder="John"
                                        />
                                        {errors.firstName && <p className="text-red-500 text-xs mt-1">Required</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Last Name *</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className={`w-full ${errors.lastName ? 'border-red-500 focus:ring-red-500 ring-1 ring-red-500' : ''}`}
                                            placeholder="Doe"
                                        />
                                        {errors.lastName && <p className="text-red-500 text-xs mt-1">Required</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full ${errors.email ? 'border-red-500 focus:ring-red-500 ring-1 ring-red-500' : ''}`}
                                        placeholder="john.doe@example.com"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">Invalid email</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className={`w-full ${errors.phone ? 'border-red-500 focus:ring-red-500 ring-1 ring-red-500' : ''}`}
                                        placeholder="+44 7700 900000"
                                    />
                                    {errors.phone && <p className="text-red-500 text-xs mt-1">Required</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Address *</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className={`w-full ${errors.address ? 'border-red-500 focus:ring-red-500 ring-1 ring-red-500' : ''}`}
                                        placeholder="123 Main Street"
                                    />
                                    {errors.address && <p className="text-red-500 text-xs mt-1">Required</p>}
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">City *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            className={`w-full ${errors.city ? 'border-red-500 focus:ring-red-500 ring-1 ring-red-500' : ''}`}
                                            placeholder="London"
                                        />
                                        {errors.city && <p className="text-red-500 text-xs mt-1">Required</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Postcode *</label>
                                        <input
                                            type="text"
                                            name="zip"
                                            value={formData.zip}
                                            onChange={handleInputChange}
                                            className={`w-full ${errors.zip ? 'border-red-500 focus:ring-red-500 ring-1 ring-red-500' : ''}`}
                                            placeholder="SW1A 1AA"
                                        />
                                        {errors.zip && <p className="text-red-500 text-xs mt-1">Required</p>}
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => handleStepChange('payment')}
                                    className="btn btn-primary w-full text-lg"
                                >
                                    Continue to Payment
                                </button>
                            </form>
                        )}

                        {step === 'payment' && (
                            <form
                                className="space-y-6"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    alert("We apologize for the inconvenience. A technical issue is currently affecting our payment processing system. Our engineering team has been notified and is working diligently to resolve this as soon as possible. Thank you for your patience.");
                                }}
                            >
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <FiCreditCard size={28} />
                                    Payment Method
                                </h2>

                                <div className="p-4 bg-primary-gray rounded-lg flex items-center gap-3 mb-6">
                                    <FiLock className="text-success" size={24} />
                                    <p className="text-sm text-dark-gray">
                                        Your payment information is secure and encrypted
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Card Number *</label>
                                    <input type="text" required className="w-full" placeholder="1234 5678 9012 3456" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Expiry Date *</label>
                                        <input type="text" required className="w-full" placeholder="MM/YY" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">CVV *</label>
                                        <input type="text" required className="w-full" placeholder="123" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Cardholder Name *</label>
                                    <input type="text" required className="w-full" placeholder="John Doe" />
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setStep('shipping')}
                                        className="btn btn-outline flex-1"
                                    >
                                        Back
                                    </button>
                                    <button type="submit" className="btn btn-primary flex-1 text-lg">
                                        Place Order - £{total.toFixed(2)}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Order Summary Sidebar */}
                    <div>
                        <div className="bg-white rounded-2xl p-6 sticky top-24">
                            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex gap-3 pb-4 border-b border-light-gray">
                                        <div className="flex-1">
                                            <p className="font-semibold text-sm line-clamp-1">{item.name}</p>
                                            <p className="text-xs text-medium-gray">Qty: {item.quantity}</p>
                                        </div>
                                        <p className="font-bold text-accent-gold">£{(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 mb-6 pb-6 border-b border-light-gray">
                                <div className="flex justify-between text-sm">
                                    <span className="text-medium-gray">Subtotal</span>
                                    <span className="font-semibold">£{getTotalPrice().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-medium-gray">Shipping</span>
                                    <span className="font-semibold">{shipping === 0 ? 'FREE' : `£${shipping.toFixed(2)}`}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-medium-gray">Tax</span>
                                    <span className="font-semibold">£{tax.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-xl font-bold">Total</span>
                                <span className="text-3xl font-bold text-accent-gold">£{total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

