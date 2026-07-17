import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Medico",
      subtitle: "AI Chat-Based Doctor Appointment Platform",
      status: "In Development",
      desc: "Medico is an AI-powered healthcare platform that lets patients book doctor appointments through a conversational chat interface. It uses a semantic router built on Gemini Flash to understand patient intent and route conversations, backed by a Django REST API and a React frontend with a glassmorphism-styled UI.",
      stack: ["React.js", "Django", "DRF", "Gemini Flash", "Semantic Routing", "PostgreSQL"],
      github: "",
      live: "",
    },
    {
      id: 2,
      name: "WebRAG",
      subtitle: "RAG-Based Chatbot",
      status: null,
      desc: "WebRAG is a full-stack Retrieval-Augmented Generation chatbot that answers questions grounded in uploaded documents. It uses LangChain with LLaMA 3.3 70B via Groq for fast inference and ChromaDB for vector storage. I optimized the deployment to fit within a 512MB memory limit by offloading embedding generation to Hugging Face's inference servers, keeping the app light enough to run on Render's free tier.",
      stack: ["LangChain", "Groq (LLaMA 3.3 70B)", "ChromaDB", "Hugging Face Embeddings", "React.js", "Vercel", "Render"],
      github: "https://github.com/jishnuanil2003/RealBot",
      live: "https://real-bot-five.vercel.app/",
    },
    {
      id: 3,
      name: "FAQ Bot",
      subtitle: "RAG-Based E-Commerce Support Chatbot",
      status: null,
      desc: "A retrieval-augmented chatbot built for e-commerce support that resolves customer queries about products and order status. It retrieves relevant context from a knowledge base before generating grounded, accurate responses instead of relying purely on an LLM's parametric knowledge.",
      stack: ["Python", "LangChain", "RAG", "Vector Database", "LLM API"],
      github: "https://github.com/jishnuanil2003/FAQ_Bot",
      live: "",
    },
    {
      id: 4,
      name: "Car Damage Classification",
      subtitle: "CNN-Based Vehicle Damage Detection Model",
      status: null,
      desc: "A computer vision model built for the insurance domain that detects and classifies car damage from a single image across six damage categories. It uses a fine-tuned ResNet-50 architecture and is deployed as an interactive Streamlit app for quick, real-time predictions.",
      stack: ["Python", "TensorFlow", "ResNet-50", "CNN", "Streamlit"],
      github: "https://github.com/jishnuanil2003/Car_damage_classification",
      live: "https://cardamageclassification-brhjz6mcyhvq2kdlzebuk2.streamlit.app/",
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-20 px-6 md:px-20">
        <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/3 mb-12 md:mb-0"
      >
      <h2 className="text-4xl font-bold mb-12">Projects I’ve Created</h2>

      <div className="flex flex-col gap-12 md:w-5xl">
        {projects.map((project) => (
          <div key={project.id}>
            {/* Collapsed Header */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              onClick={() =>
                setExpanded(expanded === project.id ? null : project.id)
              }
              className="cursor-pointer border-b border-gray-800 pb-6"
            >
              <h3 className="text-2xl font-semibold inline-block hover:text-gray-300 transition-colors">
                {project.name}
              </h3>
              <span className="text-gray-400 font-normal text-lg ml-2">
                – {project.subtitle}
              </span>
              {project.status && (
                <span className="ml-3 align-middle inline-block bg-yellow-400/10 text-yellow-400 text-xs font-medium px-3 py-1 rounded-full border border-yellow-400/30">
                  {project.status}
                </span>
              )}
            </motion.div>

            {/* Expanded View */}
            <AnimatePresence>
              {expanded === project.id && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 border-b border-gray-800 pb-10"
                >
                  <p className="text-gray-400 mb-6 md:max-w-3xl">{project.desc}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 text-gray-300 px-4 py-1 rounded-md text-sm hover:shadow-[0_0_8px_#fff] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:shadow-[0_0_10px_#fff] transition-all"
                      >
                        Github
                      </a>
                    ) : (
                      <span className="bg-gray-800 text-gray-500 px-6 py-2 rounded-lg font-semibold cursor-not-allowed">
                        Github (Coming Soon)
                      </span>
                    )}
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-400 text-white px-6 py-2 rounded-lg hover:shadow-[0_0_10px_#fff] transition-all"
                      >
                        Live Link
                      </a>
                    ) : (
                      <span className="border border-gray-800 text-gray-600 px-6 py-2 rounded-lg cursor-not-allowed">
                        Live Link (Coming Soon)
                      </span>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      </motion.div>
    </section>
  );
}
