"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface SpeedTimerProps {
  isActive: boolean
  isComplete: boolean
  onComplete?: () => void
  durationMs?: number // how long to simulate
}

export function SpeedTimer({ isActive, isComplete, onComplete, durationMs = 4100 }: SpeedTimerProps) {
  const [ms, setMs] = React.useState(0)
  
  React.useEffect(() => {
    let interval: NodeJS.Timeout
    
    if (isActive && !isComplete) {
      const startTime = Date.now()
      interval = setInterval(() => {
        const elapsed = Date.now() - startTime
        setMs(elapsed)
        if (elapsed >= durationMs && onComplete) {
          onComplete()
        }
      }, 37)
    } else if (isComplete) {
      setMs(durationMs)
    } else {
      setMs(0)
    }

    return () => clearInterval(interval)
  }, [isActive, isComplete, durationMs, onComplete])

  const formatTime = (ms: number) => {
    const seconds = (ms / 1000).toFixed(1)
    return `${seconds}s`
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-2 py-6">
      <div className="relative flex h-20 items-center justify-center border border-[#F97316]/20 bg-[#F97316]/5 rounded-sm px-8 overflow-hidden shadow-[inset_0_0_20px_rgba(249,115,22,0.1)]">
        {/* Subtle scanline */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#F97316]/30 shadow-[0_0_10px_#F97316] animate-[scan_2s_linear_infinite]" />

        {isComplete ? (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex h-12 w-12 items-center justify-center text-[#F97316]"
          >
            <Check size={28} strokeWidth={3} className="drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
          </motion.div>
        ) : (
          <motion.div
            key="timer"
            className="font-mono text-5xl font-black tracking-widest text-[#F97316] drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]"
          >
            {formatTime(ms)}
          </motion.div>
        )}
      </div>
      
      <p className="text-center font-mono text-[10px] uppercase tracking-[2px] text-white/50">
        {isComplete ? "Your lead was responded to in under 5 seconds" : isActive ? "AI is responding to your enquiry..." : "Ready to test"}
      </p>
    </div>
  )
}
