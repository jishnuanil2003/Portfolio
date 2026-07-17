import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResumeButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-center mt-2 md:mt-3 cursor-pointer">
      <a
        onClick={() => setOpen(true)}
        className="bg-gray-100 text-black px-5 md:py-3.5 py-3 rounded-lg font-medium hover:shadow-[0_0_10px_#fff] transition-all text-sm sm:text-base"
      >
        View Resume
      </a>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-4 w-[90%] md:w-[70%] h-[80%] relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                className="absolute top-4 right-6 text-black md:text-white font-bold text-2xl"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
              <iframe
                src="/PythonDeveloperResume.pdf"
                className="h-full w-full"
                title="Resume Preview"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}