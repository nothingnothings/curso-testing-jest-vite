import { it, expect } from 'vitest';

import { validateNumber, validateStringNotEmpty } from './validation';

it('should return no value if a non-empty string is provided', () => {
  //ARRANGE
  const value = '1';
  //ACT
  const result = validateStringNotEmpty(value);
  //ASSERT
  expect(result).toBeUndefined(); // * 'toBeUndefined' é usado em casos em que FUNCTIONS NÃO RETORNAM COISA ALGUMA (tipo esta function, nos casos de success)...
});

it('should not throw an error, if a non-empty string is provided 2', () => {
  // professor...
  const input = 'valid';
  const validationFn = () => validateStringNotEmpty(input);
  expect(validationFn).not.toThrow();
});

it('should throw an error upon being called with an empty string as argument', () => {
  //ARRANGE
  const value = '';
  //ACT
  const resultFn = () => {
    validateStringNotEmpty(value);
  };
  //ASSERT
  expect(resultFn).toThrowError('Invalid input - must not be empty.');
});

it('should throw an error if a long string of blanks is provided', () => {
  const input = '   ';
  const validationFn = () => validateStringNotEmpty(input);
  expect(validationFn).toThrowError('Invalid input - must not be empty.');
});

it('should throw an undefined error upon being called with no arguments', () => {
  //ARRANGE

  //ACT
  const resultFn = () => {
    validateStringNotEmpty();
  };
  //ASSERT
  expect(resultFn).toThrowError(/undefined/); // * regex - "undefined" pode estar em qualquer lugar da mensagem de erro (no caso, 'value is undefined')
});

it('should throw an error if any other value than a string is provided', () => {
  const inputNum = 1;
  const inputBool = true;
  const inputObj = {};

  const validationFnNum = () => validateStringNotEmpty(inputNum);
  const validationFnBool = () => validateStringNotEmpty(inputBool);
  const validationFnObj = () => validateStringNotEmpty(inputObj);

  expect(validationFnNum).toThrow();
  expect(validationFnBool).toThrow();
  expect(validationFnObj).toThrow();
});

it('should throw an error if NaN is provided', () => {
  const input = NaN;
  const validationFn = () => validateNumber(input);
  expect(validationFn).toThrow();
});

it('should return no value if a number is provided', () => {
  //ARRANGE
  const value = 1;
  //ACT
  const result = validateNumber(value);
  //ASSERT
  expect(result).toBeUndefined();
});

it('should not throw an error, if a non-empty string is provided', () => {
  //professor...
  const input = 'valid';
  const validationFn = () => validateStringNotEmpty(input);
  expect(validationFn).not.toThrow();
});

it('should throw an undefined error upon being called with no arguments', () => {
  //ARRANGE
  //ACT
  const resultFn = () => {
    validateNumber();
  };
  //ASSERT
  expect(resultFn).toThrowError(/No value provided/);
});

it('should throw an error if the value provided is not a number', () => {
  //ARRANGE
  const value = 'exemplo';
  const value2 = '2';
  //ACT
  const resultFn = () => {
    validateNumber(value);
  };
  const resultFn2 = () => {
    validateNumber(value2);
  };
  //ASSERT
  expect(resultFn).toThrowError('Invalid number input.');
  //   expect(resultFn2).toThrowError('Invalid number input.');
  expect(resultFn2).toThrow();
});
