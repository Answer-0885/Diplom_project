'use strict'
import modal from './modules/modal'
import timer from './modules/timer'
import swiper from './modules/swiper'
import smoothScroll from './modules/smoothScroll'
import sliderServices from './modules/sliderServices'



modal('button', 'header-modal__close', 'header-modal'); //"Заказать звонок"
modal('btn2', 'services-modal__close', 'services-modal'); //"Наши услуги"
modal('sertificate-document', 'img-modal__close', 'img-modal'); //"Сертификаты"
timer('01:00 22 january 2022');
swiper();
smoothScroll();
sliderServices();