'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: 'AI Automation', message: '' });
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('LOADING');

    try {
      // 1. REPLACE WITH YOUR ACTUAL FORMSPREE LINK HERE:
      const response = await fetch('https://formspree.io/f/mredovpv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setForm({ name: '', email: '', service: 'AI Automation', message: '' });
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <section id="contact" className="w-full py-16 sm:py-20 px-4 bg-[#09090b] text-white border-t border-zinc-950">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Text */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-white">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Epic</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Have an idea or need an operational upgrade? Connect with us directly or drop your details below.
          </p>
        </div>

        {/* Dynamic Multi-Column Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          
          {/* Left Column: Direct Agency Contact Info Details (Takes 2 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4 w-full"
          >
            <div className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800/60 backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-6 tracking-wide uppercase text-xs text-zinc-400">Direct Channels</h3>
              
              <div className="space-y-6">
                {/* Phone Channel Link Block */}
                <a href="tel:+2348136836992" className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Call or WhatsApp</p>
                    <p className="text-sm sm:text-base text-zinc-200 font-semibold group-hover:text-cyan-400 transition-colors">+234 Your Number Here</p>
                  </div>
                </a>

                {/* Email Channel Link Block */}
                <a href="mailto:emzudokplc@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-purple-400 group-hover:border-purple-500/50 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Official Email</p>
                    <p className="text-sm sm:text-base text-zinc-200 font-semibold group-hover:text-purple-400 transition-colors">yourbrand@email.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Subtext info badge */}
            <div className="p-4 rounded-xl bg-zinc-900/10 border border-zinc-900 text-xs text-zinc-500 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-zinc-600 flex-shrink-0" />
              <span>Direct messages are routed immediately to security teams. Response turnaround time is generally under 2 hours.</span>
            </div>
          </motion.div>

          {/* Right Column: Secure Form Handler (Takes 3 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 w-full p-6 sm:p-10 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 backdrop-blur-md"
          >
            {status === 'SUCCESS' ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Message Sent Securely!</h3>
                <p className="text-sm text-zinc-400">The data has been encrypted and routed. We will connect shortly.</p>
                <button 
                  onClick={() => setStatus('IDLE')}
                  className="mt-6 px-6 py-2 rounded-xl bg-zinc-800 text-white text-xs font-semibold hover:bg-zinc-700 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                      className="w-full p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors" 
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                      className="w-full p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors" 
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Project Type</label>
                  <select 
                    value={form.service}
                    onChange={(e) => setForm({...form, service: e.target.value})}
                    className="w-full p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none"
                  >
                    <option>AI Automation</option>
                    <option>2D/3D Game Dev</option>
                    <option>Web Creation & SEO</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Project Scope</label>
                  <textarea 
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}
                    className="w-full p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none" 
                    placeholder="Describe your ideal workflow or interactive experience..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'LOADING'}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-black text-sm font-bold hover:opacity-90 transition-all shadow-md disabled:opacity-50"
                >
                  {status === 'LOADING' ? 'Encrypting & Routing...' : 'Send Secure Message'}
                </button>

                {status === 'ERROR' && (
                  <p className="text-red-400 text-xs text-center font-medium">
                    Something went wrong. Please check your network connection.
                  </p>
                )}
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}