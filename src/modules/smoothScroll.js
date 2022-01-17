'use strict'
const smoothScroll = () => {
   const smoothScrollUp = document.querySelector('.smooth');
   let benefits = document.getElementById('benefits').getBoundingClientRect(); // Вычисляем координаты

   // плавная прокрутка scrollа
   smoothScrollUp.addEventListener('click', (e) => {
      e.preventDefault();

      if (e.target.closest('.smooth')) {
         const blockId = e.target.closest('a[href*="#"]').getAttribute('href');
         document.querySelector(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      };
   });
   // при прокрутке до самого верха scroll исчезает
   function scrollInvis() {
      if (window.pageYOffset > benefits.top) {
         smoothScrollUp.style.opacity = 1;
      } else {
         smoothScrollUp.style.opacity = 0;
      }
   };

   window.addEventListener('scroll', () => {
      scrollInvis()
   });

};
export default smoothScroll