// Efeito de fade-in ao rolar
const sections = document.querySelectorAll('.fade-in');

function checkScroll() {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);
document.addEventListener("mousemove", function (e) {
  const trail = document.createElement("div");
  trail.className = "trail";
  trail.style.left = e.pageX + "px";
  trail.style.top = e.pageY + "px";
  document.body.appendChild(trail);

  // Remove depois de 500ms
  setTimeout(() => {
    trail.remove();
  }, 500);
});
document.addEventListener("mousemove", function (e) {
  const slash = document.createElement("div");
  slash.className = "slash";
  slash.style.left = e.pageX + "px";
  slash.style.top = e.pageY + "px";

  // Aleatório para o corte não ficar sempre igual
  slash.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 90 - 45}deg)`;

  document.body.appendChild(slash);

  setTimeout(() => {
    slash.remove();
  }, 300); // rápido, como um corte
});
