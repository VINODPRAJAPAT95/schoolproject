import React from 'react'

export default function PageHero({ title, subtitle, bg }) {
  return (
    <div
      className={`relative pt-24 pb-14 overflow-hidden ${
        bg || 'bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200'
      }`}
    >

      {/* SOFT BACKGROUND BLUR SHAPES */}
      <div className="absolute top-10 left-6 w-28 h-28 bg-pink-300/30 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-36 h-36 bg-blue-300/30 rounded-full blur-2xl animate-pulse" />
      <div className="absolute top-20 right-1/3 w-20 h-20 bg-yellow-300/30 rounded-full blur-xl animate-bounce" />

      {/* FLOATING TOYS */}
      <div className="absolute top-16 left-10 text-4xl animate-bounce">🎈</div>
      <div className="absolute top-28 right-16 text-3xl animate-float">🧸</div>
      <div className="absolute bottom-20 left-1/4 text-3xl animate-float2">🖍️</div>

      {/* STAR PATTERN OVERLAY */}
      <div className="absolute inset-0 opacity-20 star-bg pointer-events-none" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* CARTOON BADGE */}
        <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-md">
          <p className="text-sm font-bold tracking-widest text-purple-600 uppercase">
            Preschool Learning Zone
          </p>
        </div>

        {/* TITLE */}
        <h1 className="font-fredoka text-4xl md:text-6xl text-purple-900 leading-tight drop-shadow-sm">
          {title}
        </h1>

        {/* SUBTITLE */}
        {subtitle && (
          <p className="mt-3 font-baloo text-base md:text-lg text-gray-700 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}

        {/* DECORATIVE CARDS */}
        <div className="flex justify-center gap-3 mt-6 flex-wrap">

          <div className="px-4 py-2 bg-white/70 rounded-full shadow-md text-sm font-semibold text-purple-700">
            Fun Learning
          </div>

          <div className="px-4 py-2 bg-white/70 rounded-full shadow-md text-sm font-semibold text-pink-600">
            Safe Environment
          </div>

          <div className="px-4 py-2 bg-white/70 rounded-full shadow-md text-sm font-semibold text-blue-600">
            Creative Growth
          </div>

        </div>

      </div>

      {/* BOTTOM WAVE */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,60 L0,60 Z"
          />
        </svg>
      </div>

    </div>
  )
}
