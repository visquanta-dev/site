"use client"

import * as React from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"

interface StatCounterProps {
  value: number
  prefix?: string
  suffix?: string
  label: string
}

export function StatCounter({ value, prefix = "", suffix = "", label }: StatCounterProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.1,
  })

  React.useEffect(() => {
    if (isInView) {
      springValue.set(value)
    }
  }, [isInView, value, springValue])

  const displayValue = useTransform(springValue, (current) => {
    // Format numbers like 8500 -> 8,500
    const formattedNum = (Math.round(current)).toLocaleString()
    return `${prefix}${formattedNum}${suffix}`
  })

  return (
    <div ref={ref} className="flex flex-col items-center justify-center space-y-2 text-center">
      <motion.div className="text-[38px] font-extrabold tracking-[-2px] text-[#F97316]">
        {displayValue}
      </motion.div>
      <div className="text-xs font-medium text-[rgba(255,255,255,0.55)] max-w-[140px]">
        {label}
      </div>
    </div>
  )
}
