'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface MinimalQuoteProps {
    quote: string;
    author: string;
    role: string;
    className?: string;
}

export default function MinimalQuote({ quote, author, role, className = "" }: MinimalQuoteProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm relative overflow-hidden group hover:border-primary/30 transition-all ${className}`}
        >
            <div className="absolute -top-2 -left-2 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="w-12 h-12 text-primary fill-primary" />
            </div>

            <p className="text-white/80 italic text-lg leading-relaxed mb-4 relative z-10">
                "{quote}"
            </p>

            <div className="flex items-center gap-3 relative z-10">
                <div className="h-px w-6 bg-primary/40" />
                <div>
                    <div className="text-white font-bold text-sm tracking-tight">{author}</div>
                    <div className="text-white/40 text-[10px] uppercase font-black tracking-widest">{role}</div>
                </div>
            </div>
        </motion.div>
    );
}
