import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Company | About Us',
    description: 'Learn about the mission, vision, and operational philosophy driving the automotive industry\'s most advanced revenue engine. We help dealerships scale with AI.',
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
