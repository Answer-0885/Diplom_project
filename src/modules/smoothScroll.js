'use strict'
const smoothScroll = () => {
   const smoothScrollUp = document.querySelector('.smooth');


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
      let benefits = document.getElementById('benefits').getBoundingClientRect(); // Вычисляем координаты
      if (window.pageYOffset > benefits.top) {
         smoothScrollUp.style.display = 'block';
      } else {
         smoothScrollUp.style.display = 'none';
      }
   };

   window.addEventListener('scroll', () => {
      scrollInvis()
   });

};
export default smoothScroll