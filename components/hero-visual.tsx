"use client"

import { motion } from "framer-motion"
import { Zap, Shield, BarChart } from "lucide-react"

export function HeroVisual() {
  const iconVariants = {
    initial: { scale: 0, opacity: 0, y: 20 },
    animate: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  }

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[400px] lg:min-h-[500px]">
      {/* Background Gradient Shapes */}
      <motion.div
        className="absolute w-64 h-64 bg-denim-light-blue/20 rounded-full filter blur-3xl opacity-50"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
        }}
      />
      <motion.div
        className="absolute w-56 h-56 bg-denim-dark-blue/20 rounded-full filter blur-3xl opacity-40"
        animate={{
          scale: [1, 1.05, 1],
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          delay: 2,
        }}
      />

      {/* Central Orb */}
      <motion.div
        className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-2xl flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0d3b69 1px, transparent 0)`,
            backgroundSize: "20px 20px",
            opacity: 0.05,
          }}
        ></div>
        <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-denim-dark-blue to-denim-light-blue rounded-full shadow-lg animate-glow-pulse" />
      </motion.div>

      {/* Floating Icon Nodes */}
      <motion.div
        className="absolute top-10 left-10 p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200/50"
        variants={iconVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <Zap className="w-8 h-8 text-denim-light-blue" />
      </motion.div>

      <motion.div
        className="absolute top-20 right-5 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200/50"
        variants={iconVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.7 }}
      >
        <Shield className="w-10 h-10 text-denim-dark-blue" />
      </motion.div>

      <motion.div
        className="absolute bottom-16 left-5 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200/50"
        variants={iconVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.9 }}
      >
        <BarChart className="w-10 h-10 text-denim-dark-blue" />
      </motion.div>

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" viewBox="0 0 500 500">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d3b69" />
            <stop offset="100%" stopColor="#06aeef" />
          </linearGradient>
        </defs>

        <motion.path
          d="M100 100 Q 250 250 150 400"
          fill="none"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          strokeDasharray="8 4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 3, ease: "easeInOut", delay: 1 },
            opacity: { duration: 0.5, delay: 1 },
          }}
        />
        <motion.path
          d="M400 120 Q 250 250 420 350"
          fill="none"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          strokeDasharray="8 4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 3, ease: "easeInOut", delay: 1.5 },
            opacity: { duration: 0.5, delay: 1.5 },
          }}
        />
        <motion.path
          d="M100 100 Q 250 250 400 120"
          fill="none"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          strokeDasharray="8 4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 3, ease: "easeInOut", delay: 2 },
            opacity: { duration: 0.5, delay: 2 },
          }}
        />
      </svg>
    </div>
  )
}
