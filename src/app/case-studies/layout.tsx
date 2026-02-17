import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Dealership AI Case Studies & Results',
    description: 'Real ROI from real dealerships. See how top operators use AI to recover lost leads, cut response times, and grow fixed ops revenue.',
    alternates: {
        canonical: 'https://www.visquanta.com/case-studies',
        languages: {
            'en-US': 'https://www.visquanta.com/case-studies',
            'en-CA': 'https://www.visquanta.com/ca/case-studies',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/case-studies',
    },
};

export default function CaseStudiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
