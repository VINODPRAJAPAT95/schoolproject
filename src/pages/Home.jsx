import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import heroKid from '../assets/hero-kid.png'
import ctaImage from '../assets/divider.png'


const stats = [
  { num: '500+', label: 'Happy Kids 🎉', color: 'from-kidYellow to-kidOrange' },
  { num: '50+', label: 'Teachers 👩‍🏫', color: 'from-kidBlue to-kidPurple' },
  { num: '20+', label: 'Fun Classes 🎨', color: 'from-kidBlue to-kidTeal' },
  { num: '10+', label: 'Years of Fun ⭐', color: 'from-kidGreen to-kidTeal' },
]

const classes = [
  { emoji: '🎨', title: 'Painting & Art', desc: 'Let little artists explore colors and creativity!', color: 'bg-blue-100 border-kidBlue', tag: 'Creative' },
  { emoji: '🔢', title: 'Fun Math', desc: 'Numbers become exciting adventures for kids!', color: 'bg-yellow-100 border-kidYellow', tag: 'Academic' },
  { emoji: '🌿', title: 'Nature Science', desc: 'Discover the wonders of the natural world!', color: 'bg-green-100 border-kidGreen', tag: 'Science' },
  { emoji: '🎵', title: 'Music & Dance', desc: 'Move, groove and express with rhythm!', color: 'bg-purple-100 border-kidPurple', tag: 'Arts' },
  { emoji: '📚', title: 'Story Time', desc: 'Magical stories that spark imagination!', color: 'bg-blue-100 border-kidBlue', tag: 'Language' },
  { emoji: '🤸', title: 'Gym & Play', desc: 'Active fun to build healthy strong bodies!', color: 'bg-orange-100 border-kidOrange', tag: 'Physical' },
]

const videos = [
  { id: 'dQw4w9WgXcQ', title: '🎨 Art & Craft Fun!', desc: 'Watch kids create amazing things' },
  { id: '9bZkp7q19f0', title: '🎵 Songs & Dance', desc: 'Fun music sessions for children' },
  { id: 'kffacxfA7G4', title: '📚 Story Time Magic', desc: 'Incredible storytime adventures' },
]

const features = [
  { emoji: '🌈', title: 'Colorful Learning', desc: 'Every lesson is a rainbow adventure full of colors and discovery!' },
  { emoji: '🏆', title: 'Award Winning', desc: 'Recognized as the best kids learning program for 5 years running!' },
  { emoji: '🤝', title: 'Parent Friendly', desc: 'We keep parents involved and updated every step of the way!' },
  { emoji: '🔒', title: 'Safe & Secure', desc: 'The safest environment where every child feels protected and loved!' },
]

const testimonials = [
  { name: 'Sarah Johnson', role: 'Parent of Emma', text: 'My daughter absolutely LOVES coming to Kidoria! She has grown so much in confidence!', avatar: '👩', rating: 5 },
  { name: 'Mike Williams', role: 'Parent of Jake', text: 'The teachers are absolutely amazing. My son looks forward to school every single day!', avatar: '👨', rating: 5 },
  { name: 'Lisa Chen', role: 'Parent of Lily', text: 'Best decision we ever made for our child. The program is fantastic and so fun!', avatar: '👩‍🦱', rating: 5 },
]

const marqueeItems = ['🌟 Fun Learning', '🎨 Creative Arts', '🔢 Math Magic', '🌈 Colorful Days', '🎵 Music Fun', '🏆 Happy Kids', '🚀 Big Dreams', '💡 Bright Minds']

export default function Home() {
  const [activeVideo, setActiveVideo] = useState(null)
  const [visible, setVisible] = useState({})
  const sectionRefs = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setVisible(v => ({ ...v, [e.target.dataset.section]: true }))
        })
      },
      { threshold: 0.1 }
    )
    Object.values(sectionRefs.current).forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const ref = (name) => (el) => { sectionRefs.current[name] = el }

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-yellow-300 via-orange-200 to-blue-300">
        {/* Animated background blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-kidPurple/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-kidBlue/20 rounded-full blur-3xl animate-pulse" style={{animationDelay:'1s'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-kidBlue/10 rounded-full blur-3xl animate-pulse" style={{animationDelay:'2s'}} />

        {/* Floating shapes */}
        {['🌟','🎈','🦋','🌸','⭐','🎀','🌈','🎪'].map((em, i) => (
          <div key={i} className="absolute text-3xl animate-float pointer-events-none select-none opacity-60"
            style={{
              left: `${5 + i*12}%`, top: `${10 + (i%4)*20}%`,
              animationDelay: `${i*0.5}s`, animationDuration: `${3+i%3}s`
            }}
          >{em}</div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-5 py-2 shadow-lg mb-6 font-baloo font-bold text-kidPurple text-sm border-2 border-kidYellow">
              🎉 Welcome to Pansies & Poppies International Pre-School!
            </div>
            <h1 className="font-fredoka text-3xl md:text-4xl xl:text-5xl leading-snug mb-5">
              <span className="text-kidPurple">Where Little Minds</span><br/>
              <span className="text-kidOrange">
                Bloom with Confidence &
              </span>{' '}
              <span className="text-kidBlue">
                Creativity
              </span>
            </h1>
            <p className="font-nunito text-gray-700 text-xl mb-8 leading-relaxed">
              A joyful and nurturing preschool focused on holistic development, experiential learning, and
              strong foundational skills for lifelong success
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/pages/pricing" className="bg-gradient-to-r from-kidPurple to-kidBlue text-white font-fredoka text-xl px-3 py-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300 hover:shadow-2xl animate-pulse-scale">
                Admissions Open 2026–27
              </Link>
              <Link to="/about" className="bg-white text-kidPurple font-fredoka text-xl px-8 py-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300 border-3 border-kidPurple hover:bg-kidYellow">
                Book a School Visit
              </Link>
            </div>
            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mt-10">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className={`font-fredoka text-3xl bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>{s.num}</div>
                  <div className="font-baloo text-gray-600 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - PNG illustration */}
          <div className="relative flex justify-center animate-slide-in-right">
            <div className="relative">

              {/* PNG Image */}
              <img
                src={heroKid}
                alt="Kid learning illustration"
                className="w-80 md:w-[420px] lg:w-[450px] drop-shadow-2xl animate-float object-contain mx-auto"
              />

              {/* Floating Labels */}
              <div className="absolute -top-4 -right-4 bg-kidBlue text-white font-fredoka text-sm px-3 py-2 rounded-2xl shadow-lg animate-bounce-slow">
                📚 Learn!
              </div>

              <div className="absolute -bottom-4 -left-4 bg-kidBlue text-white font-fredoka text-sm px-3 py-2 rounded-2xl shadow-lg animate-bounce-slow">
                🎨 Create!
              </div>

              <div className="absolute top-1/2 -left-8 bg-kidGreen text-white font-fredoka text-sm px-3 py-2 rounded-2xl shadow-lg animate-float2">
                🌟 Play!
              </div>

            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
            <path fill="white" d="M0,50 C180,20 360,70 540,40 C720,10 900,70 1080,40 C1260,10 1380,60 1440,40 L1440,80 L0,80 Z"/>
          </svg>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <section className="py-4 bg-kidPurple overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="font-fredoka text-xl text-white mx-6 flex items-center gap-2">
              {item} <span className="text-kidYellow mx-4">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ===== ABOUT SNIPPET ===== */}
      <section
        ref={ref('about')} data-section="about"
        className="py-20 bg-white relative overflow-hidden"
      >
        <div className="absolute top-10 right-10 w-32 h-32 bg-kidYellow/10 rounded-full" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-kidBlue/10 rounded-full" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Both Images Smaller */}
          <div className={`relative transition-all duration-700 ${visible.about ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>

            {/* Main Photo - Smaller Size */}
            <div className="relative">
              <div className="bg-white p-3 rounded-[2rem] shadow-2xl border-8 border-[#A5D6FF] max-w-[340px] mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800" 
                  alt="Happy Kids" 
                  className="rounded-2xl w-full"
                />
              </div>

              {/* Smaller Classroom Photo (Yellow Frame) - Even Smaller */}
              <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-3xl shadow-2xl border-8 border-[#FFD966] w-52 md:w-60">
                <img 
                  src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=600" 
                  alt="Classroom" 
                  className="rounded-2xl w-full"
                />
              </div>
            </div>

            {/* Trusted by Parents */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-white overflow-hidden ring-2 ring-[#A5D6FF]">
                    <img 
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i}.jpg`} 
                      alt="Parent" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div>
                <p className="font-fredoka text-lg font-bold text-gray-800">
                  Trusted by <span className="text-kidPurple">500+</span> Parents
                </p>
                <p className="text-gray-600 text-sm">for quality child care</p>
              </div>
            </div>

          </div>

          {/* Right */}
          <div className={`transition-all duration-700 delay-300 ${visible.about ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            <div className="inline-flex items-center gap-2 bg-kidYellow/20 rounded-full px-4 py-2 mb-4">
              <span className="text-kidOrange font-fredoka text-sm">🌟 About Pansies & Poppi</span>
            </div>
            <h2 className="font-fredoka text-5xl text-kidPurple mb-4 leading-tight">
              We Make Learning <span className="text-kidOrange">Super Fun!</span> 🎉
            </h2>
            <p className="font-nunito text-gray-600 text-lg mb-6 leading-relaxed">
              🌈 At Pansies & Poppies International Pre-School, we create a safe, engaging, and child-centered
              environment where children explore, discover, and grow through play-based and experiential
              learning.
            </p>
            <div className="space-y-3 mb-8">
              {['🎯 Personalized learning for every child', '🏆 Expert, caring teachers', '🎨 Creative & hands-on activities', '💪 Building confidence & social skills'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-baloo text-gray-700">
                  <span className="w-8 h-8 bg-kidGreen/20 rounded-full flex items-center justify-center text-sm">✓</span>
                  {item}
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 bg-gradient-to-r from-kidOrange to-kidBlue text-white font-fredoka text-lg px-7 py-3 rounded-full shadow-lg hover:scale-105 transition-transform">
              Discover More 🚀
            </Link>
          </div>
        </div>
      </section>
              

   {/* ===== WHY CHOOSE US SECTION ===== */}
<section
  ref={ref('features')}
  data-section="features"
  className="relative py-16 overflow-hidden bg-[#F7EFD2]"
>

  {/* TOP WAVE */}
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
    <svg
      viewBox="0 0 1440 220"
      className="relative block w-full h-[70px]"
      preserveAspectRatio="none"
    >
      <path
        fill="#fff"
        d="M0,96L48,101.3C96,107,192,117,288,133.3C384,149,480,171,576,160C672,149,768,107,864,106.7C960,107,1056,149,1152,149.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>

  {/* BOTTOM WAVE */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg
      viewBox="0 0 1440 220"
      className="relative block w-full h-[70px]"
      preserveAspectRatio="none"
    >
      <path
        fill="#fff"
        d="M0,96L48,101.3C96,107,192,117,288,133.3C384,149,480,171,576,160C672,149,768,107,864,106.7C960,107,1056,149,1152,149.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>

  <div className="max-w-6xl mx-auto px-5 relative z-10">

    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* LEFT SIDE */}
      <div
        className={`transition-all duration-700 ${
          visible.features
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >

        {/* SMALL TITLE */}
        <div className="flex items-center gap-2 mb-4">

          <div className="w-2.5 h-2.5 rounded-full bg-[#FF9F6E]"></div>

          <p className="uppercase tracking-[4px] text-[#4A4036] font-semibold text-xs">
            Why Choose Us
          </p>

        </div>

        {/* MAIN TITLE */}
        <h2 className="font-fredoka text-[32px] md:text-[52px] leading-[1.1] text-[#241C1C] max-w-xl mb-8">
          A place parents trust 
          <br />
          for safe and joyful
          <br />
          learning
        </h2>

        {/* CARTOON IMAGE */}
        <div className="relative">

          {/* SHADOW */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[230px] h-[14px] bg-[#F4A56E] rounded-full opacity-70 blur-[2px]"></div>

          <img
            src="https://static.vecteezy.com/system/resources/previews/024/346/403/original/3d-cartoon-group-of-little-children-on-transparent-background-generative-ai-png.png"
            alt=""
            className="relative z-10 w-[220px] max-w-full mx-auto object-contain"
          />

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        {[
          {
            number: '01',
            title: 'Safe Environment',
            desc: 'A safe, secure, and caring environment where children feel happy and confident every day.',
            bg: 'bg-[#E9A1A5]',
            icon: '🏫',
          },
          {
            number: '02',
            title: 'Caring Teachers',
            desc: 'Experienced and loving teachers who guide children with patience and personal attention.',
            bg: 'bg-[#B8D7F0]',
            icon: '🧸',
          },
          {
            number: '03',
            title: 'Play Learning',
            desc: 'Creative learning activities and interactive games that make education fun and exciting.',
            bg: 'bg-[#F1ED87]',
            icon: '🧩',
          },
          {
            number: '04',
            title: 'Trusted Care',
            desc: 'Trusted preschool care with focus on emotional growth, creativity, and confidence building.',
            bg: 'bg-[#BCA7E8]',
            icon: '🖍️',
          },
        ].map((item, i) => (

          <div
            key={i}
            className={`${item.bg} rounded-[1.5rem] p-6 shadow-md hover:scale-105 transition-all duration-500 min-h-[240px] flex flex-col justify-between ${
              visible.features
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDelay: `${i * 120}ms`,
            }}
          >

            {/* TOP */}
            <div className="flex items-start justify-between mb-6">

              <h3 className="font-fredoka text-4xl text-[#1E1717]">
                {item.number}
              </h3>

              <div className="text-3xl">
                {item.icon}
              </div>

            </div>

            {/* LINE */}
            <div className="w-full h-[1px] bg-black/10 mb-5"></div>

            {/* CONTENT */}
            <div>

              <h4 className="font-fredoka text-2xl text-[#1E1717] mb-3 leading-tight">
                {item.title}
              </h4>

              <p className="font-nunito text-[#3F3A3A] text-[15px] leading-relaxed">
                {item.desc}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>

</section>

      {/* ===== CTA IMAGE ONLY ===== */}
<section className="w-full overflow-hidden">
  <img
    src={ctaImage}
    alt="Preschool Admission Banner"
    className="w-full h-auto object-contain"
  />
</section>
      {/* ===== TESTIMONIALS ===== */}
      <section ref={ref('testimonials')} data-section="testimonials"
        className="py-20 relative overflow-hidden"
       style={{
  background: '#ffffff'
}}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-14 transition-all duration-700 ${visible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-fredoka text-5xl text-kidPurple mb-3">Happy <span className="text-kidBlue">Families!</span> 💕</h2>
            <p className="font-nunito text-gray-600 text-lg">See what parents are saying about our magical school! ⭐</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`bg-white rounded-3xl p-6 shadow-xl border-4 hover:scale-105 transition-all duration-300 ${
                  ['border-kidYellow','border-kidBlue','border-kidBlue'][i]
                } ${visible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{transitionDelay:`${i*150}ms`}}
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array(t.rating).fill('⭐').map((s,j) => <span key={j} className="text-sm">{s}</span>)}
                </div>
                <p className="font-nunito text-gray-700 text-sm italic mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-kidYellow to-kidOrange rounded-full flex items-center justify-center text-2xl shadow-md">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-fredoka text-kidPurple text-base">{t.name}</div>
                    <div className="font-baloo text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}