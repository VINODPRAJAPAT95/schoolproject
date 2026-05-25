import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setCount(c => (c + 1) % 5), 800)
    return () => clearInterval(t)
  }, [])
  const emojis = ['😅','🤔','😮','🙈','🎭']

  return (
    <div className="min-h-screen bg-gradient-to-br from-kidYellow via-kidOrange/30 to-kidPink/30 flex items-center justify-center relative overflow-hidden pt-20">
      {/* Floating elements */}
      {['⭐','🌟','💫','✨','🌈','🎈','🎉','🎊'].map((em, i) => (
        <div key={i} className="absolute text-3xl opacity-30 animate-float pointer-events-none"
          style={{ left:`${8+i*11}%`, top:`${15+(i%4)*18}%`, animationDelay:`${i*0.4}s` }}>{em}</div>
      ))}
      <div className="absolute inset-0 star-bg opacity-20" />

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* Big 404 */}
        <div className="relative inline-block mb-6">
          <div className="font-fredoka text-[180px] md:text-[220px] leading-none text-kidPurple opacity-10 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-9xl animate-bounce-slow">{emojis[count]}</span>
          </div>
        </div>

        <h1 className="font-fredoka text-5xl md:text-6xl text-kidPurple mb-4">
          Oops! Page <span className="text-kidPink">Lost in Space!</span> 🚀
        </h1>
        <p className="font-nunito text-gray-700 text-xl mb-8 leading-relaxed">
          🌟 Uh oh! It looks like this page went on an adventure without us! Don't worry though — let's get you back to the fun! 🎉
        </p>

        {/* Cartoon lost kid illustration */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-kidYellow inline-block">
            <svg viewBox="0 0 200 200" className="w-40 h-40" xmlns="http://www.w3.org/2000/svg">
              {/* Kid looking confused */}
              <circle cx="100" cy="80" r="45" fill="#FFDAB9"/>
              <ellipse cx="100" cy="45" rx="38" ry="20" fill="#8B4513"/>
              <circle cx="84" cy="75" r="7" fill="white"/>
              <circle cx="116" cy="75" r="7" fill="white"/>
              <circle cx="86" cy="75" r="4" fill="#333"/>
              <circle cx="118" cy="75" r="4" fill="#333"/>
              {/* Confused squiggles */}
              <path d="M90 95 Q95 90 100 95 Q105 100 110 95" stroke="#FF6B35" strokeWidth="2.5" fill="none"/>
              <text x="125" y="40" fontSize="20">❓</text>
              <text x="55" y="40" fontSize="20">❓</text>
              {/* Body */}
              <rect x="68" y="125" width="64" height="55" rx="12" fill="#7C3AED"/>
              <rect x="72" y="178" width="20" height="20" rx="8" fill="#4A90D9"/>
              <rect x="108" y="178" width="20" height="20" rx="8" fill="#4A90D9"/>
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/" className="bg-gradient-to-r from-kidPurple to-kidPink text-white font-fredoka text-xl px-8 py-4 rounded-full shadow-xl hover:scale-110 transition-transform">
            🏠 Go Home!
          </Link>
          <Link to="/contact" className="bg-white text-kidPurple font-fredoka text-xl px-8 py-4 rounded-full shadow-xl hover:scale-110 transition-transform border-4 border-kidPurple hover:bg-kidYellow">
            📞 Get Help!
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <p className="font-baloo text-gray-600 w-full mb-2">🔗 Quick Links:</p>
          {[
            { label: '👩‍🏫 Teachers', path: '/pages/teachers' },
            { label: '💰 Pricing', path: '/pages/pricing' },
            { label: '📝 Blog', path: '/pages/blog' },
            { label: '💫 About', path: '/about' },
          ].map((item, i) => (
            <Link key={i} to={item.path} className="bg-white/80 font-baloo font-bold text-kidPurple px-4 py-2 rounded-full text-sm hover:bg-kidYellow transition-colors hover:scale-105">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
