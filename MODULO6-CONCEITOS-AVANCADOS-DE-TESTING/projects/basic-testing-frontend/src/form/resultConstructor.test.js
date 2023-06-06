import { it, expect, describe } from 'vitest';
import { resultConstructor, cleanNumbers } from './resultConstructor.js';

describe('resultConstructor', () => {
  it('should always return a string', () => {
    // ARRANGE AND ACT
    const result = resultConstructor();

    // ASSERT
    expect(result).toBeTypeOf('string');
  });

  it('should return the sum of passed numbers as a string, if an array of numbers in string format is provided as an argument', () => {
    // ARRANGE AND ACT
    const result = resultConstructor(['1', '2']);

    // ASSERT
    expect(result).toBe('3');
  });

  it('should return an error if an array of numbers is provided as an argument', () => {
    // ARRANGE AND ACT
    const result = resultConstructor([1, 2]);

    // ASSERT
    expect(result).toBe('value.trim is not a function');
  });
});

it('should throw an error if an array with at least one empty string is provided', () => {
  // ARRANGE
  const numberInputs = ['1', '2', ''];

  // ACT
  const resultFn = () => {
    cleanNumbers(numberInputs);
  };

  // ASSERT
  expect(resultFn).toThrow();
});

///ISTO PODE SER CONSIDERADO 1 EXEMPLO DE INTEGRATION TEST (pq ''resultConstructor'' chama ''cleanNumbers'', que é uma function que POSSUI VÁRIAS FUNCTIONS NO SEU INTERIOR)
describe('cleanNumbers', () => {
  it('should return an array of numbers if an array of numbers in string format is provided as an argument', () => {
    // ARRANGE AND ACT
    const value = ['1', '2'];

    //ACT
    const result = cleanNumbers(value);

    // ASSERT 
    /// 'toEqual', AO CONTRÁRIO DE 'toBe', FAZ __ 1 CHECK NÃO POR 'EXACT EQUALITY', E SIM VAI POR DENTRO DOS VALUES QUE VC COLOCA EM 'toEqual' E FAZ 1 DEEP COMPARISON DESSE VALUE __ COM O VALUE QUE VC ESTÁ EVALUATING.... 
    expect(result).toEqual([1, 2]);
  });
});

describe('cleanNumbers', () => {
  it('should return an array of numbers if an array of numbers in string format is provided as an argument', () => {
    // ARRANGE AND ACT
    const value = ['1', '2'];

    //ACT
    const result = cleanNumbers(value);

    // ASSERT
    //! ISTO VAI FALHAR... VAI FALHAR pq '[1, 2]' é um _ REFERENCE VALUE, e não um _ PRIMITIVE VALUE (todos os objects no javascript são ÚNICOS, e existem em algum lugar na memória do app) -> É POR ISSO QUE DEVEMOS USAR 'toBeEqual()'...
    expect(result).toBe([1, 2]);
  });
});
