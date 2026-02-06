
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Loader2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

function UnsubscribeContent() {
    const searchParams = useSearchParams();
    const email = searchParams.get('email');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleUnsubscribe = async () => {
        if (!email) return;
        setStatus('loading');

        try {
            const response = await fetch('/api/newsletter/unsubscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setMessage('You have been successfully unsubscribed from our newsletter.');
            } else {
                setStatus('error');
                setMessage(data.error || 'Something went wrong. Please try again later.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Failed to connect to the server.');
        }
    };

    return (
        <div className="max-w-md mx-auto text-center">
            {status === 'idle' && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <h1 className="text-3xl font-black text-white mb-4">Unsubscribe</h1>
                    <p className="text-zinc-400 mb-8">
                        Are you sure you want to unsubscribe {email ? <span className="text-white font-medium">{email}</span> : 'your email'}?
                        You'll miss out on our weekly automotive AI insights.
                    </p>
                    <div className="space-y-4">
                        <Button
                            onClick={handleUnsubscribe}
                            className="w-full bg-white/5 hover:bg-red-500/20 text-white border border-white/10 hover:border-red-500/30 h-12 rounded-xl"
                        >
                            Yes, Unsubscribe
                        </Button>
                        <Button asChild className="w-full bg-[#FF7404] hover:bg-[#ff8a2b] text-black h-12 rounded-xl font-bold">
                            <Link href="/blog">No, Keep Me Subscribed</Link>
                        </Button>
                    </div>
                </motion.div>
            )}

            {status === 'loading' && (
                <div className="py-12 flex flex-col items-center">
                    <Loader2 className="w-12 h-12 text-[#FF7404] animate-spin mb-4" />
                    <p className="text-zinc-400">Processing your request...</p>
                </div>
            )}

            {status === 'success' && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h1 className="text-3xl font-black text-white mb-4">Unsubscribed</h1>
                    <p className="text-zinc-400 mb-8">{message}</p>
                    <Button asChild className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 h-12 rounded-xl">
                        <Link href="/">Return to Homepage</Link>
                    </Button>
                </motion.div>
            )}

            {status === 'error' && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <div className="w-20 h-20 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <XCircle className="w-10 h-10 text-red-500" />
                    </div>
                    <h1 className="text-3xl font-black text-white mb-4">Error</h1>
                    <p className="text-zinc-400 mb-8">{message}</p>
                    <Button
                        onClick={() => setStatus('idle')}
                        className="w-full bg-[#FF7404] hover:bg-[#ff8a2b] text-black h-12 rounded-xl font-bold"
                    >
                        Try Again
                    </Button>
                </motion.div>
            )}
        </div>
    );
}

export default function UnsubscribePage() {
    return (
        <main className="bg-[#020202] min-h-screen">
            <Navigation />
            <section className="pt-40 pb-32 px-4">
                <div className="container mx-auto">
                    <Suspense fallback={
                        <div className="flex justify-center py-20">
                            <Loader2 className="w-8 h-8 text-[#FF7404] animate-spin" />
                        </div>
                    }>
                        <UnsubscribeContent />
                    </Suspense>
                </div>
            </section>
            <Footer />
        </main>
    );
}
