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
        description: "80% of service calls go unanswered. Here's what that costs you: and how to fix it.",
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
                                <div className="relative h-full rounded-[2rem] bg-black border border-white/[0.05] overflow-hidden transition-all duration-500 hover:border-[#FF7404]/50 hover:bg-white/[0.04]">

                                    {/* Image Container */}
                                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#020202]">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            unoptimized
                                            className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 relative">
                                        <div className="mb-4">
                                            <span className="text-[10px] font-bold text-[#FF7404] tracking-widest uppercase px-3 py-1 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20">
                                                {article.category}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-[#FF7404] transition-colors duration-300">
                                            {article.title}
                                        </h3>

                                        <p className="text-white/50 mb-6 line-clamp-2 text-sm font-light leading-relaxed">
                                            {article.description}
                                        </p>

                                        <div className="flex items-center text-xs font-bold text-white group-hover:text-[#FF7404] transition-colors gap-2 uppercase tracking-widest">
                                            Read Article
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
