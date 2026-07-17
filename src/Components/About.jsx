import { motion } from "framer-motion";
import profilePic from "../assets/IMG_6095.jpg"; // Replace with your actual image path

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-16"
    >
      {/* Left Section - Heading & Image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center md:items-start w-full md:w-1/2">
          <div className="md:w-dvw">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center md:text-left">
          Know more about <br className="hidden md:block" /> me
        </h2>
        </div>
        <div className="relative w-80 h-80 md:w-[70%] md:h-130 border-6 border-gray-800 rounded-sm overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <motion.img
            src={profilePic}
            alt="Jishnu Anil"
            className="object-cover"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </motion.div>

      {/* Right Section - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 text-gray-300 leading-relaxed md:mt-24"
      >
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
          I’m Jishnu Anil, a Machine Learning Engineer passionate about
          turning data into intelligent products that solve real problems.
        </h3>

        <p className="text-gray-400 mb-4">
          My journey started in web development, where I learned to build
          full-stack applications with React, Django, and PostgreSQL — and
          understand how real products are shipped, not just prototyped.
        </p>

        <p className="text-gray-400 mb-4">
          Over time, I moved deeper into AI and machine learning during my
          MCA specialization, building everything from CNN-based computer
          vision models to NLP pipelines and LLM-powered RAG chatbots using
          PyTorch, TensorFlow, LangChain, and Hugging Face.
        </p>

        <p className="text-gray-400 mb-4">
          My goal is to build production-ready AI systems — not just notebooks
          — by combining solid ML fundamentals with the full-stack skills to
          actually ship them.
        </p>

        <div className="mt-6">
          <h4 className="font-semibold text-white mb-2">Key Highlights:</h4>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>MCA (AI Specialisation) — Amrita University</li>
            <li>1 Year Experience as Python Developer @ Meril</li>
            <li>Now building full-stack web apps & AI projects</li>
            <li>Dream Company: Google</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
