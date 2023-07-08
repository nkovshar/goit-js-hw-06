function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');
const body = document.querySelector('body');

buttonEl.addEventListener('click', onColorChange);

function onColorChange(evt) { 
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  textEl.textContent = randomColor;
}