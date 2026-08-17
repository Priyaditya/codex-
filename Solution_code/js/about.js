
/* === COMMIT 1: START === */
document.addEventListener("DOMContentLoaded", () => {
  console.log("🎨 Team Showcase script initialized!");
});
/* === COMMIT 1: END === */


/* === COMMIT 2: START === */
// Member Card Filtering Logic
const filterButtons = document.querySelectorAll(".filter-btn");
const memberCards = document.querySelectorAll(".member-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    memberCards.forEach(card => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        card.style.display = "flex";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 50);
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(10px)";
        setTimeout(() => {
          card.style.display = "none";
        }, 200);
      }
    });
  });
});
/* === COMMIT 2: END === */


/* === COMMIT 3: START === */
// Interactive Card Hover Glow Tracking Effect
memberCards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(168, 85, 247, 0.18), rgba(30, 41, 59, 0.8) 70%)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "var(--bg-card)";
  });
});
/* === COMMIT 3: END === */
