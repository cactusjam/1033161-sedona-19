var navHead = document.querySelector('.page-header__nav');
var btnClose = document.querySelector('.page-header__btn--closed');
var btnOpen = document.querySelector('.page-header__btn--opened');


// ----- меню в шапке-----

navHead.classList.remove('page-header--nojs');

btnClose.addEventListener('click', function () {
  if (navHead.classList.contains('page-header--closed')) {
    navHead.classList.remove('page-header--closed');
    navHead.classList.add('page-header--opened');
  } else {
    navHead.classList.add('page-header--closed');
    navHead.classList.remove('page-header--opened');
    btnOpen.style.display='block';
  }
});

btnOpen.addEventListener('click', function () {
  if (navHead.classList.contains('page-header--opened')) {
    navHead.classList.remove('page-header--opened');
    navHead.classList.add('page-header--closed');
  } else {
    navHead.classList.add('page-header--opened');
    navHead.classList.remove('page-header--closed');
    btnOpen.style.display='none';
  }
});

// ------отправка формы-----

var popup = document.querySelector(".popup");
var form = document.querySelector(".review-form");

if (form) {
  var link = document.querySelector(".review-form__btn");
  var errorPopup = document.querySelector(".popup--mistake");
  var successPopup = document.querySelector(".popup--done");

  link.addEventListener("click", function(evt) {
    event.preventDefault();

    if (form.checkValidity()) {
      successPopup.classList.add("popup__show");
      form.reset()
    } else {
      errorPopup.classList.add("popup__show");
    }
  });

  var errorBtn = errorPopup.querySelector(".popup__btn--ok");

  errorBtn.addEventListener("click", function(event) {
        event.preventDefault();
        errorPopup.classList.remove("popup__show");
    })

    var successBtn = successPopup.querySelector(".popup__btn--close");

    successBtn.addEventListener("click", function(event) {
        event.preventDefault();
        successPopup.classList.remove("popup__show");
    })
}
