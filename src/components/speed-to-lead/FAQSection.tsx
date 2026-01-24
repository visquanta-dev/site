'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Zap } from 'lucide-react';

const faqs = [
    {
        question: "How fast should a dealership respond to internet leads?",
        answer: "Industry data says under 5 minutes is ideal; you're 100x more likely to convert. Responding in the first minute boosts conversions by 391%. The average dealership takes 1 hour 38 minutes. By then, the customer has heard from 3-5 other dealers. VisQuanta responds in under 60 seconds, every time, so you're always first."
    },
    {
        question: "Why do I keep losing leads to other dealers?",
        answer: "78% of car buyers purchase from the first dealership to respond. If your team takes 30+ minutes, or misses the lead entirely because it came in after hours, someone else gets the sale. The fix isn't hiring more BDC staff; it's automating the first touch so you're never slow."
    },
    {
        question: "What happens to leads that come in at night or on weekends?",
        answer: "40%+ of leads arrive after hours. Without automation, those leads sit until Monday morning. By then they're cold. VisQuanta answers them instantly, at 10pm, on weekends, on holidays. We keep the conversation warm so your sales team wakes up to booked appointments, not dead leads."
    },
    {
        question: "Will this replace my BDC team?",
        answer: "No, it makes your BDC more effective. We handle the speed-critical first response, qualification, and appointment setting. Your BDC focuses on high-value activities: talking to interested buyers on the phone and closing deals. They stop chasing leads and start closing them."
    },
    {
        question: "Is the response really personalized or does it feel like a bot?",
        answer: "It's personalized. Our AI references the specific vehicle they inquired about, the source (AutoTrader, Cars.com, your website), and their name. Every conversation is monitored by humans who can step in for complex situations. Customers think they're texting a real person, because the experience feels like one."
    },
    {
        question: "Does this work with my CRM?",
        answer: "Yes. We integrate with VinSolutions, eLead, DealerSocket, Reynolds, CDK, and 50+ others. Conversations sync directly into your CRM with full transcripts. When an appointment is booked, it appears on your team's calendar instantly: no manual entry required."
    },
    {
        question: "What's the ROI on faster lead response?",
        answer: "The math is simple: if you're converting 10% of leads now, and faster response can double your conversion rate (industry data supports this), that's 2x the sales from the same lead volume. Most dealerships see ROI within the first month. Use our calculator to see your specific numbers."
    },
    {
        question: "How is this different from Podium or other AI tools?",
        answer: "Most AI tools focus on 'never missing a lead'; they respond, but they don't necessarily respond FIRST. We're obsessed with being the first responder because that's who wins 78% of the time. Our sub-60-second response time and 24/7 human monitoring means you're not just responding, you're winning."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 sm:py-28 lg:py-36 bg-[#020202] relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0">
                {/* Noise texture */}
                <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />

                {/* Ambient glows */}
                <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#FF7404]/[0.03] rounded-full blur-[120px] md:blur-[150px] pointer-events-none" />
                <div className="absolute bottom-[10%] right-[-5%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-green-500/[0.02] rounded-full blur-[120px] md:blur-[150px] pointer-events-none" />

                {/* Top accent */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
            </div>

            <div className="container-wide relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 xl:gap-28">

                    {/* Left: Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
                        className="lg:sticky lg:top-32 lg:self-start"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-2.5 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-full mb-5 sm:mb-6 lg:mb-8 shadow-[0_0_30px_-10px_rgba(255,116,4,0.2)]">
                            <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7404]" />
                            <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white/50">Common Questions</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-5 sm:mb-6 lg:mb-8 leading-[1.1] tracking-[-0.02em]">
                            Questions About <br className="hidden sm:block" />
                            <span className="bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FF7404] bg-clip-text text-transparent">
                                Lead Response Time
                            </span>
                        </h2>

                        <p className="text-base sm:text-lg lg:text-xl text-white/40 leading-[1.7] sm:leading-[1.8] max-w-md">
                            Everything dealers ask about responding faster and winning more deals.
                        </p>

                        <div className="mt-8 sm:mt-10 lg:mt-12">
                            <a href="/contact" className="group inline-flex items-center gap-2.5 sm:gap-3 text-[#FF7404] font-semibold text-sm">
                                <span className="group-hover:underline underline-offset-4">Contact our team</span>
                                <span className="text-base sm:text-lg group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: FAQ Accordion */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                        className="space-y-2.5 sm:space-y-3"
                    >
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.05 + index * 0.04 }}
                                className="group"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className={`w-full text-left p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border transition-all duration-500 relative overflow-hidden ${openIndex === index
                                        ? 'bg-gradient-to-br from-[#0a0a0a] to-[#050505] border-[#FF7404]/30 shadow-[0_10px_30px_-10px_rgba(255,116,4,0.12)]'
                                        : 'bg-[#080808]/60 border-white/[0.04] hover:bg-[#0a0a0a] hover:border-white/[0.08]'
                                        }`}
                                >
                                    {/* Subtle glow on active */}
                                    {openIndex === index && (
                                        <div className="absolute top-0 right-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#FF7404]/[0.06] rounded-full blur-[60px] sm:blur-[80px] pointer-events-none" />
                                    )}

                                    <div className="flex items-start justify-between gap-4 sm:gap-5 lg:gap-6 relative z-10">
                                        <span className={`font-semibold text-[15px] sm:text-base lg:text-lg transition-colors duration-300 leading-snug ${openIndex === index ? 'text-white' : 'text-white/75 group-hover:text-white/90'
                                            }`}>
                                            {faq.question}
                                        </span>
                                        <div className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${openIndex === index
                                            ? 'bg-gradient-to-br from-[#FF7404] to-[#FF9040] rotate-180 shadow-[0_0_15px_-5px_#FF7404]'
                                            : 'bg-white/[0.04] border border-white/[0.06]'
                                            }`}>
                                            <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${openIndex === index ? 'text-black' : 'text-white/40'
                                                }`} />
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
                                                className="overflow-hidden relative z-10"
                                            >
                                                <p className="pt-4 sm:pt-5 lg:pt-6 text-white/45 leading-[1.75] sm:leading-[1.85] text-sm sm:text-[15px] pr-8 sm:pr-12 lg:pr-16">
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
