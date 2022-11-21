const swiperEvents = new Swiper(".events__swiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  autoHeight: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },
    1440: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
      navigation: {
        nextEl: ".events__swiper-button-next",
        prevEl: ".events__swiper-button-prev",
      },
    },
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      navigation: {
        nextEl: ".events__swiper-button-next",
        prevEl: ".events__swiper-button-prev",
      },
    },
  },
});
