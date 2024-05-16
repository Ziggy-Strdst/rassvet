// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

// mobile menu
const menuLink = document.querySelectorAll('.arrow');

if (menuLink) {
  menuLink.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      link.classList.toggle('link-active');
      link.nextElementSibling.classList.toggle('sub-active');
    });
  });
}

// Убрать марджин последнего элемента в текстовом блоке

const textContainer = document.querySelector('.text__container');
if (textContainer) {
  textContainer.lastElementChild.style.marginBottom = '0';
}

// кнопка якорь в футере

document.querySelector('.anchor__btn').addEventListener('click', function () {
  window.scrollTo(0, 0);
});
