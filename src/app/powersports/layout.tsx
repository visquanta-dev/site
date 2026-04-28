import type { Metadata } from "next";
import { openGraphTwitterPack } from "@/lib/metadata";

export const metadata: Metadata = {
    title: 'Powersports Dealer Growth Tools — Sell More Units | VisQuanta',
    description: 'VisQuanta helps motorcycle, ATV, UTV, and marine dealers respond to leads in under 60 seconds, reactivate past shoppers, automate review management, and run seasonal campaigns — without adding staff.',
    keywords: 'powersports dealer tools, motorcycle dealer lead response, ATV dealer automation, UTV dealer software, marine dealer lead management, powersports reputation management, powersports lead reactivation, powersports seasonal marketing, Polaris dealer tools, Harley dealer lead follow-up',
    alternates: {
        canonical: 'https://www.visquanta.com/powersports',
        languages: {
            'en-US': 'https://www.visquanta.com/powersports',
            'en-CA': 'https://www.visquanta.com/ca/powersports',
        },
    },
    ...openGraphTwitterPack({
        canonicalUrl: 'https://www.visquanta.com/powersports',
        title: 'Powersports Dealer Growth Tools — Sell More Units | VisQuanta',
        description:
            'Motorcycle, ATV, UTV, and marine dealers use VisQuanta to respond to leads faster, reactivate dormant shoppers, and fill the sales calendar year-round.',
    }),
};

export default function PowerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
