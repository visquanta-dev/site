import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Company | About VisQuanta',
    description: 'Learn about the mission, vision, and operational philosophy driving the automotive industry\'s most advanced revenue engine. We help dealerships scale with AI.',
    alternates: {
        canonical: 'https://www.visquanta.com/company',
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
