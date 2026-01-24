'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, BookOpen, BarChart3, ShieldCheck, ChevronDown, HelpCircle } from 'lucide-react';

interface ExpertInsightProps {
    title: string;
    body: string;
    author: string;
}

export function ExpertInsight({ title, body, author }: ExpertInsightProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="my-12 relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#121212] to-[#080808] border border-white/[0.08] p-8 md:p-12 group"
        >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-opacity">
                <Quote className="w-32 h-32 text-white" />
            </div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-[#FF7404]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF7404]">Human POV // Executive Strategy</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight leading-tight italic">
                    {title}
                </h3>

                <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light mb-8 max-w-3xl">
                    "{body}"
                </p>

                <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF7404] shadow-[0_0_10px_#FF7404]" />
                    <span className="text-sm font-bold text-white tracking-widest uppercase">{author}</span>
                </div>
            </div>
        </motion.div>
    );
}

interface KnowledgeCardProps {
    terms: Array<{ term: string; definition: string }>;
}

export function KnowledgeCards({ terms }: KnowledgeCardProps) {
    return (
        <div className="my-16 grid md:grid-cols-2 gap-6">
            {terms.map((term, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-[1.5rem] bg-white/[0.02] border border-white/[0.06] hover:border-[#FF7404]/30 transition-colors"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <BookOpen className="w-4 h-4 text-[#FF7404]" />
                        <h4 className="text-white font-bold tracking-tight">{term.term}</h4>
                    </div>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                        {term.definition}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}

interface ProofPointProps {
    client: string;
    result: string;
    product: string; // Which VisQuanta product was used
}

export function ProofPoint({ client, result, product }: ProofPointProps) {
    return (
        <div className="my-12 p-8 rounded-[2rem] bg-[#FF7404]/5 border border-[#FF7404]/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7404]/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <ShieldCheck className="w-5 h-5 text-[#FF7404]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF7404]">Verified Client Result</span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2">{client}</h4>
                <p className="text-xs text-zinc-500 uppercase tracking-widest mb-6">Using {product}</p>
                <p className="text-[#FF7404] text-2xl md:text-3xl font-black leading-tight tracking-tighter">
                    {result}
                </p>
            </div>
        </div>
    );
}

import { ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';

export function MidArticleCTA() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="my-16 relative p-8 md:p-12 rounded-[2rem] overflow-hidden border border-[#FF7404]/20 group"
        >
            {/* Background elements */}
            <div className="absolute inset-0 bg-neutral-900/50" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/10 via-transparent to-transparent" />
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#FF7404]/10 rounded-full blur-[100px] group-hover:bg-[#FF7404]/15 transition-colors" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-md">
                    <div className="flex items-center gap-2 mb-4">
                        <Zap className="w-4 h-4 text-[#FF7404]" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF7404]">Action Required</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tighter leading-tight">
                        Don't let your CRM leads go cold.
                    </h3>
                    <p className="text-zinc-400 font-medium leading-relaxed">
                        Automate your speed-to-lead and recover lost revenue with VisQuanta's AI Suite.
                    </p>
                </div>

                <Link href="/book-demo" className="w-full md:w-auto">
                    <button className="w-full px-8 py-4 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-black uppercase tracking-widest rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,116,4,0.4)] flex items-center justify-center gap-3">
                        Book a Strategy Call
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </Link>
            </div>
        </motion.div>
    );
}

export function BottomConsultingCTA() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-6"
        >
            <div>
                <h4 className="text-xl font-bold text-white mb-2">Want to see these results for your dealership?</h4>
                <p className="text-zinc-500 text-sm">Our team offers a free AI Audit for qualified dealership groups.</p>
            </div>
            <Link href="/book-demo">
                <button className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-all flex items-center gap-2">
                    Request an AI Audit
                    <ArrowRight className="w-4 h-4" />
                </button>
            </Link>
        </motion.div>
    );
}

interface BlogFAQAccordionProps {
    faqs: Array<{ question: string; answer: string }>;
}

export function BlogFAQAccordion({ faqs }: BlogFAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="my-16 space-y-4">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-[#FF7404]" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Frequently Asked Questions</h3>
            </div>

            {faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.01] overflow-hidden transition-all duration-300">
                    <button
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.03] transition-colors"
                    >
                        <span className={`text-lg font-bold pr-8 transition-colors ${openIndex === i ? 'text-[#FF7404]' : 'text-white/80'}`}>
                            {faq.question}
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${openIndex === i ? 'bg-[#FF7404] border-[#FF7404] text-black rotate-180' : 'text-white/40'}`}>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                    </button>

                    <AnimatePresence>
                        {openIndex === i && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                            >
                                <div className="px-6 pb-6 pt-2 text-zinc-500 leading-relaxed text-[15px] border-t border-white/5 bg-white/[0.02]" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
