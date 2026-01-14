import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Solutions for Auto Groups | VisQuanta',
    description: 'Scalable AI-powered growth engines for enterprise-level automotive groups.',
    alternates: {
        canonical: 'https://visquanta.com/dealers/auto-groups',
    },
};

export default function AutoGroupsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
