'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu when clicked
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-[100] backdrop-blur-md bg-[#09090b]/70 border-b border-zinc-800/50 px-6 py-4"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Logo Branding */}
          <div 
            onClick={scrollToTop}
            className="text-xl font-bold tracking-wider text-white cursor-pointer group relative z-[110]"
          >
            <span className="text-cyan-400 group-hover:text-purple-400 transition-colors">MILES</span> OFFICIAL AGENCY
          </div>

          {/* Desktop Menu Links (Hidden on Mobile) */}
          <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-zinc-400 relative z-[110]">
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="hover:text-white transition-colors cursor-pointer">Home</a>
            <a href="#services" onClick={(e) => handleScroll(e, 'services')} className="hover:text-white transition-colors cursor-pointer">Services</a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-white transition-colors cursor-pointer">Contact</a>
          </div>

          {/* Right Side Action Button (Desktop Only) */}
          <div className="hidden sm:block relative z-[110]">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-5 py-2 rounded-xl bg-zinc-900 text-white text-xs font-semibold border border-zinc-800 hover:bg-zinc-800 transition-all cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle Button (Visible only on mobile) */}
          <div className="sm:hidden flex items-center relative z-[110]">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-zinc-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Dropdown Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#09090b] z-[90] flex flex-col justify-center items-center gap-8 text-xl font-medium px-6"
          >
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              className="text-zinc-400 hover:text-cyan-400 transition-colors py-2 block w-full text-center border-b border-zinc-900"
            >
              Home
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleScroll(e, 'services')}
              className="text-zinc-400 hover:text-cyan-400 transition-colors py-2 block w-full text-center border-b border-zinc-900"
            >
              Services
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="text-zinc-400 hover:text-cyan-400 transition-colors py-2 block w-full text-center border-b border-zinc-900"
            >
              Contact
            </a>
            <button 
              onClick={() => { setIsOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="mt-4 w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-black font-bold text-sm"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}