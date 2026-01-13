'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, User } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const DEMO_CONVERSATION = [
    { role: 'ai', text: "Welcome to VisQuanta Motors! Are you looking for a new or used vehicle today?" },
    { role: 'user', text: "I'm looking for a used SUV with low mileage." },
    { role: 'ai', text: "Excellent choice. We have several low-mileage SUVs in stock. Are you interested in any specific brand like Toyota, Honda, or Ford?" },
    { role: 'user', text: "I prefer Toyota." },
    { role: 'ai', text: "Got it. We have a 2022 Toyota RAV4 with only 12k miles available. Would you like to schedule a test drive for this week?" },
    { role: 'user', text: "Yes, works for me." },
    { role: 'ai', text: "Perfect! What day and time works best for you?" }
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
            // Reset demo
            setMessages([DEMO_CONVERSATION[0]]);
            setCurrentStep(0);
            return;
        }

        const nextStep = currentStep + 1;
        const nextMsg = DEMO_CONVERSATION[nextStep];

        // Simulate typing delay based on role
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
            // Auto trigger AI response after user
            setTimeout(() => advanceConversation(), 500);
        }
    };

    // Auto-play the demo
    useEffect(() => {
        let timeout: any;
        if (currentStep < DEMO_CONVERSATION.length - 1) {
            // If it's user's turn to "speak", wait a bit then auto-advance
            if (DEMO_CONVERSATION[currentStep + 1].role === 'user') {
                timeout = setTimeout(() => {
                    advanceConversation();
                    // Then immediately trigger AI turn logic handled in advanceConversation
                    setTimeout(() => advanceConversation(), 1000);
                }, 2000);
            }
        }
        return () => clearTimeout(timeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentStep]);


    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        See It In <span className="text-[#FF7404]">Action</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Experience how our AI naturally guides visitors from curiosity to conversion in seconds.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div className="bg-[#111] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative">
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-[#FF7404] to-[#ff9040] flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <Bot className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="font-bold text-white">VisQuanta Assistant</div>
                                    <div className="text-xs text-white/80">Typically replies instantly</div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-white/20" />
                                <div className="w-3 h-3 rounded-full bg-white/20" />
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div
                            ref={scrollRef}
                            className="h-[400px] overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-[#111] to-[#0A0A0A]"
                        >
                            <AnimatePresence mode="popLayout">
                                {messages.map((msg, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-zinc-700' : 'bg-[#FF7404]/20'}`}>
                                                {msg.role === 'user' ? <User className="w-4 h-4 text-zinc-300" /> : <Bot className="w-4 h-4 text-[#FF7404]" />}
                                            </div>
                                            <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                                                    ? 'bg-[#FF7404] text-black font-medium rounded-tr-none'
                                                    : 'bg-white/5 border border-white/10 text-zinc-300 rounded-tl-none'
                                                }`}>
                                                {msg.text}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex gap-3 justify-start"
                                >
                                    <div className="w-8 h-8 rounded-full bg-[#FF7404]/20 flex items-center justify-center shrink-0">
                                        <Bot className="w-4 h-4 text-[#FF7404]" />
                                    </div>
                                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-white/10 bg-[#111]">
                            <div className="relative">
                                <div className="h-12 bg-white/5 border border-white/10 rounded-xl w-full px-4 flex items-center text-zinc-500 text-sm">
                                    Type a message...
                                </div>
                                <div className="absolute right-2 top-2 p-2 bg-[#FF7404] rounded-lg">
                                    <Send className="w-4 h-4 text-black" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
