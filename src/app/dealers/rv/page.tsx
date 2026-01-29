'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Zap, Calendar, RefreshCw, BarChart3, Star, MessageSquare } from 'lucide-react';
import Link from 'next/link';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function RVConnectPage() {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dealershipName: '',
        phone: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    dealership: formData.dealershipName,
                    inquiryType: 'RV Connect Waitlist',
                    message: `Please add me to the RV Connect waitlist.\nDealership: ${formData.dealershipName}`
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit');
            }

            setFormState('success');
        } catch (error) {
            console.error('Submission error:', error);
            // Optionally set an error state here, for now we effectively reset or stay in submitting which isn't ideal but minimal change
            // But let's just reset to idle so they can try again if needed, or maybe add an error state later.
            // For this specific UI, checking 'success' shows the success message.
            setFormState('idle');
            alert('Something went wrong. Please try again.');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden selection:bg-[#ff6b00] selection:text-white font-sans">
            <Navigation />

            {/* Background Ambient Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#ff6b00]/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#ff6b00]/5 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] left-[20%] w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/0 via-neutral-900/50 to-[#0a0a0a]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <div className="flex-grow flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                    <main className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Column: Hero Content */}
                        <div className="space-y-8 lg:space-y-12 text-center lg:text-left">

                            {/* Animated Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mx-auto lg:mx-0"
                            >
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff6b00]"></span>
                                </span>
                                <span className="text-sm font-bold tracking-widest text-white uppercase">Coming Soon</span>
                            </motion.div>

                            {/* Title & Tagline */}
                            <div className="space-y-4">
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                                    className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
                                >
                                    <span className="text-white">RV</span>
                                    <span className="text-[#ff6b00]"> Connect</span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                    className="text-xl sm:text-2xl text-neutral-400 font-light"
                                >
                                    Purpose-built for RV dealerships.
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                                    className="text-base sm:text-lg text-neutral-500 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                                >
                                    AI-powered lead reactivation and service scheduling designed for the unique RV lifecycle.
                                </motion.p>
                            </div>

                            {/* Feature Highlights Mock (Mobile stacked, Desktop grid) */}
                        </div>

                        {/* Right Column: Lead Capture Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                            className="w-full max-w-md mx-auto lg:ml-auto"
                        >
                            <div className="relative">
                                {/* Sharp orange border glow */}
                                <div className="absolute inset-0 rounded-2xl border border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] animate-pulse opacity-80 pointer-events-none"></div>

                                <div className="relative bg-[#0F0F0F]/95 backdrop-blur-xl p-8 rounded-2xl overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        {formState === 'success' ? (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="flex flex-col items-center justify-center py-12 text-center"
                                            >
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                                    className="w-20 h-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6"
                                                >
                                                    <Check className="w-10 h-10" />
                                                </motion.div>
                                                <h2 className="text-2xl font-bold text-white mb-2">You're on the list!</h2>
                                                <p className="text-neutral-400 mb-6">We'll notify you at <span className="text-white font-medium">{formData.email}</span> the moment RV Connect goes live.</p>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                initial={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                <div className="mb-8">
                                                    <h2 className="text-xl font-semibold text-white mb-2">Keep Me Updated</h2>
                                                    <p className="text-neutral-400 text-sm">Join the waitlist. No spam — just priority access.</p>
                                                </div>

                                                <form onSubmit={handleSubmit} className="space-y-4">
                                                    <div className="space-y-2">
                                                        <label htmlFor="name" className="text-xs font-medium text-neutral-500 uppercase tracking-wider ml-1">Your Name</label>
                                                        <input
                                                            required
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ff6b00]/50 focus:border-[#ff6b00] transition-all duration-300"
                                                            placeholder="John Smith"
                                                        />
                                                    </div>

                                                    <div className="space-y-2">
                                                        <label htmlFor="dealershipName" className="text-xs font-medium text-neutral-500 uppercase tracking-wider ml-1">Dealership Name</label>
                                                        <input
                                                            required
                                                            type="text"
                                                            id="dealershipName"
                                                            name="dealershipName"
                                                            value={formData.dealershipName}
                                                            onChange={handleInputChange}
                                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ff6b00]/50 focus:border-[#ff6b00] transition-all duration-300"
                                                            placeholder="Grand Adventures RV"
                                                        />
                                                    </div>

                                                    <div className="space-y-2">
                                                        <label htmlFor="email" className="text-xs font-medium text-neutral-500 uppercase tracking-wider ml-1">Email Address</label>
                                                        <input
                                                            required
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ff6b00]/50 focus:border-[#ff6b00] transition-all duration-300"
                                                            placeholder="john@example.com"
                                                        />
                                                    </div>

                                                    <div className="space-y-2">
                                                        <label htmlFor="phone" className="text-xs font-medium text-neutral-500 uppercase tracking-wider ml-1">Phone Number <span className="normal-case opacity-50">(Optional)</span></label>
                                                        <input
                                                            type="tel"
                                                            id="phone"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleInputChange}
                                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ff6b00]/50 focus:border-[#ff6b00] transition-all duration-300"
                                                            placeholder="(555) 123-4567"
                                                        />
                                                    </div>

                                                    <button
                                                        type="submit"
                                                        disabled={formState === 'submitting'}
                                                        className="w-full mt-6 bg-gradient-to-r from-[#ff6b00] to-orange-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-[#ff6b00]/25 hover:scale-[1.02] transform transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                                                    >
                                                        {formState === 'submitting' ? (
                                                            <span className="animate-pulse">Reserving spot...</span>
                                                        ) : (
                                                            <>
                                                                <span className="relative z-10">Keep Me Updated</span>
                                                                <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                                                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                                            </>
                                                        )}
                                                    </button>
                                                </form>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                                className="mt-6 text-center text-xs text-neutral-600 font-medium"
                            >
                                <Zap className="w-3 h-3 inline-block mr-1 text-yellow-500" />
                                Be among the first RV dealers to transform your sales process
                            </motion.p>
                        </motion.div>
                    </main>

                    {/* RV Intelligence Suite - Product Snapshots */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="mt-32 pt-16 border-t border-white/5"
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Complete <span className="text-[#ff6b00]">Dealership Intelligence</span>
                            </h2>
                            <p className="text-neutral-400 max-w-2xl mx-auto">
                                The same powerful AI used by top automotive franchises, now tuned for the specific needs of RV sales and service.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Speed-to-Lead",
                                    icon: Zap,
                                    desc: "Engage every website inquiry in under 60 seconds. 24/7 coverage ensuring no buyer goes to a competitor."
                                },
                                {
                                    title: "Lead Reactivation",
                                    icon: RefreshCw,
                                    desc: "Mine your CRM for gold. AI conversationalists wake up dormant leads and book appointments automatically."
                                },
                                {
                                    title: "Service Scheduling",
                                    icon: Calendar,
                                    desc: "Fill your service bays. AI handles inbound service calls and texts to book maintenance without human intervention."
                                },
                                {
                                    title: "Reputation Mgmt",
                                    icon: Star,
                                    desc: "Protect your dealership's brand. Instant AI responses to reviews and sentiment monitoring to catch issues early."
                                },
                                {
                                    title: "Smart Site Widget",
                                    icon: MessageSquare,
                                    desc: "Convert more visitors. A proactive chat widget that qualifies trade-ins and schedules test drives instantly."
                                },
                                {
                                    title: "Lifecycle Automation",
                                    icon: BarChart3,
                                    desc: "Right message, right time. Automated seasonal campaigns for winterization, de-winterization, and trade-ups."
                                }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-[#ff6b00]/30 transition-all duration-300 backdrop-blur-sm"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center mb-6 group-hover:bg-[#ff6b00]/20 transition-colors">
                                        <feature.icon className="w-6 h-6 text-[#ff6b00]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff6b00] transition-colors">{feature.title}</h3>
                                    <p className="text-sm text-neutral-400 leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                </div>
            </div>

            <Footer />
        </div>
    );
}
