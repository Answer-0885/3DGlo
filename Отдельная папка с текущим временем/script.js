// 'use strict';
let oClock = document.querySelector('.oclock');


function clock1() {
   let dateStop = new Date('01 january 2022').getTime();
   let dateNow = new Date().getTime();
   let date = Math.floor((dateStop - dateNow) / 1000 / 60 / 60 / 24);
   d = new Date();
   hours = d.getHours();
   mins = d.getMinutes();
   sec = d.getSeconds();

   // приветствие в зависимости от времени суток
   if (hours >= 5 && hours < 12) greeting = "Доброе утро!";
   else {
      if (hours >= 12 && hours < 18) greeting = "Добрый день!";
      else {
         if (hours >= 18 && hours < 24) greeting = "Добрый вечер!";
         else {
            if (hours >= 0 && hours < 5) greeting = "Доброй ночи!";
         }
      }
   }

   let wordForm = function (num, word) {
      cases = [2, 0, 1, 1, 1, 2];
      return word[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]]; // проверка, чтобы подобрать правильное окончание.
   }
   resultDays = date + wordForm(hours, [' день ', ' дня ', ' дней ']);
   resultHours = hours + wordForm(hours, [' час ', ' часа ', ' часов ']);
   resultMins = mins + wordForm(mins, [' минута ', ' минуты ', ' минут ']);
   resultSec = sec + wordForm(sec, [' секунда ', ' секунды ', ' секунд ']);

   let day = new Array("Воскресенье", "Понедельник", "Вторник",
      "Среда", "Четверг", "Пятница", "Суббота");

   let month = new Array("января", "февраля", "марта", "апреля", "мая", "июня",
      "июля", "августа", "сентября", "октября", "ноября", "декабря");

   let time = "Сегодня " + (day[d.getDay()] + " " + d.getDate() + " " + month[d.getMonth()] +
      " " + d.getFullYear() + " г. " + resultHours + resultMins + resultSec);

   oClock.innerHTML = greeting + `<br>` + time + `<br>` + `До Нового Года осталось: ` + resultDays;

   console.log(hours);
}
setInterval(clock1, 1000);