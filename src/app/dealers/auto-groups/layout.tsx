import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'AI for Auto Groups & Multi-Rooftops',
    description: 'Centralize lead management across every rooftop. Enterprise-grade AI with unified dashboards, multi-store reporting, and scalable automation.',
    alternates: {
        canonical: 'https://www.visquanta.com/dealers/auto-groups',
        languages: {
            'en-US': 'https://www.visquanta.com/dealers/auto-groups',
            'en-CA': 'https://www.visquanta.com/ca/dealers/auto-groups',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/dealers/auto-groups',
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

export default function AutoGroupsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
