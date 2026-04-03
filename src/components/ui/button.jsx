import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

const buttonVariants = {
  variant: {
    default: "bg-brand-green text-bg-primary hover:bg-brand-green/90",
    destructive: "bg-brand-red text-white hover:bg-brand-red/90",
    outline: "border border-white/20 bg-transparent hover:bg-white/10 text-white",
    secondary: "bg-white/10 text-white hover:bg-white/20",
    ghost: "hover:bg-white/10 text-white",
    link: "text-brand-green underline-offset-4 hover:underline",
  },
  size: {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  },
}

export const Button = React.forwardRef(({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  const v = buttonVariants.variant[variant] || buttonVariants.variant.default
  const s = buttonVariants.size[size] || buttonVariants.size.default
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        v,
        s,
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"
