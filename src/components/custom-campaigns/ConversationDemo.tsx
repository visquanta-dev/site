'use client';

import { motion } from 'framer-motion';
import { Calendar, Check, Clock, User } from 'lucide-react';
import PhoneDemo from '@/components/lead-reactivation/PhoneDemo';
import type { Message } from '@/components/lead-reactivation/PhoneDemo';

const messages: Message[] = [
    { id: '1', sender: 'agent', content: "Hi, this is Alex with Corwin Honda Colorado Springs. Is this still Jeffs number?" },
    { id: '2', sender: 'user', content: "Yes it is" },
    { id: '3', sender: 'agent', content: "Hi, Jeff I'm reaching out as we're wrapping up the year and have some strong CR-V offers. Have you already purchased, or are you still open to looking?" },
    { id: '4', sender: 'user', content: "Have a vehicle, but always looking for a good deal" },
    { id: '5', sender: 'agent', content: "Makes sense. Would you be trading your current vehicle, or keeping it? And when you look at a deal, is total price your main focus?" },
    { id: '6', sender: 'user', content: "Total price" },
    { id: '7', sender: 'agent', content: "Got it. Final numbers depend on the exact CR-V and any trade value. You're welcome to browse our inventory here:\nhttps://www.corwinhondacoloradosprings.com/\n\nIf you want, I can also give you a quick trade estimate or walk through numbers on a short call." },
    { id: '8', sender: 'user', content: "Ok you can give me a call, today at 4pm." },
    { id: '9', sender: 'agent', content: "Perfect Jeff, ill speak to you at 4pm" }
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
                    {/* Left Panel: Phone Mockup (3 cols) */}
                    <div className="hidden lg:flex lg:col-span-3 items-center justify-center">
                        <PhoneDemo
                            messages={messages}
                            title="Alex"
                            subtitle="Corwin Honda Colorado Springs"
                        />
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

                                <div className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-2">Callback Scheduled</div>
                                <h3 className="text-2xl font-bold mb-6">CR-V Trade-In Consultation</h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                            <User className="w-5 h-5 text-gray-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-400 font-bold uppercase">Customer</div>
                                            <div className="font-bold">Jeff</div>
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
                                This callback was automatically routed to the "New Vehicle Sales" queue based on the "Total Price" focus and "Trade-In" intent detected in conversation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
