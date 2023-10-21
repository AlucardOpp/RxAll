const body = document.querySelector('body');

const initOpenContentToggle = () => {
  body.addEventListener('click', (evt) => {
    openContentEventOn(evt);
  });
};

const openContent = (element) => {
  const parent = element.closest('.case-card');

  if (parent) {
    const content = parent.querySelector('.case-card__content');

    content.classList.toggle('case-card__content--rolled-up');
    element.classList.toggle('link--hidden');
  }
};

const openContentEventOn = (evt) => {
  switch (true) {
    case !!evt.target.closest('.case-card .link'):
      evt.preventDefault();
      openContent(evt.target);
      break;
    default:
  }
};

export {initOpenContentToggle};
