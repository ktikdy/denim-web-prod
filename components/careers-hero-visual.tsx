"use client"

import { motion } from "framer-motion"
import { Users } from "lucide-react"

export function CareersHeroVisual() {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const pathVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  }

  const nodeVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5,
      },
    },
  }

  return (
    <motion.div
      className="relative flex items-center justify-center w-full h-96 lg:h-full"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background Gradients */}
      <motion.div
        className="absolute w-64 h-64 bg-denim-light-blue/10 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
        }}
      />
      <motion.div
        className="absolute w-56 h-56 bg-denim-dark-blue/10 rounded-full filter blur-3xl"
        style={{ top: "25%", left: "35%" }}
        animate={{
          scale: [1, 1.05, 1],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          delay: 2,
        }}
      />

      {/* SVG Network */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
        <defs>
          <linearGradient id="career-line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d3b69" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06aeef" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {/* Paths */}
        <motion.path
          d="M 250,100 V 250 H 100"
          fill="none"
          stroke="url(#career-line-gradient)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          variants={pathVariants}
        />
        <motion.path
          d="M 250,250 H 400"
          fill="none"
          stroke="url(#career-line-gradient)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          variants={pathVariants}
          transition={{ ...pathVariants.animate.transition, delay: 0.2 }}
        />
        <motion.path
          d="M 250,250 V 400 H 350"
          fill="none"
          stroke="url(#career-line-gradient)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          variants={pathVariants}
          transition={{ ...pathVariants.animate.transition, delay: 0.4 }}
        />
      </svg>

      {/* Central Node */}
      <motion.div
        className="relative p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-2xl border border-slate-200/50"
        variants={nodeVariants}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-denim-dark-blue to-denim-light-blue rounded-full flex items-center justify-center shadow-lg">
          <Users className="w-8 h-8 text-white" />
        </div>
      </motion.div>

      {/* Outer Nodes */}
      {[
        { cx: 250, cy: 100 },
        { cx: 100, cy: 250 },
        { cx: 400, cy: 250 },
        { cx: 350, cy: 400 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-6 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-200/50"
          style={{
            top: `calc(${pos.cy / 5}% - 12px)`,
            left: `calc(${pos.cx / 5}% - 12px)`,
          }}
          variants={nodeVariants}
          transition={{ ...nodeVariants.transition, delay: 1 + i * 0.2 }}
        />
      ))}
    </motion.div>
  )
}
