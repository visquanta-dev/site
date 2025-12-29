'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        q: "What type of promotions can we run?",
        a: "Almost anything. Aged inventory pushes, model-specific incentives, lease pull-aheads, equity mining offers, service specials, and holiday events are the most common. If you have an offer, we can build a campaign around it."
    },
    {
        q: "Where do the contact lists come from?",
        a: "You provide them. We can ingest data from your CRM (eLeads, VinSolutions, etc.), DMS, or any other list source as long as you have the legal right to contact them. We handle the cleaning and segmentation."
    },
    {
        q: "How are the replies handled?",
        a: "Our conversational system handles the initial engagement, qualification, and appointment booking. If a customer asks a complex question that requires human intervention, we can route it to your team, but the goal is to hand you a booked appointment, not a raw lead."
    },
    {
        q: "How fast can we launch a campaign?",
        a: "Once we have your offer details and list, we can usually have the assets built and ready for review within 24-48 hours."
    },
    {
        q: "How do you handle opt-outs?",
        a: "Our system automatically processes STOP replies and manages the suppression list globally for your dealership to ensure full compliance."
    },
    {
        q: "Can you handle volumes over 100k?",
        a: "Yes. Our infrastructure is built for enterprise scale. We manage the pacing (messages per second) to ensure deliverability and to prevent flooding your team with too many appointments at once."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-[#020202] relative z-10">
            <div className="container mx-auto px-4 md:px-6 max-w-[800px]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Common Questions</h2>
                    <p className="text-white/60">Details on execution and compliance.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-white/10">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full py-6 flex items-center justify-between text-left group"
                            >
                                <span className={`text-lg font-medium transition-colors ${openIndex === i ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                                    {faq.q}
                                </span>
                                <ChevronDown className={`w-5 h-5 text-white/40 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-[#FF7404]' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-6 text-white/50 leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
