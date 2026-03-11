import * as React from "react"
import { cn } from "@/lib/utils"

interface PhoneMockupProps {
  children: React.ReactNode
  label?: string
  className?: string
}

export function PhoneMockup({ children, label, className }: PhoneMockupProps) {
  return (
    <div className={cn("mx-auto flex w-full max-w-[300px] flex-col items-center", className)}>
      {label && (
        <div className="mb-3 text-[9px] font-bold uppercase tracking-[2px] text-[rgba(255,255,255,0.3)]">
          {label}
        </div>
      )}
      
      {/* Outer Case / Terminal Frame */}
      <div className="relative w-full rounded-md border border-white/10 bg-black/80 p-1.5 shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-md">
        
        {/* Top Header Bar */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#F97316]/50 to-transparent" />
        
        <div className="flex w-full items-center justify-between mb-2 px-2 pt-1 border-b border-white/5 pb-1">
          <div className="flex space-x-1">
            <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#F97316]/60" />
          </div>
          <div className="text-[8px] font-mono text-[#F97316]/70 uppercase tracking-widest">Sys_Comm</div>
        </div>

        {/* Inner Screen */}
        <div className="relative flex min-h-[160px] w-full flex-col bg-black/50 p-[12px] overflow-hidden border border-white/5 rounded-sm">
          {/* Subtle Grid strictly for the inner screen */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
          
          <div className="relative z-10 w-full h-full text-left">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
