const button = document.querySelector('[data-accordion="button"]');

const openButton = () => {
  if (button.textContent === 'Подробнее') {
    button.textContent = 'Свернуть';
  } else {
    button.textContent = 'Подробнее';
  }
};

export const onButtonClick = () => {
  button.addEventListener('click', openButton);
};
