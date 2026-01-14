import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Careers | Join the VisQuanta Team',
    description: 'Help us shape the future of automotive retail intelligence. Explore career opportunities at VisQuanta.',
    alternates: {
        canonical: 'https://visquanta.com/careers',
    },
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
