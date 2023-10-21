const btns = document.querySelectorAll('[data-read-more]');
const breakpoint = window.matchMedia('(max-width:767px)');

const breakpointChecker = () => {
  if (breakpoint.matches) {
    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const parent = btn.closest('.leadership__item');
        if (!parent.classList.contains('is-active')) {
          parent.classList.add('is-active');
          btn.querySelector('span').innerText = btn.dataset.btnText;
        } else {
          parent.classList.remove('is-active');
          btn.querySelector('span').innerText = btn.dataset.btnMore;
        }
      });
    });
  } else {
    return;
  }
};

const initReadMore = () => {
  if (!btns) {
    return;
  }

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {initReadMore};
