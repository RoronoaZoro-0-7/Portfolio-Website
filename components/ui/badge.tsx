import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-colors duration-150 ease-out overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/20",
        secondary:
          "border border-purple-300/15 bg-purple-500/5 text-purple-100 hover:bg-purple-500/10 hover:border-purple-300/20",
        destructive:
          "border border-red-300/15 bg-red-500/5 text-red-100 hover:bg-red-500/10 hover:border-red-300/20",
        outline:
          "border border-cyan-300/15 bg-cyan-500/3 text-cyan-100 hover:bg-cyan-500/8 hover:border-cyan-300/20",
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
