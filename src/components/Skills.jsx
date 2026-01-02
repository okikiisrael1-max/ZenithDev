import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "HTML & CSS", level: 95 },
  { name: "Node.js", level: 60, status: "In Progress" }
];

const Skills = () => {
  return (
    <div className="px-[10%] mt-16">
      <h3 className="text-2xl font-semibold mb-8 text-center text-transparent bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text">
        Skills & Experience
      </h3>

      <div className="flex flex-col gap-6">
        {skills.map((skill, index) => (
          <div key={index}>
            {/* Skill Header */}
            <div className="flex justify-between mb-2">
              <span className="text-gray-300 font-medium">
                {skill.name}
                {skill.status && (
                  <span className="ml-2 text-sm text-green-400">
                    ({skill.status})
                  </span>
                )}
              </span>

              <span className="text-gray-400">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-linear-to-r from-purple-600 to-blue-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Experience Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-10 flex justify-center"
      >
        <div className="px-6 py-3 rounded-full border border-white/10 bg-black/30 backdrop-blur text-gray-300">
          🚀 <span className="font-semibold text-white">3+ Years</span> Frontend Development Experience
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
