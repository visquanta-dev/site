'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { buildCalendlyEmbedUrl } from '@/lib/calendly';

interface CalendlyEmbedProps {
    url: string;
    prefill: {
        name: string;
        email: string;
        phone: string;
        dealership?: string;
    };
}

export default function CalendlyEmbed({ url, prefill }: CalendlyEmbedProps) {
    const [isLoading, setIsLoading] = useState(true);

    // Light embed theme for readable form inputs; prefill contact fields
    const constructedUrl = buildCalendlyEmbedUrl(url, {
        name: prefill.name,
        email: prefill.email,
        a1: prefill.phone, // phone custom answer
        a2: prefill.dealership || '',
    });

    return (
        <div className="w-full h-[700px] relative bg-white rounded-2xl overflow-hidden border border-white/10 shadow-2xl animate-in fade-in zoom-in-95 duration-700">
            {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 gap-4">
                    <Loader2 className="w-10 h-10 text-[#FF7404] animate-spin" />
                    <p className="text-zinc-500 text-sm animate-pulse">Loading secure scheduler...</p>
                </div>
            )}
            <iframe
                src={constructedUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                onLoad={() => setIsLoading(false)}
                className="w-full h-full bg-white"
                title="Schedule Demo"
            />
        </div>
    );
}
