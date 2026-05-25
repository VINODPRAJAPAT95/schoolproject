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

     {/* ===== KEY FOCUS AREAS ===== */}
<section
  ref={ref('classes')}
  data-section="classes"
  className="py-20 relative overflow-hidden"
  style={{
    background:
      'linear-gradient(135deg, #fdf2f8 0%, #fef9ec 50%, #eef2ff 100%)'
  }}
>
  {/* Background */}
  <div className="absolute inset-0 star-bg opacity-20" />

  <div className="relative z-10 max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div
      className={`text-center mb-16 transition-all duration-700 ${
        visible.classes
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="inline-flex items-center gap-2 bg-kidPink/10 rounded-full px-5 py-2 mb-5">
        <span className="font-fredoka text-kidPink text-sm">
          🌟 Learning Focus
        </span>
      </div>

      <h2 className="font-fredoka text-5xl md:text-6xl text-kidPurple mb-4">
        Key Focus <span className="text-kidOrange">Areas</span> 🎨
      </h2>

      <p className="font-nunito text-gray-600 text-lg max-w-2xl mx-auto">
        We nurture every child through engaging experiences that build
        confidence, creativity, communication, and joyful learning.
      </p>
    </div>

    {/* Focus Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

      {[
        {
          emoji: '🗣️',
          title: 'Language & Communication Skills',
          color: 'from-pink-100 to-rose-100'
        },
        {
          emoji: '❤️',
          title: 'Emotional Intelligence',
          color: 'from-orange-100 to-yellow-100'
        },
        {
          emoji: '🧠',
          title: 'Cognitive Development',
          color: 'from-blue-100 to-cyan-100'
        },
        {
          emoji: '🤝',
          title: 'Social Interaction & Teamwork',
          color: 'from-green-100 to-emerald-100'
        },
        {
          emoji: '🎨',
          title: 'Creative Expression',
          color: 'from-purple-100 to-pink-100'
        },
        {
          emoji: '🏃',
          title: 'Motor Skills Development',
          color: 'from-yellow-100 to-orange-100'
        }
      ].map((item, i) => (
        <div
          key={i}
          className={`bg-gradient-to-br ${item.color} rounded-[2rem] p-8 shadow-xl border-2 border-white/60 hover:scale-105 hover:-translate-y-1 transition-all duration-300 ${
            visible.classes
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: `${i * 120}ms` }}
        >
          <div className="text-6xl mb-5 animate-float">
            {item.emoji}
          </div>

          <h3 className="font-fredoka text-2xl text-kidPurple leading-snug">
            {item.title}
          </h3>

          <div className="mt-5 flex items-center gap-2">
            <div className="w-10 h-1 rounded-full bg-kidPink" />
            <div className="w-3 h-3 rounded-full bg-kidOrange" />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ===== FEATURES ===== */}
      <section ref={ref('features')} data-section="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-14 transition-all duration-700 ${visible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-fredoka text-5xl text-kidPurple mb-3">Why Choose <span className="text-kidBlue">us</span> 💫</h2>
            <p className="font-nunito text-gray-600 text-lg">We're not just a school — we're a magical world of wonder! 🌈</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className={`text-center p-6 rounded-3xl border-4 border-dashed hover:border-solid transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-default ${
                  ['border-kidYellow hover:bg-yellow-50','border-kidBlue hover:bg-blue-50','border-kidBlue hover:bg-blue-50','border-kidGreen hover:bg-green-50'][i]
                } ${visible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{transitionDelay:`${i*100}ms`}}
              >
                <div className="text-5xl mb-3 animate-float" style={{animationDelay:`${i*0.5}s`}}>{f.emoji}</div>
                <h3 className="font-fredoka text-xl text-kidPurple mb-2">{f.title}</h3>
                <p className="font-nunito text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section ref={ref('testimonials')} data-section="testimonials"
        className="py-20 relative overflow-hidden"
        style={{background:'linear-gradient(135deg,#eff6ff 0%,#ede9fe 50%,#dbeafe 100%)'}}
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

      {/* ===== CTA ===== */}
      <section className="py-20 bg-gradient-to-r from-kidOrange via-kidBlue to-kidPurple relative overflow-hidden">
        
        <div className="absolute inset-0 star-bg opacity-20" />

        {['🚀','🌟','🎉','💫','⭐','🏆'].map((em,i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20 animate-float"
            style={{
              left:`${10+i*15}%`,
              top:`${20+(i%2)*50}%`,
              animationDelay:`${i*0.5}s`
            }}
          >
            {em}
          </div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            {/* LEFT CONTENT */}
<div className="text-center lg:text-left">

  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-5 py-2 rounded-full mb-6 shadow-lg">
    <span className="text-2xl">🎓</span>

    <span className="font-fredoka text-white text-sm md:text-base tracking-wide">
      Admissions Open for 2026–27
    </span>
  </div>

  <h2 className="font-fredoka text-5xl md:text-6xl leading-tight text-white mb-5">
    Give Your Child a{' '}
    <span className="text-kidYellow">
      Bright Beginning
    </span>{' '}
    ✨
  </h2>

  <p className="font-nunito text-white/90 text-xl leading-relaxed mb-8 max-w-2xl">
    Join Pansies & Poppies International Pre-School and create
    a joyful learning journey filled with creativity,
    confidence, friendship, and fun.
  </p>

  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">

    <Link
      to="/pages/pricing"
      className="bg-white text-kidPurple font-fredoka text-xl px-8 py-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:bg-kidYellow"
    >
      🎓 Apply Now
    </Link>

    <Link
      to="/contact"
      className="bg-white/20 backdrop-blur border-2 border-white text-white font-fredoka text-xl px-8 py-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300 hover:bg-white/30"
    >
      📅 Schedule a Visit
    </Link>
  </div>
</div>
            {/* RIGHT SVG IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={ctaImage}
                alt="CTA Kids"
                className="w-full max-w-md lg:max-w-lg object-contain animate-float"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}