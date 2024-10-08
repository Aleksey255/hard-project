'use strict';

const square = document.querySelector('.square');
const reset = document.querySelector('.reset');

let active = false;
let count = 50;
let idInterval;

const animate = () => {
  count++;
  idInterval = requestAnimationFrame(animate);

  if (count < 2000) {
    square.style.width = count + 'px';
    square.style.height = count + 'px';
  } else {
    cancelAnimationFrame(idInterval);
  }
};

square.addEventListener('click', () => {
  if (active) {
    cancelAnimationFrame(idInterval);
    active = false;
  } else {
    idInterval = requestAnimationFrame(animate);
    active = true;
  }
});

reset.addEventListener('click', () => {
  count = 50;
  square.style.width = count + 'px';
  square.style.height = count + 'px';
  cancelAnimationFrame(idInterval);
  active = false;
});
