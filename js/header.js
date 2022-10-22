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

function removeSimplebar(params) {
  const mediaQuery = window.matchMedia("(min-width: 1440px)");
  const nav = document.querySelector(`.${params.navClass}`);

  if (mediaQuery.matches) {
    nav.removeAttribute("data-simplebar");
  }
}

function setMenuListener(params) {
  document.body.addEventListener("click", (e) => {
    const activeElements = document.querySelectorAll(
      `.${params.btnClass}.${params.activeClass}, .${params.dropdownClass}.${params.activeClass}`
    );

    if (activeElements.length && !e.target.closest(`.${params.activeClass}`)) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClass)) {
          current.classList.remove(params.activeClass);
        } else {
          current.classList.add(params.disabledClass);
        }
      });
    }

    if (e.target.closest(`.${params.btnClass}`)) {
      const btn = e.target.closest(`.${params.btnClass}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(
        `.${params.dropdownClass}[data-target="${path}"]`
      );

      btn.classList.toggle(params.activeClass);

      if (!drop.classList.contains(params.activeClass)) {
        drop.classList.add(params.activeClass);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClass);
      }
    }
  });

  function onDisable(e) {
    if (e.target.classList.contains(params.disabledClass)) {
      e.target.classList.remove(params.disabledClass, params.activeClass);
      e.target.removeEventListener("animationend", onDisable);
    }
  }
}

openMenu({
  btnClass: "header-top__btn-open-menu",
  menuClass: "header-top__nav",
  activeClass: "is-active",
});

closeMenu({
  btnClass: "header-top-nav__btn-close-menu",
  menuClass: "header-top__nav",
  activeClass: "is-active",
});

openSearch({
  btnClass: "header-top__btn-open-search",
  formClass: "header-top__form-wrapper",
  activeClass: "is-active",
});

closeSearch({
  btnClass: "header-top-form-search__btn-close-search",
  formClass: "header-top__form-wrapper",
  activeClass: "is-active",
});

removeSimplebar({
  navClass: "header-top__nav",
});

setMenuListener({
  btnClass: "header-bottom-list__btn",
  dropdownClass: "header-bottom-list__dropdown-menu",
  activeClass: "is-active",
  disabledClass: "is-disabled",
});
