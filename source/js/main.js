import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initCustomSelect} from './modules/form/init-custom-select';
import {initFormValidate} from './modules/form/init-form-validate';
import {mainNavToggle} from './modules/init-main-nav';
import {initNavigationChanger} from './modules/init-navigation-changer';
import {modalSuccess} from './modules/modals/modal-success';
import {initPartnersSlider} from './modules/init-partners-slider';
import {initReadMore} from './modules/init-read-more';
import {initOpenContentToggle} from './modules/init-open-content-toggle';
import {changeTabColor} from './modules/change-tab-color';
import {initAnimation} from './modules/init-animation';
import {initMoveTo} from './modules/init-move-to';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initCustomSelect();
    initFormValidate();
    mainNavToggle();
    initNavigationChanger();
    modalSuccess();
    initPartnersSlider();
    initReadMore();
    initOpenContentToggle();
    changeTabColor();
    initAnimation();
    initMoveTo();
    if (document.querySelector('.intro-images')) {
      document.querySelector('.intro-images').classList.add('is-animated');
    }
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
