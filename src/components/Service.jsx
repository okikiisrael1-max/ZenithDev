import { motion } from "framer-motion";
import {
  Monitor,
  LayoutDashboard,
  Code2,
  PenTool,
  Settings,
  Zap,
} from "lucide-react";

const services = [
  {
    name: "Responsive Web Design",
    description:
      "Crafting mobile-first, modern, and pixel-perfect websites that look great on any device.",
    icon: LayoutDashboard,
  },
  {
    name: "Frontend Development",
    description:
      "Building fast, interactive, and maintainable frontend interfaces using React and modern tools.",
    icon: Code2,
  },
  {
    name: "UI/UX Design Implementation",
    description:
      "Translating Figma/Adobe XD designs into fully functional user interfaces.",
    icon: PenTool,
  },
  {
    name: "Website Optimization",
    description:
      "Improving performance, speed, accessibility, and SEO for a seamless user experience.",
    icon: Zap,
  },
  {
    name: "Portfolio & Business Websites",
    description:
      "Creating professional websites to showcase your brand, business, or personal work online.",
    icon: Monitor,
  },
  {
    name: "Maintenance & Bug Fixing",
    description:
      "Keeping websites updated, secure, and error-free for ongoing reliability.",
    icon: Settings,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section className="relative py-24 bg-[#0b0f1a] overflow-hidden">
      {/* Accent Glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-600/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full" />

      <motion.div
        className="relative max-w-6xl mx-auto px-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Heading */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Here’s what I offer to help businesses and individuals create
            outstanding web experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl transition-all duration-300 hover:scale-[1.03]"
              >
                {/* Hover Glow Trail */}
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-indigo-500/0 to-purple-500/0 opacity-0 group-hover:opacity-40 blur-xl transition duration-500 pointer-events-none" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg mb-6">
                  <Icon size={26} />
                </div>

                {/* Service Name */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
