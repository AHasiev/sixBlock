  const swiper = new Swiper(".swiper__slide-menu", {
    // slidesPerView: 3, 
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      // mobile + tablet - 320-990
      320: {
        slidesPerView: 1.2,

      },
      // desktop >= 991
      768: {
        slidesPerView: 3,
      }
    }
  });