'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Home, MapPinOff, Newspaper, Sparkles } from 'lucide-react';
import { RequestDemoButton } from '@/components/CalendlyModal';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/lib/i18n/LocaleProvider';
import { localeLink } from '@/lib/locale-link';

/** Stylized side-profile sedan — SVG, no external asset */
function CruiserCar({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 220 72"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
        >
            <path
                d="M4 52h212l-2-8-14-6-32-2-24-14H78L52 28l-38 4-8 8-2 12Z"
                className="fill-zinc-800 stroke-zinc-600"
                strokeWidth="1.2"
            />
            <path
                d="M86 26h62l20 12h32l10 4v10H4V40l8-10 32-4Z"
                className="fill-zinc-700/90"
            />
            <path
                d="M92 28h52l16 10H88L80 30l12-2Z"
                className="fill-zinc-900/80"
            />
            <circle cx="54" cy="54" r="11" className="fill-zinc-950 stroke-zinc-600" strokeWidth="2" />
            <circle cx="54" cy="54" r="4" className="fill-zinc-600" />
            <circle cx="168" cy="54" r="11" className="fill-zinc-950 stroke-zinc-600" strokeWidth="2" />
            <circle cx="168" cy="54" r="4" className="fill-zinc-600" />
            <ellipse cx="214" cy="44" rx="3" ry="5" className="fill-[#ff7404]" />
            <ellipse cx="218" cy="44" rx="14" ry="10" className="fill-[#ff7404]/25 not-found-headlight-glow" />
        </svg>
    );
}

export default function NotFoundClient() {
    const prefersReducedMotion = useReducedMotion();
    const { locale, t } = useLocale();
    const homeHref = localeLink('/', locale);
    const blogHref = localeLink('/blog', locale);

    return (
        <div className="min-h-[100dvh] w-full bg-[#050505] text-white relative overflow-hidden flex flex-col">
            <div className="pointer-events-none absolute inset-0 bg-enterprise-grid opacity-[0.12]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(255,116,4,0.14),transparent_55%)]" />
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-[55vh] w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,116,4,0.06),transparent_70%)] blur-3xl" />

            <div
                className="pointer-events-none absolute left-1/2 top-[8%] -translate-x-1/2 select-none text-[clamp(8rem,22vw,18rem)] font-black leading-none tracking-tighter text-white/[0.04]"
                aria-hidden
            >
                404
            </div>

            <header className="relative z-20 flex items-center justify-between px-5 py-5 md:px-10 md:py-8">
                <Link href={homeHref} className="relative z-10 flex items-center gap-2 opacity-90 transition-opacity hover:opacity-100">
                    <Image
                        src="/images/visquanta-logo-white.png"
                        alt="VisQuanta"
                        width={140}
                        height={32}
                        className="h-7 w-auto md:h-8"
                        priority
                    />
                </Link>
                <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 md:gap-4 md:text-[11px]">
                    <Link href={homeHref} className="hidden text-zinc-400 transition-colors hover:text-white sm:inline">
                        Home
                    </Link>
                    <Link href={blogHref} className="text-zinc-400 transition-colors hover:text-white">
                        Blog
                    </Link>
                </nav>
            </header>

            <main className="relative z-10 flex flex-1 flex-col items-center px-5 pb-6 pt-2 md:px-10 md:pb-10">
                <motion.div
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="flex max-w-2xl flex-col items-center text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ff7404]/25 bg-[#ff7404]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#ff7404]">
                        <RadioPulse />
                        <span>Route not in CRM</span>
                    </div>

                    <h1 className="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
                        This page{' '}
                        <span className="bg-gradient-to-r from-white via-white to-zinc-500 bg-clip-text text-transparent">
                            left the lot
                        </span>
                        .
                    </h1>

                    <p className="mb-2 max-w-lg text-base leading-relaxed text-zinc-400 md:text-lg">
                        Even our routing layer can&apos;t map this URL — it&apos;s not in inventory, not in the CRM, and
                        not on the showroom floor. Let&apos;s get you back to something that converts.
                    </p>

                    <p className="mb-10 flex flex-wrap items-center justify-center gap-2 text-sm text-zinc-500">
                        <MapPinOff className="h-4 w-4 shrink-0 text-zinc-600" aria-hidden />
                        <span>AI for dealerships · Speed-to-lead · Revenue recovery</span>
                    </p>

                    <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
                        <Button
                            asChild
                            className="h-12 rounded-xl bg-[#FF7404] px-6 font-black uppercase tracking-widest text-black shadow-[0_20px_40px_-10px_rgba(255,116,4,0.45)] hover:bg-[#ff8a2b]"
                        >
                            <Link href={homeHref}>
                                <Home className="mr-2 h-4 w-4" />
                                Back to homepage
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="h-12 rounded-xl border-white/15 bg-white/5 font-semibold text-white hover:bg-white/10"
                        >
                            <Link href={blogHref}>
                                <Newspaper className="mr-2 h-4 w-4 text-[#ff7404]" />
                                Read the blog
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-6">
                        <RequestDemoButton className="group inline-flex items-center gap-2 bg-transparent text-sm font-semibold text-[#ff7404] underline decoration-[#ff7404]/50 underline-offset-4 transition-colors hover:bg-transparent hover:text-[#ff9d4d] hover:decoration-[#ff9d4d]">
                            <Sparkles className="h-4 w-4" />
                            {t('common.schedule_cta')}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </RequestDemoButton>
                    </div>
                </motion.div>
            </main>

            <section
                className="relative z-[5] mt-auto h-[min(38vh,320px)] w-full shrink-0 overflow-hidden border-t border-white/10 bg-gradient-to-t from-[#020202] via-[#080808] to-transparent"
                aria-hidden
            >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff7404]/40 to-transparent" />

                <div className="absolute bottom-[72px] left-0 right-0 h-24 bg-gradient-to-t from-[#ff7404]/[0.07] to-transparent blur-2xl md:bottom-[88px]" />

                <div className="absolute bottom-0 left-0 right-0 h-[72px] bg-gradient-to-b from-zinc-900/80 to-[#030303] md:h-[88px]">
                    <div className="not-found-road-dash absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 opacity-80" />
                    <div className="absolute bottom-2 left-4 right-4 top-2 border-x border-dashed border-white/[0.07]" />
                </div>

                <div
                    className={`pointer-events-none absolute bottom-[76px] left-0 z-10 w-[min(46vw,220px)] md:bottom-[92px] ${prefersReducedMotion ? 'left-1/2 -translate-x-1/2' : 'not-found-car-cruise'}`}
                >
                    <CruiserCar className="w-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)]" />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            </section>
        </div>
    );
}

function RadioPulse() {
    return (
        <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-[#ff7404] opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff7404]" />
        </span>
    );
}
