'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const dealerTypes = [
    { label: 'Independent Dealers', href: '/dealers/independent', desc: 'AI built for nimble operations' },
    { label: 'Franchise Dealerships', href: '/dealers/franchise', desc: 'OEM-compliant automation' },
    { label: 'Auto Groups', href: '/dealers/auto-groups', desc: 'Enterprise-scale AI deployment' },
    { label: 'Pre-Owned Specialists', href: '/dealers/pre-owned', desc: 'Maximize used inventory turns' },
    { label: 'RV Dealerships', href: '/dealers/rv', desc: 'Purpose-built for RV sales' },
];

interface DealerTypeCrossLinksProps {
    currentPath: string;
}

export default function DealerTypeCrossLinks({ currentPath }: DealerTypeCrossLinksProps) {
    const otherTypes = dealerTypes.filter(d => d.href !== currentPath);

    return (
        <section className="py-20 bg-[#080808] border-t border-white/5">
            <div className="container-wide">
                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-white/50 mb-10 text-center">
                    Explore Other Dealer Types
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {otherTypes.map((type) => (
                        <Link
                            key={type.href}
                            href={type.href}
                            className="group p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#FF7404]/30 hover:bg-[#FF7404]/5 transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-bold text-white group-hover:text-[#FF7404] transition-colors">
                                    {type.label}
                                </span>
                                <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#FF7404] transition-colors" />
                            </div>
                            <p className="text-xs text-white/30">{type.desc}</p>
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link href="/dealers" className="text-xs text-white/40 hover:text-[#FF7404] transition-colors font-bold uppercase tracking-widest">
                        View All Dealer Solutions →
                    </Link>
                </div>
            </div>
        </section>
    );
}
