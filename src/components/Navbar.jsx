import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Service', href: '#service' },
    { name: 'Project', href: '#project' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="
          fixed top-0 left-0 w-full z-60
          backdrop-blur-xl bg-gray-900/70
          border-b border-white/10
        "
      >
        <div className="flex justify-between items-center px-[10%] py-3">
          
          {/* Logo */}
          <h1 className="text-2xl font-black text-white tracking-wide">
            Zenith
            <span className="text-transparent bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text drop-shadow-[0_0_10px_rgba(139,92,246,0.7)]">
              Dev
            </span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex gap-8 text-sm text-gray-300">
            {navLinks.map((link, i) => (
              <li key={i} className="group relative">
                <a href={link.href} className="transition hover:text-white">
                  {link.name}
                </a>
                {/* Neon underline */}
                <span className="
                  absolute -bottom-1 left-0 w-0 h-0.5
                  bg-linear-to-r from-purple-500 to-blue-500
                  transition-all duration-300
                  group-hover:w-full
                " />
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <a href="http://wa.me/09162629299" target='_blank' className="hidden sm:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                w-36 h-10 rounded-full text-sm text-white
                bg-linear-to-br from-blue-600 to-purple-600
                shadow-[0_0_25px_rgba(139,92,246,0.5)]
                hover:shadow-[0_0_40px_rgba(139,92,246,0.8)]
                transition
              "
            >
              Whatsapp
            </motion.button>
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="sm:hidden text-2xl text-white"
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.4 }}
            className="
              fixed inset-0 z-50
              bg-black/90 backdrop-blur-xl
              flex flex-col gap-6 p-6 pt-16
            "
          >
            <button
              onClick={() => setOpenMenu(false)}
              className="absolute top-4 right-4 text-2xl text-white"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            {navLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                onClick={() => setOpenMenu(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="
                  text-lg font-medium text-gray-300
                  hover:text-white
                  border-b border-white/10 pb-3
                "
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
