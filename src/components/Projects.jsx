import React from 'react'
import Title from './Title'
import { projects } from '../assets/assets'

const Projects = () => {
  return (
    <div id='project' className='pt-15'>
      <Title Title={`Our Works`} Desc={'Here are some projects I’ve built using React, Tailwind, and modern frontend tech'}/>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 mt-2.5 w-[80%] mx-auto justify-center items-center'>
        {projects.map((project, index) => (
        <div className='flex flex-col justify-center items-center' key={index}>
          <img className='w-full h-40 object-cover object-top' src={project.image} alt="" />
          <h2>{project.title}</h2>
          <p>{project.desc}</p>
          <a href={project.URL} target='_blank' className='w-[90%] my-2.5'><button className='flex h-10 justify-center items-center w-full bg-linear-90 from-35% from-purple-600 to-blue-600 rounded-3xl hover:from-blue-600 hover:to-purple-600 transform transition-colors text-sm'>Preview <i class="bi bi-arrow-up-right text-[12px] px-1.5"></i></button></a>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Projects
