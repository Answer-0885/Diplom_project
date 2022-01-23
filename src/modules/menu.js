'use strict'
const menu = () => {
   const burgerMenu = document.querySelector('.navigation-fixed');
   const overlay = document.querySelector('.overlay');
   const body = document.querySelector('body');

   burgerMenu.addEventListener('click', (e) => {
      e.preventDefault()

      // Если мы кликаем на любую из ссылок кроме кнопки Заказать звонок(btn), то мы перемещаемся к ней.
      if (burgerMenu.contains(e.target) && !e.target.classList.contains('btn')) {
         e.preventDefault();
         const block = e.target.getAttribute('href');
         burgerMenu.style.display = 'none';
         overlay.style.display = 'none';
         body.style.overflow = 'auto'
         // Плавно перемещаемся к выбранному блоку из списка меню
         document.querySelector(block).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      };
   });
};
export default menu;