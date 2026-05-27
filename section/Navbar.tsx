'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  // Smooth scroll helper function
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      // Fixed with z-[100] to sit cleanly above all body elements
      className="fixed top-0 left-0 w-full z-[100] backdrop-blur-md bg-[#09090b]/70 border-b border-zinc-800/50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Branding Logo - Scrolls to top */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold tracking-wider text-white cursor-pointer group relative z-[110]"
        >
          <span className="text-cyan-400 group-hover:text-purple-400 transition-colors">MILES</span> OFFICIAL AGENCY
        </div>

        {/* Active Desktop Menu Links */}
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-zinc-400 relative z-[110]">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Home
          </a>
          <a 
            href="#services" 
            onClick={(e) => handleScroll(e, 'services')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Services
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, 'contact')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </a>
        </div>

        {/* Right Side Action Button */}
        <div className="relative z-[110]">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-5 py-2 rounded-xl bg-zinc-900 text-white text-xs font-semibold border border-zinc-800 hover:bg-zinc-800 transition-all cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  );
}