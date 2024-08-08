'use strict';

const week = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];
const currentDate = new Date();
const currentDayOfWeek = currentDate.getDay() === 0 ? 6 : currentDate.getDay() - 1;
const currentDayName = week[currentDayOfWeek];

const days = week.map((day) => {
  if (day == 'Суббота' || day == 'Воскресенье') {
    return `<em>${day}</em>`;
  } else if (day == currentDayName) {
    return `<strong>${day}</strong>`;
  }
  return day;
});

document.body.innerHTML = days.join('<br>');
