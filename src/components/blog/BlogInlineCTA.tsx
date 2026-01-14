'use client';

import { ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function BlogInlineCTA() {
    return (
        <div className="my-16 relative group">
            {/* Main Card Container */}
            <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-[#D4A853]/15 p-8 md:p-12 shadow-2xl">

                {/* Background Details */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#121212] z-0" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A853]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                {/* Optional Abstract Icon (Watermark style) */}
                <div className="absolute top-6 right-6 opacity-5 rotate-12 pointer-events-none">
                    <TrendingUp size={120} strokeWidth={1} />
                </div>

                <div className="relative z-10 max-w-3xl">
                    {/* Hero Stat & Headline */}
                    <div className="flex flex-col gap-2 mb-6">
                        <span className="text-4xl md:text-5xl font-bold text-[#D4A853] tracking-tight">
                            $19.4M
                        </span>
                        <h3 className="text-xl md:text-2xl font-semibold text-white leading-snug">
                            in Recovered Deals, From Leads Dealers Had Already Written Off
                        </h3>
                    </div>

                    {/* Supporting Copy */}
                    <p className="text-zinc-400 text-base md:text-lg mb-8 max-w-xl">
                        Built for dealers who refuse to leave money sitting in their CRMs.
                    </p>

                    {/* CTA Button */}
                    <Link href="/book-demo" className="inline-block">
                        <button className="flex items-center gap-3 px-8 py-4 bg-[#D4A853] hover:bg-[#E5B863] text-[#0a0a0a] font-bold text-lg rounded-lg transition-all hover:shadow-[0_0_25px_-5px_rgba(212,168,83,0.4)] hover:-translate-y-0.5">
                            Recover Lost Sales Now
                            <ArrowRight size={20} strokeWidth={2.5} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
