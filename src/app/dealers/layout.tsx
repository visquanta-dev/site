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
    },
};

export default function DealersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
