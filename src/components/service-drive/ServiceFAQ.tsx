'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowRight, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const educationalFaqs = [
    {
        question: "What is voice AI for car dealerships?",
        answer: "Voice AI for car dealerships is artificial intelligence that answers inbound phone calls, understands what customers need, and takes action — like booking service appointments — without human intervention. Unlike voicemail or IVR menus, voice AI speaks naturally and integrates with your dealership systems to resolve calls instantly."
    },
    {
        question: "How does voice AI work for service departments?",
        answer: "When a customer calls your service department, voice AI answers immediately — no hold music, no voicemail. It understands natural language (\"my check engine light is on\"), pulls vehicle data from your DMS, checks technician availability, and books appointments directly into your scheduler. The customer gets an SMS confirmation. Your advisor gets a full transcript."
    },
    {
        question: "What is automotive service scheduling?",
        answer: "Automotive service scheduling is the process of booking customer appointments for vehicle maintenance and repairs. With voice AI, this happens automatically — customers call, voice AI checks availability, and the appointment is booked in real-time. No staff required. No callbacks needed."
    },
    {
        question: "Can voice AI book appointments directly into my DMS?",
        answer: "Yes. Voice AI integrates with your existing DMS and scheduling tools to book appointments in real-time while the customer is still on the call. No manual entry. No double-booking. The appointment appears instantly in your advisor's calendar."
    },
    {
        question: "What happens when voice AI can't answer a question?",
        answer: "Voice AI is trained to handle 90%+ of common service calls. For complex issues requiring human judgment — like dispute resolution or unusual requests — it captures all details, creates a transcript, and routes to the appropriate advisor for callback. No call is ever lost."
    }
];

const buyingIntentFaqs = [
    {
        question: "How much does dealership voice AI cost?",
        answer: "Voice AI pricing varies based on call volume and dealership size. Most service departments see ROI within 30 days — the revenue recovered from missed calls typically exceeds the cost by 5-10x. Contact us for a custom quote based on your call volume."
    },
    {
        question: "Is voice AI better than a call center for dealerships?",
        answer: "Yes. Call centers have hold times, staffing issues, and can't access your DMS. Voice AI answers instantly, 24/7, integrates with your systems, and books appointments in real-time. No hold music. No transfers. No \"let me check and call you back.\""
    },
    {
        question: "How do dealerships handle missed service calls?",
        answer: "Most don't — 80% of service calls go unanswered during peak hours and after 5pm. Those customers call competitors. Voice AI solves this by answering 100% of calls, 24/7/365. Every missed call becomes a booked appointment instead of lost revenue."
    },
    {
        question: "What is fixed ops automation?",
        answer: "Fixed ops automation uses AI to streamline service department operations — answering calls, scheduling appointments, sending status updates, and reducing manual workload. Voice AI is the front door of fixed ops automation, capturing every customer call without adding staff."
    },
    {
        question: "Does voice AI work after hours and on weekends?",
        answer: "Yes. Voice AI works 24/7/365 — nights, weekends, holidays. This is when 80% of calls typically go unanswered. Voice AI captures every after-hours call and books appointments while your competitors send customers to voicemail."
    }
];

const Item = ({ question, answer, isOpen, toggle, index }: { question: string, answer: string, isOpen: boolean, toggle: () => void, index: number }) => {
    return (
        <motion.div
            className="group rounded-2xl overflow-hidden mb-4 relative"
            style={{
                background: isOpen ? 'rgba(20,20,20,0.95)' : 'rgba(17,17,17,0.8)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid',
                borderColor: isOpen ? 'rgba(255,107,53,0.4)' : 'rgba(255,255,255,0.08)',
            }}
            whileHover={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                borderColor: isOpen ? 'rgba(255,107,53,0.5)' : 'rgba(255,255,255,0.15)',
                y: -2,
                transition: { duration: 0.2 }
            }}
        >
            <button
                onClick={toggle}
                className="w-full flex items-start justify-between p-6 text-left relative z-10"
            >
                <div className="flex gap-4">
                    <span className={`text-[11px] font-mono mt-1.5 transition-colors duration-300 ${isOpen ? 'text-[#FF6B35]' : 'text-white/20'}`}>
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-lg font-bold pr-4 transition-colors duration-300 leading-snug ${isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                        {question}
                    </span>
                </div>

                <motion.div
                    className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 mt-0.5 ${isOpen ? 'bg-[#FF6B35] border-[#FF6B35] text-black shadow-[0_0_15px_rgba(255,107,53,0.4)]' : 'border-[#FF6B35]/20 text-[#FF6B35] group-hover:border-[#FF6B35] group-hover:bg-[#FF6B35]/10'}`}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "circOut" }}
                >
                    <Plus className="w-5 h-5" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="px-6 pb-8 pl-[60px] pr-8">
                            <p className="text-[#A1A1AA] leading-[1.7] text-[16px] font-regular">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Subtle glow on left edge when open */}
            {isOpen && (
                <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-y-0 left-0 w-1 bg-[#FF6B35] shadow-[0_0_20px_2px_rgba(255,107,53,0.5)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                />
            )}
        </motion.div>
    );
};

export default function ServiceFAQ() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggle = (id: string) => {
        setOpenIndex(prev => prev === id ? null : id);
    };

    return (
        <section className="relative py-12 md:py-32 bg-[#030303] border-t border-white/[0.05] overflow-hidden">

            {/* Background Atmosphere */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#FF6B35]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/20 mb-6"
                    >
                        <HelpCircle className="w-3 h-3 text-[#FF6B35]" />
                        <span className="text-[10px] font-bold text-[#FF6B35] uppercase tracking-[0.2em]">Voice AI For Dealerships - FAQ</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[#A1A1AA] text-lg font-light leading-relaxed">
                        Everything service managers ask about Voice AI.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Educational Column */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-xs font-bold text-[#6B7280] uppercase tracking-[0.15em] mb-6 pl-2"
                        >
                            Understanding Voice AI
                        </motion.h3>
                        <div className="space-y-2">
                            {educationalFaqs.map((faq, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Item
                                        question={faq.question}
                                        answer={faq.answer}
                                        isOpen={openIndex === `left-${i}`}
                                        toggle={() => toggle(`left-${i}`)}
                                        index={i}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Buying Intent Column */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-xs font-bold text-[#6B7280] uppercase tracking-[0.15em] mb-6 pl-2"
                        >
                            Making The Decision
                        </motion.h3>
                        <div className="space-y-2">
                            {buyingIntentFaqs.map((faq, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                >
                                    <Item
                                        question={faq.question}
                                        answer={faq.answer}
                                        isOpen={openIndex === `right-${i}`}
                                        toggle={() => toggle(`right-${i}`)}
                                        index={i} // Reset index visually if desired, or i + 5
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 flex flex-col items-center justify-center text-center"
                >
                    <p className="text-white/60 mb-6 font-light">Still have questions?</p>
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 hover:border-[#FF6B35] hover:bg-[#FF6B35]/10"
                    >
                        <span className="relative z-10 text-sm font-bold text-white tracking-wide group-hover:text-[#FF6B35] transition-colors">
                            CONTACT OUR TEAM
                        </span>
                        <ArrowRight className="w-4 h-4 text-white group-hover:text-[#FF6B35] group-hover:translate-x-1 transition-all" />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
