// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const navlinkWithBtn = document.getElementById("navlink-with-btn");
const closeMenu = document.getElementById("close-menu");

mobileMenuBtn.addEventListener("click", () => {
  navlinkWithBtn.classList.add("active");
  mobileMenuBtn.setAttribute("aria-expanded", "true");
});

closeMenu.addEventListener("click", () => {
  navlinkWithBtn.classList.remove("active");
  mobileMenuBtn.setAttribute("aria-expanded", "false");
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navlinkWithBtn.classList.contains("active")) {
      navlinkWithBtn.classList.remove("active");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
    }
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
});

// Header scroll effect
const header = document.getElementById("header-section");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

// Back to top button
const backToTopBtn = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".hero-img, .hero-text, .yuridik-content, .yuridik-img, .nega-box"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (elementPosition < screenPosition) {
      element.classList.add("fade-in");
    }
  });
};

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);
