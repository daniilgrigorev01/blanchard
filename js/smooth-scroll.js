function smoothScroll(params) {
  document.querySelectorAll(`.${params.linkClass}`).forEach((link) => {
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
  linkClass: "header-top-nav__link",
});
