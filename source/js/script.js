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
// var link = document.querySelector(".review-form__btn");
// var popup = document.querySelector(".popup");
// var form = popup.querySelector("review-form");
// var login = popup.querySelector("[name=user_name]");
// var email = popup.querySelector("[name=user_email]");
// var surname = popup.querySelector("[name=user_surname]")

// link.addEventListener("click", function (evt) {
// 	evt.preventDefault();
// 	form.addEventListener("submit", function (evt) {
//     if (!login.value || !email.value || !message.value) {
//       evt.preventDefault();
//       popup.classList.remove("modal_error");
//       popup.offsetWidth = popup.offsetWidth;
//       popup.classList.add("modal_error");
//       if (login.value === '') {
//         login.classList.add('popup-invalid');
//       } else {
//         login.classList.remove('popup__invalid');
//       }
//       if (email.value === '') {
//         email.classList.add('popup__invalid');
//       } else {
//         email.classList.remove('popup__invalid');
//       }
//       if (message.value === '') {
//         surname.classList.add('popup__invalid');
//       } else {
//         surname.classList.remove('popup__invalid');
//       }
//     }
//   });
// });

// form.addEventListener("submit", function (evt) {
// 	if (!login.value || !email.value || !message.value) {
// 		evt.preventDefault();
// 		popup.classList.remove("modal_error");
// 		popup.offsetWidth = popup.offsetWidth;
// 		popup.classList.add("modal_error");
// 		if (login.value === '') {
// 			login.classList.add('popup-invalid');
// 		} else {
// 			login.classList.remove('popup__invalid');
// 		}
// 		if (email.value === '') {
// 			email.classList.add('popup__invalid');
// 		} else {
// 			email.classList.remove('popup__invalid');
// 		}
// 		if (message.value === '') {
// 			surname.classList.add('popup__invalid');
// 		} else {
// 			surname.classList.remove('popup__invalid');
// 		}
// 	}
// });

// window.addEventListener("keydown", function (evt) {
// 	if (evt.keyCode === 27) {
// 		evt.preventDefault();
// 		if (popup.classList.contains("modal_show")) {
// 			popup.classList.remove("modal_show");
// 			popup.classList.remove("modal_error");
// 		}
// 	}
// });
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

  var errorBtn = errorPopup.querySelector(".popup__btn-ok");

  errorBtn.addEventListener("click", function(event) {
        event.preventDefault();
        errorPopup.classList.remove("popup__show");
    })

    var successBtn = successPopup.querySelector(".popup__btn-close");

    successBtn.addEventListener("click", function(event) {
        event.preventDefault();
        successPopup.classList.remove("popup__show");
    })
}
