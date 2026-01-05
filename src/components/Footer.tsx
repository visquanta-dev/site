'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import { RequestDemoButton } from './CalendlyModal';

const footerLinks = {
  autoMasterSuite: [
    { label: 'Lead Loss Mitigation', href: '/lead-loss-mitigation' },
    { label: 'Speed to Lead', href: '/speed-to-lead' },
    { label: 'Reputation Management', href: '/reputation-management' },
    { label: 'Dealer Success', href: '/dealer-success-solutions' },
    { label: 'Service Drive Pro', href: '/service-drive', tag: 'New' },
    { label: 'Custom Campaigns', href: '/custom-campaigns', tag: 'IWAV' },
  ],
  dealerServices: [
    { label: 'Independent Dealerships', href: '/independent-dealers' },
    { label: 'Franchise Dealerships', href: '/franchise-dealers' },
    { label: 'Auto Groups', href: '/auto-group' },
    { label: 'Pre-Owned', href: '/pre-owned' },
  ],
  resources: [
    { label: "FAQ's", href: '/faqs' },
    { label: 'Blog', href: '/blog' },
    { label: 'Partnerships', href: '/partnerships' },
    { label: 'AMS Info Sheets', href: '/ams-guides' },
  ],
  company: [
    { label: 'About VisQuanta', href: '/about-visquanta' },
    { label: 'Our Team', href: '/team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact Us', href: '/contact' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
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
        <div className="pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Link href="/" className="inline-block group">
                  <Image
                    src="/images/visquanta-logo-white.png"
                    alt="VisQuanta"
                    width={220}
                    height={55}
                    className="h-12 w-auto brightness-100 group-hover:brightness-110 transition-all duration-300"
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
                    2222 Ponce de Leon Blvd<br />3rd Floor<br />Miami, FL 33134 USA
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:border-[#FF7404]/30 group-hover:bg-[#FF7404]/5 transition-all duration-300">
                    <Mail className="w-4 h-4 text-[#FF7404]" />
                  </div>
                  <a href="mailto:info@visquanta.com" className="text-sm text-white/50 hover:text-white transition-colors">
                    info@visquanta.com
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:border-[#FF7404]/30 group-hover:bg-[#FF7404]/5 transition-all duration-300">
                    <Phone className="w-4 h-4 text-[#FF7404]" />
                  </div>
                  <a href="tel:+17866866554" className="text-sm text-white/50 hover:text-white transition-colors">
                    +1 786-686-6554
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <RequestDemoButton
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF7404] to-[#FF8A3D] text-black font-bold text-sm rounded-xl hover:shadow-[0_0_30px_-5px_rgba(255,116,4,0.4)] transition-all duration-300"
                >
                  Request a Demo
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </RequestDemoButton>
              </motion.div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-8">

              {/* Auto Master Suite */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">AutoMaster Suite</h4>
                <ul className="space-y-4">
                  {footerLinks.autoMasterSuite.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-300"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                        {link.tag && (
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${link.tag === 'New' ? 'bg-[#FF7404]/20 text-[#FF7404]' : 'bg-white/10 text-white/50'
                            }`}>
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
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Dealer Services</h4>
                <ul className="space-y-4">
                  {footerLinks.dealerServices.map((link, i) => (
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

              {/* Resources */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Resources</h4>
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
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Company</h4>
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/[0.06]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs text-white/30 order-3 lg:order-1"
            >
              © 2025 VisQuanta LLC. All Rights Reserved.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 order-1 lg:order-2"
            >
              {socialLinks.map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="group w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center hover:bg-[#FF7404]/10 hover:border-[#FF7404]/30 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 text-white/40 group-hover:text-[#FF7404] transition-colors" />
                </Link>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 text-xs text-white/30 order-2 lg:order-3"
            >
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookies</Link>
            </motion.div>

          </div>
        </div>

      </div>
    </footer>
  );
}
