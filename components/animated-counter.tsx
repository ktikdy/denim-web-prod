"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  from: number
  to: number
  duration: number // in milliseconds
  suffix?: string
  className?: string
}

export function AnimatedCounter({ from, to, duration, suffix = "", className }: AnimatedCounterProps) {
  const [count, setCount] = useState(from)
  const animationFrameRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    const animate = (currentTime: number) => {
      if (!startTimeRef.current) startTimeRef.current = currentTime
      const progress = (currentTime - startTimeRef.current) / duration

      if (progress < 1) {
        const easedProgress = 0.5 - Math.cos(progress * Math.PI) / 2 // Ease-in-out effect
        const currentCount = from + easedProgress * (to - from)
        setCount(Math.floor(currentCount))
        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        setCount(to)
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [from, to, duration])

  return (
    <span className={cn("font-bold", className)}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
