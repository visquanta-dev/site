import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Dealership AI Resource Center',
    description: 'Guides, case studies, and industry articles to help your dealership maximize revenue with AI. Technical docs and strategic playbooks.',
    alternates: {
        canonical: 'https://www.visquanta.com/resources',
        languages: {
            'en-US': 'https://www.visquanta.com/resources',
            'en-CA': 'https://www.visquanta.com/ca/resources',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/resources',
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

export default function ResourcesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
