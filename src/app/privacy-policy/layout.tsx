import type { Metadata } from "next";
import { openGraphTwitterPack } from "@/lib/metadata";

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'How VisQuanta handles and protects your dealership data. Full transparency on data collection, storage, and third-party sharing.',
    alternates: {
        canonical: 'https://www.visquanta.com/privacy-policy',
        languages: {
            'en-US': 'https://www.visquanta.com/privacy-policy',
            'en-CA': 'https://www.visquanta.com/ca/privacy-policy',
        },
    },
    ...openGraphTwitterPack({
        canonicalUrl: 'https://www.visquanta.com/privacy-policy',
        title: 'Privacy Policy | VisQuanta',
        description:
            'How VisQuanta handles and protects your dealership data. Full transparency on data collection, storage, and third-party sharing.',
    }),
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
