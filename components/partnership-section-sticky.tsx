"use client"

import { useRef, useEffect, useState, useMemo, memo } from "react"
import { motion, useScroll, useTransform, useReducedMotion, useMotionTemplate } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/container"
import { FileSearch, SlidersHorizontal, Combine, TrendingUp } from "lucide-react"

export default function PartnershipSectionSticky() {
  const sceneRef = useRef<HTMLDivElement | null>(null)
  const stickyRef = useRef<HTMLDivElement | null>(null)
  const topBadgeRef = useRef<HTMLDivElement | null>(null)
  const bottomBadgeRef = useRef<HTMLDivElement | null>(null)
  const prefersReduced = useReducedMotion()

  // Track responsive grid (lg:4, md:2, sm:1)
  const [cols, setCols] = useState<1 | 2 | 4>(4)
  useEffect(() => {
    const lg = window.matchMedia("(min-width: 1024px)")
    const md = window.matchMedia("(min-width: 768px)")
    let raf = 0
    const update = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setCols(lg.matches ? 4 : md.matches ? 2 : 1))
    }
    update()
    lg.addEventListener?.("change", update)
    md.addEventListener?.("change", update)
    return () => {
      cancelAnimationFrame(raf)
      lg.removeEventListener?.("change", update)
      md.removeEventListener?.("change", update)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  })

  // Glow
  const glowTop = useTransform(scrollYProgress, [0, 1], ["0%", "90%"])
  const glowScale = useTransform(scrollYProgress, [0, 1], [0.95, 1.15])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.15, 0.6, 1], [0.15, 0.6, 0.9, 0.6])
  const glowBlur = useTransform(scrollYProgress, [0, 1], [20, 48])
  const glowFilter = useMotionTemplate`blur(${glowBlur}px)`
  const GLOW_Y_NUDGE_PX = -600
  const glowTopWithOffset = useMotionTemplate`calc(${glowTop} + var(--spine-top, 0px) + ${GLOW_Y_NUDGE_PX}px)`

  // Morph phases
  const singleCardOpacityTransform = useTransform(scrollYProgress, [0.35, 0.55], [1, 0])
  const singleCardScaleTransform = useTransform(scrollYProgress, [0.35, 0.55], [1, 0.95])
  const singleCardOpacity = prefersReduced ? 0 : singleCardOpacityTransform
  const singleCardScale = prefersReduced ? 1 : singleCardScaleTransform
  const gridOpacityTransform = useTransform(scrollYProgress, [0.5, 0.7], [0, 1])
  const gridOpacity = prefersReduced ? 1 : gridOpacityTransform
  const baseTiltTransform = useTransform(scrollYProgress, [0.55, 0.95], [1, 0])
  const baseTilt = prefersReduced ? 0 : baseTiltTransform

  // Keep spine centered on badges (throttled)
  useEffect(() => {
    const host = stickyRef.current
    if (!host) return
    const SPINE_NUDGE_PX = 1.5
    const SPINE_TOP_OFFSET_PX = -400

    let pending = 0
    const calcAndSet = () => {
      pending = 0
      const centers: number[] = []
      const pushCenter = (el: HTMLElement | null) => {
        if (!el) return
        const r = el.getBoundingClientRect()
        centers.push(r.left + r.width / 2)
      }
      pushCenter(topBadgeRef.current)
      pushCenter(bottomBadgeRef.current)

      const hostRect = host.getBoundingClientRect()
      const viewportCenter = window.innerWidth / 2
      const targetCenter = centers.length ? centers.reduce((a, b) => a + b, 0) / centers.length : viewportCenter

      const localX = targetCenter - hostRect.left
      host.style.setProperty("--spine-x", `${localX}px`)
      host.style.setProperty("--spine-nudge", `${SPINE_NUDGE_PX}px`)

      const topRect = topBadgeRef.current?.getBoundingClientRect()
      const rawTop = topRect ? topRect.top - hostRect.top - SPINE_TOP_OFFSET_PX : 0
      const spineTop = Math.max(rawTop, 0)
      host.style.setProperty("--spine-top", `${spineTop}px`)
    }

    const schedule = () => {
      if (pending) return
      pending = requestAnimationFrame(calcAndSet)
    }

    const ro = "ResizeObserver" in window ? new ResizeObserver(schedule) : null
    topBadgeRef.current && ro?.observe(topBadgeRef.current)
    bottomBadgeRef.current && ro?.observe(bottomBadgeRef.current)
    schedule()
    window.addEventListener("resize", schedule, { passive: true })
    return () => {
      if (pending) cancelAnimationFrame(pending)
      window.removeEventListener("resize", schedule)
      ro?.disconnect()
    }
  }, [])

  const items = useMemo(
    () => [
      {
        icon: FileSearch,
        title: "Discovery and Assessment",
        description: "Comprehensive workflow analysis and ROI modeling insights",
      },
      {
        icon: SlidersHorizontal,
        title: "Custom Configuration",
        description: "Tailored AI solutions designed for your specific needs",
      },
      {
        icon: Combine,
        title: "Seamless Integration",
        titleWithBreak: "Seamless\nIntegration",
        description: "Deployed with your existing systems and tech stack",
      },
      {
        icon: TrendingUp,
        title: "Ongoing Optimization",
        description: "Continuous monitoring and performance enhancement",
      },
    ],
    []
  )

  return (
    <section id="partnership" className="relative isolate overflow-visible pb-8 bg-[#0A2540]">
      {/* Tall scroll scene wrapper (less extreme on phones) */}
      <div ref={sceneRef} className="relative min-h-[160vh] sm:min-h-[200vh] md:min-h-[220vh]">
        {/* Sticky frame pinned under header. Use dvh/svh for mobile correctness */}
        <div
          ref={stickyRef}
          className="sticky top-[var(--header-height)] min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:h-[calc(100dvh-var(--header-height))] overflow-visible will-change-transform"
        >
          {/* Scene background card */}
          <div className="relative h-full overflow-visible rounded-3xl bg-[#0A2540]">
            {/* === OVERLAY (spine + glow) === */}
            <div
              className="pointer-events-none absolute inset-0 z-[60] overflow-visible"
              // ↑ was z-[1]; now higher so the glow passes over the CTA background
            >
              <div
                className="absolute -translate-x-1/2 w-px bg-gradient-to-b from-white/0 via-white/80 to-white/0 opacity-80 hidden md:block"
                style={{
                  left: "calc(var(--spine-x, 50%) + var(--spine-nudge, 0px))",
                  top: "var(--spine-top, 0px)",
                  bottom: 0,
                }}
              />
              {!prefersReduced && (
                <motion.div
                  aria-hidden
                  className="absolute -translate-x-1/2 transform-gpu"
                  style={{
                    left: "calc(var(--spine-x, 50%) + var(--spine-nudge, 0px))",
                    top: glowTopWithOffset,
                    zIndex: 30,
                  }}
                >
                  <motion.div
                    className="w-[60vw] max-w-[820px] aspect-square rounded-full"
                    style={{
                      scale: glowScale,
                      opacity: glowOpacity,
                      filter: glowFilter,
                      willChange: "transform, filter, opacity",
                      background:
                        "radial-gradient(ellipse at center, rgba(255,255,255,0.24) 0%, rgba(34,211,238,0.55) 18%, rgba(6,182,212,0.35) 38%, rgba(10,37,64,0) 72%)",
                    }}
                  />
                </motion.div>
              )}
            </div>

            <div className="absolute top-20 left-10 w-48 h-48 bg-denim-light-blue/30 rounded-full blur-3xl z-0" />
            <div className="absolute bottom-20 right-10 w-56 h-56 bg-cyan-300/25 rounded-full blur-3xl z-0" />
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/20 rounded-full blur-2xl z-0" />
            <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-denim-light-blue/25 rounded-full blur-xl z-0" />

            {/* Content stack */}
            <div className="relative z-10 h-full min-h-full flex flex-col overflow-visible">
              <Container className="max-w-6xl flex-none py-4 sm:py-6 md:py-8">
                <div className="w-full max-w-3xl mx-auto">
                  {/* Top badge */}
                  <div ref={topBadgeRef} className="flex justify-center">
                    <h3 className="mb-3 sm:mb-4 md:mb-6 text-white text-sm sm:text-sm font-normal uppercase border-b-2 border-white/50 pb-1 inline-block">
                      Tailored Partnership
                    </h3>
                  </div>

                  <h2 className="text-2xl sm:text-2xl md:text-4xl font-heading text-white mb-3 sm:mb-4 md:mb-6 leading-tight text-center [text-wrap:balance]">
                    Built for the complexity of healthcare
                  </h2>
                  <div className="mt-3 sm:mt-4 md:mt-6 space-y-3 sm:space-y-4 md:space-y-6 text-white/90 leading-relaxed text-left max-w-[65ch] mx-auto text-base sm:text-base md:text-base">
                    <p>
                      AI tools in healthcare must be more than smart. They must be purpose-built for the complexity and
                      scale of health systems.
                    </p>
                    <p>
                      At Denim, we don't just deliver technology. We deliver transformation. Our team works with your
                      leaders and frontline teams to identify the friction points that matter most, then tailor our
                      solutions to improve your operations.
                    </p>
                    <p>
                      We've spent decades deploying advanced technologies in complex health systems. That experience
                      shapes how we design, adapt, and implement every Denim solution, so it fits your workflows, aligns
                      with your goals, and scales sustainably.
                    </p>
                  </div>
                </div>
              </Container>

              {/* Bottom: Our Approach + morph grid */}
              <div className="relative pb-2 sm:pb-2 md:pb-7 overflow-visible">
                <Container className="max-w-6xl">
                  {/* Phase B/C */}
                  <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 overflow-visible px-2 sm:px-0">
                    {items.map((item, i) => {
                      const weight = cols === 4 ? i - 1.5 : cols === 2 ? (i % 2 === 0 ? -0.5 : 0.5) : 0
                      return (
                        <MorphCard
                          key={item.title}
                          item={item}
                          weight={weight}
                          baseTilt={baseTilt}
                          gridOpacity={gridOpacity}
                        />
                      )
                    })}
                  </div>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA after sticky scene — guaranteed below and same background */}
      <div className="relative z-0 overflow-hidden mt-0 sm:mt-0 md:mt-0 lg:-mt-14">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[820px] aspect-square rounded-full opacity-30 blur-[32px] bg-gradient-radial from-white/20 via-cyan-400/30 to-transparent" />
        </div>
        <Container className="max-w-6xl relative z-10">
          <div className="py-4 sm:py-6 md:py-8 text-center">
            <Button
              size="sm"
              className="bg-white text-denim-dark-blue hover:bg-denim-light-blue hover:text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-sm sm:text-sm md:text-base shadow-xl hover:shadow-2xl transition-all duration-300 group relative z-40"
              asChild
            >
              <a href="/contact">Schedule a demo</a>
            </Button>
          </div>
        </Container>
      </div>
    </section>
  )
}

const MorphCard = memo(function MorphCard({
  item,
  weight,
  baseTilt,
  gridOpacity,
}: {
  item: { icon: any; title: string; titleWithBreak?: string; description: string }
  weight: number
  baseTilt: any
  gridOpacity: any
}) {
  const ROT_Y = 14
  const SHIFT = 44
  const SCALE_DROP = 0.04

  const rotY = useTransform(baseTilt, [0, 1], [0, -weight * ROT_Y])
  const x = useTransform(baseTilt, [0, 1], [0, weight * SHIFT])
  const scale = useTransform(baseTilt, [0, 1], [1, 1 - SCALE_DROP])

  const Icon = item.icon

  return (
    <motion.div className="relative" style={{ opacity: gridOpacity, transformStyle: "preserve-3d", perspective: 1000 }}>
      <motion.div className="[transform-style:preserve-3d]" style={{ x, rotateY: rotY, scale }}>
        <Card className="p-3 sm:p-4 md:p-6 lg:p-8 text-left h-full min-h-[140px] sm:min-h-[160px] md:min-h-[180px] border border-white/50 shadow-2xl bg-white/60 backdrop-blur-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40 opacity-90" />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/60 via-white/45 to-white/60 opacity-70" />
          <div className="relative z-10">
            <div className="mb-1.5 sm:mb-2 md:mb-3 text-denim-dark-blue">
              <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mr-auto drop-shadow-sm" strokeWidth={2} />
            </div>
            <h3 className="font-heading text-denim-dark-blue text-base sm:text-base md:text-lg leading-tight mb-1 sm:mb-1.5 md:mb-2 drop-shadow-sm whitespace-pre-line">
              {item.titleWithBreak || item.title}
            </h3>
            <p className="text-denim-dark-blue/80 text-sm sm:text-sm leading-relaxed drop-shadow-sm">
              {item.description}
            </p>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  )
})
