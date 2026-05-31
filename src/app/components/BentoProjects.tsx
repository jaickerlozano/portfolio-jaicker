import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  span: string;
  featured: boolean;
  github?: string;
  demo?: string;
}

// TODO: Replace these placeholder images with actual screenshots of the new projects
// Place images in src/assets/img/ and update the import paths
import bookingManagerImg from '../../assets/img/booking-manager.png';
import inventorySystemImg from '../../assets/img/inventory-sistem.png';
import editorTextoTS from '../../assets/img/editor-ts.jpg';
import rickAndMorty from '../../assets/img/rick-and-morty-img.jpg';
import sudokuJS from '../../assets/img/sudoku-reactjs.gif';


const PROJECTS: Project[] = [
  {
    title: "Booking Manager | Space Reservation System",
    description: "Full-featured reservation system for residential complexes. Role-based access (Admin/Resident), real-time AJAX search, email notifications, Cloudinary storage, and deployed on Render with PostgreSQL.",
    tags: ["Django 5.2", "Python", "Tailwind CSS", "PostgreSQL", "Cloudinary", "Render"],
    image: bookingManagerImg,
    span: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2',
    featured: true,
    github: "https://github.com/jaickerlozano/booking_manager_django",
    demo: "https://booking-manager-django.onrender.com/",
  },
  {
    title: "Inventory System | Full-Stack Management",
    description: "Full-stack inventory management with Django REST Framework + React/TypeScript. Real-time stock tracking, 3-level alert system, row-level concurrency protection (select_for_update), and Swagger API docs.",
    tags: ["Django REST", "React 19", "TypeScript", "PostgreSQL", "Tailwind v4", "Vite"],
    image: inventorySystemImg,
    span: 'col-span-1',
    featured: true,
    github: "https://github.com/jaickerlozano/inventory_sistem_full_stack",
    demo: "https://inventory-sistem-frontend.onrender.com/",
  },
  {
    title: "Editor de Código TypeScript",
    description: "Editor de código ligero construido con TypeScript. Permite escritura de sintaxis y ejecución básica, demostrando el tipado fuerte y manejo del DOM moderno.",
    tags: ["TypeScript", "Vite", "Web Components"],
    image: editorTextoTS,
    span: 'col-span-1',
    featured: false,
    github: "https://github.com/jaickerlozano/editor-ts",
    demo: "https://jaickerlozano.github.io/editor-ts",
  },
  {
    title: "Rick & Morty Multiverse Explorer",
    description: "Single Page Application (SPA) moderna consumiendo API REST pública. Experiencia inmersiva con alto rendimiento, diseño responsivo con Glassmorphism y persistencia de datos.",
    tags: ["ReactJS", "Tailwind", "JavaScript (ES6+)", "Vite"],
    image: rickAndMorty,
    span: 'col-span-1',
    featured: false,
    github: "https://github.com/jaickerlozano/rickandmorty-api-react",
    demo: "https://rickandmorty-api-react-iota.vercel.app/",
  },
  {
    title: "Sudoku Master | Backtracking Algorithm",
    description: "Algoritmo de resolución de Sudokus implementado en ReactJS. Utiliza backtracking para encontrar soluciones eficientes a tableros complejos en tiempo real.",
    tags: ["ReactJS", "JavaScript", "Tailwind", "Algoritmos", "Logic"],
    image: sudokuJS,
    span: 'col-span-1 lg:col-span-2',
    featured: false,
    github: "https://github.com/jaickerlozano/sudoku-solver-reactjs",
    demo: "https://jaickerlozano.github.io/sudoku-solver-reactjs/",
  },
];

export function BentoProjects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Destacados</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Una selección de proyectos full-stack y frontend enfocados en arquitectura limpia, rendimiento y experiencia de usuario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 flex flex-col ${project.span}`}
            >
              {/* Image Background */}
              <div className="absolute inset-0 w-full h-full z-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8">
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-cyan-300 border border-white/10 backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className={`font-bold text-white mb-2 leading-tight ${project.featured ? 'text-3xl' : 'text-2xl'}`}>
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm line-clamp-2 md:line-clamp-3 mb-6 max-w-xl">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors">
                        <Github size={16} /> GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Glass overlay hover effect */}
              <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
