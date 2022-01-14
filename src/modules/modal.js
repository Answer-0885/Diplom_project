'use strict'
const modal = () => {
   const modalBtn = document.querySelector('.button');
   const modalWindow = document.querySelector('.header-modal');
   const modalClose = document.querySelector('.header-modal__close');
   const overlay = document.querySelector('.overlay');


   modalBtn.addEventListener('click', () => {
      modalWindow.style.display = 'flex';
      overlay.style.display = 'flex';
   });

   modalClose.addEventListener('click', () => {
      modalWindow.style.display = 'none';
      overlay.style.display = 'none';
   });

   overlay.addEventListener('click', (e) => {
      if (!e.target.closest('.header-modal') || e.target.classList.contains('.header-modal__close')) {
         modalWindow.style.display = 'none';
         overlay.style.display = 'none';
      }
   });


}
export default modal