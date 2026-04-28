import type { Metadata } from "next";
import { openGraphTwitterPack } from "@/lib/metadata";

export const metadata: Metadata = {
    title: 'Dealership AI Case Studies & Results',
    robots: { index: true, follow: true },
    description: 'Real ROI from real dealerships. See how top operators use AI to recover lost leads, cut response times, and grow fixed ops revenue.',
    alternates: {
        canonical: 'https://www.visquanta.com/case-studies',
        languages: {
            'en-US': 'https://www.visquanta.com/case-studies',
            'en-CA': 'https://www.visquanta.com/ca/case-studies',
        },
    },
    ...openGraphTwitterPack({
        canonicalUrl: 'https://www.visquanta.com/case-studies',
        title: 'Dealership AI Case Studies & Results | VisQuanta',
        description:
            'Real ROI from real dealerships. See how top operators use AI to recover lost leads, cut response times, and grow fixed ops revenue.',
    }),
};

export default function CaseStudiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
