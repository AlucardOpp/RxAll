const navItems = document.querySelectorAll('.tablet-nav__item');

const changeTabColor = () => {
  window.addEventListener('scroll', () => {
    navItems.forEach((item) => {
      const itemBottomCord = item.getBoundingClientRect().bottom - (item.getBoundingClientRect().height / 2);
      const underElement = document.elementFromPoint(0, itemBottomCord);
      if (underElement.classList.contains('footer') || underElement.classList.contains('card-element--dark')) {
        item.classList.add('tablet-nav__item--white');
      } else {
        item.classList.remove('tablet-nav__item--white');
      }
    });
  });
};

export {changeTabColor};
