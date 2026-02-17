import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About VisQuanta — Who We Are',
    description: 'Meet the team building automotive AI. Decades of dealership experience combined with cutting-edge technology to drive measurable results.',
    alternates: {
        canonical: "https://www.visquanta.com/about-visquanta",
        languages: {
            'en-US': 'https://www.visquanta.com/about-visquanta',
            'en-CA': 'https://www.visquanta.com/ca/about-visquanta',
        },
    },
    openGraph: {
        url: "https://www.visquanta.com/about-visquanta",
            images: [
            {
                url: 'https://www.visquanta.com/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'VisQuanta',
            }
        ],
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
