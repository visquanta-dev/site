'use client';

// src/components/i18n/LocaleSwitcher.tsx
// Dropdown locale selector for the navigation bar

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { US, CA, GB } from 'country-flag-icons/react/3x2';
import { Locale, localeConfig, locales, localizePathname, LOCALE_COOKIE_NAME } from '@/lib/i18n/config';
import { useLocale } from '@/lib/i18n/LocaleProvider';

const FlagComponents: Record<Locale, React.ElementType> = {
    'en-US': US,
    'en-CA': CA,
    'en-GB': GB,
};

export default function LocaleSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const router = useRouter();
    const { locale: currentLocale, t } = useLocale();

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLocaleChange = (newLocale: Locale) => {
        if (newLocale === currentLocale) {
            setIsOpen(false);
            return;
        }

        // Check if locale is enabled
        if (!localeConfig[newLocale].enabled) {
            setIsOpen(false);
            return;
        }

        // Set cookie for persistence
        document.cookie = `${LOCALE_COOKIE_NAME}=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;

        // Navigate to localized path
        const newPath = localizePathname(pathname, newLocale);
        router.push(newPath);
        setIsOpen(false);
    };

    const currentConfig = localeConfig[currentLocale];
    const CurrentFlag = FlagComponents[currentLocale];

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm text-white/80 hover:text-white"
                aria-label={t('locale_switcher.select_region')}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
            >
                <span className="flex items-center w-5 h-3.5 relative shadow-sm rounded-sm overflow-hidden">
                    <CurrentFlag className="w-full h-full object-cover" />
                </span>
                <span className="hidden md:inline text-xs font-medium">{currentConfig.name}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden z-50"
                        role="listbox"
                        aria-label={t('locale_switcher.select_region')}
                    >
                        {/* Header */}
                        <div className="px-4 py-3 border-b border-white/5">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                                {t('locale_switcher.select_region')}
                            </span>
                        </div>

                        {/* Locale Options */}
                        <div className="py-1">
                            {locales.map((locale) => {
                                const config = localeConfig[locale];
                                const isActive = locale === currentLocale;
                                const isDisabled = !config.enabled;
                                const Flag = FlagComponents[locale];

                                return (
                                    <button
                                        key={locale}
                                        onClick={() => handleLocaleChange(locale)}
                                        disabled={isDisabled}
                                        className={`
                                            w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200
                                            ${isActive
                                                ? 'bg-[#FF7404]/10 text-[#FF7404]'
                                                : isDisabled
                                                    ? 'text-white/30 cursor-not-allowed'
                                                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                                            }
                                        `}
                                        role="option"
                                        aria-selected={isActive}
                                    >
                                        {/* Flag */}
                                        <span className={`w-6 h-4 relative shadow-sm rounded-sm overflow-hidden flex-shrink-0 ${isDisabled ? 'grayscale opacity-50' : ''}`}>
                                            <Flag className="w-full h-full object-cover" />
                                        </span>

                                        {/* Name & Status */}
                                        <div className="flex-1">
                                            <span className={`text-sm font-medium ${isDisabled ? 'opacity-50' : ''}`}>
                                                {config.name}
                                            </span>
                                            {isDisabled && (
                                                <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-white/30 bg-white/5 px-2 py-0.5 rounded">
                                                    {t('locale_switcher.coming_soon')}
                                                </span>
                                            )}
                                        </div>

                                        {/* Active Indicator */}
                                        {isActive && (
                                            <div className="w-2 h-2 rounded-full bg-[#FF7404]" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
