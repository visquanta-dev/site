'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Shield,
    Lock,
    FileText,
    Server,
    Users,
    CheckCircle,
    Download,
    ExternalLink,
    Search,
    Eye,
    Database,
    Globe,
    ChevronRight,
    Mail,
    MessageSquare,
    Cookie
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// --- Data & Content ---

const policies = [
    { title: 'Privacy Policy', type: 'Link', href: '/privacy-policy', icon: Lock },
    { title: 'Terms & Conditions', type: 'Link', href: '/terms-conditions', icon: FileText },
    { title: 'Cookie Policy', type: 'Link', href: '/cookie-policy', icon: Cookie },
];

const dataPractices = [
    {
        title: 'Data Collection',
        content: 'We only collect data necessary for the operation of our services. This includes dealership information, user contact details, and operational data required to power our AI tools.',
        icon: Database
    },
    {
        title: 'Data Usage',
        content: 'Your data is used exclusively to provide, maintain, and improve the AutoMaster Suite. we do not sell your data to third parties.',
        icon: Server
    },
    {
        title: 'Access Control',
        content: 'Access to customer data is limited to authorized personnel who require it to support the platform or respond to customer requests.',
        icon: Users
    }
];

const subprocessors = [
    { name: 'Amazon Web Services (AWS)', service: 'Cloud Infrastructure', location: 'US East (N. Virginia)', icon: Server, logo: '/images/service_providers/aws.webp', website: 'https://aws.amazon.com/' },
    { name: 'OpenAI', service: 'LLM Processing', location: 'United States', icon: Database, logo: '/images/service_providers/chatgpt-icon.png', website: 'https://openai.com/' },
    { name: 'Google Gemini', service: 'LLM Processing', location: 'United States', icon: Database, logo: '/images/service_providers/google-gemini-icon.svg', website: 'https://deepmind.google/technologies/gemini/' },
    { name: 'Vercel', service: 'Hosting & Deployment', location: 'Global', icon: Globe, logo: '/images/service_providers/vercel-icon.png', website: 'https://vercel.com/' },
    { name: 'Supabase', service: 'Database Provider', location: 'United States', icon: Database, logo: '/images/service_providers/supabase-icon.png', website: 'https://supabase.com/' },
    { name: 'Stripe', service: 'Payment Processing', location: 'Global', icon: Lock, logo: '/images/service_providers/stripe-payment-icon.png', website: 'https://stripe.com/' },
    { name: 'Twilio', service: 'SMS & Messaging', location: 'Global', icon: MessageSquare, logo: '/images/service_providers/imgi_15_www.twilio.jpeg', website: 'https://www.twilio.com/' },
    { name: 'Telnyx', service: 'SMS & Messaging', location: 'Global', icon: MessageSquare, logo: '/images/service_providers/telnyx_icon.png', website: 'https://telnyx.com/' },
    { name: 'Auth0', service: 'Identity Management', location: 'Global', icon: Lock, logo: '/images/service_providers/imgi_2_auth0.jpeg', website: 'https://auth0.com/' },
    { name: 'Google Workspace', service: 'Business Operations', location: 'Global', icon: Globe, logo: '/images/service_providers/imgi_16_www.google.jpeg', website: 'https://workspace.google.com/' },
    { name: 'Tekion', service: 'DMS Integration', location: 'United States', icon: Database, logo: '/images/service_providers/imgi_20_tekion.jpeg', website: 'https://tekion.com/' },
    { name: 'ProMax', service: 'CRM Integration', location: 'United States', icon: Database, logo: '/images/service_providers/imgi_21_www.promaxunlimited.jpeg', website: 'https://promaxunlimited.com/' },
    { name: 'Authenticom', service: 'Data Integration', location: 'United States', icon: Database, logo: '/images/service_providers/imgi_3_www.authenticom.jpeg', website: 'https://www.authenticom.com/' },
    { name: 'n8n', service: 'Workflow Automation', location: 'Global', icon: Server, logo: '/images/service_providers/n8n-icon.png', website: 'https://n8n.io/' },
    { name: 'Zapier', service: 'Workflow Automation', location: 'United States', icon: Server, logo: '/images/service_providers/zapier-icon.svg', website: 'https://zapier.com/' },
];

// --- Components ---

const TabButton = ({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) => (
    <button
        onClick={onClick}
        className={`px-4 py-3 text-sm font-medium transition-all duration-300 border-b-2 ${active
            ? 'border-[#FF7404] text-white'
            : 'border-transparent text-white/40 hover:text-white hover:border-white/10'
            }`}
    >
        {label}
    </button>
);

const PolicyList = () => (
    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
        <h3 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-6">Core Policies</h3>
        <div className="space-y-3">
            {policies.map((policy, i) => (
                <Link key={i} href={policy.href} className="flex items-center justify-between group p-2 rounded hover:bg-white/[0.02] transition-colors cursor-pointer">
                    <div className="flex items-center gap-3 overflow-hidden">
                        <policy.icon className="w-4 h-4 text-white/20 flex-shrink-0 group-hover:text-[#FF7404] transition-colors" />
                        <span className="text-sm text-white/70 truncate group-hover:text-white transition-colors">{policy.title}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-white/20 group-hover:text-[#FF7404]" />
                </Link>
            ))}
        </div>
    </div>
);

const PoliciesView = () => (
    <div className="container-wide pb-20">
        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Privacy & Data Policies</h2>
            <p className="text-white/60 mb-8 max-w-3xl">
                We are committed to clarity regarding your rights and our obligations. Below you will find our core policy documents governing the use of the VisQuanta platform.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {policies.map((policy, i) => (
                    <Link key={i} href={policy.href} className="flex flex-col p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#FF7404]/30 group transition-all">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-[#FF7404]/10 transition-colors">
                            <policy.icon className="w-5 h-5 text-white/60 group-hover:text-[#FF7404]" />
                        </div>
                        <h3 className="font-bold text-white leading-tight mb-2">{policy.title}</h3>
                        <p className="text-sm text-white/40 mb-4">Click to view full documentation.</p>
                        <div className="mt-auto flex items-center gap-2 text-xs font-bold text-[#FF7404]">
                            Read Policy <ExternalLink className="w-3 h-3" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
);

const SubprocessorsView = () => (
    <div className="container-wide pb-20">
        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Service Providers</h2>
            <p className="text-white/60 mb-8 max-w-3xl">
                We utilize select third-party providers to power our infrastructure, AI processing, and communications.
            </p>

            <div className="border border-white/10 rounded-xl overflow-hidden">
                <div className="bg-white/5 px-6 py-4 border-b border-white/10 grid grid-cols-12 text-xs font-bold uppercase tracking-wider text-white/50">
                    <div className="col-span-12 md:col-span-4">Provider</div>
                    <div className="col-span-12 md:col-span-5 hidden md:block">Function</div>
                    <div className="col-span-4 md:col-span-3 text-right hidden md:block">Location</div>
                </div>
                <div className="divide-y divide-white/5">
                    {subprocessors.map((sub, i) => (
                        <a key={i} href={sub.website} target="_blank" rel="noopener noreferrer" className="px-6 py-5 grid grid-cols-12 items-center hover:bg-white/[0.02] transition-colors group block">
                            <div className="col-span-12 md:col-span-4 flex items-center gap-4 mb-2 md:mb-0">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 border border-white/5 overflow-hidden">
                                    {sub.logo ? (
                                        <Image src={sub.logo} alt={sub.name} width={40} height={40} className="w-full h-full object-cover" />
                                    ) : (
                                        <sub.icon className="w-5 h-5" />
                                    )}
                                </div>
                                <span className="font-bold text-white text-sm md:text-base group-hover:text-[#FF7404] transition-colors flex items-center gap-2">
                                    {sub.name} <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </span>
                            </div>
                            <div className="col-span-6 md:col-span-12 lg:col-span-5 text-sm text-white/70 block md:hidden mb-1">
                                <span className="text-white/30 uppercase text-[10px] block mb-1">Function</span>
                                {sub.service}
                            </div>
                            <div className="col-span-6 md:col-span-12 lg:col-span-5 text-sm text-white/70 hidden md:block">{sub.service}</div>

                            <div className="col-span-6 md:col-span-12 lg:col-span-3 text-left md:text-right text-xs md:text-sm text-white/50 block md:hidden">
                                <span className="text-white/30 uppercase text-[10px] block mb-1">Location</span>
                                {sub.location}
                            </div>
                            <div className="col-span-2 md:col-span-12 lg:col-span-3 text-right text-xs md:text-sm text-white/50 hidden md:block">{sub.location}</div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default function TrustCenterPage() {
    const [activeTab, setActiveTab] = useState('Overview');

    return (
        <div className="min-h-screen bg-[#030303] text-white selection:bg-[#FF7404] selection:text-white">
            <Navigation />

            {/* Trust Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[#FF7404]/5 blur-[200px] rounded-full pointer-events-none transform -translate-y-1/2" />
                <div className="container-wide relative z-10">
                    <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-12">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-[#FF7404] mb-6">
                                <Shield className="w-3 h-3" /> Transparency Center
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                                Clear Data Practices. <br />
                                <span className="text-white/40">Built on Transparency.</span>
                            </h1>
                            <p className="text-lg text-white/60 leading-relaxed max-w-xl">
                                We believe in being open about how we handle your data. Explore our privacy policies, data handling practices, and service providers.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Link href="/privacy-policy" className="px-6 py-3 bg-[#FF7404] text-white font-bold rounded-xl hover:bg-[#ff8a3d] transition-colors shadow-[0_4px_20px_rgba(255,116,4,0.3)]">
                                Review Privacy Policy
                            </Link>
                            <Link href="/contact" className="px-6 py-3 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                Contact Support
                            </Link>
                        </div>
                    </div>

                    {/* Sticky Nav */}
                    <div className="sticky top-20 z-40 bg-[#030303]/80 backdrop-blur-xl border-b border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar">
                        {['Overview', 'Policies', 'Service Providers'].map((tab) => (
                            <TabButton
                                key={tab}
                                active={activeTab === tab}
                                label={tab}
                                onClick={() => setActiveTab(tab)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Dynamic Content Views */}
            <section className="pb-32 min-h-[60vh]">
                {activeTab === 'Overview' && (
                    <div className="container-wide">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                            {/* Sidebar */}
                            <div className="lg:col-span-4 space-y-6 h-fit lg:sticky lg:top-40">
                                <PolicyList />
                            </div>

                            {/* Main Column */}
                            <div className="lg:col-span-8 space-y-8">

                                {/* Transparency Narrative */}
                                <div className="space-y-6">
                                    <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8">
                                        <h2 className="text-xl font-bold text-white mb-4">Our Approach to Data</h2>
                                        <div className="space-y-4 text-white/60 leading-relaxed">
                                            <p>
                                                At VisQuanta, we understand that data privacy is critical for your dealership. We operate with a transparency-first approach, ensuring you know exactly what data we collect and how it is used.
                                            </p>
                                            <p>
                                                We do not sell your data. Every piece of information collected is used strictly to power the services you have subscribed to, improve platform performance, and provide customer support.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Data Practices Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {dataPractices.map((practice, i) => (
                                            <div key={i} className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                                                <div className="p-2 rounded-lg bg-black/40 border border-white/10 text-[#FF7404] w-fit mb-4">
                                                    <practice.icon className="w-5 h-5" />
                                                </div>
                                                <h3 className="font-bold text-white mb-2">{practice.title}</h3>
                                                <p className="text-xs text-white/50 leading-relaxed">
                                                    {practice.content}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Data Retention & Deletion */}
                                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
                                        <h3 className="text-lg font-bold text-white mb-4">Data Retention & Deletion</h3>
                                        <p className="text-sm text-white/50 leading-relaxed mb-4">
                                            We retain data only for as long as necessary to operate the platform or meet legal obligations.
                                        </p>
                                        <p className="text-sm text-white/50 leading-relaxed">
                                            Requests for data deletion can be made in accordance with our Privacy Policy.
                                        </p>
                                    </div>

                                    {/* Dealer Value Prop */}
                                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
                                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                            <Shield className="w-5 h-5 text-[#FF7404]" /> What This Means for Your Dealership
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Clear Ownership</h4>
                                                <p className="text-white/50">You retain ownership of your dealership's data. We act as a processor, handling data only on your behalf and in accordance with our agreements.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Operational Integrity</h4>
                                                <p className="text-white/50">Our internal policies ensure that only authorized team members involved in support or technical maintenance have access to your environment.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Legal Disclosure */}
                                    <div className="text-[10px] text-white/30 leading-relaxed px-2 bg-white/[0.01] p-4 rounded-lg border border-white/5">
                                        <p><strong>Transparency Disclosure:</strong> Users are encouraged to review our Privacy Policy and Terms of Use for a complete legal understanding of our data handling practices. We do not currently hold third-party security certifications (such as SOC 2 or ISO 27001) but maintain strict internal policies to protect your information.</p>
                                    </div>
                                </div>

                                {/* Subprocessors Preview */}
                                <div className="pt-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-xl font-bold text-white">Service Providers</h2>
                                        <button onClick={() => setActiveTab('Service Providers')} className="text-xs text-[#FF7404] cursor-pointer hover:underline">View full list</button>
                                    </div>
                                    <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 flex flex-wrap gap-4">
                                        {subprocessors.slice(0, 5).map((sub, i) => (
                                            <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-xs text-white/60">
                                                {sub.logo ? (
                                                    <Image src={sub.logo} alt={sub.name} width={16} height={16} className="rounded-sm object-cover bg-white/10" />
                                                ) : (
                                                    <sub.icon className="w-3 h-3 text-[#FF7404]" />
                                                )}
                                                {sub.name}
                                            </div>
                                        ))}
                                        <span className="text-xs text-white/30 self-center">+ {subprocessors.length - 5} more</span>
                                    </div>
                                </div>

                                {/* Human Contact Path */}
                                <div className="pt-8 pb-4">
                                    <h2 className="text-xl font-bold text-white mb-4">Questions About Data or Privacy?</h2>
                                    <p className="text-white/60 mb-6 max-w-2xl">
                                        If you have questions about how data is handled on the VisQuanta platform, our team is available to help.
                                    </p>
                                    <Link href="/contact" className="px-6 py-3 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-colors inline-block">
                                        Contact Us About Privacy
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                )}

                {/* Other Views */}
                {activeTab === 'Policies' && <PoliciesView />}
                {activeTab === 'Service Providers' && <SubprocessorsView />}

            </section>

            <Footer />
        </div>
    );
}
