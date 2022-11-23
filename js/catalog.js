const accordionCatalog = () => {
  new Accordion(".catalog__accordion", {
    elementClass: "catalog-accordion__item",
    triggerClass: "catalog-accordion__btn",
    panelClass: "catalog-accordion__panel",
  });
};

function aboutArtist(params) {
  const link = document.querySelectorAll(`.${params.linkClass}`);
  const artist = document.querySelectorAll(`.${params.artistClass}`);

  link.forEach((current) => {
    current.addEventListener("click", function () {
      let linkPath = current.dataset.path;

      artist.forEach((el) => {
        let artistTarget = el.dataset.target;

        if (linkPath === artistTarget) {
          el.classList.add(
            params.activeClass,
            "animate__animated",
            "animate__fadeIn"
          );
          el.addEventListener("animationend", () => {
            el.classList.remove("animate__animated", "animate__fadeIn");
          });
        } else {
          el.classList.remove(params.activeClass);
        }
      });
    });
  });
}

function closeAccordionEmpty(params) {
  const link = document.querySelectorAll(`.${params.linkClass}`);
  const accordionItem = document.querySelectorAll(
    `.${params.accordionItemClass}`
  );
  const accordionPanel = document.querySelectorAll(
    `.${params.accordionPanelClass}`
  );

  link.forEach((current) => {
    current.addEventListener("click", function () {
      accordionItem.forEach((el) => {
        el.classList.remove(`${params.activeClass}`);
      });
      accordionPanel.forEach((el) => {
        el.style.height = 0;
      });
    });
  });
}

function scrollCatalog(params) {
  const clientWidth = Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.body.clientWidth,
    document.documentElement.clientWidth
  );

  if (clientWidth < 768) {
    const links = document.querySelectorAll(`.${params.linkClass}`);

    links.forEach((link) => {
      link.addEventListener("click", function (evt) {
        evt.preventDefault();

        const href = link.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const elementPosition = scrollTarget.getBoundingClientRect().top;

        window.scrollBy({
          top: elementPosition,
          behavior: 'smooth'
        });
      });
    });
  }
}

accordionCatalog();

aboutArtist({
  linkClass: "catalog-accordion__artist",
  artistClass: "catalog__artist",
  activeClass: "is-active",
});

closeAccordionEmpty({
  linkClass: "catalog-accordion-empty__link",
  accordionItemClass: "catalog-accordion__item",
  accordionPanelClass: "catalog-accordion__panel",
  activeClass: "is-active",
});

scrollCatalog({
  linkClass: "catalog-accordion__artist",
});
