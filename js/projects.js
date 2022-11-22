const projectsTippy = () => {
  const clientWidth = document.body.clientWidth;

  if (clientWidth <= 1440) {
    tippy(".projects-text__tooltip", {
      theme: "main-without-arrow",
      trigger: "click",
    });
  } else {
    tippy(".projects-text__tooltip", {
      theme: "main",
      trigger: "click",
    });
  }
};

const projectsSwiper = new Swiper(".projects__swiper", {
  allowTouchMove: false,
  navigation: {
    nextEl: ".projects__swiper-button-next",
    prevEl: ".projects__swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    1440: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});

function activeTooltip(params) {
  const btn = document.querySelectorAll(`.${params.btnClass}`);

  btn.forEach((el) => {
    el.addEventListener("click", function () {
      el.classList.toggle(`${params.activeClass}`);
    });
  });
}

projectsTippy();

activeTooltip({
  btnClass: "projects-text__tooltip",
  activeClass: "is-active",
});
