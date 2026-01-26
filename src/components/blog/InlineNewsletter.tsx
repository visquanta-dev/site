'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, Check, AlertCircle, ArrowRight, Loader2 } from 'lucide-react';

export default function InlineNewsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || status === 'loading') return;
        setStatus('loading');

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setStatus('success');
                setEmail('');
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <div className="my-10 not-prose">
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0A]">
                {/* Subtle gradient accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-[#FF7404]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404]/5 to-transparent pointer-events-none" />

                <div className="relative p-6 px-5 flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between">

                    {/* Left: Value Prop */}
                    <div className="flex items-start gap-4 flex-1">
                        <div className="hidden sm:flex mt-1 w-8 h-8 rounded-lg bg-[#FF7404]/10 border border-[#FF7404]/20 items-center justify-center flex-shrink-0">
                            <Sparkles className="w-4 h-4 text-[#FF7404]" />
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                                <span className="sm:hidden"><Sparkles className="w-4 h-4 text-[#FF7404]" /></span>
                                Get weekly AI strategies for your dealership
                            </h4>
                            <p className="text-xs text-zinc-500">
                                Join 2,500+ automotive professionals. No spam.
                            </p>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="w-full md:w-auto md:min-w-[340px]">
                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center gap-2 text-green-400 bg-green-900/10 px-4 py-2 rounded-lg border border-green-900/20 text-sm font-medium"
                            >
                                <Check className="w-4 h-4" />
                                <span>Subscribed! Check your inbox.</span>
                            </motion.div>
                        ) : status === 'error' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center gap-2 text-red-400 bg-red-900/10 px-4 py-2 rounded-lg border border-red-900/20 text-sm font-medium"
                            >
                                <AlertCircle className="w-4 h-4" />
                                <span>Error. Please try again.</span>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                                <div className="relative flex-grow">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                                    <input
                                        type="email"
                                        placeholder="Enter your work email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF7404]/50 focus:ring-1 focus:ring-[#FF7404]/50 transition-all"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="px-4 py-2.5 bg-[#FF7404] hover:bg-[#ff8a2b] text-black text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50"
                                >
                                    {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Send Me Strategies'}
                                    {!status && <ArrowRight className="w-3.5 h-3.5" />}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
