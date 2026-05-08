'use client';

import { useState } from 'react';
import { Calculator, ArrowRight, Clock, Gauge, Users } from 'lucide-react';
import ROICalculatorModal from '@/components/ROICalculatorModal';

const CALCULATOR_CONFIG: Record<string, {
  eyebrow: string;
  label: string;
  description: string;
  cta: string;
  helper: string;
  mode: 'reactivation' | 'speedToLead';
  chips: string[];
}> = {
  'lead-reactivation': {
    eyebrow: 'Measure the hidden revenue',
    label: 'How much revenue is buried in your dormant CRM?',
    description: 'Estimate the monthly upside from reactivating older leads instead of buying more traffic.',
    cta: 'Open Calculator',
    helper: 'Takes 30 seconds. No email required.',
    mode: 'reactivation',
    chips: ['Dormant leads', 'Close rate', 'Gross per sale'],
  },
  'speed-to-lead': {
    eyebrow: 'Calculate Your BDC Leak',
    label: 'How much revenue is slow follow-up costing this rooftop?',
    description: 'Use your monthly lead volume, current response time, and close rate to estimate the gap between today\'s process and a sub-60-second response.',
    cta: 'Open Calculator',
    helper: 'Takes 30 seconds. No email required.',
    mode: 'speedToLead',
    chips: ['Monthly leads', 'Avg response time', 'Close rate'],
  },
  'service-roi': {
    eyebrow: 'Measure missed service demand',
    label: 'How much service revenue is leaking through missed calls?',
    description: 'Estimate the appointment and RO impact from answering every service inquiry.',
    cta: 'Open Calculator',
    helper: 'Takes 30 seconds. No email required.',
    mode: 'reactivation',
    chips: ['Missed calls', 'RO value', 'Booking rate'],
  },
  'roi': {
    eyebrow: 'Estimate the lift',
    label: 'What could automation return in the next 90 days?',
    description: 'Model the revenue impact from faster response, cleaner follow-up, and recovered lead demand.',
    cta: 'Open Calculator',
    helper: 'Takes 30 seconds. No email required.',
    mode: 'reactivation',
    chips: ['Lead volume', 'Conversion lift', 'Gross profit'],
  },
};

export default function BlogCalculatorEmbed({ type }: { type: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const config = CALCULATOR_CONFIG[type];
  if (!config) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="not-prose group relative my-12 w-full cursor-pointer overflow-hidden rounded-3xl border border-[#FF7404]/25 bg-[#100A05] p-0 text-left shadow-[0_30px_90px_-45px_rgba(255,116,4,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF7404]/50 hover:bg-[#130C06]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,116,4,0.18),transparent_34%),linear-gradient(135deg,rgba(255,116,4,0.12),transparent_48%)] opacity-80" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF7404]/60 to-transparent" />

        <div className="relative grid gap-6 p-7 md:grid-cols-[1fr_auto] md:p-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF7404]/25 bg-[#FF7404]/10 px-3 py-1.5">
              <Calculator className="h-3.5 w-3.5 text-[#FF7404]" />
              <span className="text-[11px] font-black uppercase tracking-[0.16em] text-[#FF7404]">
                {config.eyebrow}
              </span>
            </div>

            <p className="max-w-2xl text-2xl font-black leading-tight tracking-tight text-white md:text-3xl">
              {config.label}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300 md:text-base">
              {config.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {config.chips.map((chip, index) => {
                const Icon = index === 0 ? Users : index === 1 ? Clock : Gauge;
                return (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-black/25 px-3 py-2 text-xs font-semibold text-zinc-300"
                  >
                    <Icon className="h-3.5 w-3.5 text-[#FF7404]" />
                    {chip}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="flex items-center md:min-w-[190px] md:justify-end">
            <div className="w-full md:w-auto">
              <span className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#FF7404] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-black shadow-[0_0_40px_-14px_rgba(255,116,4,0.95)] transition-transform group-hover:scale-[1.02] md:w-auto">
                {config.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="mt-3 block text-center text-xs font-medium text-zinc-500">
                {config.helper}
              </span>
            </div>
          </div>
        </div>
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
