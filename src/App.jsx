import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from "./pages/Gallery";
import Contact from './pages/Contact'
import PreNursery from './pages/Pre-Nursery'
import Nursery from './pages/Nursery'
import KG2 from './pages/KG2'
import KG1 from './pages/KG1'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pages/pre-nursery" element={<PreNursery />} />
        <Route path="/pages/nursery" element={<Nursery />} />
        <Route path="/pages/kg2" element={<KG2 />} />
        <Route path="/pages/kg1" element={<KG1 />} />
        <Route path="*" element={<KG2 />} />
      </Routes>
      <Footer />
    </div>
  )
}
