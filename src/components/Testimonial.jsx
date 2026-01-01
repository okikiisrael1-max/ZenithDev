import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    message:
      "The frontend delivery was flawless. Clean UI, excellent performance, and great attention to detail.",
  },
  {
    name: "Michael Lee",
    role: "Product Manager",
    message:
      "An outstanding frontend developer. Translated our designs into a fast, elegant interface.",
  },
  {
    name: "David Williams",
    role: "Creative Director",
    message:
      "Beautiful execution. Smooth interactions, modern layout, and a very professional finish.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 bg-[#0b0f1a] overflow-hidden">
      {/* Accent Glow */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-indigo-600/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full" />

      <motion.div
        className="relative max-w-6xl mx-auto px-6 text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Testimonials
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-gray-400 max-w-xl mx-auto mb-14"
        >
          Trusted by clients who value clean interfaces and quality frontend
          development.
        </motion.p>

        {/* Card */}
        <motion.div variants={fadeUp} className="flex justify-center">
          <div className="w-full max-w-xl">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-xl transition-all duration-500 hover:scale-[1.015]">
              <p className="text-gray-200 text-lg leading-relaxed mb-8">
                “{testimonials[active].message}”
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                  {testimonials[active].name[0]}
                </div>

                <div className="text-left">
                  <h4 className="text-white font-semibold">
                    {testimonials[active].name}
                  </h4>
                  <span className="text-sm text-gray-400">
                    {testimonials[active].role}
                  </span>
                </div>
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <motion.span
                  key={i}
                  className={`h-2.5 w-2.5 rounded-full ${
                    active === i
                      ? "bg-linear-to-r from-indigo-500 to-purple-500 scale-125"
                      : "bg-gray-600"
                  }`}
                  layout
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
