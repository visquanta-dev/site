import type { Metadata } from "next";
import { openGraphTwitterPack } from "@/lib/metadata";

export const metadata: Metadata = {
    title: 'Terms & Conditions — Visquanta',
    description: 'Service agreements, user responsibilities, and legal framework governing use of the Visquanta AI platform and services.',
    alternates: {
        canonical: 'https://www.visquanta.com/terms-conditions',
        languages: {
            'en-US': 'https://www.visquanta.com/terms-conditions',
            'en-CA': 'https://www.visquanta.com/ca/terms-conditions',
        },
    },
    ...openGraphTwitterPack({
        canonicalUrl: 'https://www.visquanta.com/terms-conditions',
        title: 'Terms & Conditions — Visquanta',
        description:
            'Service agreements, user responsibilities, and legal framework governing use of the Visquanta AI platform and services.',
    }),
};

export default function TermsConditionsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
