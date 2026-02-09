'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Settings, Zap, TrendingUp, Target } from 'lucide-react';
import { useLocale } from '@/lib/i18n/LocaleProvider';


export default function HowItWorksSection() {
  const { t } = useLocale();

  const steps = [
    {
      number: "01",
      title: t('how_it_works.step_1_title'),
      description: t('how_it_works.step_1_description'),
      day: t('how_it_works.step_1_timing'),
      icon: Rocket,
    },
    {
      number: "02",
      title: t('how_it_works.step_2_title'),
      description: t('how_it_works.step_2_description'),
      day: t('how_it_works.step_2_timing'),
      icon: Settings,
    },
    {
      number: "03",
      title: t('how_it_works.step_3_title'),
      description: t('how_it_works.step_3_description'),
      day: t('how_it_works.step_3_timing'),
      icon: Target,
    },
    {
      number: "04",
      title: t('how_it_works.step_4_title'),
      description: t('how_it_works.step_4_description'),
      day: t('how_it_works.step_4_timing'),
      icon: Zap,
    },
    {
      number: "05",
      title: t('how_it_works.step_5_title'),
      description: t('how_it_works.step_5_description'),
      day: t('how_it_works.step_5_timing'),
      icon: TrendingUp,
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-enterprise-grid opacity-10 pointer-events-none" />

      <div className="container-wide relative z-10">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-[#ff7404]/30 shadow-[0_0_15px_-3px_rgba(255,116,4,0.3)] backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-6">
              <Rocket className="w-3 h-3 text-[#ff7404] fill-[#ff7404]" />
              <span className="bg-gradient-to-r from-[#ff7404] to-[#ff9b50] bg-clip-text text-transparent">{t('how_it_works.badge')}</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1]"
              dangerouslySetInnerHTML={{
                __html: t('how_it_works.headline')
                  .replace('<highlight>', '<span class="text-[#ff7404]">')
                  .replace('</highlight>', '</span>')
              }}
            />

            <p className="text-white/40 text-sm lg:text-base mb-4 leading-relaxed max-w-sm">
              {t('how_it_works.tagline')}
            </p>
            <p className="text-[#ff7404] text-sm font-semibold mb-10">
              {t('how_it_works.process_description')}
            </p>

            {/* Quick Stats - Hardcoded for now as simple numbers */}
            <div className="flex gap-1 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] w-fit">
              <div className="px-6 py-4 text-center">
                <div className="text-2xl font-bold text-[#ff7404]">14</div>
                <div className="text-[9px] text-white/40 uppercase font-bold tracking-widest mt-0.5">Days</div>
              </div>
              <div className="w-px bg-white/[0.08] my-2" />
              <div className="px-6 py-4 text-center">
                <div className="text-2xl font-bold text-white">0</div>
                <div className="text-[9px] text-white/40 uppercase font-bold tracking-widest mt-0.5">Code</div>
              </div>
              <div className="w-px bg-white/[0.08] my-2" />
              <div className="px-6 py-4 text-center">
                <div className="text-2xl font-bold text-white">1</div>
                <div className="text-[9px] text-white/40 uppercase font-bold tracking-widest mt-0.5">Manager</div>
              </div>
            </div>
          </motion.div>

          {/* Steps */}
          <div className="lg:w-2/3 space-y-4 relative">
            {/* Timeline Line */}
            <div className="absolute left-[29px] top-6 bottom-6 w-[2px] bg-[#222]" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-20 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[22px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#050505] border-[3px] border-[#ff7404] z-10 group-hover:scale-125 transition-transform duration-300" />

                  {/* Active Line Segment */}
                  {/* <div className="absolute left-[29px] top-0 bottom-0 w-[2px] bg-[#ff7404] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100" /> */}

                  <div className="relative overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/[0.08] p-5 pr-8 hover:border-white/[0.15] hover:bg-white/[0.02] transition-all duration-300 group/card">
                    <div className="flex items-center gap-6">
                      {/* Icon Box */}
                      <div className="w-12 h-12 rounded-xl bg-[#ff7404] flex items-center justify-center text-black shadow-lg flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-bold text-white/20 tracking-wider">0{index + 1}</span>
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                          <span className="text-xs font-bold text-[#ff7404] px-2 py-0.5 rounded border border-[#ff7404]/20 bg-[#ff7404]/5">
                            {step.day}
                          </span>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <ArrowRight className="w-4 h-4 text-white/10 group-hover/card:text-white/40 transition-colors flex-shrink-0" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
