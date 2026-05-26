import React, { useState } from 'react'
import PageHero from '../components/PageHero'

const galleryItems = [
  { title: 'Classroom Activities', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800' },
  { title: 'Art & Craft', img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800' },
  { title: 'Festival Celebrations', img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800' },
  { title: 'Sports & Physical Activities', img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800' },
  { title: 'Annual Events', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800' },
  { title: 'Field Visits', img: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=800' },
  { title: 'Learning Through Play', img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800' },
]

function Cell({ item, index, rowSpan = 1, colSpan = 1, onOpen }) {
  return (
    <div
      className="relative overflow-hidden bg-gray-900 cursor-pointer group"
      style={{
        gridRow: rowSpan > 1 ? `span ${rowSpan}` : undefined,
        gridColumn: colSpan > 1 ? `span ${colSpan}` : undefined,
      }}
      onClick={() => onOpen(index)}
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 brightness-95"
      />
      {/* Hover overlay with title */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4">
        <span className="text-white font-fredoka text-xl drop-shadow-lg translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {item.title}
        </span>
      </div>
      {/* Expand icon on hover */}
      <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
        </svg>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  const prev = (e) => {
    e.stopPropagation()
    setLightbox((lightbox - 1 + galleryItems.length) % galleryItems.length)
  }

  const next = (e) => {
    e.stopPropagation()
    setLightbox((lightbox + 1) % galleryItems.length)
  }

  return (
    <div>
      <PageHero
        title="Gallery"
        subtitle="Capturing joyful learning moments and beautiful childhood memories"
        emoji="📸"
        bg="bg-gradient-to-r from-kidPink to-kidPurple"
      />

      <div className="relative bg-white min-h-screen">

        {/* ── MASONRY GRID SECTION ── */}
        <section className="relative z-10 py-16 px-4 md:px-10">

          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-xs tracking-[5px] uppercase text-gray-400 mb-3">School Memories</p>
            <h2 className="font-fredoka text-5xl md:text-6xl text-kidPurple">
              Our Happy
              <span className="block text-kidPink">School Gallery ✨</span>
            </h2>
            <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto">
              Joyful classroom moments, celebrations, and unforgettable memories.
            </p>
          </div>

          {/*
            7-image layout (matches reference):
            Row 1: [0 tall] [1] [2]
            Row 2: [0 tall] [3] [4]
            Row 3: [5 tall] [6 wide x2]
            Row 4: [5 tall] — (filled by tall)
          */}
          <div
            className="grid gap-1"
            style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '200px' }}
          >
            {/* [0] tall — spans rows 1–2 */}
            <Cell item={galleryItems[0]} index={0} rowSpan={2} onOpen={setLightbox} />

            {/* [1] normal */}
            <Cell item={galleryItems[1]} index={1} onOpen={setLightbox} />

            {/* [2] normal */}
            <Cell item={galleryItems[2]} index={2} onOpen={setLightbox} />

            {/* [3] normal */}
            <Cell item={galleryItems[3]} index={3} onOpen={setLightbox} />

            {/* [4] normal */}
            <Cell item={galleryItems[4]} index={4} onOpen={setLightbox} />

            {/* [5] tall — spans rows 3–4 */}
            <Cell item={galleryItems[5]} index={5} rowSpan={2} onOpen={setLightbox} />

            {/* [6] wide — spans 2 columns */}
            <Cell item={galleryItems[6]} index={6} colSpan={2} onOpen={setLightbox} />
          </div>

        </section>

        {/* ── LIGHTBOX ── */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-6 text-white/80 hover:text-white text-5xl leading-none transition-colors"
              onClick={() => setLightbox(null)}
            >
              ×
            </button>

            {/* Counter */}
            <p className="absolute top-6 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-widest uppercase">
              {lightbox + 1} / {galleryItems.length}
            </p>

            {/* Prev */}
            <button
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-3xl flex items-center justify-center transition-all hover:scale-110"
              onClick={prev}
            >
              ‹
            </button>

            {/* Image */}
            <div className="flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
              <img
                src={galleryItems[lightbox].img.replace('w=800', 'w=1400')}
                alt={galleryItems[lightbox].title}
                className="max-h-[80vh] max-w-[85vw] object-contain rounded-2xl shadow-2xl"
              />
              <p className="text-white font-fredoka text-2xl tracking-wide">
                {galleryItems[lightbox].title}
              </p>
            </div>

            {/* Next */}
            <button
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-3xl flex items-center justify-center transition-all hover:scale-110"
              onClick={next}
            >
              ›
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-6 flex gap-2">
              {galleryItems.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightbox(i) }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === lightbox ? 'bg-white w-6' : 'bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        )}

       
      </div>
    </div>
  )
}