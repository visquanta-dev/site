import { headers } from 'next/headers';

export async function getServerLocale(): Promise<string> {
    const headersList = await headers();
    return headersList.get('x-locale') || 'en-US';
}

export async function getServerLocalePrefix(): Promise<string> {
    const locale = await getServerLocale();
    // Only en-CA has an active route handler (/ca).
    // en-GB has NO /uk route handler — do not generate /uk prefix.
    if (locale === 'en-CA') return '/ca';
    return '';
}
