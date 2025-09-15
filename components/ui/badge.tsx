import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "badge inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-all duration-300 ease-out overflow-hidden cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "border border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/30 hover:shadow-lg hover:shadow-cyan-500/20",
        secondary:
          "border border-purple-300/20 bg-purple-500/10 backdrop-blur-sm text-purple-100 hover:bg-purple-500/20 hover:border-purple-300/30 hover:shadow-lg hover:shadow-purple-500/20",
        destructive:
          "border border-red-300/20 bg-red-500/10 backdrop-blur-sm text-red-100 hover:bg-red-500/20 hover:border-red-300/30 hover:shadow-lg hover:shadow-red-500/20",
        outline:
          "border border-cyan-300/20 bg-cyan-500/5 backdrop-blur-sm text-cyan-100 hover:bg-cyan-500/15 hover:border-cyan-300/30 hover:shadow-lg hover:shadow-cyan-500/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
