import {Modals} from './modals';
import {closeModalSuccess} from './modal-success-close';

const openVideo1 = () => {
  const modalVideo = document.querySelector('.modal--video-1 .modal-video');
  if (modalVideo.querySelector('iframe').src) {
    return;
  }
  modalVideo.querySelector('iframe').src = modalVideo.dataset.iframeSrc;
};

const openVideo2 = () => {
  const modalVideo = document.querySelector('.modal--video-2 .modal-video');
  if (modalVideo.querySelector('iframe').src) {
    return;
  }
  modalVideo.querySelector('iframe').src = modalVideo.dataset.iframeSrc;
};

let modals;

// Здесь реализован пример открытия модалки через колбэк закрытия
// const openModalInCloseCallback = (name, context = this) => {
//   context._enableScrolling = false;
//   context._setSettings('default');
//   modals.open(name);
// };

// closeCallback() {
//   openModalInCloseCallback('modal-5');
// },

const settings = {
  'default': {
    preventDefault: true,
    stopPlay: true,
    lockFocus: true,
    startFocus: true,
    focusBack: true,
    eventTimeout: 400,
    openCallback: false,
    closeCallback: false,
  },
  'success': {
    closeCallback: closeModalSuccess,
  },
  'video-1': {
    openCallback: openVideo1,
  },
  'video-2': {
    openCallback: openVideo2,
  },
};

const initModals = () => {
  const modalElements = document.querySelectorAll('.modal');
  if (modalElements.length) {
    modalElements.forEach((el) => {
      setTimeout(() => {
        el.classList.remove('modal--preload');
      }, 100);
    });
  }

  modals = new Modals(settings);
  // Используйте в разработке экспортируемую переменную modals, window сделан для бэкэнда
  window.modals = modals;
};

export {modals, initModals};
