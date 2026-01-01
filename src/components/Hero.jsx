import React from 'react'
import {assets} from '../assets/assets'
import { TypeAnimation } from 'react-type-animation';



const Hero = () => {
  return (
    <div className='flex px-[10%] py-5 flex-col justify-center items-center gap-5 min-h-screen w-full relative'>
        <div className='h-20'>
          <TypeAnimation
        sequence={[
          "Ready to take your online presence to the next level?",
          2000,
          "",
         "Need a stunning website for your business?",
          2000,
          "",
          1000,
          "Your business deserves a better website.",
          2000,
          "",
          1000,
        ]}
        speed={60}
        deletionSpeed={40}
        repeat={Infinity}
        className={` py-2.5 text-2xl font-bold md:text-4xl bg-linear-90 from-10% from-purple-600 to-blue-600 text-transparent bg-clip-text`}
      />
        </div>
        
        <img src={assets.hero_img} className='rounded-lg w-[90%] sm:w-1/2' alt="" />
        <img className='-z-1 w-full top-0 left-0 absolute h-screen opacity-20' src={assets.bgImage1} alt="" />
      <h1 className='text-center text-3xl sm:text-5xl md:text-6xl font-bold'> I’m <span className='bg-linear-120 from-blue-600 to-purple-600 pl-1 text-transparent bg-clip-text'>Onakomaya Israel</span></h1>
      <p className='text-center text-gray-400'>I build responsive, interactive websites that are user-friendly and visually engaging. I’m currently expanding my skills into back-end development to become a full-stack developer.</p>
      <div className='flex flex-col sm:flex-row gap-2.5 flex-wrap'>
        <a className='flex justify-center items-center w-40 h-10 bg-linear-90 transform-3d transition-all hover:to-purple-600 hover:from-blue-600 from-purple-600 to-blue-600 text-white rounded-full' href="#project">Recent Projects</a>
        <a href="#contact" className='flex justify-center items-center w-40 h-10 transition-shadow hover:border-l-blue-600 hover:border-r-purple-600 hover:shadow-lg hover:shadow-purple-600 border-b-blue-600 border-t-purple-600 border-2 bg-clip-text bg-linear-90 from-purple-600 to-blue-600 text-transparent rounded-full'>Contact Me</a>
      </div>

    </div>
  )
}

export default Hero
