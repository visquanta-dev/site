'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

const faqs = [
    {
        question: "How do I get more sales from my existing CRM?",
        answer: "Your CRM is full of leads who wanted to buy but didn't: yet. VisQuanta uses AI-powered conversational SMS to re-engage these dormant contacts (from 1 week to 5 years old) and book them directly into your showroom. Most dealerships see their first appointment within 48-72 hours. It's not new marketing spend; it's recovering revenue from leads you already paid to acquire."
    },
    {
        question: "Can you really sell cars from 3-year-old leads?",
        answer: "Yes. The average car buying cycle is 3-5 years. That 'dead' lead from 2022 might be ready to buy today: they just need someone to reach out. We've helped dealerships close deals from leads as old as 5 years. Seth Wadley Auto Group sold 17 additional vehicles in their first month, many from leads marked 'lost' years ago."
    },
    {
        question: "What's the best way to follow up on dead leads?",
        answer: "Not calls (3-5% answer rate). Not email (1-2% engagement). Conversational SMS gets 39%+ engagement because it feels personal, not spammy. The key is 1-on-1 conversations, not mass blasts. Our AI initiates real back-and-forth texting, monitored by humans, to identify who's actually back in the market."
    },
    {
        question: "Is texting old customers actually legal?",
        answer: "Yes, when done correctly. We only contact leads who provided consent through your dealership. All outreach follows TCPA, CTIA, and state-level regulations. Every conversation includes proper opt-out mechanisms, and our legal team reviews all playbooks. We take compliance extremely seriously: it protects you and us."
    },
    {
        question: "How is this different from Podium, Impel, or other AI tools?",
        answer: "Those tools focus on responding to NEW leads fast. We focus on the leads they've stopped working: the old, cold, 'lost' contacts sitting in your CRM. We don't compete with your AI sales agent or BDC; we work the 95% of your database they're ignoring. Think of us as a parallel revenue stream from existing assets."
    },
    {
        question: "Do I need to change my CRM or train my team?",
        answer: "No and no. We integrate directly with VinSolutions, DealerSocket, eLead, Reynolds, CDK, and 50+ others. Appointments sync directly into your CRM. Your sales team just shows up to close warm, reactivated leads. Zero workflow changes, zero new software to learn."
    },
    {
        question: "What kind of ROI should I expect?",
        answer: "On average, 12-15x return on investment. Here's the math: with $4,800 average profit per unit and a 7% reactivation-to-sale rate, a database of 1,500 cold leads generates $500K+ in annual recovered revenue. Use our calculator to see your specific numbers based on your database size."
    },
    {
        question: "Is this just a chatbot or are there real people involved?",
        answer: "Both. AI handles the initial outreach and identifies high-intent signals, but every conversation is monitored by our human account management team. This 'human-in-the-loop' approach prevents awkward bot responses and ensures your brand is represented professionally. You also get a dedicated account manager who visits your rooftops."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-40 bg-[#020202] relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0">
                {/* Noise texture */}
                <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />

                {/* Ambient glows */}
                <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] bg-[#FF7404]/[0.03] rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none" />

                {/* Top accent */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

                {/* Subtle grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
            </div>

            <div className="container-wide relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">

                    {/* Left: Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                        className="lg:sticky lg:top-40 lg:self-start"
                    >
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-full mb-10 shadow-[0_0_30px_-10px_rgba(255,116,4,0.2)]">
                            <HelpCircle className="w-4 h-4 text-[#FF7404]" />
                            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50">Common Questions</span>
                        </div>

                        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.05] tracking-[-0.02em]">
                            Questions Dealers Ask <br />
                            <span className="bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FF7404] bg-clip-text text-transparent">
                                About Reviving Old Leads
                            </span>
                        </h2>

                        <p className="text-xl text-white/35 leading-[1.9] max-w-md font-light">
                            Everything you need to know about selling cars from your existing CRM. Can't find the answer you're looking for?
                        </p>

                        <div className="mt-12">
                            <a href="/contact" className="group inline-flex items-center gap-3 text-[#FF7404] font-semibold text-sm">
                                <span className="group-hover:underline">Contact our team</span>
                                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>

                        {/* Decorative element */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="absolute -bottom-20 -left-20 w-40 h-40 border border-white/[0.03] rounded-full"
                        />
                    </motion.div>

                    {/* Right: FAQ Accordion */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                        className="space-y-3"
                    >
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                                className="group"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className={`w-full text-left p-7 rounded-2xl border transition-all duration-500 relative overflow-hidden ${openIndex === index
                                        ? 'bg-gradient-to-br from-[#0a0a0a] to-[#050505] border-[#FF7404]/30 shadow-[0_10px_40px_-10px_rgba(255,116,4,0.15)]'
                                        : 'bg-[#080808]/50 border-white/[0.03] hover:bg-[#0a0a0a] hover:border-white/[0.06]'
                                        }`}
                                >
                                    {/* Subtle glow on active */}
                                    {openIndex === index && (
                                        <div className="absolute top-0 right-0 w-60 h-60 bg-[#FF7404]/[0.05] rounded-full blur-[80px] pointer-events-none" />
                                    )}

                                    <div className="flex items-start justify-between gap-6 relative z-10">
                                        <span className={`font-semibold text-lg transition-colors duration-300 leading-snug ${openIndex === index ? 'text-white' : 'text-white/70 group-hover:text-white/90'
                                            }`}>
                                            {faq.question}
                                        </span>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${openIndex === index
                                            ? 'bg-gradient-to-br from-[#FF7404] to-[#FF9040] rotate-180 shadow-[0_0_20px_-5px_#FF7404]'
                                            : 'bg-white/[0.04] border border-white/[0.06]'
                                            }`}>
                                            <ChevronDown className={`w-5 h-5 transition-colors ${openIndex === index ? 'text-black' : 'text-white/40'
                                                }`} />
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                                                className="overflow-hidden relative z-10"
                                            >
                                                <p className="pt-6 text-white/40 leading-[1.9] text-[15px] pr-16">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>

            {/* JSON-LD Schema for FAQs */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />
        </section>
    );
}
