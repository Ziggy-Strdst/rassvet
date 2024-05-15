/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

//Подключаем слайдер Swiper с node_modules
//При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
//Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

//Стили Swiper
//Базовые стили
import '../../scss/base/swiper.scss';
//Полный набор стилей с scss/libs/swiper.scss
import '../../scss/libs/swiper.scss';
//Полный набор стилей с node_modules
// import 'swiper/css';

//Инициализация слайдеров
function initSliders() {
  //Список слайдеров
  //Проверяем, есть ли слайдер на странице
  if (document.querySelector('.include__slider')) {
    //Указываем класс нужного слайдера
    //Создаем слайдер
    new Swiper('.include__slider', {
      //Указываем класс нужного слайдера
      //Подключаем модули слайдера
      //для конкретного случая
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 1.2,
      spaceBetween: 10,
      // autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      // navigation: {
      //   prevEl: '.swiper-button-prev',
      //   nextEl: '.swiper-button-next',
      // },

      // Брейкпоинты
      breakpoints: {
        640: {
          slidesPerView: 1.2,
          spaceBetween: 10,
          autoHeight: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1100: {
          slidesPerView: 0,
          spaceBetween: 0,
        },
      },

      // События
      on: {},
    });
  }
  if (document.querySelector('.team__slider')) {
    new Swiper('.team__slider', {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 1.2,
      spaceBetween: 10,
      speed: 800,

      navigation: {
        prevEl: '.team-button-prev',
        nextEl: '.team-button-next',
      },

      // Брейкпоинты
      breakpoints: {
        640: {
          slidesPerView: 1.2,
          spaceBetween: 10,
          autoHeight: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 28,
        },
        1268: {
          slidesPerView: 4,
          spaceBetween: 28,
        },
      },

      // События
      on: {},
    });
  }
  if (document.querySelector('.reviews__slider')) {
    new Swiper('.reviews__slider', {
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 40,
      speed: 800,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: '.reviews-button-prev',
        nextEl: '.reviews-button-next',
      },

      // Брейкпоинты
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 40,
          autoHeight: true,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1268: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      },

      // События
      on: {},
    });
  }
  if (document.querySelector('.conditions__slider')) {
    new Swiper('.conditions__slider', {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 40,
      speed: 800,

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: '.conditions-button-prev',
        nextEl: '.conditions-button-next',
      },

      // Брейкпоинты
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 40,
          autoHeight: true,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1268: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      },

      // События
      on: {},
    });
  }
}
//Скролл на базе слайдера (по классу swiper scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener('load', function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  //Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
