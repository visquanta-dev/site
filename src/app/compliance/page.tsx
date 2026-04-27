import Link from 'next/link';
import {
    Archive,
    CheckCircle,
    ClipboardCheck,
    Database,
    FileSignature,
    FileText,
    KeyRound,
    Lock,
    Mail,
    MessageSquareOff,
    PhoneCall,
    RadioTower,
    Shield,
    ShieldCheck,
    Siren,
    TableProperties,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LegalDocsNav from '@/components/LegalDocsNav';

const responsibilityControls = [
    'Pre-send DNC and suppression checks on every outbound SMS and voice attempt, blocked before carrier handoff',
    'Real-time inbound opt-out detection across 9 keywords: stop, unsubscribe, cancel, quit, end, opt out, opt-out, remove, delete',
    'Cross-channel opt-out propagation: SMS opt-outs suppress voice and voice opt-outs suppress SMS',
    'Carrier-aware phone intelligence: landline detection, non-SMS carrier blocking, ported number flagging, and VoIP awareness before spending a message',
    'Three-tier suppression engine: global, location-scoped, and transient suppression with auto-expiry on temporary failures',
    'Automatic intent classification on every outbound SMS for quiet-hours auditability',
    'PII redaction at ingress and egress for SSNs, credit cards, bank accounts, routing numbers, driver licenses, and dates of birth',
    'Immutable audit logs for opt-outs, DNC blocks, suppressions, PII redactions, consent captures, and signing events',
    'Consent capture infrastructure storing server-side timestamp, IP, user agent, exact disclosure text, and policy URLs per submission',
    'Cryptographic webhook signature verification with replay protection on inbound carrier traffic',
    'TLS in transit and AES-256 at rest, with signatures encrypted using AES-256-GCM in server-side functions',
    'Role-based access control scoped per location, with agency and sub-account boundaries',
];

const suppressionTiers = [
    {
        title: 'Tier 1 - Pre-contact suppression',
        icon: MessageSquareOff,
        points: [
            'Per-business DNC store checked on every send via a single RPC.',
            'Carrier-tier suppression: global 90-day for unreachable or invalid numbers, location-scoped 90-day for configuration failures, and transient 7-day for temporary carrier issues.',
            'Phone intelligence pre-send validation catches landlines with 180-day suppression, non-SMS carriers with permanent suppression, and invalid formats with 90-day suppression.',
            'Quiet-hours enforcement defaults to 8am-9pm consumer local time and is IANA timezone-aware per location.',
        ],
    },
    {
        title: 'Tier 2 - At-contact opt-out',
        icon: Siren,
        points: [
            'Inbound SMS is scanned for 9 opt-out keywords before any CRM push.',
            'On match, the platform writes immediately to the suppression store, tags the message as opt_out_received, and protects the contact from in-flight cadence activity.',
            'Email opt-outs are distinguished from bounces: self_unsubscribed, hard_bounce, and soft_bounce each carry their own suppression policy, with indefinite retention for explicit opt-outs.',
        ],
    },
    {
        title: 'Tier 3 - Cross-channel propagation and audit',
        icon: Archive,
        points: [
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

const auditStores = [
    ['Messaging audit log', 'Every opt-out, DNC block, auto-suppression, and PII redaction event with structured detail.'],
    ['MPI consent records', 'JSONB consent record per trade-in submission, including IP, user agent, and exact disclosure text.'],
    ['VQSign signer records', 'OTP events, ESIGN disclosure acceptance, signature IP, geolocation, user agent, SHA-256 document integrity hash, and revision history.'],
    ['Message archive', 'Nightly archive of messages older than 90 days, with intent and delivery metadata preserved.'],
    ['Email send registry', 'Per-send status, bounce type, suppression policy, and reason.'],
];

const signatureControls = [
    'Email OTP verification: 6-digit code, 10-minute expiry, and 5-attempt rate limit',
    'ESIGN Act disclosure: signer must explicitly accept before any signature is captured',
    'Cryptographically secure access tokens: 64-character hex generated via crypto.getRandomValues with 30-day expiry',
    'Document integrity: SHA-256 hash verified on document load and again before signing; signing is blocked on mismatch',
    'Signature encryption: AES-256-GCM in a server-side Edge Function, with the key never exposed to the client',
    'Per-signer audit trail: IP address, geolocation, user agent, and timestamps for sent, viewed, signed, and declined events',
];

const carrierControls = [
    'All sending numbers registered under A2P 10DLC with brand and campaign vetting',
    'Carrier-aware routing: line type and carrier name retrieved on every new number, cached for 90 days, and used to route or suppress',
    'Auto-suppression on permanent failure: permanent carrier errors automatically suppress the number with the appropriate TTL',
    'Webhook signature verification: every carrier callback is cryptographically verified with a timestamp window for replay protection',
];

const securityControls = [
    'Encryption in transit: TLS on all customer, VisQuanta, and partner traffic',
    'Encryption at rest: platform-managed database encryption, with AES-256-GCM for signatures',
    'Credential management: environment-scoped credentials, never committed to source, with service-role keys kept server-side only',
    'Access control: role-based and location-scoped, with a documented Access Control Policy',
    'Documented policies available on request: SMS PII Handling Policy, Security Controls Inventory, Access Control Policy, and Incident Response Plan',
];

const pageLinks = [
    ['Responsibility Model', '#responsibility'],
    ['Suppression Stack', '#suppression'],
    ['Consent Records', '#consent'],
    ['PII Redaction', '#pii-redaction'],
    ['Recording Controls', '#recording'],
    ['Audit Trail', '#audit'],
    ['Electronic Signature', '#signature'],
    ['Carrier Compliance', '#carrier'],
    ['Security Posture', '#security'],
    ['Contact', '#contact'],
];

function SectionShell({
    id,
    icon: Icon,
    eyebrow,
    title,
    children,
}: {
    id: string;
    icon: typeof Shield;
    eyebrow: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section id={id} className="scroll-mt-32 rounded-3xl border border-white/10 bg-[#080808] p-6 md:p-8">
            <div className="mb-6 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#FF7404]/30 bg-[#FF7404]/10 text-[#FF7404]">
                    <Icon className="h-5 w-5" />
                </div>
                <div>
                    <p className="mb-2 text-[10px] font-black uppercase tracking-[0.35em] text-[#FF7404]">{eyebrow}</p>
                    <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">{title}</h2>
                </div>
            </div>
            {children}
        </section>
    );
}

function CheckList({ items }: { items: string[] }) {
    return (
        <ul className="space-y-3">
            {items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/65">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#FF7404]" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

export default function CompliancePage() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-[#020202] text-white selection:bg-[#FF7404] selection:text-black">
            <Navigation />

            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-enterprise-grid opacity-[0.035]" />
                <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#FF7404]/10 blur-[180px]" />
                <div className="absolute bottom-0 right-0 h-[560px] w-[560px] rounded-full bg-emerald-500/5 blur-[150px]" />
            </div>

            <section className="relative z-10 border-b border-white/5 pt-36 pb-16 md:pt-52 md:pb-24">
                <div className="container-wide">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-black shadow-[0_0_60px_rgba(255,116,4,0.18)]">
                            <ClipboardCheck className="h-10 w-10 text-[#FF7404]" />
                        </div>
                        <p className="mb-6 text-[10px] font-black uppercase tracking-[0.42em] text-[#FF7404]">
                            Public Control Inventory
                        </p>
                        <h1 className="mb-6 text-5xl font-black uppercase leading-[0.9] tracking-tighter text-white md:text-7xl lg:text-8xl">
                            Compliance <br />
                            <span className="text-transparent border-text">Controls</span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
                            Concrete controls VisQuanta uses to support dealership messaging, consent records, data handling, auditability, electronic signatures, and carrier readiness.
                        </p>
                        <p className="mt-5 text-xs uppercase tracking-widest text-white/35">Last updated: December 17, 2025</p>
                        <LegalDocsNav active="compliance" className="mt-10" />
                    </div>
                </div>
            </section>

            <section className="relative z-10 py-12 md:py-20">
                <div className="container-wide grid gap-8 lg:grid-cols-12">
                    <aside className="lg:col-span-3">
                        <div className="sticky top-28 rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">On this page</p>
                            <nav className="space-y-1" aria-label="Compliance sections">
                                {pageLinks.map(([label, href]) => (
                                    <a
                                        key={href}
                                        href={href}
                                        className="block rounded-xl px-3 py-2 text-sm text-white/55 transition-colors hover:bg-white/[0.04] hover:text-white"
                                    >
                                        {label}
                                    </a>
                                ))}
                            </nav>
                            <div className="mt-6 border-t border-white/10 pt-5">
                                <a href="mailto:compliance@visquanta.com" className="inline-flex items-center gap-2 text-sm font-bold text-[#FF7404] hover:underline">
                                    <Mail className="h-4 w-4" />
                                    compliance@visquanta.com
                                </a>
                            </div>
                        </div>
                    </aside>

                    <div className="space-y-8 lg:col-span-9">
                        <SectionShell id="responsibility" icon={ShieldCheck} eyebrow="Section 1" title="Responsibility Model">
                            <p className="mb-6 text-sm leading-relaxed text-white/60">
                                VisQuanta provides platform controls that help businesses manage contact eligibility, consent evidence, suppression, redaction, and audit trails before messages, calls, or signatures move downstream.
                            </p>
                            <CheckList items={responsibilityControls} />
                        </SectionShell>

                        <SectionShell id="suppression" icon={MessageSquareOff} eyebrow="Section 2" title="Suppression Stack">
                            <div className="grid gap-4">
                                {suppressionTiers.map((tier) => (
                                    <div key={tier.title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                                        <div className="mb-4 flex items-center gap-3">
                                            <tier.icon className="h-5 w-5 text-[#FF7404]" />
                                            <h3 className="font-bold text-white">{tier.title}</h3>
                                        </div>
                                        <CheckList items={tier.points} />
                                    </div>
                                ))}
                            </div>
                        </SectionShell>

                        <SectionShell id="consent" icon={FileText} eyebrow="Section 3" title="Consent Capture & Records">
                            <p className="mb-5 text-sm leading-relaxed text-white/60">Every consent record captured by the platform stores:</p>
                            <CheckList
                                items={[
                                    'The exact disclosure text shown to the consumer at the moment of capture',
                                    'Channels consented to: SMS, voice, and email tracked separately',
                                    'Privacy Policy URL and Terms & Conditions URL linked at time of capture',
                                    'Client-side timestamp plus authoritative server-side timestamp',
                                    'IP address from x-forwarded-for',
                                    'User agent',
                                    'Immutable JSONB storage, queryable for compliance review',
                                ]}
                            />
                            <div className="mt-6 rounded-2xl border border-[#FF7404]/25 bg-[#FF7404]/5 p-5">
                                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF7404]">Example: Trade-In Tool Consent Capture</p>
                                <blockquote className="border-l-2 border-[#FF7404] pl-4 text-sm italic leading-relaxed text-white/75">
                                    "By submitting, I agree to be contacted by [dealership] about this trade-in via phone calls, SMS/text, and email, including via automated means. Message & data rates may apply. Consent is not a condition of purchase. Reply STOP to opt out of texts."
                                </blockquote>
                                <p className="mt-4 text-sm leading-relaxed text-white/60">
                                    This language is TCPA and CAN-SPAM aligned: express written consent for automated calls and texts, the "not a condition of purchase" carve-out, and STOP acknowledgement. Privacy Policy and Terms URLs are stored once at the business level and propagated to every consent point.
                                </p>
                            </div>
                        </SectionShell>

                        <SectionShell id="pii-redaction" icon={Database} eyebrow="Section 4" title="Data Handling & PII Redaction">
                            <p className="mb-6 text-sm leading-relaxed text-white/60">
                                All inbound and outbound SMS pass through a single redaction chokepoint before storage or downstream forwarding.
                            </p>
                            <div className="overflow-hidden rounded-2xl border border-white/10">
                                <table className="w-full min-w-[680px] text-left text-sm">
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
                                                <td className="px-5 py-4 font-medium text-white/85">{type}</td>
                                                <td className="px-5 py-4">{detection}</td>
                                                <td className="px-5 py-4 font-mono text-xs text-[#FF7404]">{replacement}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-6 grid gap-4 md:grid-cols-2">
                                <p className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-sm leading-relaxed text-white/60">
                                    URLs, vehicle VINs, prices, names, and addresses are preserved so legitimate dealership conversation flow is not impacted.
                                </p>
                                <p className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-sm leading-relaxed text-white/60">
                                    When redaction fires, the audit log captures type and count only. Raw values are never written to logs, never stored, and never forwarded to third parties.
                                </p>
                            </div>
                            <p className="mt-5 text-xs uppercase tracking-widest text-white/35">
                                Validated with 81 unit tests and a 247,000-message dry-run before production rollout.
                            </p>
                        </SectionShell>

                        <SectionShell id="recording" icon={PhoneCall} eyebrow="Section 5" title="Recording Disclosure Controls">
                            <CheckList
                                items={[
                                    'Per-number controls for recording on/off, transcription on/off, and consent mode',
                                    'Verbal consent mode: disclosure spoken at the start of the call',
                                    'Auto-beep mode: audible tone with IVR-delivered disclosure for jurisdictions requiring two-party consent',
                                    'Recording URL, recording duration, and transcription confidence captured per call',
                                    'Status badge surfaces current configuration to the operator, such as Recording active, Verbal consent, Transcription on',
                                    "State-specific disclosure language remains the business's responsibility in consultation with counsel; the platform provides controls and audit trail",
                                ]}
                            />
                        </SectionShell>

                        <SectionShell id="audit" icon={TableProperties} eyebrow="Section 6" title="Audit Trail & Retention">
                            <p className="mb-6 text-sm leading-relaxed text-white/60">The platform writes to dedicated, append-only audit stores:</p>
                            <div className="grid gap-3">
                                {auditStores.map(([title, detail]) => (
                                    <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                                        <h3 className="mb-2 font-bold text-white">{title}</h3>
                                        <p className="text-sm leading-relaxed text-white/60">{detail}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-sm leading-relaxed text-white/60">
                                All change-management activity is tracked through a dated, append-only changelog discipline with 250+ documented production changes, giving auditors a reconstruction path for any feature or control.
                            </p>
                        </SectionShell>

                        <SectionShell id="signature" icon={FileSignature} eyebrow="Section 7" title="Identity Verification for Electronic Signature">
                            <p className="mb-5 text-sm leading-relaxed text-white/60">
                                Documents requiring electronic signature go through VQSign, built to ESIGN Act and UETA standards.
                            </p>
                            <CheckList items={signatureControls} />
                        </SectionShell>

                        <SectionShell id="carrier" icon={RadioTower} eyebrow="Section 8" title="Carrier & A2P Compliance">
                            <CheckList items={carrierControls} />
                        </SectionShell>

                        <SectionShell id="security" icon={Lock} eyebrow="Section 9" title="Platform Security Posture">
                            <CheckList items={securityControls} />
                            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5 text-sm leading-relaxed text-white/55">
                                <p>
                                    VisQuanta does not currently represent itself as SOC 2 certified. Enterprise customers and auditors can request supporting control documentation through the compliance contact below.
                                </p>
                            </div>
                        </SectionShell>

                        <SectionShell id="contact" icon={Mail} eyebrow="Section 10" title="Opt-out & Escalation Contact">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-white/40">Compliance Contact</p>
                                    <a href="mailto:compliance@visquanta.com" className="text-lg font-bold text-[#FF7404] hover:underline">
                                        compliance@visquanta.com
                                    </a>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-white/40">Escalation Form</p>
                                    <Link href="/contact?topic=compliance" className="text-lg font-bold text-[#FF7404] hover:underline">
                                        /contact?topic=compliance
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                                <CheckList
                                    items={[
                                        'Response SLA: acknowledgement within 1 business day',
                                        'Documentation requests: PII handling, security controls, access control, and incident response documents available to enterprise customers and auditors on request',
                                    ]}
                                />
                            </div>
                        </SectionShell>

                        <div className="rounded-3xl border border-[#FF7404]/25 bg-[#FF7404]/10 p-6 md:p-8">
                            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                <div>
                                    <p className="mb-2 text-[10px] font-black uppercase tracking-[0.35em] text-[#FF7404]">Need documentation?</p>
                                    <h2 className="text-2xl font-black text-white">Request compliance materials</h2>
                                </div>
                                <a
                                    href="mailto:compliance@visquanta.com?subject=Compliance%20Documentation%20Request"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF7404] px-6 py-3 text-sm font-black uppercase tracking-wider text-black transition-transform hover:scale-[1.02]"
                                >
                                    <KeyRound className="h-4 w-4" />
                                    Request Docs
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
