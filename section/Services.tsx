'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Gamepad2, Globe } from 'lucide-react';

const services = [
  {
    icon: <Bot className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400" />,
    title: 'AI Automation',
    description: 'Streamline your operations with intelligent AI workflows, automated customer service bots, and data-driven systems designed to save thousands of manual hours.',
  },
  {
    icon: <Gamepad2 className="w-7 h-7 sm:w-8 sm:h-8 text-purple-400" />,
    title: '2D/3D Game Development',
    description: 'Engage audiences with custom, interactive gaming experiences. From web-based 2D mini-games to full immersive 3D simulations built for modern brand engagement.',
  },
  {
    icon: <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />,
    title: 'Web Creation & SEO',
    description: 'Stunning, high-performance web applications built with Next.js. Optimized for ultra-fast loading speeds and local SEO strategies to dominate search rankings.',
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-16 sm:py-20 px-4 bg-[#09090b] text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Text - Responsive Sizes */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-white">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Expertise</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto px-2">
            We engineer high-performance digital systems to automate your workload and skyrocket your online presence.
          </p>
        </div>

        {/* Services Cards Grid - Fully Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-md mx-auto md:max-w-none">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700/80 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="mb-5 p-3 w-fit rounded-xl bg-zinc-900 border border-zinc-800 group-hover:scale-105 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white group-hover:text-cyan-300 transition-colors">
                {service.title
              }</h3>
              
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}