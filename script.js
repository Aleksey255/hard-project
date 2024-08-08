
const num = 266219

let initNum = 1

const numbers = num.toString().split('')

for ( const number of numbers) {
  initNum *= number
}

let nums = initNum**3

console.log(nums.toString().substring(0,2));









const lang = 'ru' || 'en';

if (lang == 'ru') {
  console.log(
    'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'
  );
} else if (lang == 'en') {
  console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}

switch (lang) {
  case 'ru':
    console.log(
      'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'
    );
    break;
  case 'en':
    console.log(
      'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'
    );
    break;

  default:
    console.log('неверный язык');
    break;
}

let daysOfWeek = [
  [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ],
  [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
];

for (
  let languageIndex = 0;
  languageIndex < daysOfWeek.length;
  languageIndex++
) {
  const languageDays = daysOfWeek[languageIndex];
  for (let daysIndex = 0; daysIndex < languageDays.length; daysIndex++) {
    console.log(languageDays[daysIndex]);
  }
}

let namePerson = prompt('Введите имя')
namePerson == 'Артем' ? console.log('директор') : namePerson == 'Александр' ? console.log('преподаватель') : console.log('студент');








const initStr = prompt('Введите строку');

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

const arr = [
  '1234567890',
  '234567890',
  '34567890',
  '4567890',
  '567890',
  '67890',
  '7890',
];

for (let i = 0; i < arr.length; i++) {
  const num = arr[i];
  if (num[0] == '2' || num[0] == '4') {
    console.log(num);
  }
}

const simpleNum = function () {
  for (let i = 2; i < 101; i++) {
    if (i === 2 || i === 3 || i === 5 || i === 7) {
      console.log(i, `Делители этого числа: 1 и ${i}`);
    } else if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      continue;
    } else if (i % i === 0) {
      console.log(i, `Делители этого числа: 1 и ${i}`);
    }
  }
};

simpleNum();
