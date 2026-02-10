import { headers } from 'next/headers';

export async function getServerLocale(): Promise<string> {
    const headersList = await headers();
    return headersList.get('x-locale') || 'en-US';
}

export async function getServerLocalePrefix(): Promise<string> {
    const locale = await getServerLocale();
    if (locale === 'en-CA') return '/ca';
    if (locale === 'en-GB') return '/uk';
    return '';
}
