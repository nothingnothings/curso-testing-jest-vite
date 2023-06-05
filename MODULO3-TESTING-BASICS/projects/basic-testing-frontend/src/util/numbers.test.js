import { it, expect, describe } from 'vitest';

import { transformToNumber } from './numbers';

// * exemplo de 'TEST SUITE' (com 'describe')

describe('transformToNumber', () => {
  /// * describe() - agrupa os testes (coloque o nome da FUNCTION/coisa/unit que vc está testando...)
  it('should transform a string into a number', () => {
    //ARRANGE
    const value = '1';
    const expectedResult = +value;
    //ACT
    const result = transformToNumber(value);
    //ASSERT
    expect(result).toBe(expectedResult);
  });

  it('should throw an error if no argument is provided', () => {
    //ARRANGE AND ACT
    const resultFn = () => {
      transformToNumber();
    };
    //ASSERT
    expect(resultFn).toThrowError('No value provided.');
  });

  it('should yield NaN for non-transformable values', () => {
    //ARRANGE
    const value = 'EXEMPLO';
    const value2 = {};
    const value3 = ['exemplo1', 'exemplo2'];
    //ACT
    const result = transformToNumber(value);
    const result2 = transformToNumber(value2);
    const result3 = transformToNumber(value3);

    //ASSERT
    expect(result).toBeNaN();
    expect(result2).toBeNaN();
    expect(result3).toBeNaN();
  });
});
