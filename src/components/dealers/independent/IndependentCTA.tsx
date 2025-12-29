'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function IndependentCTA() {
    return (
        <section className="py-32 bg-[#020202] relative overflow-hidden">
            {/* Animated Background Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.25, 0.15]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF7404] rounded-full blur-[150px] pointer-events-none"
            />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />

            {/* Animated Mesh Grid */}
            <motion.div
                className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 text-center overflow-hidden"
                    >
                        {/* Shimmer Line */}
                        <motion.div
                            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF7404] to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Corner Sparkles */}
                        <motion.div
                            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                            transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
                            className="absolute top-6 right-6"
                        >
                            <Sparkles className="w-6 h-6 text-[#FF7404]/30" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 text-[#FF7404] text-xs font-bold uppercase tracking-widest mb-8"
                        >
                            <ShieldCheck className="w-4 h-4" />
                            Risk-Free Deployment
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
                        >
                            Your Showroom <br />
                            <motion.span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]"
                                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                style={{ backgroundSize: "200% 200%" }}
                            >
                                Never Closes.
                            </motion.span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-12"
                        >
                            Join the independents already competing at franchise scale. Same AI firepower, fraction of the cost, live in days.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                        >
                            <Link href="/book-demo">
                                <motion.div
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 50px -10px rgba(255,116,4,0.6)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group relative w-full sm:w-auto px-10 py-5 bg-[#FF7404] text-black font-bold text-lg rounded-xl overflow-hidden cursor-pointer shadow-[0_0_40px_-10px_rgba(255,116,4,0.5)]"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        Book Strategy Call
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    {/* Button Shine Effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "100%" }}
                                        transition={{ duration: 0.6 }}
                                    />
                                </motion.div>
                            </Link>
                        </motion.div>

                        {/* Trust Footer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap items-center justify-center gap-8 border-t border-white/5 pt-8"
                        >
                            {[
                                "No Long-Term Contract",
                                "30-Day Money Back Guarantee",
                                "Live in 3-5 Business Days"
                            ].map((text, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.7 + i * 0.1 }}
                                    className="flex items-center gap-2 text-zinc-500 text-sm font-medium"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-[#FF7404]" />
                                    {text}
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
