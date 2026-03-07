import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { TechTerminal } from './components/TechTerminal';
import { BentoProjects } from './components/BentoProjects';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#060a12] text-slate-200 selection:bg-indigo-500/30 selection:text-white">
      {/* Global Background Noise / Gradient */}
      <div className="fixed inset-0 pointer-events-none opacity-40 z-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#060a12] to-[#060a12]"></div>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Story />
        <TechTerminal />
        <BentoProjects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center bg-[#060a12] relative z-10">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Jaicker Lozano. Desarrollador Frontend | Creando experiencias digitales modernas ⚡
        </p>
      </footer>
    </div>
  );
}
