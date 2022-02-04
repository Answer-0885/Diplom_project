'use strict'
import modal from './modules/modal'
import timer from './modules/timer'
import swiper from './modules/swiper'
import smoothScroll from './modules/smoothScroll'
import sliderServices from './modules/sliderServices'
import sendForm from './modules/sendForm'
import calc from './modules/calc'
import check from './modules/check'
import menu from './modules/menu'



modal('button', 'header-modal__close', 'header-modal'); //"Заказать звонок"
modal('top-btn', 'header-modal__close', 'header-modal'); //"Заказать звонок из бургер-меню"
modal('sertificate-document', 'img-modal__close', 'img-modal'); //"Сертификаты"
modal('utp-button', 'header-modal__close', 'header-modal'); //Окно Узнай свою скидку
modal('open-burger', 'close-burger', 'navigation-fixed'); // Бургер меню
modal('service-button-1', 'services-modal__close', 'services-modal-1'); //"Наши услуги-1"
modal('service-button-2', 'services-modal__close', 'services-modal-2'); //"Наши услуги-2"
modal('service-button-3', 'services-modal__close', 'services-modal-3'); //"Наши услуги-3"
modal('service-button-4', 'services-modal__close', 'services-modal-4'); //"Наши услуги-4"
timer('23:59 31 may 2022');
swiper();
smoothScroll();
sliderServices()
calc();
check();
menu();
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
sendForm({
   formID: 'form8',
   someElem: [{
      type: 'input',
      id: 'calc-total'
   }]
});
sendForm({
   formID: 'form9',
   someElem: [{
      type: 'input',
      id: 'calc-total'
   }]
});
sendForm({
   formID: 'form10',
   someElem: [{
      type: 'input',
      id: 'calc-total'
   }]
});