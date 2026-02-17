// src/lib/i18n/config.ts
// Internationalization configuration for VisQuanta

export const locales = ['en-US', 'en-CA', 'en-GB'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en-US';

// Locale metadata for UI
export const localeConfig: Record<Locale, {
    name: string;
    flag: string;
    urlPrefix: string | null; // null = default (no prefix)
    enabled: boolean;
    country: string;
}> = {
    'en-US': {
        name: 'United States',
        flag: '🇺🇸',
        urlPrefix: null, // Default locale - no URL prefix
        enabled: true,
        country: 'United States',
    },
    'en-CA': {
        name: 'Canada',
        flag: '🇨🇦',
        urlPrefix: 'ca',
        enabled: true,
        country: 'Canada',
    },
    'en-GB': {
        name: 'United Kingdom',
        flag: '🇬🇧',
        urlPrefix: 'uk',
        enabled: false, // Placeholder - coming soon
        country: 'United Kingdom',
    },
};

// Map URL prefixes to locales
export const prefixToLocale: Record<string, Locale> = {
    'ca': 'en-CA',
    'uk': 'en-GB',
};

// Map country codes (from geo-IP) to suggested locales
export const countryToLocale: Record<string, Locale> = {
    'US': 'en-US',
    'CA': 'en-CA',
    'GB': 'en-GB',
    'UK': 'en-GB',
};

// Get locale from URL path
export function getLocaleFromPath(pathname: string): Locale {
    const segments = pathname.split('/').filter(Boolean);
    const prefix = segments[0];

    if (prefix && prefixToLocale[prefix]) {
        return prefixToLocale[prefix];
    }

    return defaultLocale;
}

// Get URL prefix for a locale
export function getUrlPrefix(locale: Locale): string {
    return localeConfig[locale].urlPrefix || '';
}

// Convert a path to a localized path
export function localizePathname(pathname: string, targetLocale: Locale): string {
    // Remove any existing locale prefix
    const segments = pathname.split('/').filter(Boolean);
    const firstSegment = segments[0];

    if (firstSegment && prefixToLocale[firstSegment]) {
        segments.shift(); // Remove existing locale prefix
    }

    const basePath = '/' + segments.join('/');
    const prefix = getUrlPrefix(targetLocale);

    if (prefix) {
        return `/${prefix}${basePath === '/' ? '' : basePath}`;
    }

    return basePath || '/';
}

// Cookie name for locale preference
export const LOCALE_COOKIE_NAME = 'vq-locale';
export const GEO_BANNER_DISMISSED_COOKIE = 'vq-geo-banner-dismissed';

// =============================================================================
// SAFEGUARDS: Prevent future locale route leaks
// =============================================================================

/**
 * Returns only locales that are enabled in the config.
 */
export const enabledLocales = locales.filter(l => localeConfig[l].enabled);

/**
 * Returns locales that have active route handlers in the Next.js app router.
 * A locale has a "route" if either:
 *   - It's the default locale (no prefix needed, always works)
 *   - It has an explicit directory under src/app/ (e.g., src/app/ca/)
 * 
 * IMPORTANT: Update this list when you add new locale route handlers.
 */
export const ACTIVE_LOCALE_ROUTES: Locale[] = ['en-US', 'en-CA'];

/**
 * Checks whether a locale has an active route handler.
 * Use this before generating any URL with a locale prefix.
 */
export function hasActiveRoute(locale: Locale): boolean {
    return ACTIVE_LOCALE_ROUTES.includes(locale);
}

/**
 * Safe URL prefix — returns empty string for locales without active routes.
 */
export function getSafeUrlPrefix(locale: Locale): string {
    if (!hasActiveRoute(locale)) return '';
    return localeConfig[locale].urlPrefix || '';
}
