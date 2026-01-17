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

    const [isReady, setIsReady] = useState(false);
    const [sessionEnded, setSessionEnded] = useState(false);

    const conversation = useConversation({
        onConnect: () => {
            console.log('Connected to ElevenLabs');
            setIsReady(false); // Move to connected state
            setSessionEnded(false);
        },
        onDisconnect: () => {
            console.log('Disconnected from ElevenLabs');
            setIsReady(false);
            setSessionEnded(true);
        },
        onError: (error) => {
            console.error('ElevenLabs error:', error);
            setIsReady(false);
            setSessionEnded(true);
        },
    });



    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (conversation.status === 'connected' || (previewMode && !isReady)) {
            interval = setInterval(() => {
                setCallDuration(prev => prev + 1);
            }, 1000);
        } else {
            setCallDuration(0);
        }
        return () => clearInterval(interval);
    }, [previewMode, conversation.status, isReady]);

    // Preview mode speaking toggle
    useEffect(() => {
        if (previewMode && !isReady) {
            const speakingInterval = setInterval(() => {
                setPreviewSpeaking(prev => !prev);
            }, 3000);
            return () => clearInterval(speakingInterval);
        }
    }, [previewMode, isReady]);

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
        // If terms accepted, go to ready state first
        setIsReady(true);
    }, [hasAcceptedTerms]);

    const handleAcceptTerms = useCallback(() => {
        setHasAcceptedTerms(true);
        setShowTermsModal(false);
        setIsReady(true);
    }, []);

    const handleConnect = useCallback(async () => {
        try {
            await navigator.mediaDevices.getUserMedia({ audio: true });

            if (previewMode) {
                setIsReady(false); // Manually trigger "connected" state for preview
                return;
            }

            await conversation.startSession({
                agentId: 'agent_4501k4d2eehvf0p8axd56y4a0d45',
                connectionType: 'websocket',
            });
        } catch (error) {
            console.error('Failed to start conversation:', error);
            setPreviewMode(true);
            setIsReady(false);
        }
    }, [conversation, previewMode]);

    const handleEndConversation = useCallback(async () => {
        if (previewMode) {
            setPreviewMode(false);
            setIsReady(false);
            setSessionEnded(true);
            return;
        }
        await conversation.endSession();
        // onDisconnect will handle setting sessionEnded
    }, [conversation, previewMode]);

    const handleCloseOverlay = useCallback(() => {
        setSessionEnded(false);
        setIsReady(false);
        setHasAcceptedTerms(false);
    }, []);

    if (!isVisible) return null;

    const isConnected = (previewMode && !isReady) || conversation.status === 'connected';
    const isConnecting = conversation.status === 'connecting';
    // Only show speaking animation when actually connected and speaking
    const isSpeaking = isConnected && (previewMode ? previewSpeaking : conversation.isSpeaking);

    // Call duration timer - Ends session after 5 minutes (300s)
    useEffect(() => {
        if (callDuration >= 300 && (isConnected || (previewMode && !isReady))) {
            handleEndConversation();
        }
    }, [callDuration, isConnected, previewMode, isReady, handleEndConversation]);

    // Determines if the full screen overlay should be open
    const isOverlayOpen = isReady || isConnected || isConnecting || sessionEnded;

    const getAgentState = () => {
        if (sessionEnded) return 'ENDED';
        if (isConnecting) return 'CONNECTING';
        if (isConnected) {
            return isSpeaking ? 'PROCESSING' : 'LISTENING';
        }
        return 'READY';
    };

    const currentState = getAgentState();

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

                    {/* PREMIUM Conversation Modal Overlay */}
                    <AnimatePresence>
                        {isOverlayOpen && (
                            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 font-sans">
                                {/* Backdrop */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                                    onClick={handleCloseOverlay}
                                />

                                {/* Modal Card */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                    className="relative w-full max-w-[500px] bg-[#030303] rounded-[40px] border border-white/10 overflow-hidden shadow-2xl flex flex-col items-center py-12"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* Premium Background with animated grid - Scoped to Modal */}
                                    <div className="absolute inset-0 bg-[#030303]" />

                                    {/* Animated gradient orbs in background */}
                                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                        <motion.div
                                            className="absolute w-[500px] h-[500px] rounded-full bg-[#FF7404]/[0.05] blur-[80px]"
                                            style={{ top: '10%', left: '50%', x: '-50%' }}
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [0.3, 0.5, 0.3]
                                            }}
                                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                        />
                                    </div>

                                    {/* Subtle grid pattern */}
                                    <div
                                        className="absolute inset-0 opacity-[0.03]"
                                        style={{
                                            backgroundImage: `
                                                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                                            `,
                                            backgroundSize: '40px 40px'
                                        }}
                                    />

                                    {/* Glassmorphic Top Bar */}
                                    <div className="absolute top-0 left-0 right-0 p-5 z-20 flex justify-between items-start">
                                        {/* STATE 1, 2, 3, 4, 5: Dynamic Status Bar */}
                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-full">
                                            <span className="relative flex h-2 w-2">
                                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 
                                                    ${currentState === 'LISTENING' ? 'bg-green-500' :
                                                        currentState === 'PROCESSING' || currentState === 'CONNECTING' ? 'bg-amber-500' :
                                                            currentState === 'ENDED' ? 'bg-zinc-500' : 'bg-[#FF7404]'}`}
                                                ></span>
                                                <span className={`relative inline-flex rounded-full h-2 w-2 
                                                    ${currentState === 'LISTENING' ? 'bg-green-500' :
                                                        currentState === 'PROCESSING' || currentState === 'CONNECTING' ? 'bg-amber-500' :
                                                            currentState === 'ENDED' ? 'bg-zinc-500' : 'bg-[#FF7404]'}`}
                                                ></span>
                                            </span>
                                            <span className="text-white/60 text-[10px] font-medium uppercase tracking-wider">
                                                {currentState === 'READY' && 'Ready'}
                                                {currentState === 'CONNECTING' && 'Connecting...'}
                                                {currentState === 'LISTENING' && 'Live • Listening'}
                                                {currentState === 'PROCESSING' && 'Live • Processing'}
                                                {currentState === 'ENDED' && 'Session Ended'}
                                            </span>
                                            {(currentState === 'LISTENING' || currentState === 'PROCESSING') && (
                                                <>
                                                    <span className="text-white/30 text-[10px]">•</span>
                                                    <span className="text-white/40 text-[10px] font-mono">{formatTime(callDuration)}</span>
                                                </>
                                            )}
                                        </div>

                                        {/* Close button */}
                                        <button
                                            onClick={handleCloseOverlay}
                                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.06] text-white/40 hover:text-white/70 hover:bg-white/[0.1] transition-all cursor-pointer"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>

                                    {/* Central Interaction Area */}
                                    <div className="relative z-10 mt-6 min-h-[220px] flex items-center justify-center">
                                        {/* ORB ANIMATION */}
                                        <motion.div
                                            key={currentState}
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="relative cursor-pointer group"
                                            onClick={() => currentState === 'READY' && handleConnect()}
                                        >
                                            {/* PULSE RINGS */}
                                            {/* Active State Pulse */}
                                            {(currentState === 'LISTENING' || currentState === 'PROCESSING' || currentState === 'CONNECTING') && (
                                                <>
                                                    <motion.div
                                                        className="absolute rounded-full border border-[#FF7404]/10"
                                                        style={{ width: 340, height: 340, left: -70, top: -70 }}
                                                        animate={{
                                                            scale: currentState === 'PROCESSING' ? [1, 1.1, 1] : [1, 1.02, 1],
                                                            opacity: currentState === 'PROCESSING' ? [0.1, 0, 0.1] : [0.05, 0, 0.05]
                                                        }}
                                                        transition={{ duration: currentState === 'PROCESSING' ? 1.5 : 4, repeat: Infinity }}
                                                    />
                                                </>
                                            )}

                                            {/* Ready State Pulse */}
                                            {currentState === 'READY' && (
                                                <motion.div
                                                    className="absolute inset-0 rounded-full bg-[#FF7404]/20 blur-2xl"
                                                    animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                                />
                                            )}

                                            {/* Audio Visualizer Ring - Only when LISTENING (Connected and not 'processing' in terms of speaking, but usually visualizer is for AI speaking? Spec says 'No waveform' for PROCESSING... wait.
                                             Spec: STATE 3 (Listening): "Subtle waveform or signal animation".
                                             Spec: STATE 4 (Processing): "No mic waveform". "Slow rotational glow".
                                             Actually, ElevenLabs `isSpeaking` usually means AI IS TALKING.
                                             If AI is talking -> User sees "Processing" (State 4)? No, User sees "AI is Speaking".
                                             Wait. User spec: "STATE 4: PROCESSING / RESPONDING ... Purpose: Indicate system is handling or responding ... Text: Processing ... Subtext: Handling your request".
                                             This implies the delay *before* the AI speaks? Or while it speaks?
                                             Usually "Processing" is the gap. "Responding" is speech.
                                             If `isSpeaking` is true, AI is responding.
                                             Let's treat `isSpeaking` as State 4 ("Responding").
                                             If `!isSpeaking` (and connected) -> State 3 ("Listening").
                                             */}
                                            {(currentState === 'LISTENING' || currentState === 'PROCESSING') && (
                                                <div className="absolute inset-0 flex items-center justify-center" style={{ width: 200, height: 200 }}>
                                                    <svg className="absolute w-[220px] h-[220px] -left-[10px] -top-[10px]" viewBox="0 0 240 240">
                                                        {[...Array(36)].map((_, i) => {
                                                            const angle = (i * 10) * Math.PI / 180;
                                                            const x1 = 120 + Math.cos(angle) * 95;
                                                            const y1 = 120 + Math.sin(angle) * 95;
                                                            // Active waveform only when AI is speaking (Processing/Responding State) or User is speaking (we don't have user VAD exposed easily in this hook, but we can fake 'signal animation' in Listening state)
                                                            // Spec for Listening: "Subtle waveform or signal animation".
                                                            const isActive = currentState === 'LISTENING' || currentState === 'PROCESSING';
                                                            const baseLength = currentState === 'PROCESSING' ? 12 + Math.sin(i * 0.5) * 8 : (currentState === 'LISTENING' ? 4 + Math.random() * 4 : 4);

                                                            return (
                                                                <motion.line
                                                                    key={i}
                                                                    x1={x1}
                                                                    y1={y1}
                                                                    x2={120 + Math.cos(angle) * (95 + baseLength)}
                                                                    y2={120 + Math.sin(angle) * (95 + baseLength)}
                                                                    stroke={currentState === 'ENDED' ? '#52525b' : '#FF7404'}
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    initial={{ opacity: 0.3 }}
                                                                    animate={{
                                                                        opacity: isActive ? [0.3, 0.8, 0.3] : 0.1,
                                                                        x2: 120 + Math.cos(angle) * (95 + baseLength),
                                                                        y2: 120 + Math.sin(angle) * (95 + baseLength),
                                                                    }}
                                                                    transition={{
                                                                        duration: isActive ? 0.2 : 2,
                                                                        repeat: Infinity,
                                                                        delay: i * 0.02,
                                                                    }}
                                                                />
                                                            );
                                                        })}
                                                    </svg>
                                                </div>
                                            )}

                                            {/* Main Orb Circle */}
                                            <div className={`relative w-[200px] h-[200px] rounded-full transition-all duration-500 flex items-center justify-center 
                                                ${currentState === 'READY' ? 'shadow-[0_0_40px_rgba(255,116,4,0.2)] hover:scale-105 active:scale-95' : ''}
                                                ${currentState === 'CONNECTING' ? 'shadow-[0_0_60px_rgba(255,116,4,0.3)]' : ''}
                                                ${currentState === 'LISTENING' ? 'shadow-[0_0_50px_rgba(255,116,4,0.2)]' : ''}
                                                ${currentState === 'PROCESSING' ? 'shadow-[0_0_100px_rgba(255,116,4,0.5)]' : ''}
                                                ${currentState === 'ENDED' ? 'shadow-none bg-zinc-900 border border-white/10' : ''}
                                            `}>
                                                {/* Orb Gradient - Standard */}
                                                {currentState !== 'ENDED' && (
                                                    <>
                                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF7404] via-[#FF7404]/80 to-[#FF7404]/40" />
                                                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/30 to-transparent" />
                                                        <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-60" />
                                                        <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-gradient-to-br from-white/30 to-transparent blur-md" />
                                                    </>
                                                )}

                                                {/* Orb Content - Iconography */}
                                                <div className="absolute inset-0 flex items-center justify-center z-10">
                                                    {currentState === 'READY' && <Mic className="w-16 h-16 text-white drop-shadow-md" />}

                                                    {currentState === 'CONNECTING' && (
                                                        <motion.div
                                                            animate={{ rotate: 360 }}
                                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                            className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full"
                                                        />
                                                    )}

                                                    {(currentState === 'LISTENING' || currentState === 'PROCESSING') && (
                                                        // Waveform visualization inside orb
                                                        <div className="flex items-center justify-center gap-[3px]">
                                                            {[1, 2, 3, 4, 5, 4, 3, 2, 1].map((h, i) => (
                                                                <motion.div
                                                                    key={i}
                                                                    className="w-[5px] bg-white/90 rounded-full"
                                                                    animate={{
                                                                        height: currentState === 'PROCESSING'
                                                                            ? [10, 35 + h * 8, 10] // Talkative
                                                                            : [6, 12, 6] // Listening (subtle)
                                                                    }}
                                                                    transition={{
                                                                        duration: currentState === 'PROCESSING' ? 0.3 : 1.5,
                                                                        repeat: Infinity,
                                                                        ease: "easeInOut",
                                                                        delay: i * 0.04
                                                                    }}
                                                                />
                                                            ))}
                                                        </div>
                                                    )}

                                                    {currentState === 'ENDED' && (
                                                        <Mic className="w-16 h-16 text-white/20" />
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Text Content Area */}
                                    <motion.div
                                        key={`text-${currentState}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="mt-8 text-center z-20 relative px-6 w-full"
                                    >
                                        <h2 className={`text-3xl font-bold mb-3 tracking-tight ${currentState === 'ENDED' ? 'text-white/60' : 'text-white'}`}>
                                            {currentState === 'READY' && 'Service Drive Voice Assistant'}
                                            {currentState === 'CONNECTING' && 'Preparing live session...'}
                                            {currentState === 'LISTENING' && 'Listening...'}
                                            {currentState === 'PROCESSING' && 'Processing...'}
                                            {currentState === 'ENDED' && 'Session Complete'}
                                        </h2>

                                        <p className="text-white/50 text-base max-w-[340px] mx-auto leading-relaxed h-[48px]">
                                            {currentState === 'READY' && 'A live demonstration of how inbound service calls are handled, qualified, and routed automatically.'}
                                            {currentState === 'CONNECTING' && 'Establishing secure voice uplink...'}
                                            {currentState === 'LISTENING' && 'Speak naturally. Your request is being handled in real time.'}
                                            {currentState === 'PROCESSING' && 'Handling your request...'}
                                            {currentState === 'ENDED' && 'Thanks for trying the Service Drive Voice Assistant.'}
                                        </p>
                                    </motion.div>

                                    {/* Actions Area */}
                                    <div className="mt-8 flex flex-col items-center gap-4 z-20 relative w-full px-12">
                                        {/* State 1: Start Demo + Cancel */}
                                        {currentState === 'READY' && (
                                            <div className="flex flex-col items-center gap-4 w-full">
                                                <p className="text-white/30 text-[10px] uppercase tracking-wider font-medium">Tap the microphone to begin</p>
                                                <motion.button
                                                    onClick={handleConnect}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-colors shadow-lg shadow-white/5 text-base"
                                                >
                                                    Start Demo
                                                </motion.button>
                                                <button
                                                    onClick={handleCloseOverlay}
                                                    className="text-white/30 hover:text-white/60 text-sm font-medium transition-colors py-2"
                                                >
                                                    Cancel
                                                </button>

                                                {/* Micro-trust copy */}
                                                <p className="text-white/20 text-[10px] text-center mt-2">
                                                    No setup. No commitment. Ends automatically.
                                                </p>
                                            </div>
                                        )}

                                        {/* State 3/4/5: Book a Call */}
                                        {(currentState === 'LISTENING' || currentState === 'PROCESSING' || currentState === 'ENDED') && (
                                            <div className="w-full flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                                {currentState === 'ENDED' ? (
                                                    /* Session Ended - Normal CTA */
                                                    <Link
                                                        href="/book-demo"
                                                        className="group flex items-center justify-center gap-3 w-full py-4 bg-[#FF7404] rounded-xl text-white font-bold hover:bg-[#FF7404]/90 transition-all shadow-[0_0_30px_rgba(255,116,4,0.3)]"
                                                    >
                                                        <Calendar className="w-5 h-5" />
                                                        <span>Book a Call With Our Team</span>
                                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                    </Link>
                                                ) : (
                                                    /* Active Session - Reduced Contrast CTA */
                                                    <Link
                                                        href="/book-demo"
                                                        className="group flex items-center justify-center gap-2.5 w-full py-3.5 bg-white/[0.05] border border-white/10 rounded-xl text-white/60 font-medium hover:bg-white/[0.1] hover:text-white transition-all"
                                                        target="_blank"
                                                    >
                                                        <Calendar className="w-4 h-4 opacity-70" />
                                                        <span>Book a Call With Our Team</span>
                                                    </Link>
                                                )}

                                                {/* Active Session: End Call Button */}
                                                {currentState !== 'ENDED' && (
                                                    <button
                                                        onClick={handleEndConversation}
                                                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl hover:bg-white/[0.05] text-white/30 hover:text-white/60 transition-all text-sm font-medium"
                                                    >
                                                        <PhoneOff className="w-3.5 h-3.5" />
                                                        <span>End Session</span>
                                                    </button>
                                                )}

                                                {/* Session Ended: Close Button */}
                                                {currentState === 'ENDED' && (
                                                    <button
                                                        onClick={handleCloseOverlay}
                                                        className="text-white/30 hover:text-white/60 text-sm font-medium transition-colors py-2"
                                                    >
                                                        Close Demo
                                                    </button>
                                                )}

                                                {/* Reassurance text for active session */}
                                                {currentState !== 'ENDED' && (
                                                    <p className="text-white/20 text-[10px] text-center">
                                                        Session ends automatically when you stop speaking
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </div>
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
