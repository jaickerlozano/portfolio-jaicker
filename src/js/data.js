// Importa las imágenes correctamente
import paginaEducativa from "../assets/img/pagina-educativa.jpg";
import portfolio from "../assets/img/proyecto-portfolio.jpg";
import juegoMemoria from "../assets/img/juego-de-parejas.jpg";
import elearning from "../assets/img/e-learning-mobile.jpg";
import textoAVoz from "../assets/img/textoavoz.jpg";
import editorTexto from "../assets/img/editordetexto.jpg";
import editorTextoTS from "../assets/img/editor-ts.jpg";
import sudokuJS from "../assets/img/sudoku-solver.jpg";
import tresEnRayaImg from "../assets/img/tresenraya.jpg";

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
    title: "Sudoku Solver",
    description: "Algoritmo de resolución de Sudokus implementado en JavaScript. Utiliza backtracking para encontrar la solución eficiente a tableros complejos.",
    technologies: ["JavaScript", "Algoritmos", "Logic"],
    image: sudokuJS,
    github: "https://github.com/jaickerlozano/proyecto-js-sudoku-solver", // <--- Pon aquí el link real de tu repo
    demo: "https://jaickerlozano.github.io/proyecto-js-sudoku-solver/", // <--- Si tienes deploy, ponlo aquí
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
    title: "Portfolio - Landing Page",
    description: "Portfolio responsive creado con HTML, SASS y Vite, mostrando mis proyectos y habilidades.",
    technologies: ["HTML", "SASS", "Vite"],
    image: portfolio,
    github: "https://github.com/jaickerlozano/proyecto03_responsive_portfolio",
    demo: "https://jaickerlozano.github.io/proyecto03_responsive_portfolio/",
  },
  {
    title: "Juego de Memoria",
    description: "Primer proyecto creado con Vanilla JS",
    technologies: ["JavaScript", "HTML", "SASS", "Vite"],
    image: juegoMemoria,
    github: "https://github.com/jaickerlozano/primer-proyecto-js-juego-de-memoria",
    demo: "https://jaickerlozano.github.io/primer-proyecto-js-juego-de-memoria/",
  },
  {
    title: "E-Learning Landing Page",
    description: "e-Learning es una landing page responsive desarrollada con HTML, SASS y Vite",
    technologies: ["HTML", "SASS", "Vite"],
    image: elearning,
    github: "https://github.com/jaickerlozano/Proyecto01_responsive_elearning",
    demo: "https://jaickerlozano.github.io/Proyecto01_responsive_elearning/",
  },
  {
    title: "Texto a Voz",
    description: "Aplicación en Python que convierte texto en voz, con interfaz simple y configurable.",
    technologies: ["Python"],
    image: textoAVoz,
    github: "https://github.com/JaickerLozano/texto_a_voz",
    demo: "#",
  },
  {
    title: "Editor de Texto",
    description: "Aplicación básica en Python para editar texto utilizando la librería tkinter",
    technologies: ["Python"],
    image: editorTexto,
    github: "https://github.com/jaickerlozano/editor_de_texto",
    demo: "#",
  },
];
