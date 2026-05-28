import React, { useState, useEffect, useRef, useCallback } from 'react'

import annual1 from '../assets/gallery/annual-day/1.jpg'
import annual2 from '../assets/gallery/annual-day/2.jpg'
import annual3 from '../assets/gallery/annual-day/3.jpg'
import annual4 from '../assets/gallery/annual-day/4.jpg'
import annual5 from '../assets/gallery/annual-day/5.jpg'
import annual6 from '../assets/gallery/annual-day/6.jpg'
import annual7 from '../assets/gallery/annual-day/7.jpg'

import teacher1 from '../assets/gallery/teacher1/1.jpg'
import teacher2 from '../assets/gallery/teacher1/2.jpg'
import teacher3 from '../assets/gallery/teacher1/3.jpg'
import teacher4 from '../assets/gallery/teacher1/4.jpg'
import teacher5 from '../assets/gallery/teacher1/5.jpg'
import teacher6 from '../assets/gallery/teacher1/6.jpg'

import yoga1 from '../assets/gallery/yoga/1.jpg'
import yoga2 from '../assets/gallery/yoga/2.jpg'
import yoga3 from '../assets/gallery/yoga/3.jpg'


import festival1 from '../assets/gallery/festival/1.jpg'
import festival2 from '../assets/gallery/festival/2.jpg'
import festival3 from '../assets/gallery/festival/3.jpg'
import festival4 from '../assets/gallery/festival/4.jpg'
import festival5 from '../assets/gallery/festival/5.jpg'
import festival6 from '../assets/gallery/festival/6.jpg'
import festival7 from '../assets/gallery/festival/7.jpg'

import child1 from '../assets/gallery/children/1.jpg'
import child2 from '../assets/gallery/children/2.jpg'
import child3 from '../assets/gallery/children/3.jpg'
import child4 from '../assets/gallery/children/4.jpg'
import child5 from '../assets/gallery/children/5.jpg'
import child6 from '../assets/gallery/children/6.jpg'

/*background image */
import bgImage from "../assets/classroom-bg.png";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const galleryItems = [
  { title: 'Annual Day Celebration',   img: annual1,   tag: 'Annual Day',  color: '#8B5CF6', bg: '#EDE9FE', emoji: '🎭' },
  { title: 'Stage Performance',        img: annual2,   tag: 'Annual Day',  color: '#8B5CF6', bg: '#EDE9FE', emoji: '🎤' },
  { title: 'Opening Ceremony',         img: annual3,   tag: 'Annual Day',  color: '#8B5CF6', bg: '#EDE9FE', emoji: '🏆' },
  { title: 'Dance',                    img: annual4,   tag: 'Annual Day',  color: '#8B5CF6', bg: '#EDE9FE', emoji: '💃' },
  { title: 'Fancy Dress',              img: annual5,   tag: 'Annual Day',  color: '#8B5CF6', bg: '#EDE9FE', emoji: '👑' },
  { title: 'Award Ceremony',           img: annual6,   tag: 'Annual Day',  color: '#8B5CF6', bg: '#EDE9FE', emoji: '🎖️' },
  { title: 'Group Performance',        img: annual7,   tag: 'Annual Day',  color: '#8B5CF6', bg: '#EDE9FE', emoji: '🎶' },

  { title: 'Diwali Celebration',       img: teacher1,  tag: 'Children Activities', color: '#EC4899', bg: '#FCE7F3', emoji: '👩‍🏫' },
  { title: 'Art & Painting',           img: teacher2,  tag: 'Children Activities', color: '#EC4899', bg: '#FCE7F3', emoji: '❤️' },
  { title: 'Creative Learning',        img: teacher3,  tag: 'Children Activities', color: '#EC4899', bg: '#FCE7F3', emoji: '📖' },
  { title: 'Outdoor Dance',            img: teacher4,  tag: 'Children Activities', color: '#EC4899', bg: '#FCE7F3', emoji: '📚' },
  { title: "Kids Fun",                 img: teacher5,  tag: 'Children Activities', color: '#EC4899', bg: '#FCE7F3', emoji: '🌸' },
  { title: 'Caring Educators',         img: teacher6,  tag: 'Children Activities', color: '#EC4899', bg: '#FCE7F3', emoji: '🌟' },

  { title: 'Morning Yoga Session',     img: yoga1,     tag: 'Yoga',        color: '#10B981', bg: '#D1FAE5', emoji: '🧘' },
  { title: 'Yoga & Mindfulness',       img: yoga2,     tag: 'Yoga',        color: '#10B981', bg: '#D1FAE5', emoji: '🌿' },
  { title: 'Stretching Together',      img: yoga3,     tag: 'Yoga',        color: '#10B981', bg: '#D1FAE5', emoji: '🌈' },

  { title: 'Father day',               img: festival1, tag: 'Special Days', color: '#F59E0B', bg: '#FEF3C7', emoji: '🪔' },
  { title: 'Awward',                   img: festival2, tag: 'Special Days', color: '#F59E0B', bg: '#FEF3C7', emoji: '🎨' },
  { title: 'Fathers Day Celebration',  img: festival3, tag: 'Special Days', color: '#F59E0B', bg: '#FEF3C7', emoji: '🌙' },
  { title: 'Fruit Activity',           img: festival4, tag: 'Special Days', color: '#F59E0B', bg: '#FEF3C7', emoji: '🎄' },
  { title: 'School Tour',              img: festival5, tag: 'Special Days', color: '#F59E0B', bg: '#FEF3C7', emoji: '🐘' },
  { title: 'Diwali Celebrations',      img: festival6, tag: 'Special Days', color: '#F59E0B', bg: '#FEF3C7', emoji: '🪔' },
  { title: 'Holi Celebrations',      img: festival7, tag: 'Special Days', color: '#F59E0B', bg: '#FEF3C7', emoji: '🎨' },
  

  { title: 'Happy Little Learners',    img: child1,    tag: 'Children',    color: '#3B82F6', bg: '#DBEAFE', emoji: '😊' },
  { title: 'Playtime Fun',             img: child2,    tag: 'Children',    color: '#3B82F6', bg: '#DBEAFE', emoji: '🎮' },
  { title: 'Birthday Party',           img: child3,    tag: 'Children',    color: '#3B82F6', bg: '#DBEAFE', emoji: '✂️' },
  { title: 'Reading Corner',           img: child4,    tag: 'Children',    color: '#3B82F6', bg: '#DBEAFE', emoji: '📖' },
  { title: 'Traditional',              img: child5,    tag: 'Children',    color: '#3B82F6', bg: '#DBEAFE', emoji: '🌳' },
  { title: 'Friendship & Fun',         img: child6,    tag: 'Children',    color: '#3B82F6', bg: '#DBEAFE', emoji: '🤝' },
]

const CATEGORIES = [
  { label: 'All',                color: '#7C3AED', light: '#EDE9FE' },
  { label: 'Annual Day',         color: '#8B5CF6', light: '#EDE9FE' },
  { label: 'Children Activities',color: '#EC4899', light: '#FCE7F3' },
  { label: 'Yoga',               color: '#10B981', light: '#D1FAE5' },
  { label: 'Special Days',       color: '#F59E0B', light: '#FEF3C7' },
  { label: 'Children',           color: '#3B82F6', light: '#DBEAFE' },
]

const STATS = [
  { emoji: '🎨', count: '200+', label: 'Art Projects',   color: '#EC4899' },
  { emoji: '🏆', count: '50+',  label: 'Awards Won',     color: '#F59E0B' },
  { emoji: '🎉', count: '30+',  label: 'Celebrations',   color: '#8B5CF6' },
  { emoji: '📚', count: '500+', label: 'Happy Learners', color: '#10B981' },
]

/* ─────────────────────────────────────────────
   HOOK — IntersectionObserver
───────────────────────────────────────────── */
function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

/* ─────────────────────────────────────────────
   FLOATING BUBBLES (CSS-only, no JS)
───────────────────────────────────────────── */
const BUBBLES = [
  { size: 80,  top: '5%',  left: '3%',  delay: '0s',   dur: '14s', opacity: 0.25, color: '#EC4899' },
  { size: 50,  top: '15%', left: '92%', delay: '2s',   dur: '11s', opacity: 0.2,  color: '#8B5CF6' },
  { size: 100, top: '30%', left: '1%',  delay: '4s',   dur: '16s', opacity: 0.15, color: '#F59E0B' },
  { size: 40,  top: '50%', left: '96%', delay: '1s',   dur: '12s', opacity: 0.2,  color: '#10B981' },
  { size: 70,  top: '65%', left: '4%',  delay: '3s',   dur: '13s', opacity: 0.18, color: '#3B82F6' },
  { size: 55,  top: '80%', left: '90%', delay: '5s',   dur: '15s', opacity: 0.2,  color: '#EC4899' },
  { size: 35,  top: '90%', left: '20%', delay: '2.5s', dur: '10s', opacity: 0.22, color: '#8B5CF6' },
]

function FloatingBubbles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {BUBBLES.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.size, height: b.size,
            top: b.top, left: b.left,
            background: b.color,
            opacity: b.opacity,
            animation: `bubbleFloat ${b.dur} ${b.delay} ease-in-out infinite alternate`,
          }}
        />
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────────
   STAR CONFETTI PARTICLES
───────────────────────────────────────────── */
const STARS = Array.from({ length: 22 }, (_, i) => ({
  size: 6 + (i % 4) * 4,
  top: `${(i * 4.5) % 100}%`,
  left: `${(i * 7.3 + 15) % 100}%`,
  delay: `${(i * 0.4) % 4}s`,
  dur: `${3 + (i % 3)}s`,
  color: ['#FFD700','#FF6B9D','#8B5CF6','#10B981','#3B82F6','#F59E0B'][i % 6],
}))

function StarField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {STARS.map((s, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: s.top, left: s.left,
            fontSize: s.size,
            animation: `starTwinkle ${s.dur} ${s.delay} ease-in-out infinite alternate`,
            color: s.color,
            userSelect: 'none',
          }}
        >
          ★
        </div>
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────────
   MOSAIC CARD
───────────────────────────────────────────── */
function MosaicCard({ item, index, onOpen, visible }) {
  const isFeature = index % 7 === 0
  const isWide    = index % 11 === 5
  return (
    <div
      className="relative overflow-hidden cursor-pointer group"
      style={{
        gridRow:    isFeature ? 'span 2' : undefined,
        gridColumn: isWide    ? 'span 2' : undefined,
        borderRadius: '2px',
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'none' : 'translateY(40px) scale(0.94)',
        transition: `opacity .55s ease ${(index % 8) * 65}ms, transform .55s ease ${(index % 8) * 65}ms`,
        boxShadow: '0 2px 20px rgba(0,0,0,.10)',
        minHeight: 160,
      }}
      onClick={() => onOpen(index)}
    >
      <img
        src={item.img} alt={item.title}
        loading="lazy" decoding="async"
        className="w-full h-full object-cover"
        style={{ transition: 'transform .6s ease', display: 'block' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      />
      {/* gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
           style={{ background: `linear-gradient(160deg, ${item.color}55 0%, rgba(0,0,0,.6) 100%)` }} />

      {/* emoji badge */}
      <div
        className="absolute top-3 left-3 w-9 h-9 rounded-full flex items-center justify-center text-lg
                   shadow-lg scale-0 group-hover:scale-100 transition-transform duration-300"
        style={{ background: item.bg }}
      >
        {item.emoji}
      </div>

      {/* bottom info */}
      <div
        className="absolute bottom-0 left-0 right-0 px-3 pb-3 pt-8
                   translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                   transition-all duration-300"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,.75), transparent)' }}
      >
        <span
          className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full"
          style={{ background: item.color + '33', color: item.color, border: `1px solid ${item.color}55` }}
        >
          {item.tag}
        </span>
        <p className="text-white text-sm font-bold mt-1 leading-tight" style={{ fontFamily: "'Nunito', sans-serif" }}>
          {item.title}
        </p>
      </div>

      {/* expand icon */}
      <div
        className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center
                   opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300"
        style={{ background: item.color }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
        </svg>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   LIGHTBOX
───────────────────────────────────────────── */
function Lightbox({ index, items, onClose, onPrev, onNext }) {
  if (index === null) return null
  const item = items[index]
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,.92)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      {/* top bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-4 z-10">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{item.emoji}</span>
          <span
            className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ background: item.color + '33', color: item.color, border: `1px solid ${item.color}66` }}
          >
            {item.tag}
          </span>
        </div>
        <span className="text-white/50 text-xs tracking-widest font-bold">
          {index + 1} / {items.length}
        </span>
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
      </div>

      {/* prev */}
      <button
        className="absolute left-3 md:left-6 w-12 h-12 rounded-full flex items-center justify-center text-white text-3xl z-10 transition-all hover:scale-110"
        style={{ background: 'rgba(255,255,255,.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.2)' }}
        onClick={e => { e.stopPropagation(); onPrev() }}
        aria-label="Previous"
      >
        ‹
      </button>

      {/* image */}
      <div className="flex flex-col items-center gap-4 max-w-4xl w-full" onClick={e => e.stopPropagation()}>
        <img
          key={index}
          src={item.img} alt={item.title}
          className="max-h-[72vh] max-w-full object-contain rounded-3xl"
          style={{
            animation: 'lbFadeIn .3s ease',
            boxShadow: `0 0 80px ${item.color}44`,
          }}
        />
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20">
          <span className="text-2xl">{item.emoji}</span>
          <div>
            <p className="text-white font-black text-lg leading-tight" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
              {item.title}
            </p>
            <p style={{ color: item.color, fontSize: 12, fontWeight: 700 }}>{item.tag}</p>
          </div>
        </div>
      </div>

      {/* next */}
      <button
        className="absolute right-3 md:right-6 w-12 h-12 rounded-full flex items-center justify-center text-white text-3xl z-10 transition-all hover:scale-110"
        style={{ background: 'rgba(255,255,255,.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.2)' }}
        onClick={e => { e.stopPropagation(); onNext() }}
        aria-label="Next"
      >
        ›
      </button>

      {/* progress bar */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-48 h-1.5 rounded-full bg-white/20">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${((index + 1) / items.length) * 100}%`, background: item.color }}
        />
      </div>

      {/* dot nav for small sets */}
      {items.length <= 14 && (
        <div className="absolute bottom-5 flex gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to ${i + 1}`}
              style={{
                height: 6, width: i === index ? 20 : 6,
                borderRadius: 99, transition: 'all .3s',
                background: i === index ? item.color : 'rgba(255,255,255,.3)',
                border: 'none', cursor: 'pointer', padding: 0,
              }}
              onClick={e => { e.stopPropagation() }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function Gallery() {
  const [lightbox,       setLightbox]       = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [filteredItems,  setFilteredItems]  = useState(galleryItems)
  const [animating,      setAnimating]      = useState(false)

  const [heroRef,  heroInView]  = useInView(0.1)
  const [gridRef,  gridInView]  = useInView(0.05)
  const [statsRef, statsInView] = useInView(0.15)

  /* filter */
  const applyFilter = useCallback((cat) => {
    if (cat === activeCategory) return
    setAnimating(true)
    setTimeout(() => {
      setActiveCategory(cat)
      setFilteredItems(cat === 'All' ? galleryItems : galleryItems.filter(g => g.tag === cat))
      setAnimating(false)
    }, 220)
  }, [activeCategory])

  /* lightbox nav */
  const handlePrev = useCallback(() => setLightbox(i => (i - 1 + filteredItems.length) % filteredItems.length), [filteredItems])
  const handleNext = useCallback(() => setLightbox(i => (i + 1) % filteredItems.length), [filteredItems])

  useEffect(() => {
    const handler = (e) => {
      if (lightbox === null) return
      if (e.key === 'ArrowLeft')  handlePrev()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'Escape')     setLightbox(null)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, handlePrev, handleNext])

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  const activeCat = CATEGORIES.find(c => c.label === activeCategory) || CATEGORIES[0]

  return (
    <>
      {/* ── Google Fonts ── */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Fredoka+One&family=Nunito:wght@400;700;800;900&family=Patrick+Hand&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes bubbleFloat {
          0%   { transform: translateY(0) scale(1); }
          100% { transform: translateY(-30px) scale(1.05); }
        }
        @keyframes starTwinkle {
          0%   { opacity: 0.2; transform: scale(0.8) rotate(0deg); }
          100% { opacity: 0.8; transform: scale(1.2) rotate(20deg); }
        }
        @keyframes heroWiggle {
          0%,100% { transform: rotate(-2deg) scale(1); }
          50%      { transform: rotate(2deg) scale(1.03); }
        }
        @keyframes bounceIn {
          0%   { opacity: 0; transform: scale(.5) rotate(-10deg); }
          70%  { transform: scale(1.1) rotate(3deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes lbFadeIn {
          from { opacity: 0; transform: scale(.95); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes rainbowText {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes floatY {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-12px); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%,100% { transform: scale(1); }
          50%     { transform: scale(1.05); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .rainbow-text {
          background: linear-gradient(90deg, #FF6B9D, #FF9A3C, #FFD93D, #6BCB77, #4D96FF, #C77DFF);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: rainbowText 4s ease infinite;
        }
        .cat-btn { transition: all .25s ease; }
        .cat-btn:hover { transform: translateY(-3px) scale(1.05); }
        ::-webkit-scrollbar { display: none; }
        * { scrollbar-width: none; }
      `}</style>

      <div style={{ background: 'linear-gradient(160deg, #FFF7FF 0%, #F0F4FF 40%, #FFFBF0 100%)', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>

        <FloatingBubbles />

        {/* ══════════════════════════════════
            HERO
        ══════════════════════════════════ */}
        <section
          ref={heroRef}
          className="relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #7C3AED 0%, #DB2777 45%, #F97316 100%)',
            paddingBottom: 80,
            paddingTop: 20,
          }}
        >
          <StarField />

          {/* wavy bottom */}
          <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0 }}>
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: '100%', height: 80 }}>
              <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
                    fill="rgba(255,247,255,1)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-16">
            <div
              style={{
                opacity: heroInView ? 1 : 0,
                transform: heroInView ? 'none' : 'translateY(30px)',
                transition: 'all .8s ease',
              }}
            >
              <p className="text-white/70 text-xs tracking-[8px] uppercase mb-2 font-bold"
                 style={{ fontFamily: "'Patrick Hand', cursive" }}>
                ✨ Welcome to Our
              </p>
              <h1
                className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 leading-none"
                style={{
                  fontFamily: "'Bubblegum Sans', cursive",
                  textShadow: '0 4px 20px rgba(0,0,0,.3)'
                }}
              >
                Happy
                <span
                  className="block"
                  style={{
                    fontFamily: "'Fredoka One', cursive",
                    background: 'linear-gradient(90deg, #FFD93D, #FF9A3C, #FFD93D)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  School Gallery
                </span>
              </h1>
            </div>

            {/* stat pills */}
            <div
              className="flex flex-wrap justify-center gap-3 mt-10"
              style={{
                opacity: heroInView ? 1 : 0,
                transform: heroInView ? 'none' : 'translateY(20px)',
                transition: 'all .8s ease .3s',
              }}
            >
              {[
                { emoji: '📸', text: '31 Photos' },
                { emoji: '🎭', text: '5 Events' },
                { emoji: '⭐', text: '500+ Smiles' },
              ].map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-black"
                  style={{
                    background: 'rgba(255,255,255,.2)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,.3)',
                    color: '#fff',
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  <span>{p.emoji}</span> {p.text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            SECTION HEADER + CONTROLS
        ══════════════════════════════════ */}
        <section className="relative z-10 pt-12 pb-4 px-4 md:px-10 max-w-7xl mx-auto">

          {/* section title */}
          <div className="text-center mb-10">
            <p className="text-xs tracking-[6px] uppercase text-gray-400 mb-2 font-bold"
               style={{ fontFamily: "'Patrick Hand', cursive" }}>
              All Memories
            </p>
            <h2
              className="rainbow-text text-4xl sm:text-5xl md:text-6xl font-black leading-tight"
              style={{ fontFamily: "'Bubblegum Sans', cursive" }}
            >
              Our School Moments ✨
            </h2>
            <p className="text-gray-500 text-base mt-2 max-w-lg mx-auto"
               style={{ fontFamily: "'Nunito', sans-serif" }}>
              Browse through all our wonderful events and celebrations
            </p>
          </div>

          {/* ── CATEGORY FILTER ── */}
          <div className="flex gap-2 justify-start md:justify-center mb-6 overflow-x-auto pb-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.label
              return (
                <button
                  key={cat.label}
                  className="cat-btn flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-sm font-black border-2"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    borderColor: isActive ? cat.color : '#E5E7EB',
                    background:  isActive ? cat.color : '#fff',
                    color:       isActive ? '#fff' : '#6B7280',
                    boxShadow:   isActive ? `0 6px 20px ${cat.color}55` : '0 2px 8px rgba(0,0,0,.06)',
                  }}
                  onClick={() => applyFilter(cat.label)}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* photo count */}
          <div className="flex items-center mb-6">
            <p className="text-sm text-gray-500 font-bold" style={{ fontFamily: "'Nunito', sans-serif" }}>
              <span style={{ color: activeCat.color, fontWeight: 900 }}>{filteredItems.length}</span> photos
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════
            MOSAIC GALLERY
        ══════════════════════════════════ */}
        <section className="relative z-10 px-4 md:px-10 max-w-7xl mx-auto pb-8">
          <div
            ref={gridRef}
            style={{
              opacity:    animating ? 0 : 1,
              transform:  animating ? 'scale(0.97)' : 'scale(1)',
              transition: 'opacity .22s ease, transform .22s ease',
            }}
          >
            <div
              className="grid gap-2 md:gap-3"
              style={{
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridAutoRows: 'clamp(130px, 19vw, 210px)',
              }}
            >
              {filteredItems.map((item, i) => (
                <MosaicCard
                  key={`${item.tag}-${i}`}
                  item={item}
                  index={i}
                  onOpen={setLightbox}
                  visible={gridInView}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            STATS STRIP
        ══════════════════════════════════ */}
        <section
          ref={statsRef}
          className="relative z-10 mx-4 md:mx-10 max-w-7xl lg:mx-auto my-16 overflow-hidden rounded-3xl"
          style={{ background: 'linear-gradient(135deg, #7C3AED, #DB2777 55%, #F97316)' }}
        >
          {/* decorative circles */}
          <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full opacity-20"
               style={{ background: '#fff' }} />
          <div className="absolute -bottom-12 right-8 w-40 h-40 rounded-full opacity-15"
               style={{ background: '#fff' }} />
          <div className="absolute top-4 right-1/3 w-16 h-16 rounded-full opacity-10"
               style={{ background: '#FFD93D' }} />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center py-10 px-4 text-center border-b md:border-b-0 border-r border-white/10 last:border-r-0"
                style={{
                  opacity:    statsInView ? 1 : 0,
                  transform:  statsInView ? 'none' : 'translateY(24px)',
                  transition: `opacity .5s ease ${i * 100}ms, transform .5s ease ${i * 100}ms`,
                }}
              >
                <span className="text-4xl mb-1" style={{ animation: 'floatY 3s ease-in-out infinite', animationDelay: `${i * 0.5}s` }}>
                  {s.emoji}
                </span>
                <p className="font-black text-white text-4xl leading-none" style={{ fontFamily: "'Fredoka One', cursive" }}>
                  {s.count}
                </p>
                <p className="text-white/70 text-sm mt-1 font-bold" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════
            CTA
        ══════════════════════════════════ */}
<section
  className="relative z-10 mx-4 md:mx-10 max-w-7xl lg:mx-auto mb-20 overflow-hidden rounded-3xl min-h-[500px] flex items-center justify-center pt-10"
  style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.78), rgba(255,255,255,0.78)),
      url(${bgImage})
    `,
    backgroundPosition: "center top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Blur Overlay */}
  <div className="absolute inset-0 backdrop-blur-[2px]" />

  {/* overlay circles */}
  <div
    className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-30"
    style={{ background: '#FFD93D' }}
  />

  <div
    className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-25"
    style={{ background: '#EC4899' }}
  />

  {/* Content */}
  <div className="relative z-10 text-center py-16 px-6">
    <span
      className="text-6xl inline-block"
      style={{ animation: 'floatY 2.5s ease-in-out infinite' }}
    >
      🎓
    </span>

    <h3
      className="font-black text-gray-800 text-3xl md:text-5xl mt-4 mb-4"
      style={{ fontFamily: "'Bubblegum Sans', cursive" }}
    >
      Want Your Child in Our Gallery?
    </h3>

    <p
      className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-bold leading-relaxed"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      Join our wonderful school family and create beautiful memories
      that last a lifetime! 🌟
    </p>

    <a
      href="/contact#contact"
      className="inline-block font-black text-white text-lg px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
      style={{
        fontFamily: "'Nunito', sans-serif",
        background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
        boxShadow: '0 8px 32px rgba(124,58,237,.45)',
      }}
    >
      🚀 Enrol Today!
    </a>
  </div>
</section>
        {/* ── LIGHTBOX ── */}
        <Lightbox
          index={lightbox}
          items={filteredItems}
          onClose={() => setLightbox(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />

      </div>
    </>
  )
}