'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, RefreshCcw, Star, Wrench, MessageSquare, Target } from 'lucide-react';

interface Product {
    title: string;
    href: string;
    description: string;
    icon: any;
}

const allProducts: Record<string, Product> = {
    'lead-reactivation': {
        title: "Lead Reactivation",
        href: "/lead-reactivation",
        description: "Turn dead CRM leads into booked appointments.",
        icon: RefreshCcw
    },
    'speed-to-lead': {
        title: "Speed to Lead",
        href: "/speed-to-lead",
        description: "Engage web leads in under 60 seconds, 24/7.",
        icon: Zap
    },
    'service-drive': {
        title: "Service Drive Pro",
        href: "/service-drive",
        description: "Automate service bookings and inbound calls.",
        icon: Wrench
    },
    'reputation-management': {
        title: "Reputation Management",
        href: "/reputation-management",
        description: "Automate reviews and protect your CSI scores.",
        icon: Star
    },
    'website-widget': {
        title: "Website Widget",
        href: "/website-widget",
        description: "SMS-first lead capture for your digital lot.",
        icon: MessageSquare
    },
    'custom-campaigns': {
        title: "Custom Campaigns",
        href: "/custom-campaigns",
        description: "Tailored SMS blitzes for high-impact events.",
        icon: Target
    }
};

interface RelatedProductsProps {
    productSlugs: string[];
}

export default function RelatedProducts({ productSlugs }: RelatedProductsProps) {
    const products = productSlugs.map(slug => allProducts[slug]).filter(Boolean);

    if (products.length === 0) return null;

    return (
        <div className="my-16 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7404]/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-8">
                    <div className="w-1 h-6 bg-[#FF7404] rounded-full" />
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                        Related Solutions
                    </h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    {products.map((product) => (
                        <Link
                            key={product.href}
                            href={product.href}
                            className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#FF7404]/30 hover:bg-white/[0.08] transition-all flex flex-col h-full"
                        >
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-[#FF7404]/10 group-hover:border-[#FF7404]/30 transition-all">
                                <product.icon className="w-5 h-5 text-zinc-400 group-hover:text-[#FF7404]" />
                            </div>

                            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF7404] transition-colors">
                                {product.title}
                            </h4>
                            <p className="text-zinc-500 text-sm leading-relaxed mb-4 flex-grow">
                                {product.description}
                            </p>

                            <div className="flex items-center gap-2 text-xs font-bold text-[#FF7404] uppercase tracking-widest">
                                Explore
                                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
