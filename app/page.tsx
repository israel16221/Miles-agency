import React from 'react';
import Navbar from '../section/Navbar';
import Hero from '../section/Hero';
import Services from '../section/Services';
import Contact from '../section/Contact';
import Footer from '../section/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#09090b] text-white pt-24 relative z-0">
      {/* Global Navigation Header */}
      <Navbar />
      
      {/* Core Body Blocks */}
      <Hero />
      <Services />
      <Contact />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}