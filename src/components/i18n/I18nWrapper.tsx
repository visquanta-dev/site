// src/components/i18n/I18nWrapper.tsx
// Server component wrapper that extracts locale from path and provides to client

import { headers } from 'next/headers';
import { LocaleProvider } from '@/lib/i18n/LocaleProvider';
import { Locale, defaultLocale, prefixToLocale } from '@/lib/i18n/config';
import GeoBannerWrapper from './GeoBannerWrapper';

interface I18nWrapperProps {
    children: React.ReactNode;
}

function getLocaleFromPathname(pathname: string): Locale | null {
    const segments = pathname.split('/').filter(Boolean);
    const prefix = segments[0];

    if (prefix && prefixToLocale[prefix]) {
        return prefixToLocale[prefix];
    }

    return null;
}

export default async function I18nWrapper({ children }: I18nWrapperProps) {
    const headersList = await headers();

    // Get locale from middleware header or derive from referer/pathname
    const localeHeader = headersList.get('x-locale');
    const referer = headersList.get('referer');
    const detectedCountry = headersList.get('x-detected-country');
    const showGeoBanner = headersList.get('x-show-geo-banner') === 'true';
    const suggestedLocale = headersList.get('x-suggested-locale') as Locale | null;

    // Determine locale
    let locale: Locale = defaultLocale;

    if (localeHeader && (localeHeader === 'en-US' || localeHeader === 'en-CA' || localeHeader === 'en-GB')) {
        locale = localeHeader as Locale;
    } else {
        // Fallback: try to derive from referer or path (if available)
        if (referer) {
            try {
                const refererUrl = new URL(referer);
                const derived = getLocaleFromPathname(refererUrl.pathname);
                if (derived) locale = derived;
            } catch { /* ignore */ }
        }
    }

    return (
        <LocaleProvider locale={locale}>
            <GeoBannerWrapper
                suggestedLocale={suggestedLocale}
                detectedCountry={detectedCountry}
                showBanner={showGeoBanner}
            />
            {children}
        </LocaleProvider>
    );
}
