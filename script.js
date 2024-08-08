'use strict';

const initStr = prompt('Введите строку')

const changeStr = function (str, maxLength = 30) {
  str = typeof str !== 'string' ? alert('Введена не строка') : str.trim();

  if (typeof str !== 'string') {
    return str;
  } else if (str.length > maxLength) {
    return str.substring(0, maxLength) + '...';
  } else {
    return str;
  }
};

console.log(changeStr(initStr));
