import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import IntegrationHero from '@/components/integrations/IntegrationHero';
import IntegrationCard from '@/components/integrations/IntegrationCard';
import IntegrationCTA from '@/components/integrations/IntegrationCTA';
import FinalCTA from '@/components/FinalCTA';
import { integrations, Integration } from '@/lib/integrations';
import { Database, Zap, ArrowRight, ShieldCheck, RefreshCw, Key } from 'lucide-react';

export const metadata: Metadata = {
    title: 'CRM Integrations for Dealerships',
    description: 'Seamlessly connect VisQuanta with VinSolutions, eLead, DealerSocket, CDK, and more. Sync data, automate follow-up, and increase conversion.',
    alternates: {
        canonical: 'https://www.visquanta.com/integrations',
        languages: {
            'en-US': 'https://www.visquanta.com/integrations',
            'en-CA': 'https://www.visquanta.com/ca/integrations',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/integrations',
            images: [
            {
                url: 'https://www.visquanta.com/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'VisQuanta',
            }
        ],
    },
};

export default function IntegrationsHubPage() {
    const featuredIntegrations = integrations.slice(0, 6); // First 6
    const allIntegrations = integrations; // Or filter if needed

    return (
        <main className="bg-[#0a0a0a] min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <IntegrationHero
                eyebrow="INTEGRATIONS"
                title="Plug Into Your Existing Stack"
                subtitle="VisQuanta connects seamlessly with the CRMs and DMS platforms your dealership already uses. No rip-and-replace. No learning curve."
                primaryCtaText="Book a Demo"
                secondaryCtaText="View All Integrations"
                secondaryCtaLink="#all-integrations"
                trustBadge="SOC 2 Type II Compliant"
                visual={
                    <div className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[400px] flex items-center justify-center">
                        {/* Central Hub */}
                        <div className="z-20 w-24 h-24 md:w-32 md:h-32 bg-black rounded-full border border-[#f97316] flex items-center justify-center shadow-[0_0_50px_rgba(249,115,22,0.3)] relative">
                            <span className="font-bold text-white text-xl md:text-2xl tracking-tight">VisQuanta</span>

                            {/* Orbiting Elements - Simple CSS animation representation */}
                            <div className="absolute inset-0 rounded-full border border-[#f97316]/30 animate-ping opacity-20" />
                        </div>

                        {/* Connection Lines & Satellites */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[80%] h-[80%] rounded-full border border-white/[0.05] animate-spin-slow absolute" style={{ animationDuration: '30s' }}>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#1a1a1a] rounded-xl border border-white/10 flex items-center justify-center text-[10px] text-white/50">CRM</div>
                                <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-12 h-12 bg-[#1a1a1a] rounded-xl border border-white/10 flex items-center justify-center text-[10px] text-white/50">DMS</div>
                                <div className="absolute bottom-0 left-1/4 translate-y-1/2 w-12 h-12 bg-[#1a1a1a] rounded-xl border border-white/10 flex items-center justify-center text-[10px] text-white/50">VOICE</div>
                            </div>
                        </div>
                    </div>
                }
            />

            {/* Featured Integrations Grid */}
            <section className="py-20 relative px-4 md:px-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredIntegrations.map((integration, idx) => (
                            <IntegrationCard key={integration.id} integration={integration} idx={idx} />
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-[#111111] border-y border-white/[0.05]">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">Seamless Integration in 3 Steps</h2>
                        <p className="text-white/50">Get up and running in minutes, not months. Our team handles the heavy lifting.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[#f97316]/30 to-transparent border-t border-dashed border-white/[0.1] z-0" />

                        {[
                            { icon: Key, title: "1. Connect", desc: "Link your CRM in under 5 minutes authorized via secure API tokens." },
                            { icon: RefreshCw, title: "2. Sync", desc: "Customer data and inventory flows automatically in real-time." },
                            { icon: Zap, title: "3. Automate", desc: "AI instantly starts handling calls and updating your CRM." }
                        ].map((step, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-2xl bg-[#0a0a0a] border border-white/[0.1] flex items-center justify-center mb-6 shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)]">
                                    <div className="w-12 h-12 rounded-full bg-[#f97316]/10 flex items-center justify-center text-[#f97316]">
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-white/50 leading-relaxed max-w-xs">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 px-4 md:px-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Zero Data Entry", desc: "Every call, every lead, logged automatically.", icon: Database },
                            { title: "Real-Time Sync", desc: "Updates appear in your CRM instantly as they happen.", icon: RefreshCw },
                            { title: "No Training Required", desc: "Works within the tools your team already knows.", icon: ArrowRight },
                            { title: "Enterprise Security", desc: "SOC 2 Type II compliant data handling and encryption.", icon: ShieldCheck }
                        ].map((benefit, i) => (
                            <div key={i} className="bg-[#161616] p-8 rounded-2xl border border-white/[0.05]">
                                <benefit.icon className="w-8 h-8 text-[#f97316] mb-6" />
                                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Integrations List */}
            <section id="all-integrations" className="py-20 bg-[#111111] border-t border-white/[0.05]">
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-10 pb-4 border-b border-white/[0.1]">Supported Platforms</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {allIntegrations.map((integration) => (
                            <div key={integration.id} className="group bg-[#0a0a0a] border border-white/[0.08] rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-[#f97316]/30 transition-colors">
                                <span className="font-semibold text-white/90 text-sm md:text-base text-center group-hover:text-white transition-colors">{integration.name}</span>
                                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.05] text-white/40 group-hover:bg-[#f97316]/10 group-hover:text-[#f97316] transition-colors">{integration.category}</span>
                            </div>
                        ))}

                        {/* Add placeholders for "Coming Soon" or generic ones if needed, or leave as is */}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-4 md:px-6 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {[
                        { q: "How long does integration setup take?", a: "Most integrations can be authorized in under 5 minutes. Full synchronization of your historical data typically completes within 2-4 hours depending on your database size." },
                        { q: "Will VisQuanta work with my current CRM?", a: "We support over 25+ major automotive CRMs including VinSolutions, eLead, DealerSocket, DriveCentric, and more. If you don't see yours listed, let us know." },
                        { q: "Is my customer data secure?", a: "Yes. We are SOC 2 Type II compliant and use bank-grade encryption for all data in transit and at rest. We never sell or share your customer data." },
                        { q: "What if I switch CRMs later?", a: "VisQuanta connects to multiple CRMs. If you switch, simply disconnect the old one and authorize the new one. Your AI agents will continue working without interruption." },
                        { q: "Do I need IT support to set this up?", a: "No. Our integrations are designed to be self-service via OAuth or simple API keys. No coding or IT resources are required." }
                    ].map((faq, i) => (
                        <div key={i} className="bg-[#161616] border border-white/[0.05] rounded-xl p-6 hover:border-[#f97316]/30 transition-colors">
                            <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": integrations.map((integration, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "name": integration.name,
                            "url": `https://www.visquanta.com/integrations/${integration.slug}`
                        }))
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            { "@type": "Question", "name": "How long does integration setup take?", "acceptedAnswer": { "@type": "Answer", "text": "Most integrations can be authorized in under 5 minutes. Full synchronization of your historical data typically completes within 2-4 hours depending on your database size." } },
                            { "@type": "Question", "name": "Will VisQuanta work with my current CRM?", "acceptedAnswer": { "@type": "Answer", "text": "We support over 25+ major automotive CRMs including VinSolutions, eLead, DealerSocket, DriveCentric, and more." } },
                            { "@type": "Question", "name": "Is my customer data secure?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We are SOC 2 Type II compliant and use bank-grade encryption for all data in transit and at rest." } },
                            { "@type": "Question", "name": "What if I switch CRMs later?", "acceptedAnswer": { "@type": "Answer", "text": "VisQuanta connects to multiple CRMs. If you switch, simply disconnect the old one and authorize the new one." } },
                            { "@type": "Question", "name": "Do I need IT support to set this up?", "acceptedAnswer": { "@type": "Answer", "text": "No. Our integrations are designed to be self-service via OAuth or simple API keys." } }
                        ]
                    })
                }}
            />

            <FinalCTA />

            <Footer />
        </main>
    );
}
