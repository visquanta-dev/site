import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import {
    Archive,
    ClipboardCheck,
    Database,
    FileSignature,
    FileSearch,
    KeyRound,
    ListChecks,
    Lock,
    Mail,
    MessageSquareOff,
    Mic,
    PhoneCall,
    RadioTower,
    ShieldCheck,
    SlidersHorizontal,
    TableProperties,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LegalDocsNav from '@/components/LegalDocsNav';

export const metadata: Metadata = {
    title: 'TCPA Compliance & Suppression Controls',
    description: 'How Visquanta LLC provides platform controls for business-managed TCPA, opt-out, suppression, consent, and SMS compliance workflows.',
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
    'Configure required SMS disclosure language where applicable.',
];

const platformControls = [
    'Pre-send DNC and suppression checks on every outbound SMS and voice attempt, blocked before carrier handoff.',
    'Real-time inbound opt-out detection across 9 keywords: stop, unsubscribe, cancel, quit, end, opt out, opt-out, remove, delete.',
    'Cross-channel opt-out propagation: SMS opt-outs suppress voice and voice opt-outs suppress SMS.',
    'Carrier-aware phone intelligence: landline detection, non-SMS carrier blocking, ported number flagging, and VoIP awareness before spending a message.',
    'Three-tier suppression engine: global, location-scoped, and transient suppression with auto-expiry on temporary failures.',
    'Automatic intent classification on every outbound SMS for quiet-hours auditability.',
    'PII redaction at ingress and egress for SSNs, credit cards, bank accounts, routing numbers, driver licenses, and dates of birth.',
    'Immutable audit logs for opt-outs, DNC blocks, suppressions, PII redactions, consent captures, and signing events.',
    'Consent capture infrastructure storing server-side timestamp, IP, user agent, exact disclosure text, and policy URLs per submission.',
    'Cryptographic webhook signature verification with replay protection on inbound carrier traffic.',
    'TLS in transit and AES-256 at rest, with signatures encrypted using AES-256-GCM in server-side functions.',
    'Role-based access control scoped per location, with agency and sub-account boundaries.',
];

const suppressionTiers = [
    {
        tier: 'Tier 1',
        title: 'Pre-contact suppression',
        icon: FileSearch,
        items: [
            'Per-business DNC store checked on every send via a single RPC.',
            'Carrier-tier suppression: global 90-day for unreachable or invalid numbers, location-scoped 90-day for configuration failures, and transient 7-day for temporary carrier issues.',
            'Phone intelligence pre-send validation catches landlines with 180-day suppression, non-SMS carriers with permanent suppression, and invalid formats with 90-day suppression.',
            'Quiet-hours enforcement defaults to 8am-9pm consumer local time and is IANA timezone-aware per location.',
        ],
    },
    {
        tier: 'Tier 2',
        title: 'At-contact opt-out',
        icon: MessageSquareOff,
        items: [
            'Inbound SMS is scanned for 9 opt-out keywords before any CRM push.',
            'On match, the platform writes immediately to the suppression store, tags the message as opt_out_received, and protects the contact from in-flight cadence activity.',
            'Email opt-outs are distinguished from bounces: self_unsubscribed, hard_bounce, and soft_bounce each carry their own suppression policy, with indefinite retention for explicit opt-outs.',
        ],
    },
    {
        tier: 'Tier 3',
        title: 'Cross-channel propagation and audit',
        icon: ListChecks,
        items: [
            'SMS opt-out suppresses voice; voice opt-out suppresses SMS.',
            'Every suppression and opt-out event is written to structured audit logs with actor, action, location, timestamp, and reason code.',
            'Audit logs are append-only: no record edits, only appends.',
        ],
    },
];

const piiRows = [
    ['US Social Security Numbers', '9-digit pattern', '[REDACTED_SSN]'],
    ['Credit/debit cards', '13-19 digits, Luhn-validated', '[REDACTED_CARD]'],
    ['Bank account numbers', 'Digits adjacent to banking keywords', '[REDACTED_BANK_ACCOUNT]'],
    ['Routing numbers', '9-digit ABA pattern with context', '[REDACTED_ROUTING]'],
    ['Driver licenses', 'Alphanumeric values near DL keywords', '[REDACTED_DL]'],
    ['Dates of birth', 'Dates near DOB keywords', '[REDACTED_DOB]'],
];

const recordingControls = [
    'Per-number controls for recording on/off, transcription on/off, and consent mode.',
    'Verbal consent mode: disclosure spoken at the start of the call.',
    'Auto-beep mode: audible tone with IVR-delivered disclosure for jurisdictions requiring two-party consent.',
    'Recording URL, recording duration, and transcription confidence captured per call.',
    'Status badge surfaces current configuration to the operator, such as Recording active, Verbal consent, Transcription on.',
    "State-specific disclosure language remains the business's responsibility in consultation with counsel; the platform provides controls and audit trail.",
];

const auditStores = [
    ['Messaging audit log', 'Every opt-out, DNC block, auto-suppression, and PII redaction event with structured detail.'],
    ['MPI consent records', 'JSONB consent record per trade-in submission, including IP, user agent, and exact disclosure text.'],
    ['VQSign signer records', 'OTP events, ESIGN disclosure acceptance, signature IP, geolocation, user agent, SHA-256 document integrity hash, and revision history.'],
    ['Message archive', 'Nightly archive of messages older than 90 days, with intent and delivery metadata preserved.'],
    ['Email send registry', 'Per-send status, bounce type, suppression policy, and reason.'],
];

const signatureControls = [
    'Email OTP verification: 6-digit code, 10-minute expiry, and 5-attempt rate limit.',
    'ESIGN Act disclosure: signer must explicitly accept before any signature is captured.',
    'Cryptographically secure access tokens: 64-character hex generated via crypto.getRandomValues with 30-day expiry.',
    'Document integrity: SHA-256 hash verified on document load and again before signing; signing is blocked on mismatch.',
    'Signature encryption: AES-256-GCM in a server-side Edge Function, with the key never exposed to the client.',
    'Per-signer audit trail: IP address, geolocation, user agent, and timestamps for sent, viewed, signed, and declined events.',
];

const carrierControls = [
    'All sending numbers registered under A2P 10DLC with brand and campaign vetting.',
    'Carrier-aware routing: line type and carrier name retrieved on every new number, cached for 90 days, and used to route or suppress.',
    'Auto-suppression on permanent failure: permanent carrier errors automatically suppress the number with the appropriate TTL.',
    'Webhook signature verification: every carrier callback is cryptographically verified with a timestamp window for replay protection.',
];

const securityControls = [
    'Encryption in transit: TLS on all customer, Visquanta, and partner traffic.',
    'Encryption at rest: platform-managed database encryption, with AES-256-GCM for signatures.',
    'Credential management: environment-scoped credentials, never committed to source, with service-role keys kept server-side only.',
    'Access control: role-based and location-scoped, with a documented Access Control Policy.',
    'Documented policies available on request: SMS PII Handling Policy, Security Controls Inventory, Access Control Policy, and Incident Response Plan.',
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
        title: 'SMS disclosure controls',
        icon: Mic,
        text: 'SMS workflows may require sender identification, opt-out language, and other disclosures depending on the program. Businesses configure message disclosure language and should consult counsel for state-specific requirements.',
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
                            Visquanta LLC is a platform provider for business-operated SMS workflows; businesses are the caller of record and own consent, policy configuration, and campaign operation.
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
                            TCPA compliance usually sits beside SMS consent, suppression, disclosure, and audit controls. Visquanta LLC keeps these workflows visible for business operators without replacing legal review.
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
                            Every consent record captured by the platform stores the exact disclosure text shown to the consumer, the channels consented to, the Privacy Policy and Terms URLs linked at time of capture, client-side timestamp, authoritative server-side timestamp, IP address from x-forwarded-for, and user agent.
                        </p>
                        <p>
                            Consent records are stored as immutable JSONB and remain queryable for compliance review. Privacy Policy and Terms URLs are stored once at the business level and propagated to every consent point.
                        </p>
                        <div className="rounded-2xl border border-[#FF7404]/25 bg-[#FF7404]/5 p-6">
                            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#FF7404]">Trade-In Tool Consent Capture</p>
                            <blockquote className="border-l-2 border-[#FF7404] pl-4 text-sm italic leading-7 text-white/75">
                                "By submitting, I agree to be contacted by [dealership] about this trade-in via phone calls, SMS/text, and email, including via automated means. Message & data rates may apply. Consent is not a condition of purchase. Reply STOP to opt out of texts."
                            </blockquote>
                            <p className="mt-4 text-sm leading-7 text-white/60">
                                This language is TCPA and CAN-SPAM aligned: express written consent for automated calls and texts, the "not a condition of purchase" carve-out, and STOP acknowledgement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative z-10 px-6 py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 max-w-3xl">
                        <SectionLabel>Data Handling</SectionLabel>
                        <h2 className="mt-6 text-3xl font-black tracking-tight text-white md:text-5xl">PII redaction at the SMS boundary</h2>
                        <p className="mt-4 text-white/55">
                            All inbound and outbound SMS pass through a single redaction chokepoint before storage or downstream forwarding.
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-white/10">
                        <table className="w-full min-w-[720px] text-left text-sm">
                            <thead className="bg-white/[0.05] text-xs uppercase tracking-widest text-white/45">
                                <tr>
                                    <th className="px-5 py-4">Data Type</th>
                                    <th className="px-5 py-4">Detection</th>
                                    <th className="px-5 py-4">Replacement</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10 text-white/65">
                                {piiRows.map(([type, detection, replacement]) => (
                                    <tr key={type} className="bg-white/[0.015]">
                                        <td className="px-5 py-4 font-bold text-white/85">{type}</td>
                                        <td className="px-5 py-4">{detection}</td>
                                        <td className="px-5 py-4 font-mono text-xs text-[#FF7404]">{replacement}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 grid gap-6 md:grid-cols-3">
                        <GlassCard>
                            <Database className="mb-5 h-8 w-8 text-[#FF7404]" />
                            <h3 className="mb-3 text-xl font-black text-white">Conversation context preserved</h3>
                            <p className="text-sm leading-7 text-white/60">URLs, vehicle VINs, prices, names, and addresses are preserved so legitimate dealership conversations are not impacted.</p>
                        </GlassCard>
                        <GlassCard>
                            <Archive className="mb-5 h-8 w-8 text-[#FF7404]" />
                            <h3 className="mb-3 text-xl font-black text-white">Raw values never logged</h3>
                            <p className="text-sm leading-7 text-white/60">When redaction fires, the audit log captures type and count only. Raw values are never written to logs, never stored, and never forwarded to third parties.</p>
                        </GlassCard>
                        <GlassCard>
                            <ShieldCheck className="mb-5 h-8 w-8 text-[#FF7404]" />
                            <h3 className="mb-3 text-xl font-black text-white">Production validated</h3>
                            <p className="text-sm leading-7 text-white/60">Validated with 81 unit tests and a 247,000-message dry-run before production rollout.</p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            <section className="relative z-10 border-y border-white/5 bg-white/[0.015] px-6 py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 max-w-3xl">
                        <SectionLabel>Call Recording</SectionLabel>
                        <h2 className="mt-6 text-3xl font-black tracking-tight text-white md:text-5xl">Recording disclosure controls</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {recordingControls.map((item) => (
                            <GlassCard key={item}>
                                <Mic className="mb-5 h-8 w-8 text-[#FF7404]" />
                                <p className="text-sm leading-7 text-white/65">{item}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative z-10 px-6 py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 max-w-3xl">
                        <SectionLabel>Audit Trail</SectionLabel>
                        <h2 className="mt-6 text-3xl font-black tracking-tight text-white md:text-5xl">Dedicated append-only audit stores</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {auditStores.map(([title, text]) => (
                            <GlassCard key={title}>
                                <TableProperties className="mb-5 h-8 w-8 text-[#FF7404]" />
                                <h3 className="mb-3 text-xl font-black text-white">{title}</h3>
                                <p className="text-sm leading-7 text-white/60">{text}</p>
                            </GlassCard>
                        ))}
                    </div>
                    <p className="mt-8 max-w-4xl text-sm leading-7 text-white/55">
                        All change-management activity is tracked through a dated, append-only changelog discipline with 250+ documented production changes, giving auditors a reconstruction path for any feature or control.
                    </p>
                </div>
            </section>

            <section className="relative z-10 border-y border-white/5 bg-[#080808] px-6 py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 max-w-3xl">
                        <SectionLabel>Electronic Signature</SectionLabel>
                        <h2 className="mt-6 text-3xl font-black tracking-tight text-white md:text-5xl">VQSign identity verification</h2>
                        <p className="mt-4 text-white/55">Documents requiring electronic signature go through VQSign, built to ESIGN Act and UETA standards.</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {signatureControls.map((item) => (
                            <GlassCard key={item}>
                                <FileSignature className="mb-5 h-8 w-8 text-[#FF7404]" />
                                <p className="text-sm leading-7 text-white/65">{item}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative z-10 px-6 py-20">
                <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
                    <GlassCard>
                        <SectionLabel>Carrier & A2P</SectionLabel>
                        <h2 className="mt-6 text-3xl font-black tracking-tight text-white">Carrier compliance controls</h2>
                        <ul className="mt-6 space-y-4">
                            {carrierControls.map((item) => (
                                <li key={item} className="flex gap-3 text-sm leading-7 text-white/65">
                                    <RadioTower className="mt-1 h-4 w-4 flex-none text-[#FF7404]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>

                    <GlassCard>
                        <SectionLabel>Security Posture</SectionLabel>
                        <h2 className="mt-6 text-3xl font-black tracking-tight text-white">Platform security posture</h2>
                        <ul className="mt-6 space-y-4">
                            {securityControls.map((item) => (
                                <li key={item} className="flex gap-3 text-sm leading-7 text-white/65">
                                    <Lock className="mt-1 h-4 w-4 flex-none text-[#FF7404]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-6 text-white/40">
                            Visquanta does not currently represent itself as SOC 2 certified. Enterprise customers and auditors can request supporting control documentation through the compliance contact below.
                        </p>
                    </GlassCard>
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
                            <a href="mailto:compliance@visquanta.com?subject=Compliance%20Documentation%20Request" className="rounded-xl border border-[#FF7404]/30 bg-[#FF7404]/10 px-6 py-4 text-center text-sm font-black uppercase tracking-widest text-[#FF7404] transition hover:bg-[#FF7404]/15">
                                <KeyRound className="mr-2 inline h-4 w-4" />
                                Request Docs
                            </a>
                        </div>
                    </GlassCard>
                </div>
            </section>

            <section className="relative z-10 px-6 pb-20">
                <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
                    <p>Last updated December 17, 2025.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy-policy" className="text-white/60 hover:text-white">Privacy Policy</Link>
                        <Link href="/terms-conditions" className="text-white/60 hover:text-white">Terms & Conditions</Link>
                    </div>
                </div>
            </section>

            {/* TODO(compliance legal review): Confirm whether state-specific SMS disclosure language needs additional state-by-state notices. Consult counsel before adding jurisdiction-specific claims. */}
            {/* TODO(compliance legal review): Confirm TCPA, DNC, RND, and SMS retention periods before publishing any specific retention duration. */}
            <Footer />
        </main>
    );
}
