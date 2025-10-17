// Mobile menu functionality
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");

mobileMenuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// Hero slider functionality
const slider = document.querySelector(".hero-slider");
const dots = document.querySelectorAll(".slider-dot");
let currentSlide = 0;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 33.33}%)`;

  // Update active dot
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");

  currentSlide = index;
}

// Auto slide change
setInterval(() => {
  currentSlide = (currentSlide + 1) % 3;
  showSlide(currentSlide);
}, 5000);

// Dot click events
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

// Cart counter (for demonstration)
const cartCount = document.querySelector(".cart-count");
let count = 0;

// Simulate adding items to cart (for demo purposes)
setInterval(() => {
  count = Math.min(count + 1, 9);
  cartCount.textContent = count;
}, 10000);
