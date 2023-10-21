import FormsValidate from './form-validate';
import {modals} from '../modals/init-modals';

const formWrappers = document.querySelectorAll('[data-validate]');
const successModal = document.querySelector('[data-modal="success"]');
const formSuccessEvt = new CustomEvent('onSuccess');
const formErrorEvt = new CustomEvent('onError');


const resetForm = (form) => {
  setTimeout(() => {
    window.clearForm(form);
  }, 1000);
};

const baseValidationSuccessCallback = (e) => {
  e.preventDefault();
  // В данном колбеке бэкендер будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки при отправке
  // window.onOpenModalSuccess();

  resetForm(e.target);
  e.target.dispatchEvent(formSuccessEvt);

  if (successModal) {
    modals.open('success');
  }
};

const baseValidationErrorCallback = (e) => {
  e.preventDefault();
  e.target.dispatchEvent(formErrorEvt);
};

const customExampleValidationSuccessCallback = (e) => {
  e.preventDefault();
  // В данном колбеке бэкендер будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки при отправке
  resetForm(e.target);
  e.target.dispatchEvent(formSuccessEvt);

  if (successModal) {
    modals.open('success');
  }
};

const customExampleValidationErrorCallback = (e) => {
  e.preventDefault();
  e.target.dispatchEvent(formErrorEvt);
};

const callbacks = {
  base: {
    // Колбек при успешной валидации формы при попытке её отправки
    validationSuccessCallback: baseValidationSuccessCallback,
    // Колбек при не успешной валидации формы при попытке её отправки, не связан с запросами на сервер
    validationErrorCallback: baseValidationErrorCallback,
  },
  customExample: {
    validationSuccessCallback: customExampleValidationSuccessCallback,
    validationErrorCallback: customExampleValidationErrorCallback,
  },
};

const setCustomPhoneInputsEvent = () => {
  if (document.querySelectorAll('[data-validate-type="phone"] input').length) {
    document.querySelector('html').addEventListener('input', ({target}) => {
      if (target.closest('[data-validate-type="phone"]')) {
        target.closest('[data-validate-type="phone"]').querySelector('input').dispatchEvent(new Event('input'));
      }
    });
  }
};

const initFormValidate = () => {
  if (formWrappers.length) {
    setCustomPhoneInputsEvent();
    formWrappers.forEach((wrapper) => {
      let callback = wrapper.dataset.callback;

      if (!callback) {
        callback = 'base';
      }

      const formValidate = new FormsValidate(wrapper, callbacks[callback]);
      return formValidate.init();
    });
  }
};

export {initFormValidate};
