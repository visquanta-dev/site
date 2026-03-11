"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface VoiceWaveformProps {
  isActive: boolean
  className?: string
}

export function VoiceWaveform({ isActive, className }: VoiceWaveformProps) {
  const barsCount = 24
  const bars = Array.from({ length: barsCount })

  return (
    <div className={cn("flex h-12 items-center justify-center gap-1", className)}>
      {bars.map((_, i) => (
        <motion.div
          key={i}
          initial={{ height: 4 }}
          animate={{
            height: isActive
              ? [
                  4,
                  Math.max(8, Math.random() * 32 + 8),
                  Math.max(4, Math.random() * 24 + 4),
                  4,
                ]
              : 4,
          }}
          transition={{
            duration: isActive ? Math.random() * 0.5 + 0.5 : 0.3,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
          }}
          className={cn(
            "w-[3px] rounded-full transition-colors duration-500",
            isActive ? "bg-[#F97316] shadow-[0_0_15px_rgba(249,115,22,0.8)]" : "bg-white/10"
          )}
        />
      ))}
    </div>
  )
}
