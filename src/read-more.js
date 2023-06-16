function readMore() {
  const readMoreText = document.querySelector(".read-more");
  const btnReadMore = document.querySelector(".btn__read-more");
  const icon = document.querySelector(".icon");

  if (btnReadMore.innerHTML === "Читать далее") {
    btnReadMore.innerHTML = "Скрыть";
    readMoreText.style.display = "block";
  } else {
    btnReadMore.innerHTML = "Читать далее";
    readMoreText.style.display = "none";
  }

  icon.classList.toggle("icon__revers");

}
