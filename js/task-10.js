function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');
console.log(destroyEl);