import React from 'react'
import PageHero from '../components/PageHero'

const testimonials = [
  { name: 'Sarah Johnson', role: 'Parent of Emma (Age 5)', rating: 5, text: 'Kidoria has been an absolute blessing for our family! Emma has blossomed into such a confident, curious little learner. The teachers are so caring and the activities are endlessly creative!', avatar: '👩', color: 'border-kidYellow' },
  { name: 'Mike Williams', role: 'Parent of Jake (Age 7)', rating: 5, text: 'Jake absolutely LOVES going to school now — something he never said before Kidoria! The math teacher is phenomenal and the art classes have unleashed a creativity we never knew he had!', avatar: '👨', color: 'border-kidPink' },
  { name: 'Lisa Chen', role: 'Parent of Lily (Age 4)', rating: 5, text: 'As a working mom, knowing Lily is in the best hands makes everything easier. The staff is incredibly professional and warm. She comes home singing songs and teaching ME things every day! 😂', avatar: '👩‍🦱', color: 'border-kidBlue' },
  { name: 'David Martinez', role: 'Parent of Carlos (Age 6)', rating: 5, text: 'We were nervous about enrolling Carlos because he was shy. Within 2 months, he was leading activities and making tons of friends. Kidoria truly transforms children! Highly recommended!', avatar: '🧔', color: 'border-kidGreen' },
  { name: 'Amanda Foster', role: 'Parent of Sophie (Age 8)', rating: 5, text: 'Sophie has been a Kidoria student for 3 years now and we wouldn\'t change it for the world. Her reading and writing skills are outstanding thanks to this wonderful team!', avatar: '👩‍🦰', color: 'border-kidPurple' },
  { name: 'Robert Kim', role: 'Parent of Max (Age 5)', rating: 5, text: 'The science experiments, the music sessions, the outdoor play — Max talks about all of it non-stop! Kidoria doesn\'t just teach academics, it builds whole, happy human beings!', avatar: '👨‍🦲', color: 'border-kidOrange' },
]

export default function Testimonials() {
  return (
    <div>
      <PageHero title="Testimonials" subtitle="Hear from our happy families!" emoji="⭐" bg="bg-gradient-to-r from-kidYellow to-kidOrange" />

      {/* Stars banner */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-4 bg-kidYellow/20 rounded-3xl p-6 border-4 border-dashed border-kidYellow">
            <span className="text-5xl">🏆</span>
            <div>
              <div className="font-fredoka text-3xl text-kidPurple">Rated 5 Stars by 500+ Families!</div>
              <div className="flex justify-center gap-1 mt-1">
                {Array(5).fill('⭐').map((s, i) => <span key={i} className="text-2xl">{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 pb-20 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className={`bg-white rounded-3xl p-7 shadow-xl border-4 ${t.color} hover:scale-105 hover:-rotate-1 transition-all duration-300`}>
                {/* Quote mark */}
                <div className="font-fredoka text-7xl text-kidYellow/40 leading-none -mb-4">"</div>
                <div className="flex gap-1 mb-3">
                  {Array(t.rating).fill('⭐').map((s, j) => <span key={j}>{s}</span>)}
                </div>
                <p className="font-nunito text-gray-700 text-sm italic mb-5 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3 border-t-2 border-dashed border-gray-100 pt-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-kidYellow to-kidOrange rounded-full flex items-center justify-center text-3xl shadow-md shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-fredoka text-kidPurple">{t.name}</div>
                    <div className="font-baloo text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-kidPink to-kidPurple text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-6xl mb-4 animate-bounce-slow">🌟</div>
          <h2 className="font-fredoka text-4xl text-white mb-4">Join Our Happy Family Today!</h2>
          <a href="/pages/pricing" className="inline-block bg-white text-kidPurple font-fredoka text-xl px-8 py-4 rounded-full shadow-xl hover:scale-110 transition-transform hover:bg-kidYellow">
            🚀 Get Started!
          </a>
        </div>
      </section>
    </div>
  )
}
