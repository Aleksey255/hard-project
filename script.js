'use strict';

const input = document.querySelector('.input');
const text = document.querySelector('.text');

const handleInput = () => {
  text.textContent =  input.value
}

const debounce = (func, delay) => {
  let timer;
  return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
  };
};

const debounceHandleInput = debounce(handleInput, 300)

input.addEventListener('input', debounceHandleInput );
