import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'AutoMaster Suite Guides & Docs',
    description: 'Step-by-step guides to configure and optimize every AI module. Get the most from lead reactivation, speed-to-lead, Voice AI, and campaigns.',
    alternates: {
        canonical: 'https://www.visquanta.com/ams-guides',
        languages: {
            'en-US': 'https://www.visquanta.com/ams-guides',
            'en-CA': 'https://www.visquanta.com/ca/ams-guides',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/ams-guides',
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

export default function AMSGuidesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
