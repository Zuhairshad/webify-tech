// src/components/TechStack.jsx
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTailwindcss, SiExpress } from "react-icons/si";

const stack = [
  { Icon: FaReact, label: "React", color: "#61DAFB" },
  { Icon: SiMongodb, label: "MongoDB", color: "#4DB33D" },
  { Icon: FaGithub, label: "GitHub", color: "#ffffff" },
  { Icon: FaNodeJs, label: "Node.js", color: "#539E43" },
  { Icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { Icon: SiTailwindcss, label: "Tailwind CSS", color: "#38BDF8" },
  { Icon: SiExpress, label: "Express.js", color: "#ffffff" },
];

export default function TechStack() {
  return (
    <section className="w-full bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-5xl font-['Inter'] font-bold text-black">
            Technologies We Use
          </p>
          <p className="mt-4 text-xl text-slate-400">
            Our go-to stack for building scalable, modern, and user-friendly apps.
          </p>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {stack.map(({ Icon, label, color }, i) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center rounded-2xl border border-gray-400 bg-black p-6 shadow-md"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: i * 0.15 }}
              >
                <Icon className="text-5xl" style={{ color }} />
              </motion.div>
              <span className="mt-3 text-sm text-slate-300">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
