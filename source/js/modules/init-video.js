const playBtn = document.querySelector('[data-btn="video__btn"]');

const initVideo = () => {
  if (!playBtn) {
    return;
  }

  const img = document.querySelector('.video__img');
  const video = document.querySelector('iframe');
  const src = 'https://www.youtube.com/embed/p0HxjXVP2XE?autoplay=1';

  playBtn.addEventListener('click', ()=> {
    video.setAttribute('src', src);
    setTimeout(() => {
      img.classList.add('hidden');
    }, 300);
  });
};

export {initVideo};
