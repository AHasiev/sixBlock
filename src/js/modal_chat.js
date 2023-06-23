const modalRequest = document.querySelector(".header__modal__requestACall");
const btnChat = document.querySelector(".btn__chat");
const btnCloseChat = document.querySelector(".btn__closeChat");

btnChat.onclick = function() {
    modalRequest.style.display = "block";
}

btnCloseChat.onclick = function () {
    modalRequest.style.display = "none";
}