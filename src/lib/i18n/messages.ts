// src/lib/i18n/messages.ts
// Load translation messages for each locale

import enUS from '../../../messages/en-US.json';
import enCA from '../../../messages/en-CA.json';
import enGB from '../../../messages/en-GB.json';
import { Locale } from './config';

// Use en-US as the base type for all messages
export type Messages = typeof enUS;

// Cast locale files to Messages type (they share the same structure)
const messages: Record<Locale, Messages> = {
    'en-US': enUS as Messages,
    'en-CA': enCA as Messages,
    'en-GB': enGB as Messages,
};

export function getMessages(locale: Locale): Messages {
    return messages[locale] || messages['en-US'];
}

// Type-safe nested key access
type NestedKeyOf<T> = T extends object
    ? { [K in keyof T & string]: T[K] extends object
        ? `${K}` | `${K}.${NestedKeyOf<T[K]>}`
        : `${K}`
    }[keyof T & string]
    : never;

export type TranslationKey = NestedKeyOf<Messages>;

// Get a nested value from an object using dot notation
// Returns the raw value (string or boolean)
export function getNestedValue(obj: Record<string, unknown>, path: string): string | boolean {
    const keys = path.split('.');
    let current: unknown = obj;

    for (const key of keys) {
        if (current === null || current === undefined || typeof current !== 'object') {
            return path; // Return the key if path is invalid
        }
        current = (current as Record<string, unknown>)[key];
    }

    if (typeof current === 'string') return current;
    if (typeof current === 'boolean') return current;
    return path; // Return the key as fallback
}

// Interpolate variables in a string
export function interpolate(template: string, variables: Record<string, string>): string {
    return template.replace(/\{(\w+)\}/g, (_, key) => variables[key] || `{${key}}`);
}
