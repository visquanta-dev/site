import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Resource Center',
    description: 'Access the VisQuanta Resource Center for technical guides, case studies, and industry articles designed to help your dealership maximize revenue and efficiency.',
    alternates: {
        canonical: 'https://www.visquanta.com/resources',
        languages: {
            'en-US': 'https://www.visquanta.com/resources',
            'en-CA': 'https://www.visquanta.com/ca/resources',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/resources',
    },
};

export default function ResourcesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
