import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import principalImg from '../assets/teachers/teacher2.jpg'
import directorImg from '../assets/teachers/teacher1.jpg'
import kidsBanner from '../assets/kids-banner.png'

const values = [
  { emoji: '❤️', title: 'Love & Care', desc: 'Every child receives unconditional love and support from day one!' },
  { emoji: '🧠', title: 'Smart Learning', desc: 'We use proven methods that make learning both sticky and fun!' },
  { emoji: '🌈', title: 'Inclusion', desc: 'Every child is welcome, celebrated and treasured here!' },
  { emoji: '🌱', title: 'Growth', desc: 'We help little seeds grow into magnificent, confident trees!' },
  { emoji: '🤝', title: 'Community', desc: 'We build bonds that last a lifetime between families!' },
  { emoji: '✨', title: 'Excellence', desc: 'We strive for the best in everything we do for kids!' },
]

/* ── Reusable floral SVG — left side (pansies + lavender) ── */
const FloralLeft = () => (
  <svg className="absolute top-0 bottom-0 left-0 h-full w-40 pointer-events-none" viewBox="0 0 160 220" preserveAspectRatio="xMinYMid meet" xmlns="http://www.w3.org/2000/svg">
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

/* ── Reusable floral SVG — right side (poppies) ── */
const FloralRight = () => (
  <svg className="absolute top-0 bottom-0 right-0 h-full w-40 pointer-events-none scale-x-[-1]" viewBox="0 0 160 220" preserveAspectRatio="xMinYMid meet" xmlns="http://www.w3.org/2000/svg">
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

/* ── Orange floral left (for Director) ── */
const FloralLeftOrange = () => (
  <svg className="absolute top-0 bottom-0 left-0 h-full w-40 pointer-events-none" viewBox="0 0 160 220" preserveAspectRatio="xMinYMid meet" xmlns="http://www.w3.org/2000/svg">
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

/* ── Pink/orange floral right (for Director) ── */
const FloralRightOrange = () => (
  <svg className="absolute top-0 bottom-0 right-0 h-full w-40 pointer-events-none scale-x-[-1]" viewBox="0 0 160 220" preserveAspectRatio="xMinYMid meet" xmlns="http://www.w3.org/2000/svg">
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

export default function About() {
  return (
    <div>
      <PageHero
        title="About Pansies & Poppies"
        subtitle="Where petals bloom and young minds flourish!"
        emoji="🌸"
        bg="bg-gradient-to-r from-kidOrange to-kidPink"
      />

      {/* ── About the School ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-1 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-kidPink/10 rounded-full px-4 py-2 mb-4">
              <span className="font-fredoka text-kidPink text-sm">🌟 Our School</span>
            </div>
            <h2 className="font-fredoka text-5xl text-kidPurple mb-4 leading-tight">
              Nurturing <span className="text-kidOrange">Curious,</span> Creative &{' '}
              <span className="text-kidPink">Compassionate</span> Young Learners ✨
            </h2>
            <p className="font-nunito text-gray-600 text-lg mb-4 leading-relaxed">
              🌈 Pansies & Poppies International Pre-School is dedicated to nurturing curious, creative,
              and compassionate young learners. We believe every child is unique and deserves a joyful
              environment where they can learn and grow at their own pace.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {['🎓 Est. 2014', '⭐ 500+ students', '🏆 Award Winning', '❤️ Family Owned'].map((tag, i) => (
                <span key={i} className="bg-kidYellow/30 font-baloo font-bold text-kidPurple px-4 py-2 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-kidYellow/20 to-kidOrange/20  p-10 border-4 border-dashed border-kidYellow text-center">
            <div className="text-8xl mb-4 animate-float">🏫</div>
            <h3 className="font-fredoka text-3xl text-kidPurple mb-2">Our School</h3>
            <p className="font-nunito text-gray-600 text-sm">A magical place where every morning feels like a new adventure!</p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[{ n: '500+', l: 'Happy Kids' }, { n: '50+', l: 'Teachers' }, { n: '20+', l: 'Classes' }, { n: '10 yrs', l: 'Experience' }].map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-3 shadow-md">
                  <div className="font-fredoka text-2xl text-kidOrange">{s.n}</div>
                  <div className="font-baloo text-gray-600 text-xs">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="max-w-7xl mx-auto px-6 mt-14">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-[2.5rem] p-10 border border-kidPink/15 grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="font-fredoka text-2xl text-kidPurple mb-3">🔭 Vision</h3>
              <p className="font-nunito text-gray-600 leading-relaxed">
                To lay a strong foundation for lifelong learning while fostering creativity, confidence,
                empathy, and social responsibility in every child.
              </p>
            </div>
            <div>
              <h3 className="font-fredoka text-2xl text-kidPurple mb-3">🎯 Mission</h3>
              <ul className="space-y-2">
                {['Build a strong love for learning', 'Encourage meaningful relationships', 'Develop confident and happy individuals', 'Provide a safe and supportive environment'].map((item, i) => (
                  <li key={i} className="font-nunito text-gray-600 flex items-start gap-2">
                    <span className="mt-0.5">🌸</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
    PRINCIPAL'S MESSAGE
══════════════════════════════════════ */}
<section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
  <div className="max-w-6xl mx-auto px-6">

    <div className="rounded-3xl overflow-hidden shadow-2xl">

      {/* Banner */}
      <div
        className="relative bg-[#fdf6ee] py-10 px-8 text-center border-2 border-b-0 border-[#e8d5c4] rounded-t-3xl overflow-hidden"
        style={{ minHeight: '180px' }}
      >
        <FloralLeft />
        <FloralRight />

        <div className="relative z-10">
          <h2 className="font-fredoka text-5xl text-kidPurple leading-tight">
            Principal's
          </h2>

          <p
            className="font-['Dancing_Script',cursive] text-4xl text-kidPink leading-tight"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Message
          </p>

          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="w-14 h-0.5 bg-kidPink rounded-full" />
            <span className="text-kidPink text-lg">♥</span>
            <div className="w-14 h-0.5 bg-kidPink rounded-full" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#fff9f5] border-2 border-t-0 border-[#e8d5c4] rounded-b-3xl px-10 py-12">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Principal Image */}
          <div className="flex justify-center">
            <div className="relative">

              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-kidPurple to-kidPink opacity-20 blur-xl" />

             <img
  src={principalImg}
  alt="Principal"
  className="relative w-[340px] h-[440px] object-cover rounded-[2.5rem] shadow-2xl border-[6px] border-white"
/>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-4 rounded-3xl shadow-xl border border-kidPink/20 text-center w-[85%]">
                <p className="font-fredoka text-kidPurple text-xl leading-none">
                  Ms. Priya Sharma
                </p>

                <p className="font-baloo text-[#9a7a60] text-sm mt-1">
                  Principal · Pansies & Poppies
                </p>
              </div>
            </div>
          </div>

          {/* Principal Message */}
          <div className="text-center lg:text-left">

            <p className="font-nunito text-[#5a4a3a] text-xl leading-relaxed mb-5">
              Welcome to{' '}
              <span className="font-fredoka text-kidPurple">
                Pansies
              </span>{' '}
              &amp;{' '}
              <span className="font-fredoka text-kidPink">
                Poppies Preschool
              </span>,
              where petals bloom and young minds flourish!
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-3 my-5">
              <div className="w-10 h-px bg-[#c4b5a0]" />
              <div className="w-2 h-2 rounded-full bg-kidPurple" />
              <div className="w-10 h-px bg-[#c4b5a0]" />
            </div>

            <p className="font-nunito text-[#5a4a3a] leading-relaxed mb-4 text-[17px]">
              At{' '}
              <span className="font-fredoka text-kidPurple">
                Pansies
              </span>{' '}
              &amp;{' '}
              <span className="font-fredoka text-kidPink">
                Poppies
              </span>,
              we're all about nurturing the unique spark within each child
              and providing a safe, engaging, and playful learning
              environment where every child feels seen, heard, and celebrated.
            </p>

            <p className="font-nunito text-[#5a4a3a] leading-relaxed text-[17px]">
              We warmly invite you to be part of this blossoming community —
              where every child's journey is cherished, every milestone
              applauded, and every dream encouraged. 🌟
            </p>

            <p
              className="mt-5 text-2xl text-kidPink"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              ✿ ❧ ✿
            </p>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Gradient Divider */}
<div className="h-1 bg-gradient-to-r from-kidPurple via-kidPink to-kidOrange" />


{/* ══════════════════════════════════════
    DIRECTOR'S MESSAGE
══════════════════════════════════════ */}
<section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
  <div className="max-w-6xl mx-auto px-6">

    <div className="rounded-3xl overflow-hidden shadow-2xl">

      {/* Banner */}
      <div
        className="relative bg-[#fff8f0] py-10 px-8 text-center border-2 border-b-0 border-[#e8d5c4] rounded-t-3xl overflow-hidden"
        style={{ minHeight: '180px' }}
      >
        <FloralLeftOrange />
        <FloralRightOrange />

        <div className="relative z-10">
          <h2 className="font-fredoka text-5xl text-[#9a3412] leading-tight">
            Director's
          </h2>

          <p
            className="text-4xl text-kidOrange leading-tight"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Message
          </p>

          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="w-14 h-0.5 bg-kidOrange rounded-full" />
            <span className="text-kidOrange text-lg">♥</span>
            <div className="w-14 h-0.5 bg-kidOrange rounded-full" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#fffbf5] border-2 border-t-0 border-[#e8d5c4] rounded-b-3xl px-10 py-12">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Director Message */}
          <div className="text-center lg:text-left order-2 lg:order-1">

            <p className="font-nunito text-[#7c3a00] text-xl italic mb-5">
              Dear Parents,
            </p>

            <p className="font-nunito text-[#5a4a3a] leading-relaxed mb-4 text-[17px]">
              Imagine a place where laughter echoes, curiosity is king,
              and every day is an adventure. Welcome to{' '}
              <span className="font-fredoka text-[#9a3412]">
                Pansies
              </span>{' '}
              and{' '}
              <span className="font-fredoka text-kidOrange">
                Poppies
              </span>{' '}
              International Pre-School,
              where we celebrate the magic of childhood.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-3 my-5">
              <div className="w-10 h-px bg-[#d4a472]" />
              <div className="w-2 h-2 rounded-full bg-kidOrange" />
              <div className="w-10 h-px bg-[#d4a472]" />
            </div>

            <p className="font-nunito text-[#5a4a3a] leading-relaxed mb-4 text-[17px]">
              We are not just a school — we are a vibrant community where
              little hearts and minds flourish.
              Our passionate team is dedicated to creating meaningful
              learning experiences that spark imagination, fuel creativity,
              and nurture every child's unique potential.
            </p>

            <p className="font-nunito text-[#5a4a3a] leading-relaxed text-[17px]">
              At our preschool, your child will explore, discover,
              and grow in a safe and joyful environment designed
              especially for them. 🎉
            </p>

            <p
              className="mt-5 text-2xl text-kidOrange"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              ✿ ❧ ✿
            </p>
          </div>

          {/* Director Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">

              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-kidOrange to-kidYellow opacity-20 blur-xl" />

              <img
  src={directorImg}
  alt="Director"
  className="relative w-[340px] h-[440px] object-cover rounded-[2.5rem] shadow-2xl border-[6px] border-white"
/>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-4 rounded-3xl shadow-xl border border-kidOrange/20 text-center w-[85%]">
                <p className="font-fredoka text-kidOrange text-xl leading-none">
                  Mrs. Emily Carter
                </p>

                <p className="font-baloo text-[#9a7a60] text-sm mt-1">
                  Director · Pansies & Poppies
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>
      {/* ── Values ── */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-fredoka text-5xl text-kidPurple mb-3">Our Core <span className="text-kidPink">Values</span> 💎</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white  p-6 shadow-lg border-2 border-transparent hover:border-kidYellow hover:scale-105 transition-all duration-300 flex gap-4 items-start">
                <div className="text-4xl shrink-0">{v.emoji}</div>
                <div>
                  <h3 className="font-fredoka text-xl text-kidPurple mb-1">{v.title}</h3>
                  <p className="font-nunito text-gray-600 text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* ── Modern Info Section ── */}
<section className="py-20 overflow-hidden">
  <div className="max-w-6xl mx-auto px-6">

    {/* Top Image */}
    <div className="relative z-10 -mb-16 flex justify-center">
      <img
        src={kidsBanner}
        alt="Kids Learning"
        className="w-full max-w-5xl object-contain"
      />
    </div>

    {/* Bottom Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  overflow-hidden">

      {/* Card 1 */}
      <div className="bg-sky-500 text-white p-10 pt-24 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center text-4xl mb-6">
          📚
        </div>

        <h3 className="font-fredoka text-2xl mb-4">
          Fun Learning
        </h3>

        <p className="text-white/90 leading-relaxed">
          Interactive activities and playful experiences that make learning exciting and joyful for every child.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-cyan-400 text-white p-10 pt-24 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center text-4xl mb-6">
          🎯
        </div>

        <h3 className="font-fredoka text-2xl mb-4">
          Skill Building
        </h3>

        <p className="text-white/90 leading-relaxed">
          Activities focused on communication, creativity, confidence, and early childhood development.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-red-500 text-white p-10 pt-24 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center text-4xl mb-6">
          🧸
        </div>

        <h3 className="font-fredoka text-2xl mb-4">
          Happy Environment
        </h3>

        <p className="text-white/90 leading-relaxed">
          A safe, caring, and joyful atmosphere where children feel loved, confident, and encouraged.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-yellow-400 text-gray-800 p-10 pt-24 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center text-4xl mb-6">
          🌈
        </div>

        <h3 className="font-fredoka text-2xl mb-4">
          Creative Activities
        </h3>

        <p className="leading-relaxed">
          Music, storytelling, crafts, and sensory play designed to inspire imagination and creativity.
        </p>
      </div>
    </div>

    {/* Button */}
    <div className="text-center mt-10">
      <Link
        to="/contact"
        className="inline-block bg-kidPink text-white font-fredoka px-10 py-4 rounded-full hover:scale-110 transition-all duration-300"
      >
        🌟 Learn More
      </Link>
    </div>

  </div>
</section>
    </div>
  )
}