'use client';

import { motion } from 'framer-motion';
import { Video, Phone } from 'lucide-react';
import MobilePhoneMockup from '../mobile/MobilePhoneMockup';

// SMS-style conversation
// SMS-style conversation
const DEMO_SCENARIO = {
    id: 'demo-full',
    contactName: 'James (Web Widget)',
    contactRole: 'SOURCE: WEBSITE WIDGET',
    avatarInitials: 'JA',
    messages: [
        {
            id: '0',
            sender: 'system' as const,
            content: { title: 'MOVED FROM WEBSITE' },
            type: 'source_tag' as const
        },
        {
            id: '1',
            sender: 'agent' as const,
            content: "Hi James, you just reached out via our website, how can I help you today?",
            type: 'text' as const
        },
        {
            id: '2',
            sender: 'user' as const,
            content: "Do you have any white Tahoes in stock?",
            type: 'text' as const
        },
        {
            id: '3',
            sender: 'agent' as const,
            content: "Yes, we have 3 available! Two 2024 RSTs and one Z71. Would you like to see photos?",
            type: 'text' as const
        },
        {
            id: '4',
            sender: 'user' as const,
            content: "Send the Z71 please.",
            type: 'text' as const
        },
        {
            id: '5',
            sender: 'agent' as const,
            content: "Sent! 📸 It just arrived yesterday. When can you stop by for a test drive?",
            type: 'text' as const
        }
    ]
};

export default function LiveDemo() {
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
                                    <div className="text-zinc-500 text-xs">Send videos, photos, and PDFs instantly</div>
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
                    <div className="order-1 lg:order-2 flex justify-center scale-125 origin-center transform-gpu">
                        <MobilePhoneMockup scenario={DEMO_SCENARIO} isActive={true} />
                    </div>

                </div>
            </div>
        </section>
    );
}
