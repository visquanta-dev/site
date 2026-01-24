'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Trophy, TrendingUp, BarChart3, Target, Zap } from 'lucide-react';
import Image from 'next/image';

interface RelatedCaseStudyProps {
    caseStudySlugs: string[];
    title?: string;
}

const allCaseStudies = [
    {
        id: 'metro-motors',
        client: 'Metro Auto Group',
        title: 'Added 32 Cars/Mo with Reactivation',
        metric: '+32',
        metricLabel: 'Monthly Sales',
        icon: TrendingUp,
        color: 'from-orange-500/20 to-red-500/20',
        image: '/images/suite-bg/llm-bg.png',
        link: '/case-studies/metro-motors'
    },
    {
        id: 'bayside-honda',
        client: 'Bayside Honda',
        title: '98% Reduction in Response Time',
        metric: '-98%',
        metricLabel: 'Response Time',
        icon: Zap,
        color: 'from-blue-500/20 to-cyan-500/20',
        image: '/images/suite-bg/s2l-bg.png',
        link: '/case-studies/bayside-honda'
    },
    {
        id: 'prestige-imports',
        client: 'Prestige Imports',
        title: '300% ROI on Service Drive',
        metric: '300%',
        metricLabel: 'ROI',
        icon: BarChart3,
        color: 'from-emerald-500/20 to-green-500/20',
        image: '/images/suite-bg/ds-bg.png',
        link: '/case-studies/prestige-imports'
    },
    {
        id: 'freedom-independent',
        client: 'Freedom Independent',
        title: 'Inventory Turn Reduced to 18 Days',
        metric: '18 Days',
        metricLabel: 'Turn Time',
        icon: Target,
        color: 'from-purple-500/20 to-indigo-500/20',
        image: '/images/suite-bg/ds-bg.png',
        link: '/case-studies/freedom-independent'
    }
];

export default function RelatedCaseStudies({
    caseStudySlugs,
    title = "Real World Success"
}: RelatedCaseStudyProps) {
    const studies = allCaseStudies.filter(s => caseStudySlugs.includes(s.id));

    if (studies.length === 0) return null;

    return (
        <section className="py-24 bg-[#050505] border-y border-white/5">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 mb-6">
                            <Trophy className="w-4 h-4 text-[#FF7404]" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF7404]">
                                Field Reports
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                            {title}
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            See how high-performance dealerships are winning with The AutoMaster Suite.
                        </p>
                    </div>

                    {/* Case Studies Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {studies.map((study, index) => (
                            <motion.div
                                key={study.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={study.link}
                                    className="group relative flex flex-col h-full bg-[#0A0A0A] border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/10"
                                >
                                    {/* Cinematic Background */}
                                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                                        <Image
                                            src={study.image}
                                            alt=""
                                            fill
                                            className="object-cover opacity-30 mix-blend-overlay"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-br ${study.color} to-black/95`} />
                                    </div>

                                    <div className="relative p-10 flex flex-col h-full z-10">
                                        <div className="flex justify-between items-start mb-8">
                                            <div>
                                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF7404] mb-2">
                                                    {study.client}
                                                </div>
                                                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-500 transition-all duration-300">
                                                    {study.title}
                                                </h3>
                                            </div>
                                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                                                <study.icon className="w-6 h-6 text-zinc-400 group-hover:text-white" />
                                            </div>
                                        </div>

                                        <div className="mt-auto flex items-end justify-between">
                                            <div className="border-l-2 border-[#FF7404] pl-6 py-2">
                                                <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br ${study.color.replace('/20', '')} tracking-tighter`}>
                                                    {study.metric}
                                                </div>
                                                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest pt-1">
                                                    {study.metricLabel}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-widest group-hover:text-[#FF7404] transition-colors">
                                                Read Case Study
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
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
