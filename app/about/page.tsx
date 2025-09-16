"use client"

import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/container"
import { Layout } from "@/components/layout"
import { leaders } from "@/data/leaders"
import { ContactForm } from "@/components/contact-form"
import { AnimatedTextCycle } from "@/components/animated-text-cycle"
import { motion } from "framer-motion"

export default function LeadershipPage() {
  const texts = [
    "substantial ROI",
    "operational efficiency",
    "provider satisfaction",
    "measurable results",
    "reduced burnout",
  ]
  const linkedinUrls = [
    "https://www.linkedin.com/in/mike-kadyan-812b4",
    "https://www.linkedin.com/in/bengawiser/",
    "https://www.linkedin.com/in/haithcox/",
    "https://www.linkedin.com/in/satyangunnam/",
    "https://www.linkedin.com/in/amy-bodin-42536824/",
  ]

  return (
    <Layout currentPage="leadership">
      <main className="flex-1 relative">
        {/* Hero Section */}
          <section id="hero" className="relative bg-white overflow-hidden">
            <Container className="relative z-10">
              {/* ↓ small, even padding top/bottom */}
              <div className="w-full py-12 sm:py-10 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 items-center">
                  <div className="space-y-6">
                    <motion.div
                      className="w-full"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h1 className="m-0 text-2xl md:text-3xl lg:text-4xl font-heading text-gray-900 leading-tight">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 lg:flex-wrap">
                          <span>Serving health systems by delivering</span>
                          <motion.div
                            className="inline-block px-6 py-2 rounded-lg bg-white border border-slate-200 shadow-inner max-w-lg"
                            animate={{
                              scale: [1, 1.02, 1],
                              borderColor: [
                                "rgb(226 232 240)",
                                "rgb(6 174 239)",
                                "rgb(226 232 240)",
                              ],
                              boxShadow: [
                                "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
                                "inset 0 2px 4px 0 rgb(6 174 239 / 0.1), 0 0 0 1px rgb(6 174 239 / 0.2)",
                                "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
                              ],
                            }}
                            transition={{
                              duration: 0.5,
                              ease: "easeInOut",
                              repeat: Number.POSITIVE_INFINITY,
                              repeatDelay: 2.0,
                            }}
                          >
                            <div className="relative inline-flex items-center justify-start w-full h-12 md:h-14">
                              <AnimatedTextCycle
                                texts={texts}
                                className="bg-gradient-to-r from-denim-dark-blue to-denim-light-blue bg-clip-text text-transparent font-space-mono text-xl md:text-2xl lg:text-3xl font-bold"
                                duration={2500}
                              />
                            </div>
                          </motion.div>
                        </div>
                        <span className="block mt-1 text-2xl md:text-3xl lg:text-4xl font-heading text-gray-900">
                          through innovation.
                        </span>
                      </h1>
                    </motion.div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* Leadership (separate section) */}
          <section id="leadership" className="relative bg-white overflow-hidden">
            <Container className="relative z-10">
              {/* ↓ small, even padding and no extra bottom whitespace */}
              <div className="py-8 md:py-10">
                <div className="relative">
                  {/* Decorative gradient starts ABOVE the badge and sits behind content */}
                  <div
                    className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-8 h-32 w-[110vw] bg-gradient-to-b from-[#00AEEF] to-white opacity-20 z-0"
                    aria-hidden="true"
                  />
                  <h3 className="relative z-10 mb-6 text-gray-900 text-sm font-medium uppercase tracking-wider border-b-2 border-[#00AEEF] pb-1 inline-block">
                    Leadership
                  </h3>
                  <p className="relative z-10 m-0 text-xl text-gray-700 leading-relaxed">
                    Denim's team is made up of experienced innovators in health tech, each
                    with a proven track record of delivering solutions that work for health
                    systems. Meet the team below.
                  </p>
                </div>
              </div>
            </Container>
          </section>

        {/* Individual Leader Profiles Section */}
        <section id="team-profiles" className="py-8 relative overflow-hidden bg-white">
          <Container className="max-w-6xl">
            <div className="space-y-20 relative z-10">
              {leaders.map((leader, index) => (
                <div key={leader.name} className="grid lg:grid-cols-[300px_1fr] gap-12 items-start">
                  {/* Left side - Photo and Title */}
                  <div className="flex flex-col items-center lg:items-start">
                    {linkedinUrls[index] ? (
                      <Link
                        href={linkedinUrls[index]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:opacity-90 transition-opacity"
                      >
                        <Card className="p-6 bg-white border-2 border-gray-200 hover:border-denim-light-blue/30 transition-all duration-300 hover:shadow-lg relative cursor-pointer">
                          <div className="text-center">
                            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-denim-light-blue/20 shadow-md">
                              <Image
                                src={leader.image || "/placeholder.svg"}
                                alt={leader.name}
                                width={192}
                                height={192}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="space-y-2">
                              <h3 className="font-heading text-gray-900 text-xl">{leader.name}</h3>
                              <p className="text-denim-dark-blue text-sm font-medium bg-denim-light-blue/10 px-3 py-1 rounded-full">
                                {leader.title}
                              </p>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    ) : (
                      <Card className="p-6 bg-white border-2 border-gray-200 hover:border-denim-light-blue/30 transition-all duration-300 hover:shadow-lg relative">
                        <div className="text-center">
                          <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-denim-light-blue/20 shadow-md">
                            <Image
                              src={leader.image || "/placeholder.svg"}
                              alt={leader.name}
                              width={192}
                              height={192}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="space-y-2">
                            <h3 className="font-heading text-gray-900 text-xl">{leader.name}</h3>
                            <p className="text-denim-dark-blue text-sm font-medium bg-denim-light-blue/10 px-3 py-1 rounded-full">
                              {leader.title}
                            </p>
                          </div>
                        </div>
                      </Card>
                    )}
                  </div>

                  {/* Right side - Career Description */}
                  <div className="flex items-center">
                    <div className="relative">
                      {/* Dotted border container */}
                      <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-8 bg-gray-50">
                        <p className="text-gray-900 leading-relaxed text-lg">{leader.description}</p>
                      </div>

                      {/* Connecting line to photo */}
                      <div className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 hidden lg:block">
                        <div className="flex items-center">
                          <div className="w-8 h-px bg-gradient-to-r from-gray-300 to-denim-light-blue"></div>
                          <div
                            className="w-2 h-2 bg-denim-light-blue rounded-full animate-pulse"
                            style={{ animationDelay: `${index * 0.3}s` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-white via-slate-50 to-gray-100 relative overflow-hidden z-10">
          {/* Background network pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #06aeef 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          <Container className="relative z-10">
            <div className="grid lg:grid-cols-5 gap-16 items-center">
              {/* Left Column: Text Content - Now takes 2 columns */}
              <div className="text-gray-900 lg:col-span-2">
                <h2 className="text-3xl font-heading mb-4">Transform your operations</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Find out how Denim's team can unlock significant ROI and operational efficiencies for your health
                  system.
                </p>
                <p className="text-lg text-gray-600">Fill out the form to start the conversation. </p>
              </div>

              {/* Right Column: Form - Now takes 3 columns */}
              <div className="lg:col-span-3">
                <ContactForm pageSource="Leadership CTA" buttonText="Submit" />
              </div>
            </div>
          </Container>
        </section>
      </main>
    </Layout>
  )
}
