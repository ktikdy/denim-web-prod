"use client"

import { Container } from "@/components/container"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

export function ClientSuccessSection() {
  return (
    <section id="success" className="relative py-24 overflow-hidden bg-white">
      <Container className="max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h3 className="mb-6 text-gray-600 text-sm font-medium uppercase tracking-wider border-b-2 border-[#0A2540] pb-1 inline-block">
            Client Success
          </h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative p-10 md:p-12 rounded-2xl overflow-hidden bg-[#0A2540]">
            {/* Background glow effects for quote box */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-denim-light-blue/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-300/15 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/15 rounded-full blur-2xl"></div>
              <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-denim-light-blue/15 rounded-full blur-xl"></div>
              <div className="absolute top-1/6 left-1/6 w-32 h-32 bg-white/25 rounded-full blur-xl"></div>
              <div className="absolute bottom-1/6 right-1/6 w-40 h-40 bg-cyan-200/20 rounded-full blur-2xl"></div>
            </div>

            {/* Additional background layers for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-denim-light-blue/10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-denim-dark-blue/20 via-transparent to-white/5"></div>

            <div className="absolute -top-8 -left-8 w-24 h-24 text-white/20">
              <Quote className="w-full h-full" strokeWidth={1} />
            </div>

            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-8 drop-shadow-lg">
                "Denim Health was one of the fastest, enterprise-wide technology rollouts we've experienced. Together,
                we've generated strong ROI, reduced administrative costs, and built a foundation for additional
                operational transformation."
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-right ml-auto">
                  <p className="font-bold text-lg text-white">Jason Wood</p>
                  <p className="text-white">VP of Consumer Engagement at Community Health Systems</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
