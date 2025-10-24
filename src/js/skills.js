const skillsContainer = document.querySelector(".skills__grid");

// Lista de habilidades
const skills = [
  { name: "HTML", icon: "./src/assets/img/icons/html5.svg" },
  { name: "SASS", icon: "./src/assets/img/icons/sass.svg" },
  { name: "JavaScript", icon: "./src/assets/img/icons/javascript.svg" },
  { name: "Python", icon: "./src/assets/img/icons/python.svg" },
  { name: "MySQL", icon: "./src/assets/img/icons/mysql.svg" },
  { name: "Git / GitHub", icon: "./src/assets/img/icons/github.svg" },
  { name: "React", icon: "./src/assets/img/icons/react.svg" },
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

// Animación secuencial tipo fade-up
function animateSkills() {
  const skillCards = document.querySelectorAll(".skill-card");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Array.from(skillCards).indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 100); // retraso secuencial
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  skillCards.forEach(card => observer.observe(card));
}

// Ejecutar
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  animateSkills();
});
