function openMenu(params) {
  const btn = document.querySelector(`.${params.btnClass}`);
  const menu = document.querySelector(`.${params.menuClass}`);

  btn.addEventListener("click", function () {
    menu.classList.add(`${params.activeClass}`);
  });
}

function closeMenu(params) {
  const btn = document.querySelector(`.${params.btnClass}`);
  const menu = document.querySelector(`.${params.menuClass}`);

  btn.addEventListener("click", function () {
    menu.classList.remove(`${params.activeClass}`);
  });
}

function openSearch(params) {
  const btn = document.querySelector(`.${params.btnClass}`);
  const form = document.querySelector(`.${params.formClass}`);

  btn.addEventListener("click", function () {
    form.classList.add(`${params.activeClass}`);
  });
}

function closeSearch(params) {
  const btn = document.querySelector(`.${params.btnClass}`);
  const form = document.querySelector(`.${params.formClass}`);

  btn.addEventListener("click", function () {
    form.classList.remove(`${params.activeClass}`);
  });
}

openMenu({
  btnClass: "header-top__btn-open-menu",
  menuClass: "header-top__nav",
  activeClass: "is-opened",
});

closeMenu({
  btnClass: "header-top-nav__btn-close-menu",
  menuClass: "header-top__nav",
  activeClass: "is-opened",
});

openSearch({
  btnClass: "header-top__btn-open-search",
  formClass: "header-top__form-wrapper",
  activeClass: "is-opened",
});

closeSearch({
  btnClass: "header-top-form-search__btn-close-search",
  formClass: "header-top__form-wrapper",
  activeClass: "is-opened",
});
