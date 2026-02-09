
/**
 * Generates versioned internal links based on the provided locale.
 * @param path The destination path (e.g., '/about')
 * @param locale The current locale (e.g., 'en-US', 'en-CA', 'en-GB')
 */
export function localeLink(path: string, locale?: string): string {
    if (!locale || locale === 'en-US') {
        return path;
    }

    const prefix = locale === 'en-CA' ? '/ca' : locale === 'en-GB' ? '/uk' : '';

    // Ensure path starts with /
    const cleanPath = path.startsWith('/') ? path : `/${path}`;

    // Avoid double slashes if path is just /
    if (cleanPath === '/' && prefix) return prefix + '/';

    return `${prefix}${cleanPath}`;
}
