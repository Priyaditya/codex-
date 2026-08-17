// ==========================================
// MEMBER 1: HOME PAGE JAVASCRIPT
// ==========================================

/* === COMMIT 1: START === */
// Page load logging & init
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Home page script loaded successfully!");
});
/* === COMMIT 1: END === */


/* === COMMIT 2: START === */
// Animated Counter for Stats
const animateCounters = () => {
  const statNumbers = document.querySelectorAll(".stat-number");

  statNumbers.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    if (target === 0) {
      counter.innerText = "0";
      return;
    }

    let count = 0;
    const increment = Math.ceil(target / 40);

    const updateCount = () => {
      count += increment;
      if (count >= target) {
        counter.innerText = target + (target === 100 ? "%" : "+");
      } else {
        counter.innerText = count;
        setTimeout(updateCount, 30);
      }
    };

    updateCount();
  });
};

// Trigger counter animation on scroll into view
let animated = false;
window.addEventListener("scroll", () => {
  const statsSection = document.querySelector(".stats-section");
  if (!statsSection) return;

  const sectionPos = statsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if (sectionPos < screenPos && !animated) {
    animateCounters();
    animated = true;
  }
});
/* === COMMIT 2: END === */


/* === COMMIT 3: START === */
// Interactive Hero Button Bounce Effect
const heroBtn = document.querySelector(".btn-primary");
if (heroBtn) {
  heroBtn.addEventListener("mouseenter", () => {
    heroBtn.style.transform = "translateY(-4px) scale(1.02)";
  });
  heroBtn.addEventListener("mouseleave", () => {
    heroBtn.style.transform = "translateY(0) scale(1)";
  });
}
/* === COMMIT 3: END === */
