'use client';

// src/components/i18n/GeoBannerWrapper.tsx
// Client wrapper for GeoBanner to handle client-side state

import GeoBanner from './GeoBanner';
import { Locale } from '@/lib/i18n/config';

interface GeoBannerWrapperProps {
    suggestedLocale: Locale | null;
    detectedCountry: string | null;
    showBanner: boolean;
}

export default function GeoBannerWrapper({
    suggestedLocale,
    detectedCountry,
    showBanner
}: GeoBannerWrapperProps) {
    if (!showBanner) {
        return null;
    }

    return (
        <GeoBanner
            suggestedLocale={suggestedLocale}
            detectedCountry={detectedCountry}
        />
    );
}
