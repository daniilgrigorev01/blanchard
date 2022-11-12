const swiperGallery = () => {
  const swiperGallery = new Swiper(".gallery__swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });
};

const choicesGallery = () => {
  const element = document.querySelector(".gallery-select__choices");
  const choices = new Choices(element, {
    searchEnabled: false,
  });
};

swiperGallery();
choicesGallery();
