'use client';
import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 bg-[#09090b] border-t border-zinc-900 text-center text-sm text-zinc-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Updated Footer Copyright */}
        <div>
          © {new Date().getFullYear()} Miles Official Agency. All rights reserved.
        </div>

        {/* Right Side: Quick Subtext branding */}
        <div className="text-xs tracking-widest uppercase text-zinc-600">
          Built with Next.js & Tailwind
        </div>
      </div>
    </footer>
  );
}