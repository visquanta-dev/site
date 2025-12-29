'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DealerCalculator from '@/components/dealers/DealerCalculator';
import { Building2, ShieldCheck, BarChart3, ArrowRight, CheckCircle2, Award, TrendingUp, Clock, Users, AlertTriangle, Zap, RefreshCw, Phone, Star, Target, HelpCircle, BookOpen, Calendar, Lightbulb, ChevronDown, Signal, Wifi, Battery, User } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import ReviewCard from '@/components/ui/ReviewCard';
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

// FAQ Data
const faqs = [
    {
        question: "How do you ensure OEM compliance with messaging?",
        answer: "AutoMaster uses brand-compliant messaging templates pre-approved for each manufacturer. Every communication maintains your dealership's voice while meeting OEM standards for tone, timing, and content. All interactions are logged automatically for audit trails."
    },
    {
        question: "Can you integrate with our certified CRM/DMS systems?",
        answer: "Yes. We integrate seamlessly with all major OEM-certified systems including CDK, Reynolds & Reynolds, DealerTrack, VinSolutions, eLeads, and more. Notes, appointments, and communications sync directly—no manual data entry required."
    },
    {
        question: "How does this help protect our CSI scores?",
        answer: "By responding to every lead within 90 seconds, you eliminate the #1 cause of CSI complaints: slow response times. Our AI Reputation Management also flags negative reviews before they hit factory surveys, giving you time to resolve issues privately."
    },
    {
        question: "What about our OEM lead programs (Cars.com, AutoTrader, Edmunds)?",
        answer: "Every lead from OEM programs and third-party providers is engaged instantly via SMS. Speed-to-Lead ensures you're the first dealership to respond—84% of buyers go with whoever contacts them first."
    },
    {
        question: "How quickly can we go live across multiple rooftops?",
        answer: "Most franchise dealers are fully operational within 5-7 business days per location. For multi-rooftop deployments, we can run parallel implementations. Your dedicated Success Manager coordinates training and launch across all stores."
    },
    {
        question: "What ROI can we expect?",
        answer: "Franchise dealers typically see a 20-30% boost in monthly appointments within the first 14 days. Lead Loss Mitigation recovers 8-10% of dormant leads—that's revenue from marketing you've already paid for, without increasing ad spend."
    }
];

// Blog/Insights Data
const articles = [
    {
        title: "How AI Protects Your CSI Scores",
        excerpt: "Understanding the connection between response time, customer satisfaction, and OEM performance bonuses. Learn how automation keeps your scores high.",
        link: "/blog/ai-csi-protection",
        category: "Compliance",
        date: "Dec 20, 2024"
    },
    {
        title: "OEM Lead Program Optimization",
        excerpt: "Maximize your return from Cars.com, AutoTrader, and manufacturer lead programs with instant AI-powered engagement that beats the competition.",
        link: "/blog/oem-lead-optimization",
        category: "Strategy",
        date: "Dec 15, 2024"
    },
    {
        title: "Reducing BDC Turnover with AI",
        excerpt: "With 80% annual turnover in BDC roles, AI automation provides stable, consistent customer engagement while reducing hiring pressure.",
        link: "/blog/bdc-turnover-reduction",
        category: "Operations",
        date: "Dec 10, 2024"
    }
];

// Solutions for franchise dealers
const solutions = [
    {
        icon: Zap,
        title: "Speed-to-Lead",
        desc: "Every OEM program lead, third-party inquiry, and website form is engaged via SMS in under 90 seconds. 24/7/365. Beat the competition to every customer.",
        link: "/speed-to-lead",
        cta: "See How It Works"
    },
    {
        icon: RefreshCw,
        title: "Lead Loss Mitigation",
        desc: "Re-engage dormant leads from your CRM with personalized AI conversations. Recover 8-10% of 'dead' prospects—revenue from marketing you've already paid for.",
        link: "/lead-loss-mitigation",
        cta: "Recover Lost Revenue"
    },
    {
        icon: Phone,
        title: "Service Drive Voice AI",
        desc: "Never miss a service call. AI answers every inbound call, routes correctly, or books appointments instantly. Protect your fixed ops revenue.",
        link: "/service-drive",
        cta: "Automate Service Calls"
    },
    {
        icon: Star,
        title: "Reputation Management",
        desc: "Flag negative reviews before factory surveys. AI responds to all reviews instantly, protecting your CSI scores and OEM bonuses.",
        link: "/reputation-management",
        cta: "Protect Your CSI"
    }
];

export default function FranchisePage() {
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

    // FAQ state
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black overflow-x-hidden">
            {/* JSON-LD Structured Data for AEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "AutoMaster for Franchise Dealerships",
                        "operatingSystem": "Web-based",
                        "applicationCategory": "BusinessApplication",
                        "description": "OEM-compliant automotive automation suite designed for franchise dealerships to meet response mandates and protect CSI scores.",
                        "offers": {
                            "@type": "Offer",
                            "price": "Contact for pricing",
                            "priceCurrency": "USD"
                        }
                    })
                }}
            />
            <Navigation />

            {/* 1. HERO SECTION */}
            <motion.section
                ref={heroRef}
                style={{ opacity: heroOpacity, scale: heroScale }}
                onMouseMove={handleMouseMove}
                className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center"
            >
                {/* Animated Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#050505]" />
                    <motion.div
                        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"
                        style={{ x: followX, y: followY }}
                    />
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.08, 0.05] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 left-1/3 w-[800px] h-[800px] bg-[#FF7404] rounded-full blur-[150px] pointer-events-none"
                    />
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
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
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md"
                            >
                                <Building2 className="w-3 h-3 text-[#FF7404]" />
                                For Franchise Dealers
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1] lg:leading-[0.95]"
                            >
                                OEM Compliant. <br />
                                <motion.span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]"
                                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                    style={{ backgroundSize: "200% 200%" }}
                                >
                                    Performance Driven.
                                </motion.span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-xl text-zinc-400 leading-relaxed max-w-xl mb-10"
                            >
                                Meet manufacturer response requirements effortlessly. Protect CSI scores, secure bonuses, and outperform competing dealerships—all while your BDC focuses on closing, not chasing.
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
                                        Schedule Consultation
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.div>
                                </Link>
                                <Link href="/book-demo">
                                    <motion.div
                                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 cursor-pointer"
                                    >
                                        Request a Demo
                                    </motion.div>
                                </Link>
                            </motion.div>

                            {/* Trust Badges */}
                            <motion.div
                                variants={itemVariants}
                                className="flex items-center gap-6 mt-12 pt-12 border-t border-white/10"
                            >
                                <div className="text-white/30 text-xs uppercase tracking-widest font-bold">Trusted By</div>
                                <div className="flex items-center gap-6">
                                    {['Toyota of Dallas', 'Honda West', 'Premier Ford'].map((name, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1 + i * 0.2 }}
                                            whileHover={{ color: "#fff" }}
                                            className="text-white/60 font-medium text-sm cursor-default"
                                        >
                                            {name}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Visual Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            style={{
                                rotateX: useTransform(followY, [-20, 20], [5, -5]),
                                rotateY: useTransform(followX, [-20, 20], [-5, 5]),
                            }}
                            className="relative hidden lg:block"
                        >
                            <div className="absolute inset-0 bg-[#FF7404]/10 blur-[80px] rounded-full pointer-events-none" />
                            <div className="relative bg-[#0F0F0F] border border-white/10 rounded-2xl p-8">
                                {/* OEM Compliance Dashboard */}
                                <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-6">
                                    <motion.div
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    >
                                        <Award className="w-10 h-10 text-[#FF7404]" />
                                    </motion.div>
                                    <div>
                                        <div className="text-white font-bold text-lg">Platinum Performance Status</div>
                                        <div className="text-zinc-500 text-sm">Achieved by 85% of our Franchise Clients</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { value: '98.5%', label: 'Response Rate', color: 'text-green-400' },
                                        { value: '4.9/5', label: 'Customer Sentiment', color: 'text-[#FF7404]' },
                                        { value: '<90s', label: 'Avg Response Time', color: 'text-[#FF7404]' },
                                        { value: '+22%', label: 'CSI Improvement', color: 'text-purple-400' },
                                    ].map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.8 + i * 0.1 }}
                                            className="bg-white/5 rounded-xl p-4"
                                        >
                                            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                                            <div className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* 2. STATS SECTION */}
            <section className="py-20 border-y border-white/5 bg-white/[0.02]">
                <div className="container px-4 mx-auto">
                    <motion.div
                        className="grid md:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {[
                            { label: 'OEM Compliance', value: '100%', desc: 'Brand guideline adherence' },
                            { label: 'CSI Impact', value: '+22%', desc: 'Avg customer satisfaction lift' },
                            { label: 'Response Time', value: '<90s', desc: 'Every lead, every time' },
                            { label: 'Lead Recovery', value: '8-10%', desc: 'Dormant leads reactivated' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                className="text-center group"
                            >
                                <motion.div
                                    className="text-4xl lg:text-5xl font-bold text-white mb-2"
                                    whileHover={{ color: "#FF7404" }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-[#FF7404] font-bold text-sm uppercase tracking-wider mb-2">{stat.label}</div>
                                <div className="text-zinc-500 text-sm">{stat.desc}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 3. THE FRANCHISE CHALLENGE */}
            <section className="py-24 bg-[#020202] relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px]" />

                <div className="container px-4 mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                The pressure to perform <br />
                                <span className="text-[#FF7404]">never stops.</span>
                            </h2>

                            <motion.div
                                className="space-y-6 text-lg text-zinc-400 leading-relaxed"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.p variants={itemVariants}>
                                    Franchise dealers face a unique set of pressures: OEM response time mandates, CSI score targets tied to bonuses, and the constant threat of losing allocation if you miss metrics.
                                </motion.p>
                                <motion.p variants={itemVariants}>
                                    Meanwhile, your BDC is dealing with 80% annual turnover, inconsistent training, and more leads than they can humanly handle from OEM programs, third-party sites, and in-store traffic.
                                </motion.p>
                                <motion.p variants={itemVariants}>
                                    <strong className="text-white">The result:</strong> Missed follow-ups that don't just cost sales—they hurt your CSI, your bonuses, and your standing with the manufacturer.
                                </motion.p>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="space-y-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {[
                                { icon: Clock, title: 'OEM Response Mandates', desc: 'Miss the 15-minute response window and you risk losing bonuses, allocation, and manufacturer favor.', color: 'text-red-500', bg: 'bg-red-500/10' },
                                { icon: TrendingUp, title: 'CSI Score Pressure', desc: 'Every slow response chips away at your customer satisfaction scores—and the bonuses tied to them.', color: 'text-[#FF7404]', bg: 'bg-[#FF7404]/10' },
                                { icon: Users, title: 'BDC Turnover Crisis', desc: '80% annual turnover means constantly training new agents who can\'t keep up with lead volume.', color: 'text-[#FF7404]', bg: 'bg-[#FF7404]/10' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 relative overflow-hidden group"
                                >
                                    <motion.div
                                        className={`absolute top-0 right-0 w-32 h-32 ${item.bg} rounded-full blur-2xl`}
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    />
                                    <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonial Feature */}
            <section className="py-24 bg-[#020202]">
                <div className="container px-4 mx-auto">
                    <div className="max-w-[350px] mx-auto">
                        <div className="relative aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl group">
                            <iframe
                                src="https://www.youtube.com/embed/E1o2JTHlR7o?modestbranding=1&rel=0"
                                className="absolute inset-0 w-full h-full"
                                title="Jo DaBrowski Testimonial"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE ART OF THE COMPLIANT CLOSE - Interactive Conversation Visual */}
            <section className="py-24 bg-[#020202] relative border-t border-white/5">
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
                                        <div className="font-bold">2:14 PM</div>
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
                                                <div className="text-white font-bold text-sm">Concierge AI</div>
                                                <div className="text-[10px] text-green-500/80 flex items-center gap-1 font-medium">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)] animate-pulse" />
                                                    OEM Compliance Mode
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Messages Container */}
                                    <div className="h-[calc(100%-120px)] overflow-hidden px-2 relative">
                                        <AnimatePresence>
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 18.5, duration: 0.5, type: 'spring' }}
                                                className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
                                            >
                                                <div className="px-6 py-4 bg-green-500 rounded-2xl shadow-[0_20px_40px_rgba(34,197,94,0.3)] flex flex-col items-center gap-2 border border-white/20">
                                                    <CheckCircle2 className="w-8 h-8 text-white" />
                                                    <div className="text-white font-black text-xs uppercase tracking-widest text-center leading-tight">
                                                        Response Logged<br />
                                                        <span className="opacity-70 text-[10px]">Appt Set: Today 4:15 PM</span>
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
                                                { role: 'ai', text: "Hey David! Sarah from the dealership here. I just saw your inquiry on the 2024 Honda Pilot. Since you're looking for a specific trim, are you thinking of trading in your current vehicle?", delay: 1 },
                                                { role: 'user', text: "Yes, I have an older Odyssey. Is the Pilot available today?", delay: 3.5 },
                                                { role: 'ai', text: "It is! I'm reserved it for a VIP viewing. If I can get our appraiser to look at your Odyssey at 4:15 PM, would that work for you?", delay: 6 },
                                                { role: 'user', text: "That's a bit early. Maybe 5 PM?", delay: 8.5 },
                                                { role: 'ai', text: "No problem! I've moved the slot to 5:00 PM. I'll have the Pilot pulled to the front. To save you time, want to upload your trade photos now so we have numbers ready?", delay: 11 },
                                                { role: 'user', text: "Sure, send the link.", delay: 13.5 },
                                                { role: 'ai', text: "Sent! Check your messages for the secure link. See you at 5:00 PM! 🚙", delay: 15.5 },
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
                                    The "Instant Response" <br />
                                    <span className="text-[#FF7404]">Standard.</span>
                                </h2>
                                <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                                    Stop worrying about OEM 15-minute response windows. AutoMaster engages every lead in under 90 seconds, securing the first appointment and protecting your CSI.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { title: "OEM Verified Messaging", desc: "Maintain 100% brand compliance with manufacturer-approved templates." },
                                        { title: "CSI Score Protection", desc: "Never lose points for slow follow-ups. Professional, instant engagement on every lead." },
                                        { title: "24/7 BDC Support", desc: "Your BDC focus on the 'show', our AI handles the 'flow' of lead intake." }
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

            {/* 5. SOLUTIONS */}
            <section className="py-24 bg-[#050505] relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />

                <div className="container px-4 mx-auto relative z-10">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Enterprise-Grade Tools. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 via-[#C0C0C0] to-white/60">Franchise Results.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg">
                            AutoMaster combines Lead Loss Mitigation, Speed-to-Lead, Reputation Management, and dedicated Success Management to optimize every metric that matters.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {solutions.map((sol, i) => (
                            <motion.div key={i} variants={itemVariants}>
                                <Link
                                    href={sol.link}
                                    className="group block h-full p-8 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(255,116,4,0.3)]"
                                >
                                    <motion.div
                                        className="w-12 h-12 rounded-xl bg-[#FF7404]/10 border border-[#FF7404]/20 flex items-center justify-center mb-6"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                        <sol.icon className="w-6 h-6 text-[#FF7404]" />
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF7404] transition-colors">{sol.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed mb-6">{sol.desc}</p>
                                    <div className="inline-flex items-center gap-2 text-sm font-bold text-zinc-400 group-hover:text-[#FF7404] group-hover:gap-3 transition-all whitespace-nowrap">
                                        {sol.cta}
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 5. CALCULATOR */}
            <DealerCalculator />

            {/* 6. FAQ */}
            <section className="py-24 bg-[#050505] relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px]" />

                <div className="container px-4 mx-auto relative z-10">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FF7404]/10 border border-[#FF7404]/20 mb-6"
                        >
                            <HelpCircle className="w-8 h-8 text-[#FF7404]" />
                        </motion.div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Questions from <br />
                            <span className="text-[#FF7404]">Franchise Leaders.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg">
                            Everything you need to know about protecting your OEM standing and maximizing performance.
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

            {/* 7. INSIGHTS/BLOG */}
            <section className="py-24 bg-[#020202] relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px]" />

                <div className="container px-4 mx-auto relative z-10">
                    <motion.div
                        className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#FF7404]/10 border border-[#FF7404]/20 mb-6"
                            >
                                <Lightbulb className="w-6 h-6 text-[#FF7404]" />
                            </motion.div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                                Franchise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]">Insights</span>
                            </h2>
                            <p className="text-zinc-400 text-lg max-w-xl">
                                Strategies for protecting your OEM standing and maximizing dealership performance.
                            </p>
                        </div>
                        <Link href="/blog" className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                            View all articles
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
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
                                <Link
                                    href={article.link}
                                    className="group block h-full rounded-2xl bg-[#080808] border border-white/5 hover:border-white/20 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_-20px_rgba(255,116,4,0.15)]"
                                >
                                    <div className="h-2 bg-gradient-to-r from-[#FF7404] to-[#FF9040]" />
                                    <div className="p-8">
                                        <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4 font-mono">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {article.date}
                                            </span>
                                            <span className="px-2 py-0.5 rounded-full bg-[#FF7404]/10 text-[#FF7404] font-bold">
                                                {article.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF7404] transition-colors line-clamp-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all">
                                            <BookOpen className="w-4 h-4 text-[#FF7404]" />
                                            Read Article
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 8. CTA */}
            <section className="py-32 bg-[#020202] relative overflow-hidden">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF7404] rounded-full blur-[150px] pointer-events-none"
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />

                <div className="container px-4 mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 text-center overflow-hidden relative"
                    >
                        <motion.div
                            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF7404] to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 text-[#FF7404] text-xs font-bold uppercase tracking-widest mb-8"
                        >
                            <ShieldCheck className="w-4 h-4" />
                            OEM Certified Integration
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Protect Your Standing. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]">
                                Maximize Your Bonuses.
                            </span>
                        </h2>

                        <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-12">
                            Join the franchise dealers already hitting every OEM metric. Same tools, better results, live in days.
                        </p>

                        <Link href="/book-demo">
                            <motion.div
                                whileHover={{ scale: 1.05, boxShadow: "0 0 50px -10px rgba(255,116,4,0.6)" }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 px-10 py-5 bg-[#FF7404] text-black font-bold text-lg rounded-xl cursor-pointer shadow-[0_0_40px_-10px_rgba(255,116,4,0.5)]"
                            >
                                Schedule Consultation
                                <ArrowRight className="w-5 h-5" />
                            </motion.div>
                        </Link>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-white/5"
                        >
                            {["OEM Compliant Messaging", "Certified Integrations", "Live in 5-7 Days"].map((text, i) => (
                                <div key={i} className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-[#FF7404]" />
                                    {text}
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
