'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import IndependentCalculator from '@/components/dealers/independent/IndependentCalculator';
import AmbientBDCLoop from '@/components/dealers/independent/AmbientBDCLoop';
import DealerInsights from '@/components/dealers/shared/DealerInsights';

import { RefreshCw, Zap, TrendingUp, Search, DollarSign, Clock, LayoutGrid, CheckCircle2, ArrowRight, Gauge, ShoppingCart, HelpCircle, Lightbulb, ChevronDown, Calendar, BookOpen, Target, BarChart3, Database, MessageSquare, Layers, Signal, Wifi, Battery, User, Phone, Star, Timer, Globe, PhoneIncoming, Play } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import MinimalQuote from '@/components/ui/MinimalQuote';
import ReviewCard from '@/components/ui/ReviewCard';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { RequestDemoButton } from '@/components/CalendlyModal';
import { CapabilityTabs, CapabilityFeatureDisplay } from '@/components';

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
                ) : (content.title === 'Purchase Verified') ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="group relative flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.1)] overflow-hidden"
                    >
                        <motion.div
                            animate={{ x: ['-200%', '200%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent -skew-x-12 pointer-events-none"
                        />
                        <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center relative z-10 shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                            <svg className="w-2.5 h-2.5 text-[#050505] fill-current" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 relative z-10">
                            Purchase Verified
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
            <div className="flex justify-center mb-8 w-full px-4">
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
                className={`max-w-[85%] px-5 py-3 text-[15px] leading-snug relative tracking-normal font-medium shadow-md antialiased
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
        question: "We only have 3 sales reps. Is The AutoMaster Suite too big for us?",
        answer: "Actually, lean teams are where we see the highest ROI. The AutoMaster Suite acts as a 4th 'virtual' BDC rep who never sleeps, never takes a break, and handles your entire CRM database for a fraction of the cost of a new hire."
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

// Solutions for independent dealers
const solutions = [
    {
        icon: Zap,
        title: "Speed-to-Lead",
        desc: "Every lead from CarGurus, AutoTrader, and your website is engaged via SMS in under 60 seconds. 24/7/365. Beat the competition to every customer.",
        link: "/website-widget",
        cta: "See How It Works"
    },
    {
        icon: RefreshCw,
        title: "Lead Reactivation",
        desc: "Our Conversational AI works through your cold CRM leads via SMS, qualifying buyers and booking sales calls automatically. 35% engagement rate, 8% appointment conversion, without lifting a finger.",
        link: "/lead-reactivation",
        cta: "Reactivate Your Leads"
    },
    {
        icon: MessageSquare,
        title: "SMS-First Widget",
        desc: "Webchat is where leads go to die. We instantly transition website visitors to SMS, capturing their real cell number and keeping the conversation alive.",
        link: "/website-widget",
        cta: "Convert More Visitors"
    },
    {
        icon: Phone,
        title: "Service Drive Voice AI",
        desc: "Never miss a call. AI answers every inbound call, routes correctly, or books appointments instantly. Ensure every caller gets a professional experience.",
        link: "/service-drive",
        cta: "Automate Service Calls"
    },
    {
        icon: Star,
        title: "Reputation Management",
        desc: "Monitor and respond to reviews across Google, Facebook, and DealerRater instantly. Build trust with new buyers by showing active engagement.",
        link: "/reputation-management",
        cta: "Protect Your Reputation"
    }
];

const featuresData = [
    {
        id: 'reactivation',
        tab: 'Lead Reactivation',
        title: 'Your Cold Leads,',
        highlight: "Worked Automatically.",
        description: "Stop letting old leads collect dust. Our AI texts every cold lead in your CRM, finds out who's still in the market, and books qualified buyers straight into your sales team's calendar.",
        bullets: [
            { title: "Wake the Dead", desc: "35% of 'cold' leads respond when we reach out. They weren't dead; they were just waiting for the right message." },
            { title: "Fire Your Follow-Up", desc: "Skip the 40-hour grind. Our AI works your entire database while your team focuses on closing." },
            { title: "Deals From Data", desc: "8% book appointments. That's revenue hiding in your CRM: already paid for, finally captured." }
        ],
        header: { name: "Amy (Visquanta)", sub: "Reactivating: John", icon: Database },
        avatarInitials: 'VQ',
        messages: [
            { id: 'msg1', sender: 'agent', content: "Hi John, it’s Amy at Westline Motors. You stopped by a little while back to look at one of our vehicles, so I just wanted to check if you’re still looking." },
            { id: 'msg2', sender: 'user', content: "Yeah, I am actually, my lease is up next month." },
            { id: 'msg3', sender: 'agent', content: "Perfect timing then. We’ve had some great stock come in recently. Would you like to pop by for a look and a quick test drive?" },
            { id: 'msg4', sender: 'user', content: "Sure, that works." },
            { id: 'msg5', sender: 'agent', content: "Perfect. I’ll have one of our sales team give you a quick call to lock in a time. You can expect a call from them within the next 15 minutes." },
            { id: 'msg6', sender: 'user', content: "Ok, thanks for getting in touch." },
            { id: 'msg7', sender: 'agent', content: "You’re very welcome, John. Speak shortly and have a great day." }
        ]
    },
    {
        id: 'speed',
        tab: 'Speed-to-Lead',
        title: 'The "2nd Shift"',
        highlight: "You Don't Have to Hire.",
        description: "Most independent dealers lose 40% of their leads between 7 PM and 9 AM. The AutoMaster Suite acts as a 4th 'virtual' BDC rep who never sleeps, never takes a break, and handles your entire CRM database for a fraction of the cost of a new hire.",
        bullets: [
            { title: "24/7 Virtual BDC", desc: "Instantly respond to car shoppers on weekends and late nights when your team is off the clock." },
            { title: "Capital Efficiency", desc: "Reduce floorplan interest by moving units 14 days faster through extreme lead follow-up." },
            { title: "Zero-Management Tech", desc: "No training, no benefits, no management. High-performance lead handling on autopilot." }
        ],
        header: { name: "David (Inbound Lead)", sub: "2024 Silverado 1500", icon: User },
        avatarImage: '/testimonials/Steve.jpeg',
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
        tab: 'Service AI',
        title: 'Full Service Bay.',
        highlight: "Zero Phone Tag.",
        description: "Missed calls cost you fixed ops revenue. Our AI answers every call and text, filling your service schedule automatically and keeping bays full.",
        bullets: [
            { title: "Instant Booking", desc: "Direct integration with your scheduler to book appointments in real-time." },
            { title: "Capacity Management", desc: "Automatically fills gaps in your service calendar to maximize technician efficiency." },
            { title: "Status Updates", desc: "Proactive text updates keep customers informed, reducing inbound 'status check' calls." }
        ],
        header: { name: "Mike (Service)", sub: "Inbound Call: 555-0123", icon: Phone },
        avatarInitials: 'Incoming',
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
        avatarImage: '/testimonials/claire.png',
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
            { title: "Smart Qualification", desc: "Collects contact info and buying intent only when the customer is ready." },
            { title: "Direct Booking", desc: "Schedules test drives directly into your CRM calendar without human intervention." }
        ],
        header: { name: "James (Web Widget)", sub: "Source: Website Widget", icon: MessageSquare },
        avatarImage: '/testimonials/paul.webp',
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


export default function IndependentDealersPage() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [activeFeature, setActiveFeature] = useState(0);
    const [visibleMessages, setVisibleMessages] = useState<any[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    // Message Sequencing Logic (adapted from SeeItInAction)
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

                // @ts-ignore - msg.type may not exist on all message types
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
        <main className="bg-black min-h-screen">
            {/* JSON-LD Structured Data for AEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "The AutoMaster Suite for Independent Dealers",
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
            <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex flex-col justify-center">
                <div className="absolute inset-0 bg-enterprise-grid opacity-30 pointer-events-none" />
                {/* Dynamic Ambient BDC Background */}
                <AmbientBDCLoop />

                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <motion.div
                                variants={itemVariants}
                                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-zinc-900/80 border border-white/10 backdrop-blur-xl shadow-[0_0_30px_-5px_rgba(255,116,4,0.15)] text-zinc-300 text-xs font-bold uppercase tracking-widest mb-10 group hover:border-[#FF7404]/30 transition-all"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7404] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF7404]"></span>
                                </span>
                                <span className="text-white group-hover:text-[#FF7404] transition-colors">Independent Dealer Solutions</span>
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1] lg:leading-[1]"
                            >
                                The 24/7 BDC <br />
                                <motion.span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]"
                                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                    style={{ backgroundSize: "200% 200%" }}
                                >
                                    You Don't Have To Hire.
                                </motion.span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                            >
                                Stop losing leads to the big stores after 6 PM. The AutoMaster Suite handles every text, call, and web lead instantly—so you sell more cars without adding headcount.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            >
                                <Link
                                    href="#roi-calculator"
                                    className="bg-[#FF7404] hover:bg-white text-black px-10 py-5 rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-[0_0_40px_-10px_rgba(255,116,4,0.5)] hover:shadow-[0_0_50px_-10px_rgba(255,116,4,0.7)] inline-flex items-center justify-center"
                                >
                                    See ROI Calculator
                                </Link>
                                <div className="text-xs text-zinc-500 font-medium mt-2 sm:mt-0 sm:absolute sm:-bottom-8 sm:left-1/2 sm:-translate-x-1/2">
                                    No long-term contracts. 15-minute walkthrough.
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. STATS BAR */}
            <section className="py-20 border-y border-white/5 bg-black/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-enterprise-grid opacity-10 pointer-events-none" />
                <div className="container px-4 mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {[
                            { label: "Floorplan Days Saved", value: "14.2", desc: "Average turn rate reduction" },
                            { label: "Lead Response Time", value: "<60s", desc: "24/7/365 coverage" },
                            { label: "CRM Reactivation", value: "12%", desc: "Average monthly deal lift" },
                            { label: "Cost Per Appointment", value: "-65%", desc: "Vs. traditional BDC" }
                        ].map((stat, i) => (
                            <div key={i} className={`relative flex flex-col items-center justify-center text-center ${i !== 3 ? 'lg:border-r border-white/10' : ''}`}>
                                <div className="text-5xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-none">
                                    {stat.value}
                                </div>
                                <div className="text-[#FF7404] font-bold text-xs uppercase tracking-widest mb-1">
                                    {stat.label}
                                </div>
                                <div className="text-zinc-500 text-sm font-medium">
                                    {stat.desc}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* NEW: REALITY CHECK SECTION */}
            <section className="py-24 bg-[#0a0a0a] border-b border-white/5 relative">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-xs font-bold text-red-500 uppercase tracking-widest">The Independent Dealer's Dilemma</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            You can't be at the desk 24/7.<br />
                            <span className="text-zinc-500">But your leads don't stop when you lock&nbsp;up.</span>
                        </h2>
                        <p className="text-xl text-zinc-400 leading-relaxed mb-12">
                            When you miss a lead, you don't just lose a conversation: you lose the deal to the franchise down the street who has a 20-person BDC. It's not a traffic problem; it's a <span className="text-white font-bold">coverage problem</span>.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="group bg-gradient-to-b from-red-950/30 to-transparent p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all shadow-[0_0_20px_-10px_rgba(220,38,38,0.1)] hover:shadow-[0_0_30px_-5px_rgba(220,38,38,0.2)]"
                            >
                                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20 group-hover:bg-red-500/20 transition-all">
                                    <Clock className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-white text-xl font-bold mb-3">The "After-Hours" Gap</h3>
                                <p className="text-zinc-400 leading-relaxed">40% of leads arrive when your store is closed. If you wait until morning, they've already bought elsewhere.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="group bg-gradient-to-b from-red-950/30 to-transparent p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all shadow-[0_0_20px_-10px_rgba(220,38,38,0.1)] hover:shadow-[0_0_30px_-5px_rgba(220,38,38,0.2)]"
                            >
                                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20 group-hover:bg-red-500/20 transition-all">
                                    <User className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-white text-xl font-bold mb-3">The "Wearing Hats" Issue</h3>
                                <p className="text-zinc-400 leading-relaxed">You're desking deals, buying cars, and managing service. You physically cannot chase every cold lead.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="group bg-gradient-to-b from-red-950/30 to-transparent p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all shadow-[0_0_20px_-10px_rgba(220,38,38,0.1)] hover:shadow-[0_0_30px_-5px_rgba(220,38,38,0.2)]"
                            >
                                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20 group-hover:bg-red-500/20 transition-all">
                                    <DollarSign className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-white text-xl font-bold mb-3">The Hiring Trap</h3>
                                <p className="text-zinc-400 leading-relaxed">Hiring a dedicated BDC rep costs $4k/mo + burden. For most independents, the math just doesn't work.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE EFFICIENCY ENGINE - Interactive Conversation Visual */}
            <section className="py-32 bg-black relative overflow-hidden">
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF7404]/5 rounded-full blur-[150px] pointer-events-none" />
                <div className="container px-4 mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter"
                        >
                            How It Handles Your Leads <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#ff9040]">(While You Sleep).</span>
                        </motion.h2>
                        <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-relaxed">
                            Watch how The AutoMaster Suite engages, qualifies, and books appointments without you lifting a finger.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            {/* ... Phone Demo Code ... */}
                            <div className="relative w-full max-w-[400px] mx-auto">
                                {/* Phone Mockup - Premium Style */}
                                <div className="relative z-10 w-full h-[800px] bg-black rounded-[60px] border-[8px] border-[#2a2a2a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] overflow-hidden ring-1 ring-white/10 select-none">
                                    {/* Hardware Buttons */}
                                    <div className="absolute -left-[8px] top-[120px] h-[26px] w-[4px] bg-[#3a3a3a] rounded-l-md" />
                                    <div className="absolute -left-[8px] top-[160px] h-[45px] w-[4px] bg-[#3a3a3a] rounded-l-md" />
                                    <div className="absolute -left-[8px] top-[215px] h-[45px] w-[4px] bg-[#3a3a3a] rounded-l-md" />
                                    <div className="absolute -right-[8px] top-[160px] h-[80px] w-[4px] bg-[#3a3a3a] rounded-r-md" />

                                    {/* Status Bar */}
                                    <div className="absolute top-4 left-0 right-0 px-7 flex justify-between items-center z-[60] text-white font-medium text-[14px]">
                                        <span className="tracking-wide text-[14px]">9:41</span>
                                        <div className="flex items-center gap-2 text-white">
                                            <Signal className="w-4 h-4" />
                                            <Wifi className="w-4 h-4" />
                                            <div className="w-6 h-[11px] rounded-[3px] border-[1.5px] border-white/40 flex items-center pr-[1px] relative ml-1">
                                                <div className="w-full h-full bg-white rounded-[1px]" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dynamic Island */}
                                    <div className="absolute top-[11px] left-1/2 -translate-x-1/2 h-[36px] w-[120px] bg-black rounded-[24px] z-[70] flex justify-center items-center">
                                        <div className="w-[40%] h-full bg-black rounded-full relative overflow-hidden">
                                            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#1a1a1a] shadow-inner opacity-60" />
                                        </div>
                                    </div>

                                    {/* Home Indicator */}
                                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[130px] h-[5px] bg-white/90 rounded-full z-[80]" />

                                    {/* Screen Content */}
                                    <div className="w-full h-full bg-black flex flex-col pt-14">
                                        {/* Chat Header */}
                                        <div className="px-6 pb-4 border-b border-white/5 flex items-center justify-between bg-black/80 backdrop-blur-md z-10">
                                            <motion.div
                                                key={`header-${activeFeature}`}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="flex items-center gap-3"
                                            >
                                                <div className="w-10 h-10 rounded-full bg-[#111] border border-white flex items-center justify-center overflow-hidden">
                                                    {featuresData[activeFeature].avatarImage ? (
                                                        <div className="relative w-full h-full">
                                                            <Image
                                                                src={featuresData[activeFeature].avatarImage!}
                                                                alt={featuresData[activeFeature].header.name}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                    ) : featuresData[activeFeature].id === 'reactivation' ? (
                                                        <div className="relative w-7 h-7">
                                                            <Image
                                                                src="/images/logo-black.jpg"
                                                                alt="VisQuanta"
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
                                                    <div className="text-white/40 text-[10px] uppercase tracking-wider">{featuresData[activeFeature].header.sub}</div>
                                                </div>
                                            </motion.div>
                                            <div className="w-8 h-8 rounded-full bg-[#1c1c1e] flex items-center justify-center">
                                                <ArrowRight className="w-4 h-4 text-[#ff7404]" />
                                            </div>
                                        </div>

                                        {/* Messages Area */}
                                        <div
                                            ref={chatContainerRef}
                                            className="flex-1 overflow-y-auto px-4 py-6 space-y-4 no-scrollbar"
                                        >
                                            <AnimatePresence mode="popLayout">
                                                {visibleMessages.map((msg, i) => (
                                                    <motion.div
                                                        key={featuresData[activeFeature].id + '-' + i}
                                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                                    >
                                                        <ChatBubble message={msg} />
                                                    </motion.div>
                                                ))}
                                                {isTyping && <TypingIndicator key="typing" />}
                                            </AnimatePresence>
                                        </div>

                                        {/* Input Area */}
                                        <div className="px-4 pb-8 pt-2">
                                            <div className="h-12 bg-[#1c1c1e] rounded-full border border-white/10 flex items-center px-4 justify-between">
                                                <div className="flex gap-1 items-center pl-1">
                                                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-[bounce_1.4s_infinite]" />
                                                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-[bounce_1.4s_infinite_0.2s]" />
                                                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-[bounce_1.4s_infinite_0.4s]" />
                                                </div>
                                                <div className="w-8 h-8 rounded-full bg-[#ff7404] flex items-center justify-center">
                                                    <ArrowRight className="w-4 h-4 text-white" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

            {/* 4. MARGIN PROTECTION - Contextual Strategy Section */}
            <section className="py-32 bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-enterprise-grid opacity-20 pointer-events-none" />
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                                Cut Your Turn Rate<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#ff9040]">By 14 Days.</span>
                            </h2>
                            <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-relaxed">
                                Don't let interest payments eat your margin. The AutoMaster Suite moves units faster by engaging leads the second they hit your CRM.
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-12">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative pl-8 border-l-2 border-white/10 hover:border-[#FF7404] transition-colors duration-500 group"
                                >
                                    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-[#FF7404] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FF7404] transition-colors">
                                        The Floorplan Burn
                                    </h3>
                                    <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors">
                                        For an independent dealer, every day a car sits on the lot is a day of interest <strong>eroding your profit</strong>. The AutoMaster Suite's Lead Reactivation mines your CRM to find the perfect buyer the moment a new unit is processed, cutting turn rates by an average of 14 days.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="relative pl-8 border-l-2 border-white/10 hover:border-[#FF7404] transition-colors duration-500 group"
                                >
                                    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-[#FF7404] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FF7404] transition-colors">
                                        Zero-Waste Ad Spend
                                    </h3>
                                    <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors">
                                        Stop burning budget on leads that go unworked. We ensure every marketing dollar converts by engaging <strong>100% of inbound traffic</strong> instantly—drastically lowering your effective Cost Per Sale and maximizing ad ROI.
                                    </p>
                                </motion.div>
                            </div>

                            <div className="absolute inset-x-0 top-0 h-full bg-[#FF7404]/10 blur-[120px] rounded-full" />
                            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-10 shadow-2xl overflow-hidden group hover:border-[#FF7404]/30 transition-all duration-500">
                                <div className="absolute top-0 right-0 p-32 bg-white/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 text-[#FF7404] text-[10px] font-bold uppercase tracking-widest mb-8">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF7404] animate-pulse" />
                                    Efficiency Insight
                                </div>

                                <h4 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                                    How can independent dealers compete with large franchise groups for lead traffic?
                                </h4>

                                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                    By winning on <strong className="text-white">Response Velocity</strong>. While franchise groups often have slow, bureaucratic BDC processes, an independent dealer using <strong>Automotive AI Speed-to-Lead</strong> can engage and qualify a lead in under 60 seconds.
                                </p>

                                <div className="flex items-center gap-3 pt-8 border-t border-white/5">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <span className="text-xs font-mono text-zinc-500">SYSTEM_ACTIVE</span>
                                    </div>
                                    <span className="text-xs font-mono text-[#FF7404]">MARGIN_VERIFIED_2026</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* 5. CALCULATOR */}
            <div id="roi-calculator">
                <IndependentCalculator />
            </div>

            {/* 5. SOLUTIONS */}
            <section className="py-24 bg-[#050505] relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />

                <div className="container px-4 mx-auto relative z-10">
                    <motion.div
                        className="text-center max-w-4xl mx-auto mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                            Enterprise-Grade Tools. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Franchise Results.</span>
                        </h2>
                        <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-relaxed">
                            The AutoMaster Suite combines Lead Loss Mitigation, Speed-to-Lead, Reputation Management, and dedicated Success Management to optimize every metric that matters.
                        </p>
                    </motion.div>

                    {/* Pyramid Layout: Row 1 - 2 cards centered */}
                    <motion.div
                        className="flex justify-center gap-6 mb-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {solutions.slice(0, 2).map((sol, i) => (
                            <motion.div key={i} variants={itemVariants} className="w-full max-w-[320px]">
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

                    {/* Pyramid Layout: Row 2 - 3 cards centered */}
                    <motion.div
                        className="flex justify-center gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {solutions.slice(2, 5).map((sol, i) => (
                            <motion.div key={i + 2} variants={itemVariants} className="w-full max-w-[320px]">
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





            {/* 6. INSIGHTS */}
            <DealerInsights
                title="Independent Insight"
                description="Strategies and insights for independents who refuse to be outpaced."
            />

            {/* 7. FAQ SECTION */}
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
                            Join 500+ high-efficiency independent dealers who are using The AutoMaster Suite to protect their margins.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <RequestDemoButton
                                className="px-12 py-6 bg-[#FF7404] hover:bg-white hover:text-black text-black font-black text-lg uppercase tracking-widest rounded-2xl transition-all shadow-[0_20px_40px_-10px_rgba(255,116,4,0.4)] hover:shadow-[0_20px_50px_-10px_rgba(255,116,4,0.6)] transform hover:-translate-y-1"
                            >
                                Schedule Your Walkthrough
                            </RequestDemoButton>
                        </div>
                        <div className="text-zinc-500 text-sm font-medium mt-6">
                            No commitment. Just a look at the system.
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main >
    );
}
