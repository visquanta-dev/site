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
    },
};

export default function CompanyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
