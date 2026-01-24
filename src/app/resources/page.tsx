'use client';
import Link from 'next/link';
import { ArrowRight, BookOpen, FileText, HelpCircle, MessageSquare, Zap, LayoutGrid } from 'lucide-react';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const resourceLinks = [
    {
        title: 'AMS Guides',
        description: 'One-page solution overviews and product deep dives.',
        href: '/ams-guides',
        icon: FileText,
        category: 'Product Specs',
        color: 'emerald',
    },
    {
        title: 'Case Studies',
        description: 'See how top dealer groups are winning with VisQuanta.',
        href: '/case-studies',
        icon: Zap,
        category: 'Proof',
        color: 'amber',
    },
    {
        title: 'FAQ\'s',
        description: 'Answers to common questions about onboarding and integrations.',
        href: '/faqs',
        icon: HelpCircle,
        category: 'Support',
        color: 'blue',
    },
    // Adding placeholders for missing pages so the grid looks full, but we will route them or keep them pending
    {
        title: 'Our Blog',
        description: 'Trends, data analysis, and insights from the edge of retail.',
        href: '/blog',
        icon: BookOpen,
        category: 'Insights',
        color: 'purple',
    },
];

export default function ResourcesHubPage() {
    return (
        <main className="min-h-screen bg-[#050505] pt-32 pb-20 relative overflow-hidden">

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none z-10" />

            <div className="container-wide relative z-20">

                {/* Hero Section */}
                <div className="max-w-4xl mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#FF7404]" />
                        <span className="text-xs font-mono text-[#FF7404] tracking-widest uppercase">Knowledge Base</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1.1]">
                        Dealer <span className="text-[#FF7404]">Intelligence</span> <br />
                        & Resources.
                    </h1>
                    <p className="text-xl md:text-2xl text-white/40 max-w-2xl leading-relaxed font-light">
                        Everything you need to understand, implement, and scale with VisQuanta.
                    </p>
                </div>

                {/* Navigation Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {resourceLinks.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="group relative p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-[#FF7404]/50 hover:bg-[#0f0f0f] transition-all duration-500 overflow-hidden"
                        >
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-[#FF7404] group-hover:bg-[#FF7404]/10 group-hover:scale-110 transition-all duration-500">
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-white/50">
                                        {item.category}
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-[#FF7404] transition-colors">
                                        {item.title}
                                    </h2>
                                    <p className="text-white/40 group-hover:text-white/60 transition-colors leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                    <ArrowRight className="w-6 h-6 text-[#FF7404]" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* SEO Strengthening: Featured Insights (Linking remaining orphans) */}
                <div className="mt-32 pt-20 border-t border-white/5">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                        <div className="max-w-xl">
                            <h3 className="text-2xl font-bold text-white mb-4">Strategic Insights</h3>
                            <p className="text-white/40 leading-relaxed italic">
                                Expert analysis on the intersection of artificial intelligence and automotive retail.
                            </p>
                        </div>
                        <Link href="/blog" className="text-xs font-bold text-[#FF7404] uppercase tracking-widest border-b border-[#FF7404]/30 pb-1 hover:border-[#FF7404] transition-all">
                            Browse All Articles
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <a
                            href="/blog/car-dealership-roi-calculator"
                            className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#FF7404]/30 transition-all flex flex-col h-full"
                        >
                            <div className="text-[10px] font-bold text-[#FF7404] uppercase tracking-widest mb-3">Financial Impact</div>
                            <h4 className="text-lg font-bold text-white group-hover:text-[#FF7404] transition-colors leading-tight mb-2">Measuring Revenue Recovery ROI</h4>
                            <p className="text-sm text-white/40 leading-relaxed mb-4 flex-grow">Calculating the real financial impact of CRM reactivation.</p>
                            <div className="flex items-center gap-2 text-xs font-bold text-white/60 group-hover:text-white mt-auto">
                                Read Analysis <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </a>

                        <a
                            href="/blog/top-pitfalls-when-car-dealerships-rush-to-adopt-ai-solutions"
                            className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#FF7404]/30 transition-all flex flex-col h-full"
                        >
                            <div className="text-[10px] font-bold text-[#FF7404] uppercase tracking-widest mb-3">Risk Assessment</div>
                            <h4 className="text-lg font-bold text-white group-hover:text-[#FF7404] transition-colors leading-tight mb-2">Avoid the AI Implementation Speed Trap</h4>
                            <p className="text-sm text-white/40 leading-relaxed mb-4 flex-grow">Common mistakes when rolling out dealership automation.</p>
                            <div className="flex items-center gap-2 text-xs font-bold text-white/60 group-hover:text-white mt-auto">
                                Read Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </a>

                        <a
                            href="/blog/ultimate-guide-to-dealership-reputation-metrics"
                            className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#FF7404]/30 transition-all flex flex-col h-full"
                        >
                            <div className="text-[10px] font-bold text-[#FF7404] uppercase tracking-widest mb-3">Digital Health</div>
                            <h4 className="text-lg font-bold text-white group-hover:text-[#FF7404] transition-colors leading-tight mb-2">The Ultimate Guide to Reputation Metrics</h4>
                            <p className="text-sm text-white/40 leading-relaxed mb-4 flex-grow">Beyond 5 stars: What actually drives unit volume and growth.</p>
                            <div className="flex items-center gap-2 text-xs font-bold text-white/60 group-hover:text-white mt-auto">
                                Read Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </a>

                        <a
                            href="/blog/ai-isnt-replacing-car-dealership-jobs-its-transforming-them"
                            className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#FF7404]/30 transition-all flex flex-col h-full"
                        >
                            <div className="text-[10px] font-bold text-[#FF7404] uppercase tracking-widest mb-3">Future of Work</div>
                            <h4 className="text-lg font-bold text-white group-hover:text-[#FF7404] transition-colors leading-tight mb-2">AI Isn't Replacing Jobs – It's Transforming</h4>
                            <p className="text-sm text-white/40 leading-relaxed mb-4 flex-grow">How automation empowers teams to focus on high-value closing.</p>
                            <div className="flex items-center gap-2 text-xs font-bold text-white/60 group-hover:text-white mt-auto">
                                Read Article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <FinalCTA />

            <Footer />
        </main>
    );
}
