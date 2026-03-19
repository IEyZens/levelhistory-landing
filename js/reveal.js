/**
 * reveal.js
 * Anime l'apparition des éléments .reveal au scroll
 * Utilise IntersectionObserver pour déclencher la classe .visible
 * quand l'élément entre dans le viewport
 */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        /* Délai progressif pour les éléments visibles simultanément */
        entry.target.style.transitionDelay = index * 0.07 + "s";
        entry.target.classList.add("visible");

        /* On arrête d'observer une fois l'animation jouée */
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
