import { motion } from "framer-motion";
import { Code2, Server, Brain, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code2 size={36} className="text-blue-400" />,
      title: "Frontend Dev",
      description:
        "I build clean, responsive interfaces with React and Tailwind CSS, turning ML outputs and product ideas into interactive dashboards, chat interfaces, and user-friendly web apps.",
    },
    {
      icon: <Server size={36} className="text-green-400" />,
      title: "Backend Dev",
      description:
        "I design and ship robust server-side systems using Django, DRF, and FastAPI — RESTful APIs, authentication, database modeling with PostgreSQL, and scalable architecture for data-driven apps.",
    },
    {
      icon: <Brain size={36} className="text-pink-400" />,
      title: "AI Development",
      description:
        "I build and train machine learning models end-to-end — from data preprocessing and feature engineering to CNNs, NLP pipelines, and classical ML with PyTorch, TensorFlow, and Scikit-learn.",
    },
    {
      icon: <Sparkles size={36} className="text-yellow-400" />,
      title: "AI Integration",
      description:
        "I integrate LLMs and RAG pipelines into real products — connecting LangChain, vector databases, and APIs like Groq and Gemini to add intelligent chat, search, and automation to full-stack apps.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-black text-white py-20 px-6 md:px-20 flex flex-col md:flex-row justify-between items-start"
    >
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/3 mb-12 md:mb-0"
      >
        <h2 className="text-4xl font-bold mb-6">My Services</h2>
        <p className="text-gray-400 leading-relaxed">
          I combine full-stack engineering with machine learning to build
          products that are both well-designed and genuinely intelligent.
        </p>
      </motion.div>

      {/* Right Service Cards */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="grid grid-cols-1 gap-10 md:w-2/3"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex items-start gap-4 p-6 rounded-2xl transition-all"
          >
            <div className="flex">{service.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
