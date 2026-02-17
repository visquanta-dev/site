import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Careers at VisQuanta',
    description: "Join the team transforming automotive retail with AI. We're hiring engineers, strategists, and operators who want to build what's next.",
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
