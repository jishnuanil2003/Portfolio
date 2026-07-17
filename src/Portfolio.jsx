import { motion } from 'framer-motion';
import bgImage from './assets/IMG_6095.jpg';
import { MapPin } from 'lucide-react';
import Navbar from './Components/Navbar';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import Services from './Components/Services';
import Projects from './Components/Projects';
import About from './Components/About';
import FAQ from './Components/FAQ';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ResumeButton from './Components/ResumeButton';

export default function Hero() {
  const techStack = [
    'Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'LangChain', 'Hugging Face',
    'NLP', 'Pandas', 'NumPy', 'FastAPI', 'Django', 'DRF', 'React.js', 'SQL',
    'Docker', 'Git'
  ];

  return (
    <>
      <Navbar />

      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-black text-white pt-20"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-no-repeat opacity-50 bg-center"
          style={{ backgroundImage: `url(${bgImage})`}}
        ></div>

        {/* Overlay Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.6), rgba(0,0,0,0.9))",
          }}
        ></div>

        {/* Floating Social Icons - Desktop */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:absolute md:right-12 md:top-1/2 md:-translate-y-1/2 md:flex md:flex-col md:items-center md:gap-6 z-20"
        >
          <a
            href="https://github.com/jishnuanil2003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all hover:scale-110"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/jishnuanil2003/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all hover:scale-110"
          >
            <FaLinkedinIn size={22} />
          </a>
          <a
            href="https://wa.me/918921951948"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-all hover:scale-110"
          >
            <FaWhatsapp size={22} />
          </a>
        </motion.div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center px-6">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 text-gray-300 mb-6"
          >
            <MapPin size={18} className="text-gray-400" />
            <span className="text-xl">Bangalore, India</span>
          </motion.div>

          {/* Main Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-3xl min-w-xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 sm:mb-4"
          >
            <p className="drop-shadow-[0_0_10px_#fff]">
              I’m Jishnu Anil
              <br />
              <span className="text-white">Machine Learning Engineer</span>
            </p>
          </motion.h1>

          {/* Short Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="text-gray-400  md:max-w-2xl text-sm sm:text-base text-center mb-6 sm:mb-8 px-2"
          >
            I build and deploy intelligent systems — from RAG pipelines and LLM-powered
            chatbots to computer vision models — that turn raw data into real products.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="flex flex-wrap justify-center gap-4 mb-6 sm:mb-8"
          >
            
            <ResumeButton/>
            <a
              href="#projects"
              className="border border-gray-400 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:shadow-[0_0_10px_#fff] transition-all text-sm sm:text-base"
            >
              See my works
            </a>
          </motion.div>

          {/* Floating Social Icons - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="flex md:hidden justify-center items-center gap-6 mt-2 mb-6"
          >
            <a
              href="https://github.com/jishnuanil2003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all hover:scale-110"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/jishnu-a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all hover:scale-110"
            >
              <FaLinkedinIn size={22} />
            </a>
            <a
              href="https://wa.me/918281157786"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-all hover:scale-110"
            >
              <FaWhatsapp size={22} />
            </a>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className="w-full flex flex-col items-center mt-8 sm:mt-12"
          >
            <p className="text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm tracking-widest uppercase">
              Technologies I Used
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-2/3 md:max-w-4xl mt-2 md:mt-4 px-4">
              {techStack.map((tech, i) => (
                <div
                  key={i}
                  className="bg-gray-800/60 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium text-gray-300 hover:text-white hover:shadow-[0_0_10px_#fff] transition-all cursor-pointer"
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Services/>
      <Projects/>
      <About/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </>
  );
}