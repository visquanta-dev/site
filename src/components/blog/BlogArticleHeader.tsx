'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link2, Linkedin, Twitter, Mail, Check, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Article {
    title: string;
    publishedAt: string;
    readTime: number;
}

export function BlogArticleHeader({ article }: { article: Article }) {
    const [showCopied, setShowCopied] = useState(false);

    const copyLink = async () => {
        const url = `${window.location.href}?utm_source=share&utm_medium=copy`;
        await navigator.clipboard.writeText(url);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
    };

    const shareLinkedIn = () => {
        const url = encodeURIComponent(`${window.location.href}?utm_source=share&utm_medium=linkedin`);
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=600');
    };

    const shareTwitter = () => {
        const url = encodeURIComponent(`${window.location.href}?utm_source=share&utm_medium=twitter`);
        const text = encodeURIComponent(`${article.title} | via @VisQuanta`);
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
    };

    const shareEmail = () => {
        const subject = encodeURIComponent(article.title);
        const body = encodeURIComponent(`I thought you might find this interesting:\n\n${article.title}\n\n${window.location.href}?utm_source=share&utm_medium=email`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <header>
            {/* Back Link */}
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
            >
                <ArrowLeft className="w-4 h-4" />
                Back
            </Link>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mt-6 leading-tight">
                {article.title}
            </h1>

            {/* Meta Row */}
            <div className="flex items-center justify-between mt-4 gap-4 flex-wrap">
                <p className="text-zinc-500 text-sm">
                    {formatDate(article.publishedAt)}  •  {article.readTime} min read
                </p>

                {/* Share Icon Row */}
                <div className="relative flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-semibold mr-1 hidden sm:inline">
                        Share
                    </span>
                    <button
                        onClick={shareLinkedIn}
                        aria-label="Share on LinkedIn"
                        className="group flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] text-zinc-400 hover:text-[#FF7404] hover:border-[#FF7404]/40 hover:bg-[#FF7404]/[0.06] transition-all"
                    >
                        <Linkedin className="w-4 h-4" />
                    </button>
                    <button
                        onClick={shareTwitter}
                        aria-label="Share on X"
                        className="group flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] text-zinc-400 hover:text-[#FF7404] hover:border-[#FF7404]/40 hover:bg-[#FF7404]/[0.06] transition-all"
                    >
                        <Twitter className="w-4 h-4" />
                    </button>
                    <button
                        onClick={shareEmail}
                        aria-label="Share via email"
                        className="group flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] text-zinc-400 hover:text-[#FF7404] hover:border-[#FF7404]/40 hover:bg-[#FF7404]/[0.06] transition-all"
                    >
                        <Mail className="w-4 h-4" />
                    </button>
                    <button
                        onClick={copyLink}
                        aria-label="Copy link"
                        className="group flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] text-zinc-400 hover:text-[#FF7404] hover:border-[#FF7404]/40 hover:bg-[#FF7404]/[0.06] transition-all"
                    >
                        <Link2 className="w-4 h-4" />
                    </button>

                    {/* Copied Toast */}
                    <AnimatePresence>
                        {showCopied && (
                            <motion.div
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="absolute right-0 top-full mt-2 px-3 py-2 bg-green-500/10 border border-green-500/20 rounded-lg whitespace-nowrap z-20"
                            >
                                <p className="text-sm text-green-500 flex items-center gap-2">
                                    <Check className="w-4 h-4" />
                                    Link copied!
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
}
