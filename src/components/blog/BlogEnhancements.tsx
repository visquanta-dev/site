'use client';

import { motion } from 'framer-motion';
import { Quote, BookOpen, BarChart3, ShieldCheck } from 'lucide-react';

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
