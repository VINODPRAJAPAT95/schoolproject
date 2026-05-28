import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';

const pagesDropdown = [
  { label: 'Pre Nursery', path: '/pages/Pre-Nursery', emoji: '🌱', color: 'from-green-400 to-emerald-500' },
  { label: 'Nursery',     path: '/pages/Nursery',     emoji: '🌼', color: 'from-yellow-400 to-orange-400' },
  { label: 'KG1',         path: '/pages/KG1',         emoji: '⭐', color: 'from-blue-400 to-cyan-400' },
  { label: 'KG2',         path: '/pages/KG2',         emoji: '🚀', color: 'from-purple-400 to-pink-400' },
];

const navLinks = [
  { label: 'Home',    path: '/',        emoji: '🏠' },
  { label: 'About',   path: '/about',   emoji: '💛' },
  { label: 'Gallery', path: '/gallery', emoji: '🖼️' },
  { label: 'Contact', path: '/contact', emoji: '📞' },
];

/* ─── tiny floating bubble used as bg decoration ─── */
const Bubble = ({ style }) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      background: 'radial-gradient(circle, rgba(255,220,50,.35) 0%, transparent 70%)',
      ...style,
    }}
  />
);

export default function Navbar() {
  const [scrolled,        setScrolled]        = useState(false);
  const [showNavbar,      setShowNavbar]       = useState(true);
  const [menuOpen,        setMenuOpen]         = useState(false);
  const [dropdownOpen,    setDropdownOpen]     = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen]  = useState(false);
  const [activeLink,      setActiveLink]       = useState(null);
  const lastScrollY = useRef(0);
  const location    = useLocation();

  /* ── scroll hide / show ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      if (y < 50)               setShowNavbar(true);
      else if (y > lastScrollY.current) setShowNavbar(false);
      else                      setShowNavbar(true);
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── close menu on route change ── */
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobilePagesOpen(false);
  }, [location]);

  /* ── lock body scroll ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* ══════════════════════ NAVBAR BAR ══════════════════════ */}
      <nav
        style={{
          transform: showNavbar ? 'translateY(0)' : 'translateY(-110%)',
          transition: 'transform 0.45s cubic-bezier(.4,0,.2,1), background 0.3s, box-shadow 0.3s',
        }}
        className={`fixed top-0 left-0 right-0 z-[9999]
          ${scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,.10)]'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center h-[80px] sm:h-[90px] lg:h-[110px] xl:h-[120px]">

          {/* ── LOGO ── */}
          <Link to="/" className="flex items-center group flex-shrink-0 mr-auto">
            <img
              src={logo}
              alt="school logo"
className="h-20 sm:h-24 lg:h-32 xl:h-36
             w-auto
             max-w-[260px] sm:max-w-[340px] lg:max-w-[520px]
             object-contain drop-shadow-md
             transition-transform duration-300
             group-hover:scale-105"
            />
          </Link>

          {/* ══════════ DESKTOP NAV ══════════ */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 ml-4">
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`font-fredoka font-bold px-5 py-2.5 rounded-full text-base xl:text-lg
                            transition-all duration-300 hover:scale-105 whitespace-nowrap
                            ${location.pathname === path
                              ? 'bg-kidPurple text-white shadow-lg'
                              : 'text-gray-700 hover:bg-kidYellow hover:text-kidPurple'}`}
              >
                {label}
              </Link>
            ))}

            {/* Programmes dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`font-fredoka font-bold px-5 py-2.5 rounded-full text-base xl:text-lg
                            transition-all duration-300 hover:scale-105 flex items-center gap-1.5 whitespace-nowrap
                            ${dropdownOpen
                              ? 'bg-kidBlue text-white shadow-lg'
                              : 'text-gray-700 hover:bg-kidYellow hover:text-kidPurple'}`}
              >
                Programmes
                <span className={`text-xs transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}>▾</span>
              </button>
              <div
                className={`absolute top-full left-0 mt-3 w-52 bg-white rounded-2xl shadow-2xl
                             border-2 border-kidYellow overflow-hidden z-50
                             transition-all duration-300 origin-top
                             ${dropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
              >
                {pagesDropdown.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    className="flex items-center gap-3 px-5 py-3.5 font-fredoka font-bold text-gray-700
                               hover:bg-gradient-to-r hover:from-kidYellow hover:to-kidOrange hover:text-white
                               transition-all border-b border-yellow-100 last:border-none"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span>{item.emoji}</span>{item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <a
              href="/contact#contact"
              className="ml-2 bg-gradient-to-r from-kidBlue to-kidPurple text-white font-fredoka
                         px-6 py-2.5 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl
                         transition-all duration-300 text-base xl:text-lg whitespace-nowrap"
            >
              🎓 Get Started
            </a>
          </div>

          {/* ══════════ MOBILE RIGHT ══════════ */}
          <div className="lg:hidden flex items-center gap-2.5 ml-3">
            <a
              href="/contact#contact"
              className="bg-gradient-to-r from-kidBlue to-kidPurple text-white font-fredoka
                         font-bold px-4 py-2 rounded-full shadow-md text-sm whitespace-nowrap
                         active:scale-95 transition-transform"
            >
              Get Started
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className={`w-10 h-10 flex flex-col justify-center items-center gap-[5px] rounded-2xl
                          transition-all duration-300
                          ${menuOpen ? 'bg-kidPurple' : 'bg-kidYellow/60'}`}
            >
              <span className={`block h-[2.5px] rounded-full transition-all duration-300
                ${menuOpen ? 'rotate-45 translate-y-[7px] bg-white w-5' : 'bg-kidPurple w-5'}`} />
              <span className={`block h-[2.5px] rounded-full bg-kidPurple w-4 transition-all duration-300
                ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-[2.5px] rounded-full transition-all duration-300
                ${menuOpen ? '-rotate-45 -translate-y-[7px] bg-white w-5' : 'bg-kidPurple w-5'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* ══════════════════════ MOBILE FULL-SCREEN MENU ══════════════════════ */}
      <div
        className={`lg:hidden fixed inset-0 z-[9998] transition-all duration-300
                    ${menuOpen ? 'visible' : 'invisible pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300
                      ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />

        {/* ── Slide panel ── */}
        <div
          // style={{
          //   transform: menuOpen ? 'translateY(0)' : 'translateY(-105%)',
          //   transition: 'transform 0.5s cubic-bezier(.4,0,.2,1)',
          // }}
          className="absolute top-0 left-0 right-0 bg-white overflow-hidden"
          /* fixed full-screen height */
          style={{
            transform: menuOpen ? 'translateY(0)' : 'translateY(-105%)',
            transition: 'transform 0.5s cubic-bezier(.4,0,.2,1)',
            height: '100dvh',
          }}
        >
          {/* ── colourful top-strip ── */}
          <div className="h-1.5 w-full bg-gradient-to-r from-kidYellow via-kidOrange to-kidPurple" />

          {/* ── decorative bubbles ── */}
          <Bubble style={{ width: 220, height: 220, top: -60, right: -60, opacity: 0.6 }} />
          <Bubble style={{ width: 160, height: 160, bottom: 120, left: -50, opacity: 0.4 }} />

          {/* ── Header row inside panel ── */}
          <div className="flex items-center justify-between px-5 pt-4 pb-3">
           
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center
                          transition-all"
            >
              
            </button>
          </div>

          {/* ── Scrollable body ── */}
          <div className="overflow-y-auto px-4 pb-8"
               style={{ maxHeight: 'calc(100dvh - 72px)' }}>

            {/* ── greeting pill ── */}
            <div className="flex items-center gap-2 bg-kidYellow/25 rounded-2xl px-4 py-3 mb-5">
              <span className="text-2xl">👋</span>
              <div>
                <p className="font-fredoka font-bold text-gray-800 text-sm leading-tight">Welcome!</p>
                <p className="font-fredoka text-gray-500 text-xs">Where do you want to go?</p>
              </div>
            </div>

            {/* ── Nav grid (2 col) ── */}
            {/* <p className="font-fredoka font-bold text-xs text-gray-400 uppercase tracking-widest mb-2 px-1">
              Navigation
            </p> */}
            <div className="grid grid-cols-2 gap-2.5 mb-5">
              {navLinks.map(({ label, path, emoji }, idx) => {
                const active = location.pathname === path;
                return (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    style={{ animationDelay: `${idx * 60}ms` }}
                    className={`relative flex items-center gap-3 rounded-2xl px-4 py-4
                                font-fredoka font-bold text-[15px] overflow-hidden
                                transition-all duration-200 active:scale-95
                                ${active
                                  ? 'bg-kidPurple text-white shadow-lg shadow-kidPurple/30'
                                  : 'bg-gray-50 text-gray-700 hover:bg-kidYellow/30'
                                }`}
                  >
                    {active && (
                      <span className="absolute inset-0 bg-white/10 rounded-2xl" />
                    )}
                    <span className="text-xl flex-shrink-0">{emoji}</span>
                    <span className="truncate">{label}</span>
                    {active && (
                      <span className="ml-auto text-white/70 text-xs">●</span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* ── Programmes accordion ── */}
            <p className="font-fredoka font-bold text-xs text-gray-400 uppercase tracking-widest mb-2 px-1">
              Programmes
            </p>
            <div className="rounded-2xl border-2 border-kidYellow/50 overflow-hidden mb-5 bg-white shadow-sm">
              <button
                onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
                className="w-full flex items-center justify-between px-4 py-4
                           font-fredoka font-bold bg-kidYellow/15 text-gray-800"
              >
                <span className="flex items-center gap-3">
                  <span className="text-xl">📚</span>
                  Our Programmes
                </span>
                <span className={`transition-transform duration-300 text-kidPurple
                                  ${mobilePagesOpen ? 'rotate-180' : ''}`}>
                  ▾
                </span>
              </button>

              <div
                style={{
                  maxHeight: mobilePagesOpen ? '400px' : '0',
                  opacity: mobilePagesOpen ? 1 : 0,
                  transition: 'max-height 0.4s cubic-bezier(.4,0,.2,1), opacity 0.3s',
                  overflow: 'hidden',
                }}
              >
                <div className="grid grid-cols-2 gap-2 p-3 bg-gray-50/50">
                  {pagesDropdown.map((item, i) => {
                    const active = location.pathname === item.path;
                    return (
                      <Link
                        key={i}
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center gap-2.5 px-3 py-3.5 rounded-xl
                                    font-fredoka font-bold text-sm transition-all active:scale-95
                                    ${active
                                      ? `bg-gradient-to-br ${item.color} text-white shadow-md`
                                      : 'bg-white text-gray-600 hover:bg-kidYellow/20'
                                    }`}
                      >
                        <span className="text-lg flex-shrink-0">{item.emoji}</span>
                        <span className="truncate leading-tight">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ── CTA card ── */}
            <div className="relative overflow-hidden rounded-3xl p-5
                            bg-gradient-to-br from-kidBlue/10 via-white to-kidPurple/10
                            border border-kidPurple/15 shadow-sm">
              {/* small star decorations */}
              <span className="absolute top-3 right-5 text-2xl opacity-40">✨</span>
              <span className="absolute bottom-4 left-4 text-xl opacity-30">🌟</span>

              <p className="text-center font-fredoka font-bold text-gray-700 text-base mb-1">
                Ready to join our family?
              </p>
              <p className="text-center font-fredoka text-gray-400 text-xs mb-4">
                Enroll your child today!
              </p>

              <a
                href="/contact#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl
                           bg-gradient-to-r from-kidBlue to-kidPurple
                           text-white font-fredoka font-bold text-lg
                           shadow-lg shadow-kidPurple/30
                           active:scale-95 transition-transform"
              >
                🎓 Get Started Today
              </a>
            </div>

            {/* ── quick social / trust strip ── */}
            <div className="mt-4 flex items-center justify-center gap-4">
              {['🏆 Award Winning', '❤️ Trusted', '🎉 Fun Learning'].map((tag) => (
                <span key={tag}
                  className="font-fredoka text-[10px] text-gray-400 whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}