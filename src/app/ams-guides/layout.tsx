import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'AMS Guides | Documentation & Optimization',
    description: 'Comprehensive guides and technical documentation for the AutoMaster Suite. Learn to configure and optimize your AI tools for maximum dealership impact.',
    alternates: {
        canonical: 'https://www.visquanta.com/ams-guides',
        languages: {
            'en-US': 'https://www.visquanta.com/ams-guides',
            'en-CA': 'https://www.visquanta.com/ca/ams-guides',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/ams-guides',
    },
};

export default function AMSGuidesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
