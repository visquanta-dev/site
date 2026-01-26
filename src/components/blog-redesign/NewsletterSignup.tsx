'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Check, Loader2, Sparkles, AlertCircle } from 'lucide-react';

interface NewsletterSignupProps {
    variant?: 'inline' | 'footer';
}

export default function NewsletterSignup({ variant = 'inline' }: NewsletterSignupProps) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [isFocused, setIsFocused] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || status === 'loading') return;

        setStatus('loading');

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setEmail('');
                // Reset after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                console.error('Subscription error:', data.error);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            }
        } catch (error) {
            console.error('Network error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const isInline = variant === 'inline';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative overflow-hidden ${isInline ? 'my-16' : 'py-20'}`}
        >
            {/* Background Container */}
            <div
                className={`relative rounded-2xl overflow-hidden ${isInline
                    ? 'p-8 sm:p-12'
                    : 'px-6 py-16 sm:px-12'
                    }`}
                style={{
                    background: 'linear-gradient(135deg, rgba(255,116,4,0.08) 0%, rgba(20,20,20,0.95) 50%, rgba(255,116,4,0.03) 100%)',
                    border: '1px solid rgba(255,116,4,0.15)',
                }}
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B35]/[0.03] rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FF6B35]/[0.02] rounded-full blur-[60px] pointer-events-none" />

                {/* Subtle Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                />

                {/* Content */}
                <div className={`relative z-10 ${isInline ? 'flex flex-col md:flex-row items-center gap-8' : 'text-center max-w-2xl mx-auto'}`}>
                    {/* Icon & Text */}
                    <div className={`${isInline ? 'flex-1' : 'mb-8'}`}>
                        <div className={`flex items-center gap-3 ${isInline ? '' : 'justify-center'} mb-4`}>
                            <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center border border-[#FF6B35]/20">
                                <Sparkles className="w-5 h-5 text-[#FF6B35]" />
                            </div>
                            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#FF6B35] uppercase">
                                Weekly Insights
                            </span>
                        </div>

                        <h3 className={`text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight ${isInline ? '' : ''}`}>
                            The Dealership AI Playbook
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed max-w-md">
                            Weekly strategies for lead conversion and revenue growth.
                        </p>
                    </div>

                    {/* Form */}
                    <div className={`${isInline ? 'w-full md:w-auto md:min-w-[380px]' : 'w-full max-w-md mx-auto'}`}>
                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-green-500/10 border border-green-500/20"
                            >
                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <Check className="w-4 h-4 text-green-400" />
                                </div>
                                <span className="text-green-400 font-medium">You're subscribed! Check your inbox.</span>
                            </motion.div>
                        ) : status === 'error' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-red-500/10 border border-red-500/20"
                            >
                                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                    <AlertCircle className="w-4 h-4 text-red-400" />
                                </div>
                                <span className="text-red-400 font-medium">Something went wrong. Please try again.</span>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="relative">
                                <div
                                    className={`relative flex flex-col sm:flex-row items-stretch sm:items-center gap-2 rounded-2xl sm:rounded-xl transition-all duration-300 p-1.5 ${isFocused
                                        ? 'ring-2 ring-[#FF6B35]/40 bg-white/[0.03]'
                                        : 'bg-white/[0.02]'
                                        }`}
                                    style={{
                                        border: '1px solid rgba(255,255,255,0.08)',
                                    }}
                                >
                                    <div className="flex items-center flex-1">
                                        <div className="pl-4 text-white/30">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onFocus={() => setIsFocused(true)}
                                            onBlur={() => setIsFocused(false)}
                                            placeholder="Enter your work email"
                                            className="flex-1 bg-transparent px-4 py-4 text-white placeholder:text-white/30 focus:outline-none text-sm"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'loading' || !email}
                                        className="px-5 py-4 sm:py-2.5 rounded-xl sm:rounded-lg bg-[#FF6B35] hover:bg-[#FF8C5A] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group flex-shrink-0"
                                    >
                                        {status === 'loading' ? (
                                            <Loader2 className="w-4 h-4 text-black animate-spin" />
                                        ) : (
                                            <>
                                                <span className="text-black font-semibold text-sm whitespace-nowrap">Send Me Strategies</span>
                                                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </div>

                                {/* Social Proof / Privacy */}
                                <p className="mt-3 text-[11px] text-white/30 text-center flex items-center justify-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    Join 2,500+ automotive professionals
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
