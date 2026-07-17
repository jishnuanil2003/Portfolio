import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', link: '#' },
        { name: 'Service', link: '#services' },
        { name: 'Projects', link: '#projects' },
        { name: 'About', link: '#about' },
        { name: 'FAQ’s', link: '#faq' },
        { name: 'Contact', link: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 w-full z-50 mb-40"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-white signature text-4xl font-semibold">
                    Jishnu
                </a>

                {/* Desktop Nav */}
                <ul className="hidden md:flex space-x-8 text-white font-medium">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.link}
                                className="hover:text-gray-400 transition-colors"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800"
                >
                    <ul className="flex flex-col items-center py-6 space-y-5 text-white">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.link}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg hover:text-gray-400 transition-colors"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </motion.nav>
    );
}