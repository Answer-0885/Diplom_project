'use strict'
const sliderServices = () => {
   const swiper = new Swiper('.swiper-service', {
      navigation: {
         nextEl: '.services__arrow--right',
         prevEl: '.services__arrow--left',
      },
      grabCursor: true,
      // loop: true,
      // autoplay: {
      //    delay: 4000,
      //    disableOnInteraction: false,
      // },
      breakpoints: {

         // Если ширина окна больше или равна 576px
         576: {
            autoHeight: true,
            //slidesPerColumn: 2,
            slidesPerView: 2,
            // spaceBetween: 5,
            // slidesPerGroup: 1,
            // centredSlides: true
         },


      }
   });
};
export default sliderServices