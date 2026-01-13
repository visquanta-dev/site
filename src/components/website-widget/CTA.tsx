'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
    return (
        <section className="py-32 bg-[#FF7404] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-black text-[#FF7404] mb-8 shadow-2xl">
                        <MessageSquare className="w-10 h-10" />
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black mb-8 tracking-tight leading-[0.9]">
                        Stop Losing Leads to <br />
                        <span className="text-white">Slow Responses</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-black/80 font-medium mb-12 max-w-2xl mx-auto">
                        Install VisQuanta's AI Widget today and start capturing 3x more leads from your existing traffic.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/book-demo"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-bold text-lg rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
                        >
                            Schedule a Demo
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white/20 backdrop-blur-lg border border-black/10 text-black font-bold text-lg rounded-2xl hover:bg-white/30 transition-all"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
