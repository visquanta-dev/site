import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-sm border border-white/50 bg-black/60 px-4 py-2 text-[14px] text-white ring-offset-black file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/30 focus-visible:outline-none focus-visible:border-[#F97316]/80 focus-visible:ring-1 focus-visible:ring-[#F97316]/50 focus-visible:bg-[#F97316]/[0.05] disabled:cursor-not-allowed disabled:opacity-50 transition-all font-light shadow-inner",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
