import React from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'next-themes';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { TechTerminal } from './components/TechTerminal';
import { BentoProjects } from './components/BentoProjects';
import { Contact } from './components/Contact';

export default function App() {
  const { t } = useTranslation();
  
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="min-h-screen bg-[#060a12] dark:bg-[#060a12] bg-gray-50 text-slate-200 dark:text-slate-200 selection:bg-indigo-500/30 selection:text-white dark:selection:bg-indigo-500/30 dark:selection:text-white">
        {/* Global Background Gradient - Dark Mode */}
        <div className="fixed inset-0 pointer-events-none opacity-40 z-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#060a12] to-[#060a12] dark:from-indigo-900/10 dark:via-[#060a12] dark:to-[#060a12]"></div>

        {/* Light mode background - simple gray */}
        <div className="fixed inset-0 pointer-events-none opacity-0 dark:opacity-40 z-0 bg-gray-50"></div>

        <Navbar />

        <main className="relative z-10">
          <Hero />
          <Story />
          <TechTerminal />
          <BentoProjects />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-white/5 py-8 text-center bg-gray-50 dark:bg-[#060a12] relative z-10">
          <div className="flex justify-center gap-6 mb-4">
            <a href="mailto:jlozano.devcode@gmail.com" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-slate-500 hover:text-gray-900 dark:hover:text-white transition-colors" title="Correo">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/jaicker-rafael-lozano-flores-970197264/" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://github.com/JaickerLozano" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-slate-500 hover:text-gray-900 dark:hover:text-white transition-colors" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://wa.me/56958514284" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-slate-500 hover:text-green-600 dark:hover:text-green-400 transition-colors" title="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
            </a>
          </div>
          <p className="text-gray-600 dark:text-slate-500 text-sm">
            © {new Date().getFullYear()} {t('footer.copyright')} ⚡
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}
