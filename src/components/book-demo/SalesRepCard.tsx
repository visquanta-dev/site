// ... (imports)
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check, Linkedin, Calendar, Mail } from 'lucide-react';

interface SalesRepCardProps {
    name: string;
    role: string;
    videoUrl?: string; // Made optional
    selected: boolean;
    onClick: () => void;
    image?: string;
    images?: string[]; // Multiple images for team display
}

export default function SalesRepCard({ name, role, selected, onClick, image, images }: SalesRepCardProps) {
    // Note: Removed video logic to match static team card style requested

    return (
        <div
            onClick={onClick}
            className={cn(
                "group relative w-full h-[280px] bg-[#0A0A0A] border rounded-[2.5rem] p-8 transition-all duration-700 overflow-hidden shadow-2xl cursor-pointer",
                selected
                    ? "border-[#FF7404] shadow-[0_0_30px_rgba(255,116,4,0.15)]"
                    : "border-white/5 hover:border-[#FF7404]/40"
            )}
        >
            {/* Advanced Hover Glow */}
            <div className={cn(
                "absolute inset-0 bg-gradient-to-br from-[#FF7404]/0 via-[#FF7404]/[0.01] to-[#FF7404]/[0.05] transition-opacity duration-700",
                selected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )} />

            <div className={cn(
                "absolute -bottom-24 -right-24 w-64 h-64 bg-[#FF7404]/10 rounded-full blur-[100px] transition-opacity duration-700",
                selected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )} />

            {/* Scanning Flare Effect - Only on hover if not selected? Or always? Let's keep it subtle */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:animate-scanner pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between h-full gap-4">
                <div className="flex flex-col min-w-0 flex-1 h-full justify-center">
                    <h3 className={cn(
                        "text-2xl lg:text-3xl font-black text-white mb-2 leading-none tracking-tight transition-all duration-500 uppercase",
                        selected ? "text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF7404]" : "group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#FF7404]"
                    )}>
                        {name.split(' ')[0]}<br />
                        {name.substring(name.indexOf(' ') + 1)}
                    </h3>

                    <div className={cn(
                        "h-[2px] bg-[#FF7404]/40 mb-4 transition-all duration-700",
                        selected ? "w-16" : "w-8 group-hover:w-16"
                    )} />

                    <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] leading-tight mb-8">
                        {role}
                    </p>


                </div>

                {/* Premium Avatar Composition */}
                <div className="relative shrink-0">
                    {/* Pulsing Orbital Ring */}
                    <div className={cn(
                        "absolute inset-[-12px] rounded-full border border-[#FF7404]/20 animate-pulse transition-all duration-700",
                        selected ? "opacity-100 scale-110" : "opacity-0 group-hover:opacity-100 group-hover:scale-110"
                    )} />
                    <div className={cn(
                        "absolute inset-[-6px] rounded-full border border-[#FF7404]/40 transition-all duration-700",
                        selected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    )} />

                    <div className={cn(
                        "w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-white/10 bg-zinc-900 relative z-10 shadow-2xl transition-transform duration-700 flex items-center justify-center",
                        selected ? "scale-105 -translate-y-2 border-[#FF7404]/50" : "group-hover:scale-105 group-hover:-translate-y-2"
                    )}>
                        {images && images.length > 0 ? (
                            <div className="flex -space-x-12 lg:-space-x-16 group-hover:-space-x-8 lg:group-hover:-space-x-12 transition-all duration-700 items-center justify-center w-full h-full">
                                {images.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className={cn(
                                            "relative w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-[#0a0a0a] overflow-hidden transition-all duration-700 shadow-2xl",
                                            idx === 0 ? "z-20 scale-100 ring-2 ring-white/10" : "z-10 scale-90 opacity-40 group-hover:opacity-100 group-hover:scale-100 shadow-[0_0_30px_rgba(0,0,0,1)]"
                                        )}
                                    >
                                        <img
                                            src={img}
                                            alt={`${name} team member`}
                                            className={cn(
                                                "w-full h-full object-cover transition-all duration-1000",
                                                selected ? "grayscale-0" : "grayscale group-hover:grayscale-0"
                                            )}
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <img
                                src={image}
                                alt={name}
                                className={cn(
                                    "w-full h-full object-cover transition-all duration-1000 ease-out",
                                    selected ? "grayscale-0 scale-110" : "grayscale group-hover:grayscale-0 group-hover:scale-110"
                                )}
                            />
                        )}
                    </div>

                    {/* Corner Accents */}
                    <div className={cn(
                        "absolute top-0 right-0 w-4 h-4 border-r border-t border-[#FF7404]/0 transition-all duration-700 translate-x-4 -translate-y-4",
                        selected ? "border-[#FF7404]/40" : "group-hover:border-[#FF7404]/40"
                    )} />
                    <div className={cn(
                        "absolute bottom-0 left-0 w-4 h-4 border-l border-b border-[#FF7404]/0 transition-all duration-700 -translate-x-4 translate-y-4",
                        selected ? "border-[#FF7404]/40" : "group-hover:border-[#FF7404]/40"
                    )} />
                </div>
            </div>

            {/* Global Card Accent */}
            <div className={cn(
                "absolute top-0 right-0 p-4 transition-opacity",
                selected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}>
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF7404]" />
            </div>
        </div>
    );
}
