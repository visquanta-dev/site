'use client';

import { useState } from 'react';

interface IntegrationConnectionVisualProps {
    logo: string;
    name: string;
}

export default function IntegrationConnectionVisual({ logo, name }: IntegrationConnectionVisualProps) {
    const [imgError, setImgError] = useState(false);
    const hasImageExtension = logo.endsWith('.png') || logo.endsWith('.jpg') || logo.endsWith('.svg');
    const showImage = hasImageExtension && !imgError;

    return (
        <div className="relative w-full max-w-4xl mx-auto mt-12 mb-8">
            {/* Connection Diagram */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 relative py-12">
                {/* Integration Node */}
                <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-[#1a1a1a] rounded-3xl border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {/* Logo Handling */}
                    {showImage ? (
                        <img
                            src={logo}
                            alt={name}
                            className="w-16 h-16 md:w-20 md:h-20 object-contain filter brightness-0 invert opacity-90"
                            onError={() => setImgError(true)}
                        />
                    ) : (
                        <span className="text-2xl font-bold text-white/80">
                            {name.substring(0, 2)}
                        </span>
                    )}
                </div>

                {/* Animated Connection Line */}
                <div className="relative flex-none md:flex-1 w-[2px] h-[80px] md:w-full md:h-[2px] md:max-w-[200px] bg-gradient-to-b md:bg-gradient-to-r from-white/10 via-[#f97316]/50 to-white/10">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute bg-[#f97316] shadow-[0_0_15px_#f97316]
                            w-full h-16 -top-16 left-0 animate-slide-down
                            md:w-16 md:h-full md:top-0 md:-left-16 md:animate-slide-right"
                        />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono text-[#f97316] uppercase tracking-wider z-20">
                        SYNC
                    </div>
                </div>

                {/* VisQuanta Node */}
                <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-black rounded-full border border-[#f97316] flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.3)]">
                    <span className="text-xl md:text-2xl font-bold text-white tracking-tight">VisQ</span>
                    <div className="absolute inset-0 border border-[#f97316] rounded-full animate-ping opacity-20" />
                </div>
            </div>

            {/* Data Flow Visualization Card */}
            <div className="bg-[#111111]/80 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-6 max-w-sm mx-auto transform -translate-y-4 md:-translate-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="flex items-center gap-3 mb-3 border-b border-white/5 pb-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs text-white/60 font-mono">LIVE SYNC ACTIVE</span>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-white/40">Status:</span>
                        <span className="text-[#f97316] font-bold bg-[#f97316]/10 px-2 py-0.5 rounded">Appointment Booked</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-white/40">Lead Source:</span>
                        <span className="text-white">Autotrader - 2024 F-150</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-white/40">Timestamp:</span>
                        <span className="text-white font-mono text-xs">Just now</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
