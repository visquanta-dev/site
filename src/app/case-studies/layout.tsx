import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Case Studies | VisQuanta Success Stories',
    description: 'Real-world results from elite dealerships using AutoMaster Suite.',
    alternates: {
        canonical: 'https://www.visquanta.com/case-studies',
    },
};

export default function CaseStudiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
