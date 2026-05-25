import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const posts = [
  { emoji: '🎨', category: 'Arts & Crafts', title: 'How Play Builds Confidence in Young Children', excerpt: 'Discover how creative play transforms shy little ones into confident superstars! Our art teacher shares amazing insights...', date: 'Jan 15, 2026', author: 'Emma Wilson', readTime: '5 min read', color: 'border-kidPink' },
  { emoji: '🔢', category: 'Mathematics', title: '10 Fun Ways to Make Math Exciting for Kids', excerpt: 'Numbers don\'t have to be boring! Here are 10 super fun games and activities to make your child fall in love with math!', date: 'Jan 22, 2026', author: 'Daniel Smith', readTime: '7 min read', color: 'border-kidBlue' },
  { emoji: '🌿', category: 'Science', title: 'Outdoor Learning Adventures for Little Scientists', excerpt: 'Take learning outside! Nature is the best classroom for curious little minds who love to explore and discover!', date: 'Feb 3, 2026', author: 'Michael Lee', readTime: '4 min read', color: 'border-kidGreen' },
  { emoji: '🎵', category: 'Music', title: 'Why Every Child Should Learn Music from Early Age', excerpt: 'Music education does so much more than teach songs — it builds brain power, coordination, and emotional intelligence!', date: 'Feb 10, 2026', author: 'Sophia Martinez', readTime: '6 min read', color: 'border-kidPurple' },
  { emoji: '📚', category: 'Reading', title: 'Magical Storytelling Techniques for Bedtime', excerpt: 'Transform bedtime into a magical adventure! Our top storytelling tips that kids absolutely love every single night!', date: 'Feb 18, 2026', author: 'Emily Carter', readTime: '5 min read', color: 'border-kidYellow' },
  { emoji: '🤸', category: 'Physical Ed', title: 'Active Play: Building Strong Bodies & Minds', excerpt: 'Physical activity isn\'t just about fitness — it\'s about building confidence, teamwork, and a love for movement!', date: 'Mar 5, 2026', author: 'James Anderson', readTime: '4 min read', color: 'border-kidOrange' },
]

const categories = ['All 📚', 'Arts 🎨', 'Math 🔢', 'Science 🌿', 'Music 🎵', 'Reading 📖', 'Sports 🤸']

export default function Blog() {
  const [activeCategory, setActiveCategory] = React.useState('All 📚')

  return (
    <div>
      <PageHero title="Our Blog" subtitle="Stories, tips & fun ideas for parents and teachers!" emoji="📝" bg="bg-gradient-to-r from-kidBlue to-kidTeal" />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-baloo font-bold px-5 py-2 rounded-full transition-all duration-300 hover:scale-110 text-sm ${
                  activeCategory === cat
                    ? 'bg-kidPurple text-white shadow-lg scale-110'
                    : 'bg-gray-100 text-gray-700 hover:bg-kidYellow hover:text-kidPurple'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <article key={i} className={`bg-white rounded-3xl shadow-xl border-4 ${post.color} overflow-hidden group hover:scale-105 hover:-rotate-1 transition-all duration-300`}>
                {/* Card header */}
                <div className="h-44 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-7xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-kidYellow/20 to-kidPink/20" />
                  <span className="relative z-10 group-hover:animate-wiggle inline-block">{post.emoji}</span>
                  <span className="absolute top-3 left-3 bg-white font-baloo font-bold text-xs text-kidPurple px-3 py-1 rounded-full shadow-md">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-gray-400 font-baloo text-xs mb-3">
                    <span>📅 {post.date}</span>
                    <span>⏱️ {post.readTime}</span>
                  </div>
                  <h3 className="font-fredoka text-xl text-kidPurple mb-3 leading-tight group-hover:text-kidPink transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-nunito text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">👩‍🏫</span>
                      <span className="font-baloo text-gray-500 text-xs">{post.author}</span>
                    </div>
                    <Link to="/pages/single-post" className="font-baloo font-bold text-kidPurple hover:text-kidPink text-sm flex items-center gap-1 transition-colors">
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-3 mt-12">
            {[1, 2, 3].map(n => (
              <button key={n} className={`w-10 h-10 rounded-full font-fredoka text-sm transition-all duration-300 hover:scale-110 ${
                n === 1 ? 'bg-kidPurple text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-kidYellow'
              }`}>
                {n}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
