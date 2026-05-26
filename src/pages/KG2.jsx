import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const programs = [
  {
    title: 'Advanced Literacy & Numeracy 📚',
    emoji: '🧠',
    color: 'from-yellow-400 to-orange-400',
    bg: 'bg-yellow-50',
    topics: [
      'Reading & writing skills',
      'Counting & mathematics',
      'Problem-solving activities',
      'Interactive learning games',
      'Smart classroom sessions',
    ],
  },
  {
    title: 'Creative Thinking 🎨',
    emoji: '💡',
    color: 'from-pink-400 to-purple-400',
    bg: 'bg-pink-50',
    topics: [
      'Creative storytelling',
      'Art & imagination',
      'Brainstorming games',
      'Fun innovation tasks',
      'Drawing activities',
    ],
  },
  {
    title: 'Communication Skills 🗣️',
    emoji: '🎤',
    color: 'from-blue-400 to-cyan-400',
    bg: 'bg-blue-50',
    topics: [
      'Speaking confidence',
      'Listening activities',
      'Interactive conversations',
      'Presentation basics',
      'Social communication',
    ],
  },
  {
    title: 'Team Activities 🤝',
    emoji: '🏆',
    color: 'from-green-400 to-teal-400',
    bg: 'bg-green-50',
    topics: [
      'Group fun games',
      'Team coordination',
      'Friendship activities',
      'Collaborative learning',
      'Leadership basics',
    ],
  },
  {
    title: 'School Readiness Programs 🏫',
    emoji: '🚀',
    color: 'from-purple-400 to-indigo-400',
    bg: 'bg-purple-50',
    topics: [
      'Classroom discipline',
      'School preparation',
      'Confidence building',
      'Learning independence',
      'Fun educational tasks',
    ],
  },
]

export default function Programs() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setCount((c) => (c + 1) % 5)
    }, 900)

    return () => clearInterval(t)
  }, [])

  const emojis = ['🎓', '🌈', '🧸', '🚀', '✨']

  return (
    <div>

      {/* HERO */}
      <PageHero
        title="Kindergarten 2"
        subtitle="Second and final year of Kindergarten"
        bg="bg-gradient-to-r from-kidPink to-kidPurple"
      />

      {/* PROGRAM SECTION */}
      <section className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-purple-50 relative overflow-hidden py-20">

        {/* FLOATING ELEMENTS */}
        {['⭐','🌟','💫','✨','🌈','🎈','🎉','🧸'].map((em, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-20 animate-bounce pointer-events-none"
            style={{
              left: `${10 + i * 10}%`,
              top: `${15 + (i % 5) * 15}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            {em}
          </div>
        ))}

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* HERO TEXT */}
          <div className="text-center mb-16">

            <div className="text-7xl mb-6">
              {emojis[count]}
            </div>

            <h1 className="font-fredoka text-5xl md:text-6xl text-kidPurple mb-4">
              Smart Learning <span className="text-kidPink">Programs</span>
            </h1>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Modern learning programs designed to build creativity, confidence, communication and school readiness.
            </p>

          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {programs.map((program, index) => (
              <div
                key={index}
                className={`relative ${program.bg} rounded-[1px] overflow-hidden shadow-xl border border-white hover:scale-105 transition-all duration-500 group`}
              >

                {/* HEADER */}
                <div className={`bg-gradient-to-r ${program.color} p-6 text-white relative`}>

                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 blur-2xl rounded-full" />

                  <div className="text-4xl mb-2">{program.emoji}</div>

                  <h3 className="font-fredoka text-2xl">{program.title}</h3>

                </div>

                {/* CONTENT */}
                <div className="p-6 space-y-3">

                  {program.topics.map((topic, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm"
                    >
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${program.color} text-white flex items-center justify-center text-sm font-bold`}>
                        {i + 1}
                      </div>
                      <p className="text-sm text-gray-700">{topic}</p>
                    </div>
                  ))}

                  <Link
                    to="/contact"
                    className={`mt-4 block text-center bg-gradient-to-r ${program.color} text-white py-3 rounded-full font-bold hover:scale-105 transition`}
                  >
                    🚀 Enroll Now
                  </Link>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* 🚀 ADMISSION CONTACT SECTION */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 mt-20 overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://zhireducation.com/wp-content/uploads/2024/05/details-1.jpg')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />

        {/* CONTENT */}
        <div className="relative z-10 py-24 px-6 text-center text-white">

          <h2 className="text-3xl md:text-5xl font-fredoka mb-3">
            Nursery & Kindergarten Admissions Open
          </h2>

          <p className="text-sm md:text-lg text-white/80 max-w-3xl mx-auto mb-8">
            Give your child a strong foundation with fun learning, creativity, and safe preschool environment.
          </p>

          {/* CONTACT BOX */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-1xl p-6 max-w-md mx-auto shadow-xl">

            <p className="text-white/70 text-sm mb-2">
              Call / WhatsApp for Admission
            </p>

            <a
              href="tel:+919999999999"
              className="text-2xl font-bold text-yellow-300 hover:scale-105 inline-block"
            >
              +91 99999 99999
            </a>

            <div className="mt-5 flex gap-3 justify-center">

              <a
                href="tel:+919999999999"
                className="px-5 py-2 bg-green-500 text-white rounded-full text-sm font-bold hover:scale-105 transition"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                className="px-5 py-2 bg-white text-black rounded-full text-sm font-bold hover:scale-105 transition"
              >
                💬 WhatsApp
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}