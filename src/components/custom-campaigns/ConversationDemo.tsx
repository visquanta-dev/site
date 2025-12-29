'use client';

import { motion } from 'framer-motion';
import { Calendar, Check, Clock, User } from 'lucide-react';

const messages = [
    { type: 'system', text: "Hi John, Mike from VQ Motors here. We're low on used Silverados and I see you're in a positive equity position on your '19. I can likely lower your payment on a new '25 today. You around?", time: "10:02 AM" },
    { type: 'user', text: "Maybe, what's the payment looking like?", time: "10:15 AM" },
    { type: 'system', text: "I have a Manager Special on the lot. If your truck is clean, I can get you under $550/mo. Can you bring it by at 4?", time: "10:16 AM" },
    { type: 'user', text: "Yeah I can do 4.", time: "10:45 AM" },
    { type: 'system', text: "Perfect. I'll have the keys at the front desk. Ask for Mike when you pull in.", time: "10:45 AM" }
];

export default function ConversationDemo() {
    return (
        <section className="py-24 bg-[#020202] relative z-10">
            <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Conversations to <span className="text-[#FF7404]">Appointments.</span></h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        We don't just blast messages. Our system engages, qualifies, and books the appointment directly into your calendar.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
                    {/* Left Panel: Message Thread (3 cols) */}
                    <div className="hidden md:flex lg:col-span-3 bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-8 h-[600px] flex-col relative overflow-hidden backdrop-blur-sm">
                        <div className="absolute top-0 left-0 right-0 bg-white/5 p-4 border-b border-white/10 flex items-center gap-3 z-10">
                            <div className="w-10 h-10 rounded-full bg-[#FF7404] flex items-center justify-center text-black font-bold text-sm">
                                VQ
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white">John Doe</div>
                                <div className="text-xs text-white/40">Active Lead • 2019 Silverado Owner</div>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto pt-20 pr-2 space-y-6 custom-scrollbar">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.3 }}
                                    className={`flex ${msg.type === 'system' ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${msg.type === 'system'
                                        ? 'bg-white/10 text-white rounded-tl-sm border border-white/5'
                                        : 'bg-[#FF7404] text-black rounded-tr-sm shadow-[0_4px_14px_rgba(255,116,4,0.3)] font-medium'
                                        }`}>
                                        {msg.text}
                                        <div className={`text-[10px] mt-2 opacity-50 ${msg.type === 'system' ? 'text-white' : 'text-black'}`}>
                                            {msg.time}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Panel: Outcome Card (2 cols) */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white text-black rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-bl-full -z-0 opacity-50 transition-transform group-hover:scale-110" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                                    <Check className="w-3 h-3" />
                                    Confirmed
                                </div>

                                <div className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-2">Appointment Set</div>
                                <h3 className="text-2xl font-bold mb-6">Chevy Silverado Appraisal</h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                            <User className="w-5 h-5 text-gray-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-400 font-bold uppercase">Customer</div>
                                            <div className="font-bold">John Doe</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                            <Calendar className="w-5 h-5 text-gray-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-400 font-bold uppercase">Date & Time</div>
                                            <div className="font-bold">Today @ 4:00 PM</div>
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full py-4 rounded-xl border border-gray-200 font-bold hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    Add to Calendar
                                </button>
                            </div>
                        </div>

                        <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
                            <h4 className="text-white font-bold mb-2">Routing Rules</h4>
                            <p className="text-sm text-white/50">
                                This appointment was automatically routed to the "Senior Appraisals" queue based on the "Trade-In" intent detected in chat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
