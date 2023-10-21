import {modals} from './init-modals';

const modal = document.querySelector('[data-modal="success"]');
const body = document.querySelector('body');

const modalSuccess = () => {
  if (!modal) {
    return;
  }

  const wrapperSuccess = modal.querySelector('.modal-success');

  const onOpenModalSuccess = () => {
    const openModals = document.querySelectorAll('.modal.is-active');

    openModals.forEach((elem) => {
      modals.close(elem.dataset.modal);
    });

    modals.open('success');
    body.style.overflow = 'hidden';
  };

  modal.addEventListener('click', (evt) => {
    if (evt.target === wrapperSuccess) {
      modals.close('success');
      body.style.overflow = 'auto';
    }
  });

  window.onOpenModalSuccess = onOpenModalSuccess;
};

export {modalSuccess};
