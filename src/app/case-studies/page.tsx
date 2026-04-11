'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, AnimatePresence, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import {
    ArrowUpRight,
    MapPin,
    ChevronRight,
    TrendingUp,
    BarChart3,
    Shield,
    Clock,
    Zap,
    Hash,
} from 'lucide-react';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { caseStudies, getAggregateStats } from '@/lib/case-studies';
import { useCalendlyModal } from '@/components/CalendlyModal';

// ─── Derived Data ───────────────────────────────────────────────────────────

const agg = getAggregateStats();

const slugOrder = [
    'seth-wadley',
    'kansas-city-hyundai',
    'brookshire-hyundai',
    'drive-n-motion-colorado',
    'patriot-chevrolet',
    'corwin-ford-nampa',
    'grand-valley-auto',
];

const categories = [
    { id: 'all', label: 'All Studies' },
    { id: 'franchise', label: 'Franchise' },
    { id: 'independent', label: 'Independent' },
];

// ─── Animated Counter ──────────────────────────────────────────────────────

function AnimatedCounter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const springValue = useSpring(0, { stiffness: 40, damping: 20, duration: 2 });

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    useEffect(() => {
        const unsubscribe = springValue.on('change', (latest) => {
            if (ref.current) {
                const rounded = Math.round(latest);
                ref.current.textContent = `${prefix}${rounded.toLocaleString()}${suffix}`;
            }
        });
        return unsubscribe;
    }, [springValue, prefix, suffix]);

    return <span ref={ref}>{prefix}0{suffix}</span>;
}

// ─── Metric Pill ────────────────────────────────────────────────────────────

function MetricPill({ value, label }: { value: string; label: string }) {
    return (
        <div className="flex flex-col">
            <span className="text-white font-[family-name:var(--font-inter)] font-extrabold text-lg leading-none">
                {value}
            </span>
            <span className="text-zinc-500 text-[11px] uppercase tracking-wider font-medium mt-1">
                {label}
            </span>
        </div>
    );
}

// ─── Car Wireframe SVG (inline for full control) ───────────────────────────

function CarWireframeSVG({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Car body outline */}
            <path
                d="M120 200 L160 200 L180 160 L280 120 L380 100 L520 100 L620 120 L680 160 L700 200 L720 200"
                stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"
            />
            {/* Roof line */}
            <path
                d="M280 120 L300 80 L500 70 L540 80 L620 120"
                stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"
            />
            {/* Windows */}
            <path
                d="M310 115 L320 82 L420 75 L420 110 Z"
                stroke="currentColor" strokeWidth="0.8" fill="none"
            />
            <path
                d="M430 110 L430 75 L510 78 L540 85 L580 115 Z"
                stroke="currentColor" strokeWidth="0.8" fill="none"
            />
            {/* Front wheel */}
            <circle cx="220" cy="210" r="40" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <circle cx="220" cy="210" r="25" stroke="currentColor" strokeWidth="0.6" fill="none" />
            <circle cx="220" cy="210" r="8" stroke="currentColor" strokeWidth="0.6" fill="none" />
            {/* Rear wheel */}
            <circle cx="620" cy="210" r="40" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <circle cx="620" cy="210" r="25" stroke="currentColor" strokeWidth="0.6" fill="none" />
            <circle cx="620" cy="210" r="8" stroke="currentColor" strokeWidth="0.6" fill="none" />
            {/* Underbody */}
            <path
                d="M160 210 L175 210 M265 210 L575 210 M665 210 L700 210"
                stroke="currentColor" strokeWidth="1" fill="none"
            />
            {/* Headlight */}
            <path d="M160 180 L140 190 L155 200 L170 190 Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
            {/* Taillight */}
            <path d="M700 180 L715 185 L715 200 L700 200 Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
            {/* Door lines */}
            <path d="M420 110 L420 195" stroke="currentColor" strokeWidth="0.6" fill="none" />
            {/* Side mirror */}
            <path d="M285 115 L275 110 L275 120 Z" stroke="currentColor" strokeWidth="0.6" fill="none" />
            {/* Hood detail */}
            <path d="M200 170 L280 135" stroke="currentColor" strokeWidth="0.5" fill="none" />
            {/* Trunk detail */}
            <path d="M660 170 L630 140" stroke="currentColor" strokeWidth="0.5" fill="none" />
            {/* Ground line */}
            <line x1="80" y1="250" x2="760" y2="250" stroke="currentColor" strokeWidth="0.3" />
            {/* Dimension lines */}
            <line x1="140" y1="260" x2="720" y2="260" stroke="currentColor" strokeWidth="0.3" strokeDasharray="4 4" />
            <line x1="140" y1="256" x2="140" y2="264" stroke="currentColor" strokeWidth="0.3" />
            <line x1="720" y1="256" x2="720" y2="264" stroke="currentColor" strokeWidth="0.3" />
        </svg>
    );
}

function BlueprintGrid({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Major grid */}
            {Array.from({ length: 9 }, (_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} stroke="currentColor" strokeWidth="0.5" />
            ))}
            {Array.from({ length: 9 }, (_, i) => (
                <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="400" stroke="currentColor" strokeWidth="0.5" />
            ))}
            {/* Minor grid */}
            {Array.from({ length: 41 }, (_, i) => (
                <line key={`mh${i}`} x1="0" y1={i * 10} x2="400" y2={i * 10} stroke="currentColor" strokeWidth="0.15" />
            ))}
            {Array.from({ length: 41 }, (_, i) => (
                <line key={`mv${i}`} x1={i * 10} y1="0" x2={i * 10} y2="400" stroke="currentColor" strokeWidth="0.15" />
            ))}
            {/* Cross marks */}
            {[100, 200, 300].map(x =>
                [100, 200, 300].map(y => (
                    <g key={`${x}-${y}`}>
                        <line x1={x - 5} y1={y} x2={x + 5} y2={y} stroke="currentColor" strokeWidth="0.4" />
                        <line x1={x} y1={y - 5} x2={x} y2={y + 5} stroke="currentColor" strokeWidth="0.4" />
                    </g>
                ))
            )}
        </svg>
    );
}

// ─── Featured Card ─────────────────────────────────────────────────────────

function FeaturedCard({ slug }: { slug: string }) {
    const study = caseStudies[slug];
    if (!study) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group relative mb-4"
        >
            <Link href={`/case-studies/${slug}`} className="block">
                <div className="relative bg-[#0A0A0A] border border-white/[0.06] rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/[0.12] hover:bg-[#0D0D0D]">
                    {/* Accent gradient top */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF7404] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                    {/* Large glow */}
                    <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-[150px] bg-[#FF7404]/[0.06] group-hover:bg-[#FF7404]/[0.10] transition-all duration-700 pointer-events-none" />

                    {/* Ghost car wireframe inside featured card */}
                    <div className="absolute bottom-0 right-0 w-[500px] pointer-events-none opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-700">
                        <img
                            src="/images/wireframe-car-1.svg"
                            alt=""
                            className="w-full h-auto"
                            style={{ filter: 'invert(1)' }}
                        />
                    </div>

                    <div className="relative z-10 p-8 md:p-14">
                        {/* Top row */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <motion.span
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                                    className="px-3 py-1.5 rounded-md bg-[#FF7404]/10 border border-[#FF7404]/20 text-[#FF7404] text-[11px] font-bold uppercase tracking-widest font-[family-name:var(--font-inter)]"
                                >
                                    Featured
                                </motion.span>
                                <span className="text-zinc-500 text-xs uppercase tracking-wide font-medium">{study.type}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-zinc-600 text-xs">
                                <MapPin className="w-3 h-3" />
                                <span>{study.location}</span>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-end">
                            <div>
                                {/* Big revenue number */}
                                <div className="flex items-baseline gap-3 mb-6">
                                    <span className="font-[family-name:var(--font-inter)] font-black text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-none text-[#FF7404]">
                                        {study.tableData.revenue}
                                    </span>
                                    <span className="text-zinc-600 text-sm font-medium uppercase tracking-wider">
                                        Revenue
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="font-[family-name:var(--font-inter)] font-bold text-white text-2xl md:text-3xl leading-snug mb-4 max-w-2xl">
                                    {study.tagline}
                                </h3>

                                {/* Description */}
                                <p className="text-zinc-500 leading-relaxed max-w-2xl text-[15px]">
                                    {study.summary}
                                </p>
                            </div>

                            {/* Right side: stacked metrics */}
                            <div className="flex md:flex-col gap-8 md:gap-6 md:border-l md:border-white/[0.06] md:pl-10">
                                <MetricPill value={String(study.tableData.sales)} label="Sales" />
                                <MetricPill value={study.tableData.conversations.toLocaleString()} label="Conversations" />
                                <MetricPill value={study.tableData.avgDeal} label="Avg Deal" />
                                <MetricPill value={String(study.tableData.rooftops)} label="Rooftops" />
                            </div>
                        </div>

                        {/* Bottom arrow */}
                        <div className="flex items-center justify-end mt-8 pt-6 border-t border-white/[0.04]">
                            <span className="text-zinc-600 text-sm mr-3 group-hover:text-zinc-400 transition-colors">Read full case study</span>
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/5 transition-all duration-300">
                                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors duration-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

// ─── Standard Card ──────────────────────────────────────────────────────────

function CaseStudyCard({ slug, index }: { slug: string; index: number }) {
    const study = caseStudies[slug];
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    if (!study) return null;

    return (
        <motion.div
            ref={ref}
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
            transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative"
        >
            <Link href={`/case-studies/${slug}`} className="block h-full">
                <div className="relative h-full bg-[#0A0A0A] border border-white/[0.06] rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/[0.12] hover:bg-[#0D0D0D] hover:translate-y-[-2px] hover:shadow-[0_20px_60px_-15px_rgba(255,116,4,0.08)]">
                    {/* Accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-[#FF7404] to-transparent" />

                    {/* Corner glow */}
                    <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[120px] opacity-0 group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none bg-[#FF7404]" />

                    <div className="relative z-10 p-7 md:p-8 flex flex-col h-full">
                        {/* Top: type + location */}
                        <div className="flex items-center justify-between mb-5">
                            <span className="text-zinc-500 text-xs font-medium tracking-wide uppercase">{study.type}</span>
                            <div className="flex items-center gap-1.5 text-zinc-600 text-xs">
                                <MapPin className="w-3 h-3" />
                                <span>{study.state}</span>
                            </div>
                        </div>

                        {/* Revenue */}
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="font-[family-name:var(--font-inter)] font-black text-5xl md:text-6xl tracking-tight leading-none text-[#FF7404]">
                                {study.tableData.revenue}
                            </span>
                            <span className="text-zinc-600 text-sm font-medium uppercase tracking-wider">
                                Revenue
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-[family-name:var(--font-inter)] font-bold text-white text-xl leading-snug mb-3 group-hover:text-zinc-100 transition-colors">
                            {study.tagline}
                        </h3>

                        {/* Description */}
                        <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                            {study.summary}
                        </p>

                        {/* Bottom metrics + arrow */}
                        <div className="flex items-end justify-between mt-auto pt-5 border-t border-white/[0.04]">
                            <div className="flex gap-7">
                                <MetricPill value={String(study.tableData.sales)} label="Sales" />
                                <MetricPill value={study.tableData.conversations.toLocaleString()} label="Convos" />
                                <MetricPill value={study.tableData.avgDeal} label="Avg Deal" />
                            </div>
                            <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/5 transition-all duration-300 shrink-0">
                                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors duration-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

// ─── Comparison Table ───────────────────────────────────────────────────────

function ComparisonTable() {
    return (
        <div className="relative rounded-2xl border border-white/[0.06] bg-[#0A0A0A] overflow-hidden">
            {/* Glow behind table */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#FF7404]/[0.03] rounded-full blur-[100px] pointer-events-none" />

            <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                    <thead>
                        <tr className="border-b border-white/[0.06]">
                            <th className="text-left px-6 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500 font-[family-name:var(--font-inter)]">
                                <Hash className="w-3 h-3 inline-block mr-1 -mt-px" />
                            </th>
                            <th className="text-left px-6 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500 font-[family-name:var(--font-inter)]">Dealership</th>
                            <th className="text-left px-6 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500 font-[family-name:var(--font-inter)]">State</th>
                            <th className="text-left px-6 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500 font-[family-name:var(--font-inter)]">Type</th>
                            <th className="text-right px-6 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500 font-[family-name:var(--font-inter)]">Revenue</th>
                            <th className="text-right px-6 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500 font-[family-name:var(--font-inter)]">Sales</th>
                            <th className="text-right px-6 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500 font-[family-name:var(--font-inter)]">Conversations</th>
                            <th className="text-right px-6 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500 font-[family-name:var(--font-inter)]">Avg Deal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {slugOrder.map((slug, i) => {
                            const s = caseStudies[slug];
                            return (
                                <motion.tr
                                    key={slug}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors group/row cursor-pointer"
                                    onClick={() => window.location.href = `/case-studies/${slug}`}
                                >
                                    <td className="px-6 py-4 text-zinc-600 text-sm tabular-nums">{i + 1}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full shrink-0 bg-[#FF7404]" />
                                            <span className="text-white text-sm font-semibold font-[family-name:var(--font-inter)] group-hover/row:text-[#FF7404] transition-colors">
                                                {s.client}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-zinc-400 text-sm">{s.state}</td>
                                    <td className="px-6 py-4 text-zinc-500 text-sm">{s.type}</td>
                                    <td className="px-6 py-4 text-right">
                                        <span className="text-white font-[family-name:var(--font-inter)] font-bold text-sm tabular-nums">
                                            {s.tableData.revenue}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right text-zinc-300 text-sm tabular-nums font-medium">{s.tableData.sales}</td>
                                    <td className="px-6 py-4 text-right text-zinc-300 text-sm tabular-nums font-medium">{s.tableData.conversations.toLocaleString()}</td>
                                    <td className="px-6 py-4 text-right text-zinc-400 text-sm tabular-nums">{s.tableData.avgDeal}</td>
                                </motion.tr>
                            );
                        })}
                    </tbody>
                    <tfoot>
                        <tr className="border-t-2 border-[#FF7404]/20 bg-[#FF7404]/[0.03]">
                            <td className="px-6 py-5" />
                            <td className="px-6 py-5">
                                <span className="text-[#FF7404] text-sm font-bold font-[family-name:var(--font-inter)] uppercase tracking-wide">
                                    Total — {agg.dealerCount} Dealers
                                </span>
                            </td>
                            <td className="px-6 py-5 text-zinc-400 text-sm font-medium">{agg.stateCount} States</td>
                            <td className="px-6 py-5 text-zinc-400 text-sm font-medium">{agg.totalRooftops} Rooftops</td>
                            <td className="px-6 py-5 text-right">
                                <span className="text-[#FF7404] font-[family-name:var(--font-inter)] font-black text-base tabular-nums">
                                    {agg.totalRevenue}
                                </span>
                            </td>
                            <td className="px-6 py-5 text-right text-white text-sm tabular-nums font-bold">{agg.totalSales}</td>
                            <td className="px-6 py-5 text-right text-white text-sm tabular-nums font-bold">{agg.totalConversations}</td>
                            <td className="px-6 py-5 text-right text-zinc-300 text-sm tabular-nums font-medium">{agg.avgDeal} avg</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CaseStudiesPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const { openModal } = useCalendlyModal();
    const heroRef = useRef<HTMLDivElement>(null);
    const tableRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    // Parallax for hero wireframe
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });
    const heroWireframeY = useTransform(heroScroll, [0, 1], [0, 150]);
    const heroWireframeRotate = useTransform(heroScroll, [0, 1], [0, 3]);

    // Parallax for table section blueprint
    const { scrollYProgress: tableScroll } = useScroll({
        target: tableRef,
        offset: ['start end', 'end start'],
    });
    const blueprintY = useTransform(tableScroll, [0, 1], [-50, 50]);
    const blueprintOpacity = useTransform(tableScroll, [0, 0.3, 0.7, 1], [0.02, 0.08, 0.08, 0.02]);

    // Parallax for CTA car
    const { scrollYProgress: ctaScroll } = useScroll({
        target: ctaRef,
        offset: ['start end', 'end start'],
    });
    const ctaCarX = useTransform(ctaScroll, [0, 1], [100, -20]);

    const filteredSlugs = activeCategory === 'all'
        ? slugOrder
        : slugOrder.filter(slug => caseStudies[slug]?.category === activeCategory);

    // Featured is always Seth Wadley; grid gets the rest
    const featuredSlug = filteredSlugs[0] === 'seth-wadley' ? 'seth-wadley' : null;
    const gridSlugs = featuredSlug
        ? filteredSlugs.filter(s => s !== featuredSlug)
        : filteredSlugs;

    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black">
            <Navigation />

            {/* ── Hero ─────────────────────────────────────────────────── */}
            <section ref={heroRef} className="relative pt-44 pb-16 overflow-hidden">
                {/* Grid background */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }} />
                <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202]" />

                {/* STYLE 1: Ghost wireframe — detailed car at 3-5% opacity with parallax */}
                <motion.div
                    style={{ y: heroWireframeY, rotate: heroWireframeRotate }}
                    className="absolute top-20 -right-32 w-[700px] md:w-[1000px] pointer-events-none opacity-[0.04]"
                >
                    <img
                        src="/images/wireframe-car-1.svg"
                        alt=""
                        className="w-full h-auto invert"
                        style={{ filter: 'invert(1)' }}
                    />
                </motion.div>

                {/* Second ghost wireframe — different angle, left side */}
                <motion.div
                    style={{ y: useTransform(heroScroll, [0, 1], [20, 100]) }}
                    className="absolute bottom-0 -left-48 w-[500px] pointer-events-none opacity-[0.025] hidden md:block"
                >
                    <img
                        src="/images/wireframe-car-2.svg"
                        alt=""
                        className="w-full h-auto"
                        style={{ filter: 'invert(1)', transform: 'scaleX(-1)' }}
                    />
                </motion.div>

                <div className="container px-4 mx-auto relative z-10 max-w-6xl">
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 48 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="h-px bg-[#FF7404]"
                        />
                        <span className="text-[#FF7404] text-xs font-bold uppercase tracking-[0.2em] font-[family-name:var(--font-inter)]">
                            Case Studies
                        </span>
                    </motion.div>

                    {/* Headline — staggered word reveal */}
                    <div className="mb-6 max-w-4xl">
                        <motion.h1
                            className="font-[family-name:var(--font-inter)] text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.95]"
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                className="inline-block"
                            >
                                Real dealerships.
                            </motion.span>{' '}
                            <motion.span
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                className="inline-block text-[#FF7404]"
                            >
                                Real numbers.
                            </motion.span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="text-lg text-zinc-500 max-w-xl leading-relaxed mb-16"
                    >
                        Every result below is from the same 60-day window. Same playbook. Different stores, states, and brands. Nothing cherry-picked.
                    </motion.p>

                    {/* ── Aggregate Stats Strip ─────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="relative rounded-2xl border border-white/[0.06] overflow-hidden mb-20"
                    >
                        {/* Accent bar top */}
                        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#FF7404] to-transparent" />

                        {/* Background glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#FF7404]/[0.04] rounded-full blur-[100px] pointer-events-none" />

                        <div className="grid grid-cols-2 md:grid-cols-4 relative z-10">
                            {[
                                { label: 'Combined Revenue', display: agg.totalRevenue, icon: TrendingUp, subtitle: 'Attributed sales revenue' },
                                { label: 'Confirmed Sales', display: String(agg.totalSales), icon: BarChart3, subtitle: 'Closed & delivered' },
                                { label: 'AI Conversations', display: agg.totalConversations, icon: Zap, subtitle: 'Two-way exchanges' },
                                { label: `${agg.stateCount} States · 60 Days`, display: `${agg.dealerCount} Dealers`, icon: MapPin, subtitle: 'Same playbook' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className={`group/stat relative p-7 md:p-9 flex flex-col bg-[#0A0A0A] hover:bg-[#0E0E0E] transition-all duration-500 ${i < 3 ? 'md:border-r md:border-white/[0.04]' : ''} ${i < 2 ? 'border-b md:border-b-0 border-white/[0.04]' : ''} ${i === 2 ? 'border-b md:border-b-0 border-white/[0.04]' : ''}`}
                                >
                                    {/* Hover glow per cell */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#FF7404]/0 to-[#FF7404]/0 group-hover/stat:from-[#FF7404]/[0.03] group-hover/stat:to-transparent transition-all duration-500 pointer-events-none" />

                                    <div className="relative z-10">
                                        {/* Icon with background */}
                                        <div className="w-10 h-10 rounded-xl bg-[#FF7404]/10 border border-[#FF7404]/15 flex items-center justify-center mb-5 group-hover/stat:bg-[#FF7404]/15 group-hover/stat:border-[#FF7404]/25 group-hover/stat:scale-110 transition-all duration-500">
                                            <stat.icon className="w-5 h-5 text-[#FF7404]" />
                                        </div>

                                        {/* Big number */}
                                        <span className="font-[family-name:var(--font-inter)] text-4xl md:text-5xl font-black text-white tracking-tight leading-none block mb-2 group-hover/stat:text-[#FF7404] transition-colors duration-500">
                                            {stat.display}
                                        </span>

                                        {/* Label */}
                                        <span className="text-zinc-500 text-[11px] uppercase tracking-[0.15em] font-semibold block mb-1">
                                            {stat.label}
                                        </span>

                                        {/* Subtitle */}
                                        <span className="text-zinc-600 text-[11px] block">
                                            {stat.subtitle}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Filter Tabs ──────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex items-center gap-6 mb-8"
                    >
                        <span className="text-zinc-600 text-xs uppercase tracking-wider font-medium">Filter</span>
                        <div className="flex gap-1">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                                        ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                                        : 'text-zinc-500 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Featured + Grid ──────────────────────────────────── */}
                    <AnimatePresence mode="popLayout">
                        {featuredSlug && (
                            <FeaturedCard key={featuredSlug} slug={featuredSlug} />
                        )}

                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                            {gridSlugs.map((slug, index) => (
                                <CaseStudyCard key={slug} slug={slug} index={index} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* ── Comparison Table ─────────────────────────────────────────── */}
            <section ref={tableRef} className="py-24 border-t border-white/[0.04] relative overflow-hidden">
                {/* STYLE 2: Blueprint grid at 8-12% opacity with parallax */}
                <motion.div
                    style={{ y: blueprintY, opacity: blueprintOpacity }}
                    className="absolute -top-20 -left-20 w-[500px] h-[500px] pointer-events-none"
                >
                    <BlueprintGrid className="w-full h-full text-[#FF7404]" />
                </motion.div>
                <motion.div
                    style={{ y: useTransform(tableScroll, [0, 1], [30, -30]) }}
                    className="absolute -bottom-20 -right-20 w-[400px] h-[400px] pointer-events-none opacity-[0.04]"
                >
                    <BlueprintGrid className="w-full h-full text-white rotate-45" />
                </motion.div>

                <div className="container px-4 mx-auto max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-12 bg-[#FF7404]" />
                            <span className="text-[#FF7404] text-xs font-bold uppercase tracking-[0.2em] font-[family-name:var(--font-inter)]">
                                Side-by-Side
                            </span>
                        </div>
                        <h2 className="font-[family-name:var(--font-inter)] text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
                            The complete picture.
                        </h2>
                        <p className="text-zinc-500 max-w-xl leading-relaxed">
                            Every dealer on the platform during the same 60-day window. Same playbook, different stores. Click any row to read the full story.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <ComparisonTable />
                    </motion.div>
                </div>
            </section>

            {/* ── How We Measure ───────────────────────────────────────────── */}
            <section className="py-24 border-t border-white/[0.04] relative overflow-hidden">
                {/* Subtle ambient glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF7404]/[0.02] rounded-full blur-[150px] pointer-events-none" />

                <div className="container px-4 mx-auto max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-12 bg-[#FF7404]" />
                            <span className="text-[#FF7404] text-xs font-bold uppercase tracking-[0.2em] font-[family-name:var(--font-inter)]">
                                Methodology
                            </span>
                        </div>
                        <h2 className="font-[family-name:var(--font-inter)] text-3xl md:text-4xl font-black text-white tracking-tight mb-12 max-w-2xl">
                            How we count.
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-5">
                        {[
                            {
                                icon: Shield,
                                title: 'Attributed Revenue',
                                description: 'A sale counts as "attributed" when the customer had at least one AI-handled conversation — inbound lead response, outbound reactivation, or follow-up — before signing. We track the full SMS thread from first contact to closed deal.',
                                stat: '100%',
                                statLabel: 'Auditable',
                            },
                            {
                                icon: Clock,
                                title: 'Same 60-Day Window',
                                description: 'February 10 to April 10, 2026. Every dealer on the platform during this period is included — no cherry-picking top performers or excluding slow months.',
                                stat: '60',
                                statLabel: 'Days',
                            },
                            {
                                icon: BarChart3,
                                title: 'Conversations, Not Impressions',
                                description: 'Every number labeled "AI conversation" is a real two-way exchange — the customer replied. We don\'t count one-way blasts, undelivered messages, or bot-to-bot loops.',
                                stat: '2-Way',
                                statLabel: 'Verified',
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: i * 0.12,
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="group relative bg-[#0A0A0A] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#FF7404]/20 transition-all duration-500 hover:translate-y-[-2px] hover:shadow-[0_20px_60px_-15px_rgba(255,116,4,0.08)]"
                            >
                                {/* Top accent gradient bar */}
                                <div className="h-[2px] bg-gradient-to-r from-transparent via-[#FF7404]/40 to-transparent group-hover:via-[#FF7404] transition-all duration-500" />

                                {/* Background glow */}
                                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] bg-[#FF7404]/0 group-hover:bg-[#FF7404]/[0.06] transition-all duration-700 pointer-events-none" />

                                <div className="relative z-10 p-8">
                                    {/* Icon + stat row */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF7404]/15 to-[#FF7404]/5 border border-[#FF7404]/20 flex items-center justify-center group-hover:from-[#FF7404]/25 group-hover:to-[#FF7404]/10 group-hover:border-[#FF7404]/30 transition-all duration-500">
                                            <item.icon className="w-7 h-7 text-[#FF7404]" />
                                        </div>
                                        <div className="text-right">
                                            <div className="text-2xl font-black text-white/80 font-[family-name:var(--font-inter)] leading-none group-hover:text-[#FF7404] transition-colors duration-500">
                                                {item.stat}
                                            </div>
                                            <div className="text-[10px] uppercase tracking-wider text-zinc-600 mt-1 font-medium">
                                                {item.statLabel}
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="font-[family-name:var(--font-inter)] text-lg font-bold text-white mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Bottom CTA ──────────────────────────────────────────────── */}
            <section ref={ctaRef} className="py-24 border-t border-white/[0.04] relative overflow-hidden">
                <div className="container px-4 mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0A0A0A]">
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF7404] to-transparent" />
                            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#FF7404]/[0.04] rounded-full blur-[100px] pointer-events-none" />

                            {/* STYLE 3: Anchored wireframe at edge of CTA */}
                            <motion.div
                                style={{ x: ctaCarX }}
                                className="absolute -bottom-12 -right-16 w-[500px] pointer-events-none opacity-[0.07] hidden md:block"
                            >
                                <img
                                    src="/images/wireframe-car-2.svg"
                                    alt=""
                                    className="w-full h-auto"
                                    style={{ filter: 'invert(1) sepia(1) saturate(5) hue-rotate(-10deg) brightness(1.1)' }}
                                />
                            </motion.div>

                            <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
                                <div className="max-w-lg">
                                    <h2 className="font-[family-name:var(--font-inter)] text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
                                        Same playbook. Your store.
                                    </h2>
                                    <p className="text-zinc-500 leading-relaxed">
                                        These results come from the same 60-day deployment window. The only variable is the dealership. Book a call to see what your database is worth.
                                    </p>
                                </div>
                                <motion.button
                                    onClick={openModal}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="shrink-0 group/cta px-8 py-4 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-bold rounded-xl inline-flex items-center gap-3 transition-all duration-300 hover:gap-4 font-[family-name:var(--font-inter)] hover:shadow-[0_0_40px_rgba(255,116,4,0.3)] cursor-pointer"
                                >
                                    Schedule Your Walkthrough
                                    <ChevronRight className="w-5 h-5" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
