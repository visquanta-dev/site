'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Phone, Mail } from 'lucide-react';
import { useLocale } from '@/lib/i18n/LocaleProvider';
import { CA, GB } from 'country-flag-icons/react/3x2';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const flagComponents: Record<string, React.ComponentType<any>> = {
    canada: CA,
    uk: GB,
};

type Location = 'canada' | 'uk' | null;

const locations = {
    hq: {
        city: 'Miami',
        badge: 'HQ',
        timezone: 'EST',
        address: ['2222 Ponce de Leon Blvd', '3rd Floor', 'Miami, FL 33134'],
        phone: '+1 786-686-6554',
        email: 'info@visquanta.com',
    },
    texas: {
        city: 'The Woodlands',
        timezone: 'CST',
        address: ['2001 Timberloch Place', 'Suite 500', 'The Woodlands, TX 77380'],
    },
    canada: {
        id: 'canada',
        label: 'Canada',
        timezone: 'MST',
        address: ['#301 1122 3 St SE Ste 1906', 'Calgary, AB T2G 0E7'],
        phone: '1-866-285-8724',
        email: 'canada@visquanta.com',
    },
    uk: {
        id: 'uk',
        label: 'United Kingdom',
        timezone: 'GMT',
        address: ['7 Bell Yard', 'The Strand', 'London', 'WC2A 2JR'],
        phone: '020 8058 5269',
        email: 'uk@visquanta.com',
    },

};

export default function GlobalPresence() {
    const { locale } = useLocale();

    const [expanded, setExpanded] = useState<Location>(() => {
        if (locale === 'en-CA') return 'canada';
        if (locale === 'en-GB') return 'uk';
        return null; // Default to collapsed
    });

    const toggleLocation = (location: Location) => {
        setExpanded(prev => prev === location ? null : location);
    };

    return (
        <div className="bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF7404]/5 rounded-full blur-[80px]" />

            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <Globe className="w-5 h-5 text-[#FF7404]" />
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Global Presence</span>
                </div>

                {/* HQ Section (Always Visible) */}
                <div className="mb-6 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#FF7404]" />
                    <div className="pl-6">
                        <div className="flex items-start justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-white font-bold text-lg">{locations.hq.city}</span>
                                    <span className="text-[8px] font-black text-[#FF7404] bg-[#FF7404]/10 px-2 py-0.5 rounded uppercase tracking-wider">
                                        {locations.hq.badge}
                                    </span>
                                </div>
                                <div className="text-zinc-500 text-sm leading-relaxed mb-3">
                                    {locations.hq.address.map((line, i) => (
                                        <div key={i}>{line}</div>
                                    ))}
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-sm text-zinc-400 group">
                                        <Phone className="w-3.5 h-3.5 text-[#FF7404]" />
                                        <a href={`tel:${locations.hq.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                                            {locations.hq.phone}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-zinc-400 group">
                                        <Mail className="w-3.5 h-3.5 text-[#FF7404]" />
                                        <a href={`mailto:${locations.hq.email}`} className="hover:text-white transition-colors">
                                            {locations.hq.email}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="text-[10px] font-mono text-zinc-600 bg-white/5 px-2 py-1 rounded">
                                {locations.hq.timezone}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Texas Section (Always Visible) */}
                <div className="mb-6 relative mt-6">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white/20" />
                    <div className="pl-6">
                        <div className="flex items-start justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-white font-bold text-lg">{locations.texas.city}</span>
                                </div>
                                <div className="text-zinc-500 text-sm leading-relaxed mb-3">
                                    {locations.texas.address.map((line, i) => (
                                        <div key={i}>{line}</div>
                                    ))}
                                </div>
                            </div>
                            <div className="text-[10px] font-mono text-zinc-600 bg-white/5 px-2 py-1 rounded">
                                {locations.texas.timezone}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

                {/* Flags Row */}
                <div className="flex justify-evenly items-start px-2 sm:px-8 mb-6">
                    {(['canada', 'uk'] as const).map((locKey) => {
                        const loc = locations[locKey];
                        const isActive = expanded === locKey;
                        const FlagIcon = flagComponents[locKey];

                        return (
                            <button
                                key={locKey}
                                onClick={() => toggleLocation(locKey)}
                                aria-expanded={isActive}
                                aria-controls={`details-${locKey}`}
                                aria-label={`Show ${loc.label} office details`}
                                className="group flex flex-col items-center gap-2 focus:outline-none"
                            >
                                <motion.div
                                    className={`relative rounded-md overflow-hidden shadow-lg transition-transform duration-200 group-hover:scale-110 ${isActive ? 'scale-110 ring-2 ring-[#FF7404]/60 shadow-[0_0_15px_rgba(255,116,4,0.2)]' : 'opacity-80 group-hover:opacity-100'}`}
                                >
                                    <div className="w-20 h-14 sm:w-24 sm:h-16">
                                        <FlagIcon className="w-full h-full" />
                                    </div>
                                    {/* Glossy overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-white/10 to-transparent pointer-events-none mix-blend-overlay" />
                                </motion.div>
                                <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors duration-200 ${isActive ? 'text-[#FF7404]' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                                    {loc.label}
                                </span>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className="w-1 h-1 rounded-full bg-[#FF7404] mt-1"
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Extended Details */}
                <div className="relative min-h-[px]">
                    <AnimatePresence mode="wait">
                        {expanded && (
                            <motion.div
                                key={expanded}
                                id={`details-${expanded}`}
                                role="region"
                                initial={{ opacity: 0, y: -10, height: 0 }}
                                animate={{ opacity: 1, y: 0, height: 'auto' }}
                                exit={{ opacity: 0, y: -10, height: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 relative">
                                    <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-white/10 rounded-full" />

                                    <div className="pl-4">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="font-bold text-white">{locations[expanded].label}</div>
                                            <div className="text-[10px] font-mono text-zinc-600 bg-white/5 px-2 py-1 rounded">
                                                {locations[expanded].timezone}
                                            </div>
                                        </div>

                                        <div className="text-zinc-500 text-sm leading-relaxed mb-4">
                                            {locations[expanded].address.map((line, i) => (
                                                <div key={i}>{line}</div>
                                            ))}
                                        </div>

                                        <div className="space-y-2">
                                            {locations[expanded].phone && (
                                                <div className="flex items-center gap-2 text-sm text-zinc-400">
                                                    <Phone className="w-3.5 h-3.5 text-[#FF7404]" />
                                                    <a href={`tel:${locations[expanded].phone?.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                                                        {locations[expanded].phone}
                                                    </a>
                                                </div>
                                            )}
                                            <div className="flex items-center gap-2 text-sm text-zinc-400">
                                                <Mail className="w-3.5 h-3.5 text-[#FF7404]" />
                                                <a href={`mailto:${locations[expanded].email}`} className="hover:text-white transition-colors">
                                                    {locations[expanded].email}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Support Info */}
                <div className="mt-8 pt-6 border-t border-white/5">
                    <div className="flex items-center gap-3 p-4 bg-green-500/5 border border-green-500/10 rounded-xl">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <div>
                            <div className="text-green-400 text-sm font-bold">24/7 Client Support</div>
                            <div className="text-zinc-500 text-xs">Active clients receive priority support</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
