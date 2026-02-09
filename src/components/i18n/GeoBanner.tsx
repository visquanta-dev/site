'use client';

// src/components/i18n/GeoBanner.tsx
// Dismissible banner suggesting locale switch based on detected country

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe } from 'lucide-react';
import { Locale, localeConfig, localizePathname, GEO_BANNER_DISMISSED_COOKIE } from '@/lib/i18n/config';
import { useLocale } from '@/lib/i18n/LocaleProvider';

interface GeoBannerProps {
    suggestedLocale: Locale | null;
    detectedCountry: string | null;
}

export default function GeoBanner({ suggestedLocale, detectedCountry }: GeoBannerProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const { t } = useLocale();

    useEffect(() => {
        // Check if banner was already dismissed via cookie
        const dismissed = document.cookie.includes(GEO_BANNER_DISMISSED_COOKIE);

        if (!dismissed && suggestedLocale && localeConfig[suggestedLocale]?.enabled) {
            // Small delay for smoother page load experience
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, [suggestedLocale]);

    const handleDismiss = () => {
        setIsDismissed(true);

        // Set cookie to dismiss for 30 days
        const expires = new Date();
        expires.setDate(expires.getDate() + 30);
        document.cookie = `${GEO_BANNER_DISMISSED_COOKIE}=true; path=/; expires=${expires.toUTCString()}; SameSite=Lax`;

        setTimeout(() => setIsVisible(false), 300);
    };

    const handleSwitch = () => {
        if (!suggestedLocale) return;

        // Set locale preference cookie
        const expires = new Date();
        expires.setFullYear(expires.getFullYear() + 1);
        document.cookie = `vq-locale=${suggestedLocale}; path=/; expires=${expires.toUTCString()}; SameSite=Lax`;

        // Navigate to localized path
        const newPath = localizePathname(pathname, suggestedLocale);
        router.push(newPath);

        handleDismiss();
    };

    if (!suggestedLocale || !localeConfig[suggestedLocale]?.enabled) {
        return null;
    }

    const config = localeConfig[suggestedLocale];
    const countryName = config.country || detectedCountry || 'your country';

    return (
        <AnimatePresence>
            {isVisible && !isDismissed && (
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-[#FF7404] to-[#ff8c2e] text-black"
                >
                    <div className="max-w-7xl mx-auto px-4 py-3">
                        <div className="flex items-center justify-between gap-4">
                            {/* Message */}
                            <div className="flex items-center gap-3 flex-1">
                                <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-black/10">
                                    <Globe className="w-5 h-5" />
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                    <span className="text-sm font-medium">
                                        {t('geo_banner.message', { country: countryName })}
                                    </span>
                                    <span className="text-sm text-black/70 hidden md:inline">
                                        Would you like to view our {countryName} site?
                                    </span>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-2 sm:gap-3">
                                {/* Switch Button */}
                                <button
                                    onClick={handleSwitch}
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white text-sm font-semibold hover:bg-black/80 transition-colors whitespace-nowrap"
                                >
                                    <span>{config.flag}</span>
                                    <span className="hidden sm:inline">Switch to {config.name}</span>
                                    <span className="sm:hidden">Switch</span>
                                </button>

                                {/* Dismiss Button */}
                                <button
                                    onClick={handleDismiss}
                                    className="p-2 rounded-lg hover:bg-black/10 transition-colors"
                                    aria-label="Dismiss"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
