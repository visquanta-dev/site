'use client';

import { motion } from 'framer-motion';
import { Moon, Sun, Calendar, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Coverage24x7() {
    const [time, setTime] = useState({ hours: 11, minutes: 0, seconds: 0 });

    useEffect(() => {
        // Start from 11:00 PM and tick
        const interval = setInterval(() => {
            setTime(prev => {
                let newSeconds = prev.seconds + 1;
                let newMinutes = prev.minutes;
                let newHours = prev.hours;

                if (newSeconds >= 60) {
                    newSeconds = 0;
                    newMinutes++;
                }
                if (newMinutes >= 60) {
                    newMinutes = 0;
                    newHours++;
                }
                if (newHours >= 24) {
                    newHours = 0;
                }

                return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Calculate rotation angles
    const secondsAngle = (time.seconds / 60) * 360;
    const minutesAngle = ((time.minutes + time.seconds / 60) / 60) * 360;
    const hoursAngle = ((time.hours % 12 + time.minutes / 60) / 12) * 360;

    // Format time for display
    const formatTime = () => {
        const h = time.hours % 12 || 12;
        const m = time.minutes.toString().padStart(2, '0');
        const s = time.seconds.toString().padStart(2, '0');
        const ampm = time.hours >= 12 ? 'PM' : 'AM';
        return { time: `${h}:${m}:${s}`, ampm };
    };

    const displayTime = formatTime();

    return (
        <section className="py-32 bg-[#030303] relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-[0.012] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-[#FF7404]/[0.02] rounded-full blur-[150px] pointer-events-none" />
            </div>

            <div className="container-wide relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Ticking Clock Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                        className="relative"
                    >
                        <div className="relative w-full max-w-[480px] mx-auto aspect-square">

                            {/* Outer glow ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF7404]/20 to-[#FF7404]/5 blur-xl" />

                            {/* Main clock ring */}
                            <div className="absolute inset-4 rounded-full border-[12px] border-[#FF7404] shadow-[0_0_60px_-10px_#FF7404,inset_0_0_40px_-10px_rgba(255,116,4,0.2)]" />

                            {/* Inner dark circle */}
                            <div className="absolute inset-8 rounded-full bg-[#0a0a0a]" />

                            {/* Time markers */}
                            {['12AM', '6AM', '12PM', '6PM'].map((label, i) => {
                                const positions = [
                                    { top: '8%', left: '50%', transform: 'translateX(-50%)' },
                                    { top: '50%', right: '8%', transform: 'translateY(-50%)' },
                                    { bottom: '8%', left: '50%', transform: 'translateX(-50%)' },
                                    { top: '50%', left: '8%', transform: 'translateY(-50%)' }
                                ];
                                return (
                                    <div
                                        key={i}
                                        className="absolute text-[11px] font-mono text-white/30"
                                        style={positions[i] as React.CSSProperties}
                                    >
                                        {label}
                                    </div>
                                );
                            })}

                            {/* Hour markers (12 small dots) - Pre-computed positions to avoid hydration mismatch */}
                            {[
                                { left: '50%', top: '8%' },      // 12 o'clock
                                { left: '71%', top: '14.65%' },  // 1 o'clock
                                { left: '85.35%', top: '29%' },  // 2 o'clock
                                { left: '92%', top: '50%' },     // 3 o'clock
                                { left: '85.35%', top: '71%' },  // 4 o'clock
                                { left: '71%', top: '85.35%' },  // 5 o'clock
                                { left: '50%', top: '92%' },     // 6 o'clock
                                { left: '29%', top: '85.35%' },  // 7 o'clock
                                { left: '14.65%', top: '71%' },  // 8 o'clock
                                { left: '8%', top: '50%' },      // 9 o'clock
                                { left: '14.65%', top: '29%' },  // 10 o'clock
                                { left: '29%', top: '14.65%' },  // 11 o'clock
                            ].map((pos, i) => (
                                <div
                                    key={i}
                                    className="absolute w-2 h-2 rounded-full bg-white/20"
                                    style={{
                                        left: pos.left,
                                        top: pos.top,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                />
                            ))}

                            {/* Clock hands container */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* Hour hand */}
                                <motion.div
                                    className="absolute w-1.5 h-[22%] bg-gradient-to-t from-white to-white/70 rounded-full origin-bottom"
                                    style={{
                                        bottom: '50%',
                                        rotate: hoursAngle
                                    }}
                                    transition={{ type: 'tween', duration: 0.3 }}
                                />

                                {/* Minute hand */}
                                <motion.div
                                    className="absolute w-1 h-[30%] bg-gradient-to-t from-[#FF7404] to-[#FF9040] rounded-full origin-bottom shadow-[0_0_10px_#FF7404]"
                                    style={{
                                        bottom: '50%',
                                        rotate: minutesAngle
                                    }}
                                    transition={{ type: 'tween', duration: 0.3 }}
                                />

                                {/* Second hand */}
                                <motion.div
                                    className="absolute w-0.5 h-[35%] bg-[#FF7404] rounded-full origin-bottom"
                                    style={{
                                        bottom: '50%',
                                        rotate: secondsAngle
                                    }}
                                    transition={{ type: 'tween', duration: 0.1 }}
                                />

                                {/* Center dot */}
                                <div className="absolute w-4 h-4 rounded-full bg-[#FF7404] shadow-[0_0_20px_#FF7404]" />
                            </div>

                            {/* Center content */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center mt-32">
                                    <div className="text-4xl font-bold text-white mb-1 font-mono tracking-wider">
                                        {displayTime.time}
                                        <span className="text-lg text-[#FF7404] ml-2">{displayTime.ampm}</span>
                                    </div>
                                    <div className="text-[11px] text-[#FF7404] uppercase tracking-widest font-semibold">Always Active</div>
                                </div>
                            </div>

                            {/* Lead Arrives card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="absolute -right-4 top-[18%] bg-[#0a0a0a] border border-[#FF7404]/30 rounded-xl p-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5),0_0_20px_-5px_rgba(255,116,4,0.2)]"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-[#FF7404]/20 flex items-center justify-center">
                                        <Moon className="w-5 h-5 text-[#FF7404]" />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-lg">11:00 PM</div>
                                        <div className="text-[11px] text-white/40">Lead Arrives</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Call Booked card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.2 }}
                                className="absolute -left-4 bottom-[18%] bg-[#0a0a0a] border border-green-500/30 rounded-xl p-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5),0_0_20px_-5px_rgba(34,197,94,0.2)]"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-green-400" />
                                    </div>
                                    <div>
                                        <div className="text-green-400 font-bold text-lg">11:03 PM</div>
                                        <div className="text-[11px] text-white/40">Call Booked</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Coverage Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                        className="space-y-10"
                    >
                        <div>
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#FF7404]/[0.08] backdrop-blur-sm border border-[#FF7404]/20 rounded-full mb-8">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7404] animate-pulse" />
                                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#FF7404]">Always-On Coverage</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                                Nights. Weekends. <br />
                                <span className="bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FF7404] bg-clip-text text-transparent">
                                    Holidays.
                                </span>
                            </h2>
                            <p className="text-lg text-white/40 leading-[1.8]">
                                Leads don't wait for business hours. Neither should your response.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                { icon: Moon, title: "After-Hours Coverage", desc: "Every lead from 6pm to 9am is engaged and qualified." },
                                { icon: Calendar, title: "Weekend Response", desc: "Saturday and Sunday leads get the same instant follow-up." },
                                { icon: Sun, title: "Holiday Coverage", desc: "Christmas, Thanksgiving, Labor Day—no gaps." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex gap-4 p-5 bg-[#080808] border border-white/[0.04] rounded-xl hover:border-[#FF7404]/20 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[#FF7404]/10 flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-5 h-5 text-[#FF7404]" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                        <p className="text-sm text-white/40">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
