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
    "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 outline-none transition shadow-sm bg-white/70 backdrop-blur-sm"

  return (
    <div className="bg-gradient-to-b from-purple-50 via-pink-50 to-blue-50 min-h-screen">

      <PageHero
        title="Contact Us"
        subtitle="We’re here to help your child’s bright future!"
        emoji="📞"
        bg="bg-gradient-to-r from-purple-500 to-pink-500"
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">

          {/* LEFT SIDE - INFO */}
          <div className="space-y-6">

            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-4">

              {[
                { icon: "📍", title: "Address", info: "123 Sunshine Street, Happy Town" },
                { icon: "📱", title: "Phone", info: "+91 98765 43210" },
                { icon: "📧", title: "Email", info: "info@kidoria.com" },
                { icon: "🕒", title: "Hours", info: "Mon–Fri: 7AM–6PM" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/60 backdrop-blur-md p-5 rounded-2xl shadow-md hover:scale-105 transition"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <h3 className="font-bold text-purple-700 mt-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.info}</p>
                </div>
              ))}

            </div>

            {/* Map Box */}
            <div className="bg-white/60 backdrop-blur-md rounded-2xl h-64 flex items-center justify-center shadow-md">
              <div className="text-center">
                <div className="text-5xl animate-bounce">📍</div>
                <p className="font-bold text-purple-700 mt-2">Visit Our School</p>
                <p className="text-sm text-gray-500">We welcome you anytime!</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello`}
              target="_blank"
              rel="noreferrer"
              className="block text-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl shadow-lg transition"
            >
              💬 Chat on WhatsApp Instantly
            </a>

          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white">

            <h2 className="text-3xl font-bold text-purple-700 mb-2">
              Admission Inquiry 💌
            </h2>
            <p className="text-gray-500 mb-6">
              Fill the form — we reply on WhatsApp instantly 🚀
            </p>

            {sent && (
              <div className="bg-green-100 text-green-700 p-3 rounded-xl mb-4 text-center font-medium">
                ✔ Opening WhatsApp...
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid grid-cols-2 gap-3">
                <input
                  className={inputStyle}
                  placeholder="Parent Name"
                  value={form.parentName}
                  onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                  required
                />
                <input
                  className={inputStyle}
                  placeholder="Child Name"
                  value={form.childName}
                  onChange={(e) => setForm({ ...form, childName: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input
                  className={inputStyle}
                  placeholder="Mobile Number"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  required
                />
                <input
                  className={inputStyle}
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <select
                className={inputStyle}
                value={form.program}
                onChange={(e) => setForm({ ...form, program: e.target.value })}
                required
              >
                <option value="">Select Program</option>
                <option>Play Group</option>
                <option>Nursery</option>
                <option>Junior KG</option>
                <option>Senior KG</option>
              </select>

              <textarea
                className={inputStyle}
                rows={4}
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 rounded-2xl shadow-lg hover:scale-105 transition"
              >
                🚀 Send on WhatsApp
              </button>

            </form>

          </div>

        </div>
      </section>
    </div>
  )
}