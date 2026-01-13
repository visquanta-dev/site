'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Send, ChevronLeft, Video, Phone, Info } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

// SMS-style conversation
const DEMO_CONVERSATION = [
    { role: 'ai', text: "Hi! This is Sarah from VisQuanta Motors. I saw you checking out the 2024 Explorer. Did you have any questions about the features?" },
    { role: 'user', text: "Yeah, does it have the tow package?" },
    { role: 'ai', text: "Yes, it does! Class IV trailer hitch and 5,600lb towing capacity. I actually have a walkaround video of that exact VIN. Want me to text it to you?" },
    { role: 'user', text: "That would be great, thanks." },
    { role: 'ai', text: "Sent! 🎥 Let me know what you think. When are you free to come see it in person?" },
    { role: 'user', text: "Maybe Saturday morning?" },
    { role: 'ai', text: "Saturday works. I have an opening at 10:15 AM or 11:30 AM. Which one do you prefer?" }
];

export default function LiveDemo() {
    const [messages, setMessages] = useState<any[]>([DEMO_CONVERSATION[0]]);
    const [currentStep, setCurrentStep] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const advanceConversation = () => {
        if (currentStep >= DEMO_CONVERSATION.length - 1) {
            setMessages([DEMO_CONVERSATION[0]]);
            setCurrentStep(0);
            return;
        }

        const nextStep = currentStep + 1;
        const nextMsg = DEMO_CONVERSATION[nextStep];

        if (nextMsg.role === 'ai') {
            setIsTyping(true);
            setTimeout(() => {
                setIsTyping(false);
                setMessages(prev => [...prev, nextMsg]);
                setCurrentStep(nextStep);
            }, 1500);
        } else {
            setMessages(prev => [...prev, nextMsg]);
            setCurrentStep(nextStep);
            setTimeout(() => advanceConversation(), 800);
        }
    };

    useEffect(() => {
        let timeout: any;
        if (currentStep < DEMO_CONVERSATION.length - 1) {
            if (DEMO_CONVERSATION[currentStep + 1].role === 'user') {
                timeout = setTimeout(() => {
                    advanceConversation();
                    setTimeout(() => advanceConversation(), 1200);
                }, 2500);
            }
        }
        return () => clearTimeout(timeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentStep]);


    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-900/50 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">

                    {/* Copy Side */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                            Feels Like <span className="text-[#FF7404]">Texting a Friend</span>
                        </h2>
                        <p className="text-zinc-500 text-lg mb-8 leading-relaxed">
                            No clunky web portals. No "please wait for an agent". Just a natural SMS conversation that fits right into your customer's life.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/5 rounded-xl">
                                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                                    <Video className="w-5 h-5 text-green-500" />
                                </div>
                                <div className="text-left">
                                    <div className="text-white font-bold text-sm">Rich Media Support</div>
                                    <div className="text-zinc-500 text-xs">Send videos, photos, and PDFs intimately</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/5 rounded-xl">
                                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-blue-500" />
                                </div>
                                <div className="text-left">
                                    <div className="text-white font-bold text-sm">Instant Call Handoff</div>
                                    <div className="text-zinc-500 text-xs">Seamlessly switch from text to voice call</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phone Visual Side */}
                    <div className="order-1 lg:order-2 flex justify-center">
                        <div className="relative w-[320px] h-[650px] bg-black border-[8px] border-[#1a1a1a] rounded-[3.5rem] shadow-2xl shadow-black overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-all duration-500">
                            {/* Status Bar */}
                            <div className="absolute top-0 inset-x-0 h-14 bg-zinc-950/80 backdrop-blur-md z-20 flex items-end justify-between px-6 pb-2">
                                <span className="text-white/80 text-xs font-medium">9:41</span>
                                <div className="flex gap-1.5">
                                    <div className="w-4 h-2.5 bg-white/80 rounded-[1px]" />
                                    <div className="w-4 h-2.5 bg-white/80 rounded-[1px]" />
                                    <div className="w-0.5 h-1 bg-white/30" />
                                </div>
                            </div>
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-30" />

                            {/* App Header */}
                            <div className="pt-20 pb-4 px-4 bg-zinc-950 border-b border-white/5 flex items-center gap-3">
                                <ChevronLeft className="text-[#FF7404] w-6 h-6" />
                                <div className="flex-1 text-center">
                                    <div className="flex flex-col items-center">
                                        <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center mb-1">
                                            <span className="text-xs font-bold text-zinc-400">VM</span>
                                        </div>
                                        <div className="text-xs font-medium text-white">VisQuanta Motors</div>
                                    </div>
                                </div>
                                <Info className="text-[#FF7404] w-5 h-5" />
                            </div>

                            {/* Messages Area */}
                            <div
                                ref={scrollRef}
                                className="h-[430px] overflow-y-auto p-4 space-y-3 bg-black"
                            >
                                <AnimatePresence mode="popLayout">
                                    {messages.map((msg, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div className={`max-w-[80%] p-3 rounded-2xl text-[13px] leading-snug ${msg.role === 'user'
                                                    ? 'bg-[#FF7404] text-black font-medium rounded-br-sm'
                                                    : 'bg-[#222] text-zinc-200 rounded-bl-sm'
                                                }`}>
                                                {msg.text}
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex justify-start"
                                    >
                                        <div className="bg-[#222] p-3 rounded-2xl rounded-bl-sm">
                                            <div className="flex gap-1">
                                                <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-0" />
                                                <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-75" />
                                                <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-150" />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            {/* Input Area */}
                            <div className="absolute bottom-0 inset-x-0 bg-zinc-950 p-4 pb-8 border-t border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#1c1c1e] flex items-center justify-center">
                                        <Video className="w-4 h-4 text-zinc-500" />
                                    </div>
                                    <div className="flex-1 h-9 bg-[#1c1c1e] rounded-full border border-zinc-800 flex items-center px-4 text-xs text-zinc-500">
                                        iMessage
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-[#1c1c1e] flex items-center justify-center">
                                        <span className="text-[#FF7404] font-bold">↑</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
