
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Loader2, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

function ConfirmContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const email = searchParams.get('email');
    const token = searchParams.get('token');
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const verify = async () => {
            if (!email || !token) {
                setStatus('error');
                setMessage('Invalid confirmation link.');
                return;
            }

            try {
                const response = await fetch('/api/newsletter/confirm', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, token }),
                });

                const data = await response.json();

                if (response.ok) {
                    setStatus('success');
                    setMessage('Your subscription has been confirmed! Welcome to the loop.');
                } else {
                    setStatus('error');
                    setMessage(data.error || 'Verification failed. The link may be expired.');
                }
            } catch (error) {
                setStatus('error');
                setMessage('Failed to connect to the server.');
            }
        };

        verify();
    }, [email, token]);

    return (
        <div className="max-w-xl mx-auto text-center">
            {status === 'loading' && (
                <div className="py-20 flex flex-col items-center">
                    <div className="relative mb-8">
                        <div className="absolute inset-0 bg-[#FF7404]/20 blur-2xl rounded-full" />
                        <Loader2 className="w-16 h-16 text-[#FF7404] animate-spin relative" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Verifying your email...</h2>
                    <p className="text-zinc-500">Just a moment while we secure your spot.</p>
                </div>
            )}

            {status === 'success' && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="py-12 px-8 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden"
                >
                    {/* Background Shine */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FF7404]/10 rounded-full blur-[80px]" />

                    <div className="w-24 h-24 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-12 h-12 text-green-500" />
                    </div>

                    <h1 className="text-4xl font-black text-white mb-4 tracking-tight">You're All Set!</h1>
                    <p className="text-zinc-400 text-lg mb-10 max-w-md mx-auto">
                        {message}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild className="bg-[#FF7404] hover:bg-[#ff8a2b] text-black h-14 px-8 rounded-2xl font-bold shadow-[0_0_30px_-5px_rgba(255,116,4,0.3)]">
                            <Link href="/blog" className="flex items-center gap-2">
                                Browse Insights
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="border-white/10 text-white hover:bg-white/5 h-14 px-8 rounded-2xl font-bold">
                            <Link href="/">Homepage</Link>
                        </Button>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#FF7404]" />
                        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                            Join 2,500+ Dealers Outperforming The Market
                        </span>
                    </div>
                </motion.div>
            )}

            {status === 'error' && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-12 px-8 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl"
                >
                    <div className="w-20 h-20 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <XCircle className="w-10 h-10 text-red-500" />
                    </div>
                    <h1 className="text-3xl font-black text-white mb-4">Verification Error</h1>
                    <p className="text-zinc-400 mb-10">{message}</p>
                    <Button asChild className="bg-white/5 hover:bg-white/10 text-white border border-white/10 h-12 px-8 rounded-xl">
                        <Link href="/blog">Back to Newsletter</Link>
                    </Button>
                </motion.div>
            )}
        </div>
    );
}

export default function ConfirmPage() {
    return (
        <main className="bg-[#020202] min-h-screen">
            <Navigation />
            <section className="pt-48 pb-32 px-4 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

                <div className="container mx-auto relative z-10">
                    <Suspense fallback={
                        <div className="flex justify-center py-20">
                            <Loader2 className="w-8 h-8 text-[#FF7404] animate-spin" />
                        </div>
                    }>
                        <ConfirmContent />
                    </Suspense>
                </div>
            </section>
            <Footer />
        </main>
    );
}
