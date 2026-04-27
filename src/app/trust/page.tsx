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
    EyeOff,
    Database,
    Globe,
    ChevronRight,
    Mail,
    MessageSquare,
    Cookie,
    ClipboardCheck
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LegalDocsNav from '@/components/LegalDocsNav';
import { subprocessors } from '@/data/subprocessors';

// --- Data & Content ---

const policies = [
    { title: 'Privacy Policy', type: 'Link', href: '/privacy-policy', icon: Lock, description: 'How we collect, use, and protect personal data.' },
    { title: 'Terms & Conditions', type: 'Link', href: '/terms-conditions', icon: FileText, description: 'The terms governing use of the VisQuanta platform.' },
    { title: 'TCPA Compliance', type: 'Link', href: '/compliance', icon: ClipboardCheck, description: 'Suppression, opt-out, consent, and audit controls for dealer-operated voice and SMS workflows.' },
    { title: 'Cookie Policy', type: 'Link', href: '/cookie-policy', icon: Cookie, description: 'How and why we use cookies on our websites.' },
];

const policyCards = [
    ...policies,
    { title: 'Data Processing Addendum', type: 'Mailto', href: 'mailto:compliance@visquanta.com?subject=DPA%20Request', icon: Download, description: 'Our customer-facing DPA, available on request for enterprise clients.' },
];

const dataPractices = [
    {
        title: 'Data Collection',
        content: 'We only collect data necessary for the operation of our services. This includes business account information, user contact details, and operational data required to power our AI tools.',
        icon: Database
    },
    {
        title: 'Data Usage',
        content: 'Your data is used exclusively to provide, maintain, and improve our services. We do not sell your data to third parties.',
        icon: Server
    },
    {
        title: 'Access Control',
        content: 'Access to customer data is limited to authorized personnel who require it to support the platform or respond to customer requests.',
        icon: Users
    }
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

const onPageLinks = [
    { title: 'DPA Intake', href: '#dpa', icon: FileText },
    { title: 'AI Data Handling', href: '#ai-data', icon: Database },
    { title: 'PII Redaction', href: '#pii-redaction', icon: EyeOff },
    { title: 'Security Posture', href: '#security', icon: Shield },
];

const PolicyList = ({ onShowSubprocessors }: { onShowSubprocessors: () => void }) => (
    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
        <h3 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-6">Core Policies</h3>
        <div className="space-y-3 mb-2">
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

        <div className="border-t border-white/10 pt-6 mt-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">On This Page</h3>
            <div className="space-y-3 mb-2">
                {onPageLinks.map((link, i) => (
                    <a key={i} href={link.href} className="flex items-center justify-between group p-2 rounded hover:bg-white/[0.02] transition-colors cursor-pointer">
                        <div className="flex items-center gap-3 overflow-hidden">
                            <link.icon className="w-4 h-4 text-white/20 flex-shrink-0 group-hover:text-[#FF7404] transition-colors" />
                            <span className="text-sm text-white/70 truncate group-hover:text-white transition-colors">{link.title}</span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-white/20 group-hover:text-[#FF7404]" />
                    </a>
                ))}
                <button type="button" onClick={onShowSubprocessors} className="w-full flex items-center justify-between group p-2 rounded hover:bg-white/[0.02] transition-colors cursor-pointer text-left">
                    <div className="flex items-center gap-3 overflow-hidden">
                        <Server className="w-4 h-4 text-white/20 flex-shrink-0 group-hover:text-[#FF7404] transition-colors" />
                        <span className="text-sm text-white/70 truncate group-hover:text-white transition-colors">Sub-processor List</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-white/20 group-hover:text-[#FF7404]" />
                </button>
            </div>
        </div>

        <div className="border-t border-white/10 pt-6 mt-6">
            <a href="mailto:compliance@visquanta.com" className="flex items-center justify-between group p-2 rounded hover:bg-[#FF7404]/10 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 overflow-hidden">
                    <Mail className="w-4 h-4 text-[#FF7404] flex-shrink-0" />
                    <span className="text-sm font-bold text-white truncate">Request DPA</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-[#FF7404]" />
            </a>
        </div>
    </div>
);

const PoliciesView = () => (
    <div className="container-wide pb-20">
        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Policies</h2>
            <p className="text-white/60 mb-8 max-w-3xl">
                Core policy documents and compliance materials for VisQuanta customers and their legal teams.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {policyCards.map((policy, i) => {
                    const isMailto = policy.href.startsWith('mailto:');
                    const cardClass = "flex flex-col p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#FF7404]/30 group transition-all";
                    const ctaLabel = isMailto ? 'Request DPA' : 'Read Policy';
                    const inner = (
                        <>
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-[#FF7404]/10 transition-colors">
                                <policy.icon className="w-5 h-5 text-white/60 group-hover:text-[#FF7404]" />
                            </div>
                            <h3 className="font-bold text-white leading-tight mb-2">{policy.title}</h3>
                            <p className="text-sm text-white/40 mb-4">{policy.description}</p>
                            <div className="mt-auto flex items-center gap-2 text-xs font-bold text-[#FF7404]">
                                {ctaLabel} <ExternalLink className="w-3 h-3" />
                            </div>
                        </>
                    );
                    return isMailto ? (
                        <a key={i} href={policy.href} className={cardClass}>{inner}</a>
                    ) : (
                        <Link key={i} href={policy.href} className={cardClass}>{inner}</Link>
                    );
                })}
            </div>
        </div>
    </div>
);

const SubprocessorsView = () => (
    <div className="container-wide pb-20">
        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Service Providers</h2>
            <p className="text-white/60 mb-4 max-w-3xl">
                We rely on a small set of vetted sub-processors to operate our platform, process AI requests, and deliver messaging.
            </p>
            <p className="text-white/60 mb-8 max-w-3xl text-sm">
                Documentation for any specific vendor is available on request &mdash; <a href="mailto:compliance@visquanta.com" className="text-[#FF7404] hover:underline">compliance@visquanta.com</a>
            </p>

            <div className="border border-white/10 rounded-xl overflow-hidden">
                <div className="bg-white/5 px-6 py-4 border-b border-white/10 grid grid-cols-12 text-xs font-bold uppercase tracking-wider text-white/50">
                    <div className="col-span-12 md:col-span-4">Provider</div>
                    <div className="col-span-12 md:col-span-5 hidden md:block">Function</div>
                    <div className="col-span-12 md:col-span-3 text-right hidden md:block">Status</div>
                </div>
                <div className="divide-y divide-white/5">
                    {subprocessors.map((sub, i) => (
                        <a key={i} href={sub.website} target="_blank" rel="nofollow noopener noreferrer" className="px-6 py-5 grid grid-cols-12 items-center hover:bg-white/[0.02] transition-colors group block">
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
                            <div className="col-span-12 md:col-span-5 text-sm text-white/70 block md:hidden mb-1">
                                <span className="text-white/30 uppercase text-[10px] block mb-1">Function</span>
                                {sub.service}
                            </div>
                            <div className="col-span-12 md:col-span-5 text-sm text-white/70 hidden md:block">{sub.service}</div>

                            {sub.badge && (
                                <div className="col-span-12 md:col-span-3 text-left md:text-right block md:hidden mt-1">
                                    <span className="text-white/30 uppercase text-[10px] block mb-1">Status</span>
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${sub.badge === 'DPA Executed' ? 'bg-[#FF7404]/10 border-[#FF7404]/40 text-[#FF7404]' : 'bg-white/5 border-white/10 text-white/60'}`}>
                                        {sub.badge === 'DPA Executed' && <CheckCircle className="w-3 h-3" />}
                                        {sub.badge}
                                    </span>
                                </div>
                            )}
                            {sub.badge && (
                                <div className="col-span-12 md:col-span-3 text-right hidden md:block">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${sub.badge === 'DPA Executed' ? 'bg-[#FF7404]/10 border-[#FF7404]/40 text-[#FF7404]' : 'bg-white/5 border-white/10 text-white/60'}`}>
                                        {sub.badge === 'DPA Executed' && <CheckCircle className="w-3 h-3" />}
                                        {sub.badge}
                                    </span>
                                </div>
                            )}
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
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                                Clear Data Practices. <br />
                                <span className="text-white/40">Built on Transparency.</span>
                            </h1>
                            <p className="text-lg text-white/60 leading-relaxed max-w-xl">
                                We believe in being open about how we handle your data. Explore our privacy policies, data handling practices, and service providers.
                            </p>
                            <p className="mt-4 text-xs text-white/40 uppercase tracking-wider">Last updated: April 2026</p>
                        </div>
                    </div>

                    <LegalDocsNav active="trust" className="mb-10" />

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
                                <PolicyList onShowSubprocessors={() => setActiveTab('Service Providers')} />
                            </div>

                            {/* Main Column */}
                            <div className="lg:col-span-8 space-y-8">

                                {/* Transparency Narrative */}
                                <div className="space-y-6">
                                    <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8">
                                        <h2 className="text-xl font-bold text-white mb-4">Our Approach to Data</h2>
                                        <div className="space-y-4 text-white/60 leading-relaxed">
                                            <p>
                                                At VisQuanta, we understand that data privacy is critical for your business. We operate with a transparency-first approach, ensuring you know exactly what data we collect and how it is used.
                                            </p>
                                            <p>
                                                We do not sell your data. Every piece of information collected is used strictly to power the services you have subscribed to, improve platform performance, and provide customer support.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Data Processing Agreements */}
                                    <div id="dpa" className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 scroll-mt-40">
                                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                            <FileText className="w-5 h-5 text-[#FF7404]" /> Data Processing Agreements
                                        </h2>
                                        <p className="text-white/60 leading-relaxed">
                                            We execute Data Processing Addendums with every enterprise client. Our customer-facing DPA is available on request. All sub-processors that handle customer data are themselves governed by executed DPAs.
                                        </p>
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
                                            <Shield className="w-5 h-5 text-[#FF7404]" /> What This Means for Your Business
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Clear Ownership</h4>
                                                <p className="text-white/50">You retain ownership of your business&apos;s data. We act as a processor, handling data only on your behalf and in accordance with our agreements.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">Operational Integrity</h4>
                                                <p className="text-white/50">Our internal policies ensure that only authorized team members involved in support or technical maintenance have access to your environment.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* What We Send to AI Models */}
                                    <div id="ai-data" className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 scroll-mt-40">
                                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                            <Database className="w-5 h-5 text-[#FF7404]" /> What We Send to AI Models
                                        </h2>
                                        <p className="text-white/60 leading-relaxed mb-4">
                                            Our SMS campaign agents are built on OpenAI&apos;s API. The only customer data passed to the AI model is:
                                        </p>
                                        <ul className="space-y-2 mb-6 text-white/70">
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-4 h-4 text-[#FF7404] flex-shrink-0 mt-1" />
                                                <span>The prospect&apos;s <strong className="text-white">first name</strong></span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-4 h-4 text-[#FF7404] flex-shrink-0 mt-1" />
                                                <span>The prospect&apos;s own in-conversation messages (voluntarily provided during SMS exchange)</span>
                                            </li>
                                        </ul>
                                        <p className="text-white/60 leading-relaxed mb-4">
                                            We <strong className="text-white">do not</strong> send the following to AI sub-processors:
                                        </p>
                                        <ul className="space-y-2 mb-6 text-white/70">
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#FF7404] flex-shrink-0 mt-1">&times;</span>
                                                <span>Phone numbers, email addresses, last names, physical addresses</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#FF7404] flex-shrink-0 mt-1">&times;</span>
                                                <span>CRM custom fields, lead source, lead notes</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#FF7404] flex-shrink-0 mt-1">&times;</span>
                                                <span>Any other personal identifying information provided to us by the client</span>
                                            </li>
                                        </ul>
                                        <p className="text-sm text-white/50 leading-relaxed">
                                            Lead routing, dialing, and CRM storage all happen outside the AI layer.
                                        </p>
                                    </div>

                                    {/* Automatic PII Redaction */}
                                    <div id="pii-redaction" className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 scroll-mt-40">
                                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                            <EyeOff className="w-5 h-5 text-[#FF7404]" /> Automatic PII Redaction at the SMS Boundary
                                        </h2>
                                        <p className="text-white/60 leading-relaxed mb-4">
                                            Sensitive personal data is automatically removed from every text message the moment it enters or leaves the Visquanta platform. Social Security numbers, credit and debit card numbers (validated to avoid false positives), bank account numbers, routing numbers, driver&apos;s license numbers, and dates of birth are replaced with redaction tokens before the message is written to any database, stored in any audit log, synced to any CRM, or seen by any AI model.
                                        </p>
                                        <p className="text-white/60 leading-relaxed mb-4">
                                            Ordinary conversation data &mdash; names, phone numbers, email addresses, vehicle details, prices, and mileage &mdash; is preserved so conversations remain useful to your team. Every redaction is logged as an anonymous count (for example, &quot;one card number redacted&quot;); the original sensitive text is never retained, transmitted, or recoverable.
                                        </p>
                                        <p className="text-white/60 leading-relaxed">
                                            This control is enforced at the single point of entry and exit on our SMS middleware, meaning it applies uniformly to every inbound and outbound message regardless of which downstream system consumes it. The operating principle is simple: Visquanta would rather miss context in a conversation than store regulated data unnecessarily.
                                        </p>
                                    </div>

                                    {/* Security Posture */}
                                    <div id="security" className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 scroll-mt-40">
                                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                            <Lock className="w-5 h-5 text-[#FF7404]" /> Security Posture
                                        </h2>
                                        <ul className="space-y-3 text-white/70 mb-6">
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-4 h-4 text-[#FF7404] flex-shrink-0 mt-1" />
                                                <span>Data encrypted <strong className="text-white">in transit</strong> (TLS 1.2+) and <strong className="text-white">at rest</strong> (AES-256)</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-4 h-4 text-[#FF7404] flex-shrink-0 mt-1" />
                                                <span>Role-based access control on all customer data</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-4 h-4 text-[#FF7404] flex-shrink-0 mt-1" />
                                                <span>Our sub-processors (AWS, Vercel, OpenAI, and others) maintain their own SOC 2 Type 2 and ISO 27001 certifications. Their compliance documentation is available to enterprise clients under NDA.</span>
                                            </li>
                                        </ul>
                                        <p className="text-xs text-white/40 leading-relaxed border-t border-white/5 pt-4">
                                            Visquanta does not currently hold its own third-party security certifications and does not represent itself as SOC 2 or ISO 27001 certified. We maintain strict internal policies to protect customer data and rely on compliant sub-processors for infrastructure.
                                        </p>
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

                                {/* Compliance Contact */}
                                <div className="pt-8 pb-4">
                                    <h2 className="text-xl font-bold text-white mb-4">DPA Requests & Compliance Questions</h2>
                                    <p className="text-white/60 mb-6 max-w-2xl">
                                        For DPA requests, security questionnaires, or sub-processor compliance documentation:
                                    </p>
                                    <div className="flex flex-wrap items-center gap-2 text-white/70">
                                        <Mail className="w-4 h-4 text-[#FF7404]" />
                                        <a href="mailto:compliance@visquanta.com" className="text-white hover:text-[#FF7404] underline underline-offset-4 decoration-white/30 transition-colors">
                                            compliance@visquanta.com
                                        </a>
                                        <span className="text-white/40">or</span>
                                        <a href="mailto:info@visquanta.com" className="text-white/70 hover:text-[#FF7404] underline underline-offset-4 decoration-white/20 transition-colors">
                                            info@visquanta.com
                                        </a>
                                    </div>
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
