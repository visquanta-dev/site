'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Info, ShieldCheck, BarChart3 } from 'lucide-react';

// --- Types ---
export type Message = {
    id: string;
    sender: 'user' | 'agent' | 'system';
    content: string | ReactNode;
    type?: 'text' | 'notification';
};

interface PhoneDemoProps {
    children?: ReactNode;
    messages?: Message[];
    title?: string;
    subtitle?: string;
}

// --- Default Data ---
const defaultScenario: Message[] = [
    { id: 'msg1', sender: 'agent', content: "Hi John, it’s Amy at Westline Motors. You stopped by a little while back to look at one of our vehicles, so I just wanted to check if you’re still looking." },
    { id: 'msg2', sender: 'user', content: "Yeah, I am actually, my lease is up next month." },
    { id: 'msg3', sender: 'agent', content: "Perfect timing then. We’ve had some great stock come in recently. Would you like to pop by for a look and a quick test drive?" },
    { id: 'msg4', sender: 'user', content: "Sure, that works." },
    { id: 'msg5', sender: 'agent', content: "Perfect. I’ll have one of our sales team give you a quick call to lock in a time. You can expect a call from them within the next 30 minutes." },
    { id: 'msg6', sender: 'user', content: "Ok, thanks for getting in touch." },
    { id: 'msg7', sender: 'agent', content: "You’re very welcome, John. Speak shortly and have a great day." }
];

// --- Sub-Components ---
const TypingIndicator = () => (
    <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="flex justify-end mb-2"
    >
        <div className="bg-[#FF7404] px-4 py-3 rounded-2xl rounded-tr-sm flex items-center gap-1.5 w-fit">
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0 }}
                className="w-1.5 h-1.5 bg-black rounded-full"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                className="w-1.5 h-1.5 bg-black rounded-full"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                className="w-1.5 h-1.5 bg-black rounded-full"
            />
        </div>
    </motion.div>
);

const ChatBubble = ({ message }: { message: Message }) => {
    const isAgent = message.sender === 'agent';

    if (message.type === 'notification') {
        return (
            <div className="w-full">
                {message.content}
            </div>
        );
    }

    return (
        <div className={`flex w-full mb-2 ${isAgent ? 'justify-end' : 'justify-start'}`}>
            <div className="flex flex-col gap-1 max-w-[85%]">
                <div
                    className={`px-5 py-3 text-[13px] leading-snug relative tracking-normal font-normal shadow-md backdrop-blur-sm
            ${isAgent
                            ? 'bg-[#FF7404] text-black font-medium rounded-2xl rounded-tr-sm'
                            : 'bg-[#262626] text-gray-100 rounded-2xl rounded-tl-sm border border-white/5'
                        }`}
                >
                    {message.content}
                </div>
                {isAgent && (
                    <div className="text-[9px] text-white/30 text-right pr-1 font-bold uppercase tracking-widest">
                        Human Monitored Outreach
                    </div>
                )}
            </div>
        </div>
    );
};

export default function PhoneDemo({ children, messages, title = "Amy (Specialist)", subtitle = "Managed Performance" }: PhoneDemoProps) {
    const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    const activeMessages = messages || defaultScenario;

    // Message Sequencing Logic 
    useEffect(() => {
        if (children) return;

        setVisibleMessages([]);
        let timeouts: NodeJS.Timeout[] = [];
        let accumulatedDelay = 500; // Start delay

        const sequenceMessages = async () => {
            for (const msg of activeMessages) {
                const readingDelay = 1500;
                const typingDelay = msg.sender === 'agent' ? 1200 : 800;
                const preDelay = accumulatedDelay;

                if (msg.sender === 'agent' && msg.type !== 'notification') {
                    timeouts.push(setTimeout(() => setIsTyping(true), preDelay));
                    accumulatedDelay += typingDelay;
                    timeouts.push(setTimeout(() => setIsTyping(false), accumulatedDelay));
                } else if (msg.sender === 'user') {
                    accumulatedDelay += readingDelay;
                } else if (msg.type === 'notification') {
                    accumulatedDelay += 1000;
                }

                timeouts.push(setTimeout(() => {
                    setVisibleMessages(prev => [...prev, msg]);
                    if (chatContainerRef.current) {
                        setTimeout(() => {
                            if (chatContainerRef.current) {
                                chatContainerRef.current.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: 'smooth' });
                            }
                        }, 50);
                    }
                }, accumulatedDelay));
            }
        };

        sequenceMessages();
        return () => timeouts.forEach(clearTimeout);
    }, [children, activeMessages]);

    return (
        <div className="relative w-full max-w-[380px] aspect-[9/18.5] bg-black rounded-[55px] border-[8px] border-[#1a1a1a] shadow-2xl overflow-hidden ring-1 ring-white/10 mx-auto transform scale-90 lg:scale-100 origin-top">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[30px] w-[120px] bg-[#1a1a1a] rounded-b-[20px] z-50 flex justify-center items-center">
                <div className="w-16 h-4 bg-black rounded-full flex gap-2 items-center justify-center px-2">
                    <div className="w-1 h-1 rounded-full bg-[#333]" />
                    <div className="w-1 h-1 rounded-full bg-[#FF7404] animate-pulse" />
                </div>
            </div>

            {/* Screen Content */}
            <div className="w-full h-full bg-black flex flex-col pt-12">

                {/* Chat Header */}
                <div className="px-6 pb-4 border-b border-white/5 flex items-center justify-between bg-black/80 backdrop-blur-md z-10 transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-[10px] text-white/50 font-bold">
                            VQ
                        </div>
                        <div>
                            <div className="text-white text-sm font-bold">{title}</div>
                            <div className="text-white/40 text-[10px] uppercase tracking-wider">{subtitle}</div>
                        </div>
                    </div>
                    <Info className="w-5 h-5 text-[#FF7404]" />
                </div>

                {/* Messages Area */}
                <div
                    ref={chatContainerRef}
                    className="flex-1 overflow-y-auto px-1 py-6 space-y-4 no-scrollbar"
                >
                    {children ? (
                        <div className="h-full">
                            {children}
                        </div>
                    ) : (
                        <AnimatePresence mode="popLayout">
                            {visibleMessages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    className="px-4"
                                >
                                    <ChatBubble message={msg} />
                                </motion.div>
                            ))}
                            {isTyping && <div className="px-4"><TypingIndicator key="typing" /></div>}
                        </AnimatePresence>
                    )}
                </div>

                {/* Input Area */}
                <div className="px-4 pb-8 pt-2">
                    <div className="h-12 bg-[#1c1c1e] rounded-full border border-white/10 flex items-center px-4 justify-between">
                        <span className="text-white/30 text-sm">iMessage</span>
                        <div className="w-8 h-8 rounded-full bg-[#FF7404] flex items-center justify-center">
                            <ArrowUp className="w-4 h-4 text-black" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}


