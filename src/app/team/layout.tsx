import type { Metadata } from "next";
import { openGraphTwitterPack } from "@/lib/metadata";

export const metadata: Metadata = {
    title: 'Meet Our Leadership Team',
    description: "Automotive veterans and AI technologists building the industry's most advanced dealership platform. Decades of retail experience in one team.",
    alternates: {
        canonical: 'https://www.visquanta.com/team',
        languages: {
            'en-US': 'https://www.visquanta.com/team',
            'en-CA': 'https://www.visquanta.com/ca/team',
        },
    },
    ...openGraphTwitterPack({
        canonicalUrl: 'https://www.visquanta.com/team',
        title: 'Meet Our Leadership Team | VisQuanta',
        description:
            "Automotive veterans and AI technologists building the industry's most advanced dealership platform. Decades of retail experience in one team.",
    }),
};

export default function TeamLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
