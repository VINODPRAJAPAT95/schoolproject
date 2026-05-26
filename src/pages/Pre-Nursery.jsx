import React from 'react'
import PageHero from '../components/PageHero'

const activities = [
  {
    title: 'Sensory Activities',
    icon: '🧩',
    color: 'from-pink-400 to-rose-400',
    desc: 'Children explore textures, colors, sounds, and hands-on sensory play activities that stimulate curiosity and early brain development.',
  },
  {
    title: 'Basic Communication',
    icon: '💬',
    color: 'from-purple-400 to-indigo-400',
    desc: 'Fun conversations, songs, rhymes, and storytelling help develop vocabulary and communication skills.',
  },
  {
    title: 'Social Interaction',
    icon: '🤝',
    color: 'from-yellow-400 to-orange-400',
    desc: 'Group play encourages sharing, friendship, teamwork, and confidence building.',
  },
  {
    title: 'Play-Based Learning',
    icon: '🎈',
    color: 'from-orange-400 to-red-400',
    desc: 'Games, puzzles, role play, and exploration help children learn naturally.',
  },
  {
    title: 'Fine Motor Development',
    icon: '✍️',
    color: 'from-green-400 to-emerald-400',
    desc: 'Drawing, stacking, clay modeling improves finger coordination and control.',
  },
]

export default function PreNursery() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <PageHero
        title="Pre-Nursery Program"
        subtitle="Fun-Filled Learning Journey | Ages 1.5 - 3 Years"
        bg="bg-gradient-to-r from-kidPink to-kidPurple"
      />

      {/* MAIN SECTION */}
      <section className="relative py-20 bg-gradient-to-b from-white via-pink-50 to-purple-50">

        {/* BACKGROUND EFFECTS */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200/30 blur-3xl rounded-full" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">

          {/* HEADER */}
          <div className="text-center mb-14">

            <div className="inline-block px-6 py-2 bg-white/70 backdrop-blur-md rounded-full shadow-md text-kidPurple font-bold text-sm mb-5">
              Early Childhood Program
            </div>

            <h2 className="font-fredoka text-4xl md:text-5xl text-kidPurple mb-4">
              Pre-Nursery Activities
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
              Fun, interactive and playful learning experiences that help children grow naturally.
            </p>

          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {activities.map((item, i) => (
              <div
                key={i}
                className="relative group bg-white/70 backdrop-blur-xl border border-white rounded-1xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >

                {/* GLOW */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r ${item.color} opacity-20 blur-2xl rounded-full`} />

                {/* ICON */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-3xl shadow-lg mb-5`}>
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="font-fredoka text-xl text-gray-800 mb-3 group-hover:text-kidPurple transition">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* DECOR LINE */}
                <div className={`mt-5 h-1 w-14 rounded-full bg-gradient-to-r ${item.color}`} />

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* 🚀 ADMISSION BANNER (FULL WIDTH SMALL HEIGHT) */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 mt-16 overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.parents.com/thmb/595334Wl0HQnRAxfMv6Fy7bf9ME=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_172261862-2--d36510500ca044e1bd9bb51f798b3141.jpg')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 flex items-center justify-center text-center px-6 h-[220px] md:h-[260px] lg:h-[300px]">

          <div className="max-w-2xl text-white">

            <h2 className="text-xl md:text-3xl font-fredoka mb-2">
              Admissions Open for New Session
            </h2>

            <p className="text-xs md:text-sm text-white/80 mb-4">
              Safe, joyful, and creative learning environment for preschool children.
            </p>

            <div className="flex gap-3 justify-center">

              <button className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition">
                Apply Now
              </button>

              <button className="px-5 py-2 border border-white text-white text-sm rounded-full hover:bg-white hover:text-black transition">
                Learn More
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
} 