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
const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');

searchInput.addEventListener('keyup', function () {
  const searchText = searchInput.value.trim();

  fetch('/city.php?q=' + encodeURIComponent(searchText))
    .then((response) => response.json())
    .then((data) => {
      resultsDiv.innerHTML = '';
      data.forEach((city) => {
        const link = document.createElement('a');
        let updatedHref = `https://${city.Domain}`;
        link.href = updatedHref;
        link.setAttribute('class', 'city__item');
        link.textContent = city.Catalogue_Name;
        resultsDiv.appendChild(link);
      });
    })
    .catch((error) => console.error('Error fetching data:', error));
});
