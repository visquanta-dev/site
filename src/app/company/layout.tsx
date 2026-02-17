import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Company — Our Mission & Philosophy',
    description: 'The operational philosophy behind automotive AI that works. We help dealerships stop leaking revenue and start scaling profitably.',
    alternates: {
        canonical: 'https://www.visquanta.com/company',
        languages: {
            'en-US': 'https://www.visquanta.com/company',
            'en-CA': 'https://www.visquanta.com/ca/company',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/company',
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

export default function CompanyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
