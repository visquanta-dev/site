import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'AutoMaster Suite | The Ultimate Dealership Revenue Engine | VisQuanta',
    description: 'A unified platform of AI-powered modules designed to automate dealership operations and maximize gross profit.',
    alternates: {
        canonical: 'https://visquanta.com/auto-master-suite',
    },
};

export default function AMSLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
