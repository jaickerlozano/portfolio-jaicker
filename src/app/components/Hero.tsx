import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ChevronDown,
  Activity,
  ShieldCheck,
  Zap,
  Layers,
  Database,
  CheckCircle2,
} from 'lucide-react';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--hero-glow-1)] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--hero-glow-2)] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--glass)] border border-[var(--glass-border)] text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm font-medium mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {t('hero.available')}
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
            >
              {t('hero.title')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400">
                {t('hero.titleHighlight')}
              </span>{' '}
              {t('hero.titleEnd')}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a
                href="#contact"
                aria-label="Contact for a project"
                className="px-7 py-3.5 bg-foreground text-background font-medium rounded-full hover:bg-muted transition-colors flex items-center gap-2 group shadow-sm hover:shadow"
              >
                {t('hero.contactMe')}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                aria-label="View services"
                className="px-7 py-3.5 bg-[var(--glass)] text-foreground font-medium rounded-full border border-[var(--glass-border)] hover:bg-[var(--glass-hover)] transition-colors"
              >
                {t('nav.services')}
              </a>
              <a
                href="#projects"
                aria-label="View portfolio solutions"
                className="px-5 py-3.5 text-muted-foreground hover:text-foreground font-medium transition-colors text-sm"
              >
                {t('hero.viewProjects')} →
              </a>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--glass-border)] max-w-lg"
            >
              <div>
                <p className="text-xl sm:text-2xl font-bold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground font-medium">End-to-End</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-foreground">Django & React</p>
                <p className="text-xs text-muted-foreground font-medium">Stack Especializado</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-foreground">Ingeniería</p>
                <p className="text-xs text-muted-foreground font-medium">Enfoque de Procesos</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Architectural Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Backlight */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-60"></div>

            {/* Card Container */}
            <div className="relative rounded-2xl bg-[var(--surface)] border border-[var(--glass-border)] shadow-2xl p-6 backdrop-blur-xl">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[var(--glass-border)]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 font-mono text-xs text-muted-foreground">
                    architecture_overview.ts
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  Production Ready
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3.5 rounded-xl bg-[var(--glass)] border border-[var(--glass-border)]">
                  <div className="flex items-center gap-2 text-indigo-500 dark:text-indigo-400 mb-1">
                    <Zap size={16} />
                    <span className="text-xs font-semibold text-muted-foreground">Latencia</span>
                  </div>
                  <p className="text-lg font-bold text-foreground">&lt; 120ms</p>
                  <p className="text-[11px] text-muted-foreground">Respuesta óptima de API</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[var(--glass)] border border-[var(--glass-border)]">
                  <div className="flex items-center gap-2 text-emerald-500 dark:text-emerald-400 mb-1">
                    <ShieldCheck size={16} />
                    <span className="text-xs font-semibold text-muted-foreground">Integridad</span>
                  </div>
                  <p className="text-lg font-bold text-foreground">ACID / Lock</p>
                  <p className="text-[11px] text-muted-foreground">Concurrencia a nivel de fila</p>
                </div>
              </div>

              {/* Pipeline Blueprint */}
              <div className="space-y-3 mb-5">
                <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--glass)] border border-[var(--glass-border)] text-xs">
                  <div className="flex items-center gap-2.5">
                    <Layers size={16} className="text-cyan-500" />
                    <div>
                      <p className="font-semibold text-foreground">Frontend Moderno</p>
                      <p className="text-muted-foreground text-[11px]">
                        React 19 + TypeScript + Tailwind
                      </p>
                    </div>
                  </div>
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--glass)] border border-[var(--glass-border)] text-xs">
                  <div className="flex items-center gap-2.5">
                    <Activity size={16} className="text-indigo-500" />
                    <div>
                      <p className="font-semibold text-foreground">Backend & Lógica de Negocio</p>
                      <p className="text-muted-foreground text-[11px]">
                        Django REST Framework (Python 3.12)
                      </p>
                    </div>
                  </div>
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--glass)] border border-[var(--glass-border)] text-xs">
                  <div className="flex items-center gap-2.5">
                    <Database size={16} className="text-emerald-500" />
                    <div>
                      <p className="font-semibold text-foreground">Persistencia & Rendimiento</p>
                      <p className="text-muted-foreground text-[11px]">
                        PostgreSQL + Cloudinary CDN
                      </p>
                    </div>
                  </div>
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                </div>
              </div>

              {/* Bottom Tagline */}
              <div className="flex items-center justify-between pt-3 border-t border-[var(--glass-border)] text-xs text-muted-foreground font-mono">
                <span>Jaicker Lozano</span>
                <span className="text-indigo-500 dark:text-indigo-400">Full Stack Engineer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Down Arrow Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce hidden md:block"
      >
        <a href="#services" aria-label="Scroll to services">
          <ChevronDown size={22} />
        </a>
      </motion.div>
    </section>
  );
}
