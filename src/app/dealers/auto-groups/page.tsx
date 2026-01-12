'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DealerCalculator from '@/components/dealers/DealerCalculator';
import {
    Users,
    LayoutGrid,
    Globe,
    ArrowRight,
    CheckCircle2,
    BarChart2,
    ShieldCheck,
    Zap,
    RefreshCw,
    Phone,
    Star,
    Building2,
    TrendingUp,
    HelpCircle,
    BookOpen,
    Calendar,
    Lightbulb,
    ChevronDown,
    Layers,
    Share2,
    Server,
    History,
    Shield,
    HardDrive,
    Network,
    Quote,
    PlayCircle,
    Activity,
    Lock,
    Database,
    MessageSquare,
    Timer,
    PhoneIncoming,
    Play,
    Signal,
    Wifi,
    Battery,
    User
} from 'lucide-react';
import MinimalQuote from '@/components/ui/MinimalQuote';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { RequestDemoButton } from '@/components/CalendlyModal';
import { CapabilityTabs, CapabilityFeatureDisplay } from '@/components';
import Image from 'next/image';

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

// FAQ Data for Auto Groups
const faqs = [
    {
        question: "How do you handle multiple CRMs and DMS systems across the group?",
        answer: "AutoMaster is built for architectural complexity. We can integrate with multiple different CRM/DMS providers simultaneously (e.g., CDK at one store, Reynold & Reynolds at another) while aggregating all data into a single, centralized Group Headquarters dashboard."
    },
    {
        question: "Can we set group-wide standards vs. store-level customization?",
        answer: "Yes. Our 'Central Command' features allow you to push global messaging updates and follow-up cadences to all rooftops instantly, while still allowing store managers to customize specific local offers or hours."
    },
    {
        question: "How does this reduce our centralized BDC overhead?",
        answer: "AutoMaster acts as a first-line digital BDC. By automating the first 5-10 touchpoints (the 'heavy lifting'), your centralized BDC can be reduced by up to 40% or redirected to focus solely on high-intent, deep-funnel conversations."
    },
    {
        question: "What group-level reporting visibility is available?",
        answer: "Regional Directors and Group Executives get a bird's-eye view of all locations. You can compare store performance side-by-side, identify bottleneck rooftops, and see group-wide ROI through a single login."
    },
    {
        question: "How quickly can we roll out to a new acquisition?",
        answer: "Deployment is optimized for speed. Once the integration is authorized, we can have a new rooftop live and capturing leads in under 24 hours. Your Group Account Manager handles the entire migration and training."
    }
];

// Blog/Insights Data for Auto Groups
const articles = [
    {
        title: "Standardizing BDC Success at Scale",
        excerpt: "How the top 100 auto groups are using AI to enforce process consistency across decentralised operations.",
        link: "/blog/standardizing-bdc-scale",
        category: "Operations",
        date: "Dec 18, 2024"
    },
    {
        title: "The ROI of Centralized Lead Recovery",
        excerpt: "Why aggregating dormant CRM data across your entire group's portfolio uncovers millions in hidden revenue.",
        link: "/blog/centralized-lead-recovery",
        category: "Strategy",
        date: "Dec 12, 2024"
    },
    {
        title: "Eliminating Group-Wide Data Silos",
        excerpt: "Breaking down the barriers between different CRM systems to get a true picture of your group's performance.",
        link: "/blog/group-data-silos",
        category: "Technology",
        date: "Dec 5, 2024"
    }
];

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
                ) : content.title === 'LEAD SOURCE: OEM PROGRAM' ? (
                    <div className="w-full bg-[#1A1A1A]/80 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3 border border-white/10 shadow-lg">
                        <div className="h-8 px-2 bg-white/10 rounded flex items-center justify-center border border-white/10">
                            <span className="text-[10px] font-black text-white italic tracking-tighter">OEM CERTIFIED</span>
                        </div>
                        <div className="text-left">
                            <div className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Manufacturer Lead</div>
                            <div className="text-[10px] text-gray-500">Compliance Window: 15m</div>
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

// Features Data for Auto Groups (Franchise-based)
const featuresData: Feature[] = [
    {
        id: 'reactivation',
        tab: 'Lead Reactivation',
        title: 'Recover Dormant',
        highlight: "Inventory Revenue.",
        description: "Re-engage dormant leads from your CRM with personalized AI conversations. Recover 8-10% of 'dead' prospects—revenue from marketing you've already paid for.",
        bullets: [
            { title: "CRM Deep Cleansing", desc: "Our AI systematically works through thousands of cold leads to find active buyers." },
            { title: "Personalized Outreach", desc: "Messaging that feels human, respectful, and brand-compliant." },
            { title: "Attribution Tracking", desc: "Clear reporting on recovered sales directly tied to AI re-engagement." }
        ],
        header: { name: "Reactivation AI", sub: "CRM Database Sync", icon: Database },
        avatarInitials: 'VQ',
        avatarImage: undefined,
        messages: [
            { id: 'msg1', sender: 'agent', content: "Hi Sarah, it's Mark at Toyota of Dallas. You stopped by a few months ago looking at the Rav4. Just checking in to see if you're still in the market or if your needs changed?" },
            { id: 'msg2', sender: 'user', content: "Hi! Actually still looking, just haven't had time to come back in." },
            { id: 'msg3', sender: 'agent', content: "Understood! We actually just got in 3 certified pre-owned units this morning that match what you were after." },
            { id: 'msg4', sender: 'agent', content: "If I set one aside for you to look at tomorrow morning, would that help?" },
            { id: 'msg5', sender: 'user', content: "Tomorrow morning works! 10am?" }
        ]
    },
    {
        id: 'speed',
        tab: 'Speed-to-Lead',
        title: 'The "Instant Response"',
        highlight: "Standard.",
        description: "Stop worrying about OEM 15-minute response windows. AutoMaster engages every lead in under 90 seconds, securing the first appointment and protecting your CSI.",
        bullets: [
            { title: "OEM Verified Messaging", desc: "Maintain 100% brand compliance with manufacturer-approved templates." },
            { title: "CSI Score Protection", desc: "Never lose points for slow follow-ups. Professional, instant engagement on every lead." },
            { title: "24/7 BDC Support", desc: "Your BDC focus on the 'show', our AI handles the 'flow' of lead intake." }
        ],
        header: { name: "Concierge AI", sub: "OEM Compliance Mode", icon: ShieldCheck },
        avatarInitials: 'AI',
        avatarImage: undefined,
        messages: [
            { id: 'tag1', sender: 'system', content: { title: 'LEAD SOURCE: OEM PROGRAM' }, type: 'source_tag' },
            { id: 'msg1', sender: 'agent', content: "Hey David! Sarah from the dealership here. I just saw your inquiry on the 2024 Honda Pilot. Since you're looking for a specific trim, are you thinking of trading in your current vehicle?" },
            { id: 'msg2', sender: 'user', content: "Yes, I have an older Odyssey. Is the Pilot available today?" },
            { id: 'msg3', sender: 'agent', content: "It is! I've reserved it for a VIP viewing. If I can get our appraiser to look at your Odyssey at 4:15 PM, would that work for you?" },
            { id: 'msg4', sender: 'user', content: "That's a bit early. Maybe 5 PM?" },
            { id: 'msg5', sender: 'agent', content: "No problem! I've moved the slot to 5:00 PM. I'll have the Pilot pulled to the front. To save you time, want to upload your trade photos now so we have numbers ready?" },
            { id: 'msg6', sender: 'user', content: "Sure, send the link." },
            { id: 'msg7', sender: 'agent', content: "Sent! Check your messages for the secure link. See you at 5:00 PM! 🚙" }
        ]
    },
    {
        id: 'service',
        tab: 'Service AI',
        title: 'Protect Fixed Ops',
        highlight: "With 24/7 Voice.",
        description: "Never miss a service call. AI answers every inbound call, routes correctly, or books appointments instantly. Protect your fixed ops revenue and CSI.",
        bullets: [
            { title: "Instant Routing", desc: "Seamlessly connect callers to the right service advisor without the long hold times." },
            { title: "Smart Scheduling", desc: "AI understands your shop capacity and books appointments in real-time." },
            { title: "Overflow Support", desc: "Acts as a safety net for your service BDC during peak morning rushes." }
        ],
        header: { name: "Service Voice", sub: "Inbound Call Routing", icon: PhoneIncoming },
        avatarInitials: 'Incoming',
        avatarImage: undefined,
        messages: [
            { id: 'audio1', sender: 'agent', type: 'audio', content: 'audio_card' }
        ]
    },
    {
        id: 'reputation',
        tab: 'Reputation',
        title: 'Safeguard Your',
        highlight: "CSI Performance.",
        description: "Flag negative reviews before factory surveys. AI responds to all reviews instantly, protecting your CSI scores and critical OEM bonuses.",
        bullets: [
            { title: "Crisis Detection", desc: "Instantly flags negative sentiment for GM escalation before it hits OEM surveys." },
            { title: "Professional Response", desc: "AI generates brand-aligned responses to all positive and negative feedback." },
            { title: "Local SEO Growth", desc: "Active, consistent review activity improves your dealership's search rankings." }
        ],
        header: { name: "CSI Protector", sub: "Reputation Sync", icon: Star },
        avatarInitials: 'CSI',
        avatarImage: undefined,
        messages: [
            { id: 'tag1', sender: 'system', content: { title: 'CSI Pulse Check' }, type: 'source_tag' },
            { id: 'msg1', sender: 'agent', content: "Hi James! Thanks for choosing us for your new Honda. On a scale of 1-10, how likely are you to recommend our service to others?" },
            { id: 'msg2', sender: 'user', content: "Honestly about a 6. The car is great but the wait in finance was way too long." },
            { id: 'msg3', sender: 'agent', content: "I'm so sorry to hear that, James. We value your feedback. I'm flagging this for our GM now so we can make this right before your loyalty survey arrives." }
        ]
    },
    {
        id: 'widget',
        tab: 'Site Widget',
        title: 'Your 24/7',
        highlight: "Digital Concierge.",
        description: "Convert inventory shoppers into showroom appointments. Our smart widget qualifies trade-ins and books test drives during all hours, sync'd with your CRM.",
        bullets: [
            { title: "Instant Lead Qualification", desc: "Greets visitors immediately, capturing contact info and buying intent on autopilot." },
            { title: "Trade-In Accuracy", desc: "Integrates with valuation tools to provide instant, realistic trade numbers during chat." },
            { title: "CRM Integration", desc: "All conversations and lead data sync instantly with your franchise's software stack." }
        ],
        header: { name: "Web Concierge", sub: "Active Site Widget", icon: MessageSquare },
        avatarInitials: 'WC',
        avatarImage: undefined,
        messages: [
            { id: 'tag1', sender: 'system', content: { title: 'Moved from Website' }, type: 'source_tag' },
            { id: 'msg1', sender: 'agent', content: "Hi! Thanks for visiting Toyota of Dallas. Are you looking at the new Tundra inventory or do you have a specific vehicle in mind?" },
            { id: 'msg2', sender: 'user', content: "Looking at Tundras. Do you have any hybrids in stock?" },
            { id: 'msg3', sender: 'agent', content: "We do! We have 2 Limited Hybrids on the lot right now. Would you like me to send over the spec sheets and a quick video tour?" },
            { id: 'msg4', sender: 'user', content: "Yes please. Also what's my trade worth?" },
            { id: 'msg5', sender: 'agent', content: "I can help with that. What's the year and mileage of your trade?" }
        ]
    }
];

export default function AutoGroupsPage() {
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
                        className="absolute bottom-0 right-1/3 w-[800px] h-[800px] bg-[#FF7404] rounded-full blur-[150px] pointer-events-none"
                    />
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
                                <Users className="w-3 h-3 text-[#FF7404]" />
                                For Auto Groups
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-5xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]"
                            >
                                Unified <br />
                                <motion.span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]"
                                >
                                    Group Intelligence.
                                </motion.span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-xl text-zinc-400 leading-relaxed max-w-xl mb-12 font-medium"
                            >
                                Eliminate decentralized inefficiency. AutoMaster Suite unifies your entire portfolio under a single, high-performance revenue engine—standardizing BDC success from your flagship to your latest acquisition.
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
                                        Book Enterprise Demo
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.div>
                                </Link>
                                <Link href="/book-demo">
                                    <motion.div
                                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 cursor-pointer"
                                    >
                                        Request Portfolio Audit
                                    </motion.div>
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Visual for Auto Groups (Multi-store dashboard look) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="relative hidden lg:block"
                        >
                            <div className="absolute inset-0 bg-[#FF7404]/10 blur-[80px] rounded-full pointer-events-none" />
                            <div className="relative grid grid-cols-2 gap-4">
                                <div className="col-span-2 bg-[#0F0F0F] border border-white/10 p-6 rounded-2xl mb-4">
                                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/5">
                                        <div className="flex items-center gap-3">
                                            <Globe className="w-5 h-5 text-[#FF7404]" />
                                            <div className="text-white font-bold">Group Headquarters</div>
                                        </div>
                                        <div className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-[10px] font-bold uppercase">Centralized</div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between text-xs text-zinc-500">
                                            <span>Total Portfolio Revenue</span>
                                            <span className="text-white font-bold">$1,240,500</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "75%" }}
                                                transition={{ duration: 1.5, delay: 0.5 }}
                                                className="h-full bg-[#FF7404]"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {['Store #104', 'Store #212', 'Store #098', 'Store #315'].map((store, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 + i * 0.1 }}
                                        className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <LayoutGrid className="w-3 h-3 text-zinc-500" />
                                            <span className="text-[10px] text-white font-medium uppercase tracking-wider">{store}</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <div className="text-lg font-bold text-white">+84%</div>
                                            <div className="text-[8px] text-green-400 font-bold">LIVE</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* 2. PERFORMANCE MATRIX */}
            <section className="py-24 border-y border-white/5 bg-[#030303]">
                <div className="container px-4 mx-auto">
                    <div className="grid md:grid-cols-4 gap-12">
                        {[
                            { label: 'Process Consistency', value: '100%', icon: ShieldCheck },
                            { label: 'Deployment Time', value: '<24h', icon: Zap },
                            { label: 'BDC Overhead', value: '-40%', icon: TrendingUp },
                            { label: 'Unchecked Leads', value: '0', icon: CheckCircle2 },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center text-center space-y-4"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center border border-[#FF7404]/20">
                                    <stat.icon className="w-6 h-6 text-[#FF7404]" />
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-white mb-1 tracking-tighter">{stat.value}</div>
                                    <div className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2.5 CENTRAL COMMAND: THE DIGITAL TWIN */}
            <section className="py-32 bg-[#020202] relative border-b border-white/5">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 text-[#FF7404] text-[10px] font-bold uppercase tracking-widest mb-6">
                                    <Network className="w-3 h-3" />
                                    The HQ Advantage
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
                                    Total Control. <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]">Zero Friction.</span>
                                </h2>
                                <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
                                    AutoMaster's Central Command acts as a high-altitude control tower for your entire portfolio. Manage Store level access, push group-level marketing cadences, and benchmark every rooftop against your gold standard—all from a single dashboard.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        { title: "Cross-Store Lead Routing", desc: "Share inventory and leads between stores without data silos.", icon: Share2 },
                                        { title: "Unified Group ROI", desc: "Aggregate every conversion and RO into a single, board-ready report.", icon: BarChart2 },
                                        { title: "Standardized Scripting", desc: "Push messaging updates to 5 or 50 stores with one click.", icon: RefreshCw }
                                    ].map((feat, i) => (
                                        <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-all group">
                                            <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-[#FF7404] shrink-0 border border-white/5 group-hover:border-[#FF7404]/30 transition-colors">
                                                <feat.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold mb-1 text-sm">{feat.title}</h4>
                                                <p className="text-zinc-500 text-xs leading-relaxed">{feat.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square bg-[#0A0A0A] border border-white/10 rounded-[3rem] p-8 shadow-3xl overflow-hidden relative">
                                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#FF7404]/5 to-transparent" />

                                <div className="relative z-10 space-y-8">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Building2 className="w-6 h-6 text-[#FF7404]" />
                                            <span className="text-white font-black text-xl tracking-tighter">Group Portfolio Summary</span>
                                        </div>
                                        <Activity className="w-5 h-5 text-green-500 animate-pulse" />
                                    </div>

                                    {/* Store Matrix Pulse */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { name: "Westside Toyota", color: "bg-[#FF8524]" },
                                            { name: "Downtown Ford", color: "bg-[#FF7404]" },
                                            { name: "Northside Honda", color: "bg-green-500" },
                                            { name: "Eastside Chevy", color: "bg-purple-500" }
                                        ].map((store, i) => (
                                            <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                                                <div className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-3">{store.name}</div>
                                                <div className="flex items-end justify-between">
                                                    <div className="text-2xl font-black text-white">4.8x</div>
                                                    <div className="text-[10px] text-green-500 font-bold">ROI</div>
                                                </div>
                                                <div className="mt-4 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                                    <div className={`h-full ${store.color}/40 w-3/4`} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Live Activity Log */}
                                    <div className="p-5 rounded-2xl bg-black/40 border border-white/5 font-mono text-[10px] space-y-3 opacity-60">
                                        <div className="flex justify-between">
                                            <span className="text-zinc-600 tracking-tighter">{'>'} SYNC_ACROSS_LOCATIONS</span>
                                            <span className="text-green-500">READY</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-zinc-600 tracking-tighter">{'>'} PUSHING_SCRIPTS: v5.2</span>
                                            <span className="text-[#FF7404] animate-pulse">DEPLOYING</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-10 left-10 right-10 flex justify-center mt-8">
                                    <div className="px-5 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-500 text-[10px] font-black uppercase tracking-widest">
                                        Verified Group Network
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.6 INTERACTIVE SHOWCASE - THE CONVERSATION ENGINE */}
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

            {/* 3. ENTERPRISE CHALLENGE */}
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
                                Scale shouldn't mean <br />
                                <span className="text-[#FF7404]">complexity.</span>
                            </h2>

                            <motion.div
                                className="space-y-6 text-lg text-zinc-400 leading-relaxed"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.p variants={itemVariants}>
                                    The biggest challenge for auto groups is maintaining consistent processes as you scale. Portfolios often become a collection of silos—different CRMs, different BDC standards, and different customer experiences.
                                </motion.p>
                                <motion.p variants={itemVariants}>
                                    Executives struggle with group-level visibility, while store managers are too bogged down in daily operations to implement group-wide initiatives.
                                </motion.p>
                                <motion.p variants={itemVariants}>
                                    <strong className="text-white">The result:</strong> Inconsistent performance across rooftops, high regional overhead, and millions in lost revenue due to fragmented lead management.
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
                                { icon: Share2, title: 'Fragmented Data Silos', desc: 'Different rooftops using different systems, making group-wide reporting and lead sharing near impossible.', color: 'text-[#FF7404]', bg: 'bg-[#FF7404]/10' },
                                { icon: LayoutGrid, title: 'Inconsistent Standards', desc: 'Success at your flagship store doesn\'t automatically translate to your newest acquisition without automated enforcement.', color: 'text-[#FF7404]', bg: 'bg-[#FF7404]/10' },
                                { icon: BarChart2, title: 'Reporting Nightmares', desc: 'Trying to aggregate multi-CRM data into a single meaningful view for stakeholders takes weeks of manual work.', color: 'text-[#FF7404]', bg: 'bg-[#FF7404]/10' },
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

            {/* 4. SOLUTIONS / SCALING PLAYBOOK */}
            <section className="py-32 bg-[#050505] relative overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 text-[#FF7404] text-[10px] font-bold uppercase tracking-widest mb-4"
                        >
                            <RefreshCw className="w-3 h-3" />
                            Enterprise Deployment
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">The <span className="text-[#FF7404]">24-Hour</span> Rollout.</h2>
                        <p className="text-zinc-500 text-lg">How we scale your success from acquisition date to live deployment in record time.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line */}
                        <div className="absolute top-[2.25rem] left-0 w-full h-px bg-white/5 hidden md:block" />

                        {[
                            { step: "01", title: "API Authorization", desc: "One-click connection to your Group CRM and DMS provider via secure tunnel.", icon: HardDrive },
                            { step: "02", title: "Portfolio Audit", desc: "Our AI scans your dormant lead volume to find the 'Instant ROI' opportunities.", icon: History },
                            { step: "03", title: "Store Logic Mapping", desc: "We map store-level hours, offers, and staffing to our group playbook.", icon: LayoutGrid },
                            { step: "04", title: "Live Deployment", desc: "BDC relief begins. Leads are captured, recovered, and scheduled 24/7.", icon: Zap }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative z-10"
                            >
                                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#FF7404] font-black text-xs mb-6 mx-auto md:mx-0">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div className="text-center md:text-left">
                                    <div className="text-[#FF7404] text-[10px] font-black uppercase tracking-[0.2em] mb-2">Step {item.step}</div>
                                    <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
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
                            Enterprise <br />
                            <span className="text-[#FF7404]">Strategy Desk.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg">
                            Answering the deployment and scaling questions of portfolio executives.
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
            <section className="py-24 bg-[#020202] relative overflow-hidden text-zinc-400">
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
                                Portfolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]">Insights</span>
                            </h2>
                            <p className="text-zinc-400 text-lg max-w-xl">
                                High-level strategies for managing enterprise automotive operations.
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
                            <TrendingUp className="w-4 h-4" />
                            Group Performance Optimization
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Unified Performance. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]">
                                Unlimited Scale.
                            </span>
                        </h2>

                        <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-12">
                            Transform your portfolio into a synchronized revenue engine. Live across all rooftops in weeks, not months.
                        </p>

                        <Link href="/book-demo">
                            <motion.div
                                whileHover={{ scale: 1.05, boxShadow: "0 0 50px -10px rgba(255,116,4,0.6)" }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 px-10 py-5 bg-[#FF7404] text-black font-bold text-lg rounded-xl cursor-pointer shadow-[0_0_40px_-10px_rgba(255,116,4,0.5)]"
                            >
                                Book Enterprise Demo
                                <ArrowRight className="w-5 h-5" />
                            </motion.div>
                        </Link>

                        {/* AEO/SEO STRUCTURED DATA */}
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify({
                                    "@context": "https://schema.org",
                                    "@type": "SoftwareApplication",
                                    "name": "AutoMaster Suite Enterprise",
                                    "applicationCategory": "EnterpriseApplication",
                                    "operatingSystem": "Web",
                                    "description": "Multi-location revenue automation and centralized BDC management for automotive groups.",
                                    "offers": {
                                        "@type": "Offer",
                                        "availability": "https://schema.org/InStock"
                                    },
                                    "aggregateRating": {
                                        "@type": "AggregateRating",
                                        "ratingValue": "5.0",
                                        "reviewCount": "42"
                                    },
                                    "alternateName": "Central Command for Auto Groups"
                                })
                            }}
                        />
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
