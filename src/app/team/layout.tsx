import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Meet the Team | VisQuanta Leadership & Experts',
    description: 'The veterans and technologists behind the VisQuanta platform.',
    alternates: {
        canonical: 'https://www.visquanta.com/team',
    },
};

export default function TeamLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
