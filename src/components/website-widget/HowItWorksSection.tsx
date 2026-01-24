'use client';

import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import Image from 'next/image';
import MobilePhoneMockup from '../mobile/MobilePhoneMockup';
import { useRef } from 'react';

const DEMO_SCENARIO = {
    id: 'how-it-works-demo',
    contactName: 'VisQuanta AI',
    contactRole: 'AUTO ASSISTANT',
    avatarInitials: 'AI',
    messages: [
        { id: '1', sender: 'agent' as const, content: "Hi! I see you're looking at the 2024 Tahoe. Any questions?", type: 'text' as const },
        { id: '2', sender: 'user' as const, content: "Yes, what colors do you have?", type: 'text' as const },
    ]
};

// Typewriter component that types text character by character
function TypewriterText({ text, delay = 0, speed = 50, onComplete }: { text: string, delay?: number, speed?: number, onComplete?: () => void }) {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setIsTyping(true);
            let currentIndex = 0;

            const typeInterval = setInterval(() => {
                if (currentIndex < text.length) {
                    setDisplayedText(text.slice(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(typeInterval);
                    setIsTyping(false);
                    onComplete?.();
                }
            }, speed);

            return () => clearInterval(typeInterval);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [text, delay, speed, onComplete]);

    // Blinking cursor effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <span className="font-medium">
            {displayedText}
            <span className={`border-r-2 border-orange-500 ml-0.5 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>&nbsp;</span>
        </span>
    );
}

// Wrapper that triggers typewriter when in view
function InViewTypewriter({ text, delay = 0, speed = 50, onComplete }: { text: string, delay?: number, speed?: number, onComplete?: () => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <span ref={ref}>
            {isInView ? <TypewriterText text={text} delay={delay} speed={speed} onComplete={onComplete} /> : <span className="opacity-0">{text}</span>}
        </span>
    );
}

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-32 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/5 border border-orange-500/10 mb-8"
                    >
                        <Zap className="w-3 h-3 text-orange-500" />
                        <span className="text-orange-500 text-[10px] font-bold uppercase tracking-[0.2em]">The Workflow</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight"
                    >
                        From Website to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">SMS</span> in Seconds
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-zinc-400 font-light leading-relaxed"
                    >
                        We bridge the gap between your desktop website and their mobile device.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 relative items-start">
                    {/* Connector Lines (Desktop only) */}
                    <div className="hidden lg:block absolute top-[200px] left-[18%] right-[18%] z-0">
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
                        <div className="absolute top-0 left-1/4 w-2 h-2 bg-orange-500/30 rounded-full -translate-y-1/2" />
                        <div className="absolute top-0 right-1/4 w-2 h-2 bg-orange-500/30 rounded-full -translate-y-1/2" />
                    </div>

                    {/* Step 1 */}
                    <StepCard
                        number="01"
                        title="Visitor Clicks Widget"
                        desc="They have a question while browsing your inventory. They click the chat bubble that appears on your site."
                        delay={0}
                    >
                        <div className="h-[320px] w-full bg-zinc-900/50 rounded-2xl border border-white/5 relative overflow-hidden flex items-center justify-center group">
                            {/* Dealership Mockup Image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                            <Image
                                src="/images/sethwadley.png"
                                alt="Seth Wadley Dealership"
                                fill
                                className="object-cover object-top opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                            />

                            <div className="absolute bottom-8 right-8 z-20">
                                <motion.div
                                    className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.5)] cursor-pointer overflow-hidden ring-4 ring-orange-500/20"
                                    whileHover={{ scale: 1.1 }}
                                    animate={{ scale: [1, 1.08, 1] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Image
                                        src="/images/headshot-example-4.webp"
                                        alt="Agent"
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                {/* Animated Cursor */}
                                <motion.div
                                    className="absolute -bottom-3 -right-3"
                                    animate={{ x: [-15, 0, -15], y: [-15, 0, -15] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="drop-shadow-xl">
                                        <path d="M5.5 3.21l10.08 10.9-4.87 1.12 3.86 8.35-2.58 1.19-3.95-8.54-3.66 3.63V3.21z" fill="white" stroke="black" strokeWidth="1.5" />
                                    </svg>
                                </motion.div>
                            </div>
                        </div>
                    </StepCard>

                    {/* Step 2 */}
                    <StepCard
                        number="02"
                        title="Inputs Mobile Number"
                        desc="To get an answer, they provide their name and real phone number. This is the moment of capture."
                        delay={0.1}
                    >
                        <div className="h-[320px] w-full bg-zinc-900/50 rounded-2xl border border-white/5 relative overflow-hidden flex items-center justify-center p-8">
                            <div className="w-full space-y-4">
                                {/* Name Field */}
                                <div className="h-12 bg-zinc-800/80 rounded-xl border border-white/10 flex items-center px-4 text-white text-sm">
                                    <span className="text-zinc-500 mr-3 text-xs font-medium uppercase tracking-wider">Name</span>
                                    <InViewTypewriter text="James Smith" delay={300} speed={80} />
                                </div>
                                {/* Phone Field */}
                                <div className="flex gap-3">
                                    <div className="w-20 h-12 bg-zinc-800/80 rounded-xl border border-white/10 flex items-center justify-center text-zinc-400 text-sm font-medium">🇺🇸 +1</div>
                                    <div className="flex-1 h-12 bg-zinc-800/80 rounded-xl border border-white/10 flex items-center px-4 text-white text-sm">
                                        <InViewTypewriter text="(555) 123-4567" delay={1500} speed={70} />
                                    </div>
                                </div>
                                <motion.button
                                    className="w-full h-12 bg-zinc-800/80 rounded-xl text-zinc-500 font-bold text-sm flex items-center justify-center gap-2 border border-white/5"
                                    whileInView={{ backgroundColor: "#f97316", color: "#000", borderColor: "#f97316" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 3.5, duration: 0.4 }}
                                >
                                    Text Me
                                    <ArrowRight className="w-4 h-4" />
                                </motion.button>
                                <p className="text-center text-[10px] text-zinc-600 font-medium uppercase tracking-wider">By clicking, I agree to receive texts.</p>
                            </div>
                        </div>
                    </StepCard>

                    {/* Step 3 */}
                    <StepCard
                        number="03"
                        title="Conversation Moves to SMS"
                        desc="The chat continues on their phone. The tab can close; you still own the contact."
                        delay={0.2}
                    >
                        <div className="h-[320px] w-full bg-zinc-900/50 rounded-2xl border border-white/5 relative overflow-hidden flex items-center justify-center pt-6">
                            {/* Scale down to fit card */}
                            <div className="transform scale-[0.55] origin-top">
                                <MobilePhoneMockup scenario={DEMO_SCENARIO} isActive={true} />
                            </div>
                        </div>
                    </StepCard>

                </div>
            </div>
        </section>
    );
}

function StepCard({ number, title, desc, children, delay = 0 }: { number: string, title: string, desc: string, children: React.ReactNode, delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className="relative z-10 group"
        >
            <div className="mb-8 relative">
                {/* Gradient Border Effect on Hover */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/20 group-hover:via-orange-500/5 group-hover:to-transparent rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                {children}
                {/* Step Number Badge */}
                <div className="absolute top-5 left-5 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-center">
                    <span className="text-orange-500 font-black text-xs tracking-wider">{number}</span>
                </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-orange-500 transition-colors duration-300">{title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
        </motion.div>
    )
}
