import React from 'react'
import Title from './Title'
import { motion } from 'framer-motion'

const Contact = () => {
  const [result, setResult] = React.useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending...")
    const formData = new FormData(event.target)

    formData.append("access_key", "0f47b09b-8114-4120-9d36-60c74f39990c")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      setResult("Your Message has been Sent Successfully 🚀")
      event.target.reset()
    } else {
      setResult(data.message)
    }
  }

  return (
    <section id="contact" className="pt-20 relative mb-5">
      <Title Title="Contact Me" Desc="Let’s Build Something Amazing" />

      <div className="sm:px-[10%] px-[5%] relative">
        
        {/* Neon Blur Accent */}
        <div className="absolute inset-0 flex justify-center -z-10">
          <div className="w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            grid grid-cols-2 gap-4
            w-full sm:w-1/2 mx-auto
            p-6 rounded-2xl
            backdrop-blur-xl
            bg-white/5
            border border-white/10
            shadow-[0_0_40px_rgba(139,92,246,0.15)]
          "
        >

          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-400 text-sm">Full Name</label>
            <input
              required
              name="name"
              placeholder="Your name here..."
              className="
                p-3 rounded-lg text-sm text-white
                bg-gray-900/60 border border-gray-700
                outline-none
                focus:border-purple-500
                focus:shadow-[0_0_12px_rgba(139,92,246,0.6)]
                transition
              "
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-400 text-sm">Email</label>
            <input
              required
              type="email"
              name="email"
              placeholder="Your email here..."
              className="
                p-3 rounded-lg text-sm text-white
                bg-gray-900/60 border border-gray-700
                outline-none
                focus:border-blue-500
                focus:shadow-[0_0_12px_rgba(59,130,246,0.6)]
                transition
              "
            />
          </div>

          {/* Message */}
          <div className="col-span-2 flex flex-col gap-1">
            <label className="text-gray-400 text-sm">Message</label>
            <textarea
              required
              name="message"
              rows="5"
              placeholder="Your message here..."
              className="
                p-3 rounded-lg text-sm text-white
                bg-gray-900/60 border border-gray-700
                outline-none resize-none
                focus:border-purple-500
                focus:shadow-[0_0_12px_rgba(139,92,246,0.6)]
                transition
              "
            />
          </div>

          {/* Status */}
          {result && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-2 text-sm text-center text-purple-400"
            >
              {result}
            </motion.span>
          )}

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="
              col-span-2 h-11
              rounded-full text-sm font-medium text-white
              bg-linear-to-r from-purple-600 to-blue-600
              hover:from-blue-600 hover:to-purple-600
              shadow-[0_0_25px_rgba(139,92,246,0.6)]
              transition
            "
          >
            Send Message
          </motion.button>

        </motion.form>
      </div>
    </section>
  )
}

export default Contact
