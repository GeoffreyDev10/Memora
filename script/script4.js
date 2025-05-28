document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelector('.cards');
  const cardElems = Array.from(cards.children);
  const leftBtn = document.querySelector('.arrow-left');
  const rightBtn = document.querySelector('.arrow-right');
  let current = 0;

  function updateSlider() {
    cards.style.transform = `translateX(-${current * 100}%)`;
  }

  rightBtn.addEventListener('click', () => {
    if (current < cardElems.length - 1) {
      current++;
      updateSlider();
    }
  });

  leftBtn.addEventListener('click', () => {
    if (current > 0) {
      current--;
      updateSlider();
    }
  });
});