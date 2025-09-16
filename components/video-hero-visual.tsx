"use client"

import { useRef, useEffect } from "react"

export function VideoHeroVisual() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      // Ensure the poster frame doesn't "stick"
      video.currentTime = 0
    }

    video.addEventListener("loadeddata", handleLoadedData)
    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
    }
  }, [])

  return (
    <div className="w-full h-full overflow-hidden leading-[0] text-[0]" aria-hidden="true">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        // Keep mobile uncropped; apply translate/scale only at lg+
        className="
          block w-full h-full transform-gpu will-change-transform origin-center
          object-contain sm: object cover lg:object-cover
          scale-100 translate-y-0
          md:scale-100 md:translate-y-0
          lg:scale-[1.07] lg:-translate-y-10
        "
        poster="/images/hero-placeholder.png"
        // 'metadata' is lighter for mobile; the browser may still smart-fetch.
        preload="metadata"
        // purely decorative:
        tabIndex={-1}
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Denim%20Hero%20main%200827_25-uLiB9fXhVjZvcHZamqD7bTemHXIN7J.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
