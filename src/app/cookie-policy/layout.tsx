import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Cookie Policy | VisQuanta',
    description: 'How we use cookies to improve your experience on our platform.',
    alternates: {
        canonical: 'https://www.visquanta.com/cookie-policy',
    },
};

export default function CookiePolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
