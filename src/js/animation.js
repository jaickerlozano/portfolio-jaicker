// animations.js
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const aboutSection = document.querySelector('.about__content');
if (aboutSection) observer.observe(aboutSection);


