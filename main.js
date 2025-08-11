document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000, 
    once: true      
  });

  // Mobile menu
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
});
