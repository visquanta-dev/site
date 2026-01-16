import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Case Studies | VisQuanta Success Stories',
    description: 'Explore real-world results from elite dealerships using AutoMaster Suite. See how our clients achieved massive ROI and sales growth through AI-driven automation.',
    alternates: {
        canonical: 'https://www.visquanta.com/case-studies',
    },
    openGraph: {
        url: 'https://www.visquanta.com/case-studies',
    },
};

export default function CaseStudiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
