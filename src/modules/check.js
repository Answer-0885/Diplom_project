const check = () => {

   const inputName = document.querySelectorAll('.form-name');
   const inputPhone = document.querySelectorAll('.form-phone');

   const customTrim = (val) => {
      val = val.replace(/\s+/g, " "); //много пробелов в один
      val = val.replace(/-+/g, '-'); //много дефисов в один
      val = val.replace(/\(+/g, '('); //много скобок в один
      val = val.replace(/\)+/g, ')'); //много скобок в один
      val = val.replace(/^[ |\-+]/g, ''); //удаление дефисов и пробелов в начале
      val = val.replace(/[ |\-+]$/g, ''); //удаление дефисов и пробелов в конце
      return val;
   };

   inputName.forEach((input) => {
      input.addEventListener('blur', (e) => {
         let val = e.target.value;
         val = val.replace(/[^а-яёA-Za-z\s]$/ig, '');
         val = customTrim(val);
         val = val.replace(/( |^)[ а-яёA-Za-z\s]/g, u => u.toUpperCase());
         e.target.value = val;
      });
      input.addEventListener('input', () => {
         input.value = input.value.replace(/[^а-яёA-Za-z}\s]$/ig, '');
      });
   });

   inputPhone.forEach((input) => {
      input.addEventListener('blur', (e) => {
         let val = e.target.value;
         val = val.replace(/[^\d+]{1,16}$/g, '');
         val = customTrim(val);
         e.target.value = '';
         e.target.value = val;
      });
      input.addEventListener('input', () => {
         input.value = input.value.replace(/[^\d+]{1,16}$/g, '');
      });
   });

   inputPhone.forEach(input => {
      input.addEventListener('click', () => {
         if (input.classList.contains('error')) {
            input.classList.remove('error');
         }
      });
   });
   inputName.forEach(input => {
      input.addEventListener('click', () => {
         if (input.classList.contains('error')) {
            input.classList.remove('error');
         }
      });
   });
}
export default check