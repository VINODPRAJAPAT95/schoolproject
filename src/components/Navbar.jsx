import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';

const pagesDropdown = [
  { label: '💬 Testimonials', path: '/pages/testimonials' },
  { label: '📝 Blog', path: '/pages/blog' },
  { label: '💰 Pricing', path: '/pages/pricing' },
  { label: '❌ Error404', path: '/pages/error404' },
  { label: '📄 SinglePost', path: '/pages/SinglePost' },
];

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/97 backdrop-blur-xl shadow-xl py-0'
          : 'bg-transparent py-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center h-32">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center group flex-shrink-0 mr-auto"
        >
          <div className="relative flex items-center">
            <img
              src={logo}
              alt="Kidoria"
              className="h-32 md:h-36 w-auto max-w-[340px] xl:max-w-[420px] object-contain drop-shadow-xl group-hover:scale-105 transition duration-300"
            />

            <div className="absolute inset-0 rounded-2xl bg-yellow-300/20 blur-2xl -z-10 group-hover:scale-110 transition duration-300 pointer-events-none" />
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 flex-nowrap ml-4">

          {/* NAV LINKS */}
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`font-fredoka font-bold px-5 py-2.5 rounded-full text-base xl:text-lg transition-all duration-300 hover:scale-105 whitespace-nowrap ${
                location.pathname === path
                  ? 'bg-kidPurple text-white shadow-lg'
                  : 'text-gray-700 hover:bg-kidYellow hover:text-kidPurple'
              }`}
            >
              {label}
            </Link>
          ))}

          {/* GALLERY BUTTON */}
          <Link
            to="/gallery"
            className={`font-fredoka font-bold px-5 py-2.5 rounded-full text-base xl:text-lg transition-all duration-300 hover:scale-105 flex items-center gap-1.5 whitespace-nowrap ${
              location.pathname.startsWith('/gallery')
                ? 'bg-kidOrange text-white shadow-lg'
                : 'text-gray-700 hover:bg-kidYellow hover:text-kidPurple'
            }`}
          >
            <span className="text-base"></span>
            Gallery
          </Link>

          {/* PAGES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`font-fredoka font-bold px-5 py-2.5 rounded-full text-base xl:text-lg transition-all duration-300 hover:scale-105 flex items-center gap-1 whitespace-nowrap ${
                dropdownOpen
                  ? 'bg-kidBlue text-white shadow-lg'
                  : 'text-gray-700 hover:bg-kidYellow hover:text-kidPurple'
              }`}
            >
              programes

              <span
                className={`transition-transform duration-300 inline-block ${
                  dropdownOpen ? 'rotate-180' : ''
                }`}
              >
                ▾
              </span>
            </button>

            <div
              className={`absolute top-full left-0 mt-3 w-56 bg-white rounded-3xl shadow-2xl border-2 border-kidYellow overflow-hidden transition-all duration-300 z-50 ${
                dropdownOpen
                  ? 'opacity-100 translate-y-0 visible'
                  : 'opacity-0 -translate-y-4 invisible'
              }`}
            >
              {pagesDropdown.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  className="flex items-center gap-3 px-5 py-3.5 font-fredoka font-bold text-gray-700 hover:bg-gradient-to-r hover:from-kidYellow hover:to-kidOrange hover:text-white transition-all border-b border-yellow-100 last:border-none text-sm xl:text-base"
                  onClick={() => setDropdownOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA BUTTON */}
          <Link
            to="/pages/pricing"
            className="ml-2 bg-gradient-to-r from-kidBlue to-kidPurple text-white font-fredoka px-6 py-2.5 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 text-base xl:text-lg whitespace-nowrap"
          >
            🎓 Get Started
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden p-3 ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">

            <span
              className={`block w-7 h-0.5 bg-kidPurple transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />

            <span
              className={`block w-7 h-0.5 bg-kidPurple transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />

            <span
              className={`block w-7 h-0.5 bg-kidPurple transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />

          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/97 backdrop-blur-xl mx-4 my-3 rounded-3xl shadow-2xl border-4 border-kidYellow p-5 flex flex-col gap-2">

          {/* MOBILE LINKS */}
          {[
            { label: '🏠 Home', path: '/' },
            { label: '💛 About', path: '/about' },
            { label: '🖼️ Gallery', path: '/gallery' },
            { label: '📞 Contact', path: '/contact' },
          ].map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className="font-fredoka font-bold text-xl text-gray-700 hover:text-kidPurple px-5 py-3.5 rounded-2xl hover:bg-kidYellow/30 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          {/* MOBILE PAGES SECTION */}
          <div className="border-t-2 border-dashed border-kidYellow pt-4 mt-1">

            <button
              className="w-full flex items-center justify-between font-fredoka text-kidOrange px-4 pb-2 text-base uppercase tracking-wider font-bold"
              onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
            >
              <span>📄 Pages</span>

              <span
                className={`transition-transform duration-300 inline-block ${
                  mobilePagesOpen ? 'rotate-180' : ''
                }`}
              >
                ▾
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobilePagesOpen
                  ? 'max-h-80 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              {pagesDropdown.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  className="flex items-center gap-2 font-fredoka text-lg text-gray-600 hover:text-kidPurple px-6 py-2.5 rounded-2xl hover:bg-yellow-50 transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA BUTTON */}
          <Link
            to="/pages/pricing"
            className="mt-3 bg-gradient-to-r from-kidBlue to-kidPurple text-white font-fredoka py-4 rounded-3xl text-center text-xl shadow-lg hover:scale-[1.02] transition-transform"
            onClick={() => setMenuOpen(false)}
          >
            🎓 Get Started
          </Link>

        </div>
      </div>
    </nav>
  );
}