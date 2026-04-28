'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LegalDocsNav from '@/components/LegalDocsNav';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
    Shield, Lock, Mail, Phone, MapPin, Globe, Database,
    UserCheck, RefreshCcw, ShieldAlert, Binary, Cpu,
    ScrollText, Users, Scale, Share2, Clock, Cookie
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

const sections = [
    { id: '01', label: 'Introduction', icon: ScrollText },
    { id: '02', label: 'Who We Are', icon: Users },
    { id: '03', label: 'Information We Collect', icon: Database },
    { id: '04', label: 'How We Use Information', icon: Cpu },
    { id: '05', label: 'Legal Basis (GDPR)', icon: Scale },
    { id: '06', label: 'How We Share Information', icon: Share2 },
    { id: '07', label: 'International Transfers', icon: Globe },
    { id: '08', label: 'Data Retention', icon: Clock },
    { id: '09', label: 'Security', icon: Lock },
    { id: '10', label: 'Your Privacy Rights', icon: UserCheck },
    { id: '11', label: 'Cookies', icon: Cookie },
    { id: '12', label: 'Children’s Privacy', icon: ShieldAlert },
    { id: '13', label: 'Changes to This Policy', icon: RefreshCcw },
    { id: '14', label: 'Contact', icon: Mail },
];

export default function PrivacyPolicyPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <main ref={containerRef} className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black overflow-x-hidden">
            <Navigation />

            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#FF7404] origin-left z-[110]"
                style={{ scaleX }}
            />

            {/* RADICON BACKGROUND */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-enterprise-grid opacity-[0.03]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#FF7404]/5 blur-[160px] rounded-full opacity-40" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 blur-[160px] rounded-full opacity-20" />
            </div>

            {/* HERO SECTION */}
            <section className="relative pt-64 pb-32 border-b border-white/5 overflow-hidden z-10">
                <div className="container px-4 mx-auto relative">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative mb-12"
                        >
                            <div className="absolute inset-0 bg-[#FF7404]/20 blur-3xl rounded-full" />
                            <div className="relative w-24 h-24 rounded-3xl bg-black border border-white/10 flex items-center justify-center">
                                <ShieldAlert className="w-12 h-12 text-[#FF7404]" />
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border-2 border-dashed border-[#FF7404]/30 rounded-3xl scale-125"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[#FF7404] text-[10px] uppercase tracking-[0.4em] font-black mb-8 border-l-[#FF7404] border-l-2"
                        >
                            Data Protection Protocol
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.85]"
                        >
                            Privacy <br />
                            <span className="text-transparent border-text">Policy</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-6 text-xs font-mono text-zinc-500"
                        >
                            <span className="flex items-center gap-2">
                                <Binary className="w-3 h-3 text-[#FF7404]" />
                                DOC_ID: VQ-PRV-2026
                            </span>
                            <span className="w-1 h-1 rounded-full bg-zinc-800" />
                            <span className="flex items-center gap-2">
                                <Cpu className="w-3 h-3 text-[#FF7404]" />
                                REV: 22.04.2026
                            </span>
                        </motion.div>

                        <LegalDocsNav active="privacy" className="mt-12" />
                        {/* TODO(compliance legal review): Add a one-line reference to /compliance for call and SMS suppression controls after counsel approves the wording. */}
                    </div>
                </div>
            </section>

            {/* CONTENT GRID */}
            <section className="py-32 relative z-10">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-[300px_1fr] gap-20">

                        {/* SIDEBAR NAV (Desktop) */}
                        <aside className="hidden lg:block sticky top-32 h-fit">
                            <div className="space-y-2 border-l border-white/5 pl-6">
                                {sections.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#section-${item.id}`}
                                        className="block text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-500 hover:text-[#FF7404] transition-colors py-2 text-left w-full group"
                                    >
                                        <span className="text-[9px] text-zinc-700 mr-3 group-hover:text-[#FF7404]/50">{item.id}</span>
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </aside>

                        {/* MAIN CONTENT */}
                        <div className="max-w-4xl space-y-24">

                            {/* 01 - Introduction */}
                            <motion.div id="section-01" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_01</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    Introduction
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm space-y-4">
                                    <p className="text-zinc-400 text-lg leading-relaxed font-light">
                                        This Privacy Policy describes how <span className="text-white font-medium">Visquanta LLC</span> (&quot;Visquanta&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, shares, and protects personal information when you visit <span className="text-white">www.visquanta.com</span>, create an account, use our AI-powered messaging and voice services, or otherwise interact with us (collectively, the &quot;Services&quot;).
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        By using the Services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree, please do not use the Services. This policy should be read alongside our <Link href="/terms-conditions" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">Terms &amp; Conditions</Link>, <Link href="/cookie-policy" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">Cookie Policy</Link>, and the <Link href="/trust" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">Trust &amp; Compliance</Link> page.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 02 - Who We Are */}
                            <motion.div id="section-02" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_02</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    Who We Are
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm space-y-4">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        Visquanta LLC is a US-based technology company that builds AI-powered communication tools for businesses, including automated SMS and voice agent platforms. We operate the Services from our registered office in Texas.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        For personal information collected directly through our website and for our marketing activities, Visquanta acts as the <span className="text-white font-semibold">data controller</span>. For personal information our customers upload to the platform to operate on behalf of their own end users (for example, a dealer&apos;s CRM records or a prospect&apos;s SMS messages), Visquanta acts as a <span className="text-white font-semibold">data processor</span> under the terms of our Data Processing Addendum. In that role, our customer is the controller and determines how that data is used.
                                    </p>
                                    <div className="mt-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                                        <div className="text-[10px] font-mono text-[#FF7404] uppercase tracking-widest">Registered Office</div>
                                        <p className="text-zinc-300 text-sm leading-relaxed">
                                            Visquanta LLC<br />
                                            2001 Timberloch Place, Suite 500<br />
                                            The Woodlands, TX 77380<br />
                                            United States
                                        </p>
                                        <p className="text-zinc-500 text-xs pt-2">General contact: <a href="mailto:info@visquanta.com" className="text-[#FF7404] hover:underline">info@visquanta.com</a></p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* 03 - Information We Collect */}
                            <motion.div id="section-03" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_03</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    Information We Collect
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="space-y-6">
                                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                                        <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-3">Information you provide directly</h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                            Account and contact details (name, business name, email, phone), billing information (handled by our payment processor), content you submit through forms, and support or sales communications.
                                        </p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                                        <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-3">Customer Data you upload to the platform</h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                            Information about your own end users (such as prospect contact records, lead information, and SMS or voice conversation history) that you submit to the Services. We process this strictly on your behalf as a processor, in accordance with our Data Processing Addendum.
                                        </p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                                        <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-3">Technical and usage information</h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                            IP address, browser type and version, device and operating system, referring URL, pages visited, time and date of visit, and interaction events. We use standard server logs and analytics tools to collect this.
                                        </p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                                        <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-3">Cookies and similar technologies</h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                            We use essential cookies to operate the website and optional analytics cookies to understand how people use it. See our <Link href="/cookie-policy" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">Cookie Policy</Link> for details and how to opt out.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-emerald-500/[0.03] border border-emerald-500/10">
                                        <Shield className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                        <p className="text-xs font-mono uppercase tracking-widest text-emerald-500/80">
                                            We do not knowingly collect government IDs, biometric data, financial account numbers, or health information through our Services.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* 04 - How We Use Information */}
                            <motion.div id="section-04" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_04</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    How We Use Information
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm space-y-4">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        We use the information we collect to:
                                    </p>
                                    <ul className="text-zinc-400 text-base leading-relaxed font-light space-y-2 list-disc list-inside pl-2">
                                        <li>Provide, maintain, and operate the Services, including authenticating accounts and delivering the features you subscribe to;</li>
                                        <li>Process your payments and manage your subscription through our payment processor;</li>
                                        <li>Respond to support requests and sales inquiries;</li>
                                        <li>Secure, monitor, and improve the Services, including fraud prevention and abuse detection;</li>
                                        <li>Send operational and administrative communications (such as security alerts, billing notices, and service updates);</li>
                                        <li>With your consent, send product news and marketing communications, which you can unsubscribe from at any time;</li>
                                        <li>Comply with legal obligations, enforce our <Link href="/terms-conditions" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">Terms &amp; Conditions</Link>, and protect the rights, property, or safety of Visquanta, our customers, or others.</li>
                                    </ul>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light pt-2">
                                        When our customers use the platform to send SMS or voice communications through our AI agents, only limited fields are passed to the AI model. A complete description of what is and is not sent to AI sub-processors is maintained on our <Link href="/trust#ai-data" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">Trust &amp; Compliance</Link> page.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 05 - Legal Basis (GDPR) */}
                            <motion.div id="section-05" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_05</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    Legal Basis for Processing (GDPR)
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm space-y-4">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        If you are located in the European Economic Area, the United Kingdom, or Switzerland, we rely on the following legal bases for processing personal data:
                                    </p>
                                    <ul className="text-zinc-400 text-base leading-relaxed font-light space-y-3 list-disc list-inside pl-2">
                                        <li><span className="text-white font-semibold">Performance of a contract</span> — to provide the Services you have signed up for and to administer your account.</li>
                                        <li><span className="text-white font-semibold">Legitimate interests</span> — to operate, secure, and improve our Services, prevent fraud, and communicate with customers about the products they use, where those interests are not overridden by your rights and freedoms.</li>
                                        <li><span className="text-white font-semibold">Consent</span> — for marketing communications, optional analytics cookies, and any processing that requires your explicit consent. You may withdraw consent at any time.</li>
                                        <li><span className="text-white font-semibold">Legal obligation</span> — to comply with tax, accounting, and regulatory requirements and to respond to lawful requests from authorities.</li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* 06 - How We Share Information */}
                            <motion.div id="section-06" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_06</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    How We Share Information
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm space-y-4">
                                    <p className="text-zinc-300 text-base leading-relaxed font-medium">
                                        We do not sell personal information, and we do not share it for cross-context behavioral advertising.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        We share personal information only in the following circumstances:
                                    </p>
                                    <ul className="text-zinc-400 text-base leading-relaxed font-light space-y-3 list-disc list-inside pl-2">
                                        <li><span className="text-white font-semibold">Sub-processors and service providers</span> — vetted third parties that help us operate the Services (cloud hosting, AI model processing, messaging carriers, database, analytics, payments). Each is bound by a Data Processing Addendum or equivalent contract. Our current list is published at <Link href="/trust" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">visquanta.com/trust</Link>.</li>
                                        <li><span className="text-white font-semibold">Within your organization</span> — information tied to your account is accessible to users you authorize within your team.</li>
                                        <li><span className="text-white font-semibold">Legal requirements</span> — when required by law, court order, or government request, or to protect the rights, safety, or property of Visquanta, our customers, or the public.</li>
                                        <li><span className="text-white font-semibold">Business transfers</span> — in connection with a merger, acquisition, financing, or sale of assets, subject to equivalent privacy protections.</li>
                                        <li><span className="text-white font-semibold">With your consent</span> — in any other case where you direct us to share your information.</li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* 07 - International Transfers */}
                            <motion.div id="section-07" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_07</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    International Transfers
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm space-y-4">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        Visquanta is based in the United States, and our primary servers and sub-processors are located in the US or in other jurisdictions that may offer a different level of data protection than your home country.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        Where we transfer personal data of individuals located in the European Economic Area, United Kingdom, or Switzerland to a country not deemed adequate by the relevant authority, we rely on appropriate safeguards such as the European Commission&apos;s Standard Contractual Clauses (SCCs), the UK International Data Transfer Addendum, or equivalent mechanisms, and we ensure our sub-processors are contractually bound to protect your data to the same standard.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 08 - Data Retention */}
                            <motion.div id="section-08" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_08</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    Data Retention
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm space-y-4">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        We retain personal information only for as long as necessary to fulfil the purposes described in this policy, to provide the Services, to comply with legal obligations (such as tax and accounting record-keeping), to resolve disputes, and to enforce our agreements.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        Account information is retained for the life of your account and for a reasonable archive period after closure. Customer Data you upload to the Services is retained per the terms of your Order and our Data Processing Addendum; after termination, you may export your data for up to thirty (30) days, after which it will be deleted or anonymised in the ordinary course of business.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        Backup copies may persist for a limited period in our secure backup systems before being overwritten in the normal cycle.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 09 - Security */}
                            <motion.div id="section-09" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_09</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    Security
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm space-y-4">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        We maintain administrative, technical, and organizational safeguards designed to protect personal information, including:
                                    </p>
                                    <ul className="text-zinc-400 text-base leading-relaxed font-light space-y-2 list-disc list-inside pl-2">
                                        <li>Encryption in transit (TLS 1.2 or higher) and at rest (AES-256);</li>
                                        <li>Role-based access control and least-privilege principles for customer data;</li>
                                        <li>Automatic redaction of regulated personal data (Social Security numbers, payment card numbers, bank account and routing numbers, driver&apos;s license numbers, and dates of birth) at the SMS boundary, before any message is written to storage, synced to a CRM, or passed to an AI model &mdash; see <Link href="/trust#pii-redaction" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">Automatic PII Redaction</Link> on our Trust page for the full description;</li>
                                        <li>Regular review of our sub-processors and their compliance posture;</li>
                                        <li>Logging, monitoring, and alerting for security events.</li>
                                    </ul>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light pt-2">
                                        No method of transmission or storage is completely secure. If you have reason to believe your interaction with us is no longer secure, please contact us immediately at <a href="mailto:info@visquanta.com" className="text-[#FF7404] hover:underline">info@visquanta.com</a>. A fuller description of our security posture and the compliance of our sub-processors is available at <Link href="/trust#security" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">visquanta.com/trust</Link>.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 10 - Your Privacy Rights */}
                            <motion.div id="section-10" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_10</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    Your Privacy Rights
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm space-y-6">
                                    <div>
                                        <h3 className="text-white font-semibold text-base mb-2">General rights</h3>
                                        <p className="text-zinc-400 text-base leading-relaxed font-light">
                                            Depending on where you live, you may have the right to access the personal data we hold about you, request correction of inaccurate data, request deletion, request a copy in a portable format, object to or restrict certain processing, and withdraw consent where we rely on it.
                                        </p>
                                    </div>

                                    <div className="border-t border-white/5 pt-6">
                                        <h3 className="text-white font-semibold text-base mb-2">Residents of California (CCPA / CPRA)</h3>
                                        <p className="text-zinc-400 text-base leading-relaxed font-light mb-3">
                                            If you are a California resident, you have the right to:
                                        </p>
                                        <ul className="text-zinc-400 text-base leading-relaxed font-light space-y-2 list-disc list-inside pl-2">
                                            <li>Know what personal information we collect, use, disclose, and retain, and the sources and purposes;</li>
                                            <li>Request deletion of personal information we have collected from you (subject to legal exceptions);</li>
                                            <li>Request correction of inaccurate personal information;</li>
                                            <li>Opt out of the &quot;sale&quot; or &quot;sharing&quot; of personal information — we do not sell or share personal information for cross-context behavioral advertising;</li>
                                            <li>Limit use and disclosure of sensitive personal information — we do not knowingly collect sensitive personal information through the Services;</li>
                                            <li>Non-discrimination for exercising your rights.</li>
                                        </ul>
                                    </div>

                                    <div className="border-t border-white/5 pt-6">
                                        <h3 className="text-white font-semibold text-base mb-2">Residents of the EU, UK, or Switzerland</h3>
                                        <p className="text-zinc-400 text-base leading-relaxed font-light">
                                            You have the rights described above plus the right to lodge a complaint with your national data protection authority if you believe we have not handled your personal data in accordance with applicable law. We encourage you to contact us first so we can address your concerns directly.
                                        </p>
                                    </div>

                                    <div className="border-t border-white/5 pt-6">
                                        <h3 className="text-white font-semibold text-base mb-2">How to exercise your rights</h3>
                                        <p className="text-zinc-400 text-base leading-relaxed font-light">
                                            To exercise any of these rights, email <a href="mailto:info@visquanta.com" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">info@visquanta.com</a>. We will respond within thirty (30) days (or forty-five (45) days for complex requests, with notice). We may need to verify your identity before fulfilling a request. If you are submitting a request on behalf of another person, we may need proof of your authorization.
                                        </p>
                                        <p className="text-zinc-400 text-base leading-relaxed font-light pt-3">
                                            Where personal data is processed by us on behalf of one of our business customers (for example, a prospect&apos;s SMS conversation), please direct your request to the business that collected your information; we will support them in responding to you.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* 11 - Cookies */}
                            <motion.div id="section-11" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_11</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    Cookies
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm space-y-4">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        We use cookies and similar technologies to operate the website, remember your preferences, and understand how visitors use the Services. Essential cookies are required for the Services to function. Optional cookies (such as analytics) are only set with your consent where required by law.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        A full list of the cookies we use, along with instructions on how to manage them, is available in our <Link href="/cookie-policy" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">Cookie Policy</Link>. You can also control cookies through your browser settings. We do not currently respond to &quot;Do Not Track&quot; browser signals, but we honor opt-outs provided through our cookie banner.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 12 - Children's Privacy */}
                            <motion.div id="section-12" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_12</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    Children&apos;s Privacy
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm space-y-4">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        The Services are intended for business use and are not directed to children under the age of 13 (or the equivalent minimum age under applicable local law). We do not knowingly collect personal information from children.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        If you believe that a child has provided us with personal information, please contact us at <a href="mailto:info@visquanta.com" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">info@visquanta.com</a> and we will take steps to delete that information.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 13 - Changes to This Policy */}
                            <motion.div id="section-13" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_13</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    Changes to This Policy
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm space-y-4">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other operational reasons. When we make material changes, we will update the revision date at the top of this page and, where appropriate, provide additional notice such as an email to account administrators or a prominent notice on the Services.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        Your continued use of the Services after the updated policy takes effect constitutes acceptance of the changes. We encourage you to review this page periodically.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 14 - Contact */}
                            <motion.div id="section-14" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_14</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    Contact
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light mb-8">
                                        Questions about this Privacy Policy, or requests to exercise your privacy rights, should be directed to our team. For data-processing-addendum requests and sub-processor compliance documentation, please also see the <Link href="/trust" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">Trust &amp; Compliance</Link> page.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <a href="mailto:info@visquanta.com" className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 group hover:border-[#FF7404]/30 transition-all block">
                                            <Mail className="w-5 h-5 text-[#FF7404] mb-4" />
                                            <div className="text-white font-bold text-sm mb-1 uppercase tracking-widest">Email</div>
                                            <div className="text-zinc-500 text-xs font-mono">info@visquanta.com</div>
                                        </a>
                                        <a href="tel:+17866866554" className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 group hover:border-[#FF7404]/30 transition-all block">
                                            <Phone className="w-5 h-5 text-[#FF7404] mb-4" />
                                            <div className="text-white font-bold text-sm mb-1 uppercase tracking-widest">Phone</div>
                                            <div className="text-zinc-500 text-xs font-mono">+1 786-686-6554</div>
                                        </a>
                                        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                                            <MapPin className="w-5 h-5 text-[#FF7404] mb-4" />
                                            <div className="text-white font-bold text-sm mb-1 uppercase tracking-widest">Address</div>
                                            <div className="text-zinc-500 text-xs leading-relaxed">
                                                2001 Timberloch Place, Suite 500,<br />
                                                The Woodlands, TX 77380
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx global>{`
                .border-text {
                    -webkit-text-stroke: 1px rgba(255,255,255,0.2);
                }
            `}</style>
        </main>
    );
}
