'use client';

import { motion } from 'framer-motion';
import { IntegrationFeature } from '@/lib/integrations';
import { CheckCircle2 } from 'lucide-react';

interface IntegrationFeatureGridProps {
    features: IntegrationFeature[];
}

export default function IntegrationFeatureGrid({ features }: IntegrationFeatureGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="bg-[#161616] border border-white/[0.08] rounded-2xl p-6 hover:border-[#f97316]/30 transition-colors"
                >
                    <div className="w-10 h-10 rounded-full bg-[#f97316]/10 flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-5 h-5 text-[#f97316]" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
                </motion.div>
            ))}
        </div>
    );
}
