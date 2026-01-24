'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, LucideIcon, Zap, RefreshCcw, Star, Wrench, MessageSquare, Target, HeartHandshake } from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
    zap: Zap,
    refresh: RefreshCcw,
    star: Star,
    wrench: Wrench,
    message: MessageSquare,
    target: Target,
    heart: HeartHandshake
};

interface RelatedSolution {
    title: string;
    href: string;
    description: string;
    icon?: keyof typeof ICON_MAP;
}

interface RelatedSolutionsProps {
    solutions: RelatedSolution[];
    title?: string;
}

export default function RelatedSolutions({
    solutions,
    title = "Related Solutions"
}: RelatedSolutionsProps) {
    return (
        <section className="py-24 bg-[#010101] border-y border-white/5">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF7404]">
                                Explore More
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {title}
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            Maximize your results by combining complementary tools from The AutoMaster Suite.
                        </p>
                    </div>

                    {/* Solutions Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={solution.href}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={solution.href}
                                    className="group relative block h-full p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#FF7404]/30 hover:bg-white/[0.04] transition-all duration-300"
                                >
                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                                    <div className="relative z-10">
                                        {/* Icon */}
                                        {solution.icon && ICON_MAP[solution.icon] && (() => {
                                            const Icon = ICON_MAP[solution.icon];
                                            return (
                                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#FF7404]/10 group-hover:border-[#FF7404]/30 transition-all duration-300">
                                                    <Icon className="w-6 h-6 text-zinc-400 group-hover:text-[#FF7404] transition-colors" />
                                                </div>
                                            );
                                        })()}

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF7404] transition-colors">
                                            {solution.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                                            {solution.description}
                                        </p>

                                        {/* Arrow */}
                                        <div className="flex items-center gap-2 text-sm font-bold text-zinc-400 group-hover:text-[#FF7404] transition-colors">
                                            <span>Explore</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
