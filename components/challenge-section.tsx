"use client"

import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/container"
import { AnimatedCounter } from "@/components/animated-counter"
import { TrendingGraph } from "@/components/trending-graph"
import { motion } from "framer-motion"

export function ChallengeSection() {
  return (
    <div className="relative">
      {/* Sticky Challenge Section */}
      <section
        id="problem"
        className="sticky top-0 z-20 min-h-[120vh] md:min-h-screen bg-gradient-to-br from-white via-slate-50 to-gray-100 overflow-hidden py-4 md:py-16"
      >
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Background network pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #06aeef 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>
          {/* Floating background elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-denim-light-blue/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-denim-dark-blue/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-denim-light-blue/15 rounded-full blur-xl"></div>
        </div>

        <div className="w-full pt-[var(--header-height)] pb-4 md:pb-8">
          <Container className="relative z-10">
            <motion.div
              className="text-left mb-6 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-3 md:mb-6 border-denim-light-blue text-denim-dark-blue px-4 py-2">
                The Challenge
              </Badge>
              <h2 className="text-lg md:text-2xl font-heading text-gray-900 mb-3 md:mb-6 leading-tight">
                The strain on health systems continues to rise. Health systems need technology to support their most
                valuable resource—their people.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8 items-stretch">
              {/* First Card - Made clickable with link to JAMA article */}
              <motion.a
                href="https://jamanetwork.com/journals/jama/fullarticle/2785479#google_vignette"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-center p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl h-32 md:h-48 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-left">
                  <p className="text-lg md:text-3xl font-heading font-bold text-denim-light-blue mb-1 md:mb-4 group-hover:text-denim-dark-blue transition-colors">
                    <AnimatedCounter from={0} to={15} duration={2000} />-
                    <AnimatedCounter from={0} to={25} duration={2000} suffix="%" />
                  </p>
                  <h3 className="text-xs md:text-sm text-gray-900 mb-1 md:mb-2 group-hover:text-denim-dark-blue transition-colors">
                    of healthcare spending is administrative
                  </h3>
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-denim-light-blue to-cyan-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </div>
              </motion.a>

              {/* Hero Image - Same size as cards */}
              <motion.div
                className="relative h-32 md:h-48"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <div className="relative h-full">
                  {/* Glowing border effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-denim-light-blue/30 via-cyan-400/30 to-denim-light-blue/30 rounded-xl blur-lg"></div>

                  {/* Main container */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-2 md:p-4 border border-gray-200 shadow-2xl h-full">
                    <TrendingGraph />
                  </div>
                </div>
              </motion.div>

              {/* Second Card - Made clickable with link to MGMA PDF */}
              <motion.a
                href="https://www.mgma.com/getkaiasset/b6602f6b-c19a-417f-beca-ab060f7acd93/DD-BetterPerformers-December-2023.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-center p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl h-32 md:h-48 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-left">
                  <p className="text-lg md:text-3xl font-heading font-bold text-denim-light-blue mb-1 md:mb-4 group-hover:text-denim-dark-blue transition-colors">
                    <AnimatedCounter from={0} to={41} duration={2000} suffix="%" />
                  </p>
                  <h3 className="text-xs md:text-sm text-gray-900 mb-1 md:mb-2 group-hover:text-denim-dark-blue transition-colors">
                    increase in support staff cost since 2019
                  </h3>
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-denim-light-blue to-cyan-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                    />
                  </div>
                </div>
              </motion.a>

              {/* Third Card - Made clickable with link to MGMA PDF */}
              <motion.a
                href="https://jamanetwork.com/journals/jama/article-abstract/2752664"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-center p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl h-32 md:h-48 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-left">
                  <p className="text-lg md:text-3xl font-heading font-bold text-denim-light-blue mb-1 md:mb-4 group-hover:text-denim-dark-blue transition-colors">
                    $<AnimatedCounter from={0} to={266} duration={2000} suffix="B" />
                  </p>
                  <h3 className="text-xs md:text-sm text-gray-900 mb-1 md:mb-2 group-hover:text-denim-dark-blue transition-colors">
                    in annual wasted administrative spending
                  </h3>
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-denim-light-blue to-cyan-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 1.1 }}
                    />
                  </div>
                </div>
              </motion.a>
            </div>
          </Container>
        </div>
      </section>

      {/* Spacer to create scroll distance */}
      <div className="h-screen md:h-[50vh] lg:h-[30vh]"></div>
    </div>
  )
}
