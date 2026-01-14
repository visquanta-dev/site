'use client';

import { motion } from 'framer-motion';

interface Category {
    slug: string;
    title: string;
    count: number;
}

interface BlogFiltersProps {
    categories: Category[];
    activeSlug: string;
    onChange: (slug: string) => void;
    totalPosts?: number;
}

export default function BlogFilters({ categories, activeSlug, onChange, totalPosts = 42 }: BlogFiltersProps) {
    const allCategories = [
        { slug: 'all', title: 'All Posts', count: totalPosts },
        ...categories
    ];

    return (
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-white/[0.06] mb-12">
            {allCategories.map((category) => {
                const isActive = activeSlug === category.slug;
                return (
                    <button
                        key={category.slug}
                        onClick={() => onChange(category.slug)}
                        className={`
                relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 group
                ${isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}
             `}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="activeFilter"
                                className="absolute inset-0 bg-[#1a1a1a] rounded-full border border-white/[0.06]"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}

                        {/* Hover effect for non-active */}
                        {!isActive && (
                            <div className="absolute inset-0 rounded-full bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        )}

                        <span className="relative z-10 flex items-center gap-2">
                            <span className="tracking-[0.01em]">{category.title}</span>
                            <span className={`text-[10px] h-[18px] px-1.5 flex items-center justify-center rounded-full leading-none transition-colors ${isActive ? 'bg-[#D4A853]/10 text-[#D4A853]' : 'bg-white/5 text-zinc-600 group-hover:bg-white/10 group-hover:text-zinc-500'}`}>
                                {category.count}
                            </span>
                        </span>

                        {/* Bottom Accent for Active - Subtle Amber Glow */}
                        {isActive && (
                            <motion.div
                                layoutId="activeAccent"
                                className="absolute bottom-px left-1/4 right-1/4 h-[1px] bg-[#D4A853]/50 shadow-[0_0_8px_rgba(212,168,83,0.5)]"
                                transition={{ duration: 0.3 }}
                            />
                        )}
                    </button>
                )
            })}
        </div>
    )
}
