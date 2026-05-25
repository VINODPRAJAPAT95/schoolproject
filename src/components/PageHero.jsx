import React from 'react'

export default function PageHero({ title, subtitle, emoji, bg }) {
  return (
    <div className={`relative pt-28 pb-16 overflow-hidden ${bg || 'bg-gradient-to-r from-kidPurple via-kidBlue to-kidTeal'}`}>
      {/* Decorative blobs */}
      <div className="absolute top-8 left-8 w-24 h-24 bg-white/10 rounded-full animate-float" />
      <div className="absolute bottom-4 right-12 w-16 h-16 bg-white/10 rounded-full animate-float2" />
      <div className="absolute top-16 right-32 w-10 h-10 bg-kidYellow/30 rounded-full animate-bounce-slow" />
      <div className="absolute bottom-8 left-1/4 w-8 h-8 bg-kidPink/40 rounded-full animate-pulse" />

      {/* Stars */}
      <div className="absolute inset-0 star-bg opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="text-6xl mb-4 animate-bounce-slow">{emoji}</div>
        <h1 className="font-fredoka text-5xl md:text-6xl text-white mb-3 drop-shadow-lg">{title}</h1>
        {subtitle && <p className="font-baloo text-white/80 text-lg">{subtitle}</p>}
        {/* Breadcrumb */}
        <div className="mt-4 flex items-center justify-center gap-2 font-baloo text-white/70 text-sm">
          <span>🏠 Home</span><span>›</span><span className="text-kidYellow">{title}</span>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 50" className="w-full" preserveAspectRatio="none">
          <path fill="white" d="M0,25 C360,50 720,0 1080,25 C1260,37 1380,15 1440,25 L1440,50 L0,50 Z"/>
        </svg>
      </div>
    </div>
  )
}
