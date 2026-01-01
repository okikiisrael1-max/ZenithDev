import {
  Github,
  Linkedin,
  Mail,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-900/60 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">

          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">
              Onakomaya Israel
            </h3>
            <p className="text-sm text-gray-400">
              Frontend Developer · React Specialist
            </p>
          </div>

          {/* Center Links */}
          <nav className="flex gap-6 text-sm text-gray-300">
            <a
              href="#project"
              className="hover:text-sky-400 transition"
            >
              Projects
            </a>
            <a
              href="#service"
              className="hover:text-sky-400 transition"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-sky-400 transition"
            >
              Contact
            </a>
          </nav>

          {/* Right Socials */}
          <div className="flex gap-4">
            <a
              href="https://github.com/okikiisrael1-max"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition"
            >
              <Github size={20} />
            </a>

            <a
              href="https://linkedin.com/in/onakomaya-israel-86a787365"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="mailto:youremail@example.com"
              className="text-gray-400 hover:text-sky-400 transition"
            >
              <Mail size={20} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition"
            >
              <Globe size={20} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Zenith Dev. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
