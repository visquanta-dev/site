import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'AI Solutions by Dealer Type',
    description: 'Tailored AI for franchise groups, independents, auto groups, RV, and pre-owned dealers. See which VisQuanta modules fit your operation.',
    alternates: {
        canonical: 'https://www.visquanta.com/dealers',
        languages: {
            'en-US': 'https://www.visquanta.com/dealers',
            'en-CA': 'https://www.visquanta.com/ca/dealers',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/dealers',
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

export default function DealersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
