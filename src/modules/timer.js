'use strict'
const timer = (deadLine) => {
   const timerDays = document.querySelectorAll('.count_1');
   const timerHours = document.querySelectorAll('.count_2');
   const timerMinutes = document.querySelectorAll('.count_3');
   const timerSeconds = document.querySelectorAll('.count_4');

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
      //Функция для проверки окончания подходящего для каждой цифры на табло
      let wordForm = function (num, word) {
         const cases = [2, 0, 1, 1, 1, 2];
         return word[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]]; // проверка, чтобы подобрать правильное окончание.
      }

      // Варианты окончаний
      let resultDays = wordForm(getTime.days, [' День: ', ' Дня: ', ' Дней: ']);
      let resultHours = wordForm(getTime.hours, [' Час: ', ' Часа: ', ' Часов: ']);
      let resultMins = wordForm(getTime.minutes, [' Минута: ', ' Минуты: ', ' Минут: ']);
      let resultSec = wordForm(getTime.seconds, [' Секунда: ', ' Секунды: ', ' Секунд: ']);


      timerDays.forEach(day => {
         day.innerHTML = `${resultDays}<br><span>${addZero(getTime.days)}</span>`
      });

      timerHours.forEach(hour => {
         hour.innerHTML = `${resultHours}<br><span>${addZero(getTime.hours)}</span>`
      });

      timerMinutes.forEach(minute => (
         minute.innerHTML = `${resultMins}<br><span>${addZero(getTime.minutes)}</span>`
      ));

      timerSeconds.forEach(second => {
         second.innerHTML = `${resultSec}<br><span>${addZero(getTime.seconds)}</span>`
      });

      // Если время закончится то высветятся везде нули.
      if (getTime.timeRemaining <= '00') {
         clearInterval(timeIsUp);
         timerDays.forEach(day => {
            day.textContent = '00'
         });
         timerHours.forEach(hour => {
            hour.textContent = '00'
         });
         timerMinutes.forEach(minute => (
            minute.textContent = '00'
         ));
         timerSeconds.forEach(second => {
            second.textContent = '00'
         });
      }
   };
   const timeIsUp = setInterval(updateClock, 1000);
   updateClock()
};

export default timer