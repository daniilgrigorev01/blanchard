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
          el.classList.add(params.activeClass);
        } else {
          el.classList.remove(params.activeClass);
        }
      });
    });
  });
}

function closeAccordion(params) {
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

function closeAccordionEmpty(params) {
  const link = document.querySelectorAll(`.${params.linkClass}`);
  const accordionItem = document.querySelectorAll(`.${params.accordionItemClass}`);
  const accordionPanel = document.querySelectorAll(`.${params.accordionPanelClass}`);

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

accordionCatalog();

aboutArtist({
  linkClass: "catalog-accordion__artist",
  artistClass: "catalog__artist",
  activeClass: "is-active",
});

closeAccordion({
  linkClass: "catalog-accordion__artist",
  accordionItemClass: "catalog-accordion__item",
  accordionPanelClass: "catalog-accordion__panel",
  activeClass: "is-active",
});

closeAccordionEmpty({
  linkClass: "catalog-accordion-empty__link",
  accordionItemClass: "catalog-accordion__item",
  accordionPanelClass: "catalog-accordion__panel",
  activeClass: "is-active",
});
