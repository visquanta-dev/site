import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'AMS Technical Blueprints | Resource Library | VisQuanta',
    description: 'Access technical documentation and operational blueprints for the AutoMaster Suite modules.',
    alternates: {
        canonical: 'https://www.visquanta.com/ams-guides',
    },
};

export default function AMSGuidesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
