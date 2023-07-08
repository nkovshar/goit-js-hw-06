const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('blur', handleInput);
const inputLength = Number(inputEl.dataset.length);
console.log(inputLength);

function handleInput() {
    if (inputEl.value.length === inputLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
    else { 
        inputEl.classList.add('invalid');
         inputEl.classList.remove('valid');
    }
};
    