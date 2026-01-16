// Utility to generate page-specific OpenGraph metadata
// This ensures og:url matches the canonical URL for each page

import { Metadata } from 'next';

interface PageMetadataOptions {
    title: string;
    description: string;
    path: string; // e.g., '/about-visquanta' or '/dealers/franchise'
    image?: string;
    type?: 'website' | 'article';
    keywords?: string[];
}

export function generatePageMetadata({
    title,
    description,
    path,
    image = '/images/og-image.png',
    type = 'website',
    keywords = [],
}: PageMetadataOptions): Metadata {
    const baseUrl = 'https://www.visquanta.com';
    const fullUrl = `${baseUrl}${path}`;
    const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

    return {
        title,
        description,
        keywords: keywords.length > 0 ? keywords : undefined,
        alternates: {
            canonical: fullUrl,
        },
        openGraph: {
            type,
            url: fullUrl,
            siteName: 'VisQuanta',
            locale: 'en_US',
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
