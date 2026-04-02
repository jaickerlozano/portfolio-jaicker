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

import editorTextoTS from '../../assets/img/editor-ts.jpg';
import rickAndMorty from '../../assets/img/rick-and-morty-img.jpg';
import sudokuJS from '../../assets/img/sudoku-reactjs.gif';
import tresEnRayaImg from '../../assets/img/tresenraya.jpg';
import paginaEducativa from '../../assets/img/pagina-educativa.jpg';
import artGalleryImg from '../../assets/img/art-gallery.gif';
import spaBeautyImg from '../../assets/img/beauty-spa-landing-page.jpg';
import coworkingImg from '../../assets/img/coworking-space-landing-page.jpg';
import portfolio from '../../assets/img/proyecto-portfolio.jpg';


const PROJECTS: Project[] = [
  {
    title: "Editor de Código TypeScript",
    description: "Editor de código ligero construido con TypeScript. Permite escritura de sintaxis y ejecución básica, demostrando el tipado fuerte y manejo del DOM moderno.",
    tags: ["TypeScript", "Vite", "Web Components"],
    image: editorTextoTS,
    span: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2',
    featured: true,
    github: "https://github.com/jaickerlozano/editor-ts",
    demo: "https://jaickerlozano.github.io/editor-ts",
  },
  {
    title: "Rick & Morty App: Buscador, Filtros y Persistencia de Datos",
    description: "Desarrollo de una Single Page Application (SPA) moderna y escalable, diseñada para explorar el universo de Rick and Morty consumiendo su API REST pública. El objetivo principal fue crear una experiencia de usuario inmersiva con alto rendimiento y diseño responsivo.",
    tags: ["ReactJS", "Tailwind", "JavaScript (ES6+)", "Vite", "Web Components"],
    image: rickAndMorty,
    span: 'col-span-1',
    featured: false,
    github: "https://github.com/jaickerlozano/rickandmorty-api-react",
    demo: "https://rickandmorty-api-react-iota.vercel.app/",
  },
  {
    title: "Sudoku Master | Solver con Algoritmo de Backtracking",
    description: "Algoritmo de resolución de Sudokus implementado en ReactJS. Utiliza backtracking para encontrar la solución eficiente a tableros complejos.",
    tags: ["ReactJS", "JavaScript", "Tailwind", "Algoritmos", "Logic"],
    image: sudokuJS,
    span: 'col-span-1',
    featured: false,
    github: "https://github.com/jaickerlozano/sudoku-solver-reactjs",
    demo: "https://jaickerlozano.github.io/sudoku-solver-reactjs/",
  },
  {
    title: "Juego Tres en Raya",
    description: "Clásico juego de estrategia implementado con JavaScript puro y optimizado con Vite. Cuenta con una interfaz moderna y responsiva estilizada con Sass, asegurando un rendimiento fluido.",
    tags: ["JavaScript", "Vite", "Sass"],
    image: tresEnRayaImg,
    span: 'col-span-1 lg:col-span-2',
    featured: false,
    github: "https://github.com/jaickerlozano/juego-tres-en-raya",
    demo: "https://jaickerlozano.github.io/juego-tres-en-raya",
  },
  {
    title: "Página Educativa - Landing Page",
    description: "Primer proyecto creado con HTML, SASS y Vite, mostrando mis proyectos y habilidades.",
    tags: ["HTML", "SASS", "Vite"],
    image: paginaEducativa,
    span: 'col-span-1',
    featured: false,
    github: "https://github.com/jaickerlozano/proyecto_elaboracion_pagina_html",
    demo: "https://jaickerlozano.github.io/proyecto_elaboracion_pagina_html/",
  },
  {
    title: "Modern Art Gallery | Landing Page",
    description: "Landing page responsive para una galería de arte moderna. Enfocada en la maquetación semántica, accesibilidad y uso avanzado de Grid y Flexbox para adaptar el diseño a cualquier dispositivo.",
    tags: ["HTML5", "CSS3", "Responsive Design"],
    image: artGalleryImg,
    span: 'col-span-1',
    featured: false,
    github: "https://github.com/jaickerlozano/proyecto02_modern_art_gallery",
    demo: "https://jaickerlozano.github.io/proyecto02_modern_art_gallery/",
  },
  {
    title: "Spa & Beauty | Sitio Web Estético",
    description: "Sitio web multipágina para un centro de estética. Destaca por un diseño visual limpio y relajante, implementando navegación fluida y estilos consistentes para mejorar la experiencia de usuario.",
    tags: ["HTML5", "Sass", "JavaScript"],
    image: spaBeautyImg,
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
    featured: false,
    github: "https://github.com/jaickerlozano/proyecto06_spa_and_beauty",
    demo: "https://jaickerlozano.github.io/proyecto06_spa_and_beauty/",
  },
  {
    title: "Coworking Space | Maquetación UI",
    description: "Interfaz moderna para un espacio de Coworking. El proyecto demuestra habilidades sólidas en la estructura de layouts complejos y adaptación 'Mobile First' para captar clientes potenciales.",
    tags: ["HTML5", "CSS3", "Maquetación UI"],
    image: coworkingImg,
    span: 'col-span-1',
    featured: false,
    github: "https://github.com/jaickerlozano/proyecto03_coworking_space",
    demo: "https://jaickerlozano.github.io/proyecto03_coworking_space/",
  },
  {
    title: "Portfolio - Landing Page",
    description: "Portfolio responsive creado con HTML, SASS y Vite, mostrando mis proyectos y habilidades.",
    tags: ["HTML", "SASS", "Vite"],
    image: portfolio,
    span: 'col-span-1 md:col-span-2 lg:col-span-3',
    featured: false,
    github: "https://github.com/jaickerlozano/proyecto03_responsive_portfolio",
    demo: "https://jaickerlozano.github.io/proyecto03_responsive_portfolio/",
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
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors">
                      <Github size={16} /> GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors">
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
