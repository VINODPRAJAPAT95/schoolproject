import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import principalImg from '../assets/teachers/teacher2.jpg'
import directorImg from '../assets/teachers/teacher1.jpg'
import kidsBanner from '../assets/kids-banner.png'

const values = [
  { emoji: '❤️', title: 'Love & Care', desc: 'Every child receives unconditional love and support from day one!', color: 'from-rose-100 to-pink-50', border: 'border-rose-300', accent: 'text-rose-500' },
  { emoji: '🧠', title: 'Smart Learning', desc: 'We use proven methods that make learning both sticky and fun!', color: 'from-blue-100 to-sky-50', border: 'border-blue-300', accent: 'text-blue-500' },
  { emoji: '🌈', title: 'Inclusion', desc: 'Every child is welcome, celebrated and treasured here!', color: 'from-purple-100 to-violet-50', border: 'border-purple-300', accent: 'text-purple-500' },
  { emoji: '🌱', title: 'Growth', desc: 'We help little seeds grow into magnificent, confident trees!', color: 'from-green-100 to-emerald-50', border: 'border-green-300', accent: 'text-green-600' },
  { emoji: '🤝', title: 'Community', desc: 'We build bonds that last a lifetime between families!', color: 'from-yellow-100 to-amber-50', border: 'border-yellow-300', accent: 'text-yellow-600' },
  { emoji: '✨', title: 'Excellence', desc: 'We strive for the best in everything we do for kids!', color: 'from-orange-100 to-red-50', border: 'border-orange-300', accent: 'text-orange-500' },
]

/* ── Floral SVGs ── */
const FloralLeft = () => (
  <svg className="absolute top-0 bottom-0 left-0 h-full w-24 sm:w-32 md:w-40 pointer-events-none" viewBox="0 0 160 220" preserveAspectRatio="xMinYMid meet" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="55" cy="160" rx="22" ry="28" fill="#8b5cf6" opacity="0.85" transform="rotate(-20,55,160)"/>
    <ellipse cx="55" cy="160" rx="22" ry="28" fill="#7c3aed" opacity="0.7" transform="rotate(20,55,160)"/>
    <ellipse cx="55" cy="160" rx="15" ry="20" fill="#c4b5fd" opacity="0.6" transform="rotate(70,55,160)"/>
    <ellipse cx="55" cy="160" rx="15" ry="20" fill="#c4b5fd" opacity="0.6" transform="rotate(-70,55,160)"/>
    <circle cx="55" cy="160" r="7" fill="#fbbf24"/>
    <circle cx="55" cy="160" r="3" fill="#92400e"/>
    <path d="M55 168 Q50 195 45 210" stroke="#4ade80" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <ellipse cx="38" cy="200" rx="10" ry="6" fill="#4ade80" opacity="0.7" transform="rotate(-30,38,200)"/>
    <ellipse cx="28" cy="185" rx="16" ry="20" fill="#fbbf24" opacity="0.9" transform="rotate(-15,28,185)"/>
    <ellipse cx="28" cy="185" rx="16" ry="20" fill="#f59e0b" opacity="0.7" transform="rotate(15,28,185)"/>
    <ellipse cx="28" cy="185" rx="11" ry="14" fill="#fde68a" opacity="0.6" transform="rotate(65,28,185)"/>
    <ellipse cx="28" cy="185" rx="11" ry="14" fill="#fde68a" opacity="0.6" transform="rotate(-65,28,185)"/>
    <circle cx="28" cy="185" r="5" fill="#92400e"/>
    <circle cx="28" cy="185" r="2.5" fill="#1c1917"/>
    <path d="M90 210 Q88 170 85 140" stroke="#4ade80" strokeWidth="2" fill="none"/>
    <ellipse cx="85" cy="145" rx="4" ry="8" fill="#a78bfa" opacity="0.8"/>
    <ellipse cx="83" cy="155" rx="4" ry="7" fill="#8b5cf6" opacity="0.8"/>
    <ellipse cx="87" cy="162" rx="4" ry="7" fill="#7c3aed" opacity="0.8"/>
    <ellipse cx="84" cy="170" rx="4" ry="7" fill="#6d28d9" opacity="0.8"/>
    <ellipse cx="110" cy="60" rx="18" ry="10" fill="#a78bfa" opacity="0.75" transform="rotate(-30,110,60)"/>
    <ellipse cx="125" cy="68" rx="14" ry="8" fill="#8b5cf6" opacity="0.6" transform="rotate(20,125,68)"/>
    <path d="M117 64 Q118 70 117 76" stroke="#4a1d96" strokeWidth="1.5" fill="none"/>
    <circle cx="70" cy="30" r="6" fill="#ec4899" opacity="0.6"/>
    <circle cx="80" cy="22" r="5" fill="#8b5cf6" opacity="0.5"/>
  </svg>
)

const FloralRight = () => (
  <svg className="absolute top-0 bottom-0 right-0 h-full w-24 sm:w-32 md:w-40 pointer-events-none scale-x-[-1]" viewBox="0 0 160 220" preserveAspectRatio="xMinYMid meet" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="55" cy="130" rx="30" ry="36" fill="#ef4444" opacity="0.9" transform="rotate(-15,55,130)"/>
    <ellipse cx="55" cy="130" rx="30" ry="36" fill="#dc2626" opacity="0.75" transform="rotate(25,55,130)"/>
    <ellipse cx="55" cy="130" rx="22" ry="28" fill="#f87171" opacity="0.5" transform="rotate(70,55,130)"/>
    <ellipse cx="55" cy="130" rx="22" ry="28" fill="#f87171" opacity="0.5" transform="rotate(-55,55,130)"/>
    <circle cx="55" cy="130" r="10" fill="#14532d"/>
    <circle cx="55" cy="130" r="5" fill="#166534"/>
    <path d="M55 140 Q52 175 50 210" stroke="#4ade80" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <ellipse cx="40" cy="178" rx="14" ry="7" fill="#4ade80" opacity="0.7" transform="rotate(-40,40,178)"/>
    <ellipse cx="90" cy="90" rx="16" ry="20" fill="#f97316" opacity="0.85" transform="rotate(-10,90,90)"/>
    <ellipse cx="90" cy="90" rx="16" ry="20" fill="#ea580c" opacity="0.7" transform="rotate(20,90,90)"/>
    <circle cx="90" cy="90" r="6" fill="#14532d"/>
    <path d="M90 100 Q88 130 87 150" stroke="#4ade80" strokeWidth="2.5" fill="none"/>
    <ellipse cx="115" cy="55" rx="9" ry="14" fill="#86efac" opacity="0.8"/>
    <path d="M115 68 Q114 85 113 100" stroke="#4ade80" strokeWidth="2" fill="none"/>
    <ellipse cx="30" cy="50" rx="16" ry="9" fill="#f97316" opacity="0.7" transform="rotate(25,30,50)"/>
    <ellipse cx="15" cy="57" rx="12" ry="7" fill="#fb923c" opacity="0.6" transform="rotate(-20,15,57)"/>
    <path d="M23 53 Q22 59 21 65" stroke="#7c2d12" strokeWidth="1.5" fill="none"/>
  </svg>
)

const FloralLeftOrange = () => (
  <svg className="absolute top-0 bottom-0 left-0 h-full w-24 sm:w-32 md:w-40 pointer-events-none" viewBox="0 0 160 220" preserveAspectRatio="xMinYMid meet" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="155" rx="26" ry="32" fill="#f97316" opacity="0.85" transform="rotate(-18,50,155)"/>
    <ellipse cx="50" cy="155" rx="26" ry="32" fill="#ea580c" opacity="0.7" transform="rotate(22,50,155)"/>
    <ellipse cx="50" cy="155" rx="18" ry="24" fill="#fdba74" opacity="0.55" transform="rotate(68,50,155)"/>
    <ellipse cx="50" cy="155" rx="18" ry="24" fill="#fdba74" opacity="0.55" transform="rotate(-68,50,155)"/>
    <circle cx="50" cy="155" r="8" fill="#14532d"/>
    <circle cx="50" cy="155" r="4" fill="#166534"/>
    <path d="M50 163 Q47 192 44 212" stroke="#4ade80" strokeWidth="2.5" fill="none"/>
    <ellipse cx="36" cy="195" rx="12" ry="6" fill="#4ade80" opacity="0.7" transform="rotate(-35,36,195)"/>
    <ellipse cx="90" cy="185" rx="14" ry="18" fill="#fbbf24" opacity="0.9" transform="rotate(-12,90,185)"/>
    <ellipse cx="90" cy="185" rx="14" ry="18" fill="#f59e0b" opacity="0.7" transform="rotate(18,90,185)"/>
    <circle cx="90" cy="185" r="5" fill="#92400e"/>
    <path d="M115 210 Q113 175 110 148" stroke="#4ade80" strokeWidth="2" fill="none"/>
    <ellipse cx="110" cy="152" rx="4" ry="8" fill="#fb923c" opacity="0.8"/>
    <ellipse cx="108" cy="162" rx="4" ry="7" fill="#f97316" opacity="0.8"/>
    <ellipse cx="112" cy="170" rx="4" ry="7" fill="#ea580c" opacity="0.8"/>
    <ellipse cx="35" cy="60" rx="16" ry="9" fill="#fbbf24" opacity="0.7" transform="rotate(20,35,60)"/>
    <ellipse cx="20" cy="66" rx="12" ry="7" fill="#fde68a" opacity="0.6" transform="rotate(-15,20,66)"/>
    <path d="M28 62 Q27 68 26 74" stroke="#92400e" strokeWidth="1.5" fill="none"/>
  </svg>
)

const FloralRightOrange = () => (
  <svg className="absolute top-0 bottom-0 right-0 h-full w-24 sm:w-32 md:w-40 pointer-events-none scale-x-[-1]" viewBox="0 0 160 220" preserveAspectRatio="xMinYMid meet" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="125" rx="28" ry="34" fill="#ec4899" opacity="0.85" transform="rotate(-15,60,125)"/>
    <ellipse cx="60" cy="125" rx="28" ry="34" fill="#db2777" opacity="0.7" transform="rotate(25,60,125)"/>
    <ellipse cx="60" cy="125" rx="20" ry="26" fill="#f9a8d4" opacity="0.5" transform="rotate(70,60,125)"/>
    <circle cx="60" cy="125" r="9" fill="#fbbf24"/>
    <circle cx="60" cy="125" r="4" fill="#92400e"/>
    <path d="M60 134 Q58 168 56 210" stroke="#4ade80" strokeWidth="3" fill="none"/>
    <ellipse cx="45" cy="172" rx="13" ry="7" fill="#4ade80" opacity="0.7" transform="rotate(-38,45,172)"/>
    <ellipse cx="95" cy="85" rx="15" ry="19" fill="#f97316" opacity="0.85" transform="rotate(-10,95,85)"/>
    <ellipse cx="95" cy="85" rx="15" ry="19" fill="#ea580c" opacity="0.7" transform="rotate(20,95,85)"/>
    <circle cx="95" cy="85" r="6" fill="#14532d"/>
    <path d="M95 95 Q93 122 92 145" stroke="#4ade80" strokeWidth="2.5" fill="none"/>
    <ellipse cx="118" cy="48" rx="8" ry="13" fill="#86efac" opacity="0.8"/>
    <path d="M118 60 Q117 78 116 95" stroke="#4ade80" strokeWidth="2" fill="none"/>
  </svg>
)

/* ── Scroll-reveal hook ── */
function useVisible() {
  const [visible, setVisible] = useState({})
  const refs = useRef({})
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) setVisible(v => ({ ...v, [e.target.dataset.key]: true }))
      }),
      { threshold: 0.12 }
    )
    Object.values(refs.current).forEach(el => el && io.observe(el))
    return () => io.disconnect()
  }, [])
  const ref = key => el => { refs.current[key] = el }
  return { visible, ref }
}

export default function About() {
  const { visible, ref } = useVisible()

  return (
    <div className="overflow-x-hidden">
      <PageHero
        title="About Pansies & Poppies"
        subtitle="Where petals bloom and young minds flourish!"
        emoji=""
        bg="bg-gradient-to-r from-kidOrange to-kidPink"
      />

      {/* ══════════════════════════
          ABOUT THE SCHOOL
      ══════════════════════════ */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Text */}
            <div
              ref={ref('school')} data-key="school"
              className={`transition-all duration-700 ${visible.school ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              <div className="inline-flex items-center gap-2 bg-kidPink/10 rounded-full px-4 py-2 mb-4">
                <span className="font-fredoka text-kidPink text-sm">🌟 Our School</span>
              </div>
              <h2 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl text-kidPurple mb-4 leading-tight">
                Nurturing <span className="text-kidOrange">Curious,</span><br className="hidden sm:block" />
                Creative &amp; <span className="text-kidPink">Compassionate</span><br className="hidden sm:block" />
                Young Learners ✨
              </h2>
              <p className="font-nunito text-gray-600 text-base sm:text-lg mb-5 leading-relaxed">
                🌈 Pansies & Poppies International Pre-School is dedicated to nurturing curious, creative,
                and compassionate young learners. We believe every child is unique and deserves a joyful
                environment where they can learn and grow at their own pace.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
                {['🎓 Est. 2014', '⭐ 500+ students', '🏆 Award Winning', '❤️ Family Owned'].map((tag, i) => (
                  <span key={i} className="bg-kidYellow/30 font-baloo font-bold text-kidPurple px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats card */}
            <div
              ref={ref('schoolCard')} data-key="schoolCard"
              className={`transition-all duration-700 delay-200 ${visible.schoolCard ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              <div className="bg-gradient-to-br from-kidYellow/20 to-kidOrange/20 rounded-3xl p-8 sm:p-10 border-4 border-dashed border-kidYellow text-center">
                <div className="text-6xl sm:text-8xl mb-4 animate-float">🏫</div>
                <h3 className="font-fredoka text-2xl sm:text-3xl text-kidPurple mb-2">Our School</h3>
                <p className="font-nunito text-gray-600 text-sm mb-6">A magical place where every morning feels like a new adventure!</p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[{ n: '500+', l: 'Happy Kids' }, { n: '50+', l: 'Teachers' }, { n: '20+', l: 'Classes' }, { n: '10 yrs', l: 'Experience' }].map((s, i) => (
                    <div key={i} className="bg-white rounded-2xl p-3 sm:p-4 shadow-md hover:scale-105 transition-transform duration-200">
                      <div className="font-fredoka text-xl sm:text-2xl text-kidOrange">{s.n}</div>
                      <div className="font-baloo text-gray-600 text-xs">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div
            ref={ref('vision')} data-key="vision"
            className={`mt-12 sm:mt-16 transition-all duration-700 ${visible.vision ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 sm:p-10 border border-kidPink/15 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-kidPurple/10 flex items-center justify-center text-2xl">🔭</div>
                  <h3 className="font-fredoka text-2xl text-kidPurple">Vision</h3>
                </div>
                <p className="font-nunito text-gray-600 leading-relaxed text-sm sm:text-base">
                  To lay a strong foundation for lifelong learning while fostering creativity, confidence,
                  empathy, and social responsibility in every child.
                </p>
              </div>
              <div className="border-t lg:border-t-0 lg:border-l border-kidPink/20 pt-6 lg:pt-0 lg:pl-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-kidPink/10 flex items-center justify-center text-2xl">🎯</div>
                  <h3 className="font-fredoka text-2xl text-kidPurple">Mission</h3>
                </div>
                <ul className="space-y-2">
                  {['Build a strong love for learning', 'Encourage meaningful relationships', 'Develop confident and happy individuals', 'Provide a safe and supportive environment'].map((item, i) => (
                    <li key={i} className="font-nunito text-gray-600 flex items-start gap-2 text-sm sm:text-base">
                      <span className="mt-0.5 flex-shrink-0">🌸</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          PRINCIPAL'S MESSAGE
      ══════════════════════════ */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div
            ref={ref('principal')} data-key="principal"
            className={`rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ${visible.principal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            {/* Banner */}
            <div className="relative bg-[#fdf6ee] py-10 px-4 text-center border-2 border-b-0 border-[#e8d5c4] rounded-t-3xl overflow-hidden" style={{ minHeight: '160px' }}>
              <FloralLeft />
              <FloralRight />
              <div className="relative z-10">
                <h2 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl text-kidPurple leading-tight">Principal's</h2>
                <p className="text-3xl sm:text-4xl text-kidPink leading-tight" style={{ fontFamily: "'Dancing Script', cursive" }}>Message</p>
                <div className="flex items-center justify-center gap-3 mt-3">
                  <div className="w-10 sm:w-14 h-0.5 bg-kidPink rounded-full" />
                  <span className="text-kidPink text-lg">♥</span>
                  <div className="w-10 sm:w-14 h-0.5 bg-kidPink rounded-full" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-[#fff9f5] border-2 border-t-0 border-[#e8d5c4] rounded-b-3xl px-4 sm:px-8 lg:px-12 py-10 sm:py-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">

                {/* Image */}
                <div className="flex justify-center">
                  <div className="relative w-fit">
                    <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-kidPurple to-kidPink opacity-20 blur-xl" />
                    <img
                      src={principalImg}
                      alt="Principal Mrs. Sucharita Kar"
                      className="relative w-64 sm:w-72 lg:w-80 h-80 sm:h-96 lg:h-[420px] object-cover rounded-[2rem] shadow-2xl border-[6px] border-white"
                    />
                    {/* Name tag */}
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white px-4 py-3 rounded-2xl shadow-xl border border-kidPink/20 text-center w-[80%] min-w-[180px]">
                      <p className="font-fredoka text-kidPurple text-base sm:text-lg leading-none">Mrs. Sucharita Kar</p>
                      <p className="font-baloo text-[#9a7a60] text-xs mt-1">Principal · Pansies & Poppies</p>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="mt-6 lg:mt-0 text-center lg:text-left">
                  <p className="font-nunito text-[#5a4a3a] text-base sm:text-lg leading-relaxed mb-4">
                    Welcome to{' '}
                    <span className="font-fredoka text-kidPurple">Pansies</span>{' '}
                    &amp;{' '}
                    <span className="font-fredoka text-kidPink">Poppies Preschool</span>,
                    where petals bloom and young minds flourish!
                  </p>
                  <div className="flex items-center justify-center lg:justify-start gap-3 my-4">
                    <div className="w-10 h-px bg-[#c4b5a0]" />
                    <div className="w-2 h-2 rounded-full bg-kidPurple" />
                    <div className="w-10 h-px bg-[#c4b5a0]" />
                  </div>
                  <p className="font-nunito text-[#5a4a3a] leading-relaxed mb-4 text-sm sm:text-base lg:text-[17px]">
                    At <span className="font-fredoka text-kidPurple">Pansies</span> &amp; <span className="font-fredoka text-kidPink">Poppies</span>,
                    we're all about nurturing the unique spark within each child
                    and providing a safe, engaging, and playful learning
                    environment where every child feels seen, heard, and celebrated.
                  </p>
                  <p className="font-nunito text-[#5a4a3a] leading-relaxed text-sm sm:text-base lg:text-[17px]">
                    We warmly invite you to be part of this blossoming community —
                    where every child's journey is cherished, every milestone
                    applauded, and every dream encouraged. 🌟
                  </p>
                  <p className="mt-5 text-2xl text-kidPink" style={{ fontFamily: "'Dancing Script', cursive" }}>✿ ❧ ✿</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-1 bg-gradient-to-r from-kidPurple via-kidPink to-kidOrange" />

      {/* ══════════════════════════
          DIRECTOR'S MESSAGE
      ══════════════════════════ */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div
            ref={ref('director')} data-key="director"
            className={`rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ${visible.director ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            {/* Banner */}
            <div className="relative bg-[#fff8f0] py-10 px-4 text-center border-2 border-b-0 border-[#e8d5c4] rounded-t-3xl overflow-hidden" style={{ minHeight: '160px' }}>
              <FloralLeftOrange />
              <FloralRightOrange />
              <div className="relative z-10">
                <h2 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl text-[#9a3412] leading-tight">Director's</h2>
                <p className="text-3xl sm:text-4xl text-kidOrange leading-tight" style={{ fontFamily: "'Dancing Script', cursive" }}>Message</p>
                <div className="flex items-center justify-center gap-3 mt-3">
                  <div className="w-10 sm:w-14 h-0.5 bg-kidOrange rounded-full" />
                  <span className="text-kidOrange text-lg">♥</span>
                  <div className="w-10 sm:w-14 h-0.5 bg-kidOrange rounded-full" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-[#fffbf5] border-2 border-t-0 border-[#e8d5c4] rounded-b-3xl px-4 sm:px-8 lg:px-12 py-10 sm:py-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">

                {/* Message — shows first on mobile */}
                <div className="order-2 lg:order-1 text-center lg:text-left">
                  <p className="font-nunito text-[#7c3a00] text-base sm:text-lg italic mb-4">Dear Parents,</p>
                  <p className="font-nunito text-[#5a4a3a] leading-relaxed mb-4 text-sm sm:text-base lg:text-[17px]">
                    Imagine a place where laughter echoes, curiosity is king,
                    and every day is an adventure. Welcome to{' '}
                    <span className="font-fredoka text-[#9a3412]">Pansies</span>{' '}
                    and{' '}
                    <span className="font-fredoka text-kidOrange">Poppies</span>{' '}
                    International Pre-School, where we celebrate the magic of childhood.
                  </p>
                  <div className="flex items-center justify-center lg:justify-start gap-3 my-4">
                    <div className="w-10 h-px bg-[#d4a472]" />
                    <div className="w-2 h-2 rounded-full bg-kidOrange" />
                    <div className="w-10 h-px bg-[#d4a472]" />
                  </div>
                  <p className="font-nunito text-[#5a4a3a] leading-relaxed mb-4 text-sm sm:text-base lg:text-[17px]">
                    We are not just a school — we are a vibrant community where
                    little hearts and minds flourish. Our passionate team is dedicated
                    to creating meaningful learning experiences that spark imagination,
                    fuel creativity, and nurture every child's unique potential.
                  </p>
                  <p className="font-nunito text-[#5a4a3a] leading-relaxed text-sm sm:text-base lg:text-[17px]">
                    At our preschool, your child will explore, discover,
                    and grow in a safe and joyful environment designed
                    especially for them. 🎉
                  </p>
                  <p className="mt-5 text-2xl text-kidOrange" style={{ fontFamily: "'Dancing Script', cursive" }}>✿ ❧ ✿</p>
                </div>

                {/* Image — shows first on desktop */}
                <div className="flex justify-center order-1 lg:order-2">
                  <div className="relative w-fit">
                    <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-kidOrange to-kidYellow opacity-20 blur-xl" />
                    <img
                      src={directorImg}
                      alt="Director Mrs. Sashmina Kar"
                      className="relative w-64 sm:w-72 lg:w-80 h-80 sm:h-96 lg:h-[420px] object-cover rounded-[2rem] shadow-2xl border-[6px] border-white"
                    />
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white px-4 py-3 rounded-2xl shadow-xl border border-kidOrange/20 text-center w-[80%] min-w-[180px]">
                      <p className="font-fredoka text-kidOrange text-base sm:text-lg leading-none">Mrs. Sashmina Kar</p>
                      <p className="font-baloo text-[#9a7a60] text-xs mt-1">Director · Pansies & Poppies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          CORE VALUES
      ══════════════════════════ */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-kidYellow/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-kidBlue/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            ref={ref('values')} data-key="values"
            className={`text-center mb-10 sm:mb-14 transition-all duration-700 ${visible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow mb-4 border border-kidYellow/30">
              <span className="font-fredoka text-kidOrange text-sm">💎 What We Stand For</span>
            </div>
            <h2 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl text-kidPurple mb-3">
              Our Core <span className="text-kidPink">Values</span> 💎
            </h2>
            <p className="font-nunito text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              The principles that guide everything we do at Pansies & Poppies
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${v.color} rounded-3xl p-6 shadow-md border-2 ${v.border} hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex gap-4 items-start
                  ${visible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-3xl sm:text-4xl flex-shrink-0 mt-0.5">{v.emoji}</div>
                <div>
                  <h3 className={`font-fredoka text-lg sm:text-xl ${v.accent} mb-1`}>{v.title}</h3>
                  <p className="font-nunito text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          INFO CARDS SECTION
      ══════════════════════════ */}
      <section className="py-14 sm:py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Kids Banner Image */}
          <div
            ref={ref('banner')} data-key="banner"
            className={`relative z-10 -mb-10 sm:-mb-16 flex justify-center transition-all duration-700 ${visible.banner ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <img
              src={kidsBanner}
              alt="Kids Learning"
              className="w-full max-w-3xl lg:max-w-5xl object-contain drop-shadow-xl"
            />
          </div>

          {/* Info Cards */}
          <div
            ref={ref('infocards')} data-key="infocards"
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 delay-300 ${visible.infocards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {[
              { bg: 'bg-sky-500', emoji: '📚', title: 'Fun Learning', desc: 'Interactive activities and playful experiences that make learning exciting and joyful for every child.' },
              { bg: 'bg-cyan-400', emoji: '🎯', title: 'Skill Building', desc: 'Activities focused on communication, creativity, confidence, and early childhood development.' },
              { bg: 'bg-red-500', emoji: '🧸', title: 'Happy Environment', desc: 'A safe, caring, and joyful atmosphere where children feel loved, confident, and encouraged.' },
              { bg: 'bg-yellow-400', emoji: '🌈', title: 'Creative Activities', desc: 'Music, storytelling, crafts, and sensory play designed to inspire imagination and creativity.', dark: true },
            ].map((card, i) => (
              <div key={i} className={`${card.bg} text-${card.dark ? 'gray-800' : 'white'} p-8 sm:p-10 pt-16 sm:pt-20 lg:pt-24 text-center hover:brightness-110 transition-all duration-300 group`}>
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-white flex items-center justify-center text-3xl sm:text-4xl mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {card.emoji}
                </div>
                <h3 className="font-fredoka text-xl sm:text-2xl mb-3">{card.title}</h3>
                <p className={`${card.dark ? 'text-gray-700' : 'text-white/90'} leading-relaxed text-sm sm:text-base`}>{card.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-10 sm:mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-kidPink text-white font-fredoka text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300"
            >
              🌟 Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}