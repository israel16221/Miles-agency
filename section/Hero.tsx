'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden border-b border-zinc-800 bg-[#09090b]">
      
      {/* Background visual glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-cyan-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      {/* Animated Content Wrapper */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl z-10"
      >
        <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/50">
          Next-Gen Digital Solutions
        </span>
        
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-7xl leading-tight">
          We Scale Businesses Using <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AI & Interactive Tech</span>
        </h1>
        
        <p className="mt-6 text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto">
          Automate your operations with intelligent bots, engage users with immersive 2D/3D games, and dominate local search rankings with premium web development and SEO.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20">
            Book a Free Strategy Call
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900 text-white font-semibold border border-zinc-800 hover:bg-zinc-800 transition-all">
            Explore Services
          </button>
        </div>
      </motion.div>
    </section>
  );
}