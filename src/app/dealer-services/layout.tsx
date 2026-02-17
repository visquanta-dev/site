import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'AI-Powered Dealer Services',
    description: 'From lead recovery to reputation protection. AI-powered services that transform how your dealership engages customers and drives measurable revenue.',
    alternates: {
        canonical: 'https://www.visquanta.com/dealer-services',
        languages: {
            'en-US': 'https://www.visquanta.com/dealer-services',
            'en-CA': 'https://www.visquanta.com/ca/dealer-services',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/dealer-services',
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

export default function DealerServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
