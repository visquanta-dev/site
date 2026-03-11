import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-[13px] font-bold uppercase tracking-[1px] ring-offset-black transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F97316] focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#F97316] text-black hover:bg-[#F97316]/90 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] border border-[#F97316]",
        outline:
          "border border-white/10 bg-black/40 hover:border-[#F97316]/50 hover:bg-[#F97316]/10 hover:text-[#F97316] hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] text-white/70",
        ghost: "hover:bg-white/5 hover:text-white text-white/50",
        link: "text-[#F97316] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-9 px-4 text-[11px]",
        lg: "h-14 px-8 text-[14px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
