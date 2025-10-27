const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const contactContent = document.querySelector(".contact__content");

// ✨ Animación de fade-up al hacer scroll
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

// 🚀 Envío real del formulario con Formspree
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    formMessage.textContent = "Enviando mensaje...";
    formMessage.style.color = "#00ADB5"; // color primario
    formMessage.classList.add("visible"); // 🔹 aplica animación

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formMessage.textContent = "¡Mensaje enviado correctamente! 📩";
        formMessage.style.color = "green";
        contactForm.reset();
      } else {
        formMessage.textContent = "Hubo un error al enviar el mensaje. Inténtalo nuevamente.";
        formMessage.style.color = "red";
      }
    } catch (error) {
      formMessage.textContent = "Error de conexión. Revisa tu internet e inténtalo otra vez.";
      formMessage.style.color = "red";
    }

    // 🔹 Reinicia la animación cada vez que cambie el mensaje
    formMessage.classList.remove("visible");
    void formMessage.offsetWidth; // “hack” para reiniciar el CSS animation
    formMessage.classList.add("visible");
  });
}
