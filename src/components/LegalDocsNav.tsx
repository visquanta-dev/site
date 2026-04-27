import Link from 'next/link';
import { ClipboardCheck, Shield, Lock, FileText, Cookie, type LucideIcon } from 'lucide-react';

export type LegalDoc = 'trust' | 'compliance' | 'privacy' | 'terms' | 'cookies';

type NavItem = {
    key: LegalDoc;
    label: string;
    href: string;
    icon: LucideIcon;
};

const docs: NavItem[] = [
    { key: 'trust', label: 'Trust', href: '/trust', icon: Shield },
    { key: 'compliance', label: 'Compliance', href: '/compliance', icon: ClipboardCheck },
    { key: 'privacy', label: 'Privacy', href: '/privacy-policy', icon: Lock },
    { key: 'terms', label: 'Terms', href: '/terms-conditions', icon: FileText },
    { key: 'cookies', label: 'Cookies', href: '/cookie-policy', icon: Cookie },
];

export default function LegalDocsNav({ active, className = '' }: { active: LegalDoc; className?: string }) {
    return (
        <nav
            aria-label="Legal documents"
            className={`flex flex-wrap items-center justify-center gap-2 ${className}`}
        >
            {docs.map((doc) => {
                const isActive = doc.key === active;
                const base = "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all";
                const styles = isActive
                    ? "bg-[#FF7404] text-black border-[#FF7404] shadow-[0_0_20px_rgba(255,116,4,0.25)]"
                    : "bg-white/5 text-white/60 border-white/10 hover:border-[#FF7404]/40 hover:text-white";
                return (
                    <Link key={doc.key} href={doc.href} aria-current={isActive ? 'page' : undefined} className={`${base} ${styles}`}>
                        <doc.icon className="w-3.5 h-3.5" />
                        {doc.label}
                    </Link>
                );
            })}
        </nav>
    );
}
