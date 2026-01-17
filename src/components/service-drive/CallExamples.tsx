'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Clock, ArrowRight, X } from 'lucide-react';

interface CallExample {
    id: string;
    title: string;
    situation: string;
    action: string;
    result: string;
    time: string;
    videoId: string;
    videoType?: 'vimeo' | 'veed';
    thumbnailUrl: string;
    issue: string;
}

const callExamples: CallExample[] = [
    {
        id: '1',
        title: 'EPC Warning Light',
        situation: 'EPC light appeared on customer\'s Volkswagen.',
        action: 'Service Drive Agent™ guided customer through diagnostic pricing and towing process',
        result: 'Vehicle was towed in overnight, customer contacted promptly.',
        time: '20:11',
        videoId: '1128516515',
        thumbnailUrl: '/images/call-examples/epc-warning-custom.png',
        issue: 'Emergency Diagnostic'
    },
    {
        id: '2',
        title: 'Book a Service',
        situation: 'Customer called after hours to schedule service.',
        action: 'Service Drive Agent™ gathered name and callback info.',
        result: 'Advisor contacted customer first thing to confirm appointment.',
        time: '19:58',
        videoId: '1128816533',
        thumbnailUrl: '/images/call-examples/book-service-custom.jpg',
        issue: 'After-Hours Booking'
    },
    {
        id: '3',
        title: 'Problem with Brakes',
        situation: '2022 Hyundai Tucson with brake failure.',
        action: 'Service Drive Agent™ captured details and scheduled callback.',
        result: 'Advisor contacted customer next morning, inspection arranged.',
        time: '22:16',
        videoId: '1155497997',
        thumbnailUrl: '/images/call-examples/brake-light-custom.png',
        issue: 'Safety Concern'
    }
];

export default function CallExamples() {
    const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

    const getActiveCall = () => callExamples.find(c => c.id === activeVideoId);
    const activeCall = getActiveCall();

    return (
        <section className="relative py-32 bg-[#020202] overflow-hidden">
            {/* Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#FF7404]/[0.03] rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 mb-8"
                    >
                        <Play className="w-3 h-3 text-[#FF7404]" fill="#FF7404" />
                        <span className="text-[#FF7404] font-bold text-[10px] tracking-[0.2em] uppercase">Real Call Recordings</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight"
                    >
                        Listen to the <span className="text-[#FF7404]">Difference</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Real after-hours calls handled by our Service Drive Agent™.
                        See exactly how missed opportunities become revenue.
                    </motion.p>
                </div>

                {/* Call Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {callExamples.map((call, idx) => (
                        <motion.div
                            key={call.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.8 }}
                            className={`group relative rounded-[2rem] bg-white/[0.02] border ${activeVideoId === call.id ? 'border-[#FF7404]/50' : 'border-white/[0.05]'} overflow-hidden transition-all duration-500 hover:bg-white/[0.04]`}
                        >
                            {/* Video Player / Thumbnail Area */}
                            <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    {activeVideoId === call.id ? (
                                        <motion.div
                                            key="player"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0 z-20"
                                        >
                                            <iframe
                                                src={call.videoType === 'veed'
                                                    ? `https://www.veed.io/embed/${call.videoId}`
                                                    : `https://player.vimeo.com/video/${call.videoId}?autoplay=1&title=0&byline=0&portrait=0`}
                                                className="w-full h-full"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowFullScreen
                                                title={call.title}
                                            />
                                            <button
                                                onClick={() => setActiveVideoId(null)}
                                                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors z-30 opacity-0 group-hover:opacity-100"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="thumbnail"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0"
                                        >
                                            <img
                                                src={call.thumbnailUrl}
                                                alt={call.title}
                                                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />

                                            {/* Play Button Overlay */}
                                            <button
                                                onClick={() => setActiveVideoId(call.id)}
                                                className="absolute inset-0 flex items-center justify-center group/play z-10 w-full"
                                            >
                                                <div className="w-20 h-20 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/20 flex items-center justify-center group-hover/play:scale-110 transition-all duration-500 group-hover/play:bg-[#FF7404] group-hover/play:border-[#FF7404]">
                                                    <Play className="w-8 h-8 text-white ml-1 group-hover/play:fill-white" />
                                                </div>
                                            </button>

                                            {/* Time Badge */}
                                            <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 pointer-events-none">
                                                <Clock className="w-3.5 h-3.5 text-[#FF7404]" />
                                                <span className="text-[11px] font-bold text-white tracking-widest">{call.time}</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Card Content */}
                            <div className="p-8">
                                <div className="mb-6">
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[10px] font-bold text-white/70 uppercase tracking-widest mb-3">
                                        {call.issue}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white">{call.title}</h3>
                                </div>

                                {/* Situation, Action, Result */}
                                <div className="space-y-6 relative">
                                    {/* Connecting Line */}
                                    <div className="absolute left-[9px] top-2 bottom-4 w-px bg-white/5" />

                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-1 w-[18px] h-[18px] rounded-full bg-[#111] border border-amber-500/50 flex items-center justify-center z-10">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                        </div>
                                        <div className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-1.5">
                                            Situation
                                        </div>
                                        <p className="text-sm text-white/50 leading-relaxed font-light">{call.situation}</p>
                                    </div>

                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-1 w-[18px] h-[18px] rounded-full bg-[#111] border-[#ff7404]/50 flex items-center justify-center z-10">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#ff7404]" />
                                        </div>
                                        <div className="text-[10px] font-bold text-[#ff7404] uppercase tracking-widest mb-1.5">
                                            Action
                                        </div>
                                        <p className="text-sm text-white/50 leading-relaxed font-light">{call.action}</p>
                                    </div>

                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-1 w-[18px] h-[18px] rounded-full bg-[#111] border border-emerald-500/50 flex items-center justify-center z-10">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        </div>
                                        <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-1.5">
                                            Result
                                        </div>
                                        <p className="text-sm text-white/50 leading-relaxed font-light">{call.result}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 text-center"
                >
                    <p className="text-lg text-white/40 mb-8 max-w-2xl mx-auto font-light">
                        Every one of these calls would have gone to voicemail without Service Drive Agent™
                    </p>
                    <a href="/book-demo" className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden rounded-xl shadow-[0_0_40px_-10px_rgba(255,116,4,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,116,4,0.5)] transition-shadow duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404] via-[#FF8A3D] to-[#FF7404] rounded-xl" />
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                        <span className="relative z-10 flex items-center gap-2 text-black font-bold text-sm uppercase tracking-widest">
                            Start Capturing Every Call
                            <ArrowRight className="w-4 h-4" />
                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
