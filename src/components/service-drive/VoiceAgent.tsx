'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useConversation } from '@elevenlabs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, X, Phone, PhoneOff, Volume2, Shield, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';

export default function VoiceAgent() {
    const [isVisible, setIsVisible] = useState(true);
    const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);
    const [showTermsModal, setShowTermsModal] = useState(false);
    const [previewMode, setPreviewMode] = useState(false);
    const [previewSpeaking, setPreviewSpeaking] = useState(false);
    const [callDuration, setCallDuration] = useState(0);

    const conversation = useConversation({
        onConnect: () => console.log('Connected to ElevenLabs'),
        onDisconnect: () => console.log('Disconnected from ElevenLabs'),
        onError: (error) => console.error('ElevenLabs error:', error),
    });

    // Call duration timer
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (previewMode || conversation.status === 'connected') {
            interval = setInterval(() => {
                setCallDuration(prev => prev + 1);
            }, 1000);
        } else {
            setCallDuration(0);
        }
        return () => clearInterval(interval);
    }, [previewMode, conversation.status]);

    // Preview mode speaking toggle (for demo)
    useEffect(() => {
        if (previewMode) {
            const speakingInterval = setInterval(() => {
                setPreviewSpeaking(prev => !prev);
            }, 3000);
            return () => clearInterval(speakingInterval);
        }
    }, [previewMode]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleStartConversation = useCallback(async () => {
        if (!hasAcceptedTerms) {
            setShowTermsModal(true);
            return;
        }

        try {
            await navigator.mediaDevices.getUserMedia({ audio: true });
            await conversation.startSession({
                agentId: 'agent_4501k4d2eehvf0p8axd56y4a0d45',
                connectionType: 'websocket',
            });
        } catch (error) {
            console.error('Failed to start conversation:', error);
        }
    }, [conversation, hasAcceptedTerms]);

    const handleAcceptTerms = useCallback(async () => {
        setHasAcceptedTerms(true);
        setShowTermsModal(false);

        try {
            await navigator.mediaDevices.getUserMedia({ audio: true });
            await conversation.startSession({
                agentId: 'agent_4501k4d2eehvf0p8axd56y4a0d45',
                connectionType: 'websocket',
            });
        } catch (error) {
            console.error('Failed to start conversation:', error);
            // Enable preview mode locally if connection fails
            setPreviewMode(true);
        }
    }, [conversation]);

    const handleEndConversation = useCallback(async () => {
        if (previewMode) {
            setPreviewMode(false);
            return;
        }
        await conversation.endSession();
    }, [conversation, previewMode]);

    if (!isVisible) return null;

    const isConnected = previewMode || conversation.status === 'connected';
    const isConnecting = conversation.status === 'connecting';
    const isSpeaking = previewMode ? previewSpeaking : conversation.isSpeaking;

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Premium Terms Modal */}
                    <AnimatePresence>
                        {showTermsModal && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md"
                                onClick={() => setShowTermsModal(false)}
                            >
                                <motion.div
                                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                                    transition={{ type: "spring", damping: 28, stiffness: 350 }}
                                    onClick={(e) => e.stopPropagation()}
                                    className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-3xl px-8 pt-10 pb-8 max-w-md mx-4 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.9)] border border-white/[0.08] overflow-hidden featured-card-border"
                                >
                                    {/* Subtle background depth */}
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,116,4,0.03)_0%,_transparent_60%)] pointer-events-none" />
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.02)_0%,_transparent_50%)] pointer-events-none" />

                                    {/* Close button */}
                                    <button
                                        onClick={() => setShowTermsModal(false)}
                                        className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center text-white/20 hover:text-white/50 hover:bg-white/5 transition-all"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>

                                    {/* Icon */}
                                    <div className="relative flex justify-center mb-8">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF7404] to-[#FF7404]/60 flex items-center justify-center shadow-[0_0_40px_rgba(255,116,4,0.25)]">
                                            <Shield className="w-7 h-7 text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="relative text-xl font-bold text-white text-center mb-3">
                                        Service Drive Voice Assistant
                                    </h3>
                                    <p className="relative text-white/45 text-sm text-center mb-8 leading-relaxed max-w-xs mx-auto">
                                        A live demonstration of how inbound service calls are handled, qualified, and routed automatically.
                                    </p>

                                    {/* Bullet points */}
                                    <div className="relative space-y-3 mb-10">
                                        {[
                                            'Live, real-time customer conversation',
                                            'Enterprise-grade voice infrastructure',
                                            'No recordings or data retained after session'
                                        ].map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-[#FF7404]/10 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle2 className="w-3 h-3 text-[#FF7404]" />
                                                </div>
                                                <span className="text-white/60 text-[13px]">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Terms text */}
                                    <p className="relative text-white/25 text-xs text-center mb-8">
                                        By continuing, you agree to our{' '}
                                        <a href="/terms" className="text-[#FF7404]/70 hover:text-[#FF7404] hover:underline transition-colors">Terms of Service</a>
                                        {' '}and{' '}
                                        <a href="/privacy" className="text-[#FF7404]/70 hover:text-[#FF7404] hover:underline transition-colors">Privacy Policy</a>
                                    </p>

                                    {/* Buttons */}
                                    <div className="relative flex gap-3">
                                        <button
                                            onClick={() => setShowTermsModal(false)}
                                            className="flex-1 px-5 py-2.5 text-white/40 border border-white/[0.06] rounded-xl hover:bg-white/[0.03] hover:text-white/60 hover:border-white/10 transition-all font-medium text-sm"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handleAcceptTerms}
                                            className="flex-[1.2] px-6 py-3.5 bg-gradient-to-r from-[#FF7404] to-[#FF7404]/85 text-white rounded-xl hover:shadow-[0_0_30px_rgba(255,116,4,0.35)] transition-all font-semibold text-[15px]"
                                        >
                                            Start Demo
                                        </button>
                                    </div>

                                    {/* Micro-trust copy */}
                                    <p className="relative text-white/20 text-[10px] text-center mt-5 tracking-wide">
                                        No setup. No commitment. Ends automatically.
                                    </p>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* PREMIUM Full-Screen Conversation Overlay */}
                    <AnimatePresence>
                        {isConnected && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[90] flex flex-col items-center justify-center overflow-hidden"
                            >
                                {/* Premium Background with animated grid */}
                                <div className="absolute inset-0 bg-[#030303]" />

                                {/* Animated gradient orbs in background */}
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                    <motion.div
                                        className="absolute w-[800px] h-[800px] rounded-full bg-[#FF7404]/[0.03] blur-[100px]"
                                        style={{ top: '20%', left: '50%', x: '-50%' }}
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.3, 0.5, 0.3]
                                        }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    <motion.div
                                        className="absolute w-[600px] h-[600px] rounded-full bg-[#FF7404]/[0.02] blur-[80px]"
                                        style={{ bottom: '10%', right: '20%' }}
                                        animate={{
                                            scale: [1.2, 1, 1.2],
                                            opacity: [0.2, 0.4, 0.2]
                                        }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                </div>

                                {/* Subtle grid pattern */}
                                <div
                                    className="absolute inset-0 opacity-[0.02]"
                                    style={{
                                        backgroundImage: `
                                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                                        `,
                                        backgroundSize: '60px 60px'
                                    }}
                                />

                                {/* Noise texture overlay */}
                                <div className="absolute inset-0 opacity-[0.015] bg-[url('/noise.png')] pointer-events-none" />

                                {/* Glassmorphic Top Bar */}
                                <motion.div
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="absolute top-0 left-0 right-0 p-4"
                                >
                                    <div className="max-w-4xl mx-auto flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            {/* Connection status */}
                                            <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-full">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                                </span>
                                                <span className="text-white/60 text-xs font-medium">Connected</span>
                                                <span className="text-white/30 text-xs">•</span>
                                                <span className="text-white/40 text-xs font-mono">{formatTime(callDuration)}</span>
                                            </div>

                                            {/* Preview mode indicator */}
                                            {previewMode && (
                                                <div className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
                                                    <span className="text-amber-500 text-[10px] font-bold uppercase tracking-wider">Preview Mode</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Close button only */}
                                        <button
                                            onClick={handleEndConversation}
                                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.06] text-white/40 hover:text-white/70 hover:bg-white/[0.06] transition-all"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                </motion.div>

                                {/* Central Premium Orb */}
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.1, type: "spring", damping: 20 }}
                                    className="relative"
                                >
                                    {/* Outermost pulse ring */}
                                    <motion.div
                                        className="absolute rounded-full border border-[#FF7404]/10"
                                        style={{ width: 400, height: 400, left: -100, top: -100 }}
                                        animate={{
                                            scale: isSpeaking ? [1, 1.15, 1] : [1, 1.05, 1],
                                            opacity: isSpeaking ? [0.1, 0, 0.1] : [0.05, 0, 0.05]
                                        }}
                                        transition={{ duration: isSpeaking ? 1.5 : 4, repeat: Infinity }}
                                    />

                                    {/* Second ring */}
                                    <motion.div
                                        className="absolute rounded-full border border-[#FF7404]/15"
                                        style={{ width: 320, height: 320, left: -60, top: -60 }}
                                        animate={{
                                            scale: isSpeaking ? [1, 1.1, 1] : 1,
                                            opacity: isSpeaking ? [0.15, 0.05, 0.15] : 0.1
                                        }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                                    />

                                    {/* Third ring with glow */}
                                    <motion.div
                                        className="absolute rounded-full"
                                        style={{
                                            width: 260,
                                            height: 260,
                                            left: -30,
                                            top: -30,
                                            background: 'radial-gradient(circle, rgba(255,116,4,0.1) 0%, transparent 70%)'
                                        }}
                                        animate={{
                                            scale: isSpeaking ? [1, 1.08, 1] : [1, 1.02, 1],
                                        }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    />

                                    {/* Audio Visualizer Ring */}
                                    <div className="absolute inset-0 flex items-center justify-center" style={{ width: 200, height: 200 }}>
                                        <svg className="absolute w-[240px] h-[240px] -left-5 -top-5" viewBox="0 0 240 240">
                                            {[...Array(36)].map((_, i) => {
                                                const angle = (i * 10) * Math.PI / 180;
                                                const x1 = 120 + Math.cos(angle) * 95;
                                                const y1 = 120 + Math.sin(angle) * 95;
                                                const baseLength = isSpeaking ? 15 + Math.sin(i * 0.5) * 10 : 5;
                                                return (
                                                    <motion.line
                                                        key={i}
                                                        x1={x1}
                                                        y1={y1}
                                                        x2={120 + Math.cos(angle) * (95 + baseLength)}
                                                        y2={120 + Math.sin(angle) * (95 + baseLength)}
                                                        stroke="#FF7404"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        initial={{ opacity: 0.3 }}
                                                        animate={{
                                                            opacity: isSpeaking ? [0.3, 0.8, 0.3] : [0.2, 0.4, 0.2],
                                                            x2: 120 + Math.cos(angle) * (95 + (isSpeaking ? baseLength + Math.random() * 15 : 5)),
                                                            y2: 120 + Math.sin(angle) * (95 + (isSpeaking ? baseLength + Math.random() * 15 : 5)),
                                                        }}
                                                        transition={{
                                                            duration: isSpeaking ? 0.15 : 2,
                                                            repeat: Infinity,
                                                            delay: i * 0.02,
                                                        }}
                                                    />
                                                );
                                            })}
                                        </svg>
                                    </div>

                                    {/* Main 3D Orb */}
                                    <div className={`relative w-[200px] h-[200px] rounded-full transition-all duration-500 ${isSpeaking ? 'shadow-[0_0_100px_rgba(255,116,4,0.5)]' : 'shadow-[0_0_60px_rgba(255,116,4,0.3)]'
                                        }`}>
                                        {/* Gradient layers for 3D effect */}
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF7404] via-[#FF7404]/80 to-[#FF7404]/40" />
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/30 to-transparent" />
                                        <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-60" />

                                        {/* Inner highlight */}
                                        <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-gradient-to-br from-white/30 to-transparent blur-md" />

                                        {/* Center waveform */}
                                        <div className="absolute inset-0 flex items-center justify-center gap-[3px]">
                                            {[1, 2, 3, 4, 5, 4, 3, 2, 1].map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="w-[5px] bg-white/90 rounded-full"
                                                    animate={{
                                                        height: isSpeaking
                                                            ? [10, 35 + h * 8, 10]
                                                            : [6, 14, 6]
                                                    }}
                                                    transition={{
                                                        duration: isSpeaking ? 0.3 : 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                        delay: i * 0.04
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Status Text */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-12 text-center"
                                >
                                    <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
                                        {isSpeaking ? 'AI is Speaking' : 'Listening'}
                                    </h2>
                                    <p className="text-white/40 text-sm max-w-xs">
                                        {isSpeaking
                                            ? 'The assistant is responding to your inquiry'
                                            : 'Speak naturally — I\'m ready to assist'}
                                    </p>
                                </motion.div>

                                {/* Book a Call CTA */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-14 flex flex-col items-center gap-4"
                                >
                                    <p className="text-white/30 text-xs uppercase tracking-widest font-medium">
                                        Want this for your dealership?
                                    </p>
                                    <Link
                                        href="/book-demo"
                                        className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF7404] to-[#FF7404]/80 rounded-full text-white font-semibold hover:shadow-[0_0_40px_rgba(255,116,4,0.4)] transition-all"
                                    >
                                        <Calendar className="w-5 h-5" />
                                        <span>Book a Call With Our Team</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </motion.div>

                                {/* Bottom hint */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="absolute bottom-6 left-0 right-0 flex justify-center"
                                >
                                    <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.02] rounded-full border border-white/[0.04]">
                                        <Volume2 className="w-3.5 h-3.5 text-white/20" />
                                        <span className="text-white/20 text-[11px]">Ensure your microphone and speakers are enabled</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Launcher Card (only visible when not connected) */}
                    {!isConnected && (
                        <div className="fixed bottom-6 right-6 z-50 font-sans">
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="relative group"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="absolute -top-2 -right-2 w-5 h-5 bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-[#FF7404] transition-all z-[60] opacity-0 group-hover:opacity-100 shadow-lg cursor-pointer"
                                >
                                    <X className="w-2.5 h-2.5" />
                                </button>

                                {/* Main Card */}
                                <button
                                    onClick={handleStartConversation}
                                    disabled={isConnecting}
                                    className={`flex items-center gap-4 bg-[#0a0a0a] border border-white/[0.08] pl-4 pr-5 py-3 rounded-full backdrop-blur-xl transition-all duration-300 cursor-pointer group/card ${isConnecting ? 'opacity-70 cursor-wait' : ''
                                        } animate-[pulse-shadow_2s_ease-in-out_infinite]`}
                                >
                                    {/* Animated Icon */}
                                    <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-[#FF7404] to-[#FF7404]/70 flex items-center justify-center shadow-[0_0_24px_rgba(255,116,4,0.35)] group-hover/card:shadow-[0_0_32px_rgba(255,116,4,0.5)] transition-shadow">
                                        {isConnecting ? (
                                            <motion.div
                                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            />
                                        ) : (
                                            <>
                                                <div className="absolute inset-0 flex items-center justify-center gap-[2px] opacity-40">
                                                    {[1, 2, 3, 2, 1].map((h, i) => (
                                                        <motion.div
                                                            key={i}
                                                            className="w-[3px] bg-white rounded-full"
                                                            animate={{ height: [6, 12 + h * 3, 6] }}
                                                            transition={{
                                                                duration: 1.2,
                                                                repeat: Infinity,
                                                                ease: "easeInOut",
                                                                delay: i * 0.08
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                                <Mic className="w-5 h-5 text-white relative z-10" />
                                            </>
                                        )}
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex flex-col items-start">
                                        <div className="flex items-center gap-2">
                                            <span className="text-white text-sm font-semibold tracking-wide">
                                                {isConnecting ? 'Connecting...' : 'Test Drive Our Voice AI'}
                                            </span>
                                            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20">
                                                <span className="relative flex h-1.5 w-1.5">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7404] opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FF7404]"></span>
                                                </span>
                                                <span className="text-[9px] font-bold text-[#FF7404] uppercase tracking-wider">Live</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5 mt-1">
                                            <Phone className="w-3 h-3 text-white/40" />
                                            <span className="text-[11px] text-white/40 group-hover/card:text-white/60 transition-colors">
                                                {isConnecting ? 'Please wait...' : 'Click to start demo'}
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            </motion.div>
                        </div>
                    )}
                </>
            )}
        </AnimatePresence>
    );
}
