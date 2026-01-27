'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Send, CheckCircle2, Play } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

// ============================================================================
// ANIMATION SCENARIO DATA
// ============================================================================

const TYPING_NAME = "James";
const TYPING_PHONE = "7866866554";
const TYPING_MESSAGE = "Do you have any 2024 Tahoes left?";

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    // Animation Stages:
    const [stage, setStage] = useState(0);
    const [typedName, setTypedName] = useState("");
    const [typedPhone, setTypedPhone] = useState("");
    const [typedMessage, setTypedMessage] = useState("");

    // Helper for typing animation
    const typeText = async (text: string, setter: (val: string) => void, speed: number = 50) => {
        for (let i = 0; i <= text.length; i++) {
            setter(text.slice(0, i));
            await new Promise(r => setTimeout(r, speed));
        }
    };

    useEffect(() => {
        let isMounted = true;

        const runSequence = async () => {
            if (!isMounted) return;

            // 0. Reset
            setStage(0);
            setTypedName("");
            setTypedPhone("");
            setTypedMessage("");
            await new Promise(r => setTimeout(r, 1000));

            // 1. Type Name
            setStage(1);
            await typeText(TYPING_NAME, setTypedName, 80);
            await new Promise(r => setTimeout(r, 400));

            // 2. Type Phone
            setStage(2);
            await typeText(TYPING_PHONE, setTypedPhone, 60);
            await new Promise(r => setTimeout(r, 400));

            // 3. Type Message
            setStage(3);
            await typeText(TYPING_MESSAGE, setTypedMessage, 40);
            await new Promise(r => setTimeout(r, 800));

            // 4. Send (Beam)
            setStage(4);
            await new Promise(r => setTimeout(r, 1000));

            // 5. Phone AI 1
            setStage(5);
            await new Promise(r => setTimeout(r, 2000));

            // 6. Phone User 1
            setStage(6);
            await new Promise(r => setTimeout(r, 2000));

            // 7. Phone AI 2
            setStage(7);
            await new Promise(r => setTimeout(r, 2000));

            // 8. Phone User 2
            setStage(8);
            await new Promise(r => setTimeout(r, 1500));

            // 9. Phone AI 3
            setStage(9);
            await new Promise(r => setTimeout(r, 4000)); // Show final state for 4s

            if (isMounted) runSequence();
        };

        runSequence();
        return () => { isMounted = false; };
    }, []);

    // Helper for message styles
    const getMsgClass = (isAi: boolean) =>
        `p-3.5 text-[11px] leading-relaxed max-w-[85%] shadow-sm ${isAi
            ? "bg-zinc-800 text-zinc-100 rounded-2xl rounded-tl-sm border border-white/5"
            : "bg-[#FF7404] text-white rounded-2xl rounded-tr-sm self-end"
        }`;

    return (
        <section ref={containerRef} className="relative min-h-[110vh] flex items-center pt-40 pb-32 overflow-hidden bg-[#050505]">

            {/* 1. Premium Background Mesh */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-gradient-radial from-orange-500/10 to-transparent blur-[120px] opacity-60" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 to-transparent blur-[120px] opacity-40" />
                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] opacity-30" />
            </div>

            <div className="container mx-auto px-4 lg:px-6 relative z-10 h-full">
                <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center h-full">

                    {/* Left Column: Copy & Actions */}
                    <div className="space-y-12 max-w-2xl">

                        {/* Tagline */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md"
                        >
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7404] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF7404]"></span>
                            </span>
                            <span className="text-zinc-300 text-[10px] font-bold uppercase tracking-[0.2em]">SMS-First Technology</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                            className="relative"
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.05] tracking-tight">
                                Don&apos;t just chat. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] via-[#ff9e4f] to-[#ffb880]">
                                    Text Them.
                                </span>
                            </h1>
                        </motion.div>

                        {/* Subhead */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed font-light"
                        >
                            Web chats die when the tab closes. VisQuanta moves the conversation to <strong className="text-zinc-100 font-semibold">SMS instantly</strong>, capturing verified mobile numbers automatically.
                        </motion.p>

                        {/* Trust Anchor - Moved Above CTA per CRO Audit */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="pt-6"
                        >
                            <p className="text-xs sm:text-sm text-white/40 font-medium mb-4 tracking-wide">
                                <span className="text-white/60">362+ dealerships</span> • <span className="text-orange-500 font-semibold">40% avg lead increase</span>
                            </p>
                            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
                                {[
                                    { src: '/images/logos/ford-direct.jpg', alt: 'Ford Direct' },
                                    { src: '/images/logos/toyota.jpg', alt: 'Toyota' },
                                    { src: '/images/logos/honda.jpg', alt: 'Honda' },
                                    { src: '/images/logos/gm.jpg', alt: 'GM' }
                                ].map((logo, i) => (
                                    <div
                                        key={i}
                                        className="h-6 sm:h-7 w-auto opacity-30 hover:opacity-100 transition-all duration-500 cursor-default"
                                    >
                                        <img
                                            src={logo.src}
                                            alt={logo.alt}
                                            className="h-full w-auto object-contain grayscale brightness-150 mix-blend-screen"
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTAs */}
                        <div className="flex flex-col gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                className="flex flex-col sm:flex-row gap-5"
                            >
                                <Link href="/book-demo" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FF7404] hover:bg-[#ff8524] text-black font-bold text-lg rounded-xl transition-all shadow-[0_0_20px_rgba(255,116,4,0.3)] hover:shadow-[0_0_30px_rgba(255,116,4,0.5)]">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Schedule Your Walkthrough
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                            </motion.div>

                            {/* CRO Microcopy */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.15em] font-bold"
                            >
                                30-min 1:1 • Get an exact revenue-lift projection for your dealership
                            </motion.p>
                        </div>
                    </div>

                    {/* Right Column: Visual Interaction */}
                    <div className="relative h-[800px] w-full hidden lg:block perspective-[2500px]">

                        {/* Glow Behind */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"
                            animate={{ opacity: [0.3, 0.5, 0.3], scale: [0.9, 1.05, 0.9] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* A. WIDGET MOCKUP */}
                        <motion.div
                            className="absolute top-[40%] left-[-40px] z-20"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{
                                x: 0,
                                opacity: stage >= 5 ? 0.4 : 1,
                                filter: stage >= 5 ? "blur(2px) grayscale(50%)" : "blur(0px) grayscale(0%)",
                                scale: stage >= 5 ? 0.95 : 1
                            }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="w-[360px] bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden border border-zinc-200/50">
                                {/* Widget Header */}
                                <div className="bg-zinc-50 border-b border-zinc-100 p-5 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-zinc-200 overflow-hidden border-2 border-white shadow-sm ring-1 ring-zinc-200">
                                        <Image src="/images/headshot-example-4.webp" alt="Agent" width={48} height={48} className="object-cover" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-zinc-900">Chat with Us</div>
                                        <div className="text-[11px] text-zinc-500 flex items-center gap-1.5 mt-0.5">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                            </span>
                                            Online & Ready
                                        </div>
                                    </div>
                                </div>
                                {/* Widget Body */}
                                <div className="p-5 bg-white space-y-4">
                                    <div className="bg-zinc-100 p-3.5 rounded-2xl rounded-tl-none text-xs text-zinc-600 leading-relaxed max-w-[90%]">
                                        Hi! Enter your details below to speak with our team instantly via SMS.
                                    </div>
                                    <div className="space-y-3">
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="h-11 bg-zinc-50 border border-zinc-200 rounded-lg px-3.5 flex items-center text-sm text-zinc-900 shadow-sm">
                                                {typedName}{stage === 1 && <span className="w-[2px] h-4 bg-orange-500 ml-0.5 animate-pulse" />}
                                            </div>
                                            <div className="h-11 bg-zinc-50 border border-zinc-200 rounded-lg px-3.5 flex items-center text-sm text-zinc-900 shadow-sm">
                                                {typedPhone}{stage === 2 && <span className="w-[2px] h-4 bg-orange-500 ml-0.5 animate-pulse" />}
                                            </div>
                                        </div>
                                        <div className="min-h-[90px] w-full bg-zinc-50 border border-zinc-200 rounded-lg p-3.5 text-sm text-zinc-900 whitespace-pre-wrap shadow-inner">
                                            {typedMessage}{stage === 3 && <span className="w-[2px] h-4 bg-orange-500 ml-0.5 animate-pulse" />}
                                        </div>
                                    </div>
                                    <motion.div
                                        className="h-12 w-full rounded-xl flex items-center justify-center text-white text-sm font-bold gap-2 shadow-md cursor-pointer"
                                        animate={{
                                            backgroundColor: stage === 4 ? "#f97316" : "#09090b",
                                            scale: stage === 4 ? 0.98 : 1
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        Text Me Info <Send className="w-4 h-4 ml-0.5" />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* B. BEAM CONNECTION */}
                        <svg className="absolute top-[52%] left-[320px] w-[180px] h-[80px] z-10 overflow-visible pointer-events-none" viewBox="0 0 180 80">
                            <path d="M 0 40 C 60 40, 90 40, 180 40" stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none" strokeDasharray="6 6" />
                            {stage === 4 && (
                                <motion.path
                                    d="M 0 40 C 60 40, 90 40, 180 40"
                                    stroke="#f97316"
                                    strokeWidth="4"
                                    fill="none"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                />
                            )}
                            {stage === 4 && (
                                <circle
                                    cx="0" cy="0" r="4" fill="#f97316"
                                    style={{
                                        offsetPath: "path('M 0 40 C 60 40, 90 40, 180 40')",
                                        animation: "moveAlongPath 1s ease-in-out forwards"
                                    }}
                                />
                            )}
                            <style>{`
                                @keyframes moveAlongPath {
                                    from { offset-distance: 0%; }
                                    to { offset-distance: 100%; }
                                }
                            `}</style>
                        </svg>

                        {/* C. PHONE MOCKUP */}
                        <div className="absolute top-[10%] right-0 z-30 transform perspective-[1500px]">
                            <motion.div
                                className="relative w-[320px] h-[660px] bg-black rounded-[50px] shadow-2xl overflow-hidden flex flex-col ring-8 ring-zinc-900 border border-zinc-800"
                                initial={{ rotateY: 15, rotateX: 5, y: 50, opacity: 0 }}
                                animate={{
                                    rotateY: stage >= 5 ? -10 : 15,
                                    x: stage >= 5 ? -20 : 0,
                                    y: 0,
                                    opacity: 1
                                }}
                                transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
                            >
                                {/* Glass Reflection */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent z-50 pointer-events-none rounded-[42px]" />

                                {/* Phone Dynamic Island */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-9 bg-black rounded-full z-[60] flex items-center justify-center">
                                    <div className="w-16 h-4 bg-zinc-900/50 rounded-full" />
                                </div>

                                {/* Phone Header */}
                                <div className="bg-[#0a0a0a]/90 backdrop-blur-md pt-16 px-5 pb-4 border-b border-white/5 flex items-center gap-3 sticky top-0 z-40">
                                    <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden flex items-center justify-center ring-1 ring-white/10">
                                        <Image src="/images/visquanta-logo-transparent.png" alt="VQ" width={32} height={32} />
                                    </div>
                                    <div>
                                        <div className="text-white text-sm font-bold tracking-wide">Dealership Assistant</div>
                                        <div className="text-[10px] text-zinc-500 font-medium">Sat, Aug 12 • 9:41 AM</div>
                                    </div>
                                </div>

                                {/* Phone Message Area */}
                                <div className="flex-1 bg-gradient-to-b from-[#0a0a0a] to-[#000] p-4 flex flex-col gap-3 overflow-y-auto scrollbar-hide relative">
                                    <div className="text-center text-[10px] text-zinc-600 font-medium uppercase tracking-widest py-4 opacity-50">Today</div>
                                    <AnimatePresence>
                                        {stage >= 5 && (
                                            <motion.div key="msg-ai-1" initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} className={getMsgClass(true)}>
                                                Hi James, yes we do have 3 2024 Tahoe&apos;s at the dealership
                                            </motion.div>
                                        )}
                                        {stage >= 6 && (
                                            <motion.div key="msg-user-1" initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} className={getMsgClass(false)}>
                                                Great can we arrange a test drive
                                            </motion.div>
                                        )}
                                        {stage >= 7 && (
                                            <motion.div key="msg-ai-2" initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} className={getMsgClass(true)}>
                                                Sure, I'll have one of our sales team reach out in the next 5 minutes & arrange that for you
                                            </motion.div>
                                        )}
                                        {stage >= 8 && (
                                            <motion.div key="msg-user-2" initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} className={getMsgClass(false)}>
                                                Perfect, look forward to the call.
                                            </motion.div>
                                        )}
                                        {stage >= 9 && (
                                            <motion.div key="msg-ai-3" initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} className={getMsgClass(true)}>
                                                No problem.
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Phone Input Shell */}
                                <div className="bg-[#0a0a0a] p-4 pt-2 border-t border-white/5">
                                    <div className="h-10 bg-zinc-900 rounded-full border border-white/10 flex items-center px-4 justify-between">
                                        <div className="text-zinc-600 text-xs">Text Message</div>
                                        <div className="w-7 h-7 -mr-1 rounded-full bg-orange-500 flex items-center justify-center">
                                            <ArrowRight className="w-3.5 h-3.5 text-white" />
                                        </div>
                                    </div>
                                    <div className="h-1 w-24 bg-white/20 rounded-full mx-auto mt-6 mb-1" />
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
