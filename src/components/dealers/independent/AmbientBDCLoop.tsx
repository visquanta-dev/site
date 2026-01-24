'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const AmbientBDCLoop = () => {
    // Generate random particles
    const particles = useMemo(() => {
        return Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 20 + 20,
            delay: Math.random() * -20,
        }));
    }, []);

    const lines = useMemo(() => {
        return Array.from({ length: 5 }).map((_, i) => ({
            id: i,
            top: Math.random() * 100,
            duration: Math.random() * 10 + 10,
            delay: Math.random() * -10,
        }));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            {/* Dark Gradient Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-[#050505] to-[#020202]" />

            {/* The "Always-On" Grid - Perspective 3D */}
            <div className="absolute inset-0" style={{ perspective: '1000px' }}>
                <motion.div
                    className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"
                    initial={{ rotateX: 60, y: -100, scale: 2 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0 }}
                    style={{ transformOrigin: 'top' }}
                />
            </div>

            {/* Floating Data Particles */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-[#FF7404]/20 blur-[1px]"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                    }}
                    animate={{
                        y: [0, -200, 0],
                        opacity: [0, 0.4, 0],
                        scale: [0.5, 1.2, 0.5],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear",
                    }}
                />
            ))}

            {/* Scanning Lines */}
            {lines.map((l) => (
                <motion.div
                    key={l.id}
                    className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF7404]/10 to-transparent"
                    style={{ top: `${l.top}%` }}
                    animate={{
                        opacity: [0, 0.3, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: l.duration,
                        repeat: Infinity,
                        delay: l.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Central Glow Orb */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.4, 0.3]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7404]/5 rounded-full blur-[120px]"
            />

            {/* Bottom Fade */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#020202] to-transparent" />
        </div>
    );
};

export default AmbientBDCLoop;
