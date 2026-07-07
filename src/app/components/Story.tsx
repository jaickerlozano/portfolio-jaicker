import React from 'react';
import { motion } from 'motion/react';
import profileImg from '../../assets/img/foto-portfolio.jpg';
import { Code2, Cog, Server } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Story() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:col-span-12 gap-12 items-center">
          {/* Image & Glow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-cyan-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="absolute inset-2 bg-surface rounded-full border border-[var(--glass-border)] z-10 overflow-hidden">
                <img
                  src={profileImg}
                  alt="Jaicker Lozano - Full Stack Developer"
                  className="w-full h-[130%] object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700 grayscale hover:grayscale-0 mix-blend-luminosity hover:mix-blend-normal"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </motion.div>

          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              {t('story.titleStart')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400">
                {t('story.titleHighlight')}
              </span>
              {t('story.titleEnd')}
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>{t('story.paragraph1')}</p>
              <p>{t('story.paragraph2')}</p>
              <p>{t('story.paragraph3')}</p>
            </div>

            {/* Micro-cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              <div className="bg-[var(--glass)] border border-[var(--glass-border)] rounded-xl p-5 hover:bg-[var(--glass-hover)] transition-colors">
                <Server className="text-indigo-500 dark:text-indigo-400 mb-3" size={24} />
                <h3 className="text-foreground font-medium mb-1">
                  {t('story.microCards.backend.title')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('story.microCards.backend.description')}
                </p>
              </div>
              <div className="bg-[var(--glass)] border border-[var(--glass-border)] rounded-xl p-5 hover:bg-[var(--glass-hover)] transition-colors">
                <Code2 className="text-cyan-500 dark:text-cyan-400 mb-3" size={24} />
                <h3 className="text-foreground font-medium mb-1">
                  {t('story.microCards.frontend.title')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('story.microCards.frontend.description')}
                </p>
              </div>
              <div className="bg-[var(--glass)] border border-[var(--glass-border)] rounded-xl p-5 hover:bg-[var(--glass-hover)] transition-colors">
                <Cog className="text-indigo-500 dark:text-indigo-400 mb-3" size={24} />
                <h3 className="text-foreground font-medium mb-1">
                  {t('story.microCards.ai.title')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('story.microCards.ai.description')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
