// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

// Year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Simple demo form handling (no backend yet)
function attachDemoHandler(formId, successId) {
  const form = document.getElementById(formId);
  const success = document.getElementById(successId);

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // In a real app, you'd send this to a backend or email service
    console.log(`Form ${formId} submitted`, Object.fromEntries(new FormData(form)));

    if (success) {
      success.hidden = false;
      setTimeout(() => {
        success.hidden = true;
      }, 4000);
    }

    form.reset();
  });
}

attachDemoHandler("contactForm", "formSuccess");
attachDemoHandler("heroBookingForm", "formSuccess");