'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface ReviewCardProps {
    quote: string;
    author: string;
    role: string;
    company: string;
    className?: string;
}

export default function ReviewCard({ quote, author, role, company, className = "" }: ReviewCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-2xl relative group hover:border-[#FF7404]/30 transition-all ${className}`}
        >
            <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-[#FF7404] fill-[#FF7404]" />
                ))}
            </div>

            <p className="text-white/90 text-lg font-medium leading-relaxed mb-8">
                "{quote}"
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center text-white font-bold text-sm">
                    {author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                    <div className="text-white font-bold text-sm">{author}</div>
                    <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">
                        {role} <span className="text-[#FF7404]/50 mx-1">•</span> {company}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
