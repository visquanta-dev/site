'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { LOCALE_COOKIE_NAME, GEO_BANNER_DISMISSED_COOKIE } from '@/lib/i18n/config';
import { X, Globe } from 'lucide-react';
import { CA } from 'country-flag-icons/react/3x2';
import Image from 'next/image';

const DETECTED_COUNTRY_COOKIE = 'vq-detected-country';

export default function GeoSuggestionBanner() {
    const [show, setShow] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        // Don't show on /ca/ pages — they're already on the Canadian site
        if (pathname && pathname.startsWith('/ca')) return;

        // Check if user already dismissed or set a preference
        const dismissed = getCookie(GEO_BANNER_DISMISSED_COOKIE);
        const preference = getCookie(LOCALE_COOKIE_NAME);

        if (dismissed || preference) return;

        // Check detected country
        const country = getCookie(DETECTED_COUNTRY_COOKIE);

        // Show if detected country is Canada
        if (country === 'CA') {
            setShow(true);
        }
    }, [pathname]);

    const handleDismiss = () => {
        setShow(false);
        // Don't show again for 30 days
        setCookie(GEO_BANNER_DISMISSED_COOKIE, 'true', 30);
    };

    const handleSwitch = () => {
        // Set preference so banner doesn't show again
        // Use document.cookie directly to ensure client-side set matches server expectation
        setCookie(LOCALE_COOKIE_NAME, 'en-CA', 365);

        // Redirect to Canadian version of current page
        // If homepage / -> /ca
        // If /about -> /ca/about
        const cleanPath = pathname === '/' ? '' : pathname;
        // Ensure we don't double slash
        const canadianPath = `/ca${cleanPath}`;

        window.location.href = canadianPath;
    };

    if (!show) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-[2000] bg-[#0A0A0A] border-b border-white/10 px-4 py-3 shadow-2xl">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF7404]/50 to-transparent" />

            <div className="container-wide mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-center sm:text-left">
                    <div className="w-8 h-6 relative shadow-lg rounded-sm overflow-hidden shrink-0">
                        <CA className="w-full h-full object-cover" />
                    </div>
                    <p className="text-sm text-zinc-300 font-medium leading-tight">
                        It looks like you're visiting from <span className="text-white font-bold">Canada</span>.
                        <span className="hidden sm:inline"> would you like to view our Canadian site with local content?</span>
                        <span className="sm:hidden"> Switch to Canadian site?</span>
                    </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                    <button
                        onClick={handleSwitch}
                        className="px-4 py-2 bg-[#FF7404] hover:bg-[#ff8a2b] text-black text-xs font-black uppercase tracking-widest rounded-lg transition-all shadow-[0_0_15px_rgba(255,116,4,0.3)] hover:shadow-[0_0_20px_rgba(255,116,4,0.5)] flex items-center gap-2"
                    >
                        Switch to Canada
                        <Globe className="w-3 h-3" />
                    </button>

                    <button
                        onClick={handleDismiss}
                        className="p-2 text-zinc-500 hover:text-white transition-colors hover:bg-white/10 rounded-lg"
                        aria-label="Dismiss"
                        title="Stay on US Site"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}

// Cookie helpers
function getCookie(name: string): string | null {
    if (typeof document === 'undefined') return null;
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string, days: number) {
    if (typeof document === 'undefined') return;
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Lax`;
}
