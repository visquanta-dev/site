'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LegalDocsNav from '@/components/LegalDocsNav';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
    Database, Mail, Phone, MapPin,
    Globe, ExternalLink, Settings2, Lock,
    Binary, Eye, Cpu, ScrollText, Cookie as CookieIcon,
    RefreshCcw, UserCheck, Server
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

const sections = [
    { id: '01', label: 'Introduction', icon: ScrollText },
    { id: '02', label: 'What Are Cookies', icon: CookieIcon },
    { id: '03', label: 'How We Use Cookies', icon: Cpu },
    { id: '04', label: 'Types of Cookies', icon: Database },
    { id: '05', label: 'Third-Party Cookies', icon: Globe },
    { id: '06', label: 'Your Choices', icon: UserCheck },
    { id: '07', label: 'Do Not Track', icon: Eye },
    { id: '08', label: 'Changes to This Policy', icon: RefreshCcw },
    { id: '09', label: 'Contact', icon: Mail },
];

export default function CookiePolicyPage() {
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
                <div className="absolute top-0 left-0 w-[1000px] h-[600px] bg-[#FF7404]/5 blur-[160px] rounded-full opacity-30" />
                <div className="absolute bottom-0 left-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[160px] rounded-full opacity-10" />
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
                            <CookieIcon className="w-12 h-12 text-[#FF7404]" />
                            <motion.div
                                animate={{ scale: [1, 1.15, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute inset-0 border-2 border-[#FF7404]/30 rounded-3xl scale-125 opacity-50"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[#FF7404] text-[10px] uppercase tracking-[0.4em] font-black mb-8 border-l-[#FF7404] border-l-2"
                    >
                        Cookie Policy
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.85]"
                    >
                        Cookie <br />
                        <span className="text-transparent border-text">Policy</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center items-center gap-6 text-xs font-mono text-zinc-500"
                    >
                        <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                            <Binary className="w-3 h-3 text-[#FF7404]" />
                            DOC_ID: VQ-CKI-2026
                        </span>
                        <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                            <Cpu className="w-3 h-3 text-[#FF7404]" />
                            REV: 22.04.2026
                        </span>
                    </motion.div>

                    <LegalDocsNav active="cookies" className="mt-12" />
                </div>
            </section>

            {/* CONTENT GRID */}
            <section className="py-32 relative z-10">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-[300px_1fr] gap-20">

                        {/* SIDEBAR NAV (Desktop) */}
                        <aside className="hidden lg:block sticky top-32 h-fit">
                            <div className="space-y-2">
                                <div className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest mb-6">Contents</div>
                                {sections.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#section-${item.id}`}
                                        className="flex items-center gap-4 py-2 text-left w-full group"
                                    >
                                        <div className="w-1 h-1 rounded-full bg-zinc-800 group-hover:bg-[#FF7404] transition-colors" />
                                        <span className="text-[9px] font-mono text-zinc-700 group-hover:text-[#FF7404]/50">{item.id}</span>
                                        <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-500 group-hover:text-white transition-colors">{item.label}</span>
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
                                        This Cookie Policy explains how <span className="text-white font-medium">Visquanta LLC</span> uses cookies and similar technologies on <span className="text-white">www.visquanta.com</span>. It should be read alongside our <Link href="/privacy-policy" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">Privacy Policy</Link>, which describes how we handle personal data more broadly.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        By using our website, you consent to the use of cookies as described in this policy, except where your consent is separately required by law. You can change your cookie preferences at any time through the methods described in Section 6.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 02 - What Are Cookies */}
                            <motion.div id="section-02" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_02</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    What Are Cookies
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm space-y-4">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        Cookies are small text files that a website places on your device (computer, phone, tablet) when you visit. They are widely used to make websites work properly, remember your preferences, and provide information to site owners about how their site is being used.
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        Cookies can be <span className="text-white font-semibold">first-party</span> (set by the site you are visiting) or <span className="text-white font-semibold">third-party</span> (set by a different domain, typically an embedded service). They can also be <span className="text-white font-semibold">session cookies</span> (deleted when you close your browser) or <span className="text-white font-semibold">persistent cookies</span> (which remain on your device for a set period or until you delete them).
                                    </p>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        We also use similar technologies such as local storage, pixels, and tags, which work in comparable ways. For simplicity, this policy refers to all of these as &quot;cookies&quot;.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 03 - How We Use Cookies */}
                            <motion.div id="section-03" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_03</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    How We Use Cookies
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm space-y-4">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        We use cookies to:
                                    </p>
                                    <ul className="text-zinc-400 text-base leading-relaxed font-light space-y-2 list-disc list-inside pl-2">
                                        <li>Make the website work, including session management, load balancing, and basic security;</li>
                                        <li>Remember your preferences (for example, consent choices, language, or UI settings);</li>
                                        <li>Understand how visitors use the site so we can measure performance and improve content;</li>
                                        <li>Help us operate certain integrated services, such as video players or embedded forms.</li>
                                    </ul>
                                    <p className="text-zinc-300 text-base leading-relaxed font-medium pt-2">
                                        We do not use cookies to build advertising profiles about you, and we do not sell cookie data to third parties.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 04 - Types of Cookies */}
                            <motion.div id="section-04" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_04</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    Types of Cookies We Use
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-3">
                                        <div className="w-10 h-10 rounded-xl bg-[#FF7404]/10 flex items-center justify-center text-[#FF7404] mb-2">
                                            <Lock className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-white font-bold uppercase tracking-widest text-sm">Strictly Necessary</h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                            Required for the website to function. They enable navigation, session management, security, and load balancing. These cannot be switched off. Typical duration: session only.
                                        </p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-3">
                                        <div className="w-10 h-10 rounded-xl bg-[#FF7404]/10 flex items-center justify-center text-[#FF7404] mb-2">
                                            <Settings2 className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-white font-bold uppercase tracking-widest text-sm">Functional</h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                            Remember choices you make (such as your cookie consent, language preference, or region) so we can give you a more consistent experience. Typical duration: up to 12 months.
                                        </p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-3">
                                        <div className="w-10 h-10 rounded-xl bg-[#FF7404]/10 flex items-center justify-center text-[#FF7404] mb-2">
                                            <Binary className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-white font-bold uppercase tracking-widest text-sm">Analytics</h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                            Help us understand how visitors use our site, which pages are popular, and where people come from. Only set with your consent where required by law. Typical duration: up to 24 months.
                                        </p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-3">
                                        <div className="w-10 h-10 rounded-xl bg-[#FF7404]/10 flex items-center justify-center text-[#FF7404] mb-2">
                                            <Server className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-white font-bold uppercase tracking-widest text-sm">Integration</h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                            Set when we embed services such as video players, scheduling widgets, or form tools. These are generally governed by the third party&apos;s own cookie practices.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* 05 - Third-Party Cookies */}
                            <motion.div id="section-05" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_05</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    Third-Party Cookies
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm space-y-4">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        Some cookies on our site are set by third-party services we use to operate and measure our website. These typically include:
                                    </p>
                                    <ul className="text-zinc-400 text-base leading-relaxed font-light space-y-2 list-disc list-inside pl-2">
                                        <li><span className="text-white font-semibold">Google Analytics and Google Tag Manager</span> &mdash; to understand site usage and measure performance;</li>
                                        <li><span className="text-white font-semibold">Vercel</span> &mdash; our hosting and edge infrastructure, which may set strictly necessary cookies for performance and security;</li>
                                        <li><span className="text-white font-semibold">Calendly or similar scheduling tools</span> &mdash; when you use an embedded booking widget;</li>
                                        <li><span className="text-white font-semibold">Embedded video providers</span> (such as YouTube or Vimeo) &mdash; when you view an embedded video.</li>
                                    </ul>
                                    <p className="text-zinc-400 text-base leading-relaxed font-light pt-2">
                                        Third-party cookies are governed by the respective provider&apos;s cookie and privacy policies, not ours. A current list of our sub-processors is maintained on our <Link href="/trust" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">Trust &amp; Compliance</Link> page.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 06 - Your Choices */}
                            <motion.div id="section-06" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_06</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    Your Choices
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm space-y-6">
                                    <div>
                                        <h3 className="text-white font-semibold text-base mb-2">Cookie consent banner</h3>
                                        <p className="text-zinc-400 text-base leading-relaxed font-light">
                                            If you are in a region that requires cookie consent (such as the EU, UK, or EEA), you will see a cookie banner on your first visit that lets you accept all cookies, reject non-essential cookies, or choose which categories to allow. You can change your preferences at any time by clearing the cookie-consent record and revisiting the site.
                                        </p>
                                    </div>
                                    <div className="border-t border-white/5 pt-6">
                                        <h3 className="text-white font-semibold text-base mb-2">Browser controls</h3>
                                        <p className="text-zinc-400 text-base leading-relaxed font-light">
                                            Most browsers allow you to block or delete cookies through their settings. Instructions for the major browsers:
                                        </p>
                                        <ul className="text-zinc-400 text-base leading-relaxed font-light space-y-2 list-disc list-inside pl-2 mt-3">
                                            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="nofollow noopener noreferrer" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">Chrome</a></li>
                                            <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="nofollow noopener noreferrer" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">Firefox</a></li>
                                            <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="nofollow noopener noreferrer" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">Safari</a></li>
                                            <li><a href="https://support.microsoft.com/en-gb/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="nofollow noopener noreferrer" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">Edge</a></li>
                                        </ul>
                                        <p className="text-zinc-500 text-sm leading-relaxed font-light pt-3">
                                            Please note that blocking strictly necessary cookies will prevent parts of the site from working correctly.
                                        </p>
                                    </div>
                                    <div className="border-t border-white/5 pt-6">
                                        <h3 className="text-white font-semibold text-base mb-2">Opting out of analytics</h3>
                                        <p className="text-zinc-400 text-base leading-relaxed font-light">
                                            You can opt out of Google Analytics by installing the{' '}
                                            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="nofollow noopener noreferrer" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">Google Analytics Opt-out Browser Add-on</a>. For general information about cookies and how to manage them, see{' '}
                                            <a href="https://www.allaboutcookies.org" target="_blank" rel="nofollow noopener noreferrer" className="text-[#FF7404] underline underline-offset-4 decoration-[#FF7404]/40 hover:decoration-[#FF7404]">allaboutcookies.org <ExternalLink className="inline w-3 h-3" /></a>.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* 07 - Do Not Track */}
                            <motion.div id="section-07" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_07</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    Do Not Track
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        Some browsers offer a &quot;Do Not Track&quot; (DNT) signal. Because there is no common industry or legal standard for how sites should respond to DNT, we do not currently act on these signals. We honor opt-outs you make through our cookie banner and through the browser-level controls described above.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 08 - Changes */}
                            <motion.div id="section-08" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_08</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    Changes to This Policy
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light">
                                        We may update this Cookie Policy from time to time to reflect changes in our practices, the tools we use, or applicable law. When we do, we will update the revision date at the top of this page. Where the changes are material, we will provide additional notice, such as a refreshed cookie banner. We encourage you to review this page periodically.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 09 - Contact */}
                            <motion.div id="section-09" className="scroll-mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_09</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    Contact
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                                    <p className="text-zinc-400 text-base leading-relaxed font-light mb-8">
                                        If you have questions about this Cookie Policy or about our use of cookies, please contact us.
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
