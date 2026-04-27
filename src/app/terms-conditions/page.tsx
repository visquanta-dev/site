'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LegalDocsNav from '@/components/LegalDocsNav';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
    FileText, Shield, Mail, Phone,
    Scale, AlertTriangle, ScrollText,
    Bookmark, Lock, Globe, Zap, Cpu, RefreshCcw,
    Users, CreditCard, Power, Server, Briefcase
} from 'lucide-react';
import { useRef } from 'react';

const sections = [
    { id: '01', label: 'Acceptance of Terms', icon: ScrollText },
    { id: '02', label: 'Services', icon: Server },
    { id: '03', label: 'Eligibility & Accounts', icon: Users },
    { id: '04', label: 'Acceptable Use', icon: Shield },
    { id: '05', label: 'Customer Data & Privacy', icon: Lock },
    { id: '06', label: 'Fees & Billing', icon: CreditCard },
    { id: '07', label: 'Term & Termination', icon: Power },
    { id: '08', label: 'Intellectual Property', icon: Bookmark },
    { id: '09', label: 'Third-Party Services', icon: Globe },
    { id: '10', label: 'Warranties & Liability', icon: AlertTriangle },
    { id: '11', label: 'Indemnification', icon: Briefcase },
    { id: '12', label: 'General Provisions', icon: FileText },
    { id: '13', label: 'Governing Law', icon: Scale },
    { id: '14', label: 'Contact', icon: Mail },
];

export default function TermsConditionsPage() {
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
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-[1200px] h-[600px] bg-[#FF7404]/5 blur-[160px] rounded-full opacity-30" />
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full opacity-20" />
            </div>

            {/* HERO SECTION */}
            <section className="relative pt-64 pb-32 border-b border-white/5 overflow-hidden z-10">
                <div className="container px-4 mx-auto relative text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative mb-12 inline-block mx-auto"
                    >
                        <div className="absolute inset-0 bg-[#FF7404]/20 blur-3xl rounded-full" />
                        <div className="relative w-24 h-24 rounded-3xl bg-black border border-white/10 flex items-center justify-center">
                            <Scale className="w-12 h-12 text-[#FF7404]" />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-2 border-dashed border-[#FF7404]/30 rounded-3xl scale-110"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[#FF7404] text-[10px] uppercase tracking-[0.4em] font-black mb-8"
                    >
                        Master Service Framework
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.85]"
                    >
                        Terms & <br />
                        <span className="text-transparent border-text">Conditions</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center items-center gap-6 text-xs font-mono text-zinc-500"
                    >
                        <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                            <Bookmark className="w-3 h-3 text-[#FF7404]" />
                            DOC_ID: VQ-MSF-2026
                        </span>
                        <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                            <Zap className="w-3 h-3 text-[#FF7404]" />
                            STATUS: ACTIVE
                        </span>
                        <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                            <Cpu className="w-3 h-3 text-[#FF7404]" />
                            EFFECTIVE: 22.04.2026
                        </span>
                    </motion.div>

                    <LegalDocsNav active="terms" className="mt-12" />
                    {/* TODO(compliance legal review): Add a clause requiring businesses to comply with TCPA and related SMS/call rules using Visquanta's available controls after counsel approves the wording. */}
                </div>
            </section>

            {/* CONTENT GRID */}
            <section className="py-32 relative z-10">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-[300px_1fr] gap-20">

                        {/* SIDEBAR NAV (Desktop) */}
                        <aside className="hidden lg:block sticky top-32 h-fit">
                            <div className="space-y-1">
                                {sections.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#section-${item.id}`}
                                        className="group flex flex-col gap-1 py-4 text-left border-b border-white/5 w-full hover:bg-white/[0.02] px-4 transition-all"
                                    >
                                        <span className="text-[9px] font-mono text-[#FF7404] opacity-50">SECTION {item.id}</span>
                                        <span className="text-[11px] uppercase tracking-widest font-black text-zinc-500 group-hover:text-white transition-colors">{item.label}</span>
                                    </a>
                                ))}
                            </div>
                        </aside>

                        {/* MAIN CONTENT */}
                        <div className="max-w-4xl space-y-24">

                            {/* 01 - Acceptance of Terms */}
                            <motion.div id="section-01" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center border border-[#FF7404]/20">
                                        <ScrollText className="w-6 h-6 text-[#FF7404]" />
                                    </div>
                                    Acceptance of Terms
                                </h2>
                                <div className="p-12 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-md space-y-4">
                                    <p className="text-zinc-400 text-lg leading-relaxed font-light">
                                        These Terms and Conditions (&quot;Terms&quot;) form a binding agreement between you (&quot;Customer&quot;, &quot;you&quot;, or &quot;your&quot;) and <span className="text-white font-bold">Visquanta LLC</span> (&quot;Visquanta&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a company organized in the United States, governing your access to and use of the Visquanta website at <span className="text-white">www.visquanta.com</span> and any products, platforms, software, or services we make available (collectively, the &quot;Services&quot;).
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        By creating an account, executing an order form, clicking &quot;accept&quot;, or otherwise accessing or using the Services, you agree to these Terms. If you are accepting these Terms on behalf of a company or other legal entity, you represent that you have authority to bind that entity, and in such case &quot;you&quot; refers to that entity. If you do not agree to these Terms, you may not use the Services.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        These Terms may be supplemented by an executed order form, master services agreement, data processing addendum, or statement of work between you and Visquanta (each, an &quot;Order&quot;). In the event of a conflict, the Order controls for the specific subject matter it covers.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 02 - Services */}
                            <motion.div id="section-02" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center border border-[#FF7404]/20">
                                        <Server className="w-6 h-6 text-[#FF7404]" />
                                    </div>
                                    Services
                                </h2>
                                <div className="p-12 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-md space-y-4">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        Visquanta provides an AI-powered platform that enables customers to automate communications with their own contacts, including SMS and voice agent workflows, campaign orchestration, lead reactivation, and related operational tooling. The specific features, usage limits, and deliverables made available to you are described in the applicable Order or product documentation.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        We may modify, update, or enhance the Services from time to time, including by adding, changing, or removing features. We will not materially reduce the core functionality you have contracted for during the term of your Order without notice. Beta, trial, or early-access features are provided &quot;as is&quot; and may be changed or discontinued at any time.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        You are responsible for obtaining and maintaining the network connections, hardware, and other equipment required to access and use the Services.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 03 - Eligibility & Accounts */}
                            <motion.div id="section-03" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center border border-[#FF7404]/20">
                                        <Users className="w-6 h-6 text-[#FF7404]" />
                                    </div>
                                    Eligibility & Accounts
                                </h2>
                                <div className="p-12 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-md space-y-4">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        The Services are intended for business use. You must be at least 18 years old and legally capable of entering into a binding contract to use the Services. The Services are not directed at, and may not be used by, children under the age of 13 or any individual barred from receiving the Services under applicable law.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        You are responsible for maintaining the confidentiality of your account credentials, for all activity that occurs under your account, and for ensuring that each user you invite complies with these Terms. You must notify us promptly at <span className="text-[#FF7404]">info@visquanta.com</span> of any unauthorized access to your account.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        You may not share, transfer, or sublicense your account to any other person or entity without our prior written consent.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 04 - Acceptable Use */}
                            <motion.div id="section-04" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center border border-[#FF7404]/20">
                                        <Shield className="w-6 h-6 text-[#FF7404]" />
                                    </div>
                                    Acceptable Use
                                </h2>
                                <div className="p-12 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-md space-y-4">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        You agree not to, and not to permit any third party to, use the Services to:
                                    </p>
                                    <ul className="text-zinc-400 text-base leading-relaxed font-light space-y-2 list-disc list-inside pl-2">
                                        <li>Send unsolicited commercial messages, spam, or communications that violate the Telephone Consumer Protection Act (TCPA), the CAN-SPAM Act, 10DLC/carrier requirements, or any similar law or carrier policy in any jurisdiction;</li>
                                        <li>Contact any individual who has not provided legally adequate consent, or who has opted out, and you represent that you hold such consent for every contact you upload to the Services;</li>
                                        <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity;</li>
                                        <li>Upload, transmit, or generate content that is unlawful, defamatory, obscene, fraudulent, harassing, hateful, infringing, or otherwise objectionable;</li>
                                        <li>Interfere with, probe, scan, or test the vulnerability of the Services or any system or network connected to the Services without prior written authorization;</li>
                                        <li>Attempt to reverse-engineer, decompile, or otherwise derive the source code of the Services, except to the extent such restriction is prohibited by applicable law;</li>
                                        <li>Use the Services to train, benchmark, or develop a competing product or service;</li>
                                        <li>Resell, lease, or otherwise make the Services available to third parties outside the scope of your Order;</li>
                                        <li>Bypass any access or usage controls, rate limits, or authentication mechanisms.</li>
                                    </ul>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        We reserve the right to investigate suspected violations, to suspend or terminate accounts involved, and to cooperate with law enforcement where appropriate.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 05 - Customer Data & Privacy */}
                            <motion.div id="section-05" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center border border-[#FF7404]/20">
                                        <Lock className="w-6 h-6 text-[#FF7404]" />
                                    </div>
                                    Customer Data & Privacy
                                </h2>
                                <div className="p-12 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-md space-y-4">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        &quot;Customer Data&quot; means any data, content, or information (including personal data) that you or your end users submit to, transmit through, or generate using the Services. As between you and Visquanta, you own all Customer Data and grant us a limited, non-exclusive, worldwide license to host, process, transmit, and use Customer Data solely to provide, maintain, secure, and improve the Services, and as otherwise permitted in these Terms or an Order.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        You are responsible for the accuracy, quality, integrity, and legality of Customer Data, for obtaining all consents required to submit it to us, and for ensuring your use of Customer Data complies with all applicable laws, including data-protection and telemarketing laws.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        Our collection and use of personal data is described in our <a href="/privacy-policy" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">Privacy Policy</a>. Where we process personal data on your behalf as a processor under applicable data-protection law, the terms of our Data Processing Addendum (&quot;DPA&quot;) apply. A current DPA is available on request at <span className="text-[#FF7404]">compliance@visquanta.com</span>. Our sub-processor list is maintained at <a href="/trust" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">visquanta.com/trust</a>.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 06 - Fees & Billing */}
                            <motion.div id="section-06" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center border border-[#FF7404]/20">
                                        <CreditCard className="w-6 h-6 text-[#FF7404]" />
                                    </div>
                                    Fees & Billing
                                </h2>
                                <div className="p-12 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-md space-y-4">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        You agree to pay the fees set out in the applicable Order or published pricing for the Services you have selected, plus any usage-based charges (including messaging, voice minutes, or AI processing) and applicable taxes. Unless otherwise stated, fees are quoted and payable in US dollars, and are non-refundable except as required by law or expressly stated in these Terms.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        Recurring subscriptions renew automatically at the end of each billing cycle at the then-current rate unless canceled before renewal. Usage-based charges are billed in arrears. Invoices are due within thirty (30) days of issue unless otherwise stated on the invoice. Overdue amounts may accrue interest at the lesser of 1.5% per month or the maximum rate permitted by law, and we may suspend Services while amounts remain unpaid.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        We may change our pricing at any time. For subscription plans, we will give you at least thirty (30) days&apos; notice of any price increase before it takes effect in your next renewal term. Taxes (other than taxes on our net income) are your responsibility.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 07 - Term & Termination */}
                            <motion.div id="section-07" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center border border-[#FF7404]/20">
                                        <Power className="w-6 h-6 text-[#FF7404]" />
                                    </div>
                                    Term & Termination
                                </h2>
                                <div className="p-12 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-md space-y-4">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        These Terms remain in effect for as long as you use the Services or have an active Order with us, whichever is longer. The initial term, renewal mechanics, and notice periods applicable to your subscription are set out in your Order. If no Order is in place, you may cancel at any time by closing your account, and we may terminate or suspend your access at any time with or without cause.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        Either party may terminate these Terms immediately by written notice if the other party: (a) materially breaches these Terms and fails to cure the breach within thirty (30) days of written notice; (b) becomes insolvent or subject to bankruptcy proceedings; or (c) ceases to conduct business.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        We may suspend the Services immediately and without liability if we reasonably believe your use creates a security risk, may cause harm to other customers, or violates the Acceptable Use section. Upon termination, your right to use the Services ends, all accrued fees remain payable, and either party may retain records required by law or for legitimate business purposes. You may request export of Customer Data for up to thirty (30) days after termination; after that, we may delete it in the ordinary course of business.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 08 - Intellectual Property */}
                            <motion.div id="section-08" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center border border-[#FF7404]/20">
                                        <Bookmark className="w-6 h-6 text-[#FF7404]" />
                                    </div>
                                    Intellectual Property
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="p-10 rounded-[2rem] bg-white/[0.01] border border-white/5">
                                        <div className="text-[#FF7404] font-mono text-[10px] uppercase tracking-widest mb-4">Our IP</div>
                                        <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                            All right, title, and interest in and to the Services, the Visquanta website, our software, trade names, trademarks, logos, and all related documentation, workflows, and model configurations are and remain the exclusive property of Visquanta and its licensors, protected by US and international copyright, trademark, and other intellectual property laws. We grant you only the limited, revocable, non-exclusive, non-transferable right to access and use the Services for your internal business purposes during the term of your Order.
                                        </p>
                                    </div>
                                    <div className="p-10 rounded-[2rem] bg-white/[0.01] border border-white/5">
                                        <div className="text-[#FF7404] font-mono text-[10px] uppercase tracking-widest mb-4">Your IP</div>
                                        <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                            You retain all right, title, and interest in and to your Customer Data, your brand assets, and any content you create using the Services. If you provide feedback, suggestions, or ideas about the Services (&quot;Feedback&quot;), you grant Visquanta a perpetual, worldwide, royalty-free license to use that Feedback to improve our products without obligation to you.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* 09 - Third-Party Services */}
                            <motion.div id="section-09" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center border border-[#FF7404]/20">
                                        <Globe className="w-6 h-6 text-[#FF7404]" />
                                    </div>
                                    Third-Party Services
                                </h2>
                                <div className="p-12 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-md space-y-4">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        The Services rely on and integrate with third-party platforms (including AI model providers, cloud-infrastructure providers, and telecommunications carriers), and may offer optional integrations with services you elect to connect (for example, CRM or DMS systems). We maintain a current list of our sub-processors at <a href="/trust" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">visquanta.com/trust</a>.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        Your use of third-party services is subject to the terms and privacy practices of the respective providers, for which we are not responsible. If a third-party service becomes unavailable or changes its terms in a manner that materially affects our ability to provide the Services, we may modify, replace, or discontinue the affected functionality.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        Where you connect your own account on a third-party platform (for example, your business&apos;s CRM), you are responsible for the configuration, permissions, and compliance of that account.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 10 - Warranties & Liability */}
                            <motion.div id="section-10" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center border border-[#FF7404]/20">
                                        <AlertTriangle className="w-6 h-6 text-[#FF7404]" />
                                    </div>
                                    Warranties & Limitation of Liability
                                </h2>
                                <div className="p-12 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-md space-y-4">
                                    <p className="text-zinc-300 text-base leading-relaxed font-medium">
                                        Warranty Disclaimer.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        Except as expressly provided in an Order or a separate written agreement, the Services are provided &quot;as is&quot; and &quot;as available&quot;, without warranties of any kind, whether express, implied, statutory, or otherwise. Visquanta specifically disclaims all implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, and any warranties arising from course of dealing or usage of trade. We do not warrant that the Services will be uninterrupted, error-free, secure, or that defects will be corrected, nor do we warrant any specific outcome, revenue lift, or business result from use of the Services. AI-generated outputs may contain errors or inaccuracies and should be reviewed before being relied upon.
                                    </p>
                                    <p className="text-zinc-300 text-base leading-relaxed font-medium pt-4">
                                        Limitation of Liability.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        To the fullest extent permitted by applicable law, in no event will either party be liable to the other for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenue, data, goodwill, or business opportunity, arising out of or related to these Terms or the Services, even if advised of the possibility of such damages.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        Each party&apos;s aggregate liability arising out of or related to these Terms, from all causes of action and under all theories of liability, will not exceed the total fees paid by you to Visquanta for the Services during the twelve (12) months immediately preceding the event giving rise to the claim. The foregoing limitations do not apply to: (a) your payment obligations; (b) either party&apos;s indemnification obligations; (c) liability arising from gross negligence, wilful misconduct, or fraud; or (d) any liability that cannot be limited under applicable law.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 11 - Indemnification */}
                            <motion.div id="section-11" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center border border-[#FF7404]/20">
                                        <Briefcase className="w-6 h-6 text-[#FF7404]" />
                                    </div>
                                    Indemnification
                                </h2>
                                <div className="p-12 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-md space-y-4">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        You will defend, indemnify, and hold harmless Visquanta and its affiliates, officers, employees, and agents from and against any third-party claim, demand, action, or proceeding, and any associated losses, damages, liabilities, and reasonable attorneys&apos; fees, arising out of or relating to: (a) your Customer Data, including any claim that Customer Data infringes the rights of a third party or violates applicable law; (b) your use of the Services in breach of these Terms or the Acceptable Use section; (c) your failure to obtain or maintain any legally required consent from the individuals you contact through the Services; or (d) your violation of applicable law.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        Visquanta will defend, indemnify, and hold harmless Customer from and against any third-party claim alleging that the Services, when used as permitted under these Terms, infringe such third party&apos;s intellectual property rights, and pay any damages finally awarded in such claim, provided that Customer promptly notifies Visquanta of the claim, gives Visquanta sole control of the defense and settlement, and provides reasonable cooperation.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        The indemnifying party&apos;s obligations are conditioned on the indemnified party (i) promptly notifying the indemnifying party of the claim, (ii) providing reasonable cooperation in the defense, and (iii) not settling any claim without the indemnifying party&apos;s prior written consent.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 12 - General Provisions */}
                            <motion.div id="section-12" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center border border-[#FF7404]/20">
                                        <FileText className="w-6 h-6 text-[#FF7404]" />
                                    </div>
                                    General Provisions
                                </h2>
                                <div className="p-12 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-md space-y-4">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        <span className="text-white font-semibold">Modifications.</span> We may update these Terms from time to time. If we make material changes, we will post the updated Terms on the Website and, where required, provide additional notice (such as an email to your account administrator). Your continued use of the Services after the changes take effect constitutes acceptance of the updated Terms.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        <span className="text-white font-semibold">Force Majeure.</span> Neither party will be liable for any delay or failure to perform (other than payment obligations) caused by events beyond its reasonable control, including acts of God, war, terrorism, labor disputes, power or telecommunications failures, acts of government, or denial-of-service attacks.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        <span className="text-white font-semibold">Assignment.</span> You may not assign or transfer these Terms, by operation of law or otherwise, without our prior written consent. We may assign these Terms without consent in connection with a merger, acquisition, reorganization, or sale of all or substantially all of our assets. Any attempted assignment in violation of this section is void.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        <span className="text-white font-semibold">Severability.</span> If any provision of these Terms is held invalid or unenforceable, that provision will be limited to the minimum extent necessary so that these Terms otherwise remain in full force and effect.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        <span className="text-white font-semibold">Entire Agreement.</span> These Terms, together with any applicable Order, DPA, or policy referenced here, constitute the entire agreement between the parties regarding the Services and supersede all prior or contemporaneous agreements and understandings.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        <span className="text-white font-semibold">Waiver.</span> No failure or delay by either party in exercising any right under these Terms operates as a waiver of that right. A waiver is only effective if made in writing and signed by the waiving party.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        <span className="text-white font-semibold">Notices.</span> Legal notices to Visquanta must be sent to <span className="text-[#FF7404]">info@visquanta.com</span> and will be deemed given on the next business day after sending. We may give you notice by email to the address associated with your account or by posting to the Services.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        <span className="text-white font-semibold">Relationship.</span> The parties are independent contractors. These Terms do not create any agency, partnership, joint venture, or employment relationship.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 13 - Governing Law */}
                            <motion.div id="section-13" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center border border-[#FF7404]/20">
                                        <Scale className="w-6 h-6 text-[#FF7404]" />
                                    </div>
                                    Governing Law & Jurisdiction
                                </h2>
                                <div className="p-12 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-md">
                                    <div className="grid md:grid-cols-2 gap-12">
                                        <div className="space-y-3">
                                            <div className="text-[10px] font-mono text-[#FF7404] font-black uppercase tracking-widest">Governing Law</div>
                                            <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                                These Terms are governed by the laws of the State of Texas, USA, without regard to its conflict of laws rules. The United Nations Convention on Contracts for the International Sale of Goods does not apply.
                                            </p>
                                        </div>
                                        <div className="space-y-3 pt-8 md:pt-0 border-t md:border-t-0 md:border-l border-white/5 md:pl-12">
                                            <div className="text-[10px] font-mono text-[#FF7404] font-black uppercase tracking-widest">Forum</div>
                                            <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                                Any dispute arising out of or relating to these Terms or the Services will be resolved exclusively in the state or federal courts located in Travis County, Texas, and each party consents to the personal jurisdiction of those courts.
                                            </p>
                                        </div>
                                        <div className="space-y-3 pt-8 md:col-span-2 border-t border-white/5 md:pt-8">
                                            <div className="text-[10px] font-mono text-[#FF7404] font-black uppercase tracking-widest">EU & UK Customers</div>
                                            <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                                If you are a consumer located in the European Union or the United Kingdom, you may have additional mandatory rights under your local law that these Terms do not override.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* 14 - Contact */}
                            <motion.div id="section-14" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center border border-[#FF7404]/20">
                                        <Mail className="w-6 h-6 text-[#FF7404]" />
                                    </div>
                                    Contact
                                </h2>
                                <div className="p-12 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-md">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light mb-8">
                                        Questions about these Terms should be directed to our team. For privacy and DPA requests, please see the <a href="/trust" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">Trust &amp; Compliance</a> page.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <a href="mailto:info@visquanta.com" className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 group hover:border-[#FF7404]/30 transition-all block">
                                            <Mail className="w-5 h-5 text-[#FF7404] mb-4" />
                                            <div className="text-white font-bold text-sm mb-1 uppercase tracking-widest">General & Legal</div>
                                            <div className="text-zinc-500 text-xs font-mono">info@visquanta.com</div>
                                        </a>
                                        <a href="mailto:compliance@visquanta.com" className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 group hover:border-[#FF7404]/30 transition-all block">
                                            <Shield className="w-5 h-5 text-[#FF7404] mb-4" />
                                            <div className="text-white font-bold text-sm mb-1 uppercase tracking-widest">Privacy & DPA</div>
                                            <div className="text-zinc-500 text-xs font-mono">compliance@visquanta.com</div>
                                        </a>
                                        <a href="tel:+17866866554" className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 group hover:border-[#FF7404]/30 transition-all block">
                                            <Phone className="w-5 h-5 text-[#FF7404] mb-4" />
                                            <div className="text-white font-bold text-sm mb-1 uppercase tracking-widest">Direct Line</div>
                                            <div className="text-zinc-500 text-xs font-mono">+1 786-686-6554</div>
                                        </a>
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
