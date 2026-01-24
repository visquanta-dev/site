'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function WidgetCTA() {
    return (
        <section className="py-40 bg-[#050505] relative overflow-hidden border-t border-white/5">
            {/* Animated Glow Effect */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none"
                animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] opacity-30 pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-6 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]"
                >
                    Every closed tab is<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500">a lost sale.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-14 font-light leading-relaxed"
                >
                    Stop letting 70%+ of your traffic walk away anonymous.
                    Start capturing real phone numbers today.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link href="/book-demo" className="w-full sm:w-auto px-12 py-5 bg-white text-black text-lg font-bold rounded-xl hover:bg-zinc-100 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] group">
                        Start Capturing Leads
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-10 text-zinc-600 text-sm font-medium uppercase tracking-[0.2em]"
                >
                    Set up in under 5 minutes • Improve Revenue Immediately
                </motion.p>
            </div>
        </section>
    );
}
