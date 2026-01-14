import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Lead Reactivation AI | Recover Lost CRM Revenue | VisQuanta',
    description: 'Transform dormant CRM leads into active showroom appointments. VisQuanta Lead Reactivation AI re-engages cold prospects with conversion-optimized SMS campaigns.',
    alternates: {
        canonical: 'https://visquanta.com/lead-reactivation',
    },
};

export default function LeadReactivationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
