import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Hammer, CheckCircle2, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GithubIcon } from '../../components/icons';

import bookingManagerImg from '../../assets/img/booking-manager.png';
import inventorySystemImg from '../../assets/img/inventory-sistem.png';
import codigoSecretoImg from '../../assets/img/codigo-secreto.jpg';
import vendingServicesImg from '../../assets/img/vending-services.jpg';

export interface ProjectConfig {
  id: 'inventory' | 'booking' | 'ecommerce' | 'vending';
  tags: string[];
  image: string;
  span: string;
  featured: boolean;
  isUnderConstruction?: boolean;
  github?: string;
  demo?: string;
}

const PROJECTS: ProjectConfig[] = [
  {
    id: 'inventory',
    tags: ['Django REST', 'React 19', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Vite'],
    image: inventorySystemImg,
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
    featured: true,
    github: 'https://github.com/jaickerlozano/inventory_sistem_full_stack',
    demo: 'https://inventory-sistem-frontend.onrender.com/',
  },
  {
    id: 'booking',
    tags: ['Django 5.2', 'Python', 'PostgreSQL', 'Cloudinary', 'RBAC', 'Render'],
    image: bookingManagerImg,
    span: 'col-span-1',
    featured: false,
    github: 'https://github.com/jaickerlozano/booking_manager_django',
    demo: 'https://booking-manager-django.onrender.com/',
  },
  {
    id: 'ecommerce',
    tags: ['Django REST', 'React 19', 'TypeScript', 'OpenAPI', 'Tailwind CSS'],
    image: codigoSecretoImg,
    span: 'col-span-1',
    featured: false,
    isUnderConstruction: true,
    github: 'https://github.com/jaickerlozano/codigo_secreto',
  },
  {
    id: 'vending',
    tags: ['React', 'JavaScript', 'Django Backend', 'Tailwind CSS', 'Telemetry'],
    image: vendingServicesImg,
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
    featured: true,
    github: 'https://github.com/jaickerlozano/vending-services-web-app',
  },
];

export function BentoProjects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--glass)] border border-[var(--glass-border)] text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Sparkles size={14} />
            {t('nav.projects')}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight"
          >
            {t('projects.title')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400">
              {t('projects.titleHighlight')}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-3xl"
          >
            {t('projects.description')}
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(420px,auto)]">
          {PROJECTS.map((project, idx) => {
            const itemKey = `projects.items.${project.id}`;
            const title = t(`${itemKey}.title`);
            const description = t(`${itemKey}.description`);
            const badge = t(`${itemKey}.badge`);
            const impact = t(`${itemKey}.impact`);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative rounded-2xl overflow-hidden bg-surface border border-[var(--glass-border)] flex flex-col justify-between p-6 sm:p-7 ${project.span} hover:border-indigo-500/40 hover:shadow-2xl transition-all duration-300 min-h-[420px]`}
              >
                {/* Background Cover Image with Overlay */}
                <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-20 dark:opacity-25 group-hover:opacity-35 dark:group-hover:opacity-40"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/40"></div>
                </div>

                {/* Card Top: Badges */}
                <div className="relative z-10 flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    {project.isUnderConstruction ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                        <Hammer size={13} className="animate-spin-slow" />
                        {badge}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                        <CheckCircle2 size={13} />
                        {badge}
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-md bg-[var(--glass)] border border-[var(--glass-border)] text-muted-foreground">
                    {impact}
                  </span>
                </div>

                {/* Card Middle & Bottom Content */}
                <div className="relative z-10 flex flex-col justify-between flex-1 mt-2">
                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-[var(--glass)] text-muted-foreground border border-[var(--glass-border)] font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title & Description */}
                    <h3
                      className={`font-bold text-foreground mb-2 leading-snug group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors ${
                        project.featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                      }`}
                    >
                      {title}
                    </h3>

                    <p className="text-muted-foreground text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {/* Action Links - Always visible at bottom */}
                  <div className="flex items-center justify-between pt-3 mt-4 border-t border-[var(--glass-border)]">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Ver código de ${title} en GitHub`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-foreground hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors py-1"
                      >
                        <GithubIcon size={16} />
                        <span>{t('projects.viewCode')}</span>
                      </a>
                    )}

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visitar demo de ${title}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500 text-cyan-600 dark:text-cyan-400 hover:text-white dark:hover:text-gray-900 border border-cyan-500/30 text-xs sm:text-sm font-semibold transition-all shadow-sm group/btn"
                      >
                        <ExternalLink
                          size={14}
                          className="group-hover/btn:scale-110 transition-transform"
                        />
                        <span>{t('projects.liveDemo')}</span>
                      </a>
                    ) : project.isUnderConstruction ? (
                      <span className="text-xs text-amber-600/90 dark:text-amber-400/90 font-mono italic">
                        Próximamente online
                      </span>
                    ) : null}
                  </div>
                </div>

                {/* Subtle Hover Glow Layer */}
                <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/5 transition-colors duration-500 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
