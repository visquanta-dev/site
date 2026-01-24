'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Trophy, TrendingUp, Users, Target, BarChart3, Zap, DollarSign, Filter, Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const categories = [
    { id: 'all', label: 'All Stories' },
    { id: 'franchise', label: 'Franchise Groups' },
    { id: 'independent', label: 'Independent' },
    { id: 'service', label: 'Service Drive' },
    { id: 'bdc', label: 'BDC Optimization' }
];

const caseStudies = [
    {
        id: 'metro-motors',
        client: 'Metro Auto Group',
        location: 'California, USA',
        title: 'How Metro Auto Group Added 32 Cars/Mo with Reactivation',
        metric: '+32',
        metricLabel: 'Monthly Sales',
        category: 'franchise',
        tags: ['Franchise Group', 'Lead Activation'],
        description: 'Facing a stagnating database of 45k leads, Metro Auto Group deployed The AutoMaster Suite to identify and engage in-market buyers, resulting in an immediate 15% boost in appointment show rates.',
        color: 'from-orange-500/20 to-red-500/20',
        borderColor: 'group-hover:border-[#FF7404]/50',
        icon: TrendingUp,
        image: '/images/suite-bg/llm-bg.png', // Reusing relevant asset
        link: '/case-studies/metro-motors'
    },
    {
        id: 'bayside-honda',
        client: 'Bayside Honda',
        location: 'Florida, USA',
        title: 'Reducing Lead Response Time from 40 Mins to 30 Seconds',
        metric: '-98%',
        metricLabel: 'Response Time',
        category: 'bdc',
        tags: ['Single Point', 'Speed to Lead'],
        description: 'In a competitive market, speed is everything. Bayside Honda implemented our AI Speed-to-Lead module to contact every lead instantly, doubling their contact rate in the first 30 days.',
        color: 'from-blue-500/20 to-cyan-500/20',
        borderColor: 'group-hover:border-blue-500/50',
        icon: Zap,
        image: '/images/suite-bg/s2l-bg.png', // Reusing relevant asset
        link: '/case-studies/bayside-honda'
    },
    {
        id: 'prestige-imports',
        client: 'Prestige Imports',
        location: 'Texas, USA',
        title: '300% ROI on Service Drive Campaigns',
        metric: '300%',
        metricLabel: 'ROI',
        category: 'service',
        tags: ['Luxury Import', 'Service Drive'],
        description: 'Prestige Imports wanted to turn service customers into new car buyers. Our Service Drive Pro tool automatically identified equity-positive customers, generating $120k in gross profit in Q1.',
        color: 'from-emerald-500/20 to-green-500/20',
        borderColor: 'group-hover:border-emerald-500/50',
        icon: BarChart3,
        image: '', // Removed sdp-bg.png globally
        link: '/case-studies/prestige-imports'
    },
    {
        id: 'freedom-independent',
        client: 'Freedom Independent',
        location: 'Ohio, USA',
        title: 'Scaling Inventory Turn for Independent Dealerships',
        metric: '18 Days',
        metricLabel: 'Turn Time',
        category: 'independent',
        tags: ['Independent', 'Inventory'],
        description: 'By matching incoming inventory with wish-list customers automatically, Freedom Independent reduced their average turn time from 45 days to just 18 days.',
        color: 'from-purple-500/20 to-indigo-500/20',
        borderColor: 'group-hover:border-purple-500/50',
        icon: Target,
        image: '/images/suite-bg/ds-bg.png', // Reusing relevant asset
        link: '/case-studies/freedom-independent'
    }
];

// Ticker items
const stats = [
    { label: 'Revenue Generated', value: '$37.8M+' },
    { label: 'Vehicles Sold', value: '7,168+' },
    { label: 'Dealerships', value: '73+' },
    { label: 'SMS Processed', value: '15M+' },
    { label: 'Average ROI', value: '514%' },
];

export default function CaseStudiesPage() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredStudies = activeCategory === 'all'
        ? caseStudies
        : caseStudies.filter(study => study.category === activeCategory);

    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black font-sans">
            <Navigation />

            {/* Cinematic Hero */}
            <section className="relative pt-48 pb-24 overflow-hidden">
                {/* Dynamic Background */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF7404]/30 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,116,4,0.1),transparent_60%)]" />

                <div className="container px-4 mx-auto relative z-10 max-w-7xl">
                    <div className="flex flex-col items-center text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 mb-8 backdrop-blur-sm"
                        >
                            <Trophy className="w-4 h-4 text-[#FF7404]" />
                            <span className="text-[#FF7404] text-xs font-bold uppercase tracking-wider">Success Stories</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter"
                        >
                            Results That <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-orange-200">
                                Drive Growth.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
                        >
                            Explore how top dealerships leverage The AutoMaster Suite to unlock revenue, automate operations, and dominate their local markets.
                        </motion.p>
                    </div>

                    {/* Stats Ticker */}
                    <div className="w-full border-y border-white/5 bg-zinc-900/30 backdrop-blur-md overflow-hidden py-6 mb-24">
                        <div className="flex justify-between items-center max-w-5xl mx-auto px-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-3xl md:text-4xl font-black text-[#FF7404] mb-1">{stat.value}</div>
                                    <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap justify-center gap-2 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === cat.id
                                    ? 'bg-[#FF7404] text-black shadow-[0_0_20px_-5px_rgba(255,116,4,0.4)]'
                                    : 'bg-zinc-900/50 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Case Studies Grid - New Premium Card Design */}
                    <motion.div
                        layout
                        className="grid md:grid-cols-2 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredStudies.map((study, index) => (
                                <motion.div
                                    key={study.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="group relative flex flex-col h-full"
                                >
                                    {/* Card Container */}
                                    <div className={`relative h-full bg-[#050505] border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl ${study.borderColor.replace('border', 'shadow')}/20 group-hover:border-white/10`}>

                                        {/* Cinematic Background Glow & Image */}
                                        <div className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                            {study.image && (
                                                <Image
                                                    src={study.image}
                                                    alt=""
                                                    fill
                                                    className="object-cover opacity-50 mix-blend-overlay"
                                                />
                                            )}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${study.color.replace('/20', '/10')} to-black/90`} />
                                        </div>
                                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${study.color.replace('/20', '/5')} to-transparent pointer-events-none`} />
                                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-white/10 transition-colors duration-700" />

                                        <div className="relative p-10 flex flex-col h-full z-10">
                                            {/* Header */}
                                            <div className="flex justify-between items-start mb-10">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-widest text-[#FF7404]">
                                                            {study.client}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-3xl font-bold text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all duration-300">
                                                        {study.title}
                                                    </h3>
                                                </div>
                                                <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-xl`}>
                                                    <study.icon className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
                                                </div>
                                            </div>

                                            {/* Hero Metric */}
                                            <div className="mb-10 relative">
                                                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                <div className="relative border-l-2 border-white/10 pl-6 group-hover:border-[#FF7404] transition-colors duration-500">
                                                    <div className={`text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br ${study.color.replace('/20', '')} tracking-tighter mb-2`}>
                                                        {study.metric}
                                                    </div>
                                                    <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest">
                                                        {study.metricLabel}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-zinc-400 mb-10 leading-relaxed text-lg flex-grow border-b border-white/5 pb-10">
                                                {study.description}
                                            </p>

                                            {/* Footer Actions */}
                                            <div className="flex items-center justify-between mt-auto">
                                                <div className="flex flex-wrap gap-2">
                                                    {study.tags.map(tag => (
                                                        <span key={tag} className="text-xs font-medium text-zinc-500">
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <Link href={study.link} className="relative z-20">
                                                    <button className={`group/btn relative px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 ${study.link !== '#'
                                                        ? 'bg-white text-black hover:bg-[#FF7404] hover:text-black font-bold'
                                                        : 'bg-white/5 text-zinc-600 cursor-not-allowed'
                                                        }`}>
                                                        <span className="text-sm">Read Case Study</span>
                                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-32 relative rounded-[3rem] overflow-hidden bg-zinc-900 border border-white/10"
                    >
                        <div className="absolute inset-0 bg-[#FF7404]/5" />
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF7404]/10 rounded-full blur-[100px] pointer-events-none fade-in-out" />

                        <div className="relative z-10 p-16 md:p-24 text-center">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                                Ready to write your success story?
                            </h2>
                            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                                Join 850+ dealerships that have transformed their operations with The AutoMaster Suite.
                            </p>
                            <div className="inline-flex p-1 rounded-full bg-gradient-to-r from-[#FF7404]/50 to-[#FF7404]/0">
                                <Link href="/contact">
                                    <button className="px-10 py-5 bg-black rounded-full text-white font-bold text-lg hover:bg-zinc-900 transition-colors flex items-center gap-3">
                                        Book Your Strategy Call
                                        <ArrowRight className="w-5 h-5 text-[#FF7404]" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
