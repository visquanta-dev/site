'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Zap, Star, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import MobileCarousel from './MobileCarousel';

const solutions = [
    {
        title: "Lead Reactivation",
        description: "Turn dead leads into booked appointments. Automatically.",
        href: "/lead-reactivation",
        icon: MessageSquare
    },
    {
        title: "Speed to Lead",
        description: "Respond to new leads in under 60 seconds. Before competitors do.",
        href: "/speed-to-lead",
        icon: Zap
    },
    {
        title: "Website Widget",
        description: "Turn website visitors into text conversations instantly.",
        href: "/website-widget",
        icon: MessageCircle
    },
    {
        title: "Reputation Management",
        description: "Get more 5-star reviews. Automatically. Every time.",
        href: "/reputation-management",
        icon: Star
    }
];

export default function MoreSolutions() {
    return (
        <section className="py-24 bg-[#0A0A0A] relative border-t border-white/[0.05] overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[#FF6B35]/[0.02] rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            More <span className="text-[#FF6B35]">AutoMaster</span> Solutions
                        </h2>
                        <p className="text-lg text-white/40 font-light max-w-xl">
                            Complete AI automation for your entire dealership.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link
                            href="/"
                            className="group flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-[#FF6B35] uppercase hover:text-white transition-colors duration-300"
                        >
                            View Full Platform
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>

                {/* Cards Grid */}
                <MobileCarousel gridClassName="md:grid-cols-2 lg:grid-cols-4" slideClassName="w-[80vw]">
                    {solutions.map((solution, i) => {
                        const Icon = solution.icon;
                        return (
                            <Link key={i} href={solution.href} className="group relative block h-full">
                                <motion.div
                                    className="h-full relative rounded-[20px] p-8 overflow-hidden transition-all duration-300"
                                    style={{
                                        background: 'rgba(17,17,17,0.8)',
                                        backdropFilter: 'blur(12px)',
                                        WebkitBackdropFilter: 'blur(12px)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                    }}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    whileHover={{
                                        y: -6,
                                        backgroundColor: 'rgba(255,107,53,0.03)',
                                        borderColor: 'rgba(255,107,53,0.4)',
                                        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)'
                                    }}
                                >
                                    {/* Hover Top Gradient Line */}
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Icon */}
                                    <div className="mb-8 relative inline-block">
                                        {/* Icon Glow */}
                                        <div className="absolute inset-0 bg-[#FF6B35]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center bg-[#FF6B35]/10 border border-[#FF6B35]/20 group-hover:border-[#FF6B35]/40 transition-colors duration-300">
                                            <Icon className="w-7 h-7 text-[#FF6B35] group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF6B35] transition-colors duration-300">
                                            {solution.title}
                                        </h3>
                                        <p className="text-[#A1A1AA] text-sm leading-relaxed mb-8 group-hover:text-white/70 transition-colors duration-300 min-h-[40px]">
                                            {solution.description}
                                        </p>

                                        {/* CTA */}
                                        <div className="flex items-center gap-2 text-xs font-bold text-[#FF6B35] tracking-widest uppercase mb-1">
                                            <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#FF6B35] group-hover:after:w-full after:transition-all after:duration-300">
                                                Learn More
                                            </span>
                                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </MobileCarousel>

            </div>
        </section>
    );
}
