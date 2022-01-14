'use strict'
const timer = (deadLine) => {
   const timerDays = document.querySelector('.count_1>span');
   const timerHours = document.querySelector('.count_2>span');
   const timerMinutes = document.querySelector('.count_3>span');
   const timerSeconds = document.querySelector('.count_4>span');

   console.log(timerHours)
   console.log(timerMinutes)
   console.log(timerSeconds)
   console.log(timerDays)

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
         days,
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
      timerDays.textContent = addZero(getTime.days);
      timerHours.textContent = addZero(getTime.hours);
      timerMinutes.textContent = addZero(getTime.minutes);
      timerSeconds.textContent = addZero(getTime.seconds);

      if (getTime.timeRemaining <= 0) {
         clearInterval(timer1);
         timerDays.textContent = '00';
         timerHours.textContent = '00';
         timerMinutes.textContent = '00';
         timerSeconds.textContent = '00';
      }
   };
   const timer1 = setInterval(updateClock, 1000);
   updateClock()

};

export default timer