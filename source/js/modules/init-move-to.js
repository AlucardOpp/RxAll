export const initMoveTo = () => {
  const triggers = document.querySelectorAll('[data-trigger]');

  if (!triggers.length) {
    return;
  }
  const moveTo = new window.MoveTo();
  triggers.forEach((trigger) => {
    const target = document.querySelector(trigger.dataset.trigger);
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      moveTo.move(target);
    });
  });
};
