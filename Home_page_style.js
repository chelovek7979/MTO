document.addEventListener("DOMContentLoaded", () => {
  const burgerButton = document.getElementById("burger-button");
  const menu = document.getElementById("menu");

  burgerButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    burgerButton.classList.toggle("active");
  });
});