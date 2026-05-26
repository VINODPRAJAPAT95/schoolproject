import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';

const pagesDropdown = [
  { label: 'Pre Nursery', path: '/pages/Pre-Nursery' },
  { label: 'Nursery', path: '/pages/Nursery' },
  { label: 'KG1', path: '/pages/KG1' },
  { label: 'KG2', path: '/pages/KG2' },
];

const navLinks = [
  { label: 'Home', path: '/', emoji: '🏠' },
  { label: 'About', path: '/about', emoji: '💛' },
  { label: 'Gallery', path: '/gallery', emoji: '🖼️' },
  { label: 'Contact', path: '/contact', emoji: '📞' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);

  const location = useLocation();

  /* Navbar hide/show on scroll */
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Shadow effect
      setScrolled(currentScrollY > 50);

      // Always show at top
      if (currentScrollY < 50) {
        setShowNavbar(true);
      }

      // Hide when scrolling down
      else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      }

      // Show when scrolling up
      else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close menu on route change */
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobilePagesOpen(false);
  }, [location]);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      {/* ═══════════════ NAVBAR ═══════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[9999]
                    transition-all duration-500
                    ${
                      showNavbar
                        ? 'translate-y-0'
                        : '-translate-y-full'
                    }
                    ${
                      scrolled
                        ? 'bg-white/95 backdrop-blur-xl shadow-xl'
                        : 'bg-transparent'
                    }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center h-20 sm:h-24 lg:h-28">

          {/* ───────── LOGO ───────── */}
          <Link
            to="/"
            className="flex items-center group flex-shrink-0 mr-auto"
          >
            <div className="relative flex items-center">

              <img
                src={logo}
                alt="school logo"
                className="h-12 sm:h-16 lg:h-24 w-auto
                           max-w-[160px] sm:max-w-[220px]
                           lg:max-w-[320px] xl:max-w-[400px]
                           object-contain drop-shadow-lg
                           transition duration-300
                           group-hover:scale-105"
              />

              <div
                className="absolute inset-0 rounded-2xl
                           bg-yellow-300/20 blur-2xl -z-10
                           group-hover:scale-110
                           transition duration-300"
              />
            </div>
          </Link>

          {/* ══════════ DESKTOP NAVIGATION ══════════ */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 ml-4">

            {/* Main Links */}
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`font-fredoka font-bold
                            px-5 py-2.5 rounded-full
                            text-base xl:text-lg
                            transition-all duration-300
                            hover:scale-105 whitespace-nowrap
                            ${
                              location.pathname === path
                                ? 'bg-kidPurple text-white shadow-lg'
                                : 'text-gray-700 hover:bg-kidYellow hover:text-kidPurple'
                            }`}
              >
                {label}
              </Link>
            ))}

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`font-fredoka font-bold
                            px-5 py-2.5 rounded-full
                            text-base xl:text-lg
                            transition-all duration-300
                            hover:scale-105
                            flex items-center gap-1
                            whitespace-nowrap
                            ${
                              dropdownOpen
                                ? 'bg-kidBlue text-white shadow-lg'
                                : 'text-gray-700 hover:bg-kidYellow hover:text-kidPurple'
                            }`}
              >
                Programmes

                <span
                  className={`transition-transform duration-300 text-xs ${
                    dropdownOpen ? 'rotate-180' : ''
                  }`}
                >
                  ▾
                </span>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-3 w-56
                            bg-white rounded-3xl shadow-2xl
                            border-2 border-kidYellow
                            overflow-hidden z-50
                            transition-all duration-300
                            ${
                              dropdownOpen
                                ? 'opacity-100 translate-y-0 visible'
                                : 'opacity-0 -translate-y-4 invisible'
                            }`}
              >
                {pagesDropdown.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    className="flex items-center gap-3
                               px-5 py-3.5
                               font-fredoka font-bold
                               text-gray-700
                               hover:bg-gradient-to-r
                               hover:from-kidYellow
                               hover:to-kidOrange
                               hover:text-white
                               transition-all
                               border-b border-yellow-100
                               last:border-none"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span>{item.emoji}</span>

                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button */}
<a
  href="/contact#contact"
  className="ml-2 bg-gradient-to-r
             from-kidBlue to-kidPurple
             text-white font-fredoka
             px-6 py-2.5 rounded-full
             shadow-xl hover:scale-105
             hover:shadow-2xl
             transition-all duration-300
             text-base xl:text-lg"
>
  🎓 Get Started
</a>
          </div>

          {/* ══════════ MOBILE RIGHT SIDE ══════════ */}
          <div className="lg:hidden flex items-center gap-2.5 ml-3">

            {/* Mobile CTA */}
            <a
  href="/contact#contact"
  className="bg-gradient-to-r
             from-kidBlue to-kidPurple
             text-white font-fredoka
             font-bold px-4 py-2
             rounded-full shadow-md
             text-sm whitespace-nowrap
             active:scale-95 transition-transform"
>
  Get Started
</a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className={`w-10 h-10
                          flex flex-col justify-center items-center
                          gap-[5px] rounded-2xl
                          transition-all duration-300
                          ${
                            menuOpen
                              ? 'bg-kidPurple'
                              : 'bg-kidYellow/60'
                          }`}
            >

              <span
                className={`block h-[2.5px] rounded-full
                            transition-all duration-300
                            ${
                              menuOpen
                                ? 'rotate-45 translate-y-[7px] bg-white w-5'
                                : 'bg-kidPurple w-5'
                            }`}
              />

              <span
                className={`block h-[2.5px] rounded-full
                            bg-kidPurple w-4
                            transition-all duration-300
                            ${
                              menuOpen
                                ? 'opacity-0 scale-x-0'
                                : ''
                            }`}
              />

              <span
                className={`block h-[2.5px] rounded-full
                            transition-all duration-300
                            ${
                              menuOpen
                                ? '-rotate-45 -translate-y-[7px] bg-white w-5'
                                : 'bg-kidPurple w-5'
                            }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ═══════════════ MOBILE MENU ═══════════════ */}
      <div
        className={`lg:hidden fixed inset-0 z-[9998]
                    transition-all duration-300
                    ${
                      menuOpen
                        ? 'visible'
                        : 'invisible'
                    }`}
      >

        {/* Backdrop */}
        <div
          className={`absolute inset-0
                      bg-black/40 backdrop-blur-sm
                      transition-opacity duration-300
                      ${
                        menuOpen
                          ? 'opacity-100'
                          : 'opacity-0'
                      }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide Menu */}
        <div
          className={`absolute top-0 left-0 right-0
                      bg-white rounded-b-[2rem]
                      shadow-2xl
                      transition-transform duration-500 ease-out
                      flex flex-col
                      ${
                        menuOpen
                          ? 'translate-y-0'
                          : '-translate-y-full'
                      }`}
          style={{
            height: '100dvh',
          }}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between
                          px-5 py-4
                          border-b border-gray-100">
          </div>
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-4 py-4">

            {/* Nav Links */}
            <div className="grid grid-cols-2 gap-3 mb-4">

              {navLinks.map(({ label, path, emoji }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={`flex flex-col items-center justify-center
                              gap-2 rounded-2xl py-5 px-3
                              font-fredoka font-bold text-base
                              transition-all duration-200
                              ${
                                location.pathname === path
                                  ? 'bg-kidPurple text-white shadow-md'
                                  : 'bg-gray-50 text-gray-700 hover:bg-kidYellow/40 hover:text-kidPurple'
                              }`}
                >
                  <span className="text-2xl">{emoji}</span>

                  <span>{label}</span>
                </Link>
              ))}
            </div>

            {/* Accordion */}
            <div className="rounded-2xl border border-kidYellow/60 overflow-hidden mb-4">

              <button
                onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
                className="w-full flex items-center justify-between
                           px-4 py-4
                           font-fredoka font-bold
                           bg-kidYellow/20 text-gray-700"
              >
                <span className="flex items-center gap-3">
                  <span className="text-xl">📚</span>
                  Our Programmes
                </span>

                <span
                  className={`transition-transform duration-300 ${
                    mobilePagesOpen ? 'rotate-180' : ''
                  }`}
                >
                  ▾
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300
                            ${
                              mobilePagesOpen
                                ? 'max-h-[500px] opacity-100'
                                : 'max-h-0 opacity-0'
                            }`}
              >
                <div className="grid grid-cols-2 gap-2 p-2 bg-white">

                  {pagesDropdown.map((item, i) => (
                    <Link
                      key={i}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-2
                                  px-3 py-3 rounded-xl
                                  font-fredoka font-bold text-sm
                                  transition-all
                                  ${
                                    location.pathname === item.path
                                      ? 'bg-kidOrange/20 text-kidOrange'
                                      : 'bg-gray-50 text-gray-600 hover:bg-kidYellow/30 hover:text-kidPurple'
                                  }`}
                    >
                      <span className="text-lg">{item.emoji}</span>

                      <span className="truncate">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div
              className="p-5 rounded-3xl
                         border border-kidBlue/20
                         bg-gradient-to-br
                         from-kidBlue/10 to-kidPurple/10"
            >

              <p className="text-center text-gray-600 font-fredoka text-sm mb-4">
                Ready to join our family? 🌟
              </p>

             <a
  href="/contact#contact"
  onClick={() => setMenuOpen(false)}
  className="block w-full text-center
             py-4 rounded-2xl
             bg-gradient-to-r
             from-kidBlue to-kidPurple
             text-white font-fredoka
             font-bold text-lg
             shadow-lg transition-all"
>
  🎓 Get Started Today
</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}