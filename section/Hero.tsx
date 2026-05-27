'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  // Smooth scroll handler for hero buttons
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-[#09090b] text-white pt-20 px-4 overflow-hidden">
      {/* Background radial ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Dynamic Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-8"
        >
          Next-Gen Digital Solutions
        </motion.div>

        {/* Catchy Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-3xl mx-auto"
        >
          We Scale Businesses Using <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">AI & Interactive</span> Tech
        </motion.h1>

        {/* Descriptive Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-sm sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed px-2"
        >
          Automate your operations with intelligent bots, engage users with immersive 2D/3D games, and dominate local search rankings with premium web development and SEO.
        </motion.p>

        {/* Fully Clickable Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm sm:max-w-none mx-auto w-full px-4"
        >
          <button
            onClick={() => handleScroll('contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-sm shadow-lg hover:opacity-90 transition-all active:scale-95 cursor-pointer"
          >
            Book a Free Strategy Call
          </button>
          
          <button
            onClick={() => handleScroll('services')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900 text-zinc-300 font-semibold text-sm border border-zinc-800 hover:text-white hover:bg-zinc-800 transition-all active:scale-95 cursor-pointer"
          >
            Explore Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}