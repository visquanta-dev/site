import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import IntegrationHero from '@/components/integrations/IntegrationHero';
import IntegrationConnectionVisual from '@/components/integrations/IntegrationConnectionVisual';
import IntegrationFeatureGrid from '@/components/integrations/IntegrationFeatureGrid';
import IntegrationComparison from '@/components/integrations/IntegrationComparison';
import IntegrationCTA from '@/components/integrations/IntegrationCTA';
import { getIntegrationBySlug, integrations } from '@/lib/integrations';
import { ArrowLeft, Quote, CheckCircle2, Sliders, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return integrations.map((integration) => ({
        slug: integration.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const integration = await getIntegrationBySlug(slug);

    if (!integration) {
        return {
            title: 'Automotive Integration Not Found',
        };
    }

    return {
        title: `${integration.name} Integration`,
        description: `${integration.name} + VisQuanta: ${integration.description} Seamlessly sync leads, appointments, and activities with automotive AI.`.substring(0, 158).trim(),
        alternates: {
            canonical: `https://www.visquanta.com/integrations/${slug}`,
        },
    };
}

export default async function IntegrationPage({ params }: PageProps) {
    const { slug } = await params;
    const integration = await getIntegrationBySlug(slug);

    if (!integration) {
        notFound();
    }

    return (
        <main className="bg-[#0a0a0a] min-h-screen">
            <Navigation />

            {/* Hero */}
            <IntegrationHero
                eyebrow={`${integration.name} INTEGRATION`}
                title={`VisQuanta + ${integration.name}`}
                subtitle={integration.description}
                primaryCtaText="See It In Action"
                secondaryCtaText="View Solution Guide"
                secondaryCtaLink="/ams-guides"
                trustBadge={integration.status === 'Native Integration' ? `Certified ${integration.name} Partner` : 'Secure Integration'}
                visual={
                    <IntegrationConnectionVisual
                        logo={integration.logo}
                        name={integration.name}
                    />
                }
            />

            {/* Back Link */}
            <div className="container px-4 md:px-6 py-6 border-b border-white/[0.05]">
                <Link href="/integrations" className="inline-flex items-center text-sm text-white/40 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Integrations
                </Link>
            </div>

            {/* Features Section */}
            <section className="py-24 px-4 md:px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="md:w-1/3 sticky top-24">
                            <h2 className="text-3xl font-bold text-white mb-6">What Gets Synced</h2>
                            <p className="text-white/50 leading-relaxed mb-8">
                                Our deep integration ensures that data flows bi-directionally between VisQuanta and {integration.name} in real-time, eliminating manual data entry.
                            </p>
                            <div className="p-6 bg-[#161616] rounded-2xl border border-white/[0.05]">
                                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <Sliders className="w-4 h-4 text-[#f97316]" />
                                    Technical Specs
                                </h3>
                                <div className="space-y-4">
                                    {integration.specs.map((spec, i) => (
                                        <div key={i} className="flex justify-between items-center text-sm border-b border-white/[0.05] pb-2 last:border-0 last:pb-0">
                                            <span className="text-white/40">{spec.label}</span>
                                            <span className="text-white font-medium">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="md:w-2/3">
                            <IntegrationFeatureGrid features={integration.features} />
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-[#111111] border-y border-white/[0.05]">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">Set Up in Minutes</h2>
                        <p className="text-white/50">No complex IT projects. Just connect and go.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {(integration.setupSteps || [
                            { title: "1. Connect Account", description: "Authorize VisQuanta in your settings." },
                            { title: "2. Configure Routing", description: "Choose which calls AI should handle." },
                            { title: "3. Go Live", description: "See leads populate instantly." }
                        ]).map((step, idx) => (
                            <div key={idx} className="relative p-6">
                                <div className="text-6xl font-black text-white/[0.03] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 select-none">{idx + 1}</div>
                                <h3 className="text-xl font-bold text-white mb-2 relative z-10">{step.title}</h3>
                                <p className="text-white/50 relative z-10">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-24 px-4 md:px-6 bg-[#0a0a0a]">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">The VisQuanta Difference</h2>
                    <IntegrationComparison items={integration.benefits} crmName={integration.name} />
                </div>
            </section>

            {/* Testimonial */}
            {integration.testimonial && (
                <section className="py-24 border-t border-white/[0.05] bg-gradient-to-b from-[#111111] to-[#0a0a0a]">
                    <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
                        <Quote className="w-12 h-12 text-[#f97316] mx-auto mb-8 opacity-50" />
                        <blockquote className="text-2xl md:text-4xl font-medium text-white leading-tight mb-8">
                            &ldquo;{integration.testimonial.quote}&rdquo;
                        </blockquote>
                        <div className="text-white/50">
                            <strong className="text-white block mb-1">{integration.testimonial.author}</strong>
                            {integration.testimonial.role}, {integration.testimonial.dealership}
                        </div>
                    </div>
                </section>
            )}

            {/* Related Integrations */}
            <section className="py-20 px-4 md:px-6 border-t border-white/[0.05]">
                <div className="container mx-auto">
                    <h3 className="text-xl font-bold text-white mb-8">Also Works With</h3>
                    <div className="flex flex-wrap gap-4">
                        {integrations
                            .filter(i => i.slug !== integration.slug && i.category === integration.category)
                            .slice(0, 4)
                            .map(rel => (
                                <Link key={rel.id} href={`/integrations/${rel.slug}`} className="px-6 py-3 bg-[#161616] border border-white/[0.08] rounded-full text-white/60 hover:text-white hover:border-[#f97316]/50 transition-all flex items-center gap-2">
                                    {rel.name}
                                    <ExternalLink className="w-3 h-3 opacity-50" />
                                </Link>
                            ))}
                    </div>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": `VisQuanta ${integration.name} Integration`,
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Web",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                        },
                        "description": integration.description
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Integrations",
                                "item": "https://www.visquanta.com/integrations"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": integration.name,
                                "item": `https://www.visquanta.com/integrations/${integration.slug}`
                            }
                        ]
                    })
                }}
            />

            <IntegrationCTA
                title={`Ready to Connect ${integration.name}?`}
                description="Get up and running in under 5 minutes. No IT required."
                ctaText="Book Your Demo"
                secondaryCtaText="View Solution Guide"
                secondaryCtaLink="/ams-guides"
            />

            <Footer />
        </main>
    );
}
