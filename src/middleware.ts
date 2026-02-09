import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// =============================================================================
// LOCALE CONFIGURATION
// =============================================================================
const locales = ['en-US', 'en-CA', 'en-GB'] as const;
type Locale = (typeof locales)[number];

const defaultLocale: Locale = 'en-US';

const prefixToLocale: Record<string, Locale> = {
    'ca': 'en-CA',
    'uk': 'en-GB',
};

// Map country codes (from Vercel geo headers or Accept-Language) to locales
const countryToLocale: Record<string, Locale> = {
    'US': 'en-US',
    'CA': 'en-CA',
    'GB': 'en-GB',
    'UK': 'en-GB',
};

const LOCALE_COOKIE_NAME = 'vq-locale';
const GEO_BANNER_DISMISSED_COOKIE = 'vq-geo-banner-dismissed';

// =============================================================================
// BOT DETECTION (from existing middleware)
// =============================================================================
const bots = [
    "googlebot", "yahoo! slurp", "bingbot", "yandex", "baiduspider",
    "facebookexternalhit", "twitterbot", "rogerbot", "linkedinbot",
    "embedly", "quora link preview", "showyoubot", "outbrain",
    "pinterest/0.", "developers.google.com/+/web/snippet", "slackbot",
    "vkshare", "w3c_validator", "redditbot", "applebot", "whatsapp",
    "flipboard", "tumblr", "bitlybot", "skypeuripreview", "nuzzel",
    "discordbot", "google page speed", "qwantify", "pinterestbot",
    "bitrix link preview", "xing-contenttabreceiver", "chrome-lighthouse",
    "telegrambot", "oai-searchbot", "chatgpt", "gptbot", "perplexity",
    "claudeBot", "amazonbot", "integration-test",
];

const IGNORE_EXTENSIONS = [
    ".js", ".css", ".xml", ".less", ".png", ".jpg", ".jpeg", ".gif",
    ".pdf", ".doc", ".txt", ".ico", ".rss", ".zip", ".mp3", ".rar",
    ".exe", ".wmv", ".avi", ".ppt", ".mpg", ".mpeg", ".tif", ".wav",
    ".mov", ".psd", ".ai", ".xls", ".mp4", ".m4a", ".swf", ".dat",
    ".dmg", ".iso", ".flv", ".m4v", ".torrent", ".woff", ".ttf",
    ".svg", ".webmanifest", ".webp", ".woff2",
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
function getLocaleFromPathname(pathname: string): Locale | null {
    const segments = pathname.split('/').filter(Boolean);
    const prefix = segments[0];

    if (prefix && prefixToLocale[prefix]) {
        return prefixToLocale[prefix];
    }

    return null;
} // No locale prefix found

function detectUserCountry(request: NextRequest): string | null {
    // 1. Check for Development Override
    if (process.env.NODE_ENV === 'development' && process.env.DEV_GEO_COUNTRY) {
        return process.env.DEV_GEO_COUNTRY;
    }

    // 2. Check Vercel's geo header (works on Vercel/Netlify edge)
    const country = request.headers.get('x-vercel-ip-country')
        || request.headers.get('cf-ipcountry'); // Cloudflare

    if (country) {
        return country.toUpperCase();
    }

    // 3. Fallback: Parse Accept-Language header
    const acceptLang = request.headers.get('accept-language');
    if (acceptLang) {
        // Look for patterns like "en-CA" or "en-GB"
        const match = acceptLang.match(/en-(CA|GB|US)/i);
        if (match) {
            return match[1].toUpperCase();
        }
    }

    return null;
}

function shouldShowGeoBanner(request: NextRequest, detectedCountry: string | null): boolean {
    if (!detectedCountry) return false;

    // Check if banner was dismissed
    const dismissed = request.cookies.get(GEO_BANNER_DISMISSED_COOKIE);
    if (dismissed) return false;

    // Check if user already has a locale preference
    const localePref = request.cookies.get(LOCALE_COOKIE_NAME);
    if (localePref) return false;

    // Check if user is in a country different from current locale
    const suggestedLocale = countryToLocale[detectedCountry];
    if (!suggestedLocale) return false;

    // Get current locale from path
    const currentLocale = getLocaleFromPathname(request.nextUrl.pathname) || defaultLocale;

    // Show banner if detected country suggests a different locale
    return suggestedLocale !== currentLocale;
}

// =============================================================================
// MIDDLEWARE
// =============================================================================
export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const host = request.headers.get("host");

    // -------------------------------------------------------------------------
    // 1. Force www redirect (existing behavior)
    // -------------------------------------------------------------------------
    const protocol = request.headers.get("x-forwarded-proto") || "https";
    if (host === "visquanta.com" || host === "visquanta.com:443" || host === "visquanta.com:80") {
        return NextResponse.redirect(
            new URL(pathname + request.nextUrl.search, `${protocol}://www.visquanta.com`),
            301
        );
    }

    // -------------------------------------------------------------------------
    // 2. Skip static files and API routes
    // -------------------------------------------------------------------------
    const extension = pathname.slice(((pathname.lastIndexOf(".") - 1) >>> 0) + 1);
    if (extension && IGNORE_EXTENSIONS.includes(`.${extension}`)) {
        return NextResponse.next();
    }

    if (pathname.startsWith('/api/') || pathname.startsWith('/_next/')) {
        return NextResponse.next();
    }

    // -------------------------------------------------------------------------
    // 3. Detect locale from path
    // -------------------------------------------------------------------------
    const pathLocale = getLocaleFromPathname(pathname);
    const currentLocale = pathLocale || defaultLocale;


    // -------------------------------------------------------------------------
    // 4. Detect user's country for geo banner
    // -------------------------------------------------------------------------
    const detectedCountry = detectUserCountry(request);

    // Check for locale preference cookie
    const localePreference = request.cookies.get(LOCALE_COOKIE_NAME);

    // If no preference is set, set the detected country cookie
    if (!localePreference && detectedCountry) {
        // We mutate the request headers to pass this downstream via cookies if needed, 
        // but primarily we set it on the response below.
        // However, middleware runs before response is sent. 
        // We'll add the Set-Cookie header to the response object.
    }

    const showGeoBanner = shouldShowGeoBanner(request, detectedCountry);
    const suggestedLocale = detectedCountry ? countryToLocale[detectedCountry] : null;

    // -------------------------------------------------------------------------
    // 5. Bot handling (existing Prerender.io logic)
    // -------------------------------------------------------------------------
    const userAgent = request.headers.get("user-agent");
    const isBot = userAgent && bots.some((bot) => userAgent.toLowerCase().includes(bot));
    const isPrerender = request.headers.get("X-Prerender");

    if (isBot && !isPrerender) {
        const newURL = `http://service.prerender.io/${request.url}`;
        const newHeaders = new Headers(request.headers);
        newHeaders.set("X-Prerender-Token", "8NBDZ9ldnEIxh7WvwnyE");
        newHeaders.set("X-Prerender-Int-Type", "NextJS");

        try {
            const res = await fetch(new Request(newURL, {
                headers: newHeaders,
                redirect: "manual",
            }));

            const responseHeaders = new Headers(res.headers);
            responseHeaders.set("X-Redirected-From", request.url);

            const { readable, writable } = new TransformStream();
            res.body?.pipeTo(writable);

            return new NextResponse(readable, {
                status: res.status,
                statusText: res.statusText,
                headers: responseHeaders,
            });
        } catch {
            // Fall through to normal response
        }
    }

    // -------------------------------------------------------------------------
    // 6. Set locale headers for downstream components
    // -------------------------------------------------------------------------
    // Set headers on request so they are available to RSCs via headers()
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-locale', currentLocale);
    requestHeaders.set('x-detected-country', detectedCountry || '');
    requestHeaders.set('x-show-geo-banner', showGeoBanner ? 'true' : 'false');
    requestHeaders.set('x-suggested-locale', suggestedLocale || '');

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });

    // Set detected country cookie if not present and no preference
    // This allows the client-side banner to read it
    if (detectedCountry && !localePreference) {
        response.cookies.set('vq-detected-country', detectedCountry, {
            httpOnly: false, // Client needs to read this
            sameSite: 'lax',
            maxAge: 60 * 60 * 24, // 24 hours
            path: '/',
        });
    }

    // Also set on response for debugging or other use
    response.headers.set('x-locale', currentLocale);

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
