const sliders = document.querySelectorAll('.partners__slider');

const initPartnersSlider = () => {
  if (!sliders) {
    return;
  }

  // eslint-disable-next-line
  sliders.forEach((slider) => {
    const parent = slider.closest('.partners');
    const nextBtn = parent.querySelector('.swiper-button-next');
    const prevBtn = parent.querySelector('.swiper-button-prev');
    const pagination = parent.querySelector('.swiper-pagination');

    const swiper = new Swiper(slider, {
      grabCursor: true,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      pagination: {
        el: pagination,
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        1920: {
          slidesPerView: 3,
          spaceBetween: 54.3,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 33.5,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20.4,
        },
        0: {
          slidesPerView: 'auto',
          spaceBetween: 20.4,
        },
      },
    });
  });
};

export {initPartnersSlider};
