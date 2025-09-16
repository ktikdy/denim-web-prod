"use client"

import { useRef, useEffect } from "react"

export function CareersVideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const playVideo = async () => {
        try {
          await video.play()
        } catch (error) {
          console.log("[v0] Video autoplay failed, likely due to browser policy:", error)
          // Fallback: try to play on user interaction
          const handleInteraction = async () => {
            try {
              await video.play()
              document.removeEventListener("touchstart", handleInteraction)
              document.removeEventListener("click", handleInteraction)
            } catch (e) {
              console.log("[v0] Video play failed on interaction:", e)
            }
          }
          document.addEventListener("touchstart", handleInteraction, { once: true })
          document.addEventListener("click", handleInteraction, { once: true })
        }
      }
      playVideo()
    }
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        webkit-playsinline="true"
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/denim_careers_hero-4Aj0L4Q16skOPzcOX8ttd62pHPdUhK.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
