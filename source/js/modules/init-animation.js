import AOS from '../vendor/aos';

const initAnimation = () => {
  AOS.init({
    delay: 400,
    once: true,
    duration: 500,
  });
};

export {initAnimation};
