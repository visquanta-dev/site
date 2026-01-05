'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
    Database,
    Zap,
    Wrench,
    MessageSquare,
    BarChart3,
    CheckCircle2,
    ShieldCheck,
    Cpu,
    ArrowRight
} from 'lucide-react';
import { useState } from 'react';

const cardData = [
    {
        id: 'crm',
        title: 'Nexus Lead Reactivation',
        label: 'Data Intelligence',
        icon: Database,
        description: 'Uncover hidden equity in your existing database with AI-driven mining.',
        color: '#ff7404',
        // Positioned in the radial layout
        initialX: -280,
        initialY: -40,
        rotate: -4,
        delay: 0,
    },
    {
        id: 'responder',
        title: 'Responder AI',
        label: 'Lead Response',
        icon: Zap,
        description: 'Instant, human-quality engagement for every inbound lead, 24/7/365.',
        color: '#ff7404',
        initialX: -140,
        initialY: 40,
        rotate: -2,
        delay: 0.1,
    },
    {
        id: 'service',
        title: 'Service Drive',
        label: 'RO Generation',
        icon: Wrench,
        description: 'Automated service booking and RO maximization through data signals.',
        color: '#ff7404',
        initialX: 0,
        initialY: 0,
        rotate: 0,
        delay: 0.2, // This will be the focal point card
        isMain: true
    },
    {
        id: 'bdc',
        title: 'BDC Intel',
        label: 'Team Optimization',
        icon: MessageSquare,
        description: 'Empower your BDC with real-time sentiment analysis and lead routing.',
        color: '#ff7404',
        initialX: 140,
        initialY: 40,
        rotate: 2,
        delay: 0.3,
    },
    {
        id: 'insights',
        title: 'Insights Engine',
        label: 'Performance',
        icon: BarChart3,
        description: 'Centralized command center for every profit center in your dealership.',
        color: '#ff7404',
        initialX: 280,
        initialY: -40,
        rotate: 4,
        delay: 0.4,
    }
];

export default function EditorialHero() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section className="relative min-h-screen py-32 flex flex-col items-center justify-center bg-[#080808] overflow-visible">

            {/* 1. LAYER 0: BACKGROUND & HOLOGRAPHIC ELEMENTS */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Subtle Enterprise Grid */}
                <div className="absolute inset-0 bg-enterprise-grid opacity-10" />

                {/* Central Orange Radial Aura */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff7404]/5 rounded-full blur-[150px]" />

                {/* Fine-line Concentric Rings (Orange) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    {[600, 900, 1200].map((size, i) => (
                        <motion.div
                            key={size}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 0.15, scale: 1 }}
                            transition={{ duration: 2, delay: i * 0.3 }}
                            className="absolute border border-[#ff7404]/20 rounded-full"
                            style={{ width: size, height: size }}
                        />
                    ))}
                </div>
            </div>

            {/* 2. LAYER 1: CARDS - THE PRIMARY AUTHORITY */}
            <div className="container-wide relative z-20 flex flex-col items-center">

                {/* Editorial Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-28 max-w-4xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 text-[11px] font-black uppercase tracking-[0.4em] mb-10">
                        <Cpu className="w-3.5 h-3.5 text-[#ff7404]" />
                        Automotive Suite v4.2
                    </div>
                    <h1 className="text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-10">
                        Unreasonable <br />
                        <span className="text-white/20">Operational Speed.</span>
                    </h1>
                    <p className="text-white/50 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        The first unified intelligence layer designed for high-volume dealerships. Execute at the speed of AI, across every department.
                    </p>
                </motion.div>

                {/* The Card Composition Frame */}
                <div className="relative w-full h-[650px] flex items-center justify-center perspective-[2500px] overflow-visible">

                    {cardData.map((card, i) => {
                        const isHovered = hoveredId === card.id;
                        const isAnyHovered = hoveredId !== null;

                        return (
                            <motion.div
                                key={card.id}
                                onMouseEnter={() => setHoveredId(card.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                initial={{ opacity: 0, y: 80, rotateX: 25 }}
                                whileInView={{
                                    opacity: 1,
                                    rotateX: 0,
                                    x: card.initialX,
                                    y: isHovered ? card.initialY - 30 : card.initialY,
                                    rotateZ: isHovered ? 0 : card.rotate,
                                    z: isHovered ? 400 : (isAnyHovered ? -150 : 0),
                                    scale: isHovered ? 1.08 : 1
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 90,
                                    damping: 22,
                                    delay: card.delay
                                }}
                                className={`absolute w-[340px] rounded-[3rem] cursor-pointer
                    ${isHovered ? 'z-50' : 'z-10'}
                  `}
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                <div className={`relative h-[460px] rounded-[3rem] p-px overflow-hidden transition-all duration-700
                    ${isHovered ? 'bg-gradient-to-br from-[#ff7404] to-[#ff7404]/20' : 'bg-white/10'}
                  `}>
                                    {/* Inner Content Area */}
                                    <div className="relative h-full w-full bg-[#0d0d0d] rounded-[2.95rem] p-8 flex flex-col overflow-hidden">

                                        {/* Glossy Top Shimmer */}
                                        <div className="absolute top-0 left-0 right-0 h-44 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

                                        {/* THE VISUAL SURFACE */}
                                        <div className="relative w-full h-48 rounded-[2rem] bg-black/40 border border-white/5 mb-8 flex items-center justify-center overflow-hidden">
                                            {/* Abstract Data Texture */}
                                            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                                            <div className={`absolute inset-0 bg-gradient-to-br from-[#ff7404]/10 via-transparent to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-20'}`} />

                                            {/* Inner Glow Center */}
                                            <div className={`absolute w-32 h-32 bg-[#ff7404]/20 rounded-full blur-3xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

                                            <motion.div
                                                animate={isHovered ? { scale: 1.15, rotate: [0, 8, -8, 0] } : {}}
                                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                                className="relative z-10"
                                            >
                                                <card.icon className={`w-20 h-20 transition-all duration-500 ${isHovered ? 'text-[#ff7404] drop-shadow-[0_0_20px_rgba(255,116,4,0.4)]' : 'text-white/20'}`} />
                                            </motion.div>

                                            {/* Performance Line Animation */}
                                            <motion.div
                                                animate={{ x: [-150, 350] }}
                                                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                                className="absolute bottom-12 left-0 w-32 h-px bg-gradient-to-r from-transparent via-[#ff7404]/40 to-transparent"
                                            />
                                        </div>

                                        {/* Text Group */}
                                        <div className="mb-6">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className={`text-[10px] font-black uppercase tracking-[0.25em] transition-colors duration-500 ${isHovered ? 'text-[#ff7404]' : 'text-white/30'}`}>
                                                    {card.label}
                                                </span>
                                                {isHovered && (
                                                    <motion.span
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        className="text-[10px] text-[#ff7404] font-black uppercase tracking-widest flex items-center gap-1"
                                                    >
                                                        Deploying <Zap className="w-3 h-3 fill-[#ff7404]" />
                                                    </motion.span>
                                                )}
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                                                {card.title}
                                            </h3>
                                            <p className="text-white/40 text-[13px] leading-relaxed font-medium">
                                                {card.description}
                                            </p>
                                        </div>

                                        {/* PRODUCT BUTTONS (Card-specific) */}
                                        <div className="mt-auto flex items-center gap-2">
                                            <button className={`flex-1 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300
                                ${isHovered ? 'bg-[#ff7404] text-white shadow-[0_10px_20px_rgba(255,116,4,0.3)]' : 'bg-white/5 text-white/40 hover:bg-white/10'}
                             `}>
                                                Launch Module
                                            </button>
                                            <button className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                                <ArrowRight className="w-4 h-4 text-white/40" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                </div>

                {/* 3. CTA LAYER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-36 flex flex-col items-center gap-10"
                >
                    <div className="flex flex-col sm:flex-row gap-5 items-center">
                        <button className="group relative px-12 py-6 rounded-full bg-white transition-all duration-500 hover:scale-105 active:scale-95">
                            <div className="absolute inset-0 rounded-full bg-[#ff7404] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
                            <span className="relative text-black font-black text-sm uppercase tracking-[0.2em] flex items-center gap-3">
                                Join the Program <Zap className="w-4 h-4 fill-black" />
                            </span>
                        </button>
                        <button className="px-12 py-6 rounded-full bg-white/5 border border-white/10 text-white font-black text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-500">
                            See all benefits
                        </button>
                    </div>
                    <div className="flex items-center gap-6 opacity-20">
                        <div className="h-px w-16 bg-white" />
                        <p className="text-white text-[10px] font-bold uppercase tracking-[0.5em]">
                            Enterprise Intel Protocol
                        </p>
                        <div className="h-px w-16 bg-white" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
