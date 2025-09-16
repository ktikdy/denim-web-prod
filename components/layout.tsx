"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/container"
import { useState } from "react"
import type React from "react"

interface LayoutProps {
  children: React.ReactNode
  currentPage?: string
}

export function Layout({ children, currentPage = "" }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/about", label: "About", page: "leadership" },
    { href: "/careers", label: "Careers", page: "careers" },
  ]

  return (
    <div className="relative flex flex-col min-h-screen bg-white text-gray-900 font-sans">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 py-2 bg-white backdrop-blur-sm border-b border-gray-200/80">
        <Container className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Image
              src="/images/denim-health-logo.png"
              alt="Denim Health Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-colors text-sm font-medium ${
                    currentPage === link.page
                      ? "text-denim-dark-blue font-semibold"
                      : "text-gray-600 hover:text-denim-dark-blue"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a href="/contact">
              <Button
                size="sm"
                className="
                  relative overflow-hidden px-4 text-white
                  bg-[#0A2540]
                  backdrop-blur-xl backdrop-saturate-200 backdrop-contrast-125
                  border border-white/20
                  shadow-[0_8px_28px_rgba(10,37,64,0.50),inset_0_1px_0_rgba(255,255,255,0.24)]
                  hover:bg-[#0A2540]/95
                  hover:shadow-[0_10px_34px_rgba(10,37,64,0.60),inset_0_1px_0_rgba(255,255,255,0.30)]
                  transition-all duration-200

                  /* bright frosted highlight + gloss band */
                  before:content-[''] before:absolute before:inset-0 before:pointer-events-none
                  before:bg-[radial-gradient(120%_90%_at_0%_0%,rgba(255,255,255,0.38)_0%,rgba(255,255,255,0.14)_35%,rgba(255,255,255,0)_60%),linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0)_45%)]

                  /* darker corner shade for contrast */
                  after:content-[''] after:absolute after:inset-0 after:pointer-events-none
                  after:bg-[radial-gradient(120%_140%_at_100%_120%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.55)_100%)]
                  after:mix-blend-multiply
                "
              >
                <span className="relative z-10 font-medium">Contact</span>
              </Button>
            </a>
          </div>

          <button
            className="md:hidden flex flex-col gap-1 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-0.5 bg-gray-600 transition-all duration-300"></div>
            <div className="w-6 h-0.5 bg-gray-600 transition-all duration-300"></div>
            <div className="w-6 h-0.5 bg-gray-600 transition-all duration-300"></div>
          </button>
        </Container>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white backdrop-blur-sm border-b border-gray-200/80 shadow-lg">
            <Container className="py-4">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`transition-colors text-sm font-medium py-2 ${
                      currentPage === link.page
                        ? "text-denim-dark-blue font-semibold"
                        : "text-gray-600 hover:text-denim-dark-blue"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-2">
                  <a href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button
                      size="sm"
                      className="bg-[#0A2540] text-white hover:bg-[#0A2540]/90 px-4 w-auto shadow-[0_0_8px_rgba(10,37,64,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_0_12px_rgba(10,37,64,0.4),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-200"
                    >
                      <span>Contact</span>
                    </Button>
                  </a>
                </div>
              </nav>
            </Container>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 relative">
        {/* Vertical Dotted Line */}
        <div
          className="absolute top-0 bottom-0 left-6 md:left-12 w-px pointer-events-none z-40"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(0, 174, 239, 0.7) 40%, transparent 60%)",
            backgroundSize: "2px 10px",
            backgroundRepeat: "repeat-y",
          }}
        />
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0A2540] border-t border-white/20">
        <Container className="py-8">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4 flex flex-col gap-4">
              <a href="/">
                <Image
                  src="/images/denim-health-logo.png"
                  alt="Denim Health Logo"
                  width={150}
                  height={35}
                  className="h-8 w-auto brightness-0 invert"
                />
              </a>
              <p className="text-sm text-white/80 max-w-xs whitespace-nowrap">
                Reclaim time. Reduce costs. Reinvent operations.
              </p>
            </div>
            <div className="md:col-span-8 flex justify-center md:justify-end">
              <nav className="flex flex-wrap items-center gap-8">
                <a href="/about" className="text-sm text-white/90 hover:text-white transition-colors font-medium">
                  About
                </a>
                <a href="/careers" className="text-sm text-white/90 hover:text-white transition-colors font-medium">
                  Careers
                </a>
                <a href="/contact" className="text-sm text-white/90 hover:text-white transition-colors font-medium">
                  Contact
                </a>
              </nav>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-white/20 text-center text-sm text-white/60">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <p>Copyright © 2025 Denim Health, LLC. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <span>|</span>
                <a href="/terms" className="hover:text-white transition-colors">
                  Terms of Use
                </a>
                <span>|</span>
                <a href="/security" className="hover:text-white transition-colors">
                  Security
                </a>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}
