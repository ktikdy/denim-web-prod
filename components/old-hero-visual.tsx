"use client"

import { motion } from "framer-motion"

export function OldHeroVisual() {
  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      <motion.div
        className="w-64 h-64 rounded-full bg-gradient-to-br from-denim-light-blue/20 to-denim-dark-blue/30 backdrop-blur-sm border border-white/20"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm">
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-denim-light-blue/30 to-denim-dark-blue/20">
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center">
              <motion.div
                className="w-16 h-16 rounded-full bg-denim-dark-blue/40 backdrop-blur-sm"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
