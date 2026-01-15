'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Link2, Linkedin, Twitter, Mail, Check, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Article {
    title: string;
    publishedAt: string;
    readTime: number;
}

export function BlogArticleHeader({ article }: { article: Article }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showCopied, setShowCopied] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Escape to close
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setShowDropdown(false);
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    const handleShare = async () => {
        // Mobile: native share
        if (navigator.share) {
            await navigator.share({
                title: article.title,
                text: `${article.title} — via VisQuanta`,
                url: window.location.href
            });
        } else {
            // Desktop: dropdown
            setShowDropdown(!showDropdown);
        }
    };

    const copyLink = async () => {
        const url = `${window.location.href}?utm_source=share&utm_medium=copy`;
        await navigator.clipboard.writeText(url);
        setShowCopied(true);
        setShowDropdown(false);
        setTimeout(() => setShowCopied(false), 2000);
    };

    const shareLinkedIn = () => {
        const url = encodeURIComponent(`${window.location.href}?utm_source=share&utm_medium=linkedin`);
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=600');
        setShowDropdown(false);
    };

    const shareTwitter = () => {
        const url = encodeURIComponent(`${window.location.href}?utm_source=share&utm_medium=twitter`);
        const text = encodeURIComponent(`${article.title} — via @VisQuanta`);
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
        setShowDropdown(false);
    };

    const shareEmail = () => {
        const subject = encodeURIComponent(article.title);
        const body = encodeURIComponent(`I thought you might find this interesting:\n\n${article.title}\n\n${window.location.href}?utm_source=share&utm_medium=email`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
        setShowDropdown(false);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <header className="max-w-3xl mx-auto px-4">
            {/* Back Link */}
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
            >
                <ArrowLeft className="w-4 h-4" />
                Back
            </Link>

            {/* Headline */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white mt-6 leading-tight">
                {article.title}
            </h1>

            {/* Meta Row */}
            <div className="flex items-center justify-between mt-4">
                <p className="text-zinc-500 text-sm">
                    {formatDate(article.publishedAt)}  •  {article.readTime} min read
                </p>

                {/* Share Button */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={handleShare}
                        className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                        <Share2 className="w-4 h-4" />
                        <span className="hidden sm:inline">Share</span>
                    </button>

                    {/* Copied Toast */}
                    <AnimatePresence>
                        {showCopied && (
                            <motion.div
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="absolute right-0 top-full mt-2 px-3 py-2 bg-green-500/10 border border-green-500/20 rounded-lg whitespace-nowrap"
                            >
                                <p className="text-sm text-green-500 flex items-center gap-2">
                                    <Check className="w-4 h-4" />
                                    Link copied!
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Dropdown */}
                    <AnimatePresence>
                        {showDropdown && (
                            <motion.div
                                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                                transition={{ duration: 0.15 }}
                                className="absolute right-0 top-full mt-2 w-56 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-50 item-start text-start"
                            >
                                <div className="px-4 py-3 border-b border-zinc-800">
                                    <p className="text-sm font-medium text-white">Share this article</p>
                                </div>
                                <div className="py-2">
                                    <button onClick={copyLink} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-colors">
                                        <Link2 className="w-4 h-4" />
                                        Copy link
                                    </button>
                                    <button onClick={shareLinkedIn} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-colors">
                                        <Linkedin className="w-4 h-4" />
                                        LinkedIn
                                    </button>
                                    <button onClick={shareTwitter} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-colors">
                                        <Twitter className="w-4 h-4" />
                                        X (Twitter)
                                    </button>
                                    <button onClick={shareEmail} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-colors">
                                        <Mail className="w-4 h-4" />
                                        Email
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
}
