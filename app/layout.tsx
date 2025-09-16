import type React from "react"
import type { Metadata } from "next"
import { Inter, Spectral, DM_Sans, Space_Mono } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

// Configure Spectral for headings
const spectral = Spectral({
  subsets: ["latin"],
  variable: "--font-spectral",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
})

// Configure Inter for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Denim Health",
  description: "Denim Health streamlines high-cost, high-friction workflows for health systems.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn(spectral.variable, inter.variable, dmSans.variable, spaceMono.variable)}>
      <body>{children}</body>
    </html>
  )
}
