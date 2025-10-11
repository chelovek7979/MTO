document.addEventListener("DOMContentLoaded", () => {
  const burgerButton = document.getElementById("burger-button");
  const menu = document.getElementById("menu");

  burgerButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    burgerButton.classList.toggle("active");
  });
});

/* Настройка Свайпера */
const swiper = new Swiper('.swiper', {
  
  
  loop: true,
  spaceBetween: 50,
  speed: 1000,
  autoplay: {
  delay: 2000,
 },

  
  pagination: {
    el: '.swiper-pagination',
  },

  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
