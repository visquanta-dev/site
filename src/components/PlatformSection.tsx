'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, MessageSquare, Star, Phone, RefreshCcw } from 'lucide-react';
import Link from 'next/link';
import SpotlightCard from './ui/SpotlightCard';

const capabilities = [
  {
    number: '01',
    title: 'Lead Reactivation',
    description: 'Conversational AI digs into your CRM, reactivates stalled prospects, and turns dead leads into booked appointments.',
    stat: '30%',
    statLabel: 'Re-engagement',
    stat2: '11%',
    stat2Label: 'Sales Uplift',
    link: '/lead-reactivation',
    icon: RefreshCcw,
    featured: true,
  },
  {
    number: '02',
    title: 'Speed to Lead',
    description: 'Instant personalized response to every inbound lead within 60 seconds.',
    stat: '21x',
    statLabel: 'Higher Conversion',
    stat2: '<60s',
    stat2Label: 'Response Time',
    link: '/speed-to-lead',
    icon: Zap,
  },
  {
    number: '03',
    title: 'Website Widget',
    description: 'Convert website visitors into qualified buyers with real-time engagement.',
    stat: '24/7',
    statLabel: 'Availability',
    stat2: '3x',
    stat2Label: 'More Leads',
    link: '/website-widget',
    icon: MessageSquare,
  },
  {
    number: '04',
    title: 'Reputation Management',
    description: 'Monitor and respond to reviews across all platforms instantly.',
    stat: '100%',
    statLabel: 'Response Rate',
    stat2: '4.8',
    stat2Label: 'Avg Rating',
    link: '/reputation-management',
    icon: Star,
  },
  {
    number: '05',
    title: 'Service AI',
    description: 'Handle service appointments and inquiries 24/7 with Voice AI.',
    stat: '98%',
    statLabel: 'Success Rate',
    stat2: '0',
    stat2Label: 'Missed Calls',
    link: '/service-drive',
    icon: Phone,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

export default function PlatformSection() {
  const featured = capabilities[0];
  const others = capabilities.slice(1);

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#050505] relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ff7404]/50 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#ff7404]/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-wide relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff7404]/10 border border-[#ff7404]/20 text-[#ff7404] text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles className="w-3 h-3" />
            Platform Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight uppercase">
            Five Capabilities<br /><span className="text-[#ff7404]">One System</span>
          </h2>
          <p className="text-white/60 text-lg sm:text-xl leading-relaxed font-medium">
            The complete AI platform for automotive dealerships. Engage leads, answer calls, book appointments, and manage reputation. 24/7, without adding staff.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6"
        >

          {/* Featured Card - Full Width */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 sm:col-span-2 lg:col-span-12 group"
          >
            <SpotlightCard className="rounded-3xl border border-white/[0.08]">
              <div className="relative bg-gradient-to-br from-[#0f0f0f] to-[#080808] p-6 sm:p-7 md:p-10 lg:p-14 overflow-hidden transition-all duration-500 hover:border-[#ff7404]/30">
                {/* Large Number Background */}
                <div className="absolute top-6 right-8 text-[180px] font-bold text-white/[0.02] leading-none tracking-tighter pointer-events-none group-hover:text-white/[0.04] transition-colors duration-500">
                  {featured.number}
                </div>

                {/* Top shine */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#ff7404]/20 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#ff7404]/20 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-10">
                  <div className="flex-1">
                    {/* Icon */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#ff7404] flex items-center justify-center text-black mb-6 sm:mb-8 shadow-lg shadow-[#ff7404]/20 group-hover:scale-110 transition-transform duration-300">
                      <featured.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight uppercase">{featured.title}</h3>
                    <p className="text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed mb-8 font-medium">{featured.description}</p>

                    {/* Stats */}
                    <div className="flex items-center gap-6 sm:gap-8 md:gap-12">
                      <div>
                        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ff7404] tracking-tighter">{featured.stat}</div>
                        <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/40 mt-1">{featured.statLabel}</div>
                      </div>
                      <div className="w-px h-12 sm:h-16 bg-white/10" />
                      <div>
                        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tighter">{featured.stat2}</div>
                        <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/40 mt-1">{featured.stat2Label}</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="lg:text-right">
                    <Link
                      href={featured.link}
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#ff7404] text-black font-bold hover:bg-white transition-all duration-300 shadow-lg shadow-[#ff7404]/20 group/btn"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Standard Cards - 2x2 Grid */}
          {others.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                variants={itemVariants}
                className="col-span-1 lg:col-span-6 xl:col-span-3 group"
              >
                <SpotlightCard className="h-full rounded-3xl border border-white/[0.08]">
                  <Link href={item.link} className="block relative h-full bg-gradient-to-b from-[#0f0f0f] to-[#080808] p-6 sm:p-7 md:p-8 overflow-hidden transition-all duration-500 hover:border-[#ff7404]/30 hover:-translate-y-2">
                    {/* Top shine */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {/* Number Badge */}
                    <div className="absolute top-6 right-6 text-sm font-bold text-white/10 group-hover:text-[#ff7404]/30 transition-colors duration-300">
                      {item.number}
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[#ff7404]/10 border border-[#ff7404]/20 flex items-center justify-center text-[#ff7404] mb-6 group-hover:bg-[#ff7404] group-hover:text-black group-hover:border-[#ff7404] transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-8">{item.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/[0.06]">
                      <div>
                        <div className="text-2xl font-bold text-[#ff7404]">{item.stat}</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-0.5">{item.statLabel}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">{item.stat2}</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-0.5">{item.stat2Label}</div>
                      </div>
                    </div>

                    {/* Bottom accent on hover */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-[#ff7404] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Link>
                </SpotlightCard>
              </motion.div>
            );
          })}

        </motion.div>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
