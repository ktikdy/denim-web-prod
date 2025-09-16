"use client"

import { motion } from "framer-motion"
import { Settings, Zap, GitMerge } from "lucide-react"

export function PartnershipVisual() {
  const ringVariants = {
    animate: (i: number) => ({
      rotate: 360 * (i % 2 === 0 ? 1 : -1),
      transition: {
        duration: 40 + i * 10,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      },
    }),
  }

  const iconVariants = {
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
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Concentric Rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border-2 border-dashed rounded-full"
          style={{
            width: `${150 + i * 80}px`,
            height: `${150 + i * 80}px`,
            borderColor: i === 1 ? "rgba(255, 255, 255, 0.3)" : "rgba(6, 174, 239, 0.4)",
          }}
          custom={i}
          animate={ringVariants.animate}
        />
      ))}

      {/* Central Core */}
      <motion.div
        className="relative w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full shadow-2xl flex items-center justify-center border border-white/30"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-denim-light-blue to-white rounded-full animate-glow-pulse" />
      </motion.div>

      {/* Connecting Lines and Nodes */}
      <motion.div
        className="absolute"
        style={{ top: "calc(50% - 105px)", left: "calc(50% - 20px)" }}
        variants={iconVariants}
      >
        <div className="absolute w-10 h-px bg-gradient-to-r from-transparent to-denim-light-blue -rotate-45 origin-top-left"></div>
        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg shadow-md border border-white/30">
          <Settings className="w-5 h-5 text-white" />
        </div>
      </motion.div>

      <motion.div
        className="absolute"
        style={{ top: "calc(50% + 30px)", left: "calc(50% - 140px)" }}
        variants={iconVariants}
        transition={{ ...iconVariants.transition, delay: 0.7 }}
      >
        <div className="absolute top-1/2 right-0 w-10 h-px bg-gradient-to-l from-transparent to-denim-light-blue"></div>
        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg shadow-md border border-white/30">
          <Zap className="w-5 h-5 text-denim-light-blue" />
        </div>
      </motion.div>

      <motion.div
        className="absolute"
        style={{ top: "calc(50% + 60px)", left: "calc(50% + 80px)" }}
        variants={iconVariants}
        transition={{ ...iconVariants.transition, delay: 0.9 }}
      >
        <div className="absolute top-1/2 left-0 w-10 h-px bg-gradient-to-r from-transparent to-white -translate-x-full"></div>
        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg shadow-md border border-white/30">
          <GitMerge className="w-5 h-5 text-white" />
        </div>
      </motion.div>
    </div>
  )
}
