import { it, expect } from 'vitest';

import { transformToNumber } from './numbers';

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
  //ACT
  const result = transformToNumber(value);

  //ASSERT
  expect(result).toBeNaN();
});
