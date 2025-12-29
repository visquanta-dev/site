'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "How do review requests go out 72 hours after purchase?",
        answer: "Our system syncs with your CRM or DMS delivery data. Exactly 72 hours after the vehicle is marked as delivered, our conversational SMS system initiates a personalized request. This timing yields the highest response rate while allowing enough time for any immediate post-sale questions to be handled by your staff."
    },
    {
        question: "Which platforms are monitored in the unified workbench?",
        answer: "We focus on the big three for automotive: Google Business, DealerRater, and Facebook. Every review from these sources flows into one workbench for a consistent response workflow."
    },
    {
        question: "Who receives the negative review escalation alerts?",
        answer: "You can configure alerts to go to specific individuals based on the review score. Most dealers set 1-3 star reviews to immediately notify the General Manager and the Fixed Ops or Sales Manager via SMS and email."
    },
    {
        question: "Does this protect our CSI and OEM scores?",
        answer: "Yes. By identifying frustrated buyers through our private resolution workflow, you can handle the issue 1-on-1 before a customer fills out the official OEM survey. This gives you a chance to turn a negative experience into a positive one before the corporate score is impacted."
    },
    {
        question: "How do the 'conversational SMS' responses work?",
        answer: "It is a rule-based messaging logic that engages buyers in a natural, non-automated tone. Unlike traditional 'Review US' blasts, our system invites dialogue, which increases both the volume and the depth of the reviews you receive."
    },
    {
        question: "Is this safe for our group's branding?",
        answer: "Completely. We use brand-safe response controls and template approval workflows. Your team (or ours) responds using a consistent voice that adheres to your group's specific compliance and tone standards."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-[#030303] border-t border-white/5">
            <div className="container-wide">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className={`border rounded-2xl transition-all duration-300 ${activeIndex === i ? 'bg-white/[0.03] border-[#FF7404]/30' : 'bg-white/[0.01] border-white/5 hover:border-white/10'}`}
                            >
                                <button
                                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className={`font-bold transition-colors ${activeIndex === i ? 'text-[#FF7404]' : 'text-white/80'}`}>
                                        {faq.question}
                                    </span>
                                    {activeIndex === i ? <Minus className="w-4 h-4 text-[#FF7404]" /> : <Plus className="w-4 h-4 text-white/20" />}
                                </button>

                                <AnimatePresence>
                                    {activeIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-sm text-white/40 leading-relaxed border-t border-white/5 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
