'use client';

import { motion } from 'framer-motion';
import { Quote, User } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
    {
        name: "Jo DaBrowski",
        role: "General Manager",
        dealer: "Seth Wadley of Pauls Valley",
        quote: "Fantastic for our business. VisQuanta gets to leads before anyone else. If you're even thinking about it, do it, it pays for itself fast.",
        stars: 5,
        image: "/testimonials/jo-dabrowski.png"
    },
    {
        name: "Jone McWhirter",
        role: "General Manager",
        dealer: "Seth Wadley Ford PV",
        quote: "The only platform that actually understands the automotive sales cycle from end to end. We've replaced several disjointed tools with VisQuanta, and our store has never run smoother. Actual sales, not fluff.",
        stars: 5,
        image: "/testimonials/jone-mcwhirter.png"
    },
    {
        name: "Michael T.",
        role: "Dealer Principal",
        dealer: "Tri-State Auto Group",
        quote: "I was skeptical about another AI tool, but the human oversight makes all the difference. It's like having a 24/7 BDC that never calls in sick. The ROI was evident in the first 30 days.",
        stars: 5,
        image: "/testimonials/Steve.jpeg"
    }
];

export default function SuccessStories() {
    return (
        <section className="py-24 bg-[#030303] border-t border-white/[0.05]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-6">Real Results. <span className="text-[#FF7404]">Real GMs.</span></h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        See what your peers are saying about the VisQuanta partnership. We don't just provide software; we provide a competitive advantage that transforms dealership operations.
                    </p>
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
                                <div className="relative w-14 h-14 rounded-full bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden text-white/50">
                                    {t.image ? (
                                        <Image src={t.image} alt={t.name} fill className="object-cover" />
                                    ) : (
                                        <User className="w-7 h-7" />
                                    )}
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
