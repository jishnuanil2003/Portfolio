import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, Check, Copy } from "lucide-react";

const PHONE_DISPLAY = "+91 89219 51948";
const PHONE_RAW = "+918921951948";
const EMAIL = "aniljishnu07@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PHONE_RAW);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const handleOpenGmail = () => {
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;
    window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-6 md:px-20 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16"
    >
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/3"
      >
        <h2 className="text-4xl font-bold mb-4">Get in touch</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          It is really important to keep in touch with you, so I can answer any
          queries that interest you. Tap a card below to reach out directly.
        </p>
      </motion.div>

      {/* Right Section - Contact Cards */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {/* Phone Card */}
        <motion.button
          type="button"
          onClick={handleCopyPhone}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="group relative flex flex-col items-start gap-4 border border-gray-800 rounded-2xl p-6 sm:p-8 text-left hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:border-gray-600 transition-all w-full"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-800/70 text-green-400">
            <Phone size={22} />
          </div>
          <div>
            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest mb-1">
              Phone
            </p>
            <p className="text-lg sm:text-xl font-semibold text-white break-all">
              {PHONE_DISPLAY}
            </p>
          </div>
          <span className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors">
            {copied ? (
              <>
                <Check size={16} className="text-green-400" /> Copied to clipboard
              </>
            ) : (
              <>
                <Copy size={16} /> Tap to copy
              </>
            )}
          </span>
        </motion.button>

        {/* Email Card */}
        <motion.button
          type="button"
          onClick={handleOpenGmail}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="group relative flex flex-col items-start gap-4 border border-gray-800 rounded-2xl p-6 sm:p-8 text-left hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:border-gray-600 transition-all w-full"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-800/70 text-blue-400">
            <Mail size={22} />
          </div>
          <div>
            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest mb-1">
              Email
            </p>
            <p className="text-lg sm:text-xl font-semibold text-white break-all">
              {EMAIL}
            </p>
          </div>
          <span className="text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors">
            Tap to compose in Gmail
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}
