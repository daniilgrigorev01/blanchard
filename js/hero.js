const swiperHero = new Swiper(".hero__swiper", {
  loop: true,
  allowTouchMove: false,
  speed: 5000,
  autoplay: {
    delay: 10000,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});
