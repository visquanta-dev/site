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
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
