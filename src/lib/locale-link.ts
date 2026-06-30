import { stripLocalePrefix } from '@/lib/i18n/config';

/**
 * Generates versioned internal links based on the provided locale.
 * 
 * IMPORTANT: Only generates prefixed links for locales with active route handlers.
 * en-GB is intentionally excluded — no /uk route handler exists.
 * 
 * @param path The destination path (e.g., '/about')
 * @param locale The current locale (e.g., 'en-US', 'en-CA', 'en-GB')
 */
export function localeLink(path: string, locale?: string): string {
    if (!locale || locale === 'en-US') {
        return path;
    }

    // Only en-CA has an active locale route. en-GB has no /uk route handler,
    // so we must NOT generate /uk/* links (they 404).
    const prefix = locale === 'en-CA' ? '/ca' : '';

    if (!prefix) return path;

    const cleanPath = stripLocalePrefix(path.startsWith('/') ? path : `/${path}`);

    if (cleanPath === '/') return `${prefix}/`;

    return `${prefix}${cleanPath}`;
}
