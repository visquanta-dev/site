/**
 * Utility to normalize internal links in externally sourced content (like blog HTML).
 * This eliminates reliance on server-side redirects by rewriting legacy paths to their
 * modern canonical versions at render-time.
 */

import REDIRECT_MAP_JSON from './redirect-map.json';

const REDIRECT_MAP: Record<string, string> = REDIRECT_MAP_JSON;

/**
 * Normalizes an HTML string by replacing legacy internal links with canonical ones.
 * @param html The HTML content to normalize
 * @returns Normalized HTML content
 */
export function normalizeLinks(html: string): string {
    if (!html) return html;

    // Use a regular expression to find all href attributes in anchor tags
    // Matches href="/path" or href="https://www.visquanta.com/path"
    return html.replace(/<a\s+(?:[^>]*?)\bhref=(["'])(.*?)\1/gi, (match, quote, url) => {
        let normalizedUrl = url;

        // 1. Handle absolute URLs to our own domain
        if (normalizedUrl.startsWith('https://www.visquanta.com')) {
            normalizedUrl = normalizedUrl.replace('https://www.visquanta.com', '');
        }

        // Ensure we handle '/' root correctly
        if (normalizedUrl === '') normalizedUrl = '/';

        // 2. Handle /ca prefix (prevent mirroring as per previous requirements)
        if (normalizedUrl.startsWith('/ca/blog')) {
            normalizedUrl = normalizedUrl.replace('/ca/blog', '/blog');
        }

        // 3. Handle /blog-details/:slug pattern
        if (normalizedUrl.startsWith('/blog-details/')) {
            normalizedUrl = normalizedUrl.replace('/blog-details/', '/blog/');
        }

        // 4. Handle exact matches from the redirect map
        const [path, query] = normalizedUrl.split(/[?#]/);

        // Remove trailing slash for matching
        const cleanPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;

        if (REDIRECT_MAP[cleanPath]) {
            const newPath = REDIRECT_MAP[cleanPath];
            // Reattach query strings/hashes if they existed
            const suffix = url.slice(path.length);
            normalizedUrl = newPath + suffix;
        }

        // 5. Build the final tag replacement
        return match.replace(`href=${quote}${url}${quote}`, `href=${quote}${normalizedUrl}${quote}`);
    });
}
