/**
 * Utility to normalize internal links in externally sourced content (like blog HTML).
 * This eliminates reliance on server-side redirects by rewriting legacy paths to their
 * modern canonical versions at render-time.
 */

import REDIRECT_MAP_JSON from './redirect-map.json';

const REDIRECT_MAP: Record<string, string> = REDIRECT_MAP_JSON;
const CORRUPTED_LINK_RULES: Array<{ test: RegExp; destination: string }> = [
    { test: /lead-reactivation\.com\/lead-loss-mitigation/i, destination: '/lead-reactivation' },
    { test: /dealer-success\/dealer-success-solutions/i, destination: '/dealer-success' },
    { test: /independenta\.com\/independent-dealers/i, destination: '/dealers/independent' },
    { test: /auto-groupsnta\.com\/enterprise-groups/i, destination: '/dealers/auto-groups' },
    { test: /franchisenta\.com\/franchise-dealers/i, destination: '/dealers/franchise' },
    { test: /auto-groups\.visquanta\.com\/auto-group/i, destination: '/dealers/auto-groups' },
    { test: /book-demoisquanta\.com\/partnerships/i, destination: '/book-demo' },
    { test: /blogw\.visquanta\.com\/blog-home/i, destination: '/blog' },
    { test: /faqss:\/*/i, destination: '/faqs' },
    {
        test: /why-every-dealership-needs-ai-for-lead-reactivation-in-2026lead-reactivation-in-2025/i,
        destination: '/blog/why-every-dealership-needs-ai-for-lead-reactivation-in-2026',
    },
];

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
        const lowerUrl = normalizedUrl.toLowerCase();

        // Skip non-http links and in-page anchors.
        if (lowerUrl.startsWith('mailto:') || lowerUrl.startsWith('tel:') || lowerUrl.startsWith('#')) {
            return match;
        }

        // 1. Handle absolute URLs to our own domain
        if (normalizedUrl.startsWith('https://www.visquanta.com')) {
            normalizedUrl = normalizedUrl.replace('https://www.visquanta.com', '');
        }
        if (normalizedUrl.startsWith('http://www.visquanta.com')) {
            normalizedUrl = normalizedUrl.replace('http://www.visquanta.com', '');
        }
        if (normalizedUrl.startsWith('https://visquanta.com')) {
            normalizedUrl = normalizedUrl.replace('https://visquanta.com', '');
        }
        if (normalizedUrl.startsWith('http://visquanta.com')) {
            normalizedUrl = normalizedUrl.replace('http://visquanta.com', '');
        }

        // 2. Repair known corrupted link patterns observed in crawl exports.
        for (const rule of CORRUPTED_LINK_RULES) {
            if (rule.test.test(normalizedUrl)) {
                normalizedUrl = rule.destination;
                break;
            }
        }

        // 3. If an internal link is missing the leading slash, normalize it.
        if (
            normalizedUrl &&
            !normalizedUrl.startsWith('/') &&
            !normalizedUrl.startsWith('http://') &&
            !normalizedUrl.startsWith('https://') &&
            !normalizedUrl.startsWith('//')
        ) {
            normalizedUrl = `/${normalizedUrl}`;
        }

        // Ensure we handle '/' root correctly
        if (normalizedUrl === '') normalizedUrl = '/';

        // 4. Handle /ca prefix (prevent mirroring as per previous requirements)
        if (normalizedUrl.startsWith('/ca/blog')) {
            normalizedUrl = normalizedUrl.replace('/ca/blog', '/blog');
        }

        // 5. Handle /blog-details/:slug pattern
        if (normalizedUrl.startsWith('/blog-details/')) {
            normalizedUrl = normalizedUrl.replace('/blog-details/', '/blog/');
        }

        // 6. Handle exact matches from the redirect map
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
