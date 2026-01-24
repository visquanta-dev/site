'use client';

import { motion } from 'framer-motion';
import { Quote, Star, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Brand Logos from Home Page for Consistency
const BRAND_LOGOS = [
    { name: 'Audi', src: '/images/logos/audi.jpg' },
    { name: 'Ford Direct', src: '/images/logos/ford-direct.jpg' },
    { name: 'General Motors', src: '/images/logos/gm.jpg' },
    { name: 'Honda', src: '/images/logos/honda.jpg' },
    { name: 'Toyota', src: '/images/logos/toyota.jpg' },
    { name: 'Hyundai', src: '/images/logos/brand-1.png' },
    { name: 'Porsche', src: '/images/logos/brand-4.png' }
];

export default function SocialProofSection() {
    const stats = [
        { value: '500k+', label: 'Conversations' },
        { value: '4.9/5', label: 'Dealer Rating' },
        { value: '362+', label: 'Dealerships' },
        { value: '98%', label: 'Open Rate' },
    ];

    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="py-32 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none animate-pulse-slow" />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight"
                    >
                        Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-orange-400 animate-gradient-x bg-[length:200%_auto]">Forward-Thinking</span> Dealerships
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto"
                    >
                        Join hundreds of GMs who stopped losing leads to browser tabs and started capturing verified mobile numbers.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center max-w-7xl mx-auto">

                    {/* Left: Testimonial Card (Span 7) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7 relative group"
                    >
                        {/* Glass Card */}
                        <div className="relative p-10 md:p-14 rounded-[3rem] bg-zinc-900/40 border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-500 hover:bg-zinc-900/60 hover:border-orange-500/20 hover:shadow-orange-500/10">

                            {/* Inner Glow */}
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-orange-500/10 to-transparent blur-[80px] opacity-50 pointer-events-none" />

                            {/* Quote Icon */}
                            <Quote className="absolute top-10 left-10 w-16 h-16 text-white/5 rotate-180" />

                            <div className="relative z-10">
                                {/* Verified Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-8">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    Verified Result
                                </div>

                                {/* Star Rating */}
                                <div className="flex gap-1.5 mb-8">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} className="w-6 h-6 text-orange-500 fill-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]" />
                                    ))}
                                </div>

                                {/* Quote Text */}
                                <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-12">
                                    "We captured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 font-bold border-b-2 border-orange-500/30">340 leads</span> in the first month. The SMS widget pays for itself 10x over. My team loves getting the direct mobile number instantly."
                                </p>

                                {/* Author Block */}
                                <div className="flex items-center gap-6">
                                    <div className="relative w-20 h-20">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 animate-spin-slow opacity-20 blur-md" />
                                        <div className="w-full h-full rounded-full bg-zinc-800 overflow-hidden border-2 border-white/10 ring-4 ring-black relative z-10">
                                            <Image src="/images/nick.png" width={80} height={80} alt="Nick Williams" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-xl mb-1">Nick Williams</div>
                                        <div className="text-orange-500 text-sm uppercase tracking-wider font-bold">General Manager</div>
                                        <div className="text-zinc-500 text-xs uppercase tracking-wider font-medium mt-0.5">Northstar Motors</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Stats Bento Grid (Span 5) */}
                    <div className="lg:col-span-5 space-y-8">

                        {/* Bento Grid */}
                        <div className="grid grid-cols-2 gap-5">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="p-8 rounded-[2rem] bg-zinc-900/30 border border-white/5 group hover:bg-zinc-800/50 hover:border-orange-500/20 transition-all duration-300 hover:scale-[1.02] cursor-default relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-orange-400 group-hover:to-amber-200 transition-all duration-300">{stat.value}</div>
                                    <div className="text-[11px] text-zinc-500 uppercase tracking-[0.2em] font-bold group-hover:text-zinc-400 transition-colors">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Powering Text */}
                        <div className="pt-8 pl-2">
                            <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-zinc-800"></span>
                                Powering Modern Dealerships
                                <span className="w-8 h-[1px] bg-zinc-800"></span>
                            </p>
                        </div>
                    </div>

                </div>

                {/* Infinite Logo Marquee */}
                <div className="mt-20 relative overflow-hidden w-full mask-gradient-x">
                    {/* Gradient Masks for fade effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

                    <motion.div
                        className="flex gap-24 w-max items-center"
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {[...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS].map((brand, i) => (
                            <div
                                key={i}
                                className="relative flex items-center justify-center min-w-[140px] px-8"
                            >
                                <img
                                    src={brand.src}
                                    alt={brand.name}
                                    className="h-9 w-auto object-contain mix-blend-screen grayscale brightness-125 opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-default"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
