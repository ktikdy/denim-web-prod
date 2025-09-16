"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function ThreadAnimation() {
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase(1), 2000)
    const timer2 = setTimeout(() => setAnimationPhase(2), 4000)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  // Thread paths - tangled initially, then straightened
  const threads = [
    {
      id: 1,
      color: "#0d3b69", // denim-dark-blue
      tangled: "M50 100 Q 150 50 200 150 Q 250 200 300 100 Q 350 50 400 150",
      straight: "M50 50 L50 400",
      dShape: "M50 50 L50 400", // Left edge of D
    },
    {
      id: 2,
      color: "#06aeef", // denim-light-blue
      tangled: "M80 150 Q 180 100 230 200 Q 280 250 330 150 Q 380 100 430 200",
      straight: "M100 50 L100 400",
      dShape: "M100 50 L100 400", // Left part
    },
    {
      id: 3,
      color: "#0d3b69",
      tangled: "M110 80 Q 210 130 260 30 Q 310 80 360 180 Q 410 230 460 130",
      straight: "M150 50 L150 400",
      dShape: "M150 50 Q 250 50 300 125 Q 300 225 250 300 Q 200 350 150 400", // D curve - top and bottom
    },
    {
      id: 4,
      color: "#06aeef",
      tangled: "M140 120 Q 240 70 290 170 Q 340 220 390 120 Q 440 70 490 170",
      straight: "M200 50 L200 400",
      dShape: "M200 50 Q 280 60 320 125 Q 320 225 280 290 Q 240 340 200 400", // D curve - inner
    },
    {
      id: 5,
      color: "#0d3b69",
      tangled: "M170 90 Q 270 140 320 40 Q 370 90 420 190 Q 470 240 520 140",
      straight: "M250 50 L250 400",
      dShape: "M250 50 L250 400", // Right part
    },
    {
      id: 6,
      color: "#06aeef",
      tangled: "M200 160 Q 300 110 350 210 Q 400 260 450 160 Q 500 110 550 210",
      straight: "M300 50 L300 400",
      dShape: "M300 50 L300 400", // Right edge of D
    },
  ]

  const getCurrentPath = (thread: any) => {
    if (animationPhase === 0) return thread.tangled
    if (animationPhase === 1) return thread.straight
    return thread.dShape
  }

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[400px] lg:min-h-[500px] overflow-hidden">
      {/* Background gradient */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-br from-denim-light-blue/10 to-denim-dark-blue/10 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />

      {/* Main SVG Container */}
      <div className="relative w-full h-full max-w-lg">
        <svg
          viewBox="0 0 400 450"
          className="w-full h-full"
          style={{ filter: "drop-shadow(0 4px 20px rgba(13, 59, 105, 0.15))" }}
        >
          <defs>
            {/* Gradient definitions */}
            <linearGradient id="thread-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0d3b69" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0d3b69" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="thread-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06aeef" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06aeef" stopOpacity="0.4" />
            </linearGradient>

            {/* Glow filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Render threads */}
          {threads.map((thread, index) => (
            <motion.path
              key={thread.id}
              d={getCurrentPath(thread)}
              fill="none"
              stroke={thread.color === "#0d3b69" ? "url(#thread-gradient-1)" : "url(#thread-gradient-2)"}
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: 1,
                d: getCurrentPath(thread),
              }}
              transition={{
                pathLength: { duration: 1.5, delay: index * 0.2 },
                opacity: { duration: 0.5, delay: index * 0.2 },
                d: {
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: animationPhase === 1 ? 0.5 : animationPhase === 2 ? 0.5 : 0,
                },
              }}
            />
          ))}

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={`particle-${i}`}
              r="2"
              fill={i % 2 === 0 ? "#0d3b69" : "#06aeef"}
              opacity="0.6"
              initial={{
                cx: Math.random() * 400,
                cy: Math.random() * 450,
                opacity: 0,
              }}
              animate={{
                cx: Math.random() * 400,
                cy: Math.random() * 450,
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>

        {/* Phase indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[0, 1, 2].map((phase) => (
            <motion.div
              key={phase}
              className={`w-2 h-2 rounded-full ${animationPhase === phase ? "bg-denim-light-blue" : "bg-gray-300"}`}
              animate={{
                scale: animationPhase === phase ? 1.2 : 1,
                opacity: animationPhase === phase ? 1 : 0.5,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      {/* Subtle text labels */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-sm text-gray-500 font-medium">
          {animationPhase === 0 && "Complex Operations"}
          {animationPhase === 1 && "Streamlined Processes"}
          {animationPhase === 2 && "Denim Solutions"}
        </p>
      </motion.div>
    </div>
  )
}
