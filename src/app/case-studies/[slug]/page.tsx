'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { notFound } from 'next/navigation';
import {
    ArrowLeft,
    ArrowUpRight,
    CheckCircle2,
    ChevronRight,
    MapPin,
    Quote,
    Target,
    Zap,
    Shield,
    Clock,
    BarChart3,
} from 'lucide-react';
import Link from 'next/link';
import { use, useRef } from 'react';
import { caseStudies, getRelatedStudies } from '@/lib/case-studies';
import { useCalendlyModal } from '@/components/CalendlyModal';

// ─── State outline SVGs ────────────────────────────────────────────────────

const stateOutlines: Record<string, React.ReactNode> = {
    OK: (
        <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
                d="M30 145 L170 145 L170 30 L195 30 L195 55 L220 55 L220 30 L245 30 L245 55 L270 55 L270 30 L295 30 L295 145 L570 145 L570 170 L555 185 L565 205 L550 225 L560 245 L540 265 L555 290 L535 310 L525 295 L510 310 L490 295 L480 315 L460 300 L445 320 L430 305 L410 325 L395 310 L375 330 L355 315 L335 335 L315 315 L295 340 L280 320 L260 340 L240 315 L220 335 L200 310 L180 330 L160 305 L140 320 L120 295 L100 310 L80 290 L60 305 L40 280 L30 290 Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinejoin="round"
            />
        </svg>
    ),
    MO: (
        <svg viewBox="0 0 500 550" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
                d="M50 30 L430 30 L440 50 L435 80 L445 110 L430 140 L440 170 L425 200 L435 230 L420 260 L430 290 L415 320 L425 350 L410 380 L420 400 L400 420 L380 410 L360 430 L340 415 L300 440 L260 430 L220 450 L180 430 L160 445 L140 430 L120 450 L90 435 L70 450 L55 435 L50 400 L60 370 L50 340 L65 310 L55 280 L70 250 L60 220 L75 190 L65 160 L80 130 L70 100 L85 70 L75 50 Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinejoin="round"
            />
        </svg>
    ),
    TX: (
        <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
                d="M200 30 L500 30 L500 55 L510 55 L520 80 L540 90 L550 120 L570 140 L560 170 L540 190 L530 220 L510 240 L500 270 L480 290 L470 320 L450 340 L430 360 L410 380 L390 400 L370 420 L340 440 L310 460 L280 480 L250 500 L220 510 L190 500 L170 480 L150 490 L130 470 L110 460 L90 440 L80 410 L70 380 L60 350 L50 320 L55 290 L60 260 L70 230 L80 200 L90 170 L100 140 L200 140 L200 30 Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinejoin="round"
            />
        </svg>
    ),
    CO: (
        <svg viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Colorado is essentially a rectangle */}
            <rect
                x="30" y="30" width="440" height="290"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                rx="2"
            />
            {/* Mountain range suggestion */}
            <path
                d="M100 200 L140 120 L170 180 L200 90 L230 160 L260 100 L290 170 L320 80 L350 150 L380 110 L400 190"
                stroke="currentColor"
                strokeWidth="0.6"
                fill="none"
                opacity="0.4"
                strokeLinejoin="round"
            />
            {/* Front Range marker line */}
            <line x1="300" y1="50" x2="300" y2="300" stroke="currentColor" strokeWidth="0.3" strokeDasharray="6 4" opacity="0.3" />
            {/* Denver area dot */}
            <circle cx="300" cy="140" r="4" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.5" />
            <circle cx="300" cy="140" r="8" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.3" />
        </svg>
    ),
    ID: (
        <svg viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
                d="M120 30 L280 30 L290 50 L300 80 L310 110 L320 140 L340 160 L350 190 L350 220 L350 260 L350 300 L350 340 L345 380 L340 420 L330 460 L315 500 L290 530 L260 550 L230 560 L200 550 L170 530 L150 500 L140 460 L130 420 L120 380 L110 340 L105 300 L100 260 L95 220 L90 180 L95 140 L100 100 L110 60 Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinejoin="round"
            />
            {/* Treasure Valley area */}
            <circle cx="200" cy="440" r="6" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.5" />
            <circle cx="200" cy="440" r="12" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.3" />
        </svg>
    ),
};

// ─── Easing ────────────────────────────────────────────────────────────────

const ease = [0.22, 1, 0.36, 1] as const;

// ─── Page ──────────────────────────────────────────────────────────────────

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const data = caseStudies[slug as keyof typeof caseStudies];

    if (!data) return notFound();

    const related = getRelatedStudies(slug, 3);
    const { openModal } = useCalendlyModal();
    const heroRef = useRef<HTMLDivElement>(null);
    const resultsRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });
    const mapY = useTransform(heroScroll, [0, 1], [0, 120]);
    const mapRotate = useTransform(heroScroll, [0, 1], [0, 5]);
    const mapScale = useTransform(heroScroll, [0, 1], [1, 1.1]);

    const { scrollYProgress: resultsScroll } = useScroll({
        target: resultsRef,
        offset: ['start end', 'end start'],
    });
    const carY = useTransform(resultsScroll, [0, 1], [60, -40]);

    const StateOutline = stateOutlines[data.state] || stateOutlines['OK'];

    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black">
            <Navigation />

            {/* ── Hero ───────────────────────────────────────────────────── */}
            <section ref={heroRef} className="relative pt-36 pb-20 overflow-hidden">
                {/* Grid bg */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }} />
                <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202]" />

                {/* State outline — ghost wireframe with parallax */}
                <motion.div
                    style={{ y: mapY, rotate: mapRotate, scale: mapScale }}
                    className="absolute top-16 -right-10 md:right-0 w-[400px] md:w-[550px] h-[400px] md:h-[550px] pointer-events-none opacity-[0.04]"
                >
                    <div className="text-[#FF7404]">
                        {StateOutline}
                    </div>
                </motion.div>

                {/* Car wireframe — ghost behind hero content */}
                <motion.div
                    style={{ y: useTransform(heroScroll, [0, 1], [0, 80]) }}
                    className="absolute bottom-0 -left-32 w-[600px] pointer-events-none opacity-[0.025] hidden md:block"
                >
                    <img
                        src="/images/wireframe-car-2.svg"
                        alt=""
                        className="w-full h-auto"
                        style={{ filter: 'invert(1)' }}
                    />
                </motion.div>

                <div className="container px-4 mx-auto relative z-10 max-w-5xl">
                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease }}
                        className="flex items-center gap-3 mb-12"
                    >
                        <Link
                            href="/case-studies"
                            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Case Studies
                        </Link>
                        <span className="text-zinc-700">/</span>
                        <span className="text-zinc-600 text-sm">{data.client}</span>
                    </motion.div>

                    {/* Type + Location */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6, ease }}
                        className="flex flex-wrap items-center gap-4 mb-6"
                    >
                        <span className="px-3 py-1.5 rounded-md bg-[#FF7404]/10 border border-[#FF7404]/20 text-[#FF7404] text-[11px] font-bold uppercase tracking-widest font-[family-name:var(--font-inter)]">
                            {data.type}
                        </span>
                        <span className="flex items-center gap-1.5 text-zinc-500 text-xs">
                            <MapPin className="w-3 h-3" />
                            {data.location}
                        </span>
                        <span className="text-zinc-700">·</span>
                        <span className="flex items-center gap-1.5 text-zinc-500 text-xs">
                            <Clock className="w-3 h-3" />
                            60-Day Window · Feb 10 – Apr 10, 2026
                        </span>
                    </motion.div>

                    {/* Title — staggered */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease }}
                        className="font-[family-name:var(--font-inter)] text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05] mb-8 max-w-4xl"
                    >
                        {data.title}
                    </motion.h1>

                    {/* Summary */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.7, ease }}
                        className="text-lg text-zinc-400 leading-relaxed max-w-2xl mb-16"
                    >
                        {data.summary}
                    </motion.p>

                    {/* ── Metrics Strip (upgraded) ──────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.8, ease }}
                        className="relative rounded-2xl border border-white/[0.06] overflow-hidden"
                    >
                        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#FF7404] to-transparent" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-[#FF7404]/[0.03] rounded-full blur-[80px] pointer-events-none" />

                        <div className="grid grid-cols-2 md:grid-cols-4 relative z-10">
                            {data.metrics.map((metric, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + idx * 0.1, duration: 0.6, ease }}
                                    className={`group/stat relative p-7 md:p-9 flex flex-col bg-[#0A0A0A] hover:bg-[#0E0E0E] transition-all duration-500 ${idx < 3 ? 'md:border-r md:border-white/[0.04]' : ''} ${idx < 2 ? 'border-b md:border-b-0 border-white/[0.04]' : ''} ${idx === 2 ? 'border-b md:border-b-0 border-white/[0.04]' : ''}`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#FF7404]/0 to-[#FF7404]/0 group-hover/stat:from-[#FF7404]/[0.03] group-hover/stat:to-transparent transition-all duration-500 pointer-events-none" />
                                    <div className="relative z-10">
                                        <div className="w-10 h-10 rounded-xl bg-[#FF7404]/10 border border-[#FF7404]/15 flex items-center justify-center mb-5 group-hover/stat:bg-[#FF7404]/15 group-hover/stat:border-[#FF7404]/25 group-hover/stat:scale-110 transition-all duration-500">
                                            <metric.icon className="w-5 h-5 text-[#FF7404]" />
                                        </div>
                                        <span className="font-[family-name:var(--font-inter)] text-3xl md:text-4xl font-black text-white tracking-tight leading-none block mb-2 group-hover/stat:text-[#FF7404] transition-colors duration-500">
                                            {metric.value}
                                        </span>
                                        <span className="text-zinc-500 text-[11px] uppercase tracking-[0.15em] font-semibold">
                                            {metric.label}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Performance Snapshot Table ──────────────────────────────── */}
            <section className="py-16 border-t border-white/[0.04] relative overflow-hidden">
                {/* Subtle ambient glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF7404]/[0.015] rounded-full blur-[120px] pointer-events-none" />

                <div className="container px-4 mx-auto max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.8, ease }}
                                className="h-px bg-[#FF7404]"
                            />
                            <span className="text-[#FF7404] text-xs font-bold uppercase tracking-[0.2em] font-[family-name:var(--font-inter)]">
                                60-Day Snapshot
                            </span>
                        </div>

                        <div className="relative rounded-2xl border border-white/[0.06] bg-[#0A0A0A] overflow-hidden">
                            <div className="h-[2px] bg-gradient-to-r from-transparent via-[#FF7404]/30 to-transparent" />
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/[0.06]">
                                        <th className="text-left px-6 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500 font-[family-name:var(--font-inter)]">Metric</th>
                                        <th className="text-right px-6 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500 font-[family-name:var(--font-inter)]">Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { label: 'Attributed Revenue', value: data.tableData.revenue, highlight: true },
                                        { label: 'Confirmed Sales', value: String(data.tableData.sales), highlight: false },
                                        { label: 'Average Deal Value', value: data.tableData.avgDeal, highlight: false },
                                        { label: 'AI-Handled Conversations', value: data.tableData.conversations.toLocaleString(), highlight: false },
                                        { label: 'Rooftops Covered', value: String(data.tableData.rooftops), highlight: false },
                                        { label: 'Brands', value: data.tableData.brands, highlight: false },
                                        { label: 'Measurement Period', value: 'Feb 10 – Apr 10, 2026 (60 days)', highlight: false },
                                    ].map((row, i) => (
                                        <motion.tr
                                            key={i}
                                            initial={{ opacity: 0, x: -15 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05, duration: 0.5, ease }}
                                            className="border-b border-white/[0.03] last:border-b-0 hover:bg-white/[0.015] transition-colors"
                                        >
                                            <td className="px-6 py-4 text-zinc-400 text-sm font-medium">{row.label}</td>
                                            <td className="px-6 py-4 text-right">
                                                <span className={`font-[family-name:var(--font-inter)] tabular-nums ${row.highlight
                                                    ? 'text-[#FF7404] font-black text-2xl'
                                                    : 'text-white font-bold text-sm'
                                                }`}>
                                                    {row.value}
                                                </span>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Challenge & Solution ────────────────────────────────────── */}
            <section className="py-20 border-t border-white/[0.04] relative overflow-hidden">
                {/* State outline ghost behind this section too */}
                <div className="absolute top-10 -left-20 w-[350px] h-[350px] pointer-events-none opacity-[0.02] hidden md:block">
                    <div className="text-white">
                        {StateOutline}
                    </div>
                </div>

                <div className="container px-4 mx-auto max-w-5xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 md:gap-20">
                        {/* Challenge */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                                    <Target className="w-5 h-5 text-red-400" />
                                </div>
                                <h2 className="font-[family-name:var(--font-inter)] text-xl font-bold text-white">
                                    The Challenge
                                </h2>
                            </div>
                            <div className="space-y-4 relative">
                                {/* Vertical accent line */}
                                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-500/30 via-red-500/10 to-transparent rounded-full" />
                                <div className="pl-6">
                                    {data.challenge.content.map((paragraph, i) => (
                                        <motion.p
                                            key={i}
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1, duration: 0.6, ease }}
                                            className="text-zinc-400 leading-relaxed text-[15px] mb-4 last:mb-0"
                                        >
                                            {paragraph}
                                        </motion.p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Solution */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-emerald-400" />
                                </div>
                                <h2 className="font-[family-name:var(--font-inter)] text-xl font-bold text-white">
                                    The Solution
                                </h2>
                            </div>
                            <div className="space-y-6">
                                {data.solution.steps.map((step, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.12, duration: 0.6, ease }}
                                        className="group relative pl-6 border-l-2 border-white/[0.06] hover:border-[#FF7404]/40 transition-colors duration-500"
                                    >
                                        <div className="absolute left-[-5px] top-1.5 w-[8px] h-[8px] rounded-full bg-zinc-700 border-2 border-[#020202] group-hover:bg-[#FF7404] transition-colors duration-500" />
                                        <h3 className="text-white font-semibold text-[15px] mb-1.5 font-[family-name:var(--font-inter)] group-hover:text-[#FF7404] transition-colors duration-500">
                                            {step.title}
                                        </h3>
                                        <p className="text-zinc-500 text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Results ─────────────────────────────────────────────────── */}
            <section ref={resultsRef} className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF7404]/[0.02] to-transparent" />

                {/* Car wireframe behind results */}
                <motion.div
                    style={{ y: carY }}
                    className="absolute -bottom-10 -right-20 w-[600px] pointer-events-none opacity-[0.035] hidden md:block"
                >
                    <img
                        src="/images/wireframe-car-1.svg"
                        alt=""
                        className="w-full h-auto"
                        style={{ filter: 'invert(1)' }}
                    />
                </motion.div>

                <div className="container px-4 mx-auto relative z-10 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.8, ease }}
                                className="h-px bg-[#FF7404]"
                            />
                            <span className="text-[#FF7404] text-xs font-bold uppercase tracking-[0.2em] font-[family-name:var(--font-inter)]">
                                Results
                            </span>
                        </div>
                        <h2 className="font-[family-name:var(--font-inter)] text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
                            {data.results.title}
                        </h2>
                        <p className="text-zinc-400 leading-relaxed max-w-2xl mb-12 text-[15px]">
                            {data.results.content}
                        </p>
                    </motion.div>

                    {/* Result stats */}
                    <div className="grid md:grid-cols-3 gap-4 mb-16">
                        {data.results.stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.7, ease }}
                                className="group bg-[#0A0A0A] border border-white/[0.06] rounded-xl p-6 flex items-start gap-4 hover:border-[#FF7404]/20 hover:translate-y-[-2px] hover:shadow-[0_15px_40px_-10px_rgba(255,116,4,0.06)] transition-all duration-500"
                            >
                                <div className="w-8 h-8 rounded-lg bg-[#FF7404]/10 border border-[#FF7404]/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#FF7404]/15 transition-all duration-500">
                                    <CheckCircle2 className="w-4 h-4 text-[#FF7404]" />
                                </div>
                                <span className="text-zinc-300 text-sm leading-relaxed font-medium">{stat}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Testimonial */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease }}
                        className="relative"
                    >
                        <div className="bg-[#0A0A0A] border border-white/[0.06] rounded-2xl p-8 md:p-12 relative overflow-hidden hover:border-white/[0.10] transition-all duration-500">
                            {/* Left accent bar */}
                            <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-[#FF7404] via-[#FF7404]/50 to-transparent" />

                            {/* Corner glow */}
                            <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#FF7404]/[0.04] rounded-full blur-[80px] pointer-events-none" />

                            <Quote className="w-10 h-10 text-[#FF7404]/15 mb-6" />
                            <blockquote>
                                <p className="text-white text-lg md:text-xl font-medium leading-relaxed mb-6 max-w-3xl italic">
                                    &ldquo;{data.testimonial.quote}&rdquo;
                                </p>
                                <footer className="flex items-center gap-3">
                                    <div className="w-8 h-[2px] bg-[#FF7404]/40 rounded-full" />
                                    <div>
                                        <div className="text-zinc-300 font-semibold text-sm font-[family-name:var(--font-inter)]">
                                            {data.testimonial.author}
                                        </div>
                                        <div className="text-zinc-600 text-xs">
                                            {data.testimonial.role}
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Methodology Callout ─────────────────────────────────────── */}
            <section className="py-16 border-t border-white/[0.04]">
                <div className="container px-4 mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease }}
                        className="relative bg-[#0A0A0A] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.10] transition-all duration-500"
                    >
                        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#FF7404]/30 to-transparent" />

                        <div className="p-8 md:p-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-[#FF7404]/10 border border-[#FF7404]/15 flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-[#FF7404]" />
                                </div>
                                <h3 className="font-[family-name:var(--font-inter)] text-lg font-bold text-white">
                                    How we measure
                                </h3>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    { title: 'Attributed Revenue', text: 'A sale is "attributed" when the customer had at least one AI-handled conversation before signing. Full SMS thread tracked from first contact to closed deal.' },
                                    { title: '60-Day Window', text: 'February 10 to April 10, 2026. Every dealer on the platform during this period is included — no cherry-picking.' },
                                    { title: 'Real Conversations', text: 'Every conversation count reflects a real two-way exchange where the customer replied. No one-way blasts or undelivered messages.' },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.6, ease }}
                                    >
                                        <h4 className="text-zinc-300 text-sm font-semibold mb-2 font-[family-name:var(--font-inter)]">{item.title}</h4>
                                        <p className="text-zinc-500 text-sm leading-relaxed">{item.text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Related Case Studies ────────────────────────────────────── */}
            {related.length > 0 && (
                <section className="py-20 border-t border-white/[0.04]">
                    <div className="container px-4 mx-auto max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease }}
                            className="mb-10"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-px w-12 bg-[#FF7404]" />
                                <span className="text-[#FF7404] text-xs font-bold uppercase tracking-[0.2em] font-[family-name:var(--font-inter)]">
                                    More Results
                                </span>
                            </div>
                            <h2 className="font-[family-name:var(--font-inter)] text-2xl md:text-3xl font-black text-white tracking-tight">
                                Same playbook, different stores.
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-4">
                            {related.map((r, i) => (
                                <motion.div
                                    key={r.slug}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.7, ease }}
                                >
                                    <Link href={`/case-studies/${r.slug}`} className="block group">
                                        <div className="relative bg-[#0A0A0A] border border-white/[0.06] rounded-2xl overflow-hidden p-6 hover:border-white/[0.12] hover:translate-y-[-2px] hover:shadow-[0_20px_60px_-15px_rgba(255,116,4,0.06)] transition-all duration-500 h-full flex flex-col">
                                            {/* Accent line top */}
                                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF7404]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            {/* Corner glow */}
                                            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] bg-[#FF7404]/0 group-hover:bg-[#FF7404]/[0.05] transition-all duration-700 pointer-events-none" />

                                            {/* Type + State */}
                                            <div className="flex items-center justify-between mb-4 relative z-10">
                                                <span className="text-zinc-500 text-[11px] uppercase tracking-wide font-medium">{r.type}</span>
                                                <span className="text-zinc-600 text-xs">{r.state}</span>
                                            </div>

                                            {/* Revenue */}
                                            <span className="font-[family-name:var(--font-inter)] font-black text-3xl tracking-tight leading-none mb-3 text-[#FF7404] relative z-10">
                                                {r.tableData.revenue}
                                            </span>

                                            {/* Client */}
                                            <h3 className="font-[family-name:var(--font-inter)] font-bold text-white text-base mb-2 group-hover:text-zinc-200 transition-colors relative z-10">
                                                {r.client}
                                            </h3>

                                            {/* Tagline */}
                                            <p className="text-zinc-500 text-sm leading-relaxed flex-grow mb-4 relative z-10">
                                                {r.tagline}
                                            </p>

                                            {/* Bottom metrics */}
                                            <div className="flex items-center gap-5 pt-4 border-t border-white/[0.04] relative z-10">
                                                <div className="flex flex-col">
                                                    <span className="text-white text-sm font-bold font-[family-name:var(--font-inter)]">{r.tableData.sales}</span>
                                                    <span className="text-zinc-600 text-[10px] uppercase tracking-wider">Sales</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-white text-sm font-bold font-[family-name:var(--font-inter)]">{r.tableData.conversations.toLocaleString()}</span>
                                                    <span className="text-zinc-600 text-[10px] uppercase tracking-wider">Convos</span>
                                                </div>
                                                <div className="ml-auto">
                                                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/5 transition-all">
                                                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── Bottom CTA ────────────────────────────────────────────── */}
            <section className="py-20 border-t border-white/[0.04] relative overflow-hidden">
                <div className="container px-4 mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease }}
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0A0A0A]">
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF7404] to-transparent" />
                            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#FF7404]/[0.04] rounded-full blur-[100px] pointer-events-none" />

                            {/* Anchored car wireframe */}
                            <div className="absolute -bottom-10 -right-16 w-[400px] pointer-events-none opacity-[0.06] hidden md:block">
                                <img
                                    src="/images/wireframe-car-1.svg"
                                    alt=""
                                    className="w-full h-auto"
                                    style={{ filter: 'invert(1) sepia(1) saturate(5) hue-rotate(-10deg) brightness(1.1)' }}
                                />
                            </div>

                            <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div>
                                    <h2 className="font-[family-name:var(--font-inter)] text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
                                        Same playbook. Your store.
                                    </h2>
                                    <p className="text-zinc-500 max-w-md">
                                        These results come from a standard 60-day deployment. Book a call to see what your database is worth.
                                    </p>
                                </div>
                                <div className="flex gap-4 shrink-0">
                                    <Link href="/case-studies">
                                        <button className="px-6 py-3.5 rounded-xl border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all text-sm font-medium">
                                            More Case Studies
                                        </button>
                                    </Link>
                                    <motion.button
                                        onClick={openModal}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="px-6 py-3.5 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-bold rounded-xl inline-flex items-center gap-2 transition-all duration-300 font-[family-name:var(--font-inter)] hover:shadow-[0_0_40px_rgba(255,116,4,0.3)] cursor-pointer"
                                    >
                                        Schedule Your Walkthrough
                                        <ChevronRight className="w-4 h-4" />
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
