'use strict'
const calc = (price = 100) => {
   const calcType = document.querySelector('#calc-type');
   const calcMaterial = document.querySelector('#calc-type-material');
   const calcInput = document.querySelector('#calc-input');
   const calcTotal = document.querySelector('#calc-total');

   const countCalc = () => {
      let calcTypeValue = +calcType.options[calcType.selectedIndex].value;
      let calcMaterialValue = +calcMaterial.options[calcMaterial.selectedIndex].value;
      let totalValue = 0;

      if (Number.isNaN(calcTypeValue)) {
         calcTypeValue = 1;
      }
      if (Number.isNaN(calcMaterialValue)) {
         calcMaterialValue = 1;
      }
      if (calcType.value != '--' && calcMaterial.value != '--') {
         totalValue = price * calcTypeValue * calcMaterialValue * +calcInput.value;
      } else {
         calcInput.value = '';

      }
      calcTotal.value = totalValue;
   };

   window.addEventListener('input', (e) => {
      if (e.target === calcType || e.target === calcMaterial ||
         e.target === calcInput) {
         countCalc();
      }
   });
}

export default calc