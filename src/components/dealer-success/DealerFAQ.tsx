'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "Do I need to hire someone to manage this platform?",
        answer: "No. VisQuanta is a fully managed service. Your dedicated Account Manager handles script adjustments, campaign launches, and performance monitoring. We act as an extension of your BDC, not just another software vendor."
    },
    {
        question: "How long does onboarding take?",
        answer: "Because we handle the heavy lifting, most dealerships are live within 7-10 days. This includes DMS integration, custom script approval, and staff training sessions led by our automotive experts."
    },
    {
        question: "Is there a long-term contract?",
        answer: "We earn your business every month. While we offer incentives for quarterly or annual commitments, our standard agreement is month-to-month. If we don't deliver ROI, you shouldn't have to stay."
    },
    {
        question: "What happens if the AI encounters a question it can't answer?",
        answer: "This is where our Human-in-the-Loop protocol shines. Our U.S.-based monitoring team instantly reviews the conversation context and either steers the AI back on track or escalates the conversation to your team with a priority note."
    },
    {
        question: "How involved does my GM need to be?",
        answer: "Minimal involvement is required day-to-day. We recommend a 15-minute monthly strategy call to review performance metrics and align on upcoming sales events or inventory priorities."
    }
];

export default function DealerFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-32 bg-[#050505] relative border-t border-white/[0.05]">
            <div className="max-w-4xl mx-auto px-6">

                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
                        <HelpCircle className="w-3 h-3 text-[#FF7404]" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Common Questions</span>
                    </div>

                    <h2 className="text-4xl font-bold text-white mb-4">
                        Everything You Need to Know
                    </h2>
                    <p className="text-white/40 text-lg">
                        Transparent answers about our service, our team, and your results.
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
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === i ? 'bg-white/[0.03] border-[#FF7404]/30' : 'bg-transparent border-white/[0.05] hover:border-white/10'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`text-lg font-medium transition-colors ${openIndex === i ? 'text-white' : 'text-white/70'}`}>
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full border transition-all ${openIndex === i ? 'bg-[#FF7404] border-[#FF7404] text-black' : 'border-white/10 text-white/40'}`}>
                                    {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-white/50 leading-relaxed font-light border-t border-white/5 pt-4">
                                            {faq.answer}
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
