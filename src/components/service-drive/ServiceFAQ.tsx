'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ChevronRight } from 'lucide-react';

const faqs = [
    {
        question: "Does VisQuanta integrate with my existing DMS?",
        answer: "Yes. VisQuanta features deep 2-way integration with major DMS platforms including CDK Drive, Reynolds & Reynolds, and Tekion. It can pull customer records, check vehicle history, and write preliminary ROs directly into your system."
    },
    {
        question: "How does the AI handle complex diagnostic requests?",
        answer: "For complex issues (e.g., 'weird rattling noise at 60mph'), the AI uses an LLM to ask clarifying questions about the symptoms. It then categorizes the appointment as 'Diagnostic' and allocates the appropriate shop time, adding detailed notes for the service advisor."
    },
    {
        question: "What happens if a customer demands to speak to a human?",
        answer: "The AI is trained to recognize frustration or explicit requests for a human agent. It can seamlessly warm-transfer the call to your BDC or an on-call advisor during business hours, or take a high-priority message for immediate callback."
    },
    {
        question: "Can it handle emergency roadside assistance coordination?",
        answer: "Absolutely. If the AI detects keywords like 'stuck', 'accident', or 'won't start', it shifts to an Emergency protocol. It can automatically send a towing request link or connect the driver to your preferred towing partner immediately."
    },
    {
        question: "Does it work with scheduling tools like Xtime?",
        answer: "Yes, we integrate with Xtime, myKaarma, and TimeHighway. The AI reads your shop's real-time capacity grid to ensure it never double-books a slot or books a waiter appointment when your lounge is closed."
    }
];

export default function ServiceFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-32 bg-[#030303] relative border-t border-white/[0.05]">
            <div className="max-w-4xl mx-auto px-6 relative z-10">

                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 backdrop-blur-md"
                    >
                        <HelpCircle className="w-3 h-3 text-[#FF7404]" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Technical FAQ</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Service Manager <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#ff9e4d]">Intel</span>
                    </h2>
                    <p className="text-white/40 text-lg font-light">
                        Deep dive into the operational protocols and integration standards.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`group rounded-[1.5rem] border transition-all duration-500 overflow-hidden ${openIndex === i ? 'bg-white/[0.03] border-[#FF7404]/30 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]' : 'bg-transparent border-white/[0.05] hover:border-white/20 hover:bg-white/[0.01]'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-8 text-left relative"
                            >
                                {/* Active Indicator Bar */}
                                {openIndex === i && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF7404]"
                                    />
                                )}

                                <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${openIndex === i ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 ml-6 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-[#FF7404] border-[#FF7404] text-black rotate-90' : 'border-white/10 text-white/40 group-hover:border-white/30 group-hover:text-white'}`}>
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <div className="px-8 pb-8 pt-2">
                                            <p className="text-white/50 leading-relaxed font-light text-lg border-t border-white/5 pt-6">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
