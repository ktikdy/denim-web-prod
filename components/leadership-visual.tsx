"use client"

import { useId, useRef } from "react"
import { motion, useReducedMotion, useInView } from "framer-motion"

export function LeadershipVisual() {
  const prefersReduced = useReducedMotion()
  const uid = useId()
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -35% 0px" })

  const SIZE = 400
  const C = SIZE / 2
  const circles = [{ r: 50 }, { r: 85 }, { r: 120 }, { r: 155 }, { r: 190 }]

  const DRAW_DURATION = 1.1 // per-ring write-on time (reduced from 1.2)
  const STAGGER = 0.35 // delay between rings (reduced from 0.4)
  const START_DELAY = 0.1 // start animation sooner
  const LAST_DELAY = START_DELAY + STAGGER * (circles.length - 1)
  const DRAW_END = LAST_DELAY + DRAW_DURATION
  const PULSE_DELAY = DRAW_END + 0.1 // speed up pulse timing
  const PULSE_DURATION = 1.1 // speed up pulse animation (reduced from 1.2)

  if (prefersReduced) {
    return (
      <div ref={ref} className="relative w-full h-96 flex items-center justify-center p-4 overflow-hidden">
        <svg className="w-full h-full" viewBox={`0 0 ${SIZE} ${SIZE}`} aria-hidden>
          <defs>
            <filter id={`${uid}-blue-glow`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {circles.map((c, i) => (
            <circle
              key={`static-${i}`}
              cx={C}
              cy={C}
              r={c.r}
              fill="none"
              stroke="#06aeef"
              strokeWidth="2"
              strokeDasharray="2 8"
              strokeLinecap="round"
              style={{ filter: `url(#${uid}-blue-glow)` }}
            />
          ))}
          <circle cx={C} cy={C} r="10" fill="#06aeef" style={{ filter: `url(#${uid}-blue-glow)` }} />
        </svg>
      </div>
    )
  }

  return (
    <div ref={ref} className="relative w-full h-96 flex items-center justify-center p-4 overflow-hidden">
      <svg className="w-full h-full" viewBox={`0 0 ${SIZE} ${SIZE}`} aria-hidden>
        <defs>
          <filter id={`${uid}-blue-glow`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {circles.map((c, i) => {
            const circumference = 2 * Math.PI * c.r
            return (
              <mask id={`${uid}-reveal-${i}`} key={`mask-${i}`}>
                <rect width="100%" height="100%" fill="black" />
                <motion.circle
                  cx={C}
                  cy={C}
                  r={c.r}
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: isInView ? 0 : circumference }}
                  transition={{
                    duration: DRAW_DURATION,
                    delay: START_DELAY + i * STAGGER,
                    ease: "easeOut",
                  }}
                />
              </mask>
            )
          })}
        </defs>

        {circles.map((c, i) => (
          <motion.circle
            key={`ring-${i}`}
            cx={C}
            cy={C}
            r={c.r}
            fill="none"
            strokeWidth="2"
            strokeDasharray="2 8"
            strokeLinecap="round"
            mask={`url(#${uid}-reveal-${i})`}
            initial={{ stroke: "#9ca3af" }}
            animate={{ stroke: isInView ? "#06aeef" : "#9ca3af" }}
            transition={{ delay: DRAW_END, duration: 0.5, ease: "easeInOut" }}
          />
        ))}

        <motion.g
          style={{ filter: `url(#${uid}-blue-glow)` }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: [0, 1, 0.7, 1] } : { opacity: 0 }}
          transition={{ delay: PULSE_DELAY, duration: PULSE_DURATION, ease: "easeInOut" }}
        >
          {circles.map((c, i) => (
            <circle
              key={`glow-${i}`}
              cx={C}
              cy={C}
              r={c.r}
              fill="none"
              stroke="#06aeef"
              strokeWidth="2"
              strokeDasharray="2 8"
              strokeLinecap="round"
            />
          ))}
        </motion.g>

        <motion.circle
          cx={C}
          cy={C}
          r="10"
          fill="#06aeef"
          style={{ filter: `url(#${uid}-blue-glow)` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={
            isInView
              ? {
                  scale: 1,
                  opacity: 1,
                }
              : { scale: 0, opacity: 0 }
          }
          transition={{
            delay: DRAW_END + 0.1,
            duration: 0.5,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  )
}

export const LeadershipVisualMinimal = LeadershipVisual
