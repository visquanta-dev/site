'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import MobileCarousel from './MobileCarousel';

const articles = [
    {
        category: "RETENTION",
        title: "What's Killing Your Retention?",
        description: "80% of service calls go unanswered. Here's what that costs you — and how to fix it.",
        href: "/blog/whats-killing-retention-in-your-service-department-missed-calls",
        image: "/images/service-center.jpg"
    },
    {
        category: "ROI GUIDE",
        title: "24/7 Answering vs Voicemail",
        description: "The real revenue difference between voice AI and voicemail for service departments.",
        href: "/blog/why-your-service-department-needs-24-7-call-answering-not-just-voicemail",
        image: "https://assets.seobotai.com/visquanta.com/68beec3e68bb5e383214801d-1757344959220.jpg"
    }
];

export default function ServiceInsights() {
    return (
        <section className="py-12 md:py-24 bg-[#0A0A0A] border-t border-white/[0.05]">
            <div className="max-w-6xl mx-auto px-6">

                {/* Eyebrow */}
                <div className="flex justify-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/20"
                    >
                        <span className="text-[10px] font-bold text-[#FF6B35] uppercase tracking-[0.2em]">Voice AI Resources</span>
                    </motion.div>
                </div>

                <MobileCarousel gridClassName="md:grid-cols-2" slideClassName="w-[85vw]">
                    {articles.map((article, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="h-full" // Ensure full height in flex container
                        >
                            <Link href={article.href} className="group block h-full">
                                <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 bg-[#111] transition-all duration-300 hover:border-[#FF6B35]/30 hover:shadow-[0_0_30px_-5px_rgba(255,107,53,0.15)] hover:-translate-y-1">

                                    {/* Image Container */}
                                    <div className="relative aspect-video w-full overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10 opacity-80" />
                                        <div className="absolute inset-0 bg-black/40 z-0 transition-opacity duration-300 group-hover:opacity-30" />

                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            unoptimized
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 relative">
                                        <div className="mb-4">
                                            <span className="text-xs font-bold text-[#FF6B35] tracking-widest uppercase">
                                                {article.category}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-[#FF6B35] transition-colors duration-300">
                                            {article.title}
                                        </h3>

                                        <p className="text-[#A1A1AA] mb-6 line-clamp-2">
                                            {article.description}
                                        </p>

                                        <div className="flex items-center text-sm font-bold text-white group-hover:text-[#FF6B35] transition-colors gap-2">
                                            READ ARTICLE
                                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </MobileCarousel>

            </div>
        </section>
    );
}
