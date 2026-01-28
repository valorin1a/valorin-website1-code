'use client';

import React, { useState, useRef } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id_here') {
            alert("EmailJS is not fully configured. Please set your credentials in the .env.local file.");
            return;
        }

        setIsSubmitting(true);

        try {
            await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current!,
                publicKey
            );

            setSubmitted(true);
            formRef.current?.reset();
            setTimeout(() => setSubmitted(false), 5000);
        } catch (error) {
            console.error("EmailJS Error:", error);
            alert("Oops! Something went wrong while sending your message. Please try again later or contact us directly via email.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-gradient-to-br from-primary-black to-dark-gray text-white section-padding">
                <div className="container text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Get in <span className="text-gradient">Touch</span>
                    </h1>
                    <div className="section-divider"></div>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-6">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="card p-8">
                                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>

                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                name="user_name"
                                                type="text"
                                                required
                                                placeholder="John Doe"
                                                className="w-full"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold mb-2">
                                                Your Email *
                                            </label>
                                            <input
                                                name="user_email"
                                                type="email"
                                                required
                                                placeholder="john@example.com"
                                                className="w-full"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            name="subject"
                                            type="text"
                                            required
                                            placeholder="How can we help you?"
                                            className="w-full"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={6}
                                            placeholder="Tell us more about your inquiry..."
                                            className="w-full resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`btn w-full text-lg flex items-center justify-center gap-2 transition-all ${submitted ? 'bg-success' : 'btn-primary'
                                            } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        <FiSend size={20} className={isSubmitting ? 'animate-bounce' : ''} />
                                        {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            {/* Email */}
                            <div className="card p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-4 bg-accent-gold/10 rounded-2xl">
                                        <FiMail size={28} className="text-accent-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Email Us</h3>
                                        <p className="text-medium-gray text-sm mb-2">
                                            We're here to help
                                        </p>
                                        <a
                                            href="mailto:uktrendbox@gmail.com"
                                            className="text-accent-gold hover:underline font-semibold"
                                        >
                                            uktrendbox@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="card p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-4 bg-accent-gold/10 rounded-2xl">
                                        <FiPhone size={28} className="text-accent-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Call Us</h3>
                                        <p className="text-medium-gray text-sm mb-2">
                                            Mon-Fri 9am-6pm EST
                                        </p>
                                        <a
                                            href="tel:+447376212680"
                                            className="text-accent-gold hover:underline font-semibold"
                                        >
                                            +44 73 7621 2680
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="card p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-4 bg-accent-gold/10 rounded-2xl">
                                        <FiMapPin size={28} className="text-accent-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                                        <p className="text-medium-gray text-sm">
                                            230 Parkhouse Court, Hatfield<br />
                                            Hertfordshire, UK
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="card p-6 bg-gradient-to-br from-accent-gold to-accent-gold-dark text-white">
                                <h3 className="font-bold text-lg mb-4">Business Hours</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span className="font-semibold">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span className="font-semibold">10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span className="font-semibold">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="mt-20">
                        <h2 className="text-4xl font-bold text-center mb-12">
                            Frequently Asked Questions
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="card p-6">
                                <h3 className="font-bold text-lg mb-3">What are your shipping options?</h3>
                                <p className="text-medium-gray">
                                    We offer free shipping on all orders over $50. Standard shipping takes 3-5 business days.
                                </p>
                            </div>

                            <div className="card p-6">
                                <h3 className="font-bold text-lg mb-3">What is your return policy?</h3>
                                <p className="text-medium-gray">
                                    We offer a 30-day hassle-free return policy. Items must be unused and in original packaging.
                                </p>
                            </div>

                            <div className="card p-6">
                                <h3 className="font-bold text-lg mb-3">Do you ship internationally?</h3>
                                <p className="text-medium-gray">
                                    Yes! We ship to over 50 countries worldwide. Shipping costs and times vary by location.
                                </p>
                            </div>

                            <div className="card p-6">
                                <h3 className="font-bold text-lg mb-3">How can I track my order?</h3>
                                <p className="text-medium-gray">
                                    Once your order ships, you'll receive a tracking number via email to monitor your delivery.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
