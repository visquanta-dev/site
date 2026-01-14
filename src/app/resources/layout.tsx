import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Resource Center | VisQuanta Automotive Growth',
    description: 'Explore the resource center for guides, videos, and articles to help your dealership thrive.',
    alternates: {
        canonical: 'https://visquanta.com/resources',
    },
};

export default function ResourcesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
