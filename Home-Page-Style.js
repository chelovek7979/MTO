const part = document.querySelector('[dats-js-part]');
const popup = document.querySelector('[data-js-popup]');
const popupClose = document.querySelector('[data-js-popup-close]');
const popupOverlay = document.querySelector('[data-js-overlay]');

part.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.add('active');
});

popupClose.addEventListener('click', () => {
  popup.classList.remove('active');
});

popupOverlay.addEventListener('click', () => {
  popup.classList.remove('active');
});




document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector("[data-js-burger]");
  const menu = document.querySelector("[data-js-header-nav]");
  

  // Открытие/закрытие меню
  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
  });


});

const swiper = new Swiper('.swiper', {
  // Optional parameters
   autoplay: {
   delay: 2000,
 },
  speed: 1000,
  spaceBetween: 50,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});