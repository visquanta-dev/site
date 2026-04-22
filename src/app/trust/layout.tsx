import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Trust & Compliance — Visquanta',
    description: "Visquanta's trust and compliance overview — data processing agreements, sub-processors, and AI data handling practices.",
    alternates: {
        canonical: 'https://www.visquanta.com/trust',
        languages: {
            'en-US': 'https://www.visquanta.com/trust',
            'en-CA': 'https://www.visquanta.com/ca/trust',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/trust',
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

export default function TrustLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
