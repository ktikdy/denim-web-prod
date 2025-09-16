import { cn } from "@/lib/utils"
import type React from "react"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return <div className={cn("mx-auto max-w-7xl pl-12 pr-4 md:pl-20 md:pr-6 lg:pr-8", className)}>{children}</div>
}
