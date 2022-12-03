function smoothScroll(params) {
  document.querySelectorAll(`.${params.scrollClass}`).forEach((link) => {
    link.addEventListener("click", function (evt) {
      evt.preventDefault();

      const href = this.getAttribute("href").substring(1);
      const targetScroll = document.getElementById(href);
      const elementPosition = targetScroll.getBoundingClientRect().top;

      window.scrollBy({
        top: elementPosition,
        behavior: "smooth",
      });
    });
  });
}

smoothScroll({
  scrollClass: "smooth-scroll-js",
});
