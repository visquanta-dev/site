import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'AI for RV Dealerships',
    description: 'Optimize RV sales cycles with AI-powered lead reactivation and automated service scheduling. Built for the unique demands of RV retail.',
    alternates: {
        canonical: 'https://www.visquanta.com/dealers/rv',
        languages: {
            'en-US': 'https://www.visquanta.com/dealers/rv',
            'en-CA': 'https://www.visquanta.com/ca/dealers/rv',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/dealers/rv',
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

export default function RVLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
