'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
    {
        name: "Jo DaBrowski",
        role: "General Manager",
        dealer: "Seth Wadley of Pauls Valley",
        quote: "Fantastic for our business. VisQuanta gets to leads before anyone else. If you're even thinking about it, do it, it pays for itself fast.",
        stars: 5,
        image: "/testimonials/placeholder-1.jpg" // Placeholder
    },
    {
        name: "Jone McWhirter",
        role: "General Manager",
        dealer: "Seth Wadley Ford PV",
        quote: "The only platform that actually understands the automotive sales cycle from end to end. We've replaced several disjointed tools with VisQuanta, and our store has never run smoother. Actual sales, not fluff.",
        stars: 5,
        image: "/testimonials/placeholder-2.jpg" // Placeholder
    },
    {
        name: "Cody Rutledge",
        role: "General Manager",
        dealer: "Street Smart Auto Brokers",
        quote: "Absolutely amazing. Our team thought it was one of the managers talking, not AI. That's how real it feels. We've closed deals we thought were long gone.",
        stars: 5,
        image: "/testimonials/placeholder-3.jpg" // Placeholder
    }
];

export default function SuccessStories() {
    return (
        <section className="py-24 bg-[#030303] border-t border-white/[0.05]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-6">Real Results. <span className="text-[#FF7404]">Real GMs.</span></h2>
                    <p className="text-white/60">See what your peers are saying about the VisQuanta partnership.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl relative group hover:border-[#FF7404]/30 transition-colors"
                        >
                            {/* Quote Icon */}
                            <Quote className="absolute top-8 right-8 w-10 h-10 text-white/5 group-hover:text-[#FF7404]/10 transition-colors" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, j) => (
                                    <span key={j} className="text-[#FF7404]">★</span>
                                ))}
                            </div>

                            <p className="text-lg text-white/80 leading-relaxed mb-8 min-h-[120px]">
                                "{t.quote}"
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                <div className="relative w-14 h-14 rounded-full bg-white/10 border border-white/10 flex-shrink-0 overflow-hidden">
                                    {/* Placeholder styling or Image */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="text-white font-bold leading-tight">{t.name}</div>
                                    <div className="text-white/40 text-[10px] uppercase tracking-wider font-medium mt-0.5">{t.role}</div>
                                    <div className="text-[#FF7404] text-[10px] font-bold mt-0.5">{t.dealer}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
