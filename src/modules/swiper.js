'use strict'
// import Swiper, {
//    Autoplay
// } from 'swiper';

// Swiper.use([Autoplay]);

// autoplay: {
//    delay: 2500,
//    disableOnInteraction: false,
// },
const swiper = new Swiper('.swiper', {
   navigation: {
      nextEl: '.benefits__arrow--right',
      prevEl: '.benefits__arrow--left',
   },
   breakpoints: {

      // when window width is >= 576px
      576: {
         slidesPerView: 3,
         spaceBetween: 40
      }
   }
});
export default swiper