'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface IntegrationHeroProps {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCtaText?: string;
    primaryCtaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
    visual?: React.ReactNode;
    trustBadge?: string;
    align?: 'center' | 'left';
}

export default function IntegrationHero({
    eyebrow,
    title,
    subtitle,
    primaryCtaText = 'Book a Demo',
    primaryCtaLink = '/book-demo',
    secondaryCtaText,
    secondaryCtaLink,
    visual,
    trustBadge,
    align = 'center'
}: IntegrationHeroProps) {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#0a0a0a]">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#f97316]/[0.03] blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'} max-w-5xl mx-auto gap-8`}>

                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#f97316]">
                            {eyebrow}
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
                    >
                        {title}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={`text-lg md:text-xl text-white/60 leading-relaxed ${align === 'center' ? 'max-w-2xl' : 'max-w-xl'}`}
                    >
                        {subtitle}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-4 mt-2"
                    >
                        <Button
                            asChild
                            className="bg-gradient-to-br from-[#f97316] to-[#ea580c] hover:from-[#fb923c] hover:to-[#f97316] text-white border-0 h-auto px-8 py-4 rounded-xl font-semibold text-[15px] shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)] hover:bg-[#ea580c] transition-all"
                        >
                            <Link href={primaryCtaLink} className="flex items-center gap-2 group">
                                {primaryCtaText}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>

                        {secondaryCtaText && secondaryCtaLink && (
                            <Button
                                asChild
                                variant="ghost"
                                className="bg-transparent text-white hover:bg-white/5 hover:text-white border border-white/10 h-auto px-8 py-4 rounded-xl font-semibold text-[15px] transition-all"
                            >
                                <Link href={secondaryCtaLink}>
                                    {secondaryCtaText}
                                </Link>
                            </Button>
                        )}
                    </motion.div>

                    {trustBadge && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-4 flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5"
                        >
                            <CheckCircle2 className="w-4 h-4 text-[#f97316]" />
                            <span className="text-sm text-white/80 font-medium">{trustBadge}</span>
                        </motion.div>
                    )}

                    {/* Optional Connector Visual */}
                    {visual && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="w-full mt-12 md:mt-16"
                        >
                            {visual}
                        </motion.div>
                    )}

                </div>
            </div>
        </section>
    );
}
