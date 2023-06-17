function showAll() {
    const more = document.querySelector(".more");
    const btn = document.querySelector(".showAll__btn");
    const imgDown = document.querySelector(".imgDown");
  
    if (btn.innerHTML === "Скрыть") {
      btn.innerHTML = "Показать все";
      more.classList.toggle('more-flex')
    } else {
      btn.innerHTML = "Скрыть";
      more.classList.toggle('more-flex')
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
  