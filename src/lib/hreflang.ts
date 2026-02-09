
const BASE_URL = 'https://www.visquanta.com';

/**
 * Generates hreflang alternate URLs for SEO.
 * @param pathname The current path (can include locale prefix like /ca or /uk)
 */
export function getHreflangTags(pathname: string) {
    // Strip /ca/ or /uk/ prefix to get the base path
    let basePath = pathname.replace(/^(\/ca|\/uk)/, '');
    if (!basePath) basePath = '/';

    // Ensure path starts with /
    const cleanPath = basePath.startsWith('/') ? basePath : `/${basePath}`;
    const isRoot = cleanPath === '/';

    return {
        'en-US': `${BASE_URL}${cleanPath}`,
        'en-CA': `${BASE_URL}/ca${isRoot ? '' : cleanPath}`,
        'en-GB': `${BASE_URL}/uk${isRoot ? '' : cleanPath}`,
        'x-default': `${BASE_URL}${cleanPath}`,
    };
}
