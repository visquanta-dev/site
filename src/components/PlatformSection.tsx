'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, MessageSquare, Star, Phone, RefreshCcw } from 'lucide-react';
import Link from 'next/link';
import SpotlightCard from './ui/SpotlightCard';
import { useLocale } from '@/lib/i18n/LocaleProvider';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
} as any;

export default function PlatformSection() {
  const { t } = useLocale();

  const capabilities = [
    {
      number: '01',
      title: t('platform.lead_reactivation_title'),
      description: t('platform.lead_reactivation_description'),
      stat: t('platform.lead_reactivation_stat_1'),
      statLabel: t('platform.lead_reactivation_stat_1_label'),
      stat2: t('platform.lead_reactivation_stat_2'),
      stat2Label: t('platform.lead_reactivation_stat_2_label'),
      link: '/lead-reactivation',
      icon: RefreshCcw,
      featured: true,
    },
    {
      number: '02',
      title: t('platform.speed_to_lead_title'),
      description: t('platform.speed_to_lead_description'),
      stat: t('platform.speed_to_lead_stat_1'),
      statLabel: t('platform.speed_to_lead_stat_1_label'),
      stat2: t('platform.speed_to_lead_stat_2'),
      stat2Label: t('platform.speed_to_lead_stat_2_label'),
      link: '/speed-to-lead',
      icon: Zap,
    },
    {
      number: '03',
      title: t('platform.widget_title'),
      description: t('platform.widget_description'),
      stat: t('platform.widget_stat_1'),
      statLabel: t('platform.widget_stat_1_label'),
      stat2: t('platform.widget_stat_2'),
      stat2Label: t('platform.widget_stat_2_label'),
      link: '/website-widget',
      icon: MessageSquare,
    },
    {
      number: '04',
      title: t('platform.reputation_title'),
      description: t('platform.reputation_description'),
      stat: t('platform.reputation_stat_1'),
      statLabel: t('platform.reputation_stat_1_label'),
      stat2: t('platform.reputation_stat_2'),
      stat2Label: t('platform.reputation_stat_2_label'),
      link: '/reputation-management',
      icon: Star,
    },
    {
      number: '05',
      title: t('platform.service_title'),
      description: t('platform.service_description'),
      stat: t('platform.service_stat_1'),
      statLabel: t('platform.service_stat_1_label'),
      stat2: t('platform.service_stat_2'),
      stat2Label: t('platform.service_stat_2_label'),
      link: '/service-drive',
      icon: Phone,
    },
  ];

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
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff7404]/10 border border-[#ff7404]/20 text-[#ff7404] text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles className="w-3 h-3" />
            {t('platform.badge')}
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
            {t('platform.headline')}<br /><span className="text-[#ff7404]">{t('platform.headline_highlight')}</span>
          </h2>

          <div className="space-y-6 text-white/70 text-lg sm:text-xl leading-relaxed font-medium">
            <p dangerouslySetInnerHTML={{
              __html: t('platform.intro')
                .replace('<highlight>', '<span class="text-white">')
                .replace('</highlight>', '</span>')
            }} />
          </div>
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
                      {t('common.learn_more')}
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
