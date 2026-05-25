import React from 'react'

export default function Gallery() {

  const galleryItems = [
    {
      title: 'Classroom Activities',
      img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200',
      emoji: '📚',
    },
    {
      title: 'Art & Craft',
      img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200',
      emoji: '🎨',
    },
    {
      title: 'Festival Celebrations',
      img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200',
      emoji: '🎉',
    },
    {
      title: 'Sports & Physical Activities',
      img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=1200',
      emoji: '⚽',
    },
    {
      title: 'Annual Events',
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200',
      emoji: '🏆',
    },
    {
      title: 'Field Visits',
      img: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=1200',
      emoji: '🚌',
    },
    {
      title: 'Learning Through Play',
      img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200',
      emoji: '🧩',
    },
  ]

  return (
    <div className="pt-36 min-h-screen overflow-hidden bg-gradient-to-br from-[#FFF9DB] via-[#E0F2FE] to-[#FDF2F8]">

      {/* FLOATING SHAPES */}
      <div className="absolute top-24 left-10 w-44 h-44 bg-yellow-300/20 rounded-full blur-3xl"></div>
      <div className="absolute top-60 right-10 w-52 h-52 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-1/3 w-60 h-60 bg-pink-300/20 rounded-full blur-3xl"></div>

      {/* HERO SECTION */}
      <section className="relative z-10 text-center px-6 py-20">

        <div className="inline-flex items-center gap-2 bg-white shadow-lg border border-yellow-200 rounded-full px-6 py-3 mb-6">
          <span className="text-2xl">📸</span>

          <span className="font-fredoka text-kidPurple text-sm md:text-base">
            Pansies & Poppies International Pre-School
          </span>
        </div>

        <h1 className="font-fredoka text-5xl md:text-7xl leading-tight text-kidPurple mb-6">
          Our School <span className="text-kidOrange">Gallery</span> ✨
        </h1>

        <p className="max-w-4xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed font-nunito">
          Take a glimpse into the joyful learning experiences, celebrations,
          activities, and special moments at
          <span className="font-bold text-kidPurple">
            {' '}Pansies & Poppies International Pre-School.
          </span>
        </p>

      </section>

      {/* CATEGORY SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">

        <div className="text-center mb-14">

          <div className="inline-block bg-kidPurple/10 px-5 py-2 rounded-full mb-4">
            <span className="font-fredoka text-kidPurple text-sm uppercase tracking-wide">
              Gallery Categories
            </span>
          </div>

          <h2 className="font-fredoka text-4xl md:text-5xl text-kidPurple">
            Beautiful School Memories 🌈
          </h2>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[2rem] bg-white border-4 border-white shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-6">

                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl mb-4 border border-white/30 shadow-lg">
                  {item.emoji}
                </div>

                <h3 className="font-fredoka text-2xl text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-white/90 text-sm leading-relaxed font-nunito">
                  Capturing happy learning moments and fun-filled experiences
                  from our preschool activities.
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* BOTTOM CTA */}
      <section className="relative z-10 pb-24 px-6">

        <div className="max-w-5xl mx-auto bg-gradient-to-r from-kidPurple via-kidBlue to-kidOrange rounded-[3rem] p-10 md:p-16 shadow-2xl text-center relative overflow-hidden">

          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 text-6xl">🌈</div>
            <div className="absolute bottom-10 right-10 text-6xl">🎨</div>
            <div className="absolute top-1/2 left-1/2 text-7xl -translate-x-1/2 -translate-y-1/2">
              ⭐
            </div>
          </div>

          <div className="relative z-10">

            <h2 className="font-fredoka text-4xl md:text-5xl text-white mb-5">
              Every Moment Matters 💛
            </h2>

            <p className="max-w-3xl mx-auto text-white/90 text-lg leading-relaxed font-nunito">
              We believe childhood should be filled with creativity, joy,
              friendship, and meaningful learning experiences that create
              beautiful memories forever.
            </p>

          </div>

        </div>

      </section>

    </div>
  )
}