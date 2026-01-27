// Importa las imágenes correctamente
import paginaEducativa from "../assets/img/pagina-educativa.jpg";
import portfolio from "../assets/img/proyecto-portfolio.jpg";
import juegoMemoria from "../assets/img/juego-de-parejas.jpg";
import elearning from "../assets/img/e-learning-mobile.jpg";
import textoAVoz from "../assets/img/textoavoz.jpg";
import editorTexto from "../assets/img/editordetexto.jpg";
import editorTextoTS from "../assets/img/editor-ts.jpg";
import sudokuJS from "../assets/img/sudoku-reactjs.gif";
import tresEnRayaImg from "../assets/img/tresenraya.jpg";
import rickAndMorty from "../assets/img/rick-and-morty-img.jpg";
import artGalleryImg from "../assets/img/art-gallery.gif";
import spaBeautyImg from "../assets/img/beauty-spa-landing-page.jpg";
import coworkingImg from "../assets/img/coworking-space-landing-page.jpg";

// Exporta tu array de proyectos con los imports
export const projects = [
  {
    title: "Editor de Código TypeScript",
    description: "Editor de código ligero construido con TypeScript. Permite escritura de sintaxis y ejecución básica, demostrando el tipado fuerte y manejo del DOM moderno.",
    technologies: ["TypeScript", "Vite", "Web Components"],
    image: editorTextoTS,
    github: "https://github.com/jaickerlozano/editor-ts", // <--- Pon aquí el link real de tu repo
    demo: "https://jaickerlozano.github.io/editor-ts", 
  },
  {
    title: "Rick & Morty App: Buscador, Filtros y Persistencia de Datos",
    description: "Desarrollo de una Single Page Application (SPA) moderna y escalable, diseñada para explorar el universo de Rick and Morty consumiendo su API REST pública. El objetivo principal fue crear una experiencia de usuario inmersiva con alto rendimiento y diseño responsivo.",
    technologies: ["ReactJS", "Tailwind", "JavaScript (ES6+)", "Vite", "Web Components"],
    image: rickAndMorty,
    github: "https://github.com/jaickerlozano/rickandmorty-api-react", // <--- Pon aquí el link real de tu repo
    demo: "https://rickandmorty-api-react-iota.vercel.app/", 
  },
  {
    title: "Sudoku Master | Solver con Algoritmo de Backtracking",
    description: "Algoritmo de resolución de Sudokus implementado en ReactJS. Utiliza backtracking para encontrar la solución eficiente a tableros complejos.",
    technologies: ["ReactJS", "JavaScript", "Tailwind", "Algoritmos", "Logic"],
    image: sudokuJS,
    github: "https://github.com/jaickerlozano/sudoku-solver-reactjs", // <--- Pon aquí el link real de tu repo
    demo: "https://jaickerlozano.github.io/sudoku-solver-reactjs/", // <--- Si tienes deploy, ponlo aquí
  },
  {
    title: "Juego Tres en Raya",
    description: "Clásico juego de estrategia implementado con JavaScript puro y optimizado con Vite. Cuenta con una interfaz moderna y responsiva estilizada con Sass, asegurando un rendimiento fluido.",
    technologies: ["JavaScript", "Vite", "Sass"],
    image: tresEnRayaImg, // Asegúrate de importar tu imagen y asignar este nombre o poner la ruta entre comillas
    github: "https://github.com/jaickerlozano/juego-tres-en-raya",
    demo: "https://jaickerlozano.github.io/juego-tres-en-raya", // Enlace inferido (verifica que tu deploy esté activo)
  },
  {
    title: "Página Educativa - Landing Page",
    description: "Primer proyecto creado con HTML, SASS y Vite, mostrando mis proyectos y habilidades.",
    technologies: ["HTML", "SASS", "Vite"],
    image: paginaEducativa,
    github: "https://github.com/jaickerlozano/proyecto_elaboracion_pagina_html",
    demo: "https://jaickerlozano.github.io/proyecto_elaboracion_pagina_html/",
  },
  {
    title: "Modern Art Gallery | Landing Page",
    description: "Landing page responsive para una galería de arte moderna. Enfocada en la maquetación semántica, accesibilidad y uso avanzado de Grid y Flexbox para adaptar el diseño a cualquier dispositivo.",
    technologies: ["HTML5", "CSS3", "Responsive Design"],
    image: artGalleryImg, // <--- Recuerda importar esta imagen arriba
    github: "https://github.com/jaickerlozano/proyecto02_modern_art_gallery",
    demo: "https://jaickerlozano.github.io/proyecto02_modern_art_gallery/", 
  },
  {
    title: "Spa & Beauty | Sitio Web Estético",
    description: "Sitio web multipágina para un centro de estética. Destaca por un diseño visual limpio y relajante, implementando navegación fluida y estilos consistentes para mejorar la experiencia de usuario.",
    technologies: ["HTML5", "Sass", "JavaScript"],
    image: spaBeautyImg, 
    github: "https://github.com/jaickerlozano/proyecto06_spa_and_beauty",
    demo: "https://jaickerlozano.github.io/proyecto06_spa_and_beauty/", 
  },
  {
    title: "Coworking Space | Maquetación UI",
    description: "Interfaz moderna para un espacio de Coworking. El proyecto demuestra habilidades sólidas en la estructura de layouts complejos y adaptación 'Mobile First' para captar clientes potenciales.",
    technologies: ["HTML5", "CSS3", "Maquetación UI"],
    image: coworkingImg, 
    github: "https://github.com/jaickerlozano/proyecto03_coworking_space",
    demo: "https://jaickerlozano.github.io/proyecto03_coworking_space/", 
  },
  {
    title: "Portfolio - Landing Page",
    description: "Portfolio responsive creado con HTML, SASS y Vite, mostrando mis proyectos y habilidades.",
    technologies: ["HTML", "SASS", "Vite"],
    image: portfolio,
    github: "https://github.com/jaickerlozano/proyecto03_responsive_portfolio",
    demo: "https://jaickerlozano.github.io/proyecto03_responsive_portfolio/",
  },
  // {
  //   title: "Juego de Memoria",
  //   description: "Primer proyecto creado con Vanilla JS",
  //   technologies: ["JavaScript", "HTML", "SASS", "Vite"],
  //   image: juegoMemoria,
  //   github: "https://github.com/jaickerlozano/primer-proyecto-js-juego-de-memoria",
  //   demo: "https://jaickerlozano.github.io/primer-proyecto-js-juego-de-memoria/",
  // },
  // {
  //   title: "E-Learning Landing Page",
  //   description: "e-Learning es una landing page responsive desarrollada con HTML, SASS y Vite",
  //   technologies: ["HTML", "SASS", "Vite"],
  //   image: elearning,
  //   github: "https://github.com/jaickerlozano/Proyecto01_responsive_elearning",
  //   demo: "https://jaickerlozano.github.io/Proyecto01_responsive_elearning/",
  // },
  // {
  //   title: "Texto a Voz",
  //   description: "Aplicación en Python que convierte texto en voz, con interfaz simple y configurable.",
  //   technologies: ["Python"],
  //   image: textoAVoz,
  //   github: "https://github.com/JaickerLozano/texto_a_voz",
  //   demo: "#",
  // },
  // {
  //   title: "Editor de Texto",
  //   description: "Aplicación básica en Python para editar texto utilizando la librería tkinter",
  //   technologies: ["Python"],
  //   image: editorTexto,
  //   github: "https://github.com/jaickerlozano/editor_de_texto",
  //   demo: "#",
  // },
];
