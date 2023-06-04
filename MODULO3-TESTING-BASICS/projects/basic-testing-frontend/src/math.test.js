// import { test } from 'vitest';  // é possível deixar de importar diretamente o 'test' do vitest, se vc escrever '--globals' lá no run de 'npm test', lá na package.json do seu project... mas isso não é recomendado, pq o suporte do IDE sem o impotrt não é tão bom..
// ? 'test' É A MESMA COISA QUE A FUNCTION DE 'it()'...

import { it, expect } from 'vitest';

import { add } from './math.js'; // DEVEMOS USAR/RODAR NOSSA FUNCTION DENTRO DO TEST, COM 'expect().toBe()'...

it('should summarize all number values in an array', () => {
  //   const result = add([1, 2, 3, 4, 5]);
  //   expect(result).toBe(15);
  //   expect(result).toBe(6);

  // TODO - DEVEMOS SEGUIR O PADRÃO DE 3 FASES (para deixar o test mais legível e fácil de entender)...):

  // 1 - ARRANGE
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce((prevValue, curValue) => {
    return prevValue + curValue;
  }, 0);

  // 2 - ACT
  const result = add(numbers);

  // 3 - ASSERT
  expect(result).toBe(expectedResult);
});

it('should yield NaN if at least one invalid number is provided', () => {
  // ARRANGE

  const values = [1, 'string'];

  // ACT

  const result = add(values);

  // ASSERT

  expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string values is provided', () => {
  // ARRANGE

  const values = ['1', '2', '3'];
  const expectedResult = values.reduce((prevValue, curValue) => {
    return +prevValue + +curValue;  ///queremos um REAL NUMBER, por isso o '+prevValue' e o '+curValue'...
  }, 0);

  // ACT

  const result = add(values);

  // ASSERT

  expect(result).toBe(expectedResult);
});
