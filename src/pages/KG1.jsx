  import React from 'react'
  import { Link } from 'react-router-dom'
  import PageHero from '../components/PageHero'

  const programs = [
    {
      title: 'Logical Reasoning & Math 🧮',
      color: 'from-yellow-400 to-orange-400',
      image: 'https://cdn-icons-png.flaticon.com/512/2436/2436874.png',
      topics: [
        'Shapes & colors',
        'Counting & numbers',
        'Sorting & sequencing',
        'Patterns',
        'Time basics',
      ],
    },
    {
      title: 'Language & Literacy 📚',
      color: 'from-pink-400 to-purple-400',
      image: 'https://cdn-icons-png.flaticon.com/512/3135/3135755.png',
      topics: [
        'Speaking skills',
        'Alphabet',
        'Reading basics',
        'Writing basics',
        'Storytelling',
      ],
    },
    {
      title: 'Creative Arts 🎨',
      color: 'from-blue-400 to-cyan-400',
      image: 'https://cdn-icons-png.flaticon.com/512/3468/3468377.png',
      topics: ['Drawing', 'Craft', 'Music', 'Dance'],
    },
    {
      title: 'Life Skills 🌟',
      color: 'from-green-400 to-teal-400',
      image: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
      topics: ['Hygiene', 'Sharing', 'Communication', 'Emotions'],
    },
    {
      title: 'General Awareness 🌍',
      color: 'from-purple-400 to-indigo-400',
      image: 'https://cdn-icons-png.flaticon.com/512/4359/4359963.png',
      topics: ['Animals', 'Festivals', 'Safety', 'Community'],
    },
    {
      title: 'Physical Development ⚽',
      color: 'from-red-400 to-pink-400',
      image: 'https://cdn-icons-png.flaticon.com/512/3048/3048122.png',
      topics: ['Motor skills', 'Yoga', 'Sports'],
    },
  ]

  export default function Programs() {
    return (
      <div>

        <PageHero
          title="Kindergarten 1"
          subtitle="First year of Kindergarten"
          bg="bg-gradient-to-r from-kidPink to-kidPurple"
        />

        <section className="py-14 bg-gradient-to-br from-pink-50 via-yellow-50 to-blue-50">

          <div className="max-w-6xl mx-auto px-5">

            {/* TITLE */}
            <div className="text-center mb-10">
              <h2 className="font-fredoka text-3xl md:text-4xl text-kidPurple">
                🎓 Learning Programs
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Fun & simple learning for kids
              </p>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

              {programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-white  shadow-md overflow-hidden hover:scale-[1.03] transition-all duration-300"
                >

                  {/* HEADER */}
                  <div className={`h-[100px] bg-gradient-to-r ${program.color} flex items-center justify-center`}>
                    <img
                      src={program.image}
                      className="w-16 h-16 object-contain"
                      alt=""
                    />
                  </div>

                  {/* BODY */}
                  <div className="p-4">

                    <h3 className="font-fredoka text-lg mb-3 text-gray-800">
                      {program.title}
                    </h3>

                    <div className="space-y-2">

                      {program.topics.map((topic, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg"
                        >
                          <span className="text-xs font-bold bg-gray-200 w-6 h-6 flex items-center justify-center rounded-full">
                            {i + 1}
                          </span>
                          <p className="text-sm text-gray-700">{topic}</p>
                        </div>
                      ))}

                    </div>

                    <Link
                      to="/contact"
                      className={`mt-4 block text-center text-white text-sm py-2 rounded-full bg-gradient-to-r ${program.color}`}
                    >
                      Enroll Now
                    </Link>

                  </div>
                </div>
              ))}

            </div>

          {/* ADMISSION POSTER (FULL WIDTH) */}
  <div className="relative w-screen left-1/2 -translate-x-1/2 mt-16 overflow-hidden">

    {/* BACKGROUND IMAGE */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop')",
      }}
    />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/60" />

    {/* CONTENT */}
    <div className="relative py-16 px-6 text-center text-white">

      <h2 className="text-3xl md:text-5xl font-fredoka mb-3">
        Admissions Open
      </h2>

      <p className="text-sm md:text-base mb-6 max-w-2xl mx-auto">
        Safe & fun learning environment for kids with creative activities, caring teachers, and joyful learning.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">

        <Link
          to="/contact"
          className="bg-white text-black px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition"
        >
          Apply Now
        </Link>

        <Link
          to="/about"
          className="border border-white px-6 py-3 rounded-full text-sm hover:bg-white hover:text-black transition"
        >
          Learn More
        </Link>

      </div>

    </div>

  </div>

          </div>

        </section>
      </div>
    )
  }