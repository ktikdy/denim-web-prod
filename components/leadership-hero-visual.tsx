"use client"

import { motion } from "framer-motion"

export function LeadershipHeroVisual() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
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
        className="absolute w-72 h-72 bg-denim-light-blue/10 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
        }}
      />
      <motion.div
        className="absolute w-64 h-64 bg-denim-dark-blue/10 rounded-full filter blur-3xl"
        style={{ top: "20%", left: "30%" }}
        animate={{
          scale: [1, 1.05, 1],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
        }}
      />

      {/* Core Structure */}
      <motion.div className="relative" variants={itemVariants}>
        <div
          className="absolute -inset-4 border-2 border-dashed border-denim-light-blue/20 rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div className="w-48 h-48 bg-white/80 backdrop-blur-sm rounded-full shadow-2xl border border-slate-200/50 flex items-center justify-center">
          <div className="w-32 h-32 bg-gradient-to-br from-denim-dark-blue to-denim-light-blue rounded-full shadow-lg animate-glow-pulse" />
        </div>
      </motion.div>

      {/* Floating Nodes */}
      {[
        { top: "10%", left: "20%", size: 24 },
        { top: "25%", right: "15%", size: 32 },
        { bottom: "15%", left: "30%", size: 28 },
        { bottom: "20%", right: "25%", size: 20 },
      ].map((node, i) => (
        <motion.div
          key={i}
          className="absolute p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-200/50"
          style={{ ...node, width: node.size, height: node.size }}
          variants={itemVariants}
          transition={{ ...itemVariants.transition, delay: 0.4 + i * 0.2 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-denim-light-blue/50 to-white rounded-full"></div>
        </motion.div>
      ))}

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-50 pointer-events-none" viewBox="0 0 500 500">
        <defs>
          <linearGradient id="leadership-line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d3b69" />
            <stop offset="100%" stopColor="#06aeef" />
          </linearGradient>
        </defs>
        <motion.path
          d="M140 100 Q 250 250 380 150"
          fill="none"
          stroke="url(#leadership-line-gradient)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        />
        <motion.path
          d="M160 400 Q 250 250 350 420"
          fill="none"
          stroke="url(#leadership-line-gradient)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 1.2 }}
        />
      </svg>
    </motion.div>
  )
}
