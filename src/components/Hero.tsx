'use client';

import Link from 'next/link';
import Image from 'next/image';
import { RequestDemoButton } from './CalendlyModal';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import HeroDashboardPreview from './mobile/HeroDashboardPreview';
import { useLocale } from '@/lib/i18n/LocaleProvider';

/* ==========================================================================
   MAIN HERO COMPONENT
   ========================================================================== */
export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-screen flex flex-col pt-20 bg-[#050505] overflow-hidden">
      {/* Layer 1: Solid base background color */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Layer 2: CSS gradient applied behind the wireframe */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#080808] to-[#030303]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_50%,rgba(20,20,25,1),transparent)]" />

      {/* Layer 3: Wireframe image - scaled up to fill space */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/wireframes/6.jpeg"
          alt=""
          fill
          priority
          className="object-cover opacity-50 scale-125 origin-center translate-x-[10%]"
          style={{ objectPosition: '60% center' }}
        />
      </div>

      {/* Layer 4: Full page dark overlay at 40% */}
      <div className="absolute inset-0 bg-[#050505]/40 pointer-events-none" />

      {/* Layer 5: Gradient overlays for text readability (left side darker) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/50 via-[#050505]/30 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60 pointer-events-none" />

      {/* Background - Technical Grid & Ambient Light */}
      <div className="absolute inset-0 bg-enterprise-grid opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#ff74041a,transparent)] pointer-events-none" />

      <div className="container-wide w-full flex-1 flex flex-col justify-center relative z-10 pt-8 pb-12 lg:pt-12 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6 lg:gap-8 text-left z-20">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="h-px w-6 sm:w-8 bg-primary/60" />
              <span className="text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                {t('hero.eyebrow')}
              </span>
            </motion.div>

            {/* Headline with Reveal Animation */}
            <motion.h1
              className="text-4xl leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white tracking-tighter"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.02
                  }
                }
              }}
            >
              <span className="inline-block">
                {t('hero.headline_1').split(" ").map((word, wi) => (
                  <span key={wi} className="inline-block whitespace-nowrap mr-[0.2em]">
                    {word.split("").map((char, ci) => (
                      <motion.span
                        key={ci}
                        variants={{
                          hidden: { opacity: 0, y: 20, rotateX: 40 },
                          visible: { opacity: 1, y: 0, rotateX: 0 }
                        }}
                        transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
                        className="inline-block whitespace-pre"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7404] to-[#ff9040] inline-block">
                {t('hero.headline_2').split(" ").map((word, wi) => (
                  <span key={wi} className="inline-block whitespace-nowrap mr-[0.2em]">
                    {word.split("").map((char, ci) => (
                      <motion.span
                        key={ci}
                        variants={{
                          hidden: { opacity: 0, y: 20, rotateX: 40 },
                          visible: { opacity: 1, y: 0, rotateX: 0 }
                        }}
                        transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
                        className="inline-block whitespace-pre"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </span>
            </motion.h1>

            {/* MOBILE DASHBOARD PREVIEW - Right after headline */}
            <div className="lg:hidden w-full mt-6">
              <HeroDashboardPreview />
            </div>

            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-lg md:text-xl lg:text-2xl text-muted-foreground/80 max-w-2xl leading-relaxed font-medium mt-4 lg:mt-0"
              dangerouslySetInnerHTML={{ __html: t('hero.subheadline') }}
            />


            {/* CTA Group */}
            <div className="flex flex-col gap-4 mt-2 sm:mt-4 lg:mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <RequestDemoButton asChild>
                  <Button
                    className="w-full sm:w-auto h-auto px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-black text-sm uppercase tracking-widest bg-[#FF7404] hover:bg-[#ff8a2b] text-black transition-all shadow-[0_20px_40px_-10px_rgba(255,116,4,0.4)] hover:shadow-[0_0_80px_-10px_rgba(255,116,4,0.6)] animate-pulse-subtle"
                  >
                    {t('common.schedule_cta')}
                  </Button>
                </RequestDemoButton>

                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto h-auto px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-black text-sm uppercase tracking-widest border-white/50 hover:bg-white/5 bg-transparent text-white hover:text-white group"
                >
                  <Link href="#see-it-in-action">
                    <span>{t('hero.cta_secondary')}</span>
                  </Link>
                </Button>
              </motion.div>

              {/* CRO Microcopy */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.15em] font-bold"
              >
                {t('hero.cta_microcopy')}
              </motion.p>
            </div>

            {/* Micro-Trust Signal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 flex items-center gap-4"
            >
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-4 h-4 text-[#FF7404] fill-[#FF7404]" />
                ))}
              </div>
              <span className="text-sm text-white/60 font-medium">{t('hero.trusted_by')} <span className="text-white">{t('hero.trusted_count')}</span> {t('hero.trusted_suffix')}</span>
            </motion.div>

            {/* Trust Signal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:mt-6"
            >
              {/* Desktop Stats (Hidden on Mobile) */}
              <div className="hidden lg:block pt-6 border-t border-border">
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-x-8 sm:gap-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="font-medium">{t('common.system_online')}</span>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-8">
                    <div>
                      <span className="font-bold text-white">{t('hero.stat_revenue')}</span>
                      <span className="text-muted-foreground/60 ml-1.5">{t('hero.stat_revenue_label')}</span>
                    </div>
                    <div>
                      <span className="font-bold text-white">{t('hero.stat_coverage')}</span>
                      <span className="text-muted-foreground/60 ml-1.5">{t('hero.stat_coverage_label')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Trust Marquee (Removed to avoid duplication with main SocialProofBar) */}
            </motion.div>
          </div>

          {/* ================================================================
              RIGHT SIDE - CARDS
              Mobile: Dashboard preview is now in the left column after headline
              Desktop: 3D interactive stack (UNCHANGED)
              ================================================================ */}


          {/* Right side spacer for layout balance on desktop */}
          <div className="hidden lg:block lg:col-span-6" />

        </div>
      </div>
    </section >
  );
}

