const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const contactContent = document.querySelector(".contact__content");

// Animación de fade-up al hacer scroll
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

if (contactContent) observer.observe(contactContent);

// Validación / envío simulado
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Por favor completa todos los campos.";
      formMessage.style.color = "red";
      return;
    }

    formMessage.textContent = "¡Mensaje enviado correctamente! 📩";
    formMessage.style.color = "green";

    // Reset form
    contactForm.reset();
  });
}
