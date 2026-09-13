import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import {
  LayoutDashboard,
  Globe,
  Server,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
} from 'lucide-react';

interface ServiceItem {
  id: 'customSoftware' | 'webPlatforms' | 'apiIntegrations';
  icon: React.ReactNode;
  accentColor: string;
  glowColor: string;
}

const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'customSoftware',
    icon: <LayoutDashboard size={28} className="text-indigo-500 dark:text-indigo-400" />,
    accentColor: 'border-indigo-500/20 hover:border-indigo-500/40',
    glowColor: 'from-indigo-500/10 to-transparent',
  },
  {
    id: 'webPlatforms',
    icon: <Globe size={28} className="text-cyan-500 dark:text-cyan-400" />,
    accentColor: 'border-cyan-500/20 hover:border-cyan-500/40',
    glowColor: 'from-cyan-500/10 to-transparent',
  },
  {
    id: 'apiIntegrations',
    icon: <Server size={28} className="text-emerald-500 dark:text-emerald-400" />,
    accentColor: 'border-emerald-500/20 hover:border-emerald-500/40',
    glowColor: 'from-emerald-500/10 to-transparent',
  },
];

export function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--glass)] border border-[var(--glass-border)] text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Cpu size={14} />
            {t('nav.services')}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight"
          >
            {t('services.title')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400">
              {t('services.titleHighlight')}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            {t('services.description')}
          </motion.p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICE_ITEMS.map((service, index) => {
            const cardKey = `services.cards.${service.id}`;
            const badge = t(`${cardKey}.badge`);
            const title = t(`${cardKey}.title`);
            const description = t(`${cardKey}.description`);
            const points = t(`${cardKey}.points`, { returnObjects: true }) as string[];
            const stack = t(`${cardKey}.stack`, { returnObjects: true }) as string[];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group relative rounded-2xl bg-[var(--surface)] border border-[var(--glass-border)] ${service.accentColor} p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden`}
              >
                {/* Background subtle gradient glow on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${service.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-[var(--glass)] border border-[var(--glass-border)] shadow-sm">
                      {service.icon}
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--glass)] border border-[var(--glass-border)] text-muted-foreground group-hover:text-foreground transition-colors">
                      {badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {description}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="space-y-3 pt-4 border-t border-[var(--glass-border)] mb-6">
                    {Array.isArray(points) &&
                      points.map((point, pIndex) => (
                        <div key={pIndex} className="flex items-start gap-3">
                          <CheckCircle2
                            size={16}
                            className="text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5"
                          />
                          <span className="text-xs sm:text-sm text-foreground/80 font-medium leading-tight">
                            {point}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Tech Stack Pills & Action Link */}
                <div className="relative z-10 pt-4 border-t border-[var(--glass-border)] flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {Array.isArray(stack) &&
                      stack.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-2.5 py-1 text-xs rounded-md bg-[var(--glass)] text-muted-foreground border border-[var(--glass-border)] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors pt-2 group/link"
                  >
                    <span>{t('hero.contactMe')}</span>
                    <ArrowRight
                      size={16}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 rounded-2xl bg-[var(--surface)] border border-[var(--glass-border)] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 shrink-0">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground">
                Enfoque de Ingeniería & Garantía de Calidad
              </h4>
              <p className="text-sm text-muted-foreground">
                Arquitectura limpia, pruebas automatizadas y soporte directo en cada etapa del
                proyecto.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-muted transition-colors flex items-center gap-2 shrink-0 group"
          >
            <span>Cotizar Proyecto</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
