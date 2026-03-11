"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface DemoCardProps {
  title: string
  description: string
  icon: React.ReactNode
  tag: string
  isActive: boolean
  onClick: () => void
}

export function DemoCard({ title, description, icon, tag, isActive, onClick }: DemoCardProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ x: isActive ? 0 : 4 }}
      className={cn(
        "group relative flex w-full flex-col items-start rounded-xl border p-5 text-left backdrop-blur-xl transition-all duration-300 overflow-hidden",
        isActive
          ? "border-[#F97316]/50 bg-[#F97316]/[0.03] shadow-[0_0_25px_rgba(249,115,22,0.15)] md:translate-x-2"
          : "border-white/10 bg-black/40 hover:border-white/20 hover:bg-white/[0.02]"
      )}
    >
      {/* Active Sidebar Indicator */}
      {isActive && (
        <motion.div 
          layoutId="activeIndicator"
          className="absolute top-0 left-0 w-1 h-full bg-[#F97316] shadow-[0_0_15px_#F97316]" 
        />
      )}

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none opacity-50" />

      <div className="relative z-10 w-full mb-3 flex items-center justify-between">
        <div
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-sm transition-colors border",
            isActive ? "bg-[#F97316]/20 text-[#F97316] border-[#F97316]/30 shadow-[0_0_10px_rgba(249,115,22,0.3)]" : "bg-white/5 text-white/50 border-white/10"
          )}
        >
          {icon}
        </div>
        <div
          className={cn(
            "px-2 py-1 text-[9px] font-bold uppercase tracking-[2px] transition-colors rounded-sm",
            isActive
              ? "bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/30"
              : "bg-white/5 text-white/40 border border-white/10"
          )}
        >
          {tag}
        </div>
      </div>

      <div className="relative z-10 w-full">
        <h3 className={cn("text-[17px] font-bold mb-1.5 transition-colors", isActive ? "text-white" : "text-white/80")}>{title}</h3>
        <p className="text-[13px] leading-relaxed text-white/40 font-light">
          {description}
        </p>
      </div>

    </motion.button>
  )
}
