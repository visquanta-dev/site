import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact VisQuanta — Sales & Support',
    description: 'Talk to our team about AI for your dealership. Get a custom revenue projection, onboarding details, or answers to technical questions.',
    alternates: {
        canonical: 'https://www.visquanta.com/contact',
        languages: {
            'en-US': 'https://www.visquanta.com/contact',
            'en-CA': 'https://www.visquanta.com/ca/contact',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/contact',
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

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
