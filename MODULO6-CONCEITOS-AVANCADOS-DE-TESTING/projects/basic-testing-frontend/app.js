// import { extractNumbers } from './src/parser.js';
// import {
//   validateStringNotEmpty,
//   validateNumber,
// } from './src/util/validation.js';
// import { add } from './src/math.js';
// import { transformToNumber } from './src/util/numbers.js';

import { formExtractor } from './src/form/formExtractor';
import { outputResult } from './src/form/outputResult';
import { resultConstructor } from './src/form/resultConstructor';
import { resultTextConstructor } from './src/form/resultTextConstructor';

const form = document.querySelector('form');

// function formSubmitHandler(event) { // ! CÓDIGO SEM OUTSOURCING (ruim para tests)
//   event.preventDefault();
//   const formData = new FormData(form);
//   const numberInputs = extractNumbers(formData);

//   let result = '';

//   try {
//     const numbers = [];
//     for (const numberInput of numberInputs) {
//       validateStringNotEmpty(numberInput);
//       const number = transformToNumber(numberInput);
//       validateNumber(number);
//       numbers.push(number);
//     }
//     result = add(numbers).toString();
//   } catch (error) {
//     result = error.message;
//   }

//   let resultText = '';

//   if (result === 'invalid') {
//     resultText = 'Invalid input. You must enter valid numbers.';
//   } else if (result !== 'no-calc') {
//     resultText = 'Result: ' + result;
//   }

//   output.textContent = resultText;
// }

// * código COM outsourcing (bom para tests)
function formSubmitHandler(event) {
  // 1 - OBTÉM A DATA CONTIDA NO DOM, NA FORM
  const numberInputs = formExtractor(event, from);
  // 2 - CONSTRÓI/VALIDA O RESULTADO (por meio de uma adição - transformação dos elementos)
  const result = resultConstructor(numberInputs);
  // 3 - CONSTRÓI A MENSAGEM DE RESULTADO, a partir do resultado
  const resultText = resultTextConstructor(result);
  // 4 - INSERE A MENSAGEM DE RESULTADO NO DOM
  outputResult(resultText);
}

// * CÓDIGO OUTSOURCEADO (bom para tests)
// const formExtractor = (event) => {
//   event.preventDefault();
//   const formData = new FormData(form);
//   const numberInputs = extractNumbers(formData);

//   return numberInputs;
// };

// const resultConstructor = (numberInputs) => {
//   let result = '';
//   try {
//     const numbers = [];
//     for (const numberInput of numberInputs) {
//       validateStringNotEmpty(numberInput);
//       const number = transformToNumber(numberInput);
//       validateNumber(number);
//       numbers.push(number);
//     }
//     result = add(numbers).toString();
//   } catch (error) {
//     result = error.message;
//   }

//   return result;
// };

// const resultTextConstructor = (result) => {
//   let resultText = '';

//   if (result === 'invalid') {
//     resultText = 'Invalid input. You must enter valid numbers.';
//   } else if (result !== 'no-calc') {
//     resultText = 'Result: ' + result;
//   }

//   return resultText;
// };

form.addEventListener('submit', formSubmitHandler);
