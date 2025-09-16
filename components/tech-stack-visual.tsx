"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const icons = [
  { src: "/images/tech-icon-1.png", alt: "Communication AI", x: 0, y: -50, delay: 0.5 },
  { src: "/images/tech-icon-2.png", alt: "Network Connections", x: -110, y: 80, delay: 0.7 },
  { src: "/images/tech-icon-3.png", alt: "Process Automation", x: 110, y: 80, delay: 0.9 },
]

export function TechStackVisual() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const lineVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  }

  const iconVariants = {
    initial: { scale: 0, opacity: 0, x: 0, y: 0 },
    animate: (custom: { x: number; y: number; delay: number }) => ({
      scale: 1,
      opacity: 1,
      x: custom.x,
      y: custom.y,
      transition: { type: "spring", stiffness: 200, damping: 20, delay: custom.delay, duration: 0.8 },
    }),
  }

  return (
    <motion.div
      className="relative w-full h-80 flex items-center justify-center"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.8 }}
    >
      {/* Triangle Lines */}
      <svg className="absolute w-48 h-48" viewBox="-140 -70 280 180">
        {/* Top to Bottom Left */}
        <motion.line
          x1="0"
          y1="-50"
          x2="-110"
          y2="80"
          stroke="#00AEEF"
          strokeWidth="2"
          strokeDasharray="4 4"
          strokeLinecap="round"
          variants={lineVariants}
        />
        {/* Bottom Left to Bottom Right */}
        <motion.line
          x1="-110"
          y1="100"
          x2="110"
          y2="100"
          stroke="#00AEEF"
          strokeWidth="2"
          strokeDasharray="4 4"
          strokeLinecap="round"
          variants={lineVariants}
          transition={{ ...lineVariants.animate.transition, delay: 0.2 }}
        />
        {/* Bottom Right to Top */}
        <motion.line
          x1="110"
          y1="80"
          x2="0"
          y2="-50"
          stroke="#00AEEF"
          strokeWidth="2"
          strokeDasharray="4 4"
          strokeLinecap="round"
          variants={lineVariants}
          transition={{ ...lineVariants.animate.transition, delay: 0.4 }}
        />
      </svg>

      {/* Icons */}
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute"
          variants={iconVariants}
          custom={{ x: item.x, y: item.y, delay: item.delay }}
        >
          <div className="w-28 h-28 relative drop-shadow-lg">
            <Image src={item.src || "/placeholder.svg"} alt={item.alt} fill className="object-contain" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
