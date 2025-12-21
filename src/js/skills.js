// Importa las imágenes
import htmlIcon from "../assets/img/icons/html5.svg";
import cssIcon from "../assets/img/icons/css3.svg";
import sassIcon from "../assets/img/icons/sass.svg";
import tailwindIcon from "../assets/img/icons/tailwind.svg";
import jsIcon from "../assets/img/icons/javascript.svg";
import tsIcon from "../assets/img/icons/typescript.svg";
import reactIcon from "../assets/img/icons/react.svg";
import pythonIcon from "../assets/img/icons/python.svg";
import mysqlIcon from "../assets/img/icons/mysql.svg";
import gitIcon from "../assets/img/icons/git.svg";
import githubIcon from "../assets/img/icons/github.svg";
import viteIcon from "../assets/img/icons/vite.svg";
import scrumIcon from "../assets/img/icons/agile.svg";
import figmaIcon from "../assets/img/icons/figma.svg";

const skillsContainer = document.querySelector(".skills__grid");

// Lista de habilidades
// Orden estratégico:
// 1. Lenguajes/Frameworks Clave (Lo que buscas vender)
// 2. Estilos y Maquetación
// 3. Herramientas y Backend (El plus)

const skills = [
  // --- El Fuerte (Frontend Logic) ---
  { name: "React", icon: reactIcon },      // ¡La estrella va primero o de segunda!
  { name: "TypeScript", icon: tsIcon },    // Muestra nivel
  { name: "JavaScript", icon: jsIcon },
  
  // --- Estilos (Frontend UI) ---
  { name: "Tailwind", icon: tailwindIcon },
  { name: "SASS", icon: sassIcon },
  { name: "CSS3", icon: cssIcon },
  { name: "HTML5", icon: htmlIcon }, // HTML suele ir al final de los lenguajes porque es "básico" pero necesario

  // --- Herramientas (Workflow) ---
  { name: "Git", icon: gitIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "Vite", icon: viteIcon },
  { name: "Scrum", icon: scrumIcon },
  { name: "Figma", icon: figmaIcon },

  // --- Backend (El Bonus) ---
  { name: "Python", icon: pythonIcon },
  { name: "MySQL", icon: mysqlIcon },
];

function createSkillCard(skill) {
  return `
    <div class="skill-card">
      <img src="${skill.icon}" alt="${skill.name}" />
      <h3>${skill.name}</h3>
    </div>
  `;
}

function renderSkills() {
  if (skillsContainer) {
    skillsContainer.innerHTML = skills.map(createSkillCard).join("");
  }
}

function animateSkills() {
  const skillCards = document.querySelectorAll(".skill-card");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(skillCards).indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  skillCards.forEach((card) => observer.observe(card));
}

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  animateSkills();
});
