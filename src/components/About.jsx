import React from 'react'
import Title from './Title'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { assets } from '../assets/assets';
import Skills from './Skills';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id='about' className="relative z-10 py-5">
      <Title Title={'About Me'} Desc={'A Little About Me'} />

      <div className='flex flex-col sm:flex-row px-[10%] gap-8 mt-10'>
        
        {/* Image */}
        <motion.img 
          className='rounded-lg object-cover z-50 w-full max-h-80 flex mx-auto hover:translate-y-2.5 transition duration-500 shadow-xl'
          src={assets.hero} 
          alt="About Image"
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Text Content */}
        <motion.div 
          className='flex flex-col gap-4 z-10'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className='text-gray-400 text-lg'>
            I’m passionate about turning ideas into functional, beautiful web applications. 
            With expertise in{' '}
            <span className='text-transparent font-bold bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text filter drop-shadow-[0_0_10px_rgba(139,92,246,0.7)]'>
              React, JavaScript, HTML, CSS, and modern frontend libraries
            </span>, I specialize in building responsive, user-friendly websites that meet your goals.
          </p>

          <p className='text-gray-400 text-lg'>
            I thrive on{' '}
            <span className='text-transparent font-bold bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text filter drop-shadow-[0_0_10px_rgba(139,92,246,0.7)]'>
              problem-solving, clean code, and delivering results
            </span> that make a real impact for clients and businesses alike.
          </p>
          {/* Features List */}
          <motion.div 
            className='mt-4 flex flex-col gap-3'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {[
              "Expertise in React, Redux, TailwindCSS, Bootstrap",
              "Build responsive, mobile-first designs",
              "Focus on performance, accessibility, and SEO-friendly code",
              "Collaborate closely to bring your vision to life"
            ].map((item, idx) => (
              <p key={idx} className='flex text-gray-400 gap-2.5 items-center'>
                <i className='bi bi-check2-circle text-2xl text-transparent font-black bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text filter drop-shadow-[0_0_10px_rgba(139,92,246,0.7)] animate-pulse'></i>
                {item}
              </p>
            ))}
          </motion.div>
        </motion.div>

      </div>

      {/* Frontend Skills */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className='mt-10'
      >
        <Skills/>
        {/* Experience & Learning */}


      </motion.div>
    </div>
  )
}

export default About
