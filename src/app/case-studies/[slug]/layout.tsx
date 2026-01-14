import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    return {
        alternates: {
            canonical: `https://visquanta.com/case-studies/${slug}`,
        },
    };
}

export default function CaseStudyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
