'use strict'
const swiper = () => {
   const swiper = new Swiper('.swiper', {
      navigation: {
         nextEl: '.benefits__arrow--right',
         prevEl: '.benefits__arrow--left',
      },
      grabCursor: true,
      loop: true,
      autoplay: {
         delay: 2500,
         disableOnInteraction: false,
      },
      breakpoints: {

         // Если ширина окна больше или равна 576px
         576: {
            slidesPerView: 3,
            spaceBetween: 40
         }
      }
   });
};
export default swiper