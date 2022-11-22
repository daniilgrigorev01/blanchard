const swiperGallery = new Swiper(".gallery__swiper", {
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});

const choicesGallery = () => {
  const element = document.querySelector(".gallery-select__choices");
  const choices = new Choices(element, {
    searchEnabled: false,
    placeholder: false,
    allowHTML: false,
  });
};

choicesGallery();
