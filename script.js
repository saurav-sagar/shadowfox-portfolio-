const navLinks = document.querySelectorAll(".nav-links a");
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-links");
const backToTop = document.querySelector(".back-to-top");
const yearSpan = document.getElementById("year");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetEl = document.querySelector(targetId);
    if (targetEl) targetEl.scrollIntoView({ behavior: "smooth" });
    if (window.innerWidth <= 768) {
      navList.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});

navToggle.addEventListener("click", () => {
  const isOpen = navList.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) backToTop.classList.add("show");
  else backToTop.classList.remove("show");
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    contactForm.reset();
  });
}
