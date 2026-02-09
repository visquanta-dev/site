'use client';

// src/lib/i18n/LocaleProvider.tsx
// React Context provider for internationalization

import React, { createContext, useContext, useMemo, useCallback } from 'react';
import { Locale, defaultLocale } from './config';
import { getMessages, getNestedValue, interpolate, Messages, TranslationKey } from './messages';

interface LocaleContextValue {
    locale: Locale;
    messages: Messages;
    t: (key: TranslationKey, variables?: Record<string, string>) => string;
    tBool: (key: TranslationKey) => boolean;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

interface LocaleProviderProps {
    locale: Locale;
    children: React.ReactNode;
}

export function LocaleProvider({ locale, children }: LocaleProviderProps) {
    const messages = useMemo(() => getMessages(locale), [locale]);

    const t = useCallback((key: TranslationKey, variables?: Record<string, string>): string => {
        const value = getNestedValue(messages as unknown as Record<string, unknown>, key);

        // Convert boolean to string if needed
        const strValue = typeof value === 'boolean' ? String(value) : value;

        if (variables) {
            return interpolate(strValue, variables);
        }

        return strValue;
    }, [messages]);

    const tBool = useCallback((key: TranslationKey): boolean => {
        const value = getNestedValue(messages as unknown as Record<string, unknown>, key);
        if (typeof value === 'boolean') return value;
        if (typeof value === 'string') return value === 'true';
        return false;
    }, [messages]);

    const contextValue = useMemo(() => ({
        locale,
        messages,
        t,
        tBool,
    }), [locale, messages, t, tBool]);

    return (
        <LocaleContext.Provider value={contextValue}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale(): LocaleContextValue {
    const context = useContext(LocaleContext);

    if (!context) {
        // Return a fallback for components outside the provider
        const fallbackMessages = getMessages(defaultLocale);
        return {
            locale: defaultLocale,
            messages: fallbackMessages,
            t: (key: TranslationKey, variables?: Record<string, string>) => {
                const value = getNestedValue(fallbackMessages as unknown as Record<string, unknown>, key);
                const strValue = typeof value === 'boolean' ? String(value) : value;
                return variables ? interpolate(strValue, variables) : strValue;
            },
            tBool: (key: TranslationKey): boolean => {
                const value = getNestedValue(fallbackMessages as unknown as Record<string, unknown>, key);
                if (typeof value === 'boolean') return value;
                if (typeof value === 'string') return value === 'true';
                return false;
            },
        };
    }

    return context;
}

// Server-side helper to get locale from pathname
export function getServerLocale(pathname: string): Locale {
    const segments = pathname.split('/').filter(Boolean);
    const prefix = segments[0];

    if (prefix === 'ca') return 'en-CA';
    if (prefix === 'uk') return 'en-GB';

    return defaultLocale;
}
