'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';

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

    // Construct URL with params
    const constructedUrl = `${url}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=ff7404`
        + `&name=${encodeURIComponent(prefill.name)}`
        + `&email=${encodeURIComponent(prefill.email)}`
        + `&a1=${encodeURIComponent(prefill.phone)}` // Attempting to prefill phone (a1 is common for first custom answer or phone field)
        + `&a2=${encodeURIComponent(prefill.dealership || '')}`; // Attempting to prefill dealership

    return (
        <div className="w-full h-[700px] relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10 shadow-2xl animate-in fade-in zoom-in-95 duration-700">
            {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0a] z-10 gap-4">
                    <Loader2 className="w-10 h-10 text-[#FF7404] animate-spin" />
                    <p className="text-white/40 text-sm animate-pulse">Loading secure scheduler...</p>
                </div>
            )}
            <iframe
                src={constructedUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                onLoad={() => setIsLoading(false)}
                className="w-full h-full"
                title="Schedule Demo"
            />
        </div>
    );
}
