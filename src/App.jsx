import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import GraphBackground from './components/GraphBackground'
import Service from './components/Service'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Testimonials from './components/Testimonial'

const App = () => {
  return (
    <div>
      <GraphBackground />
      <Navbar/>
      <Hero/> 
      <About/>
      <Service/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
