"use client"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/container"
import { Layout } from "@/components/layout"
import { MapPin, Laptop, Building } from "lucide-react"
import { CareersVideoHero } from "@/components/careers-video-hero"
import { TechStackVisual } from "@/components/tech-stack-visual"
import { motion } from "framer-motion"
import { ContactForm } from "@/components/contact-form"

export default function CareersPage() {
  return (
    <Layout currentPage="careers">
      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="relative py-12 md:py-18 bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #0d3b69 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          <Container className="max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="text-left order-1">
                <h3 className="mb-6 text-denim-dark-blue text-sm font-medium uppercase tracking-wider border-b-2 border-denim-light-blue pb-1 inline-block">
                  Join Our Team
                </h3>
                <h1 className="text-2xl md:text-4xl font-heading tracking-tight text-gray-900 mb-6">
                  Innovate with purpose.
                  <br />
                  <span className="text-denim-dark-blue bg-gradient-to-r from-denim-dark-blue to-denim-light-blue bg-clip-text text-transparent">
                    Transform healthcare.
                  </span>
                </h1>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                    Denim has an experienced team of healthcare and software professionals, who share a common goal of
                    serving health systems. We are dedicated innovators with successful track records of building
                    meaningful companies, and we're shaping the future of healthcare.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                    We are looking for forward thinkers who want to make an impact in healthcare. Our team thrives on
                    passion, collaboration, and a shared vision of the future.
                  </p>
                </div>
              </div>
              <div className="order-2 flex justify-center lg:justify-end">
                <CareersVideoHero />
              </div>
            </div>
          </Container>
        </section>

        {/* Shape the Future Section */}
        <section id="future" className="py-16 bg-gray-100">
          <Container className="max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="text-left order-1">
                <h3 className="mb-6 text-gray-600 text-sm font-medium uppercase tracking-wider border-b-2 border-denim-light-blue pb-1 inline-block">
                  The Technology
                </h3>
                <h2 className="text-3xl font-heading text-gray-900 mb-6 leading-tight">
                  Shape the future of health tech
                </h2>
                <div className="space-y-4 text-gray-600 text-lg max-w-xl">
                  <p>
                    Denim Health is at the forefront of health tech, merging the power of{" "}
                    <span className="font-semibold">machine learning</span>,{" "}
                    <span className="font-semibold">natural language processing (NLP)</span>, and{" "}
                    <span className="font-semibold">generative AI</span> to modernize healthcare operations.
                  </p>
                  <p>
                    We are seeking professionals who are inspired by technology, love to learn, and are goal-driven.
                  </p>
                </div>
              </div>

              <div className="order-2 flex justify-center lg:justify-end">
                <TechStackVisual />
              </div>
            </div>
          </Container>
        </section>

        {/* What We Offer Section */}
        <section id="offer" className="py-24 bg-[#0A2540] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #06aeef 1px, transparent 0)`,
                backgroundSize: "60px 60px",
              }}
            ></div>
          </div>

          <Container className="max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-heading text-white mb-4">Join our growing team</h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                We're building a culture of innovation, collaboration, and impact. 
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column: Cards */}
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Austin, Texas",
                    description: "Located in Austin, Texas, Denim is in the city's vibrant Domain neighborhood.",
                  },
                  {
                    icon: Laptop,
                    title: "Remote Friendly",
                    description: "Not in Austin? We support remote work environments for many roles.",
                  },
                  {
                    icon: Building,
                    title: "Competitive Package",
                    description:
                      "Denim Health offers a competitive salary, benefits, and a unique opportunity to grow with us.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 text-left border-2 border-white/20 shadow-xl hover:shadow-2xl hover:border-denim-light-blue/60 transition-all duration-500 hover:-translate-y-1 bg-white/10 backdrop-blur-sm group">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="p-3 bg-denim-light-blue/10 rounded-full border-2 border-denim-light-blue/30 group-hover:bg-denim-light-blue/20 transition-colors duration-300">
                            <item.icon className="w-6 h-6 text-denim-light-blue" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading text-white text-lg mb-2">{item.title}</h3>
                          <p className="text-white/80 leading-relaxed text-sm">{item.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Right Column: Google Maps */}
              <div className="lg:sticky lg:top-8">
                <Card className="p-6 border-2 border-white/20 shadow-xl bg-white/10 backdrop-blur-sm">
                  <h3 className="font-heading text-white text-lg mb-4 text-center">Our Office</h3>
                  <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.8947!2d-97.7431!3d30.3916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cb4e7b8d8b8d%3A0x1234567890abcdef!2s11801%20Domain%20Blvd%2C%20Austin%2C%20TX%2078758!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Denim Health Office Location - 11801 Domain Blvd, Austin, TX 78758"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-white/80 text-sm">Visit us in Austin's premier business district</p>
                  </div>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-white via-slate-50 to-gray-100 relative overflow-hidden">
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
                <h2 className="text-3xl font-heading mb-4">Connect with Denim</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  If you're passionate about transforming healthcare and excited to work with a team that's delivered
                  proven results, we'd love to hear from you.
                </p>
                <p className="text-lg text-gray-600">Fill out the form or reach out to recruiting@denimhealth.com.</p>
              </div>

              {/* Right Column: Form - Now takes 3 columns */}
              <div className="lg:col-span-3">
                <ContactForm pageSource="Careers CTA" buttonText="Get in touch" />
              </div>
            </div>
          </Container>
        </section>
      </main>
    </Layout>
  )
}
