import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import {
    ClipboardCheck,
    FileSearch,
    ListChecks,
    Mail,
    MessageSquareOff,
    Mic,
    PhoneCall,
    ShieldCheck,
    SlidersHorizontal,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LegalDocsNav from '@/components/LegalDocsNav';

export const metadata: Metadata = {
    title: 'TCPA Compliance & Suppression Controls | Visquanta LLC',
    description: 'How Visquanta LLC provides platform controls for business-managed TCPA, opt-out, suppression, consent, and call/SMS compliance workflows.',
    alternates: {
        canonical: 'https://www.visquanta.com/compliance',
    },
    openGraph: {
        url: 'https://www.visquanta.com/compliance',
        images: [
            {
                url: 'https://www.visquanta.com/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Visquanta LLC',
            },
        ],
    },
};

const businessResponsibilities = [
    'Capture and document consent before outreach.',
    'Maintain opt-in records and consent sources.',
    'Configure suppression rules for each program.',
    'Set calling-time policy and contact cadence.',
    'Configure recording disclosures where required.',
];

const platformControls = [
    'Suppression controls across pre-contact, at-contact, and cross-channel workflows.',
    'Audit logs for suppression and opt-out events.',
    'Opt-out propagation between supported voice and SMS workflows.',
    'Recording and transcript retention controls configured by the business.',
    'Contact record fields for consent timestamp and source.',
];

const suppressionTiers = [
    {
        tier: 'Tier 1',
        title: 'Pre-contact suppression',
        icon: FileSearch,
        items: [
            'Business-specific suppression list checks before outreach.',
            'Business-configured DNC suppression workflows, including federal and state lists where supported and required by the business program.',
            'Reassigned-number check workflows where supported and configured by the business.',
            'Quiet-hours enforcement with a default 8am-9pm consumer local time policy.',
        ],
    },
    {
        tier: 'Tier 2',
        title: 'At-contact opt-out',
        icon: MessageSquareOff,
        items: [
            'Real-time detection of opt-out language such as stop, remove me, do not call, and unsubscribe in supported voice and SMS workflows.',
            'Immediate write to the suppression store when an opt-out is captured.',
            'No further contact attempts queued by the platform for that number after suppression is recorded.',
        ],
    },
    {
        tier: 'Tier 3',
        title: 'Cross-channel propagation and audit',
        icon: ListChecks,
        items: [
            'A voice opt-out suppresses supported SMS workflows for that number, and an SMS opt-out suppresses supported voice workflows.',
            'Every suppression event is timestamped and logged.',
            'Audit log retention is configured by the business contract and compliance policy.',
        ],
    },
];

const additionalControls = [
    {
        title: 'SMS and A2P readiness',
        icon: PhoneCall,
        text: 'Visquanta LLC provides configuration fields and workflow controls that support business-managed SMS programs, including campaign setup inputs, message templates, opt-out handling, and contact-record visibility. Businesses remain responsible for program approvals, message content, and applicable messaging rules.',
    },
    {
        title: 'Consent source visibility',
        icon: ClipboardCheck,
        text: 'Businesses configure consent sources such as web forms, in-store capture, prior-business-relationship records, or imported CRM fields. The platform surfaces the available consent timestamp and source on each supported contact record.',
    },
    {
        title: 'Recording disclosure controls',
        icon: Mic,
        text: 'Calls may be recorded for quality, training, and operational review where a business enables recording. Businesses configure disclosure language and should consult counsel for state-specific two-party-consent requirements.',
    },
    {
        title: 'Operational review trail',
        icon: SlidersHorizontal,
        text: 'Visquanta LLC provides workflow-level visibility into suppression events, contact attempts, opt-out propagation, and transcript availability so business teams can review how controls were configured and applied.',
    },
];

function SectionLabel({ children }: { children: ReactNode }) {
    return (
        <div className="inline-flex items-center gap-2 rounded-full border border-[#FF7404]/25 bg-[#FF7404]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#FF7404]">
            <ShieldCheck className="h-3.5 w-3.5" />
            {children}
        </div>
    );
}

function GlassCard({ children, className = '' }: { children: ReactNode; className?: string }) {
    return (
        <div className={`rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm ${className}`}>
            {children}
        </div>
    );
}

export default function CompliancePage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#020202] text-white selection:bg-[#FF7404] selection:text-black">
            <Navigation />

            <div className="pointer-events-none fixed inset-0 z-0">
                <div className="absolute inset-0 bg-enterprise-grid opacity-[0.035]" />
                <div className="absolute left-1/2 top-0 h-[520px] w-[1100px] -translate-x-1/2 rounded-full bg-[#FF7404]/10 blur-[170px]" />
                <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-white/[0.025] blur-[150px]" />
            </div>

            <section className="relative z-10 border-b border-white/5 px-6 pb-20 pt-36 md:pb-28 md:pt-48">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 flex justify-center">
                        <LegalDocsNav active="compliance" />
                    </div>

                    <div className="mx-auto max-w-4xl text-center">
                        <SectionLabel>Trust Center Compliance</SectionLabel>
                        <h1 className="mt-8 text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white md:text-7xl lg:text-8xl">
                            TCPA Compliance & Suppression Controls
                        </h1>
                        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                            Visquanta LLC is a platform provider for business-operated voice agent and SMS workflows; businesses are the caller of record and own consent, policy configuration, and campaign operation.
                        </p>
                        <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-white/35">
                            Last updated: December 17, 2025
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative z-10 px-6 py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 max-w-3xl">
                        <SectionLabel>Responsibility Model</SectionLabel>
                        <h2 className="mt-6 text-3xl font-black tracking-tight text-white md:text-5xl">How responsibility is split</h2>
                        <p className="mt-4 text-white/55">
                            The business decides when and why a consumer is contacted. Visquanta LLC provides controls that help the business configure, operate, and review those workflows.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                        <GlassCard>
                            <h3 className="mb-5 text-xl font-black text-white">Business is responsible for</h3>
                            <ul className="space-y-3">
                                {businessResponsibilities.map((item) => (
                                    <li key={item} className="flex gap-3 text-sm leading-6 text-white/65">
                                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#FF7404]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>

                        <GlassCard>
                            <h3 className="mb-5 text-xl font-black text-white">Visquanta LLC provides</h3>
                            <ul className="space-y-3">
                                {platformControls.map((item) => (
                                    <li key={item} className="flex gap-3 text-sm leading-6 text-white/65">
                                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/45" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    </div>
                </div>
            </section>

            <section className="relative z-10 border-y border-white/5 bg-white/[0.015] px-6 py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 max-w-3xl">
                        <SectionLabel>Suppression Stack</SectionLabel>
                        <h2 className="mt-6 text-3xl font-black tracking-tight text-white md:text-5xl">Three tiers of suppression</h2>
                        <p className="mt-4 text-white/55">
                            Businesses configure suppression policies for each program. The platform applies those configured controls across supported contact workflows.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {suppressionTiers.map((tier) => (
                            <GlassCard key={tier.title} className="relative overflow-hidden">
                                <div className="absolute right-4 top-4 text-6xl font-black text-white/[0.03]">{tier.tier}</div>
                                <tier.icon className="mb-6 h-9 w-9 text-[#FF7404]" />
                                <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-[#FF7404]">{tier.tier}</p>
                                <h3 className="mb-5 text-xl font-black text-white">{tier.title}</h3>
                                <ul className="space-y-3">
                                    {tier.items.map((item) => (
                                        <li key={item} className="text-sm leading-6 text-white/60">{item}</li>
                                    ))}
                                </ul>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative z-10 px-6 py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 max-w-3xl">
                        <SectionLabel>Additional Controls</SectionLabel>
                        <h2 className="mt-6 text-3xl font-black tracking-tight text-white md:text-5xl">Related compliance workflows</h2>
                        <p className="mt-4 text-white/55">
                            TCPA compliance usually sits beside SMS, recording, consent, and audit controls. Visquanta LLC keeps these workflows visible for business operators without replacing legal review.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {additionalControls.map((control) => (
                            <GlassCard key={control.title}>
                                <control.icon className="mb-5 h-8 w-8 text-[#FF7404]" />
                                <h3 className="mb-3 text-xl font-black text-white">{control.title}</h3>
                                <p className="text-sm leading-7 text-white/60">{control.text}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative z-10 border-y border-white/5 bg-[#080808] px-6 py-20">
                <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                    <div>
                        <SectionLabel>Consent Capture</SectionLabel>
                        <h2 className="mt-6 text-3xl font-black tracking-tight text-white md:text-5xl">Consent records stay visible</h2>
                    </div>
                    <div className="space-y-6 text-base leading-8 text-white/60">
                        <p>
                            Businesses configure consent sources, including web forms, in-store capture, prior-business-relationship records, and imported CRM fields. Visquanta LLC surfaces the available consent timestamp and source on supported contact records so business teams can review the basis for outreach.
                        </p>
                        <p>
                            Calls may be recorded for quality, training, and operational review where the business enables recording. Businesses configure disclosure language, and state-specific recording requirements should be reviewed with counsel.
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative z-10 px-6 py-20">
                <div className="mx-auto max-w-6xl">
                    <GlassCard className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                        <div>
                            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FF7404]/30 bg-[#FF7404]/10">
                                <Mail className="h-5 w-5 text-[#FF7404]" />
                            </div>
                            <h2 className="text-3xl font-black tracking-tight text-white">Opt-out & escalation contact</h2>
                            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">
                                If a consumer believes an opt-out request was not honored by a business-operated workflow, the consumer can escalate the request by email or through the contact form. Visquanta LLC can route the request for review against the relevant business configuration and suppression record.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <a href="mailto:compliance@visquanta.com" className="rounded-xl bg-[#FF7404] px-6 py-4 text-center text-sm font-black uppercase tracking-widest text-black transition hover:bg-[#ff8a2d]">
                                {'compliance@visquanta.com'}
                            </a>
                            <Link href="/contact?topic=compliance" className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 text-center text-sm font-black uppercase tracking-widest text-white/70 transition hover:border-[#FF7404]/40 hover:text-white">
                                Contact Form
                            </Link>
                        </div>
                    </GlassCard>
                </div>
            </section>

            <section className="relative z-10 px-6 pb-20">
                <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
                    <p>Last updated December 17, 2025. This page describes platform controls and is not legal advice.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy-policy" className="text-white/60 hover:text-white">Privacy Policy</Link>
                        <Link href="/terms-conditions" className="text-white/60 hover:text-white">Terms & Conditions</Link>
                    </div>
                </div>
            </section>

            {/* TODO(compliance legal review): Confirm whether state-specific recording disclosure language needs additional state-by-state notices. Consult counsel before adding jurisdiction-specific claims. */}
            {/* TODO(compliance legal review): Confirm TCPA, DNC, RND, and SMS retention periods before publishing any specific retention duration. */}
            <Footer />
        </main>
    );
}
