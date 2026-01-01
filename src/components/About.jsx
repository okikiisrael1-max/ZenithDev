import React from 'react'
import Title from './Title'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div id='about'>
      <Title Title={'About Me'} Desc={'A Little About Me'}/>
      <div className='flex flex-col sm:flex-row px-[10%] gap-5'>
        <img className='rounded-lg z-10 object-cover w-62.5 max-h-80 flex mx-auto sm:w-120 grayscale-75 hover:grayscale-0 transition' src={assets.hero} alt="" />
        <div className='flex flex-col gap-2.5 z-1'>
            <p className='text-gray-400'>I’m passionate about turning ideas into functional, beautiful web applications. With expertise in <span className='text-transparent font-bold bg-linear-60 from-30% from-purple-600 to-blue-500 bg-clip-text'>React, JavaScript, HTML, CSS, and modern frontend libraries</span> , I specialize in building responsive, user-friendly websites that meet your goals.</p>
            <p className='text-gray-400'>I thrive on <span className='text-transparent font-bold bg-linear-60 from-30% from-purple-600 to-blue-500 bg-clip-text'>problem-solving, clean code, and delivering results</span>  that make a real impact for clients and businesses alike.</p>
            <div>
                <p className='flex text-gray-400 gap-2.5'><i class="bi bi-check2-circle text-2xl text-transparent font-black bg-linear-60 from-30% from-purple-600 to-blue-500 bg-clip-text" ></i>Expertise in React, Redux, TailwindCSS, Bootstrap</p>
                <p className='flex text-gray-400 gap-2.5'><i class="bi bi-check2-circle text-2xl text-transparent font-black bg-linear-60 from-30% from-purple-600 to-blue-500 bg-clip-text"></i>Build responsive, mobile-first designs</p>
                <p className='flex text-gray-400 gap-2.5'><i class="bi bi-check2-circle text-2xl text-transparent font-black bg-linear-60 from-30% from-purple-600 to-blue-500 bg-clip-text"></i>Focus on performance, accessibility, and SEO-friendly code</p>
                <p className='flex text-gray-400 gap-2.5'><i class="bi bi-check2-circle text-2xl text-transparent font-black bg-linear-60 from-30% from-purple-600 to-blue-500 bg-clip-text"></i>Collaborate closely to bring your vision to life</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About

