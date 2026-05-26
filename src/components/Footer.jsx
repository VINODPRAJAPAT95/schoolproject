import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const floatingEmojis = [
  '🌟',
  '🎈',
  '🦋',
  '🌈',
  '🎨',
  '⭐',
  '🎪',
  '🌸',
  '🦄',
  '🎠',
]

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #FEF9C3 10%, #FEF08A 35%, #FDE68A 60%, #FCD34D 100%)',
      }}
    >
      {/* Floating Emojis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingEmojis.map((emoji, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-10 animate-float"
            style={{
              left: `${8 + i * 9.2}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Stars */}
      <div className="absolute inset-0 star-bg opacity-20 pointer-events-none" />

      <div className="relative z-10 py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Main Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

            {/* Brand */}
            <div>

              {/* Logo */}
              <div className="flex items-center justify-center sm:justify-start mb-6">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 animate-float">
                  <img
                    src={logo}
                    alt="Pansies & Poppies Logo"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-4 mb-8">

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white hover:bg-pink-100 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                    alt="Instagram"
                    className="w-6 h-6"
                  />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white hover:bg-blue-100 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                    alt="Facebook"
                    className="w-6 h-6"
                  />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/911234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white hover:bg-green-100 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                    alt="WhatsApp"
                    className="w-6 h-6"
                  />
                </a>

              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-fredoka text-xl text-kidPurple mb-5 flex items-center gap-2">
                🔗 Quick Links
              </h4>

              {[
                { label: 'Home 🏠', path: '/' },
                { label: 'About Us 💫', path: '/about' },
                { label: 'Gallery 📸', path: '/gallery' },
                { label: 'Programs 🎓', path: '/programs' },
                { label: 'Contact 📞', path: '/contact' },
              ].map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  className="block font-baloo text-kidPurple/80 hover:text-pink-600 transition-all duration-300 mb-3 hover:translate-x-2 hover:scale-105 transform text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Features */}
            <div>
              <h4 className="font-fredoka text-xl text-kidPurple mb-5 flex items-center gap-2">
                ✨ Features
              </h4>

              {[
                'Smart Classrooms 🖥️',
                'Activity Learning 🎨',
                'Safe Transport 🚌',
                'Healthy Meals 🍎',
                'Kids Playground 🛝',
                'Parent Dashboard 👨‍👩‍👧',
              ].map((item, i) => (
                <div
                  key={i}
                  className="font-baloo text-kidPurple/80 hover:text-pink-600 transition-all duration-300 mb-3 text-sm hover:translate-x-2 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-fredoka text-xl text-kidPurple mb-5">
                📬 Get In Touch
              </h4>

              {[
                { icon: '📱', text: '+1 234 567 890' },
                { icon: '📧', text: 'pansiesandpoppies@gmail.com' },
                { icon: '📍', text: '123 Sunshine Street' },
                { icon: '🕐', text: '8:00 AM – 4:00 PM' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 mb-3 font-baloo text-kidPurple/80 text-sm hover:text-pink-600 transition-colors"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}

              {/* Newsletter */}
              <div className="mt-6">
                <p className="font-fredoka text-kidPurple text-sm mb-3">
                  📰 Newsletter
                </p>

                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email ✉️"
                    className="flex-1 px-4 py-3 rounded-2xl font-baloo text-xs text-kidPurple outline-none bg-white shadow-lg"
                  />

                  <button className="bg-kidPurple text-white font-fredoka px-4 py-3 rounded-2xl text-xs hover:scale-110 transition-transform font-bold shadow-lg hover:bg-purple-900">
                    Go 🚀
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom */}
          <div className="border-t-2 border-dashed border-kidPurple/20 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">

              <p className="font-baloo text-kidPurple/80 text-sm text-center md:text-left">
                🌈 © 2025 Pansies & Poppies International Pre-School. Made with ❤️ for amazing little learners!
              </p>

              <div className="flex gap-5 flex-wrap justify-center">
                {[
                  'Privacy Policy 🔒',
                  'Terms 📜',
                  'Cookies 🍪',
                  'Support 💬',
                ].map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="font-baloo text-kidPurple/70 hover:text-pink-600 text-xs transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}