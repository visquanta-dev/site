'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function NotFoundClient() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Mouse move effect for subtle parallax
    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className="min-h-screen w-full bg-[#fcfcfc] text-black relative overflow-hidden flex flex-col items-start p-6 md:p-12 lg:p-16 font-sans selection:bg-black selection:text-white"
        >
            {/* Abstract Background Graphic - Premium flowing gradient */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-1/2 -right-1/2 w-[150vw] h-[150vw] bg-gradient-to-b from-gray-200/50 via-transparent to-transparent rounded-full blur-[100px]"
                />
            </div>

            <div className="relative z-10 flex flex-col w-full h-full justify-between">
                {/* Massive 404 */}
                <div className="perspective-[1000px]">
                    <h1 className="flex text-[35vh] md:text-[50vh] font-black leading-[0.85] tracking-tighter -ml-2 md:-ml-4 select-none mix-blend-multiply">
                        {['4', '0', '4'].map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: 200, opacity: 0, rotateX: 20 }}
                                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                transition={{
                                    duration: 1.2,
                                    delay: 0.2 + (i * 0.15),
                                    ease: [0.22, 1, 0.36, 1] // Premium Quintic Ease
                                }}
                                whileHover={{
                                    y: -20,
                                    scale: 1.02,
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }}
                                className="inline-block origin-bottom transform-gpu text-black"
                                style={{
                                    textShadow: "0 20px 40px rgba(0,0,0,0.05)"
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h1>
                </div>

                {/* Subtext and Link */}
                <div className="mt-12 md:mt-16 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                    >
                        <div className="relative overflow-hidden mb-2">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                                className="absolute top-0 left-0 w-full h-full bg-black/5"
                            />
                        </div>
                        <p className="text-3xl md:text-[5vh] font-medium leading-[1.1] tracking-tight text-neutral-900">
                            seems like we couldn&apos;t find that page, here&apos;s your way back to the{' '}
                            <Link
                                href="/"
                                className="relative inline-block group"
                            >
                                <span className="relative z-10">homepage</span>
                                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-black origin-left transform scale-x-100 transition-transform duration-300 group-hover:scale-x-0" />
                                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#FF7404] origin-right transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                            </Link>.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Decorative grain/noise overlay for premium texture */}
            <div className='absolute inset-0 z-[50] opacity-[0.03] pointer-events-none mix-blend-overlay' style={{ backgroundImage: 'url("/images/noise.png")' }}></div>
        </div>
    );
}
