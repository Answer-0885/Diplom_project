'use strict'
import {
   animate
} from './helper';
const modal = (open, close, popUp) => {
   const body = document.querySelector('body');
   //Подложка - задний фон модалок
   const overlay = document.querySelector('.overlay');
   //Кнопки открытия всех модальных окон
   const modalOpen = document.querySelectorAll(`.${open}`);
   // Модальные окна
   const modal = document.querySelector(`.${popUp}`);

   //Открываем модальные окна
   modalOpen.forEach(btn => {

      btn.addEventListener('click', (e) => {
         e.preventDefault();
         modal.style.display = 'block';
         body.style.overflow = 'hidden';
         overlay.style.display = 'block';
         animate({
            duration: 600,
            timing(timeFraction) {
               return timeFraction;
            },
            draw(progress) {
               modal.style.opacity = progress;
               overlay.style.opacity = progress;
            }
         });
      });
   });
   //Закрываем модальные окна на крестик или кликнув мимо окна
   window.addEventListener('click', (e) => {
      if (e.target.closest('.overlay') || e.target.classList.contains(`${close}`)) {
         modal.style.display = 'none';
         body.style.overflow = 'auto';
         overlay.style.display = 'none';
      };
   });
};
export default modal