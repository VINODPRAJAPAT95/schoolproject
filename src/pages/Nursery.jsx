import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const activities = [
  {
    title: 'Early Literacy & Numeracy',
    icon: '📚',
    color: 'from-pink-400 to-rose-400',
    description:
      'Building strong foundations through alphabet games, counting, phonics, and number recognition in a playful environment.',
  },
  {
    title: 'Creative Expression',
    icon: '🎨',
    color: 'from-purple-400 to-indigo-400',
    description:
      'Children explore imagination through painting, crafting, music, and sensory activities.',
  },
  {
    title: 'Rhymes & Storytelling',
    icon: '📖',
    color: 'from-yellow-400 to-orange-400',
    description:
      'Rhymes, storytelling, puppet shows, and circle time improve listening and communication skills.',
  },
  {
    title: 'Physical Activities',
    icon: '⚽',
    color: 'from-orange-400 to-red-400',
    description:
      'Outdoor games, yoga, and movement activities support healthy physical growth.',
  },
  {
    title: 'Social-Emotional Learning',
    icon: '💛',
    color: 'from-green-400 to-emerald-400',
    description:
      'Children learn empathy, sharing, teamwork, confidence, and emotional understanding.',
  },
]

export default function Nursery() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <PageHero
        title="Little Blossoms Nursery"
        subtitle="Nurturing Young Hearts | Ages 2-4 Years"
        bg="bg-gradient-to-r from-kidPink to-kidPurple"
      />

      {/* MAIN SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50 relative">

        {/* BACKGROUND BLUR */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200/30 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* HEADER */}
          <div className="text-center mb-16">

            <span className="inline-block px-6 py-2 rounded-full bg-pink-100 text-kidPink font-bold mb-5 shadow-sm">
              ✨ Fun Learning Activities
            </span>

            <h2 className="font-fredoka text-5xl text-kidPurple mb-5">
              Our Learning Activities
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              A joyful blend of creativity, learning, movement, and social interaction.
            </p>

          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {activities.map((activity, i) => (
              <article
                key={i}
                className="relative bg-white/70 backdrop-blur-xl border border-white rounded-[1px] p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group overflow-hidden"
              >

                {/* GLOW */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r ${activity.color} opacity-20 blur-2xl rounded-full`} />

                {/* ICON */}
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${activity.color} flex items-center justify-center text-4xl shadow-lg mb-6`}>
                  {activity.icon}
                </div>

                {/* TITLE */}
                <h3 className="font-fredoka text-2xl text-kidPurple mb-4 group-hover:text-kidPink transition-colors">
                  {activity.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* 🚀 NURSERY ADMISSION BANNER (NEW CONTENT) */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 mt-16 overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.lis.ac.in/blogs/wp-content/uploads/2019/01/Nursery-Schools-in-Gurgaon.png')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 flex items-center justify-center text-center px-6 h-[240px] md:h-[280px] lg:h-[320px]">

          <div className="max-w-3xl text-white">

            <h2 className="text-xl md:text-3xl font-fredoka mb-2">
              Nursery Admissions Open Now
            </h2>

            <p className="text-xs md:text-sm text-white/80 mb-5 leading-relaxed">
             Pansies & Poppies International Pre-School!
            </p>

            {/* HIGHLIGHTS */}
            <div className="flex flex-wrap justify-center gap-2 mb-5">

              <span className="px-3 py-1 text-xs bg-white/20 rounded-full">
                Early Literacy
              </span>

              <span className="px-3 py-1 text-xs bg-white/20 rounded-full">
                Creative Learning
              </span>

              <span className="px-3 py-1 text-xs bg-white/20 rounded-full">
                Social Skills
              </span>

              <span className="px-3 py-1 text-xs bg-white/20 rounded-full">
                Fun Activities
              </span>

            </div>

            {/* BUTTONS */}
            <div className="flex gap-3 justify-center">

              <button className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition">
                Apply for Nursery
              </button>

              <button className="px-5 py-2 border border-white text-white text-sm rounded-full hover:bg-white hover:text-black transition">
                Explore Curriculum
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}