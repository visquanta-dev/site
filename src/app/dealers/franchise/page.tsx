'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DealerCalculator from '@/components/dealers/DealerCalculator';
import { Building2, ShieldCheck, BarChart3, ArrowRight, CheckCircle2, Award, TrendingUp, Clock, Users, AlertTriangle, Zap, RefreshCw, Phone, Star, Target, HelpCircle, BookOpen, Calendar, Lightbulb, ChevronDown, Signal, Wifi, Battery, User, Database, MessageSquare, Timer, Globe, PhoneIncoming, Play } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import ReviewCard from '@/components/ui/ReviewCard';
import { useRef, useState, useEffect } from 'react';
import { RequestDemoButton } from '@/components/CalendlyModal';
import { CapabilityTabs, CapabilityFeatureDisplay } from '@/components';
import Image from 'next/image';

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

// Features Data for Franchise Dealers
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
                <div className="container px-4 mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="relative w-full max-w-[400px] mx-auto">
                                {/* Phone Mockup */}
                                <div className="relative z-10 w-full h-[760px] bg-black rounded-[60px] border-[8px] border-[#2a2a2a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] overflow-hidden ring-1 ring-white/10 select-none">
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
                                    <div className="absolute top-[11px] left-1/2 -translate-x-1/2 h-[36px] w-[120px] bg-black rounded-[24px] z-[70] flex justify-center items-center" />

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
                                                <div className="w-10 h-10 rounded-full bg-[#111] border border-white/10 flex items-center justify-center overflow-hidden">
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
                                {/* Ambient Glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[80%] bg-[#FF7404]/5 blur-[100px] rounded-full z-0" />
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
