'use client';

import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function WhatIsSection() {
    return (
        <section className="py-24 bg-[#020202] relative">
            {/* Top accent line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

            <div className="container-wide">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge */}
                        <div className="flex items-center gap-3 mb-8">
                            <BookOpen className="w-5 h-5 text-[#FF7404]" />
                            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/40">What We Do</span>
                        </div>

                        {/* Main Definition - Natural Language (Option A) */}
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
                            We Sell Cars From Leads Your BDC Gave Up On
                        </h2>

                        <p className="text-lg text-white/50 leading-[1.9] mb-8">
                            Your CRM is full of people who wanted to buy a car but didn't. Maybe they weren't ready. Maybe they got busy. Maybe your team stopped following up after 30 days. <span className="text-white/70 font-medium">Those leads aren't dead: they're just waiting.</span>
                        </p>

                        <p className="text-lg text-white/50 leading-[1.9] mb-10">
                            VisQuanta uses AI-powered conversational SMS to re-engage old leads (from last week to 5 years ago) and book them directly into your showroom. No cold calls. No email blasts. Just real conversations that turn "lost" opportunities into sold units.
                        </p>

                        {/* Technical Definition Block - For AEO (Option B) */}
                        <div className="bg-[#080808] border border-white/[0.06] rounded-2xl p-8 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="w-1 h-full min-h-[80px] bg-gradient-to-b from-[#FF7404] to-[#FF7404]/30 rounded-full flex-shrink-0" />
                                <div>
                                    <p className="text-[10px] font-semibold text-white/25 uppercase tracking-[0.2em] mb-3">Technical Definition</p>
                                    <p className="text-sm text-white/40 leading-[1.9] italic">
                                        <strong className="text-white/60 not-italic">Lead reactivation</strong> is the process of re-engaging dormant contacts in a dealership's CRM database using AI-driven conversational SMS. Unlike mass email or cold calling, lead reactivation initiates personalized 1-on-1 conversations to identify customers who are back in the market, achieving 39%+ engagement rates compared to 3-5% for traditional outreach methods.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Differentiator */}
                        <div className="bg-gradient-to-br from-[#FF7404]/[0.08] to-[#FF7404]/[0.02] border border-[#FF7404]/20 rounded-2xl p-8">
                            <p className="text-white/60 leading-relaxed">
                                <strong className="text-[#FF7404]">The difference:</strong> Tools like Podium, Impel, and Drivee focus on responding to <em>new</em> leads. We focus on the leads they've already stopped working: the 95% of your database that's currently being ignored.
                            </p>
                        </div>

                        {/* Links */}
                        <div className="mt-10 flex flex-wrap gap-6">
                            <Link href="/case-studies" className="group flex items-center gap-2 text-sm text-[#FF7404] hover:underline font-medium">
                                See dealership results
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/speed-to-lead" className="text-sm text-white/40 hover:text-white/60 transition-colors">
                                Learn about Speed to Lead
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
