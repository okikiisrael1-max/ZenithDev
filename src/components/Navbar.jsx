import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className='z-60 flex justify-between items-center px-[10%] py-2.5 bg-gray-900 fixed top-0 left-0 w-full'>
      <h1 className='text-2xl font-black text-white'>Zenith<span className='text-transparent bg-linear-to-r from-blue-600 to-purple-950 bg-clip-text'>Dev</span></h1>
    <ul className='flex gap-5 max-sm:hidden'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    <a href="#">
        <button className='flex max-sm:hidden justify-center items-center w-40 h-10 cursor-pointer text-sm bg-linear-to-br from-blue-800 to-purple-700 rounded-full'>Connect </button>
    </a>
    <span onClick={()=> setOpenMenu(!openMenu)} className='flex p-1.5 text-2xl sm:hidden'><i class="bi bi-list"></i></span>
    <ul className={`sm-hidden flex flex-col gap-2.5 fixed top-0 right-0 bottom-0 ${openMenu ?  ' w-full' : 'w-0 translate-x-9 scale-0'} transition-all h-screen bg-linear-60 p-5 pt-13 z-50 to-gray-900 from-black text-gray-400`}>
    <span onClick={()=> setOpenMenu(!openMenu)} className='absolute right-2.5 text-2xl top-2.5 p-2'><i class="bi bi-x-lg"></i></span>
        <li className='hover:-translate-x-2.5 transition-all border-b border-gray-500  py-2.5'><a className='p-2.5 font-medium' onClick={()=> setOpenMenu(!openMenu)} href="#">Home</a></li>
        <li className='hover:-translate-x-2.5 transition-all border-b border-gray-500  py-2.5'><a className='p-2.5 font-medium' onClick={()=> setOpenMenu(!openMenu)} href="#about">About</a></li>
        <li className='hover:-translate-x-2.5 transition-all border-b border-gray-500  py-2.5'><a className='p-2.5 font-medium' onClick={()=> setOpenMenu(!openMenu)} href="#project">Project</a></li>
        <li className='hover:-translate-x-2.5 transition-all border-b border-gray-500  py-2.5'><a className='p-2.5 font-medium' onClick={()=> setOpenMenu(!openMenu)} href="#service">Service</a></li>
        <li className='hover:-translate-x-2.5 transition-all border-b border-gray-500  py-2.5'><a className='p-2.5 font-medium' onClick={()=> setOpenMenu(!openMenu)} href="#contact">Contact</a></li>
    </ul>
  </div>
  )
}

export default Navbar
