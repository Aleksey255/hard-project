'use strict';

const daysOfWeek = [
  'воскресенье',
  'понедельник',
  'вторник',
  'среда',
  'четверг',
  'пятница',
  'суббота',
];
const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

const changeTime = function (hour, minute, second) {
  let hourStr = '';
  if ((hour >= 2 && hour <= 4) || (hour >= 22 && hour <= 23)) {
    hourStr = `${hour} часа`;
  } else if ((hour >= 5 && hour <= 20) || hour == 0) {
    hourStr = `${hour} часов`;
  } else if (hour == 1 || hour == 21) {
    hourStr = `${hour} час`;
  }
  let minuteStr = '';
  if (
    (minute >= 2 && minute <= 4) ||
    (minute >= 22 && minute <= 24) ||
    (minute >= 32 && minute <= 34) ||
    (minute >= 42 && minute <= 44) ||
    (minute >= 52 && minute <= 54)
  ) {
    minuteStr = `${minute} минуты`;
  } else if (
    minute == 0 ||
    (minute >= 5 && minute <= 20) ||
    (minute >= 25 && minute <= 30) ||
    (minute >= 35 && minute <= 40) ||
    (minute >= 45 && minute <= 50) ||
    (minute >= 55 && minute <= 59)
  ) {
    minuteStr = `${minute} минут`;
  } else if (
    minute == 1 ||
    minute == 21 ||
    minute == 31 ||
    minute == 41 ||
    minute == 51
  ) {
    minuteStr = `${minute} минута`;
  }
  let secondStr = '';
  if (
    (second >= 2 && second <= 4) ||
    (second >= 22 && second <= 24) ||
    (second >= 32 && second <= 34) ||
    (second >= 42 && second <= 44) ||
    (second >= 52 && second <= 54)
  ) {
    secondStr = `${second} секунды`;
  } else if (
    second == 0 ||
    (second >= 5 && second <= 20) ||
    (second >= 25 && second <= 30) ||
    (second >= 35 && second <= 40) ||
    (second >= 45 && second <= 50) ||
    (second >= 55 && second <= 59)
  ) {
    secondStr = `${second} секунд`;
  } else if (
    second == 1 ||
    second == 21 ||
    second == 31 ||
    second == 41 ||
    second == 51
  ) {
    secondStr = `${second} секунда`;
  }
  return `${hourStr} ${minuteStr} ${secondStr}`;
};

setInterval(() => {
  const dateA = new Date();
  const dayOfWeek = dateA.getDay();
  const dayOfMonth = dateA.getDate();
  const month = dateA.getMonth();
  const year = dateA.getFullYear();
  const hour = dateA.getHours();
  const minute = dateA.getMinutes();
  const second = dateA.getSeconds();
  console.log(
    `Сегодня ${daysOfWeek[dayOfWeek]}, ${dayOfMonth} ${
      months[month]
    }, ${year} года, ${changeTime(hour, minute, second)}`
  );
}, 1000);

const changeDate = function (day, month, year, hour, minute, second) {
  let dayStr = day;
  if (day >= 0 && day <= 9) {
    dayStr = `0${day}`;
  }
  let monthStr = month;
  if (month >= 0 && month <= 9) {
    monthStr = `0${month}`;
  }
  let hourStr = hour;
  if (hour >= 0 && hour <= 9) {
    hourStr = `0${hour}`;
  }
  let minuteStr = minute;
  if (minute >= 0 && minute <= 9) {
    minuteStr = `0${minute}`;
  }
  let secondStr = second;
  if (second >= 0 && second <= 9) {
    secondStr = `0${second}`;
  }
  return console.log(
    `${dayStr}.${monthStr}.${year} - ${hourStr}:${minuteStr}:${secondStr}`
  );
};

setInterval(() => {
  const dateB = new Date();
  const dayB = dateB.getDate();
  const monthB = dateB.getMonth() + 1;
  const yearB = dateB.getFullYear();
  const hourB = dateB.getHours();
  const minuteB = dateB.getMinutes();
  const secondB = dateB.getSeconds();
  changeDate(dayB, monthB, yearB, hourB, minuteB, secondB);
}, 1000);
