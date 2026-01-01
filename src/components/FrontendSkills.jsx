import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Wind,
  Smartphone,
  Accessibility,
  Gauge,
  GitBranch,
  Plug,
} from "lucide-react";

const skills = [
  { name: "HTML5", level: 90, icon: Code2 },
  { name: "CSS3", level: 88, icon: Palette },
  { name: "JavaScript (ES6+)", level: 85, icon: Braces },
  { name: "React", level: 82, icon: Atom },
  { name: "Tailwind CSS", level: 90, icon: Wind },
  { name: "Responsive Design", level: 88, icon: Smartphone },
  { name: "Accessibility (WCAG)", level: 75, icon: Accessibility },
  { name: "Performance Optimization", level: 78, icon: Gauge },
  { name: "Git & GitHub", level: 85, icon: GitBranch },
  { name: "API Integration", level: 80, icon: Plug },
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function FrontendSkills() {
  return (
    <section className="relative py-24 bg-[#0b0f1a] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-indigo-600/10 blur-3xl rounded-full" />

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
            Frontend Skills
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A snapshot of the tools and technologies I use to craft modern user
            interfaces.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-xl transition-all duration-300 hover:scale-[1.03]"
              >
                {/* Hover Glow Trail */}
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-indigo-500/0 to-purple-500/0 opacity-0 group-hover:opacity-100 blur-xl transition duration-500 pointer-events-none" />

                {/* Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {skill.name}
                  </h3>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-linear-to-r from-indigo-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>

                {/* Percentage */}
                <span className="block mt-3 text-sm text-gray-400">
                  Proficiency: {skill.level}%
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
