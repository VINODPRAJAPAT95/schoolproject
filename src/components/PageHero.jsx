import React, { useEffect, useRef, useState } from 'react'

/* ── floating emoji config ── */
const FLOATERS = [
 
  { e: '⭐', x: 88, y: 20, dur: 2.8, delay: 0.5,  size: 'text-3xl' },
  { e: '🧸', x: 78, y: 55, dur: 3.6, delay: 0.2,  size: 'text-3xl' },
  { e: '🖍️', x: 15, y: 65, dur: 2.5, delay: 0.8,  size: 'text-2xl' },
  { e: '🦋', x: 92, y: 72, dur: 3.0, delay: 1.0,  size: 'text-2xl' },
  { e: '🎨', x: 4,  y: 80, dur: 3.4, delay: 0.6,  size: 'text-2xl' },
  { e: '✨', x: 62, y: 80, dur: 2.2, delay: 1.2,  size: 'text-xl'  },
]

/* ── dot grid pattern ── */
const DOT_GRID = `radial-gradient(circle, rgba(255,255,255,.35) 1px, transparent 1px)`

export default function PageHero({ title, subtitle, bg, emoji }) {
  const [mounted, setMounted] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const heroRef = useRef(null)

  /* mount trigger for entry animations */
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60)
    return () => clearTimeout(t)
  }, [])

  /* subtle parallax on mouse move */
  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const handler = (e) => {
      const rect = el.getBoundingClientRect()
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top)  / rect.height,
      })
    }
    el.addEventListener('mousemove', handler)
    return () => el.removeEventListener('mousemove', handler)
  }, [])

  const px = (mousePos.x - 0.5) * 18
  const py = (mousePos.y - 0.5) * 10

  return (
    <div
      ref={heroRef}
      className={`relative overflow-hidden ${bg || 'bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200'}`}
      style={{ paddingTop: '7rem', paddingBottom: '5rem', minHeight: 340 }}
    >

      {/* ── layered mesh gradient overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 20% 30%, rgba(255,220,100,.28) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 80% 70%, rgba(200,150,255,.22) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 55% 10%, rgba(100,220,255,.18) 0%, transparent 55%)
          `,
        }}
      />

      {/* ── dot grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: DOT_GRID,
          backgroundSize: '24px 24px',
        }}
      />

      {/* ── animated ring 1 (slow spin) ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 420, height: 420,
          top: -120, left: -100,
          borderRadius: '50%',
          border: '2px dashed rgba(255,255,255,.35)',
          animation: 'spinSlow 18s linear infinite',
        }}
      />

      {/* ── animated ring 2 (reverse spin) ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 320, height: 320,
          bottom: -100, right: -80,
          borderRadius: '50%',
          border: '2px dashed rgba(255,255,255,.30)',
          animation: 'spinSlow 14s linear infinite reverse',
        }}
      />

      {/* ── glow blob that follows mouse ── */}
      <div
        className="absolute pointer-events-none transition-transform duration-700 ease-out"
        style={{
          width: 380, height: 380,
          top: '50%', left: '50%',
          transform: `translate(calc(-50% + ${px * 2}px), calc(-50% + ${py * 2}px))`,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,.18) 0%, transparent 65%)',
          filter: 'blur(30px)',
        }}
      />

      {/* ── floating emoji layer ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {FLOATERS.map((f, i) => (
          <span
            key={i}
            className={`absolute ${f.size}`}
            style={{
              left: `${f.x}%`,
              top:  `${f.y}%`,
              animation: `floatBob ${f.dur}s ease-in-out ${f.delay}s infinite alternate,
                          fadeSlideIn .6s ease ${f.delay + .2}s both`,
              filter: 'drop-shadow(0 2px 6px rgba(0,0,0,.12))',
              transform: `translate(${px * (i % 3 === 0 ? .8 : .4)}px, ${py * .5}px)`,
              transition: 'transform .8s ease',
            }}
          >
            {f.e}
          </span>
        ))}
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">

        {/* badge */}
    <div
  className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full
             bg-white/55 backdrop-blur-md shadow-lg"
  style={{
    border: '1.5px solid rgba(255,255,255,.7)',
    opacity: mounted ? 1 : 0,
    transform: mounted
      ? 'translateY(0) scale(1)'
      : 'translateY(-16px) scale(.9)',
    transition:
      'opacity .55s ease .05s, transform .55s cubic-bezier(.34,1.56,.64,1) .05s',
  }}
>
          {/* animated coloured dot */}
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg,#FF6B9D,#FFD93D)',
              animation: 'pulseDot 1.6s ease-in-out infinite',
            }}
          />
          <p className="text-xs sm:text-sm font-fredoka font-bold tracking-[.18em] uppercase"
             style={{ color: '#7C3AED' }}>
            Preschool Learning Zone
          </p>
          <span className="text-base">🌟</span>
        </div>

        {/* emoji icon (if passed) */}
        {emoji && (
          <div
            className="text-5xl sm:text-6xl mb-3"
            style={{
              opacity:   mounted ? 1 : 0,
              transform: mounted ? 'translateY(0) scale(1)' : 'translateY(20px) scale(.7)',
              transition: 'opacity .5s ease .15s, transform .5s cubic-bezier(.34,1.56,.64,1) .15s',
              filter: 'drop-shadow(0 4px 12px rgba(0,0,0,.15))',
            }}
          >
            {emoji}
          </div>
        )}

        {/* TITLE — each word slides in */}
        <h1
          className="font-fredoka font-bold leading-tight mb-3"
          style={{
            fontSize: 'clamp(2rem, 6vw, 3.75rem)',
            color: '#3B0764',
            textShadow: '0 2px 16px rgba(124,58,237,.18)',
            opacity:   mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity .6s ease .2s, transform .6s cubic-bezier(.34,1.4,.64,1) .2s',
          }}
        >
          {/* split title into words with staggered colour highlights */}
          {title?.split(' ').map((word, i) => (
            <span
              key={i}
              className="inline-block mr-[0.22em]"
              style={{
                color: i % 3 === 1 ? '#DB2777'
                     : i % 3 === 2 ? '#F97316'
                     : '#3B0764',
                opacity:   mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(22px)',
                transition: `opacity .5s ease ${.2 + i * .08}s, transform .5s cubic-bezier(.34,1.4,.64,1) ${.2 + i * .08}s`,
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* SUBTITLE */}
        {subtitle && (
          <p
            className="font-fredoka text-sm sm:text-base md:text-lg text-gray-700 max-w-xl mx-auto leading-relaxed"
            style={{
              opacity:   mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(18px)',
              transition: 'opacity .55s ease .38s, transform .55s ease .38s',
            }}
          >
            {subtitle}
          </p>
        )}

        {/* pill tags */}
        <div
          className="flex justify-center gap-2 sm:gap-3 mt-6 flex-wrap"
          style={{
            opacity:   mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(14px)',
            transition: 'opacity .5s ease .5s, transform .5s ease .5s',
          }}
        >
          {[
            { label: '🎉 Fun Learning',      color: '#7C3AED', bg: 'rgba(124,58,237,.12)'  },
            { label: '🛡️ Safe Environment',  color: '#DB2777', bg: 'rgba(219,39,119,.12)'  },
            { label: '🎨 Creative Growth',   color: '#F97316', bg: 'rgba(249,115,22,.12)'  },
          ].map(({ label, color, bg: pbg }, i) => (
            <div
              key={i}
              className="px-4 py-2 rounded-full font-fredoka font-bold text-xs sm:text-sm
                         backdrop-blur-sm shadow-sm transition-transform duration-200 hover:scale-105 cursor-default"
              style={{
                background: pbg,
                color,
                border: `1.5px solid ${color}33`,
                boxShadow: `0 2px 10px ${color}22`,
              }}
            >
              {label}
            </div>
          ))}
        </div>

      </div>

      {/* ── bottom multi-wave ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 72"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ height: 72 }}
        >
          {/* back wave — soft colour */}
          <path
            d="M0,36 C240,68 480,4 720,36 C960,68 1200,4 1440,36 L1440,72 L0,72 Z"
            fill="rgba(255,255,255,.35)"
          />
          {/* front wave — solid white */}
          <path
            d="M0,48 C360,72 720,24 1080,48 C1260,60 1380,30 1440,48 L1440,72 L0,72 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* ── keyframes ── */}
      <style>{`
        @keyframes floatBob {
          from { transform: translateY(0px)   rotate(-4deg); }
          to   { transform: translateY(-12px) rotate(4deg);  }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulseDot {
          0%,100% { transform: scale(1);   opacity: 1;   }
          50%      { transform: scale(1.6); opacity: .65; }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
    </div>
  )
}