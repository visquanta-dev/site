import type { Metadata } from 'next';
import NotFoundClient from '@/components/NotFoundClient';

export const metadata: Metadata = {
    title: '404 — Page not found',
    description:
        'That URL is not in our system. Head back to VisQuanta — AI built for car dealerships — or book a walkthrough.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    return <NotFoundClient />;
}
