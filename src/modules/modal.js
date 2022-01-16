'use strict'
import {
   animate
} from './helper';
const modal = () => {
   //Верхняя кнопка заказать звонок
   const modalBtn = document.querySelector('.button');
   const modalWindow = document.querySelector('.header-modal');
   const overlay = document.querySelector('.overlay');
   const body = document.querySelector('body');
   // Наши услуги
   const serviceModal = document.querySelector('.services-modal');
   const serviceBtn = document.querySelectorAll('.btn2');
   // Сертификаты
   const certificateOpen = document.querySelectorAll('.sertificate-document');
   const certificateModal = document.querySelector('.img-modal');

   console.log(certificateModal);

   //Открываем сертификаты
   certificateOpen.forEach(btn => {
      btn.addEventListener('click', (e) => {
         e.preventDefault()
         certificateModal.style.display = 'block';
         body.style.overflow = 'hidden';
         overlay.style.display = 'block';
         animate({
            duration: 1000,
            timing(timeFraction) {
               return timeFraction;
            },
            draw(progress) {
               serviceModal.style.opacity = progress;
               overlay.style.opacity = progress;
            }
         });
      });
   });
   //Закрываем сертификаты
   window.addEventListener('click', (e) => {
      if (e.target.closest('.overlay') || e.target.classList.contains('img-modal__close')) {
         certificateModal.style.display = 'none';
         body.style.overflow = 'auto';
         overlay.style.display = 'none';
      }
   });



   // Открытие модального окна Вызвать замерщика с анимацией
   serviceBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
         serviceModal.style.display = 'block';
         overlay.style.display = 'flex';
         body.style.overflow = 'hidden';
         animate({
            duration: 1000,
            timing(timeFraction) {
               return timeFraction;
            },
            draw(progress) {
               serviceModal.style.opacity = progress;
               overlay.style.opacity = progress;
            }
         });
      })
   });

   // При нажатии на крестик или мимо окна Вызвать замерщика - окно закрывается
   window.addEventListener('click', (e) => {
      if (e.target.closest('.overlay') || e.target.classList.contains('services-modal__close')) {
         serviceModal.style.display = 'none';
         overlay.style.display = 'none';
         body.style.overflow = 'auto';
      }
   });

   // При нажатии на кнопку Заказать звонок появляется модальное окно сверху с анимацией
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
   window.addEventListener('click', (e) => {
      if (e.target.closest('.overlay') || e.target.classList.contains('header-modal__close')) {
         modalWindow.style.display = 'none';
         overlay.style.display = 'none';
         body.style.overflow = 'auto';
      }
   });


}
export default modal