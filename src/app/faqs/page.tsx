'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus, ArrowRight, Search, MessageSquare, ShieldCheck, Zap, Users, LayoutGrid } from 'lucide-react';
import Link from 'next/link';

// Categorized Data Structure
import FinalCTA from '@/components/FinalCTA';

const faqCategories = [
    {
        id: 'all',
        label: 'All Questions',
        icon: LayoutGrid
    },
    {
        id: 'general',
        label: 'General & ROI',
        icon: Users
    },
    {
        id: 'technical',
        label: 'Implementation',
        icon: Zap
    },
    {
        id: 'security',
        label: 'Trust & Safety',
        icon: ShieldCheck
    }
];

const faqs = [
    {
        category: 'general',
        question: "What exactly is The AutoMaster Suite?",
        answer: "It’s a set of automated tools that help car dealerships boost sales, re-engage leads, and protect their reputation. It automates the heavy lifting of follow-up and engagement so your team can focus on closing."
    },
    {
        category: 'security',
        question: "Is your outreach compliant with regulations?",
        answer: "Yes. We run monthly audits and ensure all outreach meets state and federal compliance standards (TCPA, etc.). No legal headaches: just clean, compliant communication."
    },
    {
        category: 'technical',
        question: "Does it integrate with my DMS/CRM?",
        answer: "Yes. We integrate with all major dealership DMS/CRMs including VinSolutions, CDK, DealerSocket, ProMax, DriveCentric, Activix, and more. Our team handles the full setup implementation for you."
    },
    {
        category: 'technical',
        question: "How long does implementation take?",
        answer: "We build and deploy your custom environment within The AutoMaster Suite in 14 business days. We move fast so you can start seeing results sooner."
    },
    {
        category: 'technical',
        question: "Does it work with my existing technology?",
        answer: "Absolutely. The AutoMaster Suite plays nice with your existing tech stack. That said, many clients find it robust enough to replace multiple fragmented tools they were previously paying for."
    },
    {
        category: 'general',
        question: "Do you require long-term contracts?",
        answer: "Yes, we do use contracts, but they’re designed to be flexible, not restrictive. Our agreements are focused on setting clear expectations and protecting both parties, not locking you in."
    },
    {
        category: 'security',
        question: "Is this cold outreach or spam?",
        answer: "No. We only reach out to leads who have previously engaged with your dealership (your existing data). All communications are privacy-law compliant and focused on genuine interest, never random cold outreach."
    },
    {
        category: 'general',
        question: "Is The AutoMaster Suite available internationally?",
        answer: "Yes, The AutoMaster Suite available to dealerships in North America, the UK, and other international markets. If you’re outside these regions, just ask: we’ll let you know what’s possible."
    },
    {
        category: 'general',
        question: "Will this replace my BDC or sales staff?",
        answer: "No, The AutoMaster Suite works alongside your team as a force multiplier. It brings qualified, ready-to-engage leads straight to your staff, filtering out the noise and making their job easier, not replacing them."
    },
    {
        category: 'general',
        question: "What ROI can I expect?",
        answer: "On average, dealers see 5 to 20 additional car sales each month: sometimes significantly more, depending on your inventory and team setup. The system is designed to pay for itself many times over."
    },
    {
        category: 'security',
        question: "Is my dealership data secure?",
        answer: "Yes. We follow strict data security protocols and comply with all relevant privacy regulations to keep your dealership and customer information protected at all times."
    },
    {
        category: 'technical',
        question: "Do you provide training for my team?",
        answer: "We provide live onboarding and ongoing training for your BDC and sales team. That includes weekly reviews and coaching sessions to ensure the system is actually driving results on the showroom floor."
    },
    {
        category: 'general',
        question: "Do I get a dedicated account manager?",
        answer: "Yes. Every store gets a dedicated account manager who handles live support, regular audits, training, and performance strategy to ensure you succeed."
    },
    {
        category: 'general',
        question: "Can I replace other vendors with this?",
        answer: "That’s common. Many of our partners consolidate from three or more vendors into one system with us. We simplify your stack, clean up the CRM, and deliver better results without the vendor fatigue."
    }
];

export default function FAQPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);

    // Filter FAQs based on category and search query
    const filteredFaqs = faqs.filter(faq => {
        const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const midPoint = Math.ceil(filteredFaqs.length / 2);
    const leftFaqs = filteredFaqs.slice(0, midPoint);
    const rightFaqs = filteredFaqs.slice(midPoint);

    const FAQItem = ({ faq, index }: { faq: typeof faqs[0], index: number }) => {
        const isOpen = openQuestion === faq.question;

        return (
            <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen
                    ? 'border-[#FF7404] bg-[#FF7404]/5 shadow-[0_0_30px_-10px_rgba(255,116,4,0.3)]'
                    : 'border-white/5 bg-zinc-900/40 hover:border-[#FF7404]/50 hover:bg-zinc-900/60'
                    }`}
            >
                <button
                    onClick={() => setOpenQuestion(isOpen ? null : faq.question)}
                    className="flex items-center justify-between w-full p-6 text-left"
                >
                    <span className={`text-lg font-bold transition-colors duration-300 pr-8 ${isOpen ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                        }`}>
                        {faq.question}
                    </span>
                    <div className={`p-2 rounded-full border transition-all duration-300 shrink-0 ${isOpen
                        ? 'border-[#FF7404] bg-[#FF7404] rotate-180'
                        : 'border-zinc-700/50 text-zinc-500 group-hover:border-[#FF7404] group-hover:text-[#FF7404]'
                        }`}>
                        {isOpen ? (
                            <Minus className="w-4 h-4 text-black" />
                        ) : (
                            <Plus className="w-4 h-4" />
                        )}
                    </div>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] as const }}
                        >
                            <div className="p-6 pt-0 text-zinc-400 leading-relaxed">
                                <div className="h-px w-full bg-gradient-to-r from-[#FF7404]/20 to-transparent mb-4" />
                                {faq.answer}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        );
    };

    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black font-sans">
            <Navigation />

            <section className="relative pt-48 pb-12 overflow-hidden">
                {/* Cinematic Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#FF7404]/10 rounded-[100%] blur-[120px] pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF7404]/20 to-transparent" />

                <div className="container px-4 mx-auto relative z-10 max-w-5xl">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 mb-8 backdrop-blur-sm"
                        >
                            <span className="text-[#FF7404] text-xs font-bold uppercase tracking-wider">Support Center</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
                        >
                            Frequently Asked <span className="text-[#FF7404]">Questions.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-zinc-400 max-w-2xl mx-auto"
                        >
                            Everything you need to know about The AutoMaster Suite. Can't find the answer?
                            Chat to our team at{' '}
                            <Link href="mailto:info@visquanta.com" className="text-[#FF7404] hover:text-white transition-colors underline underline-offset-4 decoration-[#FF7404]/30 hover:decoration-[#FF7404]">
                                info@visquanta.com
                            </Link>
                        </motion.p>
                    </div>

                    {/* Search & Filter Bar */}
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12 sticky top-24 z-50 p-2 rounded-2xl transition-all duration-300 backdrop-blur-md bg-black/50 border border-white/5">
                        <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto text-sm scrollbar-hide">
                            {faqCategories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 whitespace-nowrap ${activeCategory === cat.id
                                        ? 'bg-[#FF7404] text-black font-bold shadow-lg shadow-[#FF7404]/20'
                                        : 'bg-zinc-900/50 text-zinc-400 hover:text-white hover:bg-zinc-800'
                                        }`}
                                >
                                    <cat.icon className="w-4 h-4" />
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full md:w-80 group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-[#FF7404] transition-colors" />
                            <input
                                type="text"
                                placeholder="Search questions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-zinc-900/50 border border-white/5 focus:border-[#FF7404]/50 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-zinc-500 outline-none transition-all focus:bg-zinc-900"
                            />
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            layout
                            className="grid lg:grid-cols-2 gap-6 items-start min-h-[400px]"
                        >
                            {filteredFaqs.length > 0 ? (
                                <>
                                    <div className="space-y-4">
                                        {leftFaqs.map((faq, index) => (
                                            <FAQItem key={faq.question} faq={faq} index={index} />
                                        ))}
                                    </div>
                                    <div className="space-y-4">
                                        {rightFaqs.map((faq, index) => (
                                            <FAQItem key={faq.question} faq={faq} index={index + leftFaqs.length} />
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="col-span-2 text-center py-20"
                                >
                                    <div className="w-16 h-16 bg-zinc-900/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/5">
                                        <Search className="w-6 h-6 text-zinc-600" />
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-2">No results found</h3>
                                    <p className="text-zinc-500">Try adjusting your search terms or browse all categories.</p>
                                    <button
                                        onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                                        className="mt-6 text-[#FF7404] hover:text-white text-sm font-bold transition-colors"
                                    >
                                        Clear Search
                                    </button>
                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    </AnimatePresence>

                    <FinalCTA />
                </div>
            </section>


            <Footer />
        </main >
    );
}
