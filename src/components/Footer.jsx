import React from 'react'
import { Link } from 'react-router-dom'

const floatingEmojis = ['🌟','🎈','🦋','🌈','🎨','⭐','🎪','🌸','🦄','🎠']

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{background: 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 35%, #06B6D4 65%, #22C55E 100%)'}}>
      {/* Wavy top border */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path fill="white" d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1350,20 1440,40 L1440,0 L0,0 Z"/>
        </svg>
      </div>

      {/* Floating cartoon emojis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingEmojis.map((emoji, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-20 animate-float"
            style={{
              left: `${8 + i * 9.2}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + (i % 3)}s`
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Stars background */}
      <div className="absolute inset-0 star-bg opacity-30 pointer-events-none" />

      {/* Cartoon kids illustrations SVG background */}
      <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="60" r="40" fill="white"/>
          <circle cx="100" cy="60" r="30" fill="#FFD93D"/>
          <circle cx="88" cy="55" r="5" fill="#333"/>
          <circle cx="112" cy="55" r="5" fill="#333"/>
          <path d="M90 72 Q100 82 110 72" stroke="#333" strokeWidth="3" fill="none"/>
          <rect x="60" y="100" width="80" height="80" rx="10" fill="white" opacity="0.5"/>
          <line x1="100" y1="100" x2="100" y2="180" stroke="white" strokeWidth="3"/>
          <line x1="60" y1="130" x2="100" y2="115" stroke="white" strokeWidth="3"/>
          <line x1="140" y1="130" x2="100" y2="115" stroke="white" strokeWidth="3"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="60" r="40" fill="white"/>
          <circle cx="100" cy="60" r="30" fill="#FF4EA1"/>
          <circle cx="88" cy="55" r="5" fill="#333"/>
          <circle cx="112" cy="55" r="5" fill="#333"/>
          <path d="M90 72 Q100 82 110 72" stroke="#333" strokeWidth="3" fill="none"/>
          <ellipse cx="76" cy="48" rx="12" ry="8" fill="#FF4EA1" opacity="0.7"/>
          <ellipse cx="124" cy="48" rx="12" ry="8" fill="#FF4EA1" opacity="0.7"/>
        </svg>
      </div>

      <div className="relative z-10 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-xl animate-wiggle">🌟</div>
                <div>
                  <span className="font-fredoka text-3xl text-white">Pansies</span>
                  <span className="font-fredoka text-3xl text-kidYellow">& Poppie</span>
                </div>
              </div>
              <p className="font-nunito text-white/80 text-sm leading-relaxed mb-4">
                🎉 Where every child becomes a superstar learner! We make education fun, colorful, and magical for all little explorers! 🚀
              </p>
              <div className="flex gap-3">
                {['📘','🐦','📺','📷'].map((icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-lg transition-all duration-300 hover:scale-125 hover:-rotate-12">
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-fredoka text-xl text-kidYellow mb-4 flex items-center gap-2">🔗 Quick Links</h4>
              {[
                { label: 'Home 🏠', path: '/' },
                { label: 'About Us 💫', path: '/about' },
                { label: 'Teachers 👩‍🏫', path: '/pages/teachers' },
                { label: 'Contact 📞', path: '/contact' },
              ].map((item, i) => (
                <Link key={i} to={item.path} className="block font-baloo text-white/80 hover:text-kidYellow transition-colors duration-200 mb-2 hover:translate-x-2 transform text-sm">
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Support */}
            <div>
              <h4 className="font-fredoka text-xl text-kidYellow mb-4 flex items-center gap-2">💡 Support</h4>
              {[
                { label: 'Testimonials ⭐', path: '/pages/testimonials' },
                { label: 'Blog 📝', path: '/pages/blog' },
                { label: 'Pricing 💰', path: '/pages/pricing' },
                { label: 'FAQ 🤔', path: '/pages/teachers' },
              ].map((item, i) => (
                <Link key={i} to={item.path} className="block font-baloo text-white/80 hover:text-kidYellow transition-colors duration-200 mb-2 hover:translate-x-2 transform text-sm">
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-fredoka text-xl text-kidYellow mb-4">📬 Get In Touch</h4>
              {[
                { icon: '📱', text: '+1 234 567 890' },
                { icon: '📧', text: 'pansiesandpoppies@gmail.com' },
                { icon: '📍', text: '123 Sunshine Street' },
                { icon: '🕐', text: '8:00 AM – 4:00 PM' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 mb-2 font-baloo text-white/80 text-sm">
                  <span className="text-base">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
              {/* Newsletter */}
              <div className="mt-4">
                <p className="font-fredoka text-white/90 text-sm mb-2">📰 Newsletter</p>
                <div className="flex gap-1">
                  <input
                    type="email"
                    placeholder="Your email ✉️"
                    className="flex-1 px-3 py-2 rounded-xl font-baloo text-xs text-gray-700 outline-none bg-white/90"
                  />
                  <button className="bg-kidYellow text-kidPurple font-fredoka px-3 py-2 rounded-xl text-xs hover:scale-110 transition-transform font-bold">
                    Go!
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-dashed border-white/30 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-baloo text-white/70 text-sm">
                🌈 © 2025 Pansies & Poppies International Pre-School. Made with ❤️ for all amazing little learners!
              </p>
              <div className="flex gap-4">
                {['Privacy Policy 🔒', 'Terms 📜', 'Cookies 🍪'].map((item, i) => (
                  <a key={i} href="#" className="font-baloo text-white/60 hover:text-kidYellow text-xs transition-colors">{item}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
