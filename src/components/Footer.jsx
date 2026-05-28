import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { FaInstagram, FaFacebook, FaWhatsapp, FaYoutube } from 'react-icons/fa'

/* ─────────────────────────────────
   DATA
───────────────────────────────── */
const quickLinks = [
  { label: 'Home',      path: '/',        emoji: '🏠' },
  { label: 'About Us',  path: '/about',   emoji: '💛' },
  { label: 'Gallery',   path: '/gallery', emoji: '🖼️' },
  { label: 'Programmes',path: '/pages/Pre-Nursery', emoji: '📚' },
  { label: 'Contact',   path: '/contact', emoji: '📞' },
]

const programmes = [
  { label: 'Pre Nursery', path: '/pages/Pre-Nursery', emoji: '🌱', age: 'Age 2–3' },
  { label: 'Nursery',     path: '/pages/Nursery',     emoji: '🌼', age: 'Age 3–4' },
  { label: 'KG 1',        path: '/pages/KG1',         emoji: '⭐', age: 'Age 4–5' },
  { label: 'KG 2',        path: '/pages/KG2',         emoji: '🚀', age: 'Age 5–6' },
]

const socialLinks = [
  { Icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram',
    color: '#E1306C', bg: 'rgba(225,48,108,.12)' },
  { Icon: FaFacebook,  href: 'https://facebook.com',  label: 'Facebook',
    color: '#1877F2', bg: 'rgba(24,119,242,.12)' },
  { Icon: FaWhatsapp,  href: 'https://wa.me/911234567890', label: 'WhatsApp',
    color: '#25D366', bg: 'rgba(37,211,102,.12)' },
  { Icon: FaYoutube,   href: 'https://youtube.com',   label: 'YouTube',
    color: '#FF0000', bg: 'rgba(255,0,0,.12)' },
]

const legalLinks = ['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Support']

/* scattered emoji particles */
const particles = [
  { e: '🌟', x: 8,  y: 12, s: 1.4, o: 0.08 },
  { e: '🎈', x: 18, y: 55, s: 1.1, o: 0.07 },
  { e: '🦋', x: 35, y: 20, s: 1.3, o: 0.06 },
  { e: '🌈', x: 55, y: 65, s: 1.0, o: 0.07 },
  { e: '🎨', x: 72, y: 15, s: 1.5, o: 0.06 },
  { e: '⭐', x: 85, y: 48, s: 1.2, o: 0.08 },
  { e: '🎪', x: 92, y: 80, s: 1.0, o: 0.05 },
  { e: '🌸', x: 48, y: 88, s: 1.3, o: 0.07 },
  { e: '🦄', x: 62, y: 38, s: 1.1, o: 0.06 },
  { e: '🎠', x: 25, y: 82, s: 1.4, o: 0.06 },
]

/* ─────────────────────────────────
   HOOK — intersection observer
───────────────────────────────── */
function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, vis]
}

/* ─────────────────────────────────
   SUBCOMPONENTS
───────────────────────────────── */

/** Animated wave divider */
const WaveDivider = () => (
  <div className="w-full overflow-hidden leading-none" style={{ marginBottom: -2 }}>
    <svg
      viewBox="0 0 1440 80"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="w-full"
      style={{ height: 80, display: 'block' }}
    >
      <defs>
        <linearGradient id="wg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#FDE68A" />
          <stop offset="50%"  stopColor="#FBCFE8" />
          <stop offset="100%" stopColor="#DDD6FE" />
        </linearGradient>
      </defs>
      <path
        d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
        fill="url(#wg)"
      />
    </svg>
  </div>
)

/** Newsletter input */
function Newsletter() {
  const [email, setEmail]   = useState('')
  const [sent,  setSent]    = useState(false)
  const [focus, setFocus]   = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (email) { setSent(true); setEmail('') }
  }

  return sent ? (
    <div
      className="flex items-center gap-2 px-4 py-3 rounded-2xl font-fredoka text-sm font-bold"
      style={{ background: 'rgba(52,211,153,.15)', color: '#059669' }}
    >
      <span className="text-xl">✅</span> You're subscribed! Thanks 🎉
    </div>
  ) : (
    <form onSubmit={submit} className="flex flex-col gap-2">
      <div
        className="flex items-center gap-2 rounded-2xl px-3 py-1 transition-all duration-300"
        style={{
          border:     `2px solid ${focus ? '#A78BFA' : 'rgba(167,139,250,.3)'}`,
          background: 'rgba(255,255,255,.6)',
          backdropFilter: 'blur(8px)',
          boxShadow:  focus ? '0 0 0 4px rgba(167,139,250,.15)' : 'none',
        }}
      >
        <span className="text-base flex-shrink-0">📧</span>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={()  => setFocus(false)}
          placeholder="your@email.com"
          className="flex-1 bg-transparent outline-none font-fredoka text-sm text-gray-700
                     placeholder:text-gray-400 py-2"
          required
        />
      </div>
      <button
        type="submit"
        className="font-fredoka font-bold text-white text-sm py-3 px-5 rounded-2xl
                   transition-all duration-300 hover:scale-105 active:scale-95"
        style={{
          background:  'linear-gradient(135deg, #7C3AED, #DB2777)',
          boxShadow:   '0 4px 16px rgba(124,58,237,.35)',
        }}
      >
        📬 Subscribe to Updates
      </button>
    </form>
  )
}

/* ─────────────────────────────────
   MAIN FOOTER
───────────────────────────────── */
export default function Footer() {
  const [footerRef, footerVis] = useInView(0.05)

  return (
    <>
      {/* wave transition from page body into footer */}
      <WaveDivider />

      <footer
        ref={footerRef}
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #FEF9C3 0%, #FCE7F3 40%, #EDE9FE 80%, #DBEAFE 100%)',
        }}
      >
        {/* ── Decorative circles ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 400, height: 400,
            top: -120, left: -120,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(250,204,21,.25) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: 350, height: 350,
            bottom: -80, right: -80,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(167,139,250,.2) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: 250, height: 250,
            top: '40%', left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(251,191,36,.15) 0%, transparent 70%)',
          }}
        />

        {/* ── Emoji particles ── */}
        <div className="absolute inset-0 pointer-events-none select-none">
          {particles.map((p, i) => (
            <span
              key={i}
              className="absolute"
              style={{
                left: `${p.x}%`,
                top:  `${p.y}%`,
                fontSize: `${p.s}rem`,
                opacity: p.o,
                animation: `floatParticle ${4 + i * 0.7}s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.4}s`,
              }}
            >
              {p.e}
            </span>
          ))}
        </div>

        {/* ════════════════════════════════════════
            MAIN GRID
        ════════════════════════════════════════ */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">

            {/* ── COL 1 : Brand + Social ── */}
            <div
              className="sm:col-span-2 lg:col-span-1 flex flex-col"
              style={{
                opacity:   footerVis ? 1 : 0,
                transform: footerVis ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity .55s ease .1s, transform .55s ease .1s',
              }}
            >
              {/* Logo card */}
              <div
                className="inline-block rounded-3xl p-3 mb-5 self-start"
                style={{
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 4px 20px rgba(124,58,237,.12)',
                }}
              >
                <img
                  src={logo}
                  alt="School Logo"
                  className="h-16 sm:h-20 w-auto object-contain"
                  style={{ maxWidth: 160 }}
                />
              </div>

              <p className="font-fredoka text-gray-600 text-sm leading-relaxed mb-6 max-w-[240px]">
                A place where laughter fills the air and every day is an adventure in learning.
              </p>

              {/* Social icons */}
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map(({ Icon, href, label, color, bg }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-2xl flex items-center justify-center
                               transition-all duration-300 hover:scale-110 active:scale-95"
                    style={{
                      background: bg,
                      border: `1.5px solid ${color}33`,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = color; e.currentTarget.querySelector('svg').style.color = '#fff' }}
                    onMouseLeave={e => { e.currentTarget.style.background = bg;    e.currentTarget.querySelector('svg').style.color = color }}
                  >
                    <Icon size={20} style={{ color, transition: 'color .2s' }} />
                  </a>
                ))}
              </div>

              {/* rating badge */}
              <div
                className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl self-start"
                style={{
                  background: 'rgba(255,255,255,.6)',
                  backdropFilter: 'blur(8px)',
                  border: '1.5px solid rgba(251,191,36,.4)',
                }}
              >
                <span className="text-yellow-400 text-base">★★★★★</span>
                <span className="font-fredoka font-bold text-gray-700 text-sm">4.9 / 5 · 200+ reviews</span>
              </div>
            </div>

            {/* ── COL 2 : Quick Links + Programmes ── */}
            <div
              className="grid grid-cols-2 gap-6 sm:gap-8 sm:col-span-2 lg:col-span-2"
              style={{
                opacity:   footerVis ? 1 : 0,
                transform: footerVis ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity .55s ease .2s, transform .55s ease .2s',
              }}
            >
              {/* Quick Links */}
              <div>
                <h4
                  className="font-fredoka font-bold text-base mb-4 flex items-center gap-2"
                  style={{ color: '#7C3AED' }}
                >
                  <span
                    className="w-6 h-6 rounded-lg flex items-center justify-center text-xs"
                    style={{ background: 'rgba(124,58,237,.15)' }}
                  >
                    🔗
                  </span>
                  Quick Links
                </h4>
                <div className="space-y-2.5">
                  {quickLinks.map(({ label, path, emoji }) => (
                    <Link
                      key={label}
                      to={path}
                      className="flex items-center gap-2.5 group"
                    >
                      <span
                        className="w-7 h-7 rounded-xl flex items-center justify-center text-sm
                                   transition-all duration-200 group-hover:scale-110 flex-shrink-0"
                        style={{ background: 'rgba(255,255,255,.6)' }}
                      >
                        {emoji}
                      </span>
                      <span
                        className="font-fredoka text-sm text-gray-600 group-hover:text-kidPurple
                                   transition-colors duration-200 group-hover:translate-x-0.5
                                   inline-block transition-transform"
                      >
                        {label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Programmes */}
              <div>
                <h4
                  className="font-fredoka font-bold text-base mb-3 flex items-center gap-2"
                  style={{ color: '#DB2777' }}
                >
                  <span
                    className="w-6 h-6 rounded-lg flex items-center justify-center text-xs"
                    style={{ background: 'rgba(219,39,119,.15)' }}
                  >
                    📚
                  </span>
                  Programmes
                </h4>
                <div className="space-y-2">
                  {programmes.map(({ label, path, emoji, age }) => (
                    <Link
                      key={label}
                      to={path}
                      className="flex items-center gap-2.5 group"
                    >
                      <span
                        className="text-lg flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                      >
                        {emoji}
                      </span>
                      <div>
                        <p
                          className="font-fredoka font-bold text-sm text-gray-700
                                     group-hover:text-kidPink transition-colors duration-200 leading-tight"
                        >
                          {label}
                        </p>
                        <p className="font-fredoka text-[11px] text-gray-400">{age}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* ── COL 4 : Contact + Newsletter ── */}
            <div
              style={{
                opacity:   footerVis ? 1 : 0,
                transform: footerVis ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity .55s ease .35s, transform .55s ease .35s',
              }}
            >
              <h4
                className="font-fredoka font-bold text-base mb-4 flex items-center gap-2"
                style={{ color: '#F97316' }}
              >
                <span
                  className="w-6 h-6 rounded-lg flex items-center justify-center text-xs"
                  style={{ background: 'rgba(249,115,22,.15)' }}
                >
                  📍
                </span>
                Get In Touch
              </h4>

              {/* contact items */}
              <div className="space-y-3 mb-6">
                {[
                  { icon: '📱', label: '+91 12345 67890', sub: 'Call / WhatsApp' },
                  { icon: '📧', label: 'info@school.com', sub: 'Write to us' },
                  { icon: '📍', label: 'Pansies & Poppies International Pre-School!', sub: 'Pimpri, Maharashtra' },
                  { icon: '🕐', label: 'Mon – Sat',        sub: '8:00 AM – 4:00 PM' },
                ].map(({ icon, label, sub }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-base"
                      style={{ background: 'rgba(255,255,255,.65)', backdropFilter: 'blur(6px)' }}
                    >
                      {icon}
                    </div>
                    <div>
                      <p className="font-fredoka font-bold text-gray-700 text-sm leading-tight">{label}</p>
                      <p className="font-fredoka text-gray-400 text-xs">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter */}
              <div
                className="rounded-3xl p-4"
                style={{
                  background: 'rgba(255,255,255,.55)',
                  backdropFilter: 'blur(10px)',
                  border: '1.5px solid rgba(167,139,250,.25)',
                  boxShadow: '0 4px 20px rgba(0,0,0,.06)',
                }}
              >
                <p className="font-fredoka font-bold text-gray-700 text-sm mb-1 flex items-center gap-1.5">
                  <span>📬</span> Stay Updated
                </p>
                <p className="font-fredoka text-gray-400 text-xs mb-3">
                  News, events & school updates!
                </p>
                <Newsletter />
              </div>
            </div>
          </div>

        </div>

        {/* ════════════════════════════════════════
            BOTTOM BAR
        ════════════════════════════════════════ */}
        <div
          className="relative z-10 border-t"
          style={{ borderColor: 'rgba(167,139,250,.2)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5
                          flex flex-col md:flex-row items-center justify-between gap-3">
            {/* copyright */}
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-lg flex items-center justify-center text-xs"
                style={{ background: 'rgba(124,58,237,.15)' }}
              >
                ©
              </div>
              <p className="font-fredoka text-gray-500 text-sm">
                2025 <span className="font-bold text-gray-700">Pansies & Poppies International Pre-School!</span>. Made with ❤️ for little ones.
              </p>
            </div>

            {/* legal links */}
            <div className="flex flex-wrap justify-center gap-1">
              {legalLinks.map((link, i) => (
                <React.Fragment key={link}>
                  <a
                    href="#"
                    className="font-fredoka text-gray-500 text-xs hover:text-kidPurple
                               transition-colors duration-200 px-1"
                  >
                    {link}
                  </a>
                  {i < legalLinks.length - 1 && (
                    <span className="text-gray-300 text-xs self-center">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-1.5 font-fredoka font-bold text-xs
                         px-4 py-2.5 rounded-xl transition-all duration-300
                         hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
                color: '#fff',
                boxShadow: '0 3px 12px rgba(124,58,237,.3)',
              }}
            >
              ↑ Back to Top
            </button>
          </div>
        </div>

        {/* Keyframes */}
        <style>{`
          @keyframes floatParticle {
            from { transform: translateY(0px) rotate(0deg); }
            to   { transform: translateY(-14px) rotate(12deg); }
          }
        `}</style>
      </footer>
    </>
  )
}