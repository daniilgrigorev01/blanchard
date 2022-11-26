ymaps.ready(init);
function init() {
  var contactsMap = new ymaps.Map("map", {
    center: [55.758468, 37.601088],
    zoom: 15,
  });

  var contactsPlacemark = new ymaps.Placemark(
    [55.758468, 37.601088],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "/img/contacts/placemark.svg",
      iconImageSize: [20, 20],
    }
  );

  contactsMap.behaviors.disable(["scrollZoom"]);

  contactsMap.geoObjects.add(contactsPlacemark);

  contactsMap.controls.remove("geolocationControl");
  contactsMap.controls.remove("searchControl");
  contactsMap.controls.remove("trafficControl");
  contactsMap.controls.remove("typeSelector");
  contactsMap.controls.remove("fullscreenControl");
  contactsMap.controls.remove("zoomControl");
  contactsMap.controls.remove("rulerControl");
}

const validate = () => {
  var mask = document.querySelector("input[type='tel']");

  var im = new Inputmask("+7 (999) 999-99-99");
  im.mask(mask);

  const validation = new JustValidate("#contacts__form", {
    errorLabelStyle: {
      color: "#D11616",
    },
  });

  validation
    .addField("#contacts__name", [
      {
        rule: "required",
        errorMessage: "Имя обязательно",
      },
      {
        rule: "minLength",
        value: 2,
        errorMessage: "Введено меньше 3-х символов",
      },
      {
        rule: "maxLength",
        value: 15,
        errorMessage: "Введено больше 15-и символов",
      },
      {
        rule: "customRegexp",
        value: /[А-Яа-яA-Za-z]/,
        errorMessage: "Неверный формат",
      },
    ])
    .addField("#contacts__tel", [
      {
        rule: "required",
        errorMessage: "Номер телефона обязателен",
      },
      {
        validator: () => {
          const phone = mask.inputmask.unmaskedvalue();

          return Number(phone) && phone.length === 10;
        },
        errorMessage: "Номер должен содержать 10 цифр",
      },
    ])
    .onSuccess((evt) => {
      let formData = new FormData(evt.target);
      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            let message = document.querySelector(".contacts__modal");

            message.showModal();

            message.classList.add(
              "animate__animated",
              "animate__zoomIn",
              "is-open"
            );
            message.addEventListener("animationend", () => {
              message.classList.remove("animate__animated", "animate__zoomIn");
            });

            setTimeout(function () {
              message.classList.add("animate__animated", "animate__zoomOut");
              message.addEventListener("animationend", () => {
                message.classList.remove(
                  "animate__animated",
                  "animate__zoomOut",
                  "is-open"
                );
              });

              message.close();
            }, 5000);
          }
        }
      };

      xhr.open("POST", "./mail.php", true);
      xhr.send(formData);

      evt.target.reset();
    });
};

function changeBtn(params) {
  const btn = document.querySelector(`.${params.btnClass}`);
  const clientWidth = document.body.clientWidth;

  if (clientWidth >= 768) {
    btn.innerText = "Заказать обратный звонок";
  }
}

validate();

changeBtn({
  btnClass: "contacts-form__btn",
});
