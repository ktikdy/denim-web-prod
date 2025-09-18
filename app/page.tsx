"use client"

import { useEffect, useRef } from "react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/container"
import { Layout } from "@/components/layout"
import { LeadershipVisual } from "@/components/leadership-visual"

import { motion } from "framer-motion"
import { ContactForm } from "@/components/contact-form"
import { VideoHeroVisual } from "@/components/video-hero-visual"
import { ClientSuccessSection } from "@/components/client-success-section"

import dynamic from "next/dynamic"

const PartnershipSectionSticky = dynamic(() => import("@/components/partnership-section-sticky"), {
  ssr: false,
  loading: () => null,
})

export default function HomePage() {
  const preloadSentinelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // idle-time preload (fires shortly after first paint)
    const preload = () => (PartnershipSectionSticky as any).preload?.()
    // @ts-ignore
    if (typeof requestIdleCallback !== "undefined") {
      // @ts-ignore
      requestIdleCallback(preload)
    } else {
      setTimeout(preload, 0)
    }

    // near-viewport preload as backup (in case idle didn't run yet)
    const el = preloadSentinelRef.current
    if (el && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            ;(PartnershipSectionSticky as any).preload?.()
            io.disconnect()
          }
        },
        { rootMargin: "1200px 0px" }, // start loading ~1.2k px before it scrolls in
      )
      io.observe(el)
      return () => io.disconnect()
    }
  }, [])

  return (
    <Layout currentPage="home">
      {/* Hero Section */}
      <section id="hero" className="relative bg-white overflow-hidden lg:h-[100dvh] lg:overflow-clip">
        <Container className="max-w-7xl relative z-10 lg:h-full py-0">
          {/* grid only handles text/layout; visual is handled separately below */}
          <div className="grid lg:grid-cols-12 gap-16 items-start pt-4 md:pt-8 lg:h-full">
            <div className="lg:col-span-6 text-left flex flex-col lg:justify-center pt-2 sm:pt-4 lg:pt-32 relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading tracking-tight text-gray-900 mb-6">
                Reclaim time.
                <br />
                <span className="text-denim-dark-blue bg-gradient-to-r from-denim-dark-blue to-denim-light-blue bg-clip-text text-transparent">
                  Reduce costs.
                </span>
                <br />
                <span className="text-gray-700">Reinvent operations.</span>
              </h1>
              <div className="space-y-6 mb-6 md:mb-8">
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  Health systems are drowning in administrative complexity, and adding staff hasn't solved the
                  ever-growing challenges.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  Denim thrives in this environment, delivering compelling ROI to health systems by streamlining
                  high-cost, high-friction workflows.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="sm"
                  className="px-10 py-4 text-lg bg-[#0A2540] text-white hover:bg-[#0A2540]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group relative overflow-hidden"
                  asChild
                >
                  <a href="/contact">
                    <span className="relative z-10 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">Contact us</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-denim-light-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </Button>
              </div>
            </div>

            {/* spacer keeps large-screen text width similar to before */}
            <div className="lg:col-span-3" />
          </div>
        </Container>

        {/* Visual: render ONLY on lg+; no element exists on small screens */}
        <div
          aria-hidden="true"
          className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:z-0 pointer-events-none lg:pointer-events-auto leading-[0] text-[0]"
        >
          <VideoHeroVisual />
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="mission" className="relative py-10 overflow-hidden bg-[#0A2540]">
        {/* Background glow effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-denim-light-blue/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-300/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/15 rounded-full blur-2xl"></div>
          <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-denim-light-blue/15 rounded-full blur-xl"></div>
          <div className="absolute top-1/6 left-1/6 w-32 h-32 bg-white/25 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/6 right-1/6 w-40 h-40 bg-cyan-200/20 rounded-full blur-2xl"></div>
        </div>

        {/* Additional background layers for depth */}

        <Container className="max-w-4xl relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="mb-6 text-white text-sm font-medium uppercase tracking-wider border-b-2 border-white/50 pb-1 inline-block drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                Our Mission
              </h3>
              <h2 className="text-2xl md:text-3xl font-heading text-white leading-tight max-w-3xl mx-auto drop-shadow-lg">
                To <span className="text-white">serve</span> health systems by delivering{" "}
                <motion.span
                  className="text-white"
                  animate={{
                    scale: [1, 1.1, 1],
                    textShadow: [
                      "0 0 0px rgba(255,255,255,0)",
                      "0 0 20px rgba(255,255,255,0.8)",
                      "0 0 0px rgba(255,255,255,0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  substantial ROI
                </motion.span>{" "}
                through <span className="text-white">innovation.</span>
              </h2>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Leadership Section */}
      <section id="credibility" className="pt-16 pb-1 bg-white">
        <Container className="max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="mb-6 text-gray-600 text-sm font-medium uppercase tracking-wider border-b-2 border-denim-light-blue pb-1 inline-block">
                Leadership Team
              </h3>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                Experienced in health tech. <span className="text-black">Focused on results.</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg font-medium">
                  Our team has been solving operational problems for health systems for decades.
                </p>
                <p>
                  Denim's team previously built{" "}
                  <span className="font-semibold text-gray-800">Crimson and Iodine Software</span>, platforms that help
                  hundreds of health systems and hospitals improve performance and generate strong financial returns
                  through tech and data solutions. Senior teammates have also led product, engineering, and operations
                  at The Advisory Board, athenahealth, Amazon, and high-growth startups.
                </p>
                <p>
                  Now this deep experience is being leveraged at Denim to develop AI tools that deliver significant
                  operational and financial impact for health systems.
                </p>
              </div>
              <div className="mt-8">
                <Button
                  size="sm"
                  className="bg-denim-light-blue text-white hover:bg-denim-light-blue/90 px-8 py-4 text-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                  asChild
                >
                  <a href="/about">About us</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <video autoPlay loop muted playsInline className="w-full h-auto">
                <source src="/denim_homepage_leadership.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </Container>
      </section>

      <div className="h-24 bg-white"></div>
      <div ref={preloadSentinelRef} aria-hidden />

      {/* Scroll-over Content */}
      <div className="relative z-30">
        <PartnershipSectionSticky />

        {/* Client Success Section */}
        {/* <ClientSuccessSection /> */}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden rounded-b-3xl">
          {/* Background network pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #0d3b69 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          <Container className="relative z-10">
            <div className="grid lg:grid-cols-5 gap-16 items-center">
              {/* Left Column: Text Content - Now narrower (2 columns) */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-heading text-gray-900 mb-4">Transform your operations</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Denim Health helps hospitals and health systems unlock measurable ROI through AI-powered automation.
                </p>
                <p className="text-lg text-gray-600">Reach out to learn how Denim can help your organization.</p>
              </div>

              {/* Right Column: Form - Now wider (3 columns) */}
              <div className="lg:col-span-3">
                <ContactForm pageSource="Homepage CTA" buttonText="Submit" />
              </div>
            </div>
          </Container>
        </section>
      </div>
    </Layout>
  )
}
