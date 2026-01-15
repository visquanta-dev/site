'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Integration } from '@/lib/integrations';

interface IntegrationCardProps {
    integration: Integration;
    idx?: number;
}

export default function IntegrationCard({ integration, idx = 0 }: IntegrationCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="group relative h-full"
        >
            <Link href={`/integrations/${integration.slug}`} className="block h-full">
                <div className="h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300 group-hover:border-[#f97316]/40 group-hover:shadow-[0_0_40px_-5px_rgba(249,115,22,0.15)] group-hover:-translate-y-1">

                    {/* Logo Container */}
                    <div className="w-20 h-20 bg-white/[0.03] rounded-2xl flex items-center justify-center p-4 mb-6 border border-white/[0.05] transition-all group-hover:bg-white/[0.08] group-hover:border-white/[0.1] shadow-inner">
                        {/* Logo Handling - Supports .svg, .png, .jpg */}
                        {(integration.logo.endsWith('.png') || integration.logo.endsWith('.jpg') || integration.logo.endsWith('.svg')) ? (
                            <img
                                src={integration.logo}
                                alt={integration.name}
                                className="w-full h-full object-contain filter group-hover:brightness-110 transition-all opacity-90 group-hover:opacity-100"
                            />
                        ) : (
                            <span className="text-xl font-bold text-white/40">{integration.name.substring(0, 2)}</span>
                        )}
                    </div>

                    <div className="flex-1 flex flex-col items-center w-full">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#f97316] transition-colors tracking-tight">
                            {integration.name}
                        </h3>
                        <p className="text-sm text-white/50 leading-relaxed mb-6 line-clamp-2">
                            {integration.shortDescription}
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4 w-full pt-6 border-t border-white/[0.06] mt-auto">
                        <div className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${integration.status === 'Native Integration' ? 'bg-[#f97316] shadow-[0_0_8px_#f97316]' : 'bg-emerald-500 shadow-[0_0_8px_#10b981]'}`} />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors">
                                {integration.status}
                            </span>
                        </div>

                        <span className="text-[13px] font-bold text-[#f97316] flex items-center gap-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            EXPLORE INTEGRATION <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                    </div>

                </div>
            </Link>
        </motion.div>
    );
}
