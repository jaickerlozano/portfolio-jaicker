// Importa las imágenes
import htmlIcon from "../assets/img/icons/html5.svg";
import sassIcon from "../assets/img/icons/sass.svg";
import jsIcon from "../assets/img/icons/javascript.svg";
import pythonIcon from "../assets/img/icons/python.svg";
import mysqlIcon from "../assets/img/icons/mysql.svg";
import githubIcon from "../assets/img/icons/github.svg";
import reactIcon from "../assets/img/icons/react.svg";

const skillsContainer = document.querySelector(".skills__grid");

// Lista de habilidades
const skills = [
  { name: "HTML", icon: htmlIcon },
  { name: "SASS", icon: sassIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Python", icon: pythonIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "Git / GitHub", icon: githubIcon },
  { name: "React", icon: reactIcon },
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
