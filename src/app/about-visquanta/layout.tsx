import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About VisQuanta | Our Vision & Mission",
    description: "Learn about the mission, vision, and the executive team behind VisQuanta's automotive intelligence platform.",
    alternates: {
        canonical: "https://visquanta.com/about-visquanta",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
