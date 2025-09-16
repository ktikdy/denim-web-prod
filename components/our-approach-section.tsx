"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/container"
import { Phone, Pill, Inbox, CheckCircle } from "lucide-react"

export function OurApproachSection() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <section
      id="philosophy"
      className="py-24 relative overflow-hidden group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-denim-light-blue/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-300/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/40 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-denim-light-blue/35 rounded-full blur-xl"></div>
        <div className="absolute top-1/6 left-1/6 w-32 h-32 bg-white/60 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/6 right-1/6 w-40 h-40 bg-cyan-200/50 rounded-full blur-2xl"></div>
      </div>

      <div className="absolute inset-0 bg-denim-dark-blue/45 backdrop-blur-lg"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-denim-light-blue/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-denim-dark-blue/30 via-transparent to-white/10"></div>

      <Container className="max-w-7xl relative z-10">
        <div className="text-left mb-20">
          <Badge variant="outline" className="mb-8 border-white/50 text-white bg-white/20 backdrop-blur-sm px-4 py-2">
            Our Approach
          </Badge>
          <h2 className="text-5xl font-heading text-white mb-8 leading-tight drop-shadow-lg">
            Automate the routine.
            <br />
            <span className="text-cyan-300 bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
              Accelerate the complex.
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-5xl leading-relaxed mb-8 font-medium drop-shadow-sm">
            Generic tools fall short. To truly lift the burden, automation must be agentic—able to take initiative
            within existing workflows and adapt to context. That's why Denim builds tailored AI to automate the most
            time-consuming, high-friction workflows spanning communication channels within health systems.
          </p>
          <p className="text-lg text-gray-300 max-w-4xl drop-shadow-sm">
            Below are just a few ways our platform could deliver value to your health system:
          </p>
        </div>

        {/* Enhanced animated thread network connecting solution cards */}
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-denim-dark-blue/20 backdrop-blur-sm rounded-2xl"></div>
          <svg
            className="w-1/3 max-w-md h-full relative z-10"
            viewBox="0 0 900 300"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Central hub */}
            <circle cx="450" cy="150" r="10" fill="url(#hub-gradient)" className="animate-pulse" />

            {/* Threads to each solution */}
            <path
              d="M450,150 Q350,120 250,130"
              fill="none"
              stroke="url(#solution-gradient-1)"
              strokeWidth="3"
              strokeDasharray="6 8"
              className="animate-dot-flow"
            />
            <path
              d="M450,150 L450,90"
              fill="none"
              stroke="url(#solution-gradient-2)"
              strokeWidth="3"
              strokeDasharray="6 8"
              className="animate-dot-flow"
              style={{ animationDelay: "0.3s" }}
            />
            <path
              d="M450,150 Q550,120 650,130"
              fill="none"
              stroke="url(#solution-gradient-3)"
              strokeWidth="3"
              strokeDasharray="6 8"
              className="animate-dot-flow"
              style={{ animationDelay: "0.6s" }}
            />

            {/* Interconnecting threads */}
            <path
              d="M250,130 Q350,70 450,90"
              fill="none"
              stroke="url(#interconnect-gradient)"
              strokeWidth="2"
              strokeDasharray="4 10"
              className="animate-dot-flow"
              style={{ animationDelay: "1s" }}
              opacity="0.7"
            />
            <path
              d="M450,90 Q550,70 650,130"
              fill="none"
              stroke="url(#interconnect-gradient)"
              strokeWidth="2"
              strokeDasharray="4 10"
              className="animate-dot-flow"
              style={{ animationDelay: "1.3s" }}
              opacity="0.7"
            />

            <defs>
              <radialGradient id="hub-gradient">
                <stop offset="0%" stopColor="#06aeef" stopOpacity="1" />
                <stop offset="100%" stopColor="#0d3b69" stopOpacity="0.8" />
              </radialGradient>
              <linearGradient id="solution-gradient-1" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#0d3b69" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#06aeef" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="solution-gradient-2" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#0d3b69" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#06aeef" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="solution-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0d3b69" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#06aeef" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="interconnect-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06aeef" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#0d3b69" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#06aeef" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="grid md:grid-cols-3 gap-10 relative z-10">
          {/* Solution Card 1 */}
          <Card className="group relative overflow-hidden border-2 border-white/30 hover:border-cyan-300/50 transition-all duration-500 hover:shadow-2xl hover:scale-105 bg-denim-dark-blue/30 backdrop-blur-lg">
            <div
              className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-300/60 rounded-full animate-pulse shadow-lg"
              style={{ animationDelay: "0.3s" }}
            ></div>

            {/* Compact icon-only state */}
            <div className="group-hover:hidden p-12 flex flex-col items-start justify-center h-64">
              <div className="w-20 h-20 bg-cyan-300/20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 shadow-lg">
                <Phone className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Expanded state on hover */}
            <div className="hidden group-hover:block p-10 text-left">
              <div className="w-20 h-20 bg-cyan-300/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan-300/30 transition-colors duration-300 relative shadow-lg mr-auto">
                <Phone className="w-10 h-10 text-white" />
                <div className="absolute inset-0 bg-cyan-300/10 rounded-2xl animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-heading text-white mb-6 drop-shadow-lg">Call Deflection</h3>
              <p className="text-gray-200 leading-relaxed mb-8 text-lg drop-shadow-sm">
                Automates patient encounters with Conversational AI, resolving routine needs without staff intervention.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-200 justify-start">
                  <CheckCircle className="w-5 h-5 text-cyan-300 mr-3" />
                  <span className="font-medium">24/7 patient support</span>
                </div>
                <div className="flex items-center text-gray-200 justify-start">
                  <CheckCircle className="w-5 h-5 text-cyan-300 mr-3" />
                  <span className="font-medium">Natural language processing</span>
                </div>
                <div className="flex items-center text-gray-200 justify-start">
                  <CheckCircle className="w-5 h-5 text-cyan-300 mr-3" />
                  <span className="font-medium">Seamless escalation protocols</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Solution Card 2 */}
          <Card className="group relative overflow-hidden border-2 border-white/30 hover:border-cyan-300/50 transition-all duration-500 hover:shadow-2xl hover:scale-105 bg-denim-dark-blue/30 backdrop-blur-lg">
            <div className="absolute top-6 right-6 w-4 h-4 bg-cyan-300/60 rounded-full animate-pulse shadow-lg"></div>

            {/* Compact icon-only state */}
            <div className="group-hover:hidden p-12 flex flex-col items-start justify-center h-64">
              <div className="w-20 h-20 bg-cyan-300/20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 shadow-lg">
                <Inbox className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Expanded state on hover */}
            <div className="hidden group-hover:block p-10 text-left">
              <div className="w-20 h-20 bg-cyan-300/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan-300/30 transition-colors duration-300 relative shadow-lg mr-auto">
                <Inbox className="w-10 h-10 text-white" />
                <div className="absolute inset-0 bg-cyan-300/10 rounded-2xl animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-heading text-white mb-6 drop-shadow-lg">Inbox Copilot</h3>
              <p className="text-gray-200 leading-relaxed mb-8 text-lg drop-shadow-sm">
                Uses AI to triage, prioritize, and automate in-basket messages and follow-up tasks—reducing clinician
                burden and follow-up time.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-200 justify-start">
                  <CheckCircle className="w-5 h-5 text-cyan-300 mr-3" />
                  <span className="font-medium">Intelligent message routing</span>
                </div>
                <div className="flex items-center text-gray-200 justify-start">
                  <CheckCircle className="w-5 h-5 text-cyan-300 mr-3" />
                  <span className="font-medium">Automated follow-up scheduling</span>
                </div>
                <div className="flex items-center text-gray-200 justify-start">
                  <CheckCircle className="w-5 h-5 text-cyan-300 mr-3" />
                  <span className="font-medium">Priority-based task management</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Solution Card 3 */}
          <Card className="group relative overflow-hidden border-2 border-white/30 hover:border-cyan-300/50 transition-all duration-500 hover:shadow-2xl hover:scale-105 bg-denim-dark-blue/30 backdrop-blur-lg">
            <div
              className="absolute top-6 left-6 w-4 h-4 bg-cyan-300/60 rounded-full animate-pulse shadow-lg"
              style={{ animationDelay: "0.6s" }}
            ></div>

            {/* Compact icon-only state */}
            <div className="group-hover:hidden p-12 flex flex-col items-start justify-center h-64">
              <div className="w-20 h-20 bg-cyan-300/20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 shadow-lg">
                <Pill className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Expanded state on hover */}
            <div className="hidden group-hover:block p-10 text-left">
              <div className="w-20 h-20 bg-cyan-300/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan-300/30 transition-colors duration-300 relative shadow-lg mr-auto">
                <Pill className="w-10 h-10 text-white" />
                <div className="absolute inset-0 bg-cyan-300/10 rounded-2xl animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-heading text-white mb-6 drop-shadow-lg">Prescription Automation</h3>
              <p className="text-gray-200 leading-relaxed mb-8 text-lg drop-shadow-sm">
                Streamlines medication refills across phone and inbox channels—enabling faster, more efficient
                turnaround.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-200 justify-start">
                  <CheckCircle className="w-5 h-5 text-cyan-300 mr-3" />
                  <span className="font-medium">Automated refill processing</span>
                </div>
                <div className="flex items-center text-gray-200 justify-start">
                  <CheckCircle className="w-5 h-5 text-cyan-300 mr-3" />
                  <span className="font-medium">Insurance verification</span>
                </div>
                <div className="flex items-center text-gray-200 justify-start">
                  <CheckCircle className="w-5 h-5 text-cyan-300 mr-3" />
                  <span className="font-medium">Multi-channel integration</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
