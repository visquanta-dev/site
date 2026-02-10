import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Independent Dealer AI | Scalable Growth',
    description: 'Accelerate growth for your independent dealership with AI-powered lead management, inventory turn optimization, and 24/7 automated customer engagement tools.',
    alternates: {
        canonical: 'https://www.visquanta.com/dealers/independent',
        languages: {
            'en-US': 'https://www.visquanta.com/dealers/independent',
            'en-CA': 'https://www.visquanta.com/ca/dealers/independent',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/dealers/independent',
    },
};

export default function IndependentDealerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
