// import './scroll.js';
// import './animations.js';
import '../sass/style.scss';
import { projects } from './data.js';
import "./projects.js";
import "./skills.js";
import "./contact.js";

const container = document.getElementById('projectsContainer');

// Generar proyectos dinámicamente
container.innerHTML = projects.map(proyecto => `
  <div class="project-card">
    <img src="${proyecto.imagen}" alt="${proyecto.nombre}">
    <h3>${proyecto.nombre}</h3>
    <p>${proyecto.descripcion}</p>
    <div class="project-links">
      <a href="${proyecto.demo}" target="_blank">Demo</a>
      <a href="${proyecto.codigo}" target="_blank">Código</a>
    </div>
  </div>
`).join('');

const toggle = document.getElementById('nav-toggle');
const menu = document.querySelector('.nav__menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
