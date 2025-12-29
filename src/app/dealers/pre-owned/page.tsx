'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DealerCalculator from '@/components/dealers/DealerCalculator';
import { RefreshCw, Zap, TrendingUp, Search, DollarSign, Clock, LayoutGrid, CheckCircle2, ArrowRight, Gauge, ShoppingCart, HelpCircle, Lightbulb, ChevronDown, Calendar, BookOpen, Target, BarChart3, Database, MessageSquare, Layers, Signal, Wifi, Battery, User } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

// FAQ Data for Pre-Owned Dealers
const faqs = [
    {
        question: "How does Lead Reactivation work for Pre-Owned inventory specifically?",
        answer: "AutoMaster maps your current used car inventory against your entire historical lead database. It identifies 'Dead' leads who previously inquired about similar models and re-engages them the moment a new unit hits the lot or a price is adjusted, essentially finding a buyer before you spend a dime on advertising."
    },
    {
        question: "Can AutoMaster help us compete with Carvana and other national retailers?",
        answer: "Yes. National retailers win on speed and follow-up. AutoMaster gives you that same enterprise-level speed by responding to every lead in under 90 seconds, 24/7/365. You capture the shopper while they are still on your VDP, before they move to the next site."
    },
    {
        question: "How does the Service Drive AI help me get Pre-Owned stock?",
        answer: "Instead of buying blind at auctions, the Service Drive AI identifies high-equity customers currently in your service lane. It pre-qualifies their trade-in and presents a 'buy-back' offer automatically, allowing you to acquire the highest-margin used car inventory—the ones you already have the service history for."
    },
    {
        question: "Do our sales reps have to learn a new system to handle these leads?",
        answer: "No. AutoMaster sits in the background. It engages, qualifies, and sets the appointment. Once a used car shopper is ready to talk numbers or book a test drive, the 'Clean' lead is handed over to your team in your existing CRM. Your reps only talk to people who want to buy."
    },
    {
        question: "What is the ROI on 3rd party portal leads (Autotrader, etc.)?",
        answer: "3rd party leads are notoriously difficult to convert because of high cross-shopping. By using Speed-to-Lead, our dealers see a 2x-3x increase in appointment set rates because they are always the first to respond with a personalized, helpful engagement."
    }
];

// Blog/Insights Data for Pre-Owned
const articles = [
    {
        title: "Mining the 'Dead' Lead Database",
        excerpt: "Why your CRM contains a buyer for every used car on your lot, and how to find them without manual cold calling.",
        link: "/blog/crm-mining-for-used",
        category: "Revenue Strategy",
        date: "Dec 21, 2024"
    },
    {
        title: "The First 90 Seconds",
        excerpt: "Quantifying the revenue loss of delayed responses to pre-owned portal inquiries.",
        link: "/blog/speed-to-lead-impact",
        category: "Sales Velocity",
        date: "Dec 15, 2024"
    },
    {
        title: "Acquiring Inventory from the Lane",
        excerpt: "Using AI to turn your service drive into your most profitable used car sourcing channel.",
        link: "/blog/service-drive-acquisition",
        category: "Acquisition",
        date: "Dec 10, 2024"
    }
];

export default function PreOwnedPage() {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

    // Mouse follow effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 150 };
    const followX = useSpring(mouseX, springConfig);
    const followY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 20;
        const y = (e.clientY - rect.top - rect.height / 2) / 20;
        mouseX.set(x);
        mouseY.set(y);
    };

    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black overflow-x-hidden">
            <Navigation />

            {/* 1. HERO SECTION */}
            <motion.section
                ref={heroRef}
                style={{ opacity: heroOpacity, scale: heroScale }}
                onMouseMove={handleMouseMove}
                className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center"
            >
                {/* Visual Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#050505]" />
                    <motion.div
                        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"
                        style={{ x: followX, y: followY }}
                    />
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF7404]/5 rounded-full blur-[150px] pointer-events-none" />
                </div>

                <div className="container px-4 mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div
                                variants={itemVariants}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 text-[#FF7404] text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md"
                            >
                                <Database className="w-3 h-3" />
                                For Pre-Owned Dealers
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1] lg:leading-[1]"
                            >
                                Pre-Owned Sales <br />
                                <motion.span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]"
                                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                    style={{ backgroundSize: "200% 200%" }}
                                >
                                    On Autopilot.
                                </motion.span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-xl text-zinc-400 leading-relaxed max-w-xl mb-10"
                            >
                                The AutoMaster Suite mines your CRM for hidden buyers, captures portal leads instantly, and turns your service drive into a high-margin inventory source.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row items-center gap-4"
                            >
                                <Link href="/book-demo">
                                    <motion.div
                                        whileHover={{ scale: 1.02, boxShadow: "0 0 40px -5px rgba(255,116,4,0.5)" }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full sm:w-auto px-8 py-4 bg-[#FF7404] text-black font-bold rounded-xl flex items-center justify-center gap-2 shadow-[0_0_30px_-5px_rgba(255,116,4,0.4)] cursor-pointer"
                                    >
                                        Unlock My Found Money
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.div>
                                </Link>
                                <Link href="/book-demo">
                                    <motion.div
                                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 cursor-pointer"
                                    >
                                        See the Suite in Action
                                    </motion.div>
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Revenue Engine Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="relative hidden lg:block"
                        >
                            <div className="bg-[#0F0F0F] border border-white/10 rounded-3xl p-8 relative overflow-hidden group shadow-2xl">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7404]/10 rounded-full blur-3xl" />

                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-3">
                                        <RefreshCw className="w-6 h-6 text-[#FF7404] animate-spin-slow" />
                                        <div className="text-white font-bold">AutoMaster Revenue Engine</div>
                                    </div>
                                    <div className="text-[10px] text-zinc-500 font-mono">SEGMENT: PRE_OWNED</div>
                                </div>

                                <div className="space-y-6">
                                    {/* Lead Reactivation Visual */}
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 relative group/item">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 rounded-lg bg-[#FF7404]/20 flex items-center justify-center">
                                                <Database className="w-4 h-4 text-[#FF7404]" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-white">Lead Reactivation</div>
                                                <div className="text-[10px] text-zinc-500">Mining 12,400 Historic Leads</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-1">
                                            {[...Array(12)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0.3 }}
                                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                                                    className="h-1 flex-1 bg-[#FF7404] rounded-full"
                                                />
                                            ))}
                                        </div>
                                        <div className="mt-2 text-[10px] font-bold text-green-400">+14 Appts Today</div>
                                    </div>

                                    {/* Speed to Lead Visual */}
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 rounded-lg bg-[#FF7404]/20 flex items-center justify-center">
                                                <Zap className="w-4 h-4 text-[#FF7404]" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-white">Speed-to-Lead</div>
                                                <div className="text-[10px] text-zinc-500">Real-time Portal Catch</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between text-[11px]">
                                            <span className="text-zinc-400">Autotrader Lead Arrived</span>
                                            <span className="text-[#FF7404] font-bold">42s Response</span>
                                        </div>
                                    </div>

                                    {/* Service Drive Visual */}
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                                                <BarChart3 className="w-4 h-4 text-green-400" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-white">Service Drive Pro</div>
                                                <div className="text-[10px] text-zinc-500">Equity Spotting</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between text-[11px]">
                                            <span className="text-zinc-400">High Equity Found</span>
                                            <span className="text-green-400 font-bold">Offer Sent</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* 2. STATS BAR */}
            <section className="py-20 border-y border-white/5 bg-white/[0.02]">
                <div className="container px-4 mx-auto">
                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {[
                            { label: 'Avg Found Money', value: '$42k+', desc: 'Recovered monthly from existing CRM' },
                            { label: 'Appt Set Rate', value: '3.5x', desc: 'Increase vs manual portal follow-up' },
                            { label: 'Market Capture', value: '24/7', desc: 'Engaging buyers while you sleep' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                className="text-center"
                            >
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-[#FF7404] font-bold text-sm uppercase tracking-wider mb-2">{stat.label}</div>
                                <div className="text-zinc-500 text-sm">{stat.desc}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 3. THE ART OF THE CLOSE - Interactive Conversation Visual */}
            <section className="py-24 bg-[#020202] relative">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="relative w-full max-w-[380px] mx-auto">
                                {/* Phone Mockup */}
                                <div className="relative z-10 rounded-[45px] border-[8px] border-[#1A1A1A] bg-[#0A0A0A] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden aspect-[9/19.5]">
                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1A1A1A] rounded-b-2xl z-20" />

                                    {/* Phone Status Bar */}
                                    <div className="absolute top-0 left-0 right-0 h-10 flex items-center justify-between px-8 text-[10px] text-white/40 z-30">
                                        <div className="font-bold">9:41</div>
                                        <div className="flex gap-1 items-center">
                                            <Signal className="w-2.5 h-2.5" />
                                            <Wifi className="w-2.5 h-2.5" />
                                            <Battery className="w-3 h-3 rotate-90" />
                                        </div>
                                    </div>

                                    {/* UI Header */}
                                    <div className="pt-10 pb-4 border-b border-white/10 mb-4 px-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF7404] to-[#FF9040] flex items-center justify-center font-bold text-black border border-white/10">
                                                <User className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="text-white font-bold text-sm">VisQuanta AI</div>
                                                <div className="text-[10px] text-green-500/80 flex items-center gap-1 font-medium">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)] animate-pulse" />
                                                    Active Reactivation
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Messages Container */}
                                    <div className="h-[calc(100%-120px)] overflow-hidden px-2 relative">
                                        <AnimatePresence>
                                            {/* Success Badge Overlay */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 18.5, duration: 0.5, type: 'spring' }}
                                                className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
                                            >
                                                <div className="px-6 py-4 bg-green-500 rounded-2xl shadow-[0_20px_40px_rgba(34,197,94,0.3)] flex flex-col items-center gap-2 border border-white/20">
                                                    <CheckCircle2 className="w-8 h-8 text-white" />
                                                    <div className="text-white font-black text-xs uppercase tracking-widest text-center leading-tight">
                                                        Appointment Booked<br />
                                                        <span className="opacity-70 text-[10px]">Lead Handed to Sales</span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>

                                        <motion.div
                                            initial={{ y: 0 }}
                                            whileInView={{
                                                y: [0, 0, 0, -40, -100, -160, -220]
                                            }}
                                            viewport={{ once: true }}
                                            transition={{
                                                times: [0, 0.2, 0.4, 0.55, 0.7, 0.85, 1],
                                                duration: 18,
                                                ease: "easeInOut"
                                            }}
                                            className="space-y-4 pt-4"
                                        >
                                            {[
                                                { role: 'ai', text: "Hi Mike, Sarah from the dealership here. I saw you were looking at Broncos with us a few months back. We just took in a 2021 Outer Banks that matches your search perfectly. Still looking?", delay: 1 },
                                                { role: 'user', text: "Oh hey Sarah! Yeah, I'm actually still in the market. Is it available for a test drive?", delay: 3.5 },
                                                { role: 'ai', text: "It is! It hasn't even hit our website frontline yet. Are you thinking of trading in that 2017 Escape we have on file for you?", delay: 6 },
                                                { role: 'user', text: "I was considering it, but it has pretty high miles now.", delay: 8.5 },
                                                { role: 'ai', text: "No problem! We're short on Escapes for our value lot. If I can get you a guaranteed trade-in range in the next 10 mins, want to stop by at 4:30 PM?", delay: 11 },
                                                { role: 'user', text: "Yeah, that works for me. See you then.", delay: 13.5 },
                                                { role: 'ai', text: "Perfect! I've reserved the keys. I'm having Sarah from our floor team call you in 5 mins to confirm that trade range. See you shortly! 🚙", delay: 15.5 },
                                            ].map((msg, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20, scale: 0.95 }}
                                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: msg.delay, duration: 0.4 }}
                                                    className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                                                >
                                                    <div className={`max-w-[85%] p-3 rounded-2xl text-xs font-medium leading-relaxed shadow-lg ${msg.role === 'user'
                                                        ? 'bg-[#1C1C1C] text-white rounded-tr-none border border-white/5'
                                                        : 'bg-gradient-to-br from-[#FF7404] to-[#FF9040] text-black rounded-tl-none font-bold'
                                                        }`}>
                                                        {msg.text}
                                                    </div>
                                                    <div className="text-[9px] text-white/20 mt-1 px-1">
                                                        {msg.role === 'ai' ? 'Delivered' : 'Just now'}
                                                    </div>
                                                </motion.div>
                                            ))}

                                            {/* Typing Indicator */}
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: [0, 1, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity, delay: 17 }}
                                                className="flex gap-1 p-2"
                                            >
                                                <div className="w-1 h-1 rounded-full bg-zinc-500" />
                                                <div className="w-1 h-1 rounded-full bg-zinc-500" />
                                                <div className="w-1 h-1 rounded-full bg-zinc-500" />
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Background Glow for Phone */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[80%] bg-[#FF7404]/10 blur-[100px] rounded-full z-0" />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                                    The Art of the <br />
                                    <span className="text-[#FF7404]">Pre-Owned Close.</span>
                                </h2>
                                <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                                    Don't wait for the customer to chase you. AutoMaster identifies "ready-to-buy" signals from your old leads and reaches out the moment the right unit hits your front line.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { title: "Lead Reactivation", desc: "We mine your 'dead' CRM data and re-engage buyers with inventory that matches their exact history." },
                                        { title: "Trade-In Pre-Qualification", desc: "We identify potential trade units and psychological 'buy signals' before they even reach your lot." },
                                        { title: "Dynamic Appointment Setting", desc: "Syncs with your used car manager's schedule to ensure zero double-booking or missed test drives." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/30 flex items-center justify-center text-[#FF7404]">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                                <p className="text-zinc-500 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PRODUCT BREAKDOWN FOR PRE-OWNED */}
            <section className="py-24 bg-[#020202]">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Three Ways We Fuel Your <br />
                            <span className="text-[#FF7404]">Pre-Owned Revenue.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg">
                            The AutoMaster Suite replaces fragmented processes with a single, high-performance revenue system.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: RefreshCw,
                                title: "Database Mining",
                                product: "Lead Reactivation",
                                desc: "Stop paying for traffic when you already have a buyer. We mine your 'dead' CRM leads and match them to your used car inventory automatically.",
                                impact: "+12-18 Deals/mo"
                            },
                            {
                                icon: Zap,
                                title: "Portal Domination",
                                product: "Speed-to-Lead",
                                desc: "Be the first to respond to Autotrader, Cars.com, and Facebook leads in under 90 seconds. We capture the buyer before they move to your competitor.",
                                impact: "2.5x Conv. Rate"
                            },
                            {
                                icon: MessageSquare,
                                title: "Equity Catching",
                                product: "Service Drive AI",
                                desc: "The highest-margin pre-owned unit is the one sitting in your service lane. We automatically identify and engage high-equity service customers.",
                                impact: "Zero-Ad Cost Stock"
                            }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-[#FF7404]/30 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#FF7404]/10 flex items-center justify-center mb-6 group-hover:bg-[#FF7404] transition-all">
                                    <card.icon className="w-6 h-6 text-[#FF7404] group-hover:text-black transition-all" />
                                </div>
                                <div className="text-[10px] font-bold text-[#FF7404] uppercase tracking-widest mb-2">{card.product}</div>
                                <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed mb-6">{card.desc}</p>
                                <div className="pt-6 border-t border-white/5">
                                    <div className="text-xs text-zinc-400 mb-1">Impact Potential</div>
                                    <div className="text-white font-bold">{card.impact}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. THE 2025 MARKET REALITY - SEO/AEO Rich Section */}
            <section className="py-24 bg-[#050505] border-y border-white/5">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Why Pre-Owned Dealers are <br />
                                <span className="text-[#FF7404]">Struggling in 2025.</span>
                            </h2>
                            <p className="text-zinc-400 text-lg">
                                Between high interest rates and inventory scarcity, the old "spend more on ads" model is broken.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-[#FF7404] font-bold text-xl mb-3 flex items-center gap-2">
                                        <TrendingUp className="w-5 h-5" />
                                        The Interest Rate Lock-In
                                    </h3>
                                    <p className="text-zinc-500 leading-relaxed">
                                        Shoppers are more price-sensitive than ever. In 2025, a consumer cross-shops an average of 4.2 dealerships before visiting a lot. If you aren't using <strong>Automotive Speed-to-Lead AI</strong> to respond in under 90 seconds, you are effectively invisible to the modern used car buyer.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-[#FF7404] font-bold text-xl mb-3 flex items-center gap-2">
                                        <Database className="w-5 h-5" />
                                        The Auction Margin Trap
                                    </h3>
                                    <p className="text-zinc-500 leading-relaxed">
                                        Wholesale prices remain elevated, leaving thin margins for used car GMs. The only way to win is to bypass the auction and <strong>buy directly from the public</strong>. AutoMaster's Service Drive AI identifies high-equity trades in your own service lane, providing you with inventory that has a guaranteed service history and higher front-end potential.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col justify-center">
                                <div className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4">AEO Knowledge Bit</div>
                                <h4 className="text-white text-xl font-bold mb-4">What is the best way to increase used car sales without increasing ad spend?</h4>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                    The most effective method is <strong>Database Reactivation</strong>. By using AI to mine your existing CRM database for "dead" leads and matching them to your current pre-owned inventory, you generate sales from shoppers you've already paid for, resulting in a significantly lower CAC (Customer Acquisition Cost).
                                </p>
                                <div className="flex items-center gap-2 text-[#FF7404] text-xs font-bold font-mono">
                                    <div className="w-2 h-2 rounded-full bg-[#FF7404] animate-pulse" />
                                    STRATEGY_VERIFIED_2025
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. THE REVENUE BLUEPRINT - Structured for AEO/SEO */}
            <section className="py-24 bg-[#020202]">
                <div className="container px-4 mx-auto">
                    <div className="bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-[40px] p-8 md:p-16">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                                    The Pre-Owned <br />
                                    <span className="text-[#FF7404]">Revenue Blueprint.</span>
                                </h2>
                                <div className="space-y-8">
                                    {[
                                        { step: "01", title: "CRM Data Sanitization", desc: "AutoMaster identifies high-intent segments in your data that human BDCs have overlooked." },
                                        { step: "02", title: "Automated Intent Matching", desc: "We map your current used car inventory specs against historical buyer preferences in your database." },
                                        { step: "03", title: "2-Way SMS Engagement", desc: "AI initiates personalized conversations, handling objections and pre-qualifying trade-ins." },
                                        { step: "04", title: "Hot Lead Handover", desc: "Once a 'Buy-Ready' signal is detected, the lead is pushed directly to your showroom floor team." }
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="text-2xl font-black text-white/10 group-hover:text-[#FF7404]/30 transition-colors uppercase font-mono">
                                                {step.step}
                                            </div>
                                            <div>
                                                <h3 className="text-white font-bold mb-1">{step.title}</h3>
                                                <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                {/* Visual representing the Blueprint flow */}
                                <div className="aspect-square bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#FF7404]/5 to-transparent" />
                                    <div className="relative z-10 h-full flex flex-col">
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="text-xs font-black text-white uppercase tracking-widest">Revenue_System_Flow</div>
                                            <div className="px-2 py-1 bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-bold rounded">ACTIVE</div>
                                        </div>
                                        <div className="flex-1 flex flex-col justify-center gap-4">
                                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                                                <span className="text-zinc-400 text-xs">CRM Database</span>
                                                <ArrowRight className="w-4 h-4 text-[#FF7404]" />
                                                <span className="text-white font-bold text-xs uppercase">AutoMaster</span>
                                            </div>
                                            <div className="h-12 w-0.5 bg-gradient-to-b from-[#FF7404] to-transparent ml-8" />
                                            <div className="p-4 rounded-xl bg-[#FF7404]/10 border border-[#FF7404]/20">
                                                <div className="text-[#FF7404] text-[10px] font-black uppercase mb-1">Processing</div>
                                                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                                    <motion.div
                                                        animate={{ x: ["-100%", "100%"] }}
                                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                        className="h-full w-1/3 bg-[#FF7404]"
                                                    />
                                                </div>
                                            </div>
                                            <div className="h-12 w-0.5 bg-gradient-to-b from-[#FF7404] to-transparent ml-8" />
                                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                                                <span className="text-white font-bold text-xs uppercase">Showroom Floor</span>
                                                <div className="flex gap-1">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* 6. CALCULATOR */}
            <DealerCalculator />

            {/* 7. FAQ - Expanded for AEO */}
            <section className="py-24 bg-[#050505] relative overflow-hidden">
                <div className="container px-4 mx-auto relative z-10">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Pre-Owned <span className="text-[#FF7404]">Revenue Q&A.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg">
                            Direct answers for GMs looking to optimize their pre-owned and used car profitability in 2025.
                        </p>
                    </motion.div>

                    <motion.div
                        className="max-w-3xl mx-auto space-y-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {faqs.map((faq, i) => (
                            <motion.div key={i} variants={itemVariants}>
                                <motion.div
                                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openFAQ === i
                                        ? 'bg-[#0a0a0a] border-[#FF7404]/30 shadow-[0_0_30px_-10px_rgba(255,116,4,0.2)]'
                                        : 'bg-[#080808] border-white/5 hover:border-white/10'
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left"
                                    >
                                        <span className={`font-bold transition-colors duration-300 ${openFAQ === i ? 'text-[#FF7404]' : 'text-white'
                                            }`}>
                                            {faq.question}
                                        </span>
                                        <motion.div
                                            animate={{ rotate: openFAQ === i ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={`flex-shrink-0 ml-4 ${openFAQ === i ? 'text-[#FF7404]' : 'text-white/40'}`}
                                        >
                                            <ChevronDown className="w-5 h-5" />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {openFAQ === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 8. INSIGHTS */}
            <section className="py-24 bg-[#020202] relative overflow-hidden">
                <div className="container px-4 mx-auto relative z-10">
                    <motion.div
                        className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                                Revenue <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]">Insights</span>
                            </h2>
                            <p className="text-zinc-400 text-lg max-w-xl">
                                Practical strategies for maximizing your current pre-owned and used car revenue potential.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {articles.map((article, i) => (
                            <motion.div key={i} variants={itemVariants}>
                                <div className="group h-full rounded-3xl bg-[#080808] border border-white/5 hover:border-[#FF7404]/30 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_-20px_rgba(255,116,4,0.15)]">
                                    <div className="h-1.5 bg-gradient-to-r from-[#FF7404] to-[#FF9040] opacity-30 group-hover:opacity-100 transition-opacity" />
                                    <div className="p-8">
                                        <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4 font-mono">
                                            <Calendar className="w-3 h-3" />
                                            {article.date}
                                            <span className="px-2 py-0.5 rounded-full bg-[#FF7404]/10 text-[#FF7404] font-bold">
                                                {article.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF7404] transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all">
                                            Read Article
                                            <ArrowRight className="w-4 h-4 text-[#FF7404]" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 9. FINAL CTA */}
            <section className="py-24 bg-[#020202] relative overflow-hidden">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF7404] rounded-full blur-[160px] pointer-events-none"
                />

                <div className="container px-4 mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-[1]">
                            Stop Losing Sales to Your Own <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]">Dying Database.</span>
                        </h2>
                        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                            The buyer for your current stock is already in your CRM. The AutoMaster Suite finds them and sets the appointment for you.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/book-demo">
                                <motion.div
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 40px -5px rgba(255,116,4,0.6)" }}
                                    className="px-10 py-5 bg-[#FF7404] text-black font-black text-lg rounded-xl flex items-center gap-2 cursor-pointer shadow-2xl"
                                >
                                    Book Revenue Audit
                                    <ArrowRight className="w-5 h-5" />
                                </motion.div>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* AEO/SEO STRUCTURED DATA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "AutoMaster Suite",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Web",
                        "description": "Enterprise AI for automotive lead reactivation and speed-to-lead automation.",
                        "offers": {
                            "@type": "Offer",
                            "availability": "https://schema.org/InStock"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": "128"
                        }
                    })
                }}
            />

            <Footer />
        </main>
    );
}
