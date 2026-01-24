'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function WidgetFAQ() {
    const faqs = [
        {
            question: "Does this replace my existing chat tool?",
            answer: "Yes. The SMS First Widget is designed to be a complete replacement. Traditional chat widgets have become a place where leads go to die: customers start conversations and then close the tab, never to be seen again. Our widget captures their mobile number first, so even if they leave, you can follow up via text."
        },
        {
            question: "How does the AI handle questions it doesn't know?",
            answer: "Our AI is trained specifically on your dealership: your inventory, hours, staff, and processes. For questions outside its knowledge, it gracefully hands off to your team via SMS notification, so a human can jump in seamlessly. The customer never knows the difference."
        },
        {
            question: "Does it integrate with my CRM?",
            answer: "Absolutely. We integrate with all major automotive CRMs including DealerSocket, VinSolutions, elead, and more. Leads flow directly into your existing system with full conversation history attached."
        },
        {
            question: "Can I customize the greeting and widget appearance?",
            answer: "Yes. Everything is customizable: the greeting message, avatar, colors, position on screen, and the AI's personality. We match your brand so it feels like a natural extension of your website."
        },
        {
            question: "Is it mobile friendly?",
            answer: "Absolutely. The widget is designed mobile-first. On phones, it expands to a full-screen experience that feels native. Since we're capturing phone numbers and texting customers, mobile visitors convert particularly well."
        },
        {
            question: "What about SMS compliance and TCPA?",
            answer: "Compliance is built into the widget. We collect explicit opt-in consent before any messages are sent, maintain complete audit trails, and honor opt-out requests instantly. You're protected."
        },
        {
            question: "How long does setup take?",
            answer: "Most dealerships are live within 5 minutes. It's a single line of code added to your website header. Our team handles the AI training and CRM integration; it's usually completed within 24-48 hours of signup."
        },
        {
            question: "What kind of results can I expect?",
            answer: "On average, our dealerships see a 40-60% increase in lead capture compared to traditional chat widgets. Because you're getting verified mobile numbers instead of emails, your contact rates jump dramatically. SMS has a 98% open rate compared to 20% for email."
        }
    ];

    // Split FAQs for two-column layout
    const leftColumn = faqs.filter((_, i) => i % 2 === 0);
    const rightColumn = faqs.filter((_, i) => i % 2 !== 0);

    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6"
                    >
                        <MessageCircle className="w-4 h-4 text-orange-500" />
                        <span className="text-orange-500 text-sm font-medium">FAQ</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight"
                    >
                        Everything You Need{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                            to Know
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-zinc-400 font-light max-w-2xl mx-auto"
                    >
                        Get answers to the most common questions about switching to SMS-first lead capture.
                    </motion.p>
                </div>

                {/* Two-Column FAQ Grid */}
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5 mb-16">
                    <div className="space-y-5">
                        {leftColumn.map((faq, i) => (
                            <FAQItem
                                key={i * 2}
                                question={faq.question}
                                answer={faq.answer}
                                index={i * 2}
                                number={String(i * 2 + 1).padStart(2, '0')}
                            />
                        ))}
                    </div>
                    <div className="space-y-5">
                        {rightColumn.map((faq, i) => (
                            <FAQItem
                                key={i * 2 + 1}
                                question={faq.question}
                                answer={faq.answer}
                                index={i * 2 + 1}
                                number={String(i * 2 + 2).padStart(2, '0')}
                            />
                        ))}
                    </div>
                </div>

                {/* Still Have Questions CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="relative p-8 rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-950 border border-white/10 overflow-hidden group hover:border-orange-500/30 transition-all duration-500">
                        {/* Glow effect */}
                        <div className="absolute -inset-[1px] bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="text-center sm:text-left">
                                <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
                                <p className="text-zinc-400 text-sm">Our team is here to help you make the switch.</p>
                            </div>
                            <Link
                                href="/book-demo"
                                className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-xl transition-all group/btn whitespace-nowrap"
                            >
                                Talk to an Expert
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

interface FAQItemProps {
    question: string;
    answer: string;
    index: number;
    number: string;
}

function FAQItem({ question, answer, index, number }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`relative border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 group
                ${isOpen
                    ? 'bg-zinc-900/80 border-orange-500/30 shadow-[0_0_30px_-10px_rgba(249,115,22,0.3)]'
                    : 'bg-zinc-900/50 border-white/5 hover:border-white/10 hover:shadow-[0_0_20px_-10px_rgba(249,115,22,0.2)]'
                }`}
            onClick={() => setIsOpen(!isOpen)}
        >
            {/* Left accent bar when open */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-amber-500 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />

            <div className="p-6 flex items-start gap-4">
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <span className={`text-xs font-bold uppercase tracking-wider mb-1 block transition-colors duration-300 ${isOpen ? 'text-orange-500' : 'text-zinc-600'}`}>
                                {number}
                            </span>
                            <h3 className="text-base font-semibold text-white leading-snug">{question}</h3>
                        </div>
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                                ${isOpen ? 'bg-orange-500' : 'bg-white/5 border border-white/10 group-hover:bg-white/10'}`}
                        >
                            <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-black' : 'text-white'}`} />
                        </motion.div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 pt-0 text-zinc-400 text-sm leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
