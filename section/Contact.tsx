'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: 'AI Automation', message: '' });
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('LOADING');

    try {
      // Make sure your Formspree endpoint link is here!
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
    <section id="contact" className="w-full py-20 px-4 bg-[#09090b] text-white border-t border-zinc-950">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-white">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Epic</span>
          </h2>
          <p className="mt-4 text-zinc-400">
            Have an idea or need an operational upgrade? Drop your info below and let's optimize your workspace.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl bg-zinc-900/30 border border-zinc-800/80 backdrop-blur-md"
        >
          {status === 'SUCCESS' ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">Message Sent Securely!</h3>
              <p className="text-zinc-400">Thank you, bossman. The data has been routed. We will connect shortly.</p>
              <button 
                onClick={() => setStatus('IDLE')}
                className="mt-6 px-6 py-2 rounded-xl bg-zinc-800 text-white text-sm hover:bg-zinc-700 transition-all"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-cyan-500 transition-colors" 
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
                    className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-cyan-500 transition-colors" 
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Project Type</label>
                <select 
                  value={form.service}
                  onChange={(e) => setForm({...form, service: e.target.value})}
                  className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none"
                >
                  <option>AI Automation</option>
                  <option>2D/3D Game Dev</option>
                  <option>Web Creation & SEO</option>
                  <option>Other / General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Tell Us About Your Project</label>
                <textarea 
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}
                  className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none" 
                  placeholder="Describe your ideal workflow or interactive experience..."
                />
              </div>

              <button 
                type="submit" 
                disabled={status === 'LOADING'}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-black font-bold hover:opacity-90 transition-all shadow-md disabled:opacity-50"
              >
                {status === 'LOADING' ? 'Encrypting & Routing...' : 'Send Secure Message'}
              </button>

              {status === 'ERROR' && (
                <p className="text-red-400 text-sm text-center font-medium">
                  Something went wrong. Please try again or check your endpoint link.
                </p>
              )}
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}