// src/lib/locale-config.ts
// Centralized locale configuration for VisQuanta multi-region

export type Locale = 'us' | 'ca';

export interface LocaleConfig {
    code: Locale;
    hreflang: string;
    pathPrefix: string;
    country: string;
    countryFull: string;
    currency: string;
    phonePrefix: string;
    phone: string;
    address: string;
    flag: string;
    blogCta: {
        headline: string;
        subheadline: string;
        buttonText: string;
        buttonHref: string;
    };
    blogMeta: {
        titleSuffix: string;
        indexTitle: string;
        indexDescription: string;
    };
}

export const locales: Record<Locale, LocaleConfig> = {
    us: {
        code: 'us',
        hreflang: 'en-US',
        pathPrefix: '',
        country: 'US',
        countryFull: 'United States',
        currency: 'USD',
        phonePrefix: '+1',
        phone: '+1 786-686-6554',
        address: '2222 Ponce de Leon Blvd, 3rd Floor Miami, FL 33134 USA',
        flag: '🇺🇸',
        blogCta: {
            headline: 'Stop Losing Leads. Start Closing More Deals.',
            subheadline: 'See how AutoMaster Suite helps dealerships recover lost revenue and respond to every lead instantly.',
            buttonText: 'Book a Demo',
            buttonHref: '/book-demo',
        },
        blogMeta: {
            titleSuffix: ' | VisQuanta',
            indexTitle: 'Automotive AI Blog & Insights | VisQuanta',
            indexDescription: 'Expert insights on AI for car dealerships. Learn how to reduce lead loss, speed up response times, and boost your dealership reputation with automation.',
        },
    },
    ca: {
        code: 'ca',
        hreflang: 'en-CA',
        pathPrefix: '/ca',
        country: 'CA',
        countryFull: 'Canada',
        currency: 'CAD',
        phonePrefix: '+1',
        phone: '+1 786-686-6554',
        address: '2222 Ponce de Leon Blvd, 3rd Floor Miami, FL 33134 USA',
        flag: '🇨🇦',
        blogCta: {
            headline: 'Canadian Dealerships Are Closing More Deals with AI',
            subheadline: 'AutoMaster Suite is built for Canadian dealership operations — from AMVIC to OMVIC compliance, bilingual markets, and cross-province scaling.',
            buttonText: 'Book a Demo for Your Dealership',
            buttonHref: '/ca/book-demo',
        },
        blogMeta: {
            titleSuffix: ' | VisQuanta Canada',
            indexTitle: 'AI for Canadian Car Dealerships — Blog & Insights | VisQuanta',
            indexDescription: 'Expert insights on AI for Canadian car dealerships. Learn how dealers across Canada use automation to reduce lead loss, respond faster, and grow revenue.',
        },
    },
};

export const defaultLocale: Locale = 'us';

export function getLocaleFromPath(pathname: string): Locale {
    if (pathname.startsWith('/ca')) return 'ca';
    return 'us';
}

export function getAlternateUrls(path: string): { hreflang: string; href: string }[] {
    const baseUrl = 'https://www.visquanta.com';
    // Strip leading /ca if present to get the base path
    const basePath = path.replace(/^\/ca/, '') || '/';
    const cleanPath = basePath === '/' ? '' : basePath;

    return [
        { hreflang: 'en-US', href: `${baseUrl}${cleanPath}` },
        { hreflang: 'en-CA', href: `${baseUrl}/ca${cleanPath}` },
        { hreflang: 'x-default', href: `${baseUrl}${cleanPath}` },
    ];
}
