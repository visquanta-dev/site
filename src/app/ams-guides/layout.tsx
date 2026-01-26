import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'AMS Guides | Documentation & Optimization',
    description: 'Access comprehensive guides and technical documentation for the AutoMaster Suite. Learn how to configure and optimize your AI tools for maximum dealership impact.',
    alternates: {
        canonical: 'https://www.visquanta.com/ams-guides',
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
