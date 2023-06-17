function equipmentRepair() {
  const equipmentRepairItemShowAll = document.querySelector(
    ".equipment-repair__item__showAll"
  );
  const showAllButton = document.querySelector(".showAll__button");
  const showAllImg = document.querySelector(".showAll__img");

  if (showAllButton.innerHTML === "Скрыть") {
    showAllButton.innerHTML = "Показать все";
    equipmentRepairItemShowAll.classList.toggle("equipment-repair__item__showAll-flex");
  } else {
    showAllButton.innerHTML = "Скрыть";
    equipmentRepairItemShowAll.classList.toggle("equipment-repair__item__showAll-flex");
  }

  showAllImg.classList.toggle("showAll__imgUp");
}

// var swiper = new Swiper(".swiper-container", {
//   slidesPerView: 1.3,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
