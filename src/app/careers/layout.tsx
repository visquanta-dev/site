import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Careers | Join the Team',
    description: 'Help us shape the future of automotive retail intelligence. Explore career opportunities at VisQuanta and join a team dedicated to transforming the industry.',
    alternates: {
        canonical: 'https://www.visquanta.com/careers',
        languages: {
            'en-US': 'https://www.visquanta.com/careers',
            'en-CA': 'https://www.visquanta.com/ca/careers',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/careers',
    },
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
