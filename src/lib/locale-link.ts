
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
    if (!locale || locale === 'en-US' || path.startsWith('/blog')) {
        return path;
    }

    // Only en-CA has an active locale route. en-GB has no /uk route handler,
    // so we must NOT generate /uk/* links (they 404).
    const prefix = locale === 'en-CA' ? '/ca' : '';

    if (!prefix) return path;

    // Ensure path starts with /
    const cleanPath = path.startsWith('/') ? path : `/${path}`;

    // Avoid double slashes if path is just /
    if (cleanPath === '/' && prefix) return prefix + '/';

    return `${prefix}${cleanPath}`;
}
