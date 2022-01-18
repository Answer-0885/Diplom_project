'use strict'
const sendForm = ({
   formID,
   someElem = []
}) => {
   const form = document.getElementById(formID);
   const statusBlock = document.createElement('div')
   const loadText = 'Загрузка...';
   statusBlock.style.color = 'DarkOrange';
   const errorText = 'Ошибка...';
   const successText = 'Спасибо! Наш менеджер с вами свяжется.';

   // Проверка инпутов на правильность введённых данных
   const validate = (list) => {
      let success = true;
      list.forEach((item) => {
         if (item.classList.contains('form-name')) {
            if (!item.value.match(/^[а-яА-Я][а-яА-Я]+[а-яА-Я]?$/g)) {
               success = false;
               item.classList.add('error');
               setTimeout(() => {
                  item.classList.remove('error');
               }, 5000);
            }
         }
         if (item.classList.contains('form-phone')) {
            if (!item.value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,}$/gi)) {
               success = false;
               item.classList.add('error');
               setTimeout(() => {
                  item.classList.remove('error');
               }, 5000);
            }
         }
      });

      return success;
   };

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
      console.log(formElements);
      const formData = new FormData(form)
      const formBody = {}

      //Если данные не валидны, то надпись "Загрузка" не появляется.
      if (validate(formElements)) {
         form.append(statusBlock)
         statusBlock.textContent = loadText
      } else {
         statusBlock.textContent = "";
      }

      formData.forEach((val, key) => {
         formBody[key] = val
      })
      // Если мы находимся не на странице с балконами, то данные калькулятора учитываться не будут
      if (window.location.toString().indexOf('balkony.html') > 0) {
         someElem.forEach(elem => {
            const element = document.getElementById(elem.id);
            if (elem.type === 'block') {
               formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
               formBody[elem.id] = element.value;
            }
         });
      }

      if (validate(formElements)) {
         sendData(formBody)
            .then(data => {
               formElements.forEach(input => {
                  input.value = '';
                  input.classList.remove('error');
               });
               statusBlock.textContent = successText
               setTimeout(() => {
                  form.removeChild(statusBlock);
                  const headerModal = document.querySelector(`.header-modal`);
                  const serviceModal = document.querySelector('.services-modal');
                  const overlay = document.querySelector('.overlay');
                  headerModal.style.display = 'none';
                  serviceModal.style.display = 'none';
                  overlay.style.display = 'none';
               }, 5000);
            })
            .catch(error => {
               statusBlock.textContent = errorText
               setTimeout(() => {
                  form.removeChild(statusBlock);
               }, 5000);
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