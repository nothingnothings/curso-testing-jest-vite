// import { test } from 'vitest';  // é possível deixar de importar diretamente o 'test' do vitest, se vc escrever '--globals' lá no run de 'npm test', lá na package.json do seu project... mas isso não é recomendado, pq o suporte do IDE sem o impotrt não é tão bom..
// ? 'test' É A MESMA COISA QUE A FUNCTION DE 'it()'...

import { it, expect, describe } from 'vitest';

import { add } from './math.js'; // DEVEMOS USAR/RODAR NOSSA FUNCTION DENTRO DO TEST, COM 'expect().toBe()'...

describe('add', () => {
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
      return +prevValue + +curValue; ///queremos um REAL NUMBER, por isso o '+prevValue' e o '+curValue'...
    }, 0);

    // ACT

    const result = add(values);

    // ASSERT

    expect(result).toBe(expectedResult);
  });

  it('should yield 0 if an empty array is provided', () => {
    // ARRANGE
    const values = [];

    // ACT
    const result = add(values);

    // ASSERT
    expect(result).toBe(0);
  });

  it('should throw an error if no argument is passed into the function', () => {
    // TODO - É ASSIM QUE __ FAZEMOS __ PARA TESTAR SE UMA FUNCTION LANÇA UM ERRO:

    // ARRANGE (AND ACT)
    const resultFn = () => {
      add();
    };

    // ASSERT
    expect(resultFn).toThrowError('No numbers provided.');
  });

  it('should yield something that is not a string, if numbers in string format are provided', () => {
    // ARRANGE
    const values = ['1', '2'];

    // ACT
    const result = add(values);

    // ASSERT
    expect(result).not.toBeTypeOf('string');
  });

  it('should throw an error if provided with multiple arguments instead of an array', () => {
    // ARRANGE
    const [value1, value2, value3] = [1, 2, 3];
    // ACT
    const resultFn = () => {
      add(value1, value2, value3);
    };
    // ASSERT
    expect(resultFn).toThrowError(
      'Please provide an array of numbers, instead of multiple number-arguments'
    );
  });

  it('should throw an error if provided with multiple arguments instead of an array', () => {
    // ARRANGE
    const [value1, value2, value3] = [1, 2, 3];
    // ACT
    const resultFn = () => {
      add(value1, value2, value3);
    };
    // ASSERT
    expect(resultFn).toThrowError(/multiple number-arguments/); // --> podemos usar uma REGEX, aqui, para testar se a mensagem de erro contém uma certa string...
  });
});
