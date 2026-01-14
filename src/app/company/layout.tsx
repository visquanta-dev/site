import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Company | About VisQuanta',
    description: 'Learn about the mission, vision, and operational philosophy driving the automotive industry\'s most advanced revenue engine.',
    alternates: {
        canonical: 'https://visquanta.com/company',
    },
};

export default function CompanyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
