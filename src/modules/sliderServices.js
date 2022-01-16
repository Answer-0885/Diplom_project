'use strict'
const sliderServices = () => {
   const swiper = new Swiper('.swiper-service', {
      navigation: {
         nextEl: '.benefits__arrow--right',
         prevEl: '.benefits__arrow--left',
      },
      loop: true,
      autoplay: {
         delay: 2500,
         disableOnInteraction: false,
      },
      breakpoints: {

         // Если ширина окна больше или ровна 576px
         576: {
            slidesPerView: 2,
            spaceBetween: 40
         }
      }
   });
}
export default sliderServices