import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Meet the Team | Leadership & Experts',
    description: 'Meet the automotive veterans and technologists building VisQuanta. Our team brings decades of retail experience to create the industry\'s leading AI tools.',
    alternates: {
        canonical: 'https://www.visquanta.com/team',
        languages: {
            'en-US': 'https://www.visquanta.com/team',
            'en-CA': 'https://www.visquanta.com/ca/team',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/team',
    },
};

export default function TeamLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
