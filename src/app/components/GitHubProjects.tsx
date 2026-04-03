import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ExternalLink, Github, Star, Code } from 'lucide-react';
import { useGitHubRepos, GitHubRepo } from '../../hooks/useGitHubRepos';

const FALLBACK_PROJECTS = [
  {
    title: "Editor de Código TypeScript",
    description: "Editor de código ligero construido con TypeScript",
    tags: ["TypeScript", "Vite"],
    featured: true,
    github: "https://github.com/jaickerlozano/editor-ts",
    demo: "https://jaickerlozano.github.io/editor-ts",
    stars: 5,
    language: "TypeScript",
  },
  {
    title: "Rick & Morty App",
    description: "SPA moderna explorando el universo de Rick and Morty",
    tags: ["React", "Tailwind"],
    featured: false,
    github: "https://github.com/jaickerlozano/rickandmorty-api-react",
    demo: "https://rickandmorty-api-react-iota.vercel.app/",
    stars: 3,
    language: "JavaScript",
  },
  {
    title: "Sudoku Master",
    description: "Solver con algoritmo de backtracking",
    tags: ["React", "Algorithms"],
    featured: false,
    github: "https://github.com/jaickerlozano/sudoku-solver",
    stars: 2,
    language: "JavaScript",
  },
  {
    title: "Portfolio Vite",
    description: "Portfolio responsive con HTML, SASS y Vite",
    tags: ["HTML", "SASS", "Vite"],
    featured: false,
    github: "https://github.com/jaickerlozano/portfolio-jaicker",
    stars: 1,
    language: "HTML",
  },
  {
    title: "E-learning Platform",
    description: "Plataforma educativa multipágina",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    github: "https://github.com/jaickerlozano/proyecto05_plataforma_educativa",
    stars: 1,
    language: "HTML",
  },
  {
    title: "Art Gallery",
    description: "Galería de arte con animaciones",
    tags: ["HTML", "CSS", "Animations"],
    featured: false,
    github: "https://github.com/jaickerlozano/proyecto02_art_gallery",
    stars: 1,
    language: "HTML",
  },
];

function ProjectCard({ project, index }: { project: any; index: number }) {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative rounded-2xl overflow-hidden bg-slate-900 dark:bg-slate-900 border border-white/10 dark:border-white/10 flex flex-col ${project.featured ? 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2' : 'col-span-1'}`}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8">
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-cyan-300 dark:text-cyan-300 border border-white/10 backdrop-blur-md">
                {tag}
              </span>
            ))}
            {project.language && (
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-purple-300 dark:text-purple-300 border border-white/10 backdrop-blur-md flex items-center gap-1">
                <Code size={12} /> {project.language}
              </span>
            )}
          </div>

          <h3 className={`font-bold text-white dark:text-white mb-2 leading-tight ${project.featured ? 'text-3xl' : 'text-2xl'}`}>
            {project.title}
          </h3>

          <p className="text-slate-300 dark:text-slate-300 text-sm line-clamp-2 md:line-clamp-3 mb-4 max-w-xl">
            {project.description}
          </p>

          {project.stars !== undefined && (
            <div className="flex items-center gap-1 text-sm text-slate-400 dark:text-slate-400 mb-4">
              <Star size={14} className="text-yellow-400" />
              <span>{project.stars}</span>
            </div>
          )}

          <div className="flex items-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-white dark:text-white hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors">
                <Github size={16} /> GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-white dark:text-white hover:text-indigo-400 dark:hover:text-indigo-400 transition-colors">
                <ExternalLink size={16} /> {t('projects.viewProject')}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Glass overlay */}
      <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors duration-500 pointer-events-none"></div>
    </motion.div>
  );
}

function LoadingState() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20">
      <div className="w-12 h-12 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mb-4"></div>
      <p className="text-slate-400 dark:text-slate-400">Cargando proyectos...</p>
    </div>
  );
}

function ErrorState() {
  const { t } = useTranslation();
  
  return (
    <div className="col-span-full">
      <p className="text-slate-400 dark:text-slate-400 text-center py-8 mb-8">
        {t('projects.errorLoading') || 'Error al cargar proyectos. Mostrando proyectos destacados.'}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {FALLBACK_PROJECTS.slice(0, 6).map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

export function GitHubProjects() {
  const { t } = useTranslation();
  const { repos, loading, error } = useGitHubRepos();

  // Transform GitHub repos to project format
  const projects = loading ? [] : error 
    ? FALLBACK_PROJECTS 
    : repos.map((repo: GitHubRepo) => ({
        title: repo.name,
        description: repo.description || 'Proyecto de GitHub',
        tags: repo.topics?.slice(0, 3) || [repo.language || 'Code'],
        featured: repo.stargazers_count > 10,
        github: repo.html_url,
        demo: repo.html_url,
        stars: repo.stargazers_count,
        language: repo.language,
      }));

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white dark:text-white mb-4">
            {t('projects.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{t('projects.titleHighlight')}</span>
          </h2>
          <p className="text-slate-400 dark:text-slate-400 text-lg max-w-2xl">
            {t('projects.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            <LoadingState />
          ) : error ? (
            <ErrorState />
          ) : (
            projects.map((project: any, index: number) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
