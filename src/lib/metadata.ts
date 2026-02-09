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
    let fullUrl = `${baseUrl}${cleanPath}`;
    if (locale === 'en-CA' && !cleanPath.startsWith('/ca')) {
        fullUrl = `${baseUrl}/ca${cleanPath === '/' ? '' : cleanPath}`;
    } else if (locale === 'en-GB' && !cleanPath.startsWith('/uk')) {
        fullUrl = `${baseUrl}/uk${cleanPath === '/' ? '' : cleanPath}`;
    }

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
