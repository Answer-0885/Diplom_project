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
   // при прокрутке до самого верха scroll исчезает
   const scrollInvis = () => {
      let offerUtp = document.getElementById('offer-utp').getBoundingClientRect(); // Вычисляем координаты
      console.log(offerUtp);
      if (window.pageYOffset >= offerUtp.bottom) {
         smooth.style.display = 'block';
      } else {
         smooth.style.display = 'none';
      }
   };

   window.addEventListener('scroll', () => {
      scrollInvis()
   });

};
export default smoothScroll