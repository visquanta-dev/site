
'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function ConfirmationPage() {
    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black font-sans">
            <Navigation />

            <section className="relative pt-40 pb-32 overflow-hidden flex items-center min-h-[80vh]">
                {/* Background Decorations */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7404]/5 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute inset-0 bg-enterprise-grid opacity-5 pointer-events-none" />
                </div>

                <div className="container px-4 mx-auto relative z-10 text-center">
                    <div className="max-w-2xl mx-auto">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="w-24 h-24 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 flex items-center justify-center mx-auto mb-10"
                        >
                            <CheckCircle2 className="w-12 h-12 text-[#FF7404]" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                Subscription Verified
                            </span>

                            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                                You're Officially <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]">
                                    On The List.
                                </span>
                            </h1>

                            <p className="text-zinc-400 text-lg mb-12 leading-relaxed max-w-lg mx-auto">
                                Welcome to VisQuanta Insights. We've added you to our database. Start exploring our latest AI strategies for automotive retail below.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/blog">
                                    <button className="group px-8 py-4 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-black uppercase tracking-widest rounded-xl transition-all shadow-[0_0_40px_-10px_rgba(255,116,4,0.4)] flex items-center gap-3">
                                        Browse the Blog
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                                <Link href="/">
                                    <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-widest rounded-xl border border-white/10 transition-all">
                                        Back to Home
                                    </button>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="mt-20 pt-10 border-t border-white/5"
                        >
                            <div className="flex items-center justify-center gap-4 text-zinc-600">
                                <Sparkles className="w-4 h-4" />
                                <p className="text-sm font-medium">Join 2,500+ top-performing automotive dealers</p>
                                <Sparkles className="w-4 h-4" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
