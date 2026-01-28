'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { RequestDemoButton } from './CalendlyModal';

interface MidPageCTAProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    href?: string;
}

export default function MidPageCTA({
    title = "Ready to transform your dealership?",
    subtitle = "Join 500+ high-performance groups using VisQuanta to automate growth.",
    buttonText = "Schedule Your Walkthrough",
    href = "/book-demo"
}: MidPageCTAProps) {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm p-8 md:p-12 lg:p-20 text-center relative overflow-hidden group"
                >
                    {/* Decorative Blur */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FF7404]/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#FF7404]/20 transition-colors duration-700" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#FF7404]/5 rounded-full blur-[80px] pointer-events-none" />

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 mb-8">
                        <Sparkles className="w-4 h-4 text-[#FF7404]" />
                        <span className="text-[#FF7404] text-[10px] font-bold uppercase tracking-[0.2em]">Partner with the Best</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                        {title}
                    </h2>

                    <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>

                    {buttonText === "Schedule Your Walkthrough" ? (
                        <RequestDemoButton asChild>
                            <button className="inline-flex px-10 py-5 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-black uppercase tracking-widest rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_-15px_rgba(255,116,4,0.4)] items-center gap-3">
                                <Sparkles className="w-5 h-5" />
                                {buttonText}
                            </button>
                        </RequestDemoButton>
                    ) : (
                        <Link href={href} className="inline-block group/btn">
                            <button className="px-10 py-5 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-black uppercase tracking-widest rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_-15px_rgba(255,116,4,0.4)] flex items-center gap-3">
                                {buttonText}
                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    )}

                    <p className="text-[10px] sm:text-xs text-white/30 uppercase tracking-[0.15em] font-bold mt-6">
                        15-min 1:1 • Get an exact revenue-lift projection for your dealership                  </p>
                </motion.div>
            </div>
        </section>
    );
}
