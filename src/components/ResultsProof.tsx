'use client';

import { motion } from 'framer-motion';
import { DollarSign, Car, TrendingUp, Clock } from 'lucide-react';
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
  visible: { opacity: 1, y: 0 }
};

export default function ResultsProof() {
  const { t } = useLocale();

  const stats = [
    {
      value: t('results.stat_1_value'),
      label: t('results.stat_1_label'),
      sublabel: t('results.stat_1_detail'),
      icon: DollarSign,
    },
    {
      value: t('results.stat_2_value'),
      label: t('results.stat_2_label'),
      sublabel: t('results.stat_2_detail'),
      icon: Car,
    },
    {
      value: t('results.stat_3_value'),
      label: t('results.stat_3_label'),
      sublabel: t('results.stat_3_detail'),
      icon: TrendingUp,
    },
    {
      value: t('results.stat_4_value'),
      label: t('results.stat_4_label'),
      sublabel: t('results.stat_4_detail'),
      icon: Clock,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ff7404] to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#ff7404]/8 rounded-full blur-[200px]" />
      </div>

      <div className="container-wide relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#ff7404] text-[11px] font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ff7404] animate-pulse" />
            {t('results.badge')}
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter uppercase">
            {t('results.headline')} <span className="text-[#ff7404]">{t('results.headline_highlight')}</span>
          </h2>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl mx-auto">
            {t('results.intro')}
          </p>
        </motion.div>

        {/* 1. VISQUANTA RESULTS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative h-full bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 overflow-hidden transition-all duration-500 group-hover:border-[#ff7404]/30 group-hover:shadow-[0_20px_40px_-15px_rgba(255,116,4,0.15)] flex flex-col">
                  <div className="absolute inset-0 bg-enterprise-grid opacity-5 pointer-events-none" />
                  <div className="absolute -right-20 -top-20 w-48 h-48 bg-[#ff7404]/5 rounded-full blur-[80px] group-hover:bg-[#ff7404]/15 transition-colors duration-700" />

                  <div className="relative mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center relative group-hover:border-[#ff7404]/50 transition-colors duration-500 overflow-hidden">
                      <Icon className="w-7 h-7 text-[#ff7404]" />
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="text-4xl lg:text-5xl font-black text-white tracking-tighter mb-4 group-hover:text-[#ff7404] transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">{stat.label}</div>
                      <div className="text-sm font-medium text-white/70">{stat.sublabel}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
