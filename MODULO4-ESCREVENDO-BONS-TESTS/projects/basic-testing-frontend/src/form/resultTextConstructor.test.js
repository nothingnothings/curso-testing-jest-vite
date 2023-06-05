import { it, expect, describe } from 'vitest';
import { resultTextConstructor } from './resultTextConstructor';

describe('resultTextConstructor', () => {
  it('should always return a string', () => {
    // ARRANGE AND ACT
    const result = resultTextConstructor();

    // ASSERT
    expect(result).toBeTypeOf('string');
  });

  it("return 'Result: undefined' upon being called with no arguments", () => {
    // ARRANGE AND ACT
    const result = resultTextConstructor();

    // ASSERT
    expect(result).toBe('Result: undefined');
  });

  it("return 'Invalid input, you must enter valid numbers.', upon receiving 'invalid' as an argument", () => {
    // ARRANGE AND ACT
    const result = resultTextConstructor('invalid');

    // ASSERT
    expect(result).toBe('Invalid input. You must enter valid numbers.');
  });

  it("return an empty string upon receiving 'no-calc' as an argument", () => {
    // ARRANGE AND ACT
    const result = resultTextConstructor('no-calc');

    // ASSERT
    expect(result).toBe('');
  });
});
