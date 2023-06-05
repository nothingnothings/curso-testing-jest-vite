import { it, expect, describe } from 'vitest';
import { resultConstructor } from './resultConstructor.js';

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
