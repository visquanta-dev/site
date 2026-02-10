import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Our Vision & Mission",
    description: "Learn about the mission, vision, and the executive team behind VisQuanta's automotive intelligence platform.",
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
