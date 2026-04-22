import type { Metadata } from 'next';
import { Suspense } from 'react';
import CalculatorEmbed from './CalculatorEmbed';

export const metadata: Metadata = {
    title: 'Visquanta Profit Calculator',
    description: 'Calculate recoverable revenue from lead reactivation and speed-to-lead improvements.',
    robots: { index: false, follow: false },
};

export default function CalculatorEmbedPage() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 bg-[#0a0a0a]">
            <Suspense fallback={<div className="text-white/40 text-sm font-mono">Loading…</div>}>
                <CalculatorEmbed />
            </Suspense>
        </div>
    );
}
