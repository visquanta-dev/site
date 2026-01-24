'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DealerInsights from '@/components/dealers/shared/DealerInsights';

import ROICalculator from '@/components/dealers/shared/ROICalculator';
import { RefreshCw, Zap, TrendingUp, Search, DollarSign, Clock, LayoutGrid, CheckCircle2, ArrowRight, Gauge, ShoppingCart, HelpCircle, Lightbulb, ChevronDown, Calendar, BookOpen, Target, BarChart3, Database, MessageSquare, Layers, Signal, Wifi, Battery, User, Star, Timer, PhoneIncoming, Play, ShieldCheck, Globe } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { RequestDemoButton } from '@/components/CalendlyModal';
import Image from 'next/image';
import { CapabilityTabs, CapabilityFeatureDisplay } from '@/components';
import PreOwnedHeroDashboard from '@/components/dealers/pre-owned/upgrades/PreOwnedHeroDashboard';
import HolographicCards from '@/components/dealers/franchise/upgrades/HolographicCards';
import PreOwnedStatsGrid from '@/components/dealers/pre-owned/upgrades/PreOwnedStatsGrid';

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
        answer: "The AutoMaster Suite maps your current used car inventory against your entire historical lead database. It identifies 'Dead' leads who previously inquired about similar models and re-engages them the moment a new unit hits the lot or a price is adjusted, essentially finding a buyer before you spend a dime on advertising."
    },
    {
        question: "Can The AutoMaster Suite help us compete with Carvana and other national retailers?",
        answer: "Yes. National retailers win on speed and follow-up. The AutoMaster Suite gives you that same enterprise-level speed by responding to every lead in under 60 seconds, 24/7/365. You capture the shopper while they are still on your VDP, before they move to the next site."
    },
    {
        question: "How does The AutoMaster Suite's Service Drive AI help me get Pre-Owned stock?",
        answer: "Instead of buying blind at auctions, the Service Drive AI identifies high-equity customers currently in your service lane. It pre-qualifies their trade-in and presents a 'buy-back' offer automatically, allowing you to acquire the highest-margin used car inventory: the ones you already have the service history for."
    },
    {
        question: "Do our sales reps have to learn a new system to handle these leads?",
        answer: "No. The AutoMaster Suite sits in the background. It engages, qualifies, and sets the appointment. Once a used car shopper is ready to talk numbers or book a test drive, the 'Clean' lead is handed over to your team in your existing CRM. Your reps only talk to people who want to buy."
    },
    {
        question: "What is the ROI on 3rd party portal leads (Autotrader, etc.)?",
        answer: "3rd party leads are notoriously difficult to convert because of high cross-shopping. By using Speed-to-Lead, our dealers see a 2x-3x increase in appointment set rates because they are always the first to respond with a personalized, helpful engagement."
    }
];

// Blog/Insights Data for Pre-Owned will be fetched dynamically

// --- Shared Components for Phone ---

const TypingIndicator = () => (
    <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="flex justify-end mb-2"
    >
        <div className="bg-[#ff7404] px-4 py-3 rounded-2xl rounded-tr-sm flex items-center gap-1.5 w-fit">
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0 }}
                className="w-1.5 h-1.5 bg-white rounded-full"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                className="w-1.5 h-1.5 bg-white rounded-full"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                className="w-1.5 h-1.5 bg-white rounded-full"
            />
        </div>
    </motion.div>
);

const ChatBubble = ({ message }: { message: any }) => {
    // System / Tags
    if (message.type === 'source_tag') {
        const content = message.content;

        if (typeof content === 'string') {
            return (
                <div className="flex justify-center my-6">
                    <span className="text-[10px] font-medium text-gray-500 bg-[#1A1A1A] px-3 py-1.5 rounded-full border border-white/5 shadow-sm">
                        {content}
                    </span>
                </div>
            );
        }

        return (
            <div className="flex justify-center my-6 w-full px-4">
                {content.title === 'LEAD SOURCE: CARGURUS' ? (
                    <div className="w-full bg-[#1A1A1A]/80 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3 border border-white/10 shadow-lg">
                        <div className="h-8 px-2 bg-white/90 rounded flex items-center justify-center border border-white/10">
                            <Image
                                src="/assets/cargurus-logo.png"
                                alt="CarGurus"
                                width={80}
                                height={24}
                                className="object-contain h-4 w-auto"
                            />
                        </div>
                        <div className="text-left">
                            <div className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">New Lead</div>
                            <div className="text-[10px] text-gray-500">Arrived: Just now</div>
                        </div>
                    </div>
                ) : (content.title === 'Service Appointment' || content.title === 'Appointment Booked') ? (
                    <div className="w-full bg-[#111] backdrop-blur-xl rounded-2xl p-5 flex flex-col gap-4 border border-white/10 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-3xl rounded-full pointer-events-none" />
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-10 h-10 bg-black/50 text-green-500 rounded-xl flex items-center justify-center border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                                <Timer className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-[11px] font-bold text-white tracking-[0.2em] uppercase mb-0.5">Appointment Booked</div>
                                {!content.appointments && <div className="text-[11px] text-white/40 font-mono tracking-wide">{content.subtitle}</div>}
                            </div>
                        </div>
                        {content.appointments && (
                            <div className="flex flex-col gap-2 relative z-10">
                                {content.appointments.map((appt: string, i: number) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * i }}
                                        className="flex items-center gap-3 text-xs text-white/90 font-medium bg-white/[0.03] hover:bg-white/[0.06] px-4 py-3.5 rounded-xl border border-white/5 hover:border-green-500/30 transition-all duration-300 group cursor-default"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] group-hover:scale-125 transition-transform duration-300" />
                                        <span className="font-mono tracking-wide">{appt}</span>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (content.title === 'Inbound Call') ? (
                    <div className="w-full bg-[#1A1A1A]/90 backdrop-blur rounded-xl p-3 flex items-center gap-3 border border-white/10 shadow-lg">
                        <div className="w-8 h-8 bg-blue-500/20 text-blue-500 rounded flex items-center justify-center border border-blue-500/20">
                            <PhoneIncoming className="w-4 h-4 animate-pulse" />
                        </div>
                        <div className="text-left">
                            <div className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Inbound Call Answered</div>
                            <div className="text-[10px] text-gray-500 font-mono">{content.subtitle}</div>
                        </div>
                    </div>
                ) : (content.title === 'Moved from Website') ? (
                    <div className="relative overflow-hidden bg-gradient-to-r from-[#ff7404]/20 to-[#ff7404]/5 border border-[#ff7404]/50 text-[#ff7404] px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(255,116,4,0.3)] backdrop-blur-md">
                        <div className="absolute inset-0 bg-[#ff7404]/10 blur-md" />
                        <Globe className="w-3.5 h-3.5 relative z-10 animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-widest relative z-10">Moved from Website</span>
                    </div>
                ) : (content.title === 'Purchase Verified' || content.title === 'CSI Pulse Check') ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`group relative flex items-center gap-2.5 px-4 py-2 rounded-full backdrop-blur-md overflow-hidden ${content.title === 'CSI Pulse Check'
                            ? 'bg-blue-500/10 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)]'
                            : 'bg-emerald-500/10 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]'}`}
                    >
                        <motion.div
                            animate={{ x: ['-200%', '200%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className={`absolute inset-0 w-1/2 h-full -skew-x-12 pointer-events-none ${content.title === 'CSI Pulse Check'
                                ? 'bg-gradient-to-r from-transparent via-blue-400/10 to-transparent'
                                : 'bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent'}`}
                        />
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center relative z-10 shadow-lg ${content.title === 'CSI Pulse Check'
                            ? 'bg-blue-500 shadow-blue-500/50'
                            : 'bg-emerald-500 shadow-emerald-500/50'}`}>
                            {content.title === 'CSI Pulse Check' ? (
                                <ShieldCheck className="w-2.5 h-2.5 text-white" />
                            ) : (
                                <svg className="w-2.5 h-2.5 text-[#050505] fill-current" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            )}
                        </div>
                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] relative z-10 ${content.title === 'CSI Pulse Check' ? 'text-blue-400' : 'text-emerald-400'}`}>
                            {content.title}
                        </span>
                    </motion.div>
                ) : (
                    <div className="bg-[#1A1A1A]/90 backdrop-blur text-gray-400 border border-white/5 px-3 py-1.5 rounded-full text-[11px] font-medium shadow-sm">
                        {content.title}
                    </div>
                )}
            </div>
        );
    }

    // Review Card
    if (message.type === 'review') {
        return (
            <div className="flex justify-end mb-4">
                <div className="bg-[#1A1A1A] rounded-2xl p-4 w-[240px] border border-white/10 shadow-xl overflow-hidden relative group">
                    <div className="flex justify-center mb-4">
                        <Image
                            src="/assets/google-reviews.png"
                            alt="Google Reviews"
                            width={160}
                            height={50}
                            className="object-contain"
                        />
                    </div>
                    <button className="w-full bg-[#ff7404] text-white text-xs font-bold py-2.5 rounded-lg shadow-lg">
                        Leave a Review
                    </button>
                </div>
            </div>
        );
    }

    // Audio Card
    if (message.type === 'audio') {
        return (
            <div className="flex justify-center mb-8 w-full px-4 border-t border-b border-white/5 py-8">
                <div className="w-full bg-gradient-to-br from-[#1a1a1a] to-black rounded-3xl p-6 border border-white/10 shadow-2xl relative overflow-hidden group cursor-pointer">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff7404]/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#ff7404]/20 transition-all duration-500" />
                    <div className="relative z-10 flex flex-col items-center text-center gap-6">
                        <div className="relative">
                            <div className="w-20 h-20 bg-[#1a1a1a] rounded-2xl flex items-center justify-center border border-white/10 shadow-xl group-hover:border-[#ff7404]/30 transition-colors">
                                <div className="flex items-center gap-1">
                                    <div className="w-1.5 h-6 bg-[#ff7404] rounded-full animate-[bounce_1s_infinite]" />
                                    <div className="w-1.5 h-10 bg-[#ff7404] rounded-full animate-[bounce_1.2s_infinite]" />
                                    <div className="w-1.5 h-6 bg-[#ff7404] rounded-full animate-[bounce_0.8s_infinite]" />
                                </div>
                            </div>
                            <div className="absolute -top-2 -right-4 bg-[#ff7404] text-black text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg animate-pulse">
                                LIVE AUDIO
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-white tracking-tight">Hear It In Action</h3>
                            <p className="text-sm text-gray-400 max-w-[260px] mx-auto leading-relaxed">
                                Listen to how our AI handles a real Service Drive appointment booking.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] group-hover:scale-105 transition-all">
                            <Play className="w-4 h-4 fill-black" />
                            <span>Play Service Demo</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const isAgent = message.sender === 'agent';

    return (
        <div className={`flex w-full mb-2 ${isAgent ? 'justify-end' : 'justify-start'}`}>
            <div
                className={`max-w-[85%] px-5 py-3 text-[14px] leading-snug relative tracking-normal font-medium shadow-md antialiased
        ${isAgent
                        ? 'bg-[#ff7404] text-white rounded-2xl rounded-tr-sm shadow-orange-900/10'
                        : 'bg-[#262626] text-gray-100 rounded-2xl rounded-tl-sm border border-white/5'
                    }`}
            >
                {message.content}
            </div>
        </div>
    );
};

// Types
interface Feature {
    id: string;
    tab: string;
    title: string;
    highlight: string;
    description: string;
    bullets: { title: string; desc: string; }[];
    header: { name: string; sub: string; icon: any; };
    avatarInitials: string;
    avatarImage?: string;
    messages: any[];
}

// Features Data for Pre-Owned Dealers (Strictly Preserving Text)
const featuresData: Feature[] = [
    {
        id: 'reactivation',
        tab: 'Lead Reactivation',
        title: 'The Art of the',
        highlight: "Pre-Owned Close.",
        description: "Don't wait for the customer to chase you. The AutoMaster Suite identifies \"ready-to-buy\" signals from your old leads and reaches out the moment the right unit hits your front line.",
        bullets: [
            { title: "Lead Reactivation", desc: "We mine your 'dead' CRM data and re-engage buyers with inventory that matches their exact history." },
            { title: "Trade-In Pre-Qualification", desc: "We identify potential trade units and psychological 'buy signals' before they even reach your lot." },
            { title: "Dynamic Appointment Setting", desc: "Syncs with your used car manager's schedule to ensure zero double-booking or missed test drives." }
        ],
        header: { name: "Amy (Visquanta)", sub: "Reactivating: Mike", icon: Database },
        avatarInitials: 'VQ',
        avatarImage: undefined,
        messages: [
            { id: 'msg1', sender: 'agent', content: "Hi Mike, Sarah from the dealership here. I saw you were looking at Broncos with us a few months back. We just took in a 2021 Outer Banks that matches your search perfectly. Still looking?" },
            { id: 'msg2', sender: 'user', content: "Oh hey Sarah! Yeah, I'm actually still in the market. Is it available for a test drive?" },
            { id: 'msg3', sender: 'agent', content: "It is! It hasn't even hit our website frontline yet. Are you thinking of trading in that 2017 Escape we have on file for you?" },
            { id: 'msg4', sender: 'user', content: "I was considering it, but it has pretty high miles now." },
            { id: 'msg5', sender: 'agent', content: "No problem! We're short on Escapes for our value lot. If I can get you a guaranteed trade-in range in the next 10 mins, want to stop by at 4:30 PM?" },
            { id: 'msg6', sender: 'user', content: "Yeah, that works for me. See you then." },
            { id: 'msg7', sender: 'agent', content: "Perfect! I've reserved the keys. I'm having Sarah from our floor team call you in 5 mins to confirm that trade range. See you shortly! 🚙" }
        ]
    },
    {
        id: 'speed',
        tab: 'Speed-to-Lead',
        title: 'Portal Domination',
        highlight: "Catch Them Instantly.",
        description: "Be the first to respond to Autotrader, Cars.com, and Facebook leads in under 60 seconds. We capture the buyer before they move to your competitor.",
        bullets: [
            { title: "Instant Response", desc: "Every lead from 3rd party portals is engaged in under 60 seconds, securing the first appointment." },
            { title: "Capture Scarcity", desc: "In the pre-owned market, speed is the only differentiator that matters for unique units." },
            { title: "2.5x Conv. Rate", desc: "Vastly improve your appointment set rate compared to manual BDC follow-up." }
        ],
        header: { name: "David (Inbound Lead)", sub: "2024 Silverado 1500", icon: User },
        avatarImage: undefined,
        avatarInitials: 'David',
        messages: [
            { id: 'tag1', sender: 'system', content: { title: 'LEAD SOURCE: CARGURUS', subtitle: 'Arrived: Just now' }, type: 'source_tag' },
            { id: 'msg1', sender: 'agent', content: "Hi David, VisQuanta Chevy here. Just saw your request on CarGurus. The 2024 Silverado you asked about is available." },
            { id: 'msg2', sender: 'agent', content: "Are you looking to come by today or would tomorrow work better?" },
            { id: 'msg3', sender: 'user', content: "Can I come by at 5?" },
            { id: 'msg4', sender: 'agent', content: "5:00 PM works perfectly. I will have it pulled up front for you." },
            { id: 'msg5', sender: 'agent', content: "Will you be driving yourself in or would you like directions sent over?" },
            { id: 'msg6', sender: 'user', content: "I will drive myself." },
            { id: 'msg7', sender: 'agent', content: "Perfect. I will text you the address and a quick pin now." }
        ]
    },
    {
        id: 'service',
        tab: 'Service Drive AI',
        title: 'Equity Catching',
        highlight: "Source High-Margin Units.",
        description: "The highest-margin pre-owned unit is the one sitting in your service lane. We automatically identify and engage high-equity service customers for buy-backs.",
        bullets: [
            { title: "Bypass Auctions", desc: "Acquire inventory directly from your loyalty base without high auction fees or blind bidding." },
            { title: "Trade-In Pre-Qualification", desc: "We identify potential trade units and psychological 'buy signals' before they even reach your lot." },
            { title: "Service History Known", desc: "Buy back cars you've already serviced, giving you 100% confidence in the reconditioning cost." }
        ],
        header: { name: "Mike (Service)", sub: "Inbound Call: 555-0123", icon: PhoneIncoming },
        avatarInitials: 'Incoming',
        avatarImage: undefined,
        messages: [
            { id: 'audio1', sender: 'agent', type: 'audio', content: 'audio_card' }
        ]
    },
    {
        id: 'reputation',
        tab: 'Reputation',
        title: 'Build Trust',
        highlight: "On Autopilot.",
        description: "90% of car buyers check reviews first. Ensure every review gets a professional response instantly, and catch negative feedback before it goes public.",
        bullets: [
            { title: "Instant Responses", desc: "Acknowledge every customer review instantly with brand-compliant messaging." },
            { title: "Crisis Management", desc: "Flag negative sentiment immediately for GM escalation before it hurts your rating." },
            { title: "Local SEO Boost", desc: "Active, consistent review activity improves your dealership's search rankings." }
        ],
        header: { name: "Claire", sub: "Sold: 2024 Tahoe", icon: Star },
        avatarImage: undefined,
        avatarInitials: 'Claire',
        messages: [
            { id: 'tag1', sender: 'system', content: { title: 'Purchase Verified' }, type: 'source_tag' },
            { id: 'msg1', sender: 'agent', content: "Hi Claire! Huge congrats on the new Tahoe." },
            { id: 'msg2', sender: 'agent', content: "Quick question - how would you rate your experience with us?" },
            { id: 'msg3', sender: 'user', content: "Honestly it was great. Fast finance process." },
            { id: 'msg4', sender: 'agent', content: "That's awesome! Would you mind sharing that on Google? It helps a ton." },
            { id: 'rev1', sender: 'agent', type: 'review', content: 'review_card' },
            { id: 'msg5', sender: 'user', content: "done, thanks again for everything 🙂" }
        ]
    },
    {
        id: 'widget',
        tab: 'Site Widget',
        title: 'Your 24/7',
        highlight: "Digital Receptionist.",
        description: "Convert more website visitors into showroom appointments. Our smart widget answers questions, values trades, and books test drives instantly.",
        bullets: [
            { title: "Instant Engagement", desc: "Greets every visitor immediately, preventing 'bounce' and capturing attention." },
            { title: "Dynamic Appointment Setting", desc: "Syncs with your used car manager's schedule to ensure zero double-booking or missed test drives." },
            { title: "Direct Booking", desc: "Schedules test drives directly into your CRM calendar without human intervention." }
        ],
        header: { name: "James (Web Widget)", sub: "Source: Website Widget", icon: MessageSquare },
        avatarImage: undefined,
        avatarInitials: 'James',
        messages: [
            { id: 'tag1', sender: 'system', content: { title: 'Moved from Website' }, type: 'source_tag' },
            { id: 'msg1', sender: 'agent', content: "Hi James, you just reached out via our website, how can i help you today?" },
            { id: 'msg2', sender: 'user', content: "Do you have any white Tahoes in stock?" },
            { id: 'msg3', sender: 'agent', content: "We do, yes. We currently have a few white Tahoes available. Are you looking for a specific year, trim, or price range?" },
            { id: 'msg4', sender: 'user', content: "I’m just starting to look." },
            { id: 'msg5', sender: 'agent', content: "No problem at all. I can quickly go over what we have and help narrow it down. Would it be okay if I gave you a quick call?" },
            { id: 'msg6', sender: 'user', content: "Sure." },
            { id: 'msg7', sender: 'agent', content: "Great, what’s the best number to reach you on?" }
        ]
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
    const [activeFeature, setActiveFeature] = useState(0);
    const [visibleMessages, setVisibleMessages] = useState<any[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);


    // Message Sequencing Logic
    useEffect(() => {
        setVisibleMessages([]);
        let timeouts: NodeJS.Timeout[] = [];
        let accumulatedDelay = 0;
        const currentData = featuresData[activeFeature];

        const sequenceMessages = async () => {
            for (const msg of currentData.messages) {
                // @ts-ignore
                const readingDelay = msg.type === 'source_tag' ? 300 : 700;
                const typingDelay = msg.sender === 'agent' ? 1000 : 400;
                const preDelay = accumulatedDelay;

                // @ts-ignore
                if (msg.sender === 'agent' && msg.type !== 'audio' && msg.type !== 'review') {
                    timeouts.push(setTimeout(() => setIsTyping(true), preDelay));
                    accumulatedDelay += typingDelay;
                    timeouts.push(setTimeout(() => setIsTyping(false), accumulatedDelay));
                } else {
                    accumulatedDelay += readingDelay;
                }

                timeouts.push(setTimeout(() => {
                    setVisibleMessages(prev => [...prev, msg]);
                    if (chatContainerRef.current) {
                        setTimeout(() => {
                            chatContainerRef.current?.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: 'smooth' });
                        }, 50);
                    }
                }, accumulatedDelay));
            }
        };

        sequenceMessages();
        return () => timeouts.forEach(clearTimeout);
    }, [activeFeature]);

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

                        {/* Revenue Engine Visual (New Dashboard) */}
                        <PreOwnedHeroDashboard />
                    </div>
                </div>

            </motion.section>

            {/* 1.5 NEW MODULES DISPLAY (Borrowed from Franchise for consistency) */}
            <div className="relative z-10 -mt-20">
                <HolographicCards />
            </div>

            {/* 2. STATS BAR (UPGRADED) */}
            <PreOwnedStatsGrid />

            {/* 3. THE ART OF THE CLOSE - Interactive Conversation Visual */}
            <section className="py-32 bg-black relative overflow-hidden">
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF7404]/5 rounded-full blur-[150px] pointer-events-none" />
                <div className="container px-4 mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="relative w-full max-w-[400px] mx-auto">
                                {/* Phone Mockup - Premium Style */}
                                <div className="relative z-10 w-full h-[800px] bg-black rounded-[60px] border-[8px] border-[#2a2a2a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] overflow-hidden ring-1 ring-white/10 select-none">
                                    {/* Hardware Buttons */}
                                    <div className="absolute -left-[8px] top-[120px] h-[26px] w-[4px] bg-[#3a3a3a] rounded-l-md" />
                                    <div className="absolute -left-[8px] top-[160px] h-[45px] w-[4px] bg-[#3a3a3a] rounded-l-md" />
                                    <div className="absolute -left-[8px] top-[215px] h-[45px] w-[4px] bg-[#3a3a3a] rounded-l-md" />
                                    <div className="absolute -right-[8px] top-[160px] h-[80px] w-[4px] bg-[#3a3a3a] rounded-r-md" />

                                    {/* Status Bar */}
                                    <div className="absolute top-4 inset-x-0 h-6 px-8 flex justify-between items-center z-50">
                                        <div className="text-[12px] font-bold text-white tracking-tight">9:41</div>
                                        <div className="flex items-center gap-1.5">
                                            <Signal className="w-3.5 h-3.5 text-white" />
                                            <Wifi className="w-3.5 h-3.5 text-white" />
                                            <Battery className="w-4 h-4 text-white" />
                                        </div>
                                    </div>

                                    {/* Dynamic Island */}
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-3xl z-50 border border-white/5" />

                                    {/* Phone Content Interface */}
                                    <div className="h-full flex flex-col bg-[#050505]">
                                        {/* Home Indicator */}
                                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-50" />

                                        {/* Chat Header */}
                                        <div className="pt-14 pb-4 px-6 border-b border-white/5 bg-black/80 backdrop-blur-md sticky top-0 z-40">
                                            <motion.div
                                                key={featuresData[activeFeature].id}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="flex items-center justify-between"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden relative group">
                                                        <div className="absolute inset-0 bg-[#ff7404]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        {featuresData[activeFeature].avatarImage ? (
                                                            <div className="relative w-full h-full">
                                                                <Image
                                                                    src={featuresData[activeFeature].avatarImage!}
                                                                    alt="Avatar"
                                                                    fill
                                                                    className="object-contain"
                                                                />
                                                            </div>
                                                        ) : featuresData[activeFeature].id === 'service' ? (
                                                            <PhoneIncoming className="w-5 h-5 text-green-500 animate-pulse" />
                                                        ) : (
                                                            <span className="text-[10px] text-white/50 font-bold">{featuresData[activeFeature].avatarInitials}</span>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <div className="text-white text-sm font-bold">{featuresData[activeFeature].header.name}</div>
                                                        <div className="text-white/40 text-[10px] uppercase tracking-wider font-medium">{featuresData[activeFeature].header.sub}</div>
                                                    </div>
                                                </div>
                                                <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10 group cursor-pointer hover:border-[#ff7404]/50 transition-all">
                                                    <ArrowRight className="w-4 h-4 text-[#ff7404] group-hover:translate-x-0.5 transition-transform" />
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* Messages Area */}
                                        <div
                                            ref={chatContainerRef}
                                            className="flex-1 overflow-y-auto px-4 py-8 space-y-4 no-scrollbar scroll-smooth"
                                        >
                                            <AnimatePresence mode="popLayout">
                                                {visibleMessages.map((msg, i) => (
                                                    <motion.div
                                                        key={featuresData[activeFeature].id + '-' + i}
                                                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        transition={{ type: "spring", stiffness: 450, damping: 30 }}
                                                    >
                                                        <ChatBubble message={msg} />
                                                    </motion.div>
                                                ))}
                                                {isTyping && <TypingIndicator key="typing" />}
                                            </AnimatePresence>
                                        </div>

                                        {/* Input Bar Area */}
                                        <div className="px-5 pb-10 pt-4 bg-gradient-to-t from-black via-black/95 to-transparent">
                                            <div className="h-14 bg-zinc-900 rounded-[24px] border border-white/10 flex items-center px-5 justify-between shadow-2xl">
                                                <div className="flex gap-1.5 items-center pl-1">
                                                    <div className="w-2 h-2 bg-[#ff7404] rounded-full animate-pulse shadow-[0_0_8px_rgba(255,116,4,0.4)]" />
                                                    <div className="text-[13px] text-zinc-500 font-medium">Customer responding...</div>
                                                </div>
                                                <div className="w-9 h-9 rounded-full bg-[#ff7404] flex items-center justify-center shadow-lg shadow-orange-900/20 active:scale-95 transition-transform">
                                                    <ArrowRight className="w-5 h-5 text-white" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Background Accents */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ff7404]/20 rounded-full blur-[60px] animate-pulse" />
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#ff7404]/10 rounded-full blur-[60px] animate-pulse" />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            {/* Tabs */}
                            <CapabilityTabs
                                tabs={featuresData}
                                activeFeature={activeFeature}
                                setActiveFeature={setActiveFeature}
                            />

                            <CapabilityFeatureDisplay feature={featuresData[activeFeature]} />
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
                                desc: "Be the first to respond to Autotrader, Cars.com, and Facebook leads in under 60 seconds. We capture the buyer before they move to your competitor.",
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
                                <span className="text-[#FF7404]">Struggling in 2026.</span>
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
                                        Shoppers are more price-sensitive than ever. In 2026, a consumer cross-shops an average of 4.2 dealerships before visiting a lot. If you aren't using <strong>Automotive Speed-to-Lead AI</strong> to respond in under 60 seconds, you are effectively invisible to the modern used car buyer.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-[#FF7404] font-bold text-xl mb-3 flex items-center gap-2">
                                        <Database className="w-5 h-5" />
                                        The Auction Margin Trap
                                    </h3>
                                    <p className="text-zinc-500 leading-relaxed">
                                        Wholesale prices remain elevated, leaving thin margins for used car GMs. The only way to win is to bypass the auction and <strong>buy directly from the public</strong>. The AutoMaster Suite's Service Drive AI identifies high-equity trades in your own service lane, providing you with inventory that has a guaranteed service history and higher front-end potential.
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
                                    STRATEGY_VERIFIED_2026
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
                                        { step: "01", title: "CRM Data Sanitization", desc: "The AutoMaster Suite identifies high-intent segments in your data that human BDCs have overlooked." },
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
                                                <span className="text-white font-bold text-xs uppercase">The AutoMaster Suite</span>
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
            <ROICalculator
                badgeText="Inventory Velocity"
                title={<>Pre-Owned <span className="text-[#FF7404]">Profit Engine</span></>}
                subtitle={<>See how much equity is hiding in your service drive <br />and CRM database right now.</>}
                ctaText="Calculate Your Lift"
            />

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
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            Direct answers for GMs looking to optimize their pre-owned and used car profitability in 2026.
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
            <DealerInsights
                title="Pre-Owned Insight"
                description="Practical strategies for maximizing your current pre-owned and used car revenue potential."
            />


            {/* SEO Strengthening: Link to Orphan Page */}
            <div className="py-12 bg-[#050505] border-y border-white/5">
                <div className="container px-4 mx-auto text-center">
                    <a
                        href="/blog/ai-powered-solutions-pre-owned-car-dealers"
                        className="text-xs font-bold text-white/20 uppercase tracking-[0.3em] hover:text-[#FF7404] transition-colors duration-300 flex items-center justify-center gap-4"
                    >
                        <Layers className="w-4 h-4" />
                        Explore: AI Solutions for Pre-Owned Inventory
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>

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
                        "name": "The AutoMaster Suite",
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
        </main >
    );
}
