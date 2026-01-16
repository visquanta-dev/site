import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Cookie Policy | VisQuanta',
    description: 'Read the VisQuanta Cookie Policy to understand how we use cookies to improve your user experience, analyze our traffic, and provide secure platform functionality.',
    alternates: {
        canonical: 'https://www.visquanta.com/cookie-policy',
    },
    openGraph: {
        url: 'https://www.visquanta.com/cookie-policy',
    },
};

export default function CookiePolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
