'use strict'
const sendForm = ({
   formID,
   someElem = []
}) => {
   const form = document.getElementById(formID);
   const statusBlock = document.createElement('div');
   statusBlock.style.color = 'DarkOrange';
   const loadText = 'Загрузка...';
   const errorText = 'Ошибка...';
   const successText = 'Спасибо! Наш менеджер с вами свяжется.';

   // Проверка инпутов на правильность введённых данных
   const validate = (list) => {
      let success = true;
      list.forEach((item) => {
         if (item.classList.contains('form-name')) {
            if (!item.value.match(/^[а-яА-Я\s][а-яА-Я\s]+[а-яА-Я\s]?$/g)) {
               success = false;
               item.classList.add('error');
               setTimeout(() => {
                  item.classList.remove('error');
               }, 4000);
            }
         }
         if (item.classList.contains('form-phone')) {
            if (!item.value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,}$/gi)) {
               success = false;
               item.classList.add('error');
               setTimeout(() => {
                  item.classList.remove('error');
               }, 4000);
            }
         }
      });

      return success;
   };
   // Имитация работы с сервером
   const sendData = (data) => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
            "Content-Type": "application/json"
         }
      }).then(res => res.json())
   }

   const submitForm = () => {
      const formElements = form.querySelectorAll('input')
      const formData = new FormData(form)
      const formBody = {}

      //Если данные не валидны, то надпись "Загрузка" не появляется.
      if (validate(formElements)) {
         form.append(statusBlock)
         statusBlock.textContent = loadText
      } else {
         statusBlock.textContent = "";
      }
      // этим циклом мы перебираем все инпуты, затем если где то есть заполненный инпут, мы помещаем его в объект formBody благодаря конструктору formData. И уже formBody мы отправляем, где ключом(key) является атрибут name Инпута, а значением(value) является value инпутов.
      formData.forEach((value, key) => {
         formBody[key] = value;
      })
      // Если мы находимся не на странице с балконами, то данные калькулятора учитываться не будут
      if (window.location.toString().indexOf('balkony.html') > 0) {
         // Мы перебираем инпут калькулятора при каждой отправке формы. И если в нём есть значение, то мы их добавляем к данным формы при отправке на сервер.
         someElem.forEach(elem => {
            const element = document.getElementById(elem.id);
            if (elem.type === 'block') {
               formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input' && element.value !== "0" && element.value !== "") {
               formBody[elem.id] = element.value;
            }
         });
      }

      if (validate(formElements)) {
         sendData(formBody)
            .then(data => {
               // После отправки все инпуты перебираются и очищаются, и сообщение об ошибке тоже.
               formElements.forEach(input => {
                  // Очищаются все инпуты кроме класса value
                  if (!input.classList.contains('value'))
                     input.value = '';
                  input.classList.remove('error');
               });
               statusBlock.textContent = successText
               // Модальные окна закрываются через 4 секунды после отправки. А также блок с надписями statusBlock   исчезает.            
               setTimeout(() => {
                  form.removeChild(statusBlock);
                  const headerModal = document.querySelector('.header-modal');
                  const burgerMenu = document.querySelector('.navigation-fixed');
                  const serviceModal_1 = document.querySelector('.services-modal-1');
                  const serviceModal_2 = document.querySelector('.services-modal-2');
                  const serviceModal_3 = document.querySelector('.services-modal-3');
                  const serviceModal_4 = document.querySelector('.services-modal-4');
                  const overlay = document.querySelector('.overlay');
                  const body = document.querySelector('body');
                  headerModal.style.display = 'none';
                  serviceModal_1.style.display = 'none';
                  serviceModal_2.style.display = 'none';
                  serviceModal_3.style.display = 'none';
                  serviceModal_4.style.display = 'none';
                  burgerMenu.style.display = 'none';
                  overlay.style.display = 'none';
                  body.style.overflow = 'auto'
               }, 4000);
            })
            .catch(error => {
               statusBlock.textContent = errorText
               setTimeout(() => {
                  form.removeChild(statusBlock);
               }, 4000);
            })
      } else {
         alert('Введите пожалуйста своё имя и номер телефона!')
      }

   }

   try {
      if (!form) {
         throw new Error('Верните форму на место, пожааааалуйста!')
      }
      // Отправляет форму при нажатии на кнопку отправить
      form.addEventListener('submit', (event) => {
         event.preventDefault()
         submitForm()
      })
   } catch (error) {
      console.log(error.message);
   }
};

export default sendForm;