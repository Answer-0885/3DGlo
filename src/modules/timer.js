const timer = (deadLine) => {
   const timerHours = document.getElementById('timer-hours');
   const timerMinutes = document.getElementById('timer-minutes');
   const timerSeconds = document.getElementById('timer-seconds');

   const getTimeRemaining = () => {
      let dateStop = new Date(deadLine).getTime();
      let dateNow = new Date().getTime();
      let timeRemaining = (dateStop - dateNow) / 1000;
      let days = Math.floor(timeRemaining / 60 / 60 / 24);
      let hours = Math.floor((timeRemaining / 60 / 60) % 24);
      let minutes = Math.floor((timeRemaining / 60) % 60);
      let seconds = Math.floor(timeRemaining % 60)

      return {
         timeRemaining,
         hours,
         minutes,
         seconds
      }
   };
   const updateClock = () => {
      let getTime = getTimeRemaining();
      // Добавляем нули перед цифрами
      function addZero(num) {
         if (num <= 9) {
            return '0' + num;
         } else return num;
      };

      timerHours.textContent = addZero(getTime.hours);
      timerMinutes.textContent = addZero(getTime.minutes);
      timerSeconds.textContent = addZero(getTime.seconds);

      if (getTime.timeRemaining <= 0) {
         clearInterval(timer1);
         timerHours.textContent = '00';
         timerMinutes.textContent = '00';
         timerSeconds.textContent = '00';
      }
   };
   const timer1 = setInterval(updateClock, 1000);
   updateClock()

};

export default timer