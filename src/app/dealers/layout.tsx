import type { Metadata } from "next";
import { openGraphTwitterPack } from "@/lib/metadata";

export const metadata: Metadata = {
    title: 'AI Solutions by Dealer Type',
    description: 'Tailored AI for franchise groups, independents, auto groups, RV, and pre-owned dealers. See which VisQuanta modules fit your operation.',
    alternates: {
        canonical: 'https://www.visquanta.com/dealers',
        languages: {
            'en-US': 'https://www.visquanta.com/dealers',
            'en-CA': 'https://www.visquanta.com/ca/dealers',
        },
    },
    ...openGraphTwitterPack({
        canonicalUrl: 'https://www.visquanta.com/dealers',
        title: 'AI Solutions by Dealer Type | VisQuanta',
        description:
            'Tailored AI for franchise groups, independents, auto groups, RV, and pre-owned dealers. See which VisQuanta modules fit your operation.',
    }),
};

export default function DealersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
