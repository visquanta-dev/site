import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Dealer Services | AI-Powered Solutions for Dealerships',
    description: 'From lead recovery to reputation protection, our suite of AI-powered services transforms how your dealership engages customers and drives revenue.',
    alternates: {
        canonical: 'https://www.visquanta.com/dealer-services',
        languages: {
            'en-US': 'https://www.visquanta.com/dealer-services',
            'en-CA': 'https://www.visquanta.com/ca/dealer-services',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/dealer-services',
    },
};

export default function DealerServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
