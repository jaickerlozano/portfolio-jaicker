import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Editor de Código TypeScript',
    description: 'Editor de código ligero construido con TypeScript. Permite escritura de sintaxis y ejecución básica, demostrando tipado fuerte y manejo del DOM moderno.',
    tags: ['TypeScript', 'Vite', 'Web Components'],
    image: 'https://images.unsplash.com/photo-1549605659-32d82da3a059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwdGVjaCUyMGNvZGV8ZW58MXx8fHwxNzcyODUzMDExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    span: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2', // Featured large
    featured: true,
  },
  {
    title: 'Rick & Morty App',
    description: 'Buscador, Filtros y Persistencia de Datos. SPA diseñada para explorar el universo de Rick and Morty consumiendo su API REST pública.',
    tags: ['ReactJS', 'Tailwind', 'API'],
    image: 'https://images.unsplash.com/photo-1668933315398-15914cc18097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBwb3J0YWx8ZW58MXx8fHwxNzcyODUzMDExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    span: 'col-span-1',
    featured: false,
  },
  {
    title: 'Sudoku Master',
    description: 'Algoritmo de resolución de Sudokus implementado en ReactJS. Utiliza backtracking para encontrar la solución eficiente.',
    tags: ['ReactJS', 'Algoritmos', 'Logic'],
    image: 'https://images.unsplash.com/photo-1562306583-5784db4aac7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbWF0aCUyMGdyaWR8ZW58MXx8fHwxNzcyODUzMDExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    span: 'col-span-1',
    featured: false,
  },
  {
    title: 'Spa & Beauty',
    description: 'Sitio web multipágina para un centro de estética. Navegación fluida y estilos consistentes para mejorar la experiencia.',
    tags: ['HTML5', 'SASS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1690571128844-dbd116258e3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwd2VsbG5lc3MlMjBtaW5pbWFsfGVufDF8fHx8MTc3Mjg1MzAxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    span: 'col-span-1 lg:col-span-2', // Wide
    featured: false,
  },
  {
    title: 'Coworking Space UI',
    description: 'Interfaz moderna demostrando habilidades sólidas en la estructura de layouts complejos y "Mobile First".',
    tags: ['HTML5', 'CSS3', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1561382781-76dd6a2ce0b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9kZXJuJTIwb2ZmaWNlJTIwc3BhY2V8ZW58MXx8fHwxNzcyODUzMDExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    span: 'col-span-1',
    featured: false,
  },
  {
    title: 'Portfolio - Landing Page',
    description: 'Portfolio responsivo creado con HTML, SASS y Vite, mostrando mis proyectos y habilidades.',
    tags: ['HTML', 'SASS', 'Vite'],
    image: 'https://images.unsplash.com/photo-1771931342240-2c277b33905f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGFyayUyMHVpJTIwZGVzaWdufGVufDF8fHx8MTc3Mjg1MzAxMXww&ixlib=rb-4.1.0&q=80&w=1080',
    span: 'col-span-1 md:col-span-2 lg:col-span-3', // Very wide, full row at bottom
    featured: false,
  }
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
            Una selección de los proyectos que he desarrollado, enfocados en performance, arquitectura y experiencia de usuario.
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
                    <a href="#" className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors">
                      <Github size={16} /> GitHub
                    </a>
                    <a href="#" className="flex items-center gap-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </a>
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
