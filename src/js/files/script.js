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

// МАСКА

window.addEventListener('DOMContentLoaded', function () {
  [].forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = '+7 (___) ___-__-__',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, ''),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) : a;
        });
      i = new_value.indexOf('_');
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      var reg = matrix
        .substr(0, this.value.length)
        .replace(/_+/g, function (a) {
          return '\\d{1,' + a.length + '}';
        })
        .replace(/[+()]/g, '\\$&');
      reg = new RegExp('^' + reg + '$');
      if (
        !reg.test(this.value) ||
        this.value.length < 5 ||
        (keyCode > 47 && keyCode < 58)
      ) {
        this.value = new_value;
      }
      if (event.type == 'blur' && this.value.length < 5) {
        this.value = '';
      }
    }

    input.addEventListener('input', mask, false);
    input.addEventListener('focus', mask, false);
    input.addEventListener('blur', mask, false);
    input.addEventListener('keydown', mask, false);
  });
});

// Выбор города

document.querySelectorAll('.regions__link').forEach(function (element) {
  element.addEventListener('click', function () {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/ajax/', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        document.querySelector('.city__list').innerHTML = this.responseText;
        console.log('AJAX SUKA PERDOLE');
      }
    };
    xhr.send('city=city');
  });
});
