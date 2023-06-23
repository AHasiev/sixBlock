const modal = document.querySelector(".header__modal__feedback");
const btnPhone = document.querySelector(".btn__phone");
const btnClose = document.querySelector(".btn__close");


btnPhone.onclick = function () {
    modal.style.display = "block";
}

btnClose.onclick = function () {
    modal.style.display = "none";
}

