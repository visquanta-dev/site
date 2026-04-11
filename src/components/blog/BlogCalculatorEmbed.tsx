'use client';

import { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import ROICalculatorModal from '@/components/ROICalculatorModal';

const CALCULATOR_CONFIG: Record<string, { label: string; description: string; mode: 'reactivation' | 'speedToLead' }> = {
  'lead-reactivation': { label: 'Revenue Recovery Calculator', description: 'See how much revenue your dormant leads could recover', mode: 'reactivation' },
  'speed-to-lead': { label: 'Speed-to-Lead Calculator', description: 'Calculate your revenue lift from faster response times', mode: 'speedToLead' },
  'service-roi': { label: 'Service ROI Calculator', description: 'Find out how much missed calls cost your service drive', mode: 'reactivation' },
  'roi': { label: 'ROI Calculator', description: 'See your projected return in 90 days', mode: 'reactivation' },
};

export default function BlogCalculatorEmbed({ type }: { type: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const config = CALCULATOR_CONFIG[type];
  if (!config) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full my-8 group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#FF7404]/30 transition-all duration-300 p-6 flex items-center gap-5"
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FF7404]/10 flex items-center justify-center group-hover:bg-[#FF7404]/20 transition-colors">
          <Calculator className="w-6 h-6 text-[#FF7404]" />
        </div>
        <div className="flex-1 text-left">
          <p className="text-white font-semibold text-lg">{config.label}</p>
          <p className="text-zinc-400 text-sm mt-0.5">{config.description}</p>
        </div>
        <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-[#FF7404] transition-colors flex-shrink-0" />
      </button>
      <ROICalculatorModal isOpen={isOpen} onClose={() => setIsOpen(false)} initialMode={config.mode} />
    </>
  );
}

/**
 * Process HTML content and split it at {{calculator:*}} and {{cta:*}} markers.
 */
export function parseCalculatorMarkers(html: string): Array<
  { type: 'html'; content: string } | { type: 'calculator'; calcType: string }
> {
  const pattern = /(?:<p>)?\{\{(?:calculator|cta):([a-z-]+)\}\}(?:<\/p>)?/g;
  const segments: Array<{ type: 'html'; content: string } | { type: 'calculator'; calcType: string }> = [];
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(html)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: 'html', content: html.slice(lastIndex, match.index) });
    }
    segments.push({ type: 'calculator', calcType: match[1] });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < html.length) {
    segments.push({ type: 'html', content: html.slice(lastIndex) });
  }

  return segments.length > 0 ? segments : [{ type: 'html', content: html }];
}
