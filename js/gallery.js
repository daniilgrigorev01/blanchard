const swiperGallery = new Swiper(".gallery__swiper", {
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
    1440: {
      allowTouchMove: false,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
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

function setModal(params) {
  if (!document.createElement("dialog").showModal) {
    import("/libs/dialog-polyfill.min.js").then((dialogPolyfill) =>
      document.querySelectorAll("dialog").forEach(dialogPolyfill.registerDialog)
    );
  }

  const links = document.querySelectorAll(`.${params.linkClass}`);
  const btnsClose = document.querySelectorAll(`.${params.btnClass}`);

  links.forEach((link) => {
    link.addEventListener("click", function () {
      let modal = this.dataset.modal;
      let targetModal = document.querySelector(`.gallery__modal[data-target="${modal}"]`);

      targetModal.showModal();
      document.querySelector(".body").style.overflow = "hidden";

      targetModal.classList.add("animate__animated", "animate__zoomIn", "is-open");
      targetModal.addEventListener("animationend", () => {
        targetModal.classList.remove("animate__animated", "animate__zoomIn");
      });

      btnsClose.forEach((btn) => {
        btn.addEventListener("click", function () {
          let btn = this.dataset.path;
          let targetModal = document.querySelector(
            `.gallery__modal[data-target="${btn}"]`
          );

          targetModal.classList.add("animate__animated", "animate__zoomOut");
          targetModal.addEventListener("animationend", () => {
            targetModal.classList.remove( "animate__animated", "animate__zoomOut");
          });

          function closeModal() {
            targetModal.classList.remove("is-open");
            targetModal.close();
            document.querySelector(".body").style.overflow = "auto";
          }

          setTimeout(closeModal, 400);
        });
      });
    });
  });
}

choicesGallery();

setModal({
  linkClass: "gallery-swiper__link",
  btnClass: "gallery-modal__btn",
});
