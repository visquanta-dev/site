import type { Metadata } from "next";
import { openGraphTwitterPack } from "@/lib/metadata";

export const metadata: Metadata = {
    title: 'Dealership Reputation Management',
    description: 'Automate review generation and resolve negatives via SMS. Protect OEM scores, grow Google ratings, and build trust without manual effort.',
    alternates: {
        canonical: 'https://www.visquanta.com/reputation-management',
        languages: {
            'en-US': 'https://www.visquanta.com/reputation-management',
            'en-CA': 'https://www.visquanta.com/ca/reputation-management',
        },
    },
    ...openGraphTwitterPack({
        canonicalUrl: 'https://www.visquanta.com/reputation-management',
        title: 'Dealership Reputation Management | VisQuanta',
        description:
            'Automate review generation and resolve negatives via SMS. Protect OEM scores and grow Google ratings.',
    }),
};

export default function ReputationManagementLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
