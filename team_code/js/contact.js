//COMMIT 1 START: 
document.addEventListener("DOMContentLoaded", () => {
  console.log("📧 Contact Page JS successfully loaded!");
});
//COMMIT 1 END: 



//COMMIT 2 START: 
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
//COMMIT 2 END:



//COMMIT 3 START: 

//COMMIT 3 END: 