'use strict'
import modal from './modules/modal'
import timer from './modules/timer'
import swiper from './modules/swiper'
import smoothScroll from './modules/smoothScroll'
import sliderServices from './modules/sliderServices'
import sendForm from './modules/sendForm'
import calc from './modules/calc'
import check from './modules/check'



modal('button', 'header-modal__close', 'header-modal'); //"Заказать звонок"
modal('service-button', 'services-modal__close', 'services-modal'); //"Наши услуги"
modal('sertificate-document', 'img-modal__close', 'img-modal'); //"Сертификаты"
modal('utp-button', 'header-modal__close', 'header-modal'); //Окно Узнай свою скидку
//modal('navbar-toggle', 'header-modal__close', 'navbar-collapse.collapse'); // Бургер меню
timer('23:59 24 january 2022');;
swiper();
smoothScroll();
sliderServices()
calc();
check();
sendForm({
   formID: 'form1',
   someElem: [{
      type: 'input',
      id: 'calc-total'
   }]
});
sendForm({
   formID: 'form2',
   someElem: [{
      type: 'input',
      id: 'calc-total'
   }]
});
sendForm({
   formID: 'form3',
   someElem: [{
      type: 'input',
      id: 'calc-total'
   }]
});
sendForm({
   formID: 'form4',
   someElem: [{
      type: 'input',
      id: 'calc-total'
   }]
});
sendForm({
   formID: 'form5',
   someElem: [{
      type: 'input',
      id: 'calc-total'
   }]
});
sendForm({
   formID: 'form6',
   someElem: [{
      type: 'input',
      id: 'calc-total'
   }]
});
sendForm({
   formID: 'form7',
   someElem: [{
      type: 'input',
      id: 'calc-total'
   }]
});