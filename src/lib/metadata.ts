// Utility to generate page-specific OpenGraph metadata
// This ensures og:url matches the canonical URL for each page

import { Metadata } from 'next';
import { getHreflangTags } from './hreflang';

interface PageMetadataOptions {
    title: string;
    description: string;
    path: string; // e.g., '/about-visquanta' or '/dealers/franchise'
    image?: string;
    type?: 'website' | 'article';
    keywords?: string[];
    locale?: string;
}

export function generatePageMetadata({
    title,
    description,
    path,
    image = '/images/og-image.png',
    type = 'website',
    keywords = [],
    locale = 'en-US',
}: PageMetadataOptions): Metadata {
    const baseUrl = 'https://www.visquanta.com';
    const cleanPath = path.startsWith('/') ? path : `/${path}`;

    // Construct full URL based on locale
    // Only en-CA has an active locale route (/ca). en-GB (/uk) has no route handler.
    let fullUrl = `${baseUrl}${cleanPath}`;
    if (locale === 'en-CA' && !cleanPath.startsWith('/ca')) {
        fullUrl = `${baseUrl}/ca${cleanPath === '/' ? '' : cleanPath}`;
    }
    // en-GB visitors see US content (no /uk routes exist)

    const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

    return {
        title,
        description,
        keywords: keywords.length > 0 ? keywords : undefined,
        alternates: {
            canonical: fullUrl,
            languages: getHreflangTags(path),
        },
        openGraph: {
            type,
            url: fullUrl,
            siteName: 'VisQuanta',
            locale: locale.replace('-', '_'), // en-US -> en_US
            title,
            description,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                    type: 'image/png',
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            site: '@VisQuanta',
            creator: '@VisQuanta',
            title,
            description,
            images: [imageUrl],
        },
    };
}

/** Full OG + Twitter for share previews; aligns with canonical so Ahrefs / parsers don’t inherit root defaults. */
export function openGraphTwitterPack(options: {
    canonicalUrl: string;
    title: string;
    description: string;
    imagePath?: string;
    type?: 'website' | 'article';
    /** OG locale token, e.g. en_US, en_CA */
    locale?: string;
}): Pick<Metadata, 'openGraph' | 'twitter'> {
    const baseUrl = 'https://www.visquanta.com';
    const imagePath = options.imagePath ?? '/images/og-image.png';
    const imageUrl = imagePath.startsWith('http')
        ? imagePath
        : `${baseUrl}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`;
    const locale = options.locale ?? 'en_US';

    return {
        openGraph: {
            type: options.type ?? 'website',
            url: options.canonicalUrl,
            siteName: 'VisQuanta',
            locale,
            title: options.title,
            description: options.description,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: options.title,
                    type: 'image/png',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            site: '@VisQuanta',
            creator: '@VisQuanta',
            title: options.title,
            description: options.description,
            images: [imageUrl],
        },
    };
}
