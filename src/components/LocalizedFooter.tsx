'use client';

// src/components/LocalizedFooter.tsx
// Footer component that uses locale context for Canadian/US content switching

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Linkedin, Youtube, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLocale } from '@/lib/i18n/LocaleProvider';
import { localizePathname } from '@/lib/i18n/config';
import { localeLink } from '@/lib/locale-link';

// Custom TikTok Icon
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/visquanta', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/@visquanta', label: 'YouTube' },
    { icon: Facebook, href: 'https://www.facebook.com/people/VisQuanta/61567841541110/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/visquanta/', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/VisQuanta', label: 'X (Twitter)' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@visquanta', label: 'TikTok' },
];

// Footer link definitions (will be localized)
const getFooterLinks = (locale: string) => {
    return {
        autoMasterSuite: [
            { label: 'Lead Reactivation', href: localeLink('/lead-reactivation', locale) },
            { label: 'Speed to Lead', href: localeLink('/speed-to-lead', locale) },
            { label: 'SMS First Widget', href: localeLink('/website-widget', locale) },
            { label: 'Reputation Management', href: localeLink('/reputation-management', locale) },
            { label: 'Service Drive Pro', href: localeLink('/service-drive', locale), tag: 'New' },
            { label: 'Custom Campaigns', href: localeLink('/custom-campaigns', locale) },
        ],
        dealerServices: [
            { label: 'Independent Dealerships', href: localeLink('/dealers/independent', locale) },
            { label: 'Franchise Dealerships', href: localeLink('/dealers/franchise', locale) },
            { label: 'Auto Groups', href: localeLink('/dealers/auto-groups', locale) },
            { label: 'Pre-Owned', href: localeLink('/dealers/pre-owned', locale) },
            { label: 'RV Connect', href: localeLink('/dealers/rv', locale), tag: 'Coming Soon' },
            { label: 'Dealer Success', href: localeLink('/dealer-success', locale) },
        ],
        resources: [
            { label: 'FAQs', href: localeLink('/faqs', locale) },
            { label: 'Blog', href: localeLink('/blog', locale) },
            { label: 'AMS Info Sheets', href: localeLink('/ams-guides', locale) },
            { label: 'VQonsole Access', href: 'https://portal.visquanta.com' },
        ],
        company: [
            { label: 'About VisQuanta', href: localeLink('/about-visquanta', locale) },
            { label: 'Our Team', href: localeLink('/team', locale) },
            { label: 'Careers', href: localeLink('/careers', locale) },
            { label: 'Trust Center', href: localeLink('/trust', locale) },
            { label: 'Contact Us', href: localeLink('/contact', locale) },
        ],
        legal: {
            privacy: localeLink('/privacy-policy', locale),
            terms: localeLink('/terms-conditions', locale),
            cookies: localeLink('/cookie-policy', locale),
        }
    };
};

export default function LocalizedFooter() {
    const { locale, t, tBool } = useLocale();
    const footerLinks = getFooterLinks(locale);
    const showBBB = tBool('footer.show_bbb_badge');

    return (
        <footer className="relative bg-[#030303] text-white overflow-hidden">
            {/* Premium Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#FF7404]/[0.02] rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FF7404]/[0.015] rounded-full blur-[150px]" />
            </div>

            {/* Top Gradient Border */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container-wide relative z-10">

                {/* Main Footer Content */}
                <div className="pt-12 pb-10 sm:pt-16 sm:pb-12 md:pt-20 md:pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 md:gap-16 lg:gap-8">

                        {/* Brand Column */}
                        <div className="lg:col-span-4 space-y-6 sm:space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <Link href={localeLink('/', locale)} className="inline-block group">
                                    <Image
                                        src="/images/visquanta-logo-transparent.png"
                                        alt="VisQuanta"
                                        width={240}
                                        height={63}
                                        className="h-14 w-auto brightness-100 group-hover:brightness-110 transition-all duration-300"
                                    />
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="space-y-5"
                            >
                                <div className="flex items-start gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:border-[#FF7404]/30 group-hover:bg-[#FF7404]/5 transition-all duration-300">
                                        <MapPin className="w-4 h-4 text-[#FF7404]" />
                                    </div>
                                    <div className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                                        {t('footer.address_line_1')}
                                        {t('footer.address_line_2') && <><br />{t('footer.address_line_2')}</>}
                                        <br />{t('footer.country')}
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:border-[#FF7404]/30 group-hover:bg-[#FF7404]/5 transition-all duration-300">
                                        <Mail className="w-4 h-4 text-[#FF7404]" />
                                    </div>
                                    <a href={`mailto:${t('footer.email')}`} className="text-sm text-white/50 hover:text-white transition-colors">
                                        {t('footer.email')}
                                    </a>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:border-[#FF7404]/30 group-hover:bg-[#FF7404]/5 transition-all duration-300">
                                        <Phone className="w-4 h-4 text-[#FF7404]" />
                                    </div>
                                    {t('footer.phone').startsWith('[') ? (
                                        <span className="text-sm text-white/30 italic">{t('footer.phone')}</span>
                                    ) : (
                                        <a href={`tel:${t('footer.phone').replace(/\s/g, '')}`} className="text-sm text-white/50 hover:text-white transition-colors">
                                            {t('footer.phone')}
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        </div>

                        {/* Links Columns Container */}
                        <div className="lg:col-span-8 flex flex-col justify-between gap-12">

                            {/* Links Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-8">
                                {/* Auto Master Suite */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="space-y-6"
                                >
                                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                                        <Link href={localeLink('/auto-master-suite', locale)} className="hover:text-[#FF7404] transition-colors">{t('footer.automaster_suite')}</Link>
                                    </h4>
                                    <ul className="space-y-4">
                                        {footerLinks.autoMasterSuite.map((link, i) => (
                                            <li key={i}>
                                                <Link
                                                    href={link.href}
                                                    className="group flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-300"
                                                >
                                                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                                                    {link.tag && (
                                                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${link.tag === 'New' ? 'bg-[#FF7404]/20 text-[#FF7404]' : 'bg-white/10 text-white/50'}`}>
                                                            {link.tag}
                                                        </span>
                                                    )}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* Dealer Services */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.15 }}
                                    className="space-y-6"
                                >
                                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                                        <Link href={localeLink('/dealers', locale)} className="hover:text-[#FF7404] transition-colors">{t('footer.dealer_services')}</Link>
                                    </h4>
                                    <ul className="space-y-4">
                                        {footerLinks.dealerServices.map((link, i) => (
                                            <li key={i}>
                                                <Link
                                                    href={link.href}
                                                    className="group flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-300"
                                                >
                                                    <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">{link.label}</span>
                                                    {link.tag && (
                                                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${link.tag === 'New' || link.tag === 'Coming Soon' ? 'bg-[#FF7404]/20 text-[#FF7404]' : 'bg-white/10 text-white/50'}`}>
                                                            {link.tag}
                                                        </span>
                                                    )}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* Resources */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="space-y-6"
                                >
                                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                                        <Link href={localeLink('/resources', locale)} className="hover:text-[#FF7404] transition-colors">{t('footer.resources')}</Link>
                                    </h4>
                                    <ul className="space-y-4">
                                        {footerLinks.resources.map((link, i) => (
                                            <li key={i}>
                                                <Link
                                                    href={link.href}
                                                    className="group text-sm text-white/40 hover:text-white transition-colors duration-300"
                                                >
                                                    <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">{link.label}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* Company */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.25 }}
                                    className="space-y-6"
                                >
                                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                                        <Link href={localeLink('/company', locale)} className="hover:text-[#FF7404] transition-colors">{t('footer.company')}</Link>
                                    </h4>
                                    <ul className="space-y-4">
                                        {footerLinks.company.map((link, i) => (
                                            <li key={i}>
                                                <Link
                                                    href={link.href}
                                                    className="group text-sm text-white/40 hover:text-white transition-colors duration-300"
                                                >
                                                    <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">{link.label}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>

                            {/* Social Links & Badges */}
                            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex items-center gap-2">
                                    {socialLinks.map((social, i) => (
                                        <Link
                                            key={i}
                                            href={social.href}
                                            aria-label={social.label}
                                            className="group w-10 h-10 sm:w-9 sm:h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center hover:bg-[#FF7404]/10 hover:border-[#FF7404]/30 transition-all duration-300"
                                        >
                                            <social.icon className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-white/40 group-hover:text-[#FF7404] transition-colors" />
                                        </Link>
                                    ))}
                                </div>

                                <div className="flex items-center gap-6">
                                    {/* BBB Logo - Only show for US */}
                                    {showBBB && (
                                        <>
                                            <div className="relative flex items-center opacity-40 hover:opacity-100 transition-opacity cursor-default">
                                                <Image
                                                    src="/images/logos/BBB_ABSeal_H_US_2025.svg.svg"
                                                    alt="BBB Accredited Business"
                                                    width={100}
                                                    height={37}
                                                    className="h-9 w-auto"
                                                />
                                            </div>
                                            <div className="w-px h-6 bg-white/10" />
                                        </>
                                    )}

                                    {/* SSL Icon */}
                                    <div className="flex items-center gap-1.5 opacity-40 hover:opacity-80 transition-opacity cursor-default">
                                        <div className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white">
                                                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[8px] font-bold leading-none tracking-wider">SSL</span>
                                            <span className="text-[8px] font-bold leading-none tracking-wider">SECURE</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-8 border-t border-white/[0.06]">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-xs text-white/30 order-3 lg:order-1"
                        >
                            {t('footer.copyright')}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-6 text-xs text-white/30 order-2 lg:order-3"
                        >
                            <Link href={footerLinks.legal.privacy} className="hover:text-white transition-colors">{t('footer.privacy_policy')}</Link>
                            <span className="w-1 h-1 rounded-full bg-white/20" />
                            <Link href={footerLinks.legal.terms} className="hover:text-white transition-colors">{t('footer.terms')}</Link>
                            <span className="w-1 h-1 rounded-full bg-white/20" />
                            <Link href={footerLinks.legal.cookies} className="hover:text-white transition-colors">{t('footer.cookies')}</Link>
                        </motion.div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
