"use client"

interface AnimatedLineProps {
  className?: string
}

export function AnimatedLine({ className = "" }: AnimatedLineProps) {
  return (
    <div className={`w-full h-20 z-20 overflow-hidden ${className}`}>
      <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 80" preserveAspectRatio="none">
        {/* Background curved path - tilted upward */}
        <path
          d="M0,65 Q300,45 600,35 T1200,15"
          fill="none"
          stroke="url(#dotted-line-bg)"
          strokeWidth="2"
          strokeDasharray="4 8"
          opacity="0.3"
        />

        {/* Main glowing curved path - tilted upward */}
        <path
          d="M0,65 Q300,45 600,35 T1200,15"
          fill="none"
          stroke="url(#dotted-line-gradient)"
          strokeWidth="3"
          strokeDasharray="6 10"
          className="animate-dot-flow"
        />

        {/* Bright accent dots - tilted upward */}
        <path
          d="M0,65 Q300,45 600,35 T1200,15"
          fill="none"
          stroke="url(#bright-accent)"
          strokeWidth="1.5"
          strokeDasharray="2 14"
          className="animate-dot-flow animate-glow-pulse"
          style={{ animationDelay: "0.3s" }}
        />

        <defs>
          {/* Background gradient */}
          <linearGradient id="dotted-line-bg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0d3b69" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#06aeef" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0d3b69" stopOpacity="0.2" />
          </linearGradient>

          {/* Main gradient */}
          <linearGradient id="dotted-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0d3b69" stopOpacity="0.6" />
            <stop offset="25%" stopColor="#06aeef" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="75%" stopColor="#06aeef" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0d3b69" stopOpacity="0.6" />
          </linearGradient>

          {/* Bright accent gradient */}
          <linearGradient id="bright-accent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06aeef" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#06aeef" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Additional floating dots for extra effect */}
      <div className="absolute bottom-4 left-0 w-full h-8">
        <div className="relative w-full h-full">
          <div
            className="absolute w-2 h-2 bg-denim-light-blue rounded-full opacity-60 animate-pulse"
            style={{
              left: "15%",
              top: "60%",
              animationDelay: "0s",
              boxShadow: "0 0 10px #06aeef",
            }}
          ></div>
          <div
            className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-80 animate-pulse"
            style={{
              left: "35%",
              top: "40%",
              animationDelay: "0.7s",
              boxShadow: "0 0 8px #ffffff",
            }}
          ></div>
          <div
            className="absolute w-2 h-2 bg-denim-light-blue rounded-full opacity-70 animate-pulse"
            style={{
              left: "60%",
              top: "25%",
              animationDelay: "1.4s",
              boxShadow: "0 0 12px #06aeef",
            }}
          ></div>
          <div
            className="absolute w-1 h-1 bg-denim-dark-blue rounded-full opacity-50 animate-pulse"
            style={{
              left: "80%",
              top: "10%",
              animationDelay: "1s",
              boxShadow: "0 0 6px #0d3b69",
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}
