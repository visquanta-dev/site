'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const stats = [
    { value: "30%", label: "Avg. Revenue Increase" },
    { value: "35%", label: "Cold Lead Response Rate" },
    { value: "$8,500", label: "Recovered Wkly Revenue" },
];

const testimonials = [
    {
        quote: "VisQuanta completely transformed how we handle our service drive. The AI feels incredibly human.",
        author: "Mark S.",
        role: "General Manager",
        dealership: "Genesis of Norman"
    },
    {
        quote: "We recovered $30k in lost service revenue in the first month alone. It pays for itself instantly.",
        author: "Sarah J.",
        role: "Service Director",
        dealership: "Oklahoma City VW"
    }
];

export default function SocialProofSection() {
    return (
        <div className="w-full space-y-20 py-12">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5"
                    >
                        <div className="text-4xl md:text-5xl font-black text-[#FF7404] mb-2 tracking-tighter">
                            {stat.value}
                        </div>
                        <div className="text-sm text-white/40 uppercase tracking-widest font-bold">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group"
                    >
                        <Quote className="absolute top-8 left-8 w-10 h-10 text-[#FF7404]/20 group-hover:text-[#FF7404]/40 transition-colors" />
                        <div className="relative z-10 pt-8">
                            <p className="text-lg text-white/80 leading-relaxed mb-6 font-medium">
                                &ldquo;{t.quote}&rdquo;
                            </p>
                            <div>
                                <div className="text-white font-bold">{t.author}</div>
                                <div className="text-[#FF7404] text-xs uppercase tracking-wider font-bold mt-1">
                                    {t.role}, {t.dealership}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Logos */}
            <div className="border-t border-white/10 pt-12">
                <p className="text-center text-white/20 text-xs uppercase tracking-[0.3em] font-bold mb-8">Trusted by Top Dealerships</p>
                <div className="flex flex-wrap justify-center gap-12 sm:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    {/* Text fallbacks if logos not present, or assume generic style divs */}
                    <div className="text-xl font-bold text-white tracking-tighter">GENESIS <span className="font-light">OF NORMAN</span></div>
                    <div className="text-xl font-bold text-white tracking-tighter">OKC <span className="font-light">VOLKSWAGEN</span></div>
                    <div className="text-xl font-bold text-white tracking-tighter">NORMAN <span className="font-light">HYUNDAI</span></div>
                </div>
            </div>
        </div>
    );
}
