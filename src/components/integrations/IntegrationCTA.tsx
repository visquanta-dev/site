'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface IntegrationCTAProps {
    title: string;
    description: string;
    ctaText?: string;
    ctaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
}

export default function IntegrationCTA({
    title,
    description,
    ctaText = "Book a Demo",
    ctaLink = "/book-demo",
    secondaryCtaText,
    secondaryCtaLink
}: IntegrationCTAProps) {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-[#161616] to-[#0a0a0a] border border-white/[0.08] rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[#f97316]/10 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-2xl text-center leading-tight">
                            {title}
                        </h2>
                        <p className="text-lg text-white/50 mb-10 max-w-xl text-center leading-relaxed">
                            {description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                asChild
                                className="bg-[#f97316] hover:bg-[#ea580c] text-white border-0 h-auto px-10 py-5 rounded-xl font-bold tracking-wide text-sm uppercase shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)] transition-all"
                            >
                                <Link href={ctaLink} className="flex items-center gap-2">
                                    {ctaText}
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>

                            {secondaryCtaText && secondaryCtaLink && (
                                <Button
                                    asChild
                                    variant="outline"
                                    className="bg-transparent border-white/10 hover:bg-white/5 text-white h-auto px-10 py-5 rounded-xl font-bold tracking-wide text-sm uppercase transition-all"
                                >
                                    <Link href={secondaryCtaLink}>
                                        {secondaryCtaText}
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
