import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from "./pages/Gallery";
import Contact from './pages/Contact'
import Testimonials from './pages/Testimonials'
import Blog from './pages/Blog'
import Error404 from './pages/Error404'
import Pricing from './pages/Pricing'
import SinglePost from './pages/SinglePost'
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
        <Route path="/pages/testimonials" element={<Testimonials />} />
        <Route path="/pages/blog" element={<Blog />} />
        <Route path="/pages/404" element={<Error404 />} />
        <Route path="/pages/pricing" element={<Pricing />} />
        <Route path="/pages/singlePost" element={<SinglePost />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  )
}
