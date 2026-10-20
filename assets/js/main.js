// Mobiel navigatiemenu
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Menu sluiten" : "Menu openen");
    toggle.textContent = isOpen ? "×" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Menu openen");
      toggle.textContent = "☰";
    });
  });
});

// Elke activiteit toont één foto tegelijk, met een wissel om de 3 seconden.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".activity-carousel").forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll(".gallery-photo"));
    if (!slides.length) return;
    let current = 0;
    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === 0);
      slide.setAttribute("aria-hidden", String(index !== 0));
    });
    if (slides.length < 2) return;
    window.setInterval(() => {
      slides[current].classList.remove("is-active");
      slides[current].setAttribute("aria-hidden", "true");
      current = (current + 1) % slides.length;
      slides[current].classList.add("is-active");
      slides[current].setAttribute("aria-hidden", "false");
    }, 3000);
  });
});
