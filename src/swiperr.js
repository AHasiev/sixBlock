function showAll() {
    const more = document.querySelector(".more");
    const btn = document.querySelector(".showAll__btn");
    const imgDown = document.querySelector(".imgDown");
  
    if (btn.innerHTML === "Показать все") {
      btn.innerHTML = "Скрыть";
      more.style.display = "flex";
    } else {
      btn.innerHTML = "Показать все";
      more.style.display = "none";
    }
  
    imgDown.classList.toggle("imgUp");
  }
  
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1.3,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  