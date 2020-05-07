var navHead = document.querySelector('.page-header__nav');
var btnClose = document.querySelector('.page-header__btn--closed');
var btnOpen = document.querySelector('.page-header__btn--opened');

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
