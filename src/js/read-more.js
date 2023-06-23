function readMore() {
  const readMoreText = document.querySelector(".read-more");
  const btnReadMore = document.querySelector(".btn__read-more");
  const icon = document.querySelector(".icon");

  if (btnReadMore.innerHTML === "Скрыть") {
    btnReadMore.innerHTML = "Читать далее";
    readMoreText.classList.toggle("content-flex");
  } else {
    btnReadMore.innerHTML = "Читать далее";
    readMoreText.classList.toggle("content-flex");
  }

  icon.classList.toggle("icon__revers");

}
