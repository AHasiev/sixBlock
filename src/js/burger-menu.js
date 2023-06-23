const containerBurger = document.querySelector(".container__burger");
const burgerMenuBtn = document.querySelector(".burger__menu__btn");
const btnCloseBurger = document.querySelector(".btn__close__burger");

burgerMenuBtn.onclick = function () {
  containerBurger.style.display = "block";
};

btnCloseBurger.onclick = function () {
  containerBurger.style.display = "none";
};
