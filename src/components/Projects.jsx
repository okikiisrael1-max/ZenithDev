import React from 'react'
import Title from './Title'
import { projects } from '../assets/assets'
import { motion } from 'framer-motion'
import 'bootstrap-icons/font/bootstrap-icons.css'

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
}

const Projects = () => {
  return (
    <section id="project" className="pt-20 relative overflow-hidden">
      <Title
        Title="Our Works"
        Desc="Here are some projects I’ve built using React, Tailwind, and modern frontend tech"
      />

      {/* Soft neon background accent */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-125 h-125 bg-purple-600/15 blur-[140px] rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-[85%] mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="
              group relative
              rounded-2xl overflow-hidden
              backdrop-blur-xl
              bg-white/5
              border border-white/10
              shadow-[0_0_35px_rgba(139,92,246,0.15)]
              transition
            "
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full h-44 object-cover object-top
                  transition duration-500
                  group-hover:scale-110
                "
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-2">
              <div className="flex flex-wrap gap-2 mt-3">
            {project.skill.map((skill, i) => (
              <span
                key={i}
                className="text-sm bg-linear-180 bg-opacity-10 from-blue-600 to-purple-600 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

              <h2 className="text-lg font-semibold text-white">
                {project.title}
              </h2>

              <p className="text-sm text-gray-400 leading-relaxed">
                {project.desc}
              </p>

              {/* Button */}
              <a
                href={project.URL}
                target="_blank"
                rel="noreferrer"
                className="mt-3"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    flex items-center justify-center gap-1
                    w-full h-10 rounded-full text-sm text-white
                    bg-linear-to-r from-purple-600 to-blue-600
                    hover:from-blue-600 hover:to-purple-600
                    shadow-[0_0_25px_rgba(139,92,246,0.6)]
                    transition
                  "
                >
                  Preview
                  <i className="bi bi-arrow-up-right text-xs"></i>
                </motion.button>
              </a>
            </div>

            {/* Neon border glow */}
            <span className="
              pointer-events-none
              absolute inset-0 rounded-2xl
              opacity-0 group-hover:opacity-100
              transition
              ring-1 ring-purple-500/40
            " />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
