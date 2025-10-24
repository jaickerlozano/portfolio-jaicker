import { projects } from "./data.js";

const projectsContainer = document.getElementById("projectsContainer");

function createProjectCard(project) {
  const { title, description, technologies, image, github, demo } = project;

  // Generar lista de tecnologías
  const techList = technologies.map(tech => `<span>${tech}</span>`).join("");

  return `
    <div class="project-card">
      <img src="${image}" alt="${title}" class="project-card__img" />
      <div class="project-card__body">
        <h3 class="project-card__title">${title}</h3>
        <p class="project-card__desc">${description}</p>
        <div class="project-card__tech">${techList}</div>
        <div class="project-card__links">
          <a href="${github}" target="_blank">GitHub</a>
          <a href="${demo}" target="_blank">Demo</a>
        </div>
      </div>
    </div>
  `;
}

// Renderizar cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  if (projectsContainer) {
    projectsContainer.innerHTML = projects.map(createProjectCard).join("");
  } else {
    console.error("No se encontró el contenedor de proyectos (id=projectsContainer).");
  }
});