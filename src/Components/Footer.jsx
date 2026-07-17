import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800 py-10 px-6 md:px-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
      {/* Left Section - Logo */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl signature italic"
      >
        Jishnu
      </motion.div>

      {/* Middle Section - Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="flex flex-col items-start text-gray-300"
      >
        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
        <ul className="space-y-1">
          <li>
            <a
              href="#home"
              className="hover:text-white transition-all duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-white transition-all duration-200"
            >
              Service
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-white transition-all duration-200"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-white transition-all duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="hover:text-white transition-all duration-200"
            >
              FAQ's
            </a>
          </li>
        </ul>
      </motion.div>

      {/* Right Section - Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-gray-300"
      >
        <h3 className="text-lg font-semibold mb-3">Contact Me</h3>
        <p className="text-sm mb-1">
          <span className="font-medium text-white">Email:</span>{" "}
          <a
            href="mailto:aniljishnu07@gmail.com"
            className="hover:text-white transition-all"
          >
            aniljishnu07@gmail.com
          </a>
        </p>
        <p className="text-sm mb-1">
          <span className="font-medium text-white">Mobile:</span>{" "}
          <a href="tel:+918921951948" className="hover:text-white transition-all">
            +91 8921951948
          </a>
        </p>

        <p className="text-sm mt-3 mb-2 text-white">Social Platforms:</p>
        <div className="flex gap-4 mt-2">
          <a
            href="https://github.com/jishnuanil2003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/jishnuanil2003/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://wa.me/918921951948"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 hover:scale-110 transition-all"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}