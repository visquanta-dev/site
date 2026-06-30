import { stripLocalePrefix } from '@/lib/i18n/config';

const BASE_URL = 'https://www.visquanta.com';

/**
 * Generates hreflang alternate URLs for SEO.
 * 
 * IMPORTANT: Only includes locales that have a working route handler.
 * en-GB (/uk) is intentionally excluded — no route exists, so including
 * it would cause crawlers to index 404 pages.
 * 
 * @param pathname The current path (can include locale prefix like /ca)
 */
export function getHreflangTags(pathname: string) {
    const cleanPath = stripLocalePrefix(pathname.startsWith('/') ? pathname : `/${pathname}`);
    const isRoot = cleanPath === '/';

    return {
        'en-US': `${BASE_URL}${cleanPath}`,
        'en-CA': `${BASE_URL}/ca${isRoot ? '' : cleanPath}`,
        'x-default': `${BASE_URL}${cleanPath}`,
    };
}
