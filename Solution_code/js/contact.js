// ==========================================
// MEMBER 3: CONTACT PAGE JAVASCRIPT
// ==========================================

/* === COMMIT 1: START === */
// Contact page initialization & logger
document.addEventListener("DOMContentLoaded", () => {
  console.log("📧 Contact Page JS successfully loaded!");
});
/* === COMMIT 1: END === */


/* === COMMIT 2: START === */
// Live Character Count for Message Textarea
const messageInput = document.getElementById("message");
const charCountSpan = document.getElementById("charCount");

if (messageInput && charCountSpan) {
  messageInput.addEventListener("input", (e) => {
    const length = e.target.value.length;
    charCountSpan.textContent = length;
    
    if (length >= 180) {
      charCountSpan.style.color = "var(--accent-pink)";
    } else {
      charCountSpan.style.color = "var(--accent-purple)";
    }
  });
}
/* === COMMIT 2: END === */


/* === COMMIT 3: START === */
// Contact Form Submission & Toast Alert
const contactForm = document.getElementById("contactForm");
const toastContainer = document.getElementById("toastContainer");

const showToast = (msg) => {
  if (!toastContainer) return;
  
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>✨</span> <div>${msg}</div>`;
  
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
};

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("fullName").value;
    
    showToast(`Thank you, ${name}! Your feedback has been recorded successfully.`);
    contactForm.reset();
    if (charCountSpan) charCountSpan.textContent = "0";
  });
}
/* === COMMIT 3: END === */
