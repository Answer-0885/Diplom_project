'use strict'
import {
   animate
} from './helper';
const modal = () => {
   const modalBtn = document.querySelector('.button');
   const modalWindow = document.querySelector('.header-modal');
   const overlay = document.querySelector('.overlay');
   const body = document.querySelector('body');

   const serviceModal = document.querySelectorAll('.services-modal');
   const serviceBtn = document.querySelectorAll('.btn2');
   const serviceBtnClose = document.querySelector('.services-modal__close');

   // Открытие модального окна Вызвать замерщика
   serviceBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
         //Проверка размера экрана
         serviceModal.style.display = 'block';
         //serviceModal.style.opacity = '0';
      })
   });



   // При нажатии на кнопку появляется модальное окно сверху с анимацией
   modalBtn.addEventListener('click', () => {
      modalWindow.style.display = 'flex';
      overlay.style.display = 'flex';
      body.style.overflow = 'hidden';
      modalWindow.style.opacity = '0';
      overlay.style.opacity = '0';
      animate({
         duration: 1000,
         timing(timeFraction) {
            return timeFraction;
         },
         draw(progress) {
            modalWindow.style.opacity = progress;
            overlay.style.opacity = progress;
         }
      });
   });

   // При нажатии на крестик или мимо окна - окно закрывается
   modalWindow.addEventListener('click', (e) => {
      if (!e.target.closest('.header-modal') || e.target.classList.contains('header-modal__close')) {
         modalWindow.style.display = 'none';
         overlay.style.display = 'none';
         body.style.overflow = 'auto';
      }
   });


}
export default modal