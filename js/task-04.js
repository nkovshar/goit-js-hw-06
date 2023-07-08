const counterEl = document.querySelector('#value')
let counterValue = 0;

const decrementCountEl = document.querySelector('[data-action="decrement"]');
const incrementCountEl = document.querySelector('[data-action="increment"]');
function updateCounter() { 
    counterEl.textContent = counterValue;
}

incrementCountEl.addEventListener('click', incrementOnClick);

function incrementOnClick(evt) {
      counterValue += 1;
     updateCounter()
};

decrementCountEl.addEventListener('click', decrementOnClick);
function decrementOnClick(evt) {
    counterValue -= 1;
    updateCounter()
};