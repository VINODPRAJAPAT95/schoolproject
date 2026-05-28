import React, { useState } from 'react'
import PageHero from '../components/PageHero'

export default function Contact() {
  const WHATSAPP_NUMBER = "919521852927"

  const [sent, setSent] = useState(false)

  const [form, setForm] = useState({
    parentName: '',
    childName: '',
    mobile: '',
    email: '',
    program: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = `
📩 New Admission Inquiry

👤 Parent Name: ${form.parentName}
🧒 Child Name: ${form.childName}
📱 Mobile: ${form.mobile}
📧 Email: ${form.email}
🎓 Program: ${form.program}
💬 Message: ${form.message}
    `

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

    window.open(url, "_blank")

    setSent(true)

    setTimeout(() => setSent(false), 3000)

    setForm({
      parentName: '',
      childName: '',
      mobile: '',
      email: '',
      program: '',
      message: ''
    })
  }

  const inputStyle =
    "w-full px-4 py-3 rounded-2xl border border-purple-100 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all shadow-sm bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-400"

  return (
    <div className="bg-gradient-to-br from-violet-50 via-fuchsia-50 to-sky-50 min-h-screen font-[Nunito,sans-serif]">

      <PageHero
        title="Contact Us"
        subtitle="We're here to help your child's bright future!"
        bg="bg-gradient-to-r from-purple-500 to-pink-500"
      />

      {/* MAIN CONTENT */}
      <section id="contact" className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="space-y-5">

            {/* INFO CARDS */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "📍",
                  title: "Address",
                  info: "123 Chinchwad, Pune",
                  color: "from-violet-100 to-purple-50",
                  border: "border-purple-200"
                },
                {
                  icon: "📱",
                  title: "Phone",
                  info: "+91 0000000000",
                  color: "from-pink-100 to-rose-50",
                  border: "border-pink-200"
                },
                {
                  icon: "📧",
                  title: "Email",
                  info: "info@PansiePoppies.com",
                  color: "from-sky-100 to-blue-50",
                  border: "border-sky-200"
                },
                {
                  icon: "🕒",
                  title: "Hours",
                  info: "Mon–Fri: 7AM–6PM",
                  color: "from-amber-100 to-yellow-50",
                  border: "border-amber-200"
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${item.color} border ${item.border} p-5 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-default`}
                >
                  <div className="text-3xl">{item.icon}</div>

                  <h3 className="font-bold text-purple-700 mt-2 text-sm">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-0.5">
                    {item.info}
                  </p>
                </div>
              ))}
            </div>

            {/* WHATSAPP CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello, Pansies & Poppies International Pre-School!`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-lg"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>

              Chat on WhatsApp Instantly
            </a>

            {/* SOCIAL BUTTONS */}
            <div className="flex gap-3">
              {[" Facebook", " Instagram", " Twitter"].map((s, i) => (
                <button
                  key={i}
                  className="flex-1 text-xs font-bold py-2.5 rounded-xl border border-purple-200 bg-white/70 hover:bg-purple-50 text-purple-600 transition shadow-sm"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white/80 backdrop-blur-xl p-8  shadow-2xl border border-white/60 relative overflow-hidden">

            <div className="absolute -top-8 -right-8 w-36 h-36 bg-purple-200 rounded-full opacity-30 blur-2xl pointer-events-none" />

            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-pink-200 rounded-full opacity-30 blur-2xl pointer-events-none" />

            <h2 className="text-2xl font-extrabold text-purple-700 mb-1 relative z-10">
              Admission Inquiry 
            </h2>

            <p className="text-gray-400 mb-6 text-sm relative z-10">
              Fill the form — we reply on WhatsApp instantly 
            </p>

            {sent && (
              <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded-2xl mb-4 text-center font-semibold text-sm">
                ✔ Opening WhatsApp...
              </div>
            )}

            <div className="space-y-4 relative z-10">

              <div className="grid grid-cols-2 gap-3">

                <div className="relative">
                  <span className="absolute left-3 top-3.5 text-purple-300">
                    👤
                  </span>

                  <input
                    className={`${inputStyle} pl-9`}
                    placeholder="Parent Name"
                    value={form.parentName}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        parentName: e.target.value
                      })
                    }
                    required
                  />
                </div>

                <div className="relative">
                  <span className="absolute left-3 top-3.5 text-purple-300">
                    🧒
                  </span>

                  <input
                    className={`${inputStyle} pl-9`}
                    placeholder="Child Name"
                    value={form.childName}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        childName: e.target.value
                      })
                    }
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">

                <div className="relative">
                  <span className="absolute left-3 top-3.5 text-purple-300">
                    📱
                  </span>

                  <input
                    className={`${inputStyle} pl-9`}
                    placeholder="Mobile Number"
                    value={form.mobile}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        mobile: e.target.value
                      })
                    }
                    required
                  />
                </div>

                <div className="relative">
                  <span className="absolute left-3 top-3.5 text-purple-300">
                    📧
                  </span>

                  <input
                    className={`${inputStyle} pl-9`}
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value
                      })
                    }
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <span className="absolute left-3 top-3.5 text-purple-300">
                  🎓
                </span>

                <select
                  className={`${inputStyle} pl-9 appearance-none`}
                  value={form.program}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      program: e.target.value
                    })
                  }
                  required
                >
                  <option value="">Select Program</option>
                  <option>Pre-Nursery</option>
                  <option>Nursery</option>
                  <option>Junior KG</option>
                  <option>Senior KG</option>
                </select>

                <span className="absolute right-3 top-4 text-gray-400 pointer-events-none">
                  ▾
                </span>
              </div>

              <div className="relative">
                <span className="absolute left-3 top-3.5 text-purple-300">
                  💬
                </span>

                <textarea
                  className={`${inputStyle} pl-9`}
                  rows={4}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value
                    })
                  }
                  required
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-extrabold py-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-lg tracking-wide"
              >
                🚀 Send on WhatsApp
              </button>

            </div>
          </div>

        </div>
      </section>

     {/* GOOGLE MAP */}
<div className="w-full pb-14">
  <div className="overflow-hidden shadow-xl border-y-4 border-white">

   <iframe
  title="School Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5082634857727!2d73.76132187439046!3d18.596195282512053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b969168917dd%3A0x9aa1a7b9b20c44de!2sShree%20Datta%20Mandir!5e0!3m2!1sen!2sin!4v1779874146001!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0, display: "block" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="w-full rounded-xl"
/>

  </div>
</div>

    </div>
  )
}