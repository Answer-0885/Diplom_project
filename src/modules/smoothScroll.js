'use strict'
const smoothScroll = () => {
   const smooth = document.querySelector('.smooth');

   // плавная прокрутка scrollа
   smooth.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.closest('.smooth')) {
         const blockId = e.target.closest('a[href*="#"]').getAttribute('href');
         document.querySelector(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      };
   });

   document.addEventListener('DOMContentLoaded', () => {
      scrollInvis();
   });

   window.addEventListener('scroll', () => {
      scrollInvis()
   });

   // при прокрутке до самого верха scroll исчезает
   const scrollInvis = () => {
      if (window.pageYOffset < 500) {
         smooth.style.display = 'none';
      } else {
         smooth.style.display = 'block';
      }
   };


};
export default smoothScroll