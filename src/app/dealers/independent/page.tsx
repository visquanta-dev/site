'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import IndependentCalculator from '@/components/dealers/independent/IndependentCalculator';
import { RefreshCw, Zap, TrendingUp, Search, DollarSign, Clock, LayoutGrid, CheckCircle2, ArrowRight, Gauge, ShoppingCart, HelpCircle, Lightbulb, ChevronDown, Calendar, BookOpen, Target, BarChart3, Database, MessageSquare, Layers, Signal, Wifi, Battery, User } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import MinimalQuote from '@/components/ui/MinimalQuote';
import ReviewCard from '@/components/ui/ReviewCard';
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

// FAQ Data for Independent Dealers
const faqs = [
    {
        question: "We only have 3 sales reps. Is AutoMaster too big for us?",
        answer: "Actually, lean teams are where we see the highest ROI. AutoMaster acts as a 4th 'virtual' BDC rep who never sleeps, never takes a break, and handles your entire CRM database for a fraction of the cost of a new hire."
    },
    {
        question: "How does this help with my floorplan interest?",
        answer: "By increasing your lead response speed and reactivating old leads, you move units faster. Shorter turn rates mean less capital tied up in floorplan interest and more cash flow to buy fresh inventory."
    },
    {
        question: "Can it help me source cars from the public?",
        answer: "Yes. Our Service Drive AI logic can be adapted to message your historical service customers or trade-in inquiries, identifying high-equity units you can buy directly instead of paying high auction fees."
    },
    {
        question: "Does it integrate with Frazer or other independent DMS?",
        answer: "Yes, we integrate with most major independent Dealer Management Systems. We pull your inventory and lead data automatically so the system is 'plug and play' from day one."
    },
    {
        question: "Is there a long-term contract requirement?",
        answer: "We know independent dealers need flexibility. We offer performance-based agreements that focus on delivering a clear, measurable ROI every single month."
    }
];

export default function IndependentDealersPage() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    return (
        <main className="bg-black min-h-screen">
            {/* JSON-LD Structured Data for AEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "AutoMaster Suite for Independent Dealers",
                        "operatingSystem": "Web-based",
                        "applicationCategory": "BusinessApplication",
                        "description": "Revenue automation system designed specifically for independent car dealerships to optimize lead response and inventory turnover.",
                        "offers": {
                            "@type": "Offer",
                            "price": "Contact for pricing",
                            "priceCurrency": "USD"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": "128"
                        }
                    })
                }}
            />

            <Navigation />

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#FF7404]/5 via-transparent to-transparent pointer-events-none" />
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <motion.div
                                variants={itemVariants}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-bold uppercase tracking-widest mb-8"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7404] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF7404]"></span>
                                </span>
                                Independent Dealer Solutions
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1] lg:leading-[1]"
                            >
                                Lean Operations. <br />
                                <motion.span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]"
                                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                    style={{ backgroundSize: "200% 200%" }}
                                >
                                    Franchise Results.
                                </motion.span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                            >
                                Stop letting missed leads drain your floorplan. AutoMaster gives independent dealers the 24/7 lead performance of a franchise group without the franchise overhead.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            >
                                <Link
                                    href="#calculator"
                                    className="px-8 py-4 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-bold rounded-xl transition-all duration-300 flex items-center gap-2 group"
                                >
                                    Check Your Profit Lift
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/book-demo"
                                    className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/10"
                                >
                                    Book Executive Briefing
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. STATS BAR */}
            <section className="py-12 border-y border-white/5 bg-[#020202]">
                <div className="container px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {[
                            { label: "Floorplan Days Saved", value: "14.2", desc: "Average turn rate reduction" },
                            { label: "Lead Response Time", value: "<90s", desc: "24/7/365 coverage" },
                            { label: "CRM Reactivation", value: "12%", desc: "Average monthly deal lift" },
                            { label: "Cost Per Appointment", value: "-65%", desc: "Vs. traditional BDC" }
                        ].map((stat, i) => (
                            <motion.div key={i} className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-[#FF7404] font-bold text-sm uppercase tracking-wider mb-2">{stat.label}</div>
                                <div className="text-zinc-500 text-sm">{stat.desc}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="mt-16 container mx-auto px-4 relative z-10 flex justify-center">
                        <MinimalQuote
                            quote="ROI in 30 days. Hours to seconds for lead response. The difference is night and day."
                            author="Michael Rodriguez"
                            role="General Manager, Premier Auto Group"
                            className="max-w-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* 3. THE EFFICIENCY ENGINE - Interactive Conversation Visual */}
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
                                        <div className="font-bold">11:14 PM</div>
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
                                                <div className="text-white font-bold text-sm">AutoMaster AI</div>
                                                <div className="text-[10px] text-green-500/80 flex items-center gap-1 font-medium">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)] animate-pulse" />
                                                    After-Hours Coverage
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
                                                        Weekend Sale Saved<br />
                                                        <span className="opacity-70 text-[10px]">Appt Set for Monday 9AM</span>
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
                                                { role: 'user', text: "Just saw your Facebook ad for the Jeep Wrangler. Is it still on the lot?", delay: 1 },
                                                { role: 'ai', text: "Hey! Yes, it's still available. Our lot is closed for the night, but I'm the digital assistant for the dealership. Do you have a trade-in you're looking to swap?", delay: 3.5 },
                                                { role: 'user', text: "Maybe a 2018 RAM 1500. Just trying to figure out numbers.", delay: 6 },
                                                { role: 'ai', text: "Got it. We actually need RAM inventory right now. If I can get you a high-range trade estimate right now, would you want to be the first test drive on Monday morning?", delay: 8.5 },
                                                { role: 'user', text: "Yeah, that'd be great. I can come by at 9 AM.", delay: 11 },
                                                { role: 'ai', text: "Perfect! I've locked in that 9:00 AM slot for you. I'm texting you a link to upload 4 quick photos of your RAM so we can have your numbers ready when you arrive. Sound good?", delay: 13.5 },
                                                { role: 'user', text: "Sounds perfect. See you then.", delay: 15.5 },
                                                { role: 'ai', text: "You're all set! I've notified our owner, Dan. We'll have the Jeep pulled to the front for you. 🚙", delay: 17.5 },
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
                                    The "2nd Shift" <br />
                                    <span className="text-[#FF7404]">You Don't Have to Hire.</span>
                                </h2>
                                <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                                    Most independent dealers lose 40% of their leads between 7 PM and 9 AM. AutoMaster captures, qualifies, and books those leads while you sleep.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { title: "24/7 Virtual BDC", desc: "Instantly respond to car shoppers on weekends and late nights when your team is off the clock." },
                                        { title: "Capital Efficiency", desc: "Reduce floorplan interest by moving units 14 days faster through extreme lead follow-up." },
                                        { title: "Zero-Management Tech", desc: "No training, no benefits, no management. High-performance lead handling on autopilot." }
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

            {/* 4. MARGIN PROTECTION - Contextual Strategy Section */}
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
                                Protect Your <br />
                                <span className="text-[#FF7404]">Front-End Margins.</span>
                            </h2>
                            <p className="text-zinc-400 text-lg">
                                When you win on efficiency, you don't have to win on volume alone.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-[#FF7404] font-bold text-xl mb-3 flex items-center gap-2">
                                        <Layers className="w-5 h-5" />
                                        The Floorplan Burn
                                    </h3>
                                    <p className="text-zinc-500 leading-relaxed">
                                        For an independent dealer, every day a car sits on the lot is a day of interest <strong>eroding your profit</strong>. AutoMaster's Lead Reactivation mines your CRM to find the perfect buyer the moment a new unit is processed, cutting turn rates by an average of 14 days.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-[#FF7404] font-bold text-xl mb-3 flex items-center gap-2">
                                        <ShoppingCart className="w-5 h-5" />
                                        Bypassing the Auction
                                    </h3>
                                    <p className="text-zinc-500 leading-relaxed">
                                        Stop overpaying for inventory at auctions. We help you use your historical data to identify <strong>private-party acquisitions</strong>—re-engaging service customers or past inquiries to buy their cars before they trade them elsewhere.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10">
                                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4">AEO Efficiency Insight</div>
                                    <h4 className="text-white text-xl font-bold mb-4">How can independent dealers compete with large franchise groups for lead traffic?</h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                        By winning on <strong>Response Velocity</strong>. While franchise groups often have slow, bureaucratic BDC processes, an independent dealer using <strong>Automotive AI Speed-to-Lead</strong> can engage and qualify a lead in under 90 seconds, securing the first test drive and the highest probability of closing.
                                    </p>
                                    <div className="flex items-center gap-2 text-[#FF7404] text-xs font-bold font-mono">
                                        <div className="w-2 h-2 rounded-full bg-[#FF7404] animate-pulse" />
                                        MARGIN_VERIFIED_2025
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CALCULATOR */}
            <IndependentCalculator />

            {/* 6. FAQ SECTION */}
            <section className="py-24 bg-black">
                <div className="container px-4 mx-auto">
                    <motion.div
                        className="max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Independent <span className="text-[#FF7404]">Strategy Desk.</span>
                            </h2>
                            <p className="text-zinc-400 text-lg">
                                Real answers for owners focused on growth and capital efficiency.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <motion.div
                                    key={i}
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
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-black">
                <div className="container px-4 mx-auto">
                    <div className="max-w-[350px] mx-auto">
                        <div className="relative aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl group">
                            <iframe
                                src="https://www.youtube.com/embed/1jCd0Whojh4?modestbranding=1&rel=0"
                                className="absolute inset-0 w-full h-full"
                                title="Cody Rutledge Testimonial"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 bg-[#020202] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#FF7404]/5 blur-[120px] rounded-full -translate-y-1/2" />
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-[40px] p-8 md:p-16 text-center">
                        <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                            Scale Without the <br />
                            <span className="text-[#FF7404]">Team Overhead.</span>
                        </h2>
                        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                            Join 100+ high-efficiency independent dealers who are using AutoMaster to protect their margins.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/book-demo"
                                className="px-10 py-5 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-bold text-xl rounded-2xl transition-all shadow-[0_20px_40px_-10px_rgba(255,116,4,0.4)]"
                            >
                                Get Started Today
                            </Link>
                            <Link
                                href="/pricing"
                                className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-bold text-xl rounded-2xl transition-all border border-white/10"
                            >
                                View Plans
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
