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

  // Клик по затемнению — закрыть меню
  overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    
  });
});