'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Shield,
    Lock,
    FileText,
    Server,
    Users,
    CheckCircle,
    Download,
    ExternalLink,
    EyeOff,
    Database,
    ChevronRight,
    Mail,
    Cookie,
    ClipboardCheck,
    ScrollText,
    GitBranch,
    Cpu,
    Inbox,
    PhoneCall,
    BookOpen,
    AlertTriangle,
    BadgeCheck,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LegalDocsNav from '@/components/LegalDocsNav';
import { subprocessors } from '@/data/subprocessors';

// --- Data & Content ---

const policies = [
    { title: 'Privacy Policy', type: 'Link', href: '/privacy-policy', icon: Lock, description: 'How we collect, use, and protect personal data.' },
    { title: 'Terms & Conditions', type: 'Link', href: '/terms-conditions', icon: FileText, description: 'The terms governing use of the VisQuanta platform.' },
    { title: 'TCPA Compliance', type: 'Link', href: '/compliance', icon: ClipboardCheck, description: 'Suppression, opt-out, consent, and audit controls for business-operated SMS workflows.' },
    { title: 'Cookie Policy', type: 'Link', href: '/cookie-policy', icon: Cookie, description: 'How and why we use cookies on our websites.' },
];

const policyCards = [
    ...policies,
    { title: 'Data Processing Addendum', type: 'Mailto', href: 'mailto:compliance@visquanta.com?subject=DPA%20Request', icon: Download, description: 'Our customer-facing DPA, available on request for enterprise clients.' },
];

const trustPrinciples = [
    {
        title: 'Data Minimisation',
        copy: 'We design workflows to collect and process only the information needed to deliver the configured service.',
        icon: Database,
    },
    {
        title: 'AI Data Controls',
        copy: 'AI workflows are configured to minimise the data sent to model providers and apply enterprise controls where available.',
        icon: Cpu,
    },
    {
        title: 'Consent & Opt-Out Handling',
        copy: 'Supported workflows include consent visibility, opt-out detection, suppression checks, and campaign-specific messaging controls.',
        icon: ClipboardCheck,
    },
    {
        title: 'CRM & Workflow Security',
        copy: 'Customer records, workflow activity, and integrations are managed through controlled systems with role-based access and audit visibility.',
        icon: Lock,
    },
    {
        title: 'Audit Readiness',
        copy: 'We preserve operational records that help customers review consent events, opt-outs, blocked sends, redactions, and workflow activity.',
        icon: ScrollText,
    },
];

const subprocessorCategories = [
    {
        category: 'AI model providers',
        purpose: 'Generate AI-assisted responses and workflow outputs',
        example: 'Limited conversation context and workflow instructions',
        icon: Cpu,
    },
    {
        category: 'Cloud hosting providers',
        purpose: 'Host application services and infrastructure',
        example: 'Application traffic, logs, and platform data',
        icon: Server,
    },
    {
        category: 'Database providers',
        purpose: 'Store platform records and workflow data',
        example: 'Customer records, message metadata, audit records',
        icon: Database,
    },
    {
        category: 'Messaging and voice providers',
        purpose: 'Send SMS, route calls, manage phone numbers',
        example: 'Phone numbers, message/call metadata, delivery status',
        icon: PhoneCall,
    },
    {
        category: 'CRM and integration providers',
        purpose: 'Sync records into customer systems',
        example: 'Lead records, conversation summaries, appointment data',
        icon: GitBranch,
    },
    {
        category: 'Analytics and monitoring providers',
        purpose: 'Monitor site and platform performance',
        example: 'Usage events, diagnostics, error logs',
        icon: Inbox,
    },
];

const documentationItems = [
    'Data Processing Addendum',
    'Subprocessor list',
    'Security controls summary',
    'SMS PII handling policy',
    'Access control policy',
    'Incident response overview',
    'AI data handling summary',
    'Messaging compliance controls summary',
    'Vendor/security questionnaire responses',
];

const securityControls = [
    'Encryption in transit using TLS',
    'Encryption at rest where supported by infrastructure providers',
    'Role-based access control',
    'Limited internal access based on operational need',
    'Environment-level access controls',
    'Audit logging for key operational events',
    'Secure integration handling',
    'Internal incident escalation procedures',
    'Subprocessor review for key infrastructure providers',
];

const dataAvoided = [
    'Full CRM records',
    'Payment information',
    'Government identifiers',
    'Financial account data',
    'Sensitive personal information',
    'Internal customer notes not required for the workflow',
    'Unnecessary contact fields',
    'Full lead history where limited context is sufficient',
];

const onPageLinks: { title: string; href: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { title: 'Executive Summary', href: '#executive-summary', icon: BookOpen },
    { title: 'Trust Principles', href: '#trust-principles', icon: Shield },
    { title: 'Data Processing', href: '#data-processing-agreements', icon: FileText },
    { title: 'Shared Responsibility', href: '#shared-responsibility', icon: Users },
    { title: 'Enterprise AI Controls', href: '#enterprise-ai-data-controls', icon: Cpu },
    { title: 'AI Data Handling', href: '#ai-data-handling', icon: Database },
    { title: 'PII Redaction', href: '#pii-redaction', icon: EyeOff },
    { title: 'Messaging Compliance', href: '#messaging-compliance', icon: PhoneCall },
    { title: 'Consent & Audit Trail', href: '#consent-audit-trail', icon: ClipboardCheck },
    { title: 'Security Posture', href: '#security-posture', icon: Lock },
    { title: 'Service Providers', href: '#service-providers', icon: Server },
    { title: 'Documentation', href: '#security-compliance-documentation', icon: ScrollText },
    { title: 'Request DPA', href: '#dpa-requests', icon: Mail },
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

const SectionCard = ({
    id,
    icon: Icon,
    title,
    children,
}: {
    id?: string;
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    children: React.ReactNode;
}) => (
    <div id={id} className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 scroll-mt-40">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Icon className="w-5 h-5 text-[#FF7404]" /> {title}
        </h2>
        <div className="space-y-4 text-white/70 leading-relaxed">{children}</div>
    </div>
);

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
            <div className="space-y-2 mb-2">
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
                        <span className="text-sm text-white/70 truncate group-hover:text-white transition-colors">Full Sub-processor List</span>
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
                                VisQuanta helps businesses operate customer communication workflows with clear data handling, AI processing controls, consent visibility, and audit-ready compliance practices across SMS, voice, CRM, and automation.
                            </p>
                            <p className="mt-4 text-xs text-white/40 uppercase tracking-wider">Last updated: May 2026</p>
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

                                {/* 2. Executive Trust Summary */}
                                <SectionCard id="executive-summary" icon={BookOpen} title="Executive Trust Summary">
                                    <p>
                                        VisQuanta is built for businesses that handle customer conversations, lead records, appointment data, CRM-connected workflows, SMS outreach, and voice activity at scale.
                                    </p>
                                    <p>
                                        Our trust model is based on five principles: collect only what is needed, keep customer data inside controlled workflows, minimise what is sent to AI providers, maintain clear consent and opt-out controls, and provide audit visibility for messaging, voice, and CRM activity.
                                    </p>
                                    <p>
                                        We support customers with documented controls across AI data handling, SMS compliance, data minimisation, access control, subprocessor review, and security documentation. Customers remain responsible for their own campaign configuration, consent sources, message content, legal review, and customer relationship decisions.
                                    </p>
                                </SectionCard>

                                {/* 3. Trust Principles / Control Pillars */}
                                <div id="trust-principles" className="scroll-mt-40">
                                    <div className="flex items-center gap-2 mb-6">
                                        <Shield className="w-5 h-5 text-[#FF7404]" />
                                        <h2 className="text-xl font-bold text-white">Trust Principles & Control Pillars</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {trustPrinciples.map((p, i) => (
                                            <div key={i} className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-[#FF7404]/30 transition-colors">
                                                <div className="p-2 rounded-lg bg-black/40 border border-white/10 text-[#FF7404] w-fit mb-4">
                                                    <p.icon className="w-5 h-5" />
                                                </div>
                                                <h3 className="font-bold text-white mb-2">{p.title}</h3>
                                                <p className="text-sm text-white/60 leading-relaxed">{p.copy}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 4. Data Processing Agreements */}
                                <SectionCard id="data-processing-agreements" icon={FileText} title="Data Processing Agreements">
                                    <p>
                                        We can support enterprise customers and vendor review teams with appropriate data-processing documentation, including a customer-facing Data Processing Addendum where required.
                                    </p>
                                    <p>
                                        Where our service providers process personal data on our behalf, we require appropriate contractual protections, such as a Data Processing Addendum or equivalent data-processing terms.
                                    </p>
                                </SectionCard>

                                {/* 5. Shared Responsibility Model */}
                                <SectionCard id="shared-responsibility" icon={Users} title="Shared Responsibility Model">
                                    <p>
                                        VisQuanta provides the platform, controls, workflow infrastructure, and audit visibility used to operate SMS, voice, CRM, and AI-assisted communication workflows.
                                    </p>
                                    <p>
                                        Our customers remain responsible for deciding who they contact, why they are contacted, what consent basis applies, what campaign language is used, and whether a particular campaign is appropriate for their business, jurisdiction, and customer relationship.
                                    </p>
                                    <p>
                                        VisQuanta helps support responsible operation through configurable controls such as opt-out detection, suppression checks, consent capture, quiet-hours configuration, role-based access, audit logs, AI data minimisation, and workflow-level guardrails.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF7404] mb-3">VisQuanta provides</h4>
                                            <ul className="space-y-2 text-sm text-white/70">
                                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#FF7404] flex-shrink-0 mt-0.5" /> Platform, workflow infrastructure, and audit visibility</li>
                                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#FF7404] flex-shrink-0 mt-0.5" /> Configurable consent, opt-out, and suppression controls</li>
                                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#FF7404] flex-shrink-0 mt-0.5" /> AI data minimisation and workflow-level guardrails</li>
                                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#FF7404] flex-shrink-0 mt-0.5" /> Role-based access and operational audit logs</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3">Customer remains responsible for</h4>
                                            <ul className="space-y-2 text-sm text-white/70">
                                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" /> Who they contact and why</li>
                                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" /> Consent basis and consent source</li>
                                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" /> Campaign language and message content</li>
                                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" /> Legal review for their jurisdiction and customer base</li>
                                            </ul>
                                        </div>
                                    </div>
                                </SectionCard>

                                {/* 6. Enterprise AI Data Controls */}
                                <SectionCard id="enterprise-ai-data-controls" icon={Cpu} title="Enterprise AI Data Controls">
                                    <p>
                                        VisQuanta uses enterprise-grade AI model infrastructure for supported messaging, voice, and workflow automation use cases.
                                    </p>
                                    <p>
                                        For eligible enterprise AI workflows, customer content is not used to train model-provider systems by default. Where configured and supported, Zero Data Retention controls can be applied so eligible customer content is excluded from model-provider abuse monitoring logs.
                                    </p>
                                    <p>
                                        AI data controls are applied based on the workflow, endpoint, model capability, feature set, and customer deployment configuration. Some files, images, tool calls, application state, third-party integrations, or non-AI systems may have separate retention behaviour.
                                    </p>
                                    <p>
                                        Because of this, VisQuanta designs each deployment to minimise the data sent to AI providers and to avoid sending unnecessary CRM fields, sensitive personal information, or full customer records where they are not required.
                                    </p>
                                    <div className="bg-[#FF7404]/[0.06] border border-[#FF7404]/30 rounded-xl p-5 flex items-start gap-3 mt-2">
                                        <AlertTriangle className="w-5 h-5 text-[#FF7404] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-wider text-[#FF7404] mb-1">Important</p>
                                            <p className="text-sm text-white/70 leading-relaxed">
                                                ZDR and regional processing controls are workflow and endpoint dependent. They should not be described as applying automatically to every system, feature, or integration.
                                            </p>
                                        </div>
                                    </div>
                                </SectionCard>

                                {/* 7. What We Send to AI Providers */}
                                <SectionCard id="ai-data-handling" icon={Database} title="What We Send to AI Providers">
                                    <p>
                                        For standard SMS campaign workflows, VisQuanta minimises the data sent to AI model providers. The default configuration is designed to pass only the conversation context required to generate a useful response, such as the prospect&apos;s first name, the messages they provide, and limited workflow instructions required for the campaign.
                                    </p>
                                    <p>
                                        We do not intentionally send full CRM records, unnecessary contact fields, payment information, government identifiers, financial account data, or sensitive personal information to AI model providers.
                                    </p>
                                    <p>
                                        Lead routing, dialing, CRM storage, consent records, suppression records, customer account administration, and operational reporting occur outside the AI model layer.
                                    </p>
                                    <div className="pt-2">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3">Examples of data we avoid sending where not required</h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                                            {dataAvoided.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                                                    <span className="text-[#FF7404] flex-shrink-0 mt-0.5">&times;</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </SectionCard>

                                {/* 8. Data Minimisation & PII Redaction */}
                                <SectionCard id="pii-redaction" icon={EyeOff} title="Data Minimisation & PII Redaction">
                                    <p>
                                        For supported SMS workflows, messages pass through a redaction layer designed to detect and replace regulated personal data before downstream storage, CRM sync, or AI processing.
                                    </p>
                                    <p>
                                        This redaction layer is designed to identify data types such as Social Security numbers, credit and debit card numbers, bank account numbers, routing numbers, driver&apos;s license numbers, and dates of birth. When a redaction event occurs, the platform records the type and count of the redaction for audit purposes without retaining the original regulated value.
                                    </p>
                                    <p>
                                        Ordinary business conversation context, such as names, vehicle details, appointment information, prices, mileage, and general enquiry details, may be preserved where needed to keep the workflow useful for the customer.
                                    </p>
                                </SectionCard>

                                {/* 9. US & Canadian Messaging Compliance Support */}
                                <SectionCard id="messaging-compliance" icon={PhoneCall} title="US & Canadian Messaging Compliance Support">
                                    <p>
                                        VisQuanta supports business-operated SMS and voice workflows across the United States and Canada.
                                    </p>
                                    <p>
                                        Our platform is designed to support responsible messaging operations through consent visibility, sender identification, opt-out handling, suppression controls, quiet-hours configuration, campaign-specific disclosures, and audit records.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="text-xs font-bold uppercase tracking-wider text-[#FF7404]">United States &mdash; TCPA-aware</span>
                                            </div>
                                            <ul className="space-y-2 text-sm text-white/70">
                                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#FF7404] flex-shrink-0 mt-0.5" /> Consent review and capture</li>
                                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#FF7404] flex-shrink-0 mt-0.5" /> Opt-out handling</li>
                                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#FF7404] flex-shrink-0 mt-0.5" /> Do Not Contact suppression</li>
                                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#FF7404] flex-shrink-0 mt-0.5" /> Contact cadence controls</li>
                                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#FF7404] flex-shrink-0 mt-0.5" /> Call &amp; text auditability</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="text-xs font-bold uppercase tracking-wider text-[#FF7404]">Canada &mdash; CASL-aware</span>
                                            </div>
                                            <ul className="space-y-2 text-sm text-white/70">
                                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#FF7404] flex-shrink-0 mt-0.5" /> Evidence of consent</li>
                                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#FF7404] flex-shrink-0 mt-0.5" /> Sender identification in messages</li>
                                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#FF7404] flex-shrink-0 mt-0.5" /> Unsubscribe mechanisms in communications</li>
                                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#FF7404] flex-shrink-0 mt-0.5" /> Suppression and opt-out logging</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="text-sm text-white/50 leading-relaxed pt-2 border-t border-white/5 mt-4">
                                        VisQuanta does not replace legal counsel. Customers remain responsible for confirming that their campaigns, consent sources, message content, and operating procedures meet the requirements that apply to their business.
                                    </p>
                                </SectionCard>

                                {/* 10. Consent Evidence & Audit Trail */}
                                <SectionCard id="consent-audit-trail" icon={ClipboardCheck} title="Consent Evidence & Audit Trail">
                                    <p>
                                        VisQuanta is designed to preserve evidence around how communication workflows were configured and operated.
                                    </p>
                                    <p>
                                        Where consent is captured through supported VisQuanta forms or workflows, the platform can record the disclosure text shown to the consumer, timestamp, IP address, user agent, consented channels, linked policy URLs, and related submission metadata.
                                    </p>
                                    <p>
                                        Operational audit records may include opt-out events, suppression decisions, blocked sends, redaction events, delivery status, call recording configuration, and workflow activity. These records help customers review how a campaign was configured and how platform controls were applied.
                                    </p>
                                </SectionCard>

                                {/* 11. Security Posture */}
                                <SectionCard id="security-posture" icon={Lock} title="Security Posture">
                                    <p>
                                        VisQuanta applies technical and organisational controls designed to protect customer workflows, platform access, and operational data.
                                    </p>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mt-2">Controls may include</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                                        {securityControls.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                                                <CheckCircle className="w-4 h-4 text-[#FF7404] flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-xs text-white/50 leading-relaxed border-t border-white/5 pt-4 mt-2">
                                        VisQuanta does not currently claim to hold its own SOC 2 or ISO 27001 certification. We rely on vetted infrastructure and service providers with established security programs while maintaining internal policies, operational controls, and customer-facing documentation appropriate to our current stage.
                                    </p>
                                </SectionCard>

                                {/* 12. Subprocessors & Service Providers */}
                                <div id="service-providers" className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 scroll-mt-40">
                                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <Server className="w-5 h-5 text-[#FF7404]" /> Subprocessors & Service Providers
                                    </h2>
                                    <p className="text-white/60 leading-relaxed mb-6">
                                        VisQuanta relies on a small set of vetted infrastructure, AI, messaging, and CRM service providers to operate the platform. The summary below describes the categories and what types of data are typically processed by each.
                                    </p>

                                    <div className="border border-white/10 rounded-xl overflow-hidden">
                                        <div className="bg-white/5 px-6 py-4 border-b border-white/10 grid grid-cols-12 text-[10px] font-bold uppercase tracking-wider text-white/50 gap-4">
                                            <div className="col-span-12 md:col-span-3">Provider Category</div>
                                            <div className="col-span-12 md:col-span-4 hidden md:block">Purpose</div>
                                            <div className="col-span-12 md:col-span-5 hidden md:block">Example Data Processed</div>
                                        </div>
                                        <div className="divide-y divide-white/5">
                                            {subprocessorCategories.map((cat, i) => (
                                                <div key={i} className="px-6 py-5 grid grid-cols-12 items-start gap-4 hover:bg-white/[0.02] transition-colors">
                                                    <div className="col-span-12 md:col-span-3 flex items-center gap-3">
                                                        <div className="w-9 h-9 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center text-[#FF7404] flex-shrink-0">
                                                            <cat.icon className="w-4 h-4" />
                                                        </div>
                                                        <span className="font-bold text-white text-sm">{cat.category}</span>
                                                    </div>
                                                    <div className="col-span-12 md:col-span-4 text-sm text-white/70">
                                                        <span className="text-white/30 uppercase text-[10px] block mb-1 md:hidden">Purpose</span>
                                                        {cat.purpose}
                                                    </div>
                                                    <div className="col-span-12 md:col-span-5 text-sm text-white/60">
                                                        <span className="text-white/30 uppercase text-[10px] block mb-1 md:hidden">Example Data</span>
                                                        {cat.example}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-4 mt-6">
                                        <Link
                                            href="/subprocessors"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF7404]/10 border border-[#FF7404]/30 text-sm font-bold text-[#FF7404] hover:bg-[#FF7404]/20 transition-colors"
                                        >
                                            View full subprocessor list <ChevronRight className="w-4 h-4" />
                                        </Link>
                                        <button
                                            onClick={() => setActiveTab('Service Providers')}
                                            className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer"
                                        >
                                            Or browse providers in this page &rarr;
                                        </button>
                                    </div>
                                </div>

                                {/* 13. Security & Compliance Documentation */}
                                <SectionCard id="security-compliance-documentation" icon={BadgeCheck} title="Security & Compliance Documentation">
                                    <p>
                                        Enterprise customers, dealership groups, and vendor review teams can request supporting documentation where appropriate.
                                    </p>
                                    <div className="pt-2">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3">Available materials may include</h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                                            {documentationItems.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                                                    <CheckCircle className="w-4 h-4 text-[#FF7404] flex-shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className="text-sm text-white/50 leading-relaxed border-t border-white/5 pt-4 mt-2">
                                        Certain documents may be provided under NDA or as part of an enterprise onboarding process.
                                    </p>
                                </SectionCard>

                                {/* 14. DPA Requests & Compliance Questions */}
                                <div id="dpa-requests" className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 scroll-mt-40">
                                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <Mail className="w-5 h-5 text-[#FF7404]" /> DPA Requests & Compliance Questions
                                    </h2>
                                    <p className="text-white/60 leading-relaxed mb-6 max-w-2xl">
                                        For DPA requests, vendor review, security questionnaires, privacy questions, AI data handling reviews, or subprocessor documentation, contact:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <a
                                            href="mailto:compliance@visquanta.com"
                                            className="flex items-center justify-between gap-3 p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#FF7404]/40 hover:bg-[#FF7404]/[0.04] group transition-all"
                                        >
                                            <div className="flex items-center gap-3 min-w-0">
                                                <Mail className="w-5 h-5 text-[#FF7404] flex-shrink-0" />
                                                <div className="min-w-0">
                                                    <div className="text-xs uppercase tracking-wider text-white/40 mb-0.5">Compliance & Vendor Review</div>
                                                    <div className="text-sm font-bold text-white truncate">compliance@visquanta.com</div>
                                                </div>
                                            </div>
                                            <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-[#FF7404] flex-shrink-0" />
                                        </a>
                                        <a
                                            href="mailto:info@visquanta.com"
                                            className="flex items-center justify-between gap-3 p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#FF7404]/40 hover:bg-[#FF7404]/[0.04] group transition-all"
                                        >
                                            <div className="flex items-center gap-3 min-w-0">
                                                <Mail className="w-5 h-5 text-[#FF7404] flex-shrink-0" />
                                                <div className="min-w-0">
                                                    <div className="text-xs uppercase tracking-wider text-white/40 mb-0.5">General Enquiries</div>
                                                    <div className="text-sm font-bold text-white truncate">info@visquanta.com</div>
                                                </div>
                                            </div>
                                            <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-[#FF7404] flex-shrink-0" />
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
