"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SmsBubbleProps {
  children: React.ReactNode
  isUser?: boolean
  delay?: number
}

export function SmsBubble({ children, isUser = false, delay = 0 }: SmsBubbleProps) {
  return (
    <div className={cn("flex w-full mb-3", isUser ? "justify-end" : "justify-start")}>
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, delay, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "max-w-[95%] px-3 py-2 text-[11px] font-mono leading-relaxed border",
          isUser
            ? "border-blue-500/30 bg-blue-500/10 text-blue-100"
            : "border-[#F97316]/30 bg-[#F97316]/10 text-[#F97316] shadow-[0_0_10px_rgba(249,115,22,0.1)] rounded-sm"
        )}
      >
        {children}
      </motion.div>
    </div>
  )
}
