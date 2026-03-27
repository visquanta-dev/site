'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    ArrowRight,
    Zap,
    RefreshCw,
    Star,
    Target,
    Phone,
    Megaphone,
    Clock,
    MessageSquareText,
    TrendingUp,
    ChevronDown,
    CalendarCheck2,
    Plug,
    ShieldCheck,
    Bike,
    Anchor,
    Truck,
    Users,
    BarChart3,
    CheckCircle2,
    MessageCircle,
    Activity,
    Gauge,
    Wrench,
} from 'lucide-react';
import Link from 'next/link';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DealerTypeCrossLinks from '@/components/dealers/DealerTypeCrossLinks';
import PhoneDemo from '@/components/lead-reactivation/PhoneDemo';
import type { Message } from '@/components/lead-reactivation/PhoneDemo';
import { RequestDemoButton } from '@/components/CalendlyModal';
import SeeItInActionPowersports from '@/components/powersports/SeeItInActionPowersports';
import ProfitCalculatorPowersports from '@/components/powersports/ProfitCalculatorPowersports';

/* ─── animation constants ─── */
const ease = [0.16, 1, 0.3, 1] as const;

/* ─── Animated border beam component ─── */
function BorderBeam() {
    return (
        <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.rect
                width="100%" height="100%" x="0" y="0" rx="3" ry="3"
                fill="none" stroke="#FF7404" strokeOpacity="0.3" strokeWidth="1"
                strokeDasharray="30 800"
                animate={{ strokeDashoffset: [-830, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                vectorEffect="non-scaling-stroke"
            />
        </svg>
    );
}

/* ─── data ─── */
const powersportsBrands = [
    { name: 'Polaris', logo: '/images/logos/polaris.svg', white: false, small: true },
    { name: 'Yamaha', logo: '/images/logos/yamaha.svg', white: false, small: false },
    { name: 'Honda', logo: '/images/logos/honda.svg', white: false, small: false },
    { name: 'Kawasaki', logo: '/images/logos/kawasaki.svg', white: false, small: false },
    { name: 'Can-Am', logo: '/images/logos/can-am.svg', white: true, small: true },
    { name: 'Harley-Davidson', logo: '/images/logos/harley-davidson.svg', white: false, small: false },
    { name: 'Indian', logo: '/images/logos/indian-motorcycle.svg', white: true, small: true },
    { name: 'Suzuki', logo: '/images/logos/suzuki.svg', white: false, small: false },
    { name: 'Arctic Cat', logo: '/images/logos/arctic-cat.svg', white: false, small: true },
    { name: 'Triumph', logo: '/images/logos/triumph.svg', white: false, small: true },
    { name: 'Mercury', logo: '/images/logos/mercury-marine.svg', white: false, small: true },
    { name: 'BRP', logo: '/images/logos/brp.svg', white: false, small: true },
    { name: 'KTM', logo: '/images/logos/ktm.svg', white: false, small: false },
    { name: 'Sea-Doo', logo: '/images/logos/sea-doo.svg', white: false, small: true },
];

const painPoints = [
    {
        icon: Clock,
        title: 'Spring Rush, Winter Regret',
        copy: '60–70% of your annual revenue hits in a 4–5 month window. Every lead that goes unanswered during peak season is a unit your competitor sells instead. By November, those opportunities are gone — and so is your margin.',
        stat: '60%',
        statLabel: 'revenue in peak months',
    },
    {
        icon: MessageSquareText,
        title: 'Dead Leads, Buried Gold',
        copy: 'The average powersports store has thousands of past inquiries sitting untouched — trade-in shoppers, off-season browsers, financing applicants who never came back. Most still have buying intent. They just need a reason to reengage.',
        stat: '2.4K',
        statLabel: 'avg dormant leads per store',
    },
    {
        icon: TrendingUp,
        title: 'Reputation Runs the Community',
        copy: 'Powersports buyers are enthusiasts first, customers second. They compare notes in riding groups, forums, and Facebook communities. A single negative review on Google spreads faster in this market than any other — and it costs you walk-ins you\'ll never know about.',
        stat: '93%',
        statLabel: 'check reviews before visiting',
    },
];

const products = [
    {
        icon: Zap,
        title: 'Speed to Lead',
        description: 'Every web lead, Facebook inquiry, and form submission gets a personalized response in under 60 seconds — 24/7, including weekends and holidays. During spring rush, when your team is juggling floor traffic and phone calls, VisQuanta makes sure no digital lead goes cold.',
        href: '/speed-to-lead',
        metric: '<60s',
        metricLabel: 'response time',
        featured: true,
    },
    {
        icon: RefreshCw,
        title: 'Lead Reactivation',
        description: 'Natural SMS conversations that reengage last season\'s shoppers, trade-in inquiries, and financing applicants sitting dormant in your database. Most stores have thousands of past leads with buying intent — we turn them into booked appointments.',
        href: '/lead-reactivation',
        metric: '340%',
        metricLabel: 'more callbacks',
    },
    {
        icon: Star,
        title: 'Reputation Management',
        description: 'Automated review requests after every sale and service visit, with real-time monitoring across Google, Facebook, and Yelp. Negative reviews get flagged instantly so your team can respond before it spreads through the riding community.',
        href: '/reputation-management',
        metric: '4.8★',
        metricLabel: 'avg dealer rating',
    },
    {
        icon: Target,
        title: 'Custom Campaigns',
        description: 'Done-for-you SMS campaigns built around powersports seasonality — spring kickoff promos, demo day invitations, end-of-season clearance, accessory bundles, and winterization reminders. We write the copy, segment your list, and handle delivery.',
        href: '/custom-campaigns',
        metric: '22%',
        metricLabel: 'conversion rate',
    },
    {
        icon: Phone,
        title: 'Service Drive Pro',
        description: 'Voice-powered call handling that answers your service line when your team can\'t. Parts inquiries, oil change scheduling, winterization appointments, warranty questions — every call gets answered professionally, every time.',
        href: '/service-drive',
        metric: '24/7',
        metricLabel: 'coverage',
    },
    {
        icon: Megaphone,
        title: 'Paid Campaigns',
        description: 'Expert-managed advertising across Facebook, Google, and TikTok with powersports-specific creative, audience targeting, and seasonal budget allocation. We handle the strategy, creative, and optimization — you handle the appointments.',
        href: '/paid-campaigns',
        metric: '3.2x',
        metricLabel: 'avg ROAS',
    },
];

const segments = [
    {
        icon: Bike,
        title: 'Motorcycle Dealers',
        description: 'Sport, cruiser, touring, adventure, and dirt — lead follow-up and reactivation tailored to each segment\'s buying cycle, with trade-in conversations that convert.',
        brands: [
            { name: 'Honda', logo: '/images/logos/honda.svg', white: false },
            { name: 'Yamaha', logo: '/images/logos/yamaha.svg', white: false },
            { name: 'Kawasaki', logo: '/images/logos/kawasaki.svg', white: false },
            { name: 'Harley-Davidson', logo: '/images/logos/harley-davidson.svg', white: false },
            { name: 'Indian', logo: '/images/logos/indian-motorcycle.svg', white: true },
            { name: 'Suzuki', logo: '/images/logos/suzuki.svg', white: false },
            { name: 'Triumph', logo: '/images/logos/triumph.svg', white: false },
            { name: 'KTM', logo: '/images/logos/ktm.svg', white: false },
        ],
    },
    {
        icon: Truck,
        title: 'ATV / UTV / Side-by-Side',
        description: 'Handle the spring volume surge without dropping leads. After-hours engagement, accessory upsell campaigns, and off-season reactivation built for the rec/utility buyer.',
        brands: [
            { name: 'Polaris', logo: '/images/logos/polaris.svg', white: false },
            { name: 'Can-Am', logo: '/images/logos/can-am.svg', white: true },
            { name: 'Honda', logo: '/images/logos/honda.svg', white: false },
            { name: 'Yamaha', logo: '/images/logos/yamaha.svg', white: false },
            { name: 'Arctic Cat', logo: '/images/logos/arctic-cat.svg', white: false },
        ],
    },
    {
        icon: Anchor,
        title: 'Marine & Boat Dealers',
        description: 'High-ticket pipeline nurture for longer sales cycles. Financing-intent follow-up, seasonal service campaigns, and winterization reminders that keep revenue flowing year-round.',
        brands: [
            { name: 'Mercury', logo: '/images/logos/mercury-marine.svg', white: false },
            { name: 'Yamaha', logo: '/images/logos/yamaha.svg', white: false },
            { name: 'Sea-Doo', logo: '/images/logos/sea-doo.svg', white: false },
            { name: 'Tracker', logo: '/images/logos/tracker-boats.svg', white: false },
            { name: 'Bayliner', logo: '/images/logos/bayliner.svg', white: false },
        ],
    },
    {
        icon: Users,
        title: 'Multi-Brand / Multi-Location',
        description: 'Centralized control with location-level execution. Unified reporting, brand-specific lead routing, and consistent follow-up playbooks across every store in your group.',
        brands: [
            { name: 'Polaris', logo: '/images/logos/polaris.svg', white: false },
            { name: 'Yamaha', logo: '/images/logos/yamaha.svg', white: false },
            { name: 'Can-Am', logo: '/images/logos/can-am.svg', white: true },
            { name: 'Harley-Davidson', logo: '/images/logos/harley-davidson.svg', white: false },
            { name: 'KTM', logo: '/images/logos/ktm.svg', white: false },
            { name: 'BRP', logo: '/images/logos/brp.svg', white: false },
        ],
    },
];

const steps = [
    {
        num: '01',
        title: 'Connect',
        description: 'We connect with your existing data, lead sources, and customer database. Your team keeps using the tools they know — Lightspeed, CDK, DealerSocket, or whatever runs your store. No migration, no IT project.',
        icon: Plug,
    },
    {
        num: '02',
        title: 'Activate',
        description: 'New leads start getting responses in under 60 seconds. Your dormant database gets reactivated with personalized conversations. Review requests go out automatically after every transaction. All running in parallel, 24/7.',
        icon: Activity,
    },
    {
        num: '03',
        title: 'Convert',
        description: 'More appointments on the calendar. More past shoppers walking back through your doors. More units moved per month — without hiring another person or burning out your existing team.',
        icon: CalendarCheck2,
    },
];

const faqs = [
    {
        q: 'What is VisQuanta for Powersports?',
        a: 'VisQuanta for Powersports is a suite of tools designed specifically for motorcycle, ATV, UTV, and marine dealers. It includes instant lead response (Speed to Lead), dormant lead reactivation, online reputation management, seasonal SMS campaigns, voice-powered service call handling, and managed paid advertising. The goal is simple: help powersports stores sell more units and book more appointments without adding headcount.',
    },
    {
        q: 'Is this built specifically for the powersports industry?',
        a: 'Yes. Unlike generic automotive tools, VisQuanta\'s powersports workflows are designed around the unique challenges of this market — compressed seasonal selling windows, multi-brand inventory (Polaris, Yamaha, Honda, Kawasaki, Harley-Davidson, Can-Am, and more), enthusiast-driven buyer behavior, and the importance of service department revenue during off-season months.',
    },
    {
        q: 'Do we need to replace our DMS or CRM?',
        a: 'No. VisQuanta connects with your existing data and lead sources — whether you use Lightspeed, CDK, DealerSocket, DealerTrack, or another system. We don\'t require a rip-and-replace. Your team keeps using the tools they know, and VisQuanta enhances what happens with the leads and customer data flowing through them.',
    },
    {
        q: 'How does it handle the seasonal nature of powersports?',
        a: 'The system is built for seasonality. During peak months (typically March through September), it handles high lead volumes 24/7 so your team can focus on floor traffic. During the off-season, it shifts to reactivating dormant leads, promoting winterization services, running pre-season campaigns, and keeping your pipeline warm so you\'re not starting from zero when spring arrives.',
    },
    {
        q: 'What about stores that carry multiple brands?',
        a: 'Fully supported. Whether you carry Polaris, Yamaha, Honda, Kawasaki, Can-Am, and Harley-Davidson under one roof — or operate separate locations for different brands — the system routes inquiries, tailors responses, and tracks performance at the brand level. Multi-location groups get centralized reporting with location-level execution.',
    },
    {
        q: 'How fast can we get started?',
        a: 'Most stores are fully operational within days of kickoff. We handle the onboarding — connecting to your data sources, configuring messaging workflows, aligning response templates with your brand voice, and training your team on what to expect. There\'s no lengthy implementation period or IT project required.',
    },
    {
        q: 'Does it work for service departments, not just sales?',
        a: 'Yes. Service Drive Pro handles inbound service calls, schedules maintenance appointments, answers parts inquiries, and sends winterization or seasonal service reminders. For many powersports stores, the service department is the most consistent revenue stream — especially during off-season months. VisQuanta helps you maximize it.',
    },
    {
        q: 'Will this work for both new and pre-owned inventory?',
        a: 'Absolutely. The system handles new unit inquiries, pre-owned leads, trade-in conversations, financing follow-up, and service department engagement. Every revenue stream in your store gets covered — not just new unit sales.',
    },
];


/* ─── Phone Demo Messages ─── */
const phoneDemoMessages: Message[] = [
    {
        id: '0',
        sender: 'system',
        type: 'notification',
        content: (
            <div className="w-full bg-[#1A1A1A]/80 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3 border border-white/10 shadow-lg mb-2">
                <div className="h-8 w-8 bg-[#FF7404]/20 rounded-md flex items-center justify-center border border-[#FF7404]/30">
                    <Zap className="w-4 h-4 text-[#FF7404]" />
                </div>
                <div className="text-left">
                    <div className="text-[10px] font-bold text-gray-300 uppercase tracking-wider leading-none">New Lead</div>
                    <div className="text-[10px] text-gray-500 leading-none mt-1">ATV Trader • Just now</div>
                </div>
            </div>
        ),
    },
    {
        id: '1',
        sender: 'agent',
        content: "Hey Mike, this is Thunder Road Powersports. I see you were checking out the 2025 Polaris RZR Pro R. Great choice — it's still available.\n\nWould you like to come see it this weekend?",
    },
    { id: '2', sender: 'user', content: "Yeah, I'm interested. What's the best price you can do?" },
    {
        id: '3',
        sender: 'agent',
        content: "I'd love to get you the best deal possible. Let me have our sales manager Jake give you a quick call — he can walk you through current pricing and any promotions. What time works best?",
    },
    { id: '4', sender: 'user', content: "Tomorrow after 2pm works" },
    { id: '5', sender: 'agent', content: "Done — Jake will call you tomorrow after 2pm. Looking forward to getting you into that RZR!" },
    {
        id: '6',
        sender: 'system',
        type: 'notification',
        content: (
            <div className="mt-3 p-5 rounded-2xl bg-gradient-to-r from-green-500/10 to-green-500/5 border border-green-500/20 flex items-center gap-4 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)]">
                    <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                    <div className="text-white font-bold text-sm uppercase tracking-wide">Call Scheduled</div>
                    <div className="text-[11px] text-green-400/80 font-mono tracking-wide">SYNCED TO CRM</div>
                </div>
            </div>
        ),
    },
];

const reactivationMessages: Message[] = [
    {
        id: 'r0',
        sender: 'system',
        type: 'notification',
        content: (
            <div className="w-full bg-[#1A1A1A]/80 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3 border border-white/10 shadow-lg mb-2">
                <div className="h-8 w-8 bg-green-500/20 rounded-md flex items-center justify-center border border-green-500/30">
                    <RefreshCw className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-left">
                    <div className="text-[10px] font-bold text-gray-300 uppercase tracking-wider leading-none">Lead Reactivation</div>
                    <div className="text-[10px] text-gray-500 leading-none mt-1">CRM • Last active 14 days ago</div>
                </div>
            </div>
        ),
    },
    {
        id: 'r1',
        sender: 'agent',
        content: "Hey Sarah, it's Thunder Road Powersports. You came in a couple weeks ago looking at the 2025 Can-Am Outlander. Just wanted to check — are you still thinking about it?",
    },
    { id: 'r2', sender: 'user', content: "Hey! Yeah actually I've been meaning to come back, just got busy." },
    {
        id: 'r3',
        sender: 'agent',
        content: "No worries at all! That Outlander is still here. We also just got a spring promo going — 0% financing for 36 months. Want to come in this Saturday and take it for a ride?",
    },
    { id: 'r4', sender: 'user', content: "Oh nice, yeah Saturday works. What time?" },
    { id: 'r5', sender: 'agent', content: "How about 11am? I'll have Tyler set one aside for you and have everything ready when you get here." },
    { id: 'r6', sender: 'user', content: "Perfect, see you then!" },
    {
        id: 'r7',
        sender: 'system',
        type: 'notification',
        content: (
            <div className="mt-3 p-5 rounded-2xl bg-gradient-to-r from-green-500/10 to-green-500/5 border border-green-500/20 flex items-center gap-4 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)]">
                    <CalendarCheck2 className="w-6 h-6 text-white" />
                </div>
                <div>
                    <div className="text-white font-bold text-sm uppercase tracking-wide">Appointment Booked</div>
                    <div className="text-[11px] text-green-400/80 font-mono tracking-wide">SAT 11:00 AM • SYNCED</div>
                </div>
            </div>
        ),
    },
];

const allConversations = [
    { messages: phoneDemoMessages, subtitle: 'Speed to Lead' },
    { messages: reactivationMessages, subtitle: 'Lead Reactivation' },
];

/* ─── Pain Points: Split layout (narrative left, stats right) ─── */
function PainPointsSection({ painPoints }: { painPoints: { icon: any; title: string; copy: string; stat: string; statLabel: string }[] }) {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
    const yBlob = useTransform(scrollYProgress, [0, 1], [0, 150]);

    return (
        <section ref={sectionRef} className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50 pointer-events-none" />
            <motion.div style={{ y: yBlob }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF7404]/[0.04] rounded-full blur-[150px] pointer-events-none" />

            <div className="container-wide relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left: Narrative */}
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 text-[#FF7404] text-xs font-bold uppercase tracking-widest mb-6">
                            <Clock className="w-3 h-3" />
                            The Revenue Problem
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight leading-[1.1] text-balance">
                            Your Best Leads Are <span className="text-[#FF7404]">Walking Away</span>
                        </h2>

                        <div className="space-y-5 text-white/60 text-base sm:text-lg leading-relaxed">
                            <p>
                                Powersports retail is a seasonal business with an unforgiving timeline. The buying window opens in March and starts closing by August. Every lead that goes unanswered during those months is a unit your competitor sells instead.
                            </p>
                            <p>
                                But the problem isn't just speed — it's what happens to the leads that don't buy right away. Last season's tire-kickers, off-season inquiries, trade-in shoppers who got busy. They're sitting in your database with buying intent, and nobody's reaching out.
                            </p>
                            <p>
                                Meanwhile, one negative Google review is making the rounds in every riding group and Facebook community in your market. You'll never know the walk-ins you lost.
                            </p>
                        </div>

                        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FF7404]/10 to-transparent border border-[#FF7404]/20">
                            <p className="text-[#FF7404] font-bold text-lg mb-2">
                                \u201CWe had 2,400 leads in our CRM doing nothing.\u201D
                            </p>
                            <p className="text-white/40 text-sm">
                                — This is what we hear from nearly every powersports dealer we onboard. The opportunity is already in your system.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Stat cards in 2x2 grid */}
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col gap-6">
                        <div className="grid grid-cols-2 gap-4 lg:gap-6">
                            {painPoints.map((point, i) => {
                                const Icon = point.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        className="group"
                                    >
                                        <div className="h-full bg-gradient-to-b from-[#111111] to-[#080808] border border-white/[0.08] rounded-2xl p-6 lg:p-8 transition-[border-color,transform] duration-500 hover:border-[#FF7404]/30 hover:-translate-y-1">
                                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#FF7404] mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div className="text-4xl font-bold text-white mb-2 tracking-tighter tabular-nums">{point.stat}</div>
                                            <div className="text-sm font-bold text-white/90 mb-3 uppercase tracking-wider">{point.statLabel}</div>
                                            <div className="text-sm text-white/40 font-medium">{point.title}</div>
                                            <div className="pt-4 mt-4 border-t border-white/5 text-[10px] font-bold text-[#FF7404]/80 uppercase tracking-widest">
                                                Revenue Impact
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <RequestDemoButton className="w-full py-5 rounded-xl bg-[#FF7404] hover:bg-[#ff8524] text-black font-black text-sm uppercase tracking-widest transition-all hover:scale-[1.02] shadow-[0_0_30px_-10px_rgba(255,116,4,0.4)] flex items-center justify-center gap-3 group">
                            See What You&apos;re Leaving on the Table
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </RequestDemoButton>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* ─── How It Works: Sidebar header + vertical timeline ─── */
function HowItWorksSection({ steps }: { steps: { num: string; title: string; description: string; icon: any }[] }) {
    return (
        <section className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50 pointer-events-none" />

            <div className="container-wide relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">

                    {/* Left: Sticky header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 lg:sticky lg:top-32"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-[#FF7404]/30 shadow-[0_0_15px_-3px_rgba(255,116,4,0.3)] backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-6">
                            <Plug className="w-3 h-3 text-[#FF7404] fill-[#FF7404]" />
                            <span className="text-[#FF7404]">How It Works</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1] text-balance">
                            Up and Running in <span className="text-[#FF7404]">Days.</span>
                        </h2>

                        <p className="text-white/40 text-sm lg:text-base leading-relaxed mb-8">
                            No lengthy implementation. No IT project. We handle the setup so your team can focus on selling.
                        </p>

                        {/* Quick Stats */}
                        <div className="flex gap-1 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] w-fit">
                            <div className="px-6 py-4 text-center">
                                <div className="text-2xl font-bold text-[#FF7404]">3–5</div>
                                <div className="text-[9px] text-white/40 uppercase font-bold tracking-widest mt-0.5">Days</div>
                            </div>
                            <div className="w-px bg-white/[0.08] my-2" />
                            <div className="px-6 py-4 text-center">
                                <div className="text-2xl font-bold text-white">0</div>
                                <div className="text-[9px] text-white/40 uppercase font-bold tracking-widest mt-0.5">IT Needed</div>
                            </div>
                            <div className="w-px bg-white/[0.08] my-2" />
                            <div className="px-6 py-4 text-center">
                                <div className="text-2xl font-bold text-white">1</div>
                                <div className="text-[9px] text-white/40 uppercase font-bold tracking-widest mt-0.5">Kickoff</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Timeline steps */}
                    <div className="lg:w-2/3 space-y-6">
                        {steps.map((step, i) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.num}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15, duration: 0.5 }}
                                    className="group"
                                >
                                    <div className="flex gap-6 items-start">
                                        {/* Timeline dot + line */}
                                        <div className="flex flex-col items-center pt-2">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF7404]/20 to-[#FF7404]/5 border border-[#FF7404]/20 flex items-center justify-center group-hover:shadow-[0_0_20px_-5px_rgba(255,116,4,0.4)] transition-shadow duration-500 shrink-0">
                                                <Icon className="w-5 h-5 text-[#FF7404]" />
                                            </div>
                                            {i < steps.length - 1 && (
                                                <div className="w-px h-16 bg-gradient-to-b from-[#FF7404]/20 to-transparent mt-3" />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="pb-8">
                                            <div className="text-[10px] font-black text-[#FF7404]/60 uppercase tracking-widest mb-2">Step {step.num}</div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#FF7404] transition-colors">{step.title}</h3>
                                            <p className="text-white/50 leading-relaxed max-w-lg">{step.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function PowerPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [demoKey, setDemoKey] = useState(0);
    const [convoIndex, setConvoIndex] = useState(0);
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Loop the phone demo: alternate between conversations
    useEffect(() => {
        const timer = setInterval(() => {
            setDemoKey(prev => prev + 1);
            setConvoIndex(prev => (prev + 1) % allConversations.length);
        }, 22000);
        return () => clearInterval(timer);
    }, []);

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
    };

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Powersports Dealer Automation',
        name: 'VisQuanta for Powersports',
        description: 'Tools that help powersports dealers respond to leads faster, reactivate dead CRM opportunities, manage online reputation, and run targeted campaigns.',
        provider: { '@type': 'Organization', name: 'VisQuanta', url: 'https://www.visquanta.com' },
        areaServed: 'US',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Powersports Growth Suite',
            itemListElement: products.map((p) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: p.title },
            })),
        },
    };

    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.visquanta.com' },
                    { '@type': 'ListItem', position: 2, name: 'Powersports', item: 'https://www.visquanta.com/powersports' },
                ],
            }) }} />

            <Navigation />

            {/* ══════════ GLOBAL PREMIUM SKIN ══════════ */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20512%20512%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noiseFilter%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noiseFilter)%22%2F%3E%3C%2Fsvg%3E')]" />
                <div className="absolute top-0 -left-[10%] w-[40%] h-[40%] bg-[#FF7404]/[0.05] rounded-full blur-[120px]" />
                <div className="absolute bottom-0 -right-[10%] w-[40%] h-[40%] bg-[#FF7404]/[0.05] rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                {/* Wireframe vehicles as background atmosphere — inverted + screen blend removes white bg */}
                <img
                    src="/images/wireframe-dirtbike.jpg"
                    alt=""
                    width={700}
                    height={500}
                    className="absolute top-[25%] left-[-10%] w-[700px] h-auto opacity-[0.06] invert mix-blend-screen rotate-[6deg]"
                />
                <img
                    src="/images/wireframe-atv-real.jpg"
                    alt=""
                    width={750}
                    height={500}
                    className="absolute top-[48%] right-[-12%] w-[750px] h-auto opacity-[0.07] invert mix-blend-screen rotate-[-3deg]"
                />
                <img
                    src="/images/wireframe-yacht.jpg"
                    alt=""
                    width={900}
                    height={600}
                    className="absolute top-[58%] left-1/2 -translate-x-1/2 w-[900px] h-auto opacity-[0.08] invert mix-blend-screen"
                />
            </div>

            <div className="relative z-10">

                {/* ══════════ HERO ══════════ */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-40 lg:pb-28">
                    {/* Background layers */}
                    <div className="absolute inset-0 z-0">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}
                            className="absolute top-[-20%] left-[5%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-[#FF7404]/[0.04] rounded-full blur-[120px] md:blur-[180px]" />
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.3 }}
                            className="absolute top-[30%] right-[-15%] w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-white/[0.02] rounded-full blur-[150px] md:blur-[220px]" />
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_50%,transparent_100%)]" />
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF7404]/50 to-transparent" />
                        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#FF7404]/[0.04] to-transparent" />
                    </div>

                    <div className="container-wide relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 md:gap-20 items-center">

                            {/* Left: Copy */}
                            <div className="text-left space-y-6 sm:space-y-8 lg:space-y-10">
                                {/* Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease }}
                                    className="inline-flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-2.5 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-full shadow-[0_0_40px_-15px_rgba(255,116,4,0.4)]"
                                >
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7404] opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF7404] shadow-[0_0_12px_#FF7404]" />
                                    </span>
                                    <span className="text-white/70 text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase">
                                        Powersports Growth Engine
                                    </span>
                                </motion.div>

                                {/* Headline */}
                                <div className="space-y-5 sm:space-y-6">
                                    <motion.h1
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.1, ease }}
                                        className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-black text-white tracking-[-0.02em] leading-[1.05] uppercase"
                                    >
                                        <span className="block">Tools That Help</span>
                                        <span className="block">Powersports</span>
                                        <motion.span
                                            initial={{ backgroundPosition: '0% 50%' }}
                                            animate={prefersReducedMotion ? {} : { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                                            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                                            className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#FF7404] via-[#FF9A4D] to-[#FF7404] bg-[length:200%_100%] bg-clip-text text-transparent"
                                        >
                                            Dealers Make More Money
                                        </motion.span>
                                    </motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2, ease }}
                                        className="text-[15px] sm:text-lg md:text-xl text-white/50 max-w-lg leading-[1.7] font-medium"
                                    >
                                        Respond to leads faster, wake up dead opportunities, protect your reputation, and keep your sales calendar full — <span className="text-[#FF7404] font-semibold">without adding headcount.</span>
                                    </motion.p>
                                </div>

                                {/* CTAs */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3, ease }}
                                    className="flex flex-col items-start gap-4"
                                >
                                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                                        <RequestDemoButton
                                            className="group relative px-7 sm:px-9 py-4 sm:py-5 overflow-hidden rounded-xl shadow-[0_0_50px_-12px_rgba(255,116,4,0.5)] hover:shadow-[0_0_70px_-12px_rgba(255,116,4,0.7)] transition-all duration-500 text-center"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404] via-[#FF8A3D] to-[#FF7404] rounded-xl" />
                                            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_100%] group-hover:animate-shimmer rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <span className="relative z-10 flex items-center justify-center gap-3 text-black font-bold text-sm uppercase tracking-wider">
                                                Book a Powersports Demo
                                                <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </RequestDemoButton>
                                    </div>
                                    <p className="text-[11px] sm:text-xs text-white/40 font-medium tracking-wide ml-0 sm:ml-2">
                                        15-min walkthrough • No commitment • See real results
                                    </p>
                                </motion.div>

                                {/* Trust */}
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5, ease }}
                                    className="pt-4 sm:pt-6"
                                >
                                    <p className="text-xs text-white/30 font-medium uppercase tracking-[0.15em]">
                                        Trusted by dealerships across North America
                                    </p>
                                </motion.div>
                            </div>

                            {/* Right: Phone Demo */}
                            <div className="relative hidden lg:flex items-center justify-center perspective-[2000px]">
                                {/* Ambient glow */}
                                <div className="absolute w-[500px] h-[500px] bg-[#FF7404]/[0.08] rounded-full blur-[120px] pointer-events-none" />

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, rotateY: -8 }}
                                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                    transition={{ duration: 1.2, ease }}
                                    className="relative z-10"
                                >
                                    <PhoneDemo
                                        key={demoKey}
                                        title="Thunder Road Powersports"
                                        subtitle={allConversations[convoIndex].subtitle}
                                        messages={allConversations[convoIndex].messages}
                                    />
                                </motion.div>

                                {/* Floating Performance Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: 40, y: 20 }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    transition={{ delay: 1.2, duration: 0.7, ease }}
                                    className="absolute -right-2 xl:right-0 top-[22%] z-20"
                                >
                                    <motion.div
                                        animate={prefersReducedMotion ? {} : { y: [0, -6, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                        className="bg-[#0a0a0a]/90 backdrop-blur-2xl p-5 xl:p-6 rounded-2xl border border-white/[0.08] shadow-[0_25px_50px_-15px_rgba(0,0,0,0.8)]"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-xl bg-gradient-to-br from-[#FF7404]/20 to-[#FF7404]/5 border border-[#FF7404]/20 flex items-center justify-center">
                                                <Zap className="w-4 h-4 xl:w-5 xl:h-5 text-[#FF7404]" />
                                            </div>
                                            <div className="text-[9px] text-white/40 font-semibold uppercase tracking-[0.15em]">Response Time</div>
                                        </div>
                                        <div className="text-2xl xl:text-3xl font-bold text-white tracking-tight">Under 60s</div>
                                        <div className="text-[10px] text-white/35 font-medium mt-1">Average First Contact</div>
                                    </motion.div>
                                </motion.div>

                                {/* Floating Stat Card - Bottom Left */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30, y: -20 }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    transition={{ delay: 1.5, duration: 0.7, ease }}
                                    className="absolute -left-6 xl:-left-4 bottom-[10%] z-20"
                                >
                                    <motion.div
                                        animate={prefersReducedMotion ? {} : { y: [0, 5, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                        className="bg-[#0a0a0a]/90 backdrop-blur-2xl p-4 xl:p-5 rounded-2xl border border-white/[0.08] shadow-[0_25px_50px_-15px_rgba(0,0,0,0.8)]"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <RefreshCw className="w-3.5 h-3.5 text-green-400" />
                                            <span className="text-[9px] text-white/40 font-semibold uppercase tracking-[0.15em]">Reactivated</span>
                                        </div>
                                        <div className="text-xl font-bold text-green-400">+340%</div>
                                        <div className="text-[10px] text-white/35 font-medium mt-0.5">More Callbacks</div>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Mobile visual */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="lg:hidden mt-6 flex justify-center"
                            >
                                <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm max-w-sm w-full">
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        {[
                                            { val: '<60s', label: 'Response', color: 'text-[#FF7404]' },
                                            { val: '+340%', label: 'Callbacks', color: 'text-green-400' },
                                            { val: '24/7', label: 'Coverage', color: 'text-white' },
                                        ].map((s) => (
                                            <div key={s.label}>
                                                <div className={`text-2xl font-black ${s.color}`}>{s.val}</div>
                                                <div className="text-white/40 text-xs font-medium mt-1">{s.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom fade */}
                    <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#020202] to-transparent pointer-events-none" />
                </section>

                {/* ══════════ BRAND MARQUEE ══════════ */}
                <section className="py-8 sm:py-10 border-b border-white/5 overflow-hidden relative">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-white/30 mb-6 sm:mb-8"
                    >
                        Built for dealers selling
                    </motion.p>
                    <div className="relative w-full overflow-hidden" style={{ maskImage: 'linear-gradient(90deg, transparent, white 10%, white 90%, transparent)' }}>
                        <div className="flex gap-10 sm:gap-14 md:gap-16 animate-marquee w-max items-center">
                            {[...powersportsBrands, ...powersportsBrands].map((brand, i) => (
                                <div
                                    key={`${brand.name}-${i}`}
                                    className="flex items-center justify-center w-fit"
                                >
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className={`w-auto object-contain opacity-80 hover:opacity-100 transition-[opacity,filter] duration-500 ${
                                            brand.small ? 'h-14 sm:h-16' : 'h-10 sm:h-12'
                                        } ${
                                            brand.white
                                                ? 'brightness-75'
                                                : 'invert grayscale brightness-200 contrast-125'
                                        }`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <style jsx>{`
                        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                        .animate-marquee { animation: marquee 45s linear infinite; }
                        @media (prefers-reduced-motion: reduce) { .animate-marquee { animation: none; } }
                    `}</style>
                </section>

                {/* ══════════ WHAT IS — AEO definition section ══════════ */}
                <section className="py-20 sm:py-24 border-b border-white/5 relative">
                    <div className="container-wide relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease }}
                            >
                                <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-6 text-balance">
                                    What is VisQuanta for Powersports?
                                </h2>
                                <div className="space-y-4 text-white/50 text-base sm:text-lg leading-relaxed">
                                    <p>
                                        VisQuanta for Powersports is a complete growth platform built for motorcycle, ATV, UTV, side-by-side, and marine dealers. It combines instant lead response, dormant customer reactivation, online reputation management, seasonal campaign automation, and service department call handling into a single system — designed around the way powersports stores actually operate.
                                    </p>
                                    <p>
                                        Unlike generic automotive software, VisQuanta understands that powersports retail runs on compressed selling seasons, multi-brand showrooms, enthusiast-driven buyer behavior, and service revenue that keeps the lights on year-round. Every workflow, message template, and campaign is built with these realities in mind.
                                    </p>
                                    <p>
                                        The result: more leads engaged, more past shoppers reactivated, more appointments booked, and more units moved — <span className="text-white/70 font-medium">without adding headcount or replacing your existing tools.</span>
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ══════════ PAIN POINTS — Split layout ══════════ */}
                <PainPointsSection painPoints={painPoints} />

                {/* ══════════ PROFIT CALCULATOR ══════════ */}
                <ProfitCalculatorPowersports />

                {/* ══════════ AUTOMASTER SUITE ══════════ */}
                <section className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#FF7404]/[0.03] rounded-full blur-[200px] pointer-events-none" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50 pointer-events-none" />

                    <div className="container-wide relative z-10">
                        <div className="max-w-6xl mx-auto">
                            {/* Left-aligned header like homepage */}
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }} className="max-w-2xl mb-16">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-[#FF7404]/30 shadow-[0_0_15px_-3px_rgba(255,116,4,0.3)] backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-6">
                                    <Zap className="w-3 h-3 text-[#FF7404] fill-[#FF7404]" />
                                    <span className="text-[#FF7404]">The AutoMaster Suite</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5 leading-[1.1] text-balance">One Platform.<br />Every <span className="text-[#FF7404]">Revenue Lever.</span></h2>
                                <p className="text-white/50 text-lg leading-relaxed">6 tools working together to help your store sell more, respond faster, and build a reputation riders trust.</p>
                            </motion.div>

                            {/* Featured product */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease }}
                                className="mb-6"
                            >
                                <RequestDemoButton className="group block relative p-8 sm:p-10 rounded-2xl bg-[#FF7404]/[0.06] border border-[#FF7404]/30 hover:border-[#FF7404]/60 transition-all duration-500 overflow-hidden text-left w-full">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404]/[0.08] via-transparent to-transparent pointer-events-none" />
                                    <BorderBeam />
                                    <div className="relative z-20 grid md:grid-cols-[1fr_auto] gap-8 items-center">
                                        <div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-12 h-12 rounded-xl bg-[#FF7404]/20 flex items-center justify-center">
                                                    <Zap className="w-6 h-6 text-[#FF7404]" />
                                                </div>
                                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#FF7404] bg-[#FF7404]/10 px-3 py-1 rounded-full">Most Popular</span>
                                            </div>
                                            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 group-hover:text-[#FF7404] transition-colors">{products[0].title}</h3>
                                            <p className="text-white/50 leading-relaxed max-w-xl">{products[0].description}</p>
                                            <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[#FF7404]">
                                                Book a Demo <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                        <div className="hidden md:block text-right">
                                            <div className="text-5xl font-black text-[#FF7404]">{products[0].metric}</div>
                                            <div className="text-sm text-white/40 font-medium mt-1">{products[0].metricLabel}</div>
                                        </div>
                                    </div>
                                </RequestDemoButton>
                            </motion.div>

                            {/* Other products grid */}
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                                {products.slice(1).map((product, i) => (
                                    <motion.div
                                        key={product.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.08, ease }}
                                    >
                                        <RequestDemoButton
                                            className="group block relative p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#FF7404]/30 hover:bg-white/[0.04] transition-all duration-500 h-full text-left w-full"
                                        >
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="w-10 h-10 rounded-xl bg-[#FF7404]/10 flex items-center justify-center group-hover:bg-[#FF7404]/20 transition-colors">
                                                    <product.icon className="w-5 h-5 text-[#FF7404]" />
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-lg font-black text-white/60 group-hover:text-[#FF7404] transition-colors">{product.metric}</div>
                                                    <div className="text-[9px] text-white/30 uppercase tracking-wider">{product.metricLabel}</div>
                                                </div>
                                            </div>
                                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF7404] transition-colors">{product.title}</h3>
                                            <p className="text-white/40 leading-relaxed text-sm">{product.description}</p>
                                            <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-[#FF7404] opacity-0 group-hover:opacity-100 transition-opacity">
                                                Book a Demo <ArrowRight className="w-3 h-3" />
                                            </span>
                                        </RequestDemoButton>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════ SEE IT IN ACTION ══════════ */}
                <SeeItInActionPowersports />

                {/* ══════════ SEGMENTS ══════════ */}
                <section className="py-24 sm:py-32 relative overflow-hidden">
                    <div className="container-wide relative z-10">
                        <div className="max-w-6xl mx-auto">
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }} className="max-w-2xl mb-16">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-white/10 text-xs font-bold uppercase tracking-widest text-white/60 mb-6">Powersports Coverage</div>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] text-balance">Built for <span className="text-[#FF7404]">Your Segment.</span></h2>
                            </motion.div>

                            <div className="grid sm:grid-cols-2 gap-5">
                                {segments.map((seg, i) => (
                                    <motion.div
                                        key={seg.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1, ease }}
                                        whileHover={{ y: -4 }}
                                        className="group relative p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.06] hover:border-[#FF7404]/30 hover:shadow-[0_20px_40px_-15px_rgba(255,116,4,0.1)] transition-[border-color,box-shadow] duration-500 overflow-hidden"
                                    >
                                        <div className="flex items-start gap-5">
                                            <div className="w-12 h-12 rounded-xl bg-[#FF7404]/10 flex items-center justify-center shrink-0 group-hover:bg-[#FF7404]/20 transition-colors">
                                                <seg.icon className="w-6 h-6 text-[#FF7404]" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white mb-2">{seg.title}</h3>
                                                <p className="text-white/50 leading-relaxed text-sm mb-3">{seg.description}</p>
                                                <div className="flex flex-wrap items-center gap-5 mt-1">
                                                    {seg.brands.map((b) => (
                                                        b.logo ? (
                                                            <img
                                                                key={b.name}
                                                                src={b.logo}
                                                                alt={b.name}
                                                                title={b.name}
                                                                className={`h-4 max-w-[60px] object-contain opacity-50 group-hover:opacity-70 transition-all duration-500 ${
                                                                    b.white
                                                                        ? 'brightness-75'
                                                                        : 'invert grayscale brightness-200 contrast-125'
                                                                }`}
                                                            />
                                                        ) : (
                                                            <span key={b.name} className="text-[10px] font-bold uppercase tracking-wider text-white/30 group-hover:text-white/50 transition-colors">
                                                                {b.name}
                                                            </span>
                                                        )
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════ MID-PAGE CTA ══════════ */}
                <section className="py-24 sm:py-32 border-b border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF7404]/[0.08] rounded-full blur-[150px]" />
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,116,4,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,116,4,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_30%,transparent_100%)]" />
                    </div>
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF7404]/30 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF7404]/30 to-transparent" />
                    <div className="container-wide relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }}>
                                <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#FF7404] mb-6">
                                    <ShieldCheck className="w-4 h-4" />Partner with the Best
                                </span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5 text-balance">Stop losing revenue to slow follow-up.</h2>
                                <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed mb-10">Most powersports stores lose their best leads in the first 10 minutes. We change that.</p>
                                <RequestDemoButton className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#FF7404] to-[#FF8A3D] text-black font-bold text-sm uppercase tracking-wider rounded-xl shadow-[0_20px_40px_-10px_rgba(255,116,4,0.4)] hover:shadow-[0_20px_60px_-10px_rgba(255,116,4,0.6)] transition-[box-shadow] duration-500">
                                    Schedule Your Walkthrough <ArrowRight className="w-4 h-4" />
                                </RequestDemoButton>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ══════════ HOW IT WORKS — Sidebar + Timeline ══════════ */}
                <HowItWorksSection steps={steps} />


                {/* ══════════ FAQ ══════════ */}
                <section className="py-24 sm:py-32 border-b border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-[#080808] to-[#020202] pointer-events-none" />
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="container-wide relative z-10">
                        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }} className="lg:sticky lg:top-32 lg:self-start">
                                <span className="inline-block text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#FF7404] mb-4">FAQ</span>
                                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-5 text-balance">Powersports Questions, Straight Answers</h2>
                                <p className="text-white/50 leading-relaxed mb-8">Everything you need to know before getting started.</p>
                                <RequestDemoButton className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.05] border border-white/10 rounded-xl text-white text-sm font-semibold hover:border-[#FF7404]/30 transition-all duration-300">
                                    Still have questions? Let&apos;s talk <ArrowRight className="w-4 h-4" />
                                </RequestDemoButton>
                            </motion.div>

                            <div className="space-y-3">
                                {faqs.map((faq, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.05, ease }}
                                    >
                                        <button
                                            id={`faq-q-${i}`}
                                            aria-expanded={openFaq === i}
                                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                            className={`w-full text-left p-5 sm:p-6 rounded-xl border transition-[background-color,border-color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7404] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020202] ${
                                                openFaq === i
                                                    ? 'bg-[#FF7404]/10 border-[#FF7404]/30'
                                                    : 'bg-white/[0.02] border-white/[0.06] hover:border-white/10'
                                            }`}
                                        >
                                            <div className="flex items-center justify-between gap-4">
                                                <h3 className={`text-base sm:text-lg font-bold transition-colors ${openFaq === i ? 'text-white' : 'text-white/80'}`}>{faq.q}</h3>
                                                <ChevronDown className={`w-5 h-5 shrink-0 text-[#FF7404] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                                            </div>
                                            <div role="region" aria-labelledby={`faq-q-${i}`} className={`grid transition-all duration-300 ${openFaq === i ? 'grid-rows-[1fr] mt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                                <div className="overflow-hidden">
                                                    <p className="text-white/50 leading-relaxed text-sm sm:text-base">{faq.a}</p>
                                                </div>
                                            </div>
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>


                {/* ══════════ FINAL CTA ══════════ */}
                <section className="py-24 sm:py-32 relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF7404]/20 to-transparent" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#FF7404]/[0.04] rounded-full blur-[200px] pointer-events-none" />

                    <div className="container-wide relative z-10">
                        <div className="max-w-5xl mx-auto relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/20 via-[#FF7404]/5 to-transparent rounded-3xl blur-2xl" />
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease }}
                                className="relative p-10 md:p-16 rounded-3xl border border-[#FF7404]/30 bg-gradient-to-br from-[#FF7404]/[0.08] via-[#FF7404]/[0.03] to-transparent text-center overflow-hidden"
                            >
                                <BorderBeam />
                                <div className="relative z-20">
                                    <div className="inline-flex items-center gap-2 text-[#FF7404] font-bold uppercase text-xs tracking-[0.2em] mb-6">
                                        <BarChart3 className="w-4 h-4" />Ready to Grow
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-5 tracking-tight text-balance">Ready to Own Your Selling Season?</h2>
                                    <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">See how VisQuanta helps powersports dealers respond faster, reactivate dormant demand, and turn more opportunities into sold units.</p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <RequestDemoButton className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 sm:py-5 overflow-hidden rounded-xl shadow-[0_0_50px_-12px_rgba(255,116,4,0.5)] hover:shadow-[0_0_70px_-12px_rgba(255,116,4,0.7)] transition-all duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404] via-[#FF8A3D] to-[#FF7404] rounded-xl" />
                                            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_100%] group-hover:animate-shimmer rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <CalendarCheck2 className="w-4 h-4 relative z-10 text-black" />
                                            <span className="relative z-10 text-black font-bold text-sm uppercase tracking-wider">Book a Strategy Demo</span>
                                        </RequestDemoButton>
                                    </div>
                                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/30 text-xs">
                                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500/60" /> No contracts</span>
                                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500/60" /> Setup in days</span>
                                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500/60" /> Works with your CRM</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </main>
    );
}
