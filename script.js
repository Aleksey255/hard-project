













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
