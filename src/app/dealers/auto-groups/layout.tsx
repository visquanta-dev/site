import type { Metadata } from "next";
import { openGraphTwitterPack } from "@/lib/metadata";

export const metadata: Metadata = {
    title: 'AI for Auto Groups & Multi-Rooftops',
    description: 'Centralize lead management across every rooftop. Enterprise-grade AI with unified dashboards, multi-store reporting, and scalable automation.',
    alternates: {
        canonical: 'https://www.visquanta.com/dealers/auto-groups',
        languages: {
            'en-US': 'https://www.visquanta.com/dealers/auto-groups',
            'en-CA': 'https://www.visquanta.com/ca/dealers/auto-groups',
        },
    },
    ...openGraphTwitterPack({
        canonicalUrl: 'https://www.visquanta.com/dealers/auto-groups',
        title: 'AI for Auto Groups & Multi-Rooftops | VisQuanta',
        description:
            'Centralize lead management across every rooftop. Enterprise-grade AI with unified dashboards, multi-store reporting, and scalable automation.',
    }),
};

export default function AutoGroupsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
