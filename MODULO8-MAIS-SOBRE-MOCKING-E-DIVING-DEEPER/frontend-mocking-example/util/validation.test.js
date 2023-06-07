import { it, expect, describe, beforeAll, beforeEach } from 'vitest';

import { validateNotEmpty } from './validation';

import { ValidationError } from './errors';

describe('validateNotEmpty', () => {
  it('should throw a ValidationError if no textValue paramater is passed', () => {
    //ARRANGE

    //ACT
    const validationFunction = () => {
      return validateNotEmpty();
    };

    //ASSERT
    expect(validationFunction).toThrowError(ValidationError);
  });

  it('should throw a ValidationError if textValue parameter is an empty string', () => {
    //ARRANGE
    const textValue = '';
    const errorMessage = 'Text is empty';

    //ACT
    const validationFunction = () => {
      return validateNotEmpty(textValue, errorMessage);
    };

    //ASSERT
    expect(validationFunction).toThrowError(ValidationError);
  });

  it('should not throw any error if a non-empty string is provided as a parameter', () => {
    //ARRANGE
    const textValue = 'example';
    const errorMessage = 'Text is empty';

    //ACT
    const validationFunction = () => {
      return validateNotEmpty(textValue, errorMessage);
    };

    //ASSERT
    expect(validationFunction).not.toThrow();
  });
});
