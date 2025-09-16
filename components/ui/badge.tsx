import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center text-xs font-semibold uppercase tracking-wide border-b-2 pb-1 transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default: "border-primary text-primary",
        secondary: "border-secondary text-secondary",
        destructive: "border-destructive text-destructive",
        outline: "border-current text-current",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
