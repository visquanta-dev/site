import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Meet Our Leadership Team',
    description: "Automotive veterans and AI technologists building the industry's most advanced dealership platform. Decades of retail experience in one team.",
    alternates: {
        canonical: 'https://www.visquanta.com/team',
        languages: {
            'en-US': 'https://www.visquanta.com/team',
            'en-CA': 'https://www.visquanta.com/ca/team',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/team',
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

export default function TeamLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
