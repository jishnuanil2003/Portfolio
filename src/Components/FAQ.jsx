import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Who are you? and what do you do",
      answer:
        "I’m Jishnu Anil, a Full Stack Web Developer and Designer passionate about creating visually appealing and functional digital products. I specialize in building responsive web apps using React, Django, and Tailwind CSS.",
    },
    {
      id: 2,
      question: "What technologies you work with",
      answer:
        "I primarily work with React.js, Next.js, Tailwind CSS, Django REST Framework, PostgreSQL, and modern tools like Figma, Framer Motion, and Docker for deployment.",
    },
    {
      id: 3,
      question: "How do you approach building an AI feature from scratch",
      answer:
        "Honestly, I try not to jump straight to a model. I start by figuring out what 'good' actually looks like for the problem, and whether it even needs a custom model or if a well-prompted LLM with the right context (RAG, tools, etc.) gets the job done faster. If it does need a model, I spend real time on the data first — that's usually where most of the actual improvement comes from, not architecture tweaks. Then I build the smallest version that works end-to-end, test it against real inputs, and only add complexity once I know where it's actually failing.",
    },
    {
      id: 4,
      question: "How do you approach a new project",
      answer:
        "I start by understanding client goals, target audience, and required features. Then I create wireframes, finalize the design system, and move on to development using a clean, scalable, and maintainable architecture.",
    },
    {
      id: 5,
      question: "What kind of projects are you currently working on",
      answer:
        "I'm currently building Medico, an AI-powered doctor appointment platform where patients can chat naturally to find and book appointments, powered by a semantic router built on Gemini Flash.",
    },
  ];

  return (
    <section
      id="faq"
      className="bg-black text-white py-20 px-6 md:px-20 mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Frequently asked questions
      </h2>

      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.id} className="border-b border-gray-800 pb-4">
            {/* Question Header */}
            <button
              onClick={() => setOpen(open === faq.id ? null : faq.id)}
              className="w-full flex justify-between items-center text-left text-gray-200 hover:text-white transition-all"
            >
              <span className="text-lg md:text-xl font-medium">
                {faq.question}
              </span>
              <span>
                {open === faq.id ? (
                  <Minus size={20} className="text-gray-400" />
                ) : (
                  <Plus size={20} className="text-gray-400" />
                )}
              </span>
            </button>

            {/* Answer Drawer */}
            <AnimatePresence>
              {open === faq.id && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-gray-400 leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}