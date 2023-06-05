import { transformToNumber } from '../util/numbers.js';
import { validateStringNotEmpty, validateNumber } from '../util/validation.js';
import { add } from '../math.js';

export const resultConstructor = (numberInputs) => {
  let result = '';
  try {
    const numbers = cleanNumbers(numberInputs);
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }

  return result;
};

//HELPER FUNCTION
const cleanNumbers = (numberInputs) => {
  const numbers = [];
  for (const numberInput of numberInputs) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }

  return numbers;
};
