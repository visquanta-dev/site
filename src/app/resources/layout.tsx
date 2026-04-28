import type { Metadata } from "next";
import { openGraphTwitterPack } from "@/lib/metadata";

export const metadata: Metadata = {
    title: 'Dealership AI Resource Center',
    description: 'Guides, case studies, and industry articles to help your dealership maximize revenue with AI. Technical docs and strategic playbooks.',
    alternates: {
        canonical: 'https://www.visquanta.com/resources',
        languages: {
            'en-US': 'https://www.visquanta.com/resources',
            'en-CA': 'https://www.visquanta.com/ca/resources',
        },
    },
    ...openGraphTwitterPack({
        canonicalUrl: 'https://www.visquanta.com/resources',
        title: 'Dealership AI Resource Center | VisQuanta',
        description:
            'Guides, case studies, and industry articles to help your dealership maximize revenue with AI. Technical docs and strategic playbooks.',
    }),
};

export default function ResourcesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
