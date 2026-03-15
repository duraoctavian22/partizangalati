/*
 * Partizan Galati - JavaScript comun
 * 1) Toggle meniu mobil
 * 2) Evidentiere link activ din navbar
 * 3) Submit formular contact (prevent default + alerta)
 */

document.addEventListener("DOMContentLoaded", () => {
  // ===== 1) Meniu mobil =====
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden");
      mobileMenuButton.setAttribute("aria-expanded", String(isHidden));
    });
  }

  // ===== 2) Link activ in meniu =====
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  // ===== 3) Formular contact =====
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Formular trimis");
      contactForm.reset();
    });
  }
});
