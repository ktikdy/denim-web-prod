"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function TrendingGraph() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const dataPoints = [
    { x: 5, y: 75 }, // Start moderate
    { x: 20, y: 55 }, // Gentle up
    { x: 35, y: 65 }, // Small down
    { x: 50, y: 45 }, // Moderate up
    { x: 65, y: 55 }, // Small down
    { x: 80, y: 35 }, // Good up
    { x: 95, y: 20 }, // Final high point
  ]

  const createSharpPath = (points: { x: number; y: number }[]) => {
    if (points.length < 2) return ""

    let path = `M ${points[0].x} ${points[0].y}`

    for (let i = 1; i < points.length; i++) {
      const current = points[i]
      path += ` L ${current.x} ${current.y}`
    }

    return path
  }

  const pathString = createSharpPath(dataPoints)

  return (
    <div ref={ref} className="relative h-48 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
        {/* Moderate trending line with subtle up-down pattern */}
        <motion.path
          d={pathString}
          fill="none"
          stroke="#06aeef"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
          style={{
            filter: "drop-shadow(0 2px 8px rgba(6, 174, 239, 0.4))",
          }}
        />
      </svg>
    </div>
  )
}
