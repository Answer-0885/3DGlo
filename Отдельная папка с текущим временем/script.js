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



//  б)'04.02.2020 - 21:05:33'
// Для вывода в формате(б) напишите функцию, которая будет добавлять 0 перед значениями которые состоят из одной цифры(из 9: 5: 3 1.6 .2019 сделает 09: 05: 03 01.06 .2019)



function clock2() {
   d = new Date();
   year = d.getFullYear();
   month = d.getMonth();
   day = d.getDate();
   hour = d.getHours();
   minutes = d.getMinutes();
   seconds = d.getSeconds();

   // проверка если цифра до 9 включительно, то прибавляем 0 спереди
   function addZero(num) {
      if (num >= 0 && num <= 9) {
         return '0' + num;
      } else {
         return num;
      }
   }

   switch (month) {
      case 0:
         fMonth = "1";
         break;
      case 1:
         fMonth = "2";
         break;
      case 2:
         fMonth = "3";
         break;
      case 3:
         fMonth = "4";
         break;
      case 4:
         fMonth = "5";
         break;
      case 5:
         fMonth = "6";
         break;
      case 6:
         fMonth = "7";
         break;
      case 7:
         fMonth = "8";
         break;
      case 8:
         fMonth = "9";
         break;
      case 9:
         fMonth = "10";
         break;
      case 10:
         fMonth = "11";
         break;
      case 11:
         fMonth = "12";
         break;
   }


   currentTime = "Текущее время: " + addZero(day) + "." + addZero(fMonth) + "." + addZero(year) + " - " + addZero(hour) + ":" + addZero(minutes) + ":" + addZero(seconds)

   forDays.textContent = currentTime;

}
setInterval(clock2, 1000);