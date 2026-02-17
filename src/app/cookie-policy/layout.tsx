import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Cookie Policy',
    description: 'How VisQuanta uses cookies to improve your experience, analyze traffic, and provide secure platform functionality.',
    alternates: {
        canonical: 'https://www.visquanta.com/cookie-policy',
        languages: {
            'en-US': 'https://www.visquanta.com/cookie-policy',
            'en-CA': 'https://www.visquanta.com/ca/cookie-policy',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/cookie-policy',
            images: [
            {
                url: 'https://www.visquanta.com/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'VisQuanta',
            }
        ],
    },
};

export default function CookiePolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
