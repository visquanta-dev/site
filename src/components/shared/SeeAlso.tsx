import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SeeAlsoLink {
    title: string;
    href: string;
    description: string;
}

interface SeeAlsoProps {
    links: SeeAlsoLink[];
}

export default function SeeAlso({ links }: SeeAlsoProps) {
    if (!links || links.length === 0) return null;

    return (
        <section className="py-16 bg-[#050505] border-t border-white/5">
            <div className="container-wide">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">
                    See Also
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="group flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#FF7404]/30 hover:bg-white/[0.04] transition-all duration-300"
                        >
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-bold text-white group-hover:text-[#FF7404] transition-colors mb-1">
                                    {link.title}
                                </h4>
                                <p className="text-xs text-white/40 leading-relaxed">
                                    {link.description}
                                </p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#FF7404] group-hover:translate-x-1 transition-all mt-0.5 flex-shrink-0" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
