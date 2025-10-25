const part = document.querySelector('[dats-js-part]');
const popup = document.getElementById('popup');
const popupClose = document.getElementById('popupClose');
const popupOverlay = document.querySelector('.popup__overlay');

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
  const menu = document.querySelector(".header__title-nav");
  

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