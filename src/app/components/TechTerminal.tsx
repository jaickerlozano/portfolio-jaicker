import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SKILLS = [
  // Backend
  { name: 'Python', category: 'Backend', color: 'text-blue-500' },
  { name: 'Django', category: 'Backend', color: 'text-green-500' },
  { name: 'Django REST Framework', category: 'Backend/API', color: 'text-red-500' },
  // Frontend
  { name: 'React', category: 'Frontend', color: 'text-cyan-400' },
  { name: 'TypeScript', category: 'Language', color: 'text-blue-400' },
  { name: 'JavaScript', category: 'Language', color: 'text-yellow-400' },
  { name: 'Tailwind CSS', category: 'Styling', color: 'text-teal-400' },
  { name: 'HTML5/CSS3', category: 'Frontend', color: 'text-orange-400' },
  // Database
  { name: 'PostgreSQL', category: 'Database', color: 'text-blue-600' },
  // Tools & DevOps
  { name: 'Git & GitHub', category: 'Tools', color: 'text-red-400' },
  { name: 'Docker', category: 'DevOps', color: 'text-blue-400' },
  { name: 'Vite', category: 'Tools', color: 'text-purple-400' },
  { name: 'Cloudinary', category: 'Services', color: 'text-yellow-400' },
  // AI
  { name: 'AI Agents', category: 'AI/Workflow', color: 'text-pink-400' },
];

export function TechTerminal() {
  const { t } = useTranslation();
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const linesToType = useMemo(
    () => [
      t('skills.terminal.install'),
      t('skills.terminal.installing'),
      t('skills.terminal.fetch'),
      t('skills.terminal.success'),
      t('skills.terminal.run'),
    ],
    [t]
  );

  useEffect(() => {
    if (currentLineIndex < linesToType.length) {
      const currentLine = linesToType[currentLineIndex];

      if (currentCharIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setCurrentCharIndex(prev => prev + 1);
        }, 30); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTypedLines(prev => [...prev, currentLine]);
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 300); // Delay between lines
        return () => clearTimeout(timeout);
      }
    }
  }, [currentLineIndex, currentCharIndex, linesToType]);

  const showSkills = currentLineIndex >= linesToType.length;

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 flex items-center justify-center md:justify-start gap-3">
            <TerminalIcon className="text-indigo-500 dark:text-indigo-400" size={40} />
            {t('skills.title')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400">
              {t('skills.titleHighlight')}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">{t('skills.description')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[var(--terminal-bg)] rounded-xl border border-[var(--glass-border)] shadow-2xl overflow-hidden font-mono text-sm sm:text-base"
          >
            {/* Terminal Header */}
            <div className="bg-[var(--terminal-header)] border-b border-[var(--glass-border)] px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto text-muted-foreground text-xs flex-1 text-center pr-10">
                jaicker@dev-environment:~
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 h-[320px] overflow-y-auto custom-scrollbar">
              <div className="text-[var(--terminal-text)] space-y-2">
                {typedLines.map((line, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-indigo-500 dark:text-indigo-400 shrink-0">~</span>
                    <span
                      className={
                        line.startsWith('Success') ? 'text-green-500 dark:text-green-400' : ''
                      }
                    >
                      {line}
                    </span>
                  </div>
                ))}

                {currentLineIndex < linesToType.length && (
                  <div className="flex gap-2">
                    <span className="text-indigo-500 dark:text-indigo-400 shrink-0">~</span>
                    <span>
                      {linesToType[currentLineIndex].substring(0, currentCharIndex)}
                      <span className="w-2 h-4 bg-[var(--terminal-cursor)] inline-block ml-1 animate-pulse align-middle"></span>
                    </span>
                  </div>
                )}

                {showSkills && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mt-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-[var(--terminal-text)] mt-4">
                      {SKILLS.map((skill, index) => (
                        <div key={index} className="flex">
                          <span className="text-cyan-500 dark:text-cyan-400 mr-2">➜</span>
                          <span className={`font-semibold ${skill.color}`}>{skill.name}</span>
                          <span className="text-[var(--terminal-muted)] ml-2 text-xs self-center">
                            [{skill.category}]
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex gap-2">
                      <span className="text-indigo-500 dark:text-indigo-400">~</span>
                      <span className="w-2 h-4 bg-[var(--terminal-cursor)] inline-block align-middle animate-pulse"></span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Skill Tags / Badges side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-wrap content-start gap-3"
          >
            {SKILLS.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="px-4 py-3 bg-[var(--glass)] backdrop-blur-sm border border-[var(--glass-border)] rounded-lg flex items-center gap-3 cursor-default"
              >
                <div className={`w-2 h-2 rounded-full bg-current ${skill.color}`}></div>
                <span className="text-foreground font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
