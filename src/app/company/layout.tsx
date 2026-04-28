import type { Metadata } from "next";
import { openGraphTwitterPack } from "@/lib/metadata";

export const metadata: Metadata = {
    title: 'Company — Our Mission & Philosophy',
    description: 'The operational philosophy behind automotive AI that works. We help dealerships stop leaking revenue and start scaling profitably.',
    alternates: {
        canonical: 'https://www.visquanta.com/company',
        languages: {
            'en-US': 'https://www.visquanta.com/company',
            'en-CA': 'https://www.visquanta.com/ca/company',
        },
    },
    ...openGraphTwitterPack({
        canonicalUrl: 'https://www.visquanta.com/company',
        title: 'Company — Our Mission & Philosophy | VisQuanta',
        description:
            'The operational philosophy behind automotive AI that works. We help dealerships stop leaking revenue and start scaling profitably.',
    }),
};

export default function CompanyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
