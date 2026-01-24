'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        question: "Do you integrate with Independent-focused CRMs like ProMax?",
        answer: "Absolutely. We are built to work with the tools independents actually use, including ProMax, DealerCenter, and eLeads. The integration is seamless: we inject notes and appointments directly into your CRM, so your process doesn't change."
    },
    {
        question: "Can it help with Service Drive phone calls?",
        answer: "Yes. Small dealerships often get overwhelmed by inbound service calls. Our Service Drive Voice AI answers every call instantly, routes it to the right person, or books the appointment automatically: ending the 'eternal hold' frustration for your customers."
    },
    {
        question: "What about leads from Cars.com, AutoTrader, and other third-party sources?",
        answer: "Every third-party lead is engaged the moment it hits your CRM. Whether it's Cars.com, AutoTrader, CarGurus, or your website form: we respond instantly via SMS and begin the qualification process 24/7."
    },
    {
        question: "How do you reactivate my old leads?",
        answer: "We analyze your CRM to identify unsold leads, aged prospects, and declined finance customers. Then we launch targeted AI-driven campaigns (SMS & voice) to re-engage them, often recovering deals you thought were dead."
    },
    {
        question: "How quickly can I go live?",
        answer: "Most independent dealers are fully operational within 3-5 business days. Our team handles the integration, training, and launch: so your staff doesn't have to learn anything new."
    },
    {
        question: "What's the cost compared to hiring a BDC agent?",
        answer: "A fraction of the cost. A single BDC agent costs $40-60k+ per year (plus benefits and turnover costs). AutoMaster delivers 24/7 coverage at a predictable monthly rate, typically saving dealers 60-80% compared to hiring."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
    }
};

export default function IndependentFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px]" />

            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FF7404]/10 border border-[#FF7404]/20 mb-6"
                    >
                        <HelpCircle className="w-8 h-8 text-[#FF7404]" />
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Answers for <br />
                        <span className="text-[#FF7404]">Independent Owners.</span>
                    </h2>
                    <p className="text-zinc-400 text-lg">
                        Everything you need to know about leveling up your dealership's operations.
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-3xl mx-auto space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="group"
                        >
                            <motion.div
                                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === i
                                    ? 'bg-[#0a0a0a] border-[#FF7404]/30 shadow-[0_0_30px_-10px_rgba(255,116,4,0.2)]'
                                    : 'bg-[#080808] border-white/5 hover:border-white/10'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                                >
                                    <span className={`font-bold transition-colors duration-300 ${openIndex === i ? 'text-[#FF7404]' : 'text-white group-hover:text-white/80'
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openIndex === i ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className={`flex-shrink-0 ml-4 ${openIndex === i ? 'text-[#FF7404]' : 'text-white/40'}`}
                                    >
                                        <ChevronDown className="w-5 h-5" />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-zinc-400 leading-relaxed font-light border-t border-white/5 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
