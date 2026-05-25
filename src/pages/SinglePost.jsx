import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const relatedPosts = [
  { emoji: '🔢', title: '10 Fun Ways to Make Math Exciting', date: 'Jan 22, 2026' },
  { emoji: '🌿', title: 'Outdoor Learning Adventures', date: 'Feb 3, 2026' },
  { emoji: '🎵', title: 'Why Every Child Should Learn Music', date: 'Feb 10, 2026' },
]

export default function SinglePost() {
  return (
    <div>
      <PageHero title="Single Post" subtitle="How Play Builds Confidence in Young Children" emoji="📖" bg="bg-gradient-to-r from-kidPink to-kidOrange" />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Article */}
            <article className="lg:col-span-2">
              {/* Featured image */}
              <div className="bg-gradient-to-br from-kidYellow/30 to-kidPink/30 rounded-3xl h-72 flex items-center justify-center text-8xl mb-8 border-4 border-dashed border-kidYellow relative overflow-hidden">
                <div className="absolute inset-0 star-bg opacity-30" />
                <span className="relative z-10 animate-float">🎨</span>
                <span className="absolute top-4 left-4 bg-kidPink text-white font-fredoka text-sm px-4 py-2 rounded-full">Arts & Crafts 🎨</span>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6 font-baloo text-gray-500 text-sm">
                <span>📅 January 15, 2026</span>
                <span>👩‍🏫 Emma Wilson</span>
                <span>⏱️ 5 min read</span>
                <span>💬 24 comments</span>
              </div>

              <h1 className="font-fredoka text-4xl md:text-5xl text-kidPurple mb-6 leading-tight">
                How Play Builds Confidence in Young Children 🌟
              </h1>

              <div className="prose max-w-none font-nunito text-gray-700 space-y-5 text-base leading-relaxed">
                <p className="text-lg font-semibold text-kidPurple border-l-4 border-kidYellow pl-4 italic">
                  "Play is the highest form of research" — Albert Einstein 🔬
                </p>
                <p>
                  🌈 When children play, they're not just having fun — they're building the very foundation of who they'll become! At Kidoria, we've seen firsthand how creative play transforms shy, uncertain little ones into confident, joyful learners who are ready to take on the world!
                </p>
                <h2 className="font-fredoka text-2xl text-kidOrange mt-6">🎯 The Magic of Free Play</h2>
                <p>
                  Free play gives children the incredible gift of choice. When a child decides to build a tower, paint a rainbow, or create an imaginary kingdom, they're making real decisions with real consequences — and loving every minute of it! This autonomy builds self-confidence faster than almost anything else we know.
                </p>
                <div className="bg-kidYellow/20 rounded-2xl p-5 border-l-4 border-kidYellow">
                  <p className="font-baloo font-bold text-kidPurple">🌟 Did You Know?</p>
                  <p>Children who engage in regular creative play show 40% higher confidence levels in social situations by age 7! That's the power of letting kids be kids! 🚀</p>
                </div>
                <h2 className="font-fredoka text-2xl text-kidBlue mt-6">🎨 Art as a Confidence Builder</h2>
                <p>
                  In our painting classes, we never say "wrong." Every brushstroke is a masterpiece. Every color choice is bold and brilliant. When children hear "Wow, that's amazing!" instead of "That's not quite right," something magical happens in their little hearts — they believe in themselves! 💕
                </p>
                <ul className="space-y-2">
                  {['🎭 Role play develops empathy and social skills', '🏗️ Building blocks teach problem-solving', '🎨 Art builds self-expression and pride', '🎵 Music develops rhythm and coordination', '📖 Story games boost language skills'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 font-baloo">{item}</li>
                  ))}
                </ul>
                <h2 className="font-fredoka text-2xl text-kidPink mt-6">💪 Tips for Parents at Home</h2>
                <p>
                  You don't need expensive toys or fancy equipment! An empty cardboard box becomes a spaceship. A pile of cushions becomes a mountain. Your child's imagination is the most powerful toy in the universe! Here's how you can support playful confidence-building at home:
                </p>
                <p>
                  🏡 Say "Yes!" more than "No!" Set safe boundaries but let children explore freely within them. Celebrate the process, not just the outcome. Ask "What are you making?" instead of "What is it supposed to be?" These simple shifts create enormous confidence! 🌟
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t-2 border-dashed border-gray-200">
                {['🎨 Arts', '🧠 Development', '💪 Confidence', '🎭 Play', '👧 Kids', '🌟 Learning'].map((tag, i) => (
                  <span key={i} className="bg-kidYellow/30 font-baloo text-kidPurple font-bold text-sm px-3 py-1 rounded-full hover:bg-kidYellow transition-colors cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Author box */}
              <div className="mt-8 bg-gradient-to-r from-kidPink/10 to-kidPurple/10 rounded-3xl p-6 border-2 border-kidPink/30 flex gap-4 items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-kidPink to-kidPurple rounded-full flex items-center justify-center text-3xl shadow-lg shrink-0">👩‍🎨</div>
                <div>
                  <h4 className="font-fredoka text-xl text-kidPurple">Emma Wilson</h4>
                  <p className="font-baloo text-kidPink text-sm mb-2">Painting & Arts Teacher at Kidoria</p>
                  <p className="font-nunito text-gray-600 text-sm">Emma has been inspiring young artists for 5 years! She believes every child is a natural creative genius just waiting to be discovered! 🎨✨</p>
                </div>
              </div>

              {/* Comments */}
              <div className="mt-10">
                <h3 className="font-fredoka text-2xl text-kidPurple mb-6">💬 Leave a Comment!</h3>
                <div className="space-y-3">
                  <input type="text" placeholder="Your name 👤" className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 font-baloo text-sm outline-none focus:border-kidPurple transition-colors" />
                  <input type="email" placeholder="Your email 📧" className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 font-baloo text-sm outline-none focus:border-kidPurple transition-colors" />
                  <textarea placeholder="Write your wonderful comment here! 💬" rows={4} className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 font-baloo text-sm outline-none focus:border-kidPurple transition-colors resize-none" />
                  <button className="bg-gradient-to-r from-kidPurple to-kidPink text-white font-fredoka text-lg px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform">
                    🚀 Post Comment!
                  </button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-gradient-to-br from-kidYellow/20 to-kidOrange/20 rounded-3xl p-6 border-2 border-kidYellow">
                <h4 className="font-fredoka text-xl text-kidPurple mb-4">🔍 Search</h4>
                <div className="flex gap-2">
                  <input type="text" placeholder="Search posts..." className="flex-1 border-2 border-kidYellow rounded-xl px-3 py-2 font-baloo text-sm outline-none" />
                  <button className="bg-kidPurple text-white px-4 rounded-xl font-fredoka text-sm">Go!</button>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-kidPink/30">
                <h4 className="font-fredoka text-xl text-kidPurple mb-4">📰 Related Posts</h4>
                <div className="space-y-4">
                  {relatedPosts.map((post, i) => (
                    <div key={i} className="flex gap-3 items-start hover:bg-gray-50 rounded-2xl p-2 transition-colors cursor-pointer">
                      <span className="text-3xl">{post.emoji}</span>
                      <div>
                        <p className="font-baloo font-bold text-gray-700 text-sm leading-tight">{post.title}</p>
                        <p className="font-baloo text-gray-400 text-xs">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-kidPurple to-kidPink rounded-3xl p-6 text-white text-center">
                <div className="text-4xl mb-3 animate-bounce-slow">🌟</div>
                <h4 className="font-fredoka text-xl mb-2">Join Kidoria!</h4>
                <p className="font-nunito text-white/80 text-sm mb-4">Give your child the most amazing learning experience!</p>
                <Link to="/pages/pricing" className="block bg-white text-kidPurple font-fredoka py-2 rounded-full hover:bg-kidYellow transition-colors text-sm">
                  🚀 Enroll Now!
                </Link>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-kidBlue/30">
                <h4 className="font-fredoka text-xl text-kidPurple mb-4">🏷️ Categories</h4>
                <div className="space-y-2">
                  {[['🎨 Arts & Crafts', 12], ['🔢 Mathematics', 8], ['🌿 Science', 6], ['🎵 Music', 9], ['📚 Reading', 11]].map(([cat, count], i) => (
                    <div key={i} className="flex justify-between items-center font-baloo text-sm text-gray-600 hover:text-kidPurple cursor-pointer py-1 border-b border-dashed border-gray-100 last:border-0">
                      <span>{cat}</span>
                      <span className="bg-kidYellow/30 px-2 rounded-full text-xs">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
